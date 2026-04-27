"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase";
import Script from "next/script";
import { CheckCircle2, MessageCircle, ExternalLink, X, UploadCloud, FileText } from "lucide-react";

const FALLBACK_PACKAGES = [
  { label: "Basic Notice Review – ₹999", amount: 999 },
  { label: "Standard Reply Drafting – ₹2,499", amount: 2499 },
  { label: "Premium Scrutiny Support – ₹7,499", amount: 7499 },
];

export interface Feature { icon: string; text: string; }

export interface IncomeTaxNoticeHeroProps {
  heading?: string;
  headingHighlight?: string;
  description?: string;
  features?: Feature[];
  buttonText?: string;
}

export default function IncomeTaxNoticeHero({
  heading = "Income Tax",
  headingHighlight = "Notice Response",
  description = "Received a tax notice? Don't worry. Our experts will review your notice, draft a professional reply, and handle the submission to ensure your peace of mind.",
  features = [],
  buttonText,
}: IncomeTaxNoticeHeroProps) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const [countdown, setCountdown] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [pricingPackages] = useState(FALLBACK_PACKAGES);
  
  const [fileName, setFileName] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    package: FALLBACK_PACKAGES[0]!.label,
  });

  useEffect(() => {
    const checkUser = async () => {
      try {
        const { data } = await supabase.auth.getUser();
        if (data?.user) {
          const user = data.user;
          setIsLoggedIn(true);
          setUserId(user.id);
          const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single();
          setFormData(prev => ({
            ...prev,
            email: user.email || "",
            name: profile?.full_name || user.user_metadata?.full_name || "",
            phone: profile?.phone || user.user_metadata?.phone || "",
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    if (file) setFileName(file.name);
  };

  const selectedPkg = (pricingPackages.find(p => p.label === formData.package) || pricingPackages[0])!;

  const handlePayment = async () => {
    setLoading(true);
    const amount = selectedPkg.amount;
    try {
      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, packageName: "Income Tax Notice Response" }),
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
        description: `Notice Response – ${selectedPkg.label}`,
        order_id: orderId,
        handler: async (response: any) => {
          try {
            const finalEmail = formData.email || "noemail@notice.com";
            
            // Robust insert with fallback
            const insertData: any = {
              name: formData.name,
              email: finalEmail,
              phone: formData.phone,
              amount,
              payment_id: response.razorpay_payment_id,
              payment_state: "paid",
              Notice_file: fileName || "No file uploaded",
            };
            
            if (userId) insertData.user_id = userId;

            const { error: dbError } = await supabase.from("income_tax_notic").insert(insertData);
            
            if (dbError) {
              console.error("Primary Insert Error:", dbError);
              if (dbError.code === "PGRST204" || dbError.message.includes("user_id")) {
                const { error: fallbackError } = await supabase.from("income_tax_notic").insert({
                  name: formData.name,
                  email: finalEmail,
                  phone: formData.phone,
                  amount,
                  payment_id: response.razorpay_payment_id,
                  payment_state: "paid",
                  Notice_file: fileName || "No file uploaded",
                });
                if (fallbackError) console.error("Fallback Insert Error:", fallbackError);
              }
            }

            const msg = `🔔 *New Income Tax Notice Response*\n\n👤 *Name:* ${formData.name}\n📞 *Phone:* ${formData.phone}\n📧 *Email:* ${finalEmail}\n📦 *Package:* ${selectedPkg.label}\n📄 *Notice:* ${fileName || "N/A"}\n💰 *Payment ID:* ${response.razorpay_payment_id}\n\nPlease help me respond to this notice.`;
            const waUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919999644807"}?text=${encodeURIComponent(msg)}`;
            setWhatsappUrl(waUrl);
            setShowSuccessModal(true);
            setCountdown(5);

            fetch("/api/send-confirmation", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name: formData.name, email: formData.email, phone: formData.phone,
                service: "Income Tax Notice Response", paymentId: response.razorpay_payment_id,
                details: { "Package": selectedPkg.label, "Notice File": fileName },
              }),
            }).catch(console.error);
          } catch (err) { console.error("Handler error:", err); }
          finally { setLoading(false); }
        },
        prefill: { name: formData.name, email: formData.email, contact: formData.phone },
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
      if (!formData.name || !formData.phone || (!isLoggedIn && !formData.email)) {
        alert("Please fill all required fields."); return;
      }
      setStep(2);
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
                  <span className="text-white font-bold text-xl text-center px-4">Expert Notice Analysis</span>
                </div>
                <div className="mt-4 space-y-2">
                  {["Section 143(1) Intimation", "Section 143(2) Scrutiny", "Section 148 Reassessment"].map(item => (
                    <p key={item} className="text-sm text-[#6F6B63] hover:text-[#C15F3C] cursor-pointer">{item}</p>
                  ))}
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 bg-white border border-[#E5E2DA] rounded-full px-3 py-1">
                  <div className="w-2 h-2 bg-[#C15F3C] rounded-full animate-pulse" />
                  <span className="text-xs font-medium text-[#C15F3C]">LEGAL ASSISTANCE</span>
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-semibold text-[#2F2E2B] leading-tight">
                    {heading}<br /><span className="text-[#C15F3C]">{headingHighlight}</span>
                  </h1>
                  <p className="text-sm text-[#6F6B63] leading-relaxed mt-3">{description}</p>
                </div>
                
                {/* Upload Section in Left Side */}
                <div 
                  className={`border-2 border-dashed rounded-2xl p-6 transition-all ${dragActive ? "border-[#C15F3C] bg-[#C15F3C]/5" : "border-[#E5E2DA] bg-[#F9F8F6] hover:bg-white"}`}
                  onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
                  onDragLeave={() => setDragActive(false)}
                  onDrop={handleDrop}
                >
                  <div className="flex flex-col items-center justify-center gap-2">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#C15F3C] shadow-sm">
                      <UploadCloud className="w-6 h-6" />
                    </div>
                    <p className="text-sm font-semibold text-[#2F2E2B]">Upload your Notice (Optional)</p>
                    <p className="text-xs text-[#6F6B63]">Drag & drop or click to browse (PDF preferred)</p>
                    <input type="file" id="hero-upload" className="hidden" onChange={handleFileChange} accept=".pdf,.jpg,.jpeg,.png" />
                    <button onClick={() => document.getElementById("hero-upload")?.click()} className="mt-2 text-xs font-bold text-[#C15F3C] underline">Choose File</button>
                    {fileName && (
                      <div className="mt-4 flex items-center gap-2 bg-[#C15F3C]/10 px-4 py-2 rounded-full border border-[#C15F3C]/20 animate-in fade-in zoom-in duration-300">
                        <FileText className="w-4 h-4 text-[#C15F3C]" />
                        <span className="text-xs font-bold text-[#C15F3C] truncate max-w-[200px]">{fileName}</span>
                        <X className="w-4 h-4 text-[#C15F3C] cursor-pointer hover:scale-110" onClick={() => setFileName(null)} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT – FORM */}
          <div id="registration-form" className="lg:w-96 bg-white rounded-2xl shadow-sm border border-[#E5E2DA] overflow-hidden self-start">
            <div className="bg-gradient-to-r from-[#C15F3C] to-[#A94E30] px-6 py-4">
              <h2 className="text-lg font-semibold text-white">Get Resolution</h2>
              <p className="text-sm text-[#F4F3EE]">Expert review within 24 hours</p>
            </div>

            {/* Step indicator */}
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
              {step === 1 ? "Step 1 of 2 – Contact Details" : "Step 2 of 2 – Review & Pay"}
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
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required maxLength={10} placeholder="10-digit mobile" onInput={(e: any) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, ""); }} className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] bg-white" />
                      </div>
                      <div>
                        <label className="block text-xs text-[#6F6B63] mb-1">Select Package *</label>
                        <select name="package" value={formData.package} onChange={handleChange} className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] bg-white appearance-none cursor-pointer">
                          {pricingPackages.map(p => <option key={p.label} value={p.label}>{p.label}</option>)}
                        </select>
                      </div>
                      <button type="submit" className="w-full bg-[#C15F3C] text-white font-semibold py-3 rounded-lg text-sm hover:bg-[#A94E30] transition">Review &amp; Pay →</button>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div key="s2" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="space-y-4">
                      <div className="bg-[#F9F8F6] rounded-xl p-4 border border-[#E5E2DA] space-y-2 text-sm">
                        {[["Name", formData.name], ["Email", formData.email], ["Phone", formData.phone], ["Package", selectedPkg.label.split("–")[0]?.trim() ?? selectedPkg.label]].map(([l, v]) => (
                          <div key={l} className="flex justify-between">
                            <span className="text-[#6F6B63]">{l}</span>
                            <span className="font-semibold text-[#2F2E2B] break-all text-right max-w-[55%]">{v}</span>
                          </div>
                        ))}
                        {fileName && (
                          <div className="flex justify-between">
                            <span className="text-[#6F6B63]">Notice File</span>
                            <span className="font-semibold text-[#2F2E2B] truncate max-w-[120px]">{fileName}</span>
                          </div>
                        )}
                      </div>
                      <div className="bg-[#F9F8F6] rounded-xl p-4 border border-[#E5E2DA] flex justify-between items-center">
                        <span className="text-[#6F6B63] text-sm">Amount</span>
                        <span className="text-2xl font-bold text-[#2F2E2B]">₹{selectedPkg.amount.toLocaleString()}</span>
                      </div>
                      <div className="flex gap-3">
                        <button type="button" onClick={() => setStep(1)} className="flex-1 bg-white text-[#6F6B63] border border-[#E5E2DA] font-semibold py-3 rounded-lg text-sm">Edit</button>
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
                  Confidential · CA Certified
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
                <h3 className="text-2xl font-bold text-white mb-1">Review Started!</h3>
              </div>
              <div className="p-8 space-y-6">
                <div className="text-center space-y-2">
                  <p className="text-[#2F2E2B] font-medium text-lg">Thank you, {formData.name}!</p>
                  <p className="text-[#6F6B63] text-sm">Your notice has been received. A senior tax advisor will review it and call you within 24 hours.</p>
                </div>
                <div className="bg-[#F9F8F6] rounded-2xl p-4 border border-[#E5E2DA] space-y-2 text-xs">
                  <div className="flex justify-between"><span className="text-[#6F6B63]">Service</span><span className="font-semibold">Notice Response</span></div>
                  <div className="flex justify-between"><span className="text-[#6F6B63]">Notice File</span><span className="font-semibold truncate max-w-[150px]">{fileName || "None provided"}</span></div>
                  <div className="flex justify-between"><span className="text-[#6F6B63]">Status</span><span className="text-[#10B981] font-bold">PAID</span></div>
                </div>
                <button onClick={() => window.open(whatsappUrl, "_blank")} className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" /> Chat with Advisor <ExternalLink className="w-4 h-4 opacity-70" />
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
