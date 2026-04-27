"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import PopularSearches from "../components/PopularSearches";
import ITR5ReturnHero from "../components/Registration/ITR5ReturnHero";
import {
  CheckCircle,
  XCircle,
  Brain,
  Shield,
  Search,
  Clock,
  Users,
  Percent,
  Cpu,
  RefreshCw,
  Database,
  ShieldCheck,
  ArrowRight,
  Zap as ZapIcon,
  RotateCcw,
  Sparkles,
  Calculator,
  ChevronDown,
  BarChart,
  Star,
  Building2,
  PieChart,
} from "lucide-react";

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const AI_STEPS = [
  { icon: "🏢", title: "Firm P&L Extracted", desc: "AI parsed Tally XML data — 24 accounts mapped in 5s" },
  { icon: "👥", title: "Partner 40(b) Computed", desc: "Salary & interest optimized to max allowable limits" },
  { icon: "⚖️", title: "Audit Necessity Check", desc: "Turnover ₹2.4Cr — Tax audit required (Form 3CD)" },
  { icon: "✅", title: "ITR-5 Ready to File", desc: "0 errors • Surcharge calculated • Refund: ₹42,000" },
];

const STATS = [
  { num: "50K+", lbl: "ITR-5 Filed" },
  { num: "₹200Cr+", lbl: "Income Filed" },
  { num: "4.9★", lbl: "Google Rating" },
];

const TRUSTED_BANKS = ["SBI", "HDFC Bank", "ICICI", "Axis Bank", "Kotak"];

const ENTITY_COMPARISON = [
  { entity: "Partnership Firm", tax: "30% Flat", surcharge: "10% (> ₹1Cr)", audit: "> ₹1Cr (Biz) / ₹50L (Prof)", dueDate: "Oct 31 (Audit)" },
  { entity: "LLP", tax: "30% Flat", surcharge: "10% (> ₹1Cr)", audit: "> ₹40L Contribution / ₹25L Turnover", dueDate: "Oct 31 (Audit)" },
  { entity: "AOP / BOI", tax: "Slab / MMR", surcharge: "Applicable", audit: "As per Sec 44AB", dueDate: "Oct 31 (Audit)" },
];

const WHY_FEATURES = [
  { icon: <Building2 size={20} className="text-[#C15F3C]" />, title: "Partner Salary Optimizer", desc: "Automatically computes maximum allowable partner salary under Section 40(b) to minimize firm's taxable income." },
  { icon: <Brain size={20} className="text-[#C15F3C]" />, title: "Tally/Zoho Integration", desc: "Directly import your P&L and Balance Sheet from Tally, Zoho, or QuickBooks. AI maps schedules automatically." },
  { icon: <Shield size={20} className="text-[#C15F3C]" />, title: "Tax Audit Handled", desc: "For firms > ₹1Cr turnover, our expert CAs handle Form 3CA/3CB/3CD audit and filing end-to-end." },
  { icon: <ShieldCheck size={20} className="text-[#C15F3C]" />, title: "Notice Protection", desc: "180+ validation rules check for partner transactions, related party receipts, and high-value cash items." },
];

const AI_TECH_FEATURES = [
  { icon: <Cpu className="text-[#C15F3C]" size={22} />, title: "Sec 40(b) Engine", desc: "Validates partner salary/interest against book profits to ensure zero disallowance." },
  { icon: <PieChart className="text-[#C15F3C]" size={22} />, title: "Depreciation Scheduler", desc: "Auto-fills Schedule DPM/DEP with WDV and SLM rates for all firm assets." },
  { icon: <Database className="text-[#C15F3C]" size={22} />, title: "AIS/26AS Matcher", desc: "Reconciles firm receipts and TDS credits in AIS against the return to prevent mismatches." },
  { icon: <RefreshCw className="text-[#C15F3C]" size={22} />, title: "Books Auto-Mapper", desc: "Converts your trial balance into ITR-5 P&L and BS schedules in under 30 seconds." },
  { icon: <Users className="text-[#C15F3C]" size={22} />, title: "Multi-Partner Management", desc: "Handles multiple partners/members with unique profit sharing and capital accounts." },
  { icon: <Search className="text-[#C15F3C]" size={22} />, title: "Compliance Shield", desc: "Checks for Section 269SS/269T (cash loans) and other critical compliance defaults." },
];

const HOW_IT_WORKS_STEPS = [
  { step: "STEP 01", icon: "🏢", title: "Add Entity Details" },
  { step: "STEP 02", icon: "📋", title: "Upload P&L & BS" },
  { step: "STEP 03", icon: "🤖", title: "AI Fills Schedules" },
  { step: "STEP 04", icon: "✅", title: "CA Review & Audit" },
  { step: "STEP 05", icon: "🎉", title: "File & Acknowledge" },
];

const TESTIMONIALS = [
  { initial: "R", name: "Rajiv & Sons", role: "Partnership Firm • Delhi", text: "\"Our firm has 4 partners. DoStartup computed partner salary under 40(b) perfectly and handled our tax audit end-to-end. Saved ₹45,000 in CA fees!\"" },
  { initial: "T", name: "TechVenture LLP", role: "LLP • Bangalore", text: "\"Handled our complex capital gains and partner interest flawlessly. The ITR-5 was filed error-free in 2 days. Excellent for LLPs!\"" },
  { initial: "A", name: "Apex Traders", role: "AOP • Ahmedabad", text: "\"Tax computation for AOPs is confusing, but DoStartup's AI chose the best regime (Slab vs MMR) and saved us ₹82,000 in tax. Outstanding!\"" },
];

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────
const fmt = (n: number) => "₹" + Math.abs(Math.round(n)).toLocaleString("en-IN");

function StatusCell({ val }: { val: boolean | string }) {
  if (val === true) return <CheckCircle size={16} className="text-[#C15F3C] mx-auto" />;
  if (val === false) return <XCircle size={16} className="text-gray-300 mx-auto" />;
  if (val === "~") return <span className="text-gray-400 font-bold block text-center">~</span>;
  return <span className="font-bold text-sm text-[#C15F3C] text-center block w-full">{val}</span>;
}

const DEFAULT_CALC = {
  entityType: "partnership",
  revenue: 10000000,
  expenses: 6000000,
  partnerSalary: 1200000,
  partnerInterest: 600000,
  otherIncome: 200000,
  ded80g: 50000
};

function runCalc(s: any): any {
  const revenue = s.revenue || 0;
  const expenses = s.expenses || 0;
  const partnerSalary = s.partnerSalary || 0;
  const partnerInterest = Math.min(s.partnerInterest || 0, (revenue-expenses) * 0.12); // Simplified limit check
  const otherIncome = s.otherIncome || 0;

  const netBusinessIncome = Math.max(0, revenue - expenses);
  const bookProfit = netBusinessIncome;
  
  // Simplified Sec 40(b) limit check
  let allowableSalary = 0;
  if (bookProfit > 0) {
    if (bookProfit <= 300000) allowableSalary = Math.max(150000, bookProfit * 0.9);
    else allowableSalary = 270000 + (bookProfit - 300000) * 0.6;
  }
  const actualSal = Math.min(partnerSalary, allowableSalary);
  
  const taxableIncome = Math.max(0, bookProfit - actualSal - partnerInterest + otherIncome - (s.ded80g || 0));
  
  const baseTax = taxableIncome * 0.3;
  const surcharge = taxableIncome > 10000000 ? baseTax * 0.12 : (taxableIncome > 1000000 ? baseTax * 0.1 : 0);
  const cess = (baseTax + surcharge) * 0.04;
  const totalTax = Math.round(baseTax + surcharge + cess);

  return {
    taxableIncome,
    totalTax,
    bookProfit,
    allowableSalary,
    actualSal,
    taxRate: "30%",
    auditRequired: revenue > 10000000
  };
}

function SliderInput({ label, value, min, max, step, sub, onChange }: any) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <label className="text-[11px] font-black text-black uppercase tracking-wider">{label}</label>
        <span className="text-xs font-black text-[#C15F3C] bg-[#C15F3C]/5 px-3 py-1 rounded-lg border border-[#C15F3C]/10">{fmt(value)}</span>
      </div>
      {sub && <div className="text-[10px] text-gray-400 mb-2 font-medium">{sub}</div>}
      <div className="relative h-6 flex items-center">
        <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-1.5 rounded-full appearance-none cursor-pointer z-10"
          style={{ background: `linear-gradient(to right, #C15F3C 0%, #C15F3C ${pct}%, #E5E2DA ${pct}%, #E5E2DA 100%)` }}
        />
        <div className="absolute w-full flex justify-between bottom-[-14px] px-0.5">
           <span className="text-[9px] text-gray-400 font-bold">₹0</span>
           <span className="text-[9px] text-gray-400 font-bold">{fmt(max)}</span>
        </div>
      </div>
    </div>
  );
}

function ResultRow({ label, value, color = "text-black" }: any) {
  return (
    <div className="flex justify-between items-center py-2.5 border-b border-gray-100 last:border-0">
      <span className="text-xs text-gray-500">{label}</span>
      <span className={`font-bold text-sm ${color}`}>{value}</span>
    </div>
  );
}

// ─────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────
export default function ITR5Page() {
  const [calc, setCalc] = useState(DEFAULT_CALC);
  const upd = (k: string, v: any) => setCalc(p => ({ ...p, [k]: v }));
  const results = useMemo(() => runCalc(calc), [calc]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F4F3EE] font-sans">
        <ITR5ReturnHero
          heading="ITR-5"
          headingHighlight="Return Filing"
          description="File your ITR-5 return for Partnership Firms, LLPs, AOPs, and BOIs. Expert CA-assisted filing with automated Sec 40(b) calculation and full audit support."
          features={[
            { icon: "check", text: "Partnership Firm & LLP Compliance" },
            { icon: "check", text: "Automated Partner Salary Limits" },
            { icon: "check", text: "Books Auto-Import (Tally/Zoho)" },
            { icon: "check", text: "Tax Audit (Form 3CD) Handling" },
            { icon: "check", text: "AOP / BOI / Trust Specific Schedules" },
          ]}
          buttonText="Pay & File ITR-5"
        />
        
        {/* 1. HERO CONTENT */}
        <section className="bg-[#F4F3EE] relative pt-12 pb-16 border-b border-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#C15F3C]/10 border border-[#C15F3C]/20 text-[#C15F3C] text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
                <span className="w-2 h-2 bg-[#C15F3C] rounded-full animate-pulse" /> 
                AY 2026-27 · ITR-5 Filing Open · Last Date: July 31 / Oct 31
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black leading-[1.08] mb-5">
                File <span className="text-[#C15F3C]">ITR-5</span> Online
                <br />
                For <span className="text-[#C15F3C]">Firms & LLPs</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-4 max-w-lg font-medium">
                Comprehensive filing for Partnership Firms, LLPs, AOPs, and Trusts. Our AI handles complex Sec 40(b) computations and matches your AIS data for error-free filing.
              </p>
              <div className="flex gap-10 flex-wrap">
                {STATS.map((s, i) => (
                  <div key={i}>
                    <div className="font-display text-3xl font-black text-black leading-none mb-1">{s.num}</div>
                    <div className="text-gray-500 text-xs font-bold uppercase tracking-widest">{s.lbl}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
               <div className="bg-white border-2 border-[#E5E2DA] rounded-[2.5rem] p-8 shadow-sm relative">
                  <div className="flex items-center justify-between mb-8">
                     <span className="font-display font-black text-black text-sm flex items-center gap-2 uppercase tracking-tighter">🤖 AI Firm Auditor — Live</span>
                     <span className="bg-[#C15F3C] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase">ACTIVE</span>
                  </div>
                  <div className="space-y-6 mb-8">{AI_STEPS.map((s, i) => (<div key={i} className="flex items-start gap-4"><div className="w-10 h-10 rounded-xl bg-[#C15F3C]/5 flex items-center justify-center text-xl shrink-0">{s.icon}</div><div><div className="text-black font-bold text-sm">{s.title}</div><div className="text-gray-500 text-[11px] mt-0.5">{s.desc}</div></div></div>))}</div>
                  <div className="bg-[#F4F3EE] rounded-2xl p-5 border border-[#C15F3C]/10"><div className="flex justify-between text-xs font-bold text-gray-500 mb-2"><span>Matching AIS Receipts</span><span className="text-[#C15F3C]">92% Complete</span></div><div className="h-1.5 bg-[#E5E2DA] rounded-full overflow-hidden mb-2"><div className="h-full bg-[#C15F3C] w-[92%] rounded-full" /></div></div>
               </div>
            </div>
          </div>
        </section>

        {/* 2. TRUSTED BY */}
        <section className="bg-[#F4F3EE] py-12 px-4 shadow-sm border-b border-black/5">
           <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              <span className="text-gray-400 font-bold text-xs uppercase tracking-[0.2em]">Trusted By</span>
              <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
                 {TRUSTED_BANKS.map((b) => (<span key={b} className="text-gray-600 font-display font-black text-lg grayscale opacity-70 cursor-default">{b}</span>))}
                 <div className="h-8 w-px bg-gray-200 hidden sm:block" />
                 <span className="text-gray-600 font-bold text-xs flex items-center gap-2 uppercase tracking-wider"><CheckCircle size={16} className="text-[#C15F3C]" /> ISO 27001 Certified</span>
              </div>
           </div>
        </section>

        {/* 3. ELIGIBILITY */}
        <section className="bg-[#F4F3EE] py-12 px-4" id="eligibility">
           <div className="max-w-7xl mx-auto text-center mb-10">
              <p className="text-[#C15F3C] text-xs font-black uppercase tracking-[0.3em] mb-4">Eligibility</p>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-black mb-6">Who Should File ITR-5?</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium">ITR-5 is for entities other than individuals, HUFs, and companies.</p>
           </div>
           <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border-2 border-[#E5E2DA] flex flex-col h-full"><h3 className="font-display font-black text-black text-xl mb-8 flex items-center gap-3"><CheckCircle size={24} className="text-[#C15F3C]" /> File ITR-5 If You Are:</h3><ul className="space-y-4">{["Partnership Firm (Registered/Unregistered)", "Limited Liability Partnership (LLP)", "Association of Persons (AOP) / BOI", "Trusts (not claiming Sec 11 exemption)", "Estate of Deceased/Insolvent Person", "Local Authority / Juridical Person"].map((item, i) => (<li key={i} className="flex gap-4 text-gray-600 font-medium"><CheckCircle size={18} className="text-[#C15F3C] shrink-0 mt-0.5" /> <span className="text-[15px]">{item}</span></li>))}</ul></div>
              <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border-2 border-[#E5E2DA] flex flex-col h-full opacity-95"><h3 className="font-display font-black text-black text-xl mb-8 flex items-center gap-3"><XCircle size={24} className="text-[#C15F3C]" /> NOT ITR-5 — Use Other Forms:</h3><div className="space-y-8">{[{ title: "ITR-3", desc: "Proprietorship / Individual business" }, { title: "ITR-6", desc: "Private / Public Limited Companies" }, { title: "ITR-7", desc: "Trusts claiming Sec 11 exemption" }].map((r, i) => (<div key={i} className="flex gap-4"><div className="w-12 h-12 bg-[#F4F3EE] rounded-xl flex items-center justify-center font-black text-[#C15F3C]">{r.title}</div><div><div className="text-black font-bold text-base mb-1">{r.title} Form</div><div className="text-gray-500 text-sm">{r.desc}</div></div></div>))}</div></div>
           </div>
           <div className="max-w-7xl mx-auto bg-white p-10 rounded-[2.5rem] shadow-sm border-2 border-[#E5E2DA] mb-8"><div className="flex items-center gap-3 mb-8"><div className="w-10 h-10 bg-[#C15F3C]/5 rounded-xl flex items-center justify-center text-xl">📊</div><h3 className="font-display font-black text-black text-xl">Taxation & Audit Comparison</h3></div><div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="bg-[#F4F3EE] text-gray-600"><th className="px-4 py-4 text-left font-black uppercase text-[10px] tracking-wider rounded-tl-2xl">Entity</th><th className="px-4 py-4 text-center font-black uppercase text-[10px] tracking-wider">Tax Rate</th><th className="px-4 py-4 text-center font-black uppercase text-[10px] tracking-wider">Surcharge</th><th className="px-4 py-4 text-center font-black uppercase text-[10px] tracking-wider">Audit Threshold</th><th className="px-4 py-4 text-right font-black uppercase text-[10px] tracking-wider rounded-tr-2xl">Due Date</th></tr></thead><tbody className="divide-y divide-gray-100">{ENTITY_COMPARISON.map((row, i) => (<tr key={i} className="hover:bg-gray-50 transition-colors"><td className="px-4 py-4 font-black text-[#C15F3C]">{row.entity}</td><td className="px-4 py-4 text-center text-black font-bold">{row.tax}</td><td className="px-4 py-4 text-center text-gray-500 font-medium">{row.surcharge}</td><td className="px-4 py-4 text-center text-gray-600 font-bold">{row.audit}</td><td className="px-4 py-4 text-right text-gray-400 font-medium italic">{row.dueDate}</td></tr>))}</tbody></table></div></div>
        </section>

        {/* 4. WHY CHOOSE US */}
        <section className="bg-[#F4F3EE] py-12 px-4 border-t border-black/5" id="why-choose-us">
           <div className="max-w-7xl mx-auto">
              <div className="text-center mb-10"><p className="text-[#C15F3C] text-xs font-black uppercase tracking-[0.3em] mb-4">Why Choose Us</p><h2 className="font-display text-4xl font-extrabold text-black mb-6">Expert Filing for Complex Firm Returns</h2></div>
              <div className="grid lg:grid-cols-2 gap-12 items-start"><div className="space-y-4">{WHY_FEATURES.map((f, i) => (<div key={i} className="flex gap-6 p-8 bg-white border-2 border-[#E5E2DA] rounded-[1.5rem] shadow-sm hover:border-[#C15F3C] transition-all group"><div className="w-14 h-14 bg-[#C15F3C]/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#C15F3C] group-hover:text-white transition-all">{f.icon}</div><div><div className="font-black text-black text-lg mb-2">{f.title}</div><div className="text-gray-500 text-sm leading-relaxed">{f.desc}</div></div></div>))}</div><div className="bg-white rounded-[2rem] overflow-hidden border-2 border-[#E5E2DA] shadow-xl p-8"><div className="bg-[#C15F3C] px-6 py-4 flex items-center gap-2 text-white rounded-xl font-black text-sm uppercase tracking-tighter mb-6"><ZapIcon size={16} /> Key Compliance Checks</div><div className="space-y-4">{["Section 40(b) Partner Remuneration", "Section 43B Statutory Payments", "Section 269SS/269T Cash Transactions", "TDS/TCS Reconciliation", "Audit Form 3CD Preparations"].map(c => (<div key={c} className="flex items-center gap-3 text-black font-bold text-sm border-b border-gray-100 pb-3 last:border-0"><CheckCircle size={16} className="text-[#C15F3C]" /> {c}</div>))}</div></div></div>
           </div>
        </section>

        {/* 5. AI TECHNOLOGY */}
        <section className="bg-[#F4F3EE] py-12 px-4 border-t border-black/5" id="ai-tech"><div className="max-w-7xl mx-auto"><div className="text-center mb-10"><div className="inline-flex items-center gap-2 bg-[#C15F3C]/5 text-[#C15F3C] text-xs font-black px-4 py-1.5 rounded-full mb-4 uppercase tracking-[0.2em] border border-[#C15F3C]/20"><Cpu size={14} /> AI Technology</div><h2 className="font-display text-4xl sm:text-5xl font-extrabold text-black mb-6">Built for Accurate Firm Filing</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{AI_TECH_FEATURES.map((f, i) => (<div key={i} className="bg-white p-8 rounded-[2rem] border-2 border-[#E5E2DA] shadow-sm hover:border-[#C15F3C] transition-all group"><div className="flex justify-between items-start mb-6"><div className="w-12 h-12 bg-[#F4F3EE] rounded-2xl flex items-center justify-center group-hover:bg-[#C15F3C]/5 transition-colors">{f.icon}</div><span className="bg-[#C15F3C] text-white text-[9px] font-black px-2 py-0.5 rounded-full">AI</span></div><h4 className="text-black font-black text-lg mb-3 leading-tight">{f.title}</h4><p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p></div>))}</div></div></section>

        {/* 6. HOW IT WORKS */}
        <section className="bg-[#F4F3EE] py-12 px-4 border-t border-black/5" id="how-it-works"><div className="max-w-7xl mx-auto text-center"><p className="text-[#C15F3C] text-[10px] font-black uppercase tracking-[0.4em] mb-4">How It Works</p><h2 className="font-display text-4xl font-extrabold text-black mb-10">ITR-5 Filing in 5 Simple Steps</h2><div className="relative max-w-6xl mx-auto px-4 mb-10"><div className="absolute top-10 left-[10%] right-[10%] h-[2px] bg-[#E5E2DA] hidden md:block" /><div className="grid grid-cols-1 md:grid-cols-5 gap-8">{HOW_IT_WORKS_STEPS.map((s, i) => (<div key={i} className="relative z-10 text-center flex flex-col items-center"><div className="w-20 h-20 bg-white rounded-full border border-gray-100 shadow-xl shadow-black/5 flex items-center justify-center text-3xl mb-6 hover:scale-110 transition-transform">{s.icon}</div><div className="text-[#C15F3C] font-black text-[10px] uppercase tracking-widest mb-2">{s.step}</div><h4 className="text-black font-bold text-sm leading-tight">{s.title}</h4></div>))}</div></div></div></section>

        {/* 7. ADVANCED CALCULATOR */}
        <section className="bg-[#F4F3EE] py-12 px-4 border-t border-black/5 scroll-mt-20" id="calculator"><div className="max-w-7xl mx-auto"><div className="text-center mb-10"><div className="inline-flex items-center gap-2 bg-[#C15F3C]/5 text-[#C15F3C] text-[10px] font-black px-4 py-1.5 rounded-full mb-4 uppercase tracking-[0.3em] border border-[#C15F3C]/20">🧮 Free Tool</div><h2 className="font-display text-4xl font-extrabold text-black mb-4">Firm Tax & 40(b) Calculator FY 2025-26</h2></div><div className="max-w-6xl mx-auto bg-white rounded-[2.5rem] overflow-hidden border-2 border-[#E5E2DA] shadow-2xl"><div className="bg-[#C15F3C] px-8 py-5 flex flex-wrap justify-between items-center gap-4 text-white"><div className="flex items-center gap-4"><span className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center"><Calculator size={20} /></span><div><div className="font-black text-sm uppercase tracking-wider flex items-center gap-2">ITR-5 Firm Tax Calculator <span className="bg-white/30 text-[8px] px-2 py-0.5 rounded-full">Live</span></div><div className="text-[10px] font-bold text-white/70">AY 2026-27 | Sec 40(b) Limits Applied</div></div></div><div className="flex gap-3"><button onClick={() => setCalc(DEFAULT_CALC)} className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl text-[10px] font-black uppercase"><RotateCcw size={14} /> Reset</button></div></div><div className="grid lg:grid-cols-2 divide-x-0 lg:divide-x-2 lg:divide-[#E5E2DA]"><div className="p-10"><div className="flex items-center gap-3 mb-10 pb-4 border-b border-gray-100"><Calculator size={20} className="text-[#C15F3C]" /><h4 className="text-black font-black text-sm uppercase tracking-widest">Enter Financial Data</h4><div className="ml-auto bg-[#C15F3C]/5 text-[#C15F3C] text-[10px] font-black px-3 py-1 rounded-full">FY 2025-26</div></div><SliderInput label="Firm Revenue (₹)" value={calc.revenue} min={0} max={50000000} step={100000} onChange={(v:any) => upd("revenue", v)} /><SliderInput label="Business Expenses (₹)" sub="Excluding Partner Salary/Interest" value={calc.expenses} min={0} max={40000000} step={100000} onChange={(v:any) => upd("expenses", v)} /><SliderInput label="Partner Salary (Actual) (₹)" value={calc.partnerSalary} min={0} max={5000000} step={50000} onChange={(v:any) => upd("partnerSalary", v)} /><SliderInput label="Partner Interest (@12% p.a.) (₹)" value={calc.partnerInterest} min={0} max={2000000} step={10000} onChange={(v:any) => upd("partnerInterest", v)} /><SliderInput label="Other Income (₹)" value={calc.otherIncome} min={0} max={5000000} step={50000} onChange={(v:any) => upd("otherIncome", v)} /></div><div className="bg-[#F4F3EE]/30 p-10"><div className="flex items-center gap-3 mb-10 pb-4 border-b border-gray-100"><Database size={20} className="text-[#C15F3C]" /><h4 className="text-black font-black text-sm uppercase tracking-widest">Tax Breakdown</h4></div><div className="bg-white border-2 border-[#C15F3C]/40 rounded-2xl p-6 mb-8"><div className="flex items-center gap-2 text-[#C15F3C] font-black text-[10px] uppercase tracking-widest mb-4"><ZapIcon size={14} /> Section 40(b) Validation</div><div className="space-y-4"><div className="flex justify-between items-center text-xs"><span className="text-gray-500">Book Profit</span><span className="font-bold">{fmt(results.bookProfit)}</span></div><div className="flex justify-between items-center text-xs"><span className="text-gray-500">Max Allowable Salary</span><span className="font-bold text-green-600">{fmt(results.allowableSalary)}</span></div><div className="flex justify-between items-center text-xs"><span className="text-gray-500">Actual Salary Allowed</span><span className="font-bold">{fmt(results.actualSal)}</span></div><hr className="border-gray-100" /><div className="flex justify-between items-center"><span className="text-xs font-black uppercase">Taxable Income</span><span className="text-lg font-black text-[#C15F3C]">{fmt(results.taxableIncome)}</span></div></div></div><div className="bg-white border-2 border-gray-100 rounded-2xl p-6 mb-8 space-y-4"><ResultRow label="Tax Rate" value={results.taxRate} /><ResultRow label="Total Tax Payable" value={fmt(results.totalTax)} color="text-[#C15F3C]" /><ResultRow label="Tax Audit Required" value={results.auditRequired ? "YES (Form 3CD)" : "NO"} color={results.auditRequired ? "text-red-500" : "text-green-600"} /></div><button className="w-full bg-[#C15F3C] text-white font-black py-5 rounded-2xl text-lg hover:shadow-xl transition-all">🚀 File ITR-5 Now — Use This Data</button></div></div></div></div></section>

        {/* 8. TESTIMONIALS */}
        <section className="bg-[#F4F3EE] py-12 px-4 border-t border-black/5" id="testimonials">
           <div className="max-w-7xl mx-auto">
              <div className="text-center mb-10">
                 <p className="text-[#C15F3C] text-[10px] font-black uppercase tracking-[0.4em] mb-4">Testimonials</p>
                 <h2 className="font-display text-4xl font-extrabold text-black mb-6">Trusted by 50,000+ Firms & LLPs</h2>
              </div>
              <div className="grid lg:grid-cols-3 gap-8">
                 {TESTIMONIALS.map((t, i) => (
                   <div key={i} className="bg-white p-8 rounded-[2rem] border-2 border-[#E5E2DA] shadow-sm relative hover:-translate-y-2 transition-all">
                      <div className="flex gap-1 mb-6">
                         {[...Array(5)].map((_, i) => (<Star key={i} size={16} fill="#C15F3C" className="text-[#C15F3C]" />))}
                      </div>
                      <p className="text-black font-medium leading-relaxed italic mb-10 min-h-[100px]">{t.text}</p>
                      <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                         <div className="w-12 h-12 bg-[#C15F3C] rounded-full flex items-center justify-center text-white font-black text-lg">{t.initial}</div>
                         <div>
                            <div className="text-black font-black text-sm">{t.name}</div>
                            <div className="text-gray-400 text-xs font-bold uppercase tracking-widest">{t.role}</div>
                         </div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 9. PRICING */}
        <section id="pricing" className="bg-[#F4F3EE] py-12 px-4 border-t border-black/5">
          <div className="max-w-7xl mx-auto">
            <DynamicPricingSection category="itr-5-return-filing" />
          </div>
        </section>

        {/* 10. FAQ */}
        <FAQAccordion category="itr-5-return-filing" />

        {/* 11. FINAL CTA */}
        <section className="bg-[#F4F3EE] py-12 px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] p-12 text-center shadow-sm border-2 border-[#E5E2DA] relative overflow-hidden"><div className="relative z-10"><h2 className="font-display text-4xl sm:text-5xl font-extrabold text-black mb-6">Complex Firm Return. <span className="text-[#C15F3C]">Simple AI Filing.</span></h2><div className="flex flex-col sm:flex-row justify-center gap-4 mb-14"><Link href="#pricing" className="bg-[#C15F3C] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-[#A94E30] transition-all shadow-xl shadow-[#C15F3C]/20 hover:-translate-y-1">🚀 File Firm ITR-5 Today</Link></div><div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-black font-black text-xs uppercase tracking-widest"><div className="flex items-center gap-2"><Shield size={20} className="text-[#C15F3C]" /> 256-bit SSL</div><div className="flex items-center gap-2"><Clock size={20} className="text-[#C15F3C]" /> CA-Assisted</div><div className="flex items-center gap-2"><Users size={20} className="text-[#C15F3C]" /> 50K+ Firms</div></div></div></div>
        </section>

        {/* 12. POPULAR SEARCHES */}
        <section className="bg-[#F4F3EE] py-6 px-4">
           <div className="max-w-7xl mx-auto">
              <PopularSearches />
           </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
