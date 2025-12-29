"use client";

/* eslint-disable @next/next/no-img-element */

import Head from "next/head";
import React, { useMemo, useState } from "react";
import {
  Star,
  ChevronDown,
  CheckCircle,
  MessageCircle,
  Grid,
} from "lucide-react";

/* ------------------------------
   Assets & Data
   ------------------------------ */
const ASSETS = {
  logo: "/images/india-logo.jpg",
  hero: "https://img.indiafilings.com/catalog/registered-office-change.png",
  cards: {
    compliance:
      "https://img.indiafilings.com/catalog/company-compliance-india.png",
    dinEKyc: "https://img.indiafilings.com/catalog/din-ekyc.png",
  },
  footerBg: "/images/footer-bg.png",
};

const MCA_DROPDOWN_LINKS = [
  { title: "Company Compliance", href: "/MCA/company-compliance" },
  { title: "Director Change", href: "/MCA/director-change" },
  { title: "AOA Amendment", href: "/MCA/aoa-amendment" },
  { title: "LLP Compliance", href: "/MCA/llp-compliance" },
  { title: "Remove Director", href: "/MCA/remove-director" },
  {
    title: "Authorized Capital Increase",
    href: "/MCA/authorized-capital-increase",
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

/* ------------------------------
   Popular searches list (user-provided, kept single place)
   ------------------------------ */
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

/* ------------------------------
   Small UI pieces
   ------------------------------ */
const RatingInline: React.FC = () => (
  <div className="rating-inline" aria-hidden>
    {[...Array(4)].map((_, i) => (
      <Star key={i} className="star" />
    ))}
    <svg
      className="star"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="16"
      height="16"
    >
      <defs>
        <linearGradient id="halfGrad">
          <stop offset="50%" stopColor="currentColor" />
          <stop offset="50%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <path
        fill="url(#halfGrad)"
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      />
    </svg>
    <span className="rating-count">(5)</span>
  </div>
);

/* ------------------------------
   NavItem for header menu
   ------------------------------ */
interface NavItemProps {
  children: React.ReactNode;
  hasDropdown?: boolean;
  isActive?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}
const NavItem: React.FC<NavItemProps> = ({
  children,
  hasDropdown = false,
  isActive = false,
  onMouseEnter,
  onMouseLeave,
}) => (
  <div
    className="relative"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <button
      type="button"
      suppressHydrationWarning
      className={`text-sm flex items-center gap-1 hover:text-slate-900 ${
        isActive ? "text-slate-900 font-medium" : "text-slate-700"
      }`}
      aria-haspopup={hasDropdown ? "true" : undefined}
    >
      {children}
      {hasDropdown && <ChevronDown className="w-3 h-3" />}
    </button>
  </div>
);

/* ------------------------------
   Header (improved)
   ------------------------------ */
const Header: React.FC = () => {
  const [showMcaDropdown, setShowMcaDropdown] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const primary = [
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
  ];

  return (
    <header className="site-header bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="container max-w-[1200px] mx-auto px-4">
        <div className="header-row flex items-center justify-between h-16">
          <a
            href="/"
            className="brand flex items-center gap-3 min-w-0 shrink-0"
            aria-label="IndiaFilings home"
          >
            <img src={ASSETS.logo} alt="IndiaFilings" className="h-10 w-auto" />
            <span className="brand-text hidden sm:inline-block font-semibold text-slate-800 truncate">
              IndiaFilings
            </span>
          </a>

          <nav
            className="hidden md:flex items-center gap-6 text-sm flex-1 justify-between px-4"
            aria-label="Main"
          >
            <div className="nav-left flex items-center gap-6 min-w-0">
              {primary.map((item) =>
                item === "MCA" ? (
                  <div
                    key={item}
                    className="relative"
                    onMouseEnter={() => setShowMcaDropdown(true)}
                    onMouseLeave={() => setShowMcaDropdown(false)}
                  >
                    <button
                      className={`text-sm flex items-center gap-1 hover:text-slate-900 ${
                        showMcaDropdown
                          ? "text-slate-900 font-medium"
                          : "text-slate-700"
                      }`}
                      aria-haspopup="true"
                    >
                      MCA <ChevronDown className="w-3 h-3" />
                    </button>

                    {showMcaDropdown && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[780px]">
                        <div className="bg-white rounded-lg shadow-xl border border-slate-200 p-6">
                          <div className="grid grid-cols-3 gap-x-6 gap-y-2">
                            {MCA_DROPDOWN_LINKS.map((link) => (
                              <a
                                key={link.href}
                                href={link.href}
                                className="text-sm text-slate-700 hover:text-emerald-600 py-1.5 block"
                              >
                                {link.title}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={item}
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm text-slate-700 hover:text-slate-900 whitespace-nowrap"
                  >
                    {item}
                  </a>
                )
              )}
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <a
                href="/registered-office-change"
                className="hidden lg:inline-block px-3 py-1.5 rounded-md text-sm font-medium bg-emerald-50 text-emerald-700 border border-emerald-100 hover:bg-emerald-100"
                aria-current="page"
              >
                Change Registered Office
              </a>

              <a
                href="/login"
                className="px-4 py-1.5 border border-slate-300 text-sm rounded-md hover:bg-slate-50"
              >
                Login
              </a>
            </div>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <a
              href="/registered-office-change"
              className="text-xs px-2 py-1 rounded bg-emerald-50 text-emerald-700 hidden sm:inline-block"
            >
              Change Office
            </a>

            <button
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((s) => !s)}
              className="p-2 rounded-md border border-slate-200"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                {mobileOpen ? (
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ) : (
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden py-3 border-t border-slate-100">
            <div className="flex flex-col gap-2">
              {[
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
              ].map((item) =>
                item === "MCA" ? (
                  <details key={item} className="px-2 py-1">
                    <summary className="flex items-center justify-between cursor-pointer">
                      MCA <ChevronDown className="w-4 h-4" />
                    </summary>
                    <div className="mt-2 grid grid-cols-1 gap-1 pl-2">
                      {MCA_DROPDOWN_LINKS.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          className="py-1 text-sm rounded hover:bg-slate-50 block"
                        >
                          {l.title}
                        </a>
                      ))}
                    </div>
                  </details>
                ) : (
                  <a
                    key={item}
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="px-2 py-2 text-sm rounded hover:bg-slate-50"
                  >
                    {item}
                  </a>
                )
              )}

              <a
                href="/registered-office-change"
                className="px-2 py-2 text-sm rounded bg-emerald-50 text-emerald-700"
              >
                Change Registered Office
              </a>
              <a
                href="/login"
                className="px-2 py-2 text-sm rounded border border-slate-100 text-center"
              >
                Login
              </a>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .site-header .container {
          width: 100%;
        }
        .header-row {
          gap: 12px;
        }
        .brand-text {
          max-width: 150px;
        }
        nav.nav-left a,
        nav .nav-left .relative > button {
          flex-shrink: 0;
        }
        @media (min-width: 768px) {
          .relative > div {
            z-index: 90;
          }
        }
        @media (max-width: 420px) {
          .brand-text {
            display: none;
          }
          .header-row {
            padding-left: 6px;
            padding-right: 6px;
          }
        }
      `}</style>
    </header>
  );
};

/* ------------------------------
   Footer (improved)
   ------------------------------ */
const Footer: React.FC = () => {
  const bgImagePath = ASSETS.footerBg;

  return (
    <footer className="pt-10 pb-6">
      <div
        className="max-w-screen-2xl mx-auto p-5 lg:p-8 rounded-xl overflow-hidden"
        style={{
          backgroundColor: "#f1f5f9",
          backgroundImage: `radial-gradient(closest-side at 10% 80%, rgba(236, 213, 230, 0.25), transparent 30%),
                            radial-gradient(closest-side at 90% 30%, rgba(226, 235, 247, 0.45), transparent 30%),
                            url("${bgImagePath}")`,
          backgroundSize: "cover, cover, 220%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-7.5 pt-7 pb-10 bg-slate-200 rounded-xl mob-block">
          <div className="card p-5 lg:p-7.5 lg:pt-4 border-0 shadow-none bg-transparent">
            <div className="flex flex-col gap-4">
              <span className="text-lg font-medium leading-none text-slate-950 mb-4">
                IndiaFilings
              </span>
              <a
                className="leading-none hover:text-primary-active"
                href="/about-us"
              >
                About IndiaFilings
              </a>
              <a
                className="leading-none hover:text-primary-active"
                href="/careers"
              >
                Careers
              </a>
              <a
                className="leading-none hover:text-primary-active"
                href="/contact-us"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="card p-5 lg:p-7.5 lg:pt-4 border-0 shadow-none bg-transparent">
            <div className="flex flex-col gap-4">
              <span className="text-lg font-medium leading-none text-slate-950 mb-4">
                Platforms
              </span>
              <a
                className="leading-none hover:text-primary-active"
                href="/search/"
              >
                Business Search
              </a>
              <a
                className="leading-none hover:text-primary-active"
                href="/trademark-search"
              >
                Trademark Search
              </a>
              <a
                className="leading-none hover:text-primary-active"
                href="https://filings.ae/"
              >
                Filings.AE
              </a>
            </div>
          </div>

          <div className="card p-5 lg:p-7.5 lg:pt-4 border-0 shadow-none bg-transparent">
            <div className="flex flex-col gap-4">
              <span className="text-lg font-medium leading-none text-slate-950 mb-4">
                Usage
              </span>
              <a
                className="leading-none hover:text-primary-active"
                href="/termsconditions"
              >
                Terms &amp; Conditions
              </a>
              <a
                className="leading-none hover:text-primary-active"
                href="/privacypolicy"
              >
                Privacy Policy
              </a>
              <a
                className="leading-none hover:text-primary-active"
                href="/refund-policy"
              >
                Refund Policy
              </a>
            </div>
          </div>

          <div className="card p-5 lg:p-7.5 lg:pt-4 border-0 shadow-none bg-transparent">
            <div className="flex flex-col gap-4">
              <span className="text-lg font-medium leading-none text-slate-950 mb-4 hidden md:block">
                &nbsp;
              </span>
              <a
                className="leading-none hover:text-primary-active"
                href="/confidentiality-policy"
              >
                Confidentiality Policy
              </a>
              <a
                className="leading-none hover:text-primary-active"
                href="/disclaimer"
              >
                Disclaimer Policy
              </a>
              <a
                className="leading-none hover:text-primary-active"
                href="/review"
              >
                IndiaFilings Review
              </a>
            </div>
          </div>
        </div>

        <div className="mt-3 pt-3">
          <div className="max-w-screen-2xl mx-auto px-3 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              © 2025 IndiaFilings. All Rights Reserved.
            </p>
            <p className="text-xs text-slate-500">
              Unless otherwise indicated, all materials on these pages are
              copyrighted by IndiaFilings Private Limited. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <a
                className="text-slate-500 hover:text-slate-700 text-sm"
                href="https://www.facebook.com"
                aria-label="facebook"
              >
                FB
              </a>
              <a
                className="text-slate-500 hover:text-slate-700 text-sm"
                href="https://twitter.com"
                aria-label="twitter"
              >
                X
              </a>
              <a
                className="text-slate-500 hover:text-slate-700 text-sm"
                href="https://www.youtube.com"
                aria-label="youtube"
              >
                YT
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* ------------------------------
   Main Page = Registered Office Change ONLY
   ------------------------------ */
export default function RegisteredOfficeChange(): React.ReactElement {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const faqItems = [
    "What is a registered office of a company?",
    "Why might a company need to change its registered office?",
    "What are the key steps for change within same city?",
    "Is shareholder permission required to change registered office?",
    "What documents are needed for registered office change?",
    "How does one change the registered office within same ROC jurisdiction?",
    "What is the process to change across ROC jurisdictions in same state?",
    "How long does the process take?",
  ];

  return (
    <div className="min-h-screen page bg-[#f3f4f6]">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
        <title>Change Registered Office - IndiaFilings</title>
      </Head>

      <Header />

      {/* Hero */}
      <section className="bg-white pt-10 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h1 className="text-5xl font-extrabold mb-4 leading-tight">
                Change Registered{" "}
                <span className="text-blue-600 underline decoration-4 decoration-yellow-300">
                  Office
                </span>
              </h1>
              <p className="text-slate-600 mb-6 max-w-xl">
                Change your company's registered office address with complete
                MCA compliance. We handle all documentation and filings for a
                seamless process.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 text-white">
                    ✓
                  </div>
                  <div>
                    <div className="font-semibold">
                      Fast & Compliant Process
                    </div>
                    <div className="text-sm text-slate-600">
                      End-to-end filings with ROC included
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 text-white">
                    ✓
                  </div>
                  <div>
                    <div className="font-semibold">Expert MCA Guidance</div>
                    <div className="text-sm text-slate-600">
                      Get help from our compliance experts
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 text-white">
                    ✓
                  </div>
                  <div>
                    <div className="font-semibold">
                      Complete Documentation Support
                    </div>
                    <div className="text-sm text-slate-600">
                      Templates & certified copies assistance
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 text-white">
                    ✓
                  </div>
                  <div>
                    <div className="font-semibold">
                      Government Filing Included
                    </div>
                    <div className="text-sm text-slate-600">
                      ROC filings handled by us
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Form card */}
            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
                <div
                  className="absolute -top-4 left-6 right-6 h-4 rounded-t-xl"
                  style={{
                    background: "linear-gradient(90deg, #3b82f6, #06b6d4)",
                  }}
                />

                <div className="space-y-4 mt-3">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Company PAN
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-200 rounded focus:ring-2 focus:ring-blue-400 outline-none"
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
                      className="w-full px-4 py-2 border border-gray-200 rounded bg-gray-50 text-slate-500"
                    />
                    <p className="text-xs text-slate-400 mt-1">
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
                      className="w-full px-4 py-2 border border-gray-200 rounded resize-none bg-gray-50 text-slate-600"
                      placeholder="Filled Automatically"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      New Registered Office Address
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-200 rounded focus:ring-2 focus:ring-blue-400 outline-none"
                      placeholder="Enter new registered office address"
                    />
                  </div>

                  <div className="flex justify-end">
                    <button className="px-5 py-2 rounded bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold shadow">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>

              {/* small shadow card like screenshot */}
              <div className="hidden md:block absolute -right-10 top-8 w-6 h-24 rounded-md opacity-30" />
            </div>
          </div>
        </div>
      </section>

      {/* Main content with left column & right sidebar */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* content column (span 2 on large) */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-bold mb-3">
                  Company Registered Office Change
                </h2>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  A company's registered office is its official address, listed
                  with the Registrar of Companies (ROC), where all formal
                  communications are received. It's a legal requirement for
                  companies to maintain a registered office, and this address
                  must be disclosed in a company's foundational documents, such
                  as the Memorandum of Association (MOA) and Articles of
                  Association (AOA).
                </p>

                <h3 className="text-xl font-semibold mt-4 mb-2">
                  Key Reasons for Changing a Company's Registered Office Address
                </h3>
                <ul className="list-inside space-y-2 text-slate-600 mb-4">
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

                <h3 className="text-xl font-semibold mt-4 mb-2">
                  Four Key Scenarios - Change of Registered Office
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  The company address change can occur within the same city,
                  across cities, or even in a different state or region,
                  depending on the company's needs and strategic decisions.
                </p>

                <h3 className="text-lg font-semibold mt-4 mb-2">
                  Company Registered Office Change Within Local Limits of City,
                  Town, or Village
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  When a company decides for a change within the same city,
                  specific steps must be followed to ensure compliance with the
                  Companies Act and ROC guidelines.
                </p>

                <ul className="space-y-2 ml-4 text-slate-600 mb-4">
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

                <h3 className="text-lg font-semibold mt-4 mb-2">
                  Registered Office Change From One City to Another Within the
                  Same ROC Jurisdiction
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  This involves passing resolutions, holding general meetings
                  (if required), and filing appropriate forms like MGT-14 and
                  INC-22 as applicable.
                </p>

                <h3 className="text-lg font-semibold mt-4 mb-2">
                  Registered Office Change From One ROC Jurisdiction to Another
                  Within the Same State
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Shifting the registered office from one ROC jurisdiction to
                  another within the same state requires a slightly more
                  detailed procedure including affidavits, public notices, and
                  possibly filing INC-23 with the Regional Director.
                </p>

                <h3 className="text-lg font-semibold mt-4 mb-2">
                  Change of Registered Office from One State to Another State
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  This is the most detailed and time-consuming, requiring board
                  resolutions, general meetings, creditor notices, newspaper
                  advertisements and approvals from the Regional Director and
                  ROC.
                </p>

                <div className="mt-6">
                  <h3 className="text-2xl font-bold mb-4">
                    Why IndiaFilings for Registered Office Address Change
                    Compliance?
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    IndiaFilings offers expert guidance and hands-on support
                    throughout the entire process, from board resolution
                    templates to ROC filings, ensuring a smooth and compliant
                    transition.
                  </p>
                </div>
              </div>

              {/* Documents / Steps section */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-2xl font-bold mb-4">
                  Documents Required for Changing Registered Office
                </h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1" />{" "}
                    Certified true copies of board resolution
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1" />{" "}
                    Proof of new registered office address (utility bill not
                    older than 2 months)
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1" />{" "}
                    Minutes of general meeting (if required)
                  </li>
                </ul>
              </div>

              {/* FAQ */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-2xl font-bold mb-4">
                  FAQ's on Registered Office Change - Company
                </h3>
                <div className="divide-y">
                  {faqItems.map((q, idx) => (
                    <div key={idx} className="py-3">
                      <button
                        className="w-full text-left flex justify-between items-center py-3"
                        onClick={() =>
                          setActiveFaq(activeFaq === idx ? null : idx)
                        }
                      >
                        <span className="text-slate-800 font-medium">{q}</span>
                        <span className="text-slate-400">
                          {activeFaq === idx ? "-" : "+"}
                        </span>
                      </button>
                      {activeFaq === idx && (
                        <div className="text-slate-600 mt-2">
                          <p>
                            {/* Placeholder, can be replaced with richer content */}
                            This answer explains {q.toLowerCase()}. For detailed
                            instructions and document templates, contact our
                            experts.
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="py-4">
                    <button className="px-4 py-2 border rounded text-sm text-blue-600">
                      Load More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right sidebar */}
            <aside className="space-y-6">
              <div className="bg-white rounded-lg shadow p-5">
                <h4 className="font-semibold mb-3">Related Guides</h4>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li>
                    <a className="text-blue-600" href="#">
                      Registered Office of a Company
                    </a>
                  </li>
                  <li>
                    <a className="text-blue-600" href="#">
                      Documents Required for Company Registration
                    </a>
                  </li>
                  <li>
                    <a className="text-blue-600" href="#">
                      Advantages of Registering a Company
                    </a>
                  </li>
                  <li>
                    <a className="text-blue-600" href="#">
                      Features of a Company
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow p-4 text-center">
                <img
                  src={ASSETS.cards.compliance}
                  alt="Company Compliance"
                  className="rounded"
                />
                <div className="mt-3 font-medium">Company Compliance</div>
              </div>

              <div className="bg-white rounded-lg shadow p-4 text-center">
                <img
                  src={ASSETS.cards.dinEKyc}
                  alt="DIN eKYC"
                  className="rounded"
                />
                <div className="mt-3 font-medium">DIN eKYC Filing</div>
              </div>

              <div className="bg-white rounded-lg shadow p-4">
                <h4 className="font-semibold mb-3">Popular Searches</h4>
                <div className="flex flex-wrap gap-2">
                  {POPULAR_SEARCHES.slice(0, 18).map((t) => (
                    <span
                      key={t}
                      className="text-xs border rounded px-2 py-1 bg-slate-50 text-slate-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          {/* Tag cloud + footer like area */}
          <div className="mt-8 bg-white rounded-lg p-6">
            <h4 className="font-semibold mb-3">Popular Searches</h4>
            <div className="flex flex-wrap gap-2">
              {POPULAR_SEARCHES.map((t, i) => (
                <span
                  key={t + i}
                  className="text-xs border rounded px-2 py-1 bg-white text-blue-600"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Live Chat CTA */}
      <div
        className="whatsapp-cta"
        role="button"
        aria-label="Live chat with experts"
        onClick={() => alert("Open WhatsApp chat")}
      >
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
          <path
            fill="#fff"
            d="M12 2a10 10 0 00-8.66 14.2L2 22l5.93-1.7A10 10 0 1012 2z"
          />
        </svg>
        <span>Live Chat with Experts</span>
      </div>

      {/* Styles */}
      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: "Poppins", system-ui, -apple-system, "Segoe UI", Roboto,
            "Helvetica Neue", Arial;
          background: #f3f4f6;
          color: #0f172a;
        }

        .page {
          min-height: 100vh;
        }

        /* hero / layout */
        h1,
        h2,
        h3 {
          color: #0b2545;
        }
        .rating-inline {
          display: inline-flex;
          gap: 4px;
          align-items: center;
        }
        .star {
          color: #f59e0b;
        }

        .whatsapp-cta {
          position: fixed;
          right: 18px;
          bottom: 18px;
          background: #16a34a;
          color: white;
          padding: 12px 18px;
          border-radius: 999px;
          display: flex;
          gap: 8px;
          align-items: center;
          box-shadow: 0 10px 30px rgba(22, 163, 74, 0.22);
          cursor: pointer;
          z-index: 100;
        }

        /* layout helpers */
        .max-w-7xl {
          max-width: 88rem;
        }
        .container {
          width: 100%;
        }

        /* responsive adjustments */
        @media (max-width: 1024px) {
          .max-w-7xl {
            padding-left: 16px;
            padding-right: 16px;
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2rem;
          }
          .whatsapp-cta {
            right: 12px;
            bottom: 12px;
            padding: 10px 14px;
          }
        }
      `}</style>
    </div>
  );
}
