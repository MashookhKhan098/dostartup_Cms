"use client";

import React, { useState } from "react";
import {
  ChevronRight,
  ShoppingBag,
  Star,
  Plus,
  ChevronDown,
} from "lucide-react";

/* ---------------------------
   Assets & Navigation data
   --------------------------- */
const ASSETS = {
  logo: "/images/india-logo.jpg",
  hero: "/images/15ca-15cb-hero.jpg", // replace with appropriate square hero image in /public/images/
  ledgers: "https://img.indiafilings.com/catalog/ledgers.png",
  whatsapp: "/images/whatsapp.svg",
  adRight1: "/images/company-compliance-ad.png",
  dinEkyc: "/images/din-ekyc-ad.png",
  cartIcon: "/images/cart-icon.svg",
  indiaFlag: "/images/india-flag.png",
  assuredBadge: "/images/assured-ledgers.png", // optional badge image - replace or remove
};

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

/* ---------------------------
   Component
   --------------------------- */
export default function FifteenCa15CbPage(): React.ReactElement {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [gstChecked, setGstChecked] = useState(false);
  const [showIncomeDropdown, setShowIncomeDropdown] = useState(false);

  const faqItems = [
    "What is Form 15CA-15CB?",
    "What is the difference between Form 15CA and Form 15CB?",
    "Who is required to file Form 15CA-15CB?",
    "What are the different types of transactions that require 15CA-15CB filing?",
    "Is Form 15CA-15CB mandatory for all foreign remittances?",
    "How is the information provided in Form 15CA verified?",
    "Can Form 15CA-15CB be filed manually?",
    "What is the penalty for not filing Form 15CA-15CB?",
    "Can the same Form 15CA be used for multiple transactions?",
    "Is Form 15CB required for all transactions?",
  ];

  const faqAnswers: Record<number, string> = {
    0: "Form 15CA is a declaration of remittance by a person making payment to a non-resident. Form 15CB is a certificate issued by a Chartered Accountant (CA), verifying taxability and applicability of tax treaties (DTAA) where required.",
    1: "Form 15CA is the remitter's declaration; Form 15CB is a CA's certificate. Form 15CB is required in certain cases (commonly when remittance exceeds INR 5 lakh or as required by provisions of the Income-tax Act).",
    2: "Any individual or entity making payments to a non-resident that may be chargeable to tax in India may need to file Form 15CA, and a CA may have to issue Form 15CB depending on the nature and amount of payment.",
    3: "Transactions like payments for services, royalties, professional fees, fees for technical services, dividends, interest, and other cross-border payments often require 15CA/15CB depending on taxability and thresholds.",
    4: "Not always — certain specified payments are excluded as per the rules (e.g., those listed under Rule 37BB) and other exceptions like some education/remittance limits and RBI-prescribed exemptions.",
    5: "The Income-tax Department may verify the information through reconciliation, audits, and cross-checking with bank records and CA certificates where submitted.",
    6: "Yes — Form 15CA can be filed online on the Income-tax Department's e-filing portal. Form 15CB is issued by a CA and is uploaded when required.",
    7: "Penalty for non-filing or late filing can be imposed — an example penalty mentioned is ₹10,000 per instance, but users should check the latest statutory provisions for current penalties.",
    8: "No — Form 15CA is transaction specific, but multiple transactions can be covered depending on the part chosen and the nature of remittances; follow instructions on the e-filing portal.",
    9: "Not for all transactions — Form 15CB is typically required when remittances exceed certain thresholds (like ₹5 lakh) or where taxability requires CA certification.",
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-[1180px] mx-auto px-6 py-3 flex items-center gap-6">
          <div className="flex-shrink-0">
            <img src={ASSETS.logo} alt="IndiaFilings" className="h-10 w-auto" />
          </div>

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
                    <button
                      aria-haspopup="true"
                      aria-expanded={showIncomeDropdown}
                      className="flex items-center gap-1 text-sm font-medium"
                    >
                      {item} <ChevronDown className="w-3 h-3" />
                    </button>

                    {showIncomeDropdown && (
                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] z-50"
                        role="menu"
                      >
                        <div className="bg-white rounded-lg shadow-lg border p-4">
                          <div className="grid grid-cols-2 gap-3">
                            {INCOME_TAX_DROPDOWN_LINKS.map((link) => (
                              <a
                                key={link.href}
                                href={link.href}
                                className="text-sm text-slate-700 hover:text-emerald-600 block"
                                role="menuitem"
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
            <a className="hover:text-indigo-700">{NAV_ITEMS.at(-1)}</a>
          </nav>

          <div className="ml-auto">
            <button className="px-3 py-1 border rounded-md text-sm">
              Login
            </button>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-5">
        <div className="max-w-[1180px] mx-auto px-6 text-sm text-gray-500">
          IndiaFilings / Income Tax /{" "}
          <span className="text-indigo-600 font-medium">
            15CA - 15CB Filing
          </span>
        </div>
      </div>

      {/* Main */}
      <main className="max-w-[1180px] mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left column */}
        <section className="lg:col-span-8 space-y-6">
          {/* Top card */}
          <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col md:flex-row gap-6">
            {/* Left image card (square hero image) */}
            <div className="md:w-1/3 flex-shrink-0">
              <div className="rounded-lg overflow-hidden">
                <div className="bg-[#0b4bd6] rounded-t-lg p-4 text-white text-center">
                  <h2 className="text-2xl font-bold tracking-wide">
                    15CA · 15CB FILING
                  </h2>
                  <div className="text-xs mt-1 opacity-90">
                    Payments to a non-resident by a resident
                  </div>
                </div>

                <div className="bg-white px-4 py-6 flex justify-center">
                  {/* square image — keep square */}
                  <div className="w-44 h-44 rounded-md overflow-hidden bg-white shadow-sm flex items-center justify-center -mt-4">
                    <img
                      src={ASSETS.hero}
                      alt="15ca 15cb hero"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <ul className="mt-4 text-sm space-y-2 text-gray-600">
                <li>15CA & 15CB filing assistance</li>
                <li>Expert CA-certified reviews</li>
                <li>Hassle-free remittance compliance</li>
                <li className="text-indigo-600 underline">Load More</li>
              </ul>
            </div>

            {/* Right content */}
            <div className="md:w-2/3 flex-1">
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    15CA - 15CB Filing
                  </h2>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-xs text-slate-500">(16)</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 max-w-md">
                  Filing of the income tax form 15 CA & 15 CB by an expert.
                </p>
              </div>

              {/* Offers box with two cards */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="border-2 border-dashed rounded-md border-[#f0dcd0] p-4 bg-white relative">
                  <div className="absolute -top-3 left-6 bg-white px-2 rounded-md text-xs text-green-700 border border-[#eff8f0]">
                    2 Exclusive Offers
                  </div>
                  <div className="font-semibold text-slate-900">15CA</div>
                  <div className="mt-2 text-sm text-gray-600">
                    Income tax form 15 CA pertaining to remittance of money from
                    India to abroad.
                  </div>
                  <div className="mt-3">
                    <button className="bg-white border border-green-400 text-green-700 px-3 py-1 rounded">
                      ADD
                    </button>
                  </div>
                </div>

                <div className="border rounded-md border-gray-200 p-4 bg-white relative">
                  <div className="absolute -top-3 right-6 flex items-center gap-2">
                    <img
                      src={ASSETS.assuredBadge}
                      alt="assured"
                      className="h-6 w-auto"
                      onError={(e) => {
                        // fallback to small green badge text look if image not found
                        (e.currentTarget as HTMLImageElement).style.display =
                          "none";
                      }}
                    />
                  </div>
                  <div className="font-semibold text-slate-900">15CB</div>
                  <div className="mt-2 text-sm text-gray-600">
                    Income tax form 15 CB pertaining to remittance of money from
                    India to abroad.
                  </div>
                  <div className="mt-3">
                    <button className="bg-white border border-green-400 text-green-700 px-3 py-1 rounded">
                      ADD
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-4 border-t pt-4 text-sm flex justify-between items-center text-slate-600">
                <a className="text-indigo-600 underline">
                  Terms and conditions
                </a>
                <a className="text-indigo-600 underline">Refer a Friend</a>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold mb-2">Offers and discounts</h4>
                <div className="p-3 border rounded-md">
                  <div className="flex items-center gap-3">
                    <img
                      src={ASSETS.ledgers}
                      alt="ledgers"
                      className="h-8 w-8 object-contain"
                    />
                    <div className="text-sm">
                      <div className="text-indigo-600 font-medium">
                        LEDGERS - Compliance Platform
                      </div>
                      <div className="text-gray-500 text-xs">
                        Invoicing, GST Filing, Banking and Payroll
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3 p-3 border rounded-md flex items-center gap-3">
                  <img
                    src={ASSETS.logo}
                    alt="save gst"
                    className="h-8 w-8 object-contain"
                  />
                  <div className="text-sm">
                    <div className="font-medium">
                      Save 18% with GST Registration
                    </div>
                    <div className="text-gray-500 text-xs">
                      Get GST eInvoice with Input Tax Credit
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Article */}
          <article className="bg-white rounded-lg shadow-sm p-6">
            <h1 className="text-2xl font-semibold text-center">
              15CA-15CB Filing - Compliance for Foreign Remittances
            </h1>

            <div className="mt-4 text-[15px] leading-7 text-gray-700 space-y-4">
              <p>
                Suppose you are an Indian resident making payments to a foreign
                entity or receiving payments from a foreign entity. In that
                case, it is mandatory to comply with the legal provisions of the
                Income Tax Act 1961. According to the Act, you must file Form
                15CA and Form 15CB with the tax authorities before remitting
                funds to a foreign entity. Filing these 15 CA and CB Forms can
                be complex, requiring extensive knowledge of tax laws and
                regulations. IndiaFilings can assist you in navigating the
                process of filing form 15CA and form 15CB with ease; our team of
                experts ensures that your compliance requirements are met
                without any hassle.
              </p>

              <h3 className="mt-4 font-semibold">
                Section 195 of the Income-tax Act, 1961
              </h3>
              <p>
                As per Section 195 of the Income Tax Act 1961, any individual or
                entity responsible for making payment to a non-resident, which
                includes a foreign company, must deduct income tax at the
                applicable rate prior to the payment being made.
              </p>

              <p>
                The remitter must also submit an undertaking in Form 15 CA,
                which provides details of the payment being made to the
                non-resident. Furthermore, a certificate in Form 15CB, attested
                by a chartered accountant, is required for payments exceeding
                INR 5 lakh. This certificate provides details of the nature of
                the payment, the tax rate applied, and the amount of tax
                deducted.
              </p>

              <h3 className="mt-4 font-semibold">
                Importance of Form 15CA and Form 15CB
              </h3>
              <p>
                Form 15CA and Form 15CB are necessary forms that must be
                submitted under the Income Tax Act, 1961, for any payments made
                by a resident to a non-resident.
              </p>

              <p>
                Form 15 CA is a declaration made by the person making the
                payment. In contrast, Form 15CB is a certificate issued by a
                Chartered Accountant (CA), ensuring that the provisions of the
                Income Tax Act and the Double Taxation Avoidance Agreement have
                been complied with.
              </p>

              <h3 className="mt-4 font-semibold">Form 15CA</h3>
              <p>
                Form 15 CA is a declaration of remittance made to a non-resident
                by an individual or a company. It is a mandatory form to be
                submitted online on the income tax department's website before
                remitting a non-resident. The purpose of this form is to enable
                the income tax department to track foreign remittances and
                ensure that the remitter is paying taxes according to the
                provisions of the Income Tax Act.
              </p>

              <h3 className="mt-4 font-semibold">Form 15CB</h3>
              <p>
                As mentioned above, Form 15CB is a certificate issued by a CA
                under Section 195(6) of the Income Tax Act, 1961, for making
                payments to non-residents or foreign companies. It is used to
                verify that the payment being made complies with the provisions
                of the Income Tax Act and DTAA, if any, between India and the
                foreign country.
              </p>

              <h3 className="mt-4 font-semibold">
                Applicability of Form 15CA and Form CB
              </h3>
              <p>
                Form 15 CA and 15CB are applicable for making foreign
                remittances under India's Income Tax Act 1961. The applicability
                of these 15 CA and CB forms depends on the nature and amount of
                the remittance.
              </p>

              <h4 className="mt-3 font-semibold">Applicability of Form 15CA</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-2">
                <li>
                  Any person intending to make a remittance to a non-resident or
                  foreign company, irrespective of whether the remittance is
                  subject to tax.
                </li>
                <li>
                  The remitter can be a resident, non-resident, domestic
                  company, or foreign company.
                </li>
                <li>
                  The declaration is required when the income accrues, arises,
                  is received, or is deemed to accrue, occur, or received in
                  India, as per Section 5 of the Income Tax Act.
                </li>
              </ul>

              <h4 className="mt-3 font-semibold">Applicability of Form 15CB</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-2">
                <li>
                  Form 15CB is required to be filed by the CA when the
                  remittance to a non-resident or foreign company is taxable.
                </li>
                <li>The payment exceeds INR 5,00,000.</li>
                <li>
                  When an order/ certificate has not been received from
                  Assessing Officer (AO).
                </li>
              </ul>

              <h3 className="mt-6 font-semibold">
                When is Form 15CA not required?
              </h3>
              <p>
                Form 15CA is not required when the remittance is made per the
                specified payment list in Rule 37BB of Income Tax Rules, when
                the remittance does not require RBI approval per FEMA, when the
                remittance is exempt under the Income Tax Act or a tax treaty,
                and in some other specified circumstances (see detailed rules).
              </p>

              <h3 className="mt-6 font-semibold">
                When is Form 15CB not required?
              </h3>
              <p>
                Form 15CB is not required when the remittance is not taxable in
                India or when the total remittances in the fiscal year do not
                exceed Rs. 5,00,000 and other specified exceptions apply.
              </p>

              <h3 className="mt-6 font-semibold">
                Specified payments where Form 15CA/15CB is not required
              </h3>
              <p>
                As per the latest rules and regulations, examples include:
                Indian investment abroad, advance payment against imports,
                intermediary trade, imports by diplomatic missions, loans to
                non-residents, imports below Rs.5,00,000, certain project
                imports, freight, insurance, operating expenses of airlines,
                travel under BTQ, remittances for education within RBI limits,
                donations to charitable institutions abroad, refunds related to
                exports, and others described in the official guidance.
              </p>

              <h3 className="mt-6 font-semibold">
                The Contents of Form 15 CA and Form 15CB
              </h3>
              <p>
                Both forms are structured into parts/sections to capture the
                remitter, beneficiary, nature of payment, tax treatment, and CA
                certification where applicable.
              </p>

              <h4 className="mt-3 font-semibold">Parts of Form 15CA</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-2">
                <li>
                  Part A is for remittances up to Rs 5 Lakhs during the
                  financial year that are taxable.
                </li>
                <li>
                  Part B is for remittances exceeding Rs 5 Lakhs where an
                  order/certificate from AO exists.
                </li>
                <li>
                  Part C is for taxable remittances exceeding Rs 5 Lakhs
                  requiring Form 15CB.
                </li>
                <li>
                  Part D is for remittances not chargeable to tax under the
                  Income Tax Act.
                </li>
              </ul>

              <h4 className="mt-3 font-semibold">Various parts of Form 15CB</h4>
              <p>
                Part A includes details of the remitter, the beneficiary, and
                the nature of the remittance. Part B verifies compliance with
                the Income Tax Act and DTAA. Part C requires CA certification
                that the information is true and correct. An optional annexure
                can be attached for extra details.
              </p>

              <h3 className="mt-6 font-semibold">
                Penalty for not filing Form 15 CA-15CB
              </h3>
              <p>
                The penalty for not filing or late filing of 15 CA and CB form
                may be ₹10,000 per instance (users should check the current law
                for updates).
              </p>

              <h3 className="mt-6 font-semibold">
                Details required for filing the forms
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-2">
                <li>PAN of the remitter and the beneficiary</li>
                <li>Amount of the remittance (in INR)</li>
                <li>Nature and purpose of the remittance</li>
                <li>Relevant sections and DTAA articles (if applicable)</li>
                <li>Bank details of remitter and beneficiary</li>
                <li>CA certificate details for Form 15CB when required</li>
              </ul>

              <h3 className="mt-6 font-semibold">
                Procedure for filing Form 15 CA and 15CB
              </h3>
              <ol className="list-decimal list-inside text-sm text-gray-600 mt-2 space-y-2">
                <li>Obtain a valid PAN for the remitter (if required).</li>
                <li>
                  Determine whether Form 15CB is required (commonly for
                  remittances {">"} INR 5 lakh).
                </li>
                <li>
                  Fill Form 15CA online on the income-tax e-filing portal.
                </li>
                <li>If required, obtain Form 15CB from a CA.</li>
                <li>
                  Upload/submit Form 15CA (and 15CB where applicable) on the
                  portal and obtain an acknowledgement number.
                </li>
              </ol>

              <p className="mt-4">
                IndiaFilings can help you file Form 15 CA-CB, from preparation
                to submission, and ensure that you comply with all the
                applicable regulations.
              </p>
            </div>
          </article>

          {/* Related Guides + long content placeholders */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Related Guides</h3>
              <ul className="space-y-3 text-sm text-indigo-600">
                <li>
                  cbdt Grants Relaxation in Electronic Filing of Forms 15ca 15cb
                </li>
                <li>Form 15cb</li>
                <li>Income Tax Returns Forms</li>
                <li>Form 15ca</li>
              </ul>
            </div>

            <aside className="lg:col-span-5 bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">
                FAQ's on 15CA - 15CB Filing
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                {faqItems.map((q, i) => (
                  <div key={q} className="border-b pb-2">
                    <button
                      className="w-full text-left py-2 flex justify-between items-center text-sm"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      aria-expanded={openFaq === i}
                    >
                      <span className="text-slate-800">{q}</span>
                      <span className="text-indigo-600 flex items-center gap-2">
                        {openFaq === i ? "-" : <Plus size={14} />}
                      </span>
                    </button>
                    {openFaq === i && (
                      <div className="px-2 pb-2 text-sm text-gray-600">
                        {faqAnswers[i] ??
                          "Please contact our experts for a tailored reply."}
                      </div>
                    )}
                  </div>
                ))}
                <div className="mt-3">
                  <button className="px-4 py-2 border rounded-md text-sm text-indigo-600">
                    Load More
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Right column (sidebar) */}
        <aside className="lg:col-span-4 hidden lg:block">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6 sticky top-28">
            <div className="text-center text-gray-600">
              <img
                src={ASSETS.cartIcon}
                alt="cart"
                className="mx-auto h-12 w-auto mb-3"
              />
              <h3 className="font-semibold">Your cart is empty</h3>
              <p className="text-sm mt-2">
                Browse our services and add some services in cart!
              </p>
            </div>

            <div className="mt-6 text-center">
              <div className="text-sm text-gray-500">
                Existing User?{" "}
                <a className="text-indigo-600 underline">Login</a>
              </div>
            </div>

            <form
              className="mt-4 space-y-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-200"
                placeholder="Name"
              />
              <input
                className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-200"
                placeholder="Email"
              />
              <div className="flex gap-2">
                <div className="flex items-center gap-2 border border-gray-200 rounded-md px-2">
                  <img src={ASSETS.indiaFlag} alt="flag" className="h-4" />
                  <span className="text-sm">+91</span>
                </div>
                <input
                  className="flex-1 border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-200"
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
                  className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-200"
                  placeholder="GSTIN"
                />
              )}

              <button className="w-full bg-green-500 text-white py-2 rounded-md font-medium flex items-center justify-center gap-2">
                <ShoppingBag size={16} /> Get Started
              </button>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
            <h4 className="font-semibold mb-3">Offers and discounts</h4>
            <div className="p-3 border rounded-md flex items-center gap-3">
              <img
                src={ASSETS.ledgers}
                alt="ledgers"
                className="h-8 w-8 object-contain"
              />
              <div className="text-sm">
                <div className="text-indigo-600 font-medium">
                  LEDGERS - Compliance Platform
                </div>
                <div className="text-gray-500 text-xs">
                  Invoicing, GST Filing, Banking and Payroll
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-sm mb-4">
            <img
              src={ASSETS.adRight1}
              alt="company compliance"
              className="w-full h-56 object-cover"
            />
          </div>

          <div className="rounded-lg overflow-hidden shadow-sm mb-6">
            <img
              src={ASSETS.dinEkyc}
              alt="din ekyc"
              className="w-full h-56 object-cover"
            />
          </div>

          <div className="bg-white rounded-lg p-4">
            <h4 className="font-semibold mb-3">Popular Searches</h4>
            <div className="flex flex-wrap gap-2">
              {POPULAR_SEARCHES.slice(0, 20).map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 border rounded bg-white text-gray-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* small content block to make sidebar informative */}
          <div className="bg-white rounded-lg shadow-sm p-4 mt-4">
            <h4 className="font-semibold mb-3">Contact Advisor</h4>
            <p className="text-sm text-gray-600">
              Need help with 15CA / 15CB? Our advisors can assist with
              end-to-end filing and documentation.
            </p>
            <div className="mt-3">
              <button className="w-full bg-indigo-600 text-white py-2 rounded-md text-sm">
                Schedule a Call
              </button>
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
            © {new Date().getFullYear()} IndiaFilings - 15CA - 15CB Filing
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
