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
  heroImage: "/images/din.jpg",
  man: "/images/hero.webp",
  ledgers: "/images/ledgers.jpg",
  whatsapp: "/images/whatsapp.png",
  companyCompliance: "/images/company-compliance.jpg",
  cartIcon: "/images/cart.png",
  indiaFlag: "/images/india-flag.png",
};

export default function DormantStatusFilingPage() {
  const DOCUMENTS_REQUIRED = [
    { name: "Bank Statement", count: "" },
    { name: "Accounting and Income Tax Filing for Nil-Filing Companies", count: "" },
    { name: "Form MSC-1 Application to the Registrar", count: "" },
  ];

  const OTHER_REGISTRATIONS = [
    { name: "Documents Required for LLP Registration", count: 8 },
    { name: "Documents Required for Proprietorship Registration", count: 2 },
    { name: "Documents Required for Company Registration", count: 2 },
    { name: "Documents Required for Trademark Registration", count: 7 },
    { name: "Documents Required for GST Registration", count: 10 },
  ];

  return (
    <div className="min-h-screen bg-[#F4F3EE] text-slate-800">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-[#F4F3EE] py-4 font-bold">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 text-sm text-gray-500">
          Home / MCA Services / <span className="text-amber-700 font-medium tracking-tight">Dormant Status Filing</span>
        </div>
      </div>

      <main className="max-w-[1240px] mx-auto px-4 sm:px-6 py-4">
        
        {/* Row 1: Hero & Article Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Hero & Info Area */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {/* Col 1: Hero Image Card */}
              <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm flex flex-col h-full overflow-hidden">
                <div className="rounded-lg overflow-hidden border border-gray-100 flex-1 flex flex-col bg-white">
                  <div className="bg-[#9e4a2d] p-6 text-center">
                    <h2 className="text-white text-xl font-bold uppercase tracking-tight">DORMANT STATUS FILING</h2>
                    <div className="mt-2 text-sm text-amber-100 uppercase font-bold tracking-widest text-[10px]">Dormant Status Filing</div>
                  </div>
                  <div className="bg-white p-8 flex justify-center items-center flex-1">
                    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10 scale-110">
                      <img src={ASSETS.man} alt="Dormant Status" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/5" />
                    </div>
                  </div>
                </div>
                <ul className="mt-4 text-[13px] space-y-2 text-gray-600 font-bold px-2 pb-2">
                  {["Bank Statement", "Form MSC-1", "Form MSC-3"].map(s => (
                    <li key={s} className="hover:text-amber-700 transition-colors flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-600/30 rounded-full" /> {s}
                    </li>
                  ))}
                  <li className="text-amber-700 underline hover:text-amber-800 cursor-pointer font-bold pl-3.5">Load More</li>
                </ul>
              </div>

              {/* Col 2: Info Card - Updated contents */}
              <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col h-full">
                <div className="flex items-center gap-1.5 bg-white border border-gray-100 rounded-full px-3 py-1 mb-2 w-fit shadow-sm">
                  <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">MCA COMPLIANCE</span>
                </div>
                <h1 className="text-2xl font-bold text-slate-900 mb-1 tracking-tight">Dormant Status Filing</h1>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 ${i < 4 ? 'text-amber-500 fill-amber-500' : 'text-gray-200'}`} />)}
                  <span className="text-[11px] text-slate-400 font-medium ml-1">(4)</span>
                </div>

                <p className="text-[12px] text-slate-500 leading-relaxed mb-6 font-bold">
                  Filing dormant status for a company. Our experts guide you through the entire MSC-1/MSC-3 process and related annual compliance.
                </p>

                <div className="border-2 border-dashed border-amber-200/50 rounded-2xl p-6 bg-white relative mt-auto">
                  <div className="absolute -top-3 left-6 bg-white px-3 text-[10px] uppercase font-bold text-amber-700 rounded-full border border-amber-100 tracking-wider shadow-sm">1 Exclusive Offers</div>
                  
                  <div className="mb-4">
                     <p className="text-sm font-bold text-slate-900 mb-3">Basic</p>
                     <div className="space-y-3 font-bold text-[13px] text-slate-600">
                        <div className="flex items-start gap-4">
                          <ChevronRight className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" /> Application Filing in MCA and Provide Dormant Letter
                        </div>
                        <div className="flex items-start gap-4">
                          <ChevronRight className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" /> Form MSC-1 filing assistance
                        </div>
                     </div>
                  </div>
                  
                  <button className="mt-4 w-full bg-[#9e4a2d] text-white py-4 rounded-xl font-bold hover:shadow-lg transition-all shadow-md uppercase text-[12px] tracking-wide">ADD TO CART</button>
                </div>

                <div className="mt-8 flex flex-col gap-4 font-bold">
                  <div className="flex items-center justify-between text-[11px] text-amber-700 border-b border-gray-50 pb-2">
                    <span className="underline cursor-pointer">Terms and conditions</span>
                    <span className="underline cursor-pointer">Refer a Friend</span>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Offers and discounts</p>
                    <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-2xl hover:border-amber-200 transition-all bg-white shadow-sm group">
                      <img src={ASSETS.ledgers} alt="ledgers" className="w-10 h-10 object-contain rounded" />
                      <div>
                        <div className="text-[11px] font-bold text-slate-800 uppercase tracking-tight group-hover:text-amber-700 transition-colors">LEDGERS - Compliance Platform</div>
                        <div className="text-[10px] text-slate-400 font-bold leading-tight uppercase">Invoicing, GST Filing, Banking and Payroll</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FULL ARTICLE RESTORATION */}
            <article className="bg-white rounded-2xl border border-gray-100 p-10 shadow-sm">
              <h2 className="text-2xl font-bold text-[#9e4a2d] mb-8 border-b border-gray-100 pb-5 text-center uppercase tracking-wide">
                Dormant Status Filing (Bank Statement · Form MSC-1 · Form MSC-3)
              </h2>

              <div className="prose prose-sm max-w-none text-slate-600 space-y-6 leading-relaxed font-bold">
                <p>
                  As defined under the Companies Act of 2013, a dormant company is registered but not engaged in any significant business activity or operations. It may have been established for future ventures or to hold assets without active trading. Dormant status filing allows these companies to minimise compliance requirements and maintain their registered status without the full spectrum of operational reporting obligations. If your company is in a similar state and you're considering transitioning to a dormant status to reduce compliance burdens, we are here to assist. Our team specialises in navigating the dormant status filing process, offering expert guidance to ensure a seamless transition. Ready to simplify your company's compliance landscape? Contact us today to get started.
                </p>

                <h3 className="text-xl font-bold text-slate-900 pt-4 uppercase">What is a Dormant Company?</h3>
                <div className="border-l-4 border-amber-600 pl-6 py-2 bg-white rounded-r-2xl font-bold text-slate-700 shadow-sm border border-gray-50 mb-6">
                   A Dormant Company, also known as a Dormant Entity or Dormant Corporation, refers to a registered business entity not currently engaged in significant business activities or operations. Dormant status typically arises when a company has temporarily ceased its operational activities due to strategic reasons such as awaiting a future project, not yet commencing substantial business operations, or primarily existing to hold or manage intellectual property rights without directly engaging in revenue-generating activities. Such companies can apply to the Registrar to obtain the status of a Dormant company, with objectives including: being incorporated for a future project, serving as an asset or intellectual property, having no significant transactions in a specific financial year, or remaining inactive.
                </div>

                <h3 className="text-lg font-bold text-slate-900 pt-6 uppercase italic">Overview of Dormant Status Under the Companies Act of 2013</h3>
                <p>When a company is established under the Companies Act of 2013 for purposes such as launching a future project, holding assets, or managing intellectual property and hasn't carried out any significant financial activities, it can be considered inactive. Such a company can apply to the Registrar for a change in status to become a dormant company, as outlined in the Companies Act.</p>

                <h3 className="text-lg font-bold text-slate-900 pt-6 uppercase">Meaning of Inactive Company</h3>
                <p>An "Inactive Company" refers to a company that has not engaged in any business activity or conducted significant accounting transactions during the last two financial years. It also includes companies that have not filed their financial statements or annual returns with the Registrar of Companies (ROC) during the preceding two financial years.</p>

                <h3 className="text-lg font-bold text-slate-900 pt-6 uppercase">Significant Accounting Transactions</h3>
                <p>Significant accounting transactions include all company financial activities, with the following exceptions: payments to the ROC or for fulfilling requirements under the Companies Act or any other applicable laws; transactions related to the allotment of shares; payments for the maintenance of the company's office or records.</p>

                <h3 className="text-lg font-bold text-slate-900 pt-6 uppercase underline">Reasons for Obtaining the Status of a Dormant Company</h3>
                <div className="space-y-4 text-[13px]">
                   <p><span className="text-amber-700">Name Reservation:</span> Business owners may register their company as dormant while preparing to launch their business, serving as a means to reserve the company name.</p>
                   <p><span className="text-amber-700">Business Restructuring:</span> When owners plan to restructure their operations, obtaining dormant status may be beneficial.</p>
                   <p><span className="text-amber-700">Extended Absences:</span> If owners anticipate extended periods away from operations due to illness, travel, maternity leave, sabbatical, etc., they may choose dormant status.</p>
                </div>

                <h3 className="text-lg font-bold text-slate-900 pt-8 uppercase underline">Benefits of Opting for Dormant Company Status</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 list-none pl-0 font-bold text-slate-700 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                   {[
                     "Preservation of Company Name",
                     "Reduced Compliance Requirements",
                     "Opportunity for Reactivation",
                     "Limited Applicability of Provisions",
                     "Easier Annual Return Filing",
                     "No Auditor Rotation",
                     "Bi-Annual Board Meetings"
                   ].map(it => (
                     <li key={it} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-amber-600" /> {it}
                     </li>
                   ))}
                </ul>

                <h3 className="text-lg font-bold text-slate-900 pt-8 uppercase underline">Mandatory Requirements for Obtaining Dormant Status</h3>
                <p className="text-[13px] leading-relaxed">To qualify under Section 455(5) and Rule 6: Minimum number of directors (public: 3, private: 2, OPC: 1). A special resolution or shareholder consent of at least three-fourths (by value) is required. No ongoing inspections, inquiries, prosecutions, outstanding public deposits, defaults, or undisclosed disputes. All statutory taxes, dues, duties, etc., must be cleared. The company's securities must not be listed on any stock exchange.</p>

                <h3 className="text-lg font-bold text-slate-900 pt-8 uppercase underline">Procedure for Dormant Status Filing</h3>
                <div className="space-y-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mt-4">
                  {[
                    "Board Meeting: Pass a resolution to apply for dormant status and authorise a director to manage the process.",
                    "EGM Notice: Send detailed notice for EGM with an explanatory statement.",
                    "CA Certification: Get the company's Statement of Affairs certified by a statutory auditor or CA.",
                    "Conduct EGM: Pass special resolution in compliance with relevant sections and secretarial standards.",
                    "File MGT-14: File the special resolution with ROC within 30 days.",
                    "Submit MSC-1: Apply for dormant status with required documents and fees.",
                    "Issuance of MSC-2: Registrar issues certificate granting dormant status; file MSC-3 annually."
                  ].map((step, idx) => (
                    <div key={idx} className="flex gap-4 items-start text-[13px]">
                       <span className="w-6 h-6 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 font-bold text-[11px] border border-amber-100">{idx+1}</span>
                       <span>{step}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-lg font-bold text-slate-900 pt-8 uppercase">ROC Forms for Dormant Company Registration</h3>
                <div className="overflow-hidden rounded-xl border border-gray-100 shadow-sm mt-4">
                  <table className="w-full text-left text-[12px] border-collapse">
                    <thead className="bg-[#9e4a2d] text-white uppercase text-[10px] tracking-widest font-bold">
                      <tr>
                        <th className="px-6 py-4 border-b border-white/10">S.No</th>
                        <th className="px-6 py-4 border-b border-white/10">Form Name</th>
                        <th className="px-6 py-4 border-b border-white/10">Explanation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr>
                        <td className="px-6 py-4 font-bold text-slate-900 bg-white">1</td>
                        <td className="px-6 py-4 font-bold text-slate-900 bg-white">e-Form MGT-14</td>
                        <td className="px-6 py-4 text-slate-500 bg-white">Submitted to ROC within 30 days of passing special resolution.</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-bold text-slate-900 bg-white">2</td>
                        <td className="px-6 py-4 font-bold text-slate-900 bg-white">e-Form MSC-1</td>
                        <td className="px-6 py-4 text-slate-500 bg-white">Used to apply for change of company status to Dormant.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-bold text-slate-900 pt-8 uppercase underline">Annual Compliance for Dormant Company</h3>
                <p className="text-[13px] leading-relaxed italic border-l-2 border-gray-100 pl-4 py-1">
                  Annual compliance remains necessary: accounting & financial statements, statutory audits, tax return filings (TDS/GST/Income Tax where applicable), and ROC returns using Form MSC-3 within 30 days of the financial year end. Maintain registered address, conduct bi-annual board meetings, and prepare audited financial position statements certified by a practising CA.
                </p>

                <h3 className="text-xl font-bold text-[#9e4a2d] pt-8 uppercase tracking-tight">Simplify Dormant Status Filing with Us</h3>
                <p className="text-[14px] font-bold">
                  We assist with the entire Dormant Status filing process, from documentation to application and annual compliance. Simplify your Dormant Status filing today - Get Started now!
                </p>
              </div>
            </article>

            {/* Documents Section */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
              <h3 className="text-lg font-bold text-[#9e4a2d] mb-6 border-b border-gray-50 pb-3 uppercase tracking-tight">Documents Checklist</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {DOCUMENTS_REQUIRED.map((doc, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 font-bold group hover:border-amber-200 transition-colors shadow-sm">
                    <Plus className="w-4 h-4 text-amber-600" />
                    <span className="text-sm text-slate-700 leading-tight">{doc.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="lg:sticky lg:top-28">
              <SidebarCart />
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm font-bold">
              <h4 className="font-bold text-slate-900 mb-5 text-[14px] border-b border-gray-50 pb-3 uppercase tracking-wider">Legal Guides</h4>
              <ul className="text-[13px] space-y-4 text-amber-700/80">
                {["Dormant Company Status", "Board Resolution Form", "MSC-3 Compliance Guide", "Closing Company 2024"].map((item) => (
                  <li key={item} className="hover:text-amber-900 cursor-pointer flex gap-3 group items-center text-left">
                    <ChevronRight className="w-4 h-4 text-amber-600 group-hover:translate-x-1 transition-transform shrink-0" />
                    <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 group bg-white">
              <img src={ASSETS.companyCompliance} alt="compliance" className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="p-6 bg-white font-bold leading-tight">
                <div className="text-[13px] text-slate-800 uppercase tracking-tight">Company Compliance</div>
                <div className="text-[11px] text-slate-400 mt-1 font-bold leading-none uppercase">Annual Maintenance</div>
              </div>
            </div>
          </aside>
        </div>

        {/* FULL WIDTH FAQ SECTION */}
        <div className="mt-12 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            <FAQAccordion category="dormant-status-filing" />
        </div>

        {/* Popular Searches */}
        <div className="mt-12 overflow-hidden">
          <PopularSearches />
        </div>
      </main>

      <Footer />

      {/* Support CTA */}
      <div className="fixed right-6 bottom-6 bg-[#9e4a2d] text-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-3 z-50 hover:scale-105 transition-all cursor-pointer shadow-amber-900/20">
        <img src={ASSETS.whatsapp} alt="wa" className="w-6 h-6" />
        <span className="font-bold text-[15px] uppercase tracking-wide">Expert Support</span>
      </div>
    </div>
  );
}
