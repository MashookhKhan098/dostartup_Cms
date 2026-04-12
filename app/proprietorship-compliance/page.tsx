"use client";

/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useState } from "react";
import { ChevronRight, Star, Shield, Clock, Users, X } from "lucide-react";
import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import Footer from "../components/Footer";
import FAQAccordion from "../components/Faq";
import PopularSearches from "../components/PopularSearches";

const ASSETS = {
 logo: "/images/india-logo.jpg",
 heroBg: "/images/hero.png",
 whatsapp: "/images/whatsapp.png",
 ledgersBadge: "/images/ledgers-badge.png",
 hrPeople: "/images/hr-payroll.png", // Fallback
};

const TOKEN = process.env.NEXT_PUBLIC_COCKPIT_API_KEY || "";
const CMS_URL = process.env.NEXT_PUBLIC_COCKPIT_URL || "";

export default function ProprietorshipCompliancePage(): React.ReactElement {
 const [gstin, setGstin] = useState("");
 const [showPaymentModal, setShowPaymentModal] = useState(false);
 const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
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
        const serviceRes = await fetch(`${CMS_URL}/api/content/items/service?token=${TOKEN}&filter=${encodeURIComponent(JSON.stringify({ name: "Proprietorship Compliance" }))}`);
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
 <div className="min-h-screen bg-[#F4F3EE] font-sans">
 <Navbar />

 {/* Breadcrumb */}
 <div className="bg-[#F4F3EE] border-b border-gray-200 py-3">
 <div className="max-w-[1180px] mx-auto px-6">
 <div className="flex items-center text-sm text-gray-500 font-bold uppercase tracking-widest">
 <span>Home</span>
 <ChevronRight className="w-3 h-3 mx-2" />
 <span>Services</span>
 <ChevronRight className="w-3 h-3 mx-2" />
 <span className="text-[#C15F3C]">Proprietorship Compliance</span>
 </div>
 </div>
 </div>

 {/* Hero Section */}
 <div className="py-2">
 <div className="max-w-[1180px] mx-auto px-6">
 <section className="relative rounded-[32px] overflow-hidden shadow-lg bg-gradient-to-r from-[#C15F3C] to-[#A74A2F] min-h-[300px] border border-orange-900/10">
 <div className="absolute inset-0 bg-black/5 opacity-50"></div>
 
 <div className="relative z-10 flex h-full items-center">
 <div className="mx-auto w-full px-8 py-12 flex flex-col md:flex-row items-center gap-12">
 <div className="flex-1 max-w-2xl">
 <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[32px] p-8 md:p-12 shadow-2xl">
 <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 mb-6 border border-white/10">
 <Star className="w-4 h-4 text-white fill-current animate-pulse" />
 <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Proprietorship Compliance</span>
 </div>
 
 <h1 className="text-white text-4xl lg:text-5xl font-black mb-6 leading-tight tracking-tighter uppercase">
 Proprietorship <br />Compliance
 </h1>
 <p className="text-amber-50 text-lg mb-10 leading-relaxed font-bold italic opacity-90">
 File GST & IT returns, handle financial statement
 preparation, and manage all monthly and annual compliances
 effortlessly using our Accountants & LEDGERS platform.
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
 className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-white/50 transition-all font-bold"
 />
 <button className="w-full sm:w-auto px-10 py-4 bg-white text-[#C15F3C] rounded-2xl font-black hover:bg-[#F4F3EE] hover:scale-105 active:scale-95 transition-all shadow-2xl uppercase text-xs tracking-widest">
 Get Expert
 </button>
 </form>
 </div>
 </div>

 <div className="hidden md:flex w-full md:w-[440px] justify-end animate-float">
 <div className="relative">
 <img
 src={heroImage}
 alt="Compliance"
 className="rounded-[40px] shadow-2xl border-8 border-white/5 object-contain max-h-[500px]"
 />
 </div>
 </div>
 </div>
 </div>
 </section>
 </div>
 </div>

 {/* Feature Cards */}
 <div className="max-w-[1180px] mx-auto px-6 py-8">
 <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
 <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
 <div className="w-14 h-14 bg-[#FDF1EC] rounded-2xl flex items-center justify-center mb-6">
 <Users className="w-7 h-7 text-[#C15F3C]" />
 </div>
 <h3 className="font-black text-gray-900 mb-3 uppercase text-xs tracking-widest">Dedicated Professionals</h3>
 <p className="text-sm text-gray-400 leading-relaxed font-bold italic">Experienced accountants to manage monthly bookkeeping, GST/IT filings, reconciliations and monthly close.</p>
 </div>

 <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
 <div className="w-14 h-14 bg-[#FDF1EC] rounded-2xl flex items-center justify-center mb-6">
 <Clock className="w-7 h-7 text-[#C15F3C]" />
 </div>
 <h3 className="font-black text-gray-900 mb-3 uppercase text-xs tracking-widest">Timely Returns</h3>
 <p className="text-sm text-gray-400 leading-relaxed font-bold italic">End-to-end preparation and filing of GST, Income Tax with due-date tracking and timely reviews.</p>
 </div>

 <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
 <div className="w-14 h-14 bg-[#FDF1EC] rounded-2xl flex items-center justify-center mb-6">
 <Shield className="w-7 h-7 text-[#C15F3C]" />
 </div>
 <h3 className="font-black text-gray-900 mb-3 uppercase text-xs tracking-widest">LEDGERS Powered</h3>
 <p className="text-sm text-gray-400 leading-relaxed font-bold italic">Automated bank feeds and reconciliations, e-invoice/e-way bill, document vault, and audit-ready reports.</p>
 </div>
 </section>
 </div>

 <main className="max-w-[1180px] mx-auto px-6 py-2 space-y-8 pb-16">

 {/* Services Offered */}
 <section className="bg-white rounded-[40px] shadow-sm border border-gray-100 p-12">
 <h3 className="text-3xl font-black text-gray-900 mb-3 text-center uppercase tracking-tighter">Services Offered</h3>
 <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12 text-sm font-bold italic">
 We provide comprehensive accounting support tailored to meet the day-to-day financial needs of your business
 </p>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {[
 "Access to LEDGERS",
 "GST Return Filing",
 "Financial Statements",
 "Income Tax Return",
 "E-Invoicing Support",
 "CA Assistance"
 ].map((service, index) => (
 <div key={index} className="p-8 rounded-[32px] border border-gray-50 hover:bg-[#FDF1EC]/5 transition-all group">
 <h4 className="font-black text-[#C15F3C] mb-2 uppercase text-xs tracking-widest group-hover:text-gray-900">{service}</h4>
 <p className="text-xs text-gray-400 font-bold italic leading-relaxed">
 Professional expert guidance and end-to-end support.
 </p>
 </div>
 ))}
 </div>
 </section>

 {/* Partnership Tax Return Filing (Technical Content Preservation) */}
 <section className="bg-white rounded-[40px] shadow-sm border border-gray-100 p-12 overflow-hidden relative">
 <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-[100px] -mr-32 -mt-32 opacity-30" />
 <h3 className="text-2xl font-black text-[#C15F3C] mb-8 uppercase tracking-tighter">
 Partnership Tax Return Filing
 </h3>
 <p className="text-base text-gray-500 font-bold leading-relaxed mb-10 max-w-4xl italic">
 Operating a Partnership Firm in India involves a range of crucial financial and legal responsibilities. It is imperative to adhere to various tax and regulatory requirements to ensure the smooth functioning and growth of your business. These obligations encompass filing Income Tax Returns, TDS Returns, GST Returns, EPF Returns, and occasionally undergoing a Tax Audit if thresholds are exceeded.
 </p>

 <div className="grid md:grid-cols-2 gap-12">
 <div className="space-y-6">
 <h4 className="font-black text-gray-900 uppercase text-xs tracking-widest border-l-4 border-[#C15F3C] pl-4">Income Tax Filing</h4>
 <p className="text-sm text-gray-500 leading-relaxed font-bold">
 Every partnership firm in India is obligated to file income tax returns annually, regardless of whether the firm has generated income or incurred losses during the financial year.
 </p>
 </div>

 <div className="space-y-6">
 <h4 className="font-black text-gray-900 uppercase text-xs tracking-widest border-l-4 border-gray-100 pl-4">Tax Slabs 2023-24</h4>
 <p className="text-sm text-gray-500 leading-relaxed font-bold">
 Under the provisions of the Income Tax Act 1961, a partnership firm in India is subject to the partnership firm tax rate of 30% on taxable income.
 </p>
 </div>
 </div>
 </section>

 {/* Related Guides */}
 <section className="bg-white rounded-[40px] shadow-sm border border-gray-100 p-12">
 <h3 className="text-xs font-black text-gray-400 mb-8 uppercase tracking-[0.2em] border-b border-gray-50 pb-4">Related Compliance Guides</h3>
 <div className="flex flex-wrap gap-4">
 {[
 "ITR 5 Form", 
 "What is a partnership firm?", 
 "GST returns for Partnership", 
 "Compliance FAQ"
 ].map((guide, index) => (
 <a key={index} className="px-8 py-3.5 border-2 border-gray-50 rounded-2xl text-[11px] font-black text-gray-400 hover:border-[#C15F3C] hover:text-[#C15F3C] hover:bg-orange-50/10 transition-all cursor-pointer uppercase tracking-widest">
 {guide}
 </a>
 ))}
 </div>
 </section>

 <div className="pt-4">
 <DynamicPricingSection category="proprietorship-compliance" />
 </div>
 </main>

 <FAQAccordion category="proprietorship-compliance" />
 <PopularSearches />
 <Footer />

 {/* WhatsApp CTA */}
 <button 
 onClick={() => window.open('https://wa.me/yournumber', '_blank')}
 className="fixed right-8 bottom-8 bg-[#C15F3C] text-white p-5 rounded-full shadow-2xl hover:bg-[#A74A2F] transition-all hover:scale-110 z-50 border-4 border-white/20"
 >
 <img src={ASSETS.whatsapp} alt="WhatsApp" className="w-8 h-8" />
 </button>

 {/* Payment Modal */}
 {showPaymentModal && (
 <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
 <div className="bg-white rounded-[40px] max-w-md w-full p-10 shadow-2xl border border-gray-100">
 <div className="flex justify-between items-center mb-8">
 <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight">Checkout</h3>
 <button onClick={() => setShowPaymentModal(false)} className="hover:bg-gray-100 p-2 rounded-full transition-colors">
 <X className="w-6 h-6 text-gray-400" />
 </button>
 </div>
 <p className="text-gray-400 mb-8 font-bold italic">Selected Plan: <span className="text-[#C15F3C] uppercase">{selectedPlan}</span></p>
 <button className="w-full bg-[#C15F3C] text-white py-5 rounded-2xl font-black hover:bg-[#A74A2F] transition-all shadow-xl shadow-orange-900/15 uppercase text-xs tracking-widest">Complete Purchase</button>
 </div>
 </div>
 ) }
 </div>
 );
}
