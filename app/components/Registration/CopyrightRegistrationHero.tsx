"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase";
import Script from "next/script";

const FALLBACK_PACKAGES = [
  { label: "Literary/Dramatic Work – ₹4,999", amount: 4999 },
  { label: "Artistic Work – ₹4,999", amount: 4999 },
  { label: "Software/Source Code – ₹9,999", amount: 9999 },
];

interface Feature {
  icon: string;
  text: string;
}

interface CopyrightRegistrationHeroProps {
  heading?: string;
  headingHighlight?: string;
  description?: string;
  features?: Feature[];
}

export default function CopyrightRegistrationHero({
  heading = "Copyright",
  headingHighlight = "Registration",
  description = "Protect your creative work with official copyright registration. Secure your intellectual property today.",
  features = [],
}: CopyrightRegistrationHeroProps) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const [countdown, setCountdown] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone_no: "",
    email: "",
    copyright_filing_type: FALLBACK_PACKAGES[0]?.label || "",
    title_of_work: "",
    description: "",
  });

  useEffect(() => {
    const checkUser = async () => {
      try {
        const { data } = await supabase.auth.getUser();
        if (data?.user) {
          const user = data.user;
          setIsLoggedIn(true);

          // Fetch additional profile data
          const { data: profileData } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', user.id)
            .single();

          setFormData(prev => ({ 
            ...prev, 
            email: user.email || "", 
            name: profileData?.full_name || user.user_metadata?.full_name || user.user_metadata?.name || "",
            phone_no: profileData?.phone || user.phone || user.user_metadata?.phone || ""
          }));
        }
      } catch (err) {
        console.error("Auth check failed", err);
      }
    };
    checkUser();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const selectedPackage = FALLBACK_PACKAGES.find(p => p.label === formData.copyright_filing_type) || FALLBACK_PACKAGES[0];

  const handlePayment = async () => {
    if (!selectedPackage) return;
    setLoading(true);
    const amount = selectedPackage.amount;

    try {
      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, packageName: "Copyright Registration" }),
      });
      
      if (!res.ok) throw new Error("Failed to create Razorpay order");
      const { orderId } = await res.json();

      if (typeof (window as any).Razorpay === "undefined") {
        alert("Razorpay SDK failed to load. Please check your internet and refresh.");
        setLoading(false);
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: amount * 100, // Amount in paise
        currency: "INR",
        name: "DoStartup",
        description: `Copyright Registration - ${selectedPackage.label}`,
        order_id: orderId,
        handler: async (response: any) => {
          try {
            const finalEmail = formData.email || "noemail@copyright.com";
            
            // Save to Supabase
            const { error: dbError } = await supabase.from("copyright_registration").insert({
              name: formData.name,
              email: finalEmail,
              phone_no: formData.phone_no,
              copyright_filing_type: selectedPackage.label,
              title_of_work: formData.title_of_work,
              description: formData.description,
              amount: amount,
              payment_id: response.razorpay_payment_id,
              payment_state: "paid",
            });

            if (dbError) console.error("Supabase Error:", dbError);

            // WhatsApp Message
            const whatsappMsg = `🔔 *New Copyright Registration*\n\n👤 *Name:* ${formData.name}\n📞 *Phone:* ${formData.phone_no}\n📧 *Email:* ${finalEmail}\n📑 *Work Type:* ${selectedPackage.label}\n📝 *Title:* ${formData.title_of_work}\n💰 *Payment ID:* ${response.razorpay_payment_id}\n\nI have successfully completed the payment. Please proceed with my copyright filing.`;
            const waUrl = `https://wa.me/919999644807?text=${encodeURIComponent(whatsappMsg)}`;
            
            setWhatsappUrl(waUrl);
            setShowSuccessModal(true);
            setCountdown(5);
          } catch (err) {
            console.error("Payment Success Error:", err);
          } finally {
            setLoading(false);
          }
        },
        prefill: { name: formData.name, email: formData.email, contact: formData.phone_no },
        theme: { color: "#C15F3C" },
        modal: { ondismiss: () => setLoading(false) },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (err: any) {
      console.error("Payment Error:", err);
      alert("Payment initiation failed. Please try again.");
      setLoading(false);
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countdown > 0 && showSuccessModal) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (countdown === 0 && showSuccessModal && whatsappUrl) {
      window.open(whatsappUrl, "_blank");
    }
    return () => clearTimeout(timer);
  }, [countdown, showSuccessModal, whatsappUrl]);

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-[#F4F3EE]">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
          <span className="inline-block px-4 py-1.5 bg-white border border-[#E5E2DA] rounded-full text-[#C15F3C] text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
            IP Protection Experts
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold text-[#2F2E2B] leading-[1.1] mb-6">
            {heading} <span className="text-[#C15F3C] italic">{headingHighlight}</span>
          </h1>
          <p className="text-lg text-[#6F6B63] mb-8 leading-relaxed max-w-xl">{description}</p>

          <div className="bg-white rounded-3xl p-8 border border-[#E5E2DA] shadow-sm">
            <h3 className="text-xs font-bold text-[#B1ADA1] uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-[#E5E2DA]"></span> Key Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              {features.map((f: any, i: number) => (
                <div key={i} className="flex items-center gap-3 text-sm text-[#2F2E2B] font-medium">
                  <span className="text-[#C15F3C] text-lg">{f.icon}</span>
                  {f.text}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="relative">
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-[#E5E2DA] relative z-10">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold text-[#2F2E2B]">Start Registration</h2>
              <div className="flex gap-1.5">
                {[1, 2, 3].map((s) => (
                  <div key={s} className={`h-1.5 rounded-full transition-all duration-300 ${step === s ? "w-8 bg-[#C15F3C]" : "w-2 bg-[#E5E2DA]"}`} />
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                  <div>
                    <label className="block text-xs text-[#6F6B63] mb-1">Full Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Legal Name" className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] focus:ring-1 focus:ring-[#C15F3C] bg-white outline-none" />
                  </div>
                  {!isLoggedIn && (
                    <div>
                      <label className="block text-xs text-[#6F6B63] mb-1">Email Address *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="hello@example.com" className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] focus:ring-1 focus:ring-[#C15F3C] bg-white outline-none" />
                    </div>
                  )}
                  <div>
                    <label className="block text-xs text-[#6F6B63] mb-1">Phone Number *</label>
                    <input type="tel" name="phone_no" value={formData.phone_no} onChange={handleInputChange} required maxLength={10} placeholder="10-digit mobile number" className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] focus:ring-1 focus:ring-[#C15F3C] bg-white outline-none" />
                  </div>
                  <button onClick={() => setStep(2)} className="w-full bg-[#C15F3C] text-white font-semibold py-3 rounded-lg text-sm hover:bg-[#A94E30] transition shadow-sm mt-2 flex items-center justify-center gap-2">
                    Next Step &rarr;
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                  <div>
                    <label className="block text-xs text-[#6F6B63] mb-1">Type of Work *</label>
                    <select name="copyright_filing_type" value={formData.copyright_filing_type} onChange={handleInputChange} className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] focus:ring-1 focus:ring-[#C15F3C] bg-white appearance-none cursor-pointer">
                      {FALLBACK_PACKAGES.map(p => <option key={p.label} value={p.label}>{p.label}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-[#6F6B63] mb-1">Title of Work *</label>
                    <input type="text" name="title_of_work" value={formData.title_of_work} onChange={handleInputChange} required placeholder="e.g. My Awesome Novel" className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] focus:ring-1 focus:ring-[#C15F3C] bg-white outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs text-[#6F6B63] mb-1">Description (Brief) *</label>
                    <textarea name="description" value={formData.description} onChange={handleInputChange} required rows={3} placeholder="Tell us about your creation" className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] focus:ring-1 focus:ring-[#C15F3C] bg-white outline-none resize-none" />
                  </div>
                  <div className="flex gap-4 pt-2">
                    <button onClick={() => setStep(1)} className="flex-1 bg-white text-[#6F6B63] border border-[#E5E2DA] font-semibold py-3 rounded-lg text-sm">Back</button>
                    <button onClick={() => setStep(3)} className="flex-[2] bg-[#C15F3C] text-white font-semibold py-3 rounded-lg text-sm hover:bg-[#A94E30]">Review &amp; Pay</button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 border border-[#E5E2DA] shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4 text-sm">
                        <h4 className="text-[10px] font-bold text-[#B1ADA1] uppercase tracking-wider">Contact</h4>
                        <p className="font-bold text-black">{formData.name}</p>
                        <p className="text-black/80 break-all">{formData.email}</p>
                        <p className="text-black/80">{formData.phone_no}</p>
                      </div>
                      <div className="space-y-4 text-sm border-l border-[#E5E2DA] pl-6">
                        <h4 className="text-[10px] font-bold text-[#B1ADA1] uppercase tracking-wider">Project</h4>
                        <p className="font-bold text-black">{formData.title_of_work}</p>
                        <p className="font-bold text-black">{selectedPackage?.label?.split('–')[0]}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#F9F8F6] rounded-2xl p-6 border border-[#E5E2DA] flex justify-between items-center">
                    <p className="text-2xl font-bold text-black">₹{selectedPackage?.amount?.toLocaleString()}</p>
                    <span className="text-[10px] text-[#A94E30] font-bold uppercase">Guaranteed</span>
                  </div>
                  <div className="flex gap-4">
                    <button onClick={() => setStep(2)} className="flex-1 bg-white text-[#6F6B63] border border-[#E5E2DA] font-semibold py-3 rounded-lg text-sm">Back</button>
                    <button onClick={handlePayment} disabled={loading} className="flex-[2] bg-[#C15F3C] text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2">
                      {loading ? "Initializing..." : `Pay Now &rarr;`}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showSuccessModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} className="bg-white rounded-[3rem] p-12 max-w-lg w-full text-center shadow-2xl relative">
              <button 
                onClick={() => { setShowSuccessModal(false); setCountdown(-1); }}
                className="absolute top-8 right-8 text-[#B1ADA1] hover:text-[#2F2E2B] transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="w-24 h-24 bg-[#E8F5E9] text-[#2E7D32] rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-[#2F2E2B] mb-4">Payment Successful!</h3>
              <p className="text-[#6F6B63] mb-10 leading-relaxed">
                Your copyright registration for <span className="text-[#C15F3C] font-bold">{formData.title_of_work}</span> is confirmed. Redirecting to WhatsApp in <span className="font-bold text-[#2F2E2B]">{countdown}s</span>...
              </p>
              <button onClick={() => window.open(whatsappUrl, "_blank")} className="w-full bg-[#25D366] text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-green-200">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412 0 6.556-5.338 11.892-11.893 11.892-1.997 0-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.589.943 3.513 1.441 5.465 1.441 5.454 0 9.893-4.439 9.893-9.893 0-2.641-1.029-5.123-2.898-6.993-1.868-1.869-4.35-2.898-6.992-2.898-5.454 0-9.893 4.439-9.893 9.893 0 2.102.551 4.148 1.594 5.928l-.103.164-1.053 3.847 3.947-1.034.141-.083z" /></svg>
                Continue to WhatsApp
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
