"use client";
import AddQuestionModal from "../components/AddQuestionModal";

import React, { useState } from "react";
import {
 Star,
 ChevronRight,
 ShoppingBag,
 Plus,
 CheckCircle,
} from "lucide-react";
import Navbar from "../components/Navbar";

const ASSETS = {
 logo: "/images/india-logo.jpg",
 hero: "https://img.indiafilings.com/catalog/registered-office-change.png",
 cards: {
 compliance:
 "https://img.indiafilings.com/catalog/company-compliance-india.png",
 dinEKyc: "https://img.indiafilings.com/catalog/din-ekyc.png",
 },
 footerBg: "/images/footer-bg.png",
 ledgers: "https://img.indiafilings.com/catalog/ledgers.png",
 whatsapp: "/images/whatsapp.svg",
 cartIcon: "/images/cart-icon.svg",
 indiaFlag: "/images/india-flag.png",
 adRight1: "/images/company-compliance-ad.png",
 dinEkyc: "/images/din-ekyc-ad.png",
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

export default function RegisteredOfficeChange() {
 const [openFaq, setOpenFaq] = useState<number | null>(null);
 const [gstChecked, setGstChecked] = useState(false);

 const faqItems = [
 "What is a registered office of a company?",
 "Why might a company need to change its registered office?",
 "What are the key steps for change within same city?",
 "Is shareholder permission required to change registered office?",
 "What documents are needed for registered office change?",
 "How does one change the registered office within same ROC jurisdiction?",
 "What is the process to change across ROC jurisdictions in same state?",
 "How long does the process take?",
 ];

 const faqAnswers: Record<number, string> = {
 0: "A company's registered office is its official address, listed with the Registrar of Companies (ROC), where all formal communications are received. It's a legal requirement for companies to maintain a registered office.",
 1: "Companies may need to change registered office for better location, growth and expansion, cost savings, or legal compliance requirements.",
 2: "Within same city, steps include convening board meeting, passing resolution, filing INC-22 with ROC, and updating company records with new address proof.",
 3: "For changes within local limits, board resolution is sufficient. For changes outside local limits but within same state, shareholder approval may be required depending on the AOA provisions.",
 4: "Documents required include certified copies of board resolution, proof of new address (utility bill not older than 2 months), and minutes of general meeting if applicable.",
 5: "For changes within same ROC jurisdiction, file INC-22 with ROC along with board resolution and address proof. Update all company documents after approval.",
 6: "For changes to another ROC jurisdiction within same state, the process includes affidavits, public notices, and filing INC-23 with the Regional Director for approval.",
 7: "The process can take anywhere from 2-4 weeks for local changes to 6-8 weeks for inter-state changes, depending on documentation and regulatory approvals.",
 };

 return (
 <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
 {/* Navbar - Imported */}
 <Navbar />

 {/* Breadcrumb */}
 <div className="bg-gray-50 py-5">
 <div className="max-w-[1180px] mx-auto px-6 text-sm text-gray-500">
 Home / MCA Services /{" "}
 <span className="text-amber-700 font-medium">
 Registered Office Change
 </span>
 </div>
 </div>

 {/* Main Content */}
 <main className="max-w-[1180px] mx-auto px-6 py-3">
 {/* Hero Section */}
 <section className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
 <div className="flex flex-col lg:flex-row">
 {/* Left Content */}
 <div className="lg:w-1/2 p-8 lg:p-10">
 <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 mb-4">
 <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
 <span className="text-xs font-medium text-amber-700">
 REGISTERED OFFICE CHANGE
 </span>
 </div>

 <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
 Change Registered{" "}
 <span className="text-amber-600 underline decoration-4 decoration-amber-300">
 Office
 </span>
 </h1>
 <p className="text-gray-600 mb-6 max-w-xl">
 Change your company's registered office address with complete
 MCA compliance. We handle all documentation and filings for a
 seamless process.
 </p>

 <div className="space-y-4">
 <div className="flex items-start gap-3">
 <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
 <CheckCircle className="w-4 h-4 text-amber-600" />
 </div>
 <div>
 <div className="font-semibold text-slate-900">
 Fast & Compliant Process
 </div>
 <div className="text-sm text-gray-600">
 End-to-end filings with ROC included
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
 <div className="text-sm text-gray-600">
 Get help from our compliance experts
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
 <div className="text-sm text-gray-600">
 Templates & certified copies assistance
 </div>
 </div>
 </div>

 <div className="flex items-start gap-3">
 <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
 <CheckCircle className="w-4 h-4 text-amber-600" />
 </div>
 <div>
 <div className="font-semibold text-slate-900">
 Government Filing Included
 </div>
 <div className="text-sm text-gray-600">
 ROC filings handled by us
 </div>
 </div>
 </div>
 </div>
 </div>

 {/* Right Form Card */}
 <div className="lg:w-1/2 p-8 lg:p-10 bg-gradient-to-br from-amber-50 to-amber-100">
 <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
 <div
 className="h-1.5 w-full rounded-t-xl mb-4"
 style={{
 background: "linear-gradient(90deg, #b45309, #d97706)",
 }}
 />

 <div className="space-y-4 mt-3">
 <div>
 <label className="block text-sm font-medium text-slate-700 mb-2">
 Company PAN
 </label>
 <input
 type="text"
 className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-amber-600"
 placeholder="Enter PAN"
 />
 </div>

 <div>
 <label className="block text-sm font-medium text-slate-700 mb-2">
 Company Name
 </label>
 <input
 type="text"
 placeholder="Filled Automatically"
 className="w-full px-4 py-2 border border-gray-200 rounded bg-gray-50 text-gray-600"
 />
 <p className="text-xs text-gray-400 mt-1">
 This field will auto-populate after entering company
 details above.
 </p>
 </div>

 <div>
 <label className="block text-sm font-medium text-slate-700 mb-2">
 Current Registered Office Address
 </label>
 <textarea
 rows={3}
 className="w-full px-4 py-2 border border-gray-200 rounded resize-none bg-gray-50 text-gray-600"
 placeholder="Filled Automatically"
 />
 </div>

 <div>
 <label className="block text-sm font-medium text-slate-700 mb-2">
 New Registered Office Address
 </label>
 <input
 type="text"
 className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-amber-600"
 placeholder="Enter new registered office address"
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
 <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
 <h2 className="text-2xl font-bold mb-3 text-slate-900">
 Company Registered Office Change
 </h2>
 <p className="text-gray-600 mb-4 leading-relaxed">
 A company's registered office is its official address, listed
 with the Registrar of Companies (ROC), where all formal
 communications are received. It's a legal requirement for
 companies to maintain a registered office, and this address
 must be disclosed in a company's foundational documents, such
 as the Memorandum of Association (MOA) and Articles of
 Association (AOA).
 </p>

 <h3 className="text-xl font-semibold mt-4 mb-2 text-slate-900">
 Key Reasons for Changing a Company's Registered Office Address
 </h3>
 <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
 <li>
 Better Location: Moving closer to customers or suppliers.
 </li>
 <li>
 Growth and Expansion: Consolidating offices or accommodating
 team growth.
 </li>
 <li>Cost Savings: Lower rent, taxes, or operating costs.</li>
 <li>
 Legal Compliance: Requirements to be based in certain areas.
 </li>
 </ul>

 <h3 className="text-xl font-semibold mt-4 mb-2 text-slate-900">
 Four Key Scenarios - Change of Registered Office
 </h3>
 <p className="text-gray-600 mb-4 leading-relaxed">
 The company address change can occur within the same city,
 across cities, or even in a different state or region,
 depending on the company's needs and strategic decisions.
 </p>

 <h3 className="text-lg font-semibold mt-4 mb-2 text-slate-900">
 Company Registered Office Change Within Local Limits of City,
 Town, or Village
 </h3>
 <p className="text-gray-600 mb-4 leading-relaxed">
 When a company decides for a change within the same city,
 specific steps must be followed to ensure compliance with the
 Companies Act and ROC guidelines.
 </p>

 <ul className="space-y-2 ml-4 text-gray-600 mb-4 list-disc">
 <li>
 <strong>Board of Directors Meeting:</strong> Convene a
 meeting and pass a board resolution to approve the shift.
 </li>
 <li>
 <strong>Filing with ROC - INC-22:</strong> File INC-22
 within the prescribed timeline with supporting documents
 such as utility bill and address proof.
 </li>
 <li>
 <strong>Updating Company Records:</strong> After ROC
 approval, update letterheads, banners and other official
 records.
 </li>
 </ul>

 <h3 className="text-lg font-semibold mt-4 mb-2 text-slate-900">
 Registered Office Change From One City to Another Within the
 Same ROC Jurisdiction
 </h3>
 <p className="text-gray-600 mb-4 leading-relaxed">
 This involves passing resolutions, holding general meetings
 (if required), and filing appropriate forms like MGT-14 and
 INC-22 as applicable.
 </p>

 <h3 className="text-lg font-semibold mt-4 mb-2 text-slate-900">
 Registered Office Change From One ROC Jurisdiction to Another
 Within the Same State
 </h3>
 <p className="text-gray-600 mb-4 leading-relaxed">
 Shifting the registered office from one ROC jurisdiction to
 another within the same state requires a slightly more
 detailed procedure including affidavits, public notices, and
 possibly filing INC-23 with the Regional Director.
 </p>

 <h3 className="text-lg font-semibold mt-4 mb-2 text-slate-900">
 Change of Registered Office from One State to Another State
 </h3>
 <p className="text-gray-600 mb-4 leading-relaxed">
 This is the most detailed and time-consuming, requiring board
 resolutions, general meetings, creditor notices, newspaper
 advertisements and approvals from the Regional Director and
 ROC.
 </p>

 <div className="mt-6">
 <h3 className="text-2xl font-bold mb-4 text-slate-900">
 Why IndiaFilings for Registered Office Address Change
 Compliance?
 </h3>
 <p className="text-gray-600 leading-relaxed">
 IndiaFilings offers expert guidance and hands-on support
 throughout the entire process, from board resolution
 templates to ROC filings, ensuring a smooth and compliant
 transition.
 </p>
 </div>
 </div>

 {/* Documents / Steps section */}
 <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
 <h3 className="text-2xl font-bold mb-4 text-slate-900">
 Documents Required for Changing Registered Office
 </h3>
 <ul className="space-y-3 text-gray-600">
 <li className="flex gap-3 items-start">
 <CheckCircle className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
 <span>Certified true copies of board resolution</span>
 </li>
 <li className="flex gap-3 items-start">
 <CheckCircle className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
 <span>Proof of new registered office address (utility bill not older than 2 months)</span>
 </li>
 <li className="flex gap-3 items-start">
 <CheckCircle className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
 <span>Minutes of general meeting (if required)</span>
 </li>
 </ul>
 </div>

 {/* FAQ */}
 <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
 <h3 className="text-2xl font-bold mb-4 text-slate-900">
 FAQ's on Registered Office Change - Company
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
 <div className="py-4">
 <button className="px-4 py-2 border-2 border-amber-600 text-amber-700 rounded text-sm hover:bg-amber-50 transition-colors font-medium">
 Load More
 </button>
 </div>
 </div>
 </div>
 </div>

 {/* Right sidebar */}
 <aside className="space-y-6">
 {/* Cart Widget */}
 <div className="bg-white rounded-lg shadow-md p-6 sticky top-28 border border-gray-200">
 <div className="text-center text-gray-600">
 <img
 src={ASSETS.cartIcon}
 alt="cart"
 className="mx-auto h-12 w-auto mb-3"
 />
 <h3 className="font-semibold text-slate-900">
 Your cart is empty
 </h3>
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

 <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-200">
 <h4 className="font-semibold mb-3 text-slate-900">
 Related Guides
 </h4>
 <ul className="text-sm space-y-2">
 <li>
 <a className="text-amber-700 hover:text-amber-800 hover:underline cursor-pointer">
 Registered Office of a Company
 </a>
 </li>
 <li>
 <a className="text-amber-700 hover:text-amber-800 hover:underline cursor-pointer">
 Documents Required for Company Registration
 </a>
 </li>
 <li>
 <a className="text-amber-700 hover:text-amber-800 hover:underline cursor-pointer">
 Advantages of Registering a Company
 </a>
 </li>
 <li>
 <a className="text-amber-700 hover:text-amber-800 hover:underline cursor-pointer">
 Features of a Company
 </a>
 </li>
 </ul>
 </div>

 <div className="bg-white rounded-lg shadow-sm p-4 text-center border border-gray-200">
 <img
 src={ASSETS.cards.compliance}
 alt="Company Compliance"
 className="rounded w-full"
 />
 <div className="mt-3 font-medium text-slate-900">
 Company Compliance
 </div>
 </div>

 <div className="bg-white rounded-lg shadow-sm p-4 text-center border border-gray-200">
 <img
 src={ASSETS.cards.dinEKyc}
 alt="DIN eKYC"
 className="rounded w-full"
 />
 <div className="mt-3 font-medium text-slate-900">
 DIN eKYC Filing
 </div>
 </div>

 <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
 <h4 className="font-semibold mb-3 text-slate-900">
 Popular Searches
 </h4>
 <div className="flex flex-wrap gap-2">
 {POPULAR_SEARCHES.slice(0, 18).map((t) => (
 <span
 key={t}
 className="text-xs px-2 py-1 border border-gray-200 rounded bg-white text-gray-700 hover:border-amber-300 hover:text-amber-700 cursor-pointer transition-colors"
 >
 {t}
 </span>
 ))}
 </div>
 </div>
 </aside>
 </div>

 {/* Tag cloud at bottom */}
 <div className="mt-8 bg-white rounded-lg shadow-sm p-6 border border-gray-200">
 <h4 className="font-semibold mb-3 text-slate-900">
 Popular Searches
 </h4>
 <div className="flex flex-wrap gap-2">
 {POPULAR_SEARCHES.map((t, i) => (
 <span
 key={t + i}
 className="text-xs px-3 py-1.5 border border-gray-200 rounded bg-white text-gray-700 hover:border-amber-300 hover:text-amber-700 cursor-pointer transition-colors"
 >
 {t}
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