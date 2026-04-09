"use client";

import React, { useEffect, useRef, useState } from "react";
import { Search, Check, Plus, ChevronDown } from "lucide-react";
import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";

const ASSETS = {
 logo: "/images/india-logo.jpg",
 heroBg: "/images/hero.png",
 whatsapp: "/images/whatsapp.png",
 docsImg: "/images/business-docs.png",
 formsImg: "/images/business-forms.png",
 docsRequiredImg: "/images/business-docs-required.png",
 ledgersBadge: "/images/ledgers-badge.png",
 hrPeople: "/images/hr-payroll.png",
};

const POPULAR_SEARCHES = [
 "Partnership",
 "Limited Liability Partnership",
 "Digital Signature",
 "Copyright Registration",
 "Unified Portal",
 "PAN Card Download",
 "Nadakacheri",
 "Flipkart Seller",
 "Caste Certificate",
 "IAY",
 "EPFO Passbook",
 "Domicile Certificate",
 "Udyog Aadhaar",
 "PF Withdrawal",
 "Karnataka One",
 "Encumbrance Certificate",
 "Bonafide Certificate",
 "Instant PAN Card",
 "E PAN Card",
 "Income Certificate",
 "Marriage Certificate",
 "Passport Renewal",
 "Nivesh Mitra",
 "MSME Registration",
 "Experience Certificate",
 "Trademark Status",
 "Trade License",
 "Domicile",
 "eMitra",
 "UAN",
 "PICME",
 "Resignation Letter Format",
 "Ration Card",
 "TNREGINET",
 "RAJSSP",
 "LLP Compliance",
 "Form 16",
 "Police Clearance Certificate",
 "OBC Certificate",
 "Jamabandi",
 "Mee Bhoomi",
 "SC Certificate",
 "UAN Login",
 "eAadhaar Download",
 "Linking Aadhaar To Bank Accounts",
 "mAadhaar",
 "Aadhaar Enrollment Centre",
 "UAN Passbook",
 "Amazon How to Sell",
 "PAN Card Apply",
 "EPFO Unified Portal",
];

function useOnClickOutside<T extends HTMLElement = HTMLElement>(
 ref: React.RefObject<T | null>,
 handler: () => void
) {
 useEffect(() => {
 const listener = (event: MouseEvent | TouchEvent) => {
 const el = ref?.current;
 if (!el || el.contains(event.target as Node)) return;
 handler();
 };
 document.addEventListener("mousedown", listener);
 document.addEventListener("touchstart", listener);
 return () => {
 document.removeEventListener("mousedown", listener);
 document.removeEventListener("touchstart", listener);
 };
 }, [handler, ref]);
}

export default function TDSReturnFilingPage(): React.ReactElement {
 const [gstin, setGstin] = useState("");
 const [faqOpen, setFaqOpen] = useState<number | null>(null);
 const faqQuestions = [
 "What is TDS?",
 "What is TAN?",
 "Which forms are used for TDS returns?",
 "What are the due dates for TDS returns?",
 "What is the penalty for late filing of TDS returns?",
 "How do I deposit TDS online?",
 ];
 const faqAnswers: Record<number, string> = {
 0: "Tax Deducted at Source (TDS) is when tax is deducted by the payer at the time of making specified payments to the payee.",
 1: "TAN is the Tax Deduction and Collection Account Number required for deductors to file TDS returns and deposit TDS.",
 2: "Common forms include 24Q (salaries), 26Q (non-salary payments), 27Q (payments to non-residents), and 27EQ (TCS).",
 3: "Quarterly TDS return due dates: Q1 (Apr-Jun) - July 31, Q2 (Jul-Sep) - Oct 31, Q3 (Oct-Dec) - Jan 31, Q4 (Jan-Mar) - May 31.",
 4: "Penalties can include interest for late deduction/remittance and fees per day for late filing; assessing officer may impose additional penalties.",
 5: "Deposit TDS online using the government's challan system/authorized bank portals, ensuring correct TAN, challan and payment details.",
 };

 return (
 <div className="min-h-screen bg-[#F4F3EE] text-gray-800 font-sans antialiased">
 {/* Navbar - Imported */}
 <Navbar />

 <div className="py-3">
 <div className="max-w-[1180px] mx-auto px-6">
 <section
 aria-label="hero"
 className="relative rounded-2xl overflow-hidden shadow-sm"
 style={{ minHeight: 320 }}
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
 "linear-gradient(90deg, rgba(2,6,23,0.85) 0%, rgba(2,6,23,0.55) 50%, rgba(0,0,0,0.12) 100%)",
 }}
 />
 </div>
 <div className="relative z-10">
 <div className="mx-auto max-w-[1180px] px-6 py-5 flex flex-col md:flex-row items-center gap-8">
 <div className="flex-1 max-w-2xl">
 <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-2xl p-8 md:p-10 backdrop-blur-sm">
 <h1 className="text-white text-3xl md:text-[34px] leading-tight font-semibold mb-3">
 Accountant for TDS Filings
 </h1>
 <p className="text-slate-200 text-sm md:text-base mb-6 max-w-prose">
 File TDS returns, manage challans, and reconcile payments
 effortlessly using our Accountants & LEDGERS platform.
 </p>
 <form
 onSubmit={(e) => e.preventDefault()}
 className="flex flex-col sm:flex-row items-center gap-4"
 >
 <input
 aria-label="Enter GSTIN"
 placeholder="ENTER GSTIN"
 value={gstin}
 onChange={(e) => setGstin(e.target.value)}
 className="w-full sm:w-[360px] bg-transparent border border-[rgba(255,255,255,0.12)] rounded-md px-4 py-3 placeholder:text-slate-300 text-white outline-none focus:border-amber-400"
 />
 <button className="px-6 py-3 bg-amber-600 text-white rounded-md font-medium hover:bg-amber-700 transition-colors">
 Get Accountant
 </button>
 </form>
 </div>
 </div>
 <div className="w-full md:w-96 flex justify-end">
 <div
 className="relative"
 style={{ width: 420, maxWidth: "100%" }}
 >
 <img
 src={ASSETS.hrPeople}
 alt="TDS"
 style={{
 width: "100%",
 height: "auto",
 display: "block",
 }}
 className="pointer-events-none select-none rounded-lg shadow-md"
 />
 </div>
 </div>
 </div>
 </div>
 <div
 className="absolute inset-0 pointer-events-none"
 style={{
 borderRadius: "1rem",
 background:
 "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.06) 100%)",
 }}
 />
 </section>
 </div>
 </div>

 <div className="max-w-[1180px] mx-auto px-6 -mt-4">
 <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
 <div className="bg-[#F4F3EE] p-8 rounded-xl border border-slate-100 shadow-sm hover:border-amber-200 transition-colors">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-10 h-10 rounded-full bg-amber-50 grid place-items-center text-amber-600">
 👥
 </div>
 <div>
 <h3 className="font-semibold mb-1 text-slate-800">
 Dedicated TDS specialist
 </h3>
 <p className="text-sm text-slate-600">
 Dedicated TDS specialist to manage monthly TDS workings,
 challans, payment tracking, and return preparation across
 sections—at a fraction of the cost of a full-time hire.
 </p>
 </div>
 </div>
 </div>

 <div className="bg-[#F4F3EE] p-8 rounded-xl border border-slate-100 shadow-sm hover:border-amber-200 transition-colors">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-10 h-10 rounded-full bg-amber-50 grid place-items-center text-amber-600">
 ✔
 </div>
 <div>
 <h3 className="font-semibold mb-1 text-slate-800">
 Accurate & timely compliance
 </h3>
 <p className="text-sm text-slate-600">
 End-to-end preparation and filing of all TDS returns with
 due-date tracking, reconciliation of challans and deductions,
 and periodic reviews to avoid interest, late fees, and
 notices.
 </p>
 </div>
 </div>
 </div>

 <div className="bg-[#F4F3EE] p-8 rounded-xl border border-slate-100 shadow-sm hover:border-amber-200 transition-colors">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-10 h-10 rounded-full bg-amber-50 grid place-items-center text-amber-600">
 ⚡
 </div>
 <div>
 <h3 className="font-semibold mb-1 text-slate-800">
 Powered by LEDGERS
 </h3>
 <p className="text-sm text-slate-600">
 Automated bank feeds, reconciliations, TRACES validation,
 document vault, and audit-ready reports—inside one secure
 system.
 </p>
 </div>
 </div>
 </div>
 </section>
 </div>

 <main className="max-w-[1180px] mx-auto px-6 py-4 space-y-8">


 <section className="bg-[#F4F3EE] rounded-lg shadow-sm p-6">
 <h3 className="text-xl font-semibold text-center">
 Services Offered
 </h3>
 <p className="text-gray-600 mt-3 text-center">
 We provide comprehensive accounting support tailored to meet the
 day-to-day financial needs of your business
 </p>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 text-sm text-gray-700">
 <div className="p-4 rounded-lg border hover:border-amber-200 transition-colors">
 <h4 className="font-semibold">Access to LEDGERS</h4>
 <p className="mt-2">
 Record and review TDS deductions, challans, and payments in real
 time with automated calculation, PAN validation, and a clear
 audit trail—inside one shared workspace.
 </p>
 </div>
 <div className="p-4 rounded-lg border hover:border-amber-200 transition-colors">
 <h4 className="font-semibold">TDS Return Filing</h4>
 <p className="mt-2">
 Preparation and filing of all TDS returns with reconciliation,
 automated due-date tracking, and timely submission.
 </p>
 </div>
 <div className="p-4 rounded-lg border hover:border-amber-200 transition-colors">
 <h4 className="font-semibold">
 Preparation of TDS Summary & Reports
 </h4>
 <p className="mt-2">
 Monthly and quarterly TDS summaries, deduction statements,
 mismatch reports, and year-end Form 16/16A generation.
 </p>
 </div>
 <div className="p-4 rounded-lg border hover:border-amber-200 transition-colors">
 <h4 className="font-semibold">Quarterly TDS Return Filing</h4>
 <p className="mt-2">
 24Q for salaries, 26Q for non-salary payments, 27Q for
 non-residents, and 27EQ for TCS—prepared and filed each quarter.
 </p>
 </div>
 <div className="p-4 rounded-lg border hover:border-amber-200 transition-colors">
 <h4 className="font-semibold">
 Deductor–Deductee Reconciliation
 </h4>
 <p className="mt-2">
 Matching TDS deducted and deposited with TDS credit appearing
 for the deductee in Form 26AS/AIS to avoid mismatches and
 notices.
 </p>
 </div>
 <div className="p-4 rounded-lg border hover:border-amber-200 transition-colors">
 <h4 className="font-semibold">TRACES Validation Before Filing</h4>
 <p className="mt-2">
 Ensure PAN details, challans, and deductee-wise entries match
 the TRACES database to avoid errors and rejections.
 </p>
 </div>
 </div>
 </section>

 <section className="bg-[#F4F3EE] rounded-lg shadow-sm p-6">
 <h3 className="text-xl font-semibold text-center">How It Works</h3>
 <p className="text-gray-600 mt-3 text-center">
 A guided onboarding process with consistent monthly accounting and
 reporting.
 </p>
 <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
 <div>
 <div className="mx-auto w-12 h-12 rounded-full border-2 border-amber-600 flex items-center justify-center text-lg text-amber-700">
 1
 </div>
 <h4 className="font-semibold mt-4">Assign your accountant</h4>
 <p className="text-sm text-gray-600 mt-2">
 You get a named accountant familiar with your industry and a
 clear kickoff checklist.
 </p>
 </div>
 <div>
 <div className="mx-auto w-12 h-12 rounded-full border-2 border-amber-600 flex items-center justify-center text-lg text-amber-700">
 2
 </div>
 <h4 className="font-semibold mt-4">System Setup</h4>
 <p className="text-sm text-gray-600 mt-2">
 Connect bank feeds, import masters & opening balances, map
 ledgers/tax series, and configure LEDGERS.
 </p>
 </div>
 <div>
 <div className="mx-auto w-12 h-12 rounded-full border-2 border-amber-600 flex items-center justify-center text-lg text-amber-700">
 3
 </div>
 <h4 className="font-semibold mt-4">Monthly close & compliance</h4>
 <p className="text-sm text-gray-600 mt-2">
 Reconciliations, TDS tracking, challan mapping, quarterly
 returns, timely filing, and MIS reports for compliance.
 </p>
 </div>
 </div>
 </section>

 <section className="bg-[#F4F3EE] rounded-lg shadow-sm p-6">
 <h3 className="text-xl font-semibold mb-4">
 Why DoStartup for TDS Compliance
 </h3>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 <div className="p-4 rounded-lg border hover:border-amber-200 transition-colors">
 <h4 className="font-semibold">Affordable Expertise</h4>
 <p className="mt-2">
 Skilled accountants without full-time hiring costs.
 </p>
 </div>
 <div className="p-4 rounded-lg border hover:border-amber-200 transition-colors">
 <h4 className="font-semibold">Zero Surprises</h4>
 <p className="mt-2">
 Transparent reporting and proactive due-date alerts.
 </p>
 </div>
 <div className="p-4 rounded-lg border hover:border-amber-200 transition-colors">
 <h4 className="font-semibold">Scalable Service</h4>
 <p className="mt-2">
 Start with books; add TDS returns, challans, and GST/IT/ROC
 filings as you grow.
 </p>
 </div>
 </div>
 <div className="mt-6">
 <h4 className="font-semibold mb-2">Software + Service</h4>
 <p className="text-sm text-gray-600">
 The LEDGERS platform, bundled with experts who run it.
 </p>
 </div>
 </section>

 <section className="bg-[#F4F3EE] rounded-lg shadow-sm p-6">
 <h3 className="text-xl font-semibold mb-4">
 TDS - Tax Deducted at Source
 </h3>
 <p className="text-sm text-gray-700 leading-relaxed">
 Tax Deducted at Source (TDS) is a mechanism where tax is deducted by
 the payer (deductor) when making certain specified payments to the
 payee (deducted). Entities and individuals who engage in tax
 deductions at the source are legally required to file TDS returns
 quarterly before the TDS due date, detailing the specifics of these
 deductions. DoStartup provides expert assistance to streamline
 the process, ensuring accurate filing, timely payment, and
 reconciliation so that TDS credits reflect correctly in Form 26AS
 and Form 16/16A.
 </p>
 </section>

 <section className="bg-[#F4F3EE] rounded-lg shadow-sm p-6">
 <h3 className="text-xl font-semibold mb-4">
 TDS Return Forms & Due Dates
 </h3>
 <div className="overflow-x-auto">
 <table className="w-full text-sm text-left">
 <thead>
 <tr>
 <th className="py-3 px-2 border-b">Form</th>
 <th className="py-3 px-2 border-b">Periodicity</th>
 <th className="py-3 px-2 border-b">Particulars</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td className="py-3 px-2 border-b">Form 24Q</td>
 <td className="py-3 px-2 border-b">Quarterly</td>
 <td className="py-3 px-2 border-b">
 Quarterly statement for TDS from Salaries
 </td>
 </tr>
 <tr>
 <td className="py-3 px-2 border-b">Form 26Q</td>
 <td className="py-3 px-2 border-b">Quarterly</td>
 <td className="py-3 px-2 border-b">
 Statement of TDS in respect of payments other than Salaries
 </td>
 </tr>
 <tr>
 <td className="py-3 px-2 border-b">Form 27Q</td>
 <td className="py-3 px-2 border-b">Quarterly</td>
 <td className="py-3 px-2 border-b">
 TDS on payments to non-residents
 </td>
 </tr>
 <tr>
 <td className="py-3 px-2 border-b">Form 27EQ</td>
 <td className="py-3 px-2 border-b">Quarterly</td>
 <td className="py-3 px-2 border-b">TCS return</td>
 </tr>
 </tbody>
 </table>
 </div>
 </section>

 <section className="bg-[#F4F3EE] rounded-lg shadow-sm p-6">
 <h3 className="text-xl font-semibold mb-4">
 Documents Required For TDS Return Filing
 </h3>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
 <div className="p-3 border rounded hover:border-amber-200 transition-colors">
 <h4 className="font-semibold">TAN Details</h4>
 <p className="mt-2">
 Tax Deduction and Collection Account Number (TAN) of the
 deductor is mandatory.
 </p>
 </div>
 <div className="p-3 border rounded hover:border-amber-200 transition-colors">
 <h4 className="font-semibold">PAN Details</h4>
 <p className="mt-2">
 PAN of deductor and deductees for accurate attribution of tax
 payments.
 </p>
 </div>
 <div className="p-3 border rounded hover:border-amber-200 transition-colors">
 <h4 className="font-semibold">Bank Statements & Challans</h4>
 <p className="mt-2">
 Proof of TDS deposit and challan details for reconciliation and
 validation.
 </p>
 </div>
 </div>
 </section>

 <DynamicPricingSection />

 <section className="bg-[#F4F3EE] rounded-lg shadow-sm p-6">
 <h3 className="text-xl font-semibold mb-4">FAQs</h3>
 <div className="space-y-0">
 {faqQuestions.map((q, i) => (
 <div key={i} className="border-b last:border-b-0">
 <button
 className="w-full text-left py-4 flex justify-between items-center text-sm"
 onClick={() => setFaqOpen(faqOpen === i ? null : i)}
 aria-expanded={faqOpen === i}
 >
 <span className="text-slate-800">{q}</span>
 <span className="text-amber-600 flex items-center gap-2">
 {faqOpen === i ? "−" : <Plus size={14} />}
 </span>
 </button>
 {faqOpen === i && (
 <div className="px-2 pb-4 text-sm text-gray-600">
 {faqAnswers[i]}
 </div>
 )}
 </div>
 ))}
 </div>
 <div className="mt-6">
 <h4 className="font-semibold mb-3">Popular Searches</h4>
 <div className="flex flex-wrap gap-2">
 {POPULAR_SEARCHES.map((s) => (
 <span
 key={s}
 className="text-xs px-3 py-1 border border-gray-200 rounded bg-[#F4F3EE] text-gray-700 hover:border-amber-300 hover:text-amber-700 cursor-pointer transition-colors"
 >
 {s}
 </span>
 ))}
 </div>
 </div>
 </section>
 </main>

 <footer className="bg-[#F4F3EE] mt-12 py-5 border-t">
 <div className="max-w-[1180px] mx-auto px-6 text-sm text-gray-600">
 <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
 <div>
 <h5 className="font-semibold text-gray-800 mb-2">DoStartup</h5>
 <a className="block hover:text-amber-600">About DoStartup</a>
 <a className="block hover:text-amber-600">Careers</a>
 <a className="block hover:text-amber-600">Contact Us</a>
 </div>
 <div>
 <h5 className="font-semibold text-gray-800 mb-2">Platforms</h5>
 <a className="block hover:text-amber-600">Business Search</a>
 <a className="block hover:text-amber-600">Trademark Search</a>
 <a className="block hover:text-amber-600">Filings.AE for UAE</a>
 </div>
 <div>
 <h5 className="font-semibold text-gray-800 mb-2">Usage</h5>
 <a className="block hover:text-amber-600">Terms & Conditions</a>
 <a className="block hover:text-amber-600">Privacy Policy</a>
 <a className="block hover:text-amber-600">Refund Policy</a>
 </div>
 <div>
 <h5 className="font-semibold text-gray-800 mb-2">Policies</h5>
 <a className="block hover:text-amber-600">Confidentiality Policy</a>
 <a className="block hover:text-amber-600">Disclaimer Policy</a>
 <a className="block hover:text-amber-600">DoStartup Review</a>
 </div>
 </div>
 <div className="text-center text-gray-500 mt-6">
 © {new Date().getFullYear()} DoStartup - TDS Return Filing
 </div>
 </div>
 </footer>

 <div className="fixed right-6 bottom-6 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-4 py-3 rounded-full shadow-2xl flex items-center gap-3 z-50 hover:from-amber-700 hover:to-amber-800 transition-all cursor-pointer">
 <img src={ASSETS.whatsapp} alt="wa" className="w-5 h-5" />
 <span className="font-semibold text-sm">Live Chat with Experts</span>
 </div>

 <style jsx>{`
 :global(body) {
 margin: 0;
 font-family: "Poppins", system-ui, -apple-system, "Segoe UI", Roboto,
 "Helvetica Neue", Arial;
 background: #f3f4f6;
 color: #0f172a;
 }
 .page {
 min-height: 100vh;
 }
 h1,
 h2,
 h3 {
 color: #0b2545;
 }
 `}</style>
 </div>
 );
}
