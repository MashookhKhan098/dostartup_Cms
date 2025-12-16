"use client";

import React, { useState } from "react";
import { ChevronDown, ShoppingBag, Plus, Check, Search } from "lucide-react";

const ASSETS = {
  logo: "/images/india-logo.jpg",
  hero: "/images/hero.png",
  bannerFileItr: "/images/file-itr-banner.png",
  ledgers: "https://img.indiafilings.com/catalog/ledgers.png",
  whatsapp: "/images/whatsapp.png",
  adRight1: "/images/company-compliance-ad.png",
  itrAd1: "/images/itr-ad-orange.png",
  cartIcon: "/images/cart.png",
  indiaFlag: "/images/india-flag.png",
  heroRight: "/images/remove.png",
  screenshot497: "/images/docs.png",
  screenshot498: "/images/steps.png",
  screenshot499: "/images/itr-forms.png",
  screenshot500: "/images/due-dates.png",
  screenshot501: "/images/docrequired.png",
  screenshot502: "/images/more.png",
  screenshot503: "/images/more2.png",
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
  { title: "Income Tax E-Filing", href: "/income-tax/e-filing" },
  { title: "Business Tax Filing", href: "/income-tax/business-tax-filing" },
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

export default function IncomeTaxFilingPage(): React.ReactElement {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [gstChecked, setGstChecked] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showIncomeDropdown, setShowIncomeDropdown] = useState(false);

  const faqQuestions = [
    "What does e-Filing an Income Tax Return (ITR) mean?",
    "Why is it important to e-file your ITR?",
    "What are the Advantages of Income Tax e Filing?",
    "Who is eligible to file an Income Tax Return in India?",
    "If my employer deducts TDS, do I still need to file an ITR?",
    "What is a Nil ITR (Income Tax return), and Who Needs to File It?",
    "How do I choose the correct ITR form for e-Filing?",
    "Which documents are needed for filing an Income Tax Return?",
    "Can I use ITR-1 if I have income from agriculture that is tax-exempt?",
    "What is the process to file an Income Tax Return in India?",
  ];

  const faqAnswers: Record<number, string> = {
    0: "E-Filing an Income Tax Return (ITR) means submitting your tax return electronically on the Income Tax Department's e-filing portal. It includes reporting income, claiming deductions, and paying any taxes due.",
    1: "Filing ITR is a legal requirement for many taxpayers and helps you claim refunds, carry forward losses, apply for loans, and maintain financial records. Timely filing avoids penalties and compliance issues.",
    2: "Advantages include faster processing, easier refunds, automated pre-fill of certain fields, secure submission, and fewer manual errors. It also provides an official record of tax compliance.",
    3: "Salaried individuals, self-employed professionals, business owners, directors/partners, investors with dividend/interest/capital gains, NRIs with Indian income, and others meeting specific thresholds must e-file ITR.",
    4: "Even if TDS is deducted by your employer, you may still need to file ITR to claim refunds, declare other income, or if your total income exceeds the exemption limits.",
    5: "A Nil ITR indicates that total taxable income is below the basic exemption limit. Some individuals still choose to file Nil returns for loan/KYC or documentation purposes.",
    6: "Choose the ITR form depending on income sources: ITR-1 for simple salaried cases, ITR-2 for non-business income, ITR-3/4 for business/professional income, and others as applicable.",
    7: "Common documents: PAN, Aadhaar (linked), Form 16 (salary), Form 26AS, bank statements, rent receipts, investment proofs, home loan statements, capital gains docs, etc.",
    8: "If you have only tax-exempt agricultural income below prescribed limits and meet other criteria for ITR-1, you may be able to use ITR-1. Verify other income sources before choosing the form.",
    9: "Process: Login to the e-filing portal → Select 'File Income Tax Return' → Choose Assessment Year & form → Fill / upload details → Review & submit → e-verify (EVC/Aadhaar/ITR-V).",
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
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] z-50">
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
              Income Tax E-Filing
            </span>
          </div>

          {/* HERO */}
          <section
            aria-label="Hero"
            className="relative rounded-2xl overflow-hidden shadow-sm"
            style={{ minHeight: 380 }}
          >
            <div
              className="absolute inset-0 bg-center bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url(${ASSETS.hero})`,
              }}
            >
              <img
                src={ASSETS.hero}
                alt="hero background"
                className="hidden"
                loading="eager"
                draggable={false}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at left center, rgba(0,0,0,0.6) 0%, rgba(2,6,23,0.7) 100%)",
                }}
              />
            </div>

            <div className="relative z-10">
              <div className="mx-auto max-w-[1180px] px-6 py-12 flex flex-col md:flex-row items-center gap-8">
                {/* left text */}
                <div className="flex-1 max-w-2xl">
                  <div className="bg-[rgba(0,0,0,0.45)] border border-[rgba(255,255,255,0.06)] rounded-2xl p-8 md:p-10 backdrop-blur-sm shadow-[0_20px_50px_rgba(2,6,23,0.55)]">
                    <h1 className="text-white text-3xl md:text-[34px] leading-tight font-semibold mb-4">
                      Personal Tax Filing
                    </h1>
                    <p className="text-slate-200 text-sm md:text-base mb-6 max-w-prose">
                      For resident salaried/pension earners with total income up
                      to ₹50 lakh, one house, and basic interest or dividends.
                      Not for anyone with business income, capital gains,
                      multiple houses, or foreign assets.
                    </p>

                    {/* small form row */}
                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="flex flex-col sm:flex-row gap-3 items-center"
                    >
                      <div className="flex items-center gap-2 bg-transparent rounded-full border border-[rgba(255,255,255,0.12)] px-3 py-2 w-full sm:w-auto">
                        <div className="text-white text-xs px-3 py-1 bg-[rgba(255,255,255,0.05)] rounded-md">
                          ITR-1
                        </div>
                        <input
                          className="bg-transparent outline-none placeholder:text-slate-300 text-white text-sm w-full"
                          placeholder="PAN Number"
                        />
                      </div>

                      <button className="whitespace-nowrap px-5 py-3 bg-white text-slate-900 rounded-full font-medium shadow-[0_6px_20px_rgba(0,0,0,0.25)]">
                        File ITR
                      </button>
                    </form>
                  </div>

                  {/* Insert screenshot497 (docs.png) right after the hero intro for context */}
                  {/* <div className="mt-4">
                    <img
                      src={ASSETS.screenshot497}
                      alt="overview docs"
                      className="w-full rounded shadow-sm"
                    />
                  </div> */}
                </div>

                {/* right image - phone / illustration */}
                <div className="w-full md:w-96 flex justify-end">
                  <div className="relative w-[340px]">
                    <img
                      src={ASSETS.heroRight}
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
                  "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.18) 100%)",
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
                  professional profits.
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
                  LEDGERS Accounting Software — Most popular
                </div>
              </div>

              {/* Not for Profit */}
              <div className="bg-white rounded-xl border p-6 shadow-sm">
                <div className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs mb-3">
                  Not for Profit
                </div>
                <h3 className="font-semibold text-lg">Not for Profit</h3>
                <p className="text-sm text-gray-600 mt-2">
                  For companies claiming charitable or religious exemption under
                  applicable provisions.
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

            {/* Insert screenshot499 (itr-forms.png) below pricing — shows which ITR forms to choose */}
            <div className="mt-6 text-gray-700">
              <img
                src={ASSETS.screenshot499}
                alt="which itr form"
                className="w-full rounded shadow-sm"
              />
            </div>
          </section>

          {/* long textual content */}
          <article className="bg-white rounded-lg shadow-sm p-6">
            <h1 className="text-2xl font-semibold text-center">
              Income Tax Return (ITR)
            </h1>

            <div className="mt-4 text-[15px] leading-7 text-gray-700 space-y-4">
              <p>
                Filing ITR (income tax return) is a crucial duty of every
                taxpayer in India, ensuring adherence to the nation's tax
                regulations. Income tax filing involves detailing all sources of
                income, deductions, and tax liabilities for a comprehensive
                report to the Income Tax Department. Early ITR e-filing helps
                avoid errors and last-minute technical glitches, ensuring a
                smoother submission process.
              </p>

              {/* Insert screenshot498 (steps.png) early in the article — the 5 quick steps image */}
              <div className="mt-6">
                <img
                  src={ASSETS.screenshot498}
                  alt="5 steps"
                  className="w-full rounded shadow-sm"
                />
              </div>

              <p>
                IndiaFilings simplifies the entire Income Tax e Filing process,
                making it quick, easy, and hassle-free. Our platform guides you
                step-by-step, from auto-fetching your pre-filled data to
                assisting you in choosing the right tax regime. Whether you're
                an individual or a business owner, our user-friendly ITR efiling
                system ensures your taxes are filed accurately and on time.
              </p>

              <p>
                Experience a seamless ITR filing process online with
                IndiaFilings and say goodbye to tax season stress!
              </p>

              <h3 className="text-lg font-semibold">
                Who Needs to e File an ITR Income Tax Return?
              </h3>
              <p>
                Income tax filing is not just a legal obligation, but also a
                financial responsibility. It applies to individuals and entities
                across various categories and income levels. Below is a clear
                overview of who must e-file their ITR income tax return in
                India:
              </p>

              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>
                  <strong>Salaried Individuals:</strong> If your total annual
                  income exceeds the basic exemption limit, you are required to
                  file IT returns online.
                </li>
                <li>
                  <strong>Self-Employed Professionals:</strong> Freelancers,
                  consultants, doctors, lawyers, designers, and other
                  independent professionals with income above the exemption
                  threshold must e-file. Business-related expenses can also be
                  claimed as deductions.
                </li>
                <li>
                  <strong>Business Owners (including SMEs &amp; MSMEs):</strong>{" "}
                  All business entities—including sole proprietorships,
                  partnerships, LLPs, and private limited companies—must file IT
                  returns online annually, irrespective of profit or loss.
                </li>
                <li>
                  <strong>Directors and Partners:</strong> Individuals who serve
                  as directors in private limited companies or partners in LLPs
                  are mandated to file ITRs reflecting their share of income and
                  financial involvement in the entity.
                </li>
                <li>
                  <strong>
                    Dividend, Interest, and Capital Gains Earners:
                  </strong>{" "}
                  If you receive income from dividends (mutual funds, equities,
                  etc.), interest (from FDs, bonds, etc.), or capital gains
                  (from stocks, crypto, F&amp;O, mutual funds), it’s mandatory
                  to report and pay applicable taxes through ITR.
                </li>
                <li>
                  <strong>NRIs and RNORs:</strong> NRIs (Non-Resident Indians)
                  with income arising in India exceeding the exemption limit
                  must file IT returns online. RNORs (Resident Not Ordinarily
                  Residents) with foreign income or assets may also be required
                  to file based on disclosure obligations.
                </li>
                <li>
                  <strong>Foreign Asset or Income Holders:</strong> Indian
                  residents holding foreign assets (like overseas bank accounts,
                  shares, or property) or earning foreign income are required to
                  file ITR, even if their taxable income is below the exemption
                  limit.
                </li>
                <li>
                  <strong>High-Value Transaction Individuals:</strong> Even if
                  your income is below the basic exemption limit, you must file
                  ITR if you have deposited Rs. 1 crore or more in a bank
                  account, spent over Rs. 2 lakh on foreign travel, or paid more
                  than Rs. 1 lakh in electricity bills in a year.
                </li>
                <li>
                  <strong>Claiming Tax Refunds:</strong> If you've paid excess
                  tax (through TDS, advance tax, etc.), you must file an ITR to
                  claim your tax refund.
                </li>
                <li>
                  <strong>Charitable and Religious Trusts:</strong>{" "}
                  Organisations that manage charity funds, religious
                  institutions, or voluntary contributions must file ITRs
                  annually to maintain financial transparency and tax
                  compliance.
                </li>
              </ol>

              <h3 className="text-lg font-semibold">
                Eligibility for Income Tax efiling in India
              </h3>
              <p>
                In India, the obligation to do ITR online filing arises under
                certain conditions. Primarily, if your gross total income
                exceeds the basic exemption limits, you're required to e-file
                your return - and the limits vary based on your age and the tax
                regime chosen.
              </p>

              <p>
                A tax regime refers to the structure under which your income is
                taxed. Taxpayers can opt for either the Old Tax Regime, which
                allows various deductions and exemptions, or the New Tax Regime,
                which offers reduced slab rates but restricts most deductions.
              </p>

              <h4 className="font-semibold">Old Tax Regime</h4>
              <p>The following criteria apply to the old tax regime:</p>
              <ul className="list-disc list-inside">
                <li>Individuals under 60 years: Rs 2.5 lakh</li>
                <li>Individuals between 60 and 80 years: Rs 3.0 lakh</li>
                <li>Individuals over 80 years: Rs 5.0 lakh</li>
              </ul>

              <div className="overflow-auto mt-2">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="text-left text-gray-700">
                      <th className="pb-2">Income range</th>
                      <th className="pb-2">Income Tax Slab Rates</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="pt-2">Up to Rs. 2,50,000</td>
                      <td className="pt-2">Nil</td>
                    </tr>
                    <tr>
                      <td className="pt-2">Rs. 2,50,001 to Rs. 5,00,000</td>
                      <td className="pt-2">5%</td>
                    </tr>
                    <tr>
                      <td className="pt-2">Rs. 5,00,001 to Rs. 10,00,000</td>
                      <td className="pt-2">20%</td>
                    </tr>
                    <tr>
                      <td className="pt-2">Above Rs. 10,00,000</td>
                      <td className="pt-2">30%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className="font-semibold mt-4">
                New Tax Regime (Updated - Union Budget 2025)
              </h4>
              <div className="overflow-auto mt-2">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="text-left text-gray-700">
                      <th className="pb-2">Income Range (Rs.)</th>
                      <th className="pb-2">Tax Rate (%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="pt-2">Up to 4,00,000</td>
                      <td className="pt-2">NIL</td>
                    </tr>
                    <tr>
                      <td className="pt-2">4,00,001 - 8,00,000</td>
                      <td className="pt-2">5%</td>
                    </tr>
                    <tr>
                      <td className="pt-2">8,00,001 - 12,00,000</td>
                      <td className="pt-2">10%</td>
                    </tr>
                    <tr>
                      <td className="pt-2">12,00,001 - 16,00,000</td>
                      <td className="pt-2">15%</td>
                    </tr>
                    <tr>
                      <td className="pt-2">16,00,001 - 20,00,000</td>
                      <td className="pt-2">20%</td>
                    </tr>
                    <tr>
                      <td className="pt-2">20,00,001 - 24,00,000</td>
                      <td className="pt-2">25%</td>
                    </tr>
                    <tr>
                      <td className="pt-2">Above 24,00,000</td>
                      <td className="pt-2">30%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className="font-semibold mt-4">
                Other circumstances that require filing ITR
              </h4>
              <p>
                Even if your income is below these thresholds, specific
                situations require you to file ITR. Key examples include:
              </p>
              <ul className="list-disc list-inside">
                <li>
                  Deposited Rs 1 crore or more in one or more current bank
                  accounts.
                </li>
                <li>
                  Deposited Rs 50 lakh or more in one or more savings bank
                  accounts.
                </li>
                <li>Spent over Rs 2 lakh on foreign travel.</li>
                <li>
                  Incurred electricity expenses exceeding Rs 1 lakh during the
                  financial year.
                </li>
                <li>
                  Had TDS or TCS exceeding Rs 25,000 (or Rs 50,000 for senior
                  citizens).
                </li>
              </ul>

              <h3 className="text-lg font-semibold mt-4">
                Business and Professional Income Thresholds
              </h3>
              <p>
                <strong>Businesses:</strong> Mandatory if your total sales,
                turnover, or gross receipts exceed Rs 60 lakh during the
                financial year.
              </p>
              <p>
                <strong>Professionals:</strong> Mandatory if gross receipts
                exceed Rs 10 lakh during the financial year.
              </p>

              <h3 className="text-lg font-semibold mt-4">
                Income Tax Return Forms in India
              </h3>
              <p>
                The process of ITR e filing is streamlined through various
                Income Tax Return forms, each designed to cater to different
                types of taxpayers. Choose the form that matches your sources of
                income and taxpayer category (ITR-1 through ITR-7).
              </p>

              {/* Insert screenshot500 (due-dates.png) near Due Date heading */}
              <h3 className="text-lg font-semibold mt-4">
                Due Date for ITR e Filing
              </h3>
              <div className="mt-3 text-gray-700">
                <img
                  src={ASSETS.screenshot500}
                  alt="due dates"
                  className="w-full rounded shadow-sm"
                />
              </div>

              <p className="mt-3">
                Timely income tax efiling in India is mandatory to avoid
                penalties. Key due dates for the Financial Year (FY) 2024-25 are
                listed below:
              </p>

              <ul className="list-disc list-inside">
                <li>
                  ITR Filing for Individuals and Entities Not Liable for Tax
                  Audit: Original last date was July 31, 2025; extended to
                  September 15, 2025 and further extended to September 16, 2025.
                </li>
                <li>
                  ITR Filing for Taxpayers Under Tax Audit (excluding transfer
                  pricing): Due by October 31, 2025.
                </li>
                <li>
                  ITR Filing for Taxpayers Covered Under Transfer Pricing: Due
                  by November 30, 2025.
                </li>
                <li>
                  Last date for Revised/Belated Return of Income for FY 2024-25:
                  December 31, 2025.
                </li>
              </ul>

              <h3 className="text-lg font-semibold mt-4">
                Documents Required for Income Tax e Filing
              </h3>
              <p>
                When preparing for your e Filing of Income Tax Return in India,
                it's important to have all necessary documents handy to ensure a
                smooth and accurate submission process.
              </p>

              <h4 className="font-semibold">
                General Documents for Income Tax Filing
              </h4>
              <ul className="list-disc list-inside">
                <li>PAN (Permanent Account Number)</li>
                <li>Aadhaar (Linked to PAN)</li>
                <li>Bank Account Details</li>
              </ul>

              <h4 className="font-semibold mt-2">Income-Related Documents</h4>
              <ul className="list-disc list-inside">
                <li>Salary Slips</li>
                <li>Rent Receipts (for HRA claims)</li>
                <li>Form 16 (Salary)</li>
                <li>Form-16A, Form-16B, Form-16C as applicable</li>
                <li>Form 26AS (Tax credit statement)</li>
              </ul>

              <h4 className="font-semibold mt-2">
                Deductions and exemptions-related documents
              </h4>
              <ul className="list-disc list-inside">
                <li>Interest Certificates from banks/post offices</li>
                <li>Home Loan Details (interest certificate)</li>
                <li>
                  Proof of Tax-Saving Instruments (PPF, NSC, ELSS, insurance,
                  etc.)
                </li>
                <li>Income from Capital Gains: sale documents</li>
                <li>Rental Income: Lease agreements and rent receipts</li>
                <li>Foreign Income and Dividend Income Proofs</li>
              </ul>

              <h3 className="text-lg font-semibold mt-4">
                Procedure for eFiling of ITR in India
              </h3>
              <p>
                Income tax e filing in India can be accomplished through two
                primary methods: offline to online and entirely online. Below
                are step-by-step guides for both approaches.
              </p>

              {/* Insert screenshot502 (more.png) to illustrate procedure or flow near procedure steps */}
              <div className="mt-4 text-gray-700">
                <img
                  src={ASSETS.screenshot502}
                  alt="procedure illustration"
                  className="w-full rounded shadow-sm"
                />
              </div>

              <h4 className="font-semibold mt-3">
                eFiling ITR Offline to Online Method
              </h4>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  Download the Appropriate ITR Form from the official Income Tax
                  Department website (Excel/ Java utilities available).
                </li>
                <li>Fill out the form offline on your computer.</li>
                <li>Save the form in XML format.</li>
                <li>
                  Upload the XML file to the Income Tax e-Filing Portal and
                  submit.
                </li>
              </ol>

              <h4 className="font-semibold mt-2">
                Income Tax eFiling in India Online
              </h4>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  <strong>Step 1: Log in to the Portal</strong> - Visit the
                  Income Tax e-filing website and click "Login".
                </li>
                <li>
                  <strong>Step 2: Enter Login Credentials</strong> - Use your
                  PAN as username and your password to login.
                </li>
                <li>
                  <strong>Step 3: Access E Filing Services</strong> - Go to
                  "e-File" &gt; "File Income Tax Return".
                </li>
                <li>
                  <strong>
                    Step 4: Choose the Assessment Year and Filing Mode
                  </strong>{" "}
                  - Select the assessment year (e.g., AY 2025-26) and choose
                  Online mode.
                </li>
                <li>
                  <strong>Step 5: Select Taxpayer Category</strong> - Choose
                  Individual / HUF / Others.
                </li>
                <li>
                  <strong>Step 6: Choose the Right ITR Form</strong> - Portal
                  suggests the appropriate form based on provided data.
                </li>
                <li>
                  <strong>Step 7: Reason for ITR Filing</strong> - Select reason
                  for filing (regular, refund, revised, etc.).
                </li>
                <li>
                  <strong>
                    Step 8: Review and Edit Pre-Filled Information
                  </strong>{" "}
                  - Verify pre-filled information and correct if needed.
                </li>
                <li>
                  <strong>Step 9: Review and Confirm ITR Return Details</strong>{" "}
                  - Check income, deductions and tax liability.
                </li>
                <li>
                  <strong>Step 10: Make Tax Payment</strong> - If tax is due,
                  pay through the e-payment gateway and submit.
                </li>
              </ol>

              <h3 className="text-lg font-semibold mt-4">
                Completed Your ITR e-Filing? Here's What to Do Next
              </h3>
              <h4 className="font-semibold">e-verify your return</h4>
              <p>
                After filing, e-verify your return to confirm authenticity.
                Methods include EVC generated via bank/Demat/mobile/email,
                Aadhaar OTP (mobile linked to Aadhaar), or by sending a signed
                ITR-V to CPC Bengaluru within 120 days.
              </p>

              {/* Insert screenshot503 (more2.png) near verification or follow-up visuals */}
              <div className="mt-4 text-gray-700">
                <img
                  src={ASSETS.screenshot503}
                  alt="follow up visuals"
                  className="w-full rounded shadow-sm"
                />
              </div>

              <h4 className="font-semibold mt-2">
                Steps to Track e-Filing Status
              </h4>
              <ol className="list-decimal list-inside space-y-2">
                <li>Visit the Income Tax e-Filing Portal and Login.</li>
                <li>
                  Navigate to ‘e-File’ &gt; ‘Income Tax Returns’ &gt; ‘View
                  Filed Returns’.
                </li>
                <li>
                  View the status column for each filed return (e.g.,
                  "Successfully e-verified", "Processed", "Under Processing").
                </li>
              </ol>

              <h3 className="text-lg font-semibold mt-4">
                Revised Return Filings
              </h3>
              <p>
                If you discover an error or omission after filing an original or
                belated return (under Section 139(1) or 139(4)), you may file a
                Revised Return. Common reasons include missed deductions or
                incorrect disclosures. The deadline to file a revised return is
                December 31 of the relevant assessment year.
              </p>

              <h3 className="text-lg font-semibold mt-4">
                Belated Return Filings
              </h3>
              <p>
                If you miss the original deadline of 31st July, you can file a
                Belated Return under Section 139(4) on or before 31st December
                of the relevant assessment year. Penalties like Section 234F
                (Rs. 5,000 for income above Rs. 5 lakhs; Rs. 1,000 otherwise)
                and interest under Section 234A (1% per month) may apply.
              </p>

              <h3 className="text-lg font-semibold mt-4">
                Updated Return (ITR-U) Filing
              </h3>
              <p>
                If both original and belated deadlines are missed, you can file
                an Updated Return (ITR-U) under Section 139(8A) within four
                years from the end of the relevant assessment year (as per
                Budget 2025). Note: ITR-U cannot be used to claim refunds or
                reduce tax liability.
              </p>
            </div>
          </article>

          {/* Documents required card — screenshot501 already included */}
          <article className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">
              Documents Required to File Your ITR
            </h3>
            <div className="mt-2 text-gray-700">
              <img
                src={ASSETS.screenshot501}
                alt="documents required"
                className="w-full rounded shadow-sm"
              />
            </div>
          </article>

          {/* FAQ */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">
              FAQ's on Income Tax E-Filing
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
              <li>Tax Year in Income Tax: Meaning and Example</li>
              <li>Old vs New Tax Regime: Which is better for you?</li>
              <li>What is CPC in Income Tax?</li>
              <li>
                ITR-B Form: Income Tax Return to Disclose Undisclosed Income
              </li>
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
            © {new Date().getFullYear()} IndiaFilings - Sample replica footer
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
