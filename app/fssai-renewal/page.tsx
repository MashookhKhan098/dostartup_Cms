"use client";

import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import {
  Star,
  ChevronDown,
  CheckCircle,
  MessageCircle,
  Grid,
} from "lucide-react";

const ASSETS = {
  logo: "/images/india-logo.jpg",
  hero: "/images/fssai-hero.png",
  cards: {
    fssai: "https://img.indiafilings.com/catalog/fssai-renewal.png",
    udyam: "https://img.indiafilings.com/catalog/udyam.png",
  },
  footerBg: "/images/footer-bg.png",
  ledgers: "https://img.indiafilings.com/catalog/ledgers.png",
  whatsapp: "/images/whatsapp.svg",
  cartIcon: "/images/cart-icon.svg",
  indiaFlag: "/images/india-flag.png",
  adRight1: "/images/company-compliance-ad.png",
  dinEkyc: "/images/din-ekyc-ad.png",
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

const RenewalTypeDropdown: React.FC<{
  value: string | null;
  onChange: (v: string) => void;
}> = ({ value, onChange }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  useOnClickOutside(ref, () => setOpen(false));
  const RENEWAL_OPTIONS = [
    "FSSAI Registration Renewal",
    "FSSAI State License Renewal - Trader, Restaurant",
    "FSSAI State Renewal - Manufacturer, Relabeler",
    "FSSAI License Central Renewal",
  ];
  return (
    <div ref={ref} className="relative">
      <label className="block text-sm font-medium text-slate-700 mb-2">
        Renewal Type
      </label>
      <button
        onClick={() => setOpen((s) => !s)}
        className="w-full text-left px-4 py-2 border border-gray-200 rounded bg-white flex items-center justify-between focus:ring-2 focus:ring-blue-400"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select renewal type"
      >
        <span className="truncate text-slate-600">
          {value ?? "Select Renewal Type"}
        </span>
        <ChevronDown className="w-4 h-4 text-slate-400" />
      </button>
      {open && (
        <div
          className="absolute z-40 mt-2 w-full bg-white border border-slate-200 rounded shadow-lg"
          role="listbox"
        >
          <div className="py-2 max-h-56 overflow-auto">
            <div className="px-3 text-xs text-slate-400">
              Select Renewal Type
            </div>
            {RENEWAL_OPTIONS.map((opt) => (
              <button
                key={opt}
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                className={`w-full text-left px-4 py-2 hover:bg-slate-50 text-sm ${
                  value === opt ? "bg-slate-50 font-medium" : "text-slate-700"
                }`}
                role="option"
                aria-selected={value === opt}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const StateDropdown: React.FC<{
  value: string | null;
  onChange: (v: string) => void;
}> = ({ value, onChange }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
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
  const [filtered, setFiltered] = useState<string[]>(STATES_UTS);
  useOnClickOutside(ref, () => {
    setOpen(false);
    setQuery("");
    setFiltered(STATES_UTS);
  });
  useEffect(() => {
    setFiltered(
      STATES_UTS.filter((s) =>
        s.toLowerCase().includes(query.trim().toLowerCase())
      )
    );
  }, [query]);
  return (
    <div ref={ref} className="relative">
      <label className="block text-sm font-medium text-slate-700 mb-2">
        State / Union Territory
      </label>
      <div className="flex gap-3">
        <div className="flex-1">
          <button
            onClick={() => setOpen((s) => !s)}
            className="w-full text-left px-4 py-2 border border-gray-200 rounded bg-white flex items-center justify-between focus:ring-2 focus:ring-blue-400"
            aria-haspopup="listbox"
            aria-expanded={open}
            aria-label="Select state or union territory"
          >
            <span className="truncate text-slate-600">
              {value ?? "Select State/UT"}
            </span>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </button>
          {open && (
            <div
              ref={containerRef}
              className="absolute z-40 mt-2 w-full bg-white border border-slate-200 rounded shadow-lg"
              role="listbox"
            >
              <div className="p-3">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  autoFocus
                  className="w-full px-3 py-2 border border-slate-200 rounded text-sm"
                  placeholder="Search State/UT..."
                  aria-label="Search State or Union Territory"
                />
              </div>
              <div className="max-h-56 overflow-auto divide-y">
                {filtered.length === 0 && (
                  <div className="px-4 py-3 text-sm text-slate-500">
                    No results
                  </div>
                )}
                {filtered.map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      onChange(s);
                      setOpen(false);
                      setQuery("");
                      setFiltered(STATES_UTS);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-slate-50 text-sm text-slate-700"
                    role="option"
                    aria-selected={value === s}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
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
  const YEARS_OPTIONS = ["1 Year", "3 Years", "5 Years"];
  return (
    <div ref={ref} className="relative">
      <label className="block text-sm font-medium text-slate-700 mb-2">
        Select Years
      </label>
      <button
        onClick={() => setOpen((s) => !s)}
        className="w-full text-left px-4 py-2 border border-gray-200 rounded bg-white flex items-center justify-between focus:ring-2 focus:ring-blue-400"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select number of years"
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
                role="option"
                aria-selected={value === y}
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

const Header: React.FC = () => {
  const [showMcaDropdown, setShowMcaDropdown] = useState(false);
  const [showIncomeDropdown, setShowIncomeDropdown] = useState(false);
  const [showComplianceDropdown, setShowComplianceDropdown] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const incomeRef = useRef<HTMLDivElement | null>(null);
  const mcaRef = useRef<HTMLDivElement | null>(null);
  const compRef = useRef<HTMLDivElement | null>(null);
  const mobileNavRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(incomeRef, () => setShowIncomeDropdown(false));
  useOnClickOutside(mcaRef, () => setShowMcaDropdown(false));
  useOnClickOutside(compRef, () => setShowComplianceDropdown(false));
  useOnClickOutside(mobileNavRef, () => setMobileOpen(false));
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowIncomeDropdown(false);
        setShowMcaDropdown(false);
        setShowComplianceDropdown(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  const NAV_ITEMS = [
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
              {NAV_ITEMS.map((item) =>
                item === "MCA" ? (
                  <div
                    key={item}
                    ref={mcaRef}
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
                      aria-expanded={showMcaDropdown}
                    >
                      MCA <ChevronDown className="w-3 h-3" />
                    </button>
                    {showMcaDropdown && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[640px] z-50">
                        <div className="bg-white rounded-lg shadow-xl border border-slate-200 p-5">
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
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
                ) : item === "Income Tax" ? (
                  <div
                    key={item}
                    ref={incomeRef}
                    className="relative"
                    onMouseEnter={() => setShowIncomeDropdown(true)}
                    onMouseLeave={() => setShowIncomeDropdown(false)}
                  >
                    <button
                      className={`text-sm flex items-center gap-1 hover:text-slate-900 ${
                        showIncomeDropdown
                          ? "text-slate-900 font-medium"
                          : "text-slate-700"
                      }`}
                      aria-haspopup="true"
                      aria-expanded={showIncomeDropdown}
                    >
                      Income Tax <ChevronDown className="w-3 h-3" />
                    </button>
                    {showIncomeDropdown && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[480px] z-50">
                        <div className="bg-white rounded-lg shadow-xl border border-slate-200 p-4">
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
                      className={`text-sm flex items-center gap-1 hover:text-slate-900 ${
                        showComplianceDropdown
                          ? "text-slate-900 font-medium"
                          : "text-slate-700"
                      }`}
                      aria-haspopup="true"
                      aria-expanded={showComplianceDropdown}
                      onClick={() => setShowComplianceDropdown((s) => !s)}
                    >
                      Compliance <ChevronDown className="w-3 h-3" />
                    </button>
                    {showComplianceDropdown && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[780px] z-50">
                        <div className="bg-white rounded-lg shadow-xl border border-slate-200 p-6">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-3">
                            {COMPLIANCE_DROPDOWN_LINKS.map((link) => (
                              <a
                                key={link.href}
                                href={link.href}
                                className="text-sm text-slate-700 hover:text-emerald-600 block py-1.5"
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
          <div
            ref={mobileNavRef}
            className="md:hidden py-3 border-t border-slate-100"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) =>
                item === "MCA" ? (
                  <details key={item} className="px-2 py-1">
                    <summary className="flex items-center justify-between cursor-pointer">
                      MCA <ChevronDown className="w-4 h-4" />
                    </summary>
                    <div className="mt-2 grid grid-cols-1 gap-1 pl-2">
                      {MCA_DROPDOWN_LINKS.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          className="py-1 text-sm rounded hover:bg-slate-50 block"
                        >
                          {link.title}
                        </a>
                      ))}
                    </div>
                  </details>
                ) : item === "Income Tax" ? (
                  <details key={item} className="px-2 py-1">
                    <summary className="flex items-center justify-between cursor-pointer">
                      Income Tax <ChevronDown className="w-4 h-4" />
                    </summary>
                    <div className="mt-2 grid grid-cols-1 gap-1 pl-2">
                      {INCOME_TAX_DROPDOWN_LINKS.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          className="py-1 text-sm rounded hover:bg-slate-50 block"
                        >
                          {link.title}
                        </a>
                      ))}
                    </div>
                  </details>
                ) : item === "Compliance" ? (
                  <details key={item} className="px-2 py-1">
                    <summary className="flex items-center justify-between cursor-pointer">
                      Compliance <ChevronDown className="w-4 h-4" />
                    </summary>
                    <div className="mt-2 grid grid-cols-1 gap-1 pl-2">
                      {COMPLIANCE_DROPDOWN_LINKS.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          className="py-1 text-sm rounded hover:bg-slate-50 block"
                        >
                          {link.title}
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

export default function FSSAIRenewal(): React.ReactElement {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [panOrGstin, setPanOrGstin] = useState("");
  const [existingLicense, setExistingLicense] = useState("");
  const [renewalType, setRenewalType] = useState<string | null>(null);
  const [stateUt, setStateUt] = useState<string | null>(null);
  const [years, setYears] = useState<string | null>("3 Years");
  const faqItems = [
    "Do I need to renew my FSSAI license?",
    "What is the importance of FSSAI renewal?",
    "How often do I need to renew my FSSAI license?",
    "What are the benefits of renewing my FSSAI license/registration?",
    "When should I start the FSSAI renewal process?",
    "What is the late fee for delayed FSSAI license renewal?",
    "Can I renew my FSSAI license after the expiry date?",
    "What documents are needed for FSSAI license renewal?",
    "How can IndiaFilings assist with FSSAI renewal?",
    "Where can I get started with FSSAI renewal through IndiaFilings?",
  ];
  function handleApplyNow() {
    if (!panOrGstin.trim()) {
      alert("Please enter PAN / GSTIN");
      return;
    }
    if (!renewalType) {
      alert("Please select renewal type");
      return;
    }
    if (!stateUt) {
      alert("Please select State/UT");
      return;
    }
    alert(
      `Apply: ${panOrGstin}\nLicense: ${existingLicense}\nRenewal: ${renewalType}\nState: ${stateUt}\nYears: ${years}`
    );
  }

  return (
    <div className="min-h-screen page bg-[#f3f4f6]">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
        <title>FSSAI Renewal - IndiaFilings</title>
      </Head>

      <Header />

      <section className="bg-white pt-10 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="pt-6">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
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

                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 text-white">
                    ✓
                  </div>
                  <div>
                    <div className="font-semibold">
                      Swift processing and quick approval
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 text-white">
                    ✓
                  </div>
                  <div>
                    <div className="font-semibold">
                      Receive your FSSAI certificate without delay
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
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      PAN / GSTIN
                    </label>
                    <input
                      value={panOrGstin}
                      onChange={(e) => setPanOrGstin(e.target.value)}
                      type="text"
                      className="w-full px-4 py-2 border border-gray-200 rounded focus:ring-2 focus:ring-blue-400 outline-none"
                      placeholder="PAN or GSTIN"
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
                      placeholder="Existing FSSAI License Number"
                      className="w-full px-4 py-2 border border-gray-200 rounded bg-white text-slate-700"
                    />
                  </div>

                  <RenewalTypeDropdown
                    value={renewalType}
                    onChange={(v) => setRenewalType(v)}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <StateDropdown
                      value={stateUt}
                      onChange={(v) => setStateUt(v)}
                    />
                    <YearsDropdown
                      value={years}
                      onChange={(v) => setYears(v)}
                    />
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={handleApplyNow}
                      className="px-5 py-2 rounded bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold shadow"
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
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="text-sm text-gray-500 mb-2">
                  IndiaFilings / Registrations /{" "}
                  <span className="text-indigo-600">FSSAI Renewal</span>
                </div>

                <h2 className="text-2xl font-bold mb-3">
                  FSSAI Renewal - FSSAI Registration and License Renewal
                </h2>

                <p className="text-slate-600 mb-4 leading-relaxed">
                  For food businesses, obtaining and renewing FSSAI
                  licenses/registrations is essential for legal compliance and
                  adherence to safety standards. The renewal of FSSAI licenses,
                  governed by the Food Safety and Standards Authority of India,
                  is vital for any entity in the food sector to ensure ongoing
                  compliance with safety regulations and quality benchmarks.
                  With licenses usually valid for 1 to 5 years, timely renewal
                  is key to uninterrupted business operations.
                </p>

                <p className="text-slate-600 mb-4 leading-relaxed">
                  IndiaFilings offers comprehensive assistance in renewing your
                  FSSAI license/registration, simplifying the process and
                  ensuring your food business fully complies with the necessary
                  safety and quality regulations.
                </p>

                <h3 className="text-lg font-semibold mt-4 mb-2">
                  FSSAI License and Registration for Indian Food Businesses
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  For businesses involved in manufacturing, storing,
                  transporting, or distributing food within India, securing an
                  FSSAI License or Registration is a crucial legal requirement.
                  The specific type of FSSAI license needed depends on the scale
                  and scope of the operation.
                </p>

                <h3 className="text-lg font-semibold mt-4 mb-2">
                  FSSAI Registration
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  FSSAI Registration is a mandatory requirement for small-scale
                  food manufacturers or Food Business Operators (FBOs) with an
                  annual turnover of less than ₹12 lakhs, except those FBOs
                  required to obtain compulsory licensing. This registration is
                  a basic step towards ensuring food safety and standards
                  compliance, allowing small food businesses to operate legally
                  within India.
                </p>

                <h3 className="text-lg font-semibold mt-4 mb-2">
                  FSSAI License
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  The FSSAI License becomes essential for food enterprises whose
                  turnover exceeds ₹12 lakhs. The license is differentiated
                  into:
                </p>
                <ul className="list-disc pl-5 mt-3 text-slate-600 space-y-2">
                  <li>
                    State License: Suited for medium-sized food businesses
                    operating within a particular state.
                  </li>
                  <li>
                    Central License: Required for larger food businesses,
                    especially those with a turnover exceeding ₹20 crores or
                    those involved in interstate trade or import/export.
                  </li>
                </ul>

                <h3 className="text-lg font-semibold mt-4 mb-2">
                  Validity of FSSAI Registration and License
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  FSSAI licenses and registrations have specific durations and
                  must be renewed periodically. Following an FSSAI order dated
                  11th January 2023 (effective 12th January 2023), validity
                  periods are standardised as follows:
                </p>
                <div className="overflow-auto bg-slate-50 p-3 rounded mb-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr>
                        <th className="text-left pb-2">
                          License / Registration
                        </th>
                        <th className="text-left pb-2">Duration of Validity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="pt-2">FSSAI Registration</td>
                        <td className="pt-2">
                          1 to 5 Years (as per applicant’s choice)
                        </td>
                      </tr>
                      <tr>
                        <td className="pt-2">FSSAI State License</td>
                        <td className="pt-2">1 year</td>
                      </tr>
                      <tr>
                        <td className="pt-2">FSSAI Central License</td>
                        <td className="pt-2">1 year</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-semibold mt-4 mb-2">
                  Renewal of FSSAI license
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Renewal is a crucial step to undertake before the current
                  license expires. It's recommended to start the renewal process
                  well before the expiry date to ensure smooth continuation of
                  business activities.
                </p>

                <h3 className="text-lg font-semibold mt-4 mb-2">
                  Benefits of Renewing FSSAI License/Registration
                </h3>
                <ul className="list-disc pl-5 mt-3 text-slate-600 space-y-2">
                  <li>Continuous Legal Compliance</li>
                  <li>Uninterrupted Business Operations</li>
                  <li>Consumer Confidence</li>
                  <li>Avoidance of Penalties</li>
                  <li>Quality Improvement</li>
                  <li>Market Expansion</li>
                  <li>Brand Credibility</li>
                  <li>Regulatory Updates</li>
                  <li>Risk Management</li>
                  <li>Operational Efficiency</li>
                </ul>

                <h3 className="text-lg font-semibold mt-4 mb-2">
                  FSSAI Renewal Timeline
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  The process should ideally begin 30 days before expiry;
                  businesses can start as early as 180 days prior to prepare
                  documents and submit the renewal application.
                </p>

                <h3 className="text-lg font-semibold mt-4 mb-2">
                  Late Fee for Delayed FSSAI License Renewal
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  A late fee of Rs. 100 per day applies for license renewals not
                  initiated at least 30 days before expiry (this late fee
                  applies to licenses and not registrations).
                </p>

                <h3 className="text-lg font-semibold mt-4 mb-2">
                  Renewal after Expiry
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Renewals after expiry may keep the same license number but
                  attract penalties depending on the delay (e.g., up to 90 days
                  late: 3x the annual fee; 91–180 days late: 5x total in some
                  cases).
                </p>

                <h3 className="text-lg font-semibold mt-4 mb-2">
                  Documents Needed for FSSAI License Renewal
                </h3>
                <ul className="list-disc pl-5 mt-3 text-slate-600 space-y-2">
                  <li>FSMS Certificate (if applicable)</li>
                  <li>Updated nominee details</li>
                  <li>Documents supporting any modifications</li>
                  <li>
                    Supporting documents on company letterhead where applicable
                  </li>
                  <li>
                    Any additional documents requested by licensing authority
                  </li>
                </ul>

                <h3 className="text-lg font-semibold mt-4 mb-2">
                  Simplify FSSAI Renewal with IndiaFilings
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  IndiaFilings is your all-in-one solution for FSSAI needs —
                  registration, licensing, and renewal. Our expert team manages
                  the process end-to-end so you can focus on your business.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-2xl font-bold mb-4">
                  Procedure & Documents Summary
                </h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1" />{" "}
                    Start renewal process 30–180 days before expiry
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1" />{" "}
                    Prepare FSMS / nominee and supporting documents
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1" />{" "}
                    Submit online application and pay standard fees (plus any
                    late fees if late)
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-2xl font-bold mb-4">
                  FAQ's on FSSAI Renewal
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
                            This answer explains {q.toLowerCase()}. For full
                            process guidance and document templates, reach out
                            to our experts.
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

            <aside className="space-y-6">
              <div className="bg-white rounded-lg shadow p-5">
                <h4 className="font-semibold mb-3">Related Guides</h4>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li>
                    <a className="text-blue-600" href="#">
                      FSSAI License Renewal in India
                    </a>
                  </li>
                  <li>
                    <a className="text-blue-600" href="#">
                      Renewal of the FSSAI License after the Expiry Date
                    </a>
                  </li>
                  <li>
                    <a className="text-blue-600" href="#">
                      Who are exempted from FSSAI registration?
                    </a>
                  </li>
                  <li>
                    <a className="text-blue-600" href="#">
                      Who needs FSSAI registration?
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow p-4 text-center">
                <img
                  src={ASSETS.cards.fssai}
                  alt="FSSAI Renewal"
                  className="rounded"
                />
                <div className="mt-3 font-medium">FSSAI Renewal</div>
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
