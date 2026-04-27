"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import PopularSearches from "../components/PopularSearches";
import TdsReturnFilingHero from "../components/Registration/TdsReturnFilingHero";
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
  Receipt,
  PieChart,
} from "lucide-react";

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const FEATURES = [
  { icon: <FileText size={20} className="text-[#C15F3C]" />, title: "Return Preparation", desc: "Expert preparation of Form 24Q (Salary), 26Q (Non-Salary), and 27Q (Foreign payments)." },
  { icon: <Receipt size={20} className="text-[#C15F3C]" />, title: "Challan Mapping", desc: "Precise reconciliation of TDS payments with government challans to avoid mismatches." },
  { icon: <PieChart size={20} className="text-[#C15F3C]" />, title: "Form 16/16A", desc: "Automated generation and distribution of TDS certificates to employees and vendors." },
  { icon: <ShieldCheck size={20} className="text-[#C15F3C]" />, title: "Notice Response", desc: "Professional assistance in responding to TDS defaults and interest notices from TRACES." },
];

const COMPLIANCE_STEPS = [
  { step: "01", title: "Collect Data", desc: "Provide details of payments made and TDS deducted during the quarter." },
  { step: "02", title: "Challan Audit", desc: "Our team verifies if all taxes were deposited correctly with the right section codes." },
  { step: "03", title: "Return Filing", desc: "We prepare the .fvu file and file it through TIN-FC or online portals." },
  { step: "04", title: "Form Issue", desc: "Receive the acknowledgement and generated TDS certificates (Form 16/16A)." },
];

// ─────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────
export default function TdsReturnFilingPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F4F3EE] font-sans">
        <TdsReturnFilingHero
          heading="TDS Return"
          headingHighlight="Filing"
          description="Ensure 100% compliance with quarterly TDS filings. Avoid heavy penalties and interest with our expert-managed return preparation and reconciliation service."
          features={[
            { icon: "check", text: "Quarterly Return Filing (24Q, 26Q, 27Q)" },
            { icon: "check", text: "TRACES Reconciliation & Form 26AS Match" },
            { icon: "check", text: "Form 16 & 16A Generation" },
            { icon: "check", text: "Late Fee & Interest Calculation Audit" },
          ]}
          buttonText="Start TDS Filing"
        />

        {/* 1. CORE BENEFITS */}
        <section className="py-16 px-4 bg-white border-b border-[#E5E2DA]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[#C15F3C] text-xs font-bold uppercase tracking-widest bg-[#C15F3C]/5 px-4 py-1 rounded-full mb-4 inline-block">Managed Compliance</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-black">Expert-Led TDS Filing</h2>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Don't risk tax notices. Our chartered accountants handle the complexities of TDS sections and challan reconciliations for you.</p>
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

        {/* 2. DEADLINES & PENALTIES */}
        <section className="py-16 px-4 bg-[#F4F3EE]">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-6 leading-tight">Stay Ahead of <span className="text-[#C15F3C]">TDS Deadlines</span></h2>
              <p className="text-gray-600 text-lg mb-8">Late filing of TDS returns attracts a penalty of ₹200 per day under Section 234E. We ensure your returns are filed well before the due date.</p>
              <div className="space-y-4">
                {[
                  { title: "Quarter 1", desc: "Due by 31st July (For Apr - Jun deductions)." },
                  { title: "Quarter 2", desc: "Due by 31st October (For Jul - Sep deductions)." },
                  { title: "Quarter 3", desc: "Due by 31st January (For Oct - Dec deductions)." },
                  { title: "Quarter 4", desc: "Due by 31st May (For Jan - Mar deductions)." },
                ].map((e, i) => (
                  <div key={i} className="flex gap-4 items-start bg-white p-4 rounded-2xl border border-[#E5E2DA] shadow-sm">
                    <Clock className="text-[#C15F3C] mt-1 shrink-0" size={20} />
                    <div>
                      <h4 className="font-bold text-black">{e.title}</h4>
                      <p className="text-gray-500 text-sm">{e.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border-2 border-[#E5E2DA] relative overflow-hidden">
               <h3 className="font-bold text-xl mb-6 flex items-center gap-2 text-red-600"><AlertCircle /> Common TDS Sections</h3>
               <div className="space-y-4">
                 <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <p className="font-bold text-black">Section 192</p>
                    <p className="text-xs text-gray-500">TDS on Salary Payments (Form 24Q)</p>
                 </div>
                 <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <p className="font-bold text-black">Section 194C</p>
                    <p className="text-xs text-gray-500">Payments to Contractors (Form 26Q)</p>
                 </div>
                 <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <p className="font-bold text-black">Section 194J</p>
                    <p className="text-xs text-gray-500">Professional or Technical Fees (Form 26Q)</p>
                 </div>
                 <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <p className="font-bold text-black">Section 194I</p>
                    <p className="text-xs text-gray-500">Rent on Land, Building or Machinery (Form 26Q)</p>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* 3. PROCESS STEPS */}
        <section className="py-16 px-4 bg-white border-t border-[#E5E2DA]">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-extrabold text-black">Our Filing Workflow</h2>
            <p className="text-gray-500 mt-2">Zero-error processing for your quarterly compliance</p>
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
             <DynamicPricingSection category="TDS Return Filing" />
          </div>
        </section>

        {/* 5. FAQ */}
        <FAQAccordion category="tds-return-filing" />

        {/* 6. FINAL CTA */}
        <section className="bg-[#F4F3EE] py-16 px-4">
           <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] p-12 text-center shadow-sm border-2 border-[#E5E2DA] relative overflow-hidden">
             <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-6">Automate your <span className="text-[#C15F3C]">TDS Compliance</span></h2>
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
                   <Link href="#registration-form" className="bg-[#C15F3C] text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all">Start Filing</Link>
                   <button onClick={() => window.open(`https://wa.me/919999644807`, "_blank")} className="flex items-center justify-center gap-2 border-2 border-[#C15F3C] text-[#C15F3C] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#C15F3C] hover:text-white transition-all">
                      <MessageCircle size={20} /> Talk to Expert
                   </button>
                </div>
                <div className="flex flex-wrap justify-center gap-8 text-gray-400 text-xs font-bold uppercase tracking-widest">
                   <span className="flex items-center gap-2"><Shield size={16} /> TRACES Certified</span>
                   <span className="flex items-center gap-2"><Users size={16} /> 10k+ Returns Filed</span>
                   <span className="flex items-center gap-2"><Briefcase size={16} /> Zero Penalties</span>
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
