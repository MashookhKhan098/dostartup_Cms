"use client";

import React, { useState } from "react";
import { ChevronRight, ShoppingBag, Star, Plus } from "lucide-react";

/**
 * ADT-1 Filing — final refined version to match provided screenshots closely.
 * - Uses Tailwind utility classes (Tailwind CSS required).
 * - lucide-react for icons (already present in your project).
 *
 * Drop into: app/page.tsx or a component file and import where needed.
 */

const ASSETS = {
  logo: "/images/india-logo.jpg",
  hero: "/images/adt1-hero.jpg",
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

export default function ADT1FilingMergedPage(): React.ReactElement {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [gstChecked, setGstChecked] = useState(false);

  const faqItems = [
    "What is Form ADT-1?",
    "Who is responsible for filing Form ADT-1?",
    "Is Form ADT-1 required for the appointment of the first auditor?",
    "When should Form ADT-1 be filed?",
    "What is the penalty for late filing of Form ADT-1?",
    "What are the documents required for filing Form ADT-1?",
  ];

  const faqAnswers: Record<number, string> = {
    0: "Form ADT-1 is a statutory return filed by companies with the Registrar of Companies (ROC) to report the appointment of an auditor.",
    1: "The company is responsible for filing Form ADT-1 when an auditor is appointed or reappointed.",
    2: "Yes — ADT-1 is mandatory for first auditor appointments under the updated rules (check latest MCA rules for exemptions).",
    3: "ADT-1 must be filed within 15 days from the date of the auditor's appointment.",
    4: "Late filing attracts additional fees (multiples of normal fee based on delay).",
    5: "Typical attachments: Board resolution, consent of auditor, auditor certificate under Section 141, intimation copy to auditor.",
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
          <span className="text-indigo-600 font-medium">ADT-1 Filing</span>
        </div>
      </div>

      {/* Main */}
      <main className="max-w-[1180px] mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left column */}
        <section className="lg:col-span-8 space-y-6">
          {/* Top card */}
          <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col md:flex-row gap-6">
            {/* Left image card */}
            <div className="md:w-1/3 flex-shrink-0">
              <div className="rounded-lg overflow-hidden">
                <div className="bg-[#0b4bd6] rounded-t-lg p-4 text-white text-center">
                  <h2 className="text-2xl font-bold tracking-wide">
                    ADT-1 FILING
                  </h2>
                  <div className="text-xs mt-1 opacity-90">
                    ADT - 1: Notifies first auditor appointment to ROC
                  </div>
                </div>

                <div className="bg-white px-4 py-6 flex justify-center">
                  <div className="w-44 h-44 rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center -mt-4">
                    <img
                      src={ASSETS.man}
                      alt="ADT hero"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <ul className="mt-4 text-sm space-y-2 text-gray-600">
                <li>Consent for Appointment as Statutory Auditor</li>
                <li>Appointment as Statutory Auditor</li>
                <li>Board Resolution for Auditor Appointment</li>
                <li className="text-indigo-600 underline">Load More</li>
              </ul>
            </div>

            {/* Right content */}
            <div className="md:w-2/3 flex-1">
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    ADT-1 Filing
                  </h2>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-xs text-slate-500">(2709)</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 max-w-md">
                  Auditor appointment services include help with discovering,
                  engaging and appointing of Auditor for newly incorporated
                  Private Limited Company (Audit fee will be extra based on the
                  nature and volume of transaction).
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
                      <ChevronRight size={14} /> Filed Form ADT-1
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight size={14} /> Acknowledgement Copy
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
              Form ADT-1 Filing for Auditor Appointment
            </h1>

            <div className="mt-4 text-[15px] leading-7 text-gray-700">
              <p>
                Appointing an auditor is a mandatory compliance step for every
                company, and filing Form ADT-1 with the Registrar of Companies
                (ROC) is a legal requirement under the Companies Act, 2013.
                Whether you're appointing your first auditor after incorporation
                or reappointing one at your Annual General Meeting (AGM), timely
                and accurate filing is essential to avoid penalties.
              </p>

              <h3 className="mt-6 text-lg font-semibold">
                What is the ADT 1 Form?
              </h3>
              <p className="mt-2">
                Form ADT 1 is a statutory return filed by companies with the
                Registrar of Companies (ROC) to report the appointment of an
                auditor, as required under Section 139 of the Companies Act,
                2013. It is used to formally notify the ROC when a company
                appoints its first auditor after incorporation or
                appoints/reappoints an auditor at the Annual General Meeting
                (AGM).
              </p>

              <h3 className="mt-6 text-lg font-semibold">
                Requirements for Filing ADT 1 Form
              </h3>
              <p className="mt-2">
                Filing ADT 1 Form is mandatory for all companies, including
                public, private, listed, unlisted, and one-person companies
                (OPCs), upon the appointment of an auditor, whether for the
                first time or at a subsequent Annual General Meeting (AGM). The
                form must be submitted to the Registrar of Companies (ROC)
                within 15 days from the date of the auditor's appointment.
              </p>

              <h3 className="mt-6 text-lg font-semibold">ADT 1 Late Fees</h3>
              <div className="mt-4 overflow-auto">
                <table className="w-full text-sm table-auto border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="p-5 border text-left">Sl. No.</th>
                      <th className="p-5 border text-left">
                        Delay in Filing (Number of Days)
                      </th>
                      <th className="p-5 border text-left">Penalty</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [1, "Up to 30 days", "2 times the normal fee"],
                      [
                        2,
                        "More than 30 days and up to 60 days",
                        "4 times the normal fee",
                      ],
                      [
                        3,
                        "More than 60 days and up to 90 days",
                        "6 times the normal fee",
                      ],
                      [
                        4,
                        "More than 90 days and up to 180 days",
                        "10 times the normal fee",
                      ],
                      [5, "More than 180 days", "12 times the normal fee"],
                    ].map((row) => (
                      <tr
                        key={row[0] as number}
                        className="odd:bg-white even:bg-gray-50"
                      >
                        <td className="p-5 border text-center">{row[0]}</td>
                        <td className="p-5 border">{row[1]}</td>
                        <td className="p-5 border">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="mt-6 text-lg font-semibold">
                How to File Form ADT 1 (E-Filing Process)
              </h3>
              <ol className="mt-3 list-decimal list-inside text-sm text-gray-600 space-y-2">
                <li>Download the E-Form ADT 1</li>
                <li>Fill in the required details</li>
                <li>Attach supporting documents</li>
                <li>Verify and submit the form</li>
              </ol>

              <h3 className="mt-6 text-lg font-semibold">
                How IndiaFilings Can Assist with Filing Form ADT-1
              </h3>
              <ul className="mt-3 text-sm text-gray-600 space-y-2">
                <li>
                  Document Preparation: We help prepare all the necessary
                  documents required for Form ADT-1, including board
                  resolutions, auditor consents, and declarations.
                </li>
                <li>
                  Expert Review: Our professionals thoroughly review your
                  documentation to ensure accuracy, completeness, and adherence
                  to statutory requirements.
                </li>
                <li>
                  End-to-End Filing Support: IndiaFilings handles the complete
                  filing process on your behalf, ensuring timely and error-free
                  submission of Form ADT-1 through the MCA portal.
                </li>
              </ul>
            </div>
          </article>

          {/* Documents + other registrations */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">
                Documents Required For ADT-1 Filing
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="border-b pb-3">
                  Consent for Appointment as Statutory Auditor
                </li>
                <li className="border-b pb-3">
                  Appointment as Statutory Auditor
                </li>
                <li className="border-b pb-3">
                  Board Resolution for Auditor Appointment
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

          {/* FAQ */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">
              FAQ's on ADT-1 Filing
            </h3>
            <div className="space-y-0">
              {faqItems.map((q, i) => (
                <div key={i} className="border-b last:border-b-0">
                  <button
                    className="w-full text-left py-4 flex justify-between items-center text-sm"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
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
              <button className="px-4 py-2 border rounded-md text-sm text-indigo-600">
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

              <button className="w-full bg-green-500 text-white py-2 rounded-md font-medium flex items-center justify-center gap-2">
                <ShoppingBag size={16} /> Get Started
              </button>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
            <h4 className="font-semibold mb-3">Related Guides</h4>
            <ul className="text-sm text-indigo-600 space-y-2">
              <li>Form-ADT-1</li>
              <li>
                MCA Relaxes Levy of Additional Fee in the Filing of certain
                forms under companies act
              </li>
              <li>Exemption for Form Adt 1</li>
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
