"use client";

/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useState } from "react";
import { Search, Check, Plus, ChevronDown } from "lucide-react";
import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import PopularSearches from "../components/PopularSearches";
import SidebarCart from "../components/SidebarCart";

const ASSETS = {
 logo: "/images/india-logo.jpg",
 heroBg: "/images/hero.png",
 whatsapp: "/images/whatsapp.png",
 docsImg: "/images/business-docs.png",
 formsImg: "/images/business-forms.png",
 docsRequiredImg: "/images/business-docs-required.png",
 ledgersBadge: "/images/ledgers-badge.png",
 hrPeople: "/images/hr-payroll.png", // Fallback
};

const TOKEN = process.env.NEXT_PUBLIC_COCKPIT_API_KEY || "";
const CMS_URL = process.env.NEXT_PUBLIC_COCKPIT_URL || "";

export default function PfReturnFilingPage(): React.ReactElement {
 const [gstin, setGstin] = useState("");
 const [heroImage, setHeroImage] = useState<string>(ASSETS.hrPeople);

 const getImageUrl = (image: any) => {
    if (!image) return null;
    let path = "";
    if (typeof image === "string") {
      path = image;
    } else if (image && typeof image === "object" && image.path) {
      path = image.path;
    } else {
      return null;
    }
    if (!path) return null;
    if (path.startsWith("http")) return path;
    const base = CMS_URL.endsWith("/") ? CMS_URL.slice(0, -1) : CMS_URL;
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    return `${base}/storage/uploads${cleanPath}`;
 };

 useEffect(() => {
    async function fetchData() {
      try {
        const serviceRes = await fetch(`${CMS_URL}/api/content/items/service?token=${TOKEN}&filter=${encodeURIComponent(JSON.stringify({ name: "PF Return Filing" }))}`);
        const serviceData = await serviceRes.json();
        const entries = Array.isArray(serviceData) ? serviceData : (serviceData?.entries || []);
        if (entries.length > 0 && entries[0].image) {
          const url = getImageUrl(entries[0].image);
          if (url) setHeroImage(url);
        }
      } catch (error) {
        console.error("Data fetch error:", error);
      }
    }
    fetchData();
 }, []);

 return (
 <div className="min-h-screen bg-[#F4F3EE] text-gray-800 font-sans antialiased">
 <Navbar />

 <div className="py-3">
 <div className="max-w-[1180px] mx-auto px-6">
 <section
 aria-label="hero"
 className="relative rounded-[32px] overflow-hidden shadow-sm"
 style={{ minHeight: 420 }}
 >
 <div
 className="absolute inset-0 bg-center bg-no-repeat bg-cover"
 style={{ backgroundImage: `url(${ASSETS.heroBg})` }}
 >
 <div
 className="absolute inset-0"
 style={{
 background:
 "linear-gradient(90deg, rgba(2,6,23,0.95) 0%, rgba(2,6,23,0.75) 50%, rgba(0,0,0,0.3) 100%)",
 }}
 />
 </div>
 <div className="relative z-10 flex h-full items-center">
 <div className="mx-auto w-full px-6 py-12 flex flex-col md:flex-row items-center gap-12">
 <div className="flex-1 max-w-2xl">
 <div className="bg-white/5 border border-white/10 rounded-[32px] p-10 backdrop-blur-md">
 <div className="inline-flex items-center gap-2 bg-[#C15F3C]/20 border border-[#C15F3C]/30 rounded-full px-4 py-1.5 mb-6">
    <div className="w-2 h-2 bg-[#C15F3C] rounded-full animate-pulse" />
    <span className="text-xs font-bold text-white uppercase tracking-wider">Payroll Compliance</span>
 </div>
 <h1 className="text-white text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
 PF Return <br /><span className="text-[#C15F3C]">Filing</span>
 </h1>
 <p className="text-slate-200 text-lg mb-8 leading-relaxed italic opacity-90">
 File monthly PF returns, manage challans, and ensure 100% compliance
 using our expert Accountants & LEDGERS HR platform.
 </p>
 <form
 onSubmit={(e) => e.preventDefault()}
 className="flex flex-col sm:flex-row items-center gap-4"
 >
 <input
 aria-label="Enter GSTIN"
 placeholder="ENTER GSTIN / PAN"
 value={gstin}
 onChange={(e) => setGstin(e.target.value)}
 className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-[#C15F3C]/50 transition-all text-sm font-medium"
 />
 <button className="w-full sm:w-auto px-10 py-4 bg-[#C15F3C] text-white rounded-2xl font-extrabold hover:bg-[#A74A2F] transition-all shadow-xl shadow-[#C15F3C]/20 text-sm">
 Get Expert
 </button>
 </form>
 </div>
 </div>
 <div className="hidden md:flex w-full md:w-[420px] justify-end animate-float">
 <div className="relative">
 <img
 src={heroImage}
 alt="PF Filing"
 className="rounded-[32px] shadow-2xl border-4 border-white/10 max-h-[480px] object-contain"
 />
 </div>
 </div>
 </div>
 </div>
 </section>
 </div>
 </div>

 <div className="max-w-[1180px] mx-auto px-6 py-2">
 <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
 <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-10 h-10 rounded-full bg-orange-50 grid place-items-center text-[#C15F3C] font-bold">👥</div>
 <h3 className="font-bold mb-1 text-slate-800 uppercase text-xs tracking-wider">Dedicated Specialist</h3>
 </div>
 <p className="text-sm text-slate-500 italic">Specialized PF experts at a fraction of the cost of a full-time hire.</p>
 </div>
 <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-10 h-10 rounded-full bg-green-50 grid place-items-center text-green-600 font-bold">✔</div>
 <h3 className="font-bold mb-1 text-slate-800 uppercase text-xs tracking-wider">Timely Compliance</h3>
 </div>
 <p className="text-sm text-slate-500 italic">End-to-end preparation and filing to avoid interest and penal notices.</p>
 </div>
 <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-10 h-10 rounded-full bg-blue-50 grid place-items-center text-blue-600 font-bold">⚡</div>
 <h3 className="font-bold mb-1 text-slate-800 uppercase text-xs tracking-wider">Powered by LEDGERS</h3>
 </div>
 <p className="text-sm text-slate-500 italic">Automated bank feeds and secure HR document vault setup.</p>
 </div>
 </section>
 </div>

 <main className="max-w-[1180px] mx-auto px-6 py-4">
 <div className="flex flex-col lg:flex-row gap-8">
 <div className="flex-1 space-y-6">
 <section className="bg-white rounded-[40px] p-12 border border-slate-100 shadow-sm text-center">
 <h3 className="text-2xl font-black text-gray-900 mb-2 uppercase">Services Offered</h3>
 <p className="text-gray-400 font-bold mt-2 text-sm italic">Comprehensive PF accounting support for your business needs.</p>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 text-sm font-bold">
 {["Access to LEDGERS", "PF Return Filing", "Summary Reports", "Challan Generation", "UAN Management", "KYC Validation"].map((s, i) => (
 <div key={i} className="p-6 rounded-[24px] border border-gray-50 hover:border-amber-100 transition-all text-left bg-gray-50/50 group">
 <h4 className="font-black text-[#C15F3C] text-sm group-hover:text-gray-900 transition-colors uppercase tracking-tight">{s}</h4>
 <p className="mt-2 text-gray-400 text-xs italic font-medium leading-relaxed">Dedicated professional assistance for your compliance.</p>
 </div>
 ))}
 </div>
 </section>

 <section className="bg-white rounded-[40px] p-12 border border-slate-100 shadow-sm text-center">
 <h3 className="text-2xl font-black text-gray-900 mb-12 uppercase">How We Work</h3>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
 {[1, 2, 3].map((step) => (
 <div key={step} className="relative">
 <div className="mx-auto w-12 h-12 rounded-full bg-[#C15F3C] text-white flex items-center justify-center font-black mb-6 shadow-xl shadow-orange-900/20">
 {step}
 </div>
 <h4 className="font-black text-slate-900 mb-2 text-xs uppercase tracking-widest">Step {step}</h4>
 <p className="text-xs text-slate-500 font-bold italic leading-relaxed px-4">Streamlined onboarding and setup for 100% compliance coverage.</p>
 </div>
 ))}
 </div>
 </section>

 <section className="bg-white rounded-[40px] p-12 border border-slate-100 shadow-sm">
 <h3 className="text-2xl font-black text-gray-900 mb-8 uppercase">Detailed Guidelines</h3>
 <div className="space-y-8 text-sm text-slate-600 leading-relaxed font-bold">
 <p className="text-base italic bg-gray-50 p-6 rounded-2xl border-l-4 border-[#C15F3C]">
 Mandatory UAN validation ensuring PAN/Aadhaar details, challans, and employee-wise entries match to avoid rejections.
 </p>
 <div className="grid md:grid-cols-2 gap-8">
 <div className="p-8 bg-amber-50/10 rounded-[32px] border border-amber-100/50">
 <h4 className="font-black text-amber-900 mb-3 text-xs uppercase tracking-widest">Compliance Areas</h4>
 <p className="text-xs text-gray-500 leading-tight">Monthly ECR, Form 5, Form 10 filings, and UAN activation assistance.</p>
 </div>
 <div className="p-8 bg-amber-50/10 rounded-[32px] border border-amber-100/50">
 <h4 className="font-black text-amber-900 mb-3 text-xs uppercase tracking-widest">Platform Support</h4>
 <p className="text-xs text-gray-500 leading-tight">Audit-ready reports via LEDGERS and secure document vault for historical records.</p>
 </div>
 </div>
 </div>
 </section>
 </div>

 <aside className="lg:w-[400px]">
 <div className="sticky top-28">
 <SidebarCart />
 </div>
 </aside>
 </div>

 <div className="mt-8">
 <DynamicPricingSection category="pf-return-filing" />
 </div>
 </main>

 <FAQAccordion category="pf-return-filing" />
 <PopularSearches />
 <Footer />
 </div>
 );
}
