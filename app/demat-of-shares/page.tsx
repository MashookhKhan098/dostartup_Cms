// app/MCA/demat-of-shares/page.tsx
"use client";

import React, { useState } from "react";
import Head from "next/head";
import { ChevronRight, ShoppingBag, Star, Plus } from "lucide-react";

type AssetsMap = {
  logo: string;
  hero: string;
  man: string;
  ledgers: string;
  whatsapp: string;
  adRight1: string;
  dinEkyc: string;
  cartIcon: string;
  indiaFlag: string;
  companyCompliance: string;
};

const ASSETS: AssetsMap = {
  logo: "/images/india-logo.jpg",
  hero: "/images/compilance.jpg",
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

export default function DematerialisationPage(): React.ReactElement {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [gstChecked, setGstChecked] = useState(false);

  const faqItems = [
    "What is dematerialisation of shares?",
    "What are the benefits of dematerialising shares?",
    "Is dematerialisation mandatory for private companies?",
    "What is Rule 9B?",
    "Which companies are exempt from mandatory dematerialisation?",
    "How do I start the dematerialisation process?",
    "What documents are needed to open a Demat account?",
    "How long does it take to dematerialise shares?",
  ];

  const faqAnswers: Record<number, string> = {
    0: "Dematerialisation is the process of converting physical share certificates into electronic form and holding them in a Demat account with a depository participant (DP).",
    1: "Benefits include enhanced security (no risk of loss/theft), faster and easier trading, reduced costs (lower stamp duties and handling), convenience of online access, automatic corporate action updates, and the ability to pledge shares as loan collateral.",
    2: "Yes — following the MCA amendment (Rule 9B), private limited companies except 'small companies' are required to dematerialise their securities. Holding/subsidiary companies may also be required regardless of size.",
    3: "Rule 9B (Companies (Prospectus and Allotment of Securities) Rules, 2014 — Second Amendment Rules, 2023) requires private companies (except small companies) to issue and maintain securities in dematerialised form and convert existing physical shares accordingly.",
    4: "Small companies (paid-up capital ≤ INR 4 crore and turnover ≤ INR 40 crore in the preceding financial year) are generally exempt, unless they are holding or subsidiary companies of other corporate bodies, in which case the exemption does not apply.",
    5: "Start by amending the Articles of Association to allow demat holdings, appointing an RTA, obtaining ISINs, opening Demat accounts for shareholders with a DP, submitting Dematerialisation Request Forms (DRF) and coordinating with the RTA for conversion.",
    6: "Typical documents required to open a Demat account include identity proof (PAN, Aadhaar), address proof, bank details, cancelled cheque, and KYC forms. For companies, certified copies of board resolutions and authorized signatory documents may also be required.",
    7: "The dematerialisation turnaround is usually a few days once the DP and RTA complete verification and processing; time may vary depending on documentation completeness and RTA processing times.",
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Dematerialisation of Shares — IndiaFilings (Replica)</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
        {/* Header */}
        <header className="bg-white border-b sticky top-0 z-50">
          <div className="max-w-[1180px] mx-auto px-6 py-3 flex items-center gap-6">
            <div className="flex-shrink-0">
              <img
                src={ASSETS.logo}
                alt="IndiaFilings"
                className="h-10 w-auto"
              />
            </div>

            <nav
              className="hidden lg:flex gap-6 items-center text-sm text-gray-700"
              aria-label="Main navigation"
            >
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

        {/* Breadcrumb */}
        <div className="bg-gray-50 py-5">
          <div className="max-w-[1180px] mx-auto px-6 text-sm text-gray-500">
            IndiaFilings / MCA Services /{" "}
            <span className="text-indigo-600 font-medium">
              Dematerialisation of Company Shares
            </span>
          </div>
        </div>

        {/* Main */}
        <main className="max-w-[1180px] mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left column */}
          <section className="lg:col-span-8 space-y-6">
            {/* Top card styled like ADT-1 layout */}
            <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col md:flex-row gap-6">
              {/* Left image card (circular image like ADT design) */}
              <div className="md:w-1/3 flex-shrink-0">
                <div className="rounded-lg overflow-hidden">
                  <div className="bg-[#0b4bd6] rounded-t-lg p-4 text-white text-center">
                    <h2 className="text-2xl font-bold tracking-wide">
                      Dematerialisation
                    </h2>
                    <div className="text-xs mt-1 opacity-90">
                      Convert physical share certificates to electronic format
                      (Demat)
                    </div>
                  </div>

                  <div className="bg-white px-4 py-6 flex justify-center">
                    <div className="w-44 h-44 rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center -mt-4">
                      <img
                        src={ASSETS.hero}
                        alt="Demat hero"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <ul className="mt-4 text-sm space-y-2 text-gray-600">
                  <li>NSDL (National Securities Depository Ltd.)</li>
                  <li>CDSL (Central Depository Services (India) Ltd.)</li>
                  <li>Appoint Registrar & Transfer Agent (RTA)</li>
                  <li className="text-indigo-600 underline">Load More</li>
                </ul>
              </div>

              {/* Right content (same textual content, styled) */}
              <div className="md:w-2/3 flex-1">
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-semibold text-slate-900">
                      Dematerialisation of Shares
                    </h2>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} className="text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-xs text-slate-500">
                        (information extracted)
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 max-w-md">
                    Dematerialisation converts physical securities into
                    electronic form held in a Demat account. It increases
                    security, speeds up trading, and simplifies corporate
                    actions and share management.
                  </p>
                </div>

                <div className="mt-6 border-t pt-4 text-sm flex justify-between items-center text-slate-600">
                  <a className="text-indigo-600 underline">
                    Terms and conditions
                  </a>
                  <a className="text-indigo-600 underline">
                    Contact our experts
                  </a>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold mb-2">Key advantages</h4>
                  <div className="p-3 border rounded-md">
                    <div className="text-sm text-gray-700 space-y-2">
                      <div>
                        <strong>Enhanced security:</strong> Eliminates
                        loss/theft risks for physical certificates.
                      </div>
                      <div>
                        <strong>Ease of transactions:</strong> Faster buying and
                        selling when in Demat form.
                      </div>
                      <div>
                        <strong>Reduced costs:</strong> Lower stamp and handling
                        costs with electronic records.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Article (kept content same, restyled) */}
            <article className="bg-white rounded-lg shadow-sm p-6">
              <h1 className="text-2xl font-semibold text-center">
                Dematerialisation of Shares
              </h1>

              <div className="mt-4 text-[15px] leading-7 text-gray-700">
                <p>
                  Dematerialisation is the process of transferring physical
                  shares into a digital account, known as a Demat account, which
                  simplifies managing and trading shares. Converting physical
                  shares to Demat enhances security, reducing the risks
                  associated with physical shares like loss or theft. It also
                  makes trading faster and more efficient and simplifies share
                  management. Previously required mainly for public companies,
                  the dematerialisation process is now mandatory for private
                  limited companies (except small companies).
                </p>

                <p className="mt-4 italic">
                  Convert Your Physical Shares to Demat with IndiaFilings – Get
                  Started Now!
                </p>

                <h2 className="mt-6 text-lg font-semibold">
                  What is Dematerialisation of shares?
                </h2>
                <p className="mt-2">
                  Dematerialisation refers to the process of converting physical
                  securities, such as share certificates and other documents,
                  into electronic format. These securities are then held in a
                  demat account.
                </p>

                <h3 className="mt-6 text-lg font-semibold">
                  Depositories in India
                </h3>
                <ul className="mt-2 list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li>NSDL (National Securities Depository Ltd.)</li>
                  <li>CDSL (Central Depository Services (India) Ltd.)</li>
                </ul>

                <h3 className="mt-6 text-lg font-semibold">
                  Dematerialisation of Shares of Private Companies
                </h3>
                <p className="mt-2">
                  In October 2023, the MCA introduced an amendment (Rule 9B)
                  requiring private limited companies, except small companies,
                  to dematerialise their securities. This involves issuing
                  shares in electronic form and converting existing physical
                  shares to Demat.
                </p>

                <h3 className="mt-6 text-lg font-semibold">
                  MCA's Rule 9B — Dematerialisation of Shares of Private
                  Companies
                </h3>
                <p className="mt-2">
                  Rule 9B requires private companies (except small companies) to
                  ensure shares are issued and held in dematerialised form.
                  Companies must convert physical share certificates into
                  electronic holdings and ensure promoters/key managerial
                  personnel have dematerialised their shareholdings.
                </p>

                <h3 className="mt-6 text-lg font-semibold">Applicability</h3>
                <p className="mt-2">
                  Dematerialisation applies to public and private companies
                  (subject to exceptions). Holding and subsidiary companies are
                  required to dematerialise regardless of small-company
                  thresholds.
                </p>

                <h3 className="mt-6 text-lg font-semibold">
                  Requirements to Comply
                </h3>
                <ul className="mt-2 list-decimal list-inside text-sm text-gray-700 space-y-1">
                  <li>
                    Amend Articles of Association (AoA) to allow dematerialised
                    holdings.
                  </li>
                  <li>Appoint a Registrar & Transfer Agent (RTA).</li>
                  <li>Obtain ISINs for each security type.</li>
                  <li>
                    Open Demat accounts for shareholders with a Depository
                    Participant (DP).
                  </li>
                  <li>
                    File required returns (e.g., PAS-6) and coordinate with the
                    RTA for conversion.
                  </li>
                </ul>

                <h3 className="mt-6 text-lg font-semibold">
                  Last Date for Dematerialisation of Physical Shares
                </h3>
                <p className="mt-2">
                  The deadline depends on the company's financial year-end. For
                  companies with FY ending March 31, 2023, the deadline was
                  September 30, 2024 (18 months). Other companies have an
                  18-month window from their relevant financial year-end.
                </p>

                <h3 className="mt-6 text-lg font-semibold">
                  How to Convert Physical Shares into Demat?
                </h3>
                <ol className="mt-3 list-decimal list-inside text-sm text-gray-600 space-y-2">
                  <li>
                    Open a Demat account with a Depository Participant (DP).
                  </li>
                  <li>
                    Submit a Dematerialisation Request Form (DRF) to your DP
                    with the physical certificates.
                  </li>
                  <li>
                    DP verifies and forwards the request to the company's RTA.
                  </li>
                  <li>
                    RTA validates and approves conversion; physical certificates
                    are cancelled and electronic credits are made to the Demat
                    account.
                  </li>
                  <li>
                    You receive Dematerialisation Request Number (DRN) and the
                    shares are credited to your Demat account.
                  </li>
                </ol>

                <h3 className="mt-6 text-lg font-semibold">
                  Penalties for Non-Compliance
                </h3>
                <p className="mt-2">
                  Failure to dematerialise as required may lead to restrictions
                  on securities transactions, limitations on shareholder rights,
                  monetary fines for the company and officers in default, and
                  other regulatory actions.
                </p>

                <div className="mt-6 p-4 bg-gray-50 rounded-md">
                  <strong>Why demat?</strong>
                  <p className="mt-2 text-sm text-gray-700">
                    Demat ensures security, faster transactions, automatic
                    corporate action updates and easier compliance — all reasons
                    regulators are pushing for wide adoption.
                  </p>
                </div>

                <h3 className="mt-6 text-lg font-semibold">
                  FAQ — quick links
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Frequently asked questions about dematerialisation are
                  available below in the FAQ section.
                </p>
              </div>
            </article>

            {/* Documents + other registrations */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Requirements of Dematerialisation (Private Companies)
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="border-b pb-3">
                    Amend Articles of Association (AoA)
                  </li>
                  <li className="border-b pb-3">
                    Appoint Registrar & Transfer Agent (RTA)
                  </li>
                  <li className="border-b pb-3">Obtain ISINs for shares</li>
                  <li className="border-b pb-3">
                    Open Demat accounts for shareholders
                  </li>
                  <li className="mt-4 inline-block px-3 py-2 border rounded-md text-sm text-indigo-600">
                    Load More
                  </li>
                </ul>
              </div>

              <aside className="lg:col-span-5 bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Related Guides</h3>
                <ul className="space-y-3 text-sm text-indigo-600">
                  <li>Demat Shares of Private Limited Company</li>
                  <li>How to open a Demat Account?</li>
                  <li>EVC Generation using Demat Account</li>
                  <li>Dematerialisation in Unlisted Companies</li>
                  <li>Equity shares and Tax planning</li>
                </ul>
              </aside>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">
                FAQ's on Dematerialisation of Company Shares
              </h3>
              <div className="space-y-0">
                {faqItems.map((q, i) => (
                  <div key={i} className="border-b last:border-b-0">
                    <button
                      className="w-full text-left py-4 flex justify-between items-center text-sm"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      type="button"
                      aria-expanded={openFaq === i}
                    >
                      <span className="text-slate-800">{q}</span>
                      <span className="text-indigo-600 flex items-center gap-2">
                        {openFaq === i ? "-" : <Plus size={14} />}
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
                <button
                  className="px-4 py-2 border rounded-md text-sm text-indigo-600"
                  type="button"
                >
                  Load More
                </button>
              </div>
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

                <button
                  className="w-full bg-green-500 text-white py-2 rounded-md font-medium flex items-center justify-center gap-2"
                  type="button"
                >
                  <ShoppingBag size={16} /> Get Started
                </button>
              </form>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
              <h4 className="font-semibold mb-3">Related Guides</h4>
              <ul className="text-sm text-indigo-600 space-y-2">
                <li>Demat Shares of Private Limited Company</li>
                <li>How to open a Demat Account?</li>
                <li>EVC Generation using Demat Account</li>
                <li>Dematerialisation in Unlisted Companies</li>
                <li>Equity shares and Tax planning</li>
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

        {/* Footer */}
        <footer className="bg-white mt-12 py-8 border-t">
          <div className="max-w-[1180px] mx-auto px-6 text-sm text-gray-600">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">
                  IndiaFilings
                </h5>
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
    </>
  );
}
