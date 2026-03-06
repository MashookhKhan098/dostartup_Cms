"use client";

import React, { useEffect, useRef, useState } from "react";
import { Search, Plus } from "lucide-react";

// Assets used (same as CA page, as requested)
const ASSETS = {
  logo: "/images/india-logo.jpg",
  heroBg: "/images/hero.png",
  whatsapp: "/images/whatsapp.png",
  hrPeople: "/images/hr-payroll.png",
};

// Detect click outside
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

// Popular searches
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

// Header Component
const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const ref = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(ref, () => setMobileOpen(false));

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-[1180px] mx-auto px-6 py-3 flex items-center gap-6">
        <img src={ASSETS.logo} alt="IndiaFilings" className="h-10 w-auto" />

        {/* Desktop Nav */}
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
          {/* Search */}
          <div className="hidden md:flex items-center gap-2 border rounded-full px-3 py-1 text-sm text-slate-500">
            <Search size={14} />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search"
              className="outline-none text-sm bg-transparent w-40"
            />
          </div>

          {/* Login */}
          <button className="px-3 py-1 border rounded-md text-sm">Login</button>

          {/* Mobile menu */}
          <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((s) => !s)}
              className="p-2 rounded-md border border-slate-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                {mobileOpen ? (
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden py-3 border-t border-slate-100">
          <div className="flex flex-col gap-2 px-3">
            {[
              "Startup",
              "Registrations",
              "Trademark",
              "GST",
              "Income Tax",
              "MCA",
              "Compliance",
            ].map((item) => (
              <a
                key={item}
                className="px-2 py-2 text-sm rounded hover:bg-slate-50"
              >
                {item}
              </a>
            ))}
            <a className="px-2 py-2 text-sm rounded border text-center">
              Login
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

// ------------------- MAIN PAGE -------------------

export default function BookkeepingPage(): React.ReactElement {
  const [gstin, setGstin] = useState("");
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  // FAQ
  const faqQuestions = [
    "How is a Fractional Accountant different from a full-time hire?",
    "Is LEDGERS HR platform included?",
    "Can I add CA oversight or advisory later?",
    "Will my data remain secure?",
  ];

  const faqAnswers: Record<number, string> = {
    0: "A Fractional Accountant gives you expert accounting support without the cost of a full-time hire. You get dedicated bookkeeping, reconciliations, and compliance handled each month under a structured process.",
    1: "LEDGERS HR is not part of the standard plan, but it can be added separately depending on your business needs.",
    2: "Yes. You can add Chartered Accountant oversight, tax advisory, payroll, or additional compliance services at any time.",
    3: "Yes. All your financial data is stored securely within LEDGERS, with encrypted access and controlled permissions.",
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans antialiased">
      <Header />

      {/* HERO */}
      <div className="py-8">
        <div className="max-w-[1180px] mx-auto px-6">
          <section
            className="relative rounded-2xl overflow-hidden shadow-sm"
            style={{ minHeight: 320 }}
          >
            {/* Background */}
            <div
              className="absolute inset-0 bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${ASSETS.heroBg})` }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(2,6,23,0.85) 0%, rgba(2,6,23,0.55) 50%, rgba(0,0,0,0.12) 100%)",
                }}
              />
            </div>

            {/* HERO CONTENT */}
            <div className="relative z-10">
              <div className="mx-auto max-w-[1180px] px-6 py-12 flex flex-col md:flex-row items-center gap-8">
                {/* Left */}
                <div className="flex-1 max-w-2xl">
                  <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-2xl p-8 md:p-10 backdrop-blur-sm">
                    <h1 className="text-white text-3xl md:text-[34px] font-semibold leading-tight mb-3">
                      IndiaFilings Accountant
                    </h1>
                    <p className="text-slate-200 text-sm md:text-base mb-6 max-w-prose">
                      A dedicated accountant to keep your books accurate,
                      reconcile accounts, and handle statutory filings—GST,
                      Income Tax, and ROC—without hiring full-time staff.
                    </p>

                    {/* Form */}
                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="flex flex-col sm:flex-row gap-4"
                    >
                      <input
                        placeholder="ENTER GSTIN"
                        aria-label="Enter GSTIN"
                        value={gstin}
                        onChange={(e) => setGstin(e.target.value)}
                        className="w-full sm:w-[360px] bg-transparent border border-[rgba(255,255,255,0.12)] rounded-md px-4 py-3 text-white placeholder:text-slate-300 outline-none"
                      />
                      <button className="px-6 py-3 bg-white text-slate-900 rounded-md font-medium">
                        Request Demo
                      </button>
                    </form>
                  </div>
                </div>

                {/* Right Image */}
                <div className="w-full md:w-96 flex justify-end">
                  <div
                    className="relative"
                    style={{ width: 420, maxWidth: "100%" }}
                  >
                    <img
                      src={ASSETS.hrPeople}
                      alt="Accountant"
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

          {/* 3 Card Section */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-semibold text-slate-800 mb-2">
                Dedicated support, flexible cost
              </h3>
              <p className="text-sm text-slate-600">
                Experienced accountant managing bookkeeping, reconciliations,
                and monthly close—at a fraction of a full-time salary.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-semibold text-slate-800 mb-2">
                Accurate & timely compliance
              </h3>
              <p className="text-sm text-slate-600">
                End-to-end GST, Income Tax, and ROC filings with due-date
                tracking and review workflows.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-semibold text-slate-800 mb-2">
                Powered by LEDGERS
              </h3>
              <p className="text-sm text-slate-600">
                Automated bank feeds, reconciliations, e-invoice/e-way bill,
                document vault, and audit-ready reports.
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main className="max-w-[1180px] mx-auto px-6 py-10 space-y-8">
        {/* SERVICES OFFERED */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold text-center">
            Services Offered
          </h3>
          <p className="text-gray-600 mt-3 text-center">
            We provide comprehensive accounting support tailored to meet the
            day-to-day financial needs of your business.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 text-sm text-gray-700">
            {/* LEDGERS Access */}
            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">Access to LEDGERS</h4>
              <p className="mt-2">
                Record and review transactions in real time—clean books, clear
                audit trail, single workspace.
              </p>
            </div>

            {/* GST */}
            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">GST Return Filing</h4>
              <p className="mt-2">
                Monthly/Quarterly GSTR-1, GSTR-3B and other filings prepared,
                reconciled, and filed on schedule.
              </p>
            </div>

            {/* Financial Statements */}
            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">
                Preparation of Financial Statements
              </h4>
              <p className="mt-2">
                Balance Sheet, P&L, Trial Balance as per accounting standards.
              </p>
            </div>

            {/* Income Tax */}
            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">Income Tax Return Filing</h4>
              <p className="mt-2">
                Business/individual ITRs prepared with correct income,
                deductions, disclosures—legally optimized.
              </p>
            </div>

            {/* ROC */}
            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">ROC Compliance</h4>
              <p className="mt-2">
                DIN e-KYC, AOC-4, MGT-7 and other Companies Act filings handled
                end-to-end.
              </p>
            </div>

            {/* CA Assistance */}
            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">CA Assistance</h4>
              <p className="mt-2">
                4 consultations/year with Chartered Accountants for taxation and
                compliance clarity.
              </p>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold text-center">How It Works</h3>
          <p className="text-gray-600 mt-3 text-center">
            A guided onboarding process with consistent monthly accounting and
            reporting.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="mx-auto w-12 h-12 rounded-full border flex items-center justify-center">
                1
              </div>
              <h4 className="font-semibold mt-4">Assign your accountant</h4>
              <p className="text-sm mt-2 text-gray-600">
                A dedicated accountant familiar with your business and industry
                is assigned.
              </p>
            </div>
            <div>
              <div className="mx-auto w-12 h-12 rounded-full border flex items-center justify-center">
                2
              </div>
              <h4 className="font-semibold mt-4">System Setup</h4>
              <p className="text-sm mt-2 text-gray-600">
                Connect bank feeds, import masters & opening balances, map
                ledgers and configure LEDGERS.
              </p>
            </div>
            <div>
              <div className="mx-auto w-12 h-12 rounded-full border flex items-center justify-center">
                3
              </div>
              <h4 className="font-semibold mt-4">Monthly close & compliance</h4>
              <p className="text-sm mt-2 text-gray-600">
                Reconciliations, MIS reporting and timely GST, Income Tax and
                ROC filings.
              </p>
            </div>
          </div>
        </section>

        {/* WHY INDIAFILINGS */}
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
                Start with bookkeeping; add filings or advisory anytime.
              </p>
            </div>

            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">Software + Service</h4>
              <p className="mt-2">
                LEDGERS platform bundled with experts who run it.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold mb-4">FAQs</h3>

          <div className="space-y-0">
            {faqQuestions.map((q, i) => (
              <div key={i} className="border-b last:border-b-0">
                <button
                  className="w-full text-left py-4 flex justify-between items-center text-sm"
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                >
                  <span className="text-slate-800">{q}</span>
                  <span className="text-indigo-600 flex items-center">
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

          {/* Popular Searches */}
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

      {/* FOOTER */}
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
            © {new Date().getFullYear()} IndiaFilings - Accounting Services
          </div>
        </div>
      </footer>

      {/* WhatsApp CTA */}
      <div className="fixed right-6 bottom-6 bg-green-500 text-white px-4 py-3 rounded-full shadow-2xl flex items-center gap-3 z-50">
        <img src={ASSETS.whatsapp} className="w-5 h-5" />
        <span className="font-semibold text-sm">Live Chat with Experts</span>
      </div>

      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: "Poppins", system-ui, -apple-system, "Segoe UI", Roboto,
            "Helvetica Neue", Arial;
          background: #f3f4f6;
        }
      `}</style>
    </div>
  );
}
