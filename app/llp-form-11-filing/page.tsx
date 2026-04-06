"use client";
import AddQuestionModal from "../components/AddQuestionModal";

import Head from "next/head";
import React, { useState } from "react";
import { Star, ChevronDown, CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import SidebarCart from "../components/SidebarCart";
import PopularSearches from "../components/PopularSearches";

const ASSETS = {
 logo: "/images/india-logo.jpg",
 hero: "/images/registered-office-change.png",
 cards: {
 compliance:
 "/images/company-compliance-india.png",
 dinEKyc: "/images/din-ekyc.png",
 },
 footerBg: "/images/footer-bg.png",
};

const MCA_DROPDOWN_LINKS = [
 { title: "Company Compliance", href: "/MCA/company-compliance" },
 { title: "Director Change", href: "/MCA/director-change" },
 { title: "AOA Amendment", href: "/MCA/aoa-amendment" },
 { title: "LLP Compliance", href: "/MCA/llp-compliance" },
 { title: "Remove Director", href: "/MCA/remove-director" },
 {
 title: "Authorized Capital Increase",
 href: "/authorized-capital-increase",
 },
 { title: "OPC Compliance", href: "/MCA/opc-compliance" },
 { title: "ADT-1 Filing", href: "/MCA/adt-1-filing" },
 { title: "Share Transfer", href: "/MCA/share-transfer" },
 { title: "Name Change - Company", href: "/MCA/name-change-company" },
 { title: "DPT-3 Filing", href: "/MCA/dpt-3-filing" },
 { title: "Demat of Shares", href: "/MCA/demat-of-shares" },
 { title: "Registered Office Change", href: "/MCA/registered-office-change" },
 { title: "LLP Form 11 Filing", href: "/MCA/llp-form-11-filing" },
 { title: "Winding Up - LLP", href: "/MCA/winding-up-llp" },
 { title: "DIN eKYC Filing", href: "/MCA/din-ekyc-filing" },
 { title: "Dormant Status Filing", href: "/MCA/dormant-status-filing" },
 { title: "Winding Up - Company", href: "MCA/winding-up-company" },
 { title: "DIN Reactivation", href: "/MCA/din-reactivation" },
 { title: "MOA Amendment", href: "/MCA/moa-amendment" },
 { title: "Commencement (INC-20A)", href: "/MCA/commencement-inc-20a" },
];

const RatingInline: React.FC = () => (
 <div className="rating-inline" aria-hidden>
 {[...Array(4)].map((_, i) => (
 <Star key={i} className="star" />
 ))}
 <svg
 className="star"
 viewBox="0 0 24 24"
 fill="currentColor"
 width="16"
 height="16"
 >
 <defs>
 <linearGradient id="halfGrad">
 <stop offset="50%" stopColor="currentColor" />
 <stop offset="50%" stopColor="transparent" />
 </linearGradient>
 </defs>
 <path
 fill="url(#halfGrad)"
 d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
 />
 </svg>
 <span className="rating-count">(5)</span>
 </div>
);

const Footer: React.FC = () => {
 const bgImagePath = ASSETS.footerBg;

 return (
 <footer className="pt-10 pb-6">
 <div
 className="max-w-screen-2xl mx-auto p-5 lg:p-8 rounded-xl overflow-hidden"
 style={{
 backgroundColor: "#f1f5f9",
 backgroundImage: `radial-gradient(closest-side at 10% 80%, rgba(236, 213, 230, 0.25), transparent 30%), radial-gradient(closest-side at 90% 30%, rgba(226, 235, 247, 0.45), transparent 30%), url("${bgImagePath}")`,
 backgroundSize: "cover, cover, 220%",
 backgroundRepeat: "no-repeat",
 backgroundPosition: "center",
 }}
 >
 <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-7.5 pt-7 pb-10 bg-slate-200 rounded-xl mob-block">
 <div className="card p-5 lg:p-7.5 lg:pt-4 border-0 shadow-none bg-transparent">
 <div className="flex flex-col gap-4">
 <span className="text-lg font-medium leading-none text-slate-950 mb-4">
 Company
 </span>
 <a
 className="leading-none hover:text-amber-700 transition-colors"
 href="/about-us"
 >
 About Us
 </a>
 <a
 className="leading-none hover:text-amber-700 transition-colors"
 href="/careers"
 >
 Careers
 </a>
 <a
 className="leading-none hover:text-amber-700 transition-colors"
 href="/contact-us"
 >
 Contact Us
 </a>
 </div>
 </div>

 <div className="card p-5 lg:p-7.5 lg:pt-4 border-0 shadow-none bg-transparent">
 <div className="flex flex-col gap-4">
 <span className="text-lg font-medium leading-none text-slate-950 mb-4">
 Platforms
 </span>
 <a
 className="leading-none hover:text-amber-700 transition-colors"
 href="/search/"
 >
 Business Search
 </a>
 <a
 className="leading-none hover:text-amber-700 transition-colors"
 href="/trademark-search"
 >
 Trademark Search
 </a>
 <a
 className="leading-none hover:text-amber-700 transition-colors"
 href="https://filings.ae/"
 >
 Filings.AE
 </a>
 </div>
 </div>

 <div className="card p-5 lg:p-7.5 lg:pt-4 border-0 shadow-none bg-transparent">
 <div className="flex flex-col gap-4">
 <span className="text-lg font-medium leading-none text-slate-950 mb-4">
 Usage
 </span>
 <a
 className="leading-none hover:text-amber-700 transition-colors"
 href="/termsconditions"
 >
 Terms &amp; Conditions
 </a>
 <a
 className="leading-none hover:text-amber-700 transition-colors"
 href="/privacypolicy"
 >
 Privacy Policy
 </a>
 <a
 className="leading-none hover:text-amber-700 transition-colors"
 href="/refund-policy"
 >
 Refund Policy
 </a>
 </div>
 </div>

 <div className="card p-5 lg:p-7.5 lg:pt-4 border-0 shadow-none bg-transparent">
 <div className="flex flex-col gap-4">
 <span className="text-lg font-medium leading-none text-slate-950 mb-4 hidden md:block">
 &nbsp;
 </span>
 <a
 className="leading-none hover:text-amber-700 transition-colors"
 href="/confidentiality-policy"
 >
 Confidentiality Policy
 </a>
 <a
 className="leading-none hover:text-amber-700 transition-colors"
 href="/disclaimer"
 >
 Disclaimer Policy
 </a>
 <a
 className="leading-none hover:text-amber-700 transition-colors"
 href="/review"
 >
 Reviews
 </a>
 </div>
 </div>
 </div>

 <div className="mt-3 pt-3">
 <div className="max-w-screen-2xl mx-auto px-3 flex flex-col md:flex-row items-center justify-between gap-4">
 <p className="text-xs text-slate-500">
 © 2025 All Rights Reserved.
 </p>
 <p className="text-xs text-slate-500">
 Unless otherwise indicated, all materials on these pages are
 copyrighted. All rights reserved.
 </p>
 <div className="flex items-center gap-2">
 <a
 className="text-slate-500 hover:text-amber-700 transition-colors text-sm"
 href="https://www.facebook.com"
 aria-label="facebook"
 >
 FB
 </a>
 <a
 className="text-slate-500 hover:text-amber-700 transition-colors text-sm"
 href="https://twitter.com"
 aria-label="twitter"
 >
 X
 </a>
 <a
 className="text-slate-500 hover:text-amber-700 transition-colors text-sm"
 href="https://www.youtube.com"
 aria-label="youtube"
 >
 YT
 </a>
 </div>
 </div>
 </div>
 </div>
 </footer>
 );
};

export default function LLPForm11Filing(): React.ReactElement {
 const [activeFaq, setActiveFaq] = useState<number | null>(null);
 const faqItems = [
 "What is LLP Form 11?",
 "Who must file Form 11?",
 "What documents are needed to file Form 11?",
 "What is the deadline for filing Form 11?",
 "What are penalties for late filing?",
 "Can Form 11 be revised after submission?",
 "How to check Form 11 filing status?",
 "What is the processing time for Form 11?",
 ];

 return (
 <div className="min-h-screen page bg-[#f3f4f6]">
 <Head>
 <link
 href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap"
 rel="stylesheet"
 />
 <title>LLP Form 11 Filing</title>
 </Head>

 {/* Imported Navbar */}
 <Navbar />

 {/* Hero Section */}
 <section className="bg-white pt-10 pb-12">
 <div className="max-w-7xl mx-auto px-4 sm:px-6">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
 {/* Left Column */}
 <div>
 {/* Badge */}
 <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 mb-4">
 <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
 <span className="text-xs font-medium text-amber-700">LLP COMPLIANCE</span>
 </div>

 <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
 LLP Form 11
 <span className="text-amber-700 relative ml-2">
 Filing
 <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-amber-600 to-amber-700 rounded-full"></div>
 </span>
 </h1>
 <p className="text-slate-600 mb-6 max-w-xl text-sm sm:text-base">
 File your LLP annual return (Form 11) quickly and accurately. We
 assist with form preparation, DSC requirements and submission to
 MCA.
 </p>

 <ul className="space-y-4">
 <li className="flex items-start gap-3 group">
 <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-amber-100 text-amber-700 group-hover:bg-amber-200 transition-colors">
 ✓
 </div>
 <div>
 <div className="font-semibold text-sm sm:text-base">Hassle-free Filing</div>
 <div className="text-xs sm:text-sm text-slate-600">
 We prepare and submit Form 11 on your behalf
 </div>
 </div>
 </li>

 <li className="flex items-start gap-3 group">
 <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-amber-100 text-amber-700 group-hover:bg-amber-200 transition-colors">
 ✓
 </div>
 <div>
 <div className="font-semibold text-sm sm:text-base">DSC & DIN Assistance</div>
 <div className="text-xs sm:text-sm text-slate-600">
 Guidance on digital signatures and LLP partner details
 </div>
 </div>
 </li>

 <li className="flex items-start gap-3 group">
 <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-amber-100 text-amber-700 group-hover:bg-amber-200 transition-colors">
 ✓
 </div>
 <div>
 <div className="font-semibold text-sm sm:text-base">Compliance Reminders</div>
 <div className="text-xs sm:text-sm text-slate-600">
 Avoid penalties with timely filings
 </div>
 </div>
 </li>

 <li className="flex items-start gap-3 group">
 <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-amber-100 text-amber-700 group-hover:bg-amber-200 transition-colors">
 ✓
 </div>
 <div>
 <div className="font-semibold text-sm sm:text-base">End-to-end Support</div>
 <div className="text-xs sm:text-sm text-slate-600">
 From document checklist to MCA submission
 </div>
 </div>
 </li>
 </ul>

 {/* Trust Badges */}
 <div className="flex items-center gap-3 mt-6">
 <div className="flex -space-x-1.5">
 {[1, 2, 3].map((i) => (
 <div key={i} className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 border-2 border-white shadow-sm" />
 ))}
 </div>
 <span className="text-xs sm:text-sm text-gray-600">Trusted by 10,000+ businesses</span>
 </div>
 </div>

 {/* Right Column - Form */}
 <div className="relative">
 <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
 <div
 className="absolute -top-4 left-6 right-6 h-4 rounded-t-xl"
 style={{
 background: "linear-gradient(90deg, #C15F3C, #A74A2F)",
 }}
 />

 <div className="space-y-4 mt-3">
 <div>
 <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
 LLPIN <span className="text-amber-600">*</span>
 </label>
 <input
 type="text"
 className="w-full px-3 sm:px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-amber-600 bg-gray-50 text-sm"
 placeholder="Enter LLPIN"
 />
 </div>

 <div>
 <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
 LLP Name
 </label>
 <input
 type="text"
 placeholder="Filled Automatically"
 className="w-full px-3 sm:px-4 py-2 border border-gray-200 rounded bg-gray-100 text-slate-500 text-sm"
 readOnly
 />
 <p className="text-xs text-slate-400 mt-1">
 This field will auto-populate after entering LLPIN.
 </p>
 </div>

 <div>
 <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
 Financial Year <span className="text-amber-600">*</span>
 </label>
 <input
 type="text"
 className="w-full px-3 sm:px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-amber-600 bg-gray-50 text-sm"
 placeholder="e.g. 2024-2025"
 />
 </div>

 <div>
 <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
 Designated Partner Email <span className="text-amber-600">*</span>
 </label>
 <input
 type="email"
 className="w-full px-3 sm:px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-amber-600 bg-gray-50 text-sm"
 placeholder="Enter email for contact"
 />
 </div>

 <div className="flex justify-end">
 <button className="px-5 py-2.5 rounded bg-gradient-to-r from-amber-700 to-amber-800 text-white font-semibold text-sm hover:from-amber-800 hover:to-amber-900 transition-all shadow-md hover:shadow-lg">
 Submit Form 11
 </button>
 </div>

 {/* Security Badge */}
 <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400 pt-1">
 <svg className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
 </svg>
 <span>Secure · No spam · Instant confirmation</span>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Main Content */}
 <section className="py-4">
 <div className="max-w-7xl mx-auto px-4 sm:px-6">
 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
 {/* Left Main Content */}
 <div className="lg:col-span-3 space-y-6">
 <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 sm:p-6">
 <h2 className="text-xl sm:text-2xl font-bold mb-3">
 LLP Annual Return (Form 11)
 </h2>
 <p className="text-slate-600 mb-4 leading-relaxed text-sm sm:text-base">
 LLP Form 11 is the annual return that every Limited Liability
 Partnership must file with the Ministry of Corporate Affairs.
 It contains details of partners, partners' contributions and
 other statutory particulars for the relevant financial year.
 </p>

 <h3 className="text-lg sm:text-xl font-semibold mt-4 mb-2 text-amber-800">
 Who Must File Form 11
 </h3>
 <ul className="list-inside space-y-2 text-slate-600 mb-4 text-sm sm:text-base">
 <li className="hover:text-amber-700 cursor-pointer transition-colors">All registered LLPs must file Form 11 annually.</li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Non-filing can attract penalties and late fees.</li>
 </ul>

 <h3 className="text-lg sm:text-xl font-semibold mt-4 mb-2 text-amber-800">
 Key Contents of Form 11
 </h3>
 <ul className="space-y-2 ml-4 text-slate-600 mb-4 text-sm sm:text-base">
 <li className="hover:text-amber-700 cursor-pointer transition-colors">
 <strong>Partners' Details:</strong> Names, addresses and
 DIN/DPIN if applicable.
 </li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">
 <strong>Contribution Details:</strong> Capital contribution
 of partners.
 </li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">
 <strong>Registered Office:</strong> Confirmation of address
 as per records.
 </li>
 </ul>

 <h3 className="text-lg sm:text-xl font-semibold mt-4 mb-2 text-amber-800">
 Filing Timeline & Penalties
 </h3>
 <p className="text-slate-600 mb-4 leading-relaxed text-sm sm:text-base">
 Form 11 must be filed within 60 days from the end of the
 financial year. Late filing attracts additional fees and
 penalties depending on the delay.
 </p>

 <div className="mt-6">
 <h3 className="text-xl sm:text-2xl font-bold mb-4">
 Why Choose Us for Form 11
 </h3>
 <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
 We prepare your Form 11, validate partner information,
 assist with DSC signing and submit the form to MCA to ensure
 a compliant annual return.
 </p>
 </div>
 </div>

 <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 sm:p-6">
 <h3 className="text-xl sm:text-2xl font-bold mb-4">
 Documents Required for Form 11
 </h3>
 <ul className="space-y-3 text-slate-600">
 <li className="flex gap-3 items-start hover:text-amber-700 cursor-pointer transition-colors">
 <CheckCircle className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" /> 
 <span className="text-sm sm:text-base">Partners' PAN and address proof</span>
 </li>
 <li className="flex gap-3 items-start hover:text-amber-700 cursor-pointer transition-colors">
 <CheckCircle className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" /> 
 <span className="text-sm sm:text-base">Details of partners' capital contribution</span>
 </li>
 <li className="flex gap-3 items-start hover:text-amber-700 cursor-pointer transition-colors">
 <CheckCircle className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" /> 
 <span className="text-sm sm:text-base">DSC of designated partner (if required)</span>
 </li>
 </ul>
 </div>

 <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 sm:p-6">
 <h3 className="text-xl sm:text-2xl font-bold mb-4">
 FAQ's on LLP Form 11
 </h3>
 <div className="divide-y">
 {faqItems.map((q, idx) => (
 <div key={idx} className="py-3">
 <button
 className="w-full text-left flex justify-between items-center py-3"
 onClick={() =>
 setActiveFaq(activeFaq === idx ? null : idx)
 }
 >
 <span className="text-slate-800 font-medium text-sm sm:text-base hover:text-amber-700 transition-colors">{q}</span>
 <span className="text-amber-700 text-lg">
 {activeFaq === idx ? "−" : "+"}
 </span>
 </button>
 {activeFaq === idx && (
 <div className="text-slate-600 mt-2 text-sm">
 <p>
 This answer explains {q.toLowerCase()}. For tailored
 assistance and templates, get in touch with our
 experts.
 </p>
 </div>
 )}
 </div>
 ))}
 <div className="py-4">
 <button className="px-4 py-2 border-2 border-amber-600 rounded text-sm text-amber-700 hover:bg-amber-50 transition-colors font-medium">
 Load More
 </button>
 </div>
 </div>
 </div>
 </div>


 </div>
 </div>
 </section>

 <Footer />

 {/* WhatsApp CTA */}
 <div
 className="fixed right-4 sm:right-6 bottom-4 sm:bottom-6 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-4 py-3 rounded-full shadow-2xl flex items-center gap-3 z-50 hover:from-amber-700 hover:to-amber-800 transition-all cursor-pointer"
 role="button"
 aria-label="Live chat with experts"
 onClick={() => alert("Open WhatsApp chat")}
 >
 <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
 <path
 fill="#fff"
 d="M12 2a10 10 0 00-8.66 14.2L2 22l5.93-1.7A10 10 0 1012 2z"
 />
 </svg>
 <span className="text-xs sm:text-sm font-semibold">Live Chat with Experts</span>
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
 .rating-inline {
 display: inline-flex;
 gap: 4px;
 align-items: center;
 }
 .star {
 color: #f59e0b;
 }
 @media (max-width: 1024px) {
 .max-w-7xl {
 padding-left: 16px;
 padding-right: 16px;
 }
 }
 @media (max-width: 768px) {
 h1 {
 font-size: 2rem;
 }
 }
 `}</style>
 </div>
 );
}
