"use client";


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
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import SidebarCart from "../components/SidebarCart";
import Footer from "../components/Footer";
import PopularSearches from "../components/PopularSearches";

export default function CompanyNameChange() {
 const [gstChecked, setGstChecked] = useState(false);

 const ASSETS = {
 logo: "/images/india-logo.jpg",
 hero: "/images/company-compliance.jpg",
 ledgers: "/images/ledgers.jpg",
 whatsapp: "/images/whatsapp.png",
 cartIcon: "/images/cart-icon.svg",
 indiaFlag: "/images/india-flag.png",
 adRight1: "/images/company-compliance.jpg",
 dinEkyc: "/images/din.jpg",
 };

 return (
 <div className="min-h-screen bg-[#F4F3EE] font-sans text-gray-800">
 {/* Navbar - Imported */}
 <Navbar />

 {/* Breadcrumb */}
 <div className="py-5 bg-[#F4F3EE]">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 text-sm text-gray-500 font-bold">
 Home / MCA Services /{" "}
 <span className="text-amber-700 font-medium">Company Name Change</span>
 </div>
 </div>

 {/* Main Content */}
 <main className="max-w-7xl mx-auto px-4 sm:px-6 py-3 grid grid-cols-1 lg:grid-cols-12 gap-8">
 {/* Left Column */}
 <section className="lg:col-span-8 space-y-6">
 {/* Top Card */}
 <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-10 flex flex-col md:flex-row gap-8">
 {/* Left image card */}
 <div className="md:w-1/3 flex-shrink-0">
 <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100">
 <div className="bg-gradient-to-r from-amber-700 to-amber-800 rounded-t-xl p-4 text-white text-center">
 <h2 className="text-xl font-bold">
 NAME CHANGE
 </h2>
 <div className="text-xs mt-1 opacity-90">
 Change your company name seamlessly
 </div>
 </div>

 <div className="bg-white px-4 py-8 flex justify-center">
 <div className="w-40 h-40 rounded-full overflow-hidden shadow-sm border-4 border-white flex items-center justify-center -mt-4">
 <img
 src={ASSETS.hero}
 alt="Name Change"
 className="w-full h-full object-cover"
 />
 </div>
 </div>
 </div>

 <ul className="mt-6 text-sm space-y-3 text-gray-600 font-bold">
 <li className="hover:text-amber-700 cursor-pointer transition-colors flex items-center gap-2">
    <ChevronRight size={14} className="text-amber-600" /> Board Resolution for Name Change
 </li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors flex items-center gap-2">
    <ChevronRight size={14} className="text-amber-600" /> Special Resolution (MGT-14)
 </li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors flex items-center gap-2">
    <ChevronRight size={14} className="text-amber-600" /> Form INC-24 Filing
 </li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors flex items-center gap-2">
    <ChevronRight size={14} className="text-amber-600" /> Altered MOA & AOA
 </li>
 </ul>
 </div>

 {/* Right content */}
 <div className="md:w-2/3 flex-1">
 <div className="flex flex-col sm:flex-row justify-between gap-4">
 <div>
 <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 mb-3">
 <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
 <span className="text-[10px] font-bold text-amber-700 uppercase tracking-widest">MCA COMPLIANCE</span>
 </div>
 <h2 className="text-3xl font-extrabold text-slate-900 mb-2">
 Company Name Change
 </h2>
 <div className="flex items-center gap-3 mt-2">
 <div className="flex items-center gap-1">
 {[...Array(4)].map((_, i) => (
 <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />
 ))}
 <Star size={14} className="text-gray-300" />
 </div>
 <span className="text-sm font-bold text-slate-500">(34 Reviews)</span>
 </div>
 </div>
 </div>

 <p className="text-sm text-gray-600 max-w-md font-bold leading-relaxed mt-4">
 Change your company name seamlessly with our expert-assisted
 process. Get your new company name approved and incorporated
 with 100% digital and paperless filing.
 </p>

 {/* Features List */}
 <div className="mt-6 space-y-3 font-bold">
 <div className="flex items-center gap-3">
 <div className="w-8 h-8 bg-amber-50 border border-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
 <Search className="w-4 h-4 text-amber-600" />
 </div>
 <span className="text-sm text-gray-700">AI-Powered Name Approval</span>
 </div>
 <div className="flex items-center gap-3">
 <div className="w-8 h-8 bg-amber-50 border border-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
 <MessageCircle className="w-4 h-4 text-amber-600" />
 </div>
 <span className="text-sm text-gray-700">Expert Guidance Throughout</span>
 </div>
 <div className="flex items-center gap-3">
 <div className="w-8 h-8 bg-amber-50 border border-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
 <Grid className="w-4 h-4 text-amber-600" />
 </div>
 <span className="text-sm text-gray-700">Paperless & Digital Process</span>
 </div>
 <div className="flex items-center gap-3">
 <div className="w-8 h-8 bg-amber-50 border border-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
 <Zap className="w-4 h-4 text-amber-600" />
 </div>
 <span className="text-sm text-gray-700">Fast & Reliable Service</span>
 </div>
 </div>

 {/* Offer box */}
 <div className="relative mt-8">
 <div className="absolute -top-3 left-6 bg-white px-2 rounded-md text-xs font-bold text-amber-700 border border-amber-200 uppercase tracking-widest">
 2 Exclusive Offers
 </div>
 <div className="border-2 border-dashed rounded-xl border-amber-200 p-5 bg-amber-50/30">
 <div className="font-bold text-slate-900">Basic</div>
 <ul className="mt-3 text-sm text-gray-600 font-bold space-y-2">
 <li className="flex items-start gap-2">
 <ChevronRight size={16} className="text-amber-600 mt-0.5" /> Application Filing in MCA
 </li>
 <li className="flex items-start gap-2">
 <ChevronRight size={16} className="text-amber-600 mt-0.5" /> Provide Updated MOA & AOA
 </li>
 <li className="flex items-start gap-2">
 <ChevronRight size={16} className="text-amber-600 mt-0.5" /> New Incorporation Certificate
 </li>
 </ul>
 <div className="mt-5">
 <button className="bg-white border-2 border-amber-600 text-amber-700 px-6 py-2 rounded-lg hover:bg-amber-50 transition-colors text-sm font-bold uppercase tracking-wide">
 ADD TO CART
 </button>
 </div>
 </div>
 </div>

 <div className="mt-6 border-t border-gray-100 pt-4 text-sm flex justify-between items-center text-slate-600 font-bold">
 <a className="text-amber-700 hover:text-amber-800 cursor-pointer transition-colors">
 Terms and conditions
 </a>
 <a className="text-amber-700 hover:text-amber-800 cursor-pointer transition-colors">Refer a Friend</a>
 </div>

 <div className="mt-8 border border-gray-100 rounded-xl p-4 hover:border-amber-200 transition-colors shadow-sm">
 <h4 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide">Offers and discounts</h4>
 <div className="flex items-center gap-4">
 <img
 src={ASSETS.ledgers}
 alt="ledgers"
 className="h-10 w-10 object-contain rounded"
 />
 <div>
 <div className="text-amber-700 font-bold text-sm">
 LEDGERS - Compliance Platform
 </div>
 <div className="text-gray-500 font-bold text-xs mt-0.5">
 Invoicing, GST Filing, Banking and Payroll
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>

 {/* Article */}
 <article className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-10">
 <h1 className="text-3xl font-extrabold text-slate-900 mb-8 border-b pb-4">
 Company Name Change Process Under Companies Act, 2013
 </h1>

 <div className="space-y-6 text-[15px] leading-relaxed text-gray-700 font-bold">
 <p>
 Changing a company's name is a strategic decision that may be
 driven by rebranding, expansion, or legal requirements. Under
 the Companies Act, 2013, a company can change its name by
 following a proper legal procedure and obtaining approval from
 the Registrar of Companies (ROC).
 </p>

 <h3 className="text-xl font-bold text-slate-900 pt-4 flex items-center gap-2">
    <div className="w-1.5 h-6 bg-amber-600 rounded-full" />
    Documents Required to Change Business Name
 </h3>
 <p>
 The documents required for changing a company name include:
 </p>

 <h4 className="font-bold text-slate-900 text-lg mt-4">
 Attachments to Form MGT-14 (For Changing Company Name):
 </h4>
 <ul className="list-none space-y-3 bg-gray-50 p-6 rounded-xl border border-gray-100">
 <li className="flex items-start gap-3">
 <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
 <span>Certified True Copies of the Special Resolutions along with the explanatory statement.</span>
 </li>
 <li className="flex items-start gap-3">
 <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
 <span>A copy of the meeting notice was sent to members, including all annexures.</span>
 </li>
 <li className="flex items-start gap-3">
 <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
 <span>Altered Memorandum & Article of Association.</span>
 </li>
 <li className="flex items-start gap-3">
 <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
 <span>Copy of the Attendance Sheet of the General Meeting.</span>
 </li>
 <li className="flex items-start gap-3">
 <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
 <span>Shorter Notice Consent, if applicable.</span>
 </li>
 </ul>

 <h4 className="font-bold text-slate-900 text-lg mt-6">
 Attachments to Form INC-24 (For Name Change Approval):
 </h4>
 <ul className="list-none space-y-3 bg-gray-50 p-6 rounded-xl border border-gray-100">
 <li className="flex items-start gap-3">
 <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
 <span>Notice along with Explanatory Statements.</span>
 </li>
 <li className="flex items-start gap-3">
 <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
 <span>Certified True Copy of the Special Resolution.</span>
 </li>
 <li className="flex items-start gap-3">
 <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
 <span>Altered Memorandum & Article of Association.</span>
 </li>
 <li className="flex items-start gap-3">
 <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
 <span>Minutes of the General Meeting.</span>
 </li>
 <li className="flex items-start gap-3">
 <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
 <span>Affidavit from Directors.</span>
 </li>
 </ul>

 <p className="mt-6 text-sm text-gray-500">
 Changing a company's name typically takes around 10 to 15 working
 days due to the need for approvals from various departments.
 </p>

 <h3 className="text-xl font-bold text-slate-900 pt-6 flex items-center gap-2">
    <div className="w-1.5 h-6 bg-amber-600 rounded-full" />
    Procedure for Company Name Change
 </h3>
 <ol className="list-decimal pl-5 space-y-3 p-4">
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
 <div className="lg:col-span-7 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
 <h3 className="text-xl font-bold mb-6 text-slate-900 border-b pb-3">
 Documents Required For Name Change
 </h3>
 <ul className="space-y-4 text-sm text-gray-700 font-bold">
 <li className="flex items-center gap-3 hover:text-amber-700 cursor-pointer transition-colors">
    <ChevronRight className="w-4 h-4 text-amber-500" /> Board Resolution for Name Change
 </li>
 <li className="flex items-center gap-3 hover:text-amber-700 cursor-pointer transition-colors">
    <ChevronRight className="w-4 h-4 text-amber-500" /> Special Resolution (Form MGT-14)
 </li>
 <li className="flex items-center gap-3 hover:text-amber-700 cursor-pointer transition-colors">
    <ChevronRight className="w-4 h-4 text-amber-500" /> Altered Memorandum of Association
 </li>
 <li className="flex items-center gap-3 hover:text-amber-700 cursor-pointer transition-colors">
    <ChevronRight className="w-4 h-4 text-amber-500" /> Altered Articles of Association
 </li>
 <li className="flex items-center gap-3 hover:text-amber-700 cursor-pointer transition-colors">
    <ChevronRight className="w-4 h-4 text-amber-500" /> Notice of General Meeting
 </li>
 </ul>
 <button className="mt-8 px-6 py-2 border-2 border-slate-900 rounded-lg text-sm font-bold text-slate-900 hover:bg-slate-900 hover:text-white transition-all w-full">
 LOAD MORE
 </button>
 </div>

 <aside className="lg:col-span-5 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
 <h3 className="text-xl font-bold mb-6 text-slate-900 border-b pb-3">
 Other Registrations
 </h3>
 <ul className="space-y-4 text-sm font-bold">
 {[
 ["Documents Required for LLP Registration", 8],
 ["Documents Required for Proprietorship Registration", 2],
 ["Documents Required for Company Registration", 2],
 ["Documents Required for Trademark Registration", 7],
 ["Documents Required for GST Registration", 10],
 ].map(([label, count]) => (
 <li
 key={label as string}
 className="flex justify-between items-start hover:text-amber-700 cursor-pointer transition-colors group"
 >
 <span className="group-hover:translate-x-1 transition-transform">{label}</span>
 <span className="bg-amber-100 text-amber-800 rounded-full w-6 h-6 inline-flex items-center justify-center text-xs ml-3 shrink-0">
 {count}
 </span>
 </li>
 ))}
 </ul>
 </aside>
 </div>


 </section>

 {/* Right column (sidebar) */}
 <aside className="lg:col-span-4 hidden lg:block relative">
    <div className="sticky top-28 z-30 mb-6">
      <SidebarCart />
    </div>

 <div className="bg-white rounded-2xl shadow-sm p-6 mb-6 border border-gray-100">
 <h4 className="font-bold mb-4 text-slate-900 text-sm uppercase tracking-wider border-b pb-2">Related Guides</h4>
 <ul className="text-sm space-y-3 font-bold text-gray-700">
 <li className="hover:text-amber-700 cursor-pointer flex gap-3 group items-center">
    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full group-hover:bg-amber-600 transition-colors" />
    <span className="group-hover:translate-x-1 transition-transform">Company Name Change Process</span>
 </li>
 <li className="hover:text-amber-700 cursor-pointer flex gap-3 group items-center">
    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full group-hover:bg-amber-600 transition-colors" />
    <span className="group-hover:translate-x-1 transition-transform">Form INC-24 Filing Guide</span>
 </li>
 <li className="hover:text-amber-700 cursor-pointer flex gap-3 group items-center">
    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full group-hover:bg-amber-600 transition-colors" />
    <span className="group-hover:translate-x-1 transition-transform">MCA Name Approval Guidelines</span>
 </li>
 <li className="hover:text-amber-700 cursor-pointer flex gap-3 group items-center">
    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full group-hover:bg-amber-600 transition-colors" />
    <span className="group-hover:translate-x-1 transition-transform">MOA & AOA Amendment</span>
 </li>
 </ul>
 </div>

 <div className="rounded-2xl overflow-hidden shadow-sm mb-6 border border-gray-100 group cursor-pointer relative">
    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
    <img
    src={ASSETS.adRight1}
    alt="company compliance"
    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
    />
    <div className="absolute bottom-4 left-4 right-4 z-20">
       <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg text-center">
          <h4 className="font-bold text-slate-900 text-sm">Company Compliance</h4>
       </div>
    </div>
 </div>

 <div className="rounded-2xl overflow-hidden shadow-sm mb-8 border border-gray-100 group cursor-pointer relative">
    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
    <img
    src={ASSETS.dinEkyc}
    alt="din ekyc"
    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
    />
    <div className="absolute bottom-4 left-4 right-4 z-20">
       <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg text-center">
          <h4 className="font-bold text-slate-900 text-sm">DIN eKYC Filing</h4>
       </div>
    </div>
 </div>

 </aside>
 </main>
 
 <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
    <DynamicPricingSection category="name-change" />
 </div>

 <FAQAccordion category="name-change" title="FAQs for Company Name Change" />

 <PopularSearches />
 
 {/* Re-added Footer as requested */}
 <Footer />

 {/* WhatsApp CTA */}
 <div className="fixed right-6 bottom-6 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-3 z-50 hover:scale-105 transition-all cursor-pointer">
 <img src={ASSETS.whatsapp} alt="wa" className="w-5 h-5 brightness-0 invert" />
 <span className="font-bold text-sm tracking-wide">Expert Chat</span>
 </div>
 </div>
 );
}
