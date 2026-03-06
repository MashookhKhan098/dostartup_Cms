"use client";

import React, { useEffect, useRef, useState } from "react";
import { Search, Plus } from "lucide-react";

const ASSETS = {
  logo: "/images/india-logo.jpg",
  heroBg: "/images/hero.png",
  whatsapp: "/images/whatsapp.png",
  hrPeople: "/images/hr-payroll.png",
};

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

export default function IndiaFilingsCA(): React.ReactElement {
  const [gstin, setGstin] = useState("");
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const faqQuestions = [
    "How is Fractional CA different from a regular accountant?",
    "Is LEDGERS software included?",
    "Can I add HR/Payroll or upgrade later?",
    "Do you handle tax notices and assessments?",
  ];

  const faqAnswers: Record<number, string> = {
    0: "Fractional CA offers dedicated Chartered Accountant oversight on a part-time/fractional basis with SLAs and CA reviews, whereas a regular accountant is typically an in-house or outsourced bookkeeper handling day-to-day entries.",
    1: "LEDGERS is included as part of the software-enabled service offering; specifics depend on the chosen plan and onboarding conversation.",
    2: "Yes. You can add HR/Payroll, upgrade services, and scale from bookkeeping to comprehensive CA oversight.",
    3: "Yes. We provide support and representation for tax notices and assessments, including response preparation and coordination with authorities.",
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans antialiased">
      <Header />

      {/* HERO */}
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
                      IndiaFilings CA
                    </h1>
                    <p className="text-slate-200 text-sm md:text-base mb-6 max-w-prose">
                      Chartered Accountants for your business compliance - from
                      GST & ITR filing to financial reporting and tax notice
                      handling. Simplify compliance. Grow confidently.
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
                        Request Demo
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
                      alt="CA"
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

          {/* Updated 3-card section (keeps original styling but uses the new content) */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-slate-50 grid place-items-center text-indigo-500">
                  👥
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-slate-800">
                    Affordable Expertise
                  </h3>
                  <p className="text-sm text-slate-600">
                    Access IndiaFilings Chartered Accountants without the high
                    cost of full-time hiring.
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
                    Seamless Compliance
                  </h3>
                  <p className="text-sm text-slate-600">
                    Monthly GST, quarterly CA review, and annual ITRs managed
                    with accuracy and care.
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
                    Trusted Oversight
                  </h3>
                  <p className="text-sm text-slate-600">
                    Your finances are reviewed by expert Chartered Accountants
                    with years of industry experience.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main className="max-w-[1180px] mx-auto px-6 py-10 space-y-8">
        {/* Services Offered */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold text-center">
            Services Offered
          </h3>
          <p className="text-gray-600 mt-3 text-center">
            Comprehensive financial management and compliance support for
            growing businesses.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 text-sm text-gray-700">
            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">Flash Reports</h4>
              <p className="mt-2">
                Monthly Flash P&L statements featuring key metrics: Revenue,
                Expenses, and EBITDA
              </p>
              <p className="mt-1">
                Executive summary format for busy entrepreneurs
              </p>
            </div>

            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">Variance Analysis</h4>
              <p className="mt-2">
                Detailed comparison of actual performance vs. prior year
              </p>
              <p className="mt-1">Identification of trends and anomalies</p>
            </div>

            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">
                Management Information Systems (MIS)
              </h4>
              <p className="mt-2">Detailed Profit & Loss Statement</p>
              <p className="mt-1">Balance Sheet</p>
              <p className="mt-1">Cash Flow Statement</p>
            </div>

            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">Annual Tax Consultation</h4>
              <p className="mt-2">
                Comprehensive tax planning strategy for the entire financial
                year
              </p>
              <p className="mt-1">
                Optimization of tax liabilities within legal frameworks
              </p>
              <p className="mt-1">
                Proactive planning to maximize savings and minimize risks
              </p>
            </div>

            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">Income Notice Support</h4>
              <p className="mt-2">Expert handling of notices under</p>
              <ul className="list-disc list-inside mt-1 text-sm">
                <li>Sections 139(9) - Defective Return</li>
                <li>Section 143(1) - Intimation</li>
                <li>Section 245 - Refund Adjustment</li>
              </ul>
              <p className="mt-1">Response preparation</p>
            </div>

            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">GST Notice Support</h4>
              <p className="mt-2">Resolution of notices under</p>
              <ul className="list-disc list-inside mt-1 text-sm">
                <li>Section 63 - Assessment of Unregistered Persons</li>
                <li>Section 46 - Intimation of Tax as per Return</li>
                <li>Rule 88C - Intimation of Discrepancy</li>
                <li>Rule 142(1A) - DRC-01A (Intimation before SCN)</li>
              </ul>
              <p className="mt-1">
                Ensuring timely responses and strategic advice on GST
                optimization
              </p>
            </div>

            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">TDS Notice Support</h4>
              <p className="mt-2">Handling notices under</p>
              <ul className="list-disc list-inside mt-1 text-sm">
                <li>Section 200(3) & Rule 31A - Non-filing of TDS Return</li>
                <li>Section 234E - Late Filing Fee Notice</li>
                <li>Section 197 - Lower/Nil Deduction Mismatch</li>
                <li>TRACES notices for Form 26AS mismatches</li>
              </ul>
              <p className="mt-1">
                Resolution of TDS mismatches in Form 26AS and streamlined TDS
                compliance processes
              </p>
            </div>

            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">
                Tailored Standard Operating Procedures
              </h4>
              <p className="mt-2">
                Department-wise SOPs designed as per industry standards
              </p>
              <p className="mt-1">
                Customized procedures aligned with your business processes
              </p>
            </div>

            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">Dedicated Support</h4>
              <p className="mt-2">
                Continuous assistance with compliance matters and financial
                advisory services.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold text-center">How It Works</h3>
          <p className="text-gray-600 mt-3 text-center">
            A simple, guided onboarding process followed by consistent monthly
            filings and quarterly CA reviews.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="mx-auto w-12 h-12 rounded-full border flex items-center justify-center text-lg">
                1
              </div>
              <h4 className="font-semibold mt-4">Team assignment</h4>
              <p className="text-sm text-gray-600 mt-2">
                We assign a dedicated accountant and CA team who are experts in
                your industry and understand your workflows.
              </p>
            </div>
            <div>
              <div className="mx-auto w-12 h-12 rounded-full border flex items-center justify-center text-lg">
                2
              </div>
              <h4 className="font-semibold mt-4">LEDGERS Setup</h4>
              <p className="text-sm text-gray-600 mt-2">
                We connect your banking, import master data, enable GST/TDS, and
                configure your systems to meet your specific needs.
              </p>
            </div>
            <div>
              <div className="mx-auto w-12 h-12 rounded-full border flex items-center justify-center text-lg">
                3
              </div>
              <h4 className="font-semibold mt-4">Filings & Reviews</h4>
              <p className="text-sm text-gray-600 mt-2">
                Timely monthly filings and quarterly CA meetings for planning,
                handling queries, and addressing notices.
              </p>
            </div>
          </div>
        </section>

        {/* Why IndiaFilings */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold mb-4">
            Why IndiaFilings for Fractional CA
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">Experienced CA Team</h4>
              <p className="mt-2">
                Specialists across GST, direct tax, payroll and notices.
              </p>
            </div>
            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">Process-driven Delivery</h4>
              <p className="mt-2">
                Monthly checklists, maker-checker reviews and SLAs.
              </p>
            </div>
            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">Nationwide Coverage</h4>
              <p className="mt-2">
                Serving 1,00,000+ businesses across India since 2014
              </p>
            </div>
            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">Transparent Communication</h4>
              <p className="mt-2">
                Single point of contact with clear updates.
              </p>
            </div>
            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">Scales with You</h4>
              <p className="mt-2">
                Move from basic filings to full-stack CA oversight as you grow.
              </p>
            </div>
            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">Software-enabled</h4>
              <p className="mt-2">
                Workflows and reports are digitised for accuracy and speed.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
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

          {/* Popular Searches below FAQs as requested */}
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
            © {new Date().getFullYear()} IndiaFilings - Chartered Accountants
          </div>
        </div>
      </footer>

      {/* WhatsApp CTA */}
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
