"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  Search,
  Check,
  Plus,
  ChevronRight,
  ShoppingBag,
} from "lucide-react";
import Navbar from "../components/Navbar";

// Assets and data
const ASSETS = {
  logo: "/images/india-logo.jpg",
  heroBg: "/images/hero.png",
  hrPeople: "/images/hr-payroll.png",
  ledgersBadge: "/images/ledgers-badge.png",
  whatsapp: "/images/whatsapp.svg",
  docsImg: "/images/business-docs.png",
  formsImg: "/images/business-forms.png",
  docsRequiredImg: "/images/business-docs-required.png",
  cartIcon: "/images/cart-icon.svg",
  indiaFlag: "/images/india-flag.png",
  ledgers: "https://img.indiafilings.com/catalog/ledgers.png",
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

const HR_IMG_POS = {
  pc: { x: 66, y: 7, w: 588 },
  md: { x: 40, y: 12, w: 440 },
  sm: { x: 0, y: 0, w: 320 },
};

export default function ComplianceHRPayrollPage() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [gstChecked, setGstChecked] = useState(false);
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
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
      {/* Navbar - Imported */}
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-5">
        <div className="max-w-[1180px] mx-auto px-6 text-sm text-gray-500">
          Home / Compliance Services /{" "}
          <span className="text-amber-700 font-medium">HR & Payroll</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[1180px] mx-auto px-6 py-8">
        {/* Hero Section */}
        <section
          aria-label="HR hero"
          className="relative rounded-2xl overflow-hidden shadow-sm mb-8"
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
                    (minimum 3 years' experience) and LEDGERS compliance
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
                      className="w-full sm:w-[360px] bg-transparent border border-[rgba(255,255,255,0.12)] rounded-md px-4 py-3 placeholder:text-slate-300 text-white outline-none focus:ring-1 focus:ring-amber-600"
                    />
                    <input
                      aria-label="Number of Employees"
                      placeholder="Number of Employees"
                      value={employees}
                      onChange={(e) => setEmployees(e.target.value)}
                      className="w-full sm:w-[220px] bg-transparent border border-[rgba(255,255,255,0.12)] rounded-md px-4 py-3 placeholder:text-slate-300 text-white outline-none focus:ring-1 focus:ring-amber-600"
                    />
                  </form>

                  <div className="mt-6">
                    <button className="px-6 py-3 bg-white text-slate-900 rounded-md font-medium shadow-[0_6px_20px_rgba(0,0,0,0.12)] hover:bg-amber-50 transition-colors">
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

        {/* Features Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:border-amber-200 transition-colors">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-amber-50 grid place-items-center text-amber-600">
                👥
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-slate-900">
                  Dedicated support, flexible cost
                </h3>
                <p className="text-sm text-gray-600">
                  Get an experienced accountant to manage your ledgers, vendor
                  &amp; customer reconciliations, bank reconciliations, and
                  monthly close with precision and reliability - all at a
                  fraction of the cost of a full-time hire.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:border-amber-200 transition-colors">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-amber-50 grid place-items-center text-amber-600">
                ✔
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-slate-900">
                  Accurate & timely compliance
                </h3>
                <p className="text-sm text-gray-600">
                  End-to-end Director Management for Pvt Ltd Companies &amp;
                  LLPs – filing of DIR-3 KYC, Director Appointments (DIR-12),
                  Director Resignations (DIR-12), Director Disclosures (MGT-6),
                  and DIN Allotment.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:border-amber-200 transition-colors">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-amber-50 grid place-items-center text-amber-600">
                ⚡
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-slate-900">
                  Powered by LEDGERS
                </h3>
                <p className="text-sm text-gray-600">
                  Experience seamless automation with real-time bank feeds,
                  smart reconciliations, integrated e-invoice/e-way bill
                  generation, secure document vault, and fully audit-ready
                  financial reports.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mt-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-slate-900">
            Simple, Transparent HR & Payroll Management Pricing
          </h2>
          <p className="text-sm text-gray-600 mt-2 text-center max-w-[880px] mx-auto">
            Manage your HR and payroll online with guided onboarding, automated
            salary processing, and expert compliance support.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Payroll Plan */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:border-amber-200 transition-colors">
              <div className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs mb-3">
                Payroll
              </div>
              <h3 className="font-semibold text-lg text-slate-900">Payroll Management</h3>
              <p className="text-sm text-gray-600 mt-2">
                Manage your HR and payroll online with guided onboarding and
                automated salary processing.
              </p>
              <div className="mt-4 text-2xl font-bold text-slate-900">
                ₹12,899 <span className="text-sm font-normal text-gray-500">/yr + GST</span>
              </div>
              <button className="mt-4 w-full bg-gradient-to-r from-amber-700 to-amber-800 text-white py-3 rounded-full hover:from-amber-800 hover:to-amber-900 transition-all">
                Start Now
              </button>

              <ul className="mt-5 space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-amber-600 flex-shrink-0 mt-0.5" /> 
                  LEDGERS HR Software (1 Year Subscription)
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-amber-600 flex-shrink-0 mt-0.5" /> 
                  Attendance Platform
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-amber-600 flex-shrink-0 mt-0.5" /> 
                  Employee Self-Serve
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-amber-600 flex-shrink-0 mt-0.5" /> 
                  12 Months Managed Payroll Service
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-amber-600 flex-shrink-0 mt-0.5" /> 
                  12 Months HR Support & Assistance
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-amber-600 flex-shrink-0 mt-0.5" /> 
                  Upto 20 Employees
                </li>
              </ul>
            </div>

            {/* Fractional HR Plan */}
            <div className="bg-white rounded-xl border-2 border-amber-600 p-6 shadow-sm relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                Most Popular
              </div>
              <div className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs mb-3">
                Fractional HR
              </div>
              <h3 className="font-semibold text-lg text-slate-900">Fractional HR</h3>
              <p className="text-sm text-gray-600 mt-2">
                Managed HR support with dedicated partner for up to 20
                employees.
              </p>
              <div className="mt-4 text-2xl font-bold text-slate-900">
                ₹42,899 <span className="text-sm font-normal text-gray-500">/yr + GST</span>
              </div>
              <button className="mt-4 w-full bg-gradient-to-r from-amber-700 to-amber-800 text-white py-3 rounded-full hover:from-amber-800 hover:to-amber-900 transition-all">
                Start Now
              </button>

              <ul className="mt-5 space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-amber-600 flex-shrink-0 mt-0.5" /> 
                  LEDGERS HR Platform setup & migration
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-amber-600 flex-shrink-0 mt-0.5" /> 
                  1 Year Monthly Payroll Service
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-amber-600 flex-shrink-0 mt-0.5" /> 
                  Dedicated Accountant
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-amber-600 flex-shrink-0 mt-0.5" /> 
                  Attendance Platform
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-amber-600 flex-shrink-0 mt-0.5" /> 
                  1 Year PF & ESI Filing
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-amber-600 flex-shrink-0 mt-0.5" /> 
                  1 Year TDS Return Filing
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-amber-600 flex-shrink-0 mt-0.5" /> 
                  Employee KYC, Offer letter, Leave & holiday policy setup
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-amber-600 flex-shrink-0 mt-0.5" /> 
                  HR Reports & MIS
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-amber-600 flex-shrink-0 mt-0.5" /> 
                  Upto 20 Employees
                </li>
              </ul>
            </div>

            {/* Compliance Plan */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:border-amber-200 transition-colors">
              <div className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs mb-3">
                Compliance
              </div>
              <h3 className="font-semibold text-lg text-slate-900">PF & ESI Compliance</h3>
              <p className="text-sm text-gray-600 mt-2">
                Comprehensive PF/ESI management for your workforce.
              </p>
              <div className="mt-4 text-2xl font-bold text-slate-900">
                ₹17,899 <span className="text-sm font-normal text-gray-500">/yr + GST</span>
              </div>
              <button className="mt-4 w-full bg-gradient-to-r from-amber-700 to-amber-800 text-white py-3 rounded-full hover:from-amber-800 hover:to-amber-900 transition-all">
                Start Now
              </button>

              <ul className="mt-5 space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-amber-600 flex-shrink-0 mt-0.5" /> 
                  12 Months Managed PF Return Filing
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-amber-600 flex-shrink-0 mt-0.5" /> 
                  12 Months Managed ESI Return Filing
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-amber-600 flex-shrink-0 mt-0.5" /> 
                  Up to 20 Employees
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Services Offered */}
        <section className="bg-white rounded-lg shadow-sm p-6 mt-12 border border-gray-200">
          <h3 className="text-xl font-semibold text-center text-slate-900">
            Services Offered
          </h3>
          <p className="text-gray-600 mt-3 text-center">
            Smart solutions for HR operations, compliance, and employee growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 text-sm">
            <div className="p-4 rounded-lg border border-gray-200 hover:border-amber-200 transition-colors">
              <h4 className="font-semibold text-slate-900">Payroll Processing</h4>
              <p className="mt-2 text-gray-600">
                Accurate and timely salary processing with payslips, tax
                deductions.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-gray-200 hover:border-amber-200 transition-colors">
              <h4 className="font-semibold text-slate-900">Attendance & Leave Management</h4>
              <p className="mt-2 text-gray-600">
                Track working hours, shifts, overtime, and leave requests with
                integrated approval workflows.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-gray-200 hover:border-amber-200 transition-colors">
              <h4 className="font-semibold text-slate-900">Compliance & Statutory Filings</h4>
              <p className="mt-2 text-gray-600">
                Complete support for PF, ESI, Professional Tax, TDS, and labour
                law compliance.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-gray-200 hover:border-amber-200 transition-colors">
              <h4 className="font-semibold text-slate-900">Employee Onboarding</h4>
              <p className="mt-2 text-gray-600">
                Digital offer letters, contracts, policy acknowledgments, and
                smooth employee joining experience.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-gray-200 hover:border-amber-200 transition-colors">
              <h4 className="font-semibold text-slate-900">HR Policies & Contracts</h4>
              <p className="mt-2 text-gray-600">
                Custom drafting of HR policies, employee handbooks, contracts,
                and compliance documentation.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-gray-200 hover:border-amber-200 transition-colors">
              <h4 className="font-semibold text-slate-900">Employee Self-Service Portal</h4>
              <p className="mt-2 text-gray-600">
                Employee-friendly portal for leave requests, payslips, and HR
                document access.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-gray-200 hover:border-amber-200 transition-colors">
              <h4 className="font-semibold text-slate-900">HR Reports & Analytics</h4>
              <p className="mt-2 text-gray-600">
                Custom dashboards and reports on payroll, headcount, and
                compliance status.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-gray-200 hover:border-amber-200 transition-colors">
              <h4 className="font-semibold text-slate-900">Secure Document Storage</h4>
              <p className="mt-2 text-gray-600">
                Employee and compliance documents stored safely in our cloud for
                up to 8 years, ensuring easy access and audit readiness.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-gray-200 hover:border-amber-200 transition-colors">
              <h4 className="font-semibold text-slate-900">V-KYC Platform</h4>
              <p className="mt-2 text-gray-600">
                Real-time, auditable video KYC verification integrated into the
                LEDGERS HR Platform for instant identity validation and
                compliance logs.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-white rounded-lg shadow-sm p-6 mt-8 border border-gray-200">
          <h3 className="text-xl font-semibold text-center text-slate-900">How It Works</h3>
          <p className="text-gray-600 mt-3 text-center">
            A simple, guided process to set up and run HR smoothly, with ongoing
            reviews and compliance support.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="mx-auto w-12 h-12 rounded-full border-2 border-amber-600 flex items-center justify-center text-lg font-semibold text-amber-700">
                1
              </div>
              <h4 className="font-semibold mt-4 text-slate-900">HR Partner Assignment</h4>
              <p className="text-sm text-gray-600 mt-2">
                We assign a dedicated HR professional and support team who
                understand your business, workforce, and compliance needs.
              </p>
            </div>

            <div>
              <div className="mx-auto w-12 h-12 rounded-full border-2 border-amber-600 flex items-center justify-center text-lg font-semibold text-amber-700">
                2
              </div>
              <h4 className="font-semibold mt-4 text-slate-900">LEDGERS HR Setup</h4>
              <p className="text-sm text-gray-600 mt-2">
                We configure your payroll, attendance, leave policies, employee
                records, and compliance workflows inside the LEDGERS HR
                platform.
              </p>
            </div>

            <div>
              <div className="mx-auto w-12 h-12 rounded-full border-2 border-amber-600 flex items-center justify-center text-lg font-semibold text-amber-700">
                3
              </div>
              <h4 className="font-semibold mt-4 text-slate-900">Payroll, Compliance & Reviews</h4>
              <p className="text-sm text-gray-600 mt-2">
                We handle monthly payroll, statutory filings (PF, ESI, PT, TDS),
                and conduct quarterly HR reviews to ensure accuracy and employee
                satisfaction.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-lg shadow-sm p-6 mt-8 border border-gray-200">
          <h3 className="text-xl font-semibold mb-4 text-slate-900">FAQs</h3>
          <div className="space-y-0">
            {faqQuestions.map((q, i) => (
              <div key={i} className="border-b border-gray-200 last:border-b-0">
                <button
                  className="w-full text-left py-4 flex justify-between items-center text-sm"
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  aria-expanded={faqOpen === i}
                >
                  <span className="text-slate-800 font-medium">{q}</span>
                  <span className="text-amber-600 flex items-center gap-2">
                    {faqOpen === i ? "−" : <Plus size={14} />}
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
            <h4 className="font-semibold mb-3 text-slate-900">Popular Searches</h4>
            <div className="flex flex-wrap gap-2">
              {POPULAR_SEARCHES.slice(0, 20).map((s) => (
                <span
                  key={s}
                  className="text-xs px-3 py-1.5 border border-gray-200 rounded bg-white text-gray-700 hover:border-amber-300 hover:text-amber-700 cursor-pointer transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Cart Widget */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <div className="text-center text-gray-600">
            <img
              src={ASSETS.cartIcon}
              alt="cart"
              className="mx-auto h-12 w-auto mb-3"
            />
            <h3 className="font-semibold text-slate-900">Your cart is empty</h3>
            <p className="text-sm mt-2 text-gray-600">
              Browse our services and add some services in cart!
            </p>
          </div>

          <div className="mt-6 text-center">
            <div className="text-sm text-gray-500">
              Existing User?{" "}
              <a className="text-amber-700 underline hover:text-amber-800 font-medium cursor-pointer">
                Login
              </a>
            </div>
          </div>

          <form className="mt-4 space-y-3" onSubmit={(e) => e.preventDefault()}>
            <input
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-600"
              placeholder="Name"
            />
            <input
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-600"
              placeholder="Email"
            />
            <div className="flex gap-2">
              <div className="flex items-center gap-2 border border-gray-200 rounded-md px-2">
                <img src={ASSETS.indiaFlag} alt="flag" className="h-4" />
                <span className="text-sm">+91</span>
              </div>
              <input
                className="flex-1 border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-600"
                placeholder="Phone"
              />
            </div>

            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={gstChecked}
                onChange={() => setGstChecked((s) => !s)}
                className="w-4 h-4 accent-amber-600"
              />
              <span>Enter GSTIN to get 18% GST Credit</span>
            </label>

            {gstChecked && (
              <input
                className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-600"
                placeholder="GSTIN"
              />
            )}

            <button className="w-full bg-gradient-to-r from-amber-700 to-amber-800 text-white py-2 rounded-md font-medium flex items-center justify-center gap-2 hover:from-amber-800 hover:to-amber-900 transition-all shadow-md hover:shadow-lg">
              <ShoppingBag size={16} /> Get Started
            </button>

            <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400 pt-1">
              <svg className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Secure · No spam · Instant confirmation</span>
            </div>
          </form>
        </div>
      </main>

      {/* WhatsApp CTA */}
      <div className="fixed right-6 bottom-6 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-4 py-3 rounded-full shadow-2xl flex items-center gap-3 z-50 hover:from-amber-700 hover:to-amber-800 transition-all cursor-pointer">
        <img src={ASSETS.whatsapp} alt="wa" className="w-5 h-5" />
        <span className="font-semibold text-sm">Live Chat with Experts</span>
      </div>
    </div>
  );
}