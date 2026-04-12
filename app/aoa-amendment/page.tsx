"use client";

/* eslint-disable @next/next/no-img-element */

import React, { useMemo, useState } from "react";
import { Star, ChevronRight, Check } from "lucide-react";
import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import SidebarCart from "../components/SidebarCart";
import Footer from "../components/Footer";
import PopularSearches from "../components/PopularSearches";

const ASSETS = {
 logo: "/images/india-logo.jpg",
 hero: "/images/mca-compliance-simplified-india.webp",
 ledgers: "/images/ledgers.png",
 aoaMockup: "/brain/656afb08-5b64-434e-b968-1cb473ebfbe0/aoa_mockup_laptop_1775939857416.png",
 whatsapp: "/images/whatsapp.png",
};

const MCA_DROPDOWN_LINKS = [
 { title: "Company Compliance", href: "/MCA/company-compliance" },
 { title: "Director Change", href: "/MCA/director-change" },
 { title: "AOA Amendment", href: "/MCA/aoa-amendment" },
 { title: "LLP Compliance", href: "/MCA/llp-compliance" },
 { title: "Remove Director", href: "/MCA/remove-director" },
 { title: "Authorized Capital Increase", href: "/authorized-capital-increase" },
 { title: "OPC Compliance", href: "/MCA/opc-compliance" },
 { title: "ADT-1 Filing", href: "/MCA/adt-1-filing" },
];

export default function AOAAmendmentPage(): React.ReactElement {
 const [companyInput, setCompanyInput] = useState("");

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
 <div className="min-h-screen bg-[#F4F3EE] font-sans antialiased">
 <Navbar />

 <main>
 <section className="py-12 bg-[#F4F3EE]">
 <div className="max-w-[1240px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
 <div className="flex-1">
 <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 mb-6">
 <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
 <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">MCA COMPLIANCE</span>
 </div>
 <h1 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-6">
 AOA Amendment — Articles of Association Changes Made Simple
 </h1>
 <p className="text-gray-500 text-lg mb-8 leading-relaxed max-w-xl">
 Amend your Articles of Association with guidance from experts — board meetings, resolutions and MCA filing handled end-to-end.
 </p>
 <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
 <input
 className="flex-1 px-6 py-4 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#C15F3C] font-bold shadow-sm"
 placeholder="ENTER COMPANY NAME"
 value={companyInput}
 onChange={(e) => setCompanyInput(e.target.value)}
 />
 <button type="submit" className="px-10 py-4 bg-[#C15F3C] text-white rounded-xl font-bold hover:bg-[#A74A2F] transition-all uppercase tracking-widest text-sm">
 Book Demo
 </button>
 </form>
 </div>
 <div className="w-full lg:w-[480px]">
 <div className="relative rounded-[40px] overflow-hidden shadow-2xl border border-gray-100 group">
 <img src={ASSETS.hero} alt="MCA hero" className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
 <div className="absolute top-6 left-6 bg-amber-600 text-white px-5 py-2 rounded-full font-black text-[10px] uppercase tracking-widest">
 MCA Compliance Simplified
 </div>
 </div>
 </div>
 </div>
 </section>

 <section className="py-8 bg-[#F4F3EE]">
 <div className="max-w-[1240px] mx-auto px-6">
 <div className="flex flex-col lg:flex-row gap-8">
 <section className="flex-1 space-y-6">
 <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden flex flex-col md:flex-row shadow-xl shadow-orange-900/5">
 <div className="md:w-1/2 bg-gray-50 flex items-center justify-center p-8 relative">
 <img src={ASSETS.aoaMockup} alt="AOA Mockup" className="w-full h-auto rounded-[24px] shadow-2xl z-10" />
 </div>
 <div className="md:w-1/2 p-10 flex flex-col">
 <div className="space-y-6 flex-1">
 <div className="inline-flex items-center gap-2 bg-[#FDF1EC] border border-[#FAE5DC] rounded-full px-4 py-1.5">
 <div className="w-2 h-2 bg-[#C15F3C] rounded-full" />
 <span className="text-[10px] font-black text-[#C15F3C] uppercase tracking-[0.2em]">MCA COMPLIANCE</span>
 </div>
 <h2 className="text-3xl font-black text-gray-900">AOA Amendment</h2>
 <div className="flex items-center gap-2">
 <div className="flex text-amber-500">
 {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
 </div>
 <span className="text-xs text-gray-400 font-bold">(39)</span>
 </div>
 <p className="text-sm text-gray-500 font-bold leading-relaxed">
 AOA Amendment for a Private Limited Company & OPC.
 </p>
 <div className="mt-5 border-2 border-dashed rounded-[24px] border-amber-200 p-6 bg-amber-50/10">
 <div className="text-[10px] text-amber-700 font-black bg-white inline-flex px-3 py-1 rounded-full border border-amber-200 uppercase tracking-widest text-center">1 Exclusive Offers</div>
 <h4 className="font-black mt-4 text-gray-900 uppercase text-xs tracking-widest">Basic</h4>
 <ul className="text-sm text-gray-600 mt-4 space-y-3 font-bold">
 <li className="flex items-center gap-3"><Check className="w-4 h-4 text-[#C15F3C]" /> Application Filing in MCA</li>
 <li className="flex items-center gap-3"><Check className="w-4 h-4 text-[#C15F3C]" /> Provide Updated AOA</li>
 </ul>
 <div className="mt-6">
 <button className="w-full bg-[#C15F3C] text-white py-4 rounded-xl font-black hover:bg-[#A74A2F] uppercase text-xs tracking-widest">ADD TO CART</button>
 </div>
 </div>
 </div>
 <div className="mt-8 p-4 bg-gray-50 rounded-2xl flex items-center gap-4 border border-gray-100">
 <img src={ASSETS.ledgers} alt="ledgers" className="h-10 w-10 object-contain" />
 <div>
 <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Offers and discounts</div>
 <div className="text-xs font-black text-gray-900 uppercase">LEDGERS - Compliance Platform</div>
 </div>
 </div>
 </div>
 </div>

 <div className="space-y-6 mt-10">
 <div className="bg-white rounded-[32px] border border-gray-100 p-10 shadow-sm">
 <h3 className="text-2xl font-black text-gray-900 mb-6 uppercase tracking-tighter">Articles of Association (AOA) Amendment</h3>
 <p className="text-gray-600 leading-relaxed font-medium">
 The Articles of Association (AOA) of a company outline the rules and regulations that dictate its internal management...
 </p>
 </div>
 <div className="bg-white rounded-[32px] border border-gray-100 p-10 shadow-sm space-y-6">
 <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight text-amber-800">Governance & Bylaws</h3>
 <ul className="grid md:grid-cols-2 gap-8">
 {articleItems.map((item, idx) => (
 <li key={idx} className="flex gap-4 items-start">
 <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0 text-[#C15F3C]"><Check className="w-4 h-4" /></div>
 <div className="text-sm">
 <strong className="block text-gray-900 mb-1 font-black uppercase text-xs">{item[0]}</strong>
 <span className="text-gray-500 font-bold leading-relaxed">{item[1]}</span>
 </div>
 </li>
 ))}
 </ul>
 </div>
 </div>
 </section>
 <div className="lg:w-80 space-y-6">
 <div className="sticky top-28 space-y-6">
 <SidebarCart />
 <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm font-bold">
 <h4 className="font-black text-gray-900 mb-6 text-xs border-b pb-4 uppercase tracking-widest">MCA Services</h4>
 <ul className="text-sm space-y-4 text-gray-400 font-bold">
 {MCA_DROPDOWN_LINKS.map(item => <li key={item.title} className="hover:text-[#C15F3C] cursor-pointer"><span>{item.title}</span></li>)}
 </ul>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>
 </main>

 <div className="mt-8"><DynamicPricingSection category="aoa-amendment" /></div>
 <FAQAccordion category="aoa-amendment" />
 <PopularSearches />
 <Footer />
 </div>
 );
}
