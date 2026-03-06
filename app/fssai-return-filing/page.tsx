"use client";

import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import {
  Star,
  ChevronDown,
  CheckCircle,
  MessageCircle,
  Grid,
  Search,
} from "lucide-react";

const ASSETS = {
  logo: "/images/india-logo.jpg",
  hero: "/images/fssai-hero.png",
  cards: {
    fssai: "https://img.indiafilings.com/catalog/fssai-renewal.png",
    udyam: "https://img.indiafilings.com/catalog/udyam.png",
  },
  footerBg: "/images/footer-bg.png",
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

const FSSAI_SERVICES = [
  "Renewal",
  "Return Filing",
  "Modifications (State and Central)",
  "Surrender",
];

const STATES_UTS = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Delhi",
  "Puducherry",
  "Chandigarh",
  "Andaman and Nicobar Islands",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Lakshadweep",
  "Ladakh",
  "Jammu & Kashmir",
];

const YEARS_OPTIONS = ["1 Year", "3 Years", "5 Years"];

const INCOME_TAX_DROPDOWN_LINKS = [
  { title: "Income Tax E-Filing", href: "/income-tax/e-filing" },
  { title: "Business Tax Filing", href: "/income-tax/business-tax-filing" },
  {
    title: "Partnership Firm / LLP ITR",
    href: "/income-tax/partnership-llp-itr",
  },
  { title: "Company ITR Filing", href: "/income-tax/company-itr-filing" },
  { title: "Trust / NGO Tax Filing", href: "/income-tax/trust-ngo-tax-filing" },
  { title: "15CA - 15CB Filing", href: "/income-tax/15ca-15cb-filing" },
  { title: "TAN Registration", href: "/income-tax/tan-registration" },
  { title: "TDS Return Filing", href: "/income-tax/tds-return-filing" },
  { title: "Income Tax Notice", href: "/income-tax/income-tax-notice" },
];

const COMPLIANCE_DROPDOWN_LINKS = [
  { title: "FDI Filing with RBI", href: "/compliance/fdi-filing-rbi" },
  { title: "FLA Return Filing", href: "/compliance/fla-return-filing" },
  { title: "FSSAI Renewal", href: "/compliance/fssai-renewal" },
  { title: "FSSAI Return Filing", href: "/compliance/fssai-return-filing" },
  { title: "Business Plan", href: "/compliance/business-plan" },
  { title: "HR & Payroll", href: "/compliance/hr-payroll" },
  { title: "PF Return Filing", href: "/compliance/pf-return-filing" },
  { title: "ESI Return Filing", href: "/compliance/esi-return-filing" },
  {
    title: "Professional Tax Return Filing",
    href: "/compliance/professional-tax-return-filing",
  },
  {
    title: "Partnership Compliance",
    href: "/compliance/partnership-compliance",
  },
  {
    title: "Proprietorship Compliance",
    href: "/compliance/proprietorship-compliance",
  },
  { title: "Bookkeeping", href: "/compliance/bookkeeping" },
  { title: "CA Support", href: "/compliance/ca-support" },
];

function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T | null>,
  handler: () => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const el = ref?.current;
      if (!el || el.contains(event.target as Node)) {
        return;
      }
      handler();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [handler, ref]);
}

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

const Header: React.FC = () => {
  const [showMcaDropdown, setShowMcaDropdown] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showIncomeDropdown, setShowIncomeDropdown] = useState(false);
  const [showComplianceDropdown, setShowComplianceDropdown] = useState(false);
  const [mobileIncomeOpen, setMobileIncomeOpen] = useState(false);
  const [mobileComplianceOpen, setMobileComplianceOpen] = useState(false);

  const incomeRef = useRef<HTMLDivElement | null>(null);
  const compRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(incomeRef, () => setShowIncomeDropdown(false));
  useOnClickOutside(compRef, () => setShowComplianceDropdown(false));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowIncomeDropdown(false);
        setShowComplianceDropdown(false);
        setMobileOpen(false);
        setShowMcaDropdown(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

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
                      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[460px]">
                        <div className="bg-white rounded-lg shadow-xl border border-slate-200 p-4">
                          <div className="grid grid-cols-2 gap-3">
                            <a
                              href="/MCA/company-compliance"
                              className="text-sm text-slate-700 hover:text-emerald-600 py-1.5 block"
                            >
                              Company Compliance
                            </a>
                            <a
                              href="/MCA/registered-office-change"
                              className="text-sm text-slate-700 hover:text-emerald-600 py-1.5 block"
                            >
                              Registered Office Change
                            </a>
                            <a
                              href="/MCA/din-ekyc-filing"
                              className="text-sm text-slate-700 hover:text-emerald-600 py-1.5 block"
                            >
                              DIN eKYC Filing
                            </a>
                            <a
                              href="/MCA/share-transfer"
                              className="text-sm text-slate-700 hover:text-emerald-600 py-1.5 block"
                            >
                              Share Transfer
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : item === "Income Tax" ? (
                  <div
                    key={item}
                    ref={incomeRef}
                    className="relative"
                    onMouseEnter={() => setShowIncomeDropdown(true)}
                    onMouseLeave={() => setShowIncomeDropdown(false)}
                  >
                    <button
                      aria-haspopup="true"
                      aria-expanded={showIncomeDropdown}
                      className="flex items-center gap-1 ui-focus"
                    >
                      {item} <ChevronDown className="w-3.5 h-3.5" />
                    </button>
                    {showIncomeDropdown && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px] z-50">
                        <div className="bg-white rounded-lg shadow-lg border p-4">
                          <div className="grid grid-cols-2 gap-3">
                            {INCOME_TAX_DROPDOWN_LINKS.map((link) => (
                              <a
                                key={link.href}
                                href={link.href}
                                className="text-sm text-slate-700 hover:text-emerald-600 block"
                              >
                                {link.title}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : item === "Compliance" ? (
                  <div
                    key={item}
                    ref={compRef}
                    className="relative"
                    onMouseEnter={() => setShowComplianceDropdown(true)}
                    onMouseLeave={() => setShowComplianceDropdown(false)}
                  >
                    <button
                      aria-haspopup="true"
                      aria-expanded={showComplianceDropdown}
                      onClick={() => setShowComplianceDropdown((s) => !s)}
                      className="flex items-center gap-1 hover:text-slate-900 text-slate-700 text-[14px] focus:outline-none"
                    >
                      {item}
                      <ChevronDown className="w-3.5 h-3.5" />
                    </button>
                    {showComplianceDropdown && (
                      <div
                        className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[780px] z-50"
                        role="menu"
                        aria-label="Compliance menu"
                      >
                        <div className="bg-white rounded-lg shadow-xl border border-slate-200 p-6">
                          <div className="grid grid-cols-3 gap-x-6 gap-y-2">
                            {COMPLIANCE_DROPDOWN_LINKS.map((link) => (
                              <a
                                key={link.href}
                                href={link.href}
                                role="menuitem"
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
                href="/registrations"
                className="hidden lg:inline-block px-3 py-1.5 rounded-md text-sm font-medium bg-emerald-50 text-emerald-700 border border-emerald-100 hover:bg-emerald-100"
              >
                Registrations
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
              href="/registrations"
              className="text-xs px-2 py-1 rounded bg-emerald-50 text-emerald-700 hidden sm:inline-block"
            >
              Registrations
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
                      <a
                        href="/MCA/company-compliance"
                        className="py-1 text-sm rounded hover:bg-slate-50 block"
                      >
                        Company Compliance
                      </a>
                      <a
                        href="/MCA/registered-office-change"
                        className="py-1 text-sm rounded hover:bg-slate-50 block"
                      >
                        Registered Office Change
                      </a>
                      <a
                        href="/MCA/din-ekyc-filing"
                        className="py-1 text-sm rounded hover:bg-slate-50 block"
                      >
                        DIN eKYC Filing
                      </a>
                      <a
                        href="/MCA/share-transfer"
                        className="py-1 text-sm rounded hover:bg-slate-50 block"
                      >
                        Share Transfer
                      </a>
                    </div>
                  </details>
                ) : item === "Income Tax" ? (
                  <div key={item} className="px-2 py-1">
                    <button
                      className="w-full flex items-center justify-between px-2 py-2 text-left"
                      onClick={() => setMobileIncomeOpen((s) => !s)}
                    >
                      <span>{item}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {mobileIncomeOpen && (
                      <div className="pl-4 space-y-1">
                        {INCOME_TAX_DROPDOWN_LINKS.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            className="block py-1 text-sm text-slate-700"
                          >
                            {link.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : item === "Compliance" ? (
                  <div key={item} className="px-2 py-1">
                    <button
                      className="w-full flex items-center justify-between px-2 py-2 text-left"
                      onClick={() => setMobileComplianceOpen((s) => !s)}
                    >
                      <span>{item}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {mobileComplianceOpen && (
                      <div className="pl-4 grid grid-cols-1 gap-1">
                        {COMPLIANCE_DROPDOWN_LINKS.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            className="block py-1 text-sm text-slate-700"
                          >
                            {link.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
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
                href="/registrations"
                className="px-2 py-2 text-sm rounded bg-emerald-50 text-emerald-700"
              >
                Registrations
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

const FssaiServiceDropdown: React.FC<{
  value: string | null;
  onChange: (v: string) => void;
}> = ({ value, onChange }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState<string[]>(FSSAI_SERVICES);
  useOnClickOutside(ref, () => {
    setOpen(false);
    setQuery("");
    setFiltered(FSSAI_SERVICES);
  });
  useEffect(() => {
    setFiltered(
      FSSAI_SERVICES.filter((s) =>
        s.toLowerCase().includes(query.trim().toLowerCase())
      )
    );
  }, [query]);
  return (
    <div className="relative" ref={ref}>
      <label className="block text-xs font-medium text-slate-500 mb-2">
        FSSAI service
      </label>
      <button
        onClick={() => setOpen((s) => !s)}
        className="w-full text-left px-4 py-2 border border-slate-200 rounded bg-white flex items-center justify-between focus:ring-2 focus:ring-blue-400"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="truncate text-slate-700">
          {value ?? "Select FSSAI Service"}
        </span>
        <ChevronDown className="w-4 h-4 text-slate-400" />
      </button>
      {open && (
        <div className="absolute z-50 mt-2 w-full bg-white border border-slate-200 rounded shadow-lg">
          <div className="p-3 border-b">
            <div className="text-sm text-slate-400 mb-2">
              Search FSSAI Service...
            </div>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
              <input
                className="w-full pl-10 pr-3 py-2 border border-slate-100 rounded text-sm"
                placeholder="Search FSSAI Service..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
              />
            </div>
          </div>
          <div className="max-h-48 overflow-auto">
            {filtered.map((s) => (
              <button
                key={s}
                onClick={() => {
                  onChange(s);
                  setOpen(false);
                  setQuery("");
                }}
                className={`w-full text-left px-4 py-3 hover:bg-slate-50 text-sm ${
                  value === s ? "bg-slate-50 font-medium" : "text-slate-700"
                }`}
              >
                {s}
              </button>
            ))}
            {filtered.length === 0 && (
              <div className="px-4 py-3 text-sm text-slate-500">No results</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const YearsDropdown: React.FC<{
  value: string | null;
  onChange: (v: string) => void;
}> = ({ value, onChange }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  useOnClickOutside(ref, () => setOpen(false));
  return (
    <div ref={ref}>
      <label className="block text-sm font-medium text-slate-700 mb-2">
        Select Years
      </label>
      <button
        onClick={() => setOpen((s) => !s)}
        className="w-full text-left px-4 py-2 border border-gray-200 rounded bg-white flex items-center justify-between focus:ring-2 focus:ring-blue-400"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="truncate text-slate-600">{value ?? "3 Years"}</span>
        <ChevronDown className="w-4 h-4 text-slate-400" />
      </button>
      {open && (
        <div className="absolute z-40 mt-2 w-full bg-white border border-slate-200 rounded shadow-lg">
          <div className="py-2 max-h-44 overflow-auto">
            {YEARS_OPTIONS.map((y) => (
              <button
                key={y}
                onClick={() => {
                  onChange(y);
                  setOpen(false);
                }}
                className={`w-full text-left px-4 py-2 hover:bg-slate-50 text-sm ${
                  value === y ? "bg-slate-50 font-medium" : "text-slate-700"
                }`}
              >
                {y}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default function FSSAIRenewal(): React.ReactElement {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [service, setService] = useState<string | null>("Return Filing");
  const [panOrGstin, setPanOrGstin] = useState("");
  const [existingLicense, setExistingLicense] = useState("");
  const [stateUt, setStateUt] = useState<string | null>(null);
  const [years, setYears] = useState<string | null>("3 Years");

  const faqItems = [
    "Who needs to file the FSSAI Food Business Annual Return?",
    "What is the deadline for filing annual return?",
    "Are there penalties for late or non-submission of the FBAR?",
    "Who is exempt from filing the FBAR according to FSSAI regulations?",
    "Can multiple FSSAI license holders file a single annual return?",
    "Can I file the FSSAI Food Business Annual Return after the due date?",
    "What information is required for FSSAI Food Business Annual Return filing?",
    "Can I file the FBAR on my own, or should I seek professional assistance?",
    "What is the FSSAI Annual Return fees?",
    "Can I revise my annual return after submission?",
  ];

  function handleApplyNow() {
    if (!panOrGstin.trim()) {
      alert("Please enter PAN / GSTIN");
      return;
    }
    if (!service) {
      alert("Please select FSSAI service");
      return;
    }
    alert(
      `Apply: Service=${service}\nPAN/GSTIN=${panOrGstin}\nLicense=${existingLicense}\nState=${stateUt}\nYears=${years}`
    );
  }

  return (
    <div className="min-h-screen page bg-[#f3f4f6]">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
        <title>FSSAI Return Filing - IndiaFilings</title>
      </Head>

      <Header />

      <section className="bg-white pt-10 pb-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="pt-6">
              <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                Get Your{" "}
                <span className="text-blue-600 underline decoration-4 decoration-yellow-300">
                  FSSAI Renewal
                </span>
              </h1>

              <p className="text-slate-600 mb-6 max-w-xl">
                Ensure your food business stays compliant with FSSAI by renewing
                your license before it expires. Our professional team simplifies
                the renewal process with a fast, secure, and fully online
                service.
              </p>

              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 text-white">
                    ✓
                  </div>
                  <div>
                    <div className="font-semibold">
                      100% Online renewal process
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 text-white">
                    ✓
                  </div>
                  <div>
                    <div className="font-semibold">
                      Expert assistance throughout the process
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 text-white">
                    ✓
                  </div>
                  <div>
                    <div className="font-semibold">
                      Fast, effortless, and transparent
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
                <div
                  className="absolute -top-4 left-6 right-6 h-4 rounded-t-xl"
                  style={{
                    background: "linear-gradient(90deg,#3b82f6,#06b6d4)",
                  }}
                />

                <div className="space-y-4 mt-3">
                  <FssaiServiceDropdown value={service} onChange={setService} />

                  <p className="text-sm text-slate-600">
                    FSSAI license holders must file annual returns to remain
                    compliant. We manage the complete filing process on your
                    behalf, helping you avoid late fees and penalties while
                    keeping your business hassle-free.
                  </p>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      PAN / GSTIN
                    </label>
                    <input
                      value={panOrGstin}
                      onChange={(e) => setPanOrGstin(e.target.value)}
                      type="text"
                      className="w-full px-4 py-2 border border-gray-200 rounded focus:ring-2 focus:ring-blue-400 outline-none"
                      placeholder="PAN / GSTIN"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Existing License Number
                    </label>
                    <input
                      type="text"
                      value={existingLicense}
                      onChange={(e) => setExistingLicense(e.target.value)}
                      placeholder="Existing License Number"
                      className="w-full px-4 py-2 border border-gray-200 rounded bg-white text-slate-700"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        State / UT
                      </label>
                      <div className="relative">
                        <select
                          value={stateUt ?? ""}
                          onChange={(e) => setStateUt(e.target.value || null)}
                          className="w-full px-4 py-2 border border-gray-200 rounded bg-white text-slate-700"
                        >
                          <option value="">Select State / UT</option>
                          {STATES_UTS.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <YearsDropdown value={years} onChange={setYears} />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={handleApplyNow}
                      className="w-full md:w-auto px-6 py-3 rounded bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold shadow"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>

              <div className="hidden md:block absolute -right-10 top-8 w-6 h-24 rounded-md opacity-30" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4 space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-sm text-gray-500 mb-2">
              IndiaFilings / Registrations /{" "}
              <span className="text-indigo-600">FSSAI Return Filing</span>
            </div>

            <h2 className="text-2xl font-bold mb-3">
              FSSAI Annual Return Filing
            </h2>

            <div className="flex items-center gap-4 mb-6">
              <div className="rounded-full bg-slate-100 w-12 h-12 flex items-center justify-center">
                <img src={ASSETS.cards.fssai} alt="FSSAI" className="w-8 h-8" />
              </div>
              <div>
                <div className="font-semibold">RAJESH KUMAR PATRA</div>
                <div className="text-sm text-slate-500">
                  Business Advisor • Updated on: Mar 18, 2025
                </div>
              </div>
            </div>

            <p className="text-slate-700 mb-4 leading-relaxed">
              IndiaFilings is your trusted partner for a seamless, stress-free
              experience helps you to file Food Business Annual Returns before
              the FSSAI annual return due date. We understand the critical
              importance of compliance in the food industry, and our dedicated
              team of experts is committed to helping you swiftly fulfill your
              regulatory obligations. Our comprehensive services are designed to
              ensure that your food business operates in full compliance with
              the regulations of the Food Safety and Standards Authority of
              India (FSSAI), thereby safeguarding both your business and the
              well-being of your consumers. With IndiaFilings by your side,
              navigating the complexities of Annual Return FSSAI filings becomes
              effortless, enabling you to concentrate on your core mission –
              providing safe and delectable food to your valued customers.
            </p>

            <h3 className="text-lg font-semibold mt-4 mb-2">
              FSSAI Return Filing
            </h3>
            <p className="text-slate-700 mb-4 leading-relaxed">
              Following the regulations set forth by the Food Safety and
              Standards Authority of India (FSSAI), every food business holding
              an FSSAI license is obligated to submit an annual return
              individually. This requirement applies to each license held,
              regardless of whether the same Food Business Operator possesses
              multiple licenses.
            </p>

            <h3 className="text-lg font-semibold mt-4 mb-2">
              Purpose of the Annual Food Business Return
            </h3>
            <p className="text-slate-700 mb-4 leading-relaxed">
              The Annual Food Business Return ensures that food businesses
              adhere to FSSAI regulations and maintain transparency in their
              operations.
            </p>

            <p className="text-slate-700 mb-4 leading-relaxed">
              By submitting the annual return, businesses provide essential
              information to the FSSAI concerning their operations, encompassing
              food products' production, handling, storage, and distribution.
              Food business operators should acknowledge the importance of this
              annual return and ensure its timely submission. Failure to adhere
              to this requirement may result in penalties or, in more severe
              cases, the suspension of the FSSAI license, posing a risk to the
              business's ongoing operations.
            </p>

            <h3 className="text-lg font-semibold mt-4 mb-2">
              Food Business Operators (FBOs) Eligible for Annual Return
              Submission
            </h3>
            <p className="text-slate-700 mb-4 leading-relaxed">
              The annual return in Form D1 FSSAI must be filed online with the
              Food Licensing Authority by the following categories of Food
              Business Operators (FBOs) for the type of food products they
              manufactured or sold in the preceding financial year:
            </p>
            <ul className="list-disc pl-5 mt-3 text-slate-700 space-y-2">
              <li>Food manufacturers</li>
              <li>Labelers</li>
              <li>Importers</li>
              <li>Packers</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4 mb-2">
              Eligibility Criteria for FSSAI returns
            </h3>
            <p className="text-slate-700 mb-4 leading-relaxed">
              The requirement to file FSSAI returns applies to specific
              categories of Food Business Operators (FBOs) in India, as outlined
              below:
            </p>
            <ul className="list-disc pl-5 mt-3 text-slate-700 space-y-2">
              <li>
                Business Turnover: FBOs with a business turnover exceeding Rs.12
                lakhs must file FSSAI returns.
              </li>
              <li>
                Involvement in Food Activities: FBOs engaged in various
                food-related activities such as importing, selling,
                manufacturing, exporting, storing, distributing, handling, or
                transporting any food product must file FSSAI returns.
              </li>
              <li>
                Milk Manufacturing and Distribution: FBOs involved in
                manufacturing and distributing milk are also required to file
                FSSAI returns.
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-4 mb-2">
              Exempted Entities from Filing Returns
            </h3>
            <p className="text-slate-700 mb-4 leading-relaxed">
              It's important to note that the FSSAI has issued a notification
              specifying certain entities that are exempt from filing the annual
              return FSSAI. These exempted entities include:
            </p>
            <ul className="list-disc pl-5 mt-3 text-slate-700 space-y-2">
              <li>Fast-food joints</li>
              <li>Restaurants</li>
              <li>Grocery stores</li>
              <li>Canteens</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4 mb-2">
              Deadline for Food Business Annual Return
            </h3>
            <p className="text-slate-700 mb-4 leading-relaxed">
              Following Clause 2.1.13(1) of the Food Safety and Standards
              (Licensing and Registration of Food Businesses) Regulation, 2011,
              all licensed Manufacturers and Importers are required to submit
              their Annual Return using Form D1 FSSAI no later than May 31st
              each year. This return should cover the activities conducted
              during the previous Financial Year. Ensure to file this return
              before the FSSAI annual return due date to avoid penalty.
            </p>

            <h3 className="text-lg font-semibold mt-4 mb-2">
              FSSAI Annual Return Penalty for Late or Non-Submission
            </h3>
            <p className="text-slate-700 mb-4 leading-relaxed">
              Any delay in filing the Food Business Annual Return beyond May 31
              each year shall attract a penalty of Rs. 100 per day for delay
              until the date of filing of the return. The maximum penalty levied
              shall be at most five times the annual license fees.
            </p>

            <h3 className="text-lg font-semibold mt-4 mb-2">
              Information Needed for Filing the FSSAI Annual Return
            </h3>
            <p className="text-slate-700 mb-4 leading-relaxed">
              When completing the FSSAI Annual Return, the Food Business
              Operator (FBO) is required to furnish the following details:
            </p>
            <ul className="list-disc pl-5 mt-3 text-slate-700 space-y-2">
              <li>Name of the product manufactured or imported.</li>
              <li>Size of the container, packaging, or bulk packaging.</li>
              <li>Quantity measured in Metric Tons.</li>
              <li>
                Selling price of the food products per kilogram or per unit of
                packaging.
              </li>
              <li>Value of the Food Product.</li>
              <li>Quantity of imported goods measured in kilograms.</li>
              <li>
                A comprehensive list of the countries or ports from which the
                food products are imported.
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-4 mb-2">
              Online Submission of Annual Returns for Food Businesses
            </h3>
            <p className="text-slate-700 mb-4 leading-relaxed">
              On December 18, 2020, the Food Safety and Standards Authority of
              India (FSSAI) released a notification outlining the updated
              guidelines for filing annual returns in the food business sector.
              As per this notification, FSSAI now requires food businesses
              engaged in the manufacturing and importing of food products to
              submit their annual returns online, starting from the financial
              year 2020-2021.
            </p>

            <h3 className="text-lg font-semibold mt-4 mb-2">
              How IndiaFilings Can Assist with FSSAI Annual Return Filings
            </h3>
            <p className="text-slate-700 mb-4 leading-relaxed">
              At IndiaFilings, we understand the importance of timely and
              accurate FSSAI Annual Return filings for Food Business Operators
              (FBOs). We prepare the proper FSSAI annual return format and file
              it before the FSSAI return due date.
            </p>

            <ul className="list-disc pl-5 mt-3 text-slate-700 space-y-2">
              <li>
                <strong>Compliance Expertise:</strong> Our experts provide clear
                guidance on the FSSAI Annual Return filing process.
              </li>
              <li>
                <strong>Document Collection and Verification:</strong> We assist
                in collecting and organizing the required information and
                documents needed for the FSSAI Annual Return.
              </li>
              <li>
                <strong>Form D1 Preparation:</strong> We prepare the FSSAI
                Annual Return in the prescribed Form D1, ensuring all relevant
                details are correctly filled out.
              </li>
              <li>
                <strong>Timely Submission:</strong> We inform you about the
                FSSAI annual return last date to ensure you file your FSSAI
                Annual Return on time, avoiding penalties.
              </li>
            </ul>

            <p className="mt-4 text-slate-700">
              Contact Us Now to File Your FSSAI Annual Return and Ensure Food
              Safety Compliance for Your Business.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-2xl font-bold mb-4">
              FAQ's on FSSAI Return Filing
            </h3>
            <div className="divide-y">
              {faqItems.map((q, idx) => (
                <div key={idx} className="py-3">
                  <button
                    className="w-full text-left flex justify-between items-center py-3"
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  >
                    <span className="text-slate-800 font-medium">{q}</span>
                    <span className="text-slate-400">
                      {activeFaq === idx ? "-" : "+"}
                    </span>
                  </button>
                  {activeFaq === idx && (
                    <div className="text-slate-600 mt-2">
                      <p>
                        This answer explains {q.toLowerCase()}. For full process
                        guidance and document templates, reach out to our
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6"></div>

            <aside className="space-y-6">
              <div className="bg-white rounded-lg shadow p-5">
                <h4 className="font-semibold mb-3">Related Guides</h4>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li>
                    <a className="text-blue-600" href="#">
                      Documents required for FSSAI state registration
                    </a>
                  </li>
                  <li>
                    <a className="text-blue-600" href="#">
                      Central FSSAI License – Eligibility & Documents Required
                    </a>
                  </li>
                  <li>
                    <a className="text-blue-600" href="#">
                      Difference between FSSAI registration and license
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow p-4 text-center">
                <img
                  src={ASSETS.cards.fssai}
                  alt="FSSAI Renewal"
                  className="rounded mx-auto"
                />
                <div className="mt-3 font-medium">FSSAI Return Filing</div>
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

          <div className="mt-2 bg-white rounded-lg p-6">
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
        .max-w-7xl {
          max-width: 88rem;
        }
        .container {
          width: 100%;
        }
        @media (max-width: 768px) {
          h1 {
            font-size: 1.75rem;
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
