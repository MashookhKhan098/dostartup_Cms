"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Search,
  Check,
  Plus,
  ChevronDown,
  User,
  Phone,
  Mail,
  Calendar,
  FileText,
  File,
} from "lucide-react";

const ASSETS = {
  logo: "/images/india-logo.jpg",
  heroBg: "/images/hero.png",
  whatsapp: "/images/whatsapp.png",
  docsImg: "/images/business-docs.png",
  formsImg: "/images/business-forms.png",
  docsRequiredImg: "/images/business-docs-required.png",
  ledgersBadge: "/images/ledgers-badge.png",
  hrPeople: "/images/esireturn.png",
  pfIcon: "/images/group.png",
  esiIcon: "/images/esi.png",
  payrollIcon: "/images/payroll.png",
  avatar: "/images/avatar-placeholder.png",
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

const Footer: React.FC = () => {
  return (
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
          © {new Date().getFullYear()} IndiaFilings - ESI Return Filing
        </div>
      </div>
    </footer>
  );
};

export default function EsiReturnFilingPage(): React.ReactElement {
  const [companyId, setCompanyId] = useState("");
  const [employees, setEmployees] = useState<string | number>("");
  const [demoRequested, setDemoRequested] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("fractional-hr");
  const [searchQuery, setSearchQuery] = useState("");
  const contactRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(contactRef, () => setContactOpen(false));
  const faqQuestions = [
    "What is ESI registration?",
    "Why is ESI return filing important?",
    "Who needs to register for the ESI scheme?",
    "What benefits does ESI offer to employees?",
    "When should ESI returns be filed?",
    "What happens if ESI returns are not filed?",
    "What documents are required for ESI return filing?",
    "What are the consequences of non-payment or late payment of employee's ESI contribution?",
    "How can IndiaFilings assist with ESI return filing?",
  ];
  const faqAnswers: Record<number, string> = {
    0: "ESI registration is the process by which an employer enrolls their establishment under the Employees' State Insurance Scheme to provide statutory social security benefits to eligible employees.",
    1: "ESI return filing is important to maintain compliance with ESIC regulations, ensure employees receive benefits, and avoid penalties and legal action for non-compliance.",
    2: "Businesses in India with a workforce of 10 or more employees are typically required to register for the ESI scheme and make contributions on behalf of their employees.",
    3: "ESI offers medical, maternity and disability benefits, compensation for workplace injuries, and several other social security entitlements to employees and their families.",
    4: "Monthly contributions must be paid by the 15th of the following month; half-yearly and annual returns have their own due dates as regulated by ESIC.",
    5: "Failing to file returns can result in penalties, interest, and potential legal consequences including fines and prosecution in severe cases.",
    6: "Essential documents include attendance registers, Form 6, register of wages, PAN of the organisation, cancelled cheque, monthly challans and return records.",
    7: "Delayed or non-payment can attract interest, damages, and in cases of deliberate non-payment, prosecution under relevant provisions which can include imprisonment or fines.",
    8: "IndiaFilings assists by collecting documents, preparing returns, validating contribution details, filing returns on the ESIC portal, and providing support during audits.",
  };

  useEffect(() => {
    if (demoRequested) {
      const t = setTimeout(() => setDemoRequested(false), 2500);
      return () => clearTimeout(t);
    }
    return;
  }, [demoRequested]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans antialiased">
      <Header />
      <main className="py-8">
        <section
          aria-label="hero"
          className="relative rounded-2xl overflow-hidden shadow-sm max-w-[1180px] mx-auto px-6"
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
                  "linear-gradient(90deg, rgba(2,6,23,0.85) 0%, rgba(2,6,23,0.55) 50%, rgba(0,0,0,0.12) 100%)",
              }}
            />
          </div>
          <div className="relative z-10">
            <div className="mx-auto max-w-[1180px] px-6 py-12 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 max-w-2xl">
                <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-2xl p-8 md:p-10 backdrop-blur-sm">
                  <h1 className="text-white text-3xl md:text-[34px] leading-tight font-semibold mb-3">
                    PF Return Filing
                  </h1>
                  <p className="text-slate-200 text-sm md:text-base mb-6 max-w-prose">
                    Ensure timely PF contribution management, challan
                    generation, and monthly return filing with IndiaFilings.
                    Supported by a Dedicated Accountant and the LEDGERS payroll
                    compliance system.
                  </p>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setDemoRequested(true);
                    }}
                    className="flex flex-col sm:flex-row items-center gap-4"
                  >
                    <input
                      aria-label="PAN / GSTIN"
                      placeholder="PAN / GSTIN"
                      value={companyId}
                      onChange={(e) => setCompanyId(e.target.value)}
                      className="w-full sm:w-[240px] bg-transparent border border-[rgba(255,255,255,0.12)] rounded-md px-4 py-3 placeholder:text-slate-300 text-white outline-none"
                    />
                    <input
                      aria-label="Number of Employees"
                      placeholder="Number of Employees"
                      value={employees}
                      onChange={(e) => setEmployees(e.target.value)}
                      className="w-full sm:w-[180px] bg-transparent border border-[rgba(255,255,255,0.12)] rounded-md px-4 py-3 placeholder:text-slate-300 text-white outline-none"
                    />
                    <button className="px-6 py-3 bg-white text-slate-900 rounded-md font-medium">
                      Request Demo
                    </button>
                  </form>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-start gap-3"></div>
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
                    alt="HR"
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

        <section className="max-w-[1180px] mx-auto px-6 mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-15 h-10 rounded-full bg-slate-50 grid place-items-center text-indigo-500">
                <img src={ASSETS.pfIcon} alt="pf" className="w-8 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-slate-800">
                  PF Return Expertise
                </h3>
                <p className="text-sm text-slate-600">
                  Manage employee PF contributions, challan generation and
                  timely return filing with automated reconciliation.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-10 rounded-full bg-slate-50 grid place-items-center text-emerald-500">
                <img src={ASSETS.esiIcon} alt="esi" className="w-8 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-slate-800">
                  ESI Return Support
                </h3>
                <p className="text-sm text-slate-600">
                  Assistance for ESI registration, contribution mapping and
                  return submission to ESIC portal.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-10 rounded-full bg-slate-50 grid place-items-center text-purple-500">
                <img
                  src={ASSETS.payrollIcon}
                  alt="payroll"
                  className="w-8 h-6"
                />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-slate-800">
                  Payroll & HR
                </h3>
                <p className="text-sm text-slate-600">
                  Automated salary processing, attendance, leave and employee
                  self-serve in LEDGERS HR platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-[1180px] mx-auto px-6 py-8 space-y-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-semibold text-center">
              Simple, Transparent HR & Payroll Management Pricing
            </h2>
            <p className="text-sm text-gray-600 mt-2 text-center max-w-[880px] mx-auto">
              Manage your HR and payroll online with guided onboarding,
              automated salary processing, and expert compliance support.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div
                className={`bg-white rounded-xl border p-6 shadow-sm ${
                  selectedPlan === "payroll" ? "ring-2 ring-indigo-600/20" : ""
                }`}
              >
                <div className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs mb-3">
                  Payroll
                </div>
                <h3 className="font-semibold text-lg">Payroll Management</h3>
                <p className="text-sm text-gray-600 mt-2">
                  LEDGERS HR Software (1 Year Subscription)
                </p>
                <div className="mt-4 text-2xl font-bold">
                  ₹12,899 <span className="text-sm font-normal">/yr + GST</span>
                </div>
                <button
                  onClick={() => setSelectedPlan("payroll")}
                  className="mt-4 w-full bg-slate-900 text-white py-3 rounded-full"
                >
                  Start Now
                </button>
                <ul className="mt-5 space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check size={16} /> LEDGERS HR Software (1 Year
                    Subscription)
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} /> Attendance Platform
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} /> Employee Self-Serve
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} /> 12 Months Managed Payroll Service
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} /> 12 Months HR Support & Assistance
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} /> Upto 20 Employees
                  </li>
                </ul>
              </div>

              <div
                className={`bg-white rounded-xl border p-6 shadow-sm ${
                  selectedPlan === "fractional-hr"
                    ? "ring-2 ring-indigo-600/20"
                    : ""
                }`}
              >
                <div className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs mb-3">
                  Most popular
                </div>
                <h3 className="font-semibold text-lg">Fractional HR</h3>
                <p className="text-sm text-gray-600 mt-2">
                  LEDGERS HR Platform setup & migration with a dedicated
                  accountant for 1 year.
                </p>
                <div className="mt-4 text-2xl font-bold">
                  ₹42,899 <span className="text-sm font-normal">/yr + GST</span>
                </div>
                <button
                  onClick={() => setSelectedPlan("fractional-hr")}
                  className="mt-4 w-full bg-slate-900 text-white py-3 rounded-full"
                >
                  Start Now
                </button>
                <ul className="mt-5 space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check size={16} /> LEDGERS HR Platform setup & migration
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} /> 1 Year Monthly Payroll Service
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} /> Dedicated Accountant
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} /> Attendance Platform
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} /> 1 Year PF & ESI Filing
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} /> Upto 20 Employees
                  </li>
                </ul>
              </div>

              <div
                className={`bg-white rounded-xl border p-6 shadow-sm ${
                  selectedPlan === "compliance"
                    ? "ring-2 ring-indigo-600/20"
                    : ""
                }`}
              >
                <div className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs mb-3">
                  Compliance
                </div>
                <h3 className="font-semibold text-lg">PF & ESI Compliance</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Managed PF and ESI return filing for your establishment.
                </p>
                <div className="mt-4 text-2xl font-bold">
                  ₹17,899 <span className="text-sm font-normal">/yr + GST</span>
                </div>
                <button
                  onClick={() => setSelectedPlan("compliance")}
                  className="mt-4 w-full bg-slate-900 text-white py-3 rounded-full"
                >
                  Start Now
                </button>
                <ul className="mt-5 space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check size={16} /> 12 Months Managed PF Return Filing
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} /> 12 Months Managed ESI Return Filing
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} /> Up to 20 Employees
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">
              HR Compliance Made Easy
            </h3>
            <p className="text-gray-600">
              End-to-End HR Compliance Stay worry-free with complete support for
              PF, ESI, PT, TDS, employee contracts, and statutory
              filings-handled accurately and on time.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg border">
                <h4 className="font-semibold">Onboarding & Contracts</h4>
                <p className="mt-2 text-sm">
                  Offer letters, joining formalities, employee KYC and
                  documentation setup.
                </p>
              </div>
              <div className="p-4 rounded-lg border">
                <h4 className="font-semibold">Attendance & Payroll</h4>
                <p className="mt-2 text-sm">
                  Attendance platform integration, automated salary runs, and
                  statutory deductions processed through LEDGERS.
                </p>
              </div>
              <div className="p-4 rounded-lg border">
                <h4 className="font-semibold">Compliance & Returns</h4>
                <p className="mt-2 text-sm">
                  PF, ESI, PT, TDS returns and challan reconciliation with
                  alerts and audit-ready records.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">
              Expert Guidance on ESI Return Filing
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Employee State Insurance (ESI) registration is a critical
              requirement for businesses in India, ensuring their employees are
              covered under the ESI scheme, which provides a range of social
              security benefits. Following registration, employers are mandated
              to file ESI returns quarterly, detailing the contributions made
              towards the scheme for each employee. These returns are crucial
              for maintaining compliance with the ESIC regulations and ensuring
              that employees can avail the benefits they are entitled to. At
              IndiaFilings, we specialize in simplifying this process for
              businesses. Our experts guide you through every step of ESI
              registration and the crucial process of how to file ESIC returns,
              ensuring accuracy, compliance, and peace of mind for employers and
              employees alike.
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold">
                  Employees' State Insurance (ESI) Scheme
                </h4>
                <p className="mt-2 text-sm text-gray-600">
                  Employees' State Insurance (ESI) is a comprehensive social
                  security program designed to offer financial protection and
                  healthcare benefits to employees in the event of unexpected
                  circumstances. Funded by contributions from both employers and
                  employees, this scheme ensures that insured workers and their
                  families have access to medical services, financial support
                  during illness or maternity, compensation for
                  workplace-related disabilities, and coverage for funeral and
                  confinement expenses.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">
                  IndiaFilings assists businesses with the process of ESI
                  registration.
                </h4>
                <p className="mt-2 text-sm text-gray-600">
                  Get Started with IndiaFilings and ensure your employees are
                  protected with timely registration and accurate return filing.
                </p>
                <div className="mt-3 flex gap-3">
                  <button className="px-4 py-2 bg-slate-900 text-white rounded">
                    Get Started
                  </button>
                  <button
                    onClick={() => setContactOpen((s) => !s)}
                    className="px-4 py-2 border rounded"
                  >
                    Talk to an Expert
                  </button>
                </div>
                {contactOpen && (
                  <div
                    ref={contactRef}
                    className="mt-4 p-4 border rounded bg-gray-50"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={ASSETS.avatar}
                        alt="avatar"
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <div className="font-semibold">HR Specialist</div>
                        <div className="text-sm text-gray-600">
                          Available to help with ESI registration and returns
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 grid grid-cols-1 gap-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Phone size={14} /> <span>+91-XXXXXXXXXX</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Mail size={14} /> <span>hr@indiafilings.example</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">
              Who should Register for the ESI scheme?
            </h3>
            <p className="text-sm text-gray-600">
              The ESI scheme, overseen by the Employees' State Insurance
              Corporation (ESIC) and regulated by India's Ministry of Labour and
              Employment, requires contributions from both employers and
              employees, totaling 4% of an employee's monthly gross salary to
              the ESI fund. Businesses in India with a workforce of 10 or more
              are expected to proactively enroll with the ESIC within 15 days of
              becoming eligible.
            </p>
            <div className="mt-4">
              <h4 className="font-semibold">Filing ESI Returns: An Overview</h4>
              <p className="mt-2 text-sm text-gray-600">
                ESI Registered employers are required to submit ESI Returns
                every sixth month, providing critical information about the
                employees insured under the scheme, their salaries, and the
                contributions made by both the employer and the employees. These
                returns play a key role in verifying the accuracy of
                contributions to the ESI scheme and ensuring that insured
                employees are accessing the benefits they're entitled to.
                Understanding how to file ESIC returns is essential for
                businesses to ensure compliance with regulatory rules regarding
                employee welfare and healthcare contributions.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">
              ESI Return Filing Deadlines
            </h3>
            <p className="text-sm text-gray-700">
              ESI Return Filing is a crucial aspect of Employer responsibilities
              under the Employees' State Insurance (ESI) Act. These returns are
              submitted to the Employees' State Insurance Corporation (ESIC) to
              track contributions made by both employers and employees.
            </p>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr>
                    <th className="py-3 px-2 border-b">Return Type</th>
                    <th className="py-3 px-2 border-b">Due Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-2 border-b">Monthly Contribution</td>
                    <td className="py-3 px-2 border-b">
                      15th of the following month
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-2 border-b">Annual Return</td>
                    <td className="py-3 px-2 border-b">
                      31st January of the following year
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-2 border-b">
                      Half-yearly Contribution Returns
                    </td>
                    <td className="py-3 px-2 border-b">
                      Within 42 days of the end of each contribution period:
                      Contribution Period 1 (Ends on 30th September): 11th
                      November; Contribution Period 2 (Ends on 31st March): 12th
                      May
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold">
                  Essential Documents for Filing ESI Returns
                </h4>
                <ul className="mt-2 text-sm space-y-1 list-inside">
                  <li className="flex items-start gap-2">
                    <File size={14} /> Attendance register
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText size={14} /> Form 6
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText size={14} /> Register of wages
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText size={14} /> Accident register
                  </li>
                  <li className="flex items-start gap-2">
                    <File size={14} /> Cancelled cheque of the company
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText size={14} /> PAN card of the organisation
                  </li>
                  <li className="flex items-start gap-2">
                    <File size={14} /> Monthly challans and returns for ESI
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">
                  Consequences of Non-Payment or Late Payment
                </h4>
                <p className="mt-2 text-sm text-gray-600">
                  Failing to deposit the ESI contributions deducted from
                  employees' salaries is considered a serious violation, as
                  these amounts are entrusted to employers by their employees.
                  Delays or non-payment can attract interest, damages, and
                  possible prosecution under relevant legal provisions.
                </p>
                <div className="mt-3">
                  <h5 className="font-semibold">
                    Penalty Structure for Delayed or Unpaid ESI Contributions
                  </h5>
                  <ul className="mt-2 text-sm space-y-1">
                    <li>Delay under 2 months: Damages at 5% per annum</li>
                    <li>
                      Delay between 2 to 4 months: Damages at 10% per annum
                    </li>
                    <li>
                      Delay between 4 to 6 months: Damages at 15% per annum
                    </li>
                    <li>Delay over 6 months: Damages at 25% per annum</li>
                    <li>
                      Interest for delayed payments: 12% annually applied per
                      day of delay
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">
              Procedure to File ESI Returns for Employers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <ol className="list-decimal list-inside text-sm space-y-2">
                  <li>Registration on ESIC Portal</li>
                  <li>Login to ESIC Portal using employer code and password</li>
                  <li>Employee Enrollment and data update</li>
                  <li>Download the Return Form</li>
                  <li>Review Contribution Details</li>
                  <li>Correct Discrepancies if Any</li>
                  <li>Submit the Return</li>
                  <li>Save Acknowledgment Receipt</li>
                  <li>Maintain Records for Audits</li>
                </ol>
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  IndiaFilings offers comprehensive assistance in both obtaining
                  ESI registration and managing the ESI return filing process
                  for businesses. Our ESI experts collect documents, prepare
                  returns, validate contribution details, file on the ESIC
                  portal and provide support during audits.
                </p>
                <div className="mt-3">
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded">
                    Request ESI Assistance
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">
              How IndiaFilings Supports ESI Return Filing
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded">
                <h4 className="font-semibold">Document Collection</h4>
                <p className="mt-2 text-sm text-gray-600">
                  An expert will gather all necessary data and documents
                  required for ESI return preparation specific to your business
                  needs.
                </p>
              </div>
              <div className="p-4 border rounded">
                <h4 className="font-semibold">Return Preparation</h4>
                <p className="mt-2 text-sm text-gray-600">
                  Our ESI expert will meticulously prepare your ESI return
                  ensuring accuracy and compliance with regulations.
                </p>
              </div>
              <div className="p-4 border rounded">
                <h4 className="font-semibold">Return Filing</h4>
                <p className="mt-2 text-sm text-gray-600">
                  Following your verification, our dedicated professional will
                  file the ESI return with the ESIC department and secure your
                  compliance.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">
              Benefits of Timely ESI Return Filing
            </h3>
            <ul className="list-inside list-disc text-sm space-y-2">
              <li>
                Compliance: Avoid legal penalties and fines associated with
                non-compliance
              </li>
              <li>
                Record Keeping: Maintain accurate records of contributions
              </li>
              <li>
                Benefit Entitlement: Ensures employees can access medical and
                other benefits
              </li>
              <li>
                Transparency: Promotes trust between employer and employees
              </li>
              <li>
                Dispute Resolution: Filed returns serve as reference points for
                discrepancies
              </li>
              <li>
                Ease of Benefit Processing: Facilitates smooth processing of
                claims
              </li>
              <li>
                Financial Health: Reflects positively on business operations
              </li>
              <li>
                Updates and Adjustments: Allows corrections and updates to
                records
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a className="p-4 border rounded hover:shadow-sm">
                <div className="font-semibold">Employees Compensation Act</div>
              </a>
              <a className="p-4 border rounded hover:shadow-sm">
                <div className="font-semibold">
                  Requirements for Operating Commercial Establishment – COVID-19
                </div>
              </a>
              <a className="p-4 border rounded hover:shadow-sm">
                <div className="font-semibold">
                  Benefits of ESI registration
                </div>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">
              FAQ's on ESI Return Filing
            </h3>
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
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">
              What is ESI registration?
            </h3>
            <p className="text-sm text-gray-700">
              ESI registration is the formal enrollment of an employer and
              eligible employees into the Employees’ State Insurance scheme
              ensuring access to social security benefits.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-4">
              Why is ESI return filing important?
            </h3>
            <p className="text-sm text-gray-700">
              Timely filing ensures employees receive benefits, keeps the
              employer compliant and prevents penalties.
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded">
                <h4 className="font-semibold">
                  When should ESI returns be filed?
                </h4>
                <p className="text-sm text-gray-600 mt-2">
                  Monthly contributions by 15th of the following month;
                  half-yearly returns and annual returns have separate due
                  dates.
                </p>
              </div>
              <div className="p-4 border rounded">
                <h4 className="font-semibold">
                  What happens if ESI returns are not filed?
                </h4>
                <p className="text-sm text-gray-600 mt-2">
                  Penalties, interest and potential legal consequences including
                  prosecution in severe cases.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">
              Procedure to File ESI Returns for Employers - Quick Checklist
            </h3>
            <ul className="list-inside list-decimal text-sm space-y-2">
              <li>Register establishment on ESIC portal</li>
              <li>Maintain attendance registers and wage registers</li>
              <li>Reconcile monthly challans and contributions</li>
              <li>Download and review returns on ESIC portal</li>
              <li>Submit returns and save acknowledgment</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">
              Consequences of Delayed Payment
            </h3>
            <p className="text-sm text-gray-600">
              If an employer does not make the required contributions within the
              specified timeframe, they will incur a simple interest charge of
              12% annually for each day the payment is delayed. Severe or
              repeated non-compliance may invite prosecution under the ESI Act
              and IPC provisions relating to breach of trust.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">
              How IndiaFilings Makes ESI Return Filing Easy
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded">
                <h4 className="font-semibold">Dedicated Expert</h4>
                <p className="text-sm text-gray-600 mt-2">
                  A named ESI expert will handle your filings and
                  reconciliations.
                </p>
              </div>
              <div className="p-4 border rounded">
                <h4 className="font-semibold">Automated Reconciliation</h4>
                <p className="text-sm text-gray-600 mt-2">
                  Match challans, employee contributions and ensure records
                  reflect correctly.
                </p>
              </div>
              <div className="p-4 border rounded">
                <h4 className="font-semibold">Audit-Ready Reports</h4>
                <p className="text-sm text-gray-600 mt-2">
                  Maintain files and receipts for statutory audits and
                  inquiries.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

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
        .page {
          min-height: 100vh;
        }
      `}</style>
    </div>
  );
}
