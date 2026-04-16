"use client";

/* eslint-disable @next/next/no-img-element */

import React, { useState } from "react";
import { ChevronRight, Star, Plus, CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import PopularSearches from "../components/PopularSearches";
import SidebarCart from "../components/SidebarCart";

const ASSETS = {
  logo: "/images/india-logo.jpg",
  hero: "/images/dpt3-hero.jpg",
  man: "/images/hero.webp",
  ledgers: "/images/ledgers.jpg",
  whatsapp: "/images/whatsapp.png",
  companyCompliance: "/images/company-compliance.jpg",
  cartIcon: "/images/cart.png",
  indiaFlag: "/images/india-flag.png",
};

export default function DPT3FilingPage() {
  const HERO_LIST = ["Onetime Loan Disclosure", "Return of Deposits", "Auditor Certificate Support"];

  const DOCUMENTS_REQUIRED = [
    "Auditor's Certificate (Mandatory for Deposits)",
    "List of Outstanding Loans & Receipts",
    "Board Resolution for Filing DPT-3",
    "Copy of Loan Agreements (Recommended)",
    "Provisional or Audited Balance Sheet Statement"
  ];

  return (
    <div className="min-h-screen bg-[#F4F3EE] text-slate-800">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-[#F4F3EE] py-4 font-bold border-b border-gray-100">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 text-sm text-gray-500">
          Home / MCA Services / <span className="text-amber-700 font-medium tracking-tight">DPT-3 Filing</span>
        </div>
      </div>

      <main className="max-w-[1240px] mx-auto px-4 sm:px-6 py-4">
        
        {/* Top Section: Flex Row for Main Content & Sidebar */}
        <div className="flex flex-col lg:flex-row gap-8 items-start mb-12">
          
          {/* Sidebar - Positioned FIRST in the DOM for mobile priority */}
          <aside className="w-full lg:w-80 space-y-6 order-1 lg:order-2">
             {/* 1. Cart comes FIRST and is Sticky */}
             <div className="lg:sticky lg:top-28 z-20">
                <SidebarCart />
             </div>

             {/* 2. Blogs/Guides come AFTER the cart */}
             <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm font-bold">
               <h4 className="font-bold text-slate-900 mb-5 text-[14px] border-b border-gray-50 pb-3 uppercase tracking-wider">Related Guides</h4>
               <ul className="text-[13px] space-y-4 text-amber-700">
                 {["Is DPT-3 Mandatory for OPC?", "What counts as a Deposit?", "Auditor Certificate for DPT-3"].map((item) => (
                   <li key={item} className="hover:text-amber-800 cursor-pointer flex gap-3 group items-center text-left">
                      <ChevronRight className="w-4 h-4 text-amber-600 group-hover:translate-x-1 transition-transform shrink-0" />
                      <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                   </li>
                 ))}
               </ul>
             </div>

             {/* 3. Image Ad */}
             <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 font-bold bg-white group">
                <img src={ASSETS.companyCompliance} alt="compliance" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="p-5 bg-white border-t border-gray-50">
                  <div className="text-[14px] text-slate-800 uppercase tracking-tight">Compliance Ad</div>
                  <div className="text-[11px] text-slate-400 mt-1 font-bold leading-none uppercase">Manage Company with AI</div>
                </div>
             </div>
          </aside>

          {/* Left Content Column - Positioned AFTER sidebar on mobile */}
          <div className="flex-1 space-y-12 overflow-hidden order-2 lg:order-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
               {/* Col 1: Hero Image Card */}
               <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm flex flex-col h-full overflow-hidden">
                  <div className="rounded-lg overflow-hidden border border-gray-100 flex-1 flex flex-col bg-white">
                    <div className="bg-[#9e4a2d] p-6 text-center">
                      <h2 className="text-white text-xl font-bold uppercase tracking-tight">DPT-3 FILING</h2>
                      <div className="mt-2 text-sm text-amber-100 uppercase font-bold tracking-widest text-[10px]">Return of Loans & Deposits</div>
                    </div>
                    <div className="bg-white p-8 flex justify-center items-center flex-1">
                      <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10 scale-110">
                        <img src={ASSETS.man} alt="DPT-3" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/5" />
                      </div>
                    </div>
                  </div>
                  <ul className="mt-4 text-[13px] space-y-2 text-gray-600 font-bold px-2 pb-2 text-left">
                    {HERO_LIST.map(s => (
                      <li key={s} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-amber-600/30 rounded-full" /> {s}
                      </li>
                    ))}
                    <li className="text-amber-700 underline hover:text-amber-800 cursor-pointer font-bold pl-3.5">Load More</li>
                  </ul>
                </div>

                {/* Col 2: Info Card */}
                <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col h-full">
                  <div className="flex items-center gap-1.5 bg-white border border-gray-100 rounded-full px-3 py-1 mb-2 w-fit shadow-sm">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">MCA COMPLIANCE</span>
                  </div>
                  <h1 className="text-2xl font-bold text-slate-900 mb-1 tracking-tight">DPT-3 Return of Deposits Filing</h1>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 ${i < 4 ? 'text-amber-500 fill-amber-500' : 'text-gray-200'}`} />)}
                    <span className="text-[11px] text-slate-400 font-medium ml-1">(1,842 reviews)</span>
                  </div>

                  <p className="text-[12px] text-slate-500 leading-relaxed mb-6 font-bold">
                    Mandatory annual filing to report borrowings, deposits and receipts of money as of 31st March. Ensure timely filing by 30th June to avoid heavy ROC penalties.
                  </p>

                  <div className="border-2 border-dashed border-amber-200/50 rounded-2xl p-6 bg-white relative mt-auto">
                    <div className="absolute -top-3 left-6 bg-white px-3 text-[10px] uppercase font-bold text-amber-700 rounded-full border border-amber-100 tracking-wider shadow-sm">DPT-3 Support</div>
                    
                    <div className="mb-4">
                       <div className="space-y-3 font-bold text-[13px] text-slate-600">
                          <div className="flex items-start gap-4">
                            <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" /> Preparation of Auditor-Certified DPT-3 Return
                          </div>
                          <div className="flex items-start gap-4">
                            <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" /> Professional ROC Filing & Acknowledgement
                          </div>
                       </div>
                    </div>
                    
                    <button className="mt-4 w-full bg-[#9e4a2d] text-white py-4 rounded-xl font-bold hover:shadow-lg transition-all shadow-md uppercase text-[12px] tracking-wide">ADD TO CART</button>
                  </div>

                  <div className="mt-8 flex flex-col gap-4 font-bold text-[11px] text-amber-700 border-t border-gray-50 pt-4">
                    <div className="flex items-center justify-between">
                      <span className="underline cursor-pointer">Terms and conditions</span>
                      <span className="underline cursor-pointer">Refer a Friend</span>
                    </div>
                    
                    <div className="space-y-3">
                      <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Offers and discounts</p>
                      <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-2xl bg-white shadow-sm group">
                        <img src={ASSETS.ledgers} alt="ledgers" className="w-10 h-10 object-contain rounded" />
                        <div>
                          <div className="text-[11px] font-bold text-slate-800 uppercase tracking-tight group-hover:text-amber-700 transition-colors">LEDGERS - Compliance Platform</div>
                          <div className="text-[10px] text-slate-400 font-bold leading-tight uppercase">Invoicing, GST Filing, Banking and Payroll</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-2xl bg-white shadow-sm border-l-4 border-l-amber-500">
                        <div className="w-10 h-10 bg-white rounded border border-gray-100 flex items-center justify-center font-bold text-amber-700 text-[10px] shadow-sm">GST</div>
                        <div>
                          <div className="text-[11px] font-bold text-slate-800 uppercase tracking-tight">Save 18% with GST Registration</div>
                          <div className="text-[10px] text-slate-400 font-bold leading-tight uppercase">Get GST eInvoice with Input Tax Credit</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>

            <article className="bg-white rounded-3xl border border-gray-100 p-10 shadow-sm leading-relaxed font-bold">
               <h2 className="text-2xl font-bold text-[#9e4a2d] mb-8 border-b border-gray-100 pb-5 text-center uppercase tracking-wide">
                  Guide to Form DPT-3 Filing (Return of Deposits)
               </h2>

               <div className="prose prose-sm max-w-none text-slate-600 space-y-6">
                  <p>
                   Form DPT-3 is a one-time and annual return that provides information about deposits and transactions not considered deposits as of 31st March of each year.
                  </p>
                  
                  <h3 className="text-xl font-bold text-slate-900 pt-4 uppercase tracking-tight">What is Form DPT-3?</h3>
                  <p>Form DPT-3 is used by companies in India to report details of deposits and receipts of money that are not classified as deposits under the Companies Act 2013.</p>

                  <h3 className="text-lg font-bold text-slate-900 pt-6 uppercase">Applicability of DPT-3</h3>
                  <div className="border-l-4 border-amber-600 pl-6 py-2 bg-white rounded-r-2xl font-bold text-slate-700 shadow-sm border border-gray-50 mb-6">
                    All companies including private limited, public limited, and OPCs must file DPT-3 if they have outstanding loans. Government companies and banking companies are generally exempt.
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 pt-8 uppercase underline">Categories of Reporting</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                     {[
                       "Onetime Return Disclosure",
                       "Return of Deposit",
                       "Particulars of transactions not considered as deposit",
                       "Both Return of Deposit and Particulars of transactions not considered as deposit"
                     ].map((item, idx) => (
                       <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-100 text-[13px] font-bold text-slate-700 shadow-sm">
                          <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" /> {item}
                       </div>
                     ))}
                  </div>
               </div>
            </article>

            {/* Documents Section */}
            <div className="bg-white rounded-3xl border border-gray-100 p-10 shadow-sm">
                <h3 className="text-xl font-bold text-[#9e4a2d] mb-8 border-b border-gray-100 pb-4 uppercase text-[16px] tracking-tight">Documents Required For DPT-3 Filing</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {DOCUMENTS_REQUIRED.map((doc, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-5 bg-white rounded-2xl border border-gray-100 font-bold group hover:border-amber-200 transition-colors shadow-sm">
                        <CheckCircle className="w-4 h-4 text-amber-600 shrink-0" />
                        <span className="text-sm text-slate-700 leading-tight">{doc}</span>
                    </div>
                ))}
                </div>
            </div>
          </div>
        </div>

        {/* FULL WIDTH FAQ INTEGRATION */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden mb-12">
            <FAQAccordion category="dpt-3-filing" />
        </div>

        {/* Popular Searches */}
        <div className="overflow-hidden pb-16">
          <PopularSearches />
        </div>

      </main>

      <Footer />
    </div>
  );
}
