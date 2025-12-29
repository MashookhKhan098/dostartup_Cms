"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const ASSETS = {
  logo: "/images/india-logo.jpg",
  hero: "https://img.indiafilings.com/catalog/llp-compliance-india.webp",
};

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

const pricingPlans = [
  {
    name: "OPC Compliance - 1 Year",
    price: "₹19,899",
    popular: false,
    features: [
      "LEDGERS Accounting Software – 1 Year",
      "LEDGERS Compliance Platform",
      "Dedicated Accountant",
      "Dedicated Compliance Advisor",
      "MCA Annual Filing (AOC-4 & MGT-7A for OPC)",
      "Annual Bookkeeping",
      "Financial Statement Preparation",
      "ITR-6 Return Filing",
      "DIN KYC for 1 Director",
    ],
  },
  {
    name: "OPC Compliance - 2 Years",
    price: "₹29,899",
    popular: true,
    features: [
      "LEDGERS Accounting Software – 1 Year",
      "LEDGERS Compliance Platform",
      "Dedicated Accountant",
      "Dedicated Compliance Advisor",
      "MCA Annual Filing (AOC-4 & MGT-7A for OPC)",
      "Annual Bookkeeping",
      "Financial Statement Preparation",
      "ITR-6 Return Filing",
      "DIN KYC for 1 Director",
    ],
  },
  {
    name: "OPC Compliance - 3 Years",
    price: "₹45,899",
    popular: false,
    features: [
      "LEDGERS Accounting Software – 1 Year",
      "LEDGERS Compliance Platform",
      "Dedicated Accountant",
      "Dedicated Compliance Advisor",
      "MCA Annual Filing (AOC-4 & MGT-7A for OPC)",
      "Annual Bookkeeping",
      "Financial Statement Preparation",
      "ITR-6 Return Filing",
      "DIN KYC for 1 Director",
    ],
  },
];

const popularTags = [
  "LLP Compliance",
  "Company Compliance",
  "DIN eKYC",
  "Director Change",
  "Share Transfer",
  "Form 10BD",
  "Strike Off Company",
  "DPT-3 Filing",
  "Registered Office Change",
  "GST Registration",
  "Trademark Registration",
  "Digital Signature Certificate",
];

interface NavItemProps {
  children: React.ReactNode;
  hasDropdown?: boolean;
  isActive?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
  children,
  hasDropdown = false,
  isActive = false,
  onMouseEnter,
  onMouseLeave,
}) => (
  <div
    className="relative"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <button
      className={`text-sm flex items-center gap-1 hover:text-slate-900 ${
        isActive ? "text-slate-900 font-medium" : "text-slate-700"
      }`}
    >
      {children}
      {hasDropdown && <ChevronDown className="w-3 h-3" />}
    </button>
  </div>
);

/* ----------------- Header with MCA dropdown ----------------- */

const Header: React.FC = () => {
  const [showMcaDropdown, setShowMcaDropdown] = useState(false);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <img src={ASSETS.logo} alt="IndiaFilings" className="h-10 w-auto" />

          <nav className="flex items-center gap-6 text-sm" aria-label="Main">
            {["Startup", "Registrations", "Trademark"].map((item) => (
              <NavItem key={item}>{item}</NavItem>
            ))}

            <NavItem>GST</NavItem>
            <NavItem>Income Tax</NavItem>

            <NavItem
              hasDropdown
              isActive
              onMouseEnter={() => setShowMcaDropdown(true)}
              onMouseLeave={() => setShowMcaDropdown(false)}
            >
              MCA
              {showMcaDropdown && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[780px]">
                  <div className="bg-white rounded-lg shadow-xl border border-slate-200 p-6">
                    <div className="grid grid-cols-3 gap-x-6 gap-y-2">
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
            </NavItem>

            {["Compliance", "Personal", "Global", "Cities", "Guides"].map(
              (item) => (
                <NavItem key={item}>{item}</NavItem>
              )
            )}

            <button className="px-4 py-1.5 border border-slate-300 text-sm rounded-md hover:bg-slate-50">
              Login
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="pt-10 pb-6">
      <div
        className="max-w-screen-2xl mx-auto p-5 lg:p-8 rounded-xl overflow-hidden"
        style={{
          backgroundColor: "#f1f5f9",
          backgroundImage:
            "radial-gradient(closest-side at 10% 80%, rgba(236, 213, 230, 0.25), transparent 30%), radial-gradient(closest-side at 90% 30%, rgba(226, 235, 247, 0.45), transparent 30%)",
          backgroundSize: "cover, cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-7.5 pt-7 pb-10 bg-slate-200 rounded-xl">
          <div className="p-5 lg:p-7.5 lg:pt-4">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                <span className="text-lg font-medium leading-none text-slate-950 mb-4">
                  IndiaFilings
                </span>
                <a
                  className="leading-none hover:text-primary-active"
                  href="https://www.indiafilings.com/about-us"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="flex text-sm text-black leading-5 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                    About IndiaFilings
                  </span>
                </a>
                <a
                  className="leading-none hover:text-primary-active"
                  href="https://www.indiafilings.com/careers"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="flex text-sm text-black leading-5 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                    Careers
                  </span>
                </a>
                <a
                  className="leading-none hover:text-primary-active"
                  href="https://www.indiafilings.com/contact-us"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="flex text-sm text-black leading-5 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                    Contact Us
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="p-5 lg:p-7.5 lg:pt-4">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                <span className="text-lg font-medium leading-none text-slate-950 mb-4">
                  Platforms
                </span>
                <a
                  className="leading-none hover:text-primary-active"
                  href="https://www.indiafilings.com/search/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="flex text-sm text-black leading-5 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                    Business Search
                  </span>
                </a>
                <a
                  className="leading-none hover:text-primary-active"
                  href="https://www.indiafilings.com/trademark-search"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="flex text-sm text-black leading-5 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                    Trademark Search
                  </span>
                </a>
                <a
                  className="leading-none hover:text-primary-active"
                  href="https://filings.ae/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="flex text-sm text-black leading-5 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                    Filings.AE for UAE
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="p-5 lg:p-7.5 lg:pt-4">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                <span className="text-lg font-medium leading-none text-slate-950 mb-4">
                  Usage
                </span>
                <a
                  className="leading-none hover:text-primary-active"
                  href="https://www.indiafilings.com/termsconditions"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="flex text-sm text-black leading-5 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                    Terms &amp; Conditions
                  </span>
                </a>
                <a
                  className="leading-none hover:text-primary-active"
                  href="https://www.indiafilings.com/privacypolicy"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="flex text-sm text-black leading-5 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                    Privacy Policy
                  </span>
                </a>
                <a
                  className="leading-none hover:text-primary-active"
                  href="https://www.indiafilings.com/refund-policy"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="flex text-sm text-black leading-5 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                    Refund Policy
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="p-5 lg:p-7.5 lg:pt-4">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                <span className="text-lg font-medium leading-none text-slate-950 mb-4 hidden md:block">
                  &nbsp;
                </span>
                <a
                  className="leading-none hover:text-primary-active"
                  href="https://www.indiafilings.com/confidentiality-policy"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="flex text-sm text-black leading-5 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                    Confidentiality Policy
                  </span>
                </a>
                <a
                  className="leading-none hover:text-primary-active"
                  href="https://www.indiafilings.com/disclaimer"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="flex text-sm text-black leading-5 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                    Disclaimer Policy
                  </span>
                </a>
                <a
                  className="leading-none hover:text-primary-active"
                  href="https://www.indiafilings.com/review"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="flex text-sm text-black leading-5 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                    IndiaFilings Review
                  </span>
                </a>
              </div>
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

export default function OPCCompliancePage(): React.ReactElement {
  const [companyInput, setCompanyInput] = useState("");

  return (
    <div className="page">
      <Header />
      <main>
        <section className="site-banner">
          <div className="banner-inner">
            <div className="banner-cta">
              <div className="lead-eyebrow">OPC Compliance</div>
              <h1 className="lead-title">
                Hassle-free bookkeeping, MCA and Income Tax compliance solutions
              </h1>
              <p className="lead-sub">
                End-to-end compliance service for OPCs backed by LEDGERS
                platform and expert accountants.
              </p>
              <form
                className="hero-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(
                    `OPC compliance demo requested for "${
                      companyInput || "Unnamed OPC"
                    }"`
                  );
                }}
              >
                <input
                  id="opc-name"
                  className="hero-input"
                  placeholder="ENTER COMPANY NAME"
                  aria-label="Enter company name"
                  value={companyInput}
                  onChange={(e) => setCompanyInput(e.target.value)}
                />
                <button type="submit" className="hero-button">
                  Book Demo
                </button>
              </form>
            </div>
            <div className="banner-media">
              <div className="media-frame">
                <img
                  src={ASSETS.hero}
                  alt="OPC compliance"
                  className="w-full h-[420px] object-contain"
                />
                <div className="media-badge">OPC Compliance Simplified</div>
              </div>
            </div>
          </div>
        </section>

        <section className="pricing-section">
          <div className="pricing-inner">
            <div className="pricing-header">
              <h2>OPC Compliance Made Easy</h2>
              <p>
                Choose the right compliance plan for your OPC and avoid
                penalties & delays.
              </p>
            </div>
            <div className="pricing-cards">
              {pricingPlans.map((plan) => (
                <article
                  key={plan.name}
                  className={`pricing-card ${plan.popular ? "popular" : ""}`}
                >
                  {plan.popular && (
                    <div className="popular-chip">Most popular</div>
                  )}
                  <div className="card-top">
                    <div className="card-title">{plan.name}</div>
                    <div className="card-price">{plan.price}</div>
                  </div>
                  <button
                    className="select-btn"
                    onClick={() => alert(`Selected plan: ${plan.name}`)}
                  >
                    Select
                  </button>
                  <ul className="plan-features">
                    {plan.features.map((f) => (
                      <li key={f}>
                        <span className="feat-check">✔</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="benefits-section boxed" aria-label="Benefits">
          <div className="benefits-inner">
            <div className="benefit-card">
              <div className="benefit-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden>
                  <path
                    fill="#2563EB"
                    d="M12 12a3 3 0 100-6 3 3 0 000 6zm0 2c-3.866 0-7 1.79-7 4v1h14v-1c0-2.21-3.134-4-7-4z"
                  />
                </svg>
              </div>
              <h3>Dedicated Compliance Advisor</h3>
              <p>
                A dedicated advisor will handle filings, bookkeeping &
                compliance.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden>
                  <path
                    fill="#059669"
                    d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zM10.6 14.6l-2.1-2.1 1.4-1.4 0.7 0.7 3.9-3.9 1.4 1.4-5.3 5.3z"
                  />
                </svg>
              </div>
              <h3>Timely Filings & Zero Penalties</h3>
              <p>
                All mandatory OPC filings submitted accurately before due dates.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden>
                  <path
                    fill="#7C3AED"
                    d="M13 3L11 3V13l8 4-1 1-7-3V4h2zM4 15v4h8v-4H4z"
                  />
                </svg>
              </div>
              <h3>LEDGERS Powered Filing</h3>
              <p>
                Razor-accurate filing using IndiaFilings LEDGERS automation.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#f8fafc]">
          <div className="max-w-[1200px] mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0b2545] mb-6">
              One Person Company (OPC) Compliance Overview
            </h2>
            <p className="text-slate-600 max-w-3xl leading-7 mb-10">
              OPCs must follow annual MCA filings including bookkeeping,
              financial statements, AOC-4, MGT-7A, DIR-3 KYC & Income Tax
              filing.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl border border-slate-200 shadow p-6">
                <img
                  src="https://img.indiafilings.com/catalog/opc-compliance.png"
                  className="w-full h-40 object-contain mb-4"
                />
                <h3 className="text-lg font-bold text-[#0b2545] mb-2">
                  Annual ROC Filings
                </h3>
                <p className="text-slate-600 text-sm leading-6">
                  AOC-4, MGT-7A, financial statements & board reports.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 shadow p-6">
                <img
                  src="https://img.indiafilings.com/catalog/din-ekyc.png"
                  className="w-full h-40 object-contain mb-4"
                />
                <h3 className="text-lg font-bold text-[#0b2545] mb-2">
                  Director eKYC
                </h3>
                <p className="text-slate-600 text-sm leading-6">
                  DIR-3 KYC is mandatory every year to keep DIN active.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 shadow p-6">
                <img
                  src="https://img.indiafilings.com/catalog/itr-filing.png"
                  className="w-full h-40 object-contain mb-4"
                />
                <h3 className="text-lg font-bold text-[#0b2545] mb-2">
                  Income Tax Filing
                </h3>
                <p className="text-slate-600 text-sm leading-6">
                  ITR-6 filing with bookkeeping, TDS, GST & financials.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-[1200px] mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0b2545] mb-6">
              Mandatory OPC Annual Compliance Requirements
            </h2>

            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="min-w-full bg-white text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    {["Compliance", "Form", "Due Date", "Applicability"].map(
                      (h) => (
                        <th
                          key={h}
                          className="px-4 py-3 text-left font-semibold text-[#0b2545]"
                        >
                          {h}
                        </th>
                      )
                    )}
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-4 py-3">Annual Return</td>
                    <td className="px-4 py-3 font-medium">MGT-7A</td>
                    <td className="px-4 py-3">Within 60 days of AGM</td>
                    <td className="px-4 py-3">Mandatory</td>
                  </tr>

                  <tr>
                    <td className="px-4 py-3">Financial Statement Filing</td>
                    <td className="px-4 py-3 font-medium">AOC-4</td>
                    <td className="px-4 py-3">Within 180 days from FY end</td>
                    <td className="px-4 py-3">All OPCs</td>
                  </tr>

                  <tr>
                    <td className="px-4 py-3">Director KYC</td>
                    <td className="px-4 py-3 font-medium">DIR-3 KYC</td>
                    <td className="px-4 py-3">30th September</td>
                    <td className="px-4 py-3">Every Director</td>
                  </tr>

                  <tr>
                    <td className="px-4 py-3">Income Tax Filing</td>
                    <td className="px-4 py-3 font-medium">ITR-6</td>
                    <td className="px-4 py-3">31st October</td>
                    <td className="px-4 py-3">Companies under Companies Act</td>
                  </tr>

                  <tr>
                    <td className="px-4 py-3">Event-based filings*</td>
                    <td className="px-4 py-3 font-medium">Multiple</td>
                    <td className="px-4 py-3">Within 30 days</td>
                    <td className="px-4 py-3">If any corporate event occurs</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs text-slate-500 mt-3">
              * Examples: Director change, office change, capital updates, share
              transfer etc.
            </p>
          </div>
        </section>

        <section className="py-16 bg-[#f8fafc]">
          <div className="max-w-[1200px] mx-auto px-4 grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold text-[#0b2545] mb-4">
                Documents Required
              </h3>
              <ul className="space-y-3 text-slate-700 text-sm">
                <li className="flex gap-2">
                  ✔ Financial Statements (Balance Sheet + P&L)
                </li>
                <li className="flex gap-2">✔ Director PAN & Aadhaar</li>
                <li className="flex gap-2">✔ Bank Statements</li>
                <li className="flex gap-2">✔ GST Returns (if applicable)</li>
                <li className="flex gap-2">✔ OPC MOA & AOA</li>
                <li className="flex gap-2">
                  ✔ DSC (Digital Signature Certificate)
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#0b2545] mb-4">
                Event-Based Compliance
              </h3>
              <ul className="space-y-3 text-slate-700 text-sm">
                <li className="flex gap-2">✔ Change of registered office</li>
                <li className="flex gap-2">✔ Change of nominee</li>
                <li className="flex gap-2">✔ Increase in capital</li>
                <li className="flex gap-2">✔ Director change</li>
                <li className="flex gap-2">
                  ✔ Voluntary conversion to Pvt Ltd
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-[1200px] mx-auto px-4">
            <h3 className="text-3xl font-bold text-[#0b2545] mb-6">
              OPC Compliance Exemptions
            </h3>

            <div className="grid md:grid-cols-3 gap-6 mb-14">
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow">
                <h4 className="font-bold text-[#0b2545] mb-2">
                  No AGM Required
                </h4>
                <p className="text-slate-600 text-sm">
                  OPC does not need to conduct an Annual General Meeting.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow">
                <h4 className="font-bold text-[#0b2545] mb-2">
                  Reduced Filings
                </h4>
                <p className="text-slate-600 text-sm">
                  MGT-7A is simpler and lighter compared to MGT-7.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow">
                <h4 className="font-bold text-[#0b2545] mb-2">
                  No Cash Flow Statement
                </h4>
                <p className="text-slate-600 text-sm">
                  OPCs are exempt from preparing a cash flow statement in
                  financial reports.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-[#0b2545] mb-4">
              OPC Compliance Process Flow
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                "Upload Documents",
                "Bookkeeping & Reconciliation",
                "Financial Statement Preparation",
                "MCA + ITR Filing",
              ].map((step, i) => (
                <div
                  key={i}
                  className="bg-[#f8fafc] border border-slate-200 rounded-xl p-6 text-center shadow"
                >
                  <h4 className="font-semibold text-[#0b2545] mb-2">
                    Step {i + 1}
                  </h4>
                  <p className="text-sm text-slate-600">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#f8fafc]">
          <div className="max-w-[1200px] mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[#0b2545] mb-6">
              Why 3,50,000+ Businesses Choose IndiaFilings
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto leading-7 mb-12">
              India’s most trusted platform for compliance, accounting, GST,
              taxation & registrations.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow border border-slate-200">
                <h3 className="text-lg font-bold text-[#0b2545] mb-2">
                  Dedicated Compliance Manager
                </h3>
                <p className="text-slate-600 text-sm">
                  Full support for all OPC filings & document handling.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow border border-slate-200">
                <h3 className="text-lg font-bold text-[#0b2545] mb-2">
                  Timely Reminders
                </h3>
                <p className="text-slate-600 text-sm">
                  Automation ensures you never miss a compliance deadline.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow border border-slate-200">
                <h3 className="text-lg font-bold text-[#0b2545] mb-2">
                  LEDGERS Accounting Platform
                </h3>
                <p className="text-slate-600 text-sm">
                  Automated bookkeeping, reconciliation & secure vault.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-4 grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-[#0b2545] mb-8">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0b2545] mb-2">
                    What is OPC annual compliance?
                  </h3>
                  <p className="text-slate-600 text-sm leading-6">
                    OPC must file AOC-4, MGT-7A, DIR-3 KYC, ITR-6 and maintain
                    proper books of accounts each year.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0b2545] mb-2">
                    Is AGM required for OPC?
                  </h3>
                  <p className="text-slate-600 text-sm leading-6">
                    No, OPC is exempt from holding an Annual General Meeting
                    (AGM).
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0b2545] mb-2">
                    What happens if OPC filings are delayed?
                  </h3>
                  <p className="text-slate-600 text-sm leading-6">
                    A penalty of ₹100 per day applies for late ROC filings.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0b2545] mb-2">
                    Is DIR-3 KYC mandatory?
                  </h3>
                  <p className="text-slate-600 text-sm leading-6">
                    Yes, every director must file DIR-3 KYC each year before
                    30th September.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0b2545] mb-2">
                    Does IndiaFilings help with bookkeeping?
                  </h3>
                  <p className="text-slate-600 text-sm leading-6">
                    Yes, LEDGERS bookkeeping + a dedicated accountant is
                    included in all plans.
                  </p>
                </div>
              </div>
            </div>

            <aside className="md:col-span-1">
              <div className="bg-[#f0fdf4] border border-green-200 rounded-xl p-6 shadow-sm">
                <div className="font-bold text-[#065f46] text-lg mb-1">
                  Live chat with experts
                </div>
                <p className="text-slate-600 text-sm mb-4 leading-6">
                  Connect instantly with compliance professionals.
                </p>
                <button className="bg-[#16a34a] text-white w-full py-2.5 rounded-lg font-semibold shadow hover:bg-[#12893e]">
                  Chat now
                </button>
              </div>

              <div className="mt-6 space-y-4">
                <a
                  href="/MCA/company-compliance"
                  className="block bg-white border border-slate-200 rounded-xl shadow p-4 hover:shadow-md transition"
                >
                  <img
                    src="/images/company-card.png"
                    className="w-full h-36 object-contain mb-3"
                  />
                  <h4 className="font-semibold text-[#0b2545] text-sm">
                    Company Compliance
                  </h4>
                </a>

                <a
                  href="/din-ekyc-filing"
                  className="block bg-white border border-slate-200 rounded-xl shadow p-4 hover:shadow-md transition"
                >
                  <img
                    src="/images/din-kyc-card.png"
                    className="w-full h-36 object-contain mb-3"
                  />
                  <h4 className="font-semibold text-[#0b2545] text-sm">
                    DIN eKYC Filing
                  </h4>
                </a>
              </div>
            </aside>
          </div>
        </section>

        <section className="py-12 bg-[#f8fafc]">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#0b2545] mb-4">
                Popular Searches
              </h3>

              <div className="flex flex-wrap gap-3">
                {popularTags.map((tag, i) => (
                  <button
                    key={i}
                    className="px-4 py-2 bg-[#eef6ff] text-[#0b5cf0] rounded-full text-xs border border-[#0b5cf0]/10 shadow-sm hover:bg-[#dcebff]"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

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
          font-family: system-ui, -apple-system, "Segoe UI", Roboto,
            "Helvetica Neue", Arial;
          background: linear-gradient(
            135deg,
            #f5f7ff 0%,
            #fdf6ff 40%,
            #f3fbff 100%
          );
          color: #0f172a;
        }
        .page {
          min-height: 100vh;
        }
        .site-banner {
          padding: 28px 16px 44px;
        }
        .banner-inner {
          max-width: 1160px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 32px;
          align-items: center;
        }
        .banner-cta {
          color: #0b2545;
          padding: 30px;
        }
        .lead-eyebrow {
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #0b5cf0;
          font-size: 13px;
          font-weight: 600;
        }
        .lead-title {
          font-size: 36px;
          margin: 10px 0;
          color: #0b2545;
          line-height: 1.15;
        }
        .lead-sub {
          color: #475569;
          font-size: 15px;
          line-height: 1.6;
        }
        .hero-form {
          margin-top: 18px;
          display: flex;
          gap: 12px;
          align-items: center;
        }
        .hero-input {
          flex: 1;
          background: #fff;
          color: #0b2545;
          border-radius: 999px;
          padding: 12px 16px;
          border: 1px solid #e6eef8;
          font-size: 14px;
          box-shadow: 0 6px 18px rgba(11, 37, 85, 0.04);
        }
        .hero-button {
          border-radius: 999px;
          background: #facc15;
          color: #081433;
          border: none;
          padding: 12px 20px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 8px 20px rgba(250, 204, 21, 0.15);
        }
        .banner-media .media-frame {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          background: #000;
          padding: 12px;
        }
        .banner-media img {
          width: 100%;
          height: 420px;
          object-fit: contain;
          display: block;
        }
        .media-badge {
          position: absolute;
          left: 20px;
          bottom: 20px;
          background: #059669;
          color: white;
          padding: 10px 16px;
          border-radius: 999px;
          font-weight: 600;
        }
        .pricing-section {
          padding: 44px 16px;
        }
        .pricing-inner {
          max-width: 1160px;
          margin: 0 auto;
        }
        .pricing-header {
          text-align: center;
          margin-bottom: 20px;
        }
        .pricing-header h2 {
          font-size: 26px;
          margin-bottom: 6px;
          color: #0b2545;
        }
        .pricing-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        .pricing-card {
          background: white;
          border-radius: 12px;
          border: 1px solid #eef2fb;
          padding: 22px;
          box-shadow: 0 12px 30px rgba(15, 23, 42, 0.04);
          position: relative;
          min-height: 380px;
        }
        .pricing-card.popular {
          border-color: #0b3b82;
          box-shadow: 0 12px 40px rgba(11, 60, 130, 0.06);
        }
        .popular-chip {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: #081433;
          color: white;
          padding: 6px 12px;
          border-radius: 999px;
          font-size: 12px;
        }
        .card-top {
          margin-bottom: 14px;
        }
        .card-title {
          font-weight: 700;
          font-size: 16px;
          color: #0b2545;
        }
        .card-price {
          font-size: 28px;
          font-weight: 800;
          margin-top: 8px;
        }
        .select-btn {
          margin-top: 12px;
          width: 100%;
          padding: 12px 0;
          border-radius: 999px;
          background: #081433;
          color: white;
          border: none;
          cursor: pointer;
          font-size: 14px;
        }
        .plan-features {
          margin-top: 14px;
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
          color: #475569;
          font-size: 13px;
        }
        .plan-features li {
          display: flex;
          gap: 10px;
          align-items: center;
          padding-bottom: 6px;
          border-bottom: 1px dashed #eef2fb;
        }
        .feat-check {
          color: #059669;
          font-weight: 700;
        }
        .benefits-section.boxed {
          padding: 26px 16px 18px;
        }
        .benefits-inner {
          max-width: 1160px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        .benefit-card {
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.9),
            rgba(255, 255, 255, 0.85)
          );
          border: 1px solid rgba(15, 23, 42, 0.04);
          border-radius: 12px;
          padding: 22px;
          box-shadow: 0 6px 22px rgba(11, 37, 85, 0.03);
          text-align: center;
          min-height: 160px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          justify-content: center;
        }
        .benefit-icon-wrap {
          width: 48px;
          height: 48px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 999px;
          box-shadow: 0 6px 16px rgba(11, 37, 85, 0.04);
        }
        .benefit-card h3 {
          margin: 0;
          font-size: 18px;
          color: #0b2545;
          font-weight: 700;
        }
        .benefit-card p {
          margin: 0;
          color: #475569;
          font-size: 14px;
          line-height: 1.6;
        }
        .tags-section.popular-searches {
          padding: 22px 16px 36px;
        }
        .tags-card {
          max-width: 1160px;
          margin: 0 auto;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.96),
            rgba(248, 250, 252, 0.96)
          );
          border-radius: 12px;
          padding: 18px;
          border: 1px solid rgba(14, 45, 92, 0.04);
          box-shadow: 0 10px 30px rgba(11, 37, 85, 0.03);
        }
        .tags-card h3 {
          margin: 0 0 12px 0;
          font-size: 16px;
          color: #0b2545;
        }
        .tags-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .tag-pill {
          background: #eef6ff;
          color: #0b5cf0;
          padding: 6px 10px;
          border-radius: 999px;
          font-size: 13px;
          border: 1px solid rgba(11, 92, 240, 0.08);
          box-shadow: inset 0 -1px 0 rgba(255, 255, 255, 0.6);
          cursor: pointer;
        }
        .tag-pill:hover {
          transform: translateY(-1px);
          transition: all 120ms ease;
        }
        .content-section {
          padding: 18px 16px 36px;
        }
        .content-inner {
          max-width: 1160px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 2.1fr 1fr;
          gap: 24px;
          align-items: start;
        }
        .whatsapp-card {
          background: white;
          border-radius: 10px;
          padding: 14px;
          border: 1px solid #eef2fb;
          text-align: left;
        }
        .whatsapp-title {
          font-weight: 700;
          margin-bottom: 8px;
        }
        .whatsapp-card button {
          margin-top: 10px;
          border-radius: 999px;
          background: #16a34a;
          color: white;
          border: none;
          padding: 8px 16px;
          font-size: 13px;
          cursor: pointer;
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
        .whatsapp-cta svg {
          flex: 0 0 auto;
        }
        @media (max-width: 1024px) {
          .banner-inner {
            grid-template-columns: 1fr;
            padding: 20px;
          }
          .pricing-cards {
            grid-template-columns: repeat(2, 1fr);
          }
          .benefits-inner {
            grid-template-columns: repeat(2, 1fr);
          }
          .content-inner {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 768px) {
          .pricing-cards {
            grid-template-columns: 1fr;
          }
          .hero-form {
            flex-direction: column;
          }
          .hero-button {
            width: 100%;
          }
          .benefits-inner {
            grid-template-columns: 1fr;
          }
          .tags-grid {
            gap: 6px;
          }
        }
      `}</style>
    </div>
  );
}
