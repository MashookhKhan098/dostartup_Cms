"use client";

import React, { useState } from "react";
import { Search, Plus, ShoppingBag, CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import SidebarCart from "../components/SidebarCart";

const ASSETS = {
 logo: "/images/india-logo.jpg",
 heroBg: "/images/hero.png",
 whatsapp: "/images/whatsapp.png",
 hrPeople: "/images/hr-payroll.png",
 cartIcon: "/images/cart-icon.svg",
 indiaFlag: "/images/india-flag.png",
 ledgers: "/images/ledgers.png",
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

export default function DoStartupCA() {
 const [gstin, setGstin] = useState("");
 const [faqOpen, setFaqOpen] = useState<number | null>(null);
 const [gstChecked, setGstChecked] = useState(false);

 const faqQuestions = [
 "How is Fractional CA different from a regular accountant?",
 "Is LEDGERS software included?",
 "Can I add HR/Payroll or upgrade later?",
 "Do you handle tax notices and assessments?",
 ];

 const faqAnswers: Record<number, string> = {
 0: "Fractional CA offers dedicated Chartered Accountant oversight on a part-time/fractional basis with SLAs and CA reviews, whereas a regular accountant is typically an in-house or outsourced bookkeeper handling day-to-day entries.",
 1: "LEDGERS is included as part of the software-enabled service offering; specifics depend on the chosen plan and onboarding conversation.",
 2: "Yes. You can add HR/Payroll, upgrade services, and scale from bookkeeping to comprehensive CA oversight.",
 3: "Yes. We provide support and representation for tax notices and assessments, including response preparation and coordination with authorities.",
 };

 return (
 <div className="min-h-screen bg-white font-sans text-gray-800">
 {/* Navbar - Imported */}
 <Navbar />

 {/* Breadcrumb */}
 <div className="bg-white py-5">
 <div className="max-w-[1180px] mx-auto px-6 text-sm text-gray-500">
 Home / Compliance Services /{" "}
 <span className="text-amber-700 font-medium">DoStartup CA</span>
 </div>
 </div>

 {/* HERO */}
 <div className="py-3">
 <div className="max-w-[1180px] mx-auto px-6">
 <section
 aria-label="hero"
 className="relative rounded-2xl overflow-hidden shadow-sm mb-8"
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
 DoStartup CA
 </h1>
 <p className="text-slate-200 text-sm md:text-base mb-6 max-w-prose">
 Chartered Accountants for your business compliance - from
 GST & ITR filing to financial reporting and tax notice
 handling. Simplify compliance. Grow confidently.
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
 className="w-full sm:w-[360px] bg-transparent border border-[rgba(255,255,255,0.12)] rounded-md px-4 py-3 placeholder:text-slate-300 text-white outline-none focus:ring-1 focus:ring-amber-600"
 />
 <button className="px-6 py-3 bg-white text-slate-900 rounded-md font-medium hover:bg-amber-50 transition-colors">
 Request Demo
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
 alt="CA"
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

 {/* Features Grid */}
 <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
 <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:border-amber-200 transition-colors">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-10 h-10 rounded-full bg-amber-50 grid place-items-center text-amber-600">
 👥
 </div>
 <div>
 <h3 className="font-semibold mb-1 text-slate-900">
 Affordable Expertise
 </h3>
 <p className="text-sm text-gray-600">
 Access DoStartup Chartered Accountants without the high
 cost of full-time hiring.
 </p>
 </div>
 </div>
 </div>

 <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:border-amber-200 transition-colors">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-10 h-10 rounded-full bg-amber-50 grid place-items-center text-amber-600">
 ✔
 </div>
 <div>
 <h3 className="font-semibold mb-1 text-slate-900">
 Seamless Compliance
 </h3>
 <p className="text-sm text-gray-600">
 Monthly GST, quarterly CA review, and annual ITRs managed
 with accuracy and care.
 </p>
 </div>
 </div>
 </div>

 <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:border-amber-200 transition-colors">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-10 h-10 rounded-full bg-amber-50 grid place-items-center text-amber-600">
 ⚡
 </div>
 <div>
 <h3 className="font-semibold mb-1 text-slate-900">
 Trusted Oversight
 </h3>
 <p className="text-sm text-gray-600">
 Your finances are reviewed by expert Chartered Accountants
 with years of industry experience.
 </p>
 </div>
 </div>
 </div>
 </section>
 </div>
 </div>

 {/* MAIN CONTENT */}
 <main className="max-w-[1180px] mx-auto px-6 py-4 space-y-8">
 {/* Services Offered */}
 <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
 <h3 className="text-xl font-semibold text-center text-slate-900">
 Services Offered
 </h3>
 <p className="text-gray-600 mt-3 text-center">
 Comprehensive financial management and compliance support for
 growing businesses.
 </p>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 text-sm">
 <div className="p-4 rounded-lg border border-gray-200 hover:border-amber-200 transition-colors">
 <h4 className="font-semibold text-slate-900">Flash Reports</h4>
 <p className="mt-2 text-gray-600">
 Monthly Flash P&L statements featuring key metrics: Revenue,
 Expenses, and EBITDA
 </p>
 <p className="mt-1 text-gray-600">
 Executive summary format for busy entrepreneurs
 </p>
 </div>

 <div className="p-4 rounded-lg border border-gray-200 hover:border-amber-200 transition-colors">
 <h4 className="font-semibold text-slate-900">Variance Analysis</h4>
 <p className="mt-2 text-gray-600">
 Detailed comparison of actual performance vs. prior year
 </p>
 <p className="mt-1 text-gray-600">Identification of trends and anomalies</p>
 </div>

 <div className="p-4 rounded-lg border border-gray-200 hover:border-amber-200 transition-colors">
 <h4 className="font-semibold text-slate-900">
 Management Information Systems (MIS)
 </h4>
 <p className="mt-2 text-gray-600">Detailed Profit & Loss Statement</p>
 <p className="mt-1 text-gray-600">Balance Sheet</p>
 <p className="mt-1 text-gray-600">Cash Flow Statement</p>
 </div>

 <div className="p-4 rounded-lg border border-gray-200 hover:border-amber-200 transition-colors">
 <h4 className="font-semibold text-slate-900">Annual Tax Consultation</h4>
 <p className="mt-2 text-gray-600">
 Comprehensive tax planning strategy for the entire financial
 year
 </p>
 <p className="mt-1 text-gray-600">
 Optimization of tax liabilities within legal frameworks
 </p>
 <p className="mt-1 text-gray-600">
 Proactive planning to maximize savings and minimize risks
 </p>
 </div>

 <div className="p-4 rounded-lg border border-gray-200 hover:border-amber-200 transition-colors">
 <h4 className="font-semibold text-slate-900">Income Notice Support</h4>
 <p className="mt-2 text-gray-600">Expert handling of notices under</p>
 <ul className="list-disc list-inside mt-1 text-sm text-gray-600">
 <li>Sections 139(9) - Defective Return</li>
 <li>Section 143(1) - Intimation</li>
 <li>Section 245 - Refund Adjustment</li>
 </ul>
 <p className="mt-1 text-gray-600">Response preparation</p>
 </div>

 <div className="p-4 rounded-lg border border-gray-200 hover:border-amber-200 transition-colors">
 <h4 className="font-semibold text-slate-900">GST Notice Support</h4>
 <p className="mt-2 text-gray-600">Resolution of notices under</p>
 <ul className="list-disc list-inside mt-1 text-sm text-gray-600">
 <li>Section 63 - Assessment of Unregistered Persons</li>
 <li>Section 46 - Intimation of Tax as per Return</li>
 <li>Rule 88C - Intimation of Discrepancy</li>
 <li>Rule 142(1A) - DRC-01A (Intimation before SCN)</li>
 </ul>
 <p className="mt-1 text-gray-600">
 Ensuring timely responses and strategic advice on GST
 optimization
 </p>
 </div>

 <div className="p-4 rounded-lg border border-gray-200 hover:border-amber-200 transition-colors">
 <h4 className="font-semibold text-slate-900">TDS Notice Support</h4>
 <p className="mt-2 text-gray-600">Handling notices under</p>
 <ul className="list-disc list-inside mt-1 text-sm text-gray-600">
 <li>Section 200(3) & Rule 31A - Non-filing of TDS Return</li>
 <li>Section 234E - Late Filing Fee Notice</li>
 <li>Section 197 - Lower/Nil Deduction Mismatch</li>
 <li>TRACES notices for Form 26AS mismatches</li>
 </ul>
 <p className="mt-1 text-gray-600">
 Resolution of TDS mismatches in Form 26AS and streamlined TDS
 compliance processes
 </p>
 </div>

 <div className="p-4 rounded-lg border border-gray-200 hover:border-amber-200 transition-colors">
 <h4 className="font-semibold text-slate-900">
 Tailored Standard Operating Procedures
 </h4>
 <p className="mt-2 text-gray-600">
 Department-wise SOPs designed as per industry standards
 </p>
 <p className="mt-1 text-gray-600">
 Customized procedures aligned with your business processes
 </p>
 </div>

 <div className="p-4 rounded-lg border border-gray-200 hover:border-amber-200 transition-colors">
 <h4 className="font-semibold text-slate-900">Dedicated Support</h4>
 <p className="mt-2 text-gray-600">
 Continuous assistance with compliance matters and financial
 advisory services.
 </p>
 </div>
 </div>
 </section>

 {/* How It Works */}
 <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
 <h3 className="text-xl font-semibold text-center text-slate-900">How It Works</h3>
 <p className="text-gray-600 mt-3 text-center">
 A simple, guided onboarding process followed by consistent monthly
 filings and quarterly CA reviews.
 </p>

 <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
 <div>
 <div className="mx-auto w-12 h-12 rounded-full border-2 border-amber-600 flex items-center justify-center text-lg font-semibold text-amber-700">
 1
 </div>
 <h4 className="font-semibold mt-4 text-slate-900">Team assignment</h4>
 <p className="text-sm text-gray-600 mt-2">
 We assign a dedicated accountant and CA team who are experts in
 your industry and understand your workflows.
 </p>
 </div>
 <div>
 <div className="mx-auto w-12 h-12 rounded-full border-2 border-amber-600 flex items-center justify-center text-lg font-semibold text-amber-700">
 2
 </div>
 <h4 className="font-semibold mt-4 text-slate-900">LEDGERS Setup</h4>
 <p className="text-sm text-gray-600 mt-2">
 We connect your banking, import master data, enable GST/TDS, and
 configure your systems to meet your specific needs.
 </p>
 </div>
 <div>
 <div className="mx-auto w-12 h-12 rounded-full border-2 border-amber-600 flex items-center justify-center text-lg font-semibold text-amber-700">
 3
 </div>
 <h4 className="font-semibold mt-4 text-slate-900">Filings & Reviews</h4>
 <p className="text-sm text-gray-600 mt-2">
 Timely monthly filings and quarterly CA meetings for planning,
 handling queries, and addressing notices.
 </p>
 </div>
 </div>
 </section>

 {/* Why DoStartup */}
 <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
 <h3 className="text-xl font-semibold mb-4 text-slate-900">
 Why DoStartup for Fractional CA
 </h3>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 <div className="p-4 rounded-lg border border-gray-200 hover:border-amber-200 transition-colors">
 <h4 className="font-semibold text-slate-900">Experienced CA Team</h4>
 <p className="mt-2 text-gray-600">
 Specialists across GST, direct tax, payroll and notices.
 </p>
 </div>
 <div className="p-4 rounded-lg border border-gray-200 hover:border-amber-200 transition-colors">
 <h4 className="font-semibold text-slate-900">Process-driven Delivery</h4>
 <p className="mt-2 text-gray-600">
 Monthly checklists, maker-checker reviews and SLAs.
 </p>
 </div>
 <div className="p-4 rounded-lg border border-gray-200 hover:border-amber-200 transition-colors">
 <h4 className="font-semibold text-slate-900">Nationwide Coverage</h4>
 <p className="mt-2 text-gray-600">
 Serving 1,00,000+ businesses across India since 2014
 </p>
 </div>
 <div className="p-4 rounded-lg border border-gray-200 hover:border-amber-200 transition-colors">
 <h4 className="font-semibold text-slate-900">Transparent Communication</h4>
 <p className="mt-2 text-gray-600">
 Single point of contact with clear updates.
 </p>
 </div>
 <div className="p-4 rounded-lg border border-gray-200 hover:border-amber-200 transition-colors">
 <h4 className="font-semibold text-slate-900">Scales with You</h4>
 <p className="mt-2 text-gray-600">
 Move from basic filings to full-stack CA oversight as you grow.
 </p>
 </div>
 <div className="p-4 rounded-lg border border-gray-200 hover:border-amber-200 transition-colors">
 <h4 className="font-semibold text-slate-900">Software-enabled</h4>
 <p className="mt-2 text-gray-600">
 Workflows and reports are digitised for accuracy and speed.
 </p>
 </div>
 </div>
 </section>

 {/* FAQs */}
 <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
 <h3 className="text-xl font-semibold mb-4 text-slate-900">FAQs</h3>
 <div className="space-y-0">
 {faqQuestions.map((q, i) => (
 <div key={i} className="border-b border-gray-200 last:border-b-0">
 <button
 className="w-full text-left py-4 flex justify-between items-center text-sm"
 onClick={() => setFaqOpen(faqOpen === i ? null : i)}
 aria-expanded={faqOpen === i}
 >
 <span className="text-slate-800 font-medium">{q}</span>
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
 </section>

 {/* Cart Widget */}
 <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
 <div className="text-center text-gray-600">
 <img
 src={ASSETS.cartIcon}
 alt="cart"
 className="mx-auto h-12 w-auto mb-3"
 />
 <h3 className="font-semibold text-slate-900">Your cart is empty</h3>
 <p className="text-sm mt-2 text-gray-600">
 Browse our services and add some services in cart!
 </p>
 </div>

 <div className="mt-6 text-center">
 <div className="text-sm text-gray-500">
 Existing User?{" "}
 <a className="text-amber-700 underline hover:text-amber-800 font-medium cursor-pointer">
 Login
 </a>
 </div>
 </div>

 <form className="mt-4 space-y-3" onSubmit={(e) => e.preventDefault()}>
 <input
 className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-600"
 placeholder="Name"
 />
 <input
 className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-600"
 placeholder="Email"
 />
 <div className="flex gap-2">
 <div className="flex items-center gap-2 border border-gray-200 rounded-md px-2">
 <img src={ASSETS.indiaFlag} alt="flag" className="h-4" />
 <span className="text-sm">+91</span>
 </div>
 <input
 className="flex-1 border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-600"
 placeholder="Phone"
 />
 </div>

 <label className="flex items-center gap-2 text-sm">
 <input
 type="checkbox"
 checked={gstChecked}
 onChange={() => setGstChecked((s) => !s)}
 className="w-4 h-4 accent-amber-600"
 />
 <span>Enter GSTIN to get 18% GST Credit</span>
 </label>

 {gstChecked && (
 <input
 className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-600"
 placeholder="GSTIN"
 />
 )}

 <button className="w-full bg-gradient-to-r from-amber-700 to-amber-800 text-white py-2 rounded-md font-medium flex items-center justify-center gap-2 hover:from-amber-800 hover:to-amber-900 transition-all shadow-md hover:shadow-lg">
 <ShoppingBag size={16} /> Get Started
 </button>

 <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400 pt-1">
 <svg className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
 </svg>
 <span>Secure · No spam · Instant confirmation</span>
 </div>
 </form>
 </div>

 {/* Popular Searches */}
 <div className="bg-white rounded-lg p-6 border border-gray-200">
 <h4 className="font-semibold mb-3 text-slate-900">Popular Searches</h4>
 <div className="flex flex-wrap gap-2">
 {POPULAR_SEARCHES.slice(0, 30).map((s) => (
 <span
 key={s}
 className="text-xs px-3 py-1.5 border border-gray-200 rounded bg-white text-gray-700 hover:border-amber-300 hover:text-amber-700 cursor-pointer transition-colors"
 >
 {s}
 </span>
 ))}
 </div>
 </div>
 </main>

 {/* WhatsApp CTA */}
 <div className="fixed right-6 bottom-6 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-4 py-3 rounded-full shadow-2xl flex items-center gap-3 z-50 hover:from-amber-700 hover:to-amber-800 transition-all cursor-pointer">
 <img src={ASSETS.whatsapp} alt="wa" className="w-5 h-5" />
 <span className="font-semibold text-sm">Live Chat with Experts</span>
 </div>
 </div>
 );
}
