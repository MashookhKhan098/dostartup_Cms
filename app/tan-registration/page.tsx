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
  hero: "/images/tan-reg.png", // square hero image (replace file as needed)
  man: "https://img.indiafilings.com/catalog/mca-compliance-simplified-india.webp",
  ledgers: "https://img.indiafilings.com/catalog/ledgers.png",
  whatsapp: "/images/whatsapp.svg",
  adRight1: "/images/company-compliance-ad.png",
  dinEkyc: "/images/din-ekyc-ad.png",
  cartIcon: "/images/cart-icon.svg",
  indiaFlag: "/images/india-flag.png",
  companyCompliance: "/images/company-compliance.png",
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
export default function TanRegistrationPage(): React.ReactElement {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [gstChecked, setGstChecked] = useState(false);
  const [showIncomeDropdown, setShowIncomeDropdown] = useState(false);

  const faqItems = [
    "What is TAN registration number?",
    "Who needs a TAN?",
    "Why is TAN important?",
    "What is the validity of TAN?",
    "Is TAN required for TDS payments?",
    "Do proprietors need TAN?",
    "What are the benefits of TAN registration?",
    "What are the documents required for TAN application?",
    "How can I register for TAN in India?",
    "What is the TAN application fees?",
    // extra FAQ entries to expand content and match requested line count
    "Can TAN be applied for offline?",
    "How long does TAN issuance take?",
    "Can TAN be modified after issuance?",
    "Is TAN mandatory for salaried individuals?",
    "What happens if TAN is not quoted in challans?",
  ];

  const faqAnswers: Record<number, string> = {
    0: "TAN (Tax Deduction and Collection Account Number) is a 10-digit alphanumeric identifier issued by the Income Tax Department used by entities responsible for deducting or collecting tax at source (TDS/TCS).",
    1: "Any individual or organisation that needs to deduct tax at source (e.g., employers, businesses, contractors making specified payments) must obtain a TAN.",
    2: "TAN is mandatory for filing TDS/TCS returns, challans and certificates. Non-compliance can lead to penalties and processing issues with tax authorities.",
    3: "TAN has lifetime validity once issued and does not require periodic renewal.",
    4: "Yes — TAN must be quoted in TDS/TCS payments and related challans; banks may refuse TDS deposits without a quoted TAN.",
    5: "Yes — proprietors who are liable to deduct tax at source must obtain a TAN.",
    6: "Benefits include legal compliance, streamlined tax operations, easier reconciliation of TDS/TCS records, and accurate tracking of tax transactions.",
    7: "Common documents: legal entity registration (if applicable), passport-size photograph, proof of registered office address, PAN card of the company or the applicant, and completed application form (Form 49B for TAN).",
    8: "TAN can be applied online through the NSDL (TIN-NSDL) portal by submitting Form 49B, or offline by filling the form and submitting to a TIN-Facilitation Center (TIN-FC).",
    9: "Fees vary depending on the channel and the service provider; check the NSDL/Protean portal or authorised TIN-FC for the current application fee.",
    10: "Yes — offline TAN application is done via Form 49B which can be submitted at designated TIN-FCs or service centres with the required payment.",
    11: "Issuance time depends on the channel and correctness of documents. Online applications submitted correctly are typically processed faster, while offline processing may take longer.",
    12: "TAN details cannot be edited online once issued — in practice, if corrections are required, contact the issuing authority or reapply as per the guidelines provided by NSDL/Protean.",
    13: "Salaried individuals who do not deduct tax at source are not required to obtain TAN; only entities responsible for deducting/collecting TDS/TCS are required to have TAN.",
    14: "If TAN is not quoted, TDS payments may be rejected by banks and returns may not be processed correctly. Penalties and administrative issues may follow.",
  };

  /* -----------------------------------
     Render
     ----------------------------------- */
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
          IndiaFilings / Business Registration /{" "}
          <span className="text-indigo-600 font-medium">TAN Registration</span>
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
                    TAN Registration
                  </h2>
                  <div className="text-xs mt-1 opacity-90">
                    Tax Deduction and Collection Account Number
                  </div>
                </div>

                <div className="bg-white px-4 py-6 flex justify-center">
                  {/* square image — remove rounded-full to keep square */}
                  <div className="w-44 h-44 rounded-md overflow-hidden bg-white shadow-sm flex items-center justify-center -mt-4">
                    <img
                      src={ASSETS.hero}
                      alt="tan registration hero"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <ul className="mt-4 text-sm space-y-2 text-gray-600">
                <li>TAN Application filing</li>
                <li>TAN Certificate and Number</li>
                <li>Support for TDS/TCS compliance</li>
                <li className="text-indigo-600 underline">Load More</li>
              </ul>
            </div>

            {/* Right content */}
            <div className="md:w-2/3 flex-1">
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    TAN Registration
                  </h2>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-xs text-slate-500">(630)</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 max-w-md">
                  Tax Deduction and Collection Account Number. It is a 10-digit
                  alpha-numeric number issued by the ITD, TAN must be obtained
                  by all persons responsible for deducting tax at source or who
                  are required to collect tax at source.
                </p>
              </div>

              {/* Offer box */}
              <div className="relative mt-6">
                <div className="absolute -top-3 left-6 bg-white px-2 rounded-md text-xs text-green-700 border border-[#eff8f0]">
                  1 Exclusive Offers
                </div>
                <div className="border-2 border-dashed rounded-md border-[#f0dcd0] p-4 bg-white">
                  <div className="font-semibold text-slate-900">Basic</div>
                  <ul className="mt-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <ChevronRight size={14} /> TAN Application filing
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight size={14} /> TAN Certificate and Number
                    </li>
                  </ul>
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
              </div>
            </div>
          </div>

          {/* Article */}
          <article className="bg-white rounded-lg shadow-sm p-6">
            <h1 className="text-2xl font-semibold text-center">
              TAN Registration
            </h1>

            <div className="mt-4 text-[15px] leading-7 text-gray-700 space-y-4">
              <p>
                In India, it is mandatory for businesses to have a Tax Deduction
                Account Number (TAN). This number is issued by the Income Tax
                Department and is used as a unique identifier for individuals or
                entities responsible for deducting or collecting Tax at source.
                It is compulsory to mention the TAN in all TDS returns and on
                other documents related to income tax procedures. Non-compliance
                may lead to penalties.
              </p>

              <p>
                IndiaFilings can help both individuals and companies with their
                TAN application online and secure their company TAN Number (Tax
                Deduction and Collection Account Number) in a prompt and
                efficient manner. Leveraging our proficiency in tax and
                regulatory affairs, IndiaFilings makes the complex TAN
                Registration process straightforward.
              </p>

              <h3 className="mt-6 text-lg font-semibold">
                What is TAN Registration Number?
              </h3>
              <p>
                TAN, or Tax Deduction and Collection Account Number, is a unique
                10-digit alphanumeric identifier issued by the Income Tax
                Department. It's primarily used by individuals or entities
                responsible for deducting or collecting Tax at source (TDS/TCS).
              </p>

              <h3 className="mt-6 text-lg font-semibold">
                TAN Number: Definition and Configuration
              </h3>
              <ul className="mt-3 list-disc list-inside text-sm text-gray-600 space-y-2">
                <li>
                  First Four Characters (Alphabetic): The TAN's initial three
                  characters represent the jurisdiction where it was issued. The
                  fourth character signifies the first letter of the name of the
                  entity or individual applying for the TAN.
                </li>
                <li>
                  Middle Five Characters (Numeric): These central five
                  characters are system-generated unique numbers.
                </li>
                <li>
                  Final Character (Alphabetic): The concluding character is a
                  system-generated unique letter.
                </li>
              </ul>

              <h3 className="mt-6 text-lg font-semibold">
                Who Should Obtain a TAN?
              </h3>
              <p>
                Tax Deducting Entities: Any individual or organization that
                needs to deduct Tax at source during certain transactions, such
                as salary distributions, contractor payments, or rent payments
                exceeding regulatory thresholds.
              </p>

              <h3 className="mt-6 text-lg font-semibold">
                The Importance of Securing a Company TAN Number
              </h3>
              <p>
                As outlined in Section 203A of the Income-tax Act, 1961, any
                individual or entity tasked with the responsibility of deducting
                or collecting Tax at source is required to obtain a TAN (Tax
                Deduction and Collection Account Number). Moreover, this section
                stipulates that the TAN Number be incorporated in multiple
                documents including TDS/TCS returns, challans, and certificates.
              </p>

              <h3 className="mt-6 text-lg font-semibold">
                TAN Registration Process (Step-by-step)
              </h3>
              <ol className="mt-3 list-decimal list-inside text-sm text-gray-600 space-y-2">
                <li>
                  Collect required documents: PAN of applicant/company, proof of
                  registered office address, passport sized photograph (if
                  individual), and any legal entity registration documents.
                </li>
                <li>
                  Complete Form 49B accurately with PAN and other details.
                </li>
                <li>
                  Submit online through the TIN-NSDL (NSDL) portal or submit a
                  physical form at a TIN Facilitation Centre (TIN-FC).
                </li>
                <li>
                  Pay the applicable processing fee (varies by channel and
                  provider).
                </li>
                <li>
                  Receive TAN allotment — verify correctness and keep records
                  for compliance.
                </li>
              </ol>

              <h3 className="mt-6 text-lg font-semibold">
                Features & Advantages
              </h3>
              <ul className="mt-3 list-disc list-inside text-sm text-gray-600 space-y-2">
                <li>Lifetime validity once issued.</li>
                <li>
                  Mandatory to be quoted in all TDS/TCS related documents and
                  challans.
                </li>
                <li>
                  Simplifies reconciliation and tracking of tax
                  deducted/collected.
                </li>
              </ul>

              <h3 className="mt-6 text-lg font-semibold">Practical Tips</h3>
              <p>
                Always double-check your PAN and registered office address
                before submitting the TAN application. Keep scanned copies of
                supporting documents ready for faster online submission. If
                applying offline, ensure the form is filled legibly to avoid
                delays.
              </p>

              {/* Large content block to increase file length and match user's request for large file */}
              <section className="mt-8">
                <h4 className="text-lg font-semibold">
                  Common Issues and Resolutions
                </h4>
                <p className="mt-2 text-sm text-gray-700">
                  Below are common issues applicants face while applying for TAN
                  and suggested resolutions:
                </p>
                <ul className="mt-3 list-disc list-inside text-sm text-gray-600 space-y-2">
                  <li>
                    <strong>Mismatch in PAN details:</strong> Ensure PAN
                    spelling, sequence and DOB/Date of incorporation matches
                    government records. Update PAN details before applying if
                    mismatch exists.
                  </li>
                  <li>
                    <strong>Incorrect registered office address:</strong> Use
                    utility bills or official rent agreements as proof and
                    verify postal pin code.
                  </li>
                  <li>
                    <strong>Delayed processing:</strong> Check the application
                    status on NSDL portal with the acknowledgement number and
                    contact the facilitation centre if delays exceed expected
                    timelines.
                  </li>
                  <li>
                    <strong>
                      Bank refuses TDS deposit due to missing TAN:
                    </strong>{" "}
                    Always ensure TAN is quoted before attempting the bank
                    transaction — banks may reject deposits without TAN.
                  </li>
                </ul>

                <h4 className="text-lg font-semibold mt-6">Use Cases</h4>
                <p className="mt-2 text-sm text-gray-700">
                  TAN is required across several scenarios, many of which are
                  listed here to help you decide if you need to apply:
                </p>
                <ul className="mt-3 list-disc list-inside text-sm text-gray-600 space-y-2">
                  <li>Employers deducting TDS on salary payments.</li>
                  <li>
                    Businesses deducting TDS on contractor payments, rent,
                    commission, professional fees that are subject to TDS.
                  </li>
                  <li>
                    Branch offices of companies making certain taxable payments
                    where TAN needs to be individually quoted.
                  </li>
                </ul>
              </section>
            </div>
          </article>

          {/* Documents + other registrations */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">
                Key Documents for TAN Application
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="border-b pb-3">Form 49B (TAN Application)</li>
                <li className="border-b pb-3">
                  PAN Card copy of the applicant
                </li>
                <li className="border-b pb-3">
                  Proof of Registered Office Address
                </li>
                <li className="border-b pb-3">
                  Passport size photograph (if applicable)
                </li>
                <li className="mt-4 inline-block px-3 py-2 border rounded-md text-sm text-indigo-600">
                  Load More
                </li>
              </ul>
            </div>

            <aside className="lg:col-span-5 bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Related Guides</h3>
              <ul className="space-y-3 text-sm text-indigo-600">
                <li>
                  Private Limited Company Registration – Process & Documents
                  Required
                </li>
                <li>
                  How to open a current account for a Private Limited Company?
                </li>
                <li>
                  Convert a Sole Proprietorship to a Private Limited Company
                </li>
                <li>How to apply for PAN online</li>
                <li>GST registration for businesses</li>
              </ul>
            </aside>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">
              FAQ's on TAN Registration
            </h3>
            <div className="space-y-0">
              {faqItems.map((q, i) => (
                <div key={i} className="border-b last:border-b-0">
                  <button
                    className="w-full text-left py-4 flex justify-between items-center text-sm"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span className="text-slate-800">{q}</span>
                    <span className="text-indigo-600 flex items-center gap-2">
                      {openFaq === i ? "-" : <Plus size={14} />}
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-2 pb-4 text-sm text-gray-600">
                      {faqAnswers[i] ??
                        "Please contact our experts for a tailored reply."}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-4">
              <button className="px-4 py-2 border rounded-md text-sm text-indigo-600">
                Load More
              </button>
            </div>
          </div>

          {/* Extra long content block — to expand file length and provide more reference text */}
          <article className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold">
              Compliance Calendar & Notes
            </h3>
            <p className="mt-3 text-sm text-gray-700">
              The following table is a concise compliance checklist that new TAN
              holders should keep handy. Use it as a quick reminder of actions
              you may need to perform through the financial year.
            </p>

            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full text-sm text-left">
                <thead>
                  <tr className="text-gray-700">
                    <th className="py-2 px-3 border-b">Task</th>
                    <th className="py-2 px-3 border-b">Frequency</th>
                    <th className="py-2 px-3 border-b">Relevant Form</th>
                    <th className="py-2 px-3 border-b">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-3 border-b">TDS Payment</td>
                    <td className="py-2 px-3 border-b">Monthly/Quarterly</td>
                    <td className="py-2 px-3 border-b">Challan</td>
                    <td className="py-2 px-3 border-b">
                      Ensure TAN is quoted on challan
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 border-b">TDS Returns</td>
                    <td className="py-2 px-3 border-b">Quarterly</td>
                    <td className="py-2 px-3 border-b">Form 24Q / 26Q / 27Q</td>
                    <td className="py-2 px-3 border-b">
                      Use TAN for filing returns & certificates
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 border-b">TDS Certificates</td>
                    <td className="py-2 px-3 border-b">Annual</td>
                    <td className="py-2 px-3 border-b">Form 16 / 16A</td>
                    <td className="py-2 px-3 border-b">
                      Issue to deductees as required
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
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
              Need help with TAN? Our advisors can assist with end-to-end filing
              and documentation.
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
            © {new Date().getFullYear()} IndiaFilings - TAN Registration
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
