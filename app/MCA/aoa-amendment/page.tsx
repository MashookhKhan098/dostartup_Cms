"use client";

/* eslint-disable @next/next/no-img-element */

import React, { useMemo, useState } from "react";
import { Star, ChevronDown, Search, Menu, X } from "lucide-react";

/* ------------------------------
   Assets & Data (merged)
   ------------------------------ */
const ASSETS = {
  logo: "/images/india-logo.jpg",
  hero: "https://img.indiafilings.com/catalog/mca-compliance-simplified-india.webp",
  heroTile: "/images/hero-tile.png",
  promoBlue:
    "https://img.indiafilings.com/catalog/company-compliance-india.png",
  ledgers: "https://img.indiafilings.com/catalog/ledgers.png",
  gstSave: "https://img.indiafilings.com/catalog/gstin.png",
  cards: {
    aoaAmendment: "https://img.indiafilings.com/catalog/aoa-amendment.png",
    companyCompliance:
      "https://img.indiafilings.com/catalog/company-compliance-india.png",
    dinEKyc: "https://img.indiafilings.com/catalog/din-ekyc.png",
  },
  footerBg: "/images/footer-bg.png",
  whatsapp: "/images/whatsapp.svg",
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

const popularTags = [
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
   Small UI components
   ------------------------------ */
const Rating: React.FC = () => (
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
   Header (updated per requested content)
   ------------------------------ */
const Header: React.FC = () => {
  const [showMcaDropdown, setShowMcaDropdown] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Nav items requested to be used exactly
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
  ];

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left: logo and mobile menu icon */}
          <div className="flex items-center gap-4">
            <img src={ASSETS.logo} alt="IndiaFilings" className="h-10" />

            <button
              className="md:hidden p-2 rounded hover:bg-gray-50"
              aria-label="Open menu"
              onClick={() => setMobileOpen((s) => !s)}
            >
              {mobileOpen ? (
                <X className="w-5 h-5 text-gray-700" />
              ) : (
                <Menu className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-6 text-sm"
            aria-label="Main"
          >
            {NAV_ITEMS.slice(0, 3).map((item) => (
              <NavItem key={item}>{item}</NavItem>
            ))}

            <NavItem>GST</NavItem>
            <NavItem>Income Tax</NavItem>

            {/* MCA with dropdown */}
            <NavItem
              hasDropdown
              isActive
              onMouseEnter={() => setShowMcaDropdown(true)}
              onMouseLeave={() => setShowMcaDropdown(false)}
            >
              MCA
              {showMcaDropdown && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[780px]">
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
            </NavItem>

            {NAV_ITEMS.slice(6).map((item) =>
              item === "MCA" ? null : <NavItem key={item}>{item}</NavItem>
            )}

            <button
              type="button"
              suppressHydrationWarning
              className="px-4 py-1.5 border border-slate-300 text-sm rounded-md hover:bg-slate-50"
            >
              Login
            </button>
          </nav>

          {/* Right actions (desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <button
              aria-label="search"
              className="p-2 rounded hover:bg-gray-50"
            >
              <Search className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Mobile nav panel */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-3">
              <nav className="flex flex-col gap-2 text-sm">
                {[
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
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="py-2 block rounded hover:bg-gray-50 px-2"
                  >
                    {item}
                  </a>
                ))}
                <a
                  href="#"
                  className="py-2 block rounded hover:bg-gray-50 px-2 font-medium"
                >
                  Login
                </a>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

/* ------------------------------
   Footer (updated content)
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
        <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-7.5 pt-7 pb-10 bg-slate-200 rounded-xl">
          <div className="p-5 lg:p-7.5">
            <div className="flex flex-col gap-4">
              <span className="text-lg font-medium leading-none text-slate-950 mb-4">
                IndiaFilings
              </span>

              <a
                className="leading-none hover:text-primary-active"
                href="https://www.indiafilings.com/about-us"
                target="_blank"
                rel="noreferrer"
              >
                <span className="flex text-sm text-black leading-5 items-center">
                  About IndiaFilings
                </span>
              </a>

              <a
                className="leading-none hover:text-primary-active"
                href="https://www.indiafilings.com/careers"
                target="_blank"
                rel="noreferrer"
              >
                <span className="flex text-sm text-black leading-5 items-center">
                  Careers
                </span>
              </a>

              <a
                className="leading-none hover:text-primary-active"
                href="https://www.indiafilings.com/contact-us"
                target="_blank"
                rel="noreferrer"
              >
                <span className="flex text-sm text-black leading-5 items-center">
                  Contact Us
                </span>
              </a>
            </div>
          </div>

          <div className="p-5 lg:p-7.5">
            <div className="flex flex-col gap-4">
              <span className="text-lg font-medium leading-none text-slate-950 mb-4">
                Platforms
              </span>

              <a
                className="leading-none hover:text-primary-active"
                href="https://www.indiafilings.com/search/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="flex text-sm text-black leading-5 items-center">
                  Business Search
                </span>
              </a>

              <a
                className="leading-none hover:text-primary-active"
                href="https://www.indiafilings.com/trademark-search"
                target="_blank"
                rel="noreferrer"
              >
                <span className="flex text-sm text-black leading-5 items-center">
                  Trademark Search
                </span>
              </a>

              <a
                className="leading-none hover:text-primary-active"
                href="https://filings.ae/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="flex text-sm text-black leading-5 items-center">
                  Filings.AE for UAE
                </span>
              </a>
            </div>
          </div>

          <div className="p-5 lg:p-7.5">
            <div className="flex flex-col gap-4">
              <span className="text-lg font-medium leading-none text-slate-950 mb-4">
                Usage
              </span>

              <a
                className="leading-none hover:text-primary-active"
                href="https://www.indiafilings.com/termsconditions"
                target="_blank"
                rel="noreferrer"
              >
                <span className="flex text-sm text-black leading-5 items-center">
                  Terms &amp; Conditions
                </span>
              </a>

              <a
                className="leading-none hover:text-primary-active"
                href="https://www.indiafilings.com/privacypolicy"
                target="_blank"
                rel="noreferrer"
              >
                <span className="flex text-sm text-black leading-5 items-center">
                  Privacy Policy
                </span>
              </a>

              <a
                className="leading-none hover:text-primary-active"
                href="https://www.indiafilings.com/refund-policy"
                target="_blank"
                rel="noreferrer"
              >
                <span className="flex text-sm text-black leading-5 items-center">
                  Refund Policy
                </span>
              </a>
            </div>
          </div>

          <div className="p-5 lg:p-7.5">
            <div className="flex flex-col gap-4">
              <span className="text-lg font-medium leading-none text-slate-950 mb-4 hidden md:block">
                &nbsp;
              </span>

              <a
                className="leading-none hover:text-primary-active"
                href="https://www.indiafilings.com/confidentiality-policy"
                target="_blank"
                rel="noreferrer"
              >
                <span className="flex text-sm text-black leading-5 items-center">
                  Confidentiality Policy
                </span>
              </a>

              <a
                className="leading-none hover:text-primary-active"
                href="https://www.indiafilings.com/disclaimer"
                target="_blank"
                rel="noreferrer"
              >
                <span className="flex text-sm text-black leading-5 items-center">
                  Disclaimer Policy
                </span>
              </a>

              <a
                className="leading-none hover:text-primary-active"
                href="https://www.indiafilings.com/review"
                target="_blank"
                rel="noreferrer"
              >
                <span className="flex text-sm text-black leading-5 items-center">
                  IndiaFilings Review
                </span>
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
   Main Page (AOA Amendment content + merged styles)
   ------------------------------ */
export default function AOAAmendmentMergedPage(): React.ReactElement {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [companyInput, setCompanyInput] = useState("");
  const [gstChecked, setGstChecked] = useState(false);
  const [pan, setPan] = useState("");
  const [company, setCompany] = useState("");

  const faqItems = [
    "What are the Articles of Association (AOA)?",
    "When must a company register its AOA?",
    "Why might a company amend its AOA?",
    "What is the importance of AOA Amendment?",
    "What must a company do after altering its AOA?",
    "How does IndiaFilings assist with AOA Amendments?",
    "What is included in the AOA?",
    "What are the legal guidelines for AOA Amendment?",
    "What is entrenchment in the context of AOA?",
    "What is the first step in the AOA Amendment process?",
  ];

  const basicBullets = useMemo(
    () => [
      "Accountant",
      "MCA Compliance",
      "ADT-1",
      "ITR-6 Filing",
      "DIN eKYC (for 2 Directors)",
      "Commencement of Business",
      "LEDGERS Accounting Software",
    ],
    []
  );

  // move the article items into component scope (fixes TS 'possibly undefined' and JS-in-JSX)
  const articleItems = useMemo(
    () => [
      [
        "Directors' Roles:",
        "Rules about what the directors do and how they are appointed or removed.",
      ],
      [
        "Shareholder Rights:",
        "Explains shareholder rights like voting, getting dividends, and selling shares.",
      ],
      [
        "Board Meetings:",
        "Guidelines for how meetings of the directors are held.",
      ],
      [
        "General Meetings:",
        "Rules for big company meetings, including how decisions are voted on.",
      ],
    ],
    []
  );

  return (
    <div className="page">
      <Header />

      <main>
        {/* Top hero banner (from compliance design) */}
        <section className="site-banner">
          <div className="banner-inner">
            <div className="banner-cta">
              <div className="lead-eyebrow">MCA Compliance</div>
              <h1 className="lead-title">
                AOA Amendment — Articles of Association Changes Made Simple
              </h1>
              <p className="lead-sub">
                Amend your Articles of Association with guidance from experts —
                board meetings, resolutions and MCA filing handled end-to-end.
              </p>

              <form
                className="hero-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(
                    `Demo requested for "${companyInput || "Unnamed company"}"`
                  );
                }}
              >
                <input
                  id="company-name"
                  className="hero-input"
                  placeholder="ENTER COMPANY NAME"
                  aria-label="Enter company name"
                  value={companyInput}
                  onChange={(e) => setCompanyInput(e.target.value)}
                />
                <button type="submit" className="hero-button">
                  Book Demo
                </button>
              </form>
            </div>

            <div className="banner-media">
              <div className="media-frame">
                <img src={ASSETS.hero} alt="MCA hero" />
                <div className="media-badge">MCA Compliance Simplified</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main container with AOA content and sidebar */}
        <section className="main-container">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid grid-cols-12 gap-8">
              {/* Left column */}
              <section className="col-span-12 lg:col-span-8">
                <div className="flex flex-col lg:flex-row gap-6 items-start">
                  {/* Left box - image */}
                  <div className="w-full lg:w-1/2 bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                    <img
                      src={ASSETS.heroTile}
                      alt="hero"
                      className="w-full h-72 object-cover block"
                    />
                  </div>

                  {/* Right box - small product card */}
                  <div className="w-full lg:w-1/2 bg-white rounded-lg border border-gray-200 p-6 shadow-sm flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl font-semibold">AOA Amendment</h2>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center gap-1 text-yellow-400 text-sm">
                          ★★★★★
                        </div>
                        <div className="text-sm text-slate-500">(39)</div>
                      </div>

                      <p className="text-sm text-slate-600 mt-4">
                        AOA Amendment for a Private Limited Company &amp; OPC.
                      </p>

                      <div className="mt-5 border rounded-md p-4 border-dashed border-[#f4e6df] bg-[#fffaf8]">
                        <div className="text-xs text-green-800 font-semibold bg-green-50 inline-flex px-2 py-1 rounded">
                          1 Exclusive Offers
                        </div>
                        <h4 className="font-semibold mt-3">Basic</h4>
                        <ul className="text-sm text-slate-600 mt-2 list-disc list-inside">
                          <li>Application Filing in MCA</li>
                          <li>Provide Updated AOA</li>
                        </ul>
                        <div className="mt-4">
                          <button className="bg-white border border-green-600 text-green-700 px-3 py-1 rounded">
                            ADD
                          </button>
                        </div>
                      </div>

                      <div className="mt-4 text-sm">
                        <a className="text-blue-600 underline">
                          Terms and conditions
                        </a>
                        <span className="mx-4">|</span>
                        <a className="text-blue-600 underline">
                          Refer a Friend
                        </a>
                      </div>
                    </div>

                    <div className="mt-6 border-t pt-4">
                      <h5 className="text-sm font-semibold">
                        Offers and discounts
                      </h5>
                      <div className="mt-3 p-3 rounded flex items-center gap-3 border border-gray-100 bg-[#f3fcf7]">
                        <img
                          src={ASSETS.ledgers}
                          alt="ledgers"
                          className="h-8 w-8"
                        />
                        <div className="text-sm">
                          <div className="font-semibold">
                            LEDGERS - Compliance Platform
                          </div>
                          <div className="text-xs text-slate-600">
                            Invoicing, GST Filing, Banking and Payroll
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main article */}
                <article className="mt-10 space-y-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
                    <h1 className="text-2xl font-bold mb-4">
                      Articles of Association (AOA) Amendment
                    </h1>
                    <p className="text-sm text-slate-600 mb-6">
                      The Articles of Association (AOA) of a company outline the
                      rules and regulations that dictate its internal
                      management. These articles specify the procedures for
                      managing various aspects and operations within the
                      company. A company article has to be registered at the
                      time of company incorporation.
                    </p>
                  </div>

                  <div className="bg-[#fbfdff] border border-gray-100 rounded-lg p-6 shadow-sm">
                    <h2 className="text-xl font-semibold mb-3">
                      Article of Association
                    </h2>
                    <p className="text-sm text-slate-600 mb-4">
                      The Articles of Association (AoA) is a crucial document
                      for a company's internal administration and governance. It
                      contains the rules, regulations, and bylaws that govern
                      the company's internal management and operations.
                    </p>

                    <ul className="space-y-3">
                      {articleItems.map((item, idx) => (
                        <li key={idx} className="flex gap-3 items-start">
                          <div className="mt-1 text-blue-600">✓</div>
                          <div>
                            <strong>{item[0]}</strong> {item[1]}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h2 className="text-xl font-semibold mb-3">
                      AOA Amendment
                    </h2>
                    <p className="text-sm text-slate-600 mb-6">
                      AOA Amendment refers to the process of changing the
                      Articles of Association of a company. Amending the AOA
                      allows a company to update or change these rules to adapt
                      to new circumstances, comply with legal requirements, or
                      realign with the company's evolving objectives and
                      strategies.
                    </p>

                    <h3 className="font-semibold mb-2">
                      When a Company Can Amend AOA?
                    </h3>
                    <p className="text-sm text-slate-600 mb-4">
                      A company can alter its Articles of Association (AoA)
                      under various circumstances, including:
                    </p>

                    <div className="grid grid-cols-1 gap-4">
                      <div className="p-4 rounded bg-[#f8fafc] border border-gray-100">
                        <strong>
                          Conversion of a Private Company into a Public Company
                        </strong>
                        <p className="text-sm text-slate-600 mt-2">
                          When a private company decides to become a public
                          company, it often needs to make significant changes to
                          its AoA to comply with the additional regulatory
                          requirements applicable to public companies.
                        </p>
                      </div>

                      <div className="p-4 rounded bg-[#fffaf8] border border-gray-100">
                        <strong>
                          Conversion of Public Company into Private Company
                        </strong>
                        <p className="text-sm text-slate-600 mt-2">
                          Conversely, if a public company intends to become a
                          private company, it must amend its AoA to align with
                          the reduced regulatory requirements for private
                          companies.
                        </p>
                      </div>

                      <div className="p-4 rounded bg-[#f3fcf7] border border-gray-100">
                        <strong>
                          Alteration in any of the Existing Articles
                        </strong>
                        <ul className="list-disc list-inside text-sm text-slate-600 mt-2 space-y-1">
                          <li>
                            <strong>Change in Business Objectives:</strong> When
                            the company's business objectives or activities
                            evolve or expand.
                          </li>
                          <li>
                            <strong>Change in Share Capital:</strong> If the
                            company intends to increase or decrease its share
                            capital.
                          </li>
                          <li>
                            <strong>Change in Name:</strong> When a company
                            decides to change its name.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h2 className="text-xl font-semibold">
                      Key Requirements for Changing a Company's AoA
                    </h2>
                    <ul className="list-inside space-y-3 text-sm text-slate-600 mt-4">
                      <li>
                        <strong>Legal Guidelines:</strong> The changes need to
                        be in line with the rules set by the Companies Act and
                        the company's Memorandum.
                      </li>
                      <li>
                        <strong>Special Agreement for Entrenchment:</strong> If
                        the company wants to add special, hard-to-change rules
                        (entrenchment provisions), all members of a private
                        company must agree, or a majority vote is needed in a
                        public company.
                      </li>
                      <li>
                        <strong>Approval for Changing Company Type:</strong> If
                        the company is switching from public to private or vice
                        versa, it must get a majority agreement (Special
                        Resolution).
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#fbfdff] border border-gray-100 rounded-lg p-6 shadow-sm">
                    <h2 className="text-xl font-semibold mb-3">
                      Procedure for AOA Amendment
                    </h2>
                    <p className="text-sm text-slate-600 mb-4">
                      A company may modify, delete or add any article in the
                      following manner:
                    </p>

                    <div className="space-y-4 text-sm text-slate-600">
                      <div>
                        <h3 className="font-semibold">
                          Step 1: Board of Directors Meeting
                        </h3>
                        <ul className="list-inside mt-2 space-y-2">
                          <li>
                            Notice Issuance: Send a notice of the Board Meeting
                            to all Directors at least 7 days before the meeting
                            date.
                          </li>
                          <li>
                            Attach Supporting Documents: Include the meeting's
                            agenda, notes and draft resolution with the notice.
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold">
                          Step 2: Convene General Meeting
                        </h3>
                        <ul className="list-inside mt-2 space-y-2">
                          <li>
                            Issue a written notice for the General Meeting at
                            least 21 days before the scheduled meeting date.
                          </li>
                          <li>
                            Conduct the General Meeting and pass a Special
                            Resolution for the alteration of the Articles.
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold">
                          Step 3: File Form MGT-14 with ROC
                        </h3>
                        <p className="mt-2">
                          Submit Form MGT-14 to the Registrar of Companies (ROC)
                          within 30 days after the Special Resolution is passed.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h3 className="font-semibold">
                      Streamlining AOA Amendments with IndiaFilings
                    </h3>
                    <p className="text-sm text-slate-600 mt-2">
                      IndiaFilings offers comprehensive assistance in the
                      amendment of the Articles of Association (AOA). Our expert
                      team guides businesses through the entire process,
                      ensuring that all modifications comply with the Companies
                      Act. Contact us today to ensure your AOA Amendments are
                      handled efficiently.
                    </p>
                  </div>
                </article>

                {/* FAQ section */}
                <section className="mt-8 bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">
                    FAQ's on AOA Amendment
                  </h3>
                  <div className="divide-y">
                    {faqItems.map((q, i) => (
                      <div key={i} className="py-4">
                        <button
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                          className="w-full text-left flex items-center justify-between"
                        >
                          <span className="text-sm">{q}</span>
                          <span className="text-xl">
                            {openFaq === i ? "−" : "+"}
                          </span>
                        </button>
                        {openFaq === i && (
                          <div className="mt-3 text-sm text-slate-600">
                            This is the answer to the FAQ. Replace with actual
                            content as needed.
                          </div>
                        )}
                      </div>
                    ))}

                    <div className="mt-4">
                      <button className="text-xs px-3 py-2 border rounded bg-white text-blue-600">
                        Load More
                      </button>
                    </div>
                  </div>
                </section>
              </section>

              {/* Right sidebar */}
              <aside className="col-span-12 lg:col-span-4">
                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm sticky top-24">
                  <div className="text-center py-6">
                    <div className="text-slate-700 text-lg font-semibold">
                      Your cart is empty
                    </div>
                    <p className="text-sm text-slate-500 mt-3">
                      Browse our services and add some services in cart!
                    </p>
                    <div className="mt-6 space-y-3 text-left">
                      <input
                        className="w-full border rounded px-3 py-2 text-sm"
                        placeholder="Name"
                      />
                      <input
                        className="w-full border rounded px-3 py-2 text-sm"
                        placeholder="Email"
                      />

                      <div className="flex gap-2 items-center">
                        <select
                          className="border rounded px-3 py-2 text-sm flex-shrink-0 w-20 md:w-24"
                          aria-label="country code"
                        >
                          <option>+91</option>
                        </select>
                        <input
                          className="flex-1 min-w-0 border rounded px-3 py-2 text-sm"
                          placeholder="Phone"
                          inputMode="tel"
                        />
                      </div>

                      <label className="flex items-center gap-2 text-sm">
                        <input
                          type="checkbox"
                          checked={gstChecked}
                          onChange={() => setGstChecked((s) => !s)}
                        />{" "}
                        Enter GSTIN to get 18% GST Credit
                      </label>
                      <button className="w-full bg-green-500 text-white rounded py-2 mt-2">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-6">
                  <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                    <img
                      src={ASSETS.cards.companyCompliance}
                      alt="comp"
                      className="w-full rounded"
                    />
                    <div className="mt-3 font-semibold">Company Compliance</div>
                  </div>

                  <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                    <img
                      src={ASSETS.cards.dinEKyc}
                      alt="ekyc"
                      className="w-full rounded"
                    />
                    <div className="mt-3 font-semibold">DIN eKYC Filing</div>
                  </div>
                </div>

                <div className="mt-8 bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                  <h4 className="font-semibold">Related Guides</h4>
                  <ul className="mt-3 space-y-2 text-sm text-blue-600">
                    <li>
                      Comprehensive Guide to Articles of Association (AOA)
                    </li>
                    <li>eAOA – Form INC-34 – SPICe AOA</li>
                    <li>Articles of Association</li>
                  </ul>
                </div>
              </aside>
            </div>

            {/* Popular searches (updated to include all memorized tags) */}
            <section className="mt-10 bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h4 className="font-semibold mb-4">Popular Searches</h4>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((t) => (
                  <span
                    key={t}
                    className="text-xs border px-3 py-1 rounded bg-[#f8fafc] text-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </section>

        {/* Floating WhatsApp CTA */}
        <div
          className="whatsapp-cta"
          role="button"
          aria-label="Live chat with experts"
          suppressHydrationWarning
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
      </main>

      <Footer />

      {/* ---------- Styles (merged + updated) ---------- */}
      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: system-ui, -apple-system, "Segoe UI", Roboto,
            "Helvetica Neue", Arial;
          background: linear-gradient(
            135deg,
            #f5f7ff 0%,
            #fdf6ff 40%,
            #f3fbff 100%
          );
          color: #0f172a;
        }

        .page {
          min-height: 100vh;
        }

        /* Hero */
        .site-banner {
          padding: 28px 16px 44px;
        }
        .banner-inner {
          max-width: 1160px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 32px;
          align-items: center;
        }
        .banner-cta {
          color: #0b2545;
          padding: 30px;
        }
        .lead-eyebrow {
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #0b5cf0;
          font-size: 13px;
          font-weight: 600;
        }
        .lead-title {
          font-size: 36px;
          margin: 10px 0;
          color: #0b2545;
          line-height: 1.15;
        }
        .lead-sub {
          color: #475569;
          font-size: 15px;
          line-height: 1.6;
        }
        .hero-form {
          margin-top: 18px;
          display: flex;
          gap: 12px;
          align-items: center;
        }
        .hero-input {
          flex: 1;
          background: #fff;
          color: #0b2545;
          border-radius: 999px;
          padding: 12px 16px;
          border: 1px solid #e6eef8;
          font-size: 14px;
          box-shadow: 0 6px 18px rgba(11, 37, 85, 0.04);
        }
        .hero-button {
          border-radius: 999px;
          background: #facc15;
          color: #081433;
          border: none;
          padding: 12px 20px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 8px 20px rgba(250, 204, 21, 0.15);
        }

        .banner-media .media-frame {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          background: #000;
          padding: 12px;
        }
        .media-frame img {
          width: 100%;
          height: 420px;
          object-fit: contain;
          display: block;
        }
        .media-badge {
          position: absolute;
          left: 20px;
          bottom: 20px;
          background: #059669;
          color: white;
          padding: 10px 16px;
          border-radius: 999px;
          font-weight: 600;
        }

        /* main container */
        .main-container {
          padding-bottom: 30px;
        }

        /* Pricing-like card styles reused */
        .rating-inline {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .rating-inline .star {
          width: 16px;
          height: 16px;
          color: #f59e0b;
        }
        .rating-count {
          color: #64748b;
          font-size: 12px;
        }

        /* WhatsApp CTA */
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
        .whatsapp-cta svg {
          flex: 0 0 auto;
        }

        /* Article card spacing & utility */
        .bg-white {
          background: white;
        }
        .border {
          border: 1px solid #e6eef8;
        }
        .rounded-lg {
          border-radius: 12px;
        }
        .p-6 {
          padding: 1.5rem;
        }
        .p-8 {
          padding: 2rem;
        }
        .shadow-sm {
          box-shadow: 0 6px 16px rgba(11, 37, 85, 0.03);
        }

        /* responsive adjustments */
        @media (max-width: 1024px) {
          .banner-inner {
            grid-template-columns: 1fr;
            padding: 20px;
          }
        }
        @media (max-width: 768px) {
          .hero-form {
            flex-direction: column;
          }
          .hero-button {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
