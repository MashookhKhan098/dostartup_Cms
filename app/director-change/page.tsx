"use client";

import React, { useState } from "react";
import { ChevronRight, ShoppingBag, Star, Plus, CheckCircle, Search } from "lucide-react";
import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import SidebarCart from "../components/SidebarCart";
import Footer from "../components/Footer";
import PopularSearches from "../components/PopularSearches";

export default function AppointmentOfDirectorPage() {
  const [gstChecked, setGstChecked] = useState(false);

  const ASSETS = {
    logo: "/images/india-logo.jpg",
    hero: "/images/hero.png",
    remove: "/images/remove.png",
    ad: "/images/company-compliance.jpg",
    whatsapp: "/images/whatsapp.png",
    cartIcon: "/images/cart-icon.svg",
    indiaFlag: "/images/india-flag.png",
    ledgers: "https://img.dostartup.com/catalog/ledgers.png",
  };

  return (
    <div className="min-h-screen bg-[#F4F3EE] font-sans text-gray-800">
      <Navbar />

      {/* Breadcrumb - Background matched to Navbar */}
      <div className="bg-[#F4F3EE] py-4 font-bold border-b border-gray-100">
        <div className="max-w-[1240px] mx-auto px-6 text-sm text-gray-500">
          Home / MCA Services / <span className="text-amber-700 font-medium tracking-tight">Appointment of Director</span>
        </div>
      </div>

      <main className="max-w-[1240px] mx-auto px-6 py-6 font-bold">
        
        {/* Dynamic Pricing Integration - Pure White Box */}
        <div className="mt-8 rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-white">
           <DynamicPricingSection category="director-change" />
        </div>

        {/* REORDERED GRID: Sidebar FIRST for mobile priority */}
        <div className="flex flex-col lg:flex-row gap-8 mt-12 items-start">
          
          {/* Sidebar - Priority 1 on Mobile */}
          <aside className="w-full lg:w-[380px] space-y-8 flex-shrink-0 order-1 lg:order-2">
            {/* ONLY the Cart is Sticky */}
            <div className="lg:sticky lg:top-28 z-20">
              <SidebarCart />
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-6 text-[14px] uppercase tracking-widest flex items-center gap-2">
                 <Search className="w-4 h-4 text-amber-600" /> Related Guides
              </h4>
              <ul className="space-y-4">
                {[
                  "DIN Number Registration",
                  "Articles of Association (AOA)",
                  "Annual General Meeting Guide",
                  "Types of Directors",
                  "Form DIR-12 Process"
                ].map((item) => (
                  <li key={item} className="flex items-center justify-between group cursor-pointer border-b border-gray-50 pb-3 hover:border-amber-200 transition-colors text-left">
                     <span className="text-[13px] font-bold text-gray-500 group-hover:text-amber-700 transition-colors">{item}</span>
                     <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative group overflow-hidden rounded-3xl shadow-md border border-gray-100 bg-white">
              <img src={ASSETS.ad} alt="compliance" className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                 <p className="text-white font-bold uppercase text-sm tracking-tight">MCA Compliance</p>
                 <p className="text-white/80 text-[11px] font-medium mt-1 leading-none uppercase tracking-wide">Automatic monitoring of director status</p>
              </div>
            </div>
          </aside>

          {/* Main Article - Priority 2 on Mobile */}
          <div className="flex-1 space-y-12 order-2 lg:order-1 overflow-hidden">
            <article className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                   <div className="w-1.5 h-8 bg-amber-600 rounded-full" />
                   <h2 className="text-2xl font-bold text-slate-900 tracking-tight uppercase">
                      Addition of New Directors
                   </h2>
              </div>

              <div className="prose prose-sm max-w-none text-gray-600 space-y-8 leading-relaxed">
                <p className="text-[15px] leading-relaxed">
                  In a Private Limited Company, directors are pivotal to the business's seamless operation and strategic direction, managing daily activities and making crucial decisions that affect the company's future. As businesses evolve and expand, a need may arise to appoint additional directors to meet growing demands or to satisfy shareholder expectations.
                </p>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 italic text-slate-800 text-[14px] shadow-sm">
                   "A director serves as a key figure appointed by shareholders to oversee the company's operations, in alignment with the guidelines set out in the MOA and AOA."
                </div>

                <div className="grid md:grid-cols-2 gap-8 pt-4">
                  <div className="space-y-4">
                     <h4 className="font-bold text-slate-900 uppercase text-[13px] tracking-wider">Executive Directors</h4>
                     <p className="text-sm">Involved in routines operations typically occupying specific executive positions like CEO, CFO, or COO.</p>
                  </div>
                  <div className="space-y-4">
                     <h4 className="font-bold text-slate-900 uppercase text-[13px] tracking-wider">Non-Executive</h4>
                     <p className="text-sm">Provide objective oversight and strategic direction without partake in daily management.</p>
                  </div>
                </div>

                <div className="pt-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-6 uppercase tracking-tight">Key Statutory Sections</h3>
                  <div className="space-y-4">
                    {["Section 149: Board composition requirements", "Section 152: Appointment procedure and DIN", "Section 161: Appointment of additional directors", "Section 164: Condition of disqualification"].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 text-[14px] text-gray-700 border-b border-gray-50 pb-3 last:border-0 hover:translate-x-1 transition-transform cursor-default">
                           <div className="w-2 h-2 rounded-full bg-amber-500 shrink-0" /> {item}
                        </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <h3 className="text-lg font-bold text-slate-900 mb-6 uppercase tracking-tight">Documents Required</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                     {["PAN Card", "Aadhaar / Voter ID / DL", "Residential Proof", "Passport Photograph", "Digital Signature Certificate (DSC)"].map((doc, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-100 text-[13px] font-bold text-slate-700 shadow-sm">
                           <CheckCircle className="w-4 h-4 text-amber-600 shrink-0" /> {doc}
                        </div>
                     ))}
                  </div>
                </div>
              </div>
            </article>

            {/* Expansive FAQ Section - Pure White */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden mt-12">
                <FAQAccordion category="director-change" />
            </div>
          </div>
        </div>

        {/* Popular Searches Integration */}
        <div className="mt-12 overflow-hidden pb-16">
            <PopularSearches />
        </div>
      </main>

      <Footer />

      {/* Support CTA */}
      <div className="fixed right-6 bottom-6 bg-[#C15F3C] text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 z-50 hover:bg-amber-800 group transition-all cursor-pointer">
        <img src={ASSETS.whatsapp} alt="wa" className="w-6 h-6" />
        <span className="font-bold text-[14px] tracking-tight">Expert Consultation</span>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow-sm" />
      </div>
    </div>
  );
}
