"use client";

import React from "react";

export default function WindingUpLLPPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased">
      <header className="w-full border-b border-slate-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <img
              src="/images/india-logo.jpg"
              alt="logo"
              className="w-25 h-auto object-contain"
            />
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700">
              <a className="hover:underline">Startup</a>
              <a className="hover:underline">Registrations</a>
              <a className="hover:underline">Trademark</a>
              <a className="hover:underline">GST</a>
              <a className="hover:underline">Income Tax</a>
              <a className="hover:underline">MCA</a>
              <a className="hover:underline">Compliance</a>
              <a className="hover:underline">Personal</a>
              <a className="hover:underline">Global</a>
              <a className="hover:underline">Cities</a>
              <a className="hover:underline">Guides</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden lg:inline-flex items-center justify-center px-4 py-2 border border-slate-200 rounded-md text-sm">
              🔍
            </button>
            <button className="px-4 py-2 bg-white border border-slate-200 rounded-md text-sm">
              Login
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <section
          className="relative rounded-2xl overflow-hidden"
          style={{ minHeight: 420 }}
        >
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <img
              src="/images/hero.png"
              alt="hero-bg"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(0,0,0,0.6) 0%, rgba(2,6,23,0.7) 100%)",
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
                          className="w-full max-w-[640px] px-6 py-4 rounded-full bg-transparent text-white placeholder:text-slate-300 border border-[rgba(255,255,255,0.12)] focus:outline-none focus:ring-0"
                        />
                        <div className="absolute right-2 top-1/2 -translate-y-1/2">
                          <button className="px-5 py-[10px] bg-white rounded-full text-sm font-medium shadow-[0_6px_20px_rgba(0,0,0,0.25)]">
                            Windup
                          </button>
                        </div>
                        <div
                          className="absolute left-0 top-0 bottom-0 w-full rounded-full pointer-events-none"
                          style={{
                            boxShadow:
                              "inset 0 0 0 1px rgba(255,255,255,0.06), 0 8px 36px rgba(2,6,23,0.45)",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-5/12 flex justify-end pr-6">
                  <div className="relative w-[340px]">
                    <img
                      src="/images/windup.png"
                      alt="illustration"
                      className="w-full h-auto rounded-2xl shadow-2xl"
                    />
                    <div
                      className="absolute -right-4 top-1/4 w-32 h-20 rounded-lg"
                      style={{ filter: "blur(0px)" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.18) 100%)",
              borderRadius: "1rem",
            }}
          />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-slate-50 grid place-items-center text-indigo-500">
                👥
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-slate-800">
                  Dedicated support, flexible cost
                </h3>
                <p className="text-sm text-slate-600">
                  Get an experienced accountant to manage your ledgers, vendor
                  &amp; customer reconciliations, bank reconciliations, and
                  monthly close with precision and reliability - all at a
                  fraction of the cost of a full-time hire.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-slate-50 grid place-items-center text-emerald-500">
                ✔
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-slate-800">
                  Accurate & timely compliance
                </h3>
                <p className="text-sm text-slate-600">
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

          <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-slate-50 grid place-items-center text-purple-500">
                ⚡
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-slate-800">
                  Powered by LEDGERS
                </h3>
                <p className="text-sm text-slate-600">
                  Experience seamless automation with real-time bank feeds,
                  smart reconciliations, integrated e-invoice/e-way bill
                  generation, secure document vault, and fully audit-ready
                  financial reports—all in one powerful, unified platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-8 mt-10">
          <article className="flex-1 bg-white p-8 rounded-xl border border-slate-100">
            <div className="mb-6">
              <div className="text-sm text-gray-500 mb-2">
                IndiaFilings / Windup Business /{" "}
                <span className="text-indigo-600">Winding Up - LLP</span>
              </div>
              <h2 className="text-2xl font-semibold mb-4">
                Winding up of an LLP
              </h2>
              <p className="text-sm text-slate-600">
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
              <p className="text-sm text-slate-600 mt-4">
                IndiaFilings can provide expert guidance and support throughout
                your winding up of LLP, ensuring compliance with all legal
                requirements and minimising potential complications. Contact us
                today to get started and ensure a seamless and compliant
                winding-up procedure for your LLP.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                What is the Winding up of LLP?
              </h3>
              <p className="text-sm text-slate-600">
                Winding up of a Limited Liability Partnership (LLP) refers to
                the formal process of closing down the LLP's operations,
                disposing of its assets, and settling its liabilities. This
                process is undertaken when an LLP ceases its business activities
                and dissolves as a legal entity.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                Law Governing - LLP Winding up
              </h3>
              <ul className="list-disc pl-5 mt-3 text-sm text-slate-600 space-y-2">
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
              <h3 className="text-lg font-semibold mb-2">
                Comparison Between LLP Winding Up and Dissolution
              </h3>
              <div className="overflow-auto text-sm text-slate-600">
                <table className="w-full table-auto border-collapse">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="p-3 border text-left">Basis</th>
                      <th className="p-3 border text-left">Winding Up</th>
                      <th className="p-3 border text-left">Dissolution</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="odd:bg-white even:bg-slate-50">
                      <td className="p-3 border align-top">Meaning</td>
                      <td className="p-3 border">
                        Preparing to close by selling assets and paying
                        creditors.
                      </td>
                      <td className="p-3 border">
                        Final step; LLP ceases to exist after all procedures are
                        complete.
                      </td>
                    </tr>
                    <tr className="odd:bg-white even:bg-slate-50">
                      <td className="p-3 border align-top">Legal Entity</td>
                      <td className="p-3 border">
                        LLP remains a legal entity during winding up.
                      </td>
                      <td className="p-3 border">
                        LLP no longer exists after dissolution.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                Modes of LLP Winding Up
              </h3>
              <ul className="list-disc pl-5 mt-3 text-sm text-slate-600 space-y-2">
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
              <h3 className="text-lg font-semibold mb-2">
                Pre-requisites for Voluntary Liquidation
              </h3>
              <ul className="list-disc pl-5 mt-3 text-sm text-slate-600 space-y-2">
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
              <h3 className="text-lg font-semibold mb-2">
                Procedure for Voluntary Liquidation Of LLP
              </h3>
              <ol className="list-decimal list-inside text-sm text-slate-600 space-y-2">
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
              <h3 className="text-lg font-semibold mb-2">
                Winding Up Of LLP By Tribunal
              </h3>
              <p className="text-sm text-slate-600">
                Tribunal-ordered winding up can arise due to insolvency,
                insufficient partners, non-compliance, activities against
                national interest, or other just and equitable grounds. The
                Tribunal appoints a liquidator, oversees claims settlement,
                asset realisation, distribution, and files the dissolution order
                with the Registrar.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                Insolvency Proceedings under IBC
              </h3>
              <p className="text-sm text-slate-600">
                Under IBC, 2016 LLP insolvency includes initiation by
                creditors/partners, moratorium, appointment of IRP, formation of
                CoC, review of resolution plans, and liquidation if resolution
                fails — followed by dissolution.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                IndiaFilings: Your Partner in LLP Winding Up
              </h3>
              <p className="text-sm text-slate-600">
                IndiaFilings offers specialised services to facilitate winding
                up of LLPs — documentation, declaration of solvency, resolution
                passing, liquidator appointment, claim verification, asset
                realisation, and final dissolution filings. Contact our experts
                for a guided, compliant closure.
              </p>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-3">Related Guides</h4>
              <ul className="text-sm text-indigo-600 space-y-2">
                <li>How to Close a LLP – Winding Up of LLP</li>
                <li>Voluntary Liquidation of LLPs</li>
                <li>LLP Form 24 – Easily Close a LLP</li>
                <li>
                  Difference between Winding up and Dissolution of Company
                </li>
                <li>Documents Required For Winding Up - LLP</li>
              </ul>
            </div>
          </article>

          <aside className="w-full lg:w-80">
            <div className="bg-white p-6 rounded-xl border border-slate-100 mb-6">
              <h4 className="font-semibold mb-3">Related Guides</h4>
              <ul className="text-sm text-slate-600 space-y-2">
                <li className="hover:text-indigo-600 cursor-pointer">
                  How to Close a LLP – Winding Up of LLP
                </li>
                <li className="hover:text-indigo-600 cursor-pointer">
                  Voluntary Liquidation of LLPs
                </li>
                <li className="hover:text-indigo-600 cursor-pointer">
                  LLP Form 24 – Easily Close a LLP
                </li>
              </ul>
            </div>

            <div className="sticky top-28 bg-white p-4 rounded-xl border border-slate-100">
              <img
                src="/images/Screenshot (489).png"
                alt="ad"
                className="w-full rounded-lg"
              />
            </div>
          </aside>
        </div>

        <section className="mt-10 bg-white p-6 rounded-xl border border-slate-100">
          <h3 className="text-xl font-semibold mb-4">
            FAQ's on Winding Up - LLP
          </h3>
          <ul className="divide-y divide-slate-100">
            <li className="py-4 flex justify-between items-center">
              <div>
                <div className="font-medium">What is winding up an LLP?</div>
                <div className="text-sm text-slate-600">
                  Formal process to close the LLP by settling debts and
                  distributing assets.
                </div>
              </div>
              <div className="text-slate-400">+</div>
            </li>

            <li className="py-4 flex justify-between items-center">
              <div>
                <div className="font-medium">
                  What are the reasons for winding up an LLP?
                </div>
                <div className="text-sm text-slate-600">
                  Insolvency, inactivity, insufficient partners, court/tribunal
                  orders, or voluntary decision by partners.
                </div>
              </div>
              <div className="text-slate-400">+</div>
            </li>

            <li className="py-4 flex justify-between items-center">
              <div>
                <div className="font-medium">
                  What is the procedure for voluntary winding up?
                </div>
                <div className="text-sm text-slate-600">
                  Declaration of solvency, resolution, appointment of
                  liquidator, public announcement, claim verification, asset
                  realisation, deposit & distribution of proceeds, dissolution
                  filing.
                </div>
              </div>
              <div className="text-slate-400">+</div>
            </li>

            <li className="py-4 flex justify-between items-center">
              <div>
                <div className="font-medium">
                  What are the steps in compulsory winding up?
                </div>
                <div className="text-sm text-slate-600">
                  Tribunal petition, winding-up order, appointment of
                  liquidator, claims settlement, asset realisation, dissolution
                  order filed with Registrar.
                </div>
              </div>
              <div className="text-slate-400">+</div>
            </li>

            <li className="py-4 flex justify-between items-center">
              <div>
                <div className="font-medium">
                  What is the role of designated partners during winding up?
                </div>
                <div className="text-sm text-slate-600">
                  Make solvency declarations, pass resolutions, assist
                  liquidator, and ensure statutory compliance during the
                  process.
                </div>
              </div>
              <div className="text-slate-400">+</div>
            </li>

            <li className="py-4 flex justify-between items-center">
              <div>
                <div className="font-medium">
                  Can an LLP be revived after winding up?
                </div>
                <div className="text-sm text-slate-600">
                  Revival is complex and depends on legal provisions and
                  tribunal orders; consult professionals for specific cases.
                </div>
              </div>
              <div className="text-slate-400">+</div>
            </li>

            <li className="py-4 flex justify-between items-center">
              <div>
                <div className="font-medium">
                  How long does the winding-up process usually take?
                </div>
                <div className="text-sm text-slate-600">
                  Time varies based on complexity, creditor claims, asset
                  realisation and tribunal timelines.
                </div>
              </div>
              <div className="text-slate-400">+</div>
            </li>

            <li className="py-4 flex justify-between items-center">
              <div>
                <div className="font-medium">
                  What are statutory filing requirements during winding up?
                </div>
                <div className="text-sm text-slate-600">
                  Filing resolutions, notices, liquidator reports and
                  dissolution orders with Registrar and IBBI as applicable.
                </div>
              </div>
              <div className="text-slate-400">+</div>
            </li>
          </ul>

          <div className="mt-4">
            <button className="px-4 py-2 bg-white border border-slate-200 rounded-md">
              Load More
            </button>
          </div>
        </section>

        <section className="mt-10 bg-white p-6 rounded-xl border border-slate-100">
          <h4 className="font-semibold mb-4">Popular Searches</h4>
          <div className="flex flex-wrap gap-3">
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
                className="text-xs px-3 py-2 border border-slate-200 rounded-full bg-slate-50"
              >
                {t}
              </span>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-slate-100 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h5 className="font-semibold mb-4">IndiaFilings</h5>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>About IndiaFilings</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Platforms</h5>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>Business Search</li>
              <li>Trademark Search</li>
              <li>Filings.AE for UAE</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Usage</h5>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>Terms &amp; Conditions</li>
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
            </ul>
          </div>
        </div>
        <div className="bg-white border-t border-slate-200 py-6">
          <div className="max-w-7xl mx-auto px-6 text-sm text-slate-500">
            Copyright © {new Date().getFullYear()} IndiaFilings Private Limited.
            All rights reserved.
          </div>
        </div>
      </footer>

      <div className="fixed right-6 bottom-6 z-50">
        <button className="px-5 py-3 rounded-full bg-emerald-500 text-white shadow-lg">
          Live Chat with Experts
        </button>
      </div>
    </div>
  );
}
