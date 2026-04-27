"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import PopularSearches from "../components/PopularSearches";
import ITR7ReturnHero from "../components/Registration/ITR7ReturnHero";
import { Plus, ShoppingBag, CheckCircle, Shield, FileText, Zap, Star, Brain, AlertTriangle, ArrowRight, Target, Building2 } from "lucide-react";
import Faq from "../components/Faq";

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────


const ELIGIBILITY_YES = [
  "Charitable and Religious Trusts (Sec 12A/12AB registered)",
  "Political Parties (exempt u/s 13A)",
  "Scientific Research Associations (Sec 10(21))",
  "News Agencies (Sec 10(22B))",
  "Hospitals approved u/s 10(23C)(iiiae)",
  "Universities & Educational Institutions (Sec 10(23C))",
  "Mutual Funds registered with SEBI (Sec 10(23D))",
  "Securitisation Trusts (Sec 10(23DA))",
  "Venture Capital Funds/Companies (Sec 10(23FB))",
  "Electoral Trusts (Sec 13C)",
  "Any fund/institute/university filing u/s 139(4D)/(4E)/(4F)",
];

const ELIGIBILITY_NOT = [
  { form: "ITR-1/2/3/4", desc: "Individual or HUF filers" },
  { form: "ITR-5", desc: "Partnership Firms, LLPs, AOPs, BOIs" },
  { form: "ITR-6", desc: "Companies not claiming Sec 11 exemption" },
];

const PROCESS_STEPS = [
  { num: "01", icon: "📋", label: "Register Trust / Entity" },
  { num: "02", icon: "🏦", label: "12A/80G or Sec 10(23C) Registration" },
  { num: "03", icon: "📊", label: "Prepare Income & Expenditure A/c" },
  { num: "04", icon: "🤖", label: "AI Fills ITR-7 Schedules" },
  { num: "05", icon: "✅", label: "CA Audit (Form 10B/10BB) if needed" },
  { num: "06", icon: "🎉", label: "File & Get Acknowledgment" },
];

const WHY_FEATURES = [
  {
    icon: <FileText size={20} className="text-[#C15F3C]" />,
    title: "Auto Schedule Filling",
    desc: "AI reads your trust deed, exemption certificate, and receipts & payments to auto-fill all ITR-7 schedules accurately.",
  },
  {
    icon: <Shield size={20} className="text-[#C15F3C]" />,
    title: "Form 10B / 10BB Audit",
    desc: "For trusts with income above ₹1 crore, our empanelled CAs handle the mandatory audit and Form 10B/10BB filing.",
  },
  {
    icon: <Building2 size={20} className="text-[#C15F3C]" />,
    title: "12A / 80G Compliance",
    desc: "Ensures your trust maintains valid 12A/12AB/80G registrations so exemption is never denied at the filing stage.",
  },
  {
    icon: <Brain size={20} className="text-[#C15F3C]" />,
    title: "Notice Shield",
    desc: "200+ pre-filing validations catch common ITR-7 errors — accumulation, anonymous donations, corpus violations, and more.",
  },
];

// ─────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────
export default function ITR7Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <ITR7ReturnHero
        heading="ITR-7"
        headingHighlight="Return Filing"
        description="File your ITR-7 return for Trusts, NGOs, Political Parties, and Institutions. Specialist CA support for 12A/80G compliance and Form 10B/10BB audit."
        features={[
          { icon: "check", text: "Trust & NGO Exemption Compliance" },
          { icon: "check", text: "12A / 80G Registration Verification" },
          { icon: "check", text: "Form 10B / 10BB Audit Assistance" },
          { icon: "check", text: "Political Party & Institute Filing" },
          { icon: "check", text: "AI-Driven Schedule Automation" },
        ]}
        buttonText="Pay & File ITR-7"
      />
      <main className="min-h-screen bg-[#F4F3EE] font-sans">

        {/* ═══════════ HERO ═══════════ */}
        <section className="bg-[#F4F3EE] relative overflow-hidden pt-10 pb-20">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#C15F3C 1px,transparent 1px),linear-gradient(90deg,#C15F3C 1px,transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-[#C15F3C]/5 rounded-full blur-3xl pointer-events-none opacity-60" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#C15F3C]/10 border border-[#C15F3C]/20 text-[#C15F3C] text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase">
                <span className="w-2 h-2 bg-[#C15F3C] rounded-full animate-pulse" />
                AY 2026-27 · ITR-7 Filing Open · Due: July 31 / Oct 31, 2026
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black leading-[1.08] mb-5">
                File <span className="text-[#C15F3C]">ITR-7</span> Online
                <br />
                For <span className="text-[#C15F3C]">Trusts, NGOs &amp; Institutions</span>
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
                For charitable trusts, political parties, research institutions, universities, hospitals &amp; mutual funds. Our AI handles all exemptions, Form 10B/10BB audit, and files ITR-7 with zero errors.
                <span className="block mt-2 text-black font-semibold">
                  Compare with ClearTax, Tax2Win, Quicko, H&R Block & TaxSpanner — 40% cheaper!
                </span>
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link
                  href="#pricing"
                  className="bg-[#C15F3C] hover:bg-[#A94E30] text-white font-bold px-7 py-3.5 rounded-full text-base transition-all hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center gap-2 group"
                >
                  🚀 Start Filing ITR-7
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#eligibility"
                  className="border-2 border-[#C15F3C] text-[#C15F3C] hover:bg-[#C15F3C] hover:text-white font-semibold px-7 py-3.5 rounded-full text-base transition-all"
                >
                  Check Eligibility →
                </Link>
              </div>

              <div className="flex gap-8 flex-wrap">
                {[
                  ["20K+", "ITR-7 Filed", <FileText key="f" size={16} className="text-[#C15F3C]" />],
                  ["₹500Cr+", "Trust Income Filed", <Building2 key="b" size={16} className="text-[#C15F3C]" />],
                  ["4.9★", "Google Rating", <Star key="s" size={16} className="text-[#C15F3C] fill-[#C15F3C]" />],
                ].map(([num, lbl, icon]) => (
                  <div key={String(lbl)} className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full bg-white border border-[#C15F3C]/20 flex items-center justify-center">
                      {icon}
                    </div>
                    <div>
                      <div className="font-display text-2xl font-extrabold text-black">{num}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{lbl}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Quick Info Card */}
            <div className="lg:pl-4">
              <div className="bg-white border-2 border-[#C15F3C]/20 rounded-3xl p-6 shadow-2xl shadow-[#C15F3C]/10 hover:border-[#C15F3C]/40 transition-all duration-300">
                <div className="flex items-center justify-between mb-5">
                  <span className="font-display font-bold text-black text-sm flex items-center gap-2">
                    <Brain size={18} className="text-[#C15F3C]" />
                    Who Files ITR-7?
                  </span>
                  <span className="bg-[#C15F3C] text-white text-xs font-bold px-3 py-1 rounded-full">
                    AY 2026-27
                  </span>
                </div>

                {[
                  { icon: "🏛️", title: "Charitable Trusts", desc: "Sec 139(4A) — Trusts registered u/s 12A/12AB" },
                  { icon: "🗳️", title: "Political Parties", desc: "Sec 139(4B) — Parties exempt u/s 13A" },
                  { icon: "🔬", title: "Research Institutions", desc: "Sec 139(4C) — Scientific, news, educational, medical" },
                  { icon: "📚", title: "Universities & Colleges", desc: "Sec 139(4D) — Registered under Sec 10(23C)" },
                  { icon: "💰", title: "Mutual Funds & Trusts", desc: "Sec 139(4E)/(4F) — SEBI-registered funds" },
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-0 hover:bg-white rounded-lg px-2 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#C15F3C]/10 flex items-center justify-center text-xl flex-shrink-0">
                      {s.icon}
                    </div>
                    <div>
                      <div className="text-black font-semibold text-sm">{s.title}</div>
                      <div className="text-gray-500 text-xs mt-0.5">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ ELIGIBILITY ═══════════ */}
        <section className="bg-[#F4F3EE] py-16 px-4 sm:px-6" id="eligibility">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-[#C15F3C] text-xs font-bold uppercase mb-2 flex items-center justify-center gap-2">
                <Target size={14} /> Eligibility
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-3">
                Who Should File ITR-7?
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm">
                ITR-7 covers entities other than individuals, HUFs, companies, and firms — specifically those claiming statutory exemptions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border-2 border-[#C15F3C] rounded-2xl p-6 hover:shadow-lg hover:shadow-[#C15F3C]/10 transition-all">
                <div className="flex items-center gap-2 font-bold text-black mb-4 text-base">
                  <CheckCircle size={20} className="text-[#C15F3C]" /> File ITR-7 If You Are:
                </div>
                <ul className="space-y-2.5">
                  {ELIGIBILITY_YES.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-black">
                      <span className="text-[#C15F3C] mt-0.5 flex-shrink-0 font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all">
                <div className="flex items-center gap-2 font-bold text-black mb-4 text-base">
                  <AlertTriangle size={20} className="text-[#C15F3C]" /> NOT ITR-7 — Use Other Forms:
                </div>
                <ul className="space-y-3">
                  {ELIGIBILITY_NOT.map((item) => (
                    <li key={item.form} className="flex gap-3 text-sm">
                      <span className="bg-[#C15F3C]/10 text-[#C15F3C] font-bold text-xs px-2 py-1 rounded-md flex-shrink-0 self-start mt-0.5">
                        {item.form}
                      </span>
                      <span className="text-gray-500">{item.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ WHY DOSTARTUP ═══════════ */}
        <section className="bg-[#F4F3EE] py-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-3">
                Why DoStartup for <span className="text-[#C15F3C]">ITR-7?</span>
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm">
                From 12A registration to Form 10B audit — we handle your trust's complete tax compliance.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {WHY_FEATURES.map((f, i) => (
                <div key={i} className="bg-white rounded-2xl border border-[#C15F3C]/10 p-6 hover:shadow-lg hover:shadow-[#C15F3C]/10 hover:-translate-y-1 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4">
                    {f.icon}
                  </div>
                  <h3 className="font-bold text-black text-base mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ PROCESS ═══════════ */}
        <section className="bg-[#F4F3EE] py-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-3">
                How to File ITR-7 in <span className="text-[#C15F3C]">6 Easy Steps</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROCESS_STEPS.map((s, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-[#C15F3C]/10 hover:border-[#C15F3C]/30 hover:shadow-md transition-all">
                  <span className="text-2xl flex-shrink-0">{s.icon}</span>
                  <div>
                    <span className="text-[#C15F3C] text-xs font-bold uppercase">{s.num}</span>
                    <p className="text-black font-semibold text-sm mt-0.5">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ INFORMATIONAL CONTENT ═══════════ */}
        <section className="bg-[#F4F3EE] py-12 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl border border-[#C15F3C]/10 p-8 mb-8">
              <h2 className="text-2xl font-extrabold text-black mb-4">
                ITR-7 Return Filing — Complete Guide
              </h2>
              <div className="text-[15px] leading-7 text-gray-700 space-y-4">
                <p>
                  ITR-7 is the Income Tax Return form for entities required to file returns under specific sub-sections of Section 139 of the Income Tax Act. It is primarily used by charitable and religious trusts, political parties, scientific research associations, news agencies, hospitals, universities, mutual funds, and other institutions claiming income tax exemptions.
                </p>
                <h3 className="text-lg font-semibold text-black">Key Sections Covered by ITR-7</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Section 139(4A):</strong> Charitable/religious trusts claiming exemption u/s 11 &amp; 12</li>
                  <li><strong>Section 139(4B):</strong> Political parties claiming exemption u/s 13A</li>
                  <li><strong>Section 139(4C):</strong> Scientific research associations, news agencies, hospitals, educational institutions</li>
                  <li><strong>Section 139(4D):</strong> Universities, colleges, and other institutions not required to furnish returns under other provisions</li>
                  <li><strong>Section 139(4E):</strong> Business trusts (Infrastructure Investment Trusts / REITs)</li>
                  <li><strong>Section 139(4F):</strong> Investment funds as per Section 115UB</li>
                </ul>
                <h3 className="text-lg font-semibold text-black">Documents Required for ITR-7 Filing</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>PAN of the trust/institution</li>
                  <li>12A/12AB registration certificate (for charitable trusts)</li>
                  <li>80G certificate (if applicable)</li>
                  <li>Audited financial statements (Receipts &amp; Payments A/c, Income &amp; Expenditure A/c, Balance Sheet)</li>
                  <li>Form 10B or Form 10BB (audit report — mandatory if income exceeds ₹1 crore)</li>
                  <li>Details of corpus donations and accumulation u/s 11(2)</li>
                  <li>Form 26AS / AIS for TDS credits</li>
                  <li>Details of anonymous donations (taxable u/s 115BBC)</li>
                </ul>
                <h3 className="text-lg font-semibold text-black">Tax Treatment Under ITR-7</h3>
                <p>
                  Charitable and religious trusts registered u/s 12A/12AB are generally exempt from income tax on income applied for charitable/religious purposes. Anonymous donations exceeding 5% of total donations or ₹1 lakh are taxable at 30%. Political parties are exempt from tax u/s 13A provided they maintain records of contributions above ₹20,000 and file returns.
                </p>
                <h3 className="text-lg font-semibold text-black">Penalty for Non-Filing</h3>
                <p>
                  Failure to file ITR-7 within the due date attracts a late fee of ₹1,000 (income up to ₹5 lakh) or ₹10,000 (income above ₹5 lakh) under Section 234F. Additionally, benefit of exemptions may be denied and notices can be issued under Section 143(1)/271F.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ PRICING ═══════════ */}
        <div id="pricing">
          <DynamicPricingSection category="itr-7-return-filing" />
        </div>

        <FAQAccordion />

        {/* ═══════════ CTA STRIP ═══════════ */}
        <section className="bg-[#F4F3EE] py-20 px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center gap-1 mb-5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-[#C15F3C] text-[#C15F3C]" />
              ))}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-4">
              Ready to File ITR-7?
            </h2>
            <p className="text-gray-600 mb-10 text-lg max-w-xl mx-auto">
              Expert CA assistance from document collection to e-filing — stress-free compliance for your trust or institution.
            </p>
            <Link
              href="#pricing"
              className="inline-flex items-center gap-2 bg-[#C15F3C] text-white font-bold px-10 py-4 rounded-full text-lg hover:bg-[#A94E30] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <ShoppingBag size={20} />
              Start Filing ITR-7 Now
            </Link>
          </div>
        </section>

        <PopularSearches />
      </main>
      <Footer />
    </>
  );
}
