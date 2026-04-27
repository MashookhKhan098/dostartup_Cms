"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import PopularSearches from "../components/PopularSearches";
import IncomeTaxNoticeHero from "../components/Registration/IncomeTaxNoticeHero";
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
  Scale,
  SearchCheck,
} from "lucide-react";

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const NOTICE_TYPES = [
  { icon: <SearchCheck size={20} className="text-[#C15F3C]" />, title: "Section 143(1)", desc: "Intimation notice regarding mismatches in your return processing." },
  { icon: <AlertCircle size={20} className="text-[#C15F3C]" />, title: "Section 143(2)", desc: "Scrutiny notice requiring detailed explanation of your income & deductions." },
  { icon: <TrendingUp size={20} className="text-[#C15F3C]" />, title: "Section 148", desc: "Reassessment notice if the department believes income has escaped assessment." },
  { icon: <Scale size={20} className="text-[#C15F3C]" />, title: "Section 156", desc: "Notice of Demand for outstanding tax, interest, or penalties." },
];

const PROCESS_STEPS = [
  { step: "01", title: "Upload Notice", desc: "Share your notice securely with our senior tax experts." },
  { step: "02", title: "Expert Review", desc: "We analyze the grounds of the notice and identify the best response strategy." },
  { step: "03", title: "Draft Reply", desc: "Our CAs draft a professional legal reply supported by relevant case laws." },
  { step: "04", title: "Submission", desc: "We file the response on the e-filing portal and follow up until closure." },
];

// ─────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────
export default function IncomeTaxNoticePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F4F3EE] font-sans">
        <IncomeTaxNoticeHero
          heading="Income Tax"
          headingHighlight="Notice Response"
          description="Don't panic about tax notices. Get expert legal representation and professional drafting to resolve your income tax issues efficiently."
          features={[
            { icon: "check", text: "Expert Notice Authentication" },
            { icon: "check", text: "Professional Reply Drafting" },
            { icon: "check", text: "E-filing Portal Submission" },
            { icon: "check", text: "End-to-End Case Management" },
          ]}
          buttonText="Get Expert Help"
        />

        {/* 1. WHY PROFESSIONAL HELP? */}
        <section className="py-16 px-4 bg-white border-b border-[#E5E2DA]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[#C15F3C] text-xs font-bold uppercase tracking-widest bg-[#C15F3C]/5 px-4 py-1 rounded-full mb-4 inline-block">Legal Expertise</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-black">Why you need an expert</h2>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Responding to a tax notice without legal knowledge can lead to heavy penalties. Our team ensures your rights are protected.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {NOTICE_TYPES.map((f, i) => (
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

        {/* 2. COMMON CAUSES */}
        <section className="py-16 px-4 bg-[#F4F3EE]">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-6 leading-tight">Common causes for <span className="text-[#C15F3C]">Tax Notices</span></h2>
              <p className="text-gray-600 text-lg mb-8">The Income Tax Department uses advanced data analytics (AIS/TIS) to flag discrepancies in your filings.</p>
              <div className="space-y-4">
                {[
                  { title: "Income Mismatch", desc: "Difference between your ITR and Form 26AS/AIS data." },
                  { title: "High-Value Transactions", desc: "Large cash deposits or property purchases not explained." },
                  { title: "Defective Return", desc: "Incorrect forms used or missing schedules in your filing." },
                  { title: "Tax Evasion Doubts", desc: "Abnormal variations in income compared to previous years." },
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
               <h3 className="font-bold text-xl mb-6 flex items-center gap-2"><ShieldCheck className="text-[#C15F3C]" /> Risk Assessment</h3>
               <p className="text-sm text-gray-500 mb-6">Ignoring a notice is the worst thing you can do. Penalties can range from 50% to 200% of the tax sought to be evaded.</p>
               <ul className="space-y-4">
                 <li className="flex gap-4">
                   <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center font-bold text-red-600">!</div>
                   <p className="text-gray-600 text-sm italic">"Failure to comply with a notice under Section 142(1) can lead to Best Judgment Assessment."</p>
                 </li>
                 <li className="flex gap-4">
                   <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center font-bold text-blue-600">i</div>
                   <p className="text-gray-600 text-sm italic">"Always check the DIN (Document Identification Number) to verify the notice's authenticity."</p>
                 </li>
               </ul>
            </div>
          </div>
        </section>

        {/* 3. PROCESS STEPS */}
        <section className="py-16 px-4 bg-white border-t border-[#E5E2DA]">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-extrabold text-black">Our Resolution Framework</h2>
            <p className="text-gray-500 mt-2">A systematic approach to close your tax litigation</p>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROCESS_STEPS.map((s, i) => (
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
             <DynamicPricingSection category="Income Tax Notice" />
          </div>
        </section>

        {/* 5. FAQ */}
        <FAQAccordion category="income-tax-notice" />

        {/* 6. FINAL CTA */}
        <section className="bg-[#F4F3EE] py-16 px-4">
           <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] p-12 text-center shadow-sm border-2 border-[#E5E2DA] relative overflow-hidden">
             <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-6">Resolve your <span className="text-[#C15F3C]">Tax Notices</span> Today</h2>
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
                   <Link href="#registration-form" className="bg-[#C15F3C] text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all">Submit My Notice</Link>
                   <button onClick={() => window.open(`https://wa.me/919999644807`, "_blank")} className="flex items-center justify-center gap-2 border-2 border-[#C15F3C] text-[#C15F3C] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#C15F3C] hover:text-white transition-all">
                      <MessageCircle size={20} /> Chat with Specialist
                   </button>
                </div>
                <div className="flex flex-wrap justify-center gap-8 text-gray-400 text-xs font-bold uppercase tracking-widest">
                   <span className="flex items-center gap-2"><Shield size={16} /> 100% Confidential</span>
                   <span className="flex items-center gap-2"><Users size={16} /> 5k+ Notices Resolved</span>
                   <span className="flex items-center gap-2"><Briefcase size={16} /> Expert CA Support</span>
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
