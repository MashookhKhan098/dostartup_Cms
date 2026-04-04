"use client";
import AddQuestionModal from "../components/AddQuestionModal";

import React, { useState } from "react";
import {
 Star,
 ChevronRight,
 ShoppingBag,
 Plus,
 CheckCircle,
 Search,
 MessageCircle,
 Grid,
 Zap,
} from "lucide-react";
import Navbar from "../components/Navbar";

export default function CompanyNameChange() {
 const [openFaq, setOpenFaq] = useState<number | null>(null);
 const [gstChecked, setGstChecked] = useState(false);

 const faqItems = [
 "What is the process for changing a company name?",
 "How long does it take to change a company name?",
 "What documents are required for company name change?",
 "What is Form MGT-14 and INC-24?",
 "Can any company name be changed?",
 "What are the reasons for company name change rejection?",
 "How much does it cost to change a company name?",
 "Is board resolution required for name change?",
 ];

 const faqAnswers: Record<number, string> = {
 0: "The process involves passing a board resolution, special resolution by shareholders, filing Form MGT-14 and INC-24 with ROC, and obtaining a new Certificate of Incorporation.",
 1: "Company name change typically takes around 10 to 15 working days due to the need for approvals from various departments.",
 2: "Documents include board resolution, special resolution, altered MOA & AOA, notice of general meeting, affidavit from directors, and Form MGT-14 & INC-24 attachments.",
 3: "Form MGT-14 is filed for special resolutions, while Form INC-24 is specifically for name change approval from the ROC.",
 4: "Yes, any company can change its name by following the proper legal procedure under the Companies Act, 2013, provided the new name is available and complies with naming guidelines.",
 5: "Common reasons include similarity to existing company names, non-compliance with naming guidelines, incomplete documentation, or objections from the ROC.",
 6: "The cost includes government fees, professional fees, and name availability search fees. Contact IndiaFilings for exact pricing based on your company type.",
 7: "Yes, a board resolution is the first step to initiate the name change process, followed by a special resolution passed by shareholders.",
 };

 const ASSETS = {
 logo: "/images/india-logo.jpg",
 hero: "https://img.indiafilings.com/catalog/mca-compliance-simplified-india.webp",
 ledgers: "https://img.indiafilings.com/catalog/ledgers.png",
 whatsapp: "/images/whatsapp.svg",
 cartIcon: "/images/cart-icon.svg",
 indiaFlag: "/images/india-flag.png",
 adRight1: "/images/company-compliance-ad.png",
 dinEkyc: "/images/din-ekyc-ad.png",
 };

 return (
 <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
 {/* Navbar - Imported */}
 <Navbar />

 {/* Breadcrumb */}
 <div className="bg-gray-50 py-5">
 <div className="max-w-[1180px] mx-auto px-6 text-sm text-gray-500">
 Home / MCA Services /{" "}
 <span className="text-amber-700 font-medium">Company Name Change</span>
 </div>
 </div>

 {/* Main Content */}
 <main className="max-w-[1180px] mx-auto px-6 py-3 grid grid-cols-1 lg:grid-cols-12 gap-8">
 {/* Left Column */}
 <section className="lg:col-span-8 space-y-6">
 {/* Top Card */}
 <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col md:flex-row gap-6">
 {/* Left image card */}
 <div className="md:w-1/3 flex-shrink-0">
 <div className="rounded-lg overflow-hidden">
 <div className="bg-gradient-to-r from-amber-700 to-amber-800 rounded-t-lg p-4 text-white text-center">
 <h2 className="text-2xl font-bold ">
 NAME CHANGE
 </h2>
 <div className="text-xs mt-1 opacity-90">
 Change your company name seamlessly
 </div>
 </div>

 <div className="bg-white px-4 py-6 flex justify-center">
 <div className="w-44 h-44 rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center -mt-4">
 <img
 src={ASSETS.hero}
 alt="Name Change"
 className="w-full h-full object-cover"
 />
 </div>
 </div>
 </div>

 <ul className="mt-4 text-sm space-y-2 text-gray-600">
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Board Resolution for Name Change</li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Special Resolution (MGT-14)</li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Form INC-24 Filing</li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Altered MOA & AOA</li>
 <li className="text-amber-700 underline cursor-pointer hover:text-amber-800">Load More</li>
 </ul>
 </div>

 {/* Right content */}
 <div className="md:w-2/3 flex-1">
 <div className="flex flex-col sm:flex-row justify-between gap-4">
 <div>
 <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 mb-2">
 <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
 <span className="text-xs font-medium text-amber-700">MCA COMPLIANCE</span>
 </div>
 <h2 className="text-lg font-semibold text-slate-900">
 Company Name Change
 </h2>
 <div className="flex items-center gap-3 mt-2">
 <div className="flex items-center gap-1">
 {[...Array(4)].map((_, i) => (
 <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />
 ))}
 <Star size={14} className="text-gray-300" />
 </div>
 <span className="text-xs text-slate-500">(34 Reviews)</span>
 </div>
 </div>

 <p className="text-sm text-gray-600 max-w-md">
 Change your company name seamlessly with our expert-assisted
 process. Get your new company name approved and incorporated
 with 100% digital and paperless filing.
 </p>
 </div>

 {/* Features List */}
 <div className="mt-6 space-y-3">
 <div className="flex items-center gap-3">
 <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
 <Search className="w-4 h-4 text-amber-600" />
 </div>
 <span className="text-sm text-gray-700">AI-Powered Name Approval</span>
 </div>
 <div className="flex items-center gap-3">
 <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
 <MessageCircle className="w-4 h-4 text-amber-600" />
 </div>
 <span className="text-sm text-gray-700">Expert Guidance Throughout</span>
 </div>
 <div className="flex items-center gap-3">
 <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
 <Grid className="w-4 h-4 text-amber-600" />
 </div>
 <span className="text-sm text-gray-700">Paperless & Digital Process</span>
 </div>
 <div className="flex items-center gap-3">
 <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
 <Zap className="w-4 h-4 text-amber-600" />
 </div>
 <span className="text-sm text-gray-700">Fast & Reliable Service</span>
 </div>
 </div>

 {/* Offer box */}
 <div className="relative mt-6">
 <div className="absolute -top-3 left-6 bg-white px-2 rounded-md text-xs text-amber-700 border border-amber-200">
 2 Exclusive Offers
 </div>
 <div className="border-2 border-dashed rounded-md border-amber-200 p-4 bg-amber-50/30">
 <div className="font-semibold text-slate-900">Basic</div>
 <ul className="mt-2 text-sm text-gray-600">
 <li className="flex items-center gap-2">
 <ChevronRight size={14} className="text-amber-600" /> Application Filing in MCA
 </li>
 <li className="flex items-center gap-2">
 <ChevronRight size={14} className="text-amber-600" /> Provide Updated MOA & AOA
 </li>
 <li className="flex items-center gap-2">
 <ChevronRight size={14} className="text-amber-600" /> New Incorporation Certificate
 </li>
 </ul>
 <div className="mt-3">
 <button className="bg-white border-2 border-amber-600 text-amber-700 px-4 py-1.5 rounded hover:bg-amber-50 transition-colors text-sm font-medium">
 ADD TO CART
 </button>
 </div>
 </div>
 </div>

 <div className="mt-4 border-t pt-4 text-sm flex justify-between items-center text-slate-600">
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
 </div>
 </div>
 </div>

 {/* Article */}
 <article className="bg-white rounded-lg shadow-sm p-6">
 <h1 className="text-2xl font-semibold text-center text-slate-900">
 Company Name Change Process Under Companies Act, 2013
 </h1>

 <div className="mt-4 text-[15px] leading-7 text-gray-700">
 <p>
 Changing a company's name is a strategic decision that may be
 driven by rebranding, expansion, or legal requirements. Under
 the Companies Act, 2013, a company can change its name by
 following a proper legal procedure and obtaining approval from
 the Registrar of Companies (ROC).
 </p>

 <h3 className="mt-6 text-lg font-semibold text-slate-900">
 Documents Required to Change Business Name
 </h3>
 <p className="mt-2">
 The documents required for changing a company name include:
 </p>

 <h4 className="mt-4 font-semibold text-slate-900">
 Attachments to Form MGT-14 (For Changing Company Name):
 </h4>
 <ul className="mt-2 space-y-2">
 <li className="flex items-start gap-2 text-sm">
 <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
 <span>Certified True Copies of the Special Resolutions along with the explanatory statement.</span>
 </li>
 <li className="flex items-start gap-2 text-sm">
 <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
 <span>A copy of the meeting notice was sent to members, including all annexures.</span>
 </li>
 <li className="flex items-start gap-2 text-sm">
 <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
 <span>Altered Memorandum & Article of Association.</span>
 </li>
 <li className="flex items-start gap-2 text-sm">
 <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
 <span>Copy of the Attendance Sheet of the General Meeting.</span>
 </li>
 <li className="flex items-start gap-2 text-sm">
 <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
 <span>Shorter Notice Consent, if applicable.</span>
 </li>
 </ul>

 <h4 className="mt-4 font-semibold text-slate-900">
 Attachments to Form INC-24 (For Name Change Approval):
 </h4>
 <ul className="mt-2 space-y-2">
 <li className="flex items-start gap-2 text-sm">
 <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
 <span>Notice along with Explanatory Statements.</span>
 </li>
 <li className="flex items-start gap-2 text-sm">
 <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
 <span>Certified True Copy of the Special Resolution.</span>
 </li>
 <li className="flex items-start gap-2 text-sm">
 <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
 <span>Altered Memorandum & Article of Association.</span>
 </li>
 <li className="flex items-start gap-2 text-sm">
 <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
 <span>Minutes of the General Meeting.</span>
 </li>
 <li className="flex items-start gap-2 text-sm">
 <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
 <span>Affidavit from Directors.</span>
 </li>
 </ul>

 <p className="mt-6 text-sm text-gray-600">
 Changing a company's name typically takes around 10 to 15 working
 days due to the need for approvals from various departments.
 </p>

 <h3 className="mt-6 text-lg font-semibold text-slate-900">
 Procedure for Company Name Change
 </h3>
 <ol className="mt-3 list-decimal list-inside text-sm text-gray-600 space-y-2">
 <li>Convene a Board Meeting and pass a resolution for name change.</li>
 <li>Check name availability with ROC (apply for name reservation).</li>
 <li>Call a General Meeting and pass Special Resolution.</li>
 <li>File Form MGT-14 with ROC within 30 days.</li>
 <li>File Form INC-24 for name change approval.</li>
 <li>Obtain fresh Certificate of Incorporation with new name.</li>
 </ol>
 </div>
 </article>

 {/* Documents + other registrations */}
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
 <div className="lg:col-span-7 bg-white rounded-lg shadow-sm p-6">
 <h3 className="text-lg font-semibold mb-4 text-slate-900">
 Documents Required For Name Change
 </h3>
 <ul className="space-y-3 text-sm text-gray-700">
 <li className="border-b pb-3 hover:text-amber-700 cursor-pointer transition-colors">
 Board Resolution for Name Change
 </li>
 <li className="border-b pb-3 hover:text-amber-700 cursor-pointer transition-colors">
 Special Resolution (Form MGT-14)
 </li>
 <li className="border-b pb-3 hover:text-amber-700 cursor-pointer transition-colors">
 Altered Memorandum of Association
 </li>
 <li className="border-b pb-3 hover:text-amber-700 cursor-pointer transition-colors">
 Altered Articles of Association
 </li>
 <li className="border-b pb-3 hover:text-amber-700 cursor-pointer transition-colors">
 Notice of General Meeting
 </li>
 <li className="mt-4 inline-block px-3 py-2 border-2 border-amber-600 rounded-md text-sm text-amber-700 hover:bg-amber-50 cursor-pointer transition-colors">
 Load More
 </li>
 </ul>
 </div>

 <aside className="lg:col-span-5 bg-white rounded-lg shadow-sm p-6">
 <h3 className="text-lg font-semibold mb-4 text-slate-900">
 Documents Required for Other Registrations
 </h3>
 <ul className="space-y-3 text-sm">
 {[
 ["Documents Required for LLP Registration", 8],
 ["Documents Required for Proprietorship Registration", 2],
 ["Documents Required for Company Registration", 2],
 ["Documents Required for Trademark Registration", 7],
 ["Documents Required for GST Registration", 10],
 ].map(([label, count]) => (
 <li
 key={label as string}
 className="flex justify-between items-center border-b pb-2 hover:text-amber-700 cursor-pointer transition-colors"
 >
 <span>{label}</span>
 <span className="bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-full w-6 h-6 inline-flex items-center justify-center text-xs">
 {count}
 </span>
 </li>
 ))}
 </ul>
 </aside>
 </div>

 {/* FAQ */}
 <div className="bg-white rounded-lg shadow-sm p-6">
 <h3 className="text-xl font-semibold mb-4 text-slate-900">
 FAQ's on Company Name Change
 </h3>
 <div className="space-y-0">
 {faqItems.map((q, i) => (
 <div key={i} className="border-b last:border-b-0">
 <button
 className="w-full text-left py-4 flex justify-between items-center text-sm"
 onClick={() => setOpenFaq(openFaq === i ? null : i)}
 >
 <span className="text-slate-800 font-medium">{q}</span>
 <span className="text-amber-700 flex items-center gap-2">
 {openFaq === i ? "−" : <Plus size={14} />}
 </span>
 </button>
 {openFaq === i && (
 <div className="px-2 pb-4 text-sm text-gray-600">
 {faqAnswers[i]}
 </div>
 )}
 </div>
 ))}
 </div>

 <div className="mt-4 pt-4 flex gap-3 items-center flex-wrap">

 <button className="px-4 py-2 border-2 border-amber-600 text-amber-700 rounded-md text-sm hover:bg-amber-50 transition-colors font-medium">
 Load More
 </button>
 
<AddQuestionModal />
</div>
 </div>
 </section>

 {/* Right column (sidebar) */}
 <aside className="lg:col-span-4 hidden lg:block">
 <div className="bg-white rounded-lg shadow-md p-6 mb-6 sticky top-28">
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
 <h4 className="font-semibold mb-3 text-slate-900">Related Guides</h4>
 <ul className="text-sm space-y-2">
 <li className="text-amber-700 hover:text-amber-800 cursor-pointer hover:underline">Company Name Change Process</li>
 <li className="text-amber-700 hover:text-amber-800 cursor-pointer hover-underline">Form INC-24 Filing Guide</li>
 <li className="text-amber-700 hover:text-amber-800 cursor-pointer hover:underline">MCA Name Approval Guidelines</li>
 <li className="text-amber-700 hover:text-amber-800 cursor-pointer hover:underline">MOA & AOA Amendment</li>
 </ul>
 </div>

 <div className="rounded-lg overflow-hidden shadow-sm mb-4">
 <img
 src={ASSETS.adRight1}
 alt="company compliance"
 className="w-full h-56 object-cover"
 />
 </div>

 <div className="rounded-lg overflow-hidden shadow-sm mb-6">
 <img
 src={ASSETS.dinEkyc}
 alt="din ekyc"
 className="w-full h-56 object-cover"
 />
 </div>

 <div className="bg-white rounded-lg p-4">
 <h4 className="font-semibold mb-3 text-slate-900">Popular Searches</h4>
 <div className="flex flex-wrap gap-2">
 {[
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
 "MSME Registration",
 "Trademark Status",
 "Trade License",
 "Domicile",
 "eMitra",
 "UAN",
 "PICME",
 ].slice(0, 14).map((t) => (
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
 </main>

 {/* WhatsApp CTA */}
 <div className="fixed right-6 bottom-6 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-4 py-3 rounded-full shadow-2xl flex items-center gap-3 z-50 hover:from-amber-700 hover:to-amber-800 transition-all cursor-pointer">
 <img src={ASSETS.whatsapp} alt="wa" className="w-5 h-5" />
 <span className="font-semibold text-sm">Live Chat with Experts</span>
 </div>
 </div>
 );
}