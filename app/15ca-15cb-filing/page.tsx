"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import PopularSearches from "../components/PopularSearches";
import Ca15Cb15FilingHero from "../components/Registration/Ca15Cb15FilingHero";
import {
  CheckCircle,
  XCircle,
  Shield,
  Clock,
  Users,
  ShieldCheck,
  ArrowRight,
  Globe,
  FileText,
  Lock,
  MessageCircle,
  Star,
  ExternalLink,
} from "lucide-react";

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const FEATURES = [
  { icon: <FileText size={20} className="text-[#C15F3C]" />, title: "End-to-End Filing", desc: "We handle the entire process from Form 15CB preparation by a CA to online 15CA declaration on the IT portal." },
  { icon: <Shield size={20} className="text-[#C15F3C]" />, title: "CA Certification", desc: "Chartered Accountant certified Form 15CB for remittances exceeding ₹5 Lakhs, ensuring 100% compliance." },
  { icon: <Globe size={20} className="text-[#C15F3C]" />, title: "DTAA Optimization", desc: "Our experts analyze Tax Treaties (DTAA) to help you minimize TDS on foreign remittances legally." },
  { icon: <Lock size={20} className="text-[#C15F3C]" />, title: "Audit Trail", desc: "Maintain a clear digital record of all foreign remittances and tax declarations for future assessments." },
];

const ELIGIBILITY = [
  { title: "Residents", desc: "Individuals or companies remitting funds to non-residents." },
  { title: "Non-Residents", desc: "Foreign entities receiving payments from India." },
  { title: "Remitters", desc: "Anyone sending money abroad for business, services, or family." },
];

const COMPLIANCE_STEPS = [
  { step: "01", title: "Information Collection", desc: "Provide details of the remitter, beneficiary, and the nature of payment." },
  { step: "02", title: "CA Review (15CB)", desc: "Our CA reviews the transaction and issues Form 15CB certificate." },
  { step: "03", title: "Declaration (15CA)", desc: "We file the online 15CA declaration on the Income Tax portal." },
  { step: "04", title: "Bank Submission", desc: "The filed forms are submitted to the bank to release the remittance." },
];

// ─────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────
export default function FifteenCa15CbPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F4F3EE] font-sans">
        <Ca15Cb15FilingHero
          heading="15CA & 15CB"
          headingHighlight="Filing Compliance"
          description="Mandatory compliance for foreign remittances from India. Our expert CAs handle Form 15CA and 15CB to ensure smooth global payments and tax compliance."
          features={[
            { icon: "check", text: "Form 15CA (Declaration) Filing" },
            { icon: "check", text: "Chartered Accountant Certified 15CB" },
            { icon: "check", text: "DTAA Tax Benefit Analysis" },
            { icon: "check", text: "Faster Bank Remittance Approval" },
          ]}
          buttonText="File 15CA/15CB Now"
        />

        {/* 1. WHY COMPLIANCE MATTERS */}
        <section className="py-16 px-4 bg-white border-b border-[#E5E2DA]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[#C15F3C] text-xs font-bold uppercase tracking-widest bg-[#C15F3C]/5 px-4 py-1 rounded-full mb-4 inline-block">Compliance Overview</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-black">Hassle-Free Foreign Remittance</h2>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Every payment made outside India requires a declaration. We make sure yours is accurate, timely, and CA-certified.</p>
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

        {/* 2. ELIGIBILITY SECTION */}
        <section className="py-16 px-4 bg-[#F4F3EE]">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-6 leading-tight">When is 15CA & 15CB <span className="text-[#C15F3C]">Mandatory?</span></h2>
              <p className="text-gray-600 text-lg mb-8">As per Section 195 of the Income Tax Act, any resident making a payment to a non-resident must deduct TDS and file Form 15CA/15CB.</p>
              <div className="space-y-4">
                {ELIGIBILITY.map((e, i) => (
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
                  <Globe size={120} className="text-[#C15F3C]" />
               </div>
               <h3 className="font-bold text-xl mb-6 flex items-center gap-2"><ShieldCheck className="text-[#C15F3C]" /> Important Limits</h3>
               <ul className="space-y-6">
                 <li className="flex gap-4">
                   <div className="w-8 h-8 rounded-full bg-[#C15F3C]/10 flex items-center justify-center font-bold text-[#C15F3C]">1</div>
                   <p className="text-gray-600 text-sm">Payments up to <span className="font-bold text-black">₹5 Lakhs</span> in a year only require Form 15CA Part A.</p>
                 </li>
                 <li className="flex gap-4">
                   <div className="w-8 h-8 rounded-full bg-[#C15F3C]/10 flex items-center justify-center font-bold text-[#C15F3C]">2</div>
                   <p className="text-gray-600 text-sm">Payments exceeding <span className="font-bold text-black">₹5 Lakhs</span> require a CA Certificate in Form 15CB.</p>
                 </li>
                 <li className="flex gap-4">
                   <div className="w-8 h-8 rounded-full bg-[#C15F3C]/10 flex items-center justify-center font-bold text-[#C15F3C]">3</div>
                   <p className="text-gray-600 text-sm">No 15CA/15CB is required for certain <span className="font-bold text-black">specified payments</span> like import of goods.</p>
                 </li>
               </ul>
            </div>
          </div>
        </section>

        {/* 3. PROCESS STEPS */}
        <section className="py-16 px-4 bg-white border-t border-[#E5E2DA]">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-extrabold text-black">Filing Process</h2>
            <p className="text-gray-500 mt-2">Get your compliance done in 4 easy steps</p>
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
             <DynamicPricingSection category="15ca-15cb-filing" />
          </div>
        </section>

        {/* 5. FAQ */}
        <FAQAccordion category="15ca-15cb-filing" />

        {/* 6. FINAL CTA */}
        <section className="bg-[#F4F3EE] py-16 px-4">
           <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] p-12 text-center shadow-sm border-2 border-[#E5E2DA] relative overflow-hidden">
             <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-6">Need Expert Help with <span className="text-[#C15F3C]">Foreign Payments?</span></h2>
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
                   <Link href="#registration-form" className="bg-[#C15F3C] text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all">Start 15CA Filing</Link>
                   <button onClick={() => window.open(`https://wa.me/919999644807`, "_blank")} className="flex items-center justify-center gap-2 border-2 border-[#C15F3C] text-[#C15F3C] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#C15F3C] hover:text-white transition-all">
                      <MessageCircle size={20} /> Chat with CA
                   </button>
                </div>
                <div className="flex flex-wrap justify-center gap-8 text-gray-400 text-xs font-bold uppercase tracking-widest">
                   <span className="flex items-center gap-2"><Shield size={16} /> Secure Payment</span>
                   <span className="flex items-center gap-2"><Users size={16} /> 10K+ Remittances Handled</span>
                   <span className="flex items-center gap-2"><Clock size={16} /> 24-48h Processing</span>
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
