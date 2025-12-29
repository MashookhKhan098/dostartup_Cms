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
  "Marriage Certificate",
  "Passport Renewal",
  "Nivesh Mitra",
  "MSME Registration",
  "Experience Certificate",
  "Trademark Status",
  "Trade License",
  "Domicile",
  "eMitra",
  "UAN",
  "PICME",
  "Resignation Letter Format",
  "Ration Card",
  "TNREGINET",
  "RAJSSP",
  "LLP Compliance",
  "Form 16",
  "Police Clearance Certificate",
  "OBC Certificate",
  "Jamabandi",
  "Mee Bhoomi",
  "SC Certificate",
  "UAN Login",
  "eAadhaar Download",
  "Linking Aadhaar To Bank Accounts",
  "mAadhaar",
  "Aadhaar Enrollment Centre",
  "UAN Passbook",
  "Amazon How to Sell",
  "PAN Card Apply",
  "EPFO Unified Portal",
];

export default function BusinessTaxFilingPage(): React.ReactElement {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [gstChecked, setGstChecked] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showIncomeDropdown, setShowIncomeDropdown] = useState(false);

  const faqQuestions = [
    "What is ITR-4 (Sugam) Form?",
    "Who is eligible to file ITR4 (Sugam) Form?",
    "What is the Presumptive Taxation Scheme?",
    "Who is eligible for the Presumptive Taxation Scheme under Section 44AD?",
    "Who can utilize the Presumptive Scheme under Section 44ADA?",
    "What is the eligibility for the Presumptive Scheme under Section 44AE?",
    "What are the eligibility criteria for using ITR-4 (Sugam) Form?",
    "What types of Income are not eligible for ITR 4 income tax filing?",
    "Can a taxpayer with a loss file ITR-4 (Sugam)?",
    "What is the structure of ITR-4 (Sugam) Form?",
  ];

  const faqAnswers: Record<number, string> = {
    0: "The ITR-4 Form, commonly known as the Sugam form, is designed for taxpayers who have opted for the presumptive income scheme under Sections 44AD, 44ADA, and 44AE of the Income Tax Act. It simplifies return filing for eligible small taxpayers.",
    1: "ITR-4 is for individuals, Hindu Undivided Families (HUFs), and firms (excluding LLPs) who choose presumptive taxation under Sections 44AD/44ADA/44AE and whose total income meets the specified thresholds (see eligibility section).",
    2: "The presumptive taxation scheme allows eligible taxpayers to estimate their income at prescribed rates, reducing the need for detailed bookkeeping and simplifying tax compliance for small businesses and professionals.",
    3: "Section 44AD applies to resident individuals, resident HUFs, and resident partnership firms (excluding LLPs) engaged in eligible businesses, allowing income to be computed at prescribed rates if turnover/receipts are within limits.",
    4: "Section 44ADA applies to resident individuals engaged in profession as specified under Section 44AA(1), allowing presumptive computation for professionals subject to gross receipts limits.",
    5: "Section 44AE applies to taxpayers engaged in plying, hiring, or leasing goods carriages, allowing presumptive computation for up to ten goods carriages owned during the previous year.",
    6: "Eligibility criteria include total income thresholds, the nature of income (salary, one house property, presumptive business/professional income, etc.), and turnover/receipt limits described in Section 44AD/44ADA/44AE.",
    7: "Types of income not allowed under ITR-4 include capital gains, income from more than one house property, income at special rates (e.g., under Sections 115BBDA/115BBE), foreign income/assets, and items requiring computation beyond presumptive rules.",
    8: "Taxpayers with certain losses or those requiring to carry forward losses or claim detailed deductions might not be suitable for ITR-4; in some cases they must file ITR-5 or ITR-3 depending on circumstances.",
    9: "The ITR-4 (Sugam) is structured in parts: Part A (General Information), Part B (Gross Total Income from 5 heads), Part C (Deductions and Total Taxable Income) and Part D (Tax Computation and Tax Status). Additional schedules like IT, TDS, and TCS may be required.",
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
              ITR-4 Return Filing
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
                    "radial-gradient(ellipse at left center, rgba(0,0,0,0.18) 0%, rgba(2,6,23,0.45) 100%)",
                }}
              />
            </div>

            <div className="relative z-10">
              <div className="mx-auto max-w-[1180px] px-6 py-12 flex flex-col md:flex-row items-center gap-8">
                {/* left text */}
                <div className="flex-1 max-w-2xl">
                  <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-2xl p-8 md:p-10 backdrop-blur-sm shadow-[0_20px_50px_rgba(2,6,23,0.18)]">
                    <h1 className="text-white text-3xl md:text-[34px] leading-tight font-semibold mb-4">
                      Company Tax Filing
                    </h1>
                    <p className="text-slate-200 text-sm md:text-base mb-6 max-w-prose">
                      For all companies except those claiming charitable or
                      religious exemption under Section 11.
                    </p>

                    {/* small form row */}
                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="flex flex-col sm:flex-row gap-3 items-center"
                    >
                      <div className="flex items-center gap-2 bg-transparent rounded-full border border-[rgba(255,255,255,0.08)] px-3 py-2 w-full sm:w-auto">
                        <div className="text-white text-xs px-3 py-1 bg-[rgba(255,255,255,0.05)] rounded-md">
                          ITR-6
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
                  ₹50 lakh, one house...
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
                  partners)...
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
                  religious exemption under Section 11.
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
                <div className="mt-2 text-xs text-gray-500">
                  LEDGERS Accounting Software • MCA Compliance • Dedicated
                  support, flexible cost
                </div>
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

          {/* Long ITR-4 content */}
          <article className="bg-white rounded-lg shadow-sm p-6">
            <h1 className="text-2xl font-semibold text-center">
              ITR-4 Return Filing
            </h1>

            <div className="mt-4 text-[15px] leading-7 text-gray-700 space-y-4">
              <p>
                The ITR-4 Form, commonly referred to as the Sugam form, is
                specifically designed for taxpayers who have opted for the
                presumptive income scheme outlined in Section 44AD, Section
                44ADA, and Section 44AE of the Income Tax Act. It is mandatory
                for eligible taxpayers to complete and submit this form.
              </p>

              <p>
                However, for businesses with an annual turnover exceeding Rs. 2
                Crores, ITR-3 should be used. Additionally, depending on
                individual circumstances, ITR-5 may also be required.
                IndiaFilings offers expert assistance for the ITR 4 income tax
                filing. Contact our experts today to ensure a smooth and
                accurate filing process.
              </p>

              <h3 className="text-lg font-semibold">
                Who is Eligible to file Form ITR 4?
              </h3>
              <p>
                ITR 4 Form is the Income Tax Return form designed for
                individuals, Hindu Undivided Families (HUFs), and firms
                (excluding Limited Liability Partnerships or LLPs) who choose to
                utilize the presumptive income scheme as per Sections 44AD,
                44ADA, and 44AE of the Income Tax Act.
              </p>

              <h3 className="text-lg font-semibold">
                What is a Presumptive Taxation Scheme?
              </h3>
              <p>
                The presumptive taxation scheme is designed to simplify tax
                compliance for certain individuals and businesses. Under Section
                44AA of the Income Tax Act, some individuals and businesses are
                required to maintain detailed accounting records. However,
                Sections 44AD, 44ADA, and 44AE offer relief to small taxpayers
                by allowing them to estimate their income at prescribed rates,
                reducing the burden of maintaining extensive financial records.
              </p>

              <h4 className="font-semibold">Section 44AD</h4>
              <p>
                This scheme allows Resident Individuals, Resident Hindu
                Undivided Families (HUFs), and Resident Partnership Firms
                (excluding LLPs) engaged in certain businesses to calculate
                their Income on an estimated basis, provided they meet specific
                conditions.
              </p>

              <h4 className="font-semibold">Section 44ADA</h4>
              <p>
                Resident individuals in India who are professionals in fields
                specified under Section 44AA(1) can use this scheme to estimate
                their professional Income, subject to certain conditions.
              </p>

              <h4 className="font-semibold">Section 44AE</h4>
              <p>
                This scheme is applicable to individuals, HUFs, Firms (excluding
                LLPs), and other residents or non-residents engaged in the
                business of plying, leasing, or hiring goods carriages. They can
                estimate their Income under this scheme, provided they own not
                more than ten goods carriages during the previous year.
              </p>

              <h3 className="text-lg font-semibold">
                Eligibility Criteria for Filing SUGAM (ITR-4) Form
              </h3>
              <p>
                To qualify for using the ITR-4 SUGAM form, the taxpayer must
                meet the following criteria for the assessment year:
              </p>
              <ul className="list-disc list-inside">
                <li>
                  Total Income: The total Income should not exceed Rs. 50 lakh.
                </li>
                <li>
                  The Income should be derived from any of the following
                  sources:
                  <ul className="list-disc list-inside ml-4">
                    <li>Income from Salary or Income from Pension.</li>
                    <li>Income from One House Property.</li>
                    <li>
                      Interest income and/or Income from family pension taxable
                      under Other Sources.
                    </li>
                    <li>
                      Income from a business, which is computed on a presumptive
                      basis (Gross Turnover up to Rs. 2 crores).
                    </li>
                    <li>
                      Income from a profession, computed on a presumptive basis
                      under Section 44ADA (Gross receipt up to Rs. 50 lakh).
                    </li>
                  </ul>
                </li>
              </ul>

              <p>
                Important Notes: When Income is computed on a presumptive basis
                under sections 44AD, 44AE, or 44ADA, it is presumed to have been
                calculated after accounting for all allowances, depreciation,
                losses, or deductions as per the Income-tax Act. However,
                individuals incurring losses after applying the proviso to
                sub-section 3 of Section 44AE are required to file ITR-5.
              </p>

              <p>
                If the taxpayer needs to combine the Income of another person,
                such as a spouse or minor child, with their own Income, the
                SUGAM form can only be used if the additional Income falls
                within the specified income categories mentioned above.
              </p>

              <h3 className="text-lg font-semibold">
                Non-Applicability of ITR-4 SUGAM Form
              </h3>
              <p>
                The following categories of taxpayers do not fall under the ITR
                4 applicability criteria:
              </p>
              <ul className="list-disc list-inside">
                <li>Directors of a company</li>
                <li>
                  Individuals who have held unlisted equity shares at any point
                  during the previous year.
                </li>
                <li>
                  Taxpayers with assets, including financial interests, in any
                  entity situated outside India.
                </li>
                <li>
                  Individuals who have signing authority in any account located
                  outside the country.
                </li>
                <li>Persons with Income from sources outside India.</li>
              </ul>

              <p>
                Furthermore, the SUGAM form cannot be used by individuals who
                have Income of the following types during the previous year:
                Profits and gains from business and professions not computed
                under Section 44AD/44ADA/44AE, income from more than one house
                property, capital gains, income from winning a lottery,
                owning/maintaining racehorses, incomes taxed at special rates,
                incomes requiring apportionment under Section 5A, or
                agricultural income exceeding Rs. 5,000.
              </p>

              <h3 className="text-lg font-semibold">
                Structure of the ITR 4 Form
              </h3>
              <p>
                The ITR 4 Form is structured into four parts for easy reporting
                of your Income and tax-related information:
              </p>
              <ul className="list-disc list-inside">
                <li>Part A: General Information</li>
                <li>Part B: Gross Total Income from the 5 Heads of Income</li>
                <li>Part C: Deductions and Total Taxable Income</li>
                <li>Part D: Tax Computation and Tax Status</li>
              </ul>

              <p>
                For individuals reporting Income from business and opting for
                the presumptive income scheme under Section 44AD or 44AE,
                additional information needs to be provided in schedules such as
                IT, TCS, TDS1, TDS2 as applicable.
              </p>

              <h3 className="text-lg font-semibold">
                Annexure-less Return Form
              </h3>
              <p>
                When using the SUGAM return form, taxpayers are not required to
                upload any additional documents, including TDS certificates.
              </p>

              <h3 className="text-lg font-semibold">
                Why Choose IndiaFilings for ITR4?
              </h3>
              <p>
                Expert Guidance: Benefit from the expertise of our
                professionals, who will guide you through the ITR 4 income tax
                filing process, ensuring accuracy, verifying ITR 4
                applicability, and complying with tax regulations.
              </p>

              <p>
                Convenience: Enjoy the ease and convenience of our online
                platform, allowing you to file your ITR4 from the comfort of
                your home or office. Say goodbye to time-consuming queues and
                paperwork.
              </p>

              <p>
                Accuracy: Our rigorous review process guarantees that your ITR4
                is free from errors, reducing the risk of potential tax-related
                issues in the future.
              </p>

              <p>
                Timely Filing: We understand the significance of filing your
                taxes on time. With IndiaFilings, you can be confident that your
                ITR4 income tax form will be filed promptly, helping you avoid
                penalties and meet tax deadlines.
              </p>

              <p>
                Contact IndiaFilings today, and our dedicated team will assist
                you at every stage of the process.
              </p>
            </div>
          </article>

          {/* Documents required card */}
          <article className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">
              Documents Required For ITR-4 Return Filing
            </h3>
            <div className="mt-2 text-gray-700">
              <img
                src={ASSETS.docsRequiredImg}
                alt="documents required"
                className="w-full rounded shadow-sm"
              />
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Bank Statement</li>
                <li>PAN Card</li>
                <li>PAN card details of the individual</li>
                <li>Aadhar Card</li>
                <li>Aadhaar card of the authorized signatory</li>
              </ul>
            </div>
          </article>

          {/* FAQ */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">
              FAQ's on ITR-4 Return Filing
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
              Get your Income Tax Return filed accurately
            </h3>
            <p className="text-sm mt-2 text-center">
              Get your Income Tax Return filed accurately and on time by
              seasoned tax professionals. We handle everything - from document
              review and tax computation to e-filing and compliance checks - so
              you stay stress-free and fully compliant, without the high cost of
              traditional tax consultants.
            </p>

            <div className="mt-4 text-sm text-gray-700">
              <h4 className="font-semibold mb-2">
                Accurate & timely compliance
              </h4>
              <p>
                End-to-end Income Tax Return preparation and filing – covering
                income aggregation, deductions review, tax computation, and
                submission. With automated document reminders, proactive
                follow-ups, and expert verification, we ensure your ITR is filed
                correctly, on time, and in full compliance with the latest tax
                regulations.
              </p>

              <h4 className="font-semibold mt-3 mb-1">Powered by LEDGERS</h4>
              <p>
                Leverage intelligent automation for effortless tax filing —
                auto-import financial data, detect eligible deductions, validate
                tax computations, securely manage documents, and generate fully
                compliant ITR forms with complete accuracy, all from one unified
                platform.
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

              <button className="w-full bg-green-500 text-white py-2 rounded-md font-medium flex items-center justify-center gap-2">
                <ShoppingBag size={16} /> Get Started
              </button>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
            <h4 className="font-semibold mb-3">Related Guides</h4>
            <ul className="text-sm text-indigo-600 space-y-2">
              <li>Form ITR 1 (Sahaj) for AY 2020-21</li>
              <li>ITR-1 For AY 2020-21 Notified: Key Changes</li>
              <li>Guidelines for Filling ITR-2 for AY 2020-2021</li>
              <li>ITR-3 for AY 2020-2021</li>
              <li>Form ITR 4 (Sugam) for AY 2020-21</li>
              <li>ITR-5 for AY 2020-2021</li>
              <li>ITR-6 for AY 2020-2021</li>
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
            © {new Date().getFullYear()} IndiaFilings - ITR-4 Return Filing
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
