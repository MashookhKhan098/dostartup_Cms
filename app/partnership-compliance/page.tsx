"use client";

import React, { useState } from "react";
import { Check, Plus } from "lucide-react";
import Navbar from "../components/Navbar";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import PopularSearches from "../components/PopularSearches";
import DynamicPricingSection from "../components/DynamicPricingSection";

const ASSETS = {
  logo: "/images/india-logo.jpg",
  heroBg: "/images/hero.png",
  whatsapp: "/images/whatsapp.png",
  ledgersBadge: "/images/ledgers-badge.png",
  hrPeople: "/images/hr-payroll.png",
};

export default function ProprietorshipCompliancePage(): React.ReactElement {
  const [gstin, setGstin] = useState("");

  const faqQuestions = [
    "Is it mandatory to file ITR for a proprietorship?",
    "Which ITR form should a proprietor use?",
    "When does a proprietorship require an audit?",
    "When is GST registration required for proprietorships?",
    "What documents are needed to file ITR for a proprietorship?",
    "How does presumptive taxation help proprietors?",
  ];

  const faqAnswers: Record<number, string> = {
    0: "Yes — proprietorship income is treated as the proprietor's personal income. Filing ITR is mandatory if income crosses applicable thresholds or in other specified scenarios.",
    1: "Proprietors generally use ITR-3 (if not under presumptive scheme) or ITR-4 (Sugam) if opting for presumptive taxation under Sections like 44AD/44ADA.",
    2: "An audit is required when turnover/receipts exceed statutory limits (e.g., turnover > Rs. 5 crore for some cases or professional receipts > Rs. 50 lakh), or when specific provisions apply.",
    3: "GST registration is required when aggregate turnover exceeds the threshold (generally Rs. 20 lakh in many states; thresholds may vary). Once registered, GSTR-1 and GSTR-3B (and others where applicable) must be filed.",
    4: "Key documents: PAN, Aadhaar, bank statements, books of accounts, challans (advance tax/TDS), Form 16/16A/26AS, invoices and proofs of expenses.",
    5: "Presumptive taxation simplifies compliance for small taxpayers by allowing income to be declared at prescribed rates (Section 44AD/44ADA), reducing record-keeping and audit requirements for eligible businesses.",
  };

  return (
    <div className="min-h-screen bg-[#F4F3EE] text-gray-800 font-sans antialiased">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-[#F4F3EE] py-3">
        <div className="max-w-[1180px] mx-auto px-6 text-sm text-gray-400">
          Home / Services /{" "}
          <span className="text-[#C15F3C] font-medium">Proprietorship Compliance</span>
        </div>
      </div>

      <div className="py-2">
        <div className="max-w-[1180px] mx-auto px-6">
          <section
            aria-label="hero"
            className="relative rounded-[40px] overflow-hidden shadow-sm"
            style={{ minHeight: 400 }}
          >
            <div
              className="absolute inset-0 bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${ASSETS.heroBg})` }}
            >
              <img src={ASSETS.heroBg} alt="hero-bg" className="hidden" />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(11, 12, 16, 0.9) 0%, rgba(11, 12, 16, 0.7) 100%)",
                }}
              />
            </div>

            <div className="relative z-10">
              <div className="mx-auto max-w-[1180px] px-6 py-10 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 max-w-2xl">
                  <div className="bg-transparent rounded-2xl p-2 md:p-4 backdrop-blur-sm">
                    <div className="inline-flex items-center gap-1.5 bg-[#C15F3C]/20 border border-[#C15F3C]/30 rounded-full px-3 py-1 mb-6">
                      <div className="w-1.5 h-1.5 bg-[#C15F3C] rounded-full animate-pulse" />
                      <span className="text-xs font-bold text-white uppercase tracking-wider">PROPRIETORSHIP COMPLIANCE</span>
                    </div>
                    <h1 className="text-white text-3xl md:text-5xl leading-tight font-bold mb-4 tracking-tight">
                      Proprietorship Compliance
                    </h1>
                    <p className="text-gray-400 text-sm md:text-base mb-8 max-w-prose leading-relaxed">
                      File GST & IT returns, handle financial statement
                      preparation, and manage all monthly and annual compliances
                      effortlessly using our Accountants & LEDGERS platform.
                    </p>

                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="flex flex-col sm:flex-row items-center gap-4"
                    >
                      <input
                        aria-label="ENTER GSTIN"
                        placeholder="ENTER GSTIN"
                        value={gstin}
                        onChange={(e) => setGstin(e.target.value)}
                        className="w-full sm:w-[360px] bg-[#1A1C23] border border-gray-800 rounded-xl px-4 py-4 text-white outline-none focus:ring-1 focus:ring-[#C15F3C] transition-all"
                      />
                      <button className="px-10 py-4 bg-white text-[#0B0C10] rounded-xl font-bold hover:bg-gray-100 transition shadow-xl text-base">
                        Get Accountant
                      </button>
                    </form>

                    <p className="mt-6 text-sm text-gray-500 font-medium">
                      Dedicated support, flexible cost — Experienced accountant at a fraction of a full-time hire.
                    </p>
                  </div>
                </div>

                <div className="w-full md:w-96 flex justify-end">
                   <img
                     src={ASSETS.hrPeople}
                     alt="Proprietorship"
                     className="w-[420px] h-auto object-contain drop-shadow-2xl scale-110 hidden md:block"
                   />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="max-w-[1180px] mx-auto px-6 py-2">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Accurate & timely compliance", desc: "End-to-end preparation and filing of GST, Income Tax with due-date tracking and timely reviews.", icon: "✔" },
            { title: "Powered by LEDGERS", desc: "Automated bank feeds and reconciliations, e-invoice, document vault, and audit-ready reports.", icon: "⚡" },
            { title: "Dedicated Accountants", desc: "Experienced accountants to manage monthly bookkeeping, GST/IT filings, and reconciliations.", icon: "👥" }
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-[32px] border border-gray-50 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-slate-50 grid place-items-center text-[#C15F3C] font-bold text-xl border border-gray-100">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-[#0B2545] text-lg leading-tight uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-bold italic">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>

      <main className="max-w-[1180px] mx-auto px-6 py-2 space-y-2">

        <section className="bg-white rounded-[32px] border border-gray-50 p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-center text-[#0B2545] mb-2">
            Services Offered
          </h3>
          <p className="text-gray-500 mt-3 text-center max-w-2xl mx-auto font-bold italic">
            We provide comprehensive accounting support tailored to meet the day-to-day financial needs of your business
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {[
              { title: "Access to LEDGERS", desc: "Record and review transactions in real time with shared access — clean books, clear audit trail, one workspace." },
              { title: "GST Return Filing", desc: "GSTR-1, GSTR-3B (and others as needed) prepared, reconciled, and filed on time with input/output matching." },
              { title: "Preparation of Financial Statements", desc: "We prepare Balance Sheet, Profit & Loss Account, and Trial Balance as per accounting standards." },
              { title: "Income Tax Return Filing", desc: "ITR preparation and filing for businesses/individuals with correct income, deductions, and disclosures." },
              { title: "E-Invoicing & E-Way Bill", desc: "Easy IRN-based e-invoice generation with priority focus on accurate and timely E-Way Bill creation." },
              { title: "CA Assistance", desc: "Get 4 consultations with a Chartered Accountant for guidance on accounting, taxation, and compliance matters." }
            ].map((s, i) => (
              <div key={i} className="p-8 rounded-2xl border border-gray-50 bg-slate-50/30 hover:bg-slate-50 transition-colors">
                <h4 className="font-bold text-[#0B2545] mb-3 uppercase text-sm tracking-wide">{s.title}</h4>
                <p className="text-xs text-gray-400 font-bold leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-[32px] border border-gray-50 p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-center text-[#0B2545] mb-2">How It Works</h3>
          <p className="text-gray-500 mt-3 text-center font-bold italic">
            A guided onboarding process with consistent monthly accounting and reporting.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative">
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gray-100 hidden md:block -translate-y-1/2" />
            {[
              { idx: 1, title: "Assign your accountant", desc: "You get a named accountant familiar with your industry and a clear kickoff checklist." },
              { idx: 2, title: "System Setup", desc: "Connect bank feeds, import masters & opening balances, map ledgers/tax series, and configure LEDGERS." },
              { idx: 3, title: "Monthly close & compliance", desc: "Bank/vendor/customer reconciliations, MIS, and on-time GST, Finance Statement Preparation and Income Tax filings." }
            ].map((step) => (
              <div key={step.idx} className="relative z-10 bg-white px-4">
                <div className="mx-auto w-16 h-16 rounded-full border-2 border-[#C15F3C] bg-white flex items-center justify-center text-xl font-bold text-[#C15F3C] shadow-lg">
                  {step.idx}
                </div>
                <h4 className="font-bold mt-6 text-[#0B2545] uppercase text-sm">{step.title}</h4>
                <p className="text-xs text-gray-500 mt-3 leading-relaxed font-bold italic max-w-[240px] mx-auto">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-[32px] border border-gray-50 p-8 shadow-sm">
          <h3 className="text-2xl font-bold mb-8 text-[#0B2545] text-center">
            Why DoStartup for Fractional Accountant
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Affordable Expertise", desc: "Skilled accountants without full-time hiring costs." },
              { title: "Zero Surprises", desc: "Transparent reporting and proactive due-date alerts." },
              { title: "Scalable Service", desc: "Start with books; add GST/IT filings as you grow." },
              { title: "Software + Service", desc: "The LEDGERS platform, bundled with experts." }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl border border-gray-100 bg-white hover:bg-slate-50 transition-all shadow-sm">
                <h4 className="font-bold text-[#0B2545] text-sm mb-3 uppercase tracking-tight">{item.title}</h4>
                <p className="text-xs text-gray-500 font-bold italic">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-[32px] border border-gray-50 p-8 shadow-sm">
          <h3 className="text-xl font-bold mb-4 text-[#C15F3C]">
            Proprietorship Compliance — What you need to know
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed font-bold italic">
            Running a Sole Proprietorship in India comes with a set of crucial
            financial and legal responsibilities. Compliance with various tax
            and regulatory requirements is essential to ensure your business's
            smooth operation and growth. This includes filing Income Tax
            Returns, TDS Returns, GST Returns, EPF Returns, maintaining accurate
            accounting records, and sometimes undergoing a Tax Audit.
          </p>

          <h4 className="font-bold mt-6 text-[#C15F3C] text-sm uppercase tracking-wide">
            Income Tax Return filing for Proprietorship
          </h4>
          <p className="mt-2 text-xs text-gray-500 font-bold leading-relaxed">
            Every proprietorship in India is obligated to file income tax
            returns annually as it is treated as an extension of the proprietor.
            The proprietor's PAN is used for filing. Filing a NIL return is
            required if income is zero.
          </p>

          <h4 className="font-bold mt-6 text-[#C15F3C] text-sm uppercase tracking-wide">
            Is it necessary for Proprietorship to File ITR?
          </h4>
          <p className="mt-2 text-xs text-gray-500 font-bold leading-relaxed">
            Yes. Proprietors must file ITR if total income exceeds thresholds
            based on age and other conditions. Filing on time allows losses to
            be carried forward and certain deductions to be claimed.
          </p>

          <h4 className="font-bold mt-6 text-[#C15F3C] text-sm uppercase tracking-wide">
            Income Tax Slabs & Alternate Regime
          </h4>
          <p className="mt-2 text-xs text-gray-500 font-bold leading-relaxed">
            Proprietors follow the individual tax slabs for their personal
            income. An alternate tax regime (Section 115BAC) is available with
            specific rates and conditions — opting for it requires giving up
            certain exemptions/deductions.
          </p>

          <h4 className="font-bold mt-6 text-[#C15F3C] text-sm uppercase tracking-wide">Presumptive Taxation Scheme</h4>
          <p className="mt-2 text-xs text-gray-500 font-bold leading-relaxed">
            Small taxpayers can opt for presumptive taxation (Section
            44AD/44ADA), enabling taxation on estimated income and reducing
            record-keeping and audit burdens.
          </p>

          <h4 className="font-bold mt-6 text-[#C15F3C] text-sm uppercase tracking-wide">Deadlines & Audit</h4>
          <p className="mt-2 text-xs text-gray-500 font-bold leading-relaxed">
            Typical ITR deadline (no audit): July 31. If audit required,
            deadlines vary (commonly September/November depending on
            circumstances). Audit thresholds depend on turnover/receipts and
            scheme applicability.
          </p>

          <h4 className="font-bold mt-10 text-[#0B2545] text-base uppercase tracking-tight">Required Documents</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {[
              "PAN Card",
              "Bank Account Details & Statements",
              "Aadhaar Card",
              "Advance Tax Payment Challan, Form 16/16A/26AS",
              "Invoices and proofs of expenses"
            ].map((doc, i) => (
              <div key={i} className="p-4 border border-gray-100 rounded-xl bg-slate-50/50 text-xs font-bold text-[#4F4C45] shadow-sm">
                {doc}
              </div>
            ))}
          </div>
        </section>

      </main>

      <FAQAccordion category="proprietorship-compliance" />

      <PopularSearches />
      <Footer />

      {/* WhatsApp CTA */}
      <div className="fixed right-6 bottom-6 bg-[#C15F3C] text-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-3 z-50 hover:scale-105 transition-all cursor-pointer font-bold border-2 border-white/20">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M12 2a10 10 0 00-8.66 14.2L2 22l5.93-1.7A10 10 0 1012 2z" />
        </svg>
        Live Chat with Experts
      </div>
    </div>
  );
}
