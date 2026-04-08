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
  heroImage: "/images/din.jpg",
  man: "/images/hero.webp",
  ledgers: "/images/ledgers.jpg",
  whatsapp: "/images/whatsapp.png",
  companyCompliance: "/images/company-compliance.jpg",
  cartIcon: "/images/cart.png",
  indiaFlag: "/images/india-flag.png",
};

export default function DormantStatusFilingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqItems = [
    { q: "What is a dormant company?", a: "A dormant company is a registered entity not engaged in significant business activity or operations. It may be kept for future projects, to hold assets, or for IP management." },
    { q: "How does a company become dormant?", a: "A company can apply to the Registrar for dormant status when it has not carried out significant financial activities and meets the conditions under the Companies Act, 2013." },
    { q: "What are the benefits of dormant company status?", a: "Benefits include preservation of company name, reduced compliance requirements, easier reactivation, and simplified annual returns (MSC-3)." },
    { q: "What defines an inactive company?", a: "An inactive company has not engaged in business activity or significant accounting transactions in the last two financial years, and may not have filed financials or annual returns in that period." },
    { q: "What are significant accounting transactions?", a: "General financial activities; exceptions include payments to ROC, share allotment transactions, and payments for maintaining office/records." },
    { q: "Why might a company seek dormant status?", a: "Reasons include reserving a name, business restructuring, extended absence of owners, or holding assets/IP without active trading." },
    { q: "What are the mandatory requirements for dormant status?", a: "Mandatory requirements include minimum director counts (public 3, private 2, OPC 1), passing a special resolution or obtaining 3/4 shareholder consent, and clearing inspections/prosecutions/outstanding dues." },
    { q: "What is the procedure to file for dormant status?", a: "Procedure: board resolution, EGM and CA certification of statement of affairs, pass special resolution, file MGT-14, submit Form MSC-1 with supporting documents and fees." },
    { q: "What is the annual compliance for a dormant company?", a: "Annual compliance includes maintaining accounts, statutory audit, filing tax returns (TDS/GST/Income Tax where applicable) and simplified ROC annual return in Form MSC-3 within 30 days of year end." },
  ];

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
      <div className="bg-gradient-to-r from-white to-slate-50 py-3 text-slate-800 border-b border-slate-100 font-bold">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 text-sm text-gray-500">
          Home / MCA Services / <span className="text-amber-700 font-medium">Dormant Status Filing</span>
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
                  <h2 className="text-white text-xl font-bold uppercase">DORMANT STATUS FILING</h2>
                  <div className="mt-2 text-sm text-amber-100 uppercase font-bold">Protect your company name</div>
                </div>
                <div className="bg-[rgb(243,246,249)] p-8 flex justify-center items-center flex-1">
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

            {/* Col 2: Info Card */}
            <div className="bg-[#F4F3EE] rounded-2xl border border-gray-200 p-6 shadow-lg flex flex-col h-full">
               <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 mb-2 w-fit">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
                    <span className="text-[10px] font-bold text-amber-700 uppercase tracking-widest">MCA COMPLIANCE</span>
               </div>
               <h1 className="text-2xl font-bold text-slate-900 mb-1">Dormant Status Filing</h1>
               <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />)}
                  <span className="text-[11px] text-slate-400 ml-1">(120 reviews)</span>
               </div>

               <p className="text-[14px] text-slate-500 leading-relaxed mb-6 font-bold">
                 Filing dormant status for a company. Our experts guide you through the entire MSC-1/MSC-3 process and related annual compliance.
               </p>

               <div className="border-2 border-dashed border-amber-200 rounded-xl p-5 bg-amber-50/10 relative mt-auto">
                  <div className="absolute -top-3 left-4 bg-[#F4F3EE] px-2 text-[10px] uppercase font-bold text-amber-700 rounded border border-amber-200 tracking-wider">MSC-1 Exclusive Offer</div>
                  <ul className="space-y-3 mt-1">
                    <li className="flex items-start gap-2 text-[13px] text-slate-600 font-bold">
                      <ChevronRight className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" /> Application Filing in MCA and Provide Dormant Letter
                    </li>
                    <li className="flex items-start gap-2 text-[13px] text-slate-600 font-bold">
                      <ChevronRight className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" /> Form MSC-1 filing assistance
                    </li>
                  </ul>
                  <button className="mt-4 w-full bg-[#9e4a2d] text-white py-3 rounded-lg font-bold hover:bg-[#8b4127] transition-all shadow-md uppercase text-sm tracking-wide">Add to Cart</button>
               </div>

               <div className="mt-6 flex flex-col gap-3 font-bold">
                  <div className="flex items-center justify-between text-[11px] text-amber-700 border-b border-gray-50 pb-2">
                     <span className="underline cursor-pointer">Terms and conditions</span>
                     <span className="underline cursor-pointer font-bold">Refer a Friend</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 border border-gray-100 rounded-xl hover:border-amber-200 transition-colors">
                    <img src={ASSETS.ledgers} alt="ledgers" className="w-10 h-10 object-contain" />
                    <div>
                      <div className="text-[11px] font-bold text-amber-700 uppercase">LEDGERS Platform</div>
                      <div className="text-[10px] text-slate-400 font-bold leading-tight">Annual Compliance Automation</div>
                    </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Article & FAQ Block */}
          <div className="space-y-12">
             <article className="bg-[#F4F3EE] rounded-2xl border border-gray-200 p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-[#9e4a2d] mb-8 border-b-2 border-amber-600/10 pb-4 text-center uppercase">
                   Dormant Status Filing (Bank Statement · Form MSC-1 · Form MSC-3)
                </h2>

                <div className="prose prose-sm max-w-none text-slate-600 space-y-6 leading-relaxed font-bold">
                   <p>
                    As defined under the Companies Act of 2013, a dormant company is registered but not engaged in any significant business activity or operations. It may have been established for future ventures or to hold assets without active trading. Dormant status filing allows these companies to minimise compliance requirements and maintain their registered status without the full spectrum of operational reporting obligations. If your company is in a similar state and you're considering transitioning to a dormant status to reduce compliance burdens, we are here to assist. Our team specialises in navigating the dormant status filing process, offering expert guidance to ensure a seamless transition. Ready to simplify your company's compliance landscape? Contact us today to get started.
                   </p>
                   
                   <h3 className="text-xl font-bold text-slate-900 pt-4 uppercase">What is a Dormant Company?</h3>
                   <p className="border-l-4 border-amber-600 pl-4 py-1 bg-amber-50/20 rounded-r-lg font-bold text-amber-800">
                    A Dormant Company, also known as a Dormant Entity or Dormant Corporation, refers to a registered business entity not currently engaged in significant business activities or operations. Dormant status typically arises when a company has temporarily ceased its operational activities due to strategic reasons such as awaiting a future project, not yet commencing substantial business operations, or primarily existing to hold or manage intellectual property rights without directly engaging in revenue-generating activities. Such companies can apply to the Registrar to obtain the status of a Dormant company, with objectives including: being incorporated for a future project, serving as an asset or intellectual property, having no significant transactions in a specific financial year, or remaining inactive.
                   </p>

                   <h3 className="text-lg font-bold text-slate-900 pt-6 uppercase">Overview of Dormant Status Under the Companies Act of 2013</h3>
                   <p>When a company is established under the Companies Act of 2013 for purposes such as launching a future project, holding assets, or managing intellectual property and hasn't carried out any significant financial activities, it can be considered inactive. Such a company can apply to the Registrar for a change in status to become a dormant company, as outlined in the Companies Act.</p>

                   <h3 className="text-lg font-bold text-slate-900 pt-6 uppercase">Meaning of Inactive Company</h3>
                   <p>An "Inactive Company" refers to a company that has not engaged in any business activity or conducted significant accounting transactions during the last two financial years. It also includes companies that have not filed their financial statements or annual returns with the Registrar of Companies (ROC) during the preceding two financial years.</p>

                   <h3 className="text-lg font-bold text-slate-900 pt-6 uppercase">Significant Accounting Transactions</h3>
                   <p>Significant accounting transactions include all company financial activities, with the following exceptions: payments to the ROC or for fulfilling requirements under the Companies Act or any other applicable laws; transactions related to the allotment of shares; payments for the maintenance of the company's office or records.</p>

                   <h3 className="text-lg font-bold text-slate-900 pt-6 uppercase">Reasons for Obtaining the Status of a Dormant Company</h3>
                   <p>Name Reservation: Business owners may register their company as dormant while preparing to launch their business, serving as a means to reserve the company name. Business Restructuring: When owners plan to restructure their operations, obtaining dormant status may be beneficial. Extended Absences: If owners anticipate extended periods away from operations due to illness, travel, maternity leave, sabbatical, etc., they may choose dormant status.</p>

                   <h3 className="text-lg font-bold text-slate-900 pt-6 uppercase">Benefits of Opting for Dormant Company Status</h3>
                   <ul className="list-disc pl-5 space-y-2 font-bold text-amber-700">
                     <li>Preservation of Company Name: Ensures the company name is protected during inactivity.</li>
                     <li>Reduced Compliance Requirements: Lowers regulatory burden under the Companies Act 2013.</li>
                     <li>Opportunity for Reactivation: Flexibility to resume activities without forming a new entity.</li>
                     <li>Limited Applicability of Company Act Provisions: Simplifies legal compliance.</li>
                     <li>Easier Annual Return Filing: Streamlines filing via Form MSC-3.</li>
                     <li>No Auditor Rotation: Exempt from auditor rotation obligations.</li>
                     <li>Bi-Annual Board Meetings: Only one board meeting every six months.</li>
                   </ul>

                   <h3 className="text-lg font-bold text-slate-900 pt-6 uppercase">Mandatory Requirements for Obtaining Dormant Status</h3>
                   <p>To qualify under Section 455(5) and Rule 6: Minimum number of directors (public: 3, private: 2, OPC: 1). A special resolution or shareholder consent of at least three-fourths (by value) is required. No ongoing inspections, inquiries, prosecutions, outstanding public deposits, defaults, or undisclosed disputes. All statutory taxes, dues, duties, etc., must be cleared. The company's securities must not be listed on any stock exchange.</p>

                   <h3 className="text-lg font-bold text-slate-900 pt-6 uppercase underline">Procedure for Dormant Status Filing</h3>
                   <ol className="list-decimal pl-5 space-y-3 font-bold text-slate-700">
                     <li>Board Meeting: Pass a resolution to apply for dormant status and authorise a director to manage the process.</li>
                     <li>EGM Notice: Send detailed notice for EGM with an explanatory statement.</li>
                     <li>CA Certification: Get the company's Statement of Affairs certified by a statutory auditor or CA.</li>
                     <li>Conduct EGM: Pass special resolution in compliance with relevant sections and secretarial standards.</li>
                     <li>File MGT-14: File the special resolution with ROC within 30 days.</li>
                     <li>Submit MSC-1: Apply for dormant status with required documents and fees.</li>
                     <li>Issuance of MSC-2: Registrar issues certificate granting dormant status; file MSC-3 annually.</li>
                   </ol>

                   <h3 className="text-lg font-bold text-slate-900 pt-8 uppercase">Annual Compliance for Dormant Company</h3>
                   <p className="text-sm font-bold leading-relaxed border-l-4 border-amber-200 pl-4">
                     Annual compliance remains necessary: accounting & financial statements, statutory audits, tax return filings (TDS/GST/Income Tax where applicable), and ROC returns using Form MSC-3 within 30 days of the financial year end. Maintain registered address, conduct bi-annual board meetings, and prepare audited financial position statements certified by a practising CA.
                   </p>

                   <h3 className="text-lg font-bold text-[#9e4a2d] pt-8 uppercase">Simplify Dormant Status Filing with Us</h3>
                   <p className="text-sm font-bold">
                     We assist with the entire Dormant Status filing process, from documentation to application and annual compliance. Simplify your Dormant Status filing today - Get Started now!
                   </p>
                </div>
             </article>

             {/* Documents Sections */}
             <div className="space-y-8">
                <div className="bg-[#F4F3EE] rounded-2xl border border-gray-200 p-8 shadow-sm">
                   <h3 className="text-xl font-bold text-[#9e4a2d] mb-6 border-b border-gray-50 pb-3 uppercase text-[16px]">Documents Required For Dormant Status Filing</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {DOCUMENTS_REQUIRED.map((doc, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 bg-[#F4F3EE]/50 rounded-xl border border-gray-100 font-bold group hover:border-amber-200 transition-colors">
                           <span className="text-sm text-slate-700 group-hover:text-amber-800 leading-tight">{doc.name}</span>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="bg-[#F4F3EE] rounded-2xl border border-gray-200 p-8 shadow-sm">
                   <h3 className="text-xl font-bold text-[#9e4a2d] mb-6 border-b border-gray-50 pb-3 uppercase text-[16px]">Documents Required for Other Registrations</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {OTHER_REGISTRATIONS.map((doc, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 bg-[#F4F3EE] rounded-xl border border-gray-200 font-bold group hover:border-amber-300 transition-all hover:shadow-md">
                           <span className="text-[13px] text-slate-700 group-hover:text-amber-800">{doc.name}</span>
                           <span className="bg-amber-100 text-amber-700 w-7 h-7 flex items-center justify-center rounded-full text-xs font-bold">{doc.count}</span>
                        </div>
                      ))}
                   </div>
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
           <div className="sticky top-28 space-y-6">
              <SidebarCart />
              
              <div className="bg-[#F4F3EE] p-6 rounded-2xl border border-gray-200 shadow-sm font-bold">
                <h4 className="font-bold text-slate-900 mb-5 text-[14px] border-b pb-3 uppercase tracking-wider">Related Legal Guides</h4>
                <ul className="text-[13px] space-y-4 text-amber-700">
                  {["Register as Dormant Company", "First Board Meeting Guide", "Company Law Settlement", "Strike Off Procedure 2024", "Removal of Name"].map((item) => (
                    <li key={item} className="hover:text-amber-800 cursor-pointer flex gap-3 group items-center">
                       <div className="w-1.5 h-1.5 bg-amber-600/50 rounded-full group-hover:scale-125 transition-transform" />
                       <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:scale-[1.02] transition-transform">
                <img src={ASSETS.companyCompliance} alt="compliance" className="w-full h-auto object-cover" />
                <div className="p-5 bg-[#F4F3EE] font-bold">
                  <div className="text-[13px] text-slate-800 uppercase">Company Compliance</div>
                  <div className="text-[11px] text-slate-400 mt-1 font-bold">Annual Maintenance Package</div>
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
        <span className="font-bold text-[15px]">Expert Help</span>
      </div>
    </div>
  );
}
