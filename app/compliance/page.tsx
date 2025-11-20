"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Inter } from "next/font/google";
import { Search } from "lucide-react";

/**
 * Next.js (App Router) + TailwindCSS
 * Full page with the hero section updated EXACTLY per your provided HTML structure:
 * - Gradient section with border-top
 * - Black, square-corner image container (no rounding)
 * - Form block on the right with labels, patterns, error messages, and dual CTAs (desktop + mobile)
 */

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const COLORS = {
  bg: "#F4F6FA",
  text: "#0F172A",
  border: "#DBDFE9",
  slate50: "#F8FAFC",
  slate100: "#F1F5F9",
  slate200: "#E2E8F0",
  slate300: "#CBD5E1",
  green: "#22C55E",
  greenDark: "#16A34A",
  blueLink: "#1B84FF",
};

function Header() {
  const nav = [
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
    <header
      className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b"
      style={{ borderColor: "#E5E7EB" }}
    >
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="/" aria-label="IndiaFilings" className="flex items-center">
              <div
                className="h-9 w-40 flex items-center justify-center rounded-full border shadow-sm"
                style={{ borderColor: "#E5E7EB" }}
              >
                <img
                  alt="IndiaFilings"
                  src="images/india-logo.jpg"
                  className="h-6 object-contain"
                />
              </div>
            </a>
            <nav className="hidden xl:flex items-center gap-5 text-[14px] text-slate-700">
              {nav.map((n) => (
                <a key={n} className="hover:text-slate-900" href="#">
                  {n}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <button
              className="hidden md:flex items-center gap-2 text-[13px] text-slate-600 border rounded px-3 py-1.5"
              style={{ borderColor: "#E5E7EB" }}
            >
              <Search size={14} /> Search
            </button>
            <button
              className="text-[13px] px-3 py-1.5 rounded border"
              style={{ borderColor: "#E5E7EB" }}
            >
              Login
            </button>
            <button className="text-[13px] px-3 py-1.5 rounded bg-[#2563EB] text-white">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

/* Updated hero per your exact HTML structure */
function Hero() {
  const [pan, setPan] = useState("");
  const [company, setCompany] = useState("");
  const [panError, setPanError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [cobMsg, setCobMsg] = useState<string | null>(null);
  const [desktopLoading, setDesktopLoading] = useState(false);
  const [mobileLoading, setMobileLoading] = useState(false);

  const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
  const nameRegex = /^[A-Za-z0-9\s]{4,}$/;

  const validate = () => {
    const pErr = !panRegex.test(pan.trim());
    const nErr = !nameRegex.test(company.trim());
    setPanError(pErr);
    setNameError(nErr);
    if (!pErr && !nErr) {
      setCobMsg("Looks good! We will verify your details during onboarding.");
    } else {
      setCobMsg(null);
    }
    return !pErr && !nErr;
  };

  const onGetStarted = async (source: "desktop" | "mobile") => {
    if (!validate()) return;
    source === "desktop" ? setDesktopLoading(true) : setMobileLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    source === "desktop" ? setDesktopLoading(false) : setMobileLoading(false);
    alert(`Starting compliance for ${company} (${pan})`);
  };

  return (
    <div className="company-banner-search mb-5 container-fixed">
      <section
        className="w-full bg-gradient-to-r from-white to-gray-100 flex flex-col md:flex-row items-center justify-center min-h-[520px]"
        style={{ borderTop: `1px solid ${COLORS.border}` }}
      >
        <div className="w-full flex flex-row md:flex-row items-stretch justify-between p-0 parent-container max-w-[1200px] mx-auto">
          {/* Left: SQUARE black image container, no rounding */}
          <div
            className="w-full md:w-1/2 flex flex-col items-center wd-img-container"
            style={{ backgroundColor: "#000000" }}
          >
            <img
              src="https://img.indiafilings.com/catalog/mca-compliance-simplified-india.webp"
              alt="MCA Compliance Image"
              loading="eager"
              fetchPriority="high"
              className="trade-image w-full h-[520px] object-contain"
            />
          </div>

          {/* Right: Form parent (justify-start) */}
          <div className="w-full md:w-1/2 flex flex-col items-center wd-form-parent justify-start">
            <div
              className="
                max-w-[560px] w-full pr-10 md:py-8 bg-white rounded-xl shadow-lg space-y-6
              "
              style={{ paddingTop: 30 }}
            >
              {/* Title + advisor */}
              <div className="flex flex-row items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-900">
                  MCA Compliance Service
                </h2>
                <button
                  type="button"
                  className="btn btn-light flex justify-end px-2 text-[13px] border rounded-md h-8 items-center"
                  id="consult_advisor_btn"
                  style={{ borderColor: "#E5E7EB" }}
                >
                  Consult Advisor
                </button>
              </div>

              {/* PAN input */}
              <div className="w-full mt-5 mb-5 p-1 search-div">
                <div
                  id="pan-search-box-container"
                  className="flex flex-col sm:flex-row items-center"
                >
                  <div className="flex w-full items-center justify-end input-container relative gap-3">
                    <label
                      htmlFor="pan_card_number"
                      className="text-sm banner-label text-slate-600 min-w-[120px]"
                    >
                      Company PAN
                    </label>
                    <input
                      type="text"
                      name="pan_card_number"
                      id="pan_card_number"
                      placeholder=""
                      value={pan}
                      autoComplete="off"
                      pattern="[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}"
                      title="Enter valid Company PAN number (e.g., ABCDE1234F)"
                      maxLength={10}
                      required
                      onChange={(e) => setPan(e.target.value.toUpperCase())}
                      className="search-input flex-1 text-md rounded-2xl ip-search banner-inputs uppercase border px-4 py-3 outline-none focus:ring-2"
                      style={{ borderColor: "#E5E7EB" }}
                    />
                  </div>
                </div>
                <div
                  className={`error-message mt-1 text-[13px] ${
                    panError ? "block text-red-600" : "hidden"
                  }`}
                  id="pan-error-msg"
                >
                  Please enter a valid PAN number
                </div>
              </div>

              {/* Company name input */}
              <div className="w-full mt-5 mb-5 p-1 search-div">
                <div
                  id="search-box-container"
                  className="flex flex-col sm:flex-row items-center"
                >
                  <div className="flex w-full items-center justify-end input-container relative gap-3">
                    <label
                      htmlFor="global_company_search"
                      className="text-sm banner-label text-slate-600 min-w-[120px]"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="query"
                      id="global_company_search"
                      placeholder=""
                      value={company}
                      autoComplete="off"
                      pattern="[a-zA-Z0-9\s]+"
                      title="Only letters, numbers and spaces are allowed"
                      maxLength={50}
                      required
                      onChange={(e) => {
                        const val = e.target.value.replace(
                          /[^a-zA-Z0-9\s]/g,
                          ""
                        );
                        setCompany(val.toUpperCase());
                      }}
                      className="search-input flex-1 text-md rounded-2xl ip-search banner-inputs uppercase border px-4 py-3 outline-none focus:ring-2"
                      style={{ borderColor: "#E5E7EB" }}
                    />

                    {/* Spinner (hidden by default) */}
                    <div
                      className={`spinner-border brand-spinner absolute right-0 mr-2 top-[27px] text-gray-900 ${
                        false ? "" : "hidden"
                      }`}
                      role="status"
                      aria-hidden="true"
                    >
                      <i className="ki-filled ki-loading text-1.5xl"></i>
                    </div>
                  </div>
                  <input
                    type="hidden"
                    name="csrfmiddlewaretoken"
                    value="M0mN2Ojkv5kh0JHJnhvYsWBOqp9lXfPkyX6RPlDrPAZZUIuBYBeX5Yyuby8fhb3I"
                  />
                </div>
                <div
                  className={`error-message mt-1 text-[13px] ${
                    nameError ? "block text-red-600" : "hidden"
                  }`}
                  id="input-error-msg"
                >
                  Name must be at least 4 characters long
                </div>
              </div>

              <span id="cin_number" className="hidden"></span>

              {/* COB status message */}
              <div
                id="cob_status_message"
                className={`cob-status-message ${cobMsg ? "block" : "hidden"}`}
                style={{
                  color: COLORS.blueLink,
                  fontSize: 14,
                  marginTop: 8,
                  padding: 8,
                  backgroundColor: "#f0f8ff",
                  borderRadius: 5,
                  borderLeft: `4px solid ${COLORS.blueLink}`,
                }}
              >
                {cobMsg ?? ""}
              </div>

              {/* Sub content */}
              <div className="flex flex-row md:flex-row mt-5 mb-7 wd-type-wrapper w-full">
                <p
                  id="dynamicSubContent"
                  className="sub-content text-gray-700 text-left w-full"
                >
                  Hassle-free bookkeeping, MCA, and Income Tax compliance
                  solutions for companies and LLPs, backed by the LEDGERS
                  platform.
                </p>
              </div>

              {/* CTAs: Desktop and Mobile buttons */}
              <div className="flex flex-row md:flex-row justify-end">
                <div className="flex items-center gap-3">
                  {/* Desktop */}
                  <button
                    type="button"
                    className="desktop-search-btn hidden md:flex p-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-md rounded-lg transition-all shadow-lg text-center whitespace-nowrap relative items-center justify-center min-w-[160px] max-w-[180px] gap-2"
                    id="get_started_company_btn"
                    onClick={() => onGetStarted("desktop")}
                    style={{ cursor: "pointer", opacity: 1 }}
                  >
                    <div
                      className={`spinner-border file-spinner text-white ${
                        desktopLoading ? "" : "hidden"
                      }`}
                      role="status"
                      style={{ width: "1.5rem", height: "1.7rem" }}
                    >
                      <i className="ki-filled ki-loading text-lg"></i>
                    </div>
                    <span className="flex justify-center items-center px-3">
                      {desktopLoading ? "Processing..." : "Start Compliance"}
                    </span>
                  </button>

                  {/* Mobile */}
                  <button
                    type="button"
                    className="mobile-search-btn md:hidden bg-green-500 hover:bg-green-600 text-white font-semibold text-md rounded-lg transition-all shadow-lg text-center mx-auto min-w-[160px] flex items-center justify-center gap-2 p-2"
                    id="get_started_company_btn_mobile"
                    onClick={() => onGetStarted("mobile")}
                    style={{ cursor: "pointer", opacity: 1 }}
                  >
                    <div
                      className={`spinner-border file-spinner text-white ${
                        mobileLoading ? "" : "hidden"
                      }`}
                      role="status"
                      style={{ width: "1.2rem", height: "1.2rem" }}
                    >
                      <i className="ki-filled ki-loading text-sm"></i>
                    </div>
                    <span>
                      {mobileLoading ? "Processing..." : "Start Compliance"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function PlatformBand() {
  return (
    <section className="mt-6">
      <div className="max-w-[1200px] mx-auto px-4">
        <div
          className="bg-white rounded-2xl border shadow-sm p-6 md:p-8"
          style={{ borderColor: "#E5E7EB" }}
        >
          <h2 className="text-center font-bold text-[22px] text-[#0B5CF0]">
            ONE Platform. STRESS-FREE Compliance.
          </h2>
          <p className="text-center text-[14px] text-slate-600 max-w-3xl mx-auto mt-2">
            Powerful accounting and compliance platform with a dedicated human
            accountant for your business. Add unlimited team-mates and advisors
            without extra fees. We handle the filings - so you can focus on
            growing, not juggling software or paperwork costs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {/* Left deep-blue card */}
            <div className="rounded-xl overflow-hidden">
              <div
                className="rounded-xl p-8 text-white h-full"
                style={{
                  background: `linear-gradient(140deg, #0B1CA6 0%, #0E0F3B 100%)`,
                }}
              >
                <div className="text-[22px] font-semibold">Software</div>
                <div className="mt-1 opacity-90">Unlimited Users</div>
                <button className="mt-6 px-4 py-2 rounded border border-white hover:bg-white hover:text-[#0B1CA6] transition">
                  Get pricing
                </button>

                <div className="mt-6 text-[14px] space-y-2">
                  {[
                    "Admin & Standard Users",
                    "Contacts (Customers & Vendors)",
                    "Items / SKUs",
                    "Invoices & Quotations",
                    "Employees & Attendance",
                    "Connected Banking",
                    "AI Reconciliation",
                  ].map((t) => (
                    <div key={t} className="flex items-center justify-between">
                      <span>{t}</span>
                      <span className="text-xs bg-white/15 px-2 py-0.5 rounded">
                        Unlimited
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Middle card */}
            <div
              className="bg-white rounded-xl border shadow-sm p-6"
              style={{ borderColor: "#E5E7EB" }}
            >
              <div className="flex items-center justify-between">
                <div className="text-[18px] font-semibold">
                  1 Year Accountant
                </div>
                <button className="px-3 py-1.5 text-white text-[13px] rounded bg-[#0B1CA6]">
                  Get pricing
                </button>
              </div>
              <div className="mt-2">
                <span
                  className="inline-block text-[11px] text-slate-600 rounded-full px-2 py-0.5 border"
                  style={{ borderColor: "#E5E7EB" }}
                >
                  Software Included
                </span>
              </div>

              <div className="mt-5">
                <div className="text-[12px] font-semibold text-slate-500 uppercase tracking-wide">
                  Onboarding & Consulting
                </div>
                <ul className="mt-2 text-[14px] text-slate-700 space-y-2">
                  {[
                    "Assigned Accountant & CSM",
                    "Chart of Accounts Setup",
                    "Guided Ledger Import",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-0.5">✓</span> {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5">
                <div className="text-[12px] font-semibold text-slate-500 uppercase tracking-wide">
                  Bookkeeping
                </div>
                <ul className="mt-2 text-[14px] text-slate-700 space-y-2">
                  {[
                    "Monthly Bookkeeping",
                    "Bank Reconciliation",
                    "Accounts Payable & Receivable Management",
                    "Expense Tracking",
                    "Financial Reports",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-0.5">✓</span> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right card */}
            <div
              className="bg-white rounded-xl border shadow-sm p-6"
              style={{ borderColor: "#E5E7EB" }}
            >
              <div className="flex items-center justify-between">
                <div className="text-[18px] font-semibold">
                  2 Year Accountant
                </div>
                <button className="px-3 py-1.5 text-white text-[13px] rounded bg-[#0B1CA6]">
                  Get pricing
                </button>
              </div>
              <div className="mt-2">
                <span
                  className="inline-block text-[11px] text-slate-600 rounded-full px-2 py-0.5 border"
                  style={{ borderColor: "#E5E7EB" }}
                >
                  Software Included
                </span>
              </div>

              <div className="mt-5">
                <div className="text-[12px] font-semibold text-slate-500 uppercase tracking-wide">
                  Onboarding & Consulting
                </div>
                <ul className="mt-2 text-[14px] text-slate-700 space-y-2">
                  {[
                    "Assigned Accountant & CSM",
                    "Chart of Accounts Setup",
                    "Guided Ledger Import",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-0.5">✓</span> {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5">
                <div className="text-[12px] font-semibold text-slate-500 uppercase tracking-wide">
                  Bookkeeping
                </div>
                <ul className="mt-2 text-[14px] text-slate-700 space-y-2">
                  {[
                    "Monthly Bookkeeping",
                    "Bank Reconciliation",
                    "Accounts Payable & Receivable Management",
                    "Expense Tracking",
                    "Financial Reports",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-0.5">✓</span> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Breadcrumbs */}
        <div className="max-w-[1200px] mx-auto px-4 text-[13px] text-slate-500 mt-4">
          <a className="hover:underline" href="#">
            IndiaFilings
          </a>{" "}
          /{" "}
          <a className="hover:underline" href="#">
            MCA Services
          </a>{" "}
          /{" "}
          <a className="hover:underline" href="#">
            Company Compliance
          </a>
        </div>
      </div>
    </section>
  );
}

function ArticleAndSidebar() {
  const [open, setOpen] = useState<number | null>(null);
  const faq = [
    "What are the filings for the company?",
    "Can I run a small business without registering?",
    "How do I legally file a Business?",
    "Does the appointment of the statutory auditor fall under annual compliance?",
    "What are the compliances of a Private Limited Company?",
    "Is it necessary to conduct AGM?",
    "Is it mandatory to get a Private Limited Company audited?",
    "How to file the annual returns of the Company?",
    "Is audit report mandatory for all the private limited companies?",
    "When is annual return to be filed after the AGM?",
  ];

  return (
    <section className="mt-8">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <article className="lg:col-span-8">
            <div
              className="bg-white rounded-2xl border shadow-sm p-6 md:p-8"
              style={{ borderColor: "#E5E7EB" }}
            >
              <div className="flex items-center gap-3">
                <img
                  src="https://img.indiafilings.com/catalog/team-member.jpg"
                  alt="advisor"
                  className="w-10 h-10 rounded-full object-cover border"
                  style={{ borderColor: "#E5E7EB" }}
                />
                <div>
                  <div className="text-[12px] text-slate-700 font-medium">
                    YADAV BHAVESH PHOOLCHAND
                  </div>
                  <div className="text-[12px] text-slate-500">
                    Compliance Advisor • Updated on: Mar 14, 2025
                  </div>
                </div>
              </div>

              <h2 className="text-[26px] md:text-[28px] font-bold mt-4">
                Expert Guidance on Compliance for Private Limited Companies
              </h2>

              <p className="text-[14px] text-slate-700 mt-3 leading-7">
                Navigating compliance can be a complex challenge for private
                limited companies in India. Adhering to the comprehensive
                requirements of the Companies Act 2013, including director
                appointments, shareholder meetings, and other regulatory
                obligations, is crucial but can often seem overwhelming. That’s
                where IndiaFilings steps in. We provide expert guidance and
                comprehensive solutions tailored to your company’s needs,
                simplifying the compliance process from registration to ongoing
                obligations.
              </p>

              <p className="mt-4 italic text-[14px] text-slate-700">
                Let’s make Company compliance hassle-free together! Get Started
                now!
              </p>

              <h3 className="text-[22px] font-semibold mt-6">
                Compliance for Private Limited Company
              </h3>
              <p className="text-[14px] text-slate-700 mt-3 leading-7">
                Compliance refers to adhering to orders, rules, or requests. For
                a private limited company incorporated in India, compliance with
                the Companies Act 2013 is essential. This legislation governs
                various aspects, including the appointment, qualification,
                remuneration, and retirement of directors and the conduct of
                board and shareholder meetings. Compliance with Registrar of
                Companies (RoC) regulations is mandatory for every private
                limited company, regardless of turnover or capital amount.
              </p>
              <ul className="mt-4 text-[14px] text-slate-700 space-y-2">
                <li className="flex gap-2 items-start">
                  <span className="text-emerald-600 mt-0.5">✓</span> Compliance
                  Related to the Registrar - ROC Compliance
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-emerald-600 mt-0.5">✓</span> Compliance
                  Beyond the Registrar’s Purview - Non-Registrar compliance
                </li>
              </ul>

              <h3 className="text-[22px] font-semibold mt-8">
                ROC Compliance for Private Limited Company
              </h3>
              <p className="text-[14px] text-slate-700 mt-3 leading-7">
                These are obligations that a company must fulfil in accordance
                with the regulations set by the Registrar of Companies (ROC) or
                equivalent authority. They typically involve statutory filings
                and adherence to the Companies Act provisions. Ensuring
                adherence to ROC compliance is pivotal for companies operating
                in India.
              </p>

              <h3 className="text-[20px] font-semibold mt-8">
                Annual Compliances for Private Limited Company
              </h3>
              <p className="text-[14px] text-slate-700 mt-3 leading-7">
                Annual compliances are a critical aspect of corporate governance
                for companies registered in India. Key annual compliances
                include:
              </p>

              <ul className="mt-3 text-[14px] text-slate-700 space-y-3">
                <li>
                  <span className="font-semibold">
                    INC‑20A: Declaration for Commencement of Business.
                  </span>{" "}
                  To be obtained within 180 days of incorporation. Failure
                  results in penalties.
                </li>
                <li>
                  <span className="font-semibold">
                    Appointment of Auditor and Filing E‑form ADT‑1.
                  </span>{" "}
                  Appoint first auditor within 30 days of incorporation and file
                  ADT‑1 within 15 days of AGM.
                </li>
                <li>
                  <span className="font-semibold">Board Meetings.</span> Hold
                  first within 30 days of incorporation and at least four per
                  year, max gap 120 days.
                </li>
                <li>
                  <span className="font-semibold">
                    Annual General Meeting (AGM).
                  </span>{" "}
                  First within 9 months of first FY end; thereafter within 6
                  months of FY end.
                </li>
                <li>
                  <span className="font-semibold">Annual ROC Filings.</span>{" "}
                  AOC‑4 within 30 days of AGM; MGT‑7 within 60 days of AGM;
                  DIR‑12 within 30 days; DIR‑3 KYC by Sept 30; DPT‑3 by June 30;
                  etc.
                </li>
              </ul>

              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-[14px] border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-slate-700">
                      <th
                        className="text-left p-3 border-b"
                        style={{ borderColor: "#E2E8F0" }}
                      >
                        Annual compliances for Private Limited Company
                      </th>
                      <th
                        className="text-left p-3 border-b"
                        style={{ borderColor: "#E2E8F0" }}
                      >
                        Due Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    {[
                      [
                        "Commencement of Business Certificate (COB)",
                        "Within 180 days of incorporation",
                      ],
                      [
                        "Appointment of Auditor and Filing E‑form ADT‑1",
                        "Within 15 days of the AGM",
                      ],
                      [
                        "Holding Board Meetings",
                        "As per the schedule of board meetings",
                      ],
                      [
                        "Conducting the Annual General Meeting (AGM)",
                        "Within 9 months from financial year-end",
                      ],
                      [
                        "AOC‑4: Filing of Financial Statements",
                        "Within 30 days of the AGM",
                      ],
                      ["MGT‑7: Annual Returns", "Within 60 days of the AGM"],
                      [
                        "DIR‑12: Appointment/Resignation of Directors",
                        "Within 30 days of appointment/resignation",
                      ],
                      [
                        "DIR‑3 KYC: Director KYC Submission",
                        "By September 30th each year",
                      ],
                      [
                        "MGT‑14: Filing of Board Resolutions",
                        "Within 30 days of passing the resolution",
                      ],
                      ["DPT‑3: Return of Deposits", "By June 30th each year"],
                    ].map(([a, b]) => (
                      <tr key={a} className="odd:bg-white even:bg-slate-50">
                        <td
                          className="p-3 border-b"
                          style={{ borderColor: "#F1F5F9" }}
                        >
                          {a}
                        </td>
                        <td
                          className="p-3 border-b"
                          style={{ borderColor: "#F1F5F9" }}
                        >
                          {b}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="text-[22px] font-semibold mt-8">
                Event‑Based Compliances for Private Limited Company
              </h3>
              <p className="text-[14px] text-slate-700 mt-3 leading-7">
                Besides the annual filings, there are various other compliances
                that need to be complied with on occurrence of any event in the
                company, such as change in authorized capital,
                allotment/transfer of shares, loans to directors/companies,
                appointment of managing/whole‑time director, changes in bank
                signatories, change of auditors, etc.
              </p>

              <h3 className="text-[22px] font-semibold mt-8">
                Non‑Registrar compliance
              </h3>
              <ul className="mt-3 text-[14px] text-slate-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5">✓</span> Payment of
                  periodic taxes (GST, TDS, TCS, Advance Tax, P‑Tax)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5">✓</span> Filing of
                  GST, TDS, ITR, Tax Audit Report as applicable
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5">✓</span> ESIC, PF,
                  Professional Tax returns
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5">✓</span> Regulatory
                  assessments and reporting as per other laws
                </li>
              </ul>

              {/* FAQ */}
              <div className="mt-10">
                <h4 className="text-[20px] font-semibold">
                  FAQ's on Company Compliance
                </h4>
                <div
                  className="mt-3 bg-white rounded-xl border"
                  style={{ borderColor: "#E5E7EB" }}
                >
                  {faq.map((q, i) => (
                    <div
                      key={q}
                      className="border-b last:border-b-0"
                      style={{ borderColor: "#E5E7EB" }}
                    >
                      <button
                        className="w-full flex items-center justify-between text-left px-4 py-3"
                        onClick={() => setOpen(open === i ? null : i)}
                      >
                        <span className="text-[14px]">{q}</span>
                        <span className="text-slate-400">
                          {open === i ? "−" : "+"}
                        </span>
                      </button>
                      {open === i && (
                        <div className="px-4 pb-3 text-[14px] text-slate-600">
                          This is a placeholder answer. Replace with your exact
                          FAQ content.
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <button
                  className="mt-3 border rounded px-4 py-2 text-[13px]"
                  style={{ borderColor: "#E5E7EB" }}
                >
                  Load More
                </button>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <div
              className="bg-white rounded-2xl border shadow-sm p-4"
              style={{ borderColor: "#E5E7EB" }}
            >
              <div className="font-semibold mb-2">Related Guides</div>
              <ul className="text-[14px] space-y-2">
                {[
                  "Private Limited Company Registration in India",
                  "Companies Act, 2013",
                  "Form ADT‑1",
                  "Form MGT‑7 – Annual Return",
                ].map((t) => (
                  <li key={t}>
                    <a className="text-[#0B5CF0] hover:underline" href="#">
                      {t}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="bg-white rounded-2xl border shadow-sm overflow-hidden"
              style={{ borderColor: "#E5E7EB" }}
            >
              <img
                src="https://img.indiafilings.com/catalog/company-compliance-india.png"
                alt="DIN eKYC Filing"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <div className="font-semibold">DIN eKYC Filing</div>
                <div className="text-[13px] text-slate-600">
                  Quick & easy DIN eKYC filing
                </div>
              </div>
            </div>

            <div
              className="bg-white rounded-2xl border shadow-sm overflow-hidden"
              style={{ borderColor: "#E5E7EB" }}
            >
              <img
                src="https://img.indiafilings.com/catalog/director-change.png"
                alt="Director Change"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <div className="font-semibold">Director Change</div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function PopularSearches() {
  const tags = [
    "Partnership",
    "Limited Liability Partnership",
    "Digital Signature",
    "Copyright Registration",
    "Unified Portal",
    "PAN Card Download",
    "Flipkart Seller",
    "EPFO Passbook",
    "Domicile Certificate",
    "Udyog Aadhaar",
    "Bonafide Certificate",
    "Instant PAN Card",
    "Income Certificate",
    "Marriage Certificate",
    "Passport Renewal",
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
    "TRNGENRT",
    "RAJSSP",
    "LLP Compliance",
    "Form 16",
    "Police Clearance Certificate",
    "OBC Certificate",
    "Jambanadi",
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
  return (
    <section className="mt-8">
      <div className="max-w-[1200px] mx-auto px-4">
        <div
          className="bg-white rounded-2xl border shadow-sm p-6"
          style={{ borderColor: "#E5E7EB" }}
        >
          <div className="font-semibold mb-3">Popular Searches</div>
          <div className="flex flex-wrap gap-3">
            {tags.map((t) => (
              <span
                key={t}
                className="text-[12px] px-3 py-1 rounded-full border bg-slate-50"
                style={{ borderColor: "#E5E7EB" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-10 pb-24">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="bg-[#EEF3F9] rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="font-semibold mb-3">IndiaFilings</div>
              <ul className="text-[14px] text-slate-700 space-y-2">
                <li>About IndiaFilings</li>
                <li>Careers</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-3">Platforms</div>
              <ul className="text-[14px] text-slate-700 space-y-2">
                <li>Business Search</li>
                <li>Trademark Search</li>
                <li>Filings.AE for UAE</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-3">Usage</div>
              <ul className="text-[14px] text-slate-700 space-y-2">
                <li>Terms &amp; Conditions</li>
                <li>Privacy Policy</li>
                <li>Refund Policy</li>
              </ul>
            </div>
          </div>

          <div className="text-[12px] text-slate-500 mt-6">
            Copyright © 2025 IndiaFilings Private Limited. All rights reserved.
          </div>
        </div>
      </div>

      {/* Floating WhatsApp-like button */}
      <a
        href="https://wa.me/911234567890"
        target="_blank"
        rel="noreferrer"
        className="fixed right-6 bottom-6 z-50 bg-[#25D366] hover:brightness-95 text-white rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3"
        aria-label="Live Chat with Experts"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.473-.148-.673.15-.198.297-.767.966-.941 1.164-.173.198-.347.223-.644.074-1.758-.868-2.903-1.543-4.073-3.13-.31-.42.31-.39.899-1.29.099-.198.05-.371-.025-.52-.074-.148-.673-1.62-.923-2.222-.243-.587-.49-.508-.673-.517l-.573-.01c-.198 0-.52.074-.792.37-.273.297-1.04 1.016-1.04 2.478 0 1.462 1.06 2.878 1.207 3.078.148.198 2.09 3.19 5.065 4.47 2.975 1.281 2.975.854 3.51.8.536-.055 1.758-.718 2.007-1.412.248-.694.248-1.289.173-1.412-.074-.123-.273-.198-.57-.347z"
            fill="white"
          />
          <path
            d="M21.062 12.004c0 4.97-4.05 9.02-9.02 9.02-1.585 0-3.08-.425-4.406-1.163l-4.938 1.29 1.32-4.79a8.922 8.922 0 01-1.38-4.386C1.957 7.037 6.06 3 11.013 3c4.97 0 9.039 4.05 9.039 9.004z"
            fill="white"
            opacity="0.06"
          />
        </svg>
        <span className="hidden sm:inline-block text-sm font-medium">
          Live Chat with Experts
        </span>
      </a>
    </footer>
  );
}

export default function Page() {
  return (
    <div
      className={`${inter.variable}`}
      style={{
        backgroundColor: COLORS.bg,
        color: COLORS.text,
        fontFamily:
          "var(--font-inter), ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial",
      }}
    >
      <Header />
      <Hero />
      <PlatformBand />
      <ArticleAndSidebar />
      <PopularSearches />
      <Footer />
    </div>
  );
}
