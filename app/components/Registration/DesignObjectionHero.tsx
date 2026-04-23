"use client";
import { useState, useEffect } from "react";
import { handleNeedHelpWhatsApp } from "@/lib/form-utils";
import { supabase } from "@/lib/supabase";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, MessageCircle, ExternalLink, X } from "lucide-react";

const COCKPIT_BASE = process.env.NEXT_PUBLIC_COCKPIT_URL;
const COCKPIT_TOKEN = process.env.NEXT_PUBLIC_COCKPIT_API_KEY;
const FALLBACK_PACKAGES = [
  { label: "Reply to Design Objection – ₹4,999", amount: 4999 },
];

export type Feature = { icon: string; text: string };

export type DesignObjectionHeroProps = {
  heading?: string;
  headingHighlight?: string;
  description?: string;
  features?: Feature[];
  buttonText?: string;
};

export default function DesignObjectionHero({
  heading,
  headingHighlight,
  description,
  features,
  buttonText,
}: DesignObjectionHeroProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const [countdown, setCountdown] = useState(0);
  const [pricingPackages, setPricingPackages] = useState(FALLBACK_PACKAGES);

  const [formData, setFormData] = useState({
    name: "",
    phone_no: "",
    email: "",
    design_service_type: FALLBACK_PACKAGES[0]?.label || "",
  });

  useEffect(() => {
    const checkUser = async () => {
      try {
        const { data: { user }, error } = await supabase.auth.getUser();
        if (error) throw error;
        setIsLoggedIn(!!user);
        if (user) {
          setFormData(prev => ({ ...prev, email: user.email || "" }));
        }
      } catch (err: any) {
        console.warn("Auth check skipped:", err.message);
      }
    };
    checkUser();

    const fetchPricing = async () => {
      try {
        const filter = JSON.stringify({ category: { "$regex": "^design-objection$", "$options": "i" } });
        const res = await fetch(
          `${COCKPIT_BASE}/api/content/items/pricingCard?token=${COCKPIT_TOKEN}&filter=${encodeURIComponent(filter)}`,
          { cache: "no-store" }
        );
        const data = await res.json();
        const entries: any[] = Array.isArray(data) ? data : (data?.entries || []);
        const plans = entries.filter((e: any) => e.price).map((e: any) => ({ label: e.title || "Standard Plan", amount: Number(e.price) }));
        if (plans.length > 0) {
          setPricingPackages(plans);
          setFormData(prev => ({ ...prev, package: plans[0]?.label || "" }));
        }
      } catch {}
    };
    fetchPricing();

    // Load Razorpay script
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showSuccessModal && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (countdown === 0 && showSuccessModal) {
      window.open(whatsappUrl, "_blank");
    }
    return () => clearTimeout(timer);
  }, [showSuccessModal, countdown, whatsappUrl]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const selectedPackage = (pricingPackages.find(p => p.label === formData.design_service_type) || pricingPackages[0] || FALLBACK_PACKAGES[0])!;

  const handlePayment = async () => {
    setLoading(true);
    const amount = selectedPackage.amount;

    try {
      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, packageName: "Design Objection Reply" }),
      });
      const { orderId } = await res.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: amount * 100,
        currency: "INR",
        name: "DoStartup",
        description: "Design Objection Reply",
        order_id: orderId,
        handler: async function (response: any) {
          let user = null;
          try {
            const { data: { user: currentUser } } = await supabase.auth.getUser();
            user = currentUser ?? null;
          } catch (e) {
            console.warn("Auth check in payment handler failed");
          }

          // Update profile
          try {
            const finalEmail = user?.email || formData.email;
            const userName = user?.user_metadata?.full_name || formData.name || finalEmail?.split("@")[0];
            
            if (finalEmail) {
              const profileData: any = {
                name: userName,
                email: finalEmail,
                phone_no: formData.phone_no,
                updated_at: new Date().toISOString()
              };
              if (user?.id) profileData.id = user.id;
              await supabase.from('profiles').upsert(profileData, { onConflict: 'email' });
            }
          } catch (profileErr: any) {
            console.error("Profile saving error:", profileErr.message);
          }

          // WhatsApp Msg
          const whatsappMsg =
            `🔔 *New Design Objection Reply*\n\n` +
            `👤 *Name:* ${formData.name}\n` +
            `📞 *Phone:* ${formData.phone_no}\n` +
            `📧 *Email:* ${formData.email || "Not provided"}\n` +
            `📑 *Service Type:* ${selectedPackage.label}\n` +
            `💰 *Payment ID:* ${response.razorpay_payment_id}\n\n` +
            `I have successfully completed the payment. Please proceed with my objection reply.`;

          const waUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919999644807"}?text=${encodeURIComponent(whatsappMsg)}`;

          // Save to Supabase
          try {
            const finalEmail = user?.email || formData.email || "noemail@design.com";
            const { error: dbError } = await supabase.from("design_objection").insert({
              name: formData.name,
              email: finalEmail,
              phone_no: formData.phone_no,
              design_service_type: selectedPackage.label,
              amount: amount,
              payment_id: response.razorpay_payment_id,
              payment_state: "paid",
            });
            if (dbError) console.error("DB insert error:", dbError);
          } catch (dbErr) {
            console.error("Failed to insert design objection record:", dbErr);
          }

          // Email
          fetch("/api/send-confirmation", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              phone: formData.phone_no,
              service: "Design Objection Reply",
              paymentId: response.razorpay_payment_id,
              details: {
                "Service Type": selectedPackage.label,
              },
            }),
          }).catch(err => console.error("Confirmation email failed", err));

          setWhatsappUrl(waUrl);
          setCountdown(5);
          setShowSuccessModal(true);
          setPaymentSuccess(true);
          setLoading(false);
          setStep(0);
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone_no,
        },
        theme: { color: "#C15F3C" },
        modal: { ondismiss: () => setLoading(false) },
      };

      const rzp = (window as any).Razorpay ? new (window as any).Razorpay(options) : null;
      if (rzp) rzp.open();
      else alert("Razorpay script not loaded. Please refresh.");
    } catch (err: any) {
      console.error("Payment error:", err);
      alert("Something went wrong with the payment.");
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (!formData.name || !formData.phone_no || (!isLoggedIn && !formData.email)) {
        alert("Please fill in all required fields");
        return;
      }
      setStep(2);
    }
  };

  return (
    <div className="bg-[#F4F3EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* LEFT SECTION */}
          <div className="flex-1 bg-white rounded-2xl shadow-sm border border-[#E5E2DA] p-6">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-64 flex-shrink-0">
                <div className="w-full h-48 bg-gradient-to-br from-[#C15F3C] to-[#A94E30] rounded-xl border border-[#E5E2DA] flex items-center justify-center">
                  <span className="text-white font-bold text-xl text-center px-4">Design Objection</span>
                </div>
                <div className="mt-4 space-y-2">
                   {["Reply Drafting", "Legal Research", "Expert Advice"].map((item) => (
                    <p key={item} className="text-sm text-[#6F6B63] hover:text-[#C15F3C] cursor-pointer">
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-semibold text-[#2F2E2B] leading-tight">
                    {heading}<br />
                    <span className="text-[#C15F3C]">{headingHighlight}</span>
                  </h1>
                  <p className="text-sm text-[#6F6B63] mt-3">{description}</p>
                </div>

                <div className="bg-[#F9F8F6] border border-[#E5E2DA] rounded-2xl p-6">
                   <div className="space-y-3">
                    {features?.map((f, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#C15F3C] border border-[#E5E2DA]">✅</div>
                        <span className="text-sm font-medium text-[#2F2E2B]">{f.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div id="registration-form" className="lg:w-96 bg-white rounded-2xl shadow-sm border border-[#E5E2DA] overflow-hidden self-start">
            <div className="bg-gradient-to-r from-[#C15F3C] to-[#A94E30] px-6 py-4 text-white">
              <h2 className="text-lg font-semibold">File Your Reply</h2>
              <p className="text-sm opacity-80">Expert handling of Design Objections</p>
            </div>

            <div className="p-6 space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                {step === 1 && (
                  <div className="space-y-4">
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Name" className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-[#C15F3C] outline-none" />
                    {!isLoggedIn && <input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="Email" className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-[#C15F3C] outline-none" />}
                    <input type="tel" name="phone_no" value={formData.phone_no} onChange={handleInputChange} required maxLength={10} placeholder="Phone" className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-[#C15F3C] outline-none" />
                    <button type="submit" className="w-full bg-[#C15F3C] text-white py-3 rounded-lg font-semibold hover:bg-[#A94E30]">Continue &rarr;</button>
                  </div>
                )}
                {step === 2 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs text-[#6F6B63] mb-1">Select Service Type *</label>
                      <select name="design_service_type" value={formData.design_service_type} onChange={handleInputChange} required className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] focus:ring-1 focus:ring-[#C15F3C] bg-white appearance-none cursor-pointer">
                        {pricingPackages.map((p) => (
                          <option key={p.label} value={p.label}>{p.label}</option>
                        ))}
                      </select>
                    </div>
                    <div className="flex gap-2 pt-2">
                       <button type="button" onClick={() => setStep(1)} className="flex-1 bg-white border border-[#E5E2DA] py-3 rounded-lg">Back</button>
                       <button type="button" onClick={() => setStep(3)} className="flex-[2] bg-[#C15F3C] text-white py-3 rounded-lg font-semibold hover:bg-[#A94E30]">Review &amp; Pay</button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* REVIEW & SUCCESS MODALS (Standard Logic) */}
      <AnimatePresence>
        {step === 3 && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden p-8 space-y-6">
              <h3 className="text-xl font-bold">Review Details</h3>
              <div className="space-y-2 text-sm text-black">
                <p><b>Name:</b> {formData.name}</p>
                <p><b>Email:</b> {formData.email}</p>
                <p><b>Service:</b> {formData.design_service_type}</p>
                <p><b>Amount:</b> ₹{selectedPackage.amount}</p>
              </div>
              <button onClick={handlePayment} disabled={loading} className="w-full bg-[#C15F3C] text-white py-4 rounded-2xl font-bold shadow-lg">
                {loading ? "Processing..." : `Pay ₹${selectedPackage.amount} &rarr;`}
              </button>
              <button onClick={() => setStep(2)} className="w-full text-sm text-gray-500">Edit Details</button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden">
              <div className="bg-gradient-to-r from-[#C15F3C] to-[#A94E30] p-8 text-center relative">
                <button onClick={() => { setShowSuccessModal(false); setCountdown(-1); }} className="absolute top-4 right-4 text-white/80 hover:text-white transition"><X className="w-6 h-6" /></button>
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <CheckCircle2 className="w-12 h-12 text-[#C15F3C]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">Reply Filed!</h3>
              </div>
              <div className="p-8 space-y-6 text-center">
                <div className="space-y-2">
                  <p className="text-[#2F2E2B] font-medium text-lg">Thank you, {formData.name}!</p>
                  <p className="text-[#6F6B63] text-sm leading-relaxed">
                    Your design objection request is being processed.
                  </p>
                </div>
                <div className="bg-[#F9F8F6] rounded-2xl p-4 border border-[#E5E2DA] space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#6F6B63]">Service</span>
                    <span className="font-semibold text-[#2F2E2B]">Design Objection Reply</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[#6F6B63]">Status</span>
                    <span className="text-[#10B981] font-bold uppercase">Paid</span>
                  </div>
                </div>
                <div className="pt-2">
                   <button onClick={() => window.open(whatsappUrl, "_blank")} className="w-full bg-[#25D366] text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-green-200">
                    <MessageCircle className="w-5 h-5" />
                    Complete via WhatsApp
                  </button>
                  <div className="mt-4">
                    <p className="text-xs text-[#6F6B63] flex items-center justify-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      Redirecting in <span className="font-bold text-[#C15F3C]">{countdown}s</span>...
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
