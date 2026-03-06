"use client";

/* eslint-disable @next/next/no-img-element */

import Head from "next/head";
import React, { useMemo, useState } from "react";
import {
  Star,
  ChevronDown,
  Search,
  MessageCircle,
  CheckCircle,
  Zap,
  Grid,
} from "lucide-react";

/* ------------------------------
   Assets & Data (extracted + reused)
   ------------------------------ */
const ASSETS = {
  logo: "/images/india-logo.jpg",
  hero: "https://img.indiafilings.com/catalog/mca-compliance-simplified-india.webp",
  promoBlue:
    "https://img.indiafilings.com/catalog/company-compliance-india.png",
  ledgers: "https://img.indiafilings.com/catalog/ledgers.png",
  gstSave: "https://img.indiafilings.com/catalog/gstin.png",
  cards: {
    companyCompliance:
      "https://img.indiafilings.com/catalog/company-compliance-india.png",
    dinEKyc: "https://img.indiafilings.com/catalog/din-ekyc.png",
    directorChange: "https://img.indiafilings.com/catalog/director-change.png",
    removeDirector: "https://img.indiafilings.com/catalog/remove-director.png",
    shareTransfer: "https://img.indiafilings.com/catalog/share-transfer.png",
    moaAmendment: "https://img.indiafilings.com/catalog/moa-amendment.png",
    officeChange:
      "https://img.indiafilings.com/catalog/registered-office-change.png",
    capitalIncrease:
      "https://img.indiafilings.com/catalog/authorized-capital-increase.png",
    form10bd: "https://img.indiafilings.com/catalog/form-10bd-filing.png",
    llpForm11: "https://img.indiafilings.com/catalog/llp-form-11.png",
    strikeOffRevival:
      "https://img.indiafilings.com/catalog/strike-off-revival.png",
    fdiRbi: "https://img.indiafilings.com/catalog/fdi-filing-rbi.png",
    rera: "https://img.indiafilings.com/catalog/rera.png",
    opcCompliance: "https://img.indiafilings.com/catalog/opc-compliance.png",
    dpt3: "https://img.indiafilings.com/catalog/dpt3.png",
    aoaAmendment: "https://img.indiafilings.com/catalog/aoa-amendment.png",
    lei: "https://img.indiafilings.com/catalog/lei.png",
    chargeCreate: "https://img.indiafilings.com/catalog/charge-creation.png",
    chargeSatisfaction:
      "https://img.indiafilings.com/catalog/charge-satisfaction.png",
    dematShares: "https://img.indiafilings.com/catalog/demat-shares.png",
    businessPlan: "https://img.indiafilings.com/catalog/business-plan.png",
    professionalTax:
      "https://img.indiafilings.com/catalog/professional-tax-return.png",
  },
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

/* ------------------------------
   Small components
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
   Header component (mobile fixes + no overlap)
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
          {/* Logo */}
          <a
            href="/"
            className="brand flex items-center gap-3 min-w-0 shrink-0"
            aria-label="IndiaFilings"
          >
            <img
              src={ASSETS.logo}
              alt="IndiaFilings"
              className="h-10 w-auto flex-shrink-0"
            />
            <span className="brand-text hidden sm:inline-block font-semibold text-slate-800 truncate">
              IndiaFilings
            </span>
          </a>

          {/* Desktop nav */}
          <nav
            className="nav-hidden md:flex items-center gap-6 text-sm flex-1 justify-between px-4"
            aria-label="Main"
          >
            <div
              className="nav-left flex items-center gap-6 min-w-0"
              style={{ overflow: "visible" }}
            >
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

          {/* Mobile actions */}
          <div className="mobile-actions md:hidden flex items-center gap-2">
            <button
              aria-label="Open menu"
              onClick={() => setMobileOpen((s) => !s)}
              className="p-2 rounded-md border border-slate-200 bg-white"
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

        {/* Mobile panel */}
        {mobileOpen && (
          <div
            className="mobile-panel md:hidden mt-2 border-t border-slate-100 pt-3 pb-4"
            role="dialog"
            aria-modal="true"
          >
            <div className="mobile-list max-h-[58vh] overflow-auto px-2 -mr-2">
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
                  <details key={item} className="mb-1">
                    <summary className="flex items-center justify-between px-3 py-2 rounded hover:bg-slate-50 cursor-pointer">
                      <span className="text-sm">{item}</span>
                      <ChevronDown className="w-4 h-4" />
                    </summary>
                    <div className="pl-4 pr-3 py-1">
                      {MCA_DROPDOWN_LINKS.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          className="block py-2 text-sm rounded hover:bg-slate-50"
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
                    className="block px-3 py-2 text-sm rounded hover:bg-slate-50"
                  >
                    {item}
                  </a>
                )
              )}

              <div className="mt-2 border-t border-slate-100 pt-2 px-3">
                <a
                  href="/registered-office-change"
                  className="block px-3 py-2 text-sm rounded bg-emerald-50 text-emerald-700 mb-2"
                >
                  Change Registered Office
                </a>

                <a
                  href="/login"
                  className="block px-3 py-2 text-sm rounded border border-slate-100 text-center"
                >
                  Login
                </a>
              </div>
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
        nav.nav-hidden {
          min-width: 0;
        }
        nav .nav-left {
          min-width: 0;
        }
        nav .nav-left a,
        nav .nav-left .relative > button {
          flex-shrink: 0;
        }
        .mobile-panel .mobile-list {
          -webkit-overflow-scrolling: touch;
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
   Footer component
   ------------------------------ */
const Footer: React.FC = () => {
  const bgImagePath = "/images/footer-bg.png";

  return (
    <footer className="pt-10 pb-6">
      <div
        className="max-w-screen-2xl mx-auto p-5 lg:p-8 rounded-xl overflow-hidden"
        style={{
          backgroundColor: "#f1f5f9",
          backgroundImage: `radial-gradient(closest-side at 10% 80%, rgba(236, 213, 230, 0.25), transparent 30%), radial-gradient(closest-side at 90% 30%, rgba(226, 235, 247, 0.45), transparent 30%), url("${bgImagePath}")`,
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
   Page — CompanyNameChange (single export)
   ------------------------------ */
export default function CompanyNameChange(): React.ReactElement {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const [companyInput, setCompanyInput] = useState("");
  const [gstChecked, setGstChecked] = useState(false);
  const [pan, setPan] = useState("");
  const [company, setCompany] = useState("");

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

  return (
    <div className="min-h-screen page">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />

      {/* Hero Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h1 className="text-5xl font-bold mb-4">
                Company <span className="text-blue-600">Name Change</span>
              </h1>

              <div className="flex items-center gap-2 mb-6">
                <div className="flex text-orange-400">
                  {[...Array(4)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                  <span className="text-gray-300">★</span>
                </div>
                <span className="text-sm font-semibold">4.2 / 5</span>
                <a href="#" className="text-sm text-blue-600">
                  (34 Reviews)
                </a>
              </div>

              <p className="text-gray-600 text-base mb-8 leading-relaxed">
                Change your company name seamlessly with our expert-assisted
                process. Get your new company name approved and incorporated
                with 100% digital and paperless filing.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Search className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium text-gray-800">
                    AI-Powered Name Approval
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium text-gray-800">
                    Expert Guidance Throughout
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Grid className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium text-gray-800">
                    Paperless & Digital Process
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium text-gray-800">
                    Fast & Reliable Service
                  </span>
                </div>
              </div>
            </div>

            {/* Form Card */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
              <div className="border-t-4 border-orange-400 -mt-6 -mx-6 mb-6" />

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company PAN
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Existing Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Existing Company Name Will Auto-Fill"
                    className="w-full px-4 py-2 border border-gray-300 rounded text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                  <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                    <span className="text-gray-400">ℹ</span> This field
                    auto-populates once the PAN is validated.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Proposed New Company Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Reason for Name Change
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email / Mobile
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>

                <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded transition-colors">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Details + rest of content (kept same structure) */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="flex gap-8">
              <div className="w-1/3">
                <div className="bg-blue-700 text-white p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">
                    NAME CHANGE - COMPANY
                  </h3>
                  <p className="text-sm mb-6">
                    Get the support to start and scale your business ✓
                  </p>
                  <div className="bg-white/20 rounded-lg overflow-hidden">
                    <img
                      src="/api/placeholder/400/300"
                      alt="Business people"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4 text-center">
                      <div className="text-4xl font-bold mb-2">REBRAND</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <h2 className="text-2xl font-bold">Name Change - Company</h2>
                  <div className="flex text-orange-400 text-sm">
                    {[...Array(4)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                    <span className="text-gray-300">★</span>
                  </div>
                  <span className="text-sm text-gray-600">(34)</span>
                </div>

                <p className="text-gray-600 mb-6">
                  Name change for a private limited company, inclusive of name
                  approval fee and GST.
                </p>

                <div className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded mb-4">
                  2 Exclusive Offers
                </div>

                <div className="border border-gray-200 rounded-lg p-4 mb-6">
                  <h4 className="font-bold mb-3">Basic</h4>
                  <ul className="space-y-2 text-sm text-gray-700 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">›</span>
                      <span>Application Filing in MCA</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">›</span>
                      <span>
                        Provide Updated MOA & Updated AOA and New Incorporation
                        Certificate
                      </span>
                    </li>
                  </ul>
                  <button className="px-6 py-2 border-2 border-gray-700 text-gray-700 font-semibold rounded hover:bg-gray-50 transition-colors">
                    ADD
                  </button>
                </div>

                <a href="#" className="text-blue-600 text-sm underline">
                  Terms and conditions
                </a>
              </div>

              <div className="w-80">
                <div className="border border-gray-200 rounded-lg p-6 text-center">
                  <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </div>
                  <p className="text-lg font-semibold text-gray-800 mb-2">
                    Your cart is empty
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    Browse our services and add some services in cart!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ... additional sections (offers, author info, documents) remain unchanged structurally ... */}

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6">
              Documents Required to Change Business Name
            </h2>
            <p className="text-gray-700 mb-6">
              The documents required for changing a company name include:
            </p>
            <h4 className="text-lg font-bold mb-4">
              Attachments to Form MGT-14 (For Changing Company Name):
            </h4>
            <ul className="space-y-2 mb-6 ml-6">
              <li className="flex items-start gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>
                  Certified True Copies of the Special Resolutions along with
                  the explanatory statement.
                </span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>
                  A copy of the meeting notice was sent to members, including
                  all annexures.
                </span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Altered Memorandum & Article of Association.</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>
                  Copy of the Attendance Sheet of the General Meeting.
                </span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Shorter Notice Consent, if applicable.</span>
              </li>
            </ul>

            <h4 className="text-lg font-bold mb-4">
              Attachments to Form INC-24 (For Name Change Approval):
            </h4>
            <ul className="space-y-2 mb-6 ml-6">
              <li className="flex items-start gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Notice along with Explanatory Statements.</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Certified True Copy of the Special Resolution.</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Altered Memorandum & Article of Association.</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Minutes of the General Meeting.</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Affidavit from Directors.</span>
              </li>
            </ul>

            <p className="text-gray-700 mt-6">
              Changing a company's name typically takes around 10 to 15 working
              days due to the need for approvals from various departments.
            </p>
          </div>
        </div>
      </div>

      <Footer />

      {/* Live Chat CTA */}
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

      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: "Poppins", system-ui, -apple-system, "Segoe UI", Roboto,
            "Helvetica Neue", Arial;
          background: #f3f4f6;
          color: #0f172a;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .page {
          min-height: 100vh;
        }

        header {
          background: #fff;
          border-bottom: 1px solid #e6e9ee;
          position: sticky;
          top: 0;
          z-index: 60;
        }

        /* Ensure dropdown overlay sits above other content */
        header .relative > div[role="menu"] {
          z-index: 80;
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

        /* small responsive tweaks already in Header component */
      `}</style>
    </div>
  );
}
