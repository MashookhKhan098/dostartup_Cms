"use client";
import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import SidebarCart from "../components/SidebarCart";
import PopularSearchesComponent from "../components/PopularSearches";

import React, { useState } from "react";
import {
  Plus,
  Check,
  ChevronRight,
  Briefcase,
  Shield,
  Clock,
  FileCheck,
} from "lucide-react";

export default function BusinessTaxFilingPage(): React.ReactElement {
  return (
    <div className="min-h-screen bg-[#F4F3EE] text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-[#F4F3EE] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-[#2F2E2B] rounded-[32px] overflow-hidden relative shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#C15F3C]/20 to-transparent pointer-events-none" />
            <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 flex flex-col items-center text-center">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 bg-[#C15F3C]/10 border border-[#C15F3C]/20 text-[#C15F3C] text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
                  <Shield size={14} /> Professional Tax Services
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Business Tax Filing <span className="text-[#C15F3C] text-3xl md:text-5xl">Made Simple</span>
                </h1>
                <p className="text-[#B1ADA1] text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                  For individuals/HUFs whose income includes business or professional profits (e.g., shop owners, freelancers, firm partners); covers all other income too.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <div className="flex items-center gap-3 bg-[#F4F3EE]/5 border border-white/10 rounded-2xl px-5 py-4 w-full sm:w-auto backdrop-blur-md">
                    <span className="text-[#C15F3C] font-bold text-sm">ITR-3</span>
                    <input
                      className="bg-transparent outline-none placeholder:text-gray-500 text-white text-sm w-40"
                      placeholder="Enter PAN Number"
                    />
                  </div>
                  <button className="w-full sm:w-auto px-8 py-4 bg-[#C15F3C] text-white rounded-2xl font-bold hover:bg-[#A94E30] transition-all shadow-lg shadow-[#C15F3C]/20 flex items-center justify-center gap-2">
                    Get Started <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left column */}
        <section className="lg:col-span-8 space-y-12">
          {/* Content article */}
          <article className="bg-white rounded-[32px] shadow-sm p-8 md:p-12 border border-[#E5E2DA]">
            <h2 className="text-3xl font-bold text-[#2F2E2B] mb-8">
              Business Income Tax Return (ITR) Filing Online
            </h2>

            <div className="prose prose-slate max-w-none space-y-8 text-[#6F6B63] leading-relaxed">
              <p>
                Setting up a business and understanding the complexities of filing returns is essential to running a business. A business tax filing is an income tax return filing applicable to companies and other business entities. It serves as a comprehensive record of the business's earnings and expenses.
              </p>

              <p>
                Business Income Tax return filings in India just got more straightforward with <strong className="text-[#C15F3C]">DoStartup</strong>. We help businesses easily file their tax returns and offer specialized business tax filing assistance. Our expert team makes the process less stressful and ensures deadlines and compliance requirements are met.
              </p>

              <div className="bg-white p-8 rounded-3xl border border-[#E5E2DA] shadow-sm">
                <h3 className="text-xl font-bold text-[#2F2E2B] mb-4">What is a business tax return?</h3>
                <p className="text-sm">
                  A business tax return is a comprehensive report that outlines a business's income, expenses, and pertinent tax details, all presented in the designated ITR form. It entails annual submission and reporting of TDS, payroll-related entries and other statutory disclosures.
                </p>
              </div>

              <h3 className="text-xl font-bold text-[#2F2E2B]">Who should file a Business Income Tax Return?</h3>
              <p>Filing a business income tax return is mandatory for:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                <li className="flex gap-3 items-center bg-white p-4 rounded-2xl border border-[#E5E2DA] shadow-sm">
                  <div className="w-6 h-6 rounded-full bg-[#C15F3C]/10 flex items-center justify-center text-[#C15F3C] flex-shrink-0"><Check size={14} /></div>
                  <span>Sole Proprietorships</span>
                </li>
                <li className="flex gap-3 items-center bg-white p-4 rounded-2xl border border-[#E5E2DA] shadow-sm">
                  <div className="w-6 h-6 rounded-full bg-[#C15F3C]/10 flex items-center justify-center text-[#C15F3C] flex-shrink-0"><Check size={14} /></div>
                  <span>Partnership Firms</span>
                </li>
                <li className="flex gap-3 items-center bg-white p-4 rounded-2xl border border-[#E5E2DA] shadow-sm">
                  <div className="w-6 h-6 rounded-full bg-[#C15F3C]/10 flex items-center justify-center text-[#C15F3C] flex-shrink-0"><Check size={14} /></div>
                  <span>Limited Liability Partnerships (LLPs)</span>
                </li>
                <li className="flex gap-3 items-center bg-white p-4 rounded-2xl border border-[#E5E2DA] shadow-sm">
                  <div className="w-6 h-6 rounded-full bg-[#C15F3C]/10 flex items-center justify-center text-[#C15F3C] flex-shrink-0"><Check size={14} /></div>
                  <span>Companies (Private/Public/OPC)</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-[#2F2E2B]">Types of Business Tax Filing</h3>
              <p>
                Different entity types use different forms: Proprietorships may use ITR-3 or ITR-4 (Sugam); Partnership firms file ITR-5; LLPs file ITR-5; Companies file ITR-6 (as applicable). The correct choice depends on turnover, nature of income, and audit status.
              </p>

              <div className="my-8 rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
                <img src="/images/itr-forms.png" alt="Business Tax Forms" className="w-full h-auto" />
              </div>

              <div className="grid grid-cols-1 gap-6 my-8">
                <div className="border-l-4 border-[#C15F3C] pl-6 py-2">
                  <h4 className="font-bold text-[#2F2E2B] mb-2">Proprietorship Tax Return Filing</h4>
                  <p className="text-sm text-gray-400 mb-2">Government fee is ₹4,500 for Individuals and valid UDYAM-registered MSMEs.</p>
                  <p className="text-sm">Proprietorship income is taxed in the hands of the proprietor. Thresholds and slab rates are the same as individual tax rules. Proprietors may file ITR-3 or ITR-4 depending on whether they opt for presumptive taxation.</p>
                </div>
                <div className="border-l-4 border-[#C15F3C] pl-6 py-2">
                  <h4 className="font-bold text-[#2F2E2B] mb-2">Partnership Firm Tax Return Filing</h4>
                  <p className="text-sm text-gray-400 mb-2">Applicable for companies, LLPs, foreign entities, and others. Government fees differ as per entity type.</p>
                  <p className="text-sm">Partnership firms are taxed as separate entities and must file an income tax return every year irrespective of profit or loss. Partnership firms typically file ITR-5.</p>
                </div>
                <div className="border-l-4 border-[#C15F3C] pl-6 py-2">
                  <h4 className="font-bold text-[#2F2E2B] mb-2">LLP & Company Filing</h4>
                  <p className="text-sm">LLPs and Companies are taxed at corporate rates and are required to file ITR-5 / ITR-6 respectively. Audit, transfer pricing, and other compliance obligations can affect due dates and filing methods.</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#2F2E2B] mt-12 pb-4 border-b border-gray-100">How DoStartup helps</h3>
              <p>We provide end-to-end support for your business calculations, documents verification, and seamless e-filing through our dedicated experts and tax technology.</p>

              <div className="my-10 bg-[#2F2E2B] p-1 rounded-3xl overflow-hidden">
                <div className="bg-[#2F2E2B] p-8 border border-white/5 rounded-[28px]">
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#C15F3C]" />
                    Advanced Tax Platform
                  </h4>
                  <p className="text-gray-400 text-sm">Powered by modern integration, our platform ensures your financial data is captured accurately, minimizing errors and maximizing your allowable deductions automatically.</p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold text-[#2F2E2B]">Due Date & Important Timelines</h3>
                <p>Missing deadlines can lead to heavy penalties and interest. Here is the typical timeline for business tax filings in India:</p>
                <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-xl">
                  <img src="/images/due-dates.png" alt="Business Tax Timelines" className="w-full h-auto" />
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold text-[#2F2E2B] mt-12">Procedure for Business ITR Filing</h3>
                <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm mb-8">
                  <img src="/images/steps.png" alt="Filing Procedure" className="w-full h-auto" />
                </div>
                <ol className="space-y-6 list-none p-0">
                  {[
                    "Gather and validate business accounts and supporting documents.",
                    "Choose the correct ITR form based on entity type.",
                    "Compute taxable income after allowable deductions and expenses.",
                    "Pay any tax due / advance tax as applicable.",
                    "File the return on the Income Tax e-Filing portal and e-verify."
                  ].map((step, i) => (
                    <li key={i} className="flex gap-6 items-start">
                      <div className="w-8 h-8 rounded-xl bg-[#C15F3C] text-white flex-shrink-0 flex items-center justify-center text-sm font-bold shadow-lg shadow-[#C15F3C]/20">
                        {i + 1}
                      </div>
                      <span className="text-[#2F2E2B] font-medium">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-12 bg-white rounded-3xl p-8 border border-[#E5E2DA] shadow-sm">
                <h3 className="text-xl font-bold text-[#2F2E2B] mb-6">Documents Required</h3>
                <div className="rounded-2xl overflow-hidden border border-gray-100 mb-8">
                  <img src="/images/docrequired.png" alt="Documents Needed" className="w-full h-auto" />
                </div>
                <p className="mb-6">Typical documents include PAN, Aadhaar (linked), books of accounts or balance sheet, profit & loss statements, bank statements, TDS certificates, Form 16/16A where applicable, GST & ledger extracts, invoices and loan statements.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "PAN & Aadhaar Card",
                    "Books of Accounts / Financials",
                    "Bank Statements (All accounts)",
                    "GST Returns (if applicable)",
                    "TDS Certificates & Form 26AS",
                    "Invoices & supporting vouchers"
                  ].map((doc, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C15F3C]" />
                      {doc}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 text-center py-12 border-t border-gray-50">
                <h3 className="text-2xl font-bold text-[#2F2E2B] mb-4">Why timely filing matters</h3>
                <div className="rounded-3xl overflow-hidden border border-gray-100 mb-8 max-w-lg mx-auto">
                  <img src="/images/more.png" alt="Benefits of Filing" className="w-full h-auto" />
                </div>
                <p className="max-w-2xl mx-auto">
                  Timely and accurate filings help you claim refunds, carry forward losses, support loan applications, and avoid penalties and notices. They also build credibility with banks, investors and regulators.
                </p>
              </div>
            </div>
          </article>
        </section>

        {/* Sidebar */}
        <aside className="lg:col-span-4 sticky top-28">
          <SidebarCart />
        </aside>
      </main>

      {/* Standardized Pricing Section */}
      <section className="bg-[#F4F3EE] pb-12">
        <DynamicPricingSection category="business-tax-filing" />
      </section>

      {/* FAQ Section */}
      <FAQAccordion category="business-tax-return-filing" />

      {/* Popular Searches */}
      <PopularSearchesComponent />

      <Footer />
    </div>
  );
}
