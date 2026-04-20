"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
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
  Search as SearchIcon,
} from "lucide-react";
import PopularSearches from "../components/PopularSearches";
import BlogSidebar from "../components/BlogSidebar";

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const AI_STEPS = [
  { icon: "📊", title: "Turnover Verified from AIS", desc: "AI fetched all business receipts — ₹42L in 4 seconds" },
  { icon: "💡", title: "Presumptive Rate Applied", desc: "Section 44AD: 6% digital + 8% cash receipts" },
  { icon: "⚖️", title: "Regime Comparison Done", desc: "Old Regime saves ₹22,400 with your deductions" },
  { icon: "✅", title: "ITR-4 Ready to File", desc: "0 errors • No audit required • Refund: ₹18,600" },
];

const STATS = [
  { num: "3L+", lbl: "ITR-4 Filed" },
  { num: "₹60Cr+", lbl: "Turnover Filed" },
  { num: "4.9★", lbl: "Google Rating" },
];

const SUPPORTED = [
  "44AD — Business",
  "44ADA — Profession",
  "44AE — Transport",
  "No Books Needed",
  "No Tax Audit",
];

const TRUSTED_BANKS = ["SBI", "HDFC Bank", "ICICI", "Axis Bank", "Kotak"];

const SCHEME_COMPARISON = [
  { section: "44AD", who: "Small Business Owners", limit: "Turnover ≤ ₹2 Crore (₹3Cr if 95% digital)", rate: "6% (digital) / 8% (cash)", audit: "Not required" },
  { section: "44ADA", who: "Specified Professionals", limit: "Gross Receipts ≤ ₹75 Lakh", rate: "50% of gross receipts", audit: "Not required" },
  { section: "44AE", who: "Transport Operators", limit: "≤ 10 goods vehicles", rate: "₹1,000/ton/month (HGV) or ₹7,500/vehicle/month", audit: "Not required" }
];

const WHY_FEATURES = [
  { icon: <Percent size={20} className="text-[#C15F3C]" />, title: "Auto Presumptive Calculation", desc: "AI reads your turnover from AIS/26AS and applies correct 44AD/44ADA/44AE rate instantly." },
  { icon: <Brain size={20} className="text-[#C15F3C]" />, title: "Digital vs Cash Split", desc: "Automatically splits receipts into digital (6%) and cash (8%) for Section 44AD to minimize tax." },
  { icon: <Search size={20} className="text-[#C15F3C]" />, title: "Deduction Maximizer", desc: "Finds every 80C, 80D, NPS, HRA deduction available under presumptive scheme." },
  { icon: <Shield size={20} className="text-[#C15F3C]" />, title: "Bank-Grade Security", desc: "256-bit SSL + SOC2 certified. Your turnover and income data is encrypted and never sold." },
];

const COMPETITOR_COMPARISON = [
  { f: "44AD / 44ADA / 44AE", ds: true, ct: true, tw: true, qu: true, hr: true, ts: true },
  { f: "Digital vs Cash Split", ds: true, ct: "~", tw: false, qu: "~", hr: false, ts: false },
  { f: "AI Deduction Optimizer", ds: true, ct: false, tw: false, qu: false, hr: false, ts: false },
  { f: "AIS Turnover Auto-Fetch", ds: true, ct: "~", tw: false, qu: true, hr: false, ts: "~" },
  { f: "Hindi Language Support", ds: true, ct: false, tw: false, qu: false, hr: false, ts: false },
  { f: "Price (ITR-4)", ds: "₹699", ct: "₹999", tw: "₹799", qu: "₹699", hr: "₹1,299", ts: "₹599" },
];

const AI_TECH_FEATURES = [
  { icon: <Cpu className="text-[#C15F3C]" size={22} />, title: "Presumptive Tax Engine", desc: "Computes income under 44AD/ADA/AE with correct rates automatically." },
  { icon: <Percent className="text-[#C15F3C]" size={22} />, title: "Digital vs Cash Optimizer", desc: "Splits receipts into digital (6% tax) and cash (8% tax) for 44AD filers." },
  { icon: <Search className="text-[#C15F3C]" size={22} />, title: "Deduction Finder", desc: "AI identifies all allowed deductions — 80C, 80D, NPS, HRA — to minimize final tax." },
  { icon: <RefreshCw className="text-[#C15F3C]" size={22} />, title: "Turnover Auto-Fetch", desc: "Fetches business receipts from AIS, 26AS, and GST. No manual entry." },
  { icon: <Database className="text-[#C15F3C]" size={22} />, title: "AIS/26AS Reconciler", desc: "Matches declared turnover with AIS to prevent mismatches and IT notices." },
  { icon: <ShieldCheck className="text-[#C15F3C]" size={22} />, title: "ITR-4 Notice Shield", desc: "180+ validation rules — cash limits, turnover caps verified before filing." },
];

const HOW_IT_WORKS_STEPS = [
  { step: "STEP 01", icon: "👤", title: "Create Free Account" },
  { step: "STEP 02", icon: "📊", title: "Enter Turnover Details" },
  { step: "STEP 03", icon: "🤖", title: "AI Applies Presumptive Rate" },
  { step: "STEP 04", icon: "✅", title: "Review & Optimize" },
  { step: "STEP 05", icon: "🎉", title: "File & Track Refund" },
];

const TESTIMONIALS = [
  { initial: "S", name: "Suresh Patel", role: "Small Business Owner • Surat", text: "\"I run a small grocery business. DoStartup computed my 44AD income automatically — 6% on digital, 8% on cash. Got ₹22,000 refund in 15 days. Super easy!\"" },
  { initial: "D", name: "Dr. Priya Nair", role: "Doctor (44ADA) • Kochi", text: "\"As a doctor with clinic income under 44ADA, I just entered my receipts and DoStartup filed my ITR-4 in 10 minutes. Saved ₹18,000 vs my previous CA.\"" },
  { initial: "R", name: "Ramesh Yadav", role: "Transport Operator • Lucknow", text: "\"Transport business with 4 trucks. DoStartup calculated 44AE income perfectly, found 80C deductions I missed, and filed everything in one go. Excellent!\"" },
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
  schemeType: "44AD",
  turnover: 4000000,
  digitalReceipts: 2500000,
  salary: 0,
  houseProperty: 0,
  ded80c: 150000,
  ded80d: 25000,
  age: "Below 60 years"
};

function runCalc(s: any): any {
  const turnover = s.turnover || 0;
  const digital = Math.min(s.digitalReceipts || 0, turnover);
  const cash = turnover - digital;
  const salary = s.salary || 0;
  const hp = s.houseProperty || 0;

  let presumptiveIncome = 0;
  if (s.schemeType === "44AD") presumptiveIncome = Math.round(digital * 0.06 + cash * 0.08);
  else if (s.schemeType === "44ADA") presumptiveIncome = Math.round(turnover * 0.5);
  else if (s.schemeType === "44AE") presumptiveIncome = Math.round(turnover * 0.075);

  const grossTotal = presumptiveIncome + salary + hp;
  
  const calculateTax = (taxable: number, regime: "NEW" | "OLD") => {
    if (regime === "NEW") {
      const exemption = 300000;
      if (taxable <= 700000) return 0;
      let tax = 0;
      if (taxable > exemption) {
        const slabs: [number, number][] = [[300000, 0], [700000, 0.05], [1000000, 0.1], [1200000, 0.15], [1500000, 0.2], [Infinity, 0.3]];
        let prev = 0;
        for (const [limit, rate] of slabs) {
          if (taxable <= prev) break;
          tax += (Math.min(taxable, limit) - prev) * rate;
          prev = limit;
        }
      }
      return Math.round(tax * 1.04);
    } else {
      const deduction = Math.min(s.ded80c || 0, 150000) + Math.min(s.ded80d || 0, 75000);
      const netTaxable = Math.max(0, taxable - deduction);
      if (netTaxable <= 500000) return 0;
      let tax = 0;
      const slabs: [number, number][] = [[250000, 0], [500000, 0.05], [1000000, 0.2], [Infinity, 0.3]];
      let prev = 0;
      for (const [limit, rate] of slabs) {
        if (netTaxable <= prev) break;
        tax += (Math.min(netTaxable, limit) - prev) * rate;
        prev = limit;
      }
      return Math.round(tax * 1.04);
    }
  };

  const taxNew = calculateTax(grossTotal - (salary > 0 ? 75000 : 0), "NEW");
  const taxOld = calculateTax(grossTotal - (salary > 0 ? 50000 : 0), "OLD");

  return {
    grossTotal,
    presumptiveIncome,
    digitalTax: Math.round(digital * 0.06),
    cashTax: Math.round(cash * 0.08),
    taxNew,
    taxOld,
    savings: Math.abs(taxNew - taxOld),
    digital,
    cash,
    bestRegime: taxNew <= taxOld ? "New Regime" : "Old Regime"
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
export default function ITR4Page() {
  const [calc, setCalc] = useState(DEFAULT_CALC);
  const upd = (k: string, v: any) => setCalc(p => ({ ...p, [k]: v }));
  const results = useMemo(() => runCalc(calc), [calc]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F4F3EE] font-sans">
        
        {/* 1. HERO */}
        <section className="bg-[#F4F3EE] relative pt-12 pb-16 border-b border-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#C15F3C]/10 border border-[#C15F3C]/20 text-[#C15F3C] text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
                <span className="w-2 h-2 bg-[#C15F3C] rounded-full animate-pulse" /> 
                AY 2026-27 · ITR-4 Filing Open · Last Date: July 31, 2026
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black leading-[1.08] mb-5">
                File <span className="text-[#C15F3C]">ITR-4</span> Online
                <br />
                <span className="text-[#C15F3C]">Presumptive Tax</span> Made Easy
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-4 max-w-lg font-medium">
                For small business owners, doctors, CAs, lawyers & transport operators. No books needed — our AI applies the correct 44AD, 44ADA, or 44AE rate and files in minutes.
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
                     <span className="font-display font-black text-black text-sm flex items-center gap-2 uppercase tracking-tighter">🤖 AI ITR-4 Assistant — Live</span>
                     <span className="bg-[#C15F3C] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase">ACTIVE</span>
                  </div>
                  <div className="space-y-6 mb-8">{AI_STEPS.map((s, i) => (<div key={i} className="flex items-start gap-4"><div className="w-10 h-10 rounded-xl bg-[#C15F3C]/5 flex items-center justify-center text-xl shrink-0">{s.icon}</div><div><div className="text-black font-bold text-sm">{s.title}</div><div className="text-gray-500 text-[11px] mt-0.5">{s.desc}</div></div></div>))}</div>
                  <div className="bg-[#F4F3EE] rounded-2xl p-5 border border-[#C15F3C]/10"><div className="flex justify-between text-xs font-bold text-gray-500 mb-2"><span>Applying Presumptive Rates</span><span className="text-[#C15F3C]">88% Complete</span></div><div className="h-1.5 bg-[#E5E2DA] rounded-full overflow-hidden mb-2"><div className="h-full bg-[#C15F3C] w-[88%] rounded-full" /></div></div>
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
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-black mb-6">Who Should File ITR-4?</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium">ITR-4 (Sugam) is the simplest form for small business owners... <strong>no books of accounts required.</strong></p>
           </div>
           <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border-2 border-[#E5E2DA] flex flex-col h-full"><h3 className="font-display font-black text-black text-xl mb-8 flex items-center gap-3"><CheckCircle size={24} className="text-[#C15F3C]" /> File ITR-4 If You Are:</h3><ul className="space-y-4">{["Small business owner — turnover ≤ ₹2 crore (Sec 44AD)", "Professional (doctor, CA, lawyer) — receipts ≤ ₹75 lakh (Sec 44ADA)", "Transport operator with ≤ 10 goods vehicles (Sec 44AE)", "Individual, HUF, or firm (not LLP) — total income ≤ ₹50 lakh", "Want to skip maintaining detailed books of accounts", "Want to avoid mandatory tax audit"].map((item, i) => (<li key={i} className="flex gap-4 text-gray-600 font-medium"><CheckCircle size={18} className="text-[#C15F3C] shrink-0 mt-0.5" /> <span className="text-[15px]">{item}</span></li>))}</ul></div>
              <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border-2 border-[#E5E2DA] flex flex-col h-full opacity-95"><h3 className="font-display font-black text-black text-xl mb-8 flex items-center gap-3"><XCircle size={24} className="text-[#C15F3C]" /> NOT ITR-4 — Use Other Forms:</h3><div className="space-y-8">{[{ title: "ITR-1", desc: "Only salary + property, income ≤ ₹50L" }, { title: "ITR-2", desc: "Salary + capital gains — no business income" }, { title: "ITR-3", desc: "Business income with books, income > ₹50L" }].map((r, i) => (<div key={i} className="flex gap-4"><div className="w-12 h-12 bg-[#F4F3EE] rounded-xl flex items-center justify-center font-black text-[#C15F3C]">{r.title}</div><div><div className="text-black font-bold text-base mb-1">{r.title} Form</div><div className="text-gray-500 text-sm">{r.desc}</div></div></div>))}</div></div>
           </div>
           <div className="max-w-7xl mx-auto bg-white p-10 rounded-[2.5rem] shadow-sm border-2 border-[#E5E2DA] mb-8"><div className="flex items-center gap-3 mb-8"><div className="w-10 h-10 bg-[#C15F3C]/5 rounded-xl flex items-center justify-center text-xl">📊</div><h3 className="font-display font-black text-black text-xl">Taxation Scheme Comparison</h3></div><div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="bg-[#F4F3EE] text-gray-600"><th className="px-4 py-4 text-left font-black uppercase text-[10px] tracking-wider rounded-tl-2xl">Section</th><th className="px-4 py-4 text-left font-black uppercase text-[10px] tracking-wider">Who Can Use</th><th className="px-4 py-4 text-left font-black uppercase text-[10px] tracking-wider">Turnover Limit</th><th className="px-4 py-4 text-left font-black uppercase text-[10px] tracking-wider">Rate</th><th className="px-4 py-4 text-left font-black uppercase text-[10px] tracking-wider rounded-tr-2xl">Tax Audit</th></tr></thead><tbody className="divide-y divide-gray-100">{SCHEME_COMPARISON.map((row, i) => (<tr key={i} className="hover:bg-gray-50 transition-colors"><td className="px-4 py-4 font-black text-[#C15F3C]">{row.section}</td><td className="px-4 py-4 text-gray-600 font-bold">{row.who}</td><td className="px-4 py-4 text-gray-500 font-medium">{row.limit}</td><td className="px-4 py-4 text-black font-bold">{row.rate}</td><td className="px-4 py-4 text-gray-400 font-medium italic">{row.audit}</td></tr>))}</tbody></table></div></div>
        </section>

        {/* 4. WHY CHOOSE US */}
        <section className="bg-[#F4F3EE] py-12 px-4 border-t border-black/5" id="why-choose-us">
           <div className="max-w-7xl mx-auto">
              <div className="text-center mb-10"><p className="text-[#C15F3C] text-xs font-black uppercase tracking-[0.3em] mb-4">Why Choose Us</p><h2 className="font-display text-4xl font-extrabold text-black mb-6">Better Than ClearTax, Tax2Win, Quicko, H&R Block & TaxSpanner</h2></div>
              <div className="grid lg:grid-cols-2 gap-12 items-start"><div className="space-y-4">{WHY_FEATURES.map((f, i) => (<div key={i} className="flex gap-6 p-8 bg-white border-2 border-[#E5E2DA] rounded-[1.5rem] shadow-sm hover:border-[#C15F3C] transition-all group"><div className="w-14 h-14 bg-[#C15F3C]/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#C15F3C] group-hover:text-white transition-all">{f.icon}</div><div><div className="font-black text-black text-lg mb-2">{f.title}</div><div className="text-gray-500 text-sm leading-relaxed">{f.desc}</div></div></div>))}</div><div className="bg-white rounded-[2rem] overflow-hidden border-2 border-[#E5E2DA] shadow-xl"><div className="bg-[#C15F3C] px-6 py-4 flex items-center gap-2 text-white font-black text-sm uppercase tracking-tighter"><ZapIcon size={16} /> Feature Comparison</div><div className="overflow-x-auto"><table className="w-full text-[10px]"><thead><tr className="bg-[#F4F3EE] text-gray-500"><th className="px-4 py-4 text-left font-black uppercase">Feature</th><th className="px-4 py-4 text-center font-black text-[#C15F3C] uppercase">DoStartup</th><th className="px-4 py-4 text-center font-black uppercase">Others</th></tr></thead><tbody className="divide-y divide-gray-100">{COMPETITOR_COMPARISON.map((row, i) => (<tr key={i} className="hover:bg-gray-50 transition-colors"><td className="px-4 py-4 font-black text-black">{row.f}</td><td className="px-4 py-4 text-center"><StatusCell val={row.ds} /></td><td className="px-4 py-4 text-center"><StatusCell val={row.ct} /></td></tr>))}</tbody></table></div></div></div>
           </div>
        </section>

        {/* 5. AI TECHNOLOGY */}
        <section className="bg-[#F4F3EE] py-12 px-4 border-t border-black/5" id="ai-tech"><div className="max-w-7xl mx-auto"><div className="text-center mb-10"><div className="inline-flex items-center gap-2 bg-[#C15F3C]/5 text-[#C15F3C] text-xs font-black px-4 py-1.5 rounded-full mb-4 uppercase tracking-[0.2em] border border-[#C15F3C]/20"><Cpu size={14} /> AI Technology</div><h2 className="font-display text-4xl sm:text-5xl font-extrabold text-black mb-6">Built for Simple ITR-4 Filing</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{AI_TECH_FEATURES.map((f, i) => (<div key={i} className="bg-white p-8 rounded-[2rem] border-2 border-[#E5E2DA] shadow-sm hover:border-[#C15F3C] transition-all group"><div className="flex justify-between items-start mb-6"><div className="w-12 h-12 bg-[#F4F3EE] rounded-2xl flex items-center justify-center group-hover:bg-[#C15F3C]/5 transition-colors">{f.icon}</div><span className="bg-[#C15F3C] text-white text-[9px] font-black px-2 py-0.5 rounded-full">AI</span></div><h4 className="text-black font-black text-lg mb-3 leading-tight">{f.title}</h4><p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p></div>))}</div></div></section>

        {/* 6. HOW IT WORKS */}
        <section className="bg-[#F4F3EE] py-12 px-4 border-t border-black/5" id="how-it-works"><div className="max-w-7xl mx-auto text-center"><p className="text-[#C15F3C] text-[10px] font-black uppercase tracking-[0.4em] mb-4">How It Works</p><h2 className="font-display text-4xl font-extrabold text-black mb-10">File ITR-4 in 5 Simple Steps</h2><div className="relative max-w-6xl mx-auto px-4 mb-10"><div className="absolute top-10 left-[10%] right-[10%] h-[2px] bg-[#E5E2DA] hidden md:block" /><div className="grid grid-cols-1 md:grid-cols-5 gap-8">{HOW_IT_WORKS_STEPS.map((s, i) => (<div key={i} className="relative z-10 text-center flex flex-col items-center"><div className="w-20 h-20 bg-white rounded-full border border-gray-100 shadow-xl shadow-black/5 flex items-center justify-center text-3xl mb-6 hover:scale-110 transition-transform">{s.icon}</div><div className="text-[#C15F3C] font-black text-[10px] uppercase tracking-widest mb-2">{s.step}</div><h4 className="text-black font-bold text-sm leading-tight">{s.title}</h4></div>))}</div></div></div></section>

        {/* 7. NEW ADVANCED CALCULATOR */}
        <section className="bg-[#F4F3EE] py-12 px-4 border-t border-black/5 scroll-mt-20" id="calculator"><div className="max-w-7xl mx-auto"><div className="text-center mb-10"><div className="inline-flex items-center gap-2 bg-[#C15F3C]/5 text-[#C15F3C] text-[10px] font-black px-4 py-1.5 rounded-full mb-4 uppercase tracking-[0.3em] border border-[#C15F3C]/20">🧮 Free Tool</div><h2 className="font-display text-4xl font-extrabold text-black mb-4">ITR-4 Presumptive Tax Calculator FY 2025-26</h2></div><div className="max-w-6xl mx-auto bg-white rounded-[2.5rem] overflow-hidden border-2 border-[#E5E2DA] shadow-2xl"><div className="bg-[#C15F3C] px-8 py-5 flex flex-wrap justify-between items-center gap-4 text-white"><div className="flex items-center gap-4"><span className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center"><Percent size={20} /></span><div><div className="font-black text-sm uppercase tracking-wider flex items-center gap-2">ITR-4 Presumptive Tax Calculator <span className="bg-white/30 text-[8px] px-2 py-0.5 rounded-full">Live</span></div><div className="text-[10px] font-bold text-white/70">AY 2026-27 | Sec 44AD / 44ADA / 44AE</div></div></div><div className="flex gap-3"><button onClick={() => setCalc(DEFAULT_CALC)} className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl text-[10px] font-black uppercase"><RotateCcw size={14} /> Reset</button><button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl text-[10px] font-black uppercase"><Sparkles size={14} /> AI Powered</button></div></div><div className="grid lg:grid-cols-2 divide-x-0 lg:divide-x-2 lg:divide-[#E5E2DA]"><div className="p-10"><div className="flex items-center gap-3 mb-10 pb-4 border-b border-gray-100"><Calculator size={20} className="text-[#C15F3C]" /><h4 className="text-black font-black text-sm uppercase tracking-widest">Scroll to Enter Your Details</h4></div><div className="mb-10"><label className="text-[11px] font-black text-black uppercase tracking-wider mb-2 block">Select Presumptive Scheme</label><div className="relative group"><select value={calc.schemeType} onChange={(e) => upd("schemeType", e.target.value)} className="w-full bg-[#F4F3EE] border-2 border-transparent focus:border-[#C15F3C] rounded-xl px-4 py-4 text-sm font-bold text-black appearance-none transition-all outline-none"><option value="44AD">Section 44AD — Small Business (turnover ≤ ₹2 Crore)</option><option value="44ADA">Section 44ADA — Professionals (receipts ≤ ₹75 Lakh)</option><option value="44AE">Section 44AE — Transport Operators (≤ 10 vehicles)</option></select><ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-[#C15F3C]" size={18} /></div></div><h5 className="text-[#C15F3C] font-black text-[10px] uppercase tracking-[0.2em] mb-8 flex items-center gap-2"><BarChart size={14} /> Business Turnover / Receipts</h5><SliderInput label="Total Turnover / Gross Receipts (₹)" sub="Limit: ₹2Cr (or ₹3Cr if 95% digital)" value={calc.turnover} min={0} max={20000000} step={100000} onChange={(v:any) => upd("turnover", v)} />{calc.schemeType === "44AD" && (<SliderInput label="Digital Receipts (₹) — taxed at 6%" sub="UPI, NEFT, cheque, credit/debit card receipts" value={calc.digitalReceipts} min={0} max={calc.turnover} step={100000} onChange={(v:any) => upd("digitalReceipts", v)} />)}<SliderInput label="Salary Income (₹) — if any" value={calc.salary} min={0} max={5000000} step={50000} onChange={(v:any) => upd("salary", v)} /><SliderInput label="House Property Income (₹)" value={calc.houseProperty} min={0} max={2000000} step={50000} onChange={(v:any) => upd("houseProperty", v)} /><h5 className="text-[#C15F3C] font-black text-[10px] uppercase tracking-[0.2em] mt-12 mb-8 flex items-center gap-2"><Users size={14} /> Old Regime Deductions</h5><SliderInput label="80C Investments — Max ₹1,50,000" value={calc.ded80c} min={0} max={150000} step={1000} onChange={(v:any) => upd("ded80c", v)} /><SliderInput label="80D Health Insurance — Max ₹75,000" value={calc.ded80d} min={0} max={75000} step={1000} onChange={(v:any) => upd("ded80d", v)} /><div className="mt-8"><label className="text-[11px] font-black text-black uppercase tracking-wider mb-2 block">Age Group</label><div className="relative group"><select value={calc.age} onChange={(e) => upd("age", e.target.value)} className="w-full bg-[#F4F3EE] border-2 border-transparent focus:border-[#C15F3C] rounded-xl px-4 py-4 text-sm font-bold text-black appearance-none outline-none"><option>Below 60 years</option><option>60 - 80 years</option><option>Above 80 years</option></select><ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} /></div></div></div><div className="bg-[#F4F3EE]/30 p-10"><div className="flex items-center gap-3 mb-10 pb-4 border-b border-gray-100"><Database size={20} className="text-[#C15F3C]" /><h4 className="text-black font-black text-sm uppercase tracking-widest">Your Tax Breakdown</h4></div><div className="bg-white border-2 border-[#C15F3C]/40 rounded-2xl p-6 mb-8"><div className="flex items-center gap-2 text-[#C15F3C] font-black text-[10px] uppercase tracking-widest mb-4"><ZapIcon size={14} /> SECTION {calc.schemeType}</div><div className="space-y-4"><div className="flex justify-between items-center text-xs"><span className="text-gray-500">Total Turnover</span><span className="font-bold">{fmt(calc.turnover)}</span></div>{calc.schemeType === "44AD" && (<div className="flex justify-between items-center text-xs"><span className="text-gray-500">Digital Receipts @6%</span><span className="font-bold">{fmt(results.digital)} → {fmt(results.digitalTax)}</span></div>)}<hr className="border-gray-100" /><div className="flex justify-between items-center"><span className="text-xs font-black uppercase">Presumptive Income</span><span className="text-lg font-black text-[#C15F3C]">{fmt(results.presumptiveIncome)}</span></div></div></div><div className="bg-white border-2 border-gray-100 rounded-2xl p-6 mb-8 space-y-4"><ResultRow label="Gross Total Income" value={fmt(results.grossTotal)} /><ResultRow label="Total Tax — New Regime" value={fmt(results.taxNew)} color="text-[#C15F3C]" /><ResultRow label="Total Tax — Old Regime" value={fmt(results.taxOld)} color="text-[#C15F3C]" /></div><div className="bg-[#C15F3C]/5 border-2 border-[#C15F3C]/20 rounded-2xl p-8 mb-8 text-center text-black font-black text-lg">✨ {results.bestRegime} is better — Save {fmt(results.savings)} more</div><div className="grid grid-cols-2 gap-4 mb-10"><div className={`p-6 rounded-2xl border-2 text-center ${results.bestRegime === "New Regime" ? "border-[#C15F3C] bg-[#C15F3C] text-white" : "bg-white text-gray-400 opacity-50"}`}><div className="text-[10px] font-black uppercase">New Regime</div><div className="text-xl font-black">{fmt(results.taxNew)}</div></div><div className={`p-6 rounded-2xl border-2 text-center ${results.bestRegime === "Old Regime" ? "border-[#C15F3C] bg-[#C15F3C] text-white" : "bg-white text-gray-400 opacity-50"}`}><div className="text-[10px] font-black uppercase">Old Regime</div><div className="text-xl font-black">{fmt(results.taxOld)}</div></div></div><button className="w-full bg-[#C15F3C] text-white font-black py-5 rounded-2xl text-lg">🚀 File ITR-4 Now — Use This Data</button></div></div></div></div></section>

        {/* 8. TESTIMONIALS (NEW) */}
        <section className="bg-[#F4F3EE] py-12 px-4 border-t border-black/5" id="testimonials">
           <div className="max-w-7xl mx-auto">
              <div className="text-center mb-10">
                 <p className="text-[#C15F3C] text-[10px] font-black uppercase tracking-[0.4em] mb-4">Testimonials</p>
                 <h2 className="font-display text-4xl font-extrabold text-black mb-6">Trusted by 3 Lakh+ Small Business Owners</h2>
                 <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
                    See what small businesses, doctors & transport operators say about DoStartup.in
                 </p>
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
            <DynamicPricingSection category="itr-4-return-filing" />
          </div>
        </section>

        {/* 10. FAQ & BLOGS */}
        <FAQAccordion category="itr-4-sugam-form" />

        {/* 11. FINAL CTA */}
        <section className="bg-[#F4F3EE] py-12 px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] p-12 text-center shadow-sm border-2 border-[#E5E2DA] relative overflow-hidden"><div className="relative z-10"><h2 className="font-display text-4xl sm:text-5xl font-extrabold text-black mb-6">Presumptive Tax. <span className="text-[#C15F3C]">Zero Complexity.</span></h2><div className="flex flex-col sm:flex-row justify-center gap-4 mb-14"><Link href="#pricing" className="bg-[#C15F3C] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-[#A94E30] transition-all shadow-xl shadow-[#C15F3C]/20 hover:-translate-y-1">🚀 File ITR-4 Free Today</Link></div><div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-black font-black text-xs uppercase tracking-widest"><div className="flex items-center gap-2"><Shield size={20} className="text-[#C15F3C]" /> 256-bit SSL</div><div className="flex items-center gap-2"><Clock size={20} className="text-[#C15F3C]" /> 10-min filing</div><div className="flex items-center gap-2"><Users size={20} className="text-[#C15F3C]" /> 3L+ businesses</div></div></div></div>
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
