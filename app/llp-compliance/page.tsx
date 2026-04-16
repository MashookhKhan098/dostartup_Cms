"use client";

/* eslint-disable @next/next/no-img-element */

import React, { useState } from "react";
import { ChevronRight, ShoppingBag, Star, Plus, CheckCircle, ShoppingCart } from "lucide-react";
import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import PopularSearches from "../components/PopularSearches";
import SidebarCart from "../components/SidebarCart";

const ASSETS = {
  logo: "/images/india-logo.jpg",
  heroImage: "/images/llp-hero.jpg",
  man: "/images/company-compliance.jpg",
  ledgers: "/images/ledgers.jpg",
  whatsapp: "/images/whatsapp.png",
  companyCompliance: "/images/company-compliance.jpg",
};

export default function LLPCompliancePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#F4F3EE] text-slate-800">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-[#F4F3EE] py-3 text-slate-800 border-b border-slate-100 font-bold">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 text-sm text-gray-500">
          Home / MCA Services / <span className="text-amber-700 font-medium">LLP Compliance</span>
        </div>
      </div>

      {/* Main Container */}
      <main className="max-w-[1240px] mx-auto px-4 sm:px-6 py-8 flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Left Section */}
        <section className="flex-1 space-y-12 overflow-hidden">
          
          <div className="grid grid-cols-1 gap-6 items-stretch">
            {/* Info Card */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg flex flex-col h-full">
               <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 mb-2 w-fit">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
                    <span className="text-[10px] font-bold text-amber-700 uppercase tracking-widest">MCA & TAX</span>
               </div>
               <h1 className="text-2xl font-bold text-slate-900 mb-1 leading-tight">Simple, end-to-end LLP bookkeeping and compliance</h1>
               <p className="text-[14px] text-slate-500 leading-relaxed mb-6 font-bold">
                 Stay on top of all ROC and Income Tax deadlines for your Limited Liability Partnership with LEDGERS platform and a dedicated compliance team.
               </p>

               <div className="border-2 border-dashed border-amber-200 rounded-xl p-5 bg-amber-50/10 relative mt-auto">
                  <div className="absolute -top-3 left-4 bg-[#F4F3EE] px-2 text-[10px] uppercase font-bold text-amber-700 rounded border border-amber-200 tracking-wider">Expert Help</div>
                  <ul className="space-y-3 mt-1">
                    <li className="flex items-start gap-2 text-[13px] text-slate-600 font-bold">
                      <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" /> Pick the right plan for your LLP
                    </li>
                    <li className="flex items-start gap-2 text-[13px] text-slate-600 font-bold">
                      <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" /> Avoid penalties, delays and strike-off risk
                    </li>
                  </ul>
                  <button className="mt-4 w-full bg-[#9e4a2d] text-white py-3 rounded-lg font-bold hover:bg-[#8b4127] transition-all shadow-md uppercase text-sm tracking-wide">Get Started</button>
               </div>
            </div>
          </div>

          <div className="space-y-12">
             {/* Feature Sections */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                   <h3 className="text-sm font-bold text-[#9e4a2d] mb-3 uppercase tracking-widest border-b border-amber-100 pb-2">Dedicated LLP compliance team</h3>
                   <p className="text-[13px] text-slate-500 font-bold leading-relaxed">Work with professionals who understand LLP structures, partner obligations and ROC rules so that nothing is missed and partners can focus on running the business.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                   <h3 className="text-sm font-bold text-[#9e4a2d] mb-3 uppercase tracking-widest border-b border-amber-100 pb-2">On-time ROC and tax filings</h3>
                   <p className="text-[13px] text-slate-500 font-bold leading-relaxed">Automated reminders and a clear compliance calendar keep Form 8, Form 11 and Income Tax filings on schedule, avoiding penalties and late fees.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                   <h3 className="text-sm font-bold text-[#9e4a2d] mb-3 uppercase tracking-widest border-b border-amber-100 pb-2">Powered by LEDGERS</h3>
                   <p className="text-[13px] text-slate-500 font-bold leading-relaxed">Use LEDGERS for real-time bookkeeping, reconciliations, document storage and partner reports, giving complete visibility into your LLP finances.</p>
                </div>
             </div>
          </div>
        </section>

        {/* Sidebar */}
        <aside className="lg:w-80 flex-shrink-0 space-y-6">
           <div className="sticky top-28 space-y-6">
              
              {/* LLP COMPLIANCE Banner */}
              <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-lg flex flex-col overflow-hidden">
                <div className="rounded-lg overflow-hidden border border-gray-200 flex-1 flex flex-col">
                  <div className="bg-[#9e4a2d] p-6 text-center">
                    <h2 className="text-white text-xl font-bold uppercase">LLP COMPLIANCE</h2>
                    <div className="mt-2 text-sm text-amber-100 uppercase font-bold tracking-tight">Dedicated compliance team</div>
                  </div>
                  <div className="bg-[rgb(243,246,249)] p-8 flex justify-center items-center flex-1">
                     <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10 scale-110">
                        <img src="/images/company-compliance.jpg" alt="LLP Compliance" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/5" />
                     </div>
                  </div>
                </div>
                <ul className="mt-4 text-[13px] space-y-2 text-gray-600 font-bold px-2 pb-2">
                  {["Form 8 & 11 Filings", "Income Tax Filing", "Accounting & Bookkeeping"].map(s => (
                    <li key={s} className="hover:text-amber-700 transition-colors flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-600/30 rounded-full" /> {s}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-[#9e4a2d] p-6 rounded-2xl text-white shadow-xl text-center font-bold">
                 <div className="text-sm font-bold uppercase tracking-widest mb-2">Need Help?</div>
                 <p className="text-xs opacity-90 leading-tight">Our experts are here to help you stay compliant.</p>
              </div>
           </div>
        </aside>
      </main>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 mb-12">
        <DynamicPricingSection category="llp-compliance" />
      </div>

      <FAQAccordion category="llp-compliance" title="FAQs for LLP Compliance" />

      <PopularSearches />
      <Footer />

      {/* Floating CTA */}
      <div className="fixed right-6 bottom-6 flex flex-col gap-4 z-50">
         <div className="bg-gradient-to-r from-[#9e4a2d] to-[#8b4127] text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:scale-105 transition-all cursor-pointer group">
            <img src={ASSETS.whatsapp} alt="wa" className="w-6 h-6" />
            <span className="font-bold text-[15px]">Expert Chat</span>
         </div>
      </div>
    </div>
  );
}
