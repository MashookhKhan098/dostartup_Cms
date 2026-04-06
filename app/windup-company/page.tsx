"use client";

import React, { useState } from "react";
import { ChevronRight, ShoppingBag, Star, Plus, CheckCircle, Search, Users, Check, Zap } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PopularSearches from "../components/PopularSearches";
import SidebarCart from "../components/SidebarCart";

const ASSETS = {
  heroImage: "/images/windup.png",
  whatsapp: "/images/whatsapp.png",
  companyCompliance: "/images/company-compliance.jpg",
};

export default function WindupCompanyPage() {
  const [llpName, setLlpName] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#f8f9fb] font-sans text-gray-800">
      <Navbar />

      {/* Main Content Container */}
      <main className="max-w-[1240px] mx-auto px-6 py-8">
        
        {/* Full-width Dark Hero Section */}
        <div className="bg-[#0b101a] rounded-3xl overflow-hidden mb-8 flex flex-col md:flex-row relative shadow-xl">
          <div className="flex-1 p-10 md:p-14 z-10 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-white mb-4 leading-[1.2]">
              Company Windup / Voluntary Closure
            </h1>
            <p className="text-[15px] md:text-base text-gray-300 mb-10 max-w-lg leading-relaxed">
              Close your company or LLP legally and efficiently. Get expert assistance for
              striking off your company name from the MCA register with complete documentation support.
            </p>
            
            <div className="flex items-center gap-0 w-full max-w-md bg-transparent border border-gray-700/60 rounded-full p-1.5 focus-within:border-gray-500 transition-colors">
              <input 
                type="text" 
                placeholder="ENTER LLP NAME" 
                className="bg-transparent text-white px-5 py-3 outline-none flex-1 placeholder-gray-500 text-sm tracking-wide"
                value={llpName}
                onChange={(e) => setLlpName(e.target.value)}
              />
              <button className="bg-white text-gray-900 px-8 py-3 rounded-full text-sm font-bold hover:bg-gray-100 transition-colors">
                Windup
              </button>
            </div>
          </div>
          
          <div className="relative w-full md:w-5/12 min-h-[300px] md:min-h-full opacity-80 md:opacity-100">
             {/* Scale of Justice Hero Image Placeholder */}
             <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${ASSETS.heroImage})` }}>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0b101a] via-[#0b101a]/40 to-transparent md:hidden" />
                <div className="hidden md:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0b101a] to-transparent" />
             </div>
          </div>
        </div>

        {/* 3 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-start">
             <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center mb-4 text-indigo-600">
               <Users size={20} className="fill-indigo-600" />
             </div>
             <h3 className="font-bold text-gray-900 mb-2 text-base">Dedicated support, flexible cost</h3>
             <p className="text-[13px] text-gray-500 leading-relaxed">
               Get an experienced accountant to manage your ledgers, vendor & customer reconciliations, bank reconciliations, and monthly close with precision and reliability - all at a fraction of the cost of a full-time hire.
             </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-start">
             <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-4 text-blue-600">
               <Check size={20} strokeWidth={3} />
             </div>
             <h3 className="font-bold text-gray-900 mb-2 text-base">Accurate & timely compliance</h3>
             <p className="text-[13px] text-gray-500 leading-relaxed">
               End-to-end MCA compliance for Pvt Ltd Companies & LLPs - filing of Annual Returns (AOC-4, MGT-7/7A), DIR-3 KYC, Director Disclosures, and Statutory Registers. Stay updated with MCA regulations, automatic due date reminders, proactive compliance management, and expert guidance—so your business avoids penalties and stays legally compliant, always.
             </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-start">
             <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center mb-4 text-orange-500">
               <Zap size={20} className="fill-orange-500 text-orange-500" />
             </div>
             <h3 className="font-bold text-gray-900 mb-2 text-base">Powered by LEDGERS</h3>
             <p className="text-[13px] text-gray-500 leading-relaxed">
               Experience seamless automation with real-time bank feeds, smart reconciliations, integrated e-invoice/e-way bill generation, secure document vault, and fully audit-ready financial reports all in one powerful, unified platform.
             </p>
          </div>
        </div>

        {/* Split Layout: Content + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <section className="lg:col-span-8 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
              <h2 className="text-[22px] font-bold text-gray-900 mb-4">Winding up of an LLP</h2>
              <div className="prose prose-sm max-w-none text-gray-600 space-y-4">
                <p>
                  Winding up a Limited Liability Partnership (LLP) involves legally dissolving the entity by settling its debts, liquidating its assets, and distributing the remaining assets to the partners. This process can be initiated voluntarily by the partners or compulsorily by a tribunal for various reasons such as insolvency, inactivity, or breach of laws. Navigating the complexities of winding up requires a thorough understanding of legal procedures, compliance requirements, and financial management.
                </p>
                <p>
                  DoStartup can provide expert guidance and support throughout your winding up of LLP, ensuring compliance with all legal requirements and minimising potential complications. Contact us today to get started and ensure a seamless and compliant winding up procedure for your LLP.
                </p>

                <h3 className="text-[18px] font-bold text-gray-900 mt-8 mb-3">What is the Winding up of LLP?</h3>
                <p>
                  Winding up of a Limited Liability Partnership (LLP) refers to the formal process of closing down the LLP's operations, disposing of its assets, and settling its liabilities. This process is undertaken when an LLP ceases its business activities and dissolves as a legal entity.
                </p>

                <h3 className="text-[18px] font-bold text-gray-900 mt-8 mb-3">Law Governing - LLP Winding up</h3>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                  <li><strong>Section 65 of the LLP Act, 2008:</strong> Empowers the Central Government to make rules on LLP winding up and dissolution process.</li>
                  <li><strong>Section 67 of the LLP Act, 2008:</strong> Permits applying provisions of the Companies Act, 1956 to LLPs where necessary.</li>
                  <li><strong>Notification GSR 6(E), dated 6 Jan 2010:</strong> Applies certain Companies Act provisions to LLP winding up.</li>
                  <li><strong>Limited Liability Partnership (Winding up and Dissolution) Rules, 2012:</strong> Specific rules addressing forms, fees, and procedures.</li>
                </ul>

                <h3 className="text-[18px] font-bold text-gray-900 mt-8 mb-4">Comparison Between LLP Winding Up and Dissolution</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead>
                      <tr className="bg-[#f9faef]/80 border-b border-gray-200">
                        <th className="p-4 font-semibold text-gray-900 align-top w-1/4">Basis</th>
                        <th className="p-4 font-semibold text-gray-900 align-top w-2/5 border-l border-gray-200">Winding Up</th>
                        <th className="p-4 font-semibold text-gray-900 align-top w-2/5 border-l border-gray-200">Dissolution</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-4 text-gray-600 bg-white">Meaning</td>
                        <td className="p-4 text-gray-600 bg-white border-l border-gray-200">Preparing to close by selling assets and paying creditors.</td>
                        <td className="p-4 text-gray-600 bg-white border-l border-gray-200">Final step; LLP ceases to exist after all procedures are complete.</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-gray-600 bg-[#fbfbfa]/50">Legal Entity</td>
                        <td className="p-4 text-gray-600 bg-[#fbfbfa]/50 border-l border-gray-200">LLP remains a legal entity during winding up.</td>
                        <td className="p-4 text-gray-600 bg-[#fbfbfa]/50 border-l border-gray-200">LLP no longer exists after dissolution.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-[18px] font-bold text-gray-900 mt-8 mb-3">Modes of LLP Winding Up</h3>
                <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-600">
                  <li><strong>Voluntary Winding Up</strong> — initiated by partners.</li>
                  <li><strong>Compulsory Winding Up by Tribunal</strong> — ordered by the Tribunal for specified reasons.</li>
                  <li><strong>Voluntary Liquidation</strong> — partners decide to liquidate and appoint a liquidator.</li>
                </ul>

                <h3 className="text-[18px] font-bold text-gray-900 mt-8 mb-3">Pre-requisites for Voluntary Liquidation</h3>
                <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-600">
                  <li><strong>Solvency:</strong> LLP must be able to pay its debts in full.</li>
                  <li><strong>Declaration by Designated Partners:</strong> Majority must declare solvency via affidavit and provide audited statements.</li>
                  <li><strong>No Intent to Defraud:</strong> Liquidation must be undertaken in good faith.</li>
                </ul>

                <h3 className="text-[18px] font-bold text-gray-900 mt-8 mb-4">Procedure for Voluntary Liquidation Of LLP</h3>
                <ol className="list-decimal pl-5 space-y-2 mb-6 text-gray-600">
                  <li>Declaration of Solvency (DOS) with audited financials and valuation report.</li>
                  <li>Pass resolution for voluntary liquidation and appoint an insolvency professional within four weeks of DOS.</li>
                  <li>If debts exist, creditors representing two thirds of debt value must approve within seven days.</li>
                  <li>Notify Registrar and IBBI within seven days of passing resolution.</li>
                  <li>Liquidator commences liquidation and makes public announcements to invite claims within 30 days.</li>
                  <li>Verify claims, realise assets, deposit proceeds in LLP 'in voluntary liquidation' account, and distribute proceeds after costs.</li>
                </ol>

                <h3 className="text-[18px] font-bold text-gray-900 mt-8 mb-3">Winding Up Of LLP By Tribunal</h3>
                <p className="mb-6">
                  Tribunal-ordered winding up can arise due to insolvency, insufficient partners, non-compliance, activities against national interest, or other just and equitable grounds. The Tribunal appoints a liquidator, oversees claims settlement, asset realisation, distribution, and files the dissolution order with the Registrar.
                </p>

                <h3 className="text-[18px] font-bold text-gray-900 mt-8 mb-3">DoStartup: Your Partner in LLP Winding Up</h3>
                <p>
                  DoStartup offers specialised services to facilitate winding up of LLPs — documentation, declaration of solvency, resolution passing, liquidator appointment, claim verification, asset realisation, and final dissolution filings. Contact our experts for a guided, compliant closure.
                </p>

              </div>
            </div>
          </section>

          {/* Right Sidebar */}
          <aside className="lg:col-span-4 flex-shrink-0 space-y-6">
            <div className="sticky top-28 space-y-6">
               <SidebarCart />
               
               <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                 <h4 className="font-bold text-gray-900 mb-5 text-[15px] border-b border-gray-100 pb-3">Related Guides</h4>
                 <ul className="text-[14px] space-y-4 text-blue-600">
                   {["How to Close a LLP - Winding Up of LLP", "Voluntary Liquidation of LLPs", "LLP Form 24 - Easily Close a LLP", "Difference between Winding up and Dissolution"].map((item) => (
                     <li key={item} className="hover:text-amber-700 cursor-pointer flex gap-3 group items-start leading-tight">
                        <span className="text-gray-400 mt-1">&rarr;</span>
                        <span className="group-hover:underline">{item}</span>
                     </li>
                   ))}
                 </ul>
               </div>

               <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                 <img src={ASSETS.companyCompliance} alt="compliance" className="w-full h-auto object-cover" />
                 <div className="p-5 bg-white">
                   <div className="text-[14px] font-bold text-gray-900">Corporate Compliance</div>
                   <div className="text-[12px] text-gray-500 mt-1">Compliance simplified for you</div>
                 </div>
               </div>
            </div>
          </aside>

        </div>
      </main>

      <PopularSearches />
      <Footer />

      {/* WhatsApp CTA */}
      <div className="fixed right-6 bottom-6 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-5 py-3.5 rounded-full shadow-2xl flex items-center gap-3 z-50 hover:shadow-xl transition-all cursor-pointer">
        <img src={ASSETS.whatsapp} alt="wa" className="w-5 h-5 flex-shrink-0" />
        <span className="font-bold text-[14px]">Live Chat with Experts</span>
      </div>
    </div>
  );
}
