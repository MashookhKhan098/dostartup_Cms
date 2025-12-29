"use client";

import React, { useState } from "react";
import { ChevronRight, ShoppingBag, Star, Plus } from "lucide-react";

/**
 * Share Transfer — replica rewritten from ADT-1 filing template.
 * - Tailwind utility classes required in your project.
 * - Swap file path to app/share-transfer/page.tsx when saving.
 */

const ASSETS = {
  logo: "/images/india-logo.jpg",
  hero: "/images/share-transfer-hero.jpg",
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

export default function ShareTransferPage(): React.ReactElement {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [gstChecked, setGstChecked] = useState(false);

  const faqItems = [
    "What is share transfer?",
    "What are the key regulations for share transfer in private companies?",
    "How are share transfer rules in private limited companies determined?",
    "What documents are required for a share transfer?",
    "Is stamp duty required for a share transfer?",
    "What is the process for executing a Share Transfer Deed (SH-4)?",
  ];

  const faqAnswers: Record<number, string> = {
    0: "Share transfer refers to the process where a shareholder transfers ownership of their shares to another person, subject to the company's AOA and statutory requirements.",
    1: "Section 56 of the Companies Act, 2013 and the Companies (Share Capital & Debentures) Rules regulate share transfers in private companies, along with the company's Articles of Association.",
    2: "Private companies follow their Articles of Association which may include pre-emptive rights and transfer restrictions. Directors often have powers to accept or refuse transfers as per AOA.",
    3: "Typical documents: Share Transfer Deed (SH-4), original share certificate, PAN of transferee, board resolution, NOC/indemnity (if required) and proof of stamp duty payment.",
    4: "Yes — the share transfer deed must be stamped as per the Indian Stamp Act; stamp duty rates vary by state and nature of transfer.",
    5: "Execute SH-4 signed by transferor and transferee, pay stamp duty, attach share certificate, submit to company for board approval and issuance of new share certificate to transferee.",
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
          <span className="text-indigo-600 font-medium">Share Transfer</span>
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
                    Share Transfer
                  </h2>
                  <div className="text-xs mt-1 opacity-90">
                    Share transfer procedures for private companies
                  </div>
                </div>

                <div className="bg-white px-4 py-6 flex justify-center">
                  <div className="w-44 h-44 rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center -mt-4">
                    <img
                      src={ASSETS.man}
                      alt="share transfer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <ul className="mt-4 text-sm space-y-2 text-gray-600">
                <li>Share Transfer Deed (SH-4)</li>
                <li>Original Share Certificate</li>
                <li>Board Resolution for Transfer</li>
                <li className="text-indigo-600 underline">Load More</li>
              </ul>
            </div>

            {/* Right content */}
            <div className="md:w-2/3 flex-1">
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    Share Transfer
                  </h2>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-xs text-slate-500">(231)</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 max-w-md">
                  Share transfer from one person to another (or many-to-one /
                  one-to-many) with end-to-end support — deeds, stamping, board
                  approvals, and new share certificate issuance.
                </p>
              </div>

              {/* Offer box */}
              <div className="relative mt-6">
                <div className="absolute -top-3 left-6 bg-white px-2 rounded-md text-xs text-green-700 border border-[#eff8f0]">
                  2 Exclusive Offers
                </div>
                <div className="border-2 border-dashed rounded-md border-[#f0dcd0] p-4 bg-white">
                  <div className="font-semibold text-slate-900">Basic</div>
                  <ul className="mt-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <ChevronRight size={14} /> Application Filing in MCA
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight size={14} /> Provide Updated MOA & Updated
                      AOA
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
              Private Limited Company Share Transfer
            </h1>

            <div className="mt-4 text-[15px] leading-7 text-gray-700">
              <p>
                The Share Transfer Procedure in a Private Limited Company is a
                structured process that facilitates transferring ownership of
                shares from one individual to another. Shares represent portions
                of ownership within a company, and transfers are regulated by
                the Companies Act 2013 and the company's Articles of Association
                (AOA).
              </p>

              <h3 className="mt-6 text-lg font-semibold">
                Meaning of Share Transfer
              </h3>
              <p className="mt-2">
                Share transfer refers to the process where a shareholder
                voluntarily transfers their ownership rights — and associated
                obligations — to another person. Transfers follow the terms in
                the company's AOA and central laws.
              </p>

              <h3 className="mt-6 text-lg font-semibold">
                Key Regulations for Transfer of Shares
              </h3>
              <p className="mt-2">
                The transfer of shares in a private company is governed by
                Section 56(1) & (3) of the Companies Act, 2013, and the
                Companies (Share Capital and Debentures) Rules, 2014, along with
                the company's AOA.
              </p>

              <h3 className="mt-6 text-lg font-semibold">
                Documents Required for Share Transfer
              </h3>
              <ul className="mt-3 list-disc list-inside text-sm text-gray-600 space-y-2">
                <li>
                  Share Transfer Deed: SH-4 signed by transferor & transferee
                </li>
                <li>Original Share Certificate</li>
                <li>PAN Card copy of transferee</li>
                <li>Board Resolution approving transfer</li>
                <li>Stamp duty payment evidence</li>
              </ul>

              <h3 className="mt-6 text-lg font-semibold">
                Share Transfer Process (Summary)
              </h3>
              <ol className="mt-3 list-decimal list-inside text-sm text-gray-600 space-y-2">
                <li>Review AOA for restrictions & pre-emptive rights.</li>
                <li>
                  Transferor issues notice to directors and initiates valuation
                  (if required).
                </li>
                <li>
                  Execute SH-4, pay stamp duty and attach share certificate.
                </li>
                <li>Submit documents to company & obtain board approval.</li>
                <li>Company issues new share certificate to transferee.</li>
              </ol>

              <h3 className="mt-6 text-lg font-semibold">
                How IndiaFilings Helps
              </h3>
              <ul className="mt-3 text-sm text-gray-600 space-y-2">
                <li>Document preparation and stamping guidance.</li>
                <li>Board resolution & meeting support.</li>
                <li>
                  Processing SH-4 and follow up until share certificate issue.
                </li>
              </ul>
            </div>
          </article>

          {/* Documents + other registrations */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">
                Key Documents for Share Transfer
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="border-b pb-3">
                  Share Transfer Deed (Form SH-4)
                </li>
                <li className="border-b pb-3">Original Share Certificate</li>
                <li className="border-b pb-3">PAN Card of Transferee</li>
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
              FAQ's on Share Transfer
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
              <li>How to Transfer Shares of Private Limited Company</li>
              <li>Private Limited Company Registration in India</li>
              <li>Articles of Association (AOA)</li>
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
