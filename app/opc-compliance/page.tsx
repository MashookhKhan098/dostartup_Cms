"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import PopularSearches from "../components/PopularSearches";

const ASSETS = {
  logo: "/images/india-logo.jpg",
  hero: "/images/company-compliance.jpg",
};

export default function OPCCompliancePage(): React.ReactElement {
  const [companyInput, setCompanyInput] = useState("");

  return (
    <div className="page">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="site-banner">
          <div className="banner-inner">
            <div className="banner-cta">
              <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 mb-4">
                <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
                <span className="text-xs font-medium text-amber-700">OPC COMPLIANCE</span>
              </div>
              
              <h1 className="lead-title">
                Hassle-free bookkeeping, MCA and Income Tax compliance solutions
              </h1>
              <p className="lead-sub">
                End-to-end compliance service for OPCs backed by LEDGERS
                platform and expert accountants.
              </p>
              
              <div className="flex items-center gap-3 mt-6">
                <div className="flex -space-x-1.5">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 border-2 border-white shadow-sm" />
                  ))}
                </div>
                <span className="text-xs sm:text-sm text-gray-600">Trusted by 10,000+ businesses</span>
              </div>

              <form
                className="hero-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(`OPC compliance demo requested for "${companyInput || "Unnamed OPC"}"`);
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
                <div className="media-badge bg-gradient-to-r from-amber-600 to-amber-700">OPC Compliance Simplified</div>
              </div>
            </div>
          </div>
        </section>

        {/* Original Benefits Section - Restored and Standardized */}
        <section className="benefits-section boxed" Aria-label="Benefits">
          <div className="benefits-inner">
            <div className="benefit-card bg-white hover:border-amber-200 transition-colors">
              <div className="benefit-icon-wrap bg-amber-100">
                <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden>
                  <path fill="#C15F3C" d="M12 12a3 3 0 100-6 3 3 0 000 6zm0 2c-3.866 0-7 1.79-7 4v1h14v-1c0-2.21-3.134-4-7-4z" />
                </svg>
              </div>
              <h3 className="text-amber-800">Dedicated Compliance Advisor</h3>
              <p>A dedicated advisor will handle filings, bookkeeping & compliance.</p>
            </div>

            <div className="benefit-card bg-white hover:border-amber-200 transition-colors">
              <div className="benefit-icon-wrap bg-amber-100">
                <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden>
                  <path fill="#C15F3C" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zM10.6 14.6l-2.1-2.1 1.4-1.4 0.7 0.7 3.9-3.9 1.4 1.4-5.3 5.3z" />
                </svg>
              </div>
              <h3 className="text-amber-800">Timely Filings & Zero Penalties</h3>
              <p>All mandatory OPC filings submitted accurately before due dates.</p>
            </div>

            <div className="benefit-card bg-white hover:border-amber-200 transition-colors">
              <div className="benefit-icon-wrap bg-amber-100">
                <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden>
                  <path fill="#C15F3C" d="M13 3L11 3V13l8 4-1 1-7-3V4h2zM4 15v4h8v-4H4z" />
                </svg>
              </div>
              <h3 className="text-amber-800">LEDGERS Powered Filing</h3>
              <p>Razor-accurate filing using automation & expert review.</p>
            </div>
          </div>
        </section>

        {/* Overview Section - White Boxes */}
        <section className="py-12 bg-[#F4F3EE]">
          <div className="max-w-[1200px] mx-auto px-4">
            <h2 className="text-3xl font-bold text-amber-800 mb-6">
              One Person Company (OPC) Compliance Overview
            </h2>
            <p className="text-slate-600 max-w-3xl leading-7 mb-10">
              OPCs must follow annual MCA filings including bookkeeping,
              financial statements, AOC-4, MGT-7A, DIR-3 KYC & Income Tax
              filing.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl border border-slate-200 shadow p-6 hover:border-amber-200 transition-colors">
                <img src="/images/company-compliance.jpg" className="w-full h-40 object-contain mb-4" />
                <h3 className="text-lg font-bold text-amber-800 mb-2">Annual ROC Filings</h3>
                <p className="text-slate-600 text-sm leading-6">AOC-4, MGT-7A, financial statements & board reports.</p>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 shadow p-6 hover:border-amber-200 transition-colors">
                <img src="/images/din.jpg" className="w-full h-40 object-contain mb-4" />
                <h3 className="text-lg font-bold text-amber-800 mb-2">Director eKYC</h3>
                <p className="text-slate-600 text-sm leading-6">DIR-3 KYC is mandatory every year to keep DIN active.</p>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 shadow p-6 hover:border-amber-200 transition-colors">
                <img src="/images/itr-forms.png" className="w-full h-40 object-contain mb-4" />
                <h3 className="text-lg font-bold text-amber-800 mb-2">Income Tax Filing</h3>
                <p className="text-slate-600 text-sm leading-6">ITR-6 filing with bookkeeping, TDS, GST & financials.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Table - All White */}
        <section className="py-12 bg-[#F4F3EE]">
          <div className="max-w-[1200px] mx-auto px-4">
            <h2 className="text-3xl font-bold text-amber-800 mb-6 font-bold">
              Mandatory OPC Annual Compliance Requirements
            </h2>

            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
              <table className="min-w-full bg-white text-sm">
                <thead className="bg-white">
                  <tr>
                    {["Compliance", "Form", "Due Date", "Applicability"].map((h) => (
                      <th key={h} className="px-4 py-4 text-left font-bold text-amber-800 border-b border-slate-100">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {["Annual Return", "Financial Statements", "Director KYC", "Income Tax Filing"].map((row, i) => (
                    <tr key={i} className="hover:bg-amber-50/30 transition-colors">
                      <td className="px-4 py-4">{row}</td>
                      <td className="px-4 py-4 font-bold text-amber-700">{["MGT-7A", "AOC-4", "DIR-3 KYC", "ITR-6"][i]}</td>
                      <td className="px-4 py-4 text-slate-600">{["60 days from AGM", "180 days from FY", "30th Sept", "31st Oct"][i]}</td>
                      <td className="px-4 py-4 text-slate-500 font-medium">Mandatory</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Info Grid - White Boxes */}
        <section className="py-12 bg-[#F4F3EE]">
          <div className="max-w-[1200px] mx-auto px-4 grid md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-amber-800 mb-6">Documents Required</h3>
              <ul className="space-y-4 text-slate-600 text-sm font-bold">
                <li className="flex gap-2 items-center"><span className="text-amber-600 font-bold">✓</span> Financial Statements (Balance Sheet + P&L)</li>
                <li className="flex gap-2 items-center"><span className="text-amber-600 font-bold">✓</span> Director PAN & Aadhaar</li>
                <li className="flex gap-2 items-center"><span className="text-amber-600 font-bold">✓</span> Bank Statements</li>
                <li className="flex gap-2 items-center"><span className="text-amber-600 font-bold">✓</span> GST Returns (if applicable)</li>
                <li className="flex gap-2 items-center"><span className="text-amber-600 font-bold">✓</span> OPC MOA & AOA</li>
                <li className="flex gap-2 items-center"><span className="text-amber-600 font-bold">✓</span> DSC (Digital Signature Certificate)</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-amber-800 mb-6">Event-Based Compliance</h3>
              <ul className="space-y-4 text-slate-600 text-sm font-bold">
                <li className="flex gap-2 items-center"><span className="text-amber-600 font-bold">✓</span> Change of registered office</li>
                <li className="flex gap-2 items-center"><span className="text-amber-600 font-bold">✓</span> Change of nominee</li>
                <li className="flex gap-2 items-center"><span className="text-amber-600 font-bold">✓</span> Increase in capital</li>
                <li className="flex gap-2 items-center"><span className="text-amber-600 font-bold">✓</span> Director change</li>
                <li className="flex gap-2 items-center"><span className="text-amber-600 font-bold">✓</span> Voluntary conversion to Pvt Ltd</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Exemptions */}
        <section className="py-12 bg-[#F4F3EE]">
          <div className="max-w-[1200px] mx-auto px-4">
            <h2 className="text-3xl font-bold text-amber-800 mb-8 text-center font-bold">OPC Compliance Exemptions</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-center hover:border-amber-200 transition-colors">
                <h3 className="text-xl font-bold text-slate-800 mb-3">No AGM Required</h3>
                <p className="text-slate-600 text-sm font-bold">OPC does not need to conduct an Annual General Meeting.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-center hover:border-amber-200 transition-colors">
                <h3 className="text-xl font-bold text-slate-800 mb-3">Reduced Filings</h3>
                <p className="text-slate-600 text-sm font-bold">MGT-7A is simpler and lighter compared to MGT-7.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-center hover:border-amber-200 transition-colors">
                <h3 className="text-xl font-bold text-slate-800 mb-3">No Cash Flow Statement</h3>
                <p className="text-slate-600 text-sm font-bold">OPCs are exempt from preparing a cash flow statement in financial reports.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Flow */}
        <section className="py-12 bg-transparent">
          <div className="max-w-[1200px] mx-auto px-4">
            <h2 className="text-3xl font-bold text-amber-800 mb-10 text-center font-bold">OPC Compliance Process Flow</h2>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {[
                { step: "Step 1", title: "Upload Documents" },
                { step: "Step 2", title: "Bookkeeping & Reconciliation" },
                { step: "Step 3", title: "Financial Statement Preparation" },
                { step: "Step 4", title: "MCA + ITR Filing" }
              ].map((s, i) => (
                <div key={i} className="flex-1 text-center w-full relative">
                  <div className="w-20 h-20 mx-auto bg-amber-50 rounded-full flex items-center justify-center font-bold text-amber-700 mb-4 border-4 border-amber-200 shadow-md text-sm">
                    {s.step}
                  </div>
                  <h3 className="font-bold text-slate-800">{s.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-[#F4F3EE]">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-amber-800 mb-4 font-bold">Why 3,50,000+ Businesses Choose Us</h2>
              <p className="text-slate-600 max-w-2xl mx-auto font-bold">India's most trusted platform for compliance, accounting, GST, taxation & registrations.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-amber-200 transition-colors">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Dedicated Compliance Manager</h3>
                <p className="text-slate-600 text-sm font-bold leading-relaxed">Full support for all OPC filings & document handling.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-amber-200 transition-colors">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Timely Reminders</h3>
                <p className="text-slate-600 text-sm font-bold leading-relaxed">Automation ensures you never miss a compliance deadline.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-amber-200 transition-colors">
                <h3 className="text-xl font-bold text-slate-900 mb-3">LEDGERS Accounting Platform</h3>
                <p className="text-slate-600 text-sm font-bold leading-relaxed">Automated bookkeeping, reconciliation & secure vault.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="pb-12">
          <DynamicPricingSection category="opc-compliance" />
        </div>

        <FAQAccordion category="opc-compliance" />
      </main>

      <PopularSearches />
      <Footer />

      <style jsx>{`
        :global(body) { background: #F4F3EE; margin: 0; font-family: system-ui, sans-serif; }
        .page { min-height: 100vh; }
        .site-banner { padding: 40px 16px; background: #F4F3EE; }
        .banner-inner { max-width: 1160px; margin: 0 auto; display: grid; grid-template-columns: 1.4fr 1fr; gap: 40px; align-items: center; }
        .lead-title { font-size: 38px; font-weight: 800; color: #0b2545; line-height: 1.2; margin-bottom: 16px; }
        .lead-sub { color: #475569; font-size: 16px; line-height: 1.6; }
        .hero-form { margin-top: 24px; display: flex; gap: 12px; }
        .hero-input { flex: 1; background: #fff; padding: 14px 24px; border-radius: 999px; border: 1px solid #e1e8f2; font-size: 14px; outline: none; }
        .hero-button { background: #C15F3C; color: #fff; padding: 14px 28px; border-radius: 999px; font-weight: 700; border: none; cursor: pointer; transition: 0.3s; }
        .hero-button:hover { background: #A94E30; }
        .media-frame { position: relative; border-radius: 20px; overflow: hidden; background: #fff; padding: 10px; border: 2px solid white; box-shadow: 0 20px 40px rgba(0,0,0,0.05); }
        .media-badge { position: absolute; bottom: 20px; left: 20px; color: #fff; padding: 10px 20px; border-radius: 999px; font-size: 13px; font-weight: 700; }
        .benefits-section.boxed { padding: 40px 16px; }
        .benefits-inner { max-width: 1160px; margin: 0 auto; display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .benefit-card { background: white; border-radius: 16px; padding: 32px; border: 1px solid #e1e8f2; text-align: center; }
        .benefit-icon-wrap { width: 56px; height: 56px; margin: 0 auto 16px; display: flex; align-items: center; justify-content: center; border-radius: 50%; }
        .benefit-card h3 { font-size: 18px; font-weight: 700; margin-bottom: 8px; }
        .benefit-card p { font-size: 14px; color: #64748b; line-height: 1.5; }
        @media (max-width: 768px) { .banner-inner { grid-template-columns: 1fr; } .benefits-inner { grid-template-columns: 1fr; } .hero-form { flex-direction: column; } }
      `}</style>
    </div>
  );
}
