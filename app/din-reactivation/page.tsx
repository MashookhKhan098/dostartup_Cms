"use client";

/* eslint-disable @next/next/no-img-element */

import React from "react";
import { ChevronRight, Star, Plus, CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import PopularSearches from "../components/PopularSearches";
import SidebarCart from "../components/SidebarCart";

const ASSETS = {
  logo: "/images/india-logo.jpg",
  heroImage: "/images/din.jpg",
  man: "/images/hero.webp",
  ledgers: "/images/ledgers.jpg",
  whatsapp: "/images/whatsapp.png",
  companyCompliance: "/images/company-compliance.jpg",
  cartIcon: "/images/cart.png",
  indiaFlag: "/images/india-flag.png",
};

export default function DINReactivationPage() {
  const DOCUMENTS_REQUIRED_HERO = [
    { name: "Digital Signature Certificate (DSC)" },
    { name: "PAN Card (self-attested)" },
    { name: "Proof of Address" }
  ];

  return (
    <div className="min-h-screen bg-[#F4F3EE] text-slate-800">
      <Navbar />

      {/* Breadcrumb - Background matched to Navbar */}
      <div className="bg-[#F4F3EE] py-4 font-bold">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 text-sm text-gray-500">
          Home / MCA Services / <span className="text-amber-700 font-medium tracking-tight">DIN Reactivation</span>
        </div>
      </div>

      <main className="max-w-[1240px] mx-auto px-4 sm:px-6 py-4">
        
        {/* Top Section: Main Content & Sidebar Grid - Sidebar prioritized in order for mobile */}
        <div className="flex flex-col lg:flex-row gap-8 items-start mb-12">
          
          {/* Sidebar - Positioned FIRST in the DOM for mobile priority */}
          <aside className="w-full lg:w-80 space-y-6 order-1 lg:order-2">
             {/* ONLY the Cart is Sticky */}
             <div className="lg:sticky lg:top-28 space-y-6">
                <SidebarCart />
             </div>

             <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm font-bold">
               <h4 className="font-bold text-slate-900 mb-5 text-[14px] border-b border-gray-50 pb-3 uppercase tracking-wider">Related Guides</h4>
               <ul className="text-[13px] space-y-4 text-amber-700">
                 {["Complete Guide on DIN", "How to Obtain DIN?", "DIN Number Search"].map((item) => (
                   <li key={item} className="hover:text-amber-800 cursor-pointer flex gap-3 group items-center text-left">
                      <ChevronRight className="w-4 h-4 text-amber-600 group-hover:translate-x-1 transition-transform shrink-0" />
                      <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                   </li>
                 ))}
               </ul>
             </div>

             <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 font-bold bg-white group">
                <img src={ASSETS.companyCompliance} alt="compliance" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="p-5 bg-white border-t border-gray-50">
                  <div className="text-[14px] text-slate-800 uppercase tracking-tight">Director Compliance</div>
                  <div className="text-[11px] text-slate-400 mt-1 font-bold leading-none uppercase">Stay active in MCA records</div>
                </div>
             </div>
          </aside>

          {/* Left content area - Order 2 on mobile, Order 1 on Desktop */}
          <div className="flex-1 space-y-12 overflow-hidden order-2 lg:order-1">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
               {/* Col 1: Hero Image Card */}
               <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm flex flex-col h-full overflow-hidden">
                  <div className="rounded-lg overflow-hidden border border-gray-100 flex-1 flex flex-col bg-white">
                    <div className="bg-[#9e4a2d] p-6 text-center">
                      <h2 className="text-white text-xl font-bold uppercase tracking-tight">DIN REACTIVATION</h2>
                      <div className="mt-2 text-sm text-amber-100 uppercase font-bold tracking-widest text-[10px]">DIN Reactivation: Quick and hassle-free.</div>
                    </div>
                    <div className="bg-white p-8 flex justify-center items-center flex-1">
                      <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10 scale-110">
                        <img src={ASSETS.man} alt="DIN Reactivation" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/5" />
                      </div>
                    </div>
                  </div>
                  <ul className="mt-4 text-[13px] space-y-2 text-gray-600 font-bold px-2 pb-2">
                    {DOCUMENTS_REQUIRED_HERO.map(doc => (
                      <li key={doc.name} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-amber-600/30 rounded-full" /> {doc.name}
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
                  <h1 className="text-2xl font-bold text-slate-900 mb-1 tracking-tight">DIN Reactivation</h1>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 ${i < 4 ? 'text-amber-500 fill-amber-500' : 'text-gray-200'}`} />)}
                    <span className="text-[11px] text-slate-400 font-medium ml-1">(428)</span>
                  </div>

                  <p className="text-[12px] text-slate-500 leading-relaxed mb-6 font-bold">
                    Director Identification Number (DIN) may be subject to deactivation due to non-compliance with regulatory requirements. Reactivate it by filing Form DIR-3 with expert assistance.
                  </p>

                  <div className="border-2 border-dashed border-amber-200/50 rounded-2xl p-6 bg-white relative mt-auto">
                    <div className="absolute -top-3 left-6 bg-white px-3 text-[10px] uppercase font-bold text-amber-700 rounded-full border border-amber-100 tracking-wider shadow-sm">2 Exclusive Offers</div>
                    
                    <div className="mb-4">
                       <p className="text-sm font-bold text-slate-900 mb-3">DIN Reactivation</p>
                       <div className="space-y-3 font-bold text-[13px] text-slate-600">
                          <div className="flex items-start gap-4">
                            <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" /> Application Filing in MCA
                          </div>
                          <div className="flex items-start gap-4">
                            <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" /> Provide DIN-eKYC
                          </div>
                          <div className="flex items-start gap-4">
                            <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" /> Acknowledgement Copy
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
                    
                    <div className="space-y-4">
                      <div className="space-y-2">
                         <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Offers and discounts</p>
                         <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-2xl bg-white shadow-sm group">
                           <img src={ASSETS.ledgers} alt="ledgers" className="w-10 h-10 object-contain rounded" />
                           <div>
                             <div className="text-[11px] font-bold text-slate-800 uppercase tracking-tight">LEDGERS - Compliance Platform</div>
                             <div className="text-[10px] text-slate-400 font-bold leading-tight uppercase">Invoicing, GST Filing, Banking and Payroll</div>
                           </div>
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
                   DIN Reactivation - Filing Form DIR-3 KYC
                </h2>

                <div className="prose prose-sm max-w-none text-slate-600 space-y-6">
                   <p>
                    Director Identification Number (DIN) is an essential identifier for anyone aspiring to be a director in Indian companies, issued by the Ministry of Corporate Affairs (MCA). Directors are required to update their KYC details annually through the DIR-3 KYC form with the MCA. Failure to do so leads to the deactivation of the DIN, which restricts their ability to function in corporate roles. To reactivate a deactivated DIN, directors must file the DIR-3 KYC form, sometimes with a late fee, depending on the delay.
                   </p>
                   
                   <h3 className="text-xl font-bold text-slate-900 pt-4 uppercase tracking-tight">Director Identification Number (DIN)</h3>
                   <p>A Director Identification Number (DIN) is an 8-digit unique identifier assigned to directors. Once issued, it remains valid for the lifetime of the director.</p>

                   <h3 className="text-lg font-bold text-slate-900 pt-6 uppercase">What is Form DIR-3 KYC?</h3>
                   <p>Form DIR-3 KYC is an electronic form mandated by MCA to update KYC details of directors.</p>

                   <h3 className="text-lg font-bold text-slate-900 pt-6 uppercase">Applicability</h3>
                   <p>Form DIR-3 KYC is mandatory for directors allotted DIN by or before March 31, 2018 and with status 'approved'.</p>

                   <h3 className="text-lg font-bold text-slate-900 pt-6 uppercase">Purpose of DIR-3 KYC (Know Your Customer)</h3>
                   <p>The purpose is to maintain current and accurate director information with the ROC including addresses, contact numbers and email addresses.</p>

                   <h3 className="text-lg font-bold text-slate-900 pt-6 uppercase underline">Annual Deadline for Filing Form DIR-3 KYC</h3>
                   <p>Deadline is set as September 30th of each year (subject to MCA extensions).</p>

                   <h3 className="text-lg font-bold text-slate-900 pt-6 uppercase">Types of DIR-3 KYC Forms</h3>
                   <p>DIR-3 KYC eForm (for first-time filers) and DIR-3-KYC-WEB (simplified web form for returning filers).</p>

                   <h3 className="text-lg font-bold text-slate-900 pt-6 uppercase">Penalty for Non-Filing of DIR-3 KYC</h3>
                   <p>A fine may be imposed for non-compliance within the stipulated timeframe.</p>

                   <h3 className="text-lg font-bold text-slate-900 pt-6 uppercase">DIN Deactivation & Reactivation</h3>
                   <p>If a director does not file, their DIN may be marked 'Deactivated due to Non-filing of DIR-3 KYC'. To reactivate, file the appropriate form and follow MCA approvals.</p>

                   <h3 className="text-lg font-bold text-slate-900 pt-8 uppercase underline">Documents Required</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      {[
                        "Digital Signature Certificate (DSC) linked to PAN",
                        "PAN Card (self-attested)",
                        "Proof of Address (Aadhaar / Voter ID / Driving License)",
                        "Photograph (self-attested passport photo)",
                        "Mobile & Email for OTP verification"
                      ].map((doc, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm font-bold">
                           <CheckCircle className="w-4 h-4 text-amber-600 shrink-0" />
                           <span className="text-sm text-slate-700">{doc}</span>
                        </div>
                      ))}
                   </div>

                   <h3 className="text-xl font-bold text-[#9e4a2d] pt-8 uppercase tracking-tight">Streamline Your DIN Reactivation Process</h3>
                   <p>We offer comprehensive assistance at every stage — application support, form completion guidance, PAN verification, DSC help, document attachment and SRN generation & follow-up.</p>
                </div>
            </article>
          </div>
        </div>

        {/* FULL WIDTH FAQ INTEGRATION */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden mb-12">
            <FAQAccordion category="din-reactivation" />
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
