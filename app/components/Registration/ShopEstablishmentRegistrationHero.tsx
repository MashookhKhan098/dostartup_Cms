"use client";
import { useState, useEffect } from "react";
import { handleNeedHelpWhatsApp } from "@/lib/form-utils";
import { supabase } from "@/lib/supabase";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, MessageCircle, ExternalLink, X } from "lucide-react";

export type Feature = { icon: string; text: string };

export type ShopEstablishmentRegistrationHeroProps = {
  heading?: string;
  headingHighlight?: string;
  description?: string;
  features?: Feature[];
  buttonText?: string;
};

export default function ShopEstablishmentRegistrationHero({
  heading,
  headingHighlight,
  description,
  features,
  buttonText,
}: ShopEstablishmentRegistrationHeroProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const [countdown, setCountdown] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
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
    } else if (showSuccessModal && countdown === 0 && whatsappUrl && paymentSuccess) {
      window.open(whatsappUrl, "_blank");
    }
    return () => clearTimeout(timer);
  }, [showSuccessModal, countdown, whatsappUrl, paymentSuccess]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = async () => {
    setLoading(true);
    const amount = 2499;

    try {
      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, packageName: "Shop & Establishment Registration" }),
      });
      const { orderId } = await res.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: amount * 100,
        currency: "INR",
        name: "DoStartup",
        description: "Shop & Establishment Registration",
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
                updated_at: new Date().toISOString()
              };
              if (user?.id) profileData.id = user.id;

              await supabase.from('profiles').upsert(profileData, { onConflict: 'email' });
            }
          } catch (profileErr: any) {
            console.error("Profile saving error:", profileErr.message);
          }

          // Prepare WhatsApp message
          const whatsappMsg =
            `🔔 *New Shop & Establishment Registration*\n\n` +
            `👤 *Name:* ${formData.name}\n` +
            `📞 *Phone:* ${formData.phone}\n` +
            `📧 *Email:* ${formData.email || "Not provided"}\n` +
            `💰 *Payment ID:* ${response.razorpay_payment_id}\n\n` +
            `I have successfully completed the payment. Please proceed with my Shop & Establishment registration.`;

          const waUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919999644807"}?text=${encodeURIComponent(whatsappMsg)}`;

          // Save to Supabase
          try {
            const finalEmail = user?.email || formData.email || "noemail@do.com";
            const { error: dbError } = await supabase.from("shop_establishment_act_registration").insert({
              name: formData.name,
              email: finalEmail,
              phone_no: formData.phone,
              amount: amount,
              payment_id: response.razorpay_payment_id,
              payment_state: "paid",
            });
            if (dbError) {
              console.error("DB insert error:", dbError);
            }
          } catch (dbErr) {
            console.error("Failed to insert record:", dbErr);
          }

          // Send confirmation email
          fetch("/api/send-confirmation", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              service: "Shop & Establishment Registration",
              paymentId: response.razorpay_payment_id,
              details: {
                "Service": "Shop & Establishment Act Registration",
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
          contact: formData.phone,
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
      setStep(2); // Move to review step
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
                  <span className="text-white font-bold text-xl text-center px-4">Shop & Establishment License</span>
                </div>
                <div className="mt-4 space-y-2">
                  {["Legal Compliance", "Business Recognition", "Employee Safety"].map((item) => (
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
                  <div className="inline-flex items-center gap-2 bg-white border border-[#E5E2DA] rounded-full px-3 py-1">
                    <div className="w-2 h-2 bg-[#C15F3C] rounded-full" />
                    <span className="text-xs font-medium text-[#C15F3C]">BUSINESS REGISTRATIONS</span>
                  </div>
                </div>

                <div>
                  <h1 className="text-2xl sm:text-3xl font-semibold text-[#2F2E2B] leading-tight">
                    {heading}<br />
                    <span className="text-[#C15F3C]">{headingHighlight}</span>
                  </h1>
                  <p className="text-sm text-[#6F6B63] leading-relaxed mt-3">{description}</p>
                </div>

                <div className="bg-[#F9F8F6] border border-[#E5E2DA] rounded-2xl p-6">
                  <span className="inline-block bg-[#C15F3C] text-white text-[10px] font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider">
                    Key Features
                  </span>
                  <div className="space-y-3">
                    {features?.map((f, i) => (
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
                  <button
                    onClick={() => handleNeedHelpWhatsApp(headingHighlight || heading || "Shop & Establishment Registration")}
                    className="text-[#C15F3C] hover:underline"
                  >
                    Need Help?
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR - FORM */}
          <div id="registration-form" className="lg:w-96 bg-white rounded-2xl shadow-sm border border-[#E5E2DA] overflow-hidden self-start">
            <div className="bg-gradient-to-r from-[#C15F3C] to-[#A94E30] px-6 py-4">
              <h2 className="text-lg font-semibold text-white">Apply for Registration</h2>
              <p className="text-sm text-[#F4F3EE]">Shop & Establishment Act</p>
            </div>

            <div className="p-6 space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">

                {step === 1 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs text-[#6F6B63] mb-1">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Full Name"
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
                          e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "");
                        }}
                        placeholder="10-digit mobile number"
                        className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] placeholder-[#B1ADA1] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] bg-white"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#C15F3C] text-white font-semibold py-3 rounded-lg text-sm hover:bg-[#A94E30] transition shadow-sm hover:shadow-md mt-2"
                    >
                      Continue to Review →
                    </button>
                  </div>
                )}

                <div className="flex items-center justify-center gap-2 text-xs text-[#B1ADA1] pt-2">
                  <svg className="w-4 h-4 text-[#C15F3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>Secure Gateway · Verified Assistance</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* REVIEW MODAL (Step 2) */}
      <AnimatePresence>
        {step === 2 && (
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
                  <p className="text-white/80 text-xs">Verify your information before payment</p>
                </div>
                <button onClick={() => setStep(1)} className="text-white/60 hover:text-white transition">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-8 space-y-6">
                <div className="space-y-4">
                  <h4 className="text-[10px] font-bold text-[#B1ADA1] uppercase tracking-wider">Contact Information</h4>
                  <div className="space-y-2">
                    <div className="flex flex-col text-sm">
                      <span className="text-[#6F6B63]">Name</span>
                      <span className="font-semibold text-[#2F2E2B]">{formData.name}</span>
                    </div>
                    <div className="flex flex-col text-sm">
                      <span className="text-[#6F6B63]">Email</span>
                      <span className="font-semibold text-[#2F2E2B] break-all">{formData.email}</span>
                    </div>
                    <div className="flex flex-col text-sm">
                      <span className="text-[#6F6B63]">Phone</span>
                      <span className="font-semibold text-[#2F2E2B]">{formData.phone}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F9F8F6] rounded-2xl p-6 border border-[#E5E2DA] flex justify-between items-center">
                  <div>
                    <span className="text-[#6F6B63] text-sm">Package Amount</span>
                    <p className="text-2xl font-bold text-[#2F2E2B]">₹2,499 <span className="text-xs font-normal text-[#B1ADA1]">incl. taxes</span></p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setStep(1)}
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
                      <>{buttonText || "Pay INR 2,499 Online"} →</>
                    )}
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
                    Your payment of <span className="font-bold text-[#C15F3C]">₹2,499</span> has been received successfully.
                  </p>
                </div>
                <div className="bg-[#F9F8F6] rounded-2xl p-4 border border-[#E5E2DA] space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#6F6B63]">Service</span>
                    <span className="font-semibold text-[#2F2E2B]">Shop & Establishment Registration</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[#6F6B63]">Status</span>
                    <span className="text-[#10B981] font-bold">PAID</span>
                  </div>
                </div>
                <div className="pt-2">
                  <div className="text-center text-[10px] text-[#B1ADA1] mb-4 uppercase tracking-widest font-bold">What's Next?</div>
                  <button
                    onClick={() => window.open(whatsappUrl, "_blank")}
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
    </div>
  );
}
