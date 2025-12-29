"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  Search,
  Check,
  Plus,
  ShoppingBag,
  ChevronRight,
} from "lucide-react";

const ASSETS = {
  logo: "/images/india-logo.jpg",
  heroTDS: "/images/hero.png",
  whatsapp: "/images/whatsapp.png",
  cartIcon: "/images/cart.png",
  tdsreturnIcon: "/images/tdsreturn.png",
  indiaFlag: "/images/india-flag.png",
  ledgersBadge: "/images/ledgers-badge.png",
  docsImg: "/images/tds-docs.png",
  pricingBadge: "/images/ledgers-badge.png",
};

const NAV_ITEMS = [
  "IndiaFilings",
  "Startup",
  "Registrations",
  "Trademark",
  "GST",
  "Income Tax",
  "MCA",
  "Compliance",
  "Personal",
  "Global",
  "Cities",
  "Guides",
  "Login",
];

const POPULAR_SEARCHES = [
  "Partnership",
  "Limited Liability Partnership",
  "Digital Signature",
  "Copyright Registration",
  "Unified Portal",
  "PAN Card Download",
  "Flipkart Seller",
  "Caste Certificate",
  "EPFO Passbook",
  "Domicile Certificate",
  "MSME Registration",
  "Income Certificate",
  "Passport Renewal",
  "Form 16",
  "eAadhaar Download",
  "PAN Card Apply",
];

export default function TdsReturnFilingPage(): React.ReactElement {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [gstChecked, setGstChecked] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showIncomeDropdown, setShowIncomeDropdown] = useState(false);

  const faqQuestions = [
    "What is TDS?",
    "What is TAN?",
    "Which Form in IT Portal provides details of TDS?",
    "What is a TDS Return?",
    "What are the important TDS Returns to be filed by an Assessee?",
    "What is the Time Limit for remittance of TDS?",
    "What are the last TDS return filing dates for various quarters?",
    "What is the late fee payable for delay in filing TDS Return?",
    "What is the interest payable for delay in deduction of Tax?",
    "What is the penalty payable for delay in filing/incorrect filing of TDS Return?",
  ];

  const faqAnswers: Record<number, string> = {
    0: "TDS (Tax Deducted at Source) is a mechanism where tax is deducted by the payer (deductor) at the time of making specified payments (salary, rent, professional fees, etc.). The deducted tax is deposited with the government and credited to the payee's account.",
    1: "TAN (Tax Deduction and Collection Account Number) is a 10-character alphanumeric number required by entities that deduct or collect tax at source. TAN is mandatory for filing TDS returns.",
    2: "Form 26AS and TRACES are the primary sources where TDS details and tax credits appear. The income tax e-filing portal and TRACES provide detailed statements and challan status.",
    3: "A TDS return is a statement filed by the deductor containing details of TDS deducted and deposited for a particular period. Returns are filed quarterly in the specified formats (24Q, 26Q, 27Q, 27EQ, etc.).",
    4: "Important TDS returns include Form 24Q (Salary), Form 26Q (Non-salary payments), Form 27Q (Payments to non-residents), and Form 27EQ (TCS). These are filed quarterly with the prescribed due dates.",
    5: "TDS remittance must be made within the prescribed due date (usually by the 7th of the subsequent month) to avoid interest and penalties. Specific remittance due dates depend on the nature of the deduction and government rules.",
    6: "TDS return quarterly due dates commonly are: Q1 (Apr-Jun) - 31st July, Q2 (Jul-Sep) - 31st Oct, Q3 (Oct-Dec) - 31st Jan, Q4 (Jan-Mar) - 31st May. Verify every year for official updates.",
    7: "Late filing attracts a fee (commonly Rs. 200 per day subject to caps) and other penalties depending on the delay and the amount of TDS involved. Exact fees/limits may vary — always check the latest provisions.",
    8: "Interest is levied for late deduction and late remittance of TDS (commonly 1% p.m. for late deduction and 1.5% p.m. for late remittance, calculated on the relevant outstanding amounts).",
    9: "Penalties for non-compliance can range from monetary fines to penalties up to the amount of TDS, additional interest, and potential legal action depending on severity and intent.",
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-[1180px] mx-auto px-6 py-3 flex items-center gap-6">
          <img src={ASSETS.logo} alt="IndiaFilings" className="h-10 w-auto" />

          <nav className="hidden lg:flex gap-6 items-center text-sm text-gray-700">
            {NAV_ITEMS.slice(1, NAV_ITEMS.length - 1).map((item) => {
              if (item === "Income Tax") {
                return (
                  <div
                    key={item}
                    onMouseEnter={() => setShowIncomeDropdown(true)}
                    onMouseLeave={() => setShowIncomeDropdown(false)}
                    className="relative"
                  >
                    <button className="flex items-center gap-1 text-sm font-medium">
                      {item} <ChevronDown className="w-3 h-3" />
                    </button>

                    {showIncomeDropdown && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px] z-50">
                        <div className="bg-white rounded-lg shadow-lg border p-4">
                          <div className="grid grid-cols-2 gap-3">
                            <a
                              href="/income-tax/e-filing"
                              className="text-sm text-slate-700 hover:text-emerald-600"
                            >
                              Income Tax E-Filing
                            </a>
                            <a
                              href="/income-tax/tds-return-filing"
                              className="text-sm text-slate-700 hover:text-emerald-600"
                            >
                              TDS Return Filing
                            </a>
                            <a
                              href="/income-tax/company-itr-filing"
                              className="text-sm text-slate-700 hover:text-emerald-600"
                            >
                              Company ITR Filing
                            </a>
                            <a
                              href="/income-tax/tan-registration"
                              className="text-sm text-slate-700 hover:text-emerald-600"
                            >
                              TAN Registration
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a key={item} href="#" className="hover:text-indigo-700">
                  {item}
                </a>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 border rounded-full px-3 py-1 text-sm text-slate-500">
              <Search size={14} />
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="outline-none text-sm bg-transparent w-40"
              />
            </div>
            <button className="px-3 py-1 border rounded-md text-sm">
              Login
            </button>
          </div>
        </div>
      </header>

      {/* Breadcrumb & Hero */}
      <div className="bg-gradient-to-r from-white to-slate-50 py-6">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-sm text-gray-500 mb-4">
            IndiaFilings / Income Tax /{" "}
            <span className="text-indigo-600 font-medium">
              TDS Return Filing
            </span>
          </div>

          <section
            aria-label="Hero"
            className="relative rounded-2xl overflow-hidden shadow-sm"
            style={{ minHeight: 320 }}
          >
            <div
              className="absolute inset-0 bg-center bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url(${ASSETS.heroTDS})`,
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(2,6,23,0.65) 0%, rgba(2,6,23,0.15) 60%)",
                }}
              />
            </div>

            <div className="relative z-10">
              <div className="mx-auto max-w-[1180px] px-6 py-12 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 max-w-2xl">
                  <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)] rounded-2xl p-8 md:p-10 backdrop-blur-sm">
                    <h1 className="text-white text-3xl md:text-[34px] leading-tight font-semibold mb-4">
                      Accountant for TDS Filings
                    </h1>
                    <p className="text-slate-200 text-sm md:text-base mb-6 max-w-prose">
                      File TDS returns, manage challans, and reconcile payments
                      effortlessly using our Accountants & LEDGERS platform.
                    </p>

                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="flex flex-col sm:flex-row gap-3 items-center"
                    >
                      <div className="flex items-center gap-2 bg-white rounded-full px-3 py-2 w-full sm:w-auto">
                        <div className="text-sm text-slate-700 px-2">
                          ENTER GSTIN
                        </div>
                        <input
                          className="bg-transparent outline-none placeholder:text-slate-400 text-slate-800 text-sm w-full"
                          placeholder="GSTIN"
                        />
                      </div>

                      <button className="whitespace-nowrap px-5 py-3 bg-emerald-600 text-white rounded-full font-medium shadow-[0_6px_20px_rgba(0,0,0,0.12)]">
                        Get Accountant
                      </button>
                    </form>

                    <p className="text-slate-200 mt-4 text-sm">
                      Dedicated TDS specialist to manage monthly TDS workings,
                      challans, payment tracking, and return preparation across
                      sections—at a fraction of the cost of a full-time hire.
                    </p>
                  </div>
                </div>

                <div className="w-full md:w-96 flex justify-end">
                  <div className="relative w-[520px]">
                    <img
                      src={ASSETS.tdsreturnIcon}
                      alt="TDS illustration"
                      className="w-full h-auto rounded-2xl shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.12) 100%)",
                borderRadius: "1rem",
              }}
            />
          </section>
        </div>
      </div>

      {/* Main content */}
      <main className="max-w-[1180px] mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left column */}
        <section className="lg:col-span-8 space-y-6">
          {/* Pricing cards */}
          <section>
            <h2 className="text-2xl font-semibold text-center lg:text-left">
              Simple, Transparent TDS Return Filing Pricing
            </h2>
            <p className="text-sm text-gray-600 mt-2 max-w-prose">
              File your TDS returns online with expert assistance, error-free
              filing, and timely submission tracking.
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Software Only */}
              <div className="bg-white rounded-xl border p-6 shadow-sm">
                <div className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs mb-3">
                  LEDGERS
                </div>
                <h3 className="font-semibold text-lg">Software Only</h3>
                <p className="text-sm text-gray-600 mt-2">
                  LEDGERS Software Access - 1 Year. TDS Compliance Dashboard &
                  Alerts, automated TDS calculations, PAN validation.
                </p>
                <div className="mt-4 text-2xl font-bold">
                  ₹5,899 <span className="text-sm font-normal">/ yr + GST</span>
                </div>
                <button className="mt-4 w-full bg-slate-900 text-white py-3 rounded-full">
                  Start Filing Now
                </button>
                <ul className="mt-5 space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <Check size={16} /> LEDGERS Software Access - 1 Year
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} /> TDS Compliance Dashboard & Alerts
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} /> Automated TDS calculations
                    (section-wise)
                  </li>
                </ul>
              </div>

              {/* Accountant */}
              <div className="bg-white rounded-xl border p-6 shadow-sm">
                <div className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs mb-3">
                  Accountant
                </div>
                <h3 className="font-semibold text-lg">Accountant</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Dedicated Accountant Support - 1 Assigned Accountant.
                  Quarterly TDS returns, TRACES validation, Form 16A generation.
                </p>
                <div className="mt-4 text-2xl font-bold">
                  ₹15,899{" "}
                  <span className="text-sm font-normal">/ FY + GST</span>
                </div>
                <button className="mt-4 w-full bg-slate-900 text-white py-3 rounded-full">
                  Start Filing Now
                </button>
                <ul className="mt-5 space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <Check size={16} /> Dedicated Accountant Support - 1
                    Assigned Accountant
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} /> Quarterly TDS Return Filing (24Q, 26Q,
                    27Q, 27EQ) - 1 Year
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} /> TRACES Validation Before Filing
                  </li>
                </ul>
                <div className="mt-3 text-xs text-gray-500">Most popular</div>
              </div>

              {/* 2 Year Package */}
              <div className="bg-white rounded-xl border p-6 shadow-sm">
                <div className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs mb-3">
                  Accountant
                </div>
                <h3 className="font-semibold text-lg">TDS Filing – 2 Years</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Dedicated support with Ledgers Accounting Software for 2
                  fiscal years.
                </p>
                <div className="mt-4 text-2xl font-bold">
                  ₹25,899{" "}
                  <span className="text-sm font-normal">/ 2 FY + GST</span>
                </div>
                <button className="mt-4 w-full bg-slate-900 text-white py-3 rounded-full">
                  Start Filing Now
                </button>
                <ul className="mt-5 space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <Check size={16} /> Quarterly TDS Return Filing - 2 Years
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} /> Deductor–Deductee Reconciliation
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} /> TDS Certificate Generation
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Services Offered */}
          <article className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold mb-3">Services Offered</h2>
            <p className="text-sm text-gray-700 mb-4">
              We provide comprehensive accounting support tailored to meet the
              day-to-day financial needs of your business.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded">
                <h4 className="font-semibold">Access to LEDGERS</h4>
                <p className="text-sm text-gray-600 mt-2">
                  Record and review TDS deductions, challans, and payments in
                  real time with automated calculation, PAN validation, and a
                  clear audit trail—inside one shared workspace.
                </p>
              </div>
              <div className="p-4 border rounded">
                <h4 className="font-semibold">TDS Return Filing</h4>
                <p className="text-sm text-gray-600 mt-2">
                  Preparation and filing of all TDS returns (Form 24Q, 26Q,
                  27Q), reconciliation with challans, automated due-date
                  tracking, and timely submission to avoid penalties.
                </p>
              </div>
              <div className="p-4 border rounded">
                <h4 className="font-semibold">
                  Preparation of TDS Summary & Reports
                </h4>
                <p className="text-sm text-gray-600 mt-2">
                  Monthly and quarterly TDS summaries, deduction statements,
                  mismatch reports, and year-end Form 16/16A generation—ensuring
                  full visibility and compliance readiness.
                </p>
              </div>
              <div className="p-4 border rounded">
                <h4 className="font-semibold">
                  Deductor–Deductee Reconciliation
                </h4>
                <p className="text-sm text-gray-600 mt-2">
                  Matching TDS deducted and deposited by the deductor with TDS
                  credit appearing for the deductee in Form 26AS/AIS to avoid
                  mismatches and notices.
                </p>
              </div>
            </div>
          </article>

          {/* How it Works */}
          <article className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold mb-3">How It Works</h2>
            <p className="text-sm text-gray-700 mb-4">
              A guided onboarding process with consistent monthly accounting and
              reporting.
            </p>

            <ol className="list-decimal list-inside space-y-3 text-sm text-gray-700">
              <li>
                <strong>Assign your accountant</strong> — You get a named
                accountant familiar with your industry and a clear kickoff
                checklist.
              </li>
              <li>
                <strong>System Setup</strong> — Connect bank feeds, import
                masters & opening balances, map ledgers/tax series, and
                configure LEDGERS.
              </li>
              <li>
                <strong>Monthly close & compliance</strong> — Reconciliations,
                TDS tracking, challan mapping, quarterly returns, timely filing,
                and MIS reports for compliance.
              </li>
            </ol>
          </article>

          {/* Article / Detailed Content */}
          <article className="bg-white rounded-lg shadow-sm p-6">
            <h1 className="text-2xl font-semibold text-center mb-4">
              TDS Return Filing
            </h1>
            <div className="text-[15px] leading-7 text-gray-700 space-y-4">
              <p>
                Tax Deduction at Source refers to deducting tax from income at
                the point of payment. Entities and individuals who engage in tax
                deductions at the source are legally required to file TDS
                returns quarterly before the TDS due date, detailing the
                specifics of these deductions.
              </p>

              <p>
                IndiaFilings provides expert assistance to streamline the
                process — from deposit of TDS online to filing TDS returns and
                reconciling them with TRACES and Form 26AS.
              </p>

              <h3 className="text-lg font-semibold">Who should deduct TDS?</h3>
              <p>
                Individuals, HUFs, firms, companies, and other entities required
                to deduct TDS under the Income Tax Act, 1961 depending on
                turnover and specific conditions.
              </p>

              <h3 className="text-lg font-semibold">Deposit of TDS</h3>
              <p>
                The deposit of TDS refers to the process of remitting the
                deducted TDS to the government within the prescribed TDS due
                date. Timely deposits are essential to avoid interest and
                penalties.
              </p>

              <h3 className="text-lg font-semibold">TDS Due Date</h3>
              <p>
                Usually by the 7th of the subsequent month. For TDS deducted in
                March the deposit rules may have special provisions for some
                government deductors — always verify the applicable schedule.
              </p>

              <h3 className="text-lg font-semibold">
                Penalty for Non-Compliance
              </h3>
              <p>
                Interest and penalties apply for late deduction, late
                remittance, and late filing or incorrect filing. Fees for late
                filing and penalties may be imposed by the assessing officer.
              </p>
            </div>
          </article>

          {/* Documents required */}
          <article className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">
              Documents Required For TDS Return Filing
            </h3>
            <div className="mt-2 text-gray-700">
              <img
                src={ASSETS.docsImg}
                alt="tds documents"
                className="w-full rounded shadow-sm mb-4"
              />
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>TDS Acknowledgement</li>
                <li>PAN Card</li>
                <li>Bank Statement / Challan details</li>
                <li>Previous TDS Filing Records (if any)</li>
              </ul>
            </div>
          </article>

          {/* FAQ */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">
              FAQ's on TDS Return Filing
            </h3>
            <div className="space-y-0">
              {faqQuestions.map((q, i) => (
                <div key={i} className="border-b last:border-b-0">
                  <button
                    className="w-full text-left py-4 flex justify-between items-center text-sm"
                    onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                    aria-expanded={faqOpen === i}
                    aria-controls={`faq-${i}`}
                  >
                    <span className="text-slate-800">{q}</span>
                    <span className="text-indigo-600 flex items-center gap-2">
                      {faqOpen === i ? "-" : <Plus size={14} />}
                    </span>
                  </button>

                  {faqOpen === i && (
                    <div
                      id={`faq-${i}`}
                      className="px-2 pb-4 text-sm text-gray-600"
                    >
                      {faqAnswers[i] ?? "Content coming soon."}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-4">
              <button className="px-4 py-2 border rounded text-sm">
                Load More
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-semibold mb-3">Popular Searches</h4>
            <div className="flex flex-wrap gap-2">
              {POPULAR_SEARCHES.map((s) => (
                <span
                  key={s}
                  className="text-xs px-3 py-1 border rounded bg-white text-gray-700"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Sidebar */}
        <aside className="lg:col-span-4 hidden lg:block">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6 sticky top-28">
            <img
              src={ASSETS.cartIcon}
              alt="cart"
              className="mx-auto h-12 w-auto mb-3"
            />
            <h3 className="font-semibold text-center">
              Accurate & timely compliance
            </h3>
            <p className="text-sm mt-2 text-center">
              End-to-end preparation and filing of all TDS returns (24Q, 26Q,
              27Q, etc.) with due-date tracking, reconciliation of challans and
              deductions, and periodic reviews to avoid interest, late fees, and
              notices.
            </p>

            <div className="mt-4 text-sm text-gray-700">
              <h4 className="font-semibold mb-2">Powered by LEDGERS</h4>
              <p>
                Automated bank feeds and reconciliations, document vault, and
                audit-ready reports—inside one secure system.
              </p>
            </div>

            <form
              className="mt-4 space-y-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm"
                placeholder="Name"
              />
              <input
                className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm"
                placeholder="Email"
              />
              <div className="flex gap-2">
                <div className="flex items-center gap-2 border border-gray-200 rounded-md px-2">
                  <img src={ASSETS.indiaFlag} alt="flag" className="h-4" />
                  <span className="text-sm">+91</span>
                </div>
                <input
                  className="flex-1 border border-gray-200 rounded-md px-3 py-2 text-sm"
                  placeholder="Phone"
                />
              </div>

              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={gstChecked}
                  onChange={() => setGstChecked((s) => !s)}
                  className="w-4 h-4"
                />
                <span>Enter GSTIN to get 18% GST Credit</span>
              </label>

              {gstChecked && (
                <input
                  className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm"
                  placeholder="GSTIN"
                />
              )}

              <button className="w-full bg-emerald-600 text-white py-2 rounded-md font-medium flex items-center justify-center gap-2">
                <ShoppingBag size={16} /> Get Started
              </button>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
            <h4 className="font-semibold mb-3">Related Guides</h4>
            <ul className="text-sm text-indigo-600 space-y-2">
              <li>Form 24Q – TDS Return for Salary Payment</li>
              <li>Form 26Q – Non-Salary Deductions</li>
              <li>Form 27Q – NRI TDS Returns</li>
              <li>Form 27EQ – TCS Return</li>
            </ul>
          </div>

          <div className="rounded-lg overflow-hidden shadow-sm mb-4">
            <img
              src={ASSETS.pricingBadge}
              alt="ledgers"
              className="w-full h-56 object-cover"
            />
          </div>
        </aside>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-12 py-8 border-t">
        <div className="max-w-[1180px] mx-auto px-6 text-sm text-gray-600">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">IndiaFilings</h5>
              <a className="block">About IndiaFilings</a>
              <a className="block">Careers</a>
              <a className="block">Contact Us</a>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">Platforms</h5>
              <a className="block">Business Search</a>
              <a className="block">Trademark Search</a>
              <a className="block">Filings.AE for UAE</a>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">Usage</h5>
              <a className="block">Terms & Conditions</a>
              <a className="block">Privacy Policy</a>
              <a className="block">Refund Policy</a>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">Policies</h5>
              <a className="block">Confidentiality Policy</a>
              <a className="block">Disclaimer Policy</a>
              <a className="block">IndiaFilings Review</a>
            </div>
          </div>

          <div className="text-center text-gray-500 mt-6">
            © {new Date().getFullYear()} IndiaFilings - TDS Return Filing
          </div>
        </div>
      </footer>

      {/* WhatsApp CTA */}
      <div className="fixed right-6 bottom-6 bg-green-500 text-white px-4 py-3 rounded-full shadow-2xl flex items-center gap-3 z-50">
        <img src={ASSETS.whatsapp} alt="wa" className="w-5 h-5" />
        <span className="font-semibold text-sm">Live Chat with Experts</span>
      </div>
    </div>
  );
}
