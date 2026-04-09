"use client";


import React, { useState } from "react";
import {
 Star,
 ChevronRight,
 ShoppingBag,
 Plus,
 CheckCircle,
} from "lucide-react";
import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import SidebarCart from "../components/SidebarCart";
import Footer from "../components/Footer";
import PopularSearches from "../components/PopularSearches";

const ASSETS = {
 logo: "/images/india-logo.jpg",
 hero: "/mnt/data/6ddb35b5-7190-4d8f-9f70-4c6f4f1683c7.png",
 cards: {
 compliance:
 "https://img.indiafilings.com/catalog/company-compliance-india.png",
 dinEKyc: "https://img.indiafilings.com/catalog/din-ekyc.png",
 },
 footerBg: "/images/footer-bg.png",
 ledgers: "https://img.indiafilings.com/catalog/ledgers.png",
 whatsapp: "/images/whatsapp.png",
 cartIcon: "/images/cart-icon.svg",
 indiaFlag: "/images/india-flag.png",
 adRight1: "/images/company-compliance.jpg",
 dinEkyc: "/images/din.jpg",
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

export default function AuthorizedCapitalIncrease() {
 const [openFaq, setOpenFaq] = useState<number | null>(null);
 const [gstChecked, setGstChecked] = useState(false);

 const faqItems = [
 "What is Authorized Capital?",
 "What is the difference between Authorized and Paid-Up Capital?",
 "How can a company increase its authorized share capital?",
 "Why would a company consider increasing its authorized capital?",
 "What documents are required for increasing authorized capital?",
 "What is the procedure to increase authorized share capital?",
 "What happens if the Articles of Association do not permit changes?",
 "What is Form MGT-14 and SH-7 for?",
 ];

 const faqAnswers: Record<number, string> = {
 0: "According to Section 2 (8) of the Companies Act 2013, 'Authorized Capital' is the capital authorised by the company's memorandum to be the maximum amount of the share capital of the company.",
 1: "Authorised share capital represents the total potential value of shares a company can issue. In contrast, paid-up capital is the actual value of shares that have been fully issued, subscribed to, and paid for by shareholders.",
 2: "A company can increase its authorized share capital by passing an ordinary resolution in a general meeting, filing Form SH-7 with the ROC, and paying the requisite fees and stamp duty.",
 3: "Companies consider increasing authorized capital for addressing significant financial needs, funding new business initiatives, facilitating mergers or acquisitions, issuing additional shares, or converting debt into equity.",
 4: "Documents required include the latest amended version of the MOA, updated AoA if applicable, and a copy of the ordinary resolution approved by shareholders.",
 5: "The process involves reviewing AoA, convening board meeting, passing resolutions, conducting EGM, and filing required forms (MGT-14, SH-7) within prescribed timelines.",
 6: "If the AoA does not permit changes, it must first be amended to allow for the increase in authorized capital before proceeding with the capital increase process.",
 7: "Form MGT-14 is filed for special resolutions, while Form SH-7 is specifically for notifying the ROC about changes in authorized capital. Both must be filed within 30 days of the resolution.",
 };

  return (
    <>
      <Navbar />

 {/* Breadcrumb */}
 <div className="bg-[#F4F3EE] py-5">
 <div className="max-w-[1180px] mx-auto px-6 text-sm text-gray-500">
 Home / MCA Services /{" "}
 <span className="text-amber-700 font-medium">
 Authorized Capital Increase
 </span>
 </div>
 </div>

 {/* Main Content */}
 <main className="max-w-[1180px] mx-auto px-6 py-3">
 {/* Hero Section */}
 <section className="bg-[#F4F3EE] rounded-lg shadow-sm overflow-hidden mb-8">
 <div className="flex flex-col lg:flex-row">
 {/* Left Content */}
 <div className="lg:w-1/2 p-8 lg:p-10">
 <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 mb-4">
 <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
 <span className="text-xs font-medium text-amber-700">
 CAPITAL INCREASE
 </span>
 </div>

 <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
 Increase Authorized{" "}
 <span className="text-amber-600 underline decoration-4 decoration-amber-300">
 Capital
 </span>
 </h1>

 <p className="text-gray-600 mb-6 max-w-xl">
 Easily increase your company's authorized capital with full MCA
 compliance. Our team manages all filings and documentation for a
 smooth, hassle-free process.
 </p>

 <div className="space-y-4">
 <div className="flex items-start gap-3">
 <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
 <CheckCircle className="w-4 h-4 text-amber-600" />
 </div>
 <div>
 <div className="font-semibold text-slate-900">
 Fast and MCA-Compliant Process
 </div>
 </div>
 </div>

 <div className="flex items-start gap-3">
 <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
 <CheckCircle className="w-4 h-4 text-amber-600" />
 </div>
 <div>
 <div className="font-semibold text-slate-900">
 Expert MCA Guidance
 </div>
 </div>
 </div>

 <div className="flex items-start gap-3">
 <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
 <CheckCircle className="w-4 h-4 text-amber-600" />
 </div>
 <div>
 <div className="font-semibold text-slate-900">
 Complete Documentation Support
 </div>
 </div>
 </div>

 <div className="flex items-start gap-3">
 <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
 <CheckCircle className="w-4 h-4 text-amber-600" />
 </div>
 <div>
 <div className="font-semibold text-slate-900">
 Government Filing Assistance Included
 </div>
 </div>
 </div>
 </div>
 </div>

 {/* Right Form Card */}
 <div className="lg:w-1/2 p-8 lg:p-10 bg-gradient-to-br from-amber-50 to-amber-100">
 <div className="bg-[#F4F3EE] rounded-xl shadow-lg border border-gray-200 p-6">
 <div
 className="h-1.5 w-full rounded-t-xl mb-4"
 style={{
 background: "linear-gradient(90deg, #b45309, #d97706)",
 }}
 />

 <div className="space-y-4">
 <div>
 <label className="block text-sm font-medium text-slate-700 mb-2">
 Company PAN
 </label>
 <input
 type="text"
 className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-amber-600"
 placeholder="Company PAN"
 />
 </div>

 <div>
 <label className="block text-sm font-medium text-slate-700 mb-2">
 Company Name
 </label>
 <input
 type="text"
 placeholder="Company Name"
 className="w-full px-4 py-2 border border-gray-200 rounded bg-[#F4F3EE] text-gray-600"
 />
 <p className="text-xs text-gray-400 mt-1">
 This field will be automatically populated after you enter
 company details above
 </p>
 </div>

 <div>
 <label className="block text-sm font-medium text-slate-700 mb-2">
 Existing Authorized Capital
 </label>
 <input
 type="text"
 placeholder="Filled automatically"
 className="w-full px-4 py-2 border border-gray-200 rounded bg-[#F4F3EE] text-gray-600"
 />
 <p className="text-xs text-gray-400 mt-1">
 This field will be automatically populated after you enter
 company details above
 </p>
 </div>

 <div>
 <label className="block text-sm font-medium text-slate-700 mb-2">
 Proposed New Authorized Capital
 </label>
 <input
 type="text"
 className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-amber-600"
 placeholder="Proposed New Authorized Capital"
 />
 </div>

 <div className="flex justify-end">
 <button className="px-6 py-2 rounded bg-gradient-to-r from-amber-700 to-amber-800 text-white font-semibold shadow hover:from-amber-800 hover:to-amber-900 transition-all">
 Apply Now
 </button>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Main content with left column & right sidebar */}
 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
 {/* content column (span 2 on large) */}
 <div className="lg:col-span-2 space-y-6">
 {/* Article */}
 <div className="bg-[#F4F3EE] rounded-lg shadow-sm p-6 border border-gray-200">
 <h2 className="text-2xl font-bold mb-3 text-slate-900">
 Company Authorized Capital Increase
 </h2>
 <p className="text-gray-600 mb-4 leading-relaxed">
 Each business needs more funds over time to run business. These
 funds can be required on a long- and short-term basis. A
 short-term need can be satisfied by taking loans and advances.
 But in the long run, the company will require more funds. For a
 Private Limited Company, this can be done by increasing the
 company's authorised capital. Since the private limited company
 is governed and regulated under the Company Act to make changes
 in the structure, it is necessary to follow the Act and the
 rules stated.
 </p>

 <p className="text-gray-600 mb-4 leading-relaxed">
 IndiaFilings makes it easy to increase your company's authorised
 capital. Our experts guide you through every step, ensuring a
 hassle-free experience.
 </p>

 <h3 className="text-xl font-semibold mt-4 mb-2 text-slate-900">
 What is Authorized Capital?
 </h3>
 <p className="text-gray-600 mb-4 leading-relaxed">
 According to Section 2 (8) of the Companies Act 2013, “Authorized
 Capital” is the capital authorised by the company's memorandum
 to be the maximum amount of the share capital of the company.
 </p>

 <h3 className="text-lg font-semibold mt-4 mb-2 text-slate-900">
 Authorised and Paid-Up Capital of a Company
 </h3>
 <p className="text-gray-600 mb-4 leading-relaxed">
 Authorised share capital represents the total potential value of
 shares a company can issue. In contrast, paid-up capital is the
 actual value of shares that have been fully issued, subscribed
 to, and paid for by shareholders. The company cannot exceed its
 authorised share capital with its paid-up capital.
 </p>

 <h3 className="text-lg font-semibold mt-4 mb-2 text-slate-900">
 Authorised Share Capital Increase
 </h3>
 <p className="text-gray-600 mb-4 leading-relaxed">
 Authorized share capital increase refers to raising the maximum
 amount of share capital that a company is legally permitted to
 issue to its shareholders. This is typically achieved through an
 amendment to the company's Memorandum of Association (MOA).
 </p>

 <h3 className="text-lg font-semibold mt-4 mb-2 text-slate-900">
 Amending the MOA for Increasing Authorized Capital
 </h3>
 <p className="text-gray-600 mb-4 leading-relaxed">
 During formation the initial authorised and paid-up capital
 levels are established in the company's MOA. To issue new shares
 beyond that cap, an amendment to the MOA is required.
 </p>

 <h3 className="text-lg font-semibold mt-4 mb-2 text-slate-900">
 Reasons for Increasing Authorized Share Capital
 </h3>
 <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
 <li>Addressing significant financial needs</li>
 <li>Funding new business initiatives</li>
 <li>Facilitating mergers or acquisitions</li>
 <li>Issuing additional shares</li>
 <li>Converting debt into equity</li>
 </ul>

 <h3 className="text-lg font-semibold mt-4 mb-2 text-slate-900">
 Documents Required for Authorized Share Capital Increase
 </h3>
 <p className="text-gray-600 mb-4 leading-relaxed">
 Specific documentation must be submitted within 30 days
 following shareholder approval to formalise an increase in
 authorised share capital. For private companies, this involves
 submitting the resolution through e-form SH-7, while the
 submission of e-form MGT-14 is not required in some cases —
 ensure the following documents are prepared:
 </p>
 <ul className="list-disc pl-5 mt-3 text-gray-600 space-y-2">
 <li>The latest amended version of the MOA</li>
 <li>Updated AoA if applicable</li>
 <li>
 Copy of the ordinary resolution approved by shareholders
 </li>
 </ul>

 <h3 className="text-lg font-semibold mt-4 mb-2 text-slate-900">
 Procedure to Increase Authorized Share Capital
 </h3>
 <p className="text-gray-600 mb-4 leading-relaxed">
 The process involves reviewing AoA, convening board meeting,
 passing resolutions, conducting EGM and filing required forms
 (MGT-14, SH-7) within prescribed timelines.
 </p>

 <h3 className="text-lg font-semibold mt-4 mb-2 text-slate-900">
 Regulatory Filings
 </h3>
 <p className="text-gray-600 mb-4 leading-relaxed">
 After resolutions, file Form MGT-14 (if applicable) and Form
 SH-7 within 30 days along with supporting documents, stamp duty
 payment and applicable fees.
 </p>

 <h3 className="text-lg font-semibold mt-4 mb-2 text-slate-900">
 Penalties for Non-Compliance
 </h3>
 <p className="text-gray-600 mb-4 leading-relaxed">
 Late filing of SH-7 attracts penalties (e.g. Rs.1,000 per day for
 delays in SH-7) subject to caps. Section 450 also covers
 penalties for other non-compliances.
 </p>

 <div className="mt-6">
 <h3 className="text-2xl font-bold mb-4 text-slate-900">
 Why Choose IndiaFilings for Authorized Capital Increase
 </h3>
 <ul className="list-disc pl-5 mt-3 text-gray-600 space-y-2">
 <li>Expert MOA amendment guidance</li>
 <li>MGT-14 filing support</li>
 <li>Seamless SH-7 submission</li>
 <li>End-to-end assistance from start to finish</li>
 </ul>
 </div>
 </div>

 {/* Documents / Steps section */}
 <div className="bg-[#F4F3EE] rounded-lg shadow-sm p-6 border border-gray-200">
 <h3 className="text-2xl font-bold mb-4 text-slate-900">
 Procedure & Documents Summary
 </h3>
 <ul className="space-y-3 text-gray-600">
 <li className="flex gap-3 items-start">
 <CheckCircle className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
 <span>Certified true copy of resolution (EGM)</span>
 </li>
 <li className="flex gap-3 items-start">
 <CheckCircle className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
 <span>Updated MOA with altered capital clause</span>
 </li>
 <li className="flex gap-3 items-start">
 <CheckCircle className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
 <span>Form SH-7 and payment of stamp duty and ROC fees</span>
 </li>
 </ul>
 </div>

  {/* FAQ */}
  <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 mt-8">
 <h3 className="text-2xl font-bold mb-4 text-slate-900">
 FAQ's on Authorized Capital Increase
 </h3>
 <div className="divide-y divide-gray-200">
 {faqItems.map((q, idx) => (
 <div key={idx} className="py-3">
 <button
 className="w-full text-left flex justify-between items-center py-3"
 onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
 >
 <span className="text-slate-800 font-medium">{q}</span>
 <span className="text-amber-600">
 {openFaq === idx ? "−" : "+"}
 </span>
 </button>
 {openFaq === idx && (
 <div className="text-gray-600 mt-2 pl-2">
 <p>{faqAnswers[idx]}</p>
 </div>
 )}
 </div>
 ))}
 <div className="py-4 flex gap-3 items-center flex-wrap">
  <button className="px-4 py-2 border-2 border-amber-600 text-amber-700 rounded text-sm hover:bg-amber-50 transition-colors font-medium">
 Load More
 </button>
  
</div>
 </div>
 </div>
 </div>

 {/* Right sidebar */}
 <aside className="space-y-6">
          <SidebarCart />

 <div className="bg-[#F4F3EE] rounded-lg shadow-sm p-5 border border-gray-200">
 <h4 className="font-semibold mb-3 text-slate-900">
 Related Guides
 </h4>
 <ul className="text-sm space-y-2">
 <li>
 <a className="text-amber-700 hover:text-amber-800 hover:underline cursor-pointer">
 Private Limited Company Registration in India
 </a>
 </li>
 <li>
 <a className="text-amber-700 hover:text-amber-800 hover:underline cursor-pointer">
 Articles of Association (AOA)
 </a>
 </li>
 <li>
 <a className="text-amber-700 hover:text-amber-800 hover:underline cursor-pointer">
 Authorised Capital vs Paid Up Capital
 </a>
 </li>
 <li>
 <a className="text-amber-700 hover:text-amber-800 hover:underline cursor-pointer">
 FAQ's on Authorized Capital Increase
 </a>
 </li>
 </ul>
 </div>

 <div className="bg-[#F4F3EE] rounded-lg shadow-sm p-4 text-center border border-gray-200">
 <img
 src={ASSETS.cards.compliance}
 alt="Company Compliance"
 className="rounded w-full"
 />
 <div className="mt-3 font-medium text-slate-900">
 Company Compliance
 </div>
 </div>

 <div className="bg-[#F4F3EE] rounded-lg shadow-sm p-4 text-center border border-gray-200">
 <img
 src={ASSETS.cards.dinEKyc}
 alt="DIN eKYC"
 className="rounded w-full"
 />
 <div className="mt-3 font-medium text-slate-900">
 DIN eKYC Filing
 </div>
 </div>

 <div className="bg-[#F4F3EE] rounded-lg shadow-sm p-4 border border-gray-200">
 <h4 className="font-semibold mb-3 text-slate-900">
 Popular Searches
 </h4>
 <div className="flex flex-wrap gap-2">
 {POPULAR_SEARCHES.slice(0, 18).map((t) => (
 <span
 key={t}
 className="text-xs px-2 py-1 border border-gray-200 rounded bg-[#F4F3EE] text-gray-700 hover:border-amber-300 hover:text-amber-700 cursor-pointer transition-colors"
 >
 {t}
 </span>
 ))}
 </div>
 </div>
 </aside>
 </div>
 </main>

  <PopularSearches />
  <Footer />
    </>
  );
}
