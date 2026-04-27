"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase";
import Script from "next/script";
import { CheckCircle2, MessageCircle, ExternalLink, X } from "lucide-react";

const FALLBACK_PACKAGES = [
  { label: "Basic ITR Filing – ₹999", amount: 999 },
  { label: "Standard ITR Filing – ₹1,999", amount: 1999 },
  { label: "Premium ITR Filing – ₹3,499", amount: 3499 },
];

const INDIA_STATES = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh",
  "Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka",
  "Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram",
  "Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana",
  "Tripura","Uttar Pradesh","Uttarakhand","West Bengal",
  "Andaman & Nicobar Islands","Chandigarh","Dadra & Nagar Haveli and Daman & Diu",
  "Delhi","Jammu & Kashmir","Ladakh","Lakshadweep","Puducherry",
];

export interface Feature { icon: string; text: string; }

export interface IncomeTaxFilingHeroProps {
  heading?: string;
  headingHighlight?: string;
  description?: string;
  features?: Feature[];
  buttonText?: string;
}

export default function IncomeTaxFilingHero({
  heading = "Income Tax",
  headingHighlight = "E-Filing",
  description = "File your Income Tax Return accurately and on time with expert CA support. Maximize refunds and stay compliant with India's tax laws.",
  features = [],
  buttonText,
}: IncomeTaxFilingHeroProps) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const [countdown, setCountdown] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pricingPackages] = useState(FALLBACK_PACKAGES);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_no: "",
    pan: "",
    state_ut: INDIA_STATES[0],
    package: FALLBACK_PACKAGES[0]!.label,
  });

  useEffect(() => {
    const checkUser = async () => {
      try {
        const { data } = await supabase.auth.getUser();
        if (data?.user) {
          const user = data.user;
          setIsLoggedIn(true);
          const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single();
          setFormData(prev => ({
            ...prev,
            email: user.email || "",
            name: profile?.full_name || user.user_metadata?.full_name || "",
            phone_no: profile?.phone || user.user_metadata?.phone || "",
          }));
        }
      } catch (err) { console.error("Auth check failed", err); }
    };
    checkUser();
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countdown > 0 && showSuccessModal) {
      timer = setTimeout(() => setCountdown(c => c - 1), 1000);
    } else if (countdown === 0 && showSuccessModal && whatsappUrl) {
      window.open(whatsappUrl, "_blank");
    }
    return () => clearTimeout(timer);
  }, [countdown, showSuccessModal, whatsappUrl]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const selectedPkg = (pricingPackages.find(p => p.label === formData.package) || pricingPackages[0])!;

  const handlePayment = async () => {
    setLoading(true);
    const amount = selectedPkg.amount;
    try {
      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, packageName: "Income Tax E-Filing" }),
      });
      if (!res.ok) throw new Error("Order creation failed");
      const { orderId } = await res.json();

      if (typeof (window as any).Razorpay === "undefined") {
        alert("Razorpay SDK not loaded. Please refresh.");
        setLoading(false);
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: amount * 100,
        currency: "INR",
        name: "DoStartup",
        description: `Income Tax E-Filing – ${selectedPkg.label}`,
        order_id: orderId,
        handler: async (response: any) => {
          try {
            const finalEmail = formData.email || "noemail@incometax.com";
            const { error: dbError } = await supabase.from("income_tax_filing").insert({
              name: formData.name,
              email: finalEmail,
              phone_no: formData.phone_no,
              pan: formData.pan.toUpperCase(),
              state_ut: formData.state_ut,
              amount,
              payment_id: response.razorpay_payment_id,
              payment_state: "paid",
            });
            if (dbError) console.error("DB Error:", dbError);

            const msg = `🔔 *New Income Tax E-Filing*\n\n👤 *Name:* ${formData.name}\n📞 *Phone:* ${formData.phone_no}\n📧 *Email:* ${finalEmail}\n🪪 *PAN:* ${formData.pan.toUpperCase()}\n📍 *State/UT:* ${formData.state_ut}\n📦 *Package:* ${selectedPkg.label}\n💰 *Payment ID:* ${response.razorpay_payment_id}\n\nPlease proceed with my Income Tax Return filing.`;
            const waUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919999644807"}?text=${encodeURIComponent(msg)}`;
            setWhatsappUrl(waUrl);
            setShowSuccessModal(true);
            setCountdown(5);

            fetch("/api/send-confirmation", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name: formData.name, email: formData.email, phone: formData.phone_no,
                service: "Income Tax E-Filing", paymentId: response.razorpay_payment_id,
                details: { "PAN": formData.pan.toUpperCase(), "State/UT": formData.state_ut, "Package": selectedPkg.label },
              }),
            }).catch(console.error);
          } catch (err) { console.error("Handler error:", err); }
          finally { setLoading(false); }
        },
        prefill: { name: formData.name, email: formData.email, contact: formData.phone_no },
        theme: { color: "#C15F3C" },
        modal: { ondismiss: () => setLoading(false) },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Payment error:", err);
      alert("Payment initiation failed. Please try again.");
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (!formData.name || !formData.phone_no || (!isLoggedIn && !formData.email)) {
        alert("Please fill all required fields."); return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!formData.pan || formData.pan.length !== 10) {
        alert("Please enter a valid 10-character PAN."); return;
      }
      setStep(3);
    }
  };

  return (
    <div className="bg-[#F4F3EE]">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* LEFT */}
          <div className="flex-1 bg-white rounded-2xl shadow-sm border border-[#E5E2DA] p-6">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-64 flex-shrink-0">
                <div className="w-full h-48 bg-gradient-to-br from-[#C15F3C] to-[#A94E30] rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl text-center px-4">Income Tax E-Filing</span>
                </div>
                <div className="mt-4 space-y-2">
                  {["ITR-1 to ITR-7", "Old & New Regime", "Refund Tracking"].map(item => (
                    <p key={item} className="text-sm text-[#6F6B63] hover:text-[#C15F3C] cursor-pointer">{item}</p>
                  ))}
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 bg-white border border-[#E5E2DA] rounded-full px-3 py-1">
                  <div className="w-2 h-2 bg-[#C15F3C] rounded-full animate-pulse" />
                  <span className="text-xs font-medium text-[#C15F3C]">CA-ASSISTED FILING</span>
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-semibold text-[#2F2E2B] leading-tight">
                    {heading}<br /><span className="text-[#C15F3C]">{headingHighlight}</span>
                  </h1>
                  <p className="text-sm text-[#6F6B63] leading-relaxed mt-3">{description}</p>
                </div>
                {features.length > 0 && (
                  <div className="bg-[#F9F8F6] border border-[#E5E2DA] rounded-2xl p-6">
                    <span className="inline-block bg-[#C15F3C] text-white text-[10px] font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider">Key Features</span>
                    <div className="space-y-3">
                      {features.map((f, i) => (
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
                )}
              </div>
            </div>
          </div>

          {/* RIGHT – FORM */}
          <div id="registration-form" className="lg:w-96 bg-white rounded-2xl shadow-sm border border-[#E5E2DA] overflow-hidden self-start">
            <div className="bg-gradient-to-r from-[#C15F3C] to-[#A94E30] px-6 py-4">
              <h2 className="text-lg font-semibold text-white">File Your ITR</h2>
              <p className="text-sm text-[#F4F3EE]">Quick, accurate &amp; CA-assisted filing</p>
            </div>

            {/* Step indicator */}
            <div className="flex items-center gap-0 px-6 pt-4">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center flex-1">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all ${step >= s ? "bg-[#C15F3C] border-[#C15F3C] text-white" : "border-[#E5E2DA] text-[#B1ADA1]"}`}>
                    {step > s ? "✓" : s}
                  </div>
                  {s < 3 && <div className={`flex-1 h-0.5 mx-1 transition-all ${step > s ? "bg-[#C15F3C]" : "bg-[#E5E2DA]"}`} />}
                </div>
              ))}
            </div>
            <p className="px-6 pt-1 pb-0 text-[11px] text-[#B1ADA1]">
              {step === 1 ? "Step 1 of 3 – Contact Details" : step === 2 ? "Step 2 of 3 – PAN & State" : "Step 3 of 3 – Review & Pay"}
            </p>

            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                      <div>
                        <label className="block text-xs text-[#6F6B63] mb-1">Full Name *</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your legal name" className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] bg-white" />
                      </div>
                      {!isLoggedIn && (
                        <div>
                          <label className="block text-xs text-[#6F6B63] mb-1">Email *</label>
                          <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="hello@example.com" className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] bg-white" />
                        </div>
                      )}
                      <div>
                        <label className="block text-xs text-[#6F6B63] mb-1">Phone Number *</label>
                        <input type="tel" name="phone_no" value={formData.phone_no} onChange={handleChange} required maxLength={10} placeholder="10-digit mobile" onInput={(e: any) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, ""); }} className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] bg-white" />
                      </div>
                      <button type="submit" className="w-full bg-[#C15F3C] text-white font-semibold py-3 rounded-lg text-sm hover:bg-[#A94E30] transition">Continue →</button>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                      <div>
                        <label className="block text-xs text-[#6F6B63] mb-1">PAN Number *</label>
                        <input type="text" name="pan" value={formData.pan} onChange={handleChange} required maxLength={10} placeholder="ABCDE1234F" className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] uppercase focus:outline-none focus:ring-1 focus:ring-[#C15F3C] bg-white" />
                      </div>
                      <div>
                        <label className="block text-xs text-[#6F6B63] mb-1">State / UT *</label>
                        <select name="state_ut" value={formData.state_ut} onChange={handleChange} className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] bg-white appearance-none cursor-pointer">
                          {INDIA_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs text-[#6F6B63] mb-1">Select Package *</label>
                        <select name="package" value={formData.package} onChange={handleChange} className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] bg-white appearance-none cursor-pointer">
                          {pricingPackages.map(p => <option key={p.label} value={p.label}>{p.label}</option>)}
                        </select>
                      </div>
                      <div className="flex gap-2 pt-2">
                        <button type="button" onClick={() => setStep(1)} className="flex-1 bg-white text-[#6F6B63] border border-[#E5E2DA] font-semibold py-3 rounded-lg text-sm hover:bg-[#F9F8F6]">Back</button>
                        <button type="submit" className="flex-[2] bg-[#C15F3C] text-white font-semibold py-3 rounded-lg text-sm hover:bg-[#A94E30]">Review &amp; Pay →</button>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div key="s3" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="space-y-4">
                      <div className="bg-[#F9F8F6] rounded-xl p-4 border border-[#E5E2DA] space-y-2 text-sm">
                        {[["Name", formData.name], ["Email", formData.email], ["Phone", formData.phone_no], ["PAN", formData.pan.toUpperCase()], ["State/UT", formData.state_ut]].map(([l, v]) => (
                          <div key={l} className="flex justify-between">
                            <span className="text-[#6F6B63]">{l}</span>
                            <span className="font-semibold text-[#2F2E2B] break-all text-right max-w-[55%]">{v}</span>
                          </div>
                        ))}
                      </div>
                      <div className="bg-[#F9F8F6] rounded-xl p-4 border border-[#E5E2DA] flex justify-between items-center">
                        <span className="text-[#6F6B63] text-sm">Amount</span>
                        <span className="text-2xl font-bold text-[#2F2E2B]">₹{selectedPkg.amount.toLocaleString()}</span>
                      </div>
                      <div className="flex gap-3">
                        <button type="button" onClick={() => setStep(2)} className="flex-1 bg-white text-[#6F6B63] border border-[#E5E2DA] font-semibold py-3 rounded-lg text-sm">Edit</button>
                        <button type="button" onClick={handlePayment} disabled={loading} className="flex-[2] bg-[#C15F3C] hover:bg-[#A94E30] text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition">
                          {loading ? (
                            <><svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Processing...</>
                          ) : <>{buttonText || `Pay ₹${selectedPkg.amount.toLocaleString()}`} →</>}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex items-center justify-center gap-2 text-xs text-[#B1ADA1] pt-1">
                  <svg className="w-4 h-4 text-[#C15F3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  Secure Gateway · CA Verified
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* SUCCESS MODAL */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden">
              <div className="bg-gradient-to-r from-[#C15F3C] to-[#A94E30] p-8 text-center relative">
                <button onClick={() => setShowSuccessModal(false)} className="absolute top-4 right-4 text-white/80 hover:text-white"><X className="w-6 h-6" /></button>
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <CheckCircle2 className="w-12 h-12 text-[#C15F3C]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">Payment Successful!</h3>
              </div>
              <div className="p-8 space-y-6">
                <div className="text-center space-y-2">
                  <p className="text-[#2F2E2B] font-medium text-lg">Thank you, {formData.name}!</p>
                  <p className="text-[#6F6B63] text-sm">Your ITR filing has been initiated. Our CA team will reach out shortly.</p>
                </div>
                <div className="bg-[#F9F8F6] rounded-2xl p-4 border border-[#E5E2DA] space-y-2 text-xs">
                  <div className="flex justify-between"><span className="text-[#6F6B63]">Service</span><span className="font-semibold">Income Tax E-Filing</span></div>
                  <div className="flex justify-between"><span className="text-[#6F6B63]">Package</span><span className="font-semibold">{selectedPkg.label.split("–")[0]?.trim() ?? selectedPkg.label}</span></div>
                  <div className="flex justify-between"><span className="text-[#6F6B63]">Status</span><span className="text-[#10B981] font-bold">PAID</span></div>
                </div>
                <button onClick={() => window.open(whatsappUrl, "_blank")} className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" /> Complete via WhatsApp <ExternalLink className="w-4 h-4 opacity-70" />
                </button>
                <p className="text-xs text-[#6F6B63] text-center flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Redirecting in <span className="font-bold text-[#C15F3C]">{countdown}s</span>...
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
