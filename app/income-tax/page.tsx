"use client";

import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import SidebarCart from "../components/SidebarCart";
import React, { useMemo, useState } from "react";
import {
 ChevronRight,
 ChevronDown,
 Search,
 ShoppingCart,
 MessageCircle,
 CheckCircle,
 Zap,
 Shield,
 Lock,
 Star,
 StarHalf,
} from "lucide-react";
import Faq from "../components/Faq";

const ASSETS = {
 logo: "/images/india-logo.jpg",
 heroRight: "/images/itr-hero-woman-tablet.webp",
 promoBlue:
 "/images/income-tax-efiling-blue-card.webp",
 stepsImage: "/images/itr-5-steps.webp",
 whoMustFile: "/images/who-must-file-itr.webp",
 whichITR: "/images/which-itr-form.webp",
 docsRequired:
 "/images/documents-required-itr.webp",
 fileOnOwn: "/images/file-itr-on-your-own.webp",
 expertCA: "/images/get-expert-ca-itr.webp",
 cardPartnership:
 "/images/partnership-compliance-card.webp",
 cardBusinessTax:
 "/images/business-tax-filing-card.webp",
};

const tabs = ["ITR 1", "ITR 2", "ITR 3", "ITR 4", "ITR 5", "ITR 6", "ITR 7"];

const states = [
 "Andhra Pradesh",
 "Arunachal Pradesh",
 "Assam",
 "Bihar",
 "Chandigarh",
 "Chhattisgarh",
 "Delhi",
 "Goa",
 "Gujarat",
 "Haryana",
 "Himachal Pradesh",
 "Jammu And Kashmir",
 "Jharkhand",
 "Karnataka",
 "Kerala",
 "Lakshadweep",
 "Madhya Pradesh",
 "Maharashtra",
 "Manipur",
 "Meghalaya",
 "Mizoram",
 "Nagaland",
 "Odisha",
 "Puducherry",
 "Punjab",
 "Rajasthan",
 "Sikkim",
 "Tamil Nadu",
 "Telangana",
 "Tripura",
 "Uttar Pradesh",
 "Uttarakhand",
 "West Bengal",
];

const popularSearches = [
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

const INCOME_TAX_DROPDOWN_LINKS = [
 { title: "Income Tax E-Filing", href: "income-tax/e-filing" },
 { title: "Business Tax Filing", href: "income-tax/business-tax-filing" },
 {
 title: "Partnership Firm / LLP ITR",
 href: "/income-tax/partnership-llp-itr",
 },
 { title: "Company ITR Filing", href: "/income-tax/company-itr-filing" },
 { title: "Trust / NGO Tax Filing", href: "/income-tax/trust-ngo-tax-filing" },
 { title: "15CA - 15CB Filing", href: "/income-tax/15ca-15cb-filing" },
 { title: "TAN Registration", href: "/income-tax/tan-registration" },
 { title: "TDS Return Filing", href: "/income-tax/tds-return-filing" },
 { title: "Income Tax Notice", href: "/income-tax/income-tax-notice" },
];

const RatingStars = ({ value = 4.5 }: { value?: number }) => {
 const full = Math.floor(value);
 const half = value - full >= 0.5;
 return (
 <div className="flex items-center gap-0.5">
 {Array.from({ length: full }).map((_, i) => (
 <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
 ))}
 {half && <StarHalf className="w-4 h-4 text-amber-400 fill-amber-400" />}
 </div>
 );
};

interface NavItemProps {
 children: React.ReactNode;
 hasDropdown?: boolean;
 isActive?: boolean;
 onMouseEnter?: () => void;
 onMouseLeave?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
 children,
 hasDropdown = false,
 isActive = false,
 onMouseEnter,
 onMouseLeave,
}) => (
 <div
 className="relative"
 onMouseEnter={onMouseEnter}
 onMouseLeave={onMouseLeave}
 >
 <button
 className={`text-sm flex items-center gap-1 hover:text-[#C15F3C] ${
 isActive ? "text-[#C15F3C] font-medium" : "text-slate-700"
 }`}
 >
 {children}
 {hasDropdown && <ChevronDown className="w-3 h-3" />}
 </button>
 </div>
);

export default function IncomeTaxPage() {
 const [activeTab, setActiveTab] = useState("ITR 1");

 const offersLeft = useMemo(
 () => [
 {
 title: "Salaried person",
 bullets: [
 "Income Tax computation",
 "Income Tax Saral copy",
 "Tax Consultation",
 "E Filing",
 ],
 },
 ],
 []
 );

 const offersRight = useMemo(
 () => [
 {
 title: "30 Minutes - Tax Consultation",
 bullets: [
 "Tax Consultation",
 "Business Consultation",
 "Legal Consultation",
 "Experienced Professionals",
 ],
 },
 ],
 []
 );

 return (
 <div className="min-h-screen bg-[#F4F3EE] text-slate-800">
 <Navbar />

 <section className="w-full border-t border-[#DBDFE9] bg-gradient-to-r from-[#C15F3C] via-[#C15F3C]/90 to-[#C15F3C]/70 text-white">
 <div className="max-w-[1200px] mx-auto px-4 py-4 md:py-5">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
 <div>
 <h1 className="text-3xl md:text-[34px] font-bold text-white">
 ITR-1 Return Filing
 </h1>

 <div className="mt-5 inline-flex bg-[#F4F3EE] rounded-full shadow-lg px-1 py-1">
 {tabs.map((t) => (
 <button
 key={t}
 onClick={() => setActiveTab(t)}
 className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
 activeTab === t
 ? "bg-[#F4F3EE] text-[#C15F3C]"
 : "text-slate-700 hover:bg-[#F4F3EE]"
 }`}
 >
 {t}
 </button>
 ))}
 </div>

 <p className="mt-5 text-[14px] text-white/90 max-w-[680px]">
 For resident salaried/pension earners with total income up to
 ₹50 lakh, one house, and basic interest or dividends. Not for
 anyone with business income, capital gains, multiple houses, or
 foreign assets.
 </p>

 <div className="mt-6 max-w-[560px]">
 <div className="flex items-center bg-[#F4F3EE] rounded-2xl border-2 border-slate-200 overflow-hidden">
 <input
 type="text"
 placeholder="ENTER PAN"
 className="flex-1 px-5 py-4 text-slate-700 outline-none text-[15px] "
 />
 <button className="m-2 h-[48px] px-8 rounded-lg bg-[#C15F3C] hover:bg-[#C15F3C]/90 text-white font-semibold">
 File ITR
 </button>
 </div>
 </div>
 </div>

 <div className="relative">
 <img
 src={ASSETS.heroRight}
 alt="ITR Hero"
 className="w-full h-[360px] md:h-[420px] object-cover rounded-lg shadow-2xl"
 />

 <div className="absolute left-4 md:left-8 top-6 bg-[#F4F3EE] rounded-lg px-3 py-2 shadow flex items-center gap-2">
 <CheckCircle className="w-4.5 h-4.5 text-[#C15F3C]" />
 <span className="text-xs md:text-sm font-medium text-slate-700">
 Assisted Tax Filing
 </span>
 </div>

 <div className="absolute right-4 md:right-6 top-6 bg-[#F4F3EE] rounded-lg px-3 py-2 shadow flex items-center gap-2">
 <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-yellow-50">
 <Star className="w-3.5 h-3.5 text-yellow-500" />
 </span>
 <span className="text-xs md:text-sm font-medium text-slate-700">
 Expert Accountants
 </span>
 </div>

 <div className="absolute left-4 md:left-8 bottom-6 bg-[#F4F3EE] rounded-lg px-3 py-2 shadow w-[220px]">
 <div className="text-xs text-slate-600 mb-1">
 Just Upload Documents
 </div>
 <div className="h-2 bg-slate-200 rounded">
 <div className="h-2 bg-[#C15F3C] rounded w-[70%]" />
 </div>
 </div>
 </div>
 </div>
 </div>

 <div className="bg-[#F4F3EE] border-b border-slate-200">
 <div className="max-w-[1200px] mx-auto px-4">
 <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 py-3 md:py-4">
 <div className="flex items-center gap-2">
 <CheckCircle className="w-5 h-5 text-[#C15F3C]" />
 <span className="text-sm text-slate-700">
 Assisted Tax Filing
 </span>
 </div>
 <div className="flex items-center gap-2">
 <Shield className="w-5 h-5 text-[#C15F3C]" />
 <span className="text-sm text-slate-700">CA Support</span>
 </div>
 <div className="flex items-center gap-2">
 <Zap className="w-5 h-5 text-yellow-500" />
 <span className="text-sm text-slate-700">
 Fast and Easy Filing
 </span>
 </div>
 <div className="flex items-center gap-2">
 <MessageCircle className="w-5 h-5 text-[#C15F3C]" />
 <span className="text-sm text-slate-700">
 Income Tax Platform
 </span>
 </div>
 <div className="flex items-center gap-2">
 <Lock className="w-5 h-5 text-slate-700" />
 <span className="text-sm text-slate-700">
 Protected and Confidential
 </span>
 </div>
 </div>
 </div>
 </div>

 <div className="max-w-[1200px] mx-auto px-4 py-3 text-[13px] text-slate-500">
 DoStartup / Income Tax /{" "}
 <span className="text-slate-700">Income Tax E-Filing</span>
 </div>
 </section>

 <section className="max-w-[1200px] mx-auto px-4 pb-10">
 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
 <div className="bg-[#F4F3EE] rounded-2xl border border-slate-200 shadow-sm p-4">
 <img
 src={ASSETS.promoBlue}
 alt="INCOME TAX e-FILING"
 className="rounded-lg w-full object-cover"
 />
 <div className="mt-3 flex items-center justify-between text-xs text-slate-500 px-1">
 <a href="#" className="hover:underline">
 Terms and conditions
 </a>
 <a href="#" className="hover:underline">
 Refer a Friend
 </a>
 </div>

 <div className="mt-5">
 <div className="font-semibold text-slate-800 mb-3">
 Offers and discounts
 </div>
 <div className="space-y-3">
 <div className="flex items-center gap-3 bg-[#F4F3EE] rounded-lg border border-slate-200 p-3">
 <img
 src="/images/ledgers.png"
 alt="LEDGERS"
 className="w-10 h-10 object-contain"
 />
 <div className="text-sm">
 <div className="font-medium">
 LEDGERS - Compliance Platform
 </div>
 <div className="text-slate-500">
 Invoicing, GST Filing, Banking and Payroll
 </div>
 </div>
 </div>
 <div className="flex items-center gap-3 bg-[#F4F3EE] rounded-lg border border-slate-200 p-3">
 <img
 src="/images/gstin.png"
 alt="Save GST"
 className="w-10 h-10 object-contain"
 />
 <div className="text-sm">
 <div className="font-medium">
 Save 18% with GST Registration
 </div>
 <div className="text-slate-500">
 Get GST eInvoice with Input Tax Credit
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>

 <div className="bg-[#F4F3EE] rounded-2xl border border-slate-200 shadow-sm p-4 md:p-6">
 <div className="flex items-center justify-between">
 <div className="text-[18px] font-semibold text-slate-900">
 Income Tax E-Filing
 </div>
 <div className="flex items-center gap-2">
 <RatingStars value={4.5} />
 <span className="text-xs text-slate-500">(7654)</span>
 </div>
 </div>
 <p className="text-sm text-slate-600 mt-2">
 E-file your income tax return (ITR) online through DoStartup
 quickly at the lowest price. Get support from income tax experts
 for ITR filing.
 </p>

 <div className="mt-4">
 <select className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm">
 <option>Salaried person</option>
 <option>Self-Employed</option>
 <option>Professional</option>
 </select>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
 <div className="border-2 border-dashed border-slate-200 rounded-lg p-4">
 <div className="text-xs text-[#C15F3C] font-semibold mb-2">
 2 Exclusive Offers
 </div>
 {offersLeft.map((o) => (
 <div key={o.title}>
 <div className="font-medium text-sm mb-2">{o.title}</div>
 <ul className="text-xs text-slate-600 space-y-1 mb-3">
 {o.bullets.map((b) => (
 <li key={b} className="flex items-center gap-2">
 <span className="text-[#C15F3C]">✓</span>
 {b}
 </li>
 ))}
 </ul>
 <button className="px-5 py-1.5 text-[#C15F3C] border border-[#C15F3C] rounded-md text-xs font-semibold hover:bg-[#C15F3C]/10">
 ADD
 </button>
 </div>
 ))}
 </div>

 <div className="border-2 border-dashed border-slate-200 rounded-lg p-4">
 <div className="text-xs text-[#C15F3C] font-semibold mb-2">
 2 Exclusive Offers
 </div>
 {offersRight.map((o) => (
 <div key={o.title}>
 <div className="font-medium text-sm mb-2">{o.title}</div>
 <ul className="text-xs text-slate-600 space-y-1 mb-3">
 {o.bullets.map((b) => (
 <li key={b} className="flex items-center gap-2">
 <span className="text-[#C15F3C]">✓</span>
 {b}
 </li>
 ))}
 </ul>
 <button className="px-5 py-1.5 text-[#C15F3C] border border-[#C15F3C] rounded-md text-xs font-semibold hover:bg-[#C15F3C]/10">
 ADD
 </button>
 </div>
 ))}
 </div>
 </div>
 </div>

 <aside className="h-fit space-y-4">
  <SidebarCart />
  
  <div className="bg-[#F4F3EE] rounded-2xl border border-slate-200 shadow-sm p-6">
  <div className="font-semibold text-slate-900 mb-2 uppercase tracking-wider text-xs">Related Guides</div>
  <div className="space-y-2">
  {[
  "Tax Year in Income Tax: Meaning and Example",
  "Old vs New Tax Regime: Which is better for you?",
  "What is CPC in Income Tax?",
  "ITR-B Form: Income Tax Return to Disclose Undisclosed Income",
  "Charitable Trusts Taxability - A Complete Guide",
  "F&O Trading Income Tax - A Detailed Guide on F&O Taxation!",
  "Section 80G Deduction - Income Tax Act",
  ].map((g) => (
  <a key={g} href="#" className="block text-sm text-[#C15F3C] hover:underline leading-relaxed">{g}</a>
  ))}
  </div>
  </div>

  <div className="bg-[#F4F3EE] rounded-2xl border border-slate-200 shadow-sm p-6">
  <div className="font-semibold text-slate-900 mb-2 uppercase tracking-wider text-xs">Income Tax E-Filing</div>
  <div className="max-h-[320px] overflow-y-auto pr-1 space-y-1">
  {states.map((s) => (
  <a key={s} href="#" className="flex items-center justify-between text-sm text-[#C15F3C] hover:underline">
  {s}
  <ChevronRight className="w-4 h-4 text-slate-400" />
  </a>
  ))}
  </div>
  </div>
 </aside>
 </div>
 </section>

 <section className="max-w-[1200px] mx-auto px-4">
 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
 <div className="lg:col-span-2">
 <div className="bg-[#F4F3EE] rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
 <p className="text-sm text-slate-600 italic">
 Experience a seamless ITR filing process online with
 DoStartup and say goodbye to tax season stress!
 </p>

 <img
 src={ASSETS.stepsImage}
 alt="5 Steps"
 className="mt-6 rounded-xl border border-slate-200"
 />

 <h3 className="mt-6 text-xl font-bold">
 5 Quick Steps to File your ITR Online
 </h3>
 <ul className="mt-3 text-[14px] text-slate-700 space-y-1">
 <li>Quick Login/Signup</li>
 <li>Pick Income Source</li>
 <li>Auto-Filled Data</li>
 <li>Compare Tax Computation</li>
 <li>File ITR &amp; Confirm</li>
 </ul>

 <h3 className="mt-8 text-xl font-bold">
 Income Tax Return (ITR)
 </h3>
 <p className="mt-2 text-[14px] text-slate-700 leading-7">
 An ITR Income Tax Return is a form that taxpayers use to report
 their income details and tax payments to the Income Tax
 Department...
 </p>

 <h3 className="mt-8 text-xl font-bold">
 Who Needs to file an ITR?
 </h3>
 <img
 src={ASSETS.whoMustFile}
 alt="Who Must File ITR"
 className="mt-4 rounded-xl border border-slate-200"
 />

 <h3 className="mt-8 text-xl font-bold">
 Income Tax Return Forms in India
 </h3>
 <img
 src={ASSETS.whichITR}
 alt="Which ITR"
 className="mt-3 rounded-xl border border-slate-200"
 />

 <h3 className="mt-8 text-xl font-bold">
 Due Date for ITR e-Filing
 </h3>
 <ul className="mt-3 text-[14px] text-slate-700 space-y-2">
 <li>
 ITR filing for individuals and entities not liable for Tax
 Audit...
 </li>
 <li>
 ITR filing for Tax Audit cases: Due by October 31, 2025.
 </li>
 <li>
 ITR filing under Transfer Pricing: Due by November 30, 2025.
 </li>
 <li>
 Revised/Belated Return of Income for FY 2024-25: December 31,
 2025.
 </li>
 </ul>

 <h3 className="mt-8 text-xl font-bold">
 Documents Required for Income Tax e-Filing
 </h3>
 <img
 src={ASSETS.docsRequired}
 alt="Documents Required"
 className="mt-3 rounded-xl border border-slate-200"
 />

 <img
 src={ASSETS.fileOnOwn}
 alt="File ITR on your own"
 className="mt-8 rounded-xl border border-slate-200"
 />
 <div className="mt-2 text-sm text-slate-700 font-medium">
 Looking for Expert-Assisted ITR Filing?
 </div>
 <img
 src={ASSETS.expertCA}
 alt="Get Expert CA"
 className="mt-3 rounded-xl border border-slate-200"
 />

 </div>

 <div className="bg-[#F4F3EE] rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 my-8">
 <h2 className="text-xl font-bold text-slate-900 mb-4">
 Popular Searches
 </h2>
 <div className="flex flex-wrap gap-2">
 {popularSearches.map((search) => (
 <a
 key={search}
 href="#"
 className="px-3 py-1.5 rounded-full text-sm bg-orange-50 text-[#C15F3C] hover:bg-orange-100 transition"
 >
 {search}
 </a>
 ))}
 </div>
 </div>
 </div>

 <div className="space-y-6">
 <div className="bg-[#F4F3EE] rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
 <img
 src={ASSETS.cardPartnership}
 alt="Partnership Compliance"
 className="w-full h-[220px] object-cover"
 />
 <div className="p-4 font-semibold">Partnership Compliance</div>
 </div>
 <div className="bg-[#F4F3EE] rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
 <img
 src={ASSETS.cardBusinessTax}
 alt="Business Tax Filing"
 className="w-full h-[220px] object-cover"
 />
 <div className="p-4 font-semibold">Business Tax Filing</div>
 </div>
 </div>
 </div>
 </section>

 <FAQAccordion />

 <Footer />

 <a
 href="https://wa.me/911234567890"
 target="_blank"
 rel="noreferrer"
 className="fixed right-6 bottom-6 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl px-4 py-3 shadow-lg flex items-center gap-2 z-50"
 >
 <MessageCircle className="w-5 h-5" />
 <span className="font-semibold">Live Chat with Experts</span>
 </a>
 </div>
 );
}
