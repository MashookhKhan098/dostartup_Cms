"use client";

import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import SidebarCart from "../components/SidebarCart";
import Footer from "../components/Footer";
import PopularSearches from "../components/PopularSearches";

const ASSETS = {
  logo: "/images/india-logo.jpg",
  hero: "https://img.dostartup.com/catalog/registered-office-change.png",
  cards: {
    compliance: "https://img.dostartup.com/catalog/company-compliance-india.png",
    dinEKyc: "https://img.dostartup.com/catalog/din-ekyc.png",
  },
  footerBg: "/images/footer-bg.png",
  ledgers: "https://img.dostartup.com/catalog/ledgers.png",
  whatsapp: "/images/whatsapp.png",
  cartIcon: "/images/cart-icon.svg",
  indiaFlag: "/images/india-flag.png",
  adRight1: "/images/company-compliance.jpg",
  dinEkyc: "/images/din.jpg",
};

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

export default function RegisteredOfficeChange() {
  return (
    <div className="min-h-screen bg-[#F4F3EE] font-sans text-gray-800">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-[#F4F3EE] py-5">
        <div className="max-w-[1180px] mx-auto px-6 text-sm text-gray-500">
          Home / MCA Services /{" "}
          <span className="text-amber-700 font-medium">
            Registered Office Change
          </span>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[1180px] mx-auto px-6 py-3">
        {/* Hero Section */}
        <section className="bg-[#F4F3EE] rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="flex flex-col lg:flex-row">
            {/* Left Content */}
            <div className="lg:w-1/2 p-8 lg:p-10">
              <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 mb-4">
                <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
                <span className="text-xs font-medium text-amber-700">
                  REGISTERED OFFICE CHANGE
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                Change Registered{" "}
                <span className="text-amber-600 underline decoration-4 decoration-amber-300">
                  Office
                </span>
              </h1>
              <p className="text-gray-600 mb-6 max-w-xl">
                Change your company's registered office address with complete
                MCA compliance. We handle all documentation and filings for a
                seamless process.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">
                      Fast & Compliant Process
                    </div>
                    <div className="text-sm text-gray-600">
                      End-to-end filings with ROC included
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">
                      Expert MCA Guidance
                    </div>
                    <div className="text-sm text-gray-600">
                      Get help from our compliance experts
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">
                      Complete Documentation Support
                    </div>
                    <div className="text-sm text-gray-600">
                      Templates & certified copies assistance
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">
                      Government Filing Included
                    </div>
                    <div className="text-sm text-gray-600">
                      ROC filings handled by us
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:w-1/2 p-8 lg:p-10 bg-gradient-to-br from-amber-50 to-amber-100">
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                <div
                  className="h-1.5 w-full rounded-t-xl mb-4"
                  style={{
                    background: "linear-gradient(90deg, #b45309, #d97706)",
                  }}
                />

                <div className="space-y-4 mt-3">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Company PAN
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-amber-600"
                      placeholder="Enter PAN"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="Filled Automatically"
                      className="w-full px-4 py-2 border border-gray-200 rounded bg-[#F4F3EE] text-gray-600"
                    />
                    <p className="text-xs text-gray-400 mt-1">
                      This field will auto-populate after entering company
                      details above.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Current Registered Office Address
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-200 rounded resize-none bg-[#F4F3EE] text-gray-600"
                      placeholder="Filled Automatically"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      New Registered Office Address
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-amber-600"
                      placeholder="Enter new registered office address"
                    />
                  </div>

                  <div className="flex justify-end">
                    <button className="px-6 py-2 rounded bg-gradient-to-r from-amber-700 to-amber-800 text-white font-semibold shadow hover:from-amber-800 hover:to-amber-900 transition-all">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main content with left column & right sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* content column (span 2 on large) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Article */}
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h2 className="text-2xl font-bold mb-3 text-slate-900">
                Company Registered Office Change
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                A company's registered office is its official address, listed
                with the Registrar of Companies (ROC), where all formal
                communications are received. It's a legal requirement for
                companies to maintain a registered office, and this address
                must be disclosed in a company's foundational documents, such
                as the Memorandum of Association (MOA) and Articles of
                Association (AOA).
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2 text-slate-900">
                Key Reasons for Changing a Company's Registered Office Address
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
                <li>
                  Better Location: Moving closer to customers or suppliers.
                </li>
                <li>
                  Growth and Expansion: Consolidating offices or accommodating
                  team growth.
                </li>
                <li>Cost Savings: Lower rent, taxes, or operating costs.</li>
                <li>
                  Legal Compliance: Requirements to be based in certain areas.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-4 mb-2 text-slate-900">
                Four Key Scenarios - Change of Registered Office
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                The company address change can occur within the same city,
                across cities, or even in a different state or region,
                depending on the company's needs and strategic decisions.
              </p>

              <h3 className="text-lg font-semibold mt-4 mb-2 text-slate-900">
                Company Registered Office Change Within Local Limits of City,
                Town, or Village
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                When a company decides for a change within the same city,
                specific steps must be followed to ensure compliance with the
                Companies Act and ROC guidelines.
              </p>

              <ul className="space-y-2 ml-4 text-gray-600 mb-4 list-disc">
                <li>
                  <strong>Board of Directors Meeting:</strong> Convene a
                  meeting and pass a board resolution to approve the shift.
                </li>
                <li>
                  <strong>Filing with ROC - INC-22:</strong> File INC-22
                  within the prescribed timeline with supporting documents
                  such as utility bill and address proof.
                </li>
                <li>
                  <strong>Updating Company Records:</strong> After ROC
                  approval, update letterheads, banners and other official
                  records.
                </li>
              </ul>

              <h3 className="text-lg font-semibold mt-4 mb-2 text-slate-900">
                Registered Office Change From One City to Another Within the
                Same ROC Jurisdiction
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                This involves passing resolutions, holding general meetings
                (if required), and filing appropriate forms like MGT-14 and
                INC-22 as applicable.
              </p>

              <h3 className="text-lg font-semibold mt-4 mb-2 text-slate-900">
                Registered Office Change From One ROC Jurisdiction to Another
                Within the Same State
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Shifting the registered office from one ROC jurisdiction to
                another within the same state requires a slightly more
                detailed procedure including affidavits, public notices, and
                possibly filing INC-23 with the Regional Director.
              </p>

              <h3 className="text-lg font-semibold mt-4 mb-2 text-slate-900">
                Change of Registered Office from One State to Another State
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                This is the most detailed and time-consuming, requiring board
                resolutions, general meetings, creditor notices, newspaper
                advertisements and approvals from the Regional Director and
                ROC.
              </p>

              <div className="mt-6">
                <h3 className="text-2xl font-bold mb-4 text-slate-900">
                  Why DoStartup for Registered Office Address Change
                  Compliance?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  DoStartup offers expert guidance and hands-on support
                  throughout the entire process, from board resolution
                  templates to ROC filings, ensuring a smooth and compliant
                  transition.
                </p>
              </div>
            </div>

            {/* Documents / Steps section */}
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">
                Documents Required for Changing Registered Office
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <span>Certified true copies of board resolution</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <span>Proof of new registered office address (utility bill not older than 2 months)</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <span>Minutes of general meeting (if required)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right sidebar */}
          <aside className="space-y-6">
            <SidebarCart />

            <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-200">
              <h4 className="font-semibold mb-3 text-slate-900">
                Related Guides
              </h4>
              <ul className="text-sm space-y-2">
                <li>
                  <a className="text-amber-700 hover:text-amber-800 hover:underline cursor-pointer">
                    Registered Office of a Company
                  </a>
                </li>
                <li>
                  <a className="text-amber-700 hover:text-amber-800 hover:underline cursor-pointer">
                    Documents Required for Company Registration
                  </a>
                </li>
                <li>
                  <a className="text-amber-700 hover:text-amber-800 hover:underline cursor-pointer">
                    Advantages of Registering a Company
                  </a>
                </li>
                <li>
                  <a className="text-amber-700 hover:text-amber-800 hover:underline cursor-pointer">
                    Features of a Company
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4 text-center border border-gray-200">
              <img
                src={ASSETS.cards.compliance}
                alt="Company Compliance"
                className="rounded w-full"
              />
              <div className="mt-3 font-medium text-slate-900">
                Company Compliance
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4 text-center border border-gray-200">
              <img
                src={ASSETS.cards.dinEKyc}
                alt="DIN eKYC"
                className="rounded w-full"
              />
              <div className="mt-3 font-medium text-slate-900">
                DIN eKYC Filing
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
              <h4 className="font-semibold mb-3 text-slate-900">
                Popular Searches
              </h4>
              <div className="flex flex-wrap gap-2">
                {POPULAR_SEARCHES.slice(0, 18).map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 border border-gray-200 rounded bg-[#F4F3EE] text-gray-700 hover:border-amber-300 hover:text-amber-700 cursor-pointer transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <DynamicPricingSection category="registered-office-change" />
        <FAQAccordion category="registered-office-change" />
      </main>

      <PopularSearches />
      <Footer />

      {/* WhatsApp CTA */}
      <div className="fixed right-6 bottom-6 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-4 py-3 rounded-full shadow-2xl flex items-center gap-3 z-50 hover:from-amber-700 hover:to-amber-800 transition-all cursor-pointer">
        <img src={ASSETS.whatsapp} alt="wa" className="w-5 h-5" />
        <span className="font-semibold text-sm">Live Chat with Experts</span>
      </div>
    </div>
  );
}
