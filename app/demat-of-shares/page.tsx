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
  hero: "/images/demat-hero.jpg",
  man: "https://img.dostartup.com/catalog/mca-compliance-simplified-india.webp",
  ledgers: "/images/ledgers.jpg",
  whatsapp: "/images/whatsapp.png",
  companyCompliance: "/images/company-compliance.jpg",
  cartIcon: "/images/cart.png",
  indiaFlag: "/images/india-flag.png",
};

export default function DematerialisationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqItems = [
    { q: "What is dematerialisation of shares?", a: "Dematerialisation is the process of converting physical share certificates into electronic form and holding them in a Demat account with a depository participant (DP)." },
    { q: "What are the benefits of dematerialising shares?", a: "Benefits include enhanced security (no risk of loss/theft), faster trading, reduced costs (lower stamp duties), and convenience of online access." },
    { q: "Is dematerialisation mandatory for private companies?", a: "Yes ΓÇö following the MCA amendment (Rule 9B), private limited companies except 'small companies' are required to dematerialise their securities by September 30, 2024." },
    { q: "What is Rule 9B?", a: "Rule 9B requires private companies (except small companies) to issue and maintain securities in dematerialised form and convert existing physical shares accordingly." },
    { q: "Which companies are exempt?", a: "Small companies (paid-up capital Γëñ INR 4 crore and turnover Γëñ INR 40 crore) are generally exempt, unless they are holding/subsidiary companies." },
    { q: "What is the deadline for compliance?", a: "The deadline for compliance is September 30, 2024, for companies falling under the Rule 9B mandate." }
  ];

  return (
    <div className="min-h-screen bg-[#F4F3EE] text-slate-800">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-gradient-to-r from-white to-slate-50 py-3 text-slate-800 border-b border-slate-100">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 text-sm text-gray-500 font-bold">
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
             <div className="bg-[#F4F3EE] rounded-2xl border border-gray-200 p-4 shadow-lg flex flex-col h-full overflow-hidden">
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
            <div className="bg-[#F4F3EE] rounded-2xl border border-gray-200 p-6 shadow-lg flex flex-col h-full">
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
                  <div className="absolute -top-3 left-4 bg-[#F4F3EE] px-2 text-[10px] uppercase font-bold text-amber-700 rounded border border-amber-200 tracking-wider">Expert Compliance</div>
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

          <div className="space-y-12">
             <article className="bg-[#F4F3EE] rounded-2xl border border-gray-200 p-8 shadow-sm">
                <h1 className="text-2xl font-bold text-[#9e4a2d] mb-8 border-b-2 border-amber-600/10 pb-4 text-center uppercase">
                   Dematerialisation of Shares Guide
                </h1>

                <div className="prose prose-sm max-w-none text-slate-600 space-y-6 leading-relaxed font-bold">
                   <p>
                    Dematerialisation is the process of transferring physical shares into a digital account, known as a Demat account, which simplifies managing and trading shares. Converting physical shares to Demat enhances security, reducing the risks associated with physical shares like loss or theft. It also makes trading faster and more efficient and simplifies share management. Previously required mainly for public companies, the dematerialisation process is now mandatory for private limited companies (except small companies).
                   </p>
                   
                   <h3 className="text-xl font-bold text-slate-900 pt-4 uppercase">What is Dematerialisation of shares?</h3>
                   <p>Dematerialisation refers to the process of converting physical securities, such as share certificates and other documents, into electronic format. These securities are then held in a demat account.</p>

                   <h3 className="text-lg font-bold text-slate-900 pt-6 uppercase">Applicability (Rule 9B)</h3>
                   <p className="border-l-4 border-amber-600 pl-4 py-1 bg-amber-50/20 font-bold text-amber-800">
                    From October 2023, the Ministry of Corporate Affairs (MCA) mandated that private limited companies (excluding small companies) must issue and maintain their securities only in dematerialised form. Smaller companies ΓÇö those with a paid-up capital of Γëñ INR 4 crore and turnover Γëñ INR 40 crore ΓÇö are generally exempt, unless they are holding or subsidiary companies of other corporate bodies.
                   </p>

                   <h3 className="text-lg font-bold text-slate-900 pt-6 uppercase">Last Date for Compliance</h3>
                   <p>The deadline for compliance is September 30, 2024. Companies falling under the mandate must ensure their shares are dematerialised by this date to avoid restrictions on further allotments or transfers.</p>

                   <h3 className="text-lg font-bold text-slate-900 pt-6 uppercase underline">How to Convert Physical Shares to Demat?</h3>
                   <ol className="list-decimal pl-5 space-y-3 font-bold text-slate-700">
                     <li>Enter into an agreement with a depository (NSDL or CDSL).</li>
                     <li>Appoint a Registrar and Transfer Agent (RTA).</li>
                     <li>Obtain ISIN (International Securities Identification Number) for each security.</li>
                     <li>Shareholders open Demat accounts with Depository Participants.</li>
                     <li>Submit physical certificates with the Dematerialisation Request Form (DRF).</li>
                   </ol>

                   <h3 className="text-lg font-bold text-slate-900 pt-6 uppercase">Penalties for Non-Compliance</h3>
                   <p>Failure to comply with Rule 9B leads to restrictions on share transfers and allotments. Additionally, such companies cannot issue new securities until the mandate is fulfilled. Directors and officers may also face fines under the Companies Act 2013.</p>
                </div>
             </article>

             {/* Documents Section */}
             <div className="bg-[#F4F3EE] rounded-2xl border border-gray-200 p-8 shadow-sm">
                <h3 className="text-xl font-bold text-[#9e4a2d] mb-6 border-b border-gray-50 pb-3 uppercase text-[16px]">Documents Required For Dematerialisation</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-bold">
                  {[
                    "Original Physical Share Certificates",
                    "Dematerialisation Request Form (DRF)",
                    "Board Resolution for RTA Appointment",
                    "Company PAN & Address Proof",
                    "ISIN Activation Forms"
                  ].map((doc, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-[#F4F3EE]/50 rounded-xl border border-gray-100 group hover:border-amber-200 transition-colors">
                       <span className="text-sm text-slate-700 group-hover:text-amber-800">{doc}</span>
                    </div>
                  ))}
                </div>
             </div>

             {/* FAQ Section */}
             <div className="bg-[#F4F3EE] rounded-2xl border border-gray-200 p-8 shadow-sm">
                <h3 className="text-xl font-bold text-[#9e4a2d] mb-8 border-b border-gray-50 pb-4 uppercase tracking-widest text-[16px]">FAQ's</h3>
                <div className="space-y-4 font-bold">
                  {faqItems.map((faq, idx) => (
                    <div key={idx} className="border border-slate-100 rounded-xl overflow-hidden hover:border-amber-200 transition-colors shadow-sm bg-[#F4F3EE]">
                      <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full flex items-center justify-between p-5 text-left hover:bg-amber-50/10 transition-colors group">
                        <span className="text-sm font-bold text-slate-800 group-hover:text-amber-700">{faq.q}</span>
                        <div className={`p-1.5 rounded-full bg-amber-50 transition-all shrink-0 ${openFaq === idx ? 'rotate-45' : ''}`}>
                           <Plus className="w-4 h-4 text-amber-600" />
                        </div>
                      </button>
                      {openFaq === idx && (
                        <div className="p-5 bg-amber-50/5 text-sm text-slate-500 border-t border-slate-100 leading-relaxed font-bold">{faq.a}</div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex gap-3 items-center flex-wrap mt-4">
  <button className="mt-10 px-10 py-2.5 border-2 border-amber-600 text-amber-700 rounded-lg text-sm font-bold hover:bg-amber-50 uppercase tracking-wide">Load More</button>
  
</div>
</div>
          </div>
        </section>

        {/* Global Sidebar: Persistent Sticky Content */}
        <aside className="lg:w-80 flex-shrink-0 space-y-6">
           <div className="sticky top-28 space-y-6">
              <SidebarCart />
              
              <div className="bg-[#F4F3EE] p-6 rounded-2xl border border-gray-200 shadow-sm font-bold">
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
                <div className="p-5 bg-[#F4F3EE]">
                    <div className="text-[14px] text-slate-800 uppercase">Corporate Compliance</div>
                    <div className="text-[11px] text-slate-400 mt-1 font-bold">Stay ahead of ROC deadlines</div>
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

