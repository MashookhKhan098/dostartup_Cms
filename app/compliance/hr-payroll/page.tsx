"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  Search,
  Check,
  Plus,
  ChevronRight,
  ShoppingBag,
  Check as CheckIcon,
} from "lucide-react";

// Assets and data
const ASSETS = {
  logo: "/images/india-logo.jpg",
  heroBg: "/images/hero.png",
  hrPeople: "/images/hr-payroll.png",
  ledgersBadge: "/images/ledgers-badge.png",
  whatsapp: "/images/whatsapp.png",
  docsImg: "/images/business-docs.png",
  formsImg: "/images/business-forms.png",
  docsRequiredImg: "/images/business-docs-required.png",
};

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

const HR_IMG_POS = {
  pc: { x: 66, y: 7, w: 588 },
  md: { x: 40, y: 12, w: 440 },
  sm: { x: 0, y: 0, w: 320 },
};

// utility hook reused across components
function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T | null>,
  handler: () => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const el = ref?.current;
      if (!el || el.contains(event.target as Node)) return;
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

// Extracted dropdown components for clarity
const IncomeTaxDropdown: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  useOnClickOutside(ref, () => setOpen(false));

  return (
    <div ref={ref} className="relative">
      <button
        aria-haspopup="true"
        aria-expanded={open}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={() => setOpen((s) => !s)}
        className="flex items-center gap-1 text-sm text-gray-700 hover:text-slate-900"
      >
        Income Tax <ChevronDown className="w-3.5 h-3.5" />
      </button>

      {open && (
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
};

const ComplianceDropdown: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  useOnClickOutside(ref, () => setOpen(false));

  return (
    <div ref={ref} className="relative">
      <button
        aria-haspopup="true"
        aria-expanded={open}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={() => setOpen((s) => !s)}
        className="flex items-center gap-1 text-sm text-gray-700 hover:text-slate-900"
      >
        Compliance <ChevronDown className="w-3.5 h-3.5" />
      </button>

      {open && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[780px] z-50">
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
};

const McAmegaDropdown: React.FC = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(ref, () => setOpen(false));

  return (
    <div ref={ref} className="relative">
      <button
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={() => setOpen((s) => !s)}
        className="flex items-center gap-1 text-sm text-gray-700 hover:text-slate-900"
      >
        MCA <ChevronDown className="w-3 h-3" />
      </button>

      {open && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[460px] z-50">
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
  );
};

// Header component that uses the extracted dropdowns
const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileIncomeOpen, setMobileIncomeOpen] = useState(false);
  const [mobileComplianceOpen, setMobileComplianceOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-[1180px] mx-auto px-6 py-3 flex items-center gap-6">
        <img src={ASSETS.logo} alt="IndiaFilings" className="h-10 w-auto" />

        <nav className="hidden lg:flex gap-6 items-center text-sm text-gray-700">
          <a href="#" className="hover:text-indigo-700">
            Startup
          </a>
          <a href="#" className="hover:text-indigo-700">
            Registrations
          </a>
          <a href="#" className="hover:text-indigo-700">
            Trademark
          </a>
          <a href="#" className="hover:text-indigo-700">
            GST
          </a>

          <IncomeTaxDropdown />
          <McAmegaDropdown />
          <ComplianceDropdown />

          <a href="#" className="hover:text-indigo-700">
            Personal
          </a>
          <a href="#" className="hover:text-indigo-700">
            Global
          </a>
          <a href="#" className="hover:text-indigo-700">
            Cities
          </a>
          <a href="#" className="hover:text-indigo-700">
            Guides
          </a>
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 border rounded-full px-3 py-1 text-sm text-slate-500">
            <Search size={14} />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search"
              className="outline-none text-sm bg-transparent w-40"
            />
          </div>

          <button className="px-3 py-1 border rounded-md text-sm">Login</button>

          <div className="md:hidden">
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
      </div>

      {/* Mobile menu using the same dropdown data */}
      {mobileOpen && (
        <div className="md:hidden py-3 border-t border-slate-100">
          <div className="flex flex-col gap-2 px-3">
            <a className="px-2 py-2 text-sm rounded hover:bg-slate-50">
              Startup
            </a>
            <a className="px-2 py-2 text-sm rounded hover:bg-slate-50">
              Registrations
            </a>
            <a className="px-2 py-2 text-sm rounded hover:bg-slate-50">
              Trademark
            </a>
            <a className="px-2 py-2 text-sm rounded hover:bg-slate-50">GST</a>

            {/* Income Tax mobile */}
            <div className="px-2 py-1">
              <button
                className="w-full flex items-center justify-between px-2 py-2 text-left"
                onClick={() => setMobileIncomeOpen((s) => !s)}
              >
                <span>Income Tax</span>
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

            {/* MCA mobile */}
            <details className="px-2 py-1">
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

            {/* Compliance mobile */}
            <div className="px-2 py-1">
              <button
                className="w-full flex items-center justify-between px-2 py-2 text-left"
                onClick={() => setMobileComplianceOpen((s) => !s)}
              >
                <span>Compliance</span>
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

            <a className="px-2 py-2 text-sm rounded hover:bg-slate-50">
              Personal
            </a>
            <a className="px-2 py-2 text-sm rounded hover:bg-slate-50">
              Global
            </a>
            <a className="px-2 py-2 text-sm rounded hover:bg-slate-50">
              Cities
            </a>
            <a className="px-2 py-2 text-sm rounded hover:bg-slate-50">
              Guides
            </a>
            <a className="px-2 py-2 text-sm rounded border text-center">
              Login
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

// Main page component (merged HR/Payroll page)
export default function ComplianceHRPayrollPage(): React.ReactElement {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [panGstin, setPanGstin] = useState("");
  const [employees, setEmployees] = useState("");

  const faqQuestions = [
    "How is Fractional HR different from a regular HR manager?",
    "Is LEDGERS HR platform included?",
    "Can I add Fractional HR or upgrade later?",
    "Do you handle statutory notices and assessments?",
  ];

  const faqAnswers: Record<number, string> = {
    0: "Fractional HR provides a dedicated team & platform at a fraction of full-time costs, scalable as you grow. It replaces or supplements an in-house HR manager with a team of specialists and a digital platform.",
    1: "Yes. LEDGERS HR platform (payroll, attendance, employee portal, compliance tools) is included in the packages mentioned.",
    2: "Yes — plans are designed to be upgradable as your headcount increases or needs change.",
    3: "Yes — we offer support for statutory notices and statutory interactions as part of managed compliance packages.",
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans antialiased">
      <Header />

      <div className="py-6">
        <div className="max-w-[1180px] mx-auto px-6">
          <section
            aria-label="HR hero"
            className="relative rounded-2xl overflow-hidden shadow-sm"
            style={{ minHeight: 360 }}
          >
            <div
              className="absolute inset-0 bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${ASSETS.heroBg})` }}
            >
              <img src={ASSETS.heroBg} alt="hero-bg" className="hidden" />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at left center, rgba(2,6,23,0.85) 0%, rgba(2,6,23,0.7) 45%, rgba(0,0,0,0.12) 100%)",
                }}
              />
            </div>

            <div className="relative z-10">
              <div className="mx-auto max-w-[1180px] px-6 py-12 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 max-w-2xl">
                  <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-2xl p-8 md:p-10 backdrop-blur-sm shadow-[0_20px_50px_rgba(2,6,23,0.18)]">
                    <h1 className="text-white text-3xl md:text-[34px] leading-tight font-semibold mb-3">
                      IndiaFilings HR
                    </h1>

                    <p className="text-slate-200 text-sm md:text-base mb-6 max-w-prose">
                      Get a Dedicated Accountant, a Qualified HR Professional
                      (minimum 3 years’ experience) and LEDGERS compliance
                      platform for your business.
                    </p>

                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="flex flex-col sm:flex-row items-center gap-4"
                    >
                      <input
                        aria-label="PAN or GSTIN"
                        placeholder="PAN / GSTIN"
                        value={panGstin}
                        onChange={(e) => setPanGstin(e.target.value)}
                        className="w-full sm:w-[360px] bg-transparent border border-[rgba(255,255,255,0.12)] rounded-md px-4 py-3 placeholder:text-slate-300 text-white outline-none"
                      />
                      <input
                        aria-label="Number of Employees"
                        placeholder="Number of Employees"
                        value={employees}
                        onChange={(e) => setEmployees(e.target.value)}
                        className="w-full sm:w-[220px] bg-transparent border border-[rgba(255,255,255,0.12)] rounded-md px-4 py-3 placeholder:text-slate-300 text-white outline-none"
                      />
                    </form>

                    <div className="mt-6">
                      <button className="px-6 py-3 bg-white text-slate-900 rounded-md font-medium shadow-[0_6px_20px_rgba(0,0,0,0.12)]">
                        Request Demo
                      </button>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-96 flex justify-end">
                  <div
                    className="relative"
                    style={{ width: HR_IMG_POS.pc.w, maxWidth: "100%" }}
                  >
                    <img
                      src={ASSETS.hrPeople}
                      alt="HR professionals"
                      style={{
                        position: "relative",
                        left: HR_IMG_POS.pc.x,
                        top: HR_IMG_POS.pc.y,
                        width: HR_IMG_POS.pc.w,
                        height: "auto",
                        maxWidth: "100%",
                        display: "block",
                      }}
                      className="pointer-events-none select-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                borderRadius: "1rem",
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.12) 100%)",
              }}
            />
          </section>
        </div>
      </div>

      <div className="max-w-[1180px] mx-auto px-6 -mt-4">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-slate-50 grid place-items-center text-indigo-500">
                👥
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-slate-800">
                  Dedicated support, flexible cost
                </h3>
                <p className="text-sm text-slate-600">
                  Get an experienced accountant to manage your ledgers, vendor
                  &amp; customer reconciliations, bank reconciliations, and
                  monthly close with precision and reliability - all at a
                  fraction of the cost of a full-time hire.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-slate-50 grid place-items-center text-emerald-500">
                ✔
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-slate-800">
                  Accurate & timely compliance
                </h3>
                <p className="text-sm text-slate-600">
                  End-to-end Director Management for Pvt Ltd Companies &amp;
                  LLPs – filing of DIR-3 KYC, Director Appointments (DIR-12),
                  Director Resignations (DIR-12), Director Disclosures (MGT-6),
                  and DIN Allotment.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-slate-50 grid place-items-center text-purple-500">
                ⚡
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-slate-800">
                  Powered by LEDGERS
                </h3>
                <p className="text-sm text-slate-600">
                  Experience seamless automation with real-time bank feeds,
                  smart reconciliations, integrated e-invoice/e-way bill
                  generation, secure document vault, and fully audit-ready
                  financial reports.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <main className="max-w-[1180px] mx-auto px-6 py-10 space-y-8">
        {/* Pricing, services, FAQ sections retained from original */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-center">
            Simple, Transparent HR & Payroll Management Pricing
          </h2>
          <p className="text-sm text-gray-600 mt-2 text-center max-w-[880px] mx-auto">
            Manage your HR and payroll online with guided onboarding, automated
            salary processing, and expert compliance support.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border p-6 shadow-sm">
              <div className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs mb-3">
                Payroll
              </div>
              <h3 className="font-semibold text-lg">Payroll Management</h3>
              <p className="text-sm text-gray-600 mt-2">
                Manage your HR and payroll online with guided onboarding and
                automated salary processing.
              </p>
              <div className="mt-4 text-2xl font-bold">
                ₹12,899 <span className="text-sm font-normal">/yr + GST</span>
              </div>
              <button className="mt-4 w-full bg-slate-900 text-white py-3 rounded-full">
                Start Now
              </button>

              <ul className="mt-5 space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-emerald-500" /> LEDGERS HR
                  Software (1 Year Subscription)
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-emerald-500" /> Attendance
                  Platform
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-emerald-500" /> Employee
                  Self-Serve
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-emerald-500" /> 12 Months
                  Managed Payroll Service
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-emerald-500" /> 12 Months HR
                  Support & Assistance
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-emerald-500" /> Upto 20
                  Employees
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border p-6 shadow-sm ring-2 ring-indigo-600/20">
              <div className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs mb-3">
                Most popular
              </div>
              <h3 className="font-semibold text-lg">Fractional HR</h3>
              <p className="text-sm text-gray-600 mt-2">
                Managed HR support with dedicated partner for up to 20
                employees.
              </p>
              <div className="mt-4 text-2xl font-bold">
                ₹42,899 <span className="text-sm font-normal">/yr + GST</span>
              </div>
              <button className="mt-4 w-full bg-slate-900 text-white py-3 rounded-full">
                Start Now
              </button>

              <ul className="mt-5 space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-emerald-500" /> LEDGERS HR
                  Platform setup & migration
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-emerald-500" /> 1 Year
                  Monthly Payroll Service
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-emerald-500" /> Dedicated
                  Accountant
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-emerald-500" /> Attendance
                  Platform
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-emerald-500" /> 1 Year PF &
                  ESI Filing
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-emerald-500" /> 1 Year TDS
                  Return Filing
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-emerald-500" /> Employee KYC,
                  Offer letter, Leave & holiday policy setup
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-emerald-500" /> HR Reports &
                  MIS
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-emerald-500" /> Upto 20
                  Employees
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border p-6 shadow-sm">
              <div className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs mb-3">
                Compliance
              </div>
              <h3 className="font-semibold text-lg">PF & ESI Compliance</h3>
              <p className="text-sm text-gray-600 mt-2">
                Comprehensive PF/ESI management for your workforce.
              </p>
              <div className="mt-4 text-2xl font-bold">
                ₹17,899 <span className="text-sm font-normal">/yr + GST</span>
              </div>
              <button className="mt-4 w-full bg-slate-900 text-white py-3 rounded-full">
                Start Now
              </button>

              <ul className="mt-5 space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-emerald-500" /> 12 Months
                  Managed PF Return Filing
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-emerald-500" /> 12 Months
                  Managed ESI Return Filing
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-emerald-500" /> Up to 20
                  Employees
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold text-center">
            Services Offered
          </h3>
          <p className="text-gray-600 mt-3 text-center">
            Smart solutions for HR operations, compliance, and employee growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 text-sm text-gray-700">
            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">Payroll Processing</h4>
              <p className="mt-2">
                Accurate and timely salary processing with payslips, tax
                deductions.
              </p>
            </div>

            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">Attendance & Leave Management</h4>
              <p className="mt-2">
                Track working hours, shifts, overtime, and leave requests with
                integrated approval workflows.
              </p>
            </div>

            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">Compliance & Statutory Filings</h4>
              <p className="mt-2">
                Complete support for PF, ESI, Professional Tax, TDS, and labour
                law compliance.
              </p>
            </div>

            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">Employee Onboarding</h4>
              <p className="mt-2">
                Digital offer letters, contracts, policy acknowledgments, and
                smooth employee joining experience.
              </p>
            </div>

            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">HR Policies & Contracts</h4>
              <p className="mt-2">
                Custom drafting of HR policies, employee handbooks, contracts,
                and compliance documentation.
              </p>
            </div>

            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">Employee Self-Service Portal</h4>
              <p className="mt-2">
                Employee-friendly portal for leave requests, payslips, and HR
                document access.
              </p>
            </div>

            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">HR Reports & Analytics</h4>
              <p className="mt-2">
                Custom dashboards and reports on payroll, headcount, and
                compliance status.
              </p>
            </div>

            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">Secure Document Storage</h4>
              <p className="mt-2">
                Employee and compliance documents stored safely in our cloud for
                up to 8 years, ensuring easy access and audit readiness.
              </p>
            </div>

            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">V-KYC Platform</h4>
              <p className="mt-2">
                Real-time, auditable video KYC verification integrated into the
                LEDGERS HR Platform for instant identity validation and
                compliance logs.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold text-center">How It Works</h3>
          <p className="text-gray-600 mt-3 text-center">
            A simple, guided process to set up and run HR smoothly, with ongoing
            reviews and compliance support.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="mx-auto w-12 h-12 rounded-full border flex items-center justify-center text-lg">
                1
              </div>
              <h4 className="font-semibold mt-4">HR Partner Assignment</h4>
              <p className="text-sm text-gray-600 mt-2">
                We assign a dedicated HR professional and support team who
                understand your business, workforce, and compliance needs.
              </p>
            </div>

            <div>
              <div className="mx-auto w-12 h-12 rounded-full border flex items-center justify-center text-lg">
                2
              </div>
              <h4 className="font-semibold mt-4">LEDGERS HR Setup</h4>
              <p className="text-sm text-gray-600 mt-2">
                We configure your payroll, attendance, leave policies, employee
                records, and compliance workflows inside the LEDGERS HR
                platform.
              </p>
            </div>

            <div>
              <div className="mx-auto w-12 h-12 rounded-full border flex items-center justify-center text-lg">
                3
              </div>
              <h4 className="font-semibold mt-4">
                Payroll, Compliance & Reviews
              </h4>
              <p className="text-sm text-gray-600 mt-2">
                We handle monthly payroll, statutory filings (PF, ESI, PT, TDS),
                and conduct quarterly HR reviews to ensure accuracy and employee
                satisfaction.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold mb-4">FAQs</h3>
          <div className="space-y-0">
            {faqQuestions.map((q, i) => (
              <div key={i} className="border-b last:border-b-0">
                <button
                  className="w-full text-left py-4 flex justify-between items-center text-sm"
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  aria-expanded={faqOpen === i}
                >
                  <span className="text-slate-800">{q}</span>
                  <span className="text-indigo-600 flex items-center gap-2">
                    {faqOpen === i ? "-" : <Plus size={14} />}
                  </span>
                </button>

                {faqOpen === i && (
                  <div className="px-2 pb-4 text-sm text-gray-600">
                    {faqAnswers[i]}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6">
            <h4 className="font-semibold mb-3">Popular Searches</h4>
            <div className="flex flex-wrap gap-2">
              {POPULAR_SEARCHES.map((s) => (
                <span
                  key={s}
                  className="text-xs px-3 py-1 border rounded bg-white text-gray-700"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white mt-12 py-12 border-t">
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
            © {new Date().getFullYear()} IndiaFilings - HR & Payroll
          </div>
        </div>
      </footer>

      <div className="fixed right-6 bottom-6 bg-green-500 text-white px-4 py-3 rounded-full shadow-2xl flex items-center gap-3 z-50">
        <img src={ASSETS.whatsapp} alt="wa" className="w-5 h-5" />
        <span className="font-semibold text-sm">Live Chat with Experts</span>
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
      `}</style>
    </div>
  );
}
