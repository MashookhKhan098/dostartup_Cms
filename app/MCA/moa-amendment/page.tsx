"use client";

import React, { useState } from "react";
import { ChevronRight, ShoppingBag, Star, Plus } from "lucide-react";

const ASSETS = {
  logo: "/images/india-logo.jpg",
  hero: "/images/moa-hero.jpg",
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
  { title: "MOA Amendment", href: "/MCA/moa-amendment" },
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

export default function MOAAmendmentPage(): React.ReactElement {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [gstChecked, setGstChecked] = useState(false);

  const faqItems = [
    "What is MOA?",
    "Why do companies need to amend their MOA periodically?",
    "What does the MOA define?",
    "What is an MOA Amendment?",
    "When can an MOA be amended?",
    "What are some clauses covered in the MOA?",
    "What is required to alter the name in the MOA?",
    "How is a change in the registered office location reflected in the MOA?",
    "What is the procedure for altering the Objects Clause in the MOA?",
    "How is the liability clause altered in the MOA?",
  ];

  const faqAnswers: Record<number, string> = {
    0: "MOA stands for Memorandum of Association. It is the foundational legal document of a company that defines its scope, objectives, and the relationship with its members.",
    1: "Companies amend their MOA to reflect changes in objectives, business activities, registered office, capital structure or other statutory requirements as the company evolves.",
    2: "The MOA defines the name clause, situation (registered office) clause, object clause, liability clause, capital clause and subscription clause among other foundational terms.",
    3: "An MOA Amendment is the legal process of changing provisions in the Memorandum of Association under Section 13 of the Companies Act, 2013, supported by the necessary resolution and filings.",
    4: "An MOA can be amended when changes to name, registered office, objects, liability, authorised capital or other clauses are required. Some changes require special resolution and additional approvals.",
    5: "Typical clauses include Name Clause, Situation Clause, Object Clause, Liability Clause, Capital Clause and Subscription Clause. The Subscription Clause cannot be altered.",
    6: "Altering the name clause requires a special resolution. For most private/public companies no central government approval is needed, but certain categories may need additional approvals.",
    7: "Changing the registered office to a different state requires a special resolution, board approval and filings with the Registrar of Companies in both states, and supporting forms such as INC-22.",
    8: "Altering the Objects Clause may require a special resolution and, for publicly-funded companies, publication in newspapers and compliance with SEBI exit/dissent procedures as applicable.",
    9: "Altering the liability clause generally requires a resolution and filing with the Registrar within prescribed timelines. Liability of members can be limited but cannot be made unlimited without proper procedure.",
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
          <span className="text-indigo-600 font-medium">MOA Amendment</span>
        </div>
      </div>

      <main className="max-w-[1180px] mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <section className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3 flex-shrink-0">
              <div className="rounded-lg overflow-hidden">
                <div className="bg-[#0b4bd6] rounded-t-lg p-4 text-white text-center">
                  <h2 className="text-2xl font-bold tracking-wide">
                    MOA AMENDMENT
                  </h2>
                  <div className="text-xs mt-1 opacity-90">
                    Notice and Explanatory Statement • Memorandum of Association
                    • Special Resolution
                  </div>
                </div>

                <div className="bg-white px-4 py-6 flex justify-center">
                  <div className="w-44 h-44 rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center -mt-4">
                    <img
                      src={ASSETS.hero}
                      alt="MOA hero"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <ul className="mt-4 text-sm space-y-2 text-gray-600">
                <li>Notice and Explanatory Statement</li>
                <li>MOA</li>
                <li>Special Resolution</li>
                <li className="text-indigo-600 underline">Load More</li>
              </ul>
            </div>

            <div className="md:w-2/3 flex-1">
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    MOA Amendment
                  </h2>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-xs text-slate-500">(66)</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 max-w-md">
                  MOA amendment for a private limited company. Our experts
                  assist with drafting, resolutions and filing with ROC.
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
                      <ChevronRight size={14} /> Application Filing in MCA
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight size={14} /> Provide Updated MOA & Approval
                      Letter
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
                <div className="mt-4 p-3 border rounded-md">
                  <div className="text-sm font-medium">
                    Save 18% with GST Registration
                  </div>
                  <div className="text-xs text-gray-500">
                    Get GST eInvoice with Input Tax Credit
                  </div>
                </div>
              </div>
            </div>
          </div>

          <article className="bg-white rounded-lg shadow-sm p-6">
            <h1 className="text-2xl font-semibold text-center">
              MOA Amendment
            </h1>

            <div className="mt-4 text-[15px] leading-7 text-gray-700">
              <p>
                Companies may need to periodically amend their Memorandum of
                Association (MOA) to reflect changes in their operational,
                structural, or strategic directives. The MOA is the foundational
                legal document defining a company's scope, objectives, and
                operational boundaries. At IndiaFilings, we understand the
                significance of MOA amendments and offer expert guidance. From
                understanding the intricacies of MOA clauses to navigating the
                legal framework, our team ensures seamless compliance with
                regulatory requirements.
              </p>

              <h3 className="mt-6 text-lg font-semibold">
                Memorandum of Association (MOA)
              </h3>
              <p className="mt-2">
                The "MOA" refers to the Memorandum of Association, which serves
                as the foundation document for a company. It is crafted during
                the company registration process and holds legal significance.
                The MOA outlines the company's objectives, operational
                boundaries, and internal regulations, establishing a framework
                for its operations and defining its relationship with
                shareholders. It sets the company's scope and legal parameters
                in clear terms.
              </p>

              <p className="mt-4">
                The Memorandum of Association covers many aspects of the
                company, encompassing its operations, delegation of
                responsibilities, policies, and guiding principles.
              </p>

              <h3 className="mt-6 text-lg font-semibold">
                What is the MOA Amendment?
              </h3>
              <p className="mt-2">
                An MOA (Memorandum of Association) Amendment refers to the
                process through which a company amends the provisions outlined
                in its MOA. An amendment to the Memorandum of Association is
                permissible under Section 13 of The Companies Act, 2013, in
                conjunction with the Company Rules Act, which provides the legal
                framework for modifying the MOA.
              </p>

              <h3 className="mt-6 text-lg font-semibold">
                When can an MOA be amended?
              </h3>
              <p className="mt-2">
                As mentioned above, the Memorandum of Association (MOA) is a
                critical document for any company, outlining the fundamental
                conditions under which it operates. The MOA contains several key
                clauses:
              </p>
              <ul className="mt-3 list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Name Clause: Identifies the company's official name.</li>
                <li>
                  Situation Clause: Specifies the location of the company's
                  registered office.
                </li>
                <li>
                  Object Clause: Describes the company's purposes and the scope
                  of activities it can undertake.
                </li>
                <li>
                  Liability Clause: States the liability of the company's
                  members, whether limited by shares or guarantees.
                </li>
                <li>
                  Capital Clause: Details the company's authorised capital,
                  including the number and types of shares.
                </li>
                <li>
                  Subscription Clause: Includes the signatures of the initial
                  subscribers to the MOA, indicating their agreement to form the
                  company and take up shares.
                </li>
              </ul>

              <h3 className="mt-6 text-lg font-semibold">
                Key Amendments to the Memorandum of Association (MOA)
              </h3>
              <p className="mt-2">
                An amendment to the MOA can be made to alter any or all of the
                above-mentioned clauses EXCEPT the Subscription Clause. These
                amendments can include:
              </p>
              <h4 className="mt-4 font-semibold">Altering Name in MOA</h4>
              <p className="mt-2">
                The MOA will be altered by passing a special resolution to make
                changes in the company's name. In the case of a name change for
                a private or public limited company, no approval from the
                central government is needed. However, in other cases, the
                central government's consent is necessary.
              </p>

              <h4 className="mt-4 font-semibold">
                Registered Office Change (State to State)
              </h4>
              <p className="mt-2">
                A company must change the Memorandum of Association to transfer
                the registered office to another state. Generally, the reasons
                for changing the registration to another state include
                conducting the business more professionally and economically,
                developing operations in the current location, managing existing
                objectives, selling the business enterprise wholly or partially,
                or merging the business with another entity. If shifted from one
                state to another, a special resolution and approvals must be
                filed with the Registrars of both states.
              </p>

              <h4 className="mt-4 font-semibold">
                Alteration of Objects Clause
              </h4>
              <p className="mt-2">
                The changes to the object clause in the case of a Private
                Limited Company can be made without any hassles. But if the same
                is to be done for any company that has raised funds from the
                public, then a special resolution is required to be passed.
                Also, this must be published in an English and another
                local-language newspaper where the company's registered office
                is located.
              </p>

              <h4 className="mt-4 font-semibold">
                Alteration of the Liability Clause
              </h4>
              <p className="mt-2">
                A change in the clause needs to be made to limit the liability
                of the Directors or members. A copy of the resolution must be
                filed with the registrar within 30 days of the change.
              </p>

              <h4 className="mt-4 font-semibold">
                Alteration of Capital Clause
              </h4>
              <p className="mt-2">
                This change may be required as a subdivision of the shares or
                consolidation of shares. Other reasons include conversion of
                stock or annulment of unsubscribed capital. These alterations
                must be filed with the registrar within 30 days.
              </p>

              <h3 className="mt-6 text-lg font-semibold">
                Documents Required for MOA Amendment
              </h3>
              <ul className="mt-3 list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>
                  Revised MOA: A copy of the Memorandum of Association
                  reflecting the proposed changes.
                </li>
                <li>
                  Certified Copy of Special Resolution: A certified copy of the
                  resolution passed at the Extraordinary General Meeting (EGM)
                  approving the MOA amendments.
                </li>
                <li>
                  Explanatory Statement: A document providing explanations and
                  justifications for the proposed changes.
                </li>
                <li>
                  EGM Notice: A formal notice sent to all company members,
                  announcing the EGM and detailing the agenda.
                </li>
                <li>
                  Form MGT-14: A form submitted to the Registrar of Companies to
                  register the special resolution and amendments.
                </li>
              </ul>

              <h3 className="mt-6 text-lg font-semibold">
                Common Procedure for MOA Amendment
              </h3>
              <p className="mt-2">
                Amending the MOA involves a structured legal process as outlined
                by The Companies Act. Steps include preparing board and special
                resolutions, issuing meeting notices, conducting the EGM, filing
                Form MGT-14 and supporting documents with the Registrar, paying
                filing fees, and updating company records after Registrar
                approval.
              </p>

              <h3 className="mt-6 text-lg font-semibold">
                Streamline Your MOA Amendment Process with IndiaFilings
              </h3>
              <p className="mt-2">
                Choosing IndiaFilings ensures a seamless process. Our experts
                guide you through drafting resolutions, preparing explanatory
                statements, handling EGM formalities and filing documents with
                the Registrar of Companies. Contact our experts today to get
                started!
              </p>

              <h3 className="mt-6 text-lg font-semibold">Related Guides</h3>
              <ul className="mt-3 text-sm text-indigo-600 space-y-2">
                <li>Memorandum of Association of Company</li>
                <li>Procedure for Changing MOA Objects Clause</li>
                <li>Changes to MOA of Company</li>
                <li>Form INC-33 – SPICe MOA – Procedure</li>
                <li>MOA of Private Limited Company</li>
                <li>Documents Required For MOA Amendment</li>
              </ul>
            </div>
          </article>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">
                Documents Required For MOA Amendment
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="border-b pb-3">
                  Revised MOA reflecting proposed changes
                </li>
                <li className="border-b pb-3">
                  Certified copy of special resolution
                </li>
                <li className="border-b pb-3">Explanatory statement</li>
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
              FAQ's on MOA Amendment
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
              <li>Memorandum of Association of Company</li>
              <li>Procedure for Changing MOA Objects Clause</li>
              <li>Changes to MOA of Company</li>
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
