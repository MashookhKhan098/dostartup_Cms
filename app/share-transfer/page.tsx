"use client";

import React from "react";
import { ChevronRight, Star } from "lucide-react";
import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import SidebarCart from "../components/SidebarCart";
import Footer from "../components/Footer";
import PopularSearches from "../components/PopularSearches";

const ASSETS = {
  logo: "/images/india-logo.jpg",
  hero: "/images/share-transfer-hero.jpg",
  man: "/images/company-compliance.jpg",
  ledgers: "/images/ledgers.jpg",
  whatsapp: "/images/whatsapp.png",
  adRight1: "/images/company-compliance.jpg",
  dinEkyc: "/images/din.jpg",
};

export default function ShareTransferPage(): React.ReactElement {
  return (
    <div className="min-h-screen bg-[#F4F3EE] font-sans text-gray-800">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-[#F4F3EE] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-sm text-gray-500 font-bold">
          Home / MCA Services / <span className="text-amber-700 font-medium">Share Transfer</span>
        </div>
      </div>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-3 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left column */}
        <section className="lg:col-span-8 space-y-6">
          {/* Top card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 flex flex-col md:flex-row gap-6">
            {/* Left image card */}
            <div className="md:w-1/3 flex-shrink-0">
              <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <div className="bg-gradient-to-r from-amber-700 to-amber-800 rounded-t-xl p-4 text-white text-center">
                  <h2 className="text-xl font-bold">Share Transfer</h2>
                  <div className="text-xs mt-1 opacity-90">Share transfer procedures for private companies</div>
                </div>
                <div className="bg-white px-4 py-6 flex justify-center">
                  <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-white shadow-md flex items-center justify-center -mt-4">
                    <img src={ASSETS.man} alt="share transfer" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              <ul className="mt-5 text-sm space-y-2 text-gray-600 font-bold">
                <li className="hover:text-amber-700 cursor-pointer transition-colors flex items-center gap-2">
                  <ChevronRight size={14} className="text-amber-600" /> Share Transfer Deed (SH-4)
                </li>
                <li className="hover:text-amber-700 cursor-pointer transition-colors flex items-center gap-2">
                  <ChevronRight size={14} className="text-amber-600" /> Original Share Certificate
                </li>
                <li className="hover:text-amber-700 cursor-pointer transition-colors flex items-center gap-2">
                  <ChevronRight size={14} className="text-amber-600" /> Board Resolution for Transfer
                </li>
              </ul>
            </div>

            {/* Right content */}
            <div className="md:w-2/3 flex-1">
              <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 mb-3">
                <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
                <span className="text-[10px] font-bold text-amber-700 uppercase tracking-widest">MCA COMPLIANCE</span>
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Share Transfer</h2>
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />
                ))}
                <span className="text-xs text-slate-500 font-bold">(231)</span>
              </div>

              <p className="text-sm text-gray-600 font-bold max-w-md leading-relaxed">
                Share transfer from one person to another (or many-to-one / one-to-many) with end-to-end support — deeds, stamping, board approvals, and new share certificate issuance.
              </p>

              {/* Offer box */}
              <div className="relative mt-8">
                <div className="absolute -top-3 left-6 bg-white px-2 rounded-md text-xs font-bold text-amber-700 border border-amber-200 uppercase tracking-widest">
                  2 Exclusive Offers
                </div>
                <div className="border-2 border-dashed rounded-xl border-amber-200 p-5 bg-amber-50/30">
                  <div className="font-bold text-slate-900">Basic</div>
                  <ul className="mt-3 text-sm text-gray-600 font-bold space-y-2">
                    <li className="flex items-center gap-2">
                      <ChevronRight size={14} className="text-amber-600" /> Application Filing in MCA
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight size={14} className="text-amber-600" /> Provide Updated MOA & Updated AOA
                    </li>
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
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 border-b pb-4">
              Private Limited Company Share Transfer
            </h1>

            <div className="space-y-6 text-sm sm:text-[15px] leading-7 text-gray-700 font-bold">
              <p>
                The Share Transfer Procedure in a Private Limited Company is a structured process that facilitates transferring ownership of
                shares from one individual to another. Shares represent portions of ownership within a company, and transfers are regulated by
                the Companies Act 2013 and the company's Articles of Association (AOA).
              </p>

              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-amber-600 rounded-full" /> Meaning of Share Transfer
              </h3>
              <p>
                Share transfer refers to the process where a shareholder voluntarily transfers their ownership rights — and associated
                obligations — to another person. Transfers follow the terms in the company's AOA and central laws.
              </p>

              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-amber-600 rounded-full" /> Key Regulations for Transfer of Shares
              </h3>
              <p>
                The transfer of shares in a private company is governed by Section 56(1) & (3) of the Companies Act, 2013, and the
                Companies (Share Capital and Debentures) Rules, 2014, along with the company's AOA.
              </p>

              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-amber-600 rounded-full" /> Documents Required for Share Transfer
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li className="hover:text-amber-700 cursor-pointer transition-colors">Share Transfer Deed: SH-4 signed by transferor & transferee</li>
                <li className="hover:text-amber-700 cursor-pointer transition-colors">Original Share Certificate</li>
                <li className="hover:text-amber-700 cursor-pointer transition-colors">PAN Card copy of transferee</li>
                <li className="hover:text-amber-700 cursor-pointer transition-colors">Board Resolution approving transfer</li>
                <li className="hover:text-amber-700 cursor-pointer transition-colors">Stamp duty payment evidence</li>
              </ul>

              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-amber-600 rounded-full" /> Share Transfer Process (Summary)
              </h3>
              <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                <li>Review AOA for restrictions & pre-emptive rights.</li>
                <li>Transferor issues notice to directors and initiates valuation (if required).</li>
                <li>Execute SH-4, pay stamp duty and attach share certificate.</li>
                <li>Submit documents to company & obtain board approval.</li>
                <li>Company issues new share certificate to transferee.</li>
              </ol>

              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-amber-600 rounded-full" /> How We Help
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Document preparation and stamping guidance.</li>
                <li>Board resolution & meeting support.</li>
                <li>Processing SH-4 and follow up until share certificate issue.</li>
              </ul>
            </div>
          </article>

          {/* Documents + other registrations */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <h3 className="text-lg font-bold mb-5 text-slate-900 border-b pb-3">Key Documents for Share Transfer</h3>
              <ul className="space-y-4 text-sm text-gray-700 font-bold">
                <li className="flex items-center gap-3 hover:text-amber-700 cursor-pointer transition-colors">
                  <ChevronRight size={14} className="text-amber-500" /> Share Transfer Deed (Form SH-4)
                </li>
                <li className="flex items-center gap-3 hover:text-amber-700 cursor-pointer transition-colors">
                  <ChevronRight size={14} className="text-amber-500" /> Original Share Certificate
                </li>
                <li className="flex items-center gap-3 hover:text-amber-700 cursor-pointer transition-colors">
                  <ChevronRight size={14} className="text-amber-500" /> PAN Card of Transferee
                </li>
              </ul>
              <div className="mt-4 flex justify-center">
                <button className="px-4 py-1.5 border border-amber-600 rounded text-xs font-bold text-amber-700 hover:bg-amber-50 transition-all">
                  Load More
                </button>
              </div>
            </div>

            <aside className="lg:col-span-5 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <h3 className="text-lg font-bold mb-5 text-slate-900 border-b pb-3">Other Registrations</h3>
              <ul className="space-y-4 text-sm font-bold">
                {[
                  ["Documents Required for LLP Registration", 8],
                  ["Documents Required for Proprietorship Registration", 2],
                  ["Documents Required for Company Registration", 2],
                  ["Documents Required for Trademark Registration", 7],
                  ["Documents Required for GST Registration", 10],
                ].map(([label, count]) => (
                  <li key={label as string} className="flex justify-between items-start hover:text-amber-700 cursor-pointer transition-colors group">
                    <span className="group-hover:translate-x-1 transition-transform">{label}</span>
                    <span className="bg-amber-100 text-amber-800 rounded-full w-6 h-6 inline-flex items-center justify-center text-xs ml-3 shrink-0">{count}</span>
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

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-6">
            <h4 className="font-bold mb-4 text-slate-900 text-sm uppercase tracking-wider border-b pb-2">Related Guides</h4>
            <ul className="text-sm space-y-3 font-bold text-gray-700">
              {["How to Transfer Shares of Private Limited Company", "Private Limited Company Registration in India", "Articles of Association (AOA)"].map((g) => (
                <li key={g} className="hover:text-amber-700 cursor-pointer flex gap-2 group items-center">
                  <div className="w-1.5 h-1.5 bg-gray-300 rounded-full group-hover:bg-amber-600 transition-colors flex-shrink-0" />
                  <span className="group-hover:translate-x-1 transition-transform">{g}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-sm mb-6 border border-gray-100 group cursor-pointer relative">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
            <img src={ASSETS.adRight1} alt="company compliance" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute bottom-4 left-4 right-4 z-20">
              <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg text-center">
                <h4 className="font-bold text-slate-900 text-sm">Company Compliance</h4>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-sm mb-6 border border-gray-100 group cursor-pointer relative">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
            <img src={ASSETS.dinEkyc} alt="din ekyc" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute bottom-4 left-4 right-4 z-20">
              <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg text-center">
                <h4 className="font-bold text-slate-900 text-sm">DIN eKYC Filing</h4>
              </div>
            </div>
          </div>
        </aside>
      </main>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
        <DynamicPricingSection category="share-transfer" />
      </div>

      <FAQAccordion category="share-transfer" title="FAQs on Share Transfer" />
      <PopularSearches />
      <Footer />

      {/* WhatsApp CTA */}
      <div className="fixed right-4 sm:right-6 bottom-4 sm:bottom-6 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-4 py-3 rounded-full shadow-2xl flex items-center gap-3 z-50 hover:from-amber-700 hover:to-amber-800 transition-all cursor-pointer">
        <img src={ASSETS.whatsapp} alt="wa" className="w-5 h-5" />
        <span className="font-semibold text-sm">Live Chat with Experts</span>
      </div>
    </div>
  );
}
