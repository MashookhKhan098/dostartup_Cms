"use client";
import AddQuestionModal from "../components/AddQuestionModal";


/* eslint-disable @next/next/no-img-element */

import React, { useState } from "react";
import { ChevronRight, ShoppingBag, Star, Plus, CheckCircle, ShoppingCart } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PopularSearches from "../components/PopularSearches";
import SidebarCart from "../components/SidebarCart";

const ASSETS = {
  logo: "/images/india-logo.jpg",
  hero: "/images/dpt3-hero.jpg",
  man: "https://img.indiafilings.com/catalog/mca-compliance-simplified-india.webp",
  ledgers: "/images/ledgers.jpg",
  whatsapp: "/images/whatsapp.png",
  companyCompliance: "/images/company-compliance.jpg",
  cartIcon: "/images/cart.png",
  indiaFlag: "/images/india-flag.png",
};

export default function DPT3FilingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqItems = [
    { q: "What is Form DPT-3?", a: "Form DPT-3 is a return of deposits that companies must file with the ROC to report information about deposits and/or outstanding receipts of loan or money other than deposits." },
    { q: "Who is required to file Form DPT-3?", a: "Every company (except Government companies) including private limited, OPC, and public limited companies must file DPT-3 annually if they have outstanding loans or deposits as of 31st March." },
    { q: "What is the due date for filing Form DPT-3?", a: "The form must be filed annually on or before 30th June of every year for the preceding financial year ended 31st March." },
    { q: "Is auditor certification mandatory?", a: "Auditor certification is mandatory when the company is reporting 'Return of Deposit'. For 'Particulars of transactions not considered as deposit', it is highly recommended." },
    { q: "What are the penalties for non-filing?", a: "Failure to file DPT-3 can lead to heavy penalties on the company and every officer in default under the Companies Act 2013." }
  ];

  return (
    <div className="min-h-screen bg-[#ffffff] text-slate-800">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-gradient-to-r from-white to-slate-50 py-3 text-slate-800 border-b border-slate-100">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 text-sm text-gray-500 font-bold">
          Home / MCA Services / <span className="text-amber-700 font-medium">DPT-3 Filing</span>
        </div>
      </div>

      {/* Main Container: Persistent Sticky Sidebar */}
      <main className="max-w-[1240px] mx-auto px-4 sm:px-6 py-8 flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Left Section: All main content */}
        <section className="flex-1 space-y-12 overflow-hidden font-bold">
          
          {/* Header Block: 2-Col Hero Area */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
             {/* Col 1: Hero Image Card */}
             <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-lg flex flex-col h-full overflow-hidden">
               <div className="rounded-lg overflow-hidden border border-gray-200 flex-1 flex flex-col">
                <div className="bg-[#9e4a2d] p-6 text-center">
                  <h2 className="text-white text-xl font-bold uppercase">DPT-3 FILING</h2>
                  <div className="mt-2 text-sm text-amber-100 uppercase font-bold">Return of Loans & Deposits</div>
                </div>
                <div className="bg-[rgb(243,246,249)] p-8 flex justify-center items-center flex-1">
                   <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10 scale-110">
                      <img src={ASSETS.man} alt="DPT-3" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/5" />
                   </div>
                </div>
              </div>
              <ul className="mt-4 text-[13px] space-y-2 text-gray-600 font-bold px-2 pb-2">
                {["Onetime Loan Disclosure", "Return of Deposits", "Auditor Certificate Support"].map(s => (
                  <li key={s} className="hover:text-amber-700 transition-colors flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-600/30 rounded-full" /> {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 2: Info Card */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg flex flex-col h-full">
               <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 mb-2 w-fit">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
                    <span className="text-[10px] font-bold text-amber-700 uppercase tracking-widest">MCA COMPLIANCE</span>
               </div>
               <h1 className="text-2xl font-bold text-slate-900 mb-1 leading-tight">DPT-3 Return of Deposits Filing</h1>
               <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />)}
                  <span className="text-[11px] text-slate-400 ml-1">(1,842 reviews)</span>
               </div>

               <p className="text-[14px] text-slate-500 leading-relaxed mb-6 font-bold">
                 Mandatory annual filing to report borrowings, deposits and receipts of money as of 31st March. Ensure timely filing by 30th June to avoid heavy ROC penalties.
               </p>

               <div className="border-2 border-dashed border-amber-200 rounded-xl p-5 bg-amber-50/10 relative mt-auto font-bold">
                  <div className="absolute -top-3 left-4 bg-white px-2 text-[10px] uppercase font-bold text-amber-700 rounded border border-amber-200 tracking-wider">DPT-3 Support</div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-2 text-[13px] text-slate-600">
                      <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" /> Preparation of Auditor-Certified DPT-3 Return
                    </li>
                    <li className="flex items-start gap-2 text-[13px] text-slate-600">
                      <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" /> Professional ROC Filing & Acknowledgement
                    </li>
                  </ul>
                  <button className="mt-5 w-full bg-[#9e4a2d] text-white py-3 rounded-lg font-bold hover:bg-[#8b4127] transition-all shadow-md uppercase text-sm tracking-wide">ADD TO CART</button>
               </div>
            </div>
          </div>

          <div className="space-y-12">
             <article className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <h1 className="text-2xl font-bold text-[#9e4a2d] mb-8 border-b-2 border-amber-600/10 pb-4 text-center uppercase">
                   Guide to Form DPT-3 Filing (Return of Deposits)
                </h1>

                <div className="prose prose-sm max-w-none text-slate-600 space-y-6 leading-relaxed font-bold">
                   <p>
                    Form DPT-3 is a one-time and annual return that provides information about deposits and transactions not considered deposits as of 31st March of each year. It is a vital compliance requirement introduced to monitor corporate borrowings and protect depositor interests.
                   </p>
                   
                   <h3 className="text-xl font-bold text-slate-900 pt-4 uppercase">What is Form DPT-3?</h3>
                   <p>Form DPT-3 is used by companies in India to report details of deposits and receipts of money that are not classified as deposits under the Companies Act 2013.</p>

                   <h3 className="text-lg font-bold text-slate-900 pt-6 uppercase">Applicability of DPT-3</h3>
                   <p className="border-l-4 border-amber-600 pl-4 py-1 bg-amber-50/20 font-bold text-amber-800">
                    All companies including private limited, public limited, and OPCs must file DPT-3 if they have outstanding loans. Government companies and banking companies are generally exempt.
                   </p>

                   <h3 className="text-lg font-bold text-slate-900 pt-6 uppercase">Categories of Reporting</h3>
                   <ul className="list-disc pl-5 space-y-2 font-bold text-amber-700">
                     <li>Onetime Return Disclosure</li>
                     <li>Return of Deposit</li>
                     <li>Particulars of transactions not considered as deposit</li>
                     <li>Both Return of Deposit and Particulars of transactions not considered as deposit</li>
                   </ul>

                   <h3 className="text-lg font-bold text-slate-900 pt-6 uppercase underline">Due Date for Filing</h3>
                   <p>The form must be filed annually on or before June 30th for the financial year ended on March 31st. Late filing attracts additional fees and potential penalties on the company and its officers.</p>
                </div>
             </article>

             {/* Documents Section */}
             <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm font-bold">
                <h3 className="text-xl font-bold text-[#9e4a2d] mb-6 border-b border-gray-50 pb-3 uppercase text-[16px]">Documents Required For DPT-3 Filing</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Auditor's Certificate (Mandatory for Deposits)",
                    "List of Outstanding Loans & Receipts",
                    "Board Resolution for Filing DPT-3",
                    "Copy of Loan Agreements (Optional/Recommended)",
                    "Provisional or Audited Balance Sheet Statement"
                  ].map((doc, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-white/50 rounded-xl border border-gray-100 group hover:border-amber-200 transition-colors">
                       <span className="text-sm text-slate-700 group-hover:text-amber-800 leading-tight">{doc}</span>
                    </div>
                  ))}
                </div>
             </div>

             {/* FAQ Section */}
             <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <h3 className="text-xl font-bold text-[#9e4a2d] mb-8 border-b border-gray-50 pb-4 uppercase tracking-widest text-[16px]">FAQ's</h3>
                <div className="space-y-4 font-bold">
                  {faqItems.map((faq, idx) => (
                    <div key={idx} className="border border-slate-100 rounded-xl overflow-hidden hover:border-amber-200 transition-colors shadow-sm bg-white">
                      <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full flex items-center justify-between p-5 text-left hover:bg-amber-50/10 transition-colors group">
                        <span className="text-sm font-bold text-slate-800 group-hover:text-amber-700">{faq.q}</span>
                        <div className={`p-1.5 rounded-full bg-amber-50 transition-all shrink-0 ${openFaq === idx ? 'rotate-45' : ''}`}>
                           <Plus className="w-4 h-4 text-amber-600" />
                        </div>
                      </button>
                      {openFaq === idx && (
                        <div className="p-5 bg-amber-50/5 text-sm text-slate-500 border-t border-slate-100 leading-relaxed">{faq.a}</div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex gap-3 items-center flex-wrap mt-4">
  <button className="mt-10 px-10 py-2.5 border-2 border-amber-600 text-amber-700 rounded-lg text-sm font-bold hover:bg-amber-50 uppercase tracking-wide">Load More</button>
  <AddQuestionModal />
</div>
</div>
          </div>
        </section>

        {/* Global Sidebar: Persistent Sticky Content */}
        <aside className="lg:w-80 flex-shrink-0 space-y-6">
           <div className="sticky top-28 space-y-6 font-bold">
              <SidebarCart />
              
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm font-bold">
                <h4 className="font-bold text-slate-900 mb-5 text-[14px] border-b pb-3 uppercase tracking-wider">Related Guides</h4>
                <ul className="text-[13px] space-y-4 text-amber-700">
                  {["Is DPT-3 Mandatory for OPC?", "What counts as a Deposit?", "Auditor Certificate for DPT-3", "Exempt Transactions List"].map((item) => (
                    <li key={item} className="hover:text-amber-800 cursor-pointer flex gap-3 group items-center">
                       <div className="w-1.5 h-1.5 bg-amber-600/50 rounded-full group-hover:scale-125 transition-transform" />
                       <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:scale-[1.02] transition-transform">
                <img src={ASSETS.companyCompliance} alt="compliance" className="w-full h-auto object-cover" />
                <div className="p-5 bg-white">
                  <div className="text-[13px] text-slate-800 uppercase font-bold">Annual Compliance</div>
                  <div className="text-[11px] text-slate-400 mt-1 font-bold">Comprehensive Protection</div>
                </div>
              </div>
           </div>
        </aside>
      </main>

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
