"use client";

import React, { useState } from "react";
import { ChevronRight, ShoppingBag, Star, Plus } from "lucide-react";

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

export default function DormantStatusFilingPage(): React.ReactElement {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [gstChecked, setGstChecked] = useState(false);

  const faqItems = [
    "What is a dormant company?",
    "How does a company become dormant?",
    "What are the benefits of dormant company status?",
    "What defines an inactive company?",
    "What are significant accounting transactions?",
    "Why might a company seek dormant status?",
    "What are the mandatory requirements for dormant status?",
    "What is the procedure to file for dormant status?",
    "What forms are needed for dormant company status application?",
    "What is the annual compliance for a dormant company?",
  ];

  const faqAnswers: Record<number, string> = {
    0: "A dormant company is a registered entity not engaged in significant business activity or operations. It may be kept for future projects, to hold assets, or for IP management.",
    1: "A company can apply to the Registrar for dormant status when it has not carried out significant financial activities and meets the conditions under the Companies Act, 2013 and related rules.",
    2: "Benefits include preservation of company name, reduced compliance requirements, easier reactivation, limited applicability of some Act provisions, and simplified annual returns (MSC-3).",
    3: "An inactive company has not engaged in business activity or significant accounting transactions in the last two financial years, and may not have filed financials or annual returns in that period.",
    4: "Significant accounting transactions are general financial activities; exceptions include payments to ROC, share allotment transactions, and payments for maintaining office/records.",
    5: "Reasons include reserving a name, business restructuring, extended absence of owners, or holding assets/IP without active trading.",
    6: "Mandatory requirements include minimum director counts (public 3, private 2, OPC 1), passing a special resolution or obtaining 3/4 shareholder consent, and clearing inspections/prosecutions/outstanding dues.",
    7: "Procedure: board resolution, EGM and CA certification of statement of affairs, pass special resolution, file MGT-14, submit Form MSC-1 with supporting documents and fees, and obtain MSC-2 certificate.",
    8: "Key ROC forms: MGT-14 (file special resolution) and MSC-1 (apply for dormant status). Reversion uses MSC-3.",
    9: "Annual compliance includes maintaining accounts, statutory audit, filing tax returns (TDS/GST/Income Tax where applicable) and simplified ROC annual return in Form MSC-3 within 30 days of year end.",
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
          IndiaFilings / Windup Business /{" "}
          <span className="text-indigo-600 font-medium">
            Dormant Status Filing
          </span>
        </div>
      </div>

      <main className="max-w-[1180px] mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <section className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3 flex-shrink-0">
              <div className="rounded-lg overflow-hidden">
                <div className="bg-[#0b4bd6] rounded-t-lg p-4 text-white text-center">
                  <h2 className="text-2xl font-bold tracking-wide">
                    Dormant Status Filing
                  </h2>
                  <div className="text-xs mt-1 opacity-90">
                    Dormant Status Filing
                  </div>
                </div>

                <div className="bg-white px-4 py-6 flex justify-center">
                  <div className="w-44 h-44 rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center -mt-4">
                    <img
                      src={ASSETS.man}
                      alt="Dormant hero"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <ul className="mt-4 text-sm space-y-2 text-gray-600">
                <li>Bank Statement</li>
                <li>Form MSC-1</li>
                <li>Form MSC-3</li>
                <li className="text-indigo-600 underline">Load More</li>
              </ul>
            </div>

            <div className="md:w-2/3 flex-1">
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    Dormant Status Filing
                  </h2>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-xs text-slate-500">(4)</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 max-w-md">
                  Filing dormant status for a company. Our experts guide you
                  through the entire MSC-1/MSC-3 process and related annual
                  compliance.
                </p>
              </div>

              <div className="relative mt-6">
                <div className="absolute -top-3 left-6 bg-white px-2 rounded-md text-xs text-green-700 border border-[#eff8f0]">
                  1 Exclusive Offers
                </div>
                <div className="border-2 border-dashed rounded-md border-[#f0dcd0] p-4 bg-white">
                  <div className="font-semibold text-slate-900">Basic</div>
                  <ul className="mt-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <ChevronRight size={14} /> Application Filing in MCA and
                      Provide Dormant Letter
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight size={14} /> Form MSC-1 filing assistance
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

          <article className="bg-white rounded-lg shadow-sm p-6">
            <h1 className="text-2xl font-semibold text-center">
              Dormant Status Filing (Bank Statement · Form MSC-1 · Form MSC-3)
            </h1>

            <div className="mt-4 text-[15px] leading-7 text-gray-700">
              <p>
                As defined under the Companies Act of 2013, a dormant company is
                registered but not engaged in any significant business activity
                or operations. It may have been established for future ventures
                or to hold assets without active trading. Dormant status filing
                allows these companies to minimise compliance requirements and
                maintain their registered status without the full spectrum of
                operational reporting obligations. If your company is in a
                similar state and you're considering transitioning to a dormant
                status to reduce compliance burdens, IndiaFilings is here to
                assist. Our team specialises in navigating the dormant status
                filing process, offering expert guidance to ensure a seamless
                transition. Ready to simplify your company's compliance
                landscape? Contact IndiaFilings today to get started.
              </p>

              <h3 className="mt-6 text-lg font-semibold">
                What is a Dormant Company?
              </h3>
              <p className="mt-2">
                A Dormant Company, also known as a Dormant Entity or Dormant
                Corporation, refers to a registered business entity not
                currently engaged in significant business activities or
                operations. Dormant status typically arises when a company has
                temporarily ceased its operational activities due to strategic
                reasons such as awaiting a future project, not yet commencing
                substantial business operations, or primarily existing to hold
                or manage intellectual property rights without directly engaging
                in revenue-generating activities. Such companies can apply to
                the Registrar to obtain the status of a Dormant company, with
                objectives including: being incorporated for a future project,
                serving as an asset or intellectual property, having no
                significant transactions in a specific financial year, or
                remaining inactive.
              </p>

              <h3 className="mt-6 text-lg font-semibold">
                Overview of Dormant Status Under the Companies Act of 2013
              </h3>
              <p className="mt-2">
                When a company is established under the Companies Act of 2013
                for purposes such as launching a future project, holding assets,
                or managing intellectual property and hasn't carried out any
                significant financial activities, it can be considered inactive.
                Such a company can apply to the Registrar for a change in status
                to become a dormant company, as outlined in the Companies Act.
              </p>

              <h3 className="mt-6 text-lg font-semibold">
                Meaning of Inactive Company
              </h3>
              <p className="mt-2">
                An "Inactive Company" refers to a company that has not engaged
                in any business activity or conducted significant accounting
                transactions during the last two financial years. It also
                includes companies that have not filed their financial
                statements or annual returns with the Registrar of Companies
                (ROC) during the preceding two financial years.
              </p>

              <h3 className="mt-6 text-lg font-semibold">
                Significant Accounting Transactions
              </h3>
              <p className="mt-2">
                Significant accounting transactions include all company
                financial activities, with the following exceptions: payments to
                the ROC or for fulfilling requirements under the Companies Act
                or any other applicable laws; transactions related to the
                allotment of shares; payments for the maintenance of the
                company's office or records.
              </p>

              <h3 className="mt-6 text-lg font-semibold">
                Reasons for Obtaining the Status of a Dormant Company
              </h3>
              <p className="mt-2">
                Name Reservation: Business owners may register their company as
                dormant while preparing to launch their business, serving as a
                means to reserve the company name. Business Restructuring: When
                owners plan to restructure their operations, obtaining dormant
                status may be beneficial. Extended Absences: If owners
                anticipate extended periods away from operations due to illness,
                travel, maternity leave, sabbatical, etc., they may choose
                dormant status.
              </p>

              <h3 className="mt-6 text-lg font-semibold">
                Benefits of Opting for Dormant Company Status
              </h3>
              <p className="mt-2">
                Preservation of Company Name: Ensures the company name is
                protected during inactivity. Reduced Compliance Requirements:
                Lowers regulatory burden under the Companies Act 2013.
                Opportunity for Reactivation: Flexibility to resume activities
                without forming a new entity. Limited Applicability of Company
                Act Provisions: Simplifies legal compliance. Easier Annual
                Return Filing: Streamlines filing via Form MSC-3. No Auditor
                Rotation: Exempt from auditor rotation obligations. Bi-Annual
                Board Meetings: Only one board meeting every six months.
              </p>

              <h3 className="mt-6 text-lg font-semibold">
                Mandatory Requirements for Obtaining Dormant Status
              </h3>
              <p className="mt-2">
                To qualify under Section 455(5) and Rule 6: Minimum number of
                directors (public: 3, private: 2, OPC: 1). A special resolution
                or shareholder consent of at least three-fourths (by value) is
                required. No ongoing inspections, inquiries, prosecutions,
                outstanding public deposits, defaults, or undisclosed disputes.
                All statutory taxes, dues, duties, etc., must be cleared. The
                company’s securities must not be listed on any stock exchange.
              </p>

              <h3 className="mt-6 text-lg font-semibold">
                Procedure for Dormant Status Filing
              </h3>
              <ol className="mt-3 list-decimal list-inside text-sm text-gray-600 space-y-2">
                <li>
                  Board Meeting: Pass a resolution to apply for dormant status
                  and authorise a director to manage the process.
                </li>
                <li>
                  EGM Notice: Send detailed notice for EGM with an explanatory
                  statement.
                </li>
                <li>
                  CA Certification: Get the company's Statement of Affairs
                  certified by a statutory auditor or CA.
                </li>
                <li>
                  Conduct EGM: Pass special resolution in compliance with
                  relevant sections and secretarial standards.
                </li>
                <li>
                  File MGT-14: File the special resolution with ROC within 30
                  days.
                </li>
                <li>
                  Submit MSC-1: Apply for dormant status with required documents
                  and fees.
                </li>
                <li>
                  Issuance of MSC-2: Registrar issues certificate granting
                  dormant status; file MSC-3 annually.
                </li>
              </ol>

              <h3 className="mt-6 text-lg font-semibold">
                ROC Forms for Dormant Company Registration
              </h3>
              <div className="mt-4 overflow-auto">
                <table className="w-full text-sm table-auto border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="p-5 border text-left">S.No</th>
                      <th className="p-5 border text-left">Form Name</th>
                      <th className="p-5 border text-left">Explanation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        1,
                        "e-Form MGT-14",
                        "Submitted to ROC within 30 days of passing special resolution.",
                      ],
                      [
                        2,
                        "e-Form MSC-1",
                        "Used to apply for change of company status to Dormant.",
                      ],
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
                Annual Compliance for Dormant Company
              </h3>
              <p className="mt-2">
                Annual compliance remains necessary: accounting & financial
                statements, statutory audits, tax return filings (TDS/GST/Income
                Tax where applicable), and ROC returns using Form MSC-3 within
                30 days of the financial year end. Maintain registered address,
                conduct bi-annual board meetings, and prepare audited financial
                position statements certified by a practising CA.
              </p>

              <h3 className="mt-6 text-lg font-semibold">
                Simplify Dormant Status Filing with IndiaFilings
              </h3>
              <p className="mt-2">
                IndiaFilings assists with the entire Dormant Status filing
                process, from documentation to application and annual
                compliance. Simplify your Dormant Status filing today with
                IndiaFilings - Get Started now!
              </p>
            </div>
          </article>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">
                Documents Required For Dormant Status Filing
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="border-b pb-3">Bank Statement</li>
                <li className="border-b pb-3">
                  Accounting and Income Tax Filing for Nil-Filing Companies
                </li>
                <li className="border-b pb-3">
                  Form MSC-1 Application to the Registrar
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
              FAQ's on Dormant Status Filing
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
              <li>Register as Dormant Company</li>
              <li>First Board Meeting of Company</li>
              <li>Company Law Settlement Scheme</li>
              <li>Company Strike Off Procedure 2019</li>
              <li>Strike Off of Company</li>
              <li>Removal of Company Name from MCA Database</li>
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
