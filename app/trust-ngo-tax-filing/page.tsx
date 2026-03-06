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
 * Replaced content with Not-For-Profit / ITR-7 hero and ITR-5 article per user's request.
 * Put images in /public/images/ with the filenames used in ASSETS if you want visuals.
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
    "Who should file the ITR-5 Form?",
    "What is the due date for filing the ITR-5 Form?",
    "Who cannot use the ITR-5 Form?",
    "Are any documents required to be attached to the ITR-5 form?",
    "What is the structure of the ITR-5 Form?",
    "What is the recommended sequence for filling out the ITR-5 Form?",
    "Why choose IndiaFilings for ITR-5 filing?",
    "Can a local authority use the ITR-5 Form for filing taxes?",
    "What if my accounts need to be audited, and I miss the due date for filing ITR-5?",
    "Is it mandatory to e-file the ITR-5 Form?",
  ];

  const faqAnswers: Record<number, string> = {
    0: "The ITR-5 Form is primarily designed for firms, Association of Persons (AOP), Body of Individuals (BOI), LLPs, estates of deceased/insolvent persons, cooperative societies, local authorities, business trusts and investment funds — essentially non-company entities that must report income.",
    1: "Due dates vary: if accounts require audit under the Income-Tax Act, due date is 31st October of the assessment year. If Form 3CEB is required, due date is 30th November. In other cases (no audit), due date is 31st July of the assessment year.",
    2: "ITR-5 is not meant for individuals, HUFs, companies, or taxpayers required to use Forms ITR-7 (sections 139(4A/4B/4C/4D/4E/4F) etc.). Entities that should use other forms must not use ITR-5.",
    3: "There is no requirement to attach documents with the ITR-5 form while filing. The form collects the necessary information and schedules; supporting documents are generally retained by the taxpayer for record and audit purposes.",
    4: "ITR-5 includes multiple parts and schedules: Part A (General Info), Part A-BS (Balance Sheet), A-Manufacturing, A-Trading, Profit & Loss (A & L), A-OI (Other Info), A-QD (Quantitative Details), Part B (Computation of Income), and numerous schedules (31 categories) for detailed disclosures.",
    5: "Recommended sequence: fill Part A (basic information), complete relevant schedules, then Part B (computation of total income and tax), and finally Verification. Follow sequence suggested by the Income Tax Department for accuracy.",
    6: "IndiaFilings provides expert guidance, deduction optimisation, review & verification, secure filing, timely reminders, and post-filing support — ensuring accurate and timely ITR-5 filings tailored to entity-specific needs.",
    7: "Yes — local authorities that fall under the list of entities eligible for ITR-5 (and not required to use ITR-7/other forms) can use ITR-5 for filing their returns.",
    8: "If audited accounts are to be filed and you miss the due date, you may face penalties and interest as per the Income Tax Act. IndiaFilings can help file belated returns or manage consequences; consult a tax expert for specifics.",
    9: "E-filing is mandatory for most entities and categories as per current income tax rules; exceptions (if any) are notified by the department. Check the latest Income Tax e-filing guidelines for exact applicability.",
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
              ITR-5 Return Filing
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
                      Not-For-Profit Tax Filing
                    </h1>
                    <p className="text-slate-200 text-sm md:text-base mb-6 max-w-prose">
                      For charitable/religious trusts, political parties,
                      universities, hospitals, and other institutions that claim
                      tax exemption under special sections.
                    </p>

                    {/* small form row */}
                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="flex flex-col sm:flex-row gap-3 items-center"
                    >
                      <div className="flex items-center gap-2 bg-transparent rounded-full border border-[rgba(255,255,255,0.08)] px-3 py-2 w-full sm:w-auto">
                        <div className="text-white text-xs px-3 py-1 bg-[rgba(255,255,255,0.05)] rounded-md">
                          ITR-7
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
                  For charitable/religious trusts, political parties,
                  universities, hospitals, and institutions claiming exemption
                  under specific sections.
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

          {/* Long ITR-5 content */}
          <article className="bg-white rounded-lg shadow-sm p-6">
            <h1 className="text-2xl font-semibold text-center">
              ITR-5 Return Filing
            </h1>

            <div className="mt-4 text-[15px] leading-7 text-gray-700 space-y-4">
              <p>
                The Income Tax Department has introduced various forms for
                different taxpayers. An assessee should choose the appropriate
                ITR form as per the source of income. One such Income Tax Return
                (ITR) is the ITR-5 Form. It is primarily designed for firms,
                Association of Persons (AOP), and Body of Individuals (BOI) who
                are not required to file their income tax returns as companies.
                In other words, it is meant for entities that do not have a
                corporate structure but still need to report their income and
                taxes to the Indian Income Tax Department.
              </p>

              <p>
                IndiaFilings is your trusted partner for hassle-free and
                efficient Income Tax Return (ITR) filing services in India. Our
                ITR-5 service is designed to cater to the specific needs of
                firms, the Association of Persons (AOP), and the Body of
                Individuals (BOI) looking to file their income tax returns
                seamlessly. With our user-friendly platform, expert assistance,
                and competitive pricing, ITR 5 income tax filing has always been
                a challenge — let us simplify it for you.
              </p>

              <h3 className="text-lg font-semibold">
                Who is eligible to file the ITR 5 Form?
              </h3>
              <p>The following entities can use the ITR 5 Form:</p>
              <ul className="list-disc list-inside">
                <li>Firm</li>
                <li>Limited Liability Partnership (LLP)</li>
                <li>Body of Individuals (BOI)</li>
                <li>Association of Persons (AOP)</li>
                <li>Estate of deceased individuals</li>
                <li>
                  Artificial Juridical Person referred to in section 2(31)(vii)
                </li>
                <li>Business trusts and investment funds</li>
                <li>Estate of insolvent individuals</li>
                <li>Cooperative society</li>
                <li>Local authority</li>
              </ul>
              <p>
                Note: A person required to file under sections 139(4A), 139(4C),
                139(4B), or 139(4D) shall not use this form.
              </p>

              <h3 className="text-lg font-semibold">
                Due Date for Filing ITR5 Form
              </h3>
              <p>
                The ITR 5 due date depends on whether the taxpayer's accounts
                need to be audited under the Income-Tax Act and whether they
                must furnish a report in Form No. 3CEB:
              </p>
              <ul className="list-disc list-inside">
                <li>
                  Accounts to be audited: Due date — 31st October of the
                  assessment year.
                </li>
                <li>
                  If Form No. 3CEB is required: Due date — 30th November of the
                  assessment year.
                </li>
                <li>
                  In other cases (no audit): Due date — 31st July of the
                  assessment year.
                </li>
              </ul>

              <h3 className="text-lg font-semibold">
                Who Cannot File the ITR 5 form?
              </h3>
              <p>
                The ITR 5 form is not meant for individual assesses, HUFs,
                companies, or taxpayers required to use Form ITR-7. Entities
                falling under specific sections (139(4A/4B/4C/4D/4E/4F)) must
                use ITR-7 instead.
              </p>

              <h3 className="text-lg font-semibold">No Documents Required</h3>
              <p>
                There is no requirement to attach documents with the ITR 5
                income tax form while filing. Taxpayers should retain supporting
                documents and records for their records and for any potential
                audits.
              </p>

              <h3 className="text-lg font-semibold">
                Structure of the ITR5 Form
              </h3>
              <p>
                The ITR5 Form is structured into several parts and schedules to
                facilitate comprehensive reporting:
              </p>
              <ul className="list-disc list-inside">
                <li>Part A: General Information</li>
                <li>Part A-BS: Balance Sheet</li>
                <li>Part A-Manufacturing Account</li>
                <li>Part A-Trading Account</li>
                <li>Part A and L: Profit and Loss Account</li>
                <li>Part A-OI: Other information</li>
                <li>Part A-QD: Quantitative details</li>
                <li>Part B: Computation of Total Income</li>
                <li>
                  Schedules: The form includes multiple schedules (up to 31) for
                  detailed disclosures
                </li>
              </ul>

              <h3 className="text-lg font-semibold">
                Part B – TI & Part B – TTI
              </h3>
              <p>
                Part B – TI is used for computation of total income. Part B –
                TTI is used for computation of tax liability on total income.
                Sections for tax payments include advance tax, self-assessment
                tax, TDS (including details like 16A/16B/16C), and TCS details.
              </p>

              <h3 className="text-lg font-semibold">
                Sequence for Filling Out Parts and Schedules
              </h3>
              <p>
                The Income Tax Department recommends the following sequence:
                Part A → Schedules → Part B → Verification. Follow the sequence
                for a smooth filing experience.
              </p>

              <h3 className="text-lg font-semibold">
                Why Choose IndiaFilings for ITR-5 Form Filing?
              </h3>
              <p>
                IndiaFilings is your preferred choice for ITR 5 income tax
                filing. We offer expert guidance, deduction optimisation, review
                & verification, secure filing, timely reminders, and post-filing
                support — ensuring your ITR-5 is filed accurately and on time.
              </p>

              <p>
                Let IndiaFilings assist you in ITR 5 income tax filing, allowing
                you to focus on your business and financial well-being. Contact
                us today for expert assistance and peace of mind.
              </p>
            </div>
          </article>

          {/* Documents required card */}
          <article className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">
              Documents Required For ITR-5 Return Filing
            </h3>
            <div className="mt-2 text-gray-700">
              <img
                src={ASSETS.docsRequiredImg}
                alt="documents required"
                className="w-full rounded shadow-sm"
              />
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>
                  Day to day Administration expenses and General expenses
                  details
                </li>
                <li>Company's PAN and two DSCs (if applicable)</li>
                <li>Financial statements (Profit & Loss, Balance Sheet)</li>
                <li>Books of accounts / audit reports (if applicable)</li>
                <li>Details of taxes paid / TDS / TCS</li>
              </ul>
            </div>
          </article>

          {/* FAQ */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">
              FAQ's on ITR-5 Return Filing
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
            © {new Date().getFullYear()} IndiaFilings - ITR-5 Return Filing
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
