"use client";

import React, { useEffect, useRef, useState } from "react";
import { Search, Check, Plus, ChevronDown } from "lucide-react";

const ASSETS = {
  logo: "/images/india-logo.jpg",
  heroBg: "/images/hero.png",
  whatsapp: "/images/whatsapp.png",
  docsImg: "/images/business-docs.png",
  formsImg: "/images/business-forms.png",
  docsRequiredImg: "/images/business-docs-required.png",
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

export default function TDSReturnFilingPage(): React.ReactElement {
  const [gstin, setGstin] = useState("");
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const faqQuestions = [
    "What is TDS?",
    "What is TAN?",
    "Which forms are used for TDS returns?",
    "What are the due dates for TDS returns?",
    "What is the penalty for late filing of TDS returns?",
    "How do I deposit TDS online?",
  ];
  const faqAnswers: Record<number, string> = {
    0: "Tax Deducted at Source (TDS) is when tax is deducted by the payer at the time of making specified payments to the payee.",
    1: "TAN is the Tax Deduction and Collection Account Number required for deductors to file TDS returns and deposit TDS.",
    2: "Common forms include 24Q (salaries), 26Q (non-salary payments), 27Q (payments to non-residents), and 27EQ (TCS).",
    3: "Quarterly TDS return due dates: Q1 (Apr-Jun) - July 31, Q2 (Jul-Sep) - Oct 31, Q3 (Oct-Dec) - Jan 31, Q4 (Jan-Mar) - May 31.",
    4: "Penalties can include interest for late deduction/remittance and fees per day for late filing; assessing officer may impose additional penalties.",
    5: "Deposit TDS online using the government's challan system/authorized bank portals, ensuring correct TAN, challan and payment details.",
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
                      Accountant for TDS Filings
                    </h1>
                    <p className="text-slate-200 text-sm md:text-base mb-6 max-w-prose">
                      File TDS returns, manage challans, and reconcile payments
                      effortlessly using our Accountants & LEDGERS platform.
                    </p>
                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="flex flex-col sm:flex-row items-center gap-4"
                    >
                      <input
                        aria-label="Enter GSTIN"
                        placeholder="ENTER GSTIN"
                        value={gstin}
                        onChange={(e) => setGstin(e.target.value)}
                        className="w-full sm:w-[360px] bg-transparent border border-[rgba(255,255,255,0.12)] rounded-md px-4 py-3 placeholder:text-slate-300 text-white outline-none"
                      />
                      <button className="px-6 py-3 bg-white text-slate-900 rounded-md font-medium">
                        Get Accountant
                      </button>
                    </form>
                  </div>
                </div>
                <div className="w-full md:w-96 flex justify-end">
                  <div
                    className="relative"
                    style={{ width: 420, maxWidth: "100%" }}
                  >
                    <img
                      src={ASSETS.hrPeople}
                      alt="TDS"
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
                👥
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-slate-800">
                  Dedicated TDS specialist
                </h3>
                <p className="text-sm text-slate-600">
                  Dedicated TDS specialist to manage monthly TDS workings,
                  challans, payment tracking, and return preparation across
                  sections—at a fraction of the cost of a full-time hire.
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
                  End-to-end preparation and filing of all TDS returns with
                  due-date tracking, reconciliation of challans and deductions,
                  and periodic reviews to avoid interest, late fees, and
                  notices.
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
                  Automated bank feeds, reconciliations, TRACES validation,
                  document vault, and audit-ready reports—inside one secure
                  system.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <main className="max-w-[1180px] mx-auto px-6 py-10 space-y-8">
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-center">
            Simple, Transparent TDS Return Filing Pricing
          </h2>
          <p className="text-sm text-gray-600 mt-2 text-center max-w-[880px] mx-auto">
            File your TDS returns online with expert assistance, error-free
            filing, and timely submission tracking.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border p-6 shadow-sm">
              <div className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs mb-3">
                LEDGERS
              </div>
              <h3 className="font-semibold text-lg">Software Only</h3>
              <p className="text-sm text-gray-600 mt-2">
                LEDGERS Software Access - 1 Year
              </p>
              <div className="mt-4 text-2xl font-bold">
                ₹5,899 <span className="text-sm font-normal">/ yr + GST</span>
              </div>
              <button className="mt-4 w-full bg-slate-900 text-white py-3 rounded-full">
                Start Filing Now
              </button>
              <ul className="mt-5 space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <Check size={16} /> LEDGERS Software Access - 1 Year
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} /> TDS Compliance Dashboard & Alerts
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} /> Deductor–Deductee Reconciliation & PAN
                  Validation
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} /> Automated TDS calculations (section-wise)
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border p-6 shadow-sm ring-2 ring-indigo-600/20">
              <div className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs mb-3">
                Accounting Software + Service
              </div>
              <h3 className="font-semibold text-lg">Accountant</h3>
              <p className="text-sm text-gray-600 mt-2">
                Dedicated Accountant Support - 1 Assigned Accountant
              </p>
              <div className="mt-4 text-2xl font-bold">
                ₹15,899 <span className="text-sm font-normal">/ FY + GST</span>
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
                  <Check size={16} /> Quarterly TDS Return Filing (24Q, 26Q,
                  27Q, 27EQ) - 1 Year
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} /> TRACES Validation Before Filing
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} /> TDS Certificate Generation
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} /> Correction Statement Filing
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} /> Deductor–Deductee Reconciliation
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} /> Ledgers Accounting Software - 1 Year
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border p-6 shadow-sm">
              <div className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs mb-3">
                Most popular
              </div>
              <h3 className="font-semibold text-lg">TDS Filing – 2 Years</h3>
              <p className="text-sm text-gray-600 mt-2">
                Dedicated Accountant Support with 2 Year coverage
              </p>
              <div className="mt-4 text-2xl font-bold">
                ₹25,899{" "}
                <span className="text-sm font-normal">/ 2 FY + GST</span>
              </div>
              <button className="mt-4 w-full bg-slate-900 text-white py-3 rounded-full">
                Start Filing Now
              </button>
              <ul className="mt-5 space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <Check size={16} /> Quarterly TDS Return Filing - 2 Years
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} /> TRACES Validation Before Filing
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} /> TDS Certificate Generation
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} /> Deductor–Deductee Reconciliation
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} /> Ledgers Accounting Software - 2 Years
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
                Record and review TDS deductions, challans, and payments in real
                time with automated calculation, PAN validation, and a clear
                audit trail—inside one shared workspace.
              </p>
            </div>
            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">TDS Return Filing</h4>
              <p className="mt-2">
                Preparation and filing of all TDS returns with reconciliation,
                automated due-date tracking, and timely submission.
              </p>
            </div>
            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">
                Preparation of TDS Summary & Reports
              </h4>
              <p className="mt-2">
                Monthly and quarterly TDS summaries, deduction statements,
                mismatch reports, and year-end Form 16/16A generation.
              </p>
            </div>
            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">Quarterly TDS Return Filing</h4>
              <p className="mt-2">
                24Q for salaries, 26Q for non-salary payments, 27Q for
                non-residents, and 27EQ for TCS—prepared and filed each quarter.
              </p>
            </div>
            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">
                Deductor–Deductee Reconciliation
              </h4>
              <p className="mt-2">
                Matching TDS deducted and deposited with TDS credit appearing
                for the deductee in Form 26AS/AIS to avoid mismatches and
                notices.
              </p>
            </div>
            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">TRACES Validation Before Filing</h4>
              <p className="mt-2">
                Ensure PAN details, challans, and deductee-wise entries match
                the TRACES database to avoid errors and rejections.
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
                Reconciliations, TDS tracking, challan mapping, quarterly
                returns, timely filing, and MIS reports for compliance.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold mb-4">
            Why IndiaFilings for TDS Compliance
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
                Start with books; add TDS returns, challans, and GST/IT/ROC
                filings as you grow.
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
            TDS - Tax Deducted at Source
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Tax Deducted at Source (TDS) is a mechanism where tax is deducted by
            the payer (deductor) when making certain specified payments to the
            payee (deducted). Entities and individuals who engage in tax
            deductions at the source are legally required to file TDS returns
            quarterly before the TDS due date, detailing the specifics of these
            deductions. IndiaFilings provides expert assistance to streamline
            the process, ensuring accurate filing, timely payment, and
            reconciliation so that TDS credits reflect correctly in Form 26AS
            and Form 16/16A.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold mb-4">
            TDS Return Forms & Due Dates
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr>
                  <th className="py-3 px-2 border-b">Form</th>
                  <th className="py-3 px-2 border-b">Periodicity</th>
                  <th className="py-3 px-2 border-b">Particulars</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-2 border-b">Form 24Q</td>
                  <td className="py-3 px-2 border-b">Quarterly</td>
                  <td className="py-3 px-2 border-b">
                    Quarterly statement for TDS from Salaries
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-2 border-b">Form 26Q</td>
                  <td className="py-3 px-2 border-b">Quarterly</td>
                  <td className="py-3 px-2 border-b">
                    Statement of TDS in respect of payments other than Salaries
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-2 border-b">Form 27Q</td>
                  <td className="py-3 px-2 border-b">Quarterly</td>
                  <td className="py-3 px-2 border-b">
                    TDS on payments to non-residents
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-2 border-b">Form 27EQ</td>
                  <td className="py-3 px-2 border-b">Quarterly</td>
                  <td className="py-3 px-2 border-b">TCS return</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold mb-4">
            Documents Required For TDS Return Filing
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
            <div className="p-3 border rounded">
              <h4 className="font-semibold">TAN Details</h4>
              <p className="mt-2">
                Tax Deduction and Collection Account Number (TAN) of the
                deductor is mandatory.
              </p>
            </div>
            <div className="p-3 border rounded">
              <h4 className="font-semibold">PAN Details</h4>
              <p className="mt-2">
                PAN of deductor and deductees for accurate attribution of tax
                payments.
              </p>
            </div>
            <div className="p-3 border rounded">
              <h4 className="font-semibold">Bank Statements & Challans</h4>
              <p className="mt-2">
                Proof of TDS deposit and challan details for reconciliation and
                validation.
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
            © {new Date().getFullYear()} IndiaFilings - TDS Return Filing
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
