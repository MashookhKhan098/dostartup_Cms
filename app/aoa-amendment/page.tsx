"use client";

/* eslint-disable @next/next/no-img-element */

import React, { useMemo, useState } from "react";
import { Star, ChevronDown, Search, Menu, X } from "lucide-react";
import Navbar from "../components/Navbar";

/* ------------------------------
 Assets & Data (merged)
 ------------------------------ */
const ASSETS = {
 logo: "/images/india-logo.jpg",
 hero: "https://img.indiafilings.com/catalog/mca-compliance-simplified-india.webp",
 heroTile: "/images/hero-tile.png",
 promoBlue:
 "https://img.indiafilings.com/catalog/company-compliance-india.png",
 ledgers: "https://img.indiafilings.com/catalog/ledgers.png",
 gstSave: "https://img.indiafilings.com/catalog/gstin.png",
 cards: {
 aoaAmendment: "https://img.indiafilings.com/catalog/aoa-amendment.png",
 companyCompliance:
 "https://img.indiafilings.com/catalog/company-compliance-india.png",
 dinEKyc: "https://img.indiafilings.com/catalog/din-ekyc.png",
 },
 footerBg: "/images/footer-bg.png",
 whatsapp: "/images/whatsapp.svg",
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

const popularTags = [
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

/* ------------------------------
 Small UI components
 ------------------------------ */
const Rating: React.FC = () => (
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

/* ------------------------------
 Footer (updated content)
 ------------------------------ */
const Footer: React.FC = () => {
 const bgImagePath = ASSETS.footerBg;

 return (
 <footer className="pt-10 pb-6">
 <div
 className="max-w-screen-2xl mx-auto p-5 lg:p-8 rounded-xl overflow-hidden"
 style={{
 backgroundColor: "#f1f5f9",
 backgroundImage: `radial-gradient(closest-side at 10% 80%, rgba(236, 213, 230, 0.25), transparent 30%),
 radial-gradient(closest-side at 90% 30%, rgba(226, 235, 247, 0.45), transparent 30%),
 url("${bgImagePath}")`,
 backgroundSize: "cover, cover, 220%",
 backgroundRepeat: "no-repeat",
 backgroundPosition: "center",
 }}
 >
 <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-7.5 pt-7 pb-10 bg-slate-200 rounded-xl">
 <div className="p-5 lg:p-7.5">
 <div className="flex flex-col gap-4">
 <span className="text-lg font-medium leading-none text-slate-950 mb-4">
 Company
 </span>

 <a
 className="leading-none hover:text-amber-700 transition-colors"
 href="/about-us"
 >
 <span className="flex text-sm text-black leading-5 items-center">
 <svg
 xmlns="http://www.w3.org/2000/svg"
 fill="none"
 viewBox="0 0 24 24"
 strokeWidth={1.5}
 stroke="currentColor"
 className="size-4 text-amber-600 mr-1"
 >
 <path
 strokeLinecap="round"
 strokeLinejoin="round"
 d="m8.25 4.5 7.5 7.5-7.5 7.5"
 />
 </svg>
 About Us
 </span>
 </a>

 <a
 className="leading-none hover:text-amber-700 transition-colors"
 href="/careers"
 >
 <span className="flex text-sm text-black leading-5 items-center">
 <svg
 xmlns="http://www.w3.org/2000/svg"
 fill="none"
 viewBox="0 0 24 24"
 strokeWidth={1.5}
 stroke="currentColor"
 className="size-4 text-amber-600 mr-1"
 >
 <path
 strokeLinecap="round"
 strokeLinejoin="round"
 d="m8.25 4.5 7.5 7.5-7.5 7.5"
 />
 </svg>
 Careers
 </span>
 </a>

 <a
 className="leading-none hover:text-amber-700 transition-colors"
 href="/contact-us"
 >
 <span className="flex text-sm text-black leading-5 items-center">
 <svg
 xmlns="http://www.w3.org/2000/svg"
 fill="none"
 viewBox="0 0 24 24"
 strokeWidth={1.5}
 stroke="currentColor"
 className="size-4 text-amber-600 mr-1"
 >
 <path
 strokeLinecap="round"
 strokeLinejoin="round"
 d="m8.25 4.5 7.5 7.5-7.5 7.5"
 />
 </svg>
 Contact Us
 </span>
 </a>
 </div>
 </div>

 <div className="p-5 lg:p-7.5">
 <div className="flex flex-col gap-4">
 <span className="text-lg font-medium leading-none text-slate-950 mb-4">
 Platforms
 </span>

 <a
 className="leading-none hover:text-amber-700 transition-colors"
 href="/search/"
 >
 <span className="flex text-sm text-black leading-5 items-center">
 <svg
 xmlns="http://www.w3.org/2000/svg"
 fill="none"
 viewBox="0 0 24 24"
 strokeWidth={1.5}
 stroke="currentColor"
 className="size-4 text-amber-600 mr-1"
 >
 <path
 strokeLinecap="round"
 strokeLinejoin="round"
 d="m8.25 4.5 7.5 7.5-7.5 7.5"
 />
 </svg>
 Business Search
 </span>
 </a>

 <a
 className="leading-none hover:text-amber-700 transition-colors"
 href="/trademark-search"
 >
 <span className="flex text-sm text-black leading-5 items-center">
 <svg
 xmlns="http://www.w3.org/2000/svg"
 fill="none"
 viewBox="0 0 24 24"
 strokeWidth={1.5}
 stroke="currentColor"
 className="size-4 text-amber-600 mr-1"
 >
 <path
 strokeLinecap="round"
 strokeLinejoin="round"
 d="m8.25 4.5 7.5 7.5-7.5 7.5"
 />
 </svg>
 Trademark Search
 </span>
 </a>

 <a
 className="leading-none hover:text-amber-700 transition-colors"
 href="https://filings.ae/"
 target="_blank"
 rel="noreferrer"
 >
 <span className="flex text-sm text-black leading-5 items-center">
 <svg
 xmlns="http://www.w3.org/2000/svg"
 fill="none"
 viewBox="0 0 24 24"
 strokeWidth={1.5}
 stroke="currentColor"
 className="size-4 text-amber-600 mr-1"
 >
 <path
 strokeLinecap="round"
 strokeLinejoin="round"
 d="m8.25 4.5 7.5 7.5-7.5 7.5"
 />
 </svg>
 Filings.AE for UAE
 </span>
 </a>
 </div>
 </div>

 <div className="p-5 lg:p-7.5">
 <div className="flex flex-col gap-4">
 <span className="text-lg font-medium leading-none text-slate-950 mb-4">
 Usage
 </span>

 <a
 className="leading-none hover:text-amber-700 transition-colors"
 href="/termsconditions"
 >
 <span className="flex text-sm text-black leading-5 items-center">
 <svg
 xmlns="http://www.w3.org/2000/svg"
 fill="none"
 viewBox="0 0 24 24"
 strokeWidth={1.5}
 stroke="currentColor"
 className="size-4 text-amber-600 mr-1"
 >
 <path
 strokeLinecap="round"
 strokeLinejoin="round"
 d="m8.25 4.5 7.5 7.5-7.5 7.5"
 />
 </svg>
 Terms &amp; Conditions
 </span>
 </a>

 <a
 className="leading-none hover:text-amber-700 transition-colors"
 href="/privacypolicy"
 >
 <span className="flex text-sm text-black leading-5 items-center">
 <svg
 xmlns="http://www.w3.org/2000/svg"
 fill="none"
 viewBox="0 0 24 24"
 strokeWidth={1.5}
 stroke="currentColor"
 className="size-4 text-amber-600 mr-1"
 >
 <path
 strokeLinecap="round"
 strokeLinejoin="round"
 d="m8.25 4.5 7.5 7.5-7.5 7.5"
 />
 </svg>
 Privacy Policy
 </span>
 </a>

 <a
 className="leading-none hover:text-amber-700 transition-colors"
 href="/refund-policy"
 >
 <span className="flex text-sm text-black leading-5 items-center">
 <svg
 xmlns="http://www.w3.org/2000/svg"
 fill="none"
 viewBox="0 0 24 24"
 strokeWidth={1.5}
 stroke="currentColor"
 className="size-4 text-amber-600 mr-1"
 >
 <path
 strokeLinecap="round"
 strokeLinejoin="round"
 d="m8.25 4.5 7.5 7.5-7.5 7.5"
 />
 </svg>
 Refund Policy
 </span>
 </a>
 </div>
 </div>

 <div className="p-5 lg:p-7.5">
 <div className="flex flex-col gap-4">
 <span className="text-lg font-medium leading-none text-slate-950 mb-4 hidden md:block">
 &nbsp;
 </span>

 <a
 className="leading-none hover:text-amber-700 transition-colors"
 href="/confidentiality-policy"
 >
 <span className="flex text-sm text-black leading-5 items-center">
 <svg
 xmlns="http://www.w3.org/2000/svg"
 fill="none"
 viewBox="0 0 24 24"
 strokeWidth={1.5}
 stroke="currentColor"
 className="size-4 text-amber-600 mr-1"
 >
 <path
 strokeLinecap="round"
 strokeLinejoin="round"
 d="m8.25 4.5 7.5 7.5-7.5 7.5"
 />
 </svg>
 Confidentiality Policy
 </span>
 </a>

 <a
 className="leading-none hover:text-amber-700 transition-colors"
 href="/disclaimer"
 >
 <span className="flex text-sm text-black leading-5 items-center">
 <svg
 xmlns="http://www.w3.org/2000/svg"
 fill="none"
 viewBox="0 0 24 24"
 strokeWidth={1.5}
 stroke="currentColor"
 className="size-4 text-amber-600 mr-1"
 >
 <path
 strokeLinecap="round"
 strokeLinejoin="round"
 d="m8.25 4.5 7.5 7.5-7.5 7.5"
 />
 </svg>
 Disclaimer Policy
 </span>
 </a>

 <a
 className="leading-none hover:text-amber-700 transition-colors"
 href="/review"
 >
 <span className="flex text-sm text-black leading-5 items-center">
 <svg
 xmlns="http://www.w3.org/2000/svg"
 fill="none"
 viewBox="0 0 24 24"
 strokeWidth={1.5}
 stroke="currentColor"
 className="size-4 text-amber-600 mr-1"
 >
 <path
 strokeLinecap="round"
 strokeLinejoin="round"
 d="m8.25 4.5 7.5 7.5-7.5 7.5"
 />
 </svg>
 Reviews
 </span>
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

/* ------------------------------
 Main Page (AOA Amendment content)
 ------------------------------ */
export default function AOAAmendmentMergedPage(): React.ReactElement {
 const [openFaq, setOpenFaq] = useState<number | null>(null);
 const [companyInput, setCompanyInput] = useState("");
 const [gstChecked, setGstChecked] = useState(false);
 const [pan, setPan] = useState("");
 const [company, setCompany] = useState("");

 const faqItems = [
 "What are the Articles of Association (AOA)?",
 "When must a company register its AOA?",
 "Why might a company amend its AOA?",
 "What is the importance of AOA Amendment?",
 "What must a company do after altering its AOA?",
 "How do we assist with AOA Amendments?",
 "What is included in the AOA?",
 "What are the legal guidelines for AOA Amendment?",
 "What is entrenchment in the context of AOA?",
 "What is the first step in the AOA Amendment process?",
 ];

 const basicBullets = useMemo(
 () => [
 "Accountant",
 "MCA Compliance",
 "ADT-1",
 "ITR-6 Filing",
 "DIN eKYC (for 2 Directors)",
 "Commencement of Business",
 "LEDGERS Accounting Software",
 ],
 []
 );

 const articleItems = useMemo(
 () => [
 [
 "Directors' Roles:",
 "Rules about what the directors do and how they are appointed or removed.",
 ],
 [
 "Shareholder Rights:",
 "Explains shareholder rights like voting, getting dividends, and selling shares.",
 ],
 [
 "Board Meetings:",
 "Guidelines for how meetings of the directors are held.",
 ],
 [
 "General Meetings:",
 "Rules for big company meetings, including how decisions are voted on.",
 ],
 ],
 []
 );

 return (
 <div className="page">
 {/* Imported Navbar */}
 <Navbar />

 <main>
 {/* Top hero banner */}
 <section className="site-banner">
 <div className="banner-inner">
 <div className="banner-cta">
 {/* Badge */}
 <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 mb-4">
 <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
 <span className="text-xs font-medium text-amber-700">MCA COMPLIANCE</span>
 </div>

 <h1 className="lead-title">
 AOA Amendment — Articles of Association Changes Made Simple
 </h1>
 <p className="lead-sub">
 Amend your Articles of Association with guidance from experts —
 board meetings, resolutions and MCA filing handled end-to-end.
 </p>

 {/* Trust Badges */}
 <div className="flex items-center gap-3 mt-6">
 <div className="flex -space-x-1.5">
 {[1, 2, 3].map((i) => (
 <div key={i} className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 border-2 border-white shadow-sm" />
 ))}
 </div>
 <span className="text-xs sm:text-sm text-gray-600">Trusted by 10,000+ businesses</span>
 </div>

 <form
 className="hero-form"
 onSubmit={(e) => {
 e.preventDefault();
 alert(
 `Demo requested for "${companyInput || "Unnamed company"}"`
 );
 }}
 >
 <input
 id="company-name"
 className="hero-input"
 placeholder="ENTER COMPANY NAME"
 aria-label="Enter company name"
 value={companyInput}
 onChange={(e) => setCompanyInput(e.target.value)}
 />
 <button type="submit" className="hero-button">
 Book Demo
 </button>
 </form>
 </div>

 <div className="banner-media">
 <div className="media-frame">
 <img src={ASSETS.hero} alt="MCA hero" />
 <div className="media-badge bg-gradient-to-r from-amber-600 to-amber-700">
 MCA Compliance Simplified
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Main container with AOA content and sidebar */}
 <section className="main-container">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
 <div className="grid grid-cols-12 gap-8">
 {/* Left column */}
 <section className="col-span-12 lg:col-span-8">
 <div className="flex flex-col lg:flex-row gap-6 items-start">
 {/* Left box - image */}
 <div className="w-full lg:w-1/2 bg-white rounded-lg border border-gray-200 overflow-hidden shadow-lg">
 <img
 src={ASSETS.heroTile}
 alt="hero"
 className="w-full h-72 object-cover block"
 />
 </div>

 {/* Right box - small product card */}
 <div className="w-full lg:w-1/2 bg-white rounded-lg border border-gray-200 p-6 shadow-lg flex flex-col justify-between hover:border-amber-200 transition-colors">
 <div>
 <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 mb-2">
 <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
 <span className="text-xs font-medium text-amber-700">MCA COMPLIANCE</span>
 </div>
 <h2 className="text-xl font-semibold">AOA Amendment</h2>
 <div className="flex items-center gap-3 mt-2">
 <div className="flex items-center gap-1 text-yellow-500 text-sm">
 ★★★★★
 </div>
 <div className="text-sm text-slate-500">(39)</div>
 </div>

 <p className="text-sm text-slate-600 mt-4">
 AOA Amendment for a Private Limited Company &amp; OPC.
 </p>

 <div className="mt-5 border-2 border-dashed rounded-md border-amber-200 p-4 bg-amber-50/30">
 <div className="text-xs text-amber-700 font-semibold bg-white inline-flex px-2 py-1 rounded border border-amber-200">
 1 Exclusive Offers
 </div>
 <h4 className="font-semibold mt-3">Basic</h4>
 <ul className="text-sm text-slate-600 mt-2 list-disc list-inside">
 <li className="hover:text-amber-700 transition-colors">Application Filing in MCA</li>
 <li className="hover:text-amber-700 transition-colors">Provide Updated AOA</li>
 </ul>
 <div className="mt-4">
 <button className="bg-white border-2 border-amber-600 text-amber-700 px-4 py-1.5 rounded hover:bg-amber-50 transition-colors text-sm font-medium">
 ADD TO CART
 </button>
 </div>
 </div>

 <div className="mt-4 text-sm">
 <a className="text-amber-700 underline hover:text-amber-800 font-medium">
 Terms and conditions
 </a>
 <span className="mx-4 text-gray-300">|</span>
 <a className="text-amber-700 underline hover:text-amber-800 font-medium">
 Refer a Friend
 </a>
 </div>
 </div>

 <div className="mt-6 border-t pt-4">
 <h5 className="text-sm font-semibold mb-3">
 Offers and discounts
 </h5>
 <div className="mt-3 p-3 rounded flex items-center gap-3 border border-gray-200 hover:border-amber-200 transition-colors">
 <img
 src={ASSETS.ledgers}
 alt="ledgers"
 className="h-8 w-8"
 />
 <div className="text-sm">
 <div className="font-semibold text-amber-700">
 LEDGERS - Compliance Platform
 </div>
 <div className="text-xs text-slate-600">
 Invoicing, GST Filing, Banking and Payroll
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>

 {/* Main article */}
 <article className="mt-10 space-y-6">
 <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 shadow-lg">
 <h1 className="text-xl sm:text-2xl font-bold mb-4">
 Articles of Association (AOA) Amendment
 </h1>
 <p className="text-sm text-slate-600 mb-6">
 The Articles of Association (AOA) of a company outline the
 rules and regulations that dictate its internal
 management. These articles specify the procedures for
 managing various aspects and operations within the
 company. A company article has to be registered at the
 time of company incorporation.
 </p>
 </div>

 <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
 <h2 className="text-lg sm:text-xl font-semibold mb-3 text-amber-800">
 Article of Association
 </h2>
 <p className="text-sm text-slate-600 mb-4">
 The Articles of Association (AoA) is a crucial document
 for a company's internal administration and governance. It
 contains the rules, regulations, and bylaws that govern
 the company's internal management and operations.
 </p>

 <ul className="space-y-3">
 {articleItems.map((item, idx) => (
 <li key={idx} className="flex gap-3 items-start hover:text-amber-700 transition-colors">
 <div className="mt-1 text-amber-600">✓</div>
 <div className="text-sm">
 <strong>{item[0]}</strong> {item[1]}
 </div>
 </li>
 ))}
 </ul>
 </div>

 <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
 <h2 className="text-lg sm:text-xl font-semibold mb-3 text-amber-800">
 AOA Amendment
 </h2>
 <p className="text-sm text-slate-600 mb-6">
 AOA Amendment refers to the process of changing the
 Articles of Association of a company. Amending the AOA
 allows a company to update or change these rules to adapt
 to new circumstances, comply with legal requirements, or
 realign with the company's evolving objectives and
 strategies.
 </p>

 <h3 className="font-semibold mb-2 text-amber-800">
 When a Company Can Amend AOA?
 </h3>
 <p className="text-sm text-slate-600 mb-4">
 A company can alter its Articles of Association (AoA)
 under various circumstances, including:
 </p>

 <div className="grid grid-cols-1 gap-4">
 <div className="p-4 rounded bg-amber-50/30 border border-amber-100 hover:border-amber-200 transition-colors">
 <strong className="text-amber-800">
 Conversion of a Private Company into a Public Company
 </strong>
 <p className="text-sm text-slate-600 mt-2">
 When a private company decides to become a public
 company, it often needs to make significant changes to
 its AoA to comply with the additional regulatory
 requirements applicable to public companies.
 </p>
 </div>

 <div className="p-4 rounded bg-amber-50/30 border border-amber-100 hover:border-amber-200 transition-colors">
 <strong className="text-amber-800">
 Conversion of Public Company into Private Company
 </strong>
 <p className="text-sm text-slate-600 mt-2">
 Conversely, if a public company intends to become a
 private company, it must amend its AoA to align with
 the reduced regulatory requirements for private
 companies.
 </p>
 </div>

 <div className="p-4 rounded bg-amber-50/30 border border-amber-100 hover:border-amber-200 transition-colors">
 <strong className="text-amber-800">
 Alteration in any of the Existing Articles
 </strong>
 <ul className="list-disc list-inside text-sm text-slate-600 mt-2 space-y-1">
 <li className="hover:text-amber-700 transition-colors">
 <strong>Change in Business Objectives:</strong> When
 the company's business objectives or activities
 evolve or expand.
 </li>
 <li className="hover:text-amber-700 transition-colors">
 <strong>Change in Share Capital:</strong> If the
 company intends to increase or decrease its share
 capital.
 </li>
 <li className="hover:text-amber-700 transition-colors">
 <strong>Change in Name:</strong> When a company
 decides to change its name.
 </li>
 </ul>
 </div>
 </div>
 </div>

 <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
 <h2 className="text-lg sm:text-xl font-semibold text-amber-800">
 Key Requirements for Changing a Company's AoA
 </h2>
 <ul className="list-inside space-y-3 text-sm text-slate-600 mt-4">
 <li className="hover:text-amber-700 transition-colors">
 <strong>Legal Guidelines:</strong> The changes need to
 be in line with the rules set by the Companies Act and
 the company's Memorandum.
 </li>
 <li className="hover:text-amber-700 transition-colors">
 <strong>Special Agreement for Entrenchment:</strong> If
 the company wants to add special, hard-to-change rules
 (entrenchment provisions), all members of a private
 company must agree, or a majority vote is needed in a
 public company.
 </li>
 <li className="hover:text-amber-700 transition-colors">
 <strong>Approval for Changing Company Type:</strong> If
 the company is switching from public to private or vice
 versa, it must get a majority agreement (Special
 Resolution).
 </li>
 </ul>
 </div>

 <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
 <h2 className="text-lg sm:text-xl font-semibold mb-3 text-amber-800">
 Procedure for AOA Amendment
 </h2>
 <p className="text-sm text-slate-600 mb-4">
 A company may modify, delete or add any article in the
 following manner:
 </p>

 <div className="space-y-4 text-sm text-slate-600">
 <div className="hover:bg-amber-50/30 p-3 rounded transition-colors">
 <h3 className="font-semibold text-amber-800">
 Step 1: Board of Directors Meeting
 </h3>
 <ul className="list-inside mt-2 space-y-2">
 <li className="hover:text-amber-700 transition-colors">
 Notice Issuance: Send a notice of the Board Meeting
 to all Directors at least 7 days before the meeting
 date.
 </li>
 <li className="hover:text-amber-700 transition-colors">
 Attach Supporting Documents: Include the meeting's
 agenda, notes and draft resolution with the notice.
 </li>
 </ul>
 </div>

 <div className="hover:bg-amber-50/30 p-3 rounded transition-colors">
 <h3 className="font-semibold text-amber-800">
 Step 2: Convene General Meeting
 </h3>
 <ul className="list-inside mt-2 space-y-2">
 <li className="hover:text-amber-700 transition-colors">
 Issue a written notice for the General Meeting at
 least 21 days before the scheduled meeting date.
 </li>
 <li className="hover:text-amber-700 transition-colors">
 Conduct the General Meeting and pass a Special
 Resolution for the alteration of the Articles.
 </li>
 </ul>
 </div>

 <div className="hover:bg-amber-50/30 p-3 rounded transition-colors">
 <h3 className="font-semibold text-amber-800">
 Step 3: File Form MGT-14 with ROC
 </h3>
 <p className="mt-2 hover:text-amber-700 transition-colors">
 Submit Form MGT-14 to the Registrar of Companies (ROC)
 within 30 days after the Special Resolution is passed.
 </p>
 </div>
 </div>
 </div>

 <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
 <h3 className="font-semibold text-amber-800">
 Streamlining AOA Amendments with Us
 </h3>
 <p className="text-sm text-slate-600 mt-2">
 We offer comprehensive assistance in the
 amendment of the Articles of Association (AOA). Our expert
 team guides businesses through the entire process,
 ensuring that all modifications comply with the Companies
 Act. Contact us today to ensure your AOA Amendments are
 handled efficiently.
 </p>
 </div>
 </article>

 {/* FAQ section */}
 <section className="mt-8 bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
 <h3 className="text-lg sm:text-xl font-semibold mb-4">
 FAQ's on AOA Amendment
 </h3>
 <div className="divide-y">
 {faqItems.map((q, i) => (
 <div key={i} className="py-4">
 <button
 onClick={() => setOpenFaq(openFaq === i ? null : i)}
 className="w-full text-left flex items-center justify-between"
 >
 <span className="text-sm hover:text-amber-700 transition-colors">{q}</span>
 <span className="text-xl text-amber-700">
 {openFaq === i ? "−" : "+"}
 </span>
 </button>
 {openFaq === i && (
 <div className="mt-3 text-sm text-slate-600">
 This is the answer to the FAQ. Replace with actual
 content as needed.
 </div>
 )}
 </div>
 ))}

 <div className="mt-4 pt-4">
 <button className="text-xs px-3 py-2 border-2 border-amber-600 rounded bg-white text-amber-700 hover:bg-amber-50 transition-colors font-medium">
 Load More
 </button>
 </div>
 </div>
 </section>
 </section>

 {/* Right sidebar */}
 <aside className="col-span-12 lg:col-span-4">
 <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-lg sticky top-24">
 <div className="text-center py-6">
 <div className="text-slate-700 text-lg font-semibold">
 Your cart is empty
 </div>
 <p className="text-sm text-slate-500 mt-3">
 Browse our services and add some services in cart!
 </p>
 <div className="mt-6 space-y-3 text-left">
 <input
 className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-amber-600"
 placeholder="Name"
 />
 <input
 className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-amber-600"
 placeholder="Email"
 />

 <div className="flex gap-2 items-center">
 <select
 className="border border-gray-200 rounded px-3 py-2 text-sm flex-shrink-0 w-20 md:w-24 focus:outline-none focus:ring-1 focus:ring-amber-600"
 aria-label="country code"
 >
 <option>+91</option>
 </select>
 <input
 className="flex-1 min-w-0 border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-amber-600"
 placeholder="Phone"
 inputMode="tel"
 />
 </div>

 <label className="flex items-center gap-2 text-sm">
 <input
 type="checkbox"
 checked={gstChecked}
 onChange={() => setGstChecked((s) => !s)}
 className="accent-amber-600"
 />{" "}
 Enter GSTIN to get 18% GST Credit
 </label>
 
 {gstChecked && (
 <input
 className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-amber-600"
 placeholder="GSTIN"
 />
 )}
 
 <button className="w-full bg-gradient-to-r from-amber-700 to-amber-800 text-white rounded py-2 mt-2 hover:from-amber-800 hover:to-amber-900 transition-all shadow-md hover:shadow-lg">
 Get Started
 </button>
 
 <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400 pt-1">
 <svg className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
 </svg>
 <span>Secure · No spam · Instant confirmation</span>
 </div>
 </div>
 </div>
 </div>

 <div className="mt-6 space-y-6">
 <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-lg hover:border-amber-200 transition-colors">
 <img
 src={ASSETS.cards.companyCompliance}
 alt="comp"
 className="w-full rounded"
 />
 <div className="mt-3 font-semibold text-amber-800">Company Compliance</div>
 </div>

 <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-lg hover:border-amber-200 transition-colors">
 <img
 src={ASSETS.cards.dinEKyc}
 alt="ekyc"
 className="w-full rounded"
 />
 <div className="mt-3 font-semibold text-amber-800">DIN eKYC Filing</div>
 </div>
 </div>

 <div className="mt-8 bg-white rounded-lg border border-gray-200 p-4 shadow-lg">
 <h4 className="font-semibold text-amber-800">Related Guides</h4>
 <ul className="mt-3 space-y-2 text-sm">
 <li className="text-amber-700 hover:text-amber-800 cursor-pointer hover:underline">
 Comprehensive Guide to Articles of Association (AOA)
 </li>
 <li className="text-amber-700 hover:text-amber-800 cursor-pointer hover:underline">
 eAOA – Form INC-34 – SPICe AOA
 </li>
 <li className="text-amber-700 hover:text-amber-800 cursor-pointer hover:underline">
 Articles of Association
 </li>
 </ul>
 </div>
 </aside>
 </div>

 {/* Popular searches */}
 <section className="mt-10 bg-white rounded-lg p-6 shadow-lg border border-gray-200">
 <h4 className="font-semibold mb-4 text-amber-800">Popular Searches</h4>
 <div className="flex flex-wrap gap-2">
 {popularTags.slice(0, 20).map((t) => (
 <span
 key={t}
 className="text-xs border border-gray-200 px-3 py-1.5 rounded bg-white text-gray-700 hover:border-amber-300 hover:text-amber-700 cursor-pointer transition-colors"
 >
 {t}
 </span>
 ))}
 </div>
 </section>
 </div>
 </section>

 {/* Floating WhatsApp CTA */}
 <div
 className="whatsapp-cta"
 role="button"
 aria-label="Live chat with experts"
 suppressHydrationWarning
 onClick={() => alert("Open WhatsApp chat")}
 >
 <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
 <path
 fill="#fff"
 d="M12 2a10 10 0 00-8.66 14.2L2 22l5.93-1.7A10 10 0 1012 2z"
 />
 </svg>
 <span>Live Chat with Experts</span>
 </div>
 </main>

 <Footer />

 {/* ---------- Styles (merged + updated) ---------- */}
 <style jsx>{`
 :global(body) {
 margin: 0;
 font-family: system-ui, -apple-system, "Segoe UI", Roboto,
 "Helvetica Neue", Arial;
 background: linear-gradient(
 135deg,
 #f5f7ff 0%,
 #fdf6ff 40%,
 #f3fbff 100%
 );
 color: #0f172a;
 }

 .page {
 min-height: 100vh;
 }

 /* Hero */
 .site-banner {
 padding: 28px 16px 44px;
 }
 .banner-inner {
 max-width: 1160px;
 margin: 0 auto;
 display: grid;
 grid-template-columns: 1.4fr 1fr;
 gap: 32px;
 align-items: center;
 }
 .banner-cta {
 color: #0b2545;
 padding: 30px;
 }
 .lead-title {
 font-size: 36px;
 margin: 10px 0;
 color: #0b2545;
 line-height: 1.15;
 }
 .lead-sub {
 color: #475569;
 font-size: 15px;
 line-height: 1.6;
 }
 .hero-form {
 margin-top: 18px;
 display: flex;
 gap: 12px;
 align-items: center;
 }
 .hero-input {
 flex: 1;
 background: #fff;
 color: #0b2545;
 border-radius: 999px;
 padding: 12px 16px;
 border: 1px solid #e6eef8;
 font-size: 14px;
 box-shadow: 0 6px 18px rgba(11, 37, 85, 0.04);
 }
 .hero-button {
 border-radius: 999px;
 background: #C15F3C;
 color: white;
 border: none;
 padding: 12px 20px;
 font-weight: 700;
 cursor: pointer;
 box-shadow: 0 8px 20px rgba(193, 95, 60, 0.15);
 transition: all 0.3s ease;
 }
 .hero-button:hover {
 background: #A74A2F;
 }

 .banner-media .media-frame {
 position: relative;
 border-radius: 18px;
 overflow: hidden;
 background: #000;
 padding: 12px;
 }
 .media-frame img {
 width: 100%;
 height: 420px;
 object-fit: contain;
 display: block;
 }
 .media-badge {
 position: absolute;
 left: 20px;
 bottom: 20px;
 color: white;
 padding: 10px 16px;
 border-radius: 999px;
 font-weight: 600;
 }

 /* main container */
 .main-container {
 padding-bottom: 30px;
 }

 /* Pricing-like card styles reused */
 .rating-inline {
 display: flex;
 align-items: center;
 gap: 6px;
 }
 .rating-inline .star {
 width: 16px;
 height: 16px;
 color: #f59e0b;
 }
 .rating-count {
 color: #64748b;
 font-size: 12px;
 }

 /* WhatsApp CTA */
 .whatsapp-cta {
 position: fixed;
 right: 18px;
 bottom: 18px;
 background: #C15F3C;
 color: white;
 padding: 12px 18px;
 border-radius: 999px;
 display: flex;
 gap: 8px;
 align-items: center;
 box-shadow: 0 10px 30px rgba(193, 95, 60, 0.22);
 cursor: pointer;
 z-index: 100;
 transition: all 0.3s ease;
 }
 .whatsapp-cta:hover {
 background: #A74A2F;
 transform: scale(1.05);
 }
 .whatsapp-cta svg {
 flex: 0 0 auto;
 }

 /* responsive adjustments */
 @media (max-width: 1024px) {
 .banner-inner {
 grid-template-columns: 1fr;
 padding: 20px;
 }
 }
 @media (max-width: 768px) {
 .hero-form {
 flex-direction: column;
 }
 .hero-button {
 width: 100%;
 }
 }
 `}</style>
 </div>
 );
}