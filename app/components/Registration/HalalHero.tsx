"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { handleNeedHelpWhatsApp } from "@/lib/form-utils";
import { supabase } from "@/lib/supabase";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, MessageCircle, ExternalLink, X, Star } from "lucide-react";

export type Feature = { icon?: string; text: string };

export type HalalHeroProps = {
  heading?: string;
  headingHighlight?: string;
  description?: string;
  features?: Feature[];
  buttonText?: string;
};

export default function HalalHero({
  heading,
  headingHighlight,
  description,
  features,
  buttonText,
}: HalalHeroProps) {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const [countdown, setCountdown] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    state: "",
    variant: "",
    panGstin: "",
  });

  useEffect(() => {
    setHasMounted(true);
    const checkUser = async () => {
      try {
        const { data: { user }, error } = await supabase.auth.getUser();
        if (error) throw error;
        
        setIsLoggedIn(!!user);
        if (user) {
          setFormData(prev => ({ ...prev, email: user.email || "" }));
        }
      } catch (err: any) {
        console.warn("Initial auth check skipped due to lock or error:", err.message);
      }
    };
    checkUser();

    // Load Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showSuccessModal && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (showSuccessModal && countdown === 0 && whatsappUrl && paymentSuccess) {
      window.open(whatsappUrl, '_blank');
    }
    return () => clearTimeout(timer);
  }, [showSuccessModal, countdown, whatsappUrl, paymentSuccess]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getPrice = () => {
    switch(formData.variant) {
      case "Compliance Certificate": return 4999;
      case "Renewal": return 2999;
      default: return 3999; 
    }
  };

  const handlePayment = async () => {
    setLoading(true);
    const amount = getPrice();

    try {
      const res = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, packageName: `Halal ${formData.variant}` }),
      });
      const { orderId } = await res.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: amount * 100,
        currency: 'INR',
        name: 'DoStartup',
        description: `Halal Certification - ${formData.variant}`,
        order_id: orderId,
        handler: async function (response: any) {
          let user = null;
          try {
            const { data: { user: currentUser } } = await supabase.auth.getUser();
            user = currentUser ?? null;
          } catch (e) {
            console.warn("Auth check in payment handler failed gracefully");
          }

          // Try updating user profile based on email (works for both guests and logged-in users)
          try {
            const finalEmail = user?.email || formData.email;
            const userName = user?.user_metadata?.full_name || formData.name || finalEmail?.split('@')[0];
            
            if (finalEmail) {
              const profileData: any = {
                name: userName,
                email: finalEmail,
                updated_at: new Date().toISOString()
              };
              if (user?.id) profileData.id = user.id;

              // Step 1: Try with phone field
              const { error: profileError } = await supabase
                .from('profiles')
                .upsert({ ...profileData, phone: formData.phone }, { onConflict: 'email' });
              
              // Step 2: Fallback if phone column doesn't exist
              if (profileError && (profileError.message.includes('column') || profileError.code === '42703')) {
                await supabase
                  .from('profiles')
                  .upsert(profileData, { onConflict: 'email' });
              }
            }
          } catch (profileErr: any) {
            console.error("❌ PROFILE EXCEPTION:", profileErr.message);
          }

          // Prepare WhatsApp message
          const whatsappMsg = 
            `🔔 *New Halal Certificate Registration*\n\n` +
            `👤 *Name:* ${formData.name}\n` +
            `📞 *Phone:* ${formData.phone}\n` +
            `📧 *Email:* ${formData.email || 'Not provided'}\n` +
            `📍 *State:* ${formData.state}\n` +
            `📋 *Variant:* ${formData.variant}\n` +
            `🔢 *PAN / GSTIN:* ${formData.panGstin}\n` +
            `💰 *Payment ID:* ${response.razorpay_payment_id}\n\n` +
            `I have successfully completed the payment. Please proceed with my certification.`;

          const waUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919999644807'}?text=${encodeURIComponent(whatsappMsg)}`;

          // Save data to Supabase
          try {
            const finalEmail = user?.email || formData.email || "noemail@halal.com";
            const { error: dbError } = await supabase.from('halal_certificate').insert({
              name: formData.name,
              email: finalEmail,
              phone_no: formData.phone,
              state: formData.state,
              variant: formData.variant,
              pan_gstin: formData.panGstin.toUpperCase(),
              amount: amount,
              payment_id: response.razorpay_payment_id,
              payment_state: 'paid'
            });
            if (dbError) {
              console.error("Database insert error details:", dbError);
              alert("Payment successful but failed to save details in database: " + dbError.message);
            }
          } catch (dbErr) {
            console.error("Failed to insert record exception:", dbErr);
          }

          // Trigger email notification automatically
          fetch('/api/send-confirmation', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              service: `Halal ${formData.variant}`,
              paymentId: response.razorpay_payment_id,
              details: {
                State: formData.state,
                'Variant': formData.variant,
                'PAN / GSTIN': formData.panGstin
              }
            }),
          }).catch(err => console.error("Notification API failed", err));

          setWhatsappUrl(waUrl);
          setCountdown(3);
          setStep(0); // Close review modal
          setShowSuccessModal(true);
          setPaymentSuccess(true);
          setLoading(false);
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone
        },
        theme: { color: '#C15F3C' },
        modal: { ondismiss: () => setLoading(false) }
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

      if (!isLoggedIn && formData.email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
          alert("Please enter a valid email address");
          return;
        }
      }

      setStep(2);
    } else if (step === 2) {
      if (!formData.panGstin || !formData.state || !formData.variant) {
        alert("Please fill in all required fields");
        return;
      }

      const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/i;
      const gstinRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/i;
      
      const isPan = panRegex.test(formData.panGstin);
      const isGstin = gstinRegex.test(formData.panGstin);

      if (!isPan && !isGstin) {
        alert("Please enter a valid 10-character PAN or 15-character GSTIN number");
        return;
      }

      setStep(3); // Go to reviewing/payment step
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
                    <span className="text-white font-bold text-xl text-center px-4 uppercase tracking-tighter">Registrations</span>
                </div>
                <div className="mt-4 space-y-2">
                  {["Documents Required", "Process", "Benefits"].map((item) => (
                    <p key={item} className="text-sm text-[#6F6B63] hover:text-[#C15F3C] cursor-pointer">
                      {item}
                    </p>
                  ))}
                  <button className="text-sm text-[#C15F3C] font-medium hover:underline">
                    Learn More →
                  </button>
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 bg-white border border-[#E5E2DA] rounded-full px-3 py-1 mb-2">
                    <div className="w-2 h-2 bg-[#C15F3C] rounded-full" />
                    <span className="text-[10px] font-bold text-[#C15F3C] uppercase tracking-wider">
                      {hasMounted ? "TRUSTED BY 50K+ BUSINESSES" : "GLOBAL COMPLIANCE PARTNER"}
                    </span>
                  </div>
                </div>

                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-[#2F2E2B] leading-tight">
                    {heading}<br />
                    <span className="text-[#C15F3C]">{headingHighlight}</span>
                  </h1>
                </div>

                <div className="bg-white border border-[#E5E2DA] rounded-3xl p-6 lg:p-8 shadow-sm">
                  <div className="flex flex-col gap-6">
                    <div className="bg-[#F9F8F6] border border-[#E5E2DA] rounded-2xl p-6">
                      <span className="inline-block bg-[#C15F3C] text-white text-[10px] font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider">
                        Key Features
                      </span>
                      <div className="space-y-4">
                        {features?.map((f, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#C15F3C] border border-[#E5E2DA] shadow-sm">
                               <CheckCircle2 className="w-4 h-4" />
                            </div>
                            <span className="text-sm font-semibold text-[#2F2E2B]">{f.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* INTERNAL TRUST INDICATOR */}
                    <div className="flex items-center gap-2 px-2">
                       <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#C15F3C] text-[#C15F3C]" />
                        ))}
                      </div>
                      <span className="text-sm font-bold text-[#2F2E2B]">4.9/5</span>
                      <span className="text-sm text-[#E5E2DA]">|</span>
                      <span className="text-sm text-[#6F6B63]">50k+ reviews</span>
                    </div>

                    <div className="flex justify-between items-center text-xs pt-4 border-t border-[#F4F3EE]">
                      <button className="text-[#C15F3C] font-medium hover:underline">Terms and conditions</button>
                      <button 
                        onClick={() => handleNeedHelpWhatsApp(headingHighlight || heading || "Halal Certificate")}
                        className="text-[#C15F3C] font-medium hover:underline"
                      >
                        Need Help?
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR - MULTI-STEP FORM */}
          <div id="registration-form" className="lg:w-96 bg-white rounded-2xl shadow-sm border border-[#E5E2DA] overflow-hidden self-start">
            <div className="bg-gradient-to-r from-[#C15F3C] to-[#A94E30] px-6 py-4">
              <h2 className="text-lg font-semibold text-white">Start Registration</h2>
              <p className="text-sm text-[#F4F3EE]">complete your application in minutes</p>
            </div>

            <div className="p-6 space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                {step === 1 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs text-[#6F6B63] mb-1">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your name"
                        className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] placeholder-[#B1ADA1] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[#6F6B63] mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        maxLength={10}
                        onInput={(e: React.FormEvent<HTMLInputElement>) => {
                          e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                        }}
                        placeholder="10-digit phone number"
                        className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] placeholder-[#B1ADA1] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] bg-white"
                      />
                    </div>
                    {!isLoggedIn && (
                      <div>
                        <label className="block text-xs text-[#6F6B63] mb-1">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="Email Address"
                          className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] placeholder-[#B1ADA1] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] bg-white"
                        />
                      </div>
                    )}
                    <button
                      type="submit"
                      className="w-full bg-[#C15F3C] text-white font-semibold py-3 rounded-lg text-sm hover:bg-[#A94E30] transition shadow-sm hover:shadow-md mt-2"
                    >
                      Continue →
                    </button>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs text-[#6F6B63] mb-1">PAN / GSTIN Number *</label>
                      <input
                        type="text"
                        name="panGstin"
                        value={formData.panGstin}
                        onChange={handleInputChange}
                        required
                        maxLength={15}
                        placeholder="Enter PAN or GSTIN"
                        className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] placeholder-[#B1ADA1] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] bg-white uppercase"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-[#6F6B63] mb-1">State/UT *</label>
                      <div className="relative">
                        <select
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          required
                          className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] bg-white appearance-none cursor-pointer"
                        >
                          <option value="">Select State</option>
                          {[
                             "Andhra Pradesh", "Delhi", "Gujarat", "Karnataka", 
                             "Maharashtra", "Tamil Nadu", "Telangana", "Uttar Pradesh"
                          ].map((state) => (
                            <option key={state} value={state}>{state}</option>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg className="w-4 h-4 text-[#6F6B63]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-[#6F6B63] mb-1">Variant *</label>
                      <div className="relative">
                        <select
                          name="variant"
                          value={formData.variant}
                          onChange={handleInputChange}
                          required
                          className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] bg-white appearance-none cursor-pointer"
                        >
                          <option value="">Select Variant</option>
                          {[
                            "Renewal",
                            "Compliance Certificate"
                          ].map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg className="w-4 h-4 text-[#6F6B63]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                       <button
                         type="button"
                         onClick={() => setStep(1)}
                         className="flex-1 bg-white text-[#6F6B63] border border-[#E5E2DA] font-semibold py-3 rounded-lg text-sm"
                       >
                         Back
                       </button>
                       <button
                         type="submit"
                         className="flex-[2] bg-[#C15F3C] text-white font-semibold py-3 rounded-lg text-sm hover:bg-[#A94E30] transition"
                       >
                         Submit Details →
                       </button>
                    </div>
                  </div>
                )}
                
                <div className="flex items-center justify-center gap-2 text-xs text-[#B1ADA1] pt-2">
                  <svg className="w-4 h-4 text-[#C15F3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>Secure · Instant access</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* REGISTRATION SUMMARY MODAL */}
      <AnimatePresence>
        {step === 3 && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden"
            >
              <div className="bg-gradient-to-r from-[#C15F3C] to-[#A94E30] px-8 py-6 flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold text-white">Review Your Details</h3>
                  <p className="text-white/80 text-xs">Verify your information before proceeding to payment</p>
                </div>
                <button 
                  onClick={() => setStep(2)}
                  className="text-white/60 hover:text-white transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-bold text-[#B1ADA1] uppercase tracking-wider">Contact Information</h4>
                    <div className="space-y-2">
                      <div className="flex flex-col text-sm">
                        <span className="text-[#6F6B63]">Name</span>
                        <span className="font-semibold text-[#2F2E2B]">{formData.name}</span>
                      </div>
                      <div className="flex flex-col text-sm">
                        <span className="text-[#6F6B63]">Phone</span>
                        <span className="font-semibold text-[#2F2E2B]">{formData.phone}</span>
                      </div>
                      <div className="flex flex-col text-sm">
                        <span className="text-[#6F6B63]">Email</span>
                        <span className="font-semibold text-[#2F2E2B] break-all">{formData.email}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 border-l border-[#E5E2DA] pl-6">
                    <h4 className="text-[10px] font-bold text-[#B1ADA1] uppercase tracking-wider">Service Details</h4>
                    <div className="space-y-2">
                      <div className="flex flex-col text-sm">
                        <span className="text-[#6F6B63]">Variant</span>
                        <span className="font-semibold text-[#2F2E2B]">{formData.variant}</span>
                      </div>
                      <div className="flex flex-col text-sm">
                        <span className="text-[#6F6B63]">State</span>
                        <span className="font-semibold text-[#2F2E2B]">{formData.state}</span>
                      </div>
                      <div className="flex flex-col text-sm">
                        <span className="text-[#6F6B63]">PAN / GSTIN</span>
                        <span className="font-semibold text-[#2F2E2B] uppercase">{formData.panGstin}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F9F8F6] rounded-2xl p-6 border border-[#E5E2DA] flex justify-between items-center">
                  <div>
                    <span className="text-[#6F6B63] text-sm">Package Amount</span>
                    <p className="text-2xl font-bold text-[#2F2E2B]">₹{getPrice().toLocaleString()} <span className="text-xs font-normal text-[#B1ADA1]">incl. taxes</span></p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setStep(2)}
                    className="flex-1 border border-[#E5E2DA] hover:bg-[#F9F8F6] text-[#6F6B63] font-bold py-4 rounded-2xl transition"
                  >
                    Edit Details
                  </button>
                  <button
                    onClick={handlePayment}
                    disabled={loading}
                    className="flex-[2] bg-[#C15F3C] hover:bg-[#A94E30] text-white font-bold py-4 rounded-2xl transition shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <>Pay ₹{getPrice().toLocaleString()} Online →</>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* SUCCESS POPUP MODAL */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
            >
              <div className="bg-gradient-to-r from-[#C15F3C] to-[#A94E30] p-8 text-center relative">
                <button 
                  onClick={() => setShowSuccessModal(false)}
                  className="absolute top-4 right-4 text-white/80 hover:text-white transition"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <CheckCircle2 className="w-12 h-12 text-[#C15F3C]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">Payment Successful!</h3>
              </div>
              <div className="p-8 space-y-6">
                <div className="space-y-3 text-center">
                  <p className="text-[#2F2E2B] font-medium text-lg">Thank you, {formData.name}!</p>
                  <p className="text-[#6F6B63] text-sm leading-relaxed">
                    Your payment of <span className="font-bold text-[#C15F3C]">₹{getPrice().toLocaleString()}</span> has been received successfully. 
                  </p>
                </div>
                <div className="bg-[#F9F8F6] rounded-2xl p-4 border border-[#E5E2DA] space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#6F6B63]">Service</span>
                    <span className="font-semibold text-[#2F2E2B]">Halal Certification ({formData.variant})</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[#6F6B63]">Status</span>
                    <span className="text-[#10B981] font-bold">PAID</span>
                  </div>
                </div>
                <div className="pt-2">
                  <div className="text-center text-[10px] text-[#B1ADA1] mb-4 uppercase tracking-widest font-bold">What's Next?</div>
                  <button 
                    onClick={() => window.open(whatsappUrl, '_blank')}
                    className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Complete via WhatsApp
                    <ExternalLink className="w-4 h-4 opacity-70" />
                  </button>
                  <div className="mt-4 text-center">
                    <p className="text-xs text-[#6F6B63] flex items-center justify-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      Redirecting to WhatsApp in <span className="font-bold text-[#C15F3C]">{countdown}s</span>...
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* TRUST INDICATORS - BELOW UPPER BOX */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-6">
        <div className="mt-0 flex flex-col items-center justify-center gap-2">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#C15F3C] text-[#C15F3C]" />
                ))}
              </div>
              <div className="text-[13px] font-bold text-[#201F1D]">
                4.9/5 <span className="text-[#6F6B63] font-normal">(2.5k+ reviews)</span>
              </div>
            </div>
            
            <div className="hidden md:block w-px h-4 bg-[#E5E2DA]" />
            
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-5 h-5 rounded-full border-2 border-white bg-[#F9F8F6] flex items-center justify-center overflow-hidden shadow-sm">
                    <div className="w-full h-full bg-gradient-to-br from-[#C15F3C] to-[#A94E30]" />
                  </div>
                ))}
              </div>
              <span className="text-[13px] font-bold text-[#201F1D]">Trusted by 50k+ businesses</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
