"use client";

import React, { useEffect, useRef, useState } from "react";
import { Search, Check, Plus } from "lucide-react";

const ASSETS = {
  logo: "/images/india-logo.jpg",
  heroBg: "/images/hero.png",
  whatsapp: "/images/whatsapp.png",
  ledgersBadge: "/images/ledgers-badge.png",
  hrPeople: "/images/hr-payroll.png",
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

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const ref = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(ref, () => setMobileOpen(false));

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
          <a href="#" className="hover:text-indigo-700">
            Income Tax
          </a>
          <a href="#" className="hover:text-indigo-700">
            MCA
          </a>
          <a href="#" className="hover:text-indigo-700">
            Compliance
          </a>
          <a href="#" className="hover:text-indigo-700">
            Guides
          </a>
        </nav>

        <div className="ml-auto flex items-center gap-3" ref={ref}>
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
            <a className="px-2 py-2 text-sm rounded hover:bg-slate-50">
              Income Tax
            </a>
            <a className="px-2 py-2 text-sm rounded hover:bg-slate-50">MCA</a>
            <a className="px-2 py-2 text-sm rounded hover:bg-slate-50">
              Compliance
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

export default function ProprietorshipCompliancePage(): React.ReactElement {
  const [gstin, setGstin] = useState("");
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const faqQuestions = [
    "Is it mandatory to file ITR for a proprietorship?",
    "Which ITR form should a proprietor use?",
    "When does a proprietorship require an audit?",
    "When is GST registration required for proprietorships?",
    "What documents are needed to file ITR for a proprietorship?",
    "How does presumptive taxation help proprietors?",
  ];

  const faqAnswers: Record<number, string> = {
    0: "Yes — proprietorship income is treated as the proprietor's personal income. Filing ITR is mandatory if income crosses applicable thresholds or in other specified scenarios.",
    1: "Proprietors generally use ITR-3 (if not under presumptive scheme) or ITR-4 (Sugam) if opting for presumptive taxation under Sections like 44AD/44ADA.",
    2: "An audit is required when turnover/receipts exceed statutory limits (e.g., turnover > Rs. 5 crore for some cases or professional receipts > Rs. 50 lakh), or when specific provisions apply.",
    3: "GST registration is required when aggregate turnover exceeds the threshold (generally Rs. 20 lakh in many states; thresholds may vary). Once registered, GSTR-1 and GSTR-3B (and others where applicable) must be filed.",
    4: "Key documents: PAN, Aadhaar, bank statements, books of accounts, challans (advance tax/TDS), Form 16/16A/26AS, invoices and proofs of expenses.",
    5: "Presumptive taxation simplifies compliance for small taxpayers by allowing income to be declared at prescribed rates (Section 44AD/44ADA), reducing record-keeping and audit requirements for eligible businesses.",
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans antialiased">
      <Header />

      <div className="py-8">
        <div className="max-w-[1180px] mx-auto px-6">
          <section
            aria-label="hero"
            className="relative rounded-2xl overflow-hidden shadow-sm"
            style={{ minHeight: 320 }}
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
                    "linear-gradient(90deg, rgba(2,6,23,0.85) 0%, rgba(2,6,23,0.55) 50%, rgba(0,0,0,0.12) 100%)",
                }}
              />
            </div>

            <div className="relative z-10">
              <div className="mx-auto max-w-[1180px] px-6 py-12 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 max-w-2xl">
                  <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-2xl p-8 md:p-10 backdrop-blur-sm">
                    <h1 className="text-white text-3xl md:text-[34px] leading-tight font-semibold mb-3">
                      Proprietorship Compliance
                    </h1>
                    <p className="text-slate-200 text-sm md:text-base mb-6 max-w-prose">
                      File GST & IT returns, handle financial statement
                      preparation, and manage all monthly and annual compliances
                      effortlessly using our Accountants & LEDGERS platform.
                    </p>

                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="flex flex-col sm:flex-row items-center gap-4"
                    >
                      <input
                        aria-label="ENTER GSTIN"
                        placeholder="ENTER GSTIN"
                        value={gstin}
                        onChange={(e) => setGstin(e.target.value)}
                        className="w-full sm:w-[360px] bg-transparent border border-[rgba(255,255,255,0.12)] rounded-md px-4 py-3 placeholder:text-slate-300 text-white outline-none"
                      />
                      <button className="px-6 py-3 bg-white text-slate-900 rounded-md font-medium">
                        Get Accountant
                      </button>
                    </form>

                    <div className="mt-4 text-sm text-slate-300">
                      Dedicated support, flexible cost — Experienced accountant
                      managing your monthly ledgers, vendor/customer/bank
                      reconciliations, and monthly close — at a fraction of a
                      full-time hire.
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-96 flex justify-end">
                  <div
                    className="relative"
                    style={{ width: 420, maxWidth: "100%" }}
                  >
                    <img
                      src={ASSETS.hrPeople}
                      alt="Proprietorship"
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                      }}
                      className="pointer-events-none select-none rounded-lg shadow-md"
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
                  "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.06) 100%)",
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
                ✔
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-slate-800">
                  Accurate & timely compliance
                </h3>
                <p className="text-sm text-slate-600">
                  End-to-end preparation and filing of GST, Income Tax with
                  due-date tracking and timely reviews to keep filings
                  error-free and on schedule.
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
                  Automated bank feeds and reconciliations, e-invoice/e-way bill
                  (where applicable), document vault, and audit-ready
                  reports—inside one secure system.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-slate-50 grid place-items-center text-indigo-500">
                👥
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-slate-800">
                  Dedicated Accountants
                </h3>
                <p className="text-sm text-slate-600">
                  Experienced accountants to manage monthly bookkeeping, GST/IT
                  filings, reconciliations and monthly close activities for
                  proprietorships.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <main className="max-w-[1180px] mx-auto px-6 py-10 space-y-8">
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-center">
            Simplified Proprietorship Compliance with Clear, Transparent
            Pricing.
          </h2>
          <p className="text-sm text-gray-600 mt-2 text-center max-w-[880px] mx-auto">
            File your GST and Income Tax returns online with expert assistance,
            error-free filing, and timely submission tracking.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border p-6 shadow-sm">
              <div className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs mb-3">
                LEDGERS
              </div>
              <h3 className="font-semibold text-lg">Software Only</h3>
              <p className="text-sm text-gray-600 mt-2">
                LEDGERS GST Software Access - 1 Year
              </p>
              <div className="mt-4 text-2xl font-bold">
                ₹5,899 <span className="text-sm font-normal">/yr + GST</span>
              </div>
              <button className="mt-4 w-full bg-slate-900 text-white py-3 rounded-full">
                Start Filing Now
              </button>
              <ul className="mt-5 space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <Check size={16} /> LEDGERS GST Software Access - 1 Year
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} /> Compliance Dashboard & Alerts
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} /> GST Invoicing & e-Invoicing
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} /> Invoice Management System (IMS)
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} /> eWay Billing & GST ITC Tools
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} /> Accounting Software
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} /> Payroll Software
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border p-6 shadow-sm ring-2 ring-indigo-600/20">
              <div className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs mb-3">
                Accounting Software + Service
              </div>
              <h3 className="font-semibold text-lg">Accountant</h3>
              <p className="text-sm text-gray-600 mt-2">
                Accountant – Quarterly Plan
              </p>
              <div className="mt-4 text-2xl font-bold">
                ₹7,899{" "}
                <span className="text-sm font-normal">/quarter + GST</span>
              </div>
              <button className="mt-4 w-full bg-slate-900 text-white py-3 rounded-full">
                Start Filing Now
              </button>
              <ul className="mt-5 space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <Check size={16} /> Dedicated Accountant Support - 1 Assigned
                  Accountant
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} /> GST Return Filing (GSTR-1, 3B) - 1 Quarter
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} /> LEDGERS GST Software Access - 1 Year
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} /> Compliance Dashboard & Alerts
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} /> GST Invoicing & e-Invoicing
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} /> Invoice Management System (IMS)
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} /> eWay Billing & GST ITC Tools
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} /> Accounting Software
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} /> Payroll Software
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border p-6 shadow-sm">
              <div className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs mb-3">
                Most popular
              </div>
              <h3 className="font-semibold text-lg">
                Accountant – Annual Plan
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Dedicated Accountant Support with annual coverage
              </p>
              <div className="mt-4 text-2xl font-bold">
                ₹19,899 <span className="text-sm font-normal">/yr + GST</span>
              </div>
              <button className="mt-4 w-full bg-slate-900 text-white py-3 rounded-full">
                Start Filing Now
              </button>
              <ul className="mt-5 space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <Check size={16} /> Dedicated Accountant Support
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} /> GST Return Filing (GSTR-1, 3B) - 1 Year
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} /> GST Annual Filing (GSTR-9) - Included (If
                  Applicable)
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} /> Annual Financial Statements
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} /> Income Tax Return Filing (for Business or
                  Proprietor)
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} /> CA Consultation - 4 Consultations
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} /> Notice Handling Support
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} /> LEDGERS GST Software Access - 1 Year
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
            We provide comprehensive accounting support tailored to meet the
            day-to-day financial needs of your business
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 text-sm text-gray-700">
            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">Access to LEDGERS</h4>
              <p className="mt-2">
                Record and review transactions in real time with shared access —
                clean books, clear audit trail, one workspace.
              </p>
            </div>
            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">
                GST Return Filing (Monthly/Quarterly)
              </h4>
              <p className="mt-2">
                GSTR-1, GSTR-3B (and others as needed) prepared, reconciled, and
                filed on time with input/output matching.
              </p>
            </div>
            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">
                Preparation of Financial Statements
              </h4>
              <p className="mt-2">
                We prepare Balance Sheet, Profit & Loss Account, and Trial
                Balance as per accounting standards, providing clarity for
                decision-making and audits.
              </p>
            </div>
            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">Income Tax Return Filing</h4>
              <p className="mt-2">
                ITR preparation and filing for businesses/individuals with
                correct income, deductions, and disclosures — optimized within
                law.
              </p>
            </div>
            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">E-Invoicing & E-Way Bill</h4>
              <p className="mt-2">
                Easy IRN-based e-invoice generation with priority focus on
                accurate and timely E-Way Bill creation and tracking to keep
                your goods movement fully GST-compliant.
              </p>
            </div>
            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">CA Assistance</h4>
              <p className="mt-2">
                Get 4 consultations with a Chartered Accountant for guidance on
                accounting, taxation, and compliance matters. This ensures
                expert support whenever you need clarity or professional advice.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold text-center">How It Works</h3>
          <p className="text-gray-600 mt-3 text-center">
            A guided onboarding process with consistent monthly accounting and
            reporting.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="mx-auto w-12 h-12 rounded-full border flex items-center justify-center text-lg">
                1
              </div>
              <h4 className="font-semibold mt-4">Assign your accountant</h4>
              <p className="text-sm text-gray-600 mt-2">
                You get a named accountant familiar with your industry and a
                clear kickoff checklist.
              </p>
            </div>
            <div>
              <div className="mx-auto w-12 h-12 rounded-full border flex items-center justify-center text-lg">
                2
              </div>
              <h4 className="font-semibold mt-4">System Setup</h4>
              <p className="text-sm text-gray-600 mt-2">
                Connect bank feeds, import masters & opening balances, map
                ledgers/tax series, and configure LEDGERS.
              </p>
            </div>
            <div>
              <div className="mx-auto w-12 h-12 rounded-full border flex items-center justify-center text-lg">
                3
              </div>
              <h4 className="font-semibold mt-4">Monthly close & compliance</h4>
              <p className="text-sm text-gray-600 mt-2">
                Bank/vendor/customer reconciliations, MIS, and on-time GST,
                Finance Statement Preparation and Income Tax filings.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold mb-4">
            Why IndiaFilings for Fractional Accountant
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">Affordable Expertise</h4>
              <p className="mt-2">
                Skilled accountants without full-time hiring costs.
              </p>
            </div>
            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">Zero Surprises</h4>
              <p className="mt-2">
                Transparent reporting and proactive due-date alerts.
              </p>
            </div>
            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">Scalable Service</h4>
              <p className="mt-2">
                Start with books; add GST/IT filings and compliance advisory as
                you grow.
              </p>
            </div>
          </div>
          <div className="mt-6">
            <h4 className="font-semibold mb-2">Software + Service</h4>
            <p className="text-sm text-gray-600">
              The LEDGERS platform, bundled with experts who run it.
            </p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold mb-4">
            Proprietorship Compliance — What you need to know
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Running a Sole Proprietorship in India comes with a set of crucial
            financial and legal responsibilities. Compliance with various tax
            and regulatory requirements is essential to ensure your business's
            smooth operation and growth. This includes filing Income Tax
            Returns, TDS Returns, GST Returns, EPF Returns, maintaining accurate
            accounting records, and sometimes undergoing a Tax Audit.
          </p>

          <h4 className="font-semibold mt-4">
            Income Tax Return filing for Proprietorship
          </h4>
          <p className="mt-2 text-sm text-gray-700">
            Every proprietorship in India is obligated to file income tax
            returns annually as it is treated as an extension of the proprietor.
            The proprietor's PAN is used for filing. Filing a NIL return is
            required if income is zero.
          </p>

          <h4 className="font-semibold mt-4">
            Is it necessary for Proprietorship to File ITR?
          </h4>
          <p className="mt-2 text-sm text-gray-700">
            Yes. Proprietors must file ITR if total income exceeds thresholds
            based on age and other conditions. Filing on time allows losses to
            be carried forward and certain deductions to be claimed.
          </p>

          <h4 className="font-semibold mt-4">
            Income Tax Slabs & Alternate Regime
          </h4>
          <p className="mt-2 text-sm text-gray-700">
            Proprietors follow the individual tax slabs for their personal
            income. An alternate tax regime (Section 115BAC) is available with
            specific rates and conditions — opting for it requires giving up
            certain exemptions/deductions.
          </p>

          <h4 className="font-semibold mt-4">Presumptive Taxation Scheme</h4>
          <p className="mt-2 text-sm text-gray-700">
            Small taxpayers can opt for presumptive taxation (Section
            44AD/44ADA), enabling taxation on estimated income and reducing
            record-keeping and audit burdens.
          </p>

          <h4 className="font-semibold mt-4">Deadlines & Audit</h4>
          <p className="mt-2 text-sm text-gray-700">
            Typical ITR deadline (no audit): July 31. If audit required,
            deadlines vary (commonly September/November depending on
            circumstances). Audit thresholds depend on turnover/receipts and
            scheme applicability.
          </p>

          <h4 className="font-semibold mt-4">Required Documents</h4>
          <div className="docs-list">
            <div className="p-3 border rounded">PAN Card</div>
            <div className="p-3 border rounded">
              Bank Account Details & Statements
            </div>
            <div className="p-3 border rounded">Aadhaar Card</div>
            <div className="p-3 border rounded">
              Advance Tax Payment Challan, Form 16/16A/26AS
            </div>
            <div className="p-3 border rounded">
              Invoices and proofs of expenses
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold mb-4">Related Guides</h3>
          <div className="flex flex-wrap gap-3 text-sm">
            <a className="px-3 py-2 border rounded">
              Income Tax Rate for Proprietorship – AY 2019-20
            </a>
            <a className="px-3 py-2 border rounded">
              FAQ's on Proprietorship Compliance
            </a>
            <a className="px-3 py-2 border rounded">
              How to file income tax returns for a Proprietorship?
            </a>
            <a className="px-3 py-2 border rounded">
              When to file ITR-4 / ITR-3 for proprietorship?
            </a>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold mb-4">FAQ's</h3>
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
            © {new Date().getFullYear()} IndiaFilings - Proprietorship
            Compliance
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
        h1,
        h2,
        h3 {
          color: #0b2545;
        }
      `}</style>
    </div>
  );
}
