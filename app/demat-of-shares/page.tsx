"use client";


/* eslint-disable @next/next/no-img-element */

import React, { useState } from "react";
import { Star, Plus, CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import PopularSearches from "../components/PopularSearches";
import SidebarCart from "../components/SidebarCart";

const ASSETS = {
  logo: "/images/india-logo.jpg",
  hero: "/images/demat-hero.jpg",
  man: "/images/simplying-comiplance.jpg",
  ledgers: "/images/ledgers.jpg",
  whatsapp: "/images/whatsapp.png",
  companyCompliance: "/images/company-compliance.jpg",
  cartIcon: "/images/cart.png",
  indiaFlag: "/images/india-flag.png",
};

export default function DematerialisationPage() {
  return (
    <div className="min-h-screen bg-[#F4F3EE] text-slate-800">
      <Navbar />

      {/* Breadcrumb */}
      <div className="py-4 text-slate-800">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 text-sm text-gray-500 font-bold uppercase tracking-widest text-[10px]">
          Home / MCA Services / <span className="text-amber-700 font-medium">Dematerialisation of Shares</span>
        </div>
      </div>

      {/* Main Container: Persistent Sticky Sidebar */}
      <main className="max-w-[1240px] mx-auto px-4 sm:px-6 py-8 flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Left Section: All main content */}
        <section className="flex-1 space-y-12 overflow-hidden">
          
          {/* Header Block: 2-Col Hero Area */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
             {/* Col 1: Hero Image Card */}
             <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-lg flex flex-col h-full overflow-hidden">
               <div className="rounded-lg overflow-hidden border border-gray-200 flex-1 flex flex-col">
                <div className="bg-[#9e4a2d] p-6 text-center">
                  <h2 className="text-white text-xl font-bold uppercase">DEMATERIALISATION</h2>
                  <div className="mt-2 text-sm text-amber-100 uppercase font-bold">Secure electronic shareholding</div>
                </div>
                <div className="bg-[rgb(243,246,249)] p-8 flex justify-center items-center flex-1">
                   <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10 scale-110">
                      <img src={ASSETS.man} alt="Demat Shares" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/5" />
                   </div>
                </div>
              </div>
              <ul className="mt-4 text-[13px] space-y-2 text-gray-600 font-bold px-2 pb-2">
                {["ISIN Activation", "RTA Appointment", "Depository Connectivity"].map(s => (
                  <li key={s} className="hover:text-amber-700 transition-colors flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-600/30 rounded-full" /> {s}
                  </li>
                ))}
                <li className="text-amber-700 underline hover:text-amber-800 cursor-pointer font-bold pl-3.5">Load More</li>
              </ul>
            </div>

            {/* Col 2: Info Card */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg flex flex-col h-full">
               <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 mb-2 w-fit">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
                    <span className="text-[10px] font-bold text-amber-700 uppercase tracking-widest">MCA COMPLIANCE</span>
               </div>
               <h1 className="text-2xl font-bold text-slate-900 mb-1 leading-tight">Dematerialisation of Shares (Rule 9B)</h1>
               <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />)}
                  <span className="text-[11px] text-slate-400 ml-1">(2,709 reviews)</span>
               </div>

               <p className="text-[14px] text-slate-500 leading-relaxed mb-6 font-bold">
                 Convert physical certificates into secure digital format. Mandatory for most private companies by Sep 2024. Expert support for ISIN, RTA and conversion.
               </p>

               <div className="border-2 border-dashed border-amber-200 rounded-xl p-5 bg-amber-50/10 relative mt-auto">
                  <div className="absolute -top-3 left-4 bg-white px-2 text-[10px] uppercase font-bold text-amber-700 rounded border border-amber-200 tracking-wider">Expert Compliance</div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-2 text-[13px] text-slate-600 font-bold">
                      <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" /> ISIN Setup & Depository Agreement
                    </li>
                    <li className="flex items-start gap-2 text-[13px] text-slate-600 font-bold">
                      <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" /> Application to RTA & Final Demat
                    </li>
                  </ul>
                  <button className="mt-5 w-full bg-[#9e4a2d] text-white py-3 rounded-lg font-bold hover:bg-[#8b4127] transition-all shadow-md uppercase text-sm tracking-wide">ADD TO CART</button>
               </div>
            </div>
          </div>

          <div className="space-y-6">
            <article className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#9e4a2d] mb-6 border-b border-gray-50 pb-4 text-center uppercase tracking-wider">
                Dematerialisation of Shares Guide
              </h2>

              <div className="prose prose-sm max-w-none text-slate-600 space-y-8 leading-relaxed font-bold">
                <p>
                  Dematerialisation is the process of transferring physical shares into a digital account, known as a Demat account, which simplifies managing and trading shares. Converting physical shares to Demat enhances security, reducing the risks associated with physical shares like loss or theft. It also makes trading faster and more efficient and simplifies share management. Previously required mainly for public companies, the dematerialisation process is now mandatory for private limited companies (except small companies).
                </p>

                <p className="text-amber-800 text-center text-lg font-black border-y border-amber-100 py-4 uppercase tracking-tighter">
                  Convert Your Physical Shares to Demat with DoStartup – Get Started Now!
                </p>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 uppercase underline decoration-amber-500 underline-offset-8 decoration-2">What is Dematerialisation of shares?</h3>
                  <p>Dematerialisation refers to the process of converting physical securities, such as share certificates and other documents, into electronic format. These securities are then held in a demat account.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4 border-b border-gray-50 pb-8">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3 uppercase text-xs tracking-widest border-b pb-2">Depositories in India</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• NSDL (National Securities Depository Ltd.)</li>
                      <li>• CDSL (Central Depository Services (India) Ltd.)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3 uppercase text-xs tracking-widest border-b pb-2">Rule 9B Mandate</h4>
                    <p className="text-[12px] leading-relaxed font-medium">Mandated for private limited companies (except small companies) to ensure shares are issued and held in dematerialised form.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 uppercase">Dematerialisation of Shares of Private Companies</h3>
                  <p>In October 2023, the MCA introduced an amendment (Rule 9B) requiring private limited companies, except small companies, to dematerialise their securities. This involves issuing shares in electronic form and converting existing physical shares to Demat.</p>
                </div>

                <div className="space-y-4 pt-6 border-t border-gray-50">
                  <h3 className="text-lg font-bold text-slate-900 uppercase">MCA&apos;s Rule 9B Overview</h3>
                  <p>Rule 9B requires private companies (except small companies) to ensure shares are issued and held in dematerialised form. Companies must convert physical share certificates into electronic holdings and ensure promoters/key managerial personnel have dematerialised their shareholdings.</p>
                  
                  <div className="mt-4 pt-4">
                    <h4 className="font-bold text-slate-900 mb-2 text-sm uppercase">Applicability</h4>
                    <p className="text-slate-500">Dematerialisation applies to public and private companies (subject to exceptions). Holding and subsidiary companies are required to dematerialise regardless of small-company thresholds.</p>
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t border-gray-50">
                  <h3 className="text-lg font-bold text-slate-900 uppercase">Requirements to Comply</h3>
                  <ul className="space-y-3 pl-4">
                    {[
                      "Amend Articles of Association (AoA) to allow dematerialised holdings",
                      "Appoint a Registrar & Transfer Agent (RTA)",
                      "Obtain ISINs for each security type",
                      "Open Demat accounts for shareholders with a Depository Participant (DP)",
                      "File required returns (e.g., PAS-6) and coordinate with the RTA for conversion"
                    ].map((req, i) => (
                      <li key={i} className="flex gap-2 items-start text-[13px]">
                        <span className="text-amber-600 font-black shrink-0">✔</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="py-6 px-4 border border-slate-100 rounded-lg">
                  <h3 className="text-lg font-bold text-slate-900 uppercase mb-3">Last Date for Dematerialisation</h3>
                  <p className="text-slate-500 leading-relaxed font-medium">
                    The deadline depends on the company&apos;s financial year-end. For companies with FY ending March 31, 2023, the deadline was **September 30, 2024** (18 months). Other companies have an 18-month window from their relevant financial year-end.
                  </p>
                </div>

                <div className="space-y-4 pt-6 border-t border-gray-50">
                  <h3 className="text-lg font-bold text-slate-900 uppercase">How to Convert Physical Shares into Demat?</h3>
                  <ol className="space-y-4 list-decimal pl-5">
                    {[
                      { t: "Open Demat account with a Depository Participant (DP).", d: "" },
                      { t: "Submit a Dematerialisation Request Form (DRF) to your DP with the physical certificates.", d: "" },
                      { t: "DP verifies and forwards the request to the company's RTA.", d: "" },
                      { t: "RTA validates and approves conversion; physical certificates are cancelled and electronic credits are made to the Demat account.", d: "" },
                      { t: "You receive Dematerialisation Request Number (DRN) and the shares are credited to your Demat account.", d: "" }
                    ].map((step, i) => (
                      <li key={i} className="pl-2">
                        <span className="text-slate-700">{step.t}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="pt-6 border-t border-gray-50">
                  <h3 className="text-lg font-bold text-red-700 uppercase mb-2">Penalties for Non-Compliance</h3>
                  <p className="text-slate-500 text-sm font-medium">Failure to dematerialise as required may lead to restrictions on securities transactions, limitations on shareholder rights, monetary fines for the company and officers in default, and other regulatory actions.</p>
                </div>

                <div className="pt-6 text-center italic border-t border-slate-100 text-slate-400 font-medium">
                  Why demat? Demat ensures security, faster transactions, automatic corporate action updates and easier compliance — all reasons regulators are pushing for wide adoption.
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Global Sidebar: Persistent Sticky Content */}
        <aside className="lg:w-80 flex-shrink-0 space-y-6">
           <div className="sticky top-28 space-y-6">
              <SidebarCart />
              
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm font-bold">
                <h4 className="font-bold text-slate-900 mb-5 text-[14px] border-b pb-3 uppercase tracking-wider">Related Guides</h4>
                <ul className="text-[13px] space-y-4 text-amber-700">
                  {["Rule 9B Detailed Overview", "NSDL vs CDSL Comparison", "Appointing an RTA Guide", "Share Transfer in Demat"].map((item) => (
                    <li key={item} className="hover:text-amber-800 cursor-pointer flex gap-3 group items-center">
                       <div className="w-1.5 h-1.5 bg-amber-600/50 rounded-full group-hover:scale-125 transition-transform" />
                       <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:scale-[1.02] transition-transform font-bold">
                <img src={ASSETS.companyCompliance} alt="compliance" className="w-full h-auto object-cover" />
                <div className="p-5 bg-white">
                    <div className="text-[14px] text-slate-800 uppercase">Corporate Compliance</div>
                    <div className="text-[11px] text-slate-400 mt-1 font-bold">Stay ahead of ROC deadlines</div>
                </div>
              </div>
           </div>
        </aside>
      </main>

      <DynamicPricingSection category="demat-of-shares" />
      <FAQAccordion category="demat-of-shares" />
      <PopularSearches />
      <Footer />

      {/* WhatsApp CTA */}
      <div className="fixed right-6 bottom-6 bg-gradient-to-r from-[#9e4a2d] to-[#8b4127] text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 z-50 hover:scale-105 transition-all cursor-pointer group">
        <img src={ASSETS.whatsapp} alt="wa" className="w-6 h-6" />
        <span className="font-bold text-[15px]">Expert Chat</span>
      </div>
    </div>
  );
}
