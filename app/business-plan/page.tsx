"use client";
import AddQuestionModal from "../components/AddQuestionModal";

import React, { useEffect, useRef, useState } from "react";
import {
 ChevronRight,
 ShoppingBag,
 Star,
 Plus,
 ChevronDown,
} from "lucide-react";
import Navbar from "../components/Navbar";

const ASSETS = {
 logo: "/images/india-logo.jpg",
 hero: "/images/FDI-filing-RBI.jpg",
 ledgers: "https://img.indiafilings.com/catalog/ledgers.png",
 whatsapp: "/images/whatsapp.svg",
 adRight1: "/images/company-compliance-ad.png",
 dinEkyc: "/images/din-ekyc-ad.png",
 cartIcon: "/images/cart-icon.svg",
 indiaFlag: "/images/india-flag.png",
 assuredBadge: "/images/assured-ledgers.png",
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

function useOutsideClick<T extends HTMLElement = HTMLElement>(
 ref: React.RefObject<T | null>,
 handler: () => void
) {
 useEffect(() => {
 function listener(e: MouseEvent | TouchEvent) {
 const el = ref?.current;
 if (!el) return;
 if (e.target instanceof Node && !el.contains(e.target)) handler();
 }
 document.addEventListener("mousedown", listener);
 document.addEventListener("touchstart", listener);
 return () => {
 document.removeEventListener("mousedown", listener);
 document.removeEventListener("touchstart", listener);
 };
 }, [ref, handler]);
}

export default function BusinessPlanPage(): React.ReactElement {
 const [openFaq, setOpenFaq] = useState<number | null>(null);
 const [gstChecked, setGstChecked] = useState(false);

 const OFFER_OPTIONS = [
 "Pitch Deck",
 "Equity Raise",
 "Financial Model",
 "Loan Syndication",
 ];
 const [selectedOffer, setSelectedOffer] = useState<string>("Pitch Deck");
 const [showOfferDropdown, setShowOfferDropdown] = useState(false);

 const offerRef = useRef<HTMLDivElement | null>(null);

 useOutsideClick(offerRef, () => setShowOfferDropdown(false));

 useEffect(() => {
 function onKey(e: KeyboardEvent) {
 if (e.key === "Escape") {
 setShowOfferDropdown(false);
 }
 }
 window.addEventListener("keydown", onKey);
 return () => window.removeEventListener("keydown", onKey);
 }, []);

 const faqItems = [
 "What is a business plan?",
 "Why is a business plan important?",
 "What are the key elements of a business plan?",
 "How does a business plan help in securing funding?",
 "What types of business plans are there?",
 "How often should a business plan be updated?",
 "What is a business continuity plan and why is it necessary?",
 "How can market analysis enhance a business plan?",
 "What is the role of the executive summary in a business plan?",
 "How detailed should financial projections be in a business plan?",
 ];

 const faqAnswers: Record<number, string> = {
 0: "A business plan is a formal document that defines your business objectives, strategies, market research, and financial projections.",
 1: "A business plan is important because it provides a roadmap for your business, helps secure funding, and guides strategic decisions.",
 2: "Key elements include executive summary, company description, market analysis, organization structure, product line, marketing strategy, and financial projections.",
 3: "A business plan demonstrates to investors that you have a viable business model, understand your market, and have realistic financial projections.",
 4: "Types include startup plans, strategic plans, feasibility plans, expansion plans, and operational plans.",
 5: "Business plans should be reviewed annually and updated when significant changes occur in your business or market.",
 6: "A business continuity plan outlines how your business will continue operating during unexpected disruptions.",
 7: "Market analysis helps identify target customers, understand competition, and validate your business strategy.",
 8: "The executive summary should concisely capture the essence of your business and investment opportunity.",
 9: "Financial projections should include income statements, cash flow statements, and balance sheets for 3-5 years.",
 };

 return (
 <div className="min-h-screen bg-gray-100 text-gray-800 antialiased">
 {/* Navbar - Imported from reference */}
 <Navbar />

 {/* Breadcrumb */}
 <div className="bg-gray-50 py-5">
 <div className="max-w-[1180px] mx-auto px-6 text-sm text-gray-500">
 Home / MCA Services /{" "}
 <span className="text-amber-700 font-medium">Business Plan</span>
 </div>
 </div>

 {/* Main - Using max-w-[1180px] from reference */}
 <main className="max-w-[1180px] mx-auto px-6 py-3">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
 <section className="lg:col-span-8 space-y-6">
 <div className="bg-white rounded-lg shadow-sm p-6 md:flex md:gap-6">
 <div className="md:w-1/3 flex-shrink-0">
 <div className="rounded-lg overflow-hidden">
 <div className="bg-gradient-to-r from-amber-700 to-amber-800 rounded-t-lg p-4 text-white text-center">
 <h2 className="text-2xl font-bold">
 Business Plan
 </h2>
 <div className="text-xs mt-1 opacity-90">Business Plan</div>
 </div>

 <div className="bg-white px-4 py-6 flex justify-center">
 <div className="w-56 h-56 md:w-64 md:h-64 rounded-md overflow-hidden bg-white shadow-sm flex items-center justify-center -mt-4">
 <img
 src={ASSETS.hero}
 alt="Business Plan hero"
 className="w-full h-full object-cover"
 />
 </div>
 </div>
 </div>

 <ul className="mt-4 text-sm space-y-2 text-gray-600">
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Business Plan</li>
 <li className="text-amber-700 cursor-pointer">Business Plan</li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">
 A business plan with pitch deck and financial model is
 essential for business owners to raise loan or equity
 funding. Get a professional pitch deck and financial model
 prepared for your business through Experts.
 </li>
 <li className="text-amber-700 underline cursor-pointer hover:text-amber-800">Load More</li>
 </ul>
 </div>

 <div className="md:flex-1">
 <div className="flex flex-col sm:flex-row justify-between gap-4 items-start">
 <div>
 <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 mb-2">
 <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
 <span className="text-xs font-medium text-amber-700">COMPLIANCE SERVICE</span>
 </div>
 <h2 className="text-lg font-semibold text-slate-900">
 Business Plan
 </h2>
 <div className="flex items-center gap-3 mt-2">
 <div className="flex items-center gap-1">
 {[...Array(5)].map((_, i) => (
 <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />
 ))}
 </div>
 <span className="text-xs text-slate-500">(5)</span>
 </div>
 </div>

 <p className="text-sm text-gray-600 max-w-md">
 A business plan with pitch deck and financial model is
 essential for business owners to raise loan or equity
 funding. Get a professional pitch deck and financial model
 prepared for your business through Experts.
 </p>
 </div>

 <div className="mt-4 relative" ref={offerRef}>
 <button
 type="button"
 onClick={() => setShowOfferDropdown((s) => !s)}
 aria-haspopup="listbox"
 aria-expanded={showOfferDropdown}
 className="w-full sm:w-80 flex items-center justify-between border rounded-md px-4 py-2 bg-white text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-amber-600"
 >
 <span className="text-sm text-slate-700">
 {selectedOffer}
 </span>
 <ChevronDown className="w-4 h-4 text-slate-500" />
 </button>

 {showOfferDropdown && (
 <ul
 role="listbox"
 aria-activedescendant={selectedOffer}
 tabIndex={-1}
 className="absolute mt-2 w-full sm:w-80 bg-white border rounded-md shadow-lg z-40 max-h-48 overflow-auto text-sm"
 >
 {OFFER_OPTIONS.map((opt) => (
 <li
 key={opt}
 id={opt}
 role="option"
 aria-selected={selectedOffer === opt}
 onClick={() => {
 setSelectedOffer(opt);
 setShowOfferDropdown(false);
 }}
 onKeyDown={(e) => {
 if (e.key === "Enter" || e.key === " ") {
 setSelectedOffer(opt);
 setShowOfferDropdown(false);
 }
 }}
 className={`px-3 py-2 cursor-pointer hover:bg-amber-50 ${
 selectedOffer === opt
 ? "bg-amber-50 text-amber-700 font-medium"
 : ""
 }`}
 >
 {opt}
 </li>
 ))}
 </ul>
 )}
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
 <div
 className={`border-2 border-dashed rounded-md p-4 bg-white relative ${
 selectedOffer === "Pitch Deck"
 ? "border-amber-200 ring-1 ring-amber-100"
 : "border-amber-200"
 }`}
 >
 <div className="absolute -top-3 left-6 bg-white px-2 rounded-md text-xs text-amber-700 border border-amber-200">
 2 Exclusive Offers
 </div>
 <div className="font-semibold text-slate-900">
 Pitch Deck
 </div>
 <div className="mt-2 text-sm text-gray-600">
 PPT Presentation
 <div>Market Research</div>
 </div>
 <div className="mt-3">
 <button className="bg-white border-2 border-amber-600 text-amber-700 px-3 py-1 rounded hover:bg-amber-50 transition-colors text-sm font-medium">
 ADD
 </button>
 </div>
 </div>

 <div
 className={`border-2 border-dashed rounded-md p-4 bg-white relative ${
 selectedOffer === "Equity Raise"
 ? "border-amber-200 ring-1 ring-amber-100"
 : "border-amber-200"
 }`}
 >
 <div className="absolute -top-3 left-6 bg-white px-2 rounded-md text-xs text-amber-700 border border-amber-200">
 2 Exclusive Offers
 </div>
 <div className="font-semibold text-slate-900">
 Equity Raise
 </div>
 <div className="mt-2 text-sm text-gray-600">
 Financial Model
 <div>Equity Raise Support</div>
 </div>
 <div className="mt-3">
 <button className="bg-white border-2 border-amber-600 text-amber-700 px-3 py-1 rounded hover:bg-amber-50 transition-colors text-sm font-medium">
 ADD
 </button>
 </div>
 </div>
 </div>

 <div className="mt-4 border-t pt-4 text-sm flex flex-col sm:flex-row justify-between items-start sm:items-center text-slate-600 gap-3">
 <a className="text-amber-700 underline hover:text-amber-800 cursor-pointer">
 Terms and conditions
 </a>
 <a className="text-amber-700 underline hover:text-amber-800 cursor-pointer">Refer a Friend</a>
 </div>

 <div className="mt-6">
 <h4 className="font-semibold mb-2">Offers and discounts</h4>

 <div className="p-3 border border-gray-200 rounded-lg hover:border-amber-200 transition-colors">
 <div className="flex items-center gap-3">
 <img
 src={ASSETS.ledgers}
 alt="ledgers"
 className="h-8 w-8 object-contain"
 />
 <div className="text-sm">
 <div className="text-amber-700 font-medium">
 LEDGERS - Compliance Platform
 </div>
 <div className="text-gray-500 text-xs">
 Invoicing, GST Filing, Banking and Payroll
 </div>
 </div>
 </div>
 </div>

 <div className="mt-3 p-3 border border-gray-200 rounded-lg hover:border-amber-200 transition-colors flex items-center gap-3">
 <img
 src={ASSETS.logo}
 alt="save gst"
 className="h-8 w-8 object-contain"
 />
 <div className="text-sm">
 <div className="font-medium">
 Save 18% with GST Registration
 </div>
 <div className="text-gray-500 text-xs">
 Get GST eInvoice with Input Tax Credit
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>

 <article className="bg-white rounded-lg shadow-sm p-6">
 <h1 className="text-2xl font-semibold text-center">
 Business Plan
 </h1>

 <div className="mt-4 text-[15px] leading-7 text-gray-700 space-y-4">
 <p>
 A business plan is more than just a document—it's a strategic
 tool that outlines your company's objectives, provides a
 roadmap for achieving them, and acts as a persuasive document
 for potential investors and stakeholders. Whether you're a
 startup seeking your first round of funding or an established
 business looking to expand, having a well-structured business
 plan is critical for success.
 </p>

 <p>
 At IndiaFilings, we specialise in helping businesses draft
 comprehensive and tailored business plans that align with
 industry standards and comply with regulatory requirements.
 </p>

 <p className="font-semibold">
 Get Your Expert-Designed Business Plan with IndiaFilings.
 Start Your Success Story Today!
 </p>

 <h3 className="mt-4 font-semibold">What is a Business Plan?</h3>
 <p>
 A business plan is a formal document that defines your
 business objectives, strategies, market research, financial
 projections, and more. It serves as a guiding document for
 securing funding and setting internal goals and benchmarks.
 </p>
 </div>
 </article>

 <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
 <div className="lg:col-span-7 bg-white rounded-lg shadow-sm p-6">
 <h3 className="text-lg font-semibold mb-4">Related Guides</h3>
 <ul className="space-y-3 text-sm text-amber-700">
 <li className="hover:text-amber-800 cursor-pointer hover:underline">Importance of Business Plan</li>
 <li className="hover:text-amber-800 cursor-pointer hover:underline">Types of Business Plan</li>
 <li className="hover:text-amber-800 cursor-pointer hover:underline">How to write a Business Plan?</li>
 <li className="hover:text-amber-800 cursor-pointer hover:underline">Business Plan Template</li>
 <li className="hover:text-amber-800 cursor-pointer hover:underline">Checklist for Starting a Business</li>
 </ul>
 </div>

 <aside className="lg:col-span-5 bg-white rounded-lg shadow-sm p-6">
 <h3 className="text-lg font-semibold mb-4">
 FAQ's on Business Plan
 </h3>
 <div className="space-y-2 text-sm text-gray-700">
 {faqItems.slice(0, 6).map((q, i) => (
 <div key={q} className="border-b last:border-b-0">
 <button
 className="w-full text-left py-3 flex justify-between items-center text-sm"
 onClick={() => setOpenFaq(openFaq === i ? null : i)}
 aria-expanded={openFaq === i}
 >
 <span className="text-slate-800">{q}</span>
 <span className="text-amber-700 flex items-center gap-2">
 {openFaq === i ? "−" : <Plus size={14} />}
 </span>
 </button>
 {openFaq === i && (
 <div className="px-2 pb-3 text-sm text-gray-600">
 {faqAnswers[i]}
 </div>
 )}
 </div>
 ))}
 <div className="mt-4 pt-4 flex gap-3 items-center flex-wrap">

 <button className="px-4 py-2 border-2 border-amber-600 text-amber-700 rounded-md text-sm hover:bg-amber-50 transition-colors font-medium">
 Load More
 </button>
 
<AddQuestionModal />
</div>
 </div>
 </aside>
 </div>
 </section>

 <aside className="lg:col-span-4 hidden lg:block">
 <div className="bg-white rounded-lg shadow-md p-6 mb-6 sticky top-28">
 <div className="text-center text-gray-600">
 <img
 src={ASSETS.cartIcon}
 alt="cart"
 className="mx-auto h-12 w-auto mb-3"
 />
 <h3 className="font-semibold">Your cart is empty</h3>
 <p className="text-sm mt-2">
 Browse our services and add some services in cart!
 </p>
 </div>

 <div className="mt-6 text-center">
 <div className="text-sm text-gray-500">
 Existing User?{" "}
 <a className="text-amber-700 underline hover:text-amber-800 font-medium cursor-pointer">Login</a>
 </div>
 </div>

 <form
 className="mt-4 space-y-3"
 onSubmit={(e) => e.preventDefault()}
 >
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

 <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
 <h4 className="font-semibold mb-3">Related Guides</h4>
 <ul className="text-sm space-y-2">
 <li className="text-amber-700 hover:text-amber-800 cursor-pointer hover:underline">Business Plan Template</li>
 <li className="text-amber-700 hover:text-amber-800 cursor-pointer hover:underline">
 How to Create a Pitch Deck for Investors
 </li>
 <li className="text-amber-700 hover:text-amber-800 cursor-pointer hover:underline">Financial Model Best Practices</li>
 </ul>
 </div>

 <div className="rounded-lg overflow-hidden shadow-sm mb-4">
 <img
 src={ASSETS.adRight1}
 alt="company compliance"
 className="w-full h-48 object-cover"
 />
 </div>

 <div className="rounded-lg overflow-hidden shadow-sm mb-6">
 <img
 src={ASSETS.dinEkyc}
 alt="din ekyc"
 className="w-full h-48 object-cover"
 />
 </div>

 <div className="bg-white rounded-lg p-4">
 <h4 className="font-semibold mb-3">Popular Searches</h4>
 <div className="flex flex-wrap gap-2">
 {POPULAR_SEARCHES.slice(0, 14).map((t) => (
 <span
 key={t}
 className="text-xs px-3 py-1 border border-gray-200 rounded bg-white text-gray-700 hover:border-amber-300 hover:text-amber-700 cursor-pointer transition-colors"
 >
 {t}
 </span>
 ))}
 </div>
 </div>
 </aside>
 </div>
 </main>

 {/* WhatsApp CTA - Matching reference */}
 <div className="fixed right-6 bottom-6 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-4 py-3 rounded-full shadow-2xl flex items-center gap-3 z-50 hover:from-amber-700 hover:to-amber-800 transition-all cursor-pointer">
 <img src={ASSETS.whatsapp} alt="wa" className="w-5 h-5" />
 <span className="font-semibold text-sm">Live Chat with Experts</span>
 </div>
 </div>
 );
}