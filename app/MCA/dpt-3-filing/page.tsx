"use client";

import React, { useState } from "react";
import { ChevronRight, ShoppingBag, Star, Plus } from "lucide-react";

const ASSETS = {
  logo: "/images/india-logo.jpg",
  hero: "/images/dpt3-hero.jpg",
  man: "https://img.indiafilings.com/catalog/mca-compliance-simplified-india.webp",
  ledgers: "https://img.indiafilings.com/catalog/ledgers.png",
  whatsapp: "/images/whatsapp.svg",
  adRight1: "/images/company-compliance-ad.png",
  dinEkyc: "/images/din-ekyc-ad.png",
  cartIcon: "/images/cart-icon.svg",
  indiaFlag: "/images/india-flag.png",
  companyCompliance: "/images/company-compliance.png",
};
const MCA_DROPDOWN_LINKS = [
  { title: "Company Compliance", href: "/MCA/company-compliance" },
  { title: "Director Change", href: "/MCA/director-change" },
  { title: "AOA Amendment", href: "/MCA/aoa-amendment" },
  { title: "LLP Compliance", href: "/MCA/llp-compliance" },
  { title: "Remove Director", href: "/MCA/remove-director" },
  {
    title: "Authorized Capital Increase",
    href: "/authorized-capital-increase",
  },
  { title: "OPC Compliance", href: "/MCA/opc-compliance" },
  { title: "ADT-1 Filing", href: "/MCA/adt-1-filing" },
  { title: "Share Transfer", href: "/MCA/share-transfer" },
  { title: "Name Change - Company", href: "/MCA/name-change-company" },
  { title: "DPT-3 Filing", href: "/MCA/dpt-3-filing" },
  { title: "Demat of Shares", href: "/MCA/demat-of-shares" },
  { title: "Registered Office Change", href: "/MCA/registered-office-change" },
  { title: "LLP Form 11 Filing", href: "/MCA/llp-form-11-filing" },
  { title: "Winding Up - LLP", href: "/MCA/winding-up-llp" },
  { title: "DIN eKYC Filing", href: "/MCA/din-ekyc-filing" },
  { title: "Dormant Status Filing", href: "/MCA/dormant-status-filing" },
  { title: "Winding Up - Company", href: "MCA/winding-up-company" },
  { title: "DIN Reactivation", href: "/MCA/din-reactivation" },
  { title: "MOA Amendment", href: "/MCA/moa-amendment" },
  { title: "Commencement (INC-20A)", href: "/MCA/commencement-inc-20a" },
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

export default function DPT3FilingPage(): React.ReactElement {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [gstChecked, setGstChecked] = useState(false);

  const faqItems = [
    "Which companies are not required to file DPT-3?",
    "What is an Exempted Deposit that Requires Filing DPT-3?",
    "What are the details and documents required for filing DPT-3?",
    "What is called Return of Deposit?",
    "What is the due date and who will sign the form DPT-3?",
  ];

  const faqAnswers: Record<number, string> = {
    0: "Government companies, certain RBI-regulated entities (banking companies, specified NBFCs), housing finance companies registered under NHB, and any other companies specifically notified by MCA are generally exempt from filing DPT-3.",
    1: "Exempted deposits are those recognized under the Companies (Acceptance of Deposits) Rules where certain classes of companies or instruments are excluded from the deposit definition. In some cases, even where deposits are exempt, reporting may still be required for transparency — check the Rules and MCA notifications.",
    2: "Typical documents include an auditor's certificate verifying details in DPT-3, proof of trust deed (if deposits are held in trust), instrument creating charge (if any), details of liquid assets, list of depositors (if required), financial statements and any other attachments supporting amounts declared.",
    3: "A return of deposit in DPT-3 is a declaration of all money received as deposits or outstanding loans not categorized as deposits, reported for the financial year ending March 31, including outstanding receipts and amounts not qualifying as deposits.",
    4: "Due date: June 30 each year. DPT-3 must be certified by the company's auditor and filed on the MCA portal; the form is signed/verified by the authorised signatory using DSC as required by MCA.",
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-[1180px] mx-auto px-6 py-3 flex items-center gap-6">
          <div className="flex-shrink-0">
            <img src={ASSETS.logo} alt="IndiaFilings" className="h-10 w-auto" />
          </div>

          <nav className="hidden lg:flex gap-6 items-center text-sm text-gray-700">
            {NAV_ITEMS.slice(1, NAV_ITEMS.length - 1).map((item) => (
              <a key={item} href="#" className="hover:text-indigo-700">
                {item}
              </a>
            ))}
            <a className="hover:text-indigo-700">{NAV_ITEMS.at(-1)}</a>
          </nav>

          <div className="ml-auto">
            <button className="px-3 py-1 border rounded-md text-sm">
              Login
            </button>
          </div>
        </div>
      </header>

      <div className="bg-gray-50 py-5">
        <div className="max-w-[1180px] mx-auto px-6 text-sm text-gray-500">
          IndiaFilings / MCA Services /{" "}
          <span className="text-indigo-600 font-medium">DPT-3 Filing</span>
        </div>
      </div>

      <main className="max-w-[1180px] mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <section className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3 flex-shrink-0">
              <div className="rounded-lg overflow-hidden">
                <div className="bg-[#0b4bd6] rounded-t-lg p-4 text-white text-center">
                  <h2 className="text-2xl font-bold tracking-wide">
                    DPT-3 FILING
                  </h2>
                  <div className="text-xs mt-1 opacity-90">
                    DPT - 3: Filing required for companies with deposits & loans
                  </div>
                </div>

                <div className="bg-white px-4 py-6 flex justify-center">
                  <div className="w-44 h-44 rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center -mt-4">
                    <img
                      src={ASSETS.man}
                      alt="DPT3 hero"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <ul className="mt-4 text-sm space-y-2 text-gray-600">
                <li>Computation of deposits & outstanding loans</li>
                <li>Form Preparation (DPT-3)</li>
                <li>MCA Filing</li>
                <li className="text-indigo-600 underline">Load More</li>
              </ul>
            </div>

            <div className="md:w-2/3 flex-1">
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    DPT-3 Filing
                  </h2>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-xs text-slate-500">(35)</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 max-w-md">
                  DPT-3 Filing must be completed by all companies having loans
                  or deposits. If your company has loans, file DPT-3 with MCA
                  for the financial year to ensure compliance and avoid
                  penalties.
                </p>
              </div>

              <div className="relative mt-6">
                <div className="absolute -top-3 left-6 bg-white px-2 rounded-md text-xs text-green-700 border border-[#eff8f0]">
                  2 Exclusive Offers
                </div>
                <div className="border-2 border-dashed rounded-md border-[#f0dcd0] p-4 bg-white">
                  <div className="font-semibold text-slate-900">Basic</div>
                  <ul className="mt-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <ChevronRight size={14} /> Computation
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight size={14} /> Form Preparation
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight size={14} /> MCA Filing
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

                <div className="mt-3 p-3 border rounded-md">
                  <div className="text-sm text-gray-700">
                    Save 18% with GST Registration — Get GST eInvoice with Input
                    Tax Credit
                  </div>
                </div>
              </div>
            </div>
          </div>

          <article className="bg-white rounded-lg shadow-sm p-6">
            <h1 className="text-2xl font-semibold text-center">
              Form DPT-3 Return Filing
            </h1>

            <div className="mt-4 text-[15px] leading-7 text-gray-700">
              <p>
                Every company, excluding government companies, must file a
                return of deposits in Form DPT-3 with the Ministry of Corporate
                Affairs (MCA) by June 30th each year. This return should include
                details of deposits, outstanding loans, and any amounts received
                that do not qualify as deposits as of March 31st of that year.
                DPT-3 return is audited by the company's auditor to ensure
                accuracy and compliance.
              </p>

              <p className="mt-3 italic font-medium">
                IndiaFilings experts can assist you in filing your DPT-3 form
                accurately and efficiently. Get started today and simplify your
                compliance process!
              </p>

              <h3 className="mt-6 text-lg font-semibold">
                Introduction to DPT-3 Filing
              </h3>
              <p className="mt-2">
                To safeguard the interests of creditors and depositors, the
                Central Government, in consultation with the Reserve Bank of
                India, introduced an amendment to the Companies (Acceptance of
                Deposits) Rules 2014 through the Companies (Acceptance of
                Deposits) Amendment Rules 2019. MCA vide notification dated 22nd
                January 2019 notified that every company other than a government
                company must file a one-time return in DPT-3 and file it
                annually thereafter.
              </p>

              <h3 className="mt-6 text-lg font-semibold">
                Eligible Companies for Form DPT-3 Return Filing
              </h3>
              <p className="mt-2">
                Form DPT-3 applies to several types of companies in India
                including Private Limited Companies, Public Limited Companies,
                One Person Companies (OPC), and small and non-small companies.
                Even if a company has received loans from related entities such
                as holding, subsidiary or associate companies, DPT-3 filing may
                be required. Government companies are exempt.
              </p>

              <h3 className="mt-6 text-lg font-semibold">
                Exempted Companies from Filing Form DPT-3
              </h3>
              <p className="mt-2">
                Certain companies are exempt from filing DPT-3 under the
                Acceptance of Deposits Rules of 2014 — these include government
                companies, specified financial institutions (banks,
                RBI-registered NBFCs, housing finance companies under NHB), and
                any other entities specifically notified by MCA.
              </p>

              <h3 className="mt-6 text-lg font-semibold">
                Form DPT-3 Applicability
              </h3>
              <p className="mt-2">
                Companies (except exempted entities) must file DPT-3 if they
                have received deposits from members or directors, loans from
                third parties, or advances for goods/services (secured or
                unsecured). The form covers secured and unsecured debts,
                external borrowings and commercial borrowings.
              </p>

              <h3 className="mt-6 text-lg font-semibold">
                Transactions Not Considered as Deposits for DPT-3 Filing
              </h3>
              <ul className="mt-2 list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Share Capital — money received for shares.</li>
                <li>
                  Debentures Issued — loans from investors treated separately.
                </li>
                <li>
                  Advances on Orders — payments received upfront for confirmed
                  orders.
                </li>
                <li>
                  Government Receipts — money from government or foreign
                  sources.
                </li>
                <li>
                  Loans from Banks — borrowings from banks or financial
                  institutions.
                </li>
                <li>Inter-Company Loans — loans from other companies.</li>
                <li>
                  Subscription Advances — advance payments for upcoming
                  securities.
                </li>
                <li>
                  Employee Deposits — security deposits from employees up to
                  annual salary.
                </li>
              </ul>

              <h3 className="mt-6 text-lg font-semibold">
                Form DPT-3 Due Date
              </h3>
              <p className="mt-2">
                The due date for filing Form DPT-3 is <strong>June 30th</strong>{" "}
                of every year. Companies should report deposits and outstanding
                receipts for the financial year ending March 31. Example: For FY
                2023-24 (1 April 2023 to 31 March 2024), the filing deadline is
                30 June 2024.
              </p>

              <h3 className="mt-6 text-lg font-semibold">
                Documents Required for Filing Form DPT-3
              </h3>
              <p className="mt-2">
                Mandatory: Auditor's certificate verifying information in the
                DPT-3 form. Optional (as applicable): proof of trust deed,
                instrument creating charge, details of liquid assets, and list
                of depositors where required by MCA.
              </p>

              <h3 className="mt-6 text-lg font-semibold">
                Fees for Filing Form DPT-3
              </h3>
              <p className="mt-2">
                Fees are governed by the Companies (Registration Offices and
                Fees) Rules and vary based on company capital/nominal values.
                Refer to the MCA fee schedule for precise amounts.
              </p>

              <h3 className="mt-6 text-lg font-semibold">
                Consequences of Non-compliance with the DPT-3 filing
              </h3>
              <p className="mt-2">
                Non-compliance can lead to penalties under the Companies Act,
                including fines for the company and officers in default.
                Continuing defaults may attract additional daily fines. Timely
                filing helps maintain good standing and avoid legal
                consequences.
              </p>

              <h3 className="mt-6 text-lg font-semibold">How to File DPT-3?</h3>
              <ol className="mt-3 list-decimal list-inside text-sm text-gray-600 space-y-2">
                <li>
                  Visit the MCA portal and login (register as Business User if
                  required).
                </li>
                <li>
                  Navigate to Deposit Filings → Deposit Related Filings → DPT-3
                  Webform.
                </li>
                <li>
                  Fill the form online and attach required documents (CIN, Email
                  ID, Objects, Net Worth, particulars of charge, total amount
                  outstanding as of 31st March, credit rating details,
                  attachments).
                </li>
                <li>
                  Submit the form to generate SRN and affix DSC for
                  authentication.
                </li>
                <li>
                  Pay required fee and await acknowledgement email confirming
                  receipt by ROC.
                </li>
              </ol>

              <h3 className="mt-6 text-lg font-semibold">
                File Form DPT-3 with Ease through IndiaFilings!
              </h3>
              <p className="mt-2">
                IndiaFilings provides assistance for DPT-3 filing — document
                preparation, expert review and end-to-end filing support to
                ensure compliance and avoid penalties.
              </p>
            </div>
          </article>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">
                Documents Required for Filing Form DPT-3
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="border-b pb-3">
                  Auditor's Certificate verifying details in DPT-3
                </li>
                <li className="border-b pb-3">
                  Proof of Trust Deed (if deposits held in trust)
                </li>
                <li className="border-b pb-3">
                  Instrument Creating Charge (if any)
                </li>
                <li className="border-b pb-3">Details of Liquid Assets</li>
                <li className="border-b pb-3">
                  List of Depositors (if required)
                </li>
                <li className="mt-4 inline-block px-3 py-2 border rounded-md text-sm text-indigo-600">
                  Load More
                </li>
              </ul>
            </div>

            <aside className="lg:col-span-5 bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">
                Documents Required for Other Registrations
              </h3>
              <ul className="space-y-3 text-sm text-indigo-600">
                {[
                  ["Documents Required for LLP Registration", 8],
                  ["Documents Required for Proprietorship Registration", 2],
                  ["Documents Required for Company Registration", 2],
                  ["Documents Required for Trademark Registration", 7],
                  ["Documents Required for GST Registration", 10],
                ].map(([label, count]) => (
                  <li
                    key={label as string}
                    className="flex justify-between items-center border-b pb-2"
                  >
                    <span>{label}</span>
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 inline-flex items-center justify-center text-xs">
                      {count}
                    </span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">
              FAQ's on DPT-3 Filing
            </h3>
            <div className="space-y-0">
              {faqItems.map((q, i) => (
                <div key={i} className="border-b last:border-b-0">
                  <button
                    className="w-full text-left py-4 flex justify-between items-center text-sm"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    aria-controls={`faq-${i}`}
                  >
                    <span className="text-slate-800">{q}</span>
                    <span className="text-indigo-600 flex items-center gap-2">
                      {openFaq === i ? "-" : <Plus size={14} />}
                    </span>
                  </button>
                  {openFaq === i && (
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
              <button className="px-4 py-2 border rounded-md text-sm text-indigo-600">
                Load More
              </button>
            </div>
          </div>
        </section>

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
            <h4 className="font-semibold mb-3">Related Guides</h4>
            <ul className="text-sm text-indigo-600 space-y-2">
              <li>
                Companies (Registration Offices and Fees) Amendment Rules, 2022
              </li>
              <li>Companies Rules – Acceptance of Deposits</li>
            </ul>
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
              {POPULAR_SEARCHES.slice(0, 14).map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 border rounded bg-white text-gray-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </main>

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

      <div className="fixed right-6 bottom-6 bg-green-500 text-white px-4 py-3 rounded-full shadow-2xl flex items-center gap-3 z-50">
        <img src={ASSETS.whatsapp} alt="wa" className="w-5 h-5" />
        <span className="font-semibold text-sm">Live Chat with Experts</span>
      </div>
    </div>
  );
}
