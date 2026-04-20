"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { handleWhatsAppSubmission, handleNeedHelpWhatsApp } from "@/lib/form-utils";
import { supabase } from "@/lib/supabase";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, MessageCircle, ExternalLink, X, Clock, Calendar } from "lucide-react";

export default function StartBusinessPage({ defaultEntity = "Startup" }: { defaultEntity?: string }) {
  const router = useRouter();
  const [activeEntity, setActiveEntity] = useState(defaultEntity);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const [countdown, setCountdown] = useState(0);
  const authChecked = useRef(false);
  const [formData, setFormData] = useState({
    state: "",
    name: "",
    businessName: "",
    email: "",
    phone: "",
    capital: "",
    members: "",
    proposedName1: "",
    proposedName2: ""
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

  const handleTrackApplication = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        router.push('/profile');
      } else {
        const formElement = document.querySelector('[data-form-container]');
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } catch (err: any) {
      console.error("Tracking redirection failed:", err.message);
      document.querySelector('[data-form-container]')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const entities = [
    { name: "Startup", path: "/startup-registration" },
    { name: "Company", path: "/company-registration" },
    { name: "LLP", path: "/llp-registration" },
    { name: "OPC", path: "/one-person-company" },
    { name: "Proprietorship", path: "/proprietorship" },
    { name: "Partnership", path: "/partnership" },
  ];

  const descriptions = {
    Startup: "Launch your innovative venture with our startup registration package. Perfect for high-growth potential businesses seeking investment and scalability.",
    Company: "Private Limited Company registration with full compliance. Ideal for businesses planning to raise funding and expand operations.",
    LLP: "Limited Liability Partnership combines flexibility with protection. Best for professional services and partnership-based businesses.",
    OPC: "One Person Company - perfect for solo entrepreneurs who want corporate benefits with minimal compliance.",
    Proprietorship: "Sole Proprietorship registration for small businesses. Simple structure with complete owner control.",
    Partnership: "Partnership firm registration for businesses with multiple owners. Easy to form and operate.",
    "Section 8": "Register a non-profit company for charitable or social objects. Combines corporate structure with zero profit distribution.",
    "Trust": "Trust registration for charitable, religious, or private purposes. Simple governance and dedicated to specific objectives.",
    "Public Limited": "Public Limited Company for large businesses planning to raise capital from the public and have high turnover.",
    "Indian Subs.": "Incorporate an Indian Subsidiary of a foreign company. Expand your global reach into the Indian market.",
    "Producer Company": "Producer Company registration for groups of primary producers. Empowering agricultural and rural development.",
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePayment = async () => {
    setLoading(true);
    const amount = (activeEntity === 'Partnership' || activeEntity === 'OPC' || activeEntity === 'LLP' || activeEntity === 'Company' || activeEntity === 'Section 8' || activeEntity === 'Trust' || activeEntity === 'Public Limited' || activeEntity === 'Indian Subs.' || activeEntity === 'Producer Company') ? 1999 : 999;

    try {
      const res = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, packageName: `${activeEntity} Registration` }),
      });
      const { orderId } = await res.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: amount * 100,
        currency: 'INR',
        name: 'DoStartup',
        description: `${activeEntity} Registration`,
        order_id: orderId,
        handler: async function (response: any) {
          let user = null;
          let userId = null;
          try {
            const { data: { user: currentUser } } = await supabase.auth.getUser();
            user = currentUser ?? null;
            userId = user?.id || null;
            supabase.auth.getUser().catch(() => {});
          } catch (e) {
            console.warn("Auth check in payment handler failed gracefully");
          }
          try {
            // Save to Supabase if it's Proprietorship
            if (activeEntity === 'Proprietorship') {
              const { error: dbError } = await supabase
                .from('proprietorship')
                .insert([{
                  user_id: userId,
                  name: formData.name,
                  email: formData.email,
                  phone_no: formData.phone,
                  state: formData.state,
                  proposed_name1: formData.proposedName1,
                  proposed_name2: formData.proposedName2 || null,
                  payment_id: response.razorpay_payment_id,
                  amount: 999,
                  status: 'paid'
                }]);
              
              if (dbError) {
                console.error("Supabase Insertion Error:", dbError.message);
                alert(`Note: We couldn't save some details to our database, but your payment was successful. Error: ${dbError.message}`);
              }
            }

            // Save to Supabase if it's Partnership (Table name: parternership)
            if (activeEntity === 'Partnership') {
              const { error: dbError } = await supabase
                .from('parternership')
                .insert([{
                  user_id: userId,
                  name: formData.name,
                  email: formData.email,
                  phone_no: formData.phone,
                  state: formData.state,
                  proposed_name1: formData.proposedName1,
                  proposed_name2: formData.proposedName2 || null,
                  payment_id: response.razorpay_payment_id,
                  amount: 1999,
                  payment_state: 'paid'
                }]);
              
              if (dbError) {
                console.error("Partnership Insertion Error (Details):", dbError);
                alert(`Note: We couldn't save some details (Partnership) to our database. Error: ${dbError.message || 'Unknown Error'}`);
              }
            }

            // Save to Supabase if it's OPC
            if (activeEntity === 'OPC') {
              const { error: dbError } = await supabase
                .from('one_person_company')
                .insert([{
                  user_id: userId,
                  name: formData.name,
                  email: formData.email,
                  phone_no: formData.phone,
                  state: formData.state,
                  proposed_name1: formData.proposedName1,
                  proposed_name2: formData.proposedName2 || null,
                  payment_id: response.razorpay_payment_id,
                  amount: 1999,
                  payment_state: 'paid'
                }]);
              
              if (dbError) {
                console.error("OPC DB Save Error:", dbError);
                alert(`Notice: We couldn't save your details to our history database (Error: ${dbError.message || dbError.code}). However, your payment was successful! Please continue to WhatsApp.`);
              }
            }

            // Save to Supabase if it's LLP
            if (activeEntity === 'LLP') {
              const { error: dbError } = await supabase
                .from('limited_liability_partnership')
                .insert([{
                  user_id: userId,
                  name: formData.name,
                  email: formData.email,
                  phone_no: formData.phone,
                  state: formData.state,
                  proposed_name1: formData.proposedName1,
                  proposed_name2: formData.proposedName2 || null,
                  payment_id: response.razorpay_payment_id,
                  amount: 1999,
                  payment_state: 'paid'
                }]);
              
              if (dbError) {
                console.error("LLP DB Save Error:", dbError);
                alert(`Notice: We couldn't save your details to our history database (Error: ${dbError.message || dbError.code}). However, your payment was successful! Please continue to WhatsApp.`);
              }
            }

            // Save to Supabase if it's Company
            if (activeEntity === 'Company') {
              const { error: dbError } = await supabase
                .from('private_limited_company')
                .insert([{
                  user_id: userId,
                  name: formData.name,
                  email: formData.email,
                  phone_no: formData.phone,
                  state: formData.state,
                  proposed_name1: formData.proposedName1,
                  proposed_name2: formData.proposedName2 || null,
                  payment_id: response.razorpay_payment_id,
                  amount: 1999,
                  payment_state: 'paid'
                }]);
              
              if (dbError) {
                console.error("Company DB Save Error:", dbError);
                alert(`Notice: We couldn't save your details to our history database (Error: ${dbError.message || dbError.code}). However, your payment was successful! Please continue to WhatsApp.`);
              }
            }

            // Save to Supabase if it's Section 8
            if (activeEntity === 'Section 8') {
              const { error: dbError } = await supabase
                .from('section_8_company')
                .insert([{
                  user_id: userId,
                  name: formData.name,
                  email: formData.email,
                  phone_no: formData.phone,
                  state: formData.state,
                  proposed_name1: formData.proposedName1,
                  proposed_name2: formData.proposedName2 || null,
                  payment_id: response.razorpay_payment_id,
                  amount: 1999,
                  payment_state: 'paid'
                }]);
              
              if (dbError) {
                console.error("Section 8 DB Save Error:", dbError);
                alert(`Notice: We couldn't save your details to our history database (Error: ${dbError.message || dbError.code}). However, your payment was successful! Please continue to WhatsApp.`);
              }
            }

            // Save to Supabase if it's Trust
            if (activeEntity === 'Trust') {
              const { error: dbError } = await supabase
                .from('trust_registration')
                .insert([{
                  user_id: userId,
                  name: formData.name,
                  email: formData.email,
                  phone_no: formData.phone,
                  state: formData.state,
                  proposed_name1: formData.proposedName1,
                  proposed_name2: formData.proposedName2 || null,
                  payment_id: response.razorpay_payment_id,
                  amount: 1999,
                  payment_state: 'paid'
                }]);
              
              if (dbError) {
                console.error("Trust DB Save Error:", dbError);
                alert(`Notice: We couldn't save your details to our history database (Error: ${dbError.message || dbError.code}). However, your payment was successful! Please continue to WhatsApp.`);
              }
            }

            // Save to Supabase if it's Public Limited
            if (activeEntity === 'Public Limited') {
              const { error: dbError } = await supabase
                .from('public_limited_company')
                .insert([{
                  user_id: userId,
                  name: formData.name,
                  email: formData.email,
                  phone_no: formData.phone,
                  state: formData.state,
                  proposed_name1: formData.proposedName1,
                  proposed_name2: formData.proposedName2 || null,
                  payment_id: response.razorpay_payment_id,
                  amount: 1999,
                  payment_state: 'paid'
                }]);
              
              if (dbError) {
                console.error("Public Limited DB Save Error:", dbError);
                alert(`Notice: We couldn't save your details to our history database (Error: ${dbError.message || dbError.code}). However, your payment was successful! Please continue to WhatsApp.`);
              }
            }

            // Save to Supabase if it's Indian Subsidiary
            if (activeEntity === 'Indian Subs.') {
              const { error: dbError } = await supabase
                .from('indian_subsidiary')
                .insert([{
                  user_id: userId,
                  name: formData.name,
                  email: formData.email,
                  phone_no: formData.phone,
                  state: formData.state,
                  proposed_name1: formData.proposedName1,
                  proposed_name2: formData.proposedName2 || null,
                  payment_id: response.razorpay_payment_id,
                  amount: 1999,
                  payment_state: 'paid'
                }]);
              
              if (dbError) {
                console.error("Indian Subs DB Save Error:", dbError);
                alert(`Notice: We couldn't save your details to our history database (Error: ${dbError.message || dbError.code}). However, your payment was successful! Please continue to WhatsApp.`);
              }
            }

            // Save to Supabase if it's Producer Company
            if (activeEntity === 'Producer Company') {
              const { error: dbError } = await supabase
                .from('producer_company')
                .insert([{
                  user_id: userId,
                  name: formData.name,
                  email: formData.email,
                  phone_no: formData.phone,
                  state: formData.state,
                  proposed_name1: formData.proposedName1,
                  proposed_name2: formData.proposedName2 || null,
                  payment_id: response.razorpay_payment_id,
                  amount: 1999,
                  payment_state: 'paid'
                }]);
              
              if (dbError) {
                console.error("Producer Company DB Save Error:", dbError);
                alert(`Notice: We couldn't save your details to our history database (Error: ${dbError.message || dbError.code}). However, your payment was successful! Please continue to WhatsApp.`);
              }
            }
          } catch (err: any) {
            console.error("Critical Save Exception:", err);
            alert(`Network Notice: We had trouble connecting to our registration database. However, your payment was successful! Please continue to WhatsApp to complete your process.`);
          }

            // Also update/upsert profile if user is logged in
            if (user) {
              const userName = user.user_metadata?.full_name || formData.name || user.email?.split('@')[0];
              try {
                const { error: profileError } = await supabase
                  .from('profiles')
                  .upsert({
                    id: user.id,
                    name: userName,
                    email: user.email,
                    phone: formData.phone
                  });
                
                if (profileError) console.error("Profile Upsert Error:", profileError.message);
              } catch (profileErr) {
                console.error("Profile Update Error (non-blocking)");
              }
            }

          // Prepare WhatsApp message
          const whatsappMsg = 
            `🔔 *New ${activeEntity} Registration*\n\n` +
            `👤 *Name:* ${formData.name}\n` +
            `📞 *Phone:* ${formData.phone}\n` +
            `📧 *Email:* ${formData.email || 'Not provided'}\n` +
            `📍 *State:* ${formData.state}\n` +
            `📑 *Proposed Name 1:* ${formData.proposedName1}\n` +
            `📑 *Proposed Name 2:* ${formData.proposedName2 || 'None'}\n` +
            `💰 *Payment ID:* ${response.razorpay_payment_id}\n\n` +
            `I have successfully completed the payment. Please proceed with my registration.`;

          const waUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919999644807'}?text=${encodeURIComponent(whatsappMsg)}`;

          // Trigger email notification automatically
          fetch('/api/send-confirmation', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              service: `${activeEntity} Registration`,
              paymentId: response.razorpay_payment_id,
              details: {
                State: formData.state,
                'Proposed Name 1': formData.proposedName1,
                'Proposed Name 2': formData.proposedName2 || 'None',
              }
            }),
          }).catch(err => console.error("Notification API failed", err));

          setWhatsappUrl(waUrl);
          setCountdown(3);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const multiStepEntities = ['Proprietorship', 'Partnership', 'OPC', 'LLP', 'Company', 'Section 8', 'Trust', 'Public Limited', 'Indian Subs.', 'Producer Company'];
    if (multiStepEntities.includes(activeEntity || '')) {
      if (step === 1) {
        if (!formData.state || !formData.phone || !formData.name || (!isLoggedIn && !formData.email)) {
          alert("Please fill in all required fields");
          return;
        }
        setStep(2);
      } else if (step === 2) {
        if (!formData.proposedName1) {
          alert("Proposed Name 1 is required");
          return;
        }
        setStep(3);
      }
      return;
    }

    // Default flow for other entities
    if (!formData.state || !formData.businessName || !formData.phone || !formData.name) {
      alert("Please fill in all required fields (Name, Phone, State, Business Name)");
      return;
    }

    await handleWhatsAppSubmission({
      ...formData,
      business_name: formData.businessName,
    }, `${activeEntity} Registration`);

    router.push(`/register?type=${activeEntity}&state=${formData.state}&name=${formData.businessName}`);
  };

  return (
    <div className="bg-[#F4F3EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* LEFT SECTION */}
          <div className="flex-1 bg-white rounded-2xl shadow-sm border border-[#E5E2DA] p-6">
            <div className="flex flex-col md:flex-row gap-8">

              {/* LEFT SIDEBAR WITH IMAGE PLACEHOLDER */}
              <div className="w-full md:w-64 flex-shrink-0">
                <div className="w-full h-48 bg-gradient-to-br from-[#C15F3C] to-[#A94E30] rounded-xl border border-[#E5E2DA] flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Startup</span>
                </div>

                <div className="mt-4 space-y-2">
                  {["Documents Required", "Fee Structure", "Eligibility"].map((item) => (
                    <p key={item} className="text-sm text-[#6F6B63] hover:text-[#C15F3C] cursor-pointer">
                      {item}
                    </p>
                  ))}
                  <button className="text-sm text-[#C15F3C] font-medium hover:underline">
                    Learn More →
                  </button>
                </div>
              </div>

              {/* MAIN CONTENT */}
              <div className="flex-1 space-y-6">

                {/* BADGES */}
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-[10px] font-bold px-2.5 py-1.5 rounded-full border border-green-200/50 uppercase tracking-wider">
                    <CheckCircle2 size={12} className="text-green-600" />
                    Expert Guide
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-[10px] font-bold px-2.5 py-1.5 rounded-full border border-blue-200/50 uppercase tracking-wider">
                    <Clock size={12} className="text-blue-600" />
                    Updated Weekly
                  </span>
                </div>

                {/* HEADING */}
                <div>
                  <h1 className="text-2xl sm:text-4xl font-bold text-[#2F2E2B] leading-tight">
                    {activeEntity} Registration<br />
                    <span className="text-[#C15F3C]">
                      in India
                    </span>
                  </h1>

                  <p className="text-sm text-[#6F6B63] leading-relaxed mt-4">
                    Join 50,000+ entrepreneurs. Complete digital process with expert CA support and seamless compliance tracking.
                  </p>
                </div>

                {/* STATS */}
                <div className="grid grid-cols-3 gap-6 py-2">
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-[#201F1D]">50K+</div>
                    <div className="text-[10px] text-[#6F6B63] font-bold uppercase tracking-wider">Registrations</div>
                  </div>
                  <div className="border-x border-[#E5E2DA] px-6">
                    <div className="text-xl sm:text-2xl font-bold text-[#201F1D]">4.9</div>
                    <div className="text-[10px] text-[#6F6B63] font-bold uppercase tracking-wider">Rating</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-[#201F1D]">24/7</div>
                    <div className="text-[10px] text-[#6F6B63] font-bold uppercase tracking-wider">Support</div>
                  </div>
                </div>

                {/* FEATURES */}
                <div className="bg-[#F9F8F6] border border-[#E5E2DA] rounded-2xl p-6">
                  <span className="inline-block bg-[#C15F3C] text-white text-[10px] font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider">
                    Key Features
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { icon: "⚡", text: "Same Day Registration" },
                      { icon: "🛡️", text: "100% Digital" },
                      { icon: "🎯", text: "Expert CA Support" },
                      { icon: "💰", text: "Money-back Guarantee" },
                      { icon: "💻", text: "Digital Process" },
                      { icon: "🚀", text: "Super Fast Service" },
                      { icon: "📋", text: "Trade License Renewal" },
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-white rounded-lg p-3 border border-[#E5E2DA] shadow-sm">
                        <span className="text-base">{feature.icon}</span>
                        <span className="text-xs font-semibold text-[#2F2E2B]">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* LINKS */}
                <div className="flex justify-between text-sm items-center mb-6">
                  <div className="flex gap-4">
                    <button className="text-[#C15F3C] font-medium hover:underline">
                      Terms and conditions
                    </button>
                    <button 
                      onClick={() => handleNeedHelpWhatsApp(activeEntity || "Business Registration")}
                      className="text-[#C15F3C] font-medium hover:underline"
                    >
                      Need Help?
                    </button>
                  </div>
                  <div className="flex items-center gap-1.5 bg-green-50 px-3 py-1 rounded-full border border-green-200">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-[10px] font-bold text-green-700 uppercase">System Online</span>
                  </div>
                </div>
                
                {/* EXTRA CONTENT TO FILL SPACE */}
                <div className="mt-8 pt-8 border-t border-[#E5E2DA] grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold text-[#201F1D] uppercase tracking-wider">What&apos;s Included</h4>
                    <ul className="space-y-2">
                      {[
                        "Free Name Search & Approval assistance",
                        "Preparation of Incorporation documents",
                        "Dedicated Relationship Manager",
                        "Digital Signature (DSC) for primary owner",
                        "Lifetime compliance support"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#6F6B63]">
                          <CheckCircle2 size={14} className="text-[#C15F3C] mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold text-[#201F1D] uppercase tracking-wider">Trust & Security</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-[#F9F8F6] p-3 rounded-xl border border-[#E5E2DA] flex flex-col items-center text-center">
                        <span className="text-xl mb-1">🔒</span>
                        <span className="text-[10px] font-bold text-[#201F1D] uppercase">Secure Data</span>
                      </div>
                      <div className="bg-[#F9F8F6] p-3 rounded-xl border border-[#E5E2DA] flex flex-col items-center text-center">
                        <span className="text-xl mb-1">🤝</span>
                        <span className="text-[10px] font-bold text-[#201F1D] uppercase">Verified Experts</span>
                      </div>
                      <div className="bg-[#F9F8F6] p-3 rounded-xl border border-[#E5E2DA] flex flex-col items-center text-center">
                        <span className="text-xl mb-1">📜</span>
                        <span className="text-[10px] font-bold text-[#201F1D] uppercase">Govt. Certified</span>
                      </div>
                      <div className="bg-[#F9F8F6] p-3 rounded-xl border border-[#E5E2DA] flex flex-col items-center text-center">
                        <span className="text-xl mb-1">⚡</span>
                        <span className="text-[10px] font-bold text-[#201F1D] uppercase">Fast Delivery</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div id="registration-form" className="lg:w-96 bg-white rounded-2xl shadow-sm border border-[#E5E2DA] overflow-hidden">

            {/* FORM HEADER */}
            <div className="bg-gradient-to-r from-[#C15F3C] to-[#A94E30] px-6 py-4">
              <h2 className="text-lg font-semibold text-white">Get Started Today</h2>
              <p className="text-sm text-[#F4F3EE]">Free consultation • No hidden charges</p>
            </div>

            {/* ENTITY TABS */}
            <div className="border-b border-[#E5E2DA] bg-white px-4 py-3 overflow-x-auto">
              <div className="flex gap-2 min-w-max">
                {entities.map(({ name }) => (
                  <button
                    key={name}
                    onClick={() => {
                      setActiveEntity(name);
                      setStep(1);
                    }}
                    className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${activeEntity === name
                      ? "bg-[#C15F3C] text-white"
                      : "bg-white text-[#6F6B63] border border-[#E5E2DA] hover:border-[#C15F3C] hover:text-[#C15F3C]"
                      }`}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>

            {/* FORM CONTENT */}
            <div className="p-6 space-y-6">

              {/* DESCRIPTION */}
              <div className="bg-[#F9F8F6] border-l-4 border-[#C15F3C] p-4 rounded-r-lg">
                <p className="text-sm text-[#2F2E2B] leading-relaxed">
                  {descriptions[activeEntity as keyof typeof descriptions]}
                </p>
              </div>

              {/* FORM */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {['Proprietorship', 'Partnership', 'OPC', 'LLP', 'Company', 'Section 8', 'Trust', 'Public Limited', 'Indian Subs.', 'Producer Company'].includes(activeEntity || '') ? (
                  <>
                    {/* STEP 1: CONTACT */}
                    {step === 1 && (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs text-[#6F6B63] mb-1">State</label>
                          <select
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            required
                            className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] bg-white appearance-none cursor-pointer"
                          >
                            <option value="">Select your state</option>
                            <option value="Delhi">Delhi NCR</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Telangana">Telangana</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs text-[#6F6B63] mb-1">Your Name</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B]"
                            placeholder="Full Name"
                          />
                        </div>
                        {!isLoggedIn && (
                          <div>
                            <label className="block text-xs text-[#6F6B63] mb-1">Email</label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B]"
                              placeholder="Email Address"
                            />
                          </div>
                        )}
                        <div>
                          <label className="block text-xs text-[#6F6B63] mb-1">Phone Number</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            maxLength={10}
                            className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B]"
                            placeholder="10-digit phone number"
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full bg-[#C15F3C] text-white font-semibold py-3 rounded-lg text-sm hover:bg-[#A94E30] transition"
                        >
                          Continue →
                        </button>
                      </div>
                    )}

                    {/* STEP 2: PROPOSED NAMES */}
                    {step === 2 && (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs text-[#6F6B63] mb-1">Proposed Name 1 (Required)</label>
                          <input
                            type="text"
                            name="proposedName1"
                            value={formData.proposedName1}
                            onChange={handleInputChange}
                            required
                            className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B]"
                            placeholder="First choice name"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-[#6F6B63] mb-1">Proposed Name 2 (Optional)</label>
                          <input
                            type="text"
                            name="proposedName2"
                            value={formData.proposedName2}
                            onChange={handleInputChange}
                            className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B]"
                            placeholder="Alternative name"
                          />
                        </div>
                        <div className="flex gap-2">
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

                    {/* STEP 3 IS NOW HANDLED BY THE RegistrationSummaryModal POPUP */}
                  </>
                ) : (
                  <>
                    {/* ORIGINAL FORM FOR OTHER ENTITIES */}
                    {/* STATE SELECT */}
                    <div>
                      <label className="block text-xs text-[#6F6B63] mb-1">
                        State
                      </label>
                      <div className="relative">
                        <select
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          required
                          className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] bg-white appearance-none cursor-pointer"
                        >
                          <option value="" className="text-[#B1ADA1]">Select your state</option>
                          <option value="Delhi">Delhi NCR</option>
                          <option value="Maharashtra">Maharashtra</option>
                          <option value="Karnataka">Karnataka</option>
                          <option value="Tamil Nadu">Tamil Nadu</option>
                          <option value="Gujarat">Gujarat</option>
                          <option value="Telangana">Telangana</option>
                          <option value="West Bengal">West Bengal</option>
                          <option value="Uttar Pradesh">Uttar Pradesh</option>
                          <option value="Rajasthan">Rajasthan</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg className="w-4 h-4 text-[#6F6B63]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* BUSINESS NAME */}
                    <div>
                      <label className="block text-xs text-[#6F6B63] mb-1">
                        Business Name
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        placeholder="e.g., Tech Solutions Pvt Ltd"
                        required
                        className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] placeholder-[#B1ADA1] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] bg-white"
                      />
                    </div>

                    {/* NAME & EMAIL */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs text-[#6F6B63] mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Name"
                          required
                          className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] placeholder-[#B1ADA1] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[#6F6B63] mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Email"
                          required
                          className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] placeholder-[#B1ADA1] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] bg-white"
                        />
                      </div>
                    </div>

                    {/* PHONE */}
                    <div>
                      <label className="block text-xs text-[#6F6B63] mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="10-digit phone number"
                        required
                        maxLength={10}
                        className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] bg-white"
                      />
                    </div>

                    {/* TWO COLUMN GRID */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs text-[#6F6B63] mb-1">Capital (₹)</label>
                        <input
                          type="text"
                          name="capital"
                          value={formData.capital}
                          onChange={handleInputChange}
                          placeholder="Amount"
                          required
                          className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[#6F6B63] mb-1">Members</label>
                        <input
                          type="number"
                          name="members"
                          value={formData.members}
                          onChange={handleInputChange}
                          placeholder="No."
                          required
                          className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] bg-white"
                        />
                      </div>
                    </div>

                    {/* SUBMIT BUTTON */}
                    <button
                      type="submit"
                      className="w-full bg-[#C15F3C] text-white font-semibold py-3 rounded-lg text-sm hover:bg-[#A94E30] transition shadow-sm hover:shadow-md mt-2"
                    >
                      Register Your {activeEntity} Now →
                    </button>
                  </>
                )}

                {/* SECURITY BADGE */}
                {(step === 1 || !['Proprietorship', 'Partnership', 'OPC', 'LLP', 'Company', 'Section 8', 'Trust', 'Public Limited', 'Indian Subs.', 'Producer Company'].includes(activeEntity || '')) && (
                  <div className="flex items-center justify-center gap-2 text-xs text-[#B1ADA1] pt-2">
                    <svg className="w-4 h-4 text-[#C15F3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>100% secure · No spam · Instant confirmation</span>
                  </div>
                )}
              </form>
            </div>

            {/* FOOTER */}
            <div className="bg-white px-6 py-3 border-t border-[#E5E2DA]">
              <p className="text-sm text-center text-[#6F6B63]">
                Already started your registration?{' '}
                <button onClick={handleTrackApplication} className="text-[#C15F3C] hover:underline font-semibold">
                  Track Application →
                </button>
              </p>
            </div>

          </div>
        </div>

        {/* TRUST BADGES - REDUCED BOTTOM GAP */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-[#6F6B63] mt-2 pb-0">
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-[#C15F3C] text-[#C15F3C]" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span>4.9/5 (2.5k+ reviews)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-r from-[#C15F3C] to-[#A94E30] border-2 border-white shadow-sm" />
              ))}
            </div>
            <span>Trusted by 50k+ businesses</span>
          </div>
        </div>

      </div>

      {/* REGISTRATION SUMMARY MODAL (PRE-PAYMENT) */}
      <AnimatePresence>
        {step === 3 && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden"
            >
              {/* MODAL HEADER */}
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

              {/* MODAL BODY */}
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
                        <span className="text-[#6F6B63]">Email</span>
                        <span className="font-semibold text-[#2F2E2B] break-all">{formData.email}</span>
                      </div>
                      <div className="flex flex-col text-sm">
                        <span className="text-[#6F6B63]">Phone</span>
                        <span className="font-semibold text-[#2F2E2B]">{formData.phone}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 border-l border-[#E5E2DA] pl-6">
                    <h4 className="text-[10px] font-bold text-[#B1ADA1] uppercase tracking-wider">Business Details</h4>
                    <div className="space-y-2">
                      <div className="flex flex-col text-sm">
                        <span className="text-[#6F6B63]">Registration Type</span>
                        <span className="font-semibold text-[#2F2E2B]">{activeEntity}</span>
                      </div>
                      <div className="flex flex-col text-sm">
                        <span className="text-[#6F6B63]">State</span>
                        <span className="font-semibold text-[#2F2E2B]">{formData.state}</span>
                      </div>
                      <div className="flex flex-col text-sm">
                        <span className="text-[#6F6B63]">Proposed Name 1</span>
                        <span className="font-semibold text-[#2F2E2B]">{formData.proposedName1}</span>
                      </div>
                      {formData.proposedName2 && (
                        <div className="flex flex-col text-sm">
                          <span className="text-[#6F6B63]">Proposed Name 2</span>
                          <span className="font-semibold text-[#2F2E2B]">{formData.proposedName2}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* PRICE CARD */}
                <div className="bg-[#F9F8F6] rounded-2xl p-6 border border-[#E5E2DA] flex justify-between items-center">
                  <div>
                    <span className="text-[#6F6B63] text-sm">Package Amount</span>
                    <p className="text-2xl font-bold text-[#2F2E2B]">₹{(activeEntity === 'Partnership' || activeEntity === 'OPC' || activeEntity === 'LLP' || activeEntity === 'Company' || activeEntity === 'Section 8' || activeEntity === 'Trust' || activeEntity === 'Public Limited' || activeEntity === 'Indian Subs.' || activeEntity === 'Producer Company') ? '1,999' : '999'} <span className="text-xs font-normal text-[#B1ADA1]">incl. taxes</span></p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-[#A94E30] font-bold uppercase block mb-1">Guaranteed</span>
                    <div className="flex gap-1 justify-end text-[#C15F3C]">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
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
                    className="flex-[2] bg-[#C15F3C] hover:bg-[#A94E30] text-white font-bold py-4 rounded-2xl transition shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2 group"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <>
                        Pay Now →
                      </>
                    )}
                  </button>
                </div>
                
                <p className="text-center text-[10px] text-[#B1ADA1]">
                  By clicking Pay Now, you agree to our terms and conditions. Instant automated confirmation.
                </p>
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
              {/* MODAL HEADER */}
              <div className="bg-gradient-to-r from-[#C15F3C] to-[#A94E30] p-8 text-center relative">
                <button 
                  onClick={() => setShowSuccessModal(false)}
                  className="absolute top-4 right-4 text-white/80 hover:text-white transition"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 12, delay: 0.2 }}
                  className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                >
                  <CheckCircle2 className="w-12 h-12 text-[#C15F3C]" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-white mb-1">Payment Successful!</h3>
                <p className="text-white/80 text-sm italic">Order ID: #{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
              </div>

              {/* MODAL BODY */}
              <div className="p-8 space-y-6">
                <div className="space-y-3 text-center">
                  <p className="text-[#2F2E2B] font-medium text-lg">
                    Thank you, {formData.name}!
                  </p>
                  <p className="text-[#6F6B63] text-sm leading-relaxed">
                    Your payment of <span className="font-bold text-[#C15F3C]">₹{(activeEntity === 'Partnership' || activeEntity === 'OPC' || activeEntity === 'LLP' || activeEntity === 'Company' || activeEntity === 'Section 8' || activeEntity === 'Trust' || activeEntity === 'Public Limited' || activeEntity === 'Indian Subs.' || activeEntity === 'Producer Company') ? '1,999' : '999'}</span> has been received successfully. 
                    We have captured all your registration details.
                  </p>
                </div>

                <div className="bg-[#F9F8F6] rounded-2xl p-4 border border-[#E5E2DA] space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#6F6B63]">Service</span>
                    <span className="font-semibold text-[#2F2E2B]">{activeEntity} Registration</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[#6F6B63]">Status</span>
                    <span className="text-[#10B981] font-bold">PAID</span>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="text-center text-[10px] text-[#B1ADA1] mb-4 uppercase tracking-widest font-bold">
                    What's Next?
                  </div>
                  
                  <button 
                    onClick={() => window.open(whatsappUrl, '_blank')}
                    className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 rounded-2xl transition shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2 group"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Complete via WhatsApp
                    <ExternalLink className="w-4 h-4 opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                  
                  <div className="mt-4 text-center">
                    <p className="text-xs text-[#6F6B63] flex items-center justify-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      Redirecting to WhatsApp in <span className="font-bold text-[#C15F3C]">{countdown}s</span>...
                    </p>
                    <p className="text-[10px] text-[#B1ADA1] mt-1">Please provide any remaining documents there.</p>
                  </div>
                </div>
              </div>

              {/* MODAL FOOTER */}
              <div className="bg-[#F4F3EE] p-4 text-center">
                <p className="text-[10px] text-[#B1ADA1]">
                  A confirmation email has also been sent to {formData.email}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
