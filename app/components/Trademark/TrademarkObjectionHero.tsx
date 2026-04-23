"use client";
import { useState, useEffect } from "react";
import { handleNeedHelpWhatsApp } from "@/lib/form-utils";
import { supabase } from "@/lib/supabase";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, MessageCircle, ExternalLink, X } from "lucide-react";

export type Feature = { icon: string; text: string };

export type TrademarkObjectionHeroProps = {
  heading?: string;
  headingHighlight?: string;
  description?: string;
  features?: Feature[];
  buttonText?: string;
};

const TRADEMARK_CLASSES = [
  "Class 1 – Chemicals",
  "Class 2 – Paints & Varnishes",
  "Class 3 – Cosmetics & Cleaning",
  "Class 4 – Lubricants & Fuels",
  "Class 5 – Pharmaceuticals",
  "Class 6 – Metal Goods",
  "Class 7 – Machinery",
  "Class 8 – Hand Tools",
  "Class 9 – Electronics & Software",
  "Class 10 – Medical Devices",
  "Class 11 – Lighting & Appliances",
  "Class 12 – Vehicles",
  "Class 13 – Firearms",
  "Class 14 – Jewellery & Watches",
  "Class 15 – Musical Instruments",
  "Class 16 – Paper & Stationery",
  "Class 17 – Rubber & Plastics",
  "Class 18 – Leather Goods & Bags",
  "Class 19 – Building Materials",
  "Class 20 – Furniture",
  "Class 21 – Household Utensils",
  "Class 22 – Ropes & Fibers",
  "Class 23 – Yarns & Threads",
  "Class 24 – Textiles & Fabrics",
  "Class 25 – Clothing & Footwear",
  "Class 26 – Lace & Embroidery",
  "Class 27 – Carpets & Floor Coverings",
  "Class 28 – Games & Toys",
  "Class 29 – Meat, Fish & Dairy",
  "Class 30 – Staple Foods",
  "Class 31 – Agricultural Products",
  "Class 32 – Beers & Non-Alcoholic Drinks",
  "Class 33 – Alcoholic Beverages",
  "Class 34 – Tobacco",
  "Class 35 – Advertising & Business",
  "Class 36 – Insurance & Finance",
  "Class 37 – Construction & Repair",
  "Class 38 – Telecommunications",
  "Class 39 – Transport & Travel",
  "Class 40 – Treatment of Materials",
  "Class 41 – Education & Entertainment",
  "Class 42 – IT & Software Services",
  "Class 43 – Food & Drink Services",
  "Class 44 – Medical & Beauty Services",
  "Class 45 – Legal & Security Services",
];

const COCKPIT_BASE = process.env.NEXT_PUBLIC_COCKPIT_URL;
const COCKPIT_TOKEN = process.env.NEXT_PUBLIC_COCKPIT_API_KEY;

const FALLBACK_PACKAGES = [
  { label: "Individual / MSME – ₹1,499", amount: 1499 },
  { label: "Company / LLP – ₹2,999", amount: 2999 },
];

export default function TrademarkObjectionHero({
  heading = "Trademark Objection",
  headingHighlight = "Reply & Compliance",
  description = "Get expert assistance in drafting and filing a professional reply to trademark objections. Protect your brand from abandonment.",
  features,
  buttonText,
}: TrademarkObjectionHeroProps) {
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
    phone: "",
    email: "",
    brand_name: "",
    application_number: "",
    trademark_class: TRADEMARK_CLASSES[0],
    package: FALLBACK_PACKAGES[0]?.label || "",
  });

  useEffect(() => {
    const checkUser = async () => {
      try {
        const { data: { user }, error } = await supabase.auth.getUser();
        if (error) throw error;
        setIsLoggedIn(!!user);
        if (user) setFormData(prev => ({ ...prev, email: user.email || "" }));
      } catch (err: any) {
        console.warn("Auth check skipped:", err.message);
      }
    };
    checkUser();

    const fetchPricing = async () => {
      try {
        const filter = JSON.stringify({ category: { "$regex": "^trademark-objection$", "$options": "i" } });
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

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    const handleAbortError = (event: PromiseRejectionEvent) => {
      if (event.reason?.name === "AbortError" && event.reason?.message?.includes("Lock broken")) {
        event.preventDefault();
        console.warn("Supabase Auth Lock broken - suppressed");
      }
    };
    window.addEventListener("unhandledrejection", handleAbortError);

    document.body.appendChild(script);

    return () => {
      window.removeEventListener("unhandledrejection", handleAbortError);
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showSuccessModal && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (showSuccessModal && countdown === 0 && whatsappUrl && paymentSuccess) {
      window.open(whatsappUrl, "_blank");
    }
    return () => clearTimeout(timer);
  }, [showSuccessModal, countdown, whatsappUrl, paymentSuccess]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const selectedPackage = (pricingPackages.find(p => p.label === formData.package) || pricingPackages[0] || FALLBACK_PACKAGES[0])!;

  const handlePayment = async () => {
    setLoading(true);
    const amount = selectedPackage.amount;

    try {
      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, packageName: "Trademark Objection Reply" }),
      });
      const { orderId } = await res.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: amount * 100,
        currency: "INR",
        name: "DoStartup",
        description: "Trademark Objection Reply",
        order_id: orderId,
        handler: async function (response: any) {
          let user = null;
          try {
            const { data: { user: currentUser } } = await supabase.auth.getUser();
            user = currentUser ?? null;
          } catch (e) {
            console.warn("Auth check in payment handler failed gracefully");
          }

          // Update profile
          try {
            const finalEmail = user?.email || formData.email;
            const userName = user?.user_metadata?.full_name || formData.name || finalEmail?.split("@")[0];
            if (finalEmail) {
              const profileData: any = {
                name: userName,
                email: finalEmail,
                phone: formData.phone,
                phone_no: formData.phone,
                updated_at: new Date().toISOString(),
              };
              if (user?.id) profileData.id = user.id;
              await supabase.from("profiles").upsert(profileData, { onConflict: "email" });
            }
          } catch (profileErr: any) {
            console.error("Profile saving error:", profileErr.message);
          }

          const whatsappMsg =
            `🔔 *New Trademark Objection Reply*\n\n` +
            `👤 *Name:* ${formData.name}\n` +
            `📞 *Phone:* ${formData.phone}\n` +
            `📧 *Email:* ${formData.email || "Not provided"}\n` +
            `📑 *App Number:* ${formData.application_number}\n` +
            `™️ *Brand Name:* ${formData.brand_name}\n` +
            `📋 *Class:* ${formData.trademark_class}\n` +
            `📦 *Package:* ${formData.package}\n` +
            `💰 *Payment ID:* ${response.razorpay_payment_id}\n\n` +
            `I have successfully completed the payment. Please proceed with my Trademark Objection Reply.`;

          const waUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919999644807"}?text=${encodeURIComponent(whatsappMsg)}`;

          // Save to Supabase (Table: trademar_objection)
          try {
            const finalEmail = user?.email || formData.email || "noemail@trademark.com";
            const { error: dbError } = await supabase.from("trademar_objection").insert({
              name: formData.name,
              email: finalEmail,
              phone_no: formData.phone,
              brand_name: formData.brand_name,
              application_number: formData.application_number,
              class: formData.trademark_class,
              service: "Trademark Objection Reply",
              amount: amount,
              payment_id: response.razorpay_payment_id,
              payment_state: "paid",
            });
            if (dbError) console.error("DB insert error:", dbError);
          } catch (dbErr) {
            console.error("Failed to insert Trademark Objection record:", dbErr);
          }

          // Send confirmation email
          fetch("/api/send-confirmation", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              service: "Trademark Objection Reply",
              paymentId: response.razorpay_payment_id,
              details: {
                "Application Number": formData.application_number,
                "Brand Name": formData.brand_name,
                "Class": formData.trademark_class,
                "Package": formData.package,
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
        prefill: { name: formData.name, email: formData.email, contact: formData.phone },
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
      if (!formData.name || !formData.phone || (!isLoggedIn && !formData.email)) {
        alert("Please fill in all required fields");
        return;
      }
      if (formData.phone.length !== 10) {
        alert("Please enter a valid 10-digit phone number");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!formData.brand_name || !formData.application_number || !formData.trademark_class) {
        alert("Please fill in all required fields");
        return;
      }
      setStep(3);
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
                  <span className="text-white font-bold text-xl text-center px-4">Trademark Objection</span>
                </div>
                <div className="mt-4 space-y-2">
                  {["Expert Reply Drafting", "Evidence Analysis", "Professional Consultation"].map((item) => (
                    <p key={item} className="text-sm text-[#6F6B63] hover:text-[#C15F3C] cursor-pointer">{item}</p>
                  ))}
                  <button className="text-sm text-[#C15F3C] font-medium hover:underline">Learn More →</button>
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 bg-white border border-[#E5E2DA] rounded-full px-3 py-1">
                  <div className="w-2 h-2 bg-[#C15F3C] rounded-full" />
                  <span className="text-xs font-medium text-[#C15F3C]">COMPLIANCE EXPERTS</span>
                </div>

                <div>
                  <h1 className="text-2xl sm:text-3xl font-semibold text-[#2F2E2B] leading-tight">
                    {heading}<br />
                    <span className="text-[#C15F3C]">{headingHighlight}</span>
                  </h1>
                  <p className="text-sm text-[#6F6B63] leading-relaxed mt-3">{description}</p>
                </div>

                <div className="bg-[#F9F8F6] border border-[#E5E2DA] rounded-2xl p-6">
                  <span className="inline-block bg-[#C15F3C] text-white text-[10px] font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider">Key Features</span>
                  <div className="space-y-3">
                    {(features || [
                      { text: "Professional drafting by legal experts" },
                      { text: "Review of Examination Report" },
                      { text: "Strong evidence preparation" },
                      { text: "Timely filing within 30 days" }
                    ]).map((f, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#C15F3C] border border-[#E5E2DA]">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-[#2F2E2B]">{f.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between text-sm">
                  <button className="text-[#C15F3C] hover:underline">Terms and conditions</button>
                  <button onClick={() => handleNeedHelpWhatsApp("Trademark Objection Reply")} className="text-[#C15F3C] hover:underline">Need Help?</button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR – FORM */}
          <div id="registration-form" className="lg:w-96 bg-white rounded-2xl shadow-sm border border-[#E5E2DA] overflow-hidden self-start">
            <div className="bg-gradient-to-r from-[#C15F3C] to-[#A94E30] px-6 py-4">
              <h2 className="text-lg font-semibold text-white">File Your Reply</h2>
              <p className="text-sm text-[#F4F3EE]">Avoid application abandonment</p>
            </div>

            {/* Step Indicator */}
            <div className="flex items-center gap-0 px-6 pt-4">
              {[1, 2].map((s) => (
                <div key={s} className="flex items-center flex-1">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all ${step >= s ? "bg-[#C15F3C] border-[#C15F3C] text-white" : "border-[#E5E2DA] text-[#B1ADA1]"}`}>
                    {step > s ? "✓" : s}
                  </div>
                  {s < 2 && <div className={`flex-1 h-0.5 mx-1 transition-all ${step > s ? "bg-[#C15F3C]" : "bg-[#E5E2DA]"}`} />}
                </div>
              ))}
            </div>
            <p className="px-6 pt-1 pb-0 text-[11px] text-[#B1ADA1]">
              {step === 1 ? "Step 1 of 2 – Contact Details" : "Step 2 of 2 – Objection Details"}
            </p>

            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">

                {/* STEP 1 */}
                {step === 1 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs text-[#6F6B63] mb-1">Your Name *</label>
                      <input type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Full Name"
                        className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] placeholder-[#B1ADA1] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] bg-white" />
                    </div>
                    {!isLoggedIn && (
                      <div>
                        <label className="block text-xs text-[#6F6B63] mb-1">Email *</label>
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="Email Address"
                          className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] placeholder-[#B1ADA1] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] bg-white" />
                      </div>
                    )}
                    <div>
                      <label className="block text-xs text-[#6F6B63] mb-1">Phone Number *</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required maxLength={10}
                        onInput={(e: React.FormEvent<HTMLInputElement>) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, ""); }}
                        placeholder="10-digit mobile number"
                        className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] placeholder-[#B1ADA1] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] bg-white" />
                    </div>
                    <button type="submit" className="w-full bg-[#C15F3C] text-white font-semibold py-3 rounded-lg text-sm hover:bg-[#A94E30] transition shadow-sm hover:shadow-md">
                      Continue →
                    </button>
                  </div>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs text-[#6F6B63] mb-1">Application Number *</label>
                      <input type="text" name="application_number" value={formData.application_number} onChange={handleInputChange} required placeholder="Enter App Number"
                        className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] placeholder-[#B1ADA1] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] bg-white" />
                    </div>
                    <div>
                      <label className="block text-xs text-[#6F6B63] mb-1">Brand Name *</label>
                      <input type="text" name="brand_name" value={formData.brand_name} onChange={handleInputChange} required placeholder="Enter Brand Name"
                        className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] placeholder-[#B1ADA1] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] bg-white" />
                    </div>
                    <div>
                      <label className="block text-xs text-[#6F6B63] mb-1">Trademark Class *</label>
                      <select name="trademark_class" value={formData.trademark_class} onChange={handleInputChange} required
                        className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] bg-white appearance-none cursor-pointer">
                        {TRADEMARK_CLASSES.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-[#6F6B63] mb-1">Select Package *</label>
                      <select name="package" value={formData.package} onChange={handleInputChange} required
                        className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] bg-white appearance-none cursor-pointer">
                        {pricingPackages.map(p => <option key={p.label} value={p.label}>{p.label}</option>)}
                      </select>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <button type="button" onClick={() => setStep(1)}
                        className="flex-1 bg-white text-[#6F6B63] border border-[#E5E2DA] font-semibold py-3 rounded-lg text-sm hover:bg-[#F9F8F6] transition">
                        Back
                      </button>
                      <button type="submit" className="flex-[2] bg-[#C15F3C] text-white font-semibold py-3 rounded-lg text-sm hover:bg-[#A94E30] transition">
                        Review & Pay →
                      </button>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-center gap-2 text-xs text-[#B1ADA1] pt-2">
                  <svg className="w-4 h-4 text-[#C15F3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>Secure Gateway · Instant access</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* REVIEW MODAL */}
      <AnimatePresence>
        {step === 3 && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden">
              <div className="bg-gradient-to-r from-[#C15F3C] to-[#A94E30] px-8 py-6 flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold text-white">Review Your Details</h3>
                  <p className="text-white/80 text-xs">Final check before payment</p>
                </div>
                <button onClick={() => setStep(2)} className="text-white/60 hover:text-white transition"><X className="w-6 h-6" /></button>
              </div>

              <div className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-bold text-[#B1ADA1] uppercase tracking-wider">Contact Information</h4>
                    <div className="space-y-2">
                      {[["Name", formData.name], ["Email", formData.email], ["Phone", formData.phone]].map(([label, val]) => (
                        <div key={label} className="flex flex-col text-sm">
                          <span className="text-[#6F6B63]">{label}</span>
                          <span className="font-semibold text-[#2F2E2B] break-all">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4 border-l border-[#E5E2DA] pl-6">
                    <h4 className="text-[10px] font-bold text-[#B1ADA1] uppercase tracking-wider">Objection Details</h4>
                    <div className="space-y-2">
                      {[
                        ["App No", formData.application_number],
                        ["Brand Name", formData.brand_name],
                        ["Class", formData.trademark_class],
                        ["Package", formData.package?.split("–")[0]?.trim() || ""],
                      ].map(([label, val]) => (
                        <div key={label} className="flex flex-col text-sm">
                          <span className="text-[#6F6B63]">{label}</span>
                          <span className="font-semibold text-[#2F2E2B]">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-[#F9F8F6] rounded-2xl p-6 border border-[#E5E2DA] flex justify-between items-center">
                  <div>
                    <span className="text-[#6F6B63] text-sm">Package Amount</span>
                    <p className="text-2xl font-bold text-[#2F2E2B]">₹{selectedPackage.amount.toLocaleString()} <span className="text-xs font-normal text-[#B1ADA1]">incl. taxes</span></p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button onClick={() => setStep(2)} className="flex-1 border border-[#E5E2DA] hover:bg-[#F9F8F6] text-[#6F6B63] font-bold py-4 rounded-2xl transition">Edit Details</button>
                  <button onClick={handlePayment} disabled={loading}
                    className="flex-[2] bg-[#C15F3C] hover:bg-[#A94E30] text-white font-bold py-4 rounded-2xl transition shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2">
                    {loading ? "Processing..." : `Pay ₹${selectedPackage.amount.toLocaleString()} Online →`}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* SUCCESS MODAL */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden">
              <div className="bg-gradient-to-r from-[#C15F3C] to-[#A94E30] p-8 text-center relative">
                <button onClick={() => setShowSuccessModal(false)} className="absolute top-4 right-4 text-white/80 hover:text-white transition"><X className="w-6 h-6" /></button>
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-12 h-12 text-[#C15F3C]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">Payment Successful!</h3>
              </div>
              <div className="p-8 space-y-6 text-center">
                <p className="text-[#6F6B63] text-sm">Your reply filing for brand <span className="font-bold text-[#2F2E2B]">{formData.brand_name}</span> is being processed.</p>
                <button onClick={() => window.open(whatsappUrl, "_blank")}
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Continue on WhatsApp
                </button>
                <p className="text-xs text-[#B1ADA1]">Redirecting in {countdown}s...</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
