"use client";

import React from "react";
import { ChevronRight, Star, CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import SidebarCart from "../components/SidebarCart";
import Footer from "../components/Footer";
import PopularSearches from "../components/PopularSearches";

const ASSETS = {
  logo: "/images/india-logo.jpg",
  hero: "/images/hero.png",
  windup: "/images/windup.png",
  whatsapp: "/images/whatsapp.png",
  ledgers: "/images/ledgers.jpg",
  adRight1: "/images/company-compliance.jpg",
  dinEkyc: "/images/din.jpg",
};

export default function WindingUpLLPPage() {
  return (
    <div className="min-h-screen bg-[#F4F3EE] font-sans text-gray-800">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-[#F4F3EE] py-5">
        <div className="max-w-7xl mx-auto px-6 text-sm text-gray-500 font-bold">
          Home / Windup Business / <span className="text-amber-700 font-medium">Winding Up - LLP</span>
        </div>
      </div>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-3 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left column */}
        <section className="lg:col-span-8 space-y-6">
          {/* Top card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col md:flex-row gap-6">
            {/* Left image card */}
            <div className="md:w-1/3 flex-shrink-0">
              <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <div className="bg-gradient-to-r from-amber-700 to-amber-800 rounded-t-xl p-4 text-white text-center">
                  <h2 className="text-2xl font-bold">WINDING UP</h2>
                  <div className="text-xs mt-1 opacity-90">Close your LLP legally and efficiently</div>
                </div>
                <div className="bg-white px-4 py-6 flex justify-center">
                  <div className="w-44 h-44 rounded-full overflow-hidden bg-white shadow-sm border-4 border-white flex items-center justify-center -mt-4">
                    <img src={ASSETS.windup} alt="Windup hero" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              <ul className="mt-5 text-sm space-y-3 text-gray-600 font-bold">
                <li className="hover:text-amber-700 cursor-pointer transition-colors flex items-center gap-2">
                  <ChevronRight size={14} className="text-amber-600" /> Declaration of Solvency (DOS)
                </li>
                <li className="hover:text-amber-700 cursor-pointer transition-colors flex items-center gap-2">
                  <ChevronRight size={14} className="text-amber-600" /> Resolution for Voluntary Liquidation
                </li>
                <li className="hover:text-amber-700 cursor-pointer transition-colors flex items-center gap-2">
                  <ChevronRight size={14} className="text-amber-600" /> Appointment of Liquidator
                </li>
              </ul>
            </div>

            {/* Right content */}
            <div className="md:w-2/3 flex-1">
              <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 mb-3">
                <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
                <span className="text-[10px] font-bold text-amber-700 uppercase tracking-widest">LLP WINDING UP</span>
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Winding Up - LLP</h2>
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />
                ))}
                <span className="text-xs text-slate-500 font-bold">(189 reviews)</span>
              </div>

              <p className="text-sm text-gray-600 font-bold max-w-md leading-relaxed">
                Close your company or LLP legally and efficiently. Get expert assistance for striking off your company name from the MCA register with complete documentation support.
              </p>

              {/* Offer box */}
              <div className="relative mt-8">
                <div className="absolute -top-3 left-6 bg-white px-2 rounded-md text-xs font-bold text-amber-700 border border-amber-200 uppercase tracking-widest">
                  2 Exclusive Offers
                </div>
                <div className="border-2 border-dashed rounded-xl border-amber-200 p-5 bg-amber-50/30">
                  <div className="font-bold text-slate-900">Basic</div>
                  <ul className="mt-3 text-sm text-gray-600 font-bold space-y-2">
                    <li className="flex items-center gap-2"><ChevronRight size={14} className="text-amber-600" /> Declaration of Solvency</li>
                    <li className="flex items-center gap-2"><ChevronRight size={14} className="text-amber-600" /> Resolution Filing</li>
                    <li className="flex items-center gap-2"><ChevronRight size={14} className="text-amber-600" /> Dissolution Order</li>
                  </ul>
                  <div className="mt-5">
                    <button className="bg-white border-2 border-amber-600 text-amber-700 px-6 py-2 rounded-lg hover:bg-amber-50 transition-colors text-sm font-bold uppercase tracking-wide">
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-5 border-t border-gray-100 pt-4 text-sm flex justify-between items-center text-slate-600 font-bold">
                <a className="text-amber-700 hover:text-amber-800 cursor-pointer transition-colors">Terms and conditions</a>
                <a className="text-amber-700 hover:text-amber-800 cursor-pointer transition-colors">Refer a Friend</a>
              </div>

              <div className="mt-6 border border-gray-100 rounded-xl p-4 hover:border-amber-200 transition-colors shadow-sm">
                <h4 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide">Offers and discounts</h4>
                <div className="flex items-center gap-3">
                  <img src={ASSETS.ledgers} alt="ledgers" className="h-10 w-10 object-contain rounded" />
                  <div>
                    <div className="text-amber-700 font-bold text-sm">LEDGERS - Compliance Platform</div>
                    <div className="text-gray-500 font-bold text-xs mt-0.5">Invoicing, GST Filing, Banking and Payroll</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Article */}
          <article className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <h1 className="text-2xl font-extrabold text-slate-900 mb-6 border-b pb-4">Winding up of an LLP</h1>

            <div className="space-y-5 text-[15px] leading-7 text-gray-700 font-bold">
              <p>
                Winding up a Limited Liability Partnership (LLP) involves legally dissolving the entity by settling its debts, liquidating
                its assets, and distributing the remaining assets to the partners. This process can be initiated voluntarily by the
                partners or compulsorily by a tribunal for various reasons such as insolvency, inactivity, or breach of laws.
              </p>
              <p>
                DoStartup can provide expert guidance and support throughout your winding up of LLP, ensuring compliance with all legal
                requirements and minimising potential complications.
              </p>

              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-amber-600 rounded-full" /> What is the Winding up of LLP?
              </h3>
              <p>
                Winding up of a Limited Liability Partnership (LLP) refers to the formal process of closing down the LLP's operations,
                disposing of its assets, and settling its liabilities. This process is undertaken when an LLP ceases its business activities
                and dissolves as a legal entity.
              </p>

              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-amber-600 rounded-full" /> Law Governing - LLP Winding up
              </h3>
              <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
                <li>Section 65 of the LLP Act, 2008: Empowers the Central Government to make rules on LLP winding up and dissolution process.</li>
                <li>Section 67 of the LLP Act, 2008: Permits applying provisions of the Companies Act, 1956 to LLPs where necessary.</li>
                <li>Notification GSR 6(E), dated 6 Jan 2010: Applies certain Companies Act provisions to LLP winding up.</li>
                <li>Limited Liability Partnership (Winding up and Dissolution) Rules, 2012: Specific rules addressing forms, fees, and procedures.</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-amber-600 rounded-full" /> Comparison Between LLP Winding Up and Dissolution
              </h3>
              <div className="overflow-auto text-sm text-gray-600">
                <table className="w-full table-auto border-collapse rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-amber-50">
                      <th className="p-3 border border-gray-200 text-left font-bold text-slate-900">Basis</th>
                      <th className="p-3 border border-gray-200 text-left font-bold text-slate-900">Winding Up</th>
                      <th className="p-3 border border-gray-200 text-left font-bold text-slate-900">Dissolution</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50 hover:bg-amber-50/30 transition-colors">
                      <td className="p-3 border border-gray-200 align-top font-bold">Meaning</td>
                      <td className="p-3 border border-gray-200">Preparing to close by selling assets and paying creditors.</td>
                      <td className="p-3 border border-gray-200">Final step; LLP ceases to exist after all procedures are complete.</td>
                    </tr>
                    <tr className="hover:bg-amber-50/30 transition-colors">
                      <td className="p-3 border border-gray-200 align-top font-bold">Legal Entity</td>
                      <td className="p-3 border border-gray-200">LLP remains a legal entity during winding up.</td>
                      <td className="p-3 border border-gray-200">LLP no longer exists after dissolution.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-amber-600 rounded-full" /> Modes of LLP Winding Up
              </h3>
              <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
                <li>Voluntary Winding Up — initiated by partners.</li>
                <li>Compulsory Winding Up by Tribunal — ordered by the Tribunal for specified reasons.</li>
                <li>Voluntary Liquidation — partners decide to liquidate and appoint a liquidator.</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-amber-600 rounded-full" /> Pre-requisites for Voluntary Liquidation
              </h3>
              <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
                <li>Solvency: LLP must be able to pay its debts in full.</li>
                <li>Declaration by Designated Partners: Majority must declare solvency via affidavit and provide audited statements.</li>
                <li>No Intent to Defraud: Liquidation must be undertaken in good faith.</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-amber-600 rounded-full" /> Procedure for Voluntary Liquidation Of LLP
              </h3>
              <ol className="list-decimal pl-5 text-sm text-gray-600 space-y-2">
                <li>Declaration of Solvency (DOS) with audited financials and valuation report.</li>
                <li>Pass resolution for voluntary liquidation and appoint an insolvency professional within four weeks of DOS.</li>
                <li>If debts exist, creditors representing two-thirds of debt value must approve within seven days.</li>
                <li>Notify Registrar and IBBI within seven days of passing resolution.</li>
                <li>Liquidator commences liquidation and makes public announcements to invite claims within 30 days.</li>
                <li>Verify claims, realise assets, deposit proceeds in LLP 'in voluntary liquidation' account, and distribute proceeds after costs.</li>
              </ol>

              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-amber-600 rounded-full" /> Winding Up Of LLP By Tribunal
              </h3>
              <p className="text-sm text-gray-600">
                Tribunal-ordered winding up can arise due to insolvency, insufficient partners, non-compliance, activities against
                national interest, or other just and equitable grounds. The Tribunal appoints a liquidator, oversees claims settlement,
                asset realisation, distribution, and files the dissolution order with the Registrar.
              </p>

              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-amber-600 rounded-full" /> Insolvency Proceedings under IBC
              </h3>
              <p className="text-sm text-gray-600">
                Under IBC, 2016 LLP insolvency includes initiation by creditors/partners, moratorium, appointment of IRP, formation of
                CoC, review of resolution plans, and liquidation if resolution fails — followed by dissolution.
              </p>

              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-amber-600 rounded-full" /> DoStartup: Your Partner in LLP Winding Up
              </h3>
              <p className="text-sm text-gray-600">
                DoStartup offers specialised services to facilitate winding up of LLPs — documentation, declaration of solvency, resolution
                passing, liquidator appointment, claim verification, asset realisation, and final dissolution filings.
              </p>
            </div>
          </article>

          {/* Documents + Related Guides */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold mb-5 text-slate-900 border-b pb-3">Documents Required For Winding Up - LLP</h3>
              <ul className="space-y-3 text-sm text-gray-700 font-bold">
                {["Declaration of Solvency (DOS)", "Resolution for Voluntary Liquidation", "Audited Financial Statements", "Valuation Report", "Affidavit by Designated Partners"].map((doc) => (
                  <li key={doc} className="flex items-center gap-3 hover:text-amber-700 cursor-pointer transition-colors border-b pb-3 last:border-0">
                    <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0" /> {doc}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex justify-center">
                <button className="px-4 py-1.5 border border-amber-600 rounded text-xs font-bold text-amber-700 hover:bg-amber-50 transition-all">
                  Load More
                </button>
              </div>
            </div>

            <aside className="lg:col-span-5 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold mb-5 text-slate-900 border-b pb-3">Related Guides</h3>
              <ul className="space-y-3 text-sm font-bold">
                {[
                  "How to Close a LLP – Winding Up of LLP",
                  "Voluntary Liquidation of LLPs",
                  "LLP Form 24 – Easily Close a LLP",
                  "Difference between Winding up and Dissolution of Company",
                  "Documents Required For Winding Up - LLP",
                ].map((item) => (
                  <li key={item} className="text-amber-700 hover:text-amber-800 cursor-pointer hover:underline border-b pb-2 last:border-0">
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        {/* Right column (sidebar) */}
        <aside className="lg:col-span-4 hidden lg:block relative">
          <div className="sticky top-28 z-30 mb-6">
            <SidebarCart />
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-4">
            <h4 className="font-bold mb-3 text-slate-900 text-sm uppercase tracking-wider border-b pb-2">Related Guides</h4>
            <ul className="text-sm space-y-2 font-bold">
              {["How to Close a LLP – Winding Up of LLP", "Voluntary Liquidation of LLPs", "LLP Form 24 – Easily Close a LLP"].map((g) => (
                <li key={g} className="text-amber-700 hover:text-amber-800 cursor-pointer hover:underline">{g}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-sm mb-4 border border-gray-100">
            <img src={ASSETS.adRight1} alt="company compliance" className="w-full h-56 object-cover" />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-sm mb-6 border border-gray-100">
            <img src={ASSETS.dinEkyc} alt="din ekyc" className="w-full h-56 object-cover" />
          </div>
        </aside>
      </main>

      <DynamicPricingSection category="winding-up-llp" />
      <FAQAccordion category="winding-up-llp" title="FAQs on Winding Up - LLP" />
      <PopularSearches />
      <Footer />

      {/* WhatsApp CTA */}
      <div className="fixed right-6 bottom-6 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-4 py-3 rounded-full shadow-2xl flex items-center gap-3 z-50 hover:from-amber-700 hover:to-amber-800 transition-all cursor-pointer">
        <img src={ASSETS.whatsapp} alt="wa" className="w-5 h-5" />
        <span className="font-semibold text-sm">Live Chat with Experts</span>
      </div>
    </div>
  );
}
