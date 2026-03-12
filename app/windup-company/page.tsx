"use client";

import React, { useState } from "react";
import { ChevronRight, ShoppingBag, Star, Plus } from "lucide-react";
import Navbar from "../components/Navbar";

export default function WindingUpLLPPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqItems = [
    "What is winding up an LLP?",
    "What are the reasons for winding up an LLP?",
    "What is the procedure for voluntary winding up?",
    "What are the steps in compulsory winding up?",
    "What is the role of designated partners during winding up?",
    "Can an LLP be revived after winding up?",
    "How long does the winding-up process usually take?",
    "What are statutory filing requirements during winding up?",
  ];

  const faqAnswers: Record<number, string> = {
    0: "Formal process to close the LLP by settling debts and distributing assets.",
    1: "Insolvency, inactivity, insufficient partners, court/tribunal orders, or voluntary decision by partners.",
    2: "Declaration of solvency, resolution, appointment of liquidator, public announcement, claim verification, asset realisation, deposit & distribution of proceeds, dissolution filing.",
    3: "Tribunal petition, winding-up order, appointment of liquidator, claims settlement, asset realisation, dissolution order filed with Registrar.",
    4: "Make solvency declarations, pass resolutions, assist liquidator, and ensure statutory compliance during the process.",
    5: "Revival is complex and depends on legal provisions and tribunal orders; consult professionals for specific cases.",
    6: "Time varies based on complexity, creditor claims, asset realisation and tribunal timelines.",
    7: "Filing resolutions, notices, liquidator reports and dissolution orders with Registrar and IBBI as applicable.",
  };

  const ASSETS = {
    logo: "/images/india-logo.jpg",
    hero: "/images/hero.png",
    windup: "/images/windup.png",
    ad: "/images/Screenshot (489).png",
    whatsapp: "/images/whatsapp.svg",
    cartIcon: "/images/cart-icon.svg",
    indiaFlag: "/images/india-flag.png",
    ledgers: "https://img.indiafilings.com/catalog/ledgers.png",
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
      {/* Navbar - Imported */}
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-5">
        <div className="max-w-[1180px] mx-auto px-6 text-sm text-gray-500">
          Home / Windup Business /{" "}
          <span className="text-amber-700 font-medium">Winding Up - LLP</span>
        </div>
      </div>

      <main className="max-w-[1180px] mx-auto px-6 py-8">
        {/* Hero Section */}
        <section className="relative rounded-2xl overflow-hidden" style={{ minHeight: 420 }}>
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <img
              src={ASSETS.hero}
              alt="hero-bg"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(ellipse at center, rgba(0,0,0,0.6) 0%, rgba(2,6,23,0.7) 100%)",
                opacity: 0.95,
              }}
            />
          </div>

          <div className="absolute inset-0 flex items-center">
            <div className="w-full px-8">
              <div className="mx-auto max-w-[1180px] flex items-center gap-8">
                <div className="w-7/12">
                  <div className="bg-[rgba(0,0,0,0.45)] border border-[rgba(255,255,255,0.06)] rounded-2xl p-10 backdrop-blur-sm shadow-[0_20px_50px_rgba(2,6,23,0.6)]">
                    <h1 className="text-white text-[34px] leading-tight font-semibold mb-4">
                      Company Windup / Voluntary Closure
                    </h1>
                    <p className="text-slate-200 text-[15px] leading-relaxed mb-6">
                      Close your company or LLP legally and efficiently. Get
                      expert assistance for striking off your company name from
                      the MCA register with complete documentation support.
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="relative flex items-center w-full">
                        <input
                          placeholder="ENTER LLP NAME"
                          className="w-full max-w-[640px] px-6 py-4 rounded-full bg-transparent text-white placeholder:text-slate-300 border border-[rgba(255,255,255,0.12)] focus:outline-none focus:ring-1 focus:ring-amber-600"
                        />
                        <div className="absolute right-2 top-1/2 -translate-y-1/2">
                          <button className="px-5 py-[10px] bg-white rounded-full text-sm font-medium shadow-[0_6px_20px_rgba(0,0,0,0.25)] hover:bg-amber-50 transition-colors text-amber-700">
                            Windup
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-5/12 flex justify-end pr-6">
                  <div className="relative w-[340px]">
                    <img
                      src={ASSETS.windup}
                      alt="illustration"
                      className="w-full h-auto rounded-2xl shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:border-amber-200 transition-colors">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-amber-50 grid place-items-center text-amber-600">
                👥
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-slate-900">
                  Dedicated support, flexible cost
                </h3>
                <p className="text-sm text-gray-600">
                  Get an experienced accountant to manage your ledgers, vendor
                  &amp; customer reconciliations, bank reconciliations, and
                  monthly close with precision and reliability - all at a
                  fraction of the cost of a full-time hire.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:border-amber-200 transition-colors">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-amber-50 grid place-items-center text-amber-600">
                ✔
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-slate-900">
                  Accurate & timely compliance
                </h3>
                <p className="text-sm text-gray-600">
                  End-to-end MCA compliance for Pvt Ltd Companies &amp; LLPs –
                  filing of Annual Returns (AOC-4, MGT-7/7A), DIR-3 KYC,
                  Director Disclosures, and Statutory Registers. Stay updated
                  with MCA regulations, automatic due date reminders, proactive
                  compliance management, and expert guidance—so your business
                  avoids penalties and stays legally compliant, always.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:border-amber-200 transition-colors">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-amber-50 grid place-items-center text-amber-600">
                ⚡
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-slate-900">
                  Powered by LEDGERS
                </h3>
                <p className="text-sm text-gray-600">
                  Experience seamless automation with real-time bank feeds,
                  smart reconciliations, integrated e-invoice/e-way bill
                  generation, secure document vault, and fully audit-ready
                  financial reports—all in one powerful, unified platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content with Sidebar */}
        <div className="flex flex-col lg:flex-row gap-8 mt-10">
          {/* Left Column - Article */}
          <article className="flex-1 bg-white p-8 rounded-xl border border-gray-200">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-4 text-slate-900">
                Winding up of an LLP
              </h2>
              <p className="text-sm text-gray-600">
                Winding up a Limited Liability Partnership (LLP) involves
                legally dissolving the entity by settling its debts, liquidating
                its assets, and distributing the remaining assets to the
                partners. This process can be initiated voluntarily by the
                partners or compulsorily by a tribunal for various reasons such
                as insolvency, inactivity, or breach of laws. Navigating the
                complexities of winding up requires a thorough understanding of
                legal procedures, compliance requirements, and financial
                management.
              </p>
              <p className="text-sm text-gray-600 mt-4">
                IndiaFilings can provide expert guidance and support throughout
                your winding up of LLP, ensuring compliance with all legal
                requirements and minimising potential complications. Contact us
                today to get started and ensure a seamless and compliant
                winding-up procedure for your LLP.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-slate-900">
                What is the Winding up of LLP?
              </h3>
              <p className="text-sm text-gray-600">
                Winding up of a Limited Liability Partnership (LLP) refers to
                the formal process of closing down the LLP's operations,
                disposing of its assets, and settling its liabilities. This
                process is undertaken when an LLP ceases its business activities
                and dissolves as a legal entity.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-slate-900">
                Law Governing - LLP Winding up
              </h3>
              <ul className="list-disc pl-5 mt-3 text-sm text-gray-600 space-y-2">
                <li>
                  Section 65 of the LLP Act, 2008: Empowers the Central
                  Government to make rules on LLP winding up and dissolution
                  process.
                </li>
                <li>
                  Section 67 of the LLP Act, 2008: Permits applying provisions
                  of the Companies Act, 1956 to LLPs where necessary.
                </li>
                <li>
                  Notification GSR 6(E), dated 6 Jan 2010: Applies certain
                  Companies Act provisions to LLP winding up.
                </li>
                <li>
                  Limited Liability Partnership (Winding up and Dissolution)
                  Rules, 2012: Specific rules addressing forms, fees, and
                  procedures.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-slate-900">
                Comparison Between LLP Winding Up and Dissolution
              </h3>
              <div className="overflow-auto text-sm text-gray-600">
                <table className="w-full table-auto border-collapse">
                  <thead>
                    <tr className="bg-amber-50">
                      <th className="p-3 border border-gray-200 text-left">Basis</th>
                      <th className="p-3 border border-gray-200 text-left">Winding Up</th>
                      <th className="p-3 border border-gray-200 text-left">Dissolution</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="odd:bg-white even:bg-gray-50">
                      <td className="p-3 border border-gray-200 align-top">Meaning</td>
                      <td className="p-3 border border-gray-200">
                        Preparing to close by selling assets and paying
                        creditors.
                      </td>
                      <td className="p-3 border border-gray-200">
                        Final step; LLP ceases to exist after all procedures are
                        complete.
                      </td>
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-50">
                      <td className="p-3 border border-gray-200 align-top">Legal Entity</td>
                      <td className="p-3 border border-gray-200">
                        LLP remains a legal entity during winding up.
                      </td>
                      <td className="p-3 border border-gray-200">
                        LLP no longer exists after dissolution.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-slate-900">
                Modes of LLP Winding Up
              </h3>
              <ul className="list-disc pl-5 mt-3 text-sm text-gray-600 space-y-2">
                <li>Voluntary Winding Up — initiated by partners.</li>
                <li>
                  Compulsory Winding Up by Tribunal — ordered by the Tribunal
                  for specified reasons.
                </li>
                <li>
                  Voluntary Liquidation — partners decide to liquidate and
                  appoint a liquidator.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-slate-900">
                Pre-requisites for Voluntary Liquidation
              </h3>
              <ul className="list-disc pl-5 mt-3 text-sm text-gray-600 space-y-2">
                <li>Solvency: LLP must be able to pay its debts in full.</li>
                <li>
                  Declaration by Designated Partners: Majority must declare
                  solvency via affidavit and provide audited statements.
                </li>
                <li>
                  No Intent to Defraud: Liquidation must be undertaken in good
                  faith.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-slate-900">
                Procedure for Voluntary Liquidation Of LLP
              </h3>
              <ol className="list-decimal list-inside text-sm text-gray-600 space-y-2">
                <li>
                  Declaration of Solvency (DOS) with audited financials and
                  valuation report.
                </li>
                <li>
                  Pass resolution for voluntary liquidation and appoint an
                  insolvency professional within four weeks of DOS.
                </li>
                <li>
                  If debts exist, creditors representing two-thirds of debt
                  value must approve within seven days.
                </li>
                <li>
                  Notify Registrar and IBBI within seven days of passing
                  resolution.
                </li>
                <li>
                  Liquidator commences liquidation and makes public
                  announcements to invite claims within 30 days.
                </li>
                <li>
                  Verify claims, realise assets, deposit proceeds in LLP 'in
                  voluntary liquidation' account, and distribute proceeds after
                  costs.
                </li>
              </ol>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-slate-900">
                Winding Up Of LLP By Tribunal
              </h3>
              <p className="text-sm text-gray-600">
                Tribunal-ordered winding up can arise due to insolvency,
                insufficient partners, non-compliance, activities against
                national interest, or other just and equitable grounds. The
                Tribunal appoints a liquidator, oversees claims settlement,
                asset realisation, distribution, and files the dissolution order
                with the Registrar.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-slate-900">
                IndiaFilings: Your Partner in LLP Winding Up
              </h3>
              <p className="text-sm text-gray-600">
                IndiaFilings offers specialised services to facilitate winding
                up of LLPs — documentation, declaration of solvency, resolution
                passing, liquidator appointment, claim verification, asset
                realisation, and final dissolution filings. Contact our experts
                for a guided, compliant closure.
              </p>
            </div>
          </article>

          {/* Right Column - Sidebar */}
          <aside className="w-full lg:w-80">
            {/* Cart Widget */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6 sticky top-28 border border-gray-200">
              <div className="text-center text-gray-600">
                <img
                  src={ASSETS.cartIcon}
                  alt="cart"
                  className="mx-auto h-12 w-auto mb-3"
                />
                <h3 className="font-semibold text-slate-900">Your cart is empty</h3>
                <p className="text-sm mt-2 text-gray-600">
                  Browse our services and add some services in cart!
                </p>
              </div>

              <div className="mt-6 text-center">
                <div className="text-sm text-gray-500">
                  Existing User?{" "}
                  <a className="text-amber-700 underline hover:text-amber-800 font-medium cursor-pointer">
                    Login
                  </a>
                </div>
              </div>

              <form className="mt-4 space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-600"
                  placeholder="Name"
                />
                <input
                  className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-600"
                  placeholder="Email"
                />
                <div className="flex gap-2">
                  <div className="flex items-center gap-2 border border-gray-200 rounded-md px-2">
                    <img src={ASSETS.indiaFlag} alt="flag" className="h-4" />
                    <span className="text-sm">+91</span>
                  </div>
                  <input
                    className="flex-1 border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-600"
                    placeholder="Phone"
                  />
                </div>

                <button className="w-full bg-gradient-to-r from-amber-700 to-amber-800 text-white py-2 rounded-md font-medium flex items-center justify-center gap-2 hover:from-amber-800 hover:to-amber-900 transition-all shadow-md hover:shadow-lg">
                  <ShoppingBag size={16} /> Get Started
                </button>

                <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400 pt-1">
                  <svg className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Secure · No spam · Instant confirmation</span>
                </div>
              </form>
            </div>

            {/* Related Guides */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 mb-6">
              <h4 className="font-semibold mb-3 text-slate-900">Related Guides</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="hover:text-amber-700 cursor-pointer hover:underline">
                  How to Close a LLP – Winding Up of LLP
                </li>
                <li className="hover:text-amber-700 cursor-pointer hover:underline">
                  Voluntary Liquidation of LLPs
                </li>
                <li className="hover:text-amber-700 cursor-pointer hover:underline">
                  LLP Form 24 – Easily Close a LLP
                </li>
                <li className="hover:text-amber-700 cursor-pointer hover:underline">
                  Difference between Winding up and Dissolution of Company
                </li>
                <li className="hover:text-amber-700 cursor-pointer hover:underline">
                  Documents Required For Winding Up - LLP
                </li>
              </ul>
            </div>

            {/* Ad */}
            <div className="sticky top-28 bg-white p-4 rounded-xl border border-gray-200">
              <img
                src={ASSETS.ad}
                alt="ad"
                className="w-full rounded-lg"
              />
            </div>
          </aside>
        </div>

        {/* FAQ Section */}
        <section className="mt-10 bg-white p-6 rounded-xl border border-gray-200">
          <h3 className="text-xl font-semibold mb-4 text-slate-900">
            FAQ's on Winding Up - LLP
          </h3>
          <div className="space-y-0">
            {faqItems.map((q, i) => (
              <div key={i} className="border-b border-gray-200 last:border-b-0">
                <button
                  className="w-full text-left py-4 flex justify-between items-center text-sm"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-slate-800 font-medium">{q}</span>
                  <span className="text-amber-700 flex items-center gap-2">
                    {openFaq === i ? "−" : <Plus size={14} />}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-2 pb-4 text-sm text-gray-600">
                    {faqAnswers[i]}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-4">
            <button className="px-4 py-2 border-2 border-amber-600 text-amber-700 rounded-md text-sm hover:bg-amber-50 transition-colors font-medium">
              Load More
            </button>
          </div>
        </section>

        {/* Popular Searches */}
        <section className="mt-10 bg-white p-6 rounded-xl border border-gray-200">
          <h4 className="font-semibold mb-4 text-slate-900">Popular Searches</h4>
          <div className="flex flex-wrap gap-2">
            {[
              "Partnership",
              "Limited Liability Partnership",
              "Digital Signature",
              "Copyright Registration",
              "Unified Portal",
              "PAN Card Download",
              "Nadakacheri",
              "Flipkart Seller",
              "Caste Certificate",
              "IAY",
              "EPFO Passbook",
              "Domicile Certificate",
              "Udyog Aadhaar",
              "PF Withdrawal",
              "Karnataka One",
              "Encumbrance Certificate",
              "Bonafide Certificate",
              "Instant PAN Card",
              "E PAN Card",
              "Income Certificate",
              "Marriage Certificate",
              "Passport Renewal",
              "MSME Registration",
              "Trademark Status",
              "Trade License",
              "Domicile",
              "eMitra",
              "UAN",
              "PICME",
            ].map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1.5 border border-gray-200 rounded bg-white text-gray-700 hover:border-amber-300 hover:text-amber-700 cursor-pointer transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </section>
      </main>

      {/* WhatsApp CTA */}
      <div className="fixed right-6 bottom-6 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-4 py-3 rounded-full shadow-2xl flex items-center gap-3 z-50 hover:from-amber-700 hover:to-amber-800 transition-all cursor-pointer">
        <img src={ASSETS.whatsapp} alt="wa" className="w-5 h-5" />
        <span className="font-semibold text-sm">Live Chat with Experts</span>
      </div>
    </div>
  );
}