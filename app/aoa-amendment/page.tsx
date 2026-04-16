"use client";

/* eslint-disable @next/next/no-img-element */

import React, { useMemo, useState } from "react";
import { Star, Check, MessageCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import SidebarCart from "../components/SidebarCart";
import Footer from "../components/Footer";
import PopularSearches from "../components/PopularSearches";

const ASSETS = {
  logo: "/images/india-logo.jpg",
  hero: "/images/compilance.jpg",
  ledgers: "/images/ledgers.jpg",
  whatsapp: "/images/whatsapp.png",
  companyCompliance: "/images/company-compliance.jpg",
  dinEkyc: "/images/din.jpg",
  mcaHero: "/images/simplying-comiplance.jpg",
};

const MCA_DROPDOWN_LINKS = [
  { title: "Company Compliance", href: "/company-compliance" },
  { title: "Director Change", href: "/director-change" },
  { title: "AOA Amendment", href: "/aoa-amendment" },
  { title: "LLP Compliance", href: "/llp-compliance" },
  { title: "Remove Director", href: "/remove-director" },
  { title: "Authorized Capital Increase", href: "/authorized-capital-increase" },
  { title: "OPC Compliance", href: "/opc-compliance" },
  { title: "ADT-1 Filing", href: "/adt-1-filing" },
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
    <div className="min-h-screen bg-[#F4F3EE] font-sans antialiased text-gray-800">
      <Navbar />

      {/* MAIN HERO SECTION - COMPACT */}
      <section className="py-6 bg-[#F4F3EE]">
        <div className="max-w-[1240px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-10">
          
          {/* Left: Text and Form */}
          <div className="flex-1 order-1 lg:pr-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 mb-4">
              <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
              <span className="text-[10px] font-bold text-amber-700 uppercase tracking-widest">MCA COMPLIANCE</span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-black text-slate-900 leading-tight mb-5">
              Articles of Association <br className="hidden lg:block"/> Changes Made Simple
            </h1>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed max-w-xl">
              Amend your Articles of Association with guidance from experts — board meetings, resolutions and MCA filing handled end-to-end.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input
                className="flex-1 px-6 py-4 bg-white border border-gray-200 rounded-full outline-none focus:ring-1 focus:ring-amber-500 text-sm font-bold uppercase tracking-widest"
                placeholder="ENTER COMPANY NAME"
                value={companyInput}
                onChange={(e) => setCompanyInput(e.target.value)}
              />
              <button type="submit" className="px-10 py-4 bg-[#C15F3C] text-white rounded-full font-bold hover:bg-[#A94E30] transition-all uppercase tracking-widest text-sm">
                Book Demo
              </button>
            </form>
          </div>

          {/* Right: Illustration (Phone Image) */}
          <div className="w-full lg:w-[480px] order-2">
             <div className="bg-black rounded-[40px] p-6 relative overflow-hidden group shadow-2xl">
                <img src={ASSETS.mcaHero} alt="mca hero" className="w-full h-auto rounded-xl opacity-90 scale-105" />
                <div className="absolute inset-x-8 bottom-8 text-center">
                   <div className="bg-[#042F2C] text-white px-6 py-2 rounded-full inline-block text-[10px] font-bold uppercase tracking-widest border border-white/20">
                      MCA Compliance Simplified
                   </div>
                </div>
             </div>
          </div>
          
        </div>
      </section>      {/* MAIN CONTENT AREA - REFACTORED FOR CONTINUOUS FLOW */}
      <main className="max-w-[1240px] mx-auto px-6 py-6 transition-all duration-300">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* LEFT COLUMN: PRODUCT DETAILS + LONG-FORM CONTENT */}
          <div className="flex-1 min-w-0 space-y-6">
            
            {/* PRODUCT HEADER: PHONE + BOX */}
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Phone Image Container */}
                <div className="lg:w-[320px] shrink-0">
                  <div className="bg-black rounded-3xl p-4 relative overflow-hidden group shadow-lg">
                    <img src={ASSETS.mcaHero} alt="phone illustration" className="w-full h-auto rounded-xl" />
                    <div className="absolute inset-x-4 bottom-4">
                      <div className="bg-[#042F2C] text-white px-4 py-1.5 rounded-full inline-block text-[9px] font-bold uppercase tracking-widest border border-white/20">
                        MCA Compliance Simplified
                      </div>
                    </div>
                  </div>
                </div>

                {/* Details Box Container */}
                <div className="flex-1">
                  <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 h-fit hover:shadow-md transition-shadow">
                    <div className="inline-flex items-center gap-1 bg-white border border-amber-200 rounded-full px-3 py-1 mb-4">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
                      <span className="text-[10px] font-bold text-amber-700 uppercase tracking-widest">MCA COMPLIANCE</span>
                    </div>
                    
                    <h1 className="text-2xl font-bold text-gray-900 mb-1">AOA Amendment</h1>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex text-amber-500">
                        {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-current" />)}
                      </div>
                      <span className="text-xs text-slate-400 font-bold">(39)</span>
                    </div>

                    <p className="text-[13px] text-gray-500 mb-6 font-medium leading-relaxed">
                      AOA Amendment for a Private Limited Company & OPC. Update rules, adapt to regulations, or realign objectives effortlessly.
                    </p>

                    <div className="border border-amber-200 rounded-lg p-5 bg-amber-50/10 mb-2">
                       <div className="bg-white border border-amber-100 px-3 py-1 rounded text-[9px] font-bold text-amber-700 uppercase tracking-widest inline-block mb-4">
                          1 Exclusive Offers
                       </div>
                       <ul className="space-y-2 mb-6 text-[12px] text-gray-600 font-medium h-fit">
                          <li className="flex items-center gap-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0" />
                             <span>Application Filing in MCA</span>
                          </li>
                          <li className="flex items-center gap-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0" />
                             <span>Provide Updated AOA</span>
                          </li>
                       </ul>
                       <button className="w-full bg-[#C15F3C] text-white py-3 rounded font-bold text-[10px] uppercase tracking-widest hover:bg-[#A94E30] transition-all shadow-md active:scale-[0.98]">
                          ADD TO CART
                       </button>
                    </div>

                    <div className="flex justify-between text-[11px] font-bold text-amber-700 px-1 pt-4 border-t border-gray-50 mt-4">
                       <span className="cursor-pointer hover:underline">Terms and conditions</span>
                       <span className="cursor-pointer hover:underline">Refer a Friend</span>
                    </div>
                  </div>
                </div>
            </div>

            {/* LONG-FORM CONTENT: FLOWS IMMEDIATELY BELOW */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 text-center lg:text-left hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Articles of Association (AOA) Amendment</h2>
                <p className="text-gray-500 text-[14px] leading-relaxed font-medium">
                  The Articles of Association (AOA) of a company outline the rules and regulations that dictate its internal management. 
                  These articles specify the procedures for managing various aspects and operations within the company. 
                  A company article has to be registered at the time of company incorporation.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-amber-800 mb-4">Article of Association</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium mb-6">
                  The Articles of Association (AOA) is a crucial document for a company's internal administration and governance. 
                  It contains the rules, regulations, and bylaws that govern the company's internal management and operations.
                </p>
                <ul className="space-y-4">
                  {articleItems.map((item, idx) => (
                    <li key={idx} className="flex gap-4 items-start">
                      <div className="bg-amber-100 p-1.5 rounded-lg shrink-0">
                        <Check className="w-4 h-4 text-amber-600" strokeWidth={3} />
                      </div>
                      <div className="text-sm">
                        <span className="font-bold text-gray-900 block mb-1">{item[0]}</span>
                        <span className="text-gray-500 font-medium leading-relaxed">{item[1]}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 hover:shadow-md transition-shadow">
                <h2 className="text-xl font-bold text-amber-800 mb-4">AOA Amendment Overview</h2>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  AOA Amendment refers to the process of changing the Articles of Association of a company. 
                  Amending the AOA allows a company to update or change these rules to adapt to new circumstances, 
                  comply with legal requirements, or realign with the company's evolving objectives and strategies.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-amber-800 mb-6">When can a Company Amend AOA?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-amber-50/30 p-6 rounded-xl border border-amber-100">
                    <h4 className="font-bold text-amber-900 text-[14px] mb-2">Conversion of Company Type</h4>
                    <p className="text-[13px] text-gray-500 font-medium leading-relaxed">Switching between Private and Public status requires major changes to align with regulatory requirements.</p>
                  </div>
                  <div className="bg-amber-50/30 p-6 rounded-xl border border-amber-100">
                    <h4 className="font-bold text-amber-900 text-[14px] mb-2">Business Expansion</h4>
                    <p className="text-[13px] text-gray-500 font-medium leading-relaxed">When the company's objectives evolve or existing articles need adjustment for growth.</p>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-6">
                   <div className="text-center">
                      <div className="font-bold text-slate-900 text-sm mb-1">Business Objectives</div>
                      <div className="text-gray-400 text-xs">Activities evolving or expanding</div>
                   </div>
                   <div className="text-center">
                      <div className="font-bold text-slate-900 text-sm mb-1">Share Capital</div>
                      <div className="text-gray-400 text-xs">Increase or decrease capital</div>
                   </div>
                   <div className="text-center">
                      <div className="font-bold text-slate-900 text-sm mb-1">Company Name</div>
                      <div className="text-gray-400 text-xs">Rebranding or renaming</div>
                   </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-amber-800 mb-6">Procedure for AOA Amendment</h3>
                <div className="space-y-8 relative before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-[2px] before:bg-amber-100">
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xs ring-4 ring-white">1</div>
                    <h4 className="font-bold text-gray-900 text-[14px] mb-1">Board Meeting</h4>
                    <p className="text-[13px] text-gray-500 font-medium leading-relaxed">Issue notice 7 days in advance. Pass a board resolution to propose the amendment.</p>
                  </div>
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xs ring-4 ring-white">2</div>
                    <h4 className="font-bold text-gray-900 text-[14px] mb-1">General Meeting</h4>
                    <p className="text-[13px] text-gray-500 font-medium leading-relaxed">Issue 21 days notice. Pass a Special Resolution with 75% majority agreement.</p>
                  </div>
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xs ring-4 ring-white">3</div>
                    <h4 className="font-bold text-gray-900 text-[14px] mb-1">MGT-14 Filing</h4>
                    <p className="text-[13px] text-gray-500 font-medium leading-relaxed">File form MGT-14 with the ROC within 30 days of passing the resolution.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR COLUMN: CART + COMPLIANCE WIDGETS */}
          <aside className="lg:w-[340px] shrink-0 space-y-6 sticky top-24 self-start">
            <SidebarCart />
            
            <div className="space-y-4">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <img src={ASSETS.companyCompliance} alt="compliance" className="w-full h-40 object-cover" />
                <div className="p-4 text-center">
                  <p className="font-bold text-[11px] text-gray-900 uppercase tracking-widest">Company Compliance</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <img src={ASSETS.dinEkyc} alt="din" className="w-full h-40 object-cover" />
                <div className="p-4 text-center">
                  <p className="font-bold text-[11px] text-gray-900 uppercase tracking-widest">DIN eKYC Filing</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-4 text-[11px] border-b pb-3 uppercase tracking-widest">Related Guides</h4>
                <ul className="text-xs space-y-3 text-amber-700 font-bold">
                  {["Comprehensive Guide to Articles of Association", "eAOA Form INC 34 SPICE AOA"].map((item) => (
                    <li key={item} className="cursor-pointer hover:underline flex gap-2">
                       <span className="text-amber-300">»</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
          
        </div>
      </main>

      <div className="mt-0">
        <FAQAccordion category="aoa-amendment" />
      </div>

      <div className="max-w-[1240px] mx-auto px-6 mb-4">
        <DynamicPricingSection category="aoa-amendment" />
      </div>

      <PopularSearches />
      <Footer />

      <div className="fixed bottom-8 right-8 z-50">
        <div className="bg-gradient-to-r from-amber-700 to-amber-800 text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-3 cursor-pointer hover:scale-105 transition-all">
          <MessageCircle className="w-5 h-5" />
          <span className="font-bold text-xs uppercase tracking-widest">Live Chat with Experts</span>
        </div>
      </div>

    </div>
  );
}
