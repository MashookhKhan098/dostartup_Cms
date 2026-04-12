"use client";
import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import SidebarCart from "../components/SidebarCart";
import Footer from "../components/Footer";
import PopularSearchesComponent from "../components/PopularSearches";

import React, { useState } from "react";
import {
  ChevronDown,
  Search,
  Check,
  Plus,
  ShoppingBag,
  ChevronRight,
} from "lucide-react";

const ASSETS = {
  logo: "/images/india-logo.jpg",
  heroTDS: "/images/hero.png",
  whatsapp: "/images/whatsapp.png",
  cartIcon: "/images/cart.png",
  tdsreturnIcon: "/images/tdsreturn.png",
  indiaFlag: "/images/india-flag.png",
  ledgersBadge: "/images/ledgers-badge.png",
  docsImg: "/images/tds-docs.png",
  pricingBadge: "/images/ledgers-badge.png",
};

export default function TdsReturnFilingPage(): React.ReactElement {
  return (
    <div className="min-h-screen bg-[#F4F3EE] text-gray-800 font-sans">
      <Navbar />

      {/* Breadcrumb & Hero */}
      <div className="bg-[#F4F3EE] py-6">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-sm text-gray-500 mb-4">
            DoStartup / Income Tax /{" "}
            <span className="text-[#C15F3C] font-medium">
              TDS Return Filing
            </span>
          </div>

          <section
            aria-label="Hero"
            className="relative rounded-[32px] overflow-hidden shadow-2xl"
            style={{ minHeight: 320 }}
          >
            <div
              className="absolute inset-0 bg-center bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url(${ASSETS.heroTDS})`,
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(2,6,23,0.75) 0%, rgba(2,6,23,0.3) 60%)",
                }}
              />
            </div>

            <div className="relative z-10">
              <div className="mx-auto max-w-[1180px] px-6 py-12 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 max-w-2xl">
                  <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-md">
                    <h1 className="text-white text-3xl md:text-5xl leading-tight font-bold mb-4">
                      Accountant for TDS Filings
                    </h1>
                    <p className="text-slate-200 text-base mb-6 max-w-prose leading-relaxed">
                      File TDS returns, manage challans, and reconcile payments
                      effortlessly using our Accountants & LEDGERS platform.
                    </p>

                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="flex flex-col sm:flex-row gap-4 items-center"
                    >
                      <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-2xl px-5 py-3.5 w-full sm:w-auto backdrop-blur-md">
                        <span className="text-white/50 text-xs font-bold whitespace-nowrap">ENTER GSTIN</span>
                        <input
                          className="bg-transparent outline-none placeholder:text-white/30 text-white text-sm w-full min-w-[160px]"
                          placeholder="GSTIN"
                        />
                      </div>

                      <button className="w-full sm:w-auto px-8 py-4 bg-[#C15F3C] text-white rounded-2xl font-bold hover:bg-[#A94E30] transition-all shadow-lg shadow-[#C15F3C]/20">
                        Get Accountant
                      </button>
                    </form>

                    <p className="text-slate-300 mt-6 text-sm leading-relaxed italic">
                      Dedicated TDS specialist to manage monthly TDS workings,
                      challans, payment tracking, and return preparation across
                      sections—at a fraction of the cost of a full-time hire.
                    </p>
                  </div>
                </div>

                <div className="hidden md:flex w-full md:w-auto justify-end">
                  <div className="relative w-80">
                    <img
                      src={ASSETS.tdsreturnIcon}
                      alt="TDS illustration"
                      className="w-full h-auto rounded-3xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Pricing cards - Moved above FAQs as requested */}
      <section className="bg-[#F4F3EE]">
        <DynamicPricingSection category="TDS Return Filing" />
      </section>

      {/* Main content */}
      <main className="max-w-[1180px] mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left column */}
        <section className="lg:col-span-8 space-y-12">
          {/* Services Offered */}
          <article className="bg-white rounded-[32px] shadow-sm p-8 md:p-12 border border-[#E5E2DA]">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Services Offered</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We provide comprehensive accounting support tailored to meet the
              day-to-day financial needs of your business.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-[#F4F3EE]/30 rounded-2xl border border-[#E5E2DA] hover:border-[#C15F3C] transition-colors">
                <h4 className="font-bold text-gray-900 mb-3">Access to LEDGERS</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Record and review TDS deductions, challans, and payments in
                  real time with automated calculation, PAN validation, and a
                  clear audit trail—inside one shared workspace.
                </p>
              </div>
              <div className="p-6 bg-[#F4F3EE]/30 rounded-2xl border border-[#E5E2DA] hover:border-[#C15F3C] transition-colors">
                <h4 className="font-bold text-gray-900 mb-3">TDS Return Filing</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Preparation and filing of all TDS returns (Form 24Q, 26Q,
                  27Q), reconciliation with challans, automated due-date
                  tracking, and timely submission to avoid penalties.
                </p>
              </div>
              <div className="p-6 bg-[#F4F3EE]/30 rounded-2xl border border-[#E5E2DA] hover:border-[#C15F3C] transition-colors">
                <h4 className="font-bold text-gray-900 mb-3">
                  Preparation of TDS Summary & Reports
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Monthly and quarterly TDS summaries, deduction statements,
                  mismatch reports, and year-end Form 16/16A generation—ensuring
                  full visibility and compliance readiness.
                </p>
              </div>
              <div className="p-6 bg-[#F4F3EE]/30 rounded-2xl border border-[#E5E2DA] hover:border-[#C15F3C] transition-colors">
                <h4 className="font-bold text-gray-900 mb-3">
                  Deductor–Deductee Reconciliation
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Matching TDS deducted and deposited by the deductor with TDS
                  credit appearing for the deductee in Form 26AS/AIS to avoid
                  mismatches and notices.
                </p>
              </div>
            </div>
          </article>

          {/* How it Works */}
          <article className="bg-white rounded-[32px] shadow-sm p-8 md:p-12 border border-[#E5E2DA]">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How It Works</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              A guided onboarding process with consistent monthly accounting and
              reporting.
            </p>

            <ol className="space-y-6">
              {[
                { title: "Assign your accountant", desc: "You get a named accountant familiar with your industry and a clear kickoff checklist." },
                { title: "System Setup", desc: "Connect bank feeds, import masters & opening balances, map ledgers/tax series, and configure LEDGERS." },
                { title: "Monthly close & compliance", desc: "Reconciliations, TDS tracking, challan mapping, quarterly returns, timely filing, and MIS reports for compliance." }
              ].map((step, i) => (
                <li key={i} className="flex gap-6 items-start">
                  <div className="w-8 h-8 rounded-xl bg-[#C15F3C] text-white flex-shrink-0 flex items-center justify-center text-sm font-bold shadow-lg shadow-[#C15F3C]/20">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{step.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </article>

          {/* Article / Detailed Content */}
          <article className="bg-white rounded-[32px] shadow-sm p-8 md:p-12 border border-[#E5E2DA]">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              TDS Return Filing Online
            </h1>
            <div className="space-y-8 text-gray-600 leading-[1.8]">
              <p>
                Tax Deduction at Source refers to deducting tax from income at
                the point of payment. Entities and individuals who engage in tax
                deductions at the source are legally required to file TDS
                returns quarterly before the TDS due date, detailing the
                specifics of these deductions.
              </p>

              <p>
                <strong className="text-[#C15F3C]">DoStartup</strong> provides expert assistance to streamline the
                process — from deposit of TDS online to filing TDS returns and
                reconciling them with TRACES and Form 26AS.
              </p>

              <div className="grid gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Who should deduct TDS?</h3>
                  <p className="text-sm leading-relaxed">
                    Individuals, HUFs, firms, companies, and other entities required
                    to deduct TDS under the Income Tax Act, 1961 depending on
                    turnover and specific conditions.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Deposit of TDS</h3>
                  <p className="text-sm leading-relaxed">
                    The deposit of TDS refers to the process of remitting the
                    deducted TDS to the government within the prescribed TDS due
                    date. Timely deposits are essential to avoid interest and
                    penalties.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">TDS Due Date</h3>
                  <p className="text-sm leading-relaxed">
                    Usually by the 7th of the subsequent month. For TDS deducted in
                    March the deposit rules may have special provisions for some
                    government deductors — always verify the applicable schedule.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Documents required */}
          <article className="bg-white rounded-[32px] shadow-sm p-8 md:p-12 border border-[#E5E2DA]">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Documents Required For TDS Return Filing
            </h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <ul className="space-y-4">
                  {[
                    "TDS Acknowledgement",
                    "PAN Card",
                    "Bank Statement / Challan details",
                    "Previous TDS Filing Records (if any)"
                  ].map((doc, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <div className="w-2 h-2 rounded-full bg-[#C15F3C]" />
                      <span className="font-medium">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <img
                  src={ASSETS.docsImg}
                  alt="tds documents"
                  className="w-full rounded-2xl shadow-lg border border-[#E5E2DA]"
                />
              </div>
            </div>
          </article>

          {/* FAQ */}
          <FAQAccordion category="TDS Return Filing" />

          {/* Popular Searches */}
          <PopularSearchesComponent />
        </section>

        {/* Sidebar */}
        <aside className="lg:col-span-4 sticky top-28">
          <SidebarCart />
        </aside>
      </main>

      <Footer />
    </div>
  );
}
