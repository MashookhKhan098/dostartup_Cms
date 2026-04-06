"use client";

import React, { useEffect, useRef, useState } from "react";
import { Search, Plus } from "lucide-react";
import Navbar from "../components/Navbar";

// Assets used (same as CA page, as requested)
const ASSETS = {
 logo: "/images/india-logo.jpg",
 heroBg: "/images/hero.png",
 whatsapp: "/images/whatsapp.png",
 hrPeople: "/images/hr-payroll.png",
};

// Detect click outside
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

// Popular searches
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

// ------------------- MAIN PAGE -------------------

export default function BookkeepingPage(): React.ReactElement {
 const [gstin, setGstin] = useState("");
 const [faqOpen, setFaqOpen] = useState<number | null>(null);

 // FAQ
 const faqQuestions = [
 "How is a Fractional Accountant different from a full-time hire?",
 "Is LEDGERS HR platform included?",
 "Can I add CA oversight or advisory later?",
 "Will my data remain secure?",
 ];

 const faqAnswers: Record<number, string> = {
 0: "A Fractional Accountant gives you expert accounting support without the cost of a full-time hire. You get dedicated bookkeeping, reconciliations, and compliance handled each month under a structured process.",
 1: "LEDGERS HR is not part of the standard plan, but it can be added separately depending on your business needs.",
 2: "Yes. You can add Chartered Accountant oversight, tax advisory, payroll, or additional compliance services at any time.",
 3: "Yes. All your financial data is stored securely within LEDGERS, with encrypted access and controlled permissions.",
 };

 return (
 <div className="min-h-screen bg-gray-50 text-gray-800 font-sans antialiased">
 {/* Imported Navbar */}
 <Navbar />

 {/* Breadcrumb */}
 <div className="bg-gradient-to-r from-white to-slate-50 py-3 border-b border-gray-200">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-500">
 Home / Services /{" "}
 <span className="text-[#C15F3C] font-medium">Bookkeeping</span>
 </div>
 </div>

 {/* HERO */}
 <div className="py-3">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <section
 className="relative rounded-2xl overflow-hidden shadow-lg"
 style={{ minHeight: 320 }}
 >
 {/* Background */}
 <div
 className="absolute inset-0 bg-center bg-no-repeat bg-cover"
 style={{ backgroundImage: `url(${ASSETS.heroBg})` }}
 >
 <div
 className="absolute inset-0"
 style={{
 background:
 "linear-gradient(90deg, rgba(2,6,23,0.85) 0%, rgba(2,6,23,0.55) 50%, rgba(0,0,0,0.12) 100%)",
 }}
 />
 </div>

 {/* HERO CONTENT */}
 <div className="relative z-10">
 <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center gap-8">
 {/* Left */}
 <div className="flex-1 max-w-2xl">
 <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-2xl p-8 md:p-10 backdrop-blur-sm">
 {/* Badge */}
 <div className="inline-flex items-center gap-1.5 bg-[#C15F3C]/20 border border-[#C15F3C]/30 rounded-full px-3 py-1 mb-4">
 <div className="w-1.5 h-1.5 bg-[#C15F3C] rounded-full" />
 <span className="text-xs font-medium text-white">ACCOUNTING SERVICES</span>
 </div>

 <h1 className="text-white text-3xl md:text-[34px] font-semibold leading-tight mb-3">
 DoStartup Accountant
 </h1>
 <p className="text-slate-200 text-sm md:text-base mb-6 max-w-prose">
 A dedicated accountant to keep your books accurate,
 reconcile accounts, and handle statutory filings—GST,
 Income Tax, and ROC—without hiring full-time staff.
 </p>

 {/* Form */}
 <form
 onSubmit={(e) => e.preventDefault()}
 className="flex flex-col sm:flex-row gap-4"
 >
 <input
 placeholder="ENTER GSTIN"
 aria-label="Enter GSTIN"
 value={gstin}
 onChange={(e) => setGstin(e.target.value)}
 className="w-full sm:w-[360px] bg-transparent border border-[rgba(255,255,255,0.12)] rounded-md px-4 py-3 text-white placeholder:text-slate-300 outline-none focus:ring-1 focus:ring-[#C15F3C]"
 />
 <button className="px-6 py-3 bg-gradient-to-r from-[#C15F3C] to-[#A74A2F] text-white rounded-md font-medium hover:from-[#A74A2F] hover:to-[#8F3F27] transition-all shadow-md hover:shadow-lg">
 Request Demo
 </button>
 </form>

 {/* Trust Badges */}
 <div className="flex items-center gap-3 mt-6">
 <div className="flex -space-x-1.5">
 {[1, 2, 3].map((i) => (
 <div key={i} className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-r from-[#C15F3C] to-[#A74A2F] border-2 border-white shadow-sm" />
 ))}
 </div>
 <span className="text-xs text-gray-300">Trusted by 10,000+ businesses</span>
 </div>
 </div>
 </div>

 {/* Right Image */}
 <div className="w-full md:w-96 flex justify-end">
 <div
 className="relative"
 style={{ width: 420, maxWidth: "100%" }}
 >
 <img
 src={ASSETS.hrPeople}
 alt="Accountant"
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

 {/* 3 Card Section */}
 <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
 <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg hover:border-[#C15F3C]/30 transition-colors">
 <h3 className="font-semibold text-[#C15F3C] mb-2">
 Dedicated support, flexible cost
 </h3>
 <p className="text-sm text-slate-600">
 Experienced accountant managing bookkeeping, reconciliations,
 and monthly close—at a fraction of a full-time salary.
 </p>
 </div>

 <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg hover:border-[#C15F3C]/30 transition-colors">
 <h3 className="font-semibold text-[#C15F3C] mb-2">
 Accurate & timely compliance
 </h3>
 <p className="text-sm text-slate-600">
 End-to-end GST, Income Tax, and ROC filings with due-date
 tracking and review workflows.
 </p>
 </div>

 <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg hover:border-[#C15F3C]/30 transition-colors">
 <h3 className="font-semibold text-[#C15F3C] mb-2">
 Powered by LEDGERS
 </h3>
 <p className="text-sm text-slate-600">
 Automated bank feeds, reconciliations, e-invoice/e-way bill,
 document vault, and audit-ready reports.
 </p>
 </div>
 </section>
 </div>
 </div>

 {/* MAIN CONTENT */}
 <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-8">
 {/* SERVICES OFFERED */}
 <section className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
 <h3 className="text-xl font-semibold text-center text-[#C15F3C]">
 Services Offered
 </h3>
 <p className="text-gray-600 mt-3 text-center">
 We provide comprehensive accounting support tailored to meet the
 day-to-day financial needs of your business.
 </p>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 text-sm text-gray-700">
 {/* LEDGERS Access */}
 <div className="p-4 rounded-lg border border-gray-200 hover:border-[#C15F3C]/30 transition-colors">
 <h4 className="font-semibold text-[#C15F3C]">Access to LEDGERS</h4>
 <p className="mt-2">
 Record and review transactions in real time—clean books, clear
 audit trail, single workspace.
 </p>
 </div>

 {/* GST */}
 <div className="p-4 rounded-lg border border-gray-200 hover:border-[#C15F3C]/30 transition-colors">
 <h4 className="font-semibold text-[#C15F3C]">GST Return Filing</h4>
 <p className="mt-2">
 Monthly/Quarterly GSTR-1, GSTR-3B and other filings prepared,
 reconciled, and filed on schedule.
 </p>
 </div>

 {/* Financial Statements */}
 <div className="p-4 rounded-lg border border-gray-200 hover:border-[#C15F3C]/30 transition-colors">
 <h4 className="font-semibold text-[#C15F3C]">
 Preparation of Financial Statements
 </h4>
 <p className="mt-2">
 Balance Sheet, P&L, Trial Balance as per accounting standards.
 </p>
 </div>

 {/* Income Tax */}
 <div className="p-4 rounded-lg border border-gray-200 hover:border-[#C15F3C]/30 transition-colors">
 <h4 className="font-semibold text-[#C15F3C]">Income Tax Return Filing</h4>
 <p className="mt-2">
 Business/individual ITRs prepared with correct income,
 deductions, disclosures—legally optimized.
 </p>
 </div>

 {/* ROC */}
 <div className="p-4 rounded-lg border border-gray-200 hover:border-[#C15F3C]/30 transition-colors">
 <h4 className="font-semibold text-[#C15F3C]">ROC Compliance</h4>
 <p className="mt-2">
 DIN e-KYC, AOC-4, MGT-7 and other Companies Act filings handled
 end-to-end.
 </p>
 </div>

 {/* CA Assistance */}
 <div className="p-4 rounded-lg border border-gray-200 hover:border-[#C15F3C]/30 transition-colors">
 <h4 className="font-semibold text-[#C15F3C]">CA Assistance</h4>
 <p className="mt-2">
 4 consultations/year with Chartered Accountants for taxation and
 compliance clarity.
 </p>
 </div>
 </div>
 </section>

 {/* HOW IT WORKS */}
 <section className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
 <h3 className="text-xl font-semibold text-center text-[#C15F3C]">How It Works</h3>
 <p className="text-gray-600 mt-3 text-center">
 A guided onboarding process with consistent monthly accounting and
 reporting.
 </p>

 <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
 <div className="p-4 hover:border-[#C15F3C]/30 transition-colors">
 <div className="mx-auto w-12 h-12 rounded-full border-2 border-[#C15F3C] flex items-center justify-center text-[#C15F3C] font-bold">
 1
 </div>
 <h4 className="font-semibold mt-4 text-[#C15F3C]">Assign your accountant</h4>
 <p className="text-sm mt-2 text-gray-600">
 A dedicated accountant familiar with your business and industry
 is assigned.
 </p>
 </div>
 <div className="p-4 hover:border-[#C15F3C]/30 transition-colors">
 <div className="mx-auto w-12 h-12 rounded-full border-2 border-[#C15F3C] flex items-center justify-center text-[#C15F3C] font-bold">
 2
 </div>
 <h4 className="font-semibold mt-4 text-[#C15F3C]">System Setup</h4>
 <p className="text-sm mt-2 text-gray-600">
 Connect bank feeds, import masters & opening balances, map
 ledgers and configure LEDGERS.
 </p>
 </div>
 <div className="p-4 hover:border-[#C15F3C]/30 transition-colors">
 <div className="mx-auto w-12 h-12 rounded-full border-2 border-[#C15F3C] flex items-center justify-center text-[#C15F3C] font-bold">
 3
 </div>
 <h4 className="font-semibold mt-4 text-[#C15F3C]">Monthly close & compliance</h4>
 <p className="text-sm mt-2 text-gray-600">
 Reconciliations, MIS reporting and timely GST, Income Tax and
 ROC filings.
 </p>
 </div>
 </div>
 </section>

 {/* WHY INDIAFILINGS */}
 <section className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
 <h3 className="text-xl font-semibold mb-4 text-[#C15F3C]">
 Why DoStartup for Fractional Accountant
 </h3>

 <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
 <div className="p-4 rounded-lg border border-gray-200 hover:border-[#C15F3C]/30 transition-colors">
 <h4 className="font-semibold text-[#C15F3C]">Affordable Expertise</h4>
 <p className="mt-2 text-sm">
 Skilled accountants without full-time hiring costs.
 </p>
 </div>

 <div className="p-4 rounded-lg border border-gray-200 hover:border-[#C15F3C]/30 transition-colors">
 <h4 className="font-semibold text-[#C15F3C]">Zero Surprises</h4>
 <p className="mt-2 text-sm">
 Transparent reporting and proactive due-date alerts.
 </p>
 </div>

 <div className="p-4 rounded-lg border border-gray-200 hover:border-[#C15F3C]/30 transition-colors">
 <h4 className="font-semibold text-[#C15F3C]">Scalable Service</h4>
 <p className="mt-2 text-sm">
 Start with bookkeeping; add filings or advisory anytime.
 </p>
 </div>

 <div className="p-4 rounded-lg border border-gray-200 hover:border-[#C15F3C]/30 transition-colors">
 <h4 className="font-semibold text-[#C15F3C]">Software + Service</h4>
 <p className="mt-2 text-sm">
 LEDGERS platform bundled with experts who run it.
 </p>
 </div>
 </div>
 </section>

 {/* FAQ */}
 <section className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
 <h3 className="text-xl font-semibold mb-4 text-[#C15F3C]">FAQs</h3>

 <div className="space-y-0">
 {faqQuestions.map((q, i) => (
 <div key={i} className="border-b border-gray-200 last:border-b-0">
 <button
 className="w-full text-left py-4 flex justify-between items-center text-sm hover:bg-orange-50/30 transition-colors"
 onClick={() => setFaqOpen(faqOpen === i ? null : i)}
 >
 <span className="text-slate-800 hover:text-[#C15F3C] transition-colors">{q}</span>
 <span className="text-[#C15F3C] flex items-center">
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

 {/* Popular Searches */}
 <div className="mt-6">
 <h4 className="font-semibold mb-3 text-[#C15F3C]">Popular Searches</h4>
 <div className="flex flex-wrap gap-2">
 {POPULAR_SEARCHES.slice(0, 20).map((s) => (
 <span
 key={s}
 className="text-xs px-3 py-1 border border-gray-200 rounded bg-white text-gray-700 hover:border-[#C15F3C]/30 hover:text-[#C15F3C] cursor-pointer transition-colors"
 >
 {s}
 </span>
 ))}
 </div>
 </div>
 </section>
 </main>

 {/* FOOTER */}
 <footer className="bg-white mt-12 py-5 border-t">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
 <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
 <div>
 <h5 className="font-semibold text-[#C15F3C] mb-2">Company</h5>
 <a className="block hover:text-[#C15F3C] transition-colors">About Us</a>
 <a className="block hover:text-[#C15F3C] transition-colors">Careers</a>
 <a className="block hover:text-[#C15F3C] transition-colors">Contact Us</a>
 </div>

 <div>
 <h5 className="font-semibold text-[#C15F3C] mb-2">Platforms</h5>
 <a className="block hover:text-[#C15F3C] transition-colors">Business Search</a>
 <a className="block hover:text-[#C15F3C] transition-colors">Trademark Search</a>
 <a className="block hover:text-[#C15F3C] transition-colors">Filings.AE for UAE</a>
 </div>

 <div>
 <h5 className="font-semibold text-[#C15F3C] mb-2">Usage</h5>
 <a className="block hover:text-[#C15F3C] transition-colors">Terms & Conditions</a>
 <a className="block hover:text-[#C15F3C] transition-colors">Privacy Policy</a>
 <a className="block hover:text-[#C15F3C] transition-colors">Refund Policy</a>
 </div>

 <div>
 <h5 className="font-semibold text-[#C15F3C] mb-2">Policies</h5>
 <a className="block hover:text-[#C15F3C] transition-colors">Confidentiality Policy</a>
 <a className="block hover:text-[#C15F3C] transition-colors">Disclaimer Policy</a>
 <a className="block hover:text-[#C15F3C] transition-colors">Reviews</a>
 </div>
 </div>

 <div className="text-center text-gray-500 mt-6">
 © {new Date().getFullYear()} All rights reserved.
 </div>
 </div>
 </footer>

 {/* WhatsApp CTA */}
 <div className="fixed bottom-6 right-6 z-50">
 <button className="flex items-center gap-3 bg-gradient-to-r from-[#C15F3C] to-[#A74A2F] text-white px-4 py-3 rounded-full shadow-lg hover:from-[#A74A2F] hover:to-[#8F3F27] transition-all hover:scale-105">
 <img src={ASSETS.whatsapp} className="w-5 h-5" />
 <span className="hidden sm:inline font-medium text-sm">Live Chat with Experts</span>
 </button>
 </div>
 </div>
 );
}
