"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import PopularSearches from "../components/PopularSearches";
import TanRegistrationHero from "../components/Registration/TanRegistrationHero";
import {
  CheckCircle,
  FileText,
  Shield,
  Clock,
  Briefcase,
  AlertCircle,
  MessageCircle,
  Users,
  ShieldCheck,
  ChevronRight,
  TrendingUp,
  Fingerprint,
} from "lucide-react";

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const FEATURES = [
  { icon: <FileText size={20} className="text-[#C15F3C]" />, title: "Full Application", desc: "End-to-end filing of Form 49B with the Income Tax Department for quick TAN allocation." },
  { icon: <ShieldCheck size={20} className="text-[#C15F3C]" />, title: "Verification", desc: "Pre-submission audit of your PAN and office address to ensure 100% approval rate." },
  { icon: <TrendingUp size={20} className="text-[#C15F3C]" />, title: "TDS Compliance", desc: "Expert guidance on how to quote TAN and manage quarterly TDS/TCS returns." },
  { icon: <Clock size={20} className="text-[#C15F3C]" />, title: "Speedy Delivery", desc: "Acknowledgement number generated within 24 hours for immediate use in business." },
];

const COMPLIANCE_STEPS = [
  { step: "01", title: "Apply Online", desc: "Fill our simple form and select your service package." },
  { step: "02", title: "Submit Documents", desc: "Upload PAN and address proof to our secure portal." },
  { step: "03", title: "Govt Processing", desc: "We file Form 49B and handle any dept queries." },
  { step: "04", title: "TAN Allotted", desc: "Receive your unique 10-digit TAN number via email." },
];

// ─────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────
export default function TanRegistrationPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F4F3EE] font-sans">
        <TanRegistrationHero
          heading="TAN"
          headingHighlight="Registration"
          description="Tax Deduction and Collection Account Number is mandatory for every business deductor. Get your TAN certificate quickly with our expert-assisted filing service."
          features={[
            { icon: "check", text: "New TAN Application (Form 49B)" },
            { icon: "check", text: "Expert PAN & Address Verification" },
            { icon: "check", text: "TDS/TCS Compliance Advisory" },
            { icon: "check", text: "Lifetime Validity Guarantee" },
          ]}
          buttonText="Register for TAN"
        />

        {/* 1. WHY TAN IS IMPORTANT */}
        <section className="py-16 px-4 bg-white border-b border-[#E5E2DA]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[#C15F3C] text-xs font-bold uppercase tracking-widest bg-[#C15F3C]/5 px-4 py-1 rounded-full mb-4 inline-block">Official Compliance</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-black">Mandatory for Every Deductor</h2>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto">TAN is a 10-digit alpha-numeric number required by all persons responsible for deducting or collecting tax at source.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {FEATURES.map((f, i) => (
                <div key={i} className="p-8 rounded-[2rem] bg-[#F4F3EE]/50 border-2 border-transparent hover:border-[#C15F3C]/20 hover:bg-white hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                    {f.icon}
                  </div>
                  <h3 className="text-black font-bold text-lg mb-3">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. WHO NEEDS TAN? */}
        <section className="py-16 px-4 bg-[#F4F3EE]">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-6 leading-tight">Does your business <span className="text-[#C15F3C]">need a TAN?</span></h2>
              <p className="text-gray-600 text-lg mb-8">If you pay salary, rent, or professional fees above certain limits, you must deduct TDS and deposit it using a TAN.</p>
              <div className="space-y-4">
                {[
                  { title: "Proprietorships", desc: "If turnover exceeds audit limits or paying salaries." },
                  { title: "Companies/LLPs", desc: "Mandatory for all registered corporate entities." },
                  { title: "NGOs/Trusts", desc: "Required for processing donations and payouts." },
                ].map((e, i) => (
                  <div key={i} className="flex gap-4 items-start bg-white p-4 rounded-2xl border border-[#E5E2DA] shadow-sm">
                    <CheckCircle className="text-[#C15F3C] mt-1 shrink-0" size={20} />
                    <div>
                      <h4 className="font-bold text-black">{e.title}</h4>
                      <p className="text-gray-500 text-sm">{e.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border-2 border-[#E5E2DA] relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Fingerprint size={120} className="text-[#C15F3C]" />
               </div>
               <h3 className="font-bold text-xl mb-6 flex items-center gap-2"><ShieldCheck className="text-[#C15F3C]" /> The TAN Format</h3>
               <p className="text-sm text-gray-500 mb-6">A TAN consists of 10 alphanumeric characters (e.g., MUMB12345C):</p>
               <ul className="space-y-4">
                 <li className="flex gap-4">
                   <div className="w-8 h-8 rounded-full bg-[#C15F3C]/10 flex items-center justify-center font-bold text-[#C15F3C]">1</div>
                   <p className="text-gray-600 text-sm">First 3 letters: City/Region code.</p>
                 </li>
                 <li className="flex gap-4">
                   <div className="w-8 h-8 rounded-full bg-[#C15F3C]/10 flex items-center justify-center font-bold text-[#C15F3C]">2</div>
                   <p className="text-gray-600 text-sm">4th letter: Initial of the entity name.</p>
                 </li>
                 <li className="flex gap-4">
                   <div className="w-8 h-8 rounded-full bg-[#C15F3C]/10 flex items-center justify-center font-bold text-[#C15F3C]">3</div>
                   <p className="text-gray-600 text-sm">Next 5 digits & last letter: System generated.</p>
                 </li>
               </ul>
            </div>
          </div>
        </section>

        {/* 3. PROCESS STEPS */}
        <section className="py-16 px-4 bg-white border-t border-[#E5E2DA]">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-extrabold text-black">TAN Allocation Process</h2>
            <p className="text-gray-500 mt-2">Smooth and digital application from start to finish</p>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {COMPLIANCE_STEPS.map((s, i) => (
              <div key={i} className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-[#F4F3EE] flex items-center justify-center mx-auto mb-4 border-2 border-dashed border-[#C15F3C]/20 text-[#C15F3C] font-black text-xl">
                  {s.step}
                </div>
                <h4 className="font-bold text-black mb-2">{s.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. PRICING */}
        <section id="pricing" className="bg-[#F4F3EE] py-16 px-4">
          <div className="max-w-7xl mx-auto">
             <DynamicPricingSection category="tan-registration" />
          </div>
        </section>

        {/* 5. FAQ */}
        <FAQAccordion category="tan-registration" />

        {/* 6. FINAL CTA */}
        <section className="bg-[#F4F3EE] py-16 px-4">
           <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] p-12 text-center shadow-sm border-2 border-[#E5E2DA] relative overflow-hidden">
             <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-6">Ready to get your <span className="text-[#C15F3C]">TAN Allotted?</span></h2>
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
                   <Link href="#registration-form" className="bg-[#C15F3C] text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all">Apply Now</Link>
                   <button onClick={() => window.open(`https://wa.me/919999644807`, "_blank")} className="flex items-center justify-center gap-2 border-2 border-[#C15F3C] text-[#C15F3C] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#C15F3C] hover:text-white transition-all">
                      <MessageCircle size={20} /> Chat with Expert
                   </button>
                </div>
                <div className="flex flex-wrap justify-center gap-8 text-gray-400 text-xs font-bold uppercase tracking-widest">
                   <span className="flex items-center gap-2"><Shield size={16} /> Official Filing</span>
                   <span className="flex items-center gap-2"><Users size={16} /> 25k+ TANs Allotted</span>
                   <span className="flex items-center gap-2"><Briefcase size={16} /> Lifetime Validity</span>
                </div>
             </div>
           </div>
        </section>

        <PopularSearches />
      </main>
      <Footer />
    </>
  );
}
