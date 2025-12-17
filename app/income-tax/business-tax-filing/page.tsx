"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  ShoppingBag,
  Plus,
  Check,
  Search,
  ChevronRight,
} from "lucide-react";

/**
 * File: app/business-tax-filing/page.tsx
 * Ready-to-copy Next.js client page (TypeScript React).
 * Replaces the original income-tax e-filing page content with
 * Business Tax Filing content. Put images in /public/images/ with the filenames used below.
 */

const ASSETS = {
  logo: "/images/india-logo.jpg",
  heroBusiness: "/images/hero.png",
  ledgersBadge: "/images/ledgers-badge.png",
  whatsapp: "/images/whatsapp.png",
  adRight1: "/images/business-ad-right.png",
  itrAd1: "/images/business-itr-ad.png",
  cartIcon: "/images/cart.png",
  indiaFlag: "/images/india-flag.png",
  phoneMock: "/images/remove.png",
  docsImg: "/images/business-docs.png",
  stepsImg: "/images/business-steps.png",
  formsImg: "/images/business-forms.png",
  dueDatesImg: "/images/business-due-dates.png",
  docsRequiredImg: "/images/business-docs-required.png",
  moreImg: "/images/business-more.png",
  more2Img: "/images/business-more2.png",
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

const INCOME_TAX_DROPDOWN_LINKS = [
  { title: "Income Tax E-Filing", href: "income-tax/e-filing" },
  { title: "Business Tax Filing", href: "income-tax/business-tax-filing" },
  {
    title: "Partnership Firm / LLP ITR",
    href: "/income-tax/partnership-llp-itr",
  },
  { title: "Company ITR Filing", href: "/income-tax/company-itr-filing" },
  { title: "Trust / NGO Tax Filing", href: "/income-tax/trust-ngo-tax-filing" },
  { title: "15CA - 15CB Filing", href: "/income-tax/15ca-15cb-filing" },
  { title: "TAN Registration", href: "/income-tax/tan-registration" },
  { title: "TDS Return Filing", href: "/income-tax/tds-return-filing" },
  { title: "Income Tax Notice", href: "/income-tax/income-tax-notice" },
];

const POPULAR_SEARCHES = [
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
];

export default function BusinessTaxFilingPage(): React.ReactElement {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [gstChecked, setGstChecked] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showIncomeDropdown, setShowIncomeDropdown] = useState(false);

  const faqQuestions = [
    "When must a company tax return be filed?",
    "Which ITR should a company file?",
    "What happens if a company does not file ITR?",
    "What are the different types of Business Tax Filing?",
    "Can ITR be filed for the previous year?",
    "Who should pay advance tax?",
    "How is Income Tax calculated on business income?",
    "What are the criteria for opting for the Presumptive Taxation Scheme?",
  ];

  const faqAnswers: Record<number, string> = {
    0: "Company tax returns must be filed annually before the specified due date (usually September 30 for companies). Specific timelines may vary when audit requirements apply.",
    1: "Companies generally file ITR-6. The exact form depends on the entity type and income sources. ITR-6 is common for companies not claiming exemptions under section 11.",
    2: "Failure to file ITR can lead to penalties, interest, notices from the tax department, and potential restrictions on bank transactions and credit facilities.",
    3: "Business tax filing categories include Proprietorship (ITR-3/ITR-4), Partnership (ITR-5/ITR-7 as applicable), LLPs (ITR-5), and Companies (ITR-6).",
    4: "Yes — with the correct forms and supporting documents, ITR can be filed for earlier assessment years subject to limitations on refunds and revisions.",
    5: "Advance tax is payable by businesses and professionals if the expected tax liability exceeds the threshold set by the Income Tax Act. Quarterly instalments are required.",
    6: "Business income is computed by aggregating all revenue, subtracting allowable expenses, and applying the relevant tax rates for the entity type, plus surcharge and cess as applicable.",
    7: "Presumptive schemes allow taxpayers to declare income as a prescribed percentage of turnover. Eligibility depends on business turnover and the nature of the business; check sections 44AD/44ADA/44AE as applicable.",
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
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[540px] z-50">
                        <div className="bg-white rounded-lg shadow-lg border p-4">
                          <div className="grid grid-cols-2 gap-3">
                            {INCOME_TAX_DROPDOWN_LINKS.map((link) => (
                              <a
                                key={link.href}
                                href={link.href}
                                className="text-sm text-slate-700 hover:text-emerald-600"
                              >
                                {link.title}
                              </a>
                            ))}
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
              Business Tax Filing
            </span>
          </div>

          <section
            aria-label="Hero"
            className="relative rounded-2xl overflow-hidden shadow-sm"
            style={{ minHeight: 380 }}
          >
            <div
              className="absolute inset-0 bg-center bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url(${ASSETS.heroBusiness})`,
              }}
            >
              <img
                src={ASSETS.heroBusiness}
                alt="hero background"
                className="hidden"
                loading="eager"
                draggable={false}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at left center, rgba(0,0,0,0.45) 0%, rgba(2,6,23,0.6) 100%)",
                }}
              />
            </div>

            <div className="relative z-10">
              <div className="mx-auto max-w-[1180px] px-6 py-12 flex flex-col md:flex-row items-center gap-8">
                {/* left text */}
                <div className="flex-1 max-w-2xl">
                  <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-2xl p-8 md:p-10 backdrop-blur-sm shadow-[0_20px_50px_rgba(2,6,23,0.2)]">
                    <h1 className="text-white text-3xl md:text-[34px] leading-tight font-semibold mb-4">
                      Business Tax Filing
                    </h1>
                    <p className="text-slate-200 text-sm md:text-base mb-6 max-w-prose">
                      For individuals/HUFs whose income includes business or
                      professional profits (e.g., shop owners, freelancers, firm
                      partners); covers all other income too.
                    </p>

                    {/* small form row */}
                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="flex flex-col sm:flex-row gap-3 items-center"
                    >
                      <div className="flex items-center gap-2 bg-transparent rounded-full border border-[rgba(255,255,255,0.08)] px-3 py-2 w-full sm:w-auto">
                        <div className="text-white text-xs px-3 py-1 bg-[rgba(255,255,255,0.05)] rounded-md">
                          ITR-3
                        </div>
                        <input
                          className="bg-transparent outline-none placeholder:text-slate-300 text-white text-sm w-full"
                          placeholder="PAN Number"
                        />
                      </div>

                      <button className="whitespace-nowrap px-5 py-3 bg-white text-slate-900 rounded-full font-medium shadow-[0_6px_20px_rgba(0,0,0,0.12)]">
                        File ITR
                      </button>
                    </form>
                  </div>

                  {/* <div className="mt-4">
                    <img
                      src={ASSETS.docsImg}
                      alt="business docs"
                      className="w-full rounded shadow-sm"
                    />
                  </div> */}
                </div>

                {/* right image - phone / illustration */}
                <div className="w-full md:w-96 flex justify-end">
                  <div className="relative w-[340px]">
                    <img
                      src={ASSETS.phoneMock}
                      alt="phone"
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
              Simple, Transparent ITR Filing Pricing
            </h2>
            <p className="text-sm text-gray-600 mt-2 max-w-prose">
              Apply for your ITR Filing online with expert assistance and
              complete end-to-end tracking.
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Personal */}
              <div className="bg-white rounded-xl border p-6 shadow-sm">
                <div className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs mb-3">
                  Personal
                </div>
                <h3 className="font-semibold text-lg">Personal Tax Filing</h3>
                <p className="text-sm text-gray-600 mt-2">
                  For resident salaried/pension earners with total income up to
                  ₹50 lakh, one house, and basic interest or dividends.
                </p>
                <div className="mt-4 text-2xl font-bold">
                  ₹1,499 <span className="text-sm font-normal">/ yr + GST</span>
                </div>
                <button className="mt-4 w-full bg-slate-900 text-white py-3 rounded-full">
                  Start Filing
                </button>
                <ul className="mt-5 space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <Check size={16} /> Income Tax computation
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} /> Tax Consultation
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} /> E Filing
                  </li>
                </ul>
              </div>

              {/* Business */}
              <div className="bg-white rounded-xl border p-6 shadow-sm">
                <div className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs mb-3">
                  Business
                </div>
                <h3 className="font-semibold text-lg">Business Tax Filing</h3>
                <p className="text-sm text-gray-600 mt-2">
                  For individuals/HUFs whose income includes business or
                  professional profits (e.g., shop owners, freelancers, firm
                  partners); covers all other income too.
                </p>
                <div className="mt-4 text-2xl font-bold">
                  ₹4,899 <span className="text-sm font-normal">/ yr + GST</span>
                </div>
                <button className="mt-4 w-full bg-slate-900 text-white py-3 rounded-full">
                  Start Filing
                </button>
                <ul className="mt-5 space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <Check size={16} /> Income Tax computation
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} /> Tax Consultation
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} /> E Filing
                  </li>
                </ul>
                <div className="mt-3 text-xs text-gray-500">
                  LEDGERS Platform — Most popular
                </div>
              </div>

              {/* Not for Profit */}
              <div className="bg-white rounded-xl border p-6 shadow-sm">
                <div className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs mb-3">
                  Not for Profit
                </div>
                <h3 className="font-semibold text-lg">Not for Profit</h3>
                <p className="text-sm text-gray-600 mt-2">
                  For all companies except those claiming charitable or
                  religious exemption under applicable provisions.
                </p>
                <div className="mt-4 text-2xl font-bold">
                  ₹19,899{" "}
                  <span className="text-sm font-normal">/ yr + GST</span>
                </div>
                <button className="mt-4 w-full bg-slate-900 text-white py-3 rounded-full">
                  Start Filing
                </button>
                <ul className="mt-5 space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <Check size={16} /> Income Tax computation
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} /> Tax Consultation
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} /> E Filing
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 text-gray-700">
              <img
                src={ASSETS.formsImg}
                alt="which itr form"
                className="w-full rounded shadow-sm"
              />
            </div>
          </section>

          {/* long textual content */}
          <article className="bg-white rounded-lg shadow-sm p-6">
            <h1 className="text-2xl font-semibold text-center">
              Business Income Tax Return (ITR) Filing Online
            </h1>

            <div className="mt-4 text-[15px] leading-7 text-gray-700 space-y-4">
              <p>
                Setting up a business and understanding the complexities of
                filing returns is essential to running a business. A business
                tax filing is an income tax return filing applicable to
                companies and other business entities. It serves as a
                comprehensive record of the business's earnings and expenses.
              </p>

              <p>
                Business Income Tax return filings in India just got more
                straightforward with IndiaFilings. We help businesses easily
                file their tax returns and offer LEDGERS small business tax
                filing software. Our expert team makes the process less
                stressful and ensures deadlines and compliance requirements are
                met.
              </p>

              <h3 className="text-lg font-semibold">
                What is a business tax return?
              </h3>
              <p>
                A business tax return is a comprehensive report that outlines a
                business's income, expenses, and pertinent tax details, all
                presented in the designated ITR form. It entails annual
                submission and reporting of TDS, payroll-related entries and
                other statutory disclosures.
              </p>

              <h3 className="text-lg font-semibold">
                Who should file a Business Income Tax Return?
              </h3>
              <p>Filing a business income tax return is mandatory for:</p>
              <ul className="list-disc list-inside">
                <li>Sole Proprietorships</li>
                <li>Partnership Firms</li>
                <li>Limited Liability Partnerships (LLPs)</li>
                <li>Companies (Private/Public/One Person Companies)</li>
              </ul>

              <h3 className="text-lg font-semibold mt-2">
                Types of Business Tax Filing
              </h3>
              <p>
                Different entity types use different forms: Proprietorships may
                use ITR-3 or ITR-4 (Sugam); Partnership firms file ITR-5; LLPs
                file ITR-5; Companies file ITR-6 (as applicable). The correct
                choice depends on turnover, nature of income, and audit status.
              </p>

              <h3 className="text-lg font-semibold mt-2">
                Proprietorship Tax Return Filing
              </h3>
              <p>
                Proprietorship income is taxed in the hands of the proprietor.
                Thresholds and slab rates are the same as individual tax rules.
                Proprietors may file ITR-3 or ITR-4 depending on whether they
                opt for presumptive taxation.
              </p>

              <h3 className="text-lg font-semibold mt-2">
                Partnership Firm Tax Return Filing
              </h3>
              <p>
                Partnership firms are taxed as separate entities and must file
                an income tax return every year irrespective of profit or loss.
                Partnership firms typically file ITR-5.
              </p>

              <h3 className="text-lg font-semibold mt-2">
                LLP & Company Filing
              </h3>
              <p>
                LLPs and Companies are taxed at corporate rates and are required
                to file ITR-5 / ITR-6 respectively. Audit, transfer pricing, and
                other compliance obligations can affect due dates and filing
                methods.
              </p>

              <div className="mt-6">
                <img
                  src={ASSETS.stepsImg}
                  alt="5 steps"
                  className="w-full rounded shadow-sm"
                />
              </div>

              <h3 className="text-lg font-semibold mt-4">
                How IndiaFilings helps
              </h3>
              <p>
                We offer end-to-end Income Tax Return preparation and filing —
                income aggregation, deductions review, tax computation, and
                submission — with automated document reminders and expert
                verification.
              </p>

              <h3 className="text-lg font-semibold mt-4">Powered by LEDGERS</h3>
              <p>
                Leverage intelligent automation to import financial data, detect
                eligible deductions, validate computations, securely manage
                documents, and generate fully compliant ITR forms — all from one
                unified platform.
              </p>

              <h3 className="text-lg font-semibold mt-4">
                Due Date & Important Timelines
              </h3>
              <div className="mt-3 text-gray-700">
                <img
                  src={ASSETS.dueDatesImg}
                  alt="due dates"
                  className="w-full rounded shadow-sm"
                />
              </div>

              <p className="mt-3">
                Due dates depend on entity type and audit requirement —
                companies and audited entities often have later deadlines.
                Always confirm the due date applicable to your entity and
                assessment year.
              </p>

              <h3 className="text-lg font-semibold mt-4">Documents Required</h3>
              <div className="mt-2">
                <img
                  src={ASSETS.docsRequiredImg}
                  alt="documents required"
                  className="w-full rounded shadow-sm"
                />
              </div>

              <p>
                Typical documents: PAN, Aadhaar (linked), books of accounts or
                balance sheet, profit & loss statements, bank statements, TDS
                certificates, Form 16/16A where applicable, GST & ledger
                extracts, invoices and loan statements.
              </p>

              <h3 className="text-lg font-semibold mt-4">
                Procedure for Business ITR Filing
              </h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  Gather and validate business accounts and supporting
                  documents.
                </li>
                <li>Choose the correct ITR form based on entity type.</li>
                <li>
                  Compute taxable income after allowable deductions and
                  expenses.
                </li>
                <li>Pay any tax due / advance tax as applicable.</li>
                <li>
                  File the return on the Income Tax e-Filing portal and
                  e-verify.
                </li>
              </ol>

              <div className="mt-4">
                <img
                  src={ASSETS.moreImg}
                  alt="procedure illustration"
                  className="w-full rounded shadow-sm"
                />
              </div>

              <h3 className="text-lg font-semibold mt-4">
                Why timely filing matters
              </h3>
              <p>
                Timely and accurate filings help you claim refunds, carry
                forward losses, support loan applications, and avoid penalties
                and notices. They also build credibility with banks, investors
                and regulators.
              </p>
            </div>
          </article>

          {/* Documents required card — screenshot501 already included */}
          <article className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">
              Documents Required to File Your Business ITR
            </h3>
            <div className="mt-2 text-gray-700">
              <img
                src={ASSETS.docsRequiredImg}
                alt="documents required"
                className="w-full rounded shadow-sm"
              />
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>PAN & Aadhaar</li>
                <li>Books of Accounts / Financial Statements</li>
                <li>Bank Statements</li>
                <li>GST Returns (if applicable)</li>
                <li>TDS Certificates & Form 26AS</li>
                <li>Invoices & supporting vouchers</li>
              </ul>
            </div>
          </article>

          {/* FAQ */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">
              FAQ's on Business Tax Filing
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
                      {faqAnswers[i]}
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
        </section>

        {/* Sidebar */}
        <aside className="lg:col-span-4 hidden lg:block">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6 sticky top-28">
            <img
              src={ASSETS.cartIcon}
              alt="cart"
              className="mx-auto h-12 w-auto mb-3"
            />
            <h3 className="font-semibold text-center">Your cart is empty</h3>
            <p className="text-sm mt-2 text-center">
              Browse services and add to cart!
            </p>

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

              <button className="w-full bg-green-500 text-white py-2 rounded-md font-medium flex items-center justify-center gap-2">
                <ShoppingBag size={16} /> Get Started
              </button>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
            <h4 className="font-semibold mb-3">Related Guides</h4>
            <ul className="text-sm text-indigo-600 space-y-2">
              <li>
                Why is it necessary to outsource the Finance and Accounting
                services?
              </li>
              <li>
                Accounting areas to take care of before the financial year
              </li>
              <li>Method of Accounting for IT Payers</li>
              <li>ITR Filing in India: Your Complete Guide</li>
            </ul>
          </div>

          <div className="rounded-lg overflow-hidden shadow-sm mb-4">
            <img
              src={ASSETS.adRight1}
              alt="adRight"
              className="w-full h-56 object-cover"
            />
          </div>

          <div className="rounded-lg overflow-hidden shadow-sm mb-6">
            <img
              src={ASSETS.itrAd1}
              alt="itrAd"
              className="w-full h-56 object-cover"
            />
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
            © {new Date().getFullYear()} IndiaFilings - Business Tax Filing
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
