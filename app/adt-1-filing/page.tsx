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
  heroImage: "/images/adt1-hero.jpg",
  man: "https://img.indiafilings.com/catalog/mca-compliance-simplified-india.webp",
  ledgers: "/images/ledgers.jpg",
  whatsapp: "/images/whatsapp.png",
  companyCompliance: "/images/company-compliance.jpg",
  cartIcon: "/images/cart.png",
  indiaFlag: "/images/india-flag.png",
};

export default function ADT1FilingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqItems = [
    { q: "What is Form ADT-1?", a: "Form ADT-1 is a statutory return filed by companies with the Registrar of Companies (ROC) to report the appointment of an auditor." },
    { q: "Who is responsible for filing Form ADT-1?", a: "The company is responsible for filing Form ADT-1 when an auditor is appointed or reappointed." },
    { q: "Is Form ADT-1 required for the appointment of the first auditor?", a: "Yes ΓÇö ADT-1 is mandatory for first auditor appointments under the updated rules." },
    { q: "When should Form ADT-1 be filed?", a: "ADT-1 must be filed within 15 days from the date of the auditor's appointment." },
    { q: "What is the penalty for late filing of Form ADT-1?", a: "Late filing attracts additional fees ranging from 2 to 12 times the normal fee depending on the delay." },
    { q: "What are the documents required for filing Form ADT-1?", a: "Typical attachments include: Board resolution, consent of auditor, auditor certificate under Section 141, and intimation copy to auditor." },
  ];

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
    <div className="min-h-screen bg-[#ffffff] text-slate-800">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-gradient-to-r from-white to-slate-50 py-3 text-slate-800 border-b border-slate-100 font-bold">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 text-sm text-gray-500">
          Home / MCA Services / <span className="text-amber-700 font-medium">ADT-1 Filing</span>
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
                  <h2 className="text-white text-xl font-bold uppercase">ADT-1 FILING</h2>
                  <div className="mt-2 text-sm text-amber-100 uppercase font-bold">Auditor notification to ROC</div>
                </div>
                <div className="bg-[rgb(243,246,249)] p-8 flex justify-center items-center flex-1">
                   <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10 scale-110">
                      <img src={ASSETS.man} alt="ADT-1" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/5" />
                   </div>
                </div>
              </div>
              <ul className="mt-4 text-[13px] space-y-2 text-gray-600 font-bold px-2 pb-2">
                {["Form ADT-1 Filed", "Acknowledgement Copy"].map(s => (
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
               <h1 className="text-2xl font-bold text-slate-900 mb-1">ADT-1 Filing</h1>
               <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />)}
                  <span className="text-[11px] text-slate-400 ml-1">(2,709 reviews)</span>
               </div>

               <p className="text-[14px] text-slate-500 leading-relaxed mb-6 font-bold">
                 Auditor appointment services include help with discovering, engaging and appointing of Auditor for newly incorporated Private Limited Company (Audit fee will be extra based on the nature and volume of transaction).
               </p>

               <div className="border-2 border-dashed border-amber-200 rounded-xl p-5 bg-amber-50/10 relative mt-auto">
                  <div className="absolute -top-3 left-4 bg-white px-2 text-[10px] uppercase font-bold text-amber-700 rounded border border-amber-200 tracking-wider">Expert Compliance</div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-2 text-[13px] text-slate-600 font-bold">
                      <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" /> Form ADT-1 E-filing with MCA
                    </li>
                    <li className="flex items-start gap-2 text-[13px] text-slate-600 font-bold">
                      <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" /> ROC Acknowledgement Copy delivery
                    </li>
                  </ul>
                  <button className="mt-5 w-full bg-[#9e4a2d] text-white py-3 rounded-lg font-bold hover:bg-[#8b4127] transition-all shadow-md uppercase text-sm tracking-wide">ADD TO CART</button>
               </div>

               <div className="mt-6 flex flex-col gap-3 font-bold">
                  <div className="flex items-center justify-between text-[11px] text-amber-700 border-b border-gray-50 pb-2">
                     <span className="underline cursor-pointer">Terms and conditions</span>
                     <span className="underline cursor-pointer">Refer a Friend</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 border border-gray-100 rounded-xl hover:border-amber-200 transition-colors">
                    <img src={ASSETS.ledgers} alt="ledgers" className="w-10 h-10 object-contain" />
                    <div>
                      <div className="text-[11px] font-bold text-amber-700 uppercase">LEDGERS Platform</div>
                      <div className="text-[10px] text-slate-400 font-bold">Secure Document Management</div>
                    </div>
                  </div>
               </div>
            </div>
          </div>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Statutory Filing", desc: "Notification to ROC about auditor appointment as per Companies Act 2013.", icon: "📋" },
              { title: "Avoid Late Fees", desc: "Submit within 15 days to avoid high additional fees from MCA.", icon: "🛡" },
              { title: "Expert Services", desc: "Complete support for board resolutions and auditor consents.", icon: "🎓" }
            ].map((b, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:border-amber-200 transition-colors">
                 <div className="text-2xl mb-3">{b.icon}</div>
                 <h3 className="font-bold text-slate-900 mb-2 uppercase text-sm">{b.title}</h3>
                 <p className="text-[13px] text-gray-500 font-bold leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </section>

          <div className="space-y-12">
             <article className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <h1 className="text-2xl font-bold text-[#9e4a2d] mb-8 border-b-2 border-amber-600/10 pb-4 text-center uppercase">
                   ADT-1 Filing Guide
                </h1>

                <div className="prose prose-sm max-w-none text-slate-600 space-y-6 leading-relaxed font-bold">
                   <p>
                    Appointing an auditor is a mandatory compliance step for every company, and filing Form ADT-1 with the Registrar of Companies (ROC) is a legal requirement under the Companies Act, 2013. Whether you're appointing your first auditor after incorporation or reappointing one at your Annual General Meeting (AGM), timely and accurate filing is essential to avoid penalties.
                   </p>
                   
                   <h3 className="text-xl font-bold text-slate-900 pt-4 uppercase">What is the ADT 1 Form?</h3>
                   <p>Form ADT 1 is a statutory return filed by companies with the Registrar of Companies (ROC) to report the appointment of an auditor, as required under Section 139 of the Companies Act, 2013. It is used to formally notify the ROC when a company appoints its first auditor after incorporation or appoints/reappoints an auditor at the Annual General Meeting (AGM).</p>

                   <h3 className="text-lg font-bold text-slate-900 pt-6 uppercase">Requirements for Filing ADT 1 Form</h3>
                   <p>Filing ADT 1 Form is mandatory for all companies, including public, private, listed, unlisted, and one-person companies (OPCs), upon the appointment of an auditor, whether for the first time or at a subsequent Annual General Meeting (AGM). The form must be submitted to the Registrar of Companies (ROC) within 15 days from the date of the auditor's appointment.</p>

                   <div className="overflow-x-auto my-6 border border-amber-100 rounded-xl">
                     <table className="min-w-full divide-y divide-amber-100 font-bold">
                       <thead className="bg-amber-50">
                         <tr>
                            <th className="px-4 py-3 text-left text-[11px] font-bold text-amber-900 uppercase tracking-widest">Sl. No.</th>
                            <th className="px-4 py-3 text-left text-[11px] font-bold text-amber-900 uppercase tracking-widest">Delay in Filing (Number of Days)</th>
                            <th className="px-4 py-3 text-left text-[11px] font-bold text-amber-900 uppercase tracking-widest">Penalty</th>
                         </tr>
                       </thead>
                       <tbody className="bg-white divide-y divide-gray-50 text-[13px] text-slate-700">
                         <tr><td className="px-4 py-3">1</td><td className="px-4 py-3 font-bold">Up to 30 days</td><td className="px-4 py-3 font-bold text-amber-700">2 times the normal fee</td></tr>
                         <tr><td className="px-4 py-3">2</td><td className="px-4 py-3 font-bold">More than 30 days and up to 60 days</td><td className="px-4 py-3 font-bold text-amber-700">4 times the normal fee</td></tr>
                         <tr><td className="px-4 py-3">3</td><td className="px-4 py-3 font-bold">More than 60 days and up to 90 days</td><td className="px-4 py-3 font-bold text-amber-700">6 times the normal fee</td></tr>
                         <tr><td className="px-4 py-3">4</td><td className="px-4 py-3 font-bold">More than 90 days and up to 180 days</td><td className="px-4 py-3 font-bold text-amber-700">10 times the normal fee</td></tr>
                         <tr><td className="px-4 py-3">5</td><td className="px-4 py-3 font-bold">More than 180 days</td><td className="px-4 py-3 font-bold text-amber-700">12 times the normal fee</td></tr>
                       </tbody>
                     </table>
                   </div>

                   <h3 className="text-lg font-bold text-slate-900 pt-6 uppercase">How to File Form ADT 1 (E-Filing Process)</h3>
                   <ol className="list-decimal pl-5 space-y-2 font-bold text-slate-700">
                      <li>Download the E-Form ADT 1.</li>
                      <li>Fill in the required details precisely.</li>
                      <li>Attach all supporting documents (Resolutions, Consents).</li>
                      <li>Verify and submit the form through the MCA portal.</li>
                   </ol>

                   <h3 className="text-lg font-bold text-slate-900 pt-6 uppercase">How We Can Assist with Filing Form ADT-1</h3>
                   <ul className="list-disc pl-5 space-y-2 font-bold text-amber-700">
                     <li>Document Preparation: We help prepare all the necessary documents required for Form ADT-1, including board resolutions, auditor consents, and declarations.</li>
                     <li>Expert Review: Our professionals thoroughly review your documentation to ensure accuracy, completeness, and adherence to statutory requirements.</li>
                     <li>End-to-End Filing Support: We handle the complete filing process on your behalf, ensuring timely and error-free submission of Form ADT-1 through the MCA portal.</li>
                   </ul>
                </div>
             </article>

             {/* Documents Sections */}
             <div className="space-y-8">
                <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                   <h3 className="text-xl font-bold text-[#9e4a2d] mb-6 border-b border-gray-50 pb-3 uppercase text-[16px]">Documents Required For ADT-1 Filing</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {DOCUMENTS_REQUIRED.map((doc, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 bg-white/50 rounded-xl border border-gray-100 font-bold group hover:border-amber-200 transition-colors">
                           <span className="text-sm text-slate-700 group-hover:text-amber-800 leading-tight">{doc.name}</span>
                        </div>
                      ))}
                   </div>
                   <div className="flex gap-3 items-center flex-wrap mt-4">
  <button className="mt-8 text-amber-700 underline font-bold text-sm pl-2">Load More</button>
  <AddQuestionModal />
</div>
</div>

                <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                   <h3 className="text-xl font-bold text-[#9e4a2d] mb-6 border-b border-gray-50 pb-3 uppercase text-[16px]">Documents Required for Other Registrations</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {OTHER_REGISTRATIONS.map((doc, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 font-bold group hover:border-amber-300 transition-all hover:shadow-md">
                           <span className="text-[13px] text-slate-700 group-hover:text-amber-800">{doc.name}</span>
                           <span className="bg-amber-100 text-amber-700 w-7 h-7 flex items-center justify-center rounded-full text-xs font-bold">{doc.count}</span>
                        </div>
                      ))}
                   </div>
                </div>
             </div>

             {/* FAQ Section */}
             <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <h3 className="text-xl font-bold text-[#9e4a2d] mb-8 border-b border-gray-50 pb-4 uppercase tracking-widest text-[16px]">FAQ's</h3>
                <div className="space-y-4">
                  {faqItems.map((faq, idx) => (
                    <div key={idx} className="border border-slate-100 rounded-xl overflow-hidden hover:border-amber-200 transition-colors shadow-sm bg-white">
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
  <AddQuestionModal />
</div>
</div>
          </div>
        </section>

        {/* Global Sidebar: Persistent Sticky Content */}
        <aside className="lg:w-80 flex-shrink-0 space-y-6">
           <div className="sticky top-28 space-y-6">
              <SidebarCart />
              
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm font-bold">
                <h4 className="font-bold text-slate-900 mb-5 text-[14px] border-b pb-3 uppercase tracking-wider">Related Guides</h4>
                <ul className="text-[13px] space-y-4 text-amber-700">
                  {["Form ADT-1 Overview", "MCA Fee Exemption Rules", "Audit Appointment Exemptions"].map((item) => (
                    <li key={item} className="hover:text-amber-800 cursor-pointer flex gap-3 group items-center">
                       <div className="w-1.5 h-1.5 bg-amber-600/50 rounded-full group-hover:scale-125 transition-transform" />
                       <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:scale-[1.02] transition-transform">
                <img src={ASSETS.companyCompliance} alt="compliance" className="w-full h-auto object-cover" />
                <div className="p-5 bg-white font-bold">
                   <div className="text-[13px] text-slate-800 uppercase">Corporate Compliance</div>
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
