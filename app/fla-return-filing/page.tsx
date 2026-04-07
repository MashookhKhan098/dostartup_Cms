"use client";

import React, { useState } from "react";
import {
 ChevronRight,
 ShoppingBag,
 Star,
 Plus,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SidebarCart from "../components/SidebarCart";

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

export default function FlaReturnFilingPage() {
 const [openFaq, setOpenFaq] = useState<number | null>(null);
 const [gstChecked, setGstChecked] = useState(false);

 const faqItems = [
 "What is the FLA Return?",
 "Who needs to file the FLA Return?",
 "What is the due date for filing the FLA Return?",
 "What if my accounts are not audited by the due date?",
 "What is the penalty for late filing of FLA Return?",
 "What are the penalties for not filing the FLA Return?",
 "What information is required for the FLA Return?",
 "How is the FLA Return submitted?",
 "What is the FLAIR portal?",
 "How do I register on the FLAIR portal?",
 ];

 const faqAnswers: Record<number, string> = {
 0: "The FLA Return is a mandatory annual filing for Indian companies, LLPs, and other entities engaged in receiving or making foreign direct investments, submitted to the Reserve Bank of India (RBI).",
 1: "All Indian companies, LLPs, and entities that have received Foreign Direct Investment (FDI) or have made Overseas Direct Investment (ODI) in any financial year must file the FLA Return.",
 2: "The FLA Return must be filed annually by July 15th for the preceding financial year.",
 3: "Even if accounts are not audited, you must file the FLA Return based on provisional accounts and update later if necessary. Non-filing can attract penalties.",
 4: "Late filing may attract penalties, including fines up to ₹50,000 or more, depending on the duration of delay and RBI discretion.",
 5: "Penalties for not filing include monetary fines, restrictions on foreign transactions, and potential legal action under FEMA regulations.",
 6: "Information required includes foreign liabilities and assets, shareholding pattern, financial details, and details of foreign investments received or made.",
 7: "The FLA Return is submitted online through the RBI's FLAIR portal (https://flair.rbi.org.in) using digital signature or OTP-based authentication.",
 8: "The FLAIR (Foreign Liabilities and Assets Information Reporting) portal is the RBI's online platform for filing FLA Returns and managing foreign investment reporting.",
 9: "Registration on the FLAIR portal requires company details, PAN, and contact information. New users need to register before filing their first return.",
 };

 return (
 <div className="min-h-screen bg-white font-sans text-gray-800">
 {/* Navbar - Imported */}
 <Navbar />

 {/* Breadcrumb */}
 <div className="bg-white py-5">
 <div className="max-w-[1180px] mx-auto px-6 text-sm text-gray-500">
 Home / Compliance Services /{" "}
 <span className="text-amber-700 font-medium">
 FLA Return Filing
 </span>
 </div>
 </div>

 {/* Main Content */}
 <main className="max-w-[1180px] mx-auto px-6 py-3">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
 {/* Left Column */}
 <section className="lg:col-span-8 space-y-6">
 {/* Top Card */}
 <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col md:flex-row gap-6">
 {/* Left image card */}
 <div className="md:w-1/3 flex-shrink-0">
 <div className="rounded-lg overflow-hidden">
 <div className="bg-gradient-to-r from-amber-700 to-amber-800 rounded-t-lg p-4 text-white text-center">
 <h2 className="text-2xl font-bold ">
 FLA RETURN
 </h2>
 <div className="text-xs mt-1 opacity-90">
 Annual filing for foreign investments
 </div>
 </div>

 <div className="bg-white px-4 py-6 flex justify-center">
 <div className="w-44 h-44 rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center -mt-4">
 <img
 src={ASSETS.hero}
 alt="FLA hero"
 className="w-full h-full object-cover"
 />
 </div>
 </div>
 </div>

 <ul className="mt-4 text-sm space-y-2 text-gray-600">
 <li className="hover:text-amber-700 cursor-pointer transition-colors">FLA Return Filing</li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Companies with FDI must file</li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Annual submission to RBI</li>
 <li className="text-amber-700 underline cursor-pointer hover:text-amber-800">Load More</li>
 </ul>
 </div>

 {/* Right content */}
 <div className="md:w-2/3 flex-1">
 <div className="flex flex-col sm:flex-row justify-between gap-4">
 <div>
 <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 mb-2">
 <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
 <span className="text-xs font-medium text-amber-700">RBI COMPLIANCE</span>
 </div>
 <h2 className="text-lg font-semibold text-slate-900">
 FLA Return Filing
 </h2>
 <div className="flex items-center gap-3 mt-2">
 <div className="flex items-center gap-1">
 {[...Array(5)].map((_, i) => (
 <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />
 ))}
 </div>
 <span className="text-xs text-slate-500">(128 reviews)</span>
 </div>
 </div>

 <p className="text-sm text-gray-600 max-w-md">
 Companies that have received FDI and/or made FDI overseas in
 any financial year must complete FLA Return Filing with the
 RBI.
 </p>
 </div>

 {/* Offer box */}
 <div className="relative mt-6">
 <div className="absolute -top-3 left-6 bg-white px-2 rounded-md text-xs text-amber-700 border border-amber-200">
 2 Exclusive Offers
 </div>
 <div className="border-2 border-dashed rounded-md border-amber-200 p-4 bg-amber-50/30">
 <div className="font-semibold text-slate-900">RBI Compliance</div>
 <div className="mt-2 text-sm text-gray-600">
 Annual FLA Return Filing
 <div>RBI Compliance Support</div>
 </div>
 <div className="mt-3">
 <button className="bg-white border-2 border-amber-600 text-amber-700 px-4 py-1.5 rounded hover:bg-amber-50 transition-colors text-sm font-medium">
 ADD TO CART
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
 <h4 className="font-semibold mb-2 text-slate-900">Offers and discounts</h4>
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
 </div>
 </div>
 </div>

 {/* Article */}
 <article className="bg-white rounded-lg shadow-sm p-6">
 <h1 className="text-2xl font-semibold text-center text-slate-900">
 FLA Return Filing
 </h1>

 <div className="mt-4 text-[15px] leading-7 text-gray-700 space-y-4">
 <p>
 The FLA Return is a mandatory annual filing for Indian
 companies, LLPs, and other entities engaged in receiving or
 making foreign direct investments. This includes entities
 involved in Foreign Direct Investment (FDI) within India or
 Overseas Direct Investment (ODI). Under the regulations of the
 Reserve Bank of India (RBI) and the Foreign Exchange
 Management Act, 1999 (FEMA), the FLA Return is designed to
 gather information on foreign liabilities and assets that are
 reflected in the financial statements of these entities.
 </p>
 <p>
 At IndiaFilings, we provide expert services to help Indian
 Companies and LLPs efficiently handle their FLA Return
 filings.
 </p>

 <h3 className="mt-4 font-semibold text-slate-900">
 Introduction to FLA Return
 </h3>
 <p>
 The Foreign Liabilities and Asset (FLA) Return is a mandatory
 annual report for Indian organisations that have received
 foreign direct investment (FDI) or have invested in FDI
 overseas. This report, submitted to the Reserve Bank of India
 (RBI), collects detailed information on the foreign
 liabilities and assets listed on these entities' balance
 sheets. Governed by the Foreign Exchange Management Act, 1999
 (FEMA), the FLA Return thoroughly regulates India's foreign
 exchange and international financial transactions.
 </p>
 </div>
 </article>

 {/* Related Guides */}
 <div className="bg-white rounded-lg shadow-sm p-6 mt-8">
 <h3 className="text-lg font-semibold mb-4 text-slate-900">Related Guides</h3>
 <ul className="space-y-3 text-sm text-amber-700">
 <li className="hover:text-amber-800 cursor-pointer hover:underline">FLA Return Filing</li>
 <li className="hover:text-amber-800 cursor-pointer hover:underline">What is FLA Return?</li>
 <li className="hover:text-amber-800 cursor-pointer hover:underline">FDI in Insurance sector</li>
 <li className="hover:text-amber-800 cursor-pointer hover:underline">8 Measure to Promote FDI</li>
 <li className="hover:text-amber-800 cursor-pointer hover:underline">Types of Foreign investments in India</li>
 </ul>
 </div>

 {/* FAQ's */}
 <div className="bg-white rounded-lg shadow-sm p-6 mt-6 border border-gray-200">
 <h3 className="text-lg font-semibold mb-6 text-slate-900 border-b pb-3">
 FAQ's on FLA Return Filing
 </h3>
 <div className="space-y-3 text-sm max-h-[500px] overflow-y-auto pr-2">
 {faqItems.map((q, i) => (
 <div key={q} className="border border-slate-100 rounded-lg overflow-hidden hover:border-amber-200 transition-colors shadow-sm bg-white pb-0">
 <button
 className="w-full text-left p-4 flex justify-between items-center text-sm hover:bg-amber-50/20 group"
 onClick={() => setOpenFaq(openFaq === i ? null : i)}
 aria-expanded={openFaq === i}
 >
 <span className="text-slate-800 font-medium group-hover:text-amber-700">{q}</span>
 <span className={`p-1.5 rounded-full bg-amber-50 shrink-0 transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>
 <Plus size={14} className="text-amber-600" />
 </span>
 </button>
 {openFaq === i && (
 <div className="px-4 pb-4 text-sm text-gray-600 border-t border-slate-50 pt-3">
 {faqAnswers[i]}
 </div>
 )}
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Right Sidebar */}
 <aside className="lg:col-span-4 hidden lg:block">
 <div className="space-y-6">
 {/* Cart Widget */}
 <SidebarCart />

 {/* Income Tax E-Filing */}
 <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
 <h4 className="font-semibold mb-3 text-slate-900">Income Tax E-Filing</h4>
 <div className="p-3 border border-gray-200 rounded-md flex items-center gap-3 hover:border-amber-200 transition-colors">
 <img
 src={ASSETS.ledgers}
 alt="ledgers"
 className="h-8 w-8 object-contain"
 />
 <div className="text-sm">
 <div className="text-amber-700 font-medium">
 Income Tax E-Filing
 </div>
 <div className="text-gray-500 text-xs">
 Income Tax E-Filing
 </div>
 </div>
 </div>
 <div className="mt-3 text-sm">
 <div className="font-medium text-slate-900">Partnership Compliance</div>
 <div className="text-gray-500">Partnership Compliance</div>
 </div>
 </div>

 {/* Ads */}
 <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200">
 <img
 src={ASSETS.adRight1}
 alt="company compliance"
 className="w-full h-48 object-cover"
 />
 </div>

 <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200">
 <img
 src={ASSETS.dinEkyc}
 alt="din ekyc"
 className="w-full h-48 object-cover"
 />
 </div>

 {/* Popular Searches */}
 <div className="bg-white rounded-lg p-4 border border-gray-200">
 <h4 className="font-semibold mb-3 text-slate-900">Popular Searches</h4>
 <div className="flex flex-wrap gap-2">
 {POPULAR_SEARCHES.slice(0, 20).map((t) => (
 <span
 key={t}
 className="text-xs px-3 py-1 border border-gray-200 rounded bg-white text-gray-700 hover:border-amber-300 hover:text-amber-700 cursor-pointer transition-colors"
 >
 {t}
 </span>
 ))}
 </div>
 </div>

 {/* Contact Advisor */}
 <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
 <h4 className="font-semibold mb-3 text-slate-900">Contact Advisor</h4>
 <p className="text-sm text-gray-600">
 Need help with FLA filings? Our advisors can assist with
 end-to-end filing and documentation.
 </p>
 <div className="mt-3">
 <button className="w-full bg-gradient-to-r from-amber-700 to-amber-800 text-white py-2 rounded-md text-sm hover:from-amber-800 hover:to-amber-900 transition-all">
 Schedule a Call
 </button>
 </div>
 </div>
 </div>
 </aside>
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