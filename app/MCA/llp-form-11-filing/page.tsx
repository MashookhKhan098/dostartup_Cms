"use client";

import Head from "next/head";
import React, { useState } from "react";
import { Star, ChevronDown, CheckCircle } from "lucide-react";
import PopularSearches from "../../components/PopularSearches";

const ASSETS = {
  logo: "/images/india-logo.jpg",
  hero: "https://img.indiafilings.com/catalog/registered-office-change.png",
  cards: {
    compliance:
      "https://img.indiafilings.com/catalog/company-compliance-india.png",
    dinEKyc: "https://img.indiafilings.com/catalog/din-ekyc.png",
  },
  footerBg: "/images/footer-bg.png",
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

const RatingInline: React.FC = () => (
  <div className="rating-inline" aria-hidden>
    {[...Array(4)].map((_, i) => (
      <Star key={i} className="star" />
    ))}
    <svg
      className="star"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="16"
      height="16"
    >
      <defs>
        <linearGradient id="halfGrad">
          <stop offset="50%" stopColor="currentColor" />
          <stop offset="50%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <path
        fill="url(#halfGrad)"
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      />
    </svg>
    <span className="rating-count">(5)</span>
  </div>
);

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
      type="button"
      suppressHydrationWarning
      className={`text-sm flex items-center gap-1 hover:text-slate-900 ${
        isActive ? "text-slate-900 font-medium" : "text-slate-700"
      }`}
      aria-haspopup={hasDropdown ? "true" : undefined}
    >
      {children}
      {hasDropdown && <ChevronDown className="w-3 h-3" />}
    </button>
  </div>
);

const Header: React.FC = () => {
  const [showMcaDropdown, setShowMcaDropdown] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const primary = [
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
    <header className="site-header bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="container max-w-[1200px] mx-auto px-4">
        <div className="header-row flex items-center justify-between h-16">
          <a
            href="/"
            className="brand flex items-center gap-3 min-w-0 shrink-0"
            aria-label="IndiaFilings home"
          >
            <img src={ASSETS.logo} alt="IndiaFilings" className="h-10 w-auto" />
            <span className="brand-text hidden sm:inline-block font-semibold text-slate-800 truncate">
              IndiaFilings
            </span>
          </a>

          <nav
            className="hidden md:flex items-center gap-6 text-sm flex-1 justify-between px-4"
            aria-label="Main"
          >
            <div className="nav-left flex items-center gap-6 min-w-0">
              {primary.map((item) =>
                item === "MCA" ? (
                  <div
                    key={item}
                    className="relative"
                    onMouseEnter={() => setShowMcaDropdown(true)}
                    onMouseLeave={() => setShowMcaDropdown(false)}
                  >
                    <button
                      className={`text-sm flex items-center gap-1 hover:text-slate-900 ${
                        showMcaDropdown
                          ? "text-slate-900 font-medium"
                          : "text-slate-700"
                      }`}
                      aria-haspopup="true"
                    >
                      MCA <ChevronDown className="w-3 h-3" />
                    </button>

                    {showMcaDropdown && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[780px]">
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
                  </div>
                ) : (
                  <a
                    key={item}
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm text-slate-700 hover:text-slate-900 whitespace-nowrap"
                  >
                    {item}
                  </a>
                )
              )}
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <a
                href="/llp-form-11-filing"
                className="hidden lg:inline-block px-3 py-1.5 rounded-md text-sm font-medium bg-emerald-50 text-emerald-700 border border-emerald-100 hover:bg-emerald-100"
                aria-current="page"
              >
                LLP Form 11 Filing
              </a>

              <a
                href="/login"
                className="px-4 py-1.5 border border-slate-300 text-sm rounded-md hover:bg-slate-50"
              >
                Login
              </a>
            </div>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <a
              href="/llp-form-11-filing"
              className="text-xs px-2 py-1 rounded bg-emerald-50 text-emerald-700 hidden sm:inline-block"
            >
              LLP Form 11
            </a>

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

        {mobileOpen && (
          <div className="md:hidden py-3 border-t border-slate-100">
            <div className="flex flex-col gap-2">
              {primary.map((item) =>
                item === "MCA" ? (
                  <details key={item} className="px-2 py-1">
                    <summary className="flex items-center justify-between cursor-pointer">
                      MCA <ChevronDown className="w-4 h-4" />
                    </summary>
                    <div className="mt-2 grid grid-cols-1 gap-1 pl-2">
                      {MCA_DROPDOWN_LINKS.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          className="py-1 text-sm rounded hover:bg-slate-50 block"
                        >
                          {l.title}
                        </a>
                      ))}
                    </div>
                  </details>
                ) : (
                  <a
                    key={item}
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="px-2 py-2 text-sm rounded hover:bg-slate-50"
                  >
                    {item}
                  </a>
                )
              )}

              <a
                href="/llp-form-11-filing"
                className="px-2 py-2 text-sm rounded bg-emerald-50 text-emerald-700"
              >
                LLP Form 11 Filing
              </a>
              <a
                href="/login"
                className="px-2 py-2 text-sm rounded border border-slate-100 text-center"
              >
                Login
              </a>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .site-header .container {
          width: 100%;
        }
        .header-row {
          gap: 12px;
        }
        .brand-text {
          max-width: 150px;
        }
        nav.nav-left a,
        nav .nav-left .relative > button {
          flex-shrink: 0;
        }
        @media (min-width: 768px) {
          .relative > div {
            z-index: 90;
          }
        }
        @media (max-width: 420px) {
          .brand-text {
            display: none;
          }
          .header-row {
            padding-left: 6px;
            padding-right: 6px;
          }
        }
      `}</style>
    </header>
  );
};

const Footer: React.FC = () => {
  const bgImagePath = ASSETS.footerBg;

  return (
    <footer className="pt-10 pb-6">
      <div
        className="max-w-screen-2xl mx-auto p-5 lg:p-8 rounded-xl overflow-hidden"
        style={{
          backgroundColor: "#f1f5f9",
          backgroundImage: `radial-gradient(closest-side at 10% 80%, rgba(236, 213, 230, 0.25), transparent 30%), radial-gradient(closest-side at 90% 30%, rgba(226, 235, 247, 0.45), transparent 30%), url("${bgImagePath}")`,
          backgroundSize: "cover, cover, 220%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-7.5 pt-7 pb-10 bg-slate-200 rounded-xl mob-block">
          <div className="card p-5 lg:p-7.5 lg:pt-4 border-0 shadow-none bg-transparent">
            <div className="flex flex-col gap-4">
              <span className="text-lg font-medium leading-none text-slate-950 mb-4">
                IndiaFilings
              </span>
              <a
                className="leading-none hover:text-primary-active"
                href="/about-us"
              >
                About IndiaFilings
              </a>
              <a
                className="leading-none hover:text-primary-active"
                href="/careers"
              >
                Careers
              </a>
              <a
                className="leading-none hover:text-primary-active"
                href="/contact-us"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="card p-5 lg:p-7.5 lg:pt-4 border-0 shadow-none bg-transparent">
            <div className="flex flex-col gap-4">
              <span className="text-lg font-medium leading-none text-slate-950 mb-4">
                Platforms
              </span>
              <a
                className="leading-none hover:text-primary-active"
                href="/search/"
              >
                Business Search
              </a>
              <a
                className="leading-none hover:text-primary-active"
                href="/trademark-search"
              >
                Trademark Search
              </a>
              <a
                className="leading-none hover:text-primary-active"
                href="https://filings.ae/"
              >
                Filings.AE
              </a>
            </div>
          </div>

          <div className="card p-5 lg:p-7.5 lg:pt-4 border-0 shadow-none bg-transparent">
            <div className="flex flex-col gap-4">
              <span className="text-lg font-medium leading-none text-slate-950 mb-4">
                Usage
              </span>
              <a
                className="leading-none hover:text-primary-active"
                href="/termsconditions"
              >
                Terms &amp; Conditions
              </a>
              <a
                className="leading-none hover:text-primary-active"
                href="/privacypolicy"
              >
                Privacy Policy
              </a>
              <a
                className="leading-none hover:text-primary-active"
                href="/refund-policy"
              >
                Refund Policy
              </a>
            </div>
          </div>

          <div className="card p-5 lg:p-7.5 lg:pt-4 border-0 shadow-none bg-transparent">
            <div className="flex flex-col gap-4">
              <span className="text-lg font-medium leading-none text-slate-950 mb-4 hidden md:block">
                &nbsp;
              </span>
              <a
                className="leading-none hover:text-primary-active"
                href="/confidentiality-policy"
              >
                Confidentiality Policy
              </a>
              <a
                className="leading-none hover:text-primary-active"
                href="/disclaimer"
              >
                Disclaimer Policy
              </a>
              <a
                className="leading-none hover:text-primary-active"
                href="/review"
              >
                IndiaFilings Review
              </a>
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

export default function LLPForm11Filing(): React.ReactElement {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const faqItems = [
    "What is LLP Form 11?",
    "Who must file Form 11?",
    "What documents are needed to file Form 11?",
    "What is the deadline for filing Form 11?",
    "What are penalties for late filing?",
    "Can Form 11 be revised after submission?",
    "How to check Form 11 filing status?",
    "What is the processing time for Form 11?",
  ];

  return (
    <div className="min-h-screen page bg-[#f3f4f6]">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
        <title>LLP Form 11 Filing - IndiaFilings</title>
      </Head>

      <Header />

      <section className="bg-white pt-10 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h1 className="text-5xl font-extrabold mb-4 leading-tight">
                LLP Form 11
                <span className="text-blue-600 underline decoration-4 decoration-yellow-300">
                  {" "}
                  Filing
                </span>
              </h1>
              <p className="text-slate-600 mb-6 max-w-xl">
                File your LLP annual return (Form 11) quickly and accurately. We
                assist with form preparation, DSC requirements and submission to
                MCA.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 text-white">
                    ✓
                  </div>
                  <div>
                    <div className="font-semibold">Hassle-free Filing</div>
                    <div className="text-sm text-slate-600">
                      We prepare and submit Form 11 on your behalf
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 text-white">
                    ✓
                  </div>
                  <div>
                    <div className="font-semibold">DSC & DIN Assistance</div>
                    <div className="text-sm text-slate-600">
                      Guidance on digital signatures and LLP partner details
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 text-white">
                    ✓
                  </div>
                  <div>
                    <div className="font-semibold">Compliance Reminders</div>
                    <div className="text-sm text-slate-600">
                      Avoid penalties with timely filings
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 text-white">
                    ✓
                  </div>
                  <div>
                    <div className="font-semibold">End-to-end Support</div>
                    <div className="text-sm text-slate-600">
                      From document checklist to MCA submission
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
                <div
                  className="absolute -top-4 left-6 right-6 h-4 rounded-t-xl"
                  style={{
                    background: "linear-gradient(90deg, #3b82f6, #06b6d4)",
                  }}
                />

                <div className="space-y-4 mt-3">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      LLPIN
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-200 rounded focus:ring-2 focus:ring-blue-400 outline-none"
                      placeholder="Enter LLPIN"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      LLP Name
                    </label>
                    <input
                      type="text"
                      placeholder="Filled Automatically"
                      className="w-full px-4 py-2 border border-gray-200 rounded bg-gray-50 text-slate-500"
                    />
                    <p className="text-xs text-slate-400 mt-1">
                      This field will auto-populate after entering LLPIN.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Financial Year
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-200 rounded focus:ring-2 focus:ring-blue-400 outline-none"
                      placeholder="e.g. 2024-2025"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Designated Partner Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-200 rounded focus:ring-2 focus:ring-blue-400 outline-none"
                      placeholder="Enter email for contact"
                    />
                  </div>

                  <div className="flex justify-end">
                    <button className="px-5 py-2 rounded bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold shadow">
                      Submit Form 11
                    </button>
                  </div>
                </div>
              </div>

              <div className="hidden md:block absolute -right-10 top-8 w-6 h-24 rounded-md opacity-30" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-bold mb-3">
                  LLP Annual Return (Form 11)
                </h2>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  LLP Form 11 is the annual return that every Limited Liability
                  Partnership must file with the Ministry of Corporate Affairs.
                  It contains details of partners, partners' contributions and
                  other statutory particulars for the relevant financial year.
                </p>

                <h3 className="text-xl font-semibold mt-4 mb-2">
                  Who Must File Form 11
                </h3>
                <ul className="list-inside space-y-2 text-slate-600 mb-4">
                  <li>All registered LLPs must file Form 11 annually.</li>
                  <li>Non-filing can attract penalties and late fees.</li>
                </ul>

                <h3 className="text-lg font-semibold mt-4 mb-2">
                  Key Contents of Form 11
                </h3>
                <ul className="space-y-2 ml-4 text-slate-600 mb-4">
                  <li>
                    <strong>Partners' Details:</strong> Names, addresses and
                    DIN/DPIN if applicable.
                  </li>
                  <li>
                    <strong>Contribution Details:</strong> Capital contribution
                    of partners.
                  </li>
                  <li>
                    <strong>Registered Office:</strong> Confirmation of address
                    as per records.
                  </li>
                </ul>

                <h3 className="text-lg font-semibold mt-4 mb-2">
                  Filing Timeline & Penalties
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Form 11 must be filed within 60 days from the end of the
                  financial year. Late filing attracts additional fees and
                  penalties depending on the delay.
                </p>

                <div className="mt-6">
                  <h3 className="text-2xl font-bold mb-4">
                    Why Use IndiaFilings for Form 11
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    We prepare your Form 11, validate partner information,
                    assist with DSC signing and submit the form to MCA to ensure
                    a compliant annual return.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-2xl font-bold mb-4">
                  Documents Required for Form 11
                </h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1" />{" "}
                    Partners' PAN and address proof
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1" />{" "}
                    Details of partners' capital contribution
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1" /> DSC
                    of designated partner (if required)
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-2xl font-bold mb-4">
                  FAQ's on LLP Form 11
                </h3>
                <div className="divide-y">
                  {faqItems.map((q, idx) => (
                    <div key={idx} className="py-3">
                      <button
                        className="w-full text-left flex justify-between items-center py-3"
                        onClick={() =>
                          setActiveFaq(activeFaq === idx ? null : idx)
                        }
                      >
                        <span className="text-slate-800 font-medium">{q}</span>
                        <span className="text-slate-400">
                          {activeFaq === idx ? "-" : "+"}
                        </span>
                      </button>
                      {activeFaq === idx && (
                        <div className="text-slate-600 mt-2">
                          <p>
                            This answer explains {q.toLowerCase()}. For tailored
                            assistance and templates, get in touch with our
                            experts.
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="py-4">
                    <button className="px-4 py-2 border rounded text-sm text-blue-600">
                      Load More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="bg-white rounded-lg shadow p-5">
                <h4 className="font-semibold mb-3">Related Guides</h4>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li>
                    <a className="text-blue-600" href="#">
                      LLP Registration Process
                    </a>
                  </li>
                  <li>
                    <a className="text-blue-600" href="#">
                      Documents Required for LLP
                    </a>
                  </li>
                  <li>
                    <a className="text-blue-600" href="#">
                      Advantages of LLP Structure
                    </a>
                  </li>
                  <li>
                    <a className="text-blue-600" href="#">
                      LLP Compliance Checklist
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow p-4 text-center">
                <img
                  src={ASSETS.cards.compliance}
                  alt="Company Compliance"
                  className="rounded"
                />
                <div className="mt-3 font-medium">Company Compliance</div>
              </div>

              <div className="bg-white rounded-lg shadow p-4 text-center">
                <img
                  src={ASSETS.cards.dinEKyc}
                  alt="DIN eKYC"
                  className="rounded"
                />
                <div className="mt-3 font-medium">DIN eKYC Filing</div>
              </div>

              <div className="bg-white rounded-lg shadow p-4">
                <h4 className="font-semibold mb-3">Popular Searches</h4>
                <div className="flex flex-wrap gap-2">
                  <PopularSearches />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

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
        .rating-inline {
          display: inline-flex;
          gap: 4px;
          align-items: center;
        }
        .star {
          color: #f59e0b;
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
        .max-w-7xl {
          max-width: 88rem;
        }
        .container {
          width: 100%;
        }
        @media (max-width: 1024px) {
          .max-w-7xl {
            padding-left: 16px;
            padding-right: 16px;
          }
        }
        @media (max-width: 768px) {
          h1 {
            font-size: 2rem;
          }
          .whatsapp-cta {
            right: 12px;
            bottom: 12px;
            padding: 10px 14px;
          }
        }
      `}</style>
    </div>
  );
}
