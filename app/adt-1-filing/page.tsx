"use client";

/* eslint-disable @next/next/no-img-element */

import React, { useState } from "react";
import { ChevronRight, Star, CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import PopularSearches from "../components/PopularSearches";
import SidebarCart from "../components/SidebarCart";

const ASSETS = {
  logo: "/images/india-logo.jpg",
  hero: "/images/company-compliance.jpg",
  ledgers: "/images/ledgers.jpg",
  whatsapp: "/images/whatsapp.png",
  companyCompliance: "/images/company-compliance.jpg",
};

export default function ADT1FilingPage() {
  const DOCUMENTS_REQUIRED = [
    { name: "Consent for Appointment as Statutory Auditor" },
    { name: "Appointment as Statutory Auditor" },
    { name: "Board Resolution for Auditor Appointment" },
  ];

  const OTHER_REGISTRATIONS = [
    { name: "Documents Required for LLP Registration", count: 8 },
    { name: "Documents Required for Proprietorship Registration", count: 2 },
    { name: "Documents Required for Company Registration", count: 2 },
    { name: "Documents Required for Trademark Registration", count: 7 },
    { name: "Documents Required for GST Registration", count: 10 },
  ];

  return (
    <div className="min-h-screen bg-[#F4F3EE] text-slate-800 font-sans antialiased">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-[#F4F3EE] py-3">
        <div className="max-w-[1240px] mx-auto px-6 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
          Home / MCA Services / <span className="text-gray-900">ADT-1 Filing</span>
        </div>
      </div>

      <main className="max-w-[1240px] mx-auto px-6 py-6">
        <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left Section */}
        <section className="flex-1 space-y-6">
          
          {/* PREMIUM PRODUCT CARD - Restored from Screenshot Content */}
          <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden flex flex-col md:flex-row shadow-xl shadow-orange-900/5">
            {/* Left Side: Orange Promo Box */}
            <div className="md:w-[42%] p-8 flex flex-col">
               <div className="bg-[#C15F3C] rounded-[32px] p-8 text-center relative overflow-hidden group mb-6">
                  <div className="relative z-10">
                    <h2 className="text-white text-3xl font-black uppercase tracking-tighter mb-2">ADT-1 FILING</h2>
                    <p className="text-amber-100 text-[10px] font-black uppercase tracking-[0.2em] mb-8">ADT - 1: Notifies first auditor appointment to ROC</p>
                    
                    <div className="relative mx-auto w-48 h-48 rounded-full border-8 border-white/20 overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-105 bg-black/10">
                       <img src={ASSETS.hero} alt="ADT-1" className="w-full h-full object-cover" />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                  </div>
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
               </div>

               {/* Document Links */}
               <div className="space-y-3 px-2">
                  {DOCUMENTS_REQUIRED.map((doc, i) => (
                    <div key={i} className="flex items-center justify-between text-[11px] font-black text-gray-400 hover:text-gray-900 cursor-pointer transition-colors group">
                      <span className="flex-1">{doc.name}</span>
                      <ChevronRight className="w-3 h-3 text-gray-300 group-hover:translate-x-1 transition-transform" />
                    </div>
                  ))}
                  <div className="text-[11px] font-black text-[#C15F3C] cursor-pointer hover:underline uppercase tracking-widest mt-2">Load More</div>
               </div>
            </div>

            {/* Right Side: Product Details */}
            <div className="md:w-[58%] p-10 flex flex-col justify-between bg-gray-50/30">
               <div>
                  <div className="inline-flex items-center gap-2 bg-[#FDF1EC] border border-[#FAE5DC] rounded-full px-4 py-1.5 mb-6">
                    <div className="w-2 h-2 bg-[#C15F3C] rounded-full" />
                    <span className="text-[10px] font-black text-[#C15F3C] uppercase tracking-[0.2em]">MCA COMPLIANCE</span>
                  </div>

                  <h1 className="text-3xl font-black text-gray-900 mb-2 tracking-tight">ADT-1 Filing</h1>
                  
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current transition-colors hover:scale-110" />)}
                    </div>
                    <span className="text-[11px] text-gray-400 font-bold tracking-wider uppercase">(2709)</span>
                  </div>

                  <p className="text-sm text-gray-500 font-bold leading-relaxed mb-8 italic">
                    Auditor appointment services include help with discovering, engaging and appointing of Auditor for newly incorporated Private Limited Company (Audit fee will be extra based on the nature and volume of transaction).
                  </p>

                  {/* Pricing Box */}
                  <div className="p-8 bg-white rounded-[32px] border-2 border-dashed border-amber-200/50 relative mb-6">
                    <div className="text-[10px] font-black text-[#C15F3C] uppercase tracking-widest mb-6 text-center">1 Exclusive Offers</div>
                    
                    <h4 className="font-black text-gray-900 uppercase text-xs mb-4">Basic</h4>
                    <ul className="space-y-4 mb-8">
                       <li className="flex items-start gap-3">
                          <ChevronRight className="w-4 h-4 text-[#C15F3C] shrink-0 mt-0.5" strokeWidth={4} />
                          <span className="text-sm font-bold text-gray-600">Filed Form ADT-1</span>
                       </li>
                       <li className="flex items-start gap-3">
                          <ChevronRight className="w-4 h-4 text-[#C15F3C] shrink-0 mt-0.5" strokeWidth={4} />
                          <span className="text-sm font-bold text-gray-600">Acknowledgement Copy</span>
                       </li>
                    </ul>

                    <button className="w-full bg-[#C15F3C] text-white py-4 rounded-xl font-black hover:bg-[#A74A2F] shadow-xl shadow-orange-900/10 uppercase text-xs tracking-widest transition-all">
                      ADD TO CART
                    </button>
                  </div>
               </div>

               <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-between text-[10px] font-black text-[#C15F3C] uppercase tracking-widest border-t border-gray-100 pt-6">
                    <span className="hover:underline cursor-pointer">Terms and conditions</span>
                    <span className="hover:underline cursor-pointer">Refer a Friend</span>
                  </div>

                  {/* Ledgers Offer */}
                  <div className="p-6 bg-white rounded-3xl border border-gray-100 flex items-center gap-5 group hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center p-2 group-hover:scale-110 transition-transform">
                      <img src={ASSETS.ledgers} alt="Ledgers" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Offers and discounts</div>
                      <h6 className="text-[12px] font-black text-gray-900 uppercase leading-tight">LEDGERS - Compliance Platform</h6>
                      <p className="text-[10px] text-gray-400 font-bold italic">Invoicing, GST Filing, Banking and Payroll</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>

          <div className="space-y-6">
             <article className="bg-white rounded-[40px] border border-gray-100 p-12 shadow-sm">
                <h2 className="text-3xl font-black text-gray-900 mb-10 text-center uppercase tracking-tighter">
                   Form ADT-1 Filing for <span className="text-[#C15F3C]">Auditor Appointment</span>
                </h2>

                <div className="space-y-10 text-gray-500 leading-relaxed font-bold">
                   <p className="text-base text-center max-w-4xl mx-auto">
                    Appointing an auditor is a mandatory compliance step for every company, and filing Form ADT-1 with the Registrar of Companies (ROC) is a legal requirement under the Companies Act, 2013. Whether you're appointing your first auditor after incorporation or reappointing one at your Annual General Meeting (AGM), timely and accurate filing is essential to avoid penalties.
                   </p>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
                      <div className="space-y-6">
                        <h3 className="text-xl font-black text-gray-900 uppercase tracking-widest border-l-4 border-[#C15F3C] pl-4">What is the ADT 1 Form?</h3>
                        <p className="text-sm">Form ADT 1 is a statutory return filed by companies with the Registrar of Companies (ROC) to report the appointment of an auditor, as required under Section 139 of the Companies Act, 2013. It is used to formally notify the ROC when a company appoints its first auditor after incorporation or appoints/reappoints an auditor at the Annual General Meeting (AGM).</p>
                      </div>
                      <div className="space-y-6">
                        <h3 className="text-xl font-black text-gray-900 uppercase tracking-widest border-l-4 border-[#C15F3C] pl-4">Requirements for Filing</h3>
                        <p className="text-sm">Filing ADT 1 Form is mandatory for all companies, including public, private, listed, unlisted, and one-person companies (OPCs), upon the appointment of an auditor, whether for the first time or at a subsequent Annual General Meeting (AGM). The form must be submitted to the Registrar of Companies (ROC) within 15 days from the date of the auditor's appointment.</p>
                      </div>
                   </div>

                   {/* Penalty Table */}
                   <div className="space-y-6">
                      <h3 className="text-xl font-black text-gray-900 uppercase tracking-widest text-center">ADT 1 Late Fees</h3>
                      <div className="overflow-hidden border border-gray-100 rounded-[32px] shadow-inner">
                        <table className="min-w-full font-bold">
                          <thead className="bg-[#FDF1EC]">
                            <tr>
                               <th className="px-8 py-6 text-left text-[10px] font-black text-[#C15F3C] uppercase tracking-[0.2em]">Sl. No.</th>
                               <th className="px-8 py-6 text-left text-[10px] font-black text-[#C15F3C] uppercase tracking-[0.2em]">Delay in Filing (Number of Days)</th>
                               <th className="px-8 py-6 text-left text-[10px] font-black text-[#C15F3C] uppercase tracking-[0.2em]">Penalty</th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-50 text-sm">
                             {[
                               { d: "Up to 30 days", p: "2 times the normal fee" },
                               { d: "More than 30 days and up to 60 days", p: "4 times the normal fee" },
                               { d: "More than 60 days and up to 90 days", p: "6 times the normal fee" },
                               { d: "More than 90 days and up to 180 days", p: "10 times the normal fee" },
                               { d: "More than 180 days", p: "12 times the normal fee" }
                             ].map((row, i) => (
                              <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                                 <td className="px-8 py-5 text-gray-400">{i + 1}</td>
                                 <td className="px-8 py-5 text-gray-500">{row.d}</td>
                                 <td className="px-8 py-5 text-gray-900 font-extrabold">{row.p}</td>
                              </tr>
                             ))}
                          </tbody>
                        </table>
                      </div>
                   </div>

                   {/* Process */}
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-gray-50/50 p-10 rounded-[40px] border border-gray-100">
                      <div className="space-y-6 text-left">
                        <h3 className="text-lg font-black text-gray-900 uppercase tracking-widest">How to File Form ADT 1</h3>
                        <ol className="space-y-4">
                           {[
                             "Download the E-Form ADT 1",
                             "Fill in the required details",
                             "Attach supporting documents",
                             "Verify and submit the form"
                           ].map((step, i) => (
                             <li key={i} className="flex gap-4 items-center">
                               <div className="w-8 h-8 rounded-full bg-[#C15F3C] text-white flex items-center justify-center font-black text-xs shrink-0">{i+1}</div>
                               <span className="text-sm font-black text-gray-700">{step}</span>
                             </li>
                           ))}
                        </ol>
                      </div>
                      <div className="space-y-6">
                        <h3 className="text-lg font-black text-gray-900 uppercase tracking-widest">How We Can Assist</h3>
                        <div className="space-y-4 text-xs font-bold leading-relaxed text-gray-500 italic">
                           <p><strong>Document Preparation:</strong> We help prepare all the necessary documents required for Form ADT-1, including board resolutions, auditor consents, and declarations.</p>
                           <p><strong>Expert Review:</strong> Our professionals thoroughly review your documentation to ensure accuracy, completeness, and adherence to statutory requirements.</p>
                           <p><strong>End-to-End Filing Support:</strong> We handles the complete filing process on your behalf, ensuring timely and error-free submission of Form ADT-1 through the MCA portal.</p>
                        </div>
                      </div>
                   </div>
                </div>
             </article>

             {/* Documents Sections */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-12">
                <div className="bg-white rounded-[40px] border border-gray-100 p-10 shadow-sm">
                   <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-8 border-l-4 border-[#C15F3C] pl-4">Documents Required For ADT-1 Filing</h3>
                   <div className="space-y-4">
                      {DOCUMENTS_REQUIRED.map((doc, idx) => (
                        <div key={idx} className="flex items-center gap-4 p-4 border-b border-gray-50 group hover:bg-gray-50 transition-all rounded-xl">
                           <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                           <span className="text-[13px] font-bold text-gray-600 group-hover:text-gray-900">{doc.name}</span>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="bg-white rounded-[40px] border border-gray-100 p-10 shadow-sm">
                   <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-8 border-l-4 border-gray-900 pl-4 text-gray-900">Documents Required for Other Registrations</h3>
                   <div className="space-y-3">
                      {OTHER_REGISTRATIONS.map((doc, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 font-bold group hover:border-gray-300 transition-all">
                           <span className="text-[11px] text-gray-400 group-hover:text-gray-900">{doc.name}</span>
                           <span className="bg-[#C15F3C] text-white w-6 h-6 flex items-center justify-center rounded-full text-[10px] font-black">{doc.count}</span>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* Persistent Sticky Sidebar */}
        <aside className="lg:w-80 flex-shrink-0 space-y-6">
           <div className="sticky top-28">
              <SidebarCart />
           </div>
           
           <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm font-bold">
             <h4 className="font-black text-gray-900 mb-8 text-xs border-b pb-4 uppercase tracking-widest">Related Guides</h4>
             <ul className="text-sm space-y-5 text-gray-400">
               {["Form-ADT-1", "MCA Relaxes Levy of Additional Fee", "Exemption for Form Adt 1"].map((item) => (
                 <li key={item} className="hover:text-[#C15F3C] cursor-pointer flex gap-3 group items-center transition-all">
                    <span className="group-hover:translate-x-1 transition-transform group-hover:text-gray-900">{item}</span>
                 </li>
               ))}
             </ul>
           </div>

           <div className="rounded-[40px] overflow-hidden shadow-2xl group border border-gray-100">
             <img src="/images/company-compliance.jpg" alt="compliance" className="w-full h-auto grayscale transition-all duration-700 group-hover:grayscale-0" />
             <div className="p-8 bg-white font-black text-center">
                <div className="text-[14px] text-gray-900 mt-1 uppercase tracking-tighter">Company Compliance</div>
             </div>
           </div>
        </aside>
        </div>
      </main>


      <FAQAccordion category="adt-1-filing" />

      <div className="max-w-[1240px] mx-auto px-6 mb-16">
        <DynamicPricingSection category="adt-1-filing" />
      </div>

      <PopularSearches />
      <Footer />

      {/* WhatsApp CTA */}
      <button className="fixed right-8 bottom-8 z-50 bg-[#C15F3C] text-white p-5 rounded-full shadow-2xl hover:bg-[#A74A2F] hover:scale-110 transition-all border-4 border-white/20">
        <img src={ASSETS.whatsapp} alt="WA" className="w-8 h-8" />
      </button>
    </div>
  );
}
