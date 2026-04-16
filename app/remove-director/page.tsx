"use client";

import React from "react";
import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import SidebarCart from "../components/SidebarCart";
import Footer from "../components/Footer";
import PopularSearches from "../components/PopularSearches";

const ASSETS = {
  hero: "/images/remove-director.jpg",
  remove: "/images/remove.png",
  whatsapp: "/images/whatsapp.png",
};

export default function RemoveDirectorPage() {
  return (
    <div className="min-h-screen bg-[#F4F3EE] font-sans text-gray-800">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-[#F4F3EE] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-sm text-gray-500 font-bold">
          Home / MCA Services / <span className="text-amber-700 font-medium">Remove Director</span>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        {/* Hero Section */}
        <section className="relative rounded-2xl overflow-hidden mb-10" style={{ minHeight: 420 }}>
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <img src={ASSETS.hero} alt="hero-bg" className="w-full h-full object-cover" />
            <div
              className="absolute inset-0"
              style={{ background: "radial-gradient(ellipse at center, rgba(0,0,0,0.6) 0%, rgba(2,6,23,0.7) 100%)", opacity: 0.95 }}
            />
          </div>

          <div className="absolute inset-0 flex items-center">
            <div className="w-full px-8">
              <div className="mx-auto max-w-7xl flex items-center gap-8">
                <div className="w-7/12">
                  <div className="bg-[rgba(0,0,0,0.45)] border border-[rgba(255,255,255,0.06)] rounded-2xl p-10 backdrop-blur-sm">
                    <h1 className="text-white text-[34px] leading-tight font-semibold mb-4">Director Management</h1>
                    <p className="text-slate-200 text-[15px] leading-relaxed mb-6">
                      Manage your company's directors effortlessly with AI-assisted MCA compliance. Our intelligent system ensures
                      complete legal adherence, auto-checks documentation, and provides end-to-end support for a hassle-free experience.
                    </p>
                    <div className="relative flex items-center w-full">
                      <input
                        placeholder="ENTER COMPANY NAME"
                        className="w-full max-w-[640px] px-6 py-4 rounded-full bg-transparent text-white placeholder:text-slate-300 border border-[rgba(255,255,255,0.12)] focus:outline-none focus:ring-1 focus:ring-amber-600"
                      />
                      <div className="absolute right-2 top-1/2 -translate-y-1/2">
                        <button className="px-5 py-[10px] bg-[#F4F3EE] rounded-full text-sm font-bold shadow hover:bg-amber-50 transition-colors text-amber-700">
                          Remove Director
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-5/12 flex justify-end pr-6">
                  <div className="relative w-[340px]">
                    <img src={ASSETS.remove} alt="remove director" className="w-full h-auto rounded-2xl shadow-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            { icon: "👥", title: "Dedicated support, flexible cost", desc: "Get an experienced accountant to manage your ledgers, vendor & customer reconciliations, bank reconciliations, and monthly close with precision and reliability - all at a fraction of the cost of a full-time hire." },
            { icon: "✔", title: "Accurate & timely compliance", desc: "End-to-end Director Management for Pvt Ltd Companies & LLPs – filing of DIR-3 KYC, Director Appointments (DIR-12), Director Resignations (DIR-12), Director Disclosures (MGT-6), and DIN Allotment." },
            { icon: "⚡", title: "Powered by LEDGERS", desc: "Experience seamless automation with real-time bank feeds, smart reconciliations, integrated e-invoice/e-way bill generation, secure document vault, and fully audit-ready financial reports." },
          ].map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:border-amber-200 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-amber-50 grid place-items-center text-amber-600">{f.icon}</div>
                <div>
                  <h3 className="font-bold mb-1 text-slate-900">{f.title}</h3>
                  <p className="text-sm text-gray-600 font-bold leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Main Content with Sidebar */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Article */}
          <article className="flex-1 bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">Removal of Director from a Company</h2>
            <p className="text-sm text-gray-600 font-bold leading-relaxed">
              Company Directors oversee the management and operations of a business, while shareholders own the company. Situations may
              arise where shareholders opt to remove a director due to inadequate performance or other concerns, or a director may
              choose to resign. Removing a director is a significant corporate action that requires careful deliberation and strict
              compliance with the legal framework provided by the Companies Act 2013 or applicable local laws.
            </p>
            <p className="text-sm text-gray-600 font-bold mt-4 leading-relaxed">
              DoStartup specialises in navigating the intricacies of the director removal or resignation process, ensuring full
              compliance with legal standards and meticulous attention to detail.
            </p>

            <h3 className="text-lg font-bold mt-8 mb-3 text-slate-900 flex items-center gap-2">
              <div className="w-1.5 h-5 bg-amber-600 rounded-full" /> Reasons for Director Removal
            </h3>
            <p className="text-sm text-gray-600 font-bold mb-3">Under The Companies Act 2013, it's mandatory for a private limited company to appoint at least two directors to commence its operations.</p>
            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2 font-bold">
              <li>Being disqualified as per the criteria set out in the Companies Act.</li>
              <li>Not attending board meetings for more than a year.</li>
              <li>Violating the terms of Section 184 by engaging in prohibited transactions.</li>
              <li>Being prohibited from participating due to a court or Tribunal order.</li>
              <li>Conviction by a court for a criminal offence with a sentence of at least six months.</li>
              <li>Non-compliance with the regulations and requirements of the Companies Act, 2013.</li>
              <li>Choosing to resign voluntarily from the board.</li>
            </ul>

            <h3 className="text-lg font-bold mt-8 mb-3 text-slate-900 flex items-center gap-2">
              <div className="w-1.5 h-5 bg-amber-600 rounded-full" /> Methods for Director Removal
            </h3>
            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2 font-bold">
              <li>Resignation by Directors: Directors resign voluntarily by giving notice to the company.</li>
              <li>Director Absence from Board Meetings: A director who fails to attend board meetings for 12 months may be deemed to have vacated office.</li>
              <li>Shareholder-initiated Removal: Shareholders may remove a director through an ordinary resolution at a General Meeting, following statutory procedure.</li>
            </ul>

            <h3 className="text-lg font-bold mt-8 mb-3 text-slate-900 flex items-center gap-2">
              <div className="w-1.5 h-5 bg-amber-600 rounded-full" /> Law Governing Director Removal
            </h3>
            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2 font-bold">
              <li>Section 169: Explains how a company can legally remove a director and the required steps.</li>
              <li>Section 115: Relevant for special notices and related procedural requirements.</li>
              <li>Section 163: Relates to representation and procedural fairness in director selection and removal.</li>
              <li>Rule 23 of the Companies (Management and Administration) Rules, 2014: Specific procedural guidelines for proper removal.</li>
            </ul>

            <h3 className="text-lg font-bold mt-8 mb-3 text-slate-900 flex items-center gap-2">
              <div className="w-1.5 h-5 bg-amber-600 rounded-full" /> Essential Requirements for Director Removal
            </h3>
            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2 font-bold">
              <li>Issuance of Special Notice: A special notice must be issued to initiate the removal process.</li>
              <li>Notice Period to Director: The director must receive the special notice at least 14 days before the resolution is voted on.</li>
              <li>Right to be Heard: The director facing removal must be allowed to make written representations or speak at the meeting.</li>
              <li>Restriction on Reappointment: Once removed, the director is typically ineligible for immediate reappointment.</li>
              <li>Filing of Form DIR-12: The company must file Form DIR-12 to officially notify the Registrar of Companies.</li>
            </ul>

            <h3 className="text-lg font-bold mt-8 mb-3 text-slate-900 flex items-center gap-2">
              <div className="w-1.5 h-5 bg-amber-600 rounded-full" /> Director's Voluntary Resignation
            </h3>
            <p className="text-sm text-gray-600 font-bold leading-relaxed">
              A director's resignation becomes effective on the date the company receives the notice or on a later date specified by the
              director, whichever is later. Even after stepping down, a resigned director remains accountable for any offences committed
              during their term.
            </p>

            <h4 className="font-bold mt-6 mb-3 text-slate-900">Mandatory Steps on Resignation</h4>
            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2 font-bold">
              <li>Schedule a Board Meeting in line with Section 173 and Secretarial Standard-1 (SS-1).</li>
              <li>Send Board Meeting notices to all directors at least 7 days before the meeting.</li>
              <li>Prepare meeting documents including agenda, explanatory notes and draft resolutions.</li>
              <li>Acknowledge resignation in the Board Meeting and assign responsibility for ROC filings.</li>
              <li>Circulate draft minutes to directors within 15 days after the meeting.</li>
            </ul>

            <h4 className="font-bold mt-6 mb-2 text-slate-900">Submission of Forms</h4>
            <p className="text-sm text-gray-600 font-bold leading-relaxed">
              File Form DIR-12 with the Registrar of Companies within 30 days of the director's resignation, attaching a certified copy of the
              Board Resolution, the resignation notice and proof of cessation. The resigning director may also file Form DIR-11 within 30 days
              to notify the Registrar.
            </p>

            <h3 className="text-lg font-bold mt-8 mb-3 text-slate-900 flex items-center gap-2">
              <div className="w-1.5 h-5 bg-amber-600 rounded-full" /> Penalties for Delayed Submission of Form DIR-12
            </h3>
            <p className="text-sm text-gray-600 font-bold leading-relaxed">
              Penalties escalate with delay: 30–60 days — double the government fees; 60–90 days — four times the fees; beyond 90
              days — ten times; beyond 180 days — twelve times and potential legal action.
            </p>

            <h3 className="text-lg font-bold mt-8 mb-3 text-slate-900 flex items-center gap-2">
              <div className="w-1.5 h-5 bg-amber-600 rounded-full" /> Why choose DoStartup for Director removal?
            </h3>
            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2 font-bold">
              <li>Expertise and Experience: Professionals well-versed in corporate law and director removal procedures.</li>
              <li>Compliance Assurance: Steps executed to minimize legal risk and ensure statutory compliance.</li>
              <li>End-to-End Support: From consultation to submission of DIR-12, DoStartup handles the full process.</li>
              <li>Customized Solutions: Tailored advice based on the company's unique circumstances.</li>
            </ul>
          </article>

          {/* Right Column - Sidebar */}
          <aside className="w-full lg:w-80 relative">
            <div className="sticky top-28 z-30 mb-6">
              <SidebarCart />
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-6">
              <h4 className="font-bold mb-3 text-slate-900 text-sm uppercase tracking-wider border-b pb-2">Related Guides</h4>
              <ul className="text-sm text-gray-600 space-y-3 font-bold">
                {["DIN Number Registration and Search", "Articles of Association (AOA)", "Guide to Annual General Meeting", "Independent Director – Companies Act 2013", "Women Directors"].map((g) => (
                  <li key={g} className="hover:text-amber-700 cursor-pointer transition-colors flex gap-2 group">
                    <span className="text-amber-500 group-hover:translate-x-1 transition-transform">›</span>
                    <span className="group-hover:translate-x-1 transition-transform">{g}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </main>

      <DynamicPricingSection category="remove-director" />
      <FAQAccordion category="remove-director" title="FAQs on Remove Director" />
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
