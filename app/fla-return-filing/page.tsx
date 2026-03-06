"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ChevronRight,
  ShoppingBag,
  Star,
  Plus,
  ChevronDown,
} from "lucide-react";

const ASSETS = {
  logo: "/images/india-logo.jpg",
  hero: "/images/FDI-filing-RBI.jpg",
  ledgers: "https://img.indiafilings.com/catalog/ledgers.png",
  whatsapp: "/images/whatsapp.svg",
  adRight1: "/images/company-compliance-ad.png",
  dinEkyc: "/images/din-ekyc-ad.png",
  cartIcon: "/images/cart-icon.svg",
  indiaFlag: "/images/india-flag.png",
  assuredBadge: "/images/assured-ledgers.png",
};

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
  { title: "Winding Up - Company", href: "/MCA/winding-up-company" },
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

function useOutsideClick<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T | null>,
  handler: () => void
) {
  useEffect(() => {
    const listener = (e: MouseEvent | TouchEvent) => {
      const el = ref?.current;
      if (!el) return;
      if (e.target instanceof Node && !el.contains(e.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export default function FlaReturnFilingPage(): React.ReactElement {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [gstChecked, setGstChecked] = useState(false);
  const [showIncomeDropdown, setShowIncomeDropdown] = useState(false);
  const [showMcaDropdown, setShowMcaDropdown] = useState(false);
  const [showComplianceDropdown, setShowComplianceDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const compRef = useRef<HTMLDivElement | null>(null);
  const incomeRef = useRef<HTMLDivElement | null>(null);
  const mcaRef = useRef<HTMLDivElement | null>(null);
  const mobileNavRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(compRef, () => setShowComplianceDropdown(false));
  useOutsideClick(incomeRef, () => setShowIncomeDropdown(false));
  useOutsideClick(mcaRef, () => setShowMcaDropdown(false));
  useOutsideClick(mobileNavRef, () => setMobileMenuOpen(false));

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setShowComplianceDropdown(false);
        setShowIncomeDropdown(false);
        setShowMcaDropdown(false);
        setMobileMenuOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const faqItems = [
    "What is the FLA Return?",
    "Who needs to file the FLA Return?",
    "What is the due date for filing the FLA Return?",
    "What if my accounts are not audited by the due date?",
    "What is the penalty for late filing of FLA Return?",
    "What are the penalties for not filing the FLA Return?",
    "What information is required for the FLA Return?",
    "How is the FLA Return submitted?",
    "What is the FLAIR portal?",
    "How do I register on the FLAIR portal?",
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 antialiased">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 md:gap-6 h-16">
            <div className="flex items-center gap-4 md:gap-6 w-full">
              <a href="/" className="flex items-center shrink-0">
                <img
                  src={ASSETS.logo}
                  alt="IndiaFilings"
                  className="h-9 w-auto"
                />
              </a>

              <nav className="hidden lg:flex items-center gap-6 text-sm text-gray-700 flex-1">
                {NAV_ITEMS.slice(1, NAV_ITEMS.length - 1).map((item) => {
                  if (item === "Income Tax") {
                    return (
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
                    );
                  }
                  if (item === "MCA") {
                    return (
                      <div
                        key={item}
                        ref={mcaRef}
                        className="relative"
                        onMouseEnter={() => setShowMcaDropdown(true)}
                        onMouseLeave={() => setShowMcaDropdown(false)}
                      >
                        <button
                          aria-haspopup="true"
                          aria-expanded={showMcaDropdown}
                          className="flex items-center gap-1 ui-focus"
                        >
                          {item} <ChevronDown className="w-3.5 h-3.5" />
                        </button>
                        {showMcaDropdown && (
                          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[640px] z-50">
                            <div className="bg-white rounded-lg shadow-lg border p-5">
                              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {MCA_DROPDOWN_LINKS.map((link) => (
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
                    );
                  }
                  if (item === "Compliance") {
                    return (
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
                    );
                  }
                  return (
                    <a
                      key={item}
                      href="#"
                      className="hover:text-indigo-700 text-sm"
                    >
                      {item}
                    </a>
                  );
                })}
                <a className="ml-auto hover:text-indigo-700">
                  {NAV_ITEMS.at(-1)}
                </a>
              </nav>

              <div className="lg:hidden ml-auto flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Open menu"
                  onClick={() => setMobileMenuOpen((s) => !s)}
                  className="p-2 rounded-md border"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    {mobileMenuOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div ref={mobileNavRef} className="lg:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              {NAV_ITEMS.map((item) => {
                if (item === "Income Tax") {
                  return (
                    <div key={item} className="space-y-1">
                      <button
                        className="w-full flex items-center justify-between px-2 py-2 text-left"
                        onClick={() => setShowIncomeDropdown((s) => !s)}
                      >
                        <span>{item}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      {showIncomeDropdown && (
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
                  );
                }
                if (item === "MCA") {
                  return (
                    <div key={item} className="space-y-1">
                      <button
                        className="w-full flex items-center justify-between px-2 py-2 text-left"
                        onClick={() => setShowMcaDropdown((s) => !s)}
                      >
                        <span>{item}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      {showMcaDropdown && (
                        <div className="pl-4 grid grid-cols-1 gap-1">
                          {MCA_DROPDOWN_LINKS.map((link) => (
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
                  );
                }
                if (item === "Compliance") {
                  return (
                    <div key={item} className="space-y-1">
                      <button
                        className="w-full flex items-center justify-between px-2 py-2 text-left"
                        onClick={() => setShowComplianceDropdown((s) => !s)}
                      >
                        <span>{item}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      {showComplianceDropdown && (
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
                  );
                }
                return (
                  <a
                    key={item}
                    href="#"
                    className="block px-2 py-2 text-sm text-slate-700"
                  >
                    {item}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </header>

      <div className="bg-gray-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-sm text-gray-500 flex flex-wrap gap-2 items-center">
            <a href="#" className="hover:underline">
              IndiaFilings
            </a>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <a href="#" className="hover:underline">
              Income Tax
            </a>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <span className="text-indigo-600 font-medium">
              FLA Return Filing
            </span>
          </div>
        </div>
      </div>

      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <section className="lg:col-span-9 space-y-6">
            <div className="bg-white rounded-2xl shadow-sm p-6 md:flex md:gap-6">
              <div className="md:w-1/3 flex-shrink-0">
                <div className="rounded-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-[#0b4bd6] to-[#0734a6] p-4 text-white text-center">
                    <h2 className="text-2xl font-bold tracking-tight">
                      FLA Return Filing
                    </h2>
                    <div className="text-xs mt-1 opacity-90">
                      FLA Return Filing
                    </div>
                  </div>
                  <div className="bg-white px-4 py-6 flex justify-center">
                    <div className="w-56 h-56 md:w-64 md:h-64 rounded-md overflow-hidden bg-white shadow-sm flex items-center justify-center -mt-4">
                      <img
                        src={ASSETS.hero}
                        alt="FLA hero"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <ul className="mt-4 text-sm space-y-2 text-gray-600">
                  <li>FLA Return Filing</li>
                  <li className="text-indigo-600">FLA Return Filing</li>
                  <li>
                    Companies that have received FDI and/or made FDI overseas in
                    any financial year must complete FLA Return Filing with the
                    RBI.
                  </li>
                  <li className="text-indigo-600 underline">Load More</li>
                </ul>
              </div>

              <div className="md:flex-1">
                <div className="flex flex-col sm:flex-row justify-between gap-4 items-start">
                  <div>
                    <h2 className="text-lg font-semibold text-slate-900">
                      FLA Return Filing
                    </h2>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} className="text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-xs text-slate-500">(5)</span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 max-w-md">
                    Companies that have received FDI and/or made FDI overseas in
                    any financial year must complete FLA Return Filing with the
                    RBI.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="border-2 border-dashed rounded-md border-[#f0dcd0] p-4 bg-white relative">
                    <div className="absolute -top-3 left-6 bg-white px-2 rounded-md text-xs text-green-700 border border-[#eff8f0]">
                      2 Exclusive Offers
                    </div>
                    <div className="font-semibold text-slate-900">
                      RBI Compliance
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                      Annual FLA Return Filing<div>RBI Compliance Support</div>
                    </div>
                    <div className="mt-3">
                      <button className="bg-white border border-green-400 text-green-700 px-3 py-1 rounded">
                        ADD
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-4 border-t pt-4 text-sm flex flex-col sm:flex-row justify-between items-start sm:items-center text-slate-600 gap-3">
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

                  <div className="mt-3 p-3 border rounded-md flex items-center gap-3">
                    <img
                      src={ASSETS.logo}
                      alt="save gst"
                      className="h-8 w-8 object-contain"
                    />
                    <div className="text-sm">
                      <div className="font-medium">
                        Save 18% with GST Registration
                      </div>
                      <div className="text-gray-500 text-xs">
                        Get GST eInvoice with Input Tax Credit
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <article className="bg-white rounded-2xl shadow-sm p-6 min-h-[60vh] h-full">
              <h1 className="text-2xl font-semibold text-center">
                FLA Return Filing
              </h1>
              <div className="mt-4 text-[15px] leading-7 text-gray-700 space-y-4">
                <p>
                  The FLA Return is a mandatory annual filing for Indian
                  companies, LLPs, and other entities engaged in receiving or
                  making foreign direct investments. This includes entities
                  involved in Foreign Direct Investment (FDI) within India or
                  Overseas Direct Investment (ODI). Under the regulations of the
                  Reserve Bank of India (RBI) and the Foreign Exchange
                  Management Act, 1999 (FEMA), the FLA Return is designed to
                  gather information on foreign liabilities and assets that are
                  reflected in the financial statements of these entities.
                </p>
                <p>
                  At IndiaFilings, we provide expert services to help Indian
                  Companies and LLPs efficiently handle their FLA Return
                  filings.
                </p>
                <h3 className="mt-4 font-semibold">
                  Introduction to FLA Return
                </h3>
                <p>
                  The Foreign Liabilities and Asset (FLA) Return is a mandatory
                  annual report for Indian organisations that have received
                  foreign direct investment (FDI) or have invested in FDI
                  overseas. This report, submitted to the Reserve Bank of India
                  (RBI), collects detailed information on the foreign
                  liabilities and assets listed on these entities' balance
                  sheets. Governed by the Foreign Exchange Management Act, 1999
                  (FEMA), the FLA Return thoroughly regulates India's foreign
                  exchange and international financial transactions.
                </p>
              </div>
            </article>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 bg-white rounded-2xl shadow-sm p-6 h-full">
                <h3 className="text-lg font-semibold mb-4">Related Guides</h3>
                <ul className="space-y-3 text-sm text-indigo-600 h-full">
                  <li>FLA Return Filing</li>
                  <li>What is FLA Return?</li>
                  <li>FDI in Insurance sector</li>
                  <li>8 Measure to Promote FDI</li>
                  <li>Types of Foreign investments in India</li>
                </ul>
              </div>

              <aside className="lg:col-span-5 bg-white rounded-2xl shadow-sm p-6 h-full">
                <h3 className="text-lg font-semibold mb-4">
                  FAQ's on FLA Return Filing
                </h3>
                <div className="space-y-2 text-sm text-gray-700 max-h-[56vh] overflow-y-auto pr-2">
                  {faqItems.map((q, i) => (
                    <div key={q} className="border-b pb-2">
                      <button
                        className="w-full text-left py-2 flex justify-between items-center text-sm"
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        aria-expanded={openFaq === i}
                      >
                        <span className="text-slate-800">{q}</span>
                        <span className="text-indigo-600 flex items-center gap-2">
                          {openFaq === i ? "-" : <Plus size={14} />}
                        </span>
                      </button>
                      {openFaq === i && (
                        <div className="px-2 pb-2 text-sm text-gray-600">
                          Please contact our advisors for a tailored reply or
                          consult the RBI / FEMA guidance for authoritative
                          rules.
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="mt-3">
                    <button className="px-4 py-2 border rounded-md text-sm text-indigo-600">
                      Load More
                    </button>
                  </div>
                </div>
              </aside>
            </div>
          </section>

          <aside className="lg:col-span-3 hidden lg:block">
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
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

              <div className="bg-white rounded-lg shadow-sm p-4 sticky top-[26rem]">
                <h4 className="font-semibold mb-3">Income Tax E-Filing</h4>
                <div className="p-3 border rounded-md flex items-center gap-3">
                  <img
                    src={ASSETS.ledgers}
                    alt="ledgers"
                    className="h-8 w-8 object-contain"
                  />
                  <div className="text-sm">
                    <div className="text-indigo-600 font-medium">
                      Income Tax E-Filing
                    </div>
                    <div className="text-gray-500 text-xs">
                      Income Tax E-Filing
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-sm">
                  <div className="font-medium">Partnership Compliance</div>
                  <div className="text-gray-500">Partnership Compliance</div>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden shadow-sm">
                <img
                  src={ASSETS.adRight1}
                  alt="company compliance"
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="rounded-lg overflow-hidden shadow-sm">
                <img
                  src={ASSETS.dinEkyc}
                  alt="din ekyc"
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold mb-3">Popular Searches</h4>
                <div className="flex flex-wrap gap-2">
                  {POPULAR_SEARCHES.slice(0, 20).map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 border rounded bg-white text-gray-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-4">
                <h4 className="font-semibold mb-3">Contact Advisor</h4>
                <p className="text-sm text-gray-600">
                  Need help with FLA filings? Our advisors can assist with
                  end-to-end filing and documentation.
                </p>
                <div className="mt-3">
                  <button className="w-full bg-indigo-600 text-white py-2 rounded-md text-sm">
                    Schedule a Call
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <footer className="bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">IndiaFilings</h5>
              <a className="block text-sm text-gray-600">About IndiaFilings</a>
              <a className="block text-sm text-gray-600">Careers</a>
              <a className="block text-sm text-gray-600">Contact Us</a>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">Platforms</h5>
              <a className="block text-sm text-gray-600">Business Search</a>
              <a className="block text-sm text-gray-600">Trademark Search</a>
              <a className="block text-sm text-gray-600">Filings.AE for UAE</a>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">Usage</h5>
              <a className="block text-sm text-gray-600">Terms & Conditions</a>
              <a className="block text-sm text-gray-600">Privacy Policy</a>
              <a className="block text-sm text-gray-600">Refund Policy</a>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">Policies</h5>
              <a className="block text-sm text-gray-600">
                Confidentiality Policy
              </a>
              <a className="block text-sm text-gray-600">Disclaimer Policy</a>
              <a className="block text-sm text-gray-600">IndiaFilings Review</a>
            </div>
          </div>

          <div className="text-center text-gray-500 mt-6">
            © {new Date().getFullYear()} IndiaFilings
          </div>
        </div>
      </footer>

      <div className="fixed right-4 bottom-4 md:right-6 md:bottom-6 z-50">
        <a
          href="#"
          className="flex items-center gap-3 bg-green-500 text-white px-4 py-3 rounded-full shadow-xl"
          aria-label="Live Chat with Experts"
        >
          <img src={ASSETS.whatsapp} alt="wa" className="w-5 h-5" />
          <span className="hidden sm:inline-block font-medium text-sm">
            Live Chat with Experts
          </span>
        </a>
      </div>
    </div>
  );
}
