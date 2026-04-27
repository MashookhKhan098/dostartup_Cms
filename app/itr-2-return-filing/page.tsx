"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import ITR2ReturnHero from "../components/Registration/ITR2ReturnHero";
import PopularSearches from "../components/PopularSearches";
import {
  CheckCircle,
  XCircle,
  Brain,
  Zap,
  Shield,
  TrendingUp,
  Search,
  BarChart3,
  Bell,
  MessageCircle,
  AlertTriangle,
  Star,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Clock,
  Sparkles,
  Users,
  Award,
  FileText,
  CreditCard,
  Home,
  Briefcase,
  Calculator,
  RefreshCw,
  Target,
  ThumbsUp,
  HelpCircle,
  Globe,
  Building2,
  PieChart,
  Layers,
  TrendingDown,
  DollarSign,
} from "lucide-react";

// ─────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────
type AgeGroup = "below60" | "60to80" | "above80";

interface CalcState {
  salary: number;
  hra: number;
  ltcg: number;
  stcg: number;
  houseProperty: number;
  foreignIncome: number;
  ded80c: number;
  ded80d: number;
  homeloan: number;
  age: AgeGroup;
}

interface CalcResult {
  grossTotal: number;
  ltcgTax: number;
  stcgTax: number;
  normalTaxableNew: number;
  normalTaxableOld: number;
  normalTaxNew: number;
  normalTaxOld: number;
  totalTaxNew: number;
  totalTaxOld: number;
  tds: number;
  refund: number;
  recommendation: "new" | "old";
  savings: number;
}

// ─────────────────────────────────────────────
// PURE TAX CALCULATION — ITR-2 SPECIFIC
// ─────────────────────────────────────────────
function calcNewRegimeTax(taxable: number): number {
  const slabs: [number, number][] = [
    [300000, 0],
    [700000, 0.05],
    [1000000, 0.1],
    [1200000, 0.15],
    [1500000, 0.2],
    [Infinity, 0.3],
  ];
  let tax = 0;
  let prev = 0;
  for (const [limit, rate] of slabs) {
    if (taxable <= prev) break;
    tax += (Math.min(taxable, limit) - prev) * rate;
    prev = limit;
  }
  if (taxable <= 700000) tax = 0;
  return Math.round(tax * 1.04);
}

function calcOldRegimeTax(taxable: number, age: AgeGroup): number {
  const exemption =
    age === "above80" ? 500000 : age === "60to80" ? 300000 : 250000;
  const slabs: [number, number][] = [
    [exemption, 0],
    [500000, 0.05],
    [1000000, 0.2],
    [Infinity, 0.3],
  ];
  let tax = 0;
  let prev = 0;
  for (const [limit, rate] of slabs) {
    if (taxable <= prev) break;
    tax += (Math.min(taxable, limit) - prev) * rate;
    prev = limit;
  }
  if (taxable <= 500000) tax = 0;
  return Math.round(tax * 1.04);
}

function runCalc(s: CalcState): CalcResult {
  const salary = s.salary || 0;
  const ltcg = s.ltcg || 0;
  const stcg = s.stcg || 0;
  const hp = s.houseProperty || 0;
  const foreign = s.foreignIncome || 0;

  // LTCG: 12.5% on gains above ₹1.25L (Section 112A, post Budget 2024)
  const ltcgTaxable = Math.max(0, ltcg - 125000);
  const ltcgTax = Math.round(ltcgTaxable * 0.125 * 1.04);

  // STCG: 20% flat (Section 111A, post Budget 2024)
  const stcgTax = Math.round(stcg * 0.2 * 1.04);

  // Normal income (salary + house property + foreign)
  const normalIncome = salary + hp + foreign;

  // New Regime normal
  const normalTaxableNew = Math.max(0, normalIncome - 75000);
  const normalTaxNew = calcNewRegimeTax(normalTaxableNew);
  const totalTaxNew = normalTaxNew + ltcgTax + stcgTax;

  // Old Regime normal
  const hraExempt = Math.min(s.hra || 0, salary * 0.5);
  const totalDed =
    Math.min(s.ded80c || 0, 150000) +
    Math.min(s.ded80d || 0, 75000) +
    Math.min(s.homeloan || 0, 200000) +
    50000 +
    hraExempt;
  const normalTaxableOld = Math.max(0, normalIncome - totalDed);
  const normalTaxOld = calcOldRegimeTax(normalTaxableOld, s.age);
  const totalTaxOld = normalTaxOld + ltcgTax + stcgTax;

  const grossTotal = normalIncome + ltcg + stcg;
  const tds = Math.round(salary * 0.1 + stcg * 0.2);
  const bestTax = Math.min(totalTaxNew, totalTaxOld);
  const refund = tds - bestTax;
  const recommendation: "new" | "old" =
    totalTaxNew <= totalTaxOld ? "new" : "old";
  const savings = Math.abs(totalTaxNew - totalTaxOld);

  return {
    grossTotal,
    ltcgTax,
    stcgTax,
    normalTaxableNew,
    normalTaxableOld,
    normalTaxNew,
    normalTaxOld,
    totalTaxNew,
    totalTaxOld,
    tds,
    refund,
    recommendation,
    savings,
  };
}

const fmt = (n: number) =>
  "₹" + Math.abs(Math.round(n)).toLocaleString("en-IN");

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const AI_STEPS = [
  {
    icon: "📊",
    title: "Broker P&L Imported Instantly",
    desc: "AI fetched capital gains from 6 brokers in 5 seconds",
    bg: "bg-[#C15F3C]/20",
  },
  {
    icon: "🏠",
    title: "House Property Income Verified",
    desc: "Rental income & loan interest automatically reconciled",
    bg: "bg-[#C15F3C]/15",
  },
  {
    icon: "🌍",
    title: "Foreign Income DTAA Applied",
    desc: "Double tax avoidance saved you ₹42,000",
    bg: "bg-[#C15F3C]/10",
  },
  {
    icon: "✅",
    title: "ITR-2 Ready to File",
    desc: "0 errors • LTCG set-off optimized • Refund: ₹68,400",
    bg: "bg-[#C15F3C]/25",
  },
];

const WHY_FEATURES = [
  {
    icon: <TrendingUp size={20} className="text-[#C15F3C]" />,
    title: "Auto Capital Gains Import",
    desc: "Connects with Zerodha, Groww, Angel One, ICICI Direct & 20+ brokers. Imports P&L in one click.",
  },
  {
    icon: <Brain size={20} className="text-[#C15F3C]" />,
    title: "AI Loss Harvesting Engine",
    desc: "Identifies stocks & MFs to sell before March 31 to offset gains and reduce your tax bill.",
  },
  {
    icon: <Globe size={20} className="text-[#C15F3C]" />,
    title: "DTAA & Foreign Income",
    desc: "RSUs, foreign salary, dividends handled with full Double Tax Avoidance Agreement support.",
  },
  {
    icon: <Shield size={20} className="text-[#C15F3C]" />,
    title: "Bank-Grade Security",
    desc: "256-bit SSL + SOC2 certified. Your investment data is encrypted end-to-end and never sold.",
  },
];

const AI_FEATURES = [
  {
    icon: <TrendingUp size={26} />,
    title: "Capital Gains Auto-Calculator",
    desc: "Upload broker P&L or connect via API. AI computes LTCG, STCG, and F&O with correct Budget 2024 rates.",
  },
  {
    icon: <Search size={26} />,
    title: "Loss Set-Off Optimizer",
    desc: "AI identifies carried-forward losses and sets them off in the most tax-efficient sequence to minimize your liability.",
  },
  {
    icon: <Home size={26} />,
    title: "House Property Engine",
    desc: "Handles income/loss from multiple properties, home loan interest, deemed rent, and Section 24 limits automatically.",
  },
  {
    icon: <Globe size={26} />,
    title: "DTAA & RSU Handler",
    desc: "For NRIs and Indians with foreign income — RSUs, foreign salary, dividends with DTAA benefit applied automatically.",
  },
  {
    icon: <Bell size={26} />,
    title: "AIS/26AS Deep Reconciler",
    desc: "Matches all capital gains, dividends, and interest in AIS against your computed figures to prevent IT notices.",
  },
  {
    icon: <AlertTriangle size={26} />,
    title: "ITR-2 Notice Shield",
    desc: "220+ validation rules for ITR-2 — high-value transactions, foreign assets, and capital gain disclosures checked.",
  },
];

const PROCESS_STEPS = [
  { num: "01", icon: "👤", label: "Create Free Account" },
  { num: "02", icon: "📊", label: "Import Broker P&L" },
  { num: "03", icon: "🤖", label: "AI Computes All Gains" },
  { num: "04", icon: "✅", label: "Review & Optimize" },
  { num: "05", icon: "🎉", label: "File & Track Refund" },
];





const CAPITAL_GAINS_TABLE = [
  {
    asset: "Equity Shares / Equity MF",
    holdLT: "> 12 months",
    ltcgRate: "12.5% (above ₹1.25L)",
    holdST: "≤ 12 months",
    stcgRate: "20%",
  },
  {
    asset: "Debt Mutual Funds",
    holdLT: "> 24 months",
    ltcgRate: "Slab rates",
    holdST: "≤ 24 months",
    stcgRate: "Slab rates",
  },
  {
    asset: "Property / Real Estate",
    holdLT: "> 24 months",
    ltcgRate: "12.5% or 20% (with indexation)",
    holdST: "≤ 24 months",
    stcgRate: "Slab rates",
  },
  {
    asset: "Gold / Physical Assets",
    holdLT: "> 24 months",
    ltcgRate: "12.5% or 20% (with indexation)",
    holdST: "≤ 24 months",
    stcgRate: "Slab rates",
  },
  {
    asset: "Unlisted Shares",
    holdLT: "> 24 months",
    ltcgRate: "12.5% (no indexation)",
    holdST: "≤ 24 months",
    stcgRate: "Slab rates",
  },
];

const TESTIMONIALS = [
  {
    name: "Vikram Nair",
    location: "Mumbai",
    rating: 5,
    text: "Had gains from Zerodha and Angel One both. DoStartup imported everything automatically, found ₹28,000 in loss set-off I missed. Filed in 12 minutes!",
    role: "Equity Investor",
  },
  {
    name: "Sneha Reddy",
    location: "Hyderabad",
    rating: 5,
    text: "I have RSUs from my US company. DoStartup handled DTAA automatically and applied foreign tax credit. Saved ₹65,000 in double taxation.",
    role: "Software Architect",
  },
  {
    name: "Rohit Malhotra",
    location: "Delhi",
    rating: 5,
    text: "Two rental properties, stocks, and mutual funds — ITR-2 looked complex. DoStartup's AI made it as easy as ITR-1. Highly recommend!",
    role: "Property Investor",
  },
];

const BROKERS = [
  "Zerodha",
  "Groww",
  "Angel One",
  "ICICI Direct",
  "HDFC Securities",
  "Upstox",
  "5Paisa",
  "Motilal Oswal",
];

// ─────────────────────────────────────────────
// SMALL SUB-COMPONENTS
// ─────────────────────────────────────────────
function StatusCell({ val }: { val: boolean | string }) {
  if (val === true)
    return <CheckCircle size={16} className="text-[#C15F3C] mx-auto" />;
  if (val === false)
    return <XCircle size={16} className="text-[#C15F3C]/30 mx-auto" />;
  if (val === "~")
    return <span className="text-[#C15F3C]/60 font-bold text-sm">~</span>;
  return <span className="font-bold text-sm text-[#C15F3C]">{val}</span>;
}

function SliderRow({
  label,
  value,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="mb-5">
      <div className="flex justify-between items-center mb-1.5">
        <label className="text-xs font-semibold text-slate-700">{label}</label>
        <span className="text-xs font-bold text-[#C15F3C] bg-[#C15F3C]/10 px-2 py-0.5 rounded-md">
          {fmt(value)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-[#C15F3C]"
        style={{
          background: `linear-gradient(to right, #C15F3C 0%, #C15F3C ${pct}%, #F4F3EE ${pct}%, #F4F3EE 100%)`,
        }}
      />
      <div className="flex justify-between text-[10px] text-slate-400 mt-1">
        <span>{fmt(min)}</span>
        <span>{fmt(max)}</span>
      </div>
    </div>
  );
}

function NumInput({
  label,
  value,
  onChange,
  icon,
  note,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  icon?: React.ReactNode;
  note?: string;
}) {
  return (
    <div className="mb-5">
      <label className="block text-xs font-semibold text-slate-700 mb-1">
        {label}
      </label>
      {note && <p className="text-[10px] text-slate-400 mb-1.5">{note}</p>}
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">
          ₹
        </span>
        {icon && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#C15F3C]/40">
            {icon}
          </span>
        )}
        <input
          type="number"
          min={0}
          value={value}
          onChange={(e) => onChange(Math.max(0, Number(e.target.value)))}
          className="w-full pl-7 pr-10 py-2.5 border-2 border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:border-[#C15F3C] focus:ring-2 focus:ring-[#C15F3C]/10 transition-colors bg-white"
        />
      </div>
    </div>
  );
}

function ResultRow({
  label,
  value,
  color = "text-slate-800",
  tooltip,
}: {
  label: string;
  value: string;
  color?: string;
  tooltip?: string;
}) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-[#C15F3C]/5 last:border-0 group">
      <span className="text-xs text-slate-600 flex items-center gap-1">
        {label}
        {tooltip && (
          <HelpCircle
            size={12}
            className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity cursor-help"
          />
        )}
      </span>
      <span className={`font-bold text-sm ${color}`}>{value}</span>
    </div>
  );
}

// ─────────────────────────────────────────────
// MAIN PAGE COMPONENT
// ─────────────────────────────────────────────
export default function ITR2Page() {
  const [calc, setCalc] = useState<CalcState>({
    salary: 1200000,
    hra: 180000,
    ltcg: 300000,
    stcg: 80000,
    houseProperty: 180000,
    foreignIncome: 0,
    ded80c: 150000,
    ded80d: 50000,
    homeloan: 150000,
    age: "below60",
  });

  const upd = useCallback(
    function update<K extends keyof CalcState>(k: K, v: CalcState[K]) {
      setCalc((p) => ({ ...p, [k]: v }));
    },
    [],
  );

  const result = runCalc(calc);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const resetCalculator = () => {
    setCalc({
      salary: 1200000,
      hra: 180000,
      ltcg: 300000,
      stcg: 80000,
      houseProperty: 180000,
      foreignIncome: 0,
      ded80c: 150000,
      ded80d: 50000,
      homeloan: 150000,
      age: "below60",
    });
  };

  return (
    <>
      <Navbar />
      <ITR2ReturnHero
        heading="ITR-2"
        headingHighlight="Return Filing"
        description="File your ITR-2 return for individuals with capital gains, multiple house properties, or foreign income. Expert CA-assisted filing with AI precision."
        features={[
          { icon: "check", text: "Capital Gains from Stocks, MFs & Property" },
          { icon: "check", text: "Multiple House Property Income" },
          { icon: "check", text: "Foreign Income, RSUs & DTAA Benefits" },
          { icon: "check", text: "NRI / RNOR with Indian Income" },
          { icon: "check", text: "Old & New Regime Optimizer" },
        ]}
        buttonText="Pay & File ITR-2"
      />

      <main className="min-h-screen bg-[#F4F3EE] font-sans">
        {/* ══════════════════════════════════════
 HERO SECTION
 ══════════════════════════════════════ */}
        <section className="bg-[#F4F3EE] relative overflow-hidden pt-8 pb-20 border-b border-[#C15F3C]/10">
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          {/* Glow blobs */}
          <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-[#C15F3C]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute left-0 bottom-0 w-[300px] h-[300px] bg-[#C15F3C]/8 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute top-20 left-10 w-2 h-2 bg-[#F4F3EE] rounded-full opacity-30 animate-ping" />
          <div className="absolute bottom-20 right-20 w-3 h-3 bg-[#F4F3EE] rounded-full opacity-20 animate-pulse" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#C15F3C]/15 border border-[#C15F3C]/30 text-[#C15F3C] text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase backdrop-blur-sm">
                <span className="w-2 h-2 bg-[#C15F3C] rounded-full animate-pulse" />
                AY 2026-27 · ITR-2 Filing Open · Last Date: July 31, 2026
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.08] mb-5">
                File{" "}
                <span className="text-[#C15F3C]">
                  ITR-2
                </span>{" "}
                Online
                <br />
                With{" "}
                <span className="text-[#C15F3C]">
                  AI Precision
                </span>
              </h1>

              <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-lg">
                Complex Gains. Simple Filing.
                <br />
                Join 2 lakh+ investors who trust DoStartup AI to file ITR-2
                accurately — in under 15 minutes.
                <span className="block mt-2 text-black font-semibold">
                  Compare with ClearTax, Tax2Win, Quicko, H&R Block & TaxSpanner — 40% cheaper!
                </span>
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link
                  href="#pricing"
                  className="bg-[#C15F3C] hover:bg-[#C15F3C]/90 text-white font-bold px-7 py-3.5 rounded-full text-base transition-all hover:-translate-y-0.5 inline-flex items-center gap-2 group"
                >
                  🚀 Start Filing ITR-2{" "}
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link
                  href="#calculator"
                  className="border border-slate-300 hover:border-[#C15F3C] text-slate-700 font-semibold px-7 py-3.5 rounded-full text-base transition-all hover:bg-white bg-white/60 shadow-sm"
                >
                  <Calculator size={16} className="inline mr-2" />
                  Capital Gains Calculator →
                </Link>
              </div>

              {/* Stats */}
              <div className="flex gap-8 flex-wrap">
                {[
                  [
                    "2L+",
                    "ITR-2 Filed",
                    <FileText key="1" size={16} className="text-[#C15F3C]" />,
                  ],
                  [
                    "₹120Cr+",
                    "Gains Computed",
                    <TrendingUp key="2" size={16} className="text-[#C15F3C]" />,
                  ],
                  [
                    "4.9★",
                    "Google Rating",
                    <Star
                      key="3"
                      size={16}
                      className="text-[#C15F3C] fill-[#C15F3C]"
                    />,
                  ],
                ].map(([num, lbl, icon]) => (
                  <div key={String(lbl)} className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white border border-[#E5E2DA] flex items-center justify-center shadow-sm">
                      {icon}
                    </div>
                    <div>
                      <div className="font-display text-2xl font-extrabold text-slate-900">
                        {num}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">{lbl}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column — AI Card */}
            <div className="lg:pl-4">
              <div className="bg-white border border-[#C15F3C]/20 rounded-3xl p-6 shadow-none hover:border-[#C15F3C]/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-5">
                  <span className="font-display font-bold text-slate-900 text-sm flex items-center gap-2">
                    <Brain size={18} className="text-[#C15F3C]" />
                    🤖 AI ITR-2 Assistant — Live
                  </span>
                  <span className="bg-[#F4F3EE] text-[#C15F3C] text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-[#C15F3C] rounded-full animate-pulse" />
                    ACTIVE
                  </span>
                </div>

                {AI_STEPS.map((s, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 py-3 border-b border-white/10 last:border-0 hover:bg-white/5 rounded-lg px-2 transition-colors"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center text-xl flex-shrink-0`}
                    >
                      {s.icon}
                    </div>
                    <div>
                      <div className="text-slate-900 font-semibold text-sm">
                        {s.title}
                      </div>
                      <div className="text-[#C15F3C] text-xs mt-0.5">
                        {s.desc}
                      </div>
                    </div>
                  </div>
                ))}

                <div className="mt-4 bg-white/15 rounded-xl p-4">
                  <div className="flex justify-between text-xs text-[#C15F3C] mb-2">
                    <span className="flex items-center gap-1">
                      <Zap size={12} /> Processing Capital Gains
                    </span>
                    <span className="font-bold text-[#C15F3C]">82% Complete</span>
                  </div>
                  <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full w-[82%] bg-white rounded-full" />
                  </div>
                  <p className="text-[10px] text-slate-400 mt-2">
                    Importing from 6 brokers • 2 steps remaining
                  </p>
                </div>

                {/* Broker strip */}
                <div className="mt-4 pt-4 border-t border-[#E5E2DA]">
                  <p className="text-slate-500 text-xs mb-2">
                    🔗 Connected Brokers
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {BROKERS.map((b) => (
                      <span
                        key={b}
                        className="bg-white text-slate-500 text-[10px] font-semibold px-2 py-1 rounded-md"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
 TRUST BADGES
 ══════════════════════════════════════ */}
        <section className="bg-[#F4F3EE] border-y border-[#C15F3C]/10 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              <span className="text-xs text-[#C15F3C]/40 font-semibold uppercase ">
                Trusted by
              </span>
              {["SBI", "HDFC Bank", "ICICI", "Axis Bank", "Kotak"].map(
                (bank) => (
                  <div
                    key={bank}
                    className="text-[#C15F3C]/30 font-bold text-sm hover:text-[#C15F3C] transition-colors"
                  >
                    {bank}
                  </div>
                ),
              )}
              <span className="text-xs text-[#C15F3C] font-bold flex items-center gap-1">
                <Shield size={14} /> ISO 27001 Certified
              </span>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
 ELIGIBILITY + CAPITAL GAINS TABLE
 ══════════════════════════════════════ */}
        <section className="bg-[#F4F3EE] py-6 px-4 sm:px-6" id="eligibility">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-[#C15F3C] text-xs font-bold uppercase mb-2 flex items-center justify-center gap-2">
                <Target size={14} /> Eligibility
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
                Who Should File ITR-2?
              </h2>
              <p className="text-[#C15F3C] max-w-xl mx-auto text-sm">
                ITR-2 is for investors, NRIs, and multi-property owners. If you
                can't file ITR-1 but have no business income — ITR-2 is your
                form.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border-2 border-[#C15F3C]/20 rounded-2xl p-6 hover:shadow-lg hover:shadow-[#C15F3C]/10 transition-all">
                <div className="flex items-center gap-2 font-bold text-slate-700 mb-4 text-base">
                  <CheckCircle size={20} className="text-[#C15F3C]" /> File
                  ITR-2 If You Have:
                </div>
                <ul className="space-y-2.5">
                  {[
                    "Capital gains from stocks, MFs, or property",
                    "Income from more than one house property",
                    "Foreign income (salary, RSU, dividends)",
                    "NRI / RNOR status with Indian income",
                    "Director in a company (no business income)",
                    "Unlisted shares or ESOPs",
                    "Winnings from lottery / horse race",
                    "Total income exceeding ₹50 lakh",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm text-slate-700"
                    >
                      <span className="text-[#C15F3C] mt-0.5 flex-shrink-0 font-bold">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:shadow-slate-100 transition-all opacity-80">
                <div className="flex items-center gap-2 font-bold text-slate-700 mb-4 text-base">
                  <AlertTriangle size={20} className="text-[#C15F3C]" /> NOT
                  ITR-2 — Use Other Forms:
                </div>
                <ul className="space-y-3">
                  {[
                    {
                      form: "ITR-1",
                      desc: "Only salary + 1 house property, no capital gains, income ≤ ₹50L",
                    },
                    {
                      form: "ITR-3",
                      desc: "Business or profession income (proprietor, partner, freelancer)",
                    },
                    {
                      form: "ITR-4",
                      desc: "Presumptive income under Sec 44AD / 44ADA / 44AE",
                    },
                  ].map((item) => (
                    <li key={item.form} className="flex gap-3 text-sm">
                      <span className="bg-slate-700 text-white text-xs font-bold px-2 py-0.5 rounded-md flex-shrink-0 h-fit">
                        {item.form}
                      </span>
                      <span className="text-slate-600">{item.desc}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <p className="text-xs text-[#C15F3C] font-semibold mb-1">
                    🤖 Not sure which form?
                  </p>
                  <p className="text-xs text-slate-500">
                    DoStartup AI automatically selects the correct ITR form —
                    just answer 3 quick questions.
                  </p>
                </div>
              </div>
            </div>

            {/* Capital Gains Table */}
            <div className="bg-white border border-[#E5E2DA] rounded-2xl p-6 shadow-sm">
              <h3 className="font-display font-bold text-slate-900 text-lg mb-4 flex items-center gap-2">
                <BarChart3 size={20} className="text-[#C15F3C]" />
                📊 Capital Gains Tax Rates FY 2025-26 (Post Budget 2024)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-[#C15F3C] text-white">
                      <th className="px-3 py-2.5 text-left rounded-tl-xl font-bold">
                        Asset Type
                      </th>
                      <th className="px-3 py-2.5 text-center font-bold">
                        Holding (LTCG)
                      </th>
                      <th className="px-3 py-2.5 text-center font-bold">
                        LTCG Rate
                      </th>
                      <th className="px-3 py-2.5 text-center font-bold">
                        Holding (STCG)
                      </th>
                      <th className="px-3 py-2.5 text-right rounded-tr-xl font-bold">
                        STCG Rate
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {CAPITAL_GAINS_TABLE.map((row, i) => (
                      <tr
                        key={row.asset}
                        className={`border-b border-[#C15F3C]/10 hover:bg-[#C15F3C]/5 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-white/60"}`}
                      >
                        <td className="px-3 py-2.5 font-semibold text-slate-900">
                          {row.asset}
                        </td>
                        <td className="px-3 py-2.5 text-center text-slate-600">
                          {row.holdLT}
                        </td>
                        <td className="px-3 py-2.5 text-center font-bold text-[#C15F3C]">
                          {row.ltcgRate}
                        </td>
                        <td className="px-3 py-2.5 text-center text-slate-600">
                          {row.holdST}
                        </td>
                        <td className="px-3 py-2.5 text-right font-bold text-[#C15F3C]">
                          {row.stcgRate}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-3 grid sm:grid-cols-2 gap-2">
                <p className="text-xs text-slate-600 bg-white rounded-xl px-3 py-2 border border-[#C15F3C]/10">
                  💡 <strong>LTCG Exemption:</strong> Equity LTCG up to{" "}
                  <strong>₹1.25 lakh/year is exempt</strong> — only gains above
                  this are taxed at 12.5%.
                </p>
                <p className="text-xs text-slate-600 bg-white rounded-xl px-3 py-2 border border-[#C15F3C]/10">
                  💡 <strong>Loss Set-off:</strong> STCL offsets STCG + LTCG.
                  LTCL only offsets LTCG. Carry forward for 8 years (file on
                  time!).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
 WHY DOSTARTUP + COMPETITOR COMPARISON
 ══════════════════════════════════════ */}
        <section className="bg-[#F4F3EE] py-6 px-4 sm:px-6" id="compare">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-[#C15F3C] text-xs font-bold uppercase mb-2">
                Why Choose Us
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
                Better Than{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C15F3C] to-[#C15F3C]/70">
                  ClearTax, Tax2Win, Quicko, H&R Block & TaxSpanner
                </span>
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-sm">
                We studied every competitor and built what they missed — a truly
                AI-first ITR-2 experience at the lowest price in India.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Why DoStartup */}
              <div className="space-y-3">
                {WHY_FEATURES.map((f) => (
                  <div
                    key={f.title}
                    className="flex gap-4 p-4 bg-white border border-[#C15F3C]/10 rounded-2xl hover:border-[#C15F3C] transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 bg-[#F4F3EE] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#C15F3C]/10 group-hover:scale-110 transition-all">
                      {f.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm mb-0.5 flex items-center gap-2">
                        {f.title}
                        {f.title.includes("AI") && (
                          <Sparkles size={12} className="text-[#C15F3C]" />
                        )}
                      </div>
                      <div className="text-slate-600 text-xs leading-relaxed">
                        {f.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Comparison Table */}
              <div className="rounded-2xl overflow-hidden border border-[#C15F3C]/20 bg-white hover:border-[#C15F3C]/40 transition-shadow">
                <div className="bg-gradient-to-r from-[#C15F3C] to-[#C15F3C]/90 px-4 py-3">
                  <h3 className="text-white font-bold text-sm flex items-center gap-2">
                    <TrendingUp size={16} className="text-white" />
                    Feature Comparison — ITR-2 Platforms
                  </h3>
                </div>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-white">
                      <th className="px-3 py-3 text-left font-bold text-xs text-slate-700 w-[28%]">
                        Feature
                      </th>
                      <th className="px-2 py-3 text-center font-bold text-xs text-[#C15F3C]">
                        DoStartup
                      </th>
                      <th className="px-2 py-3 text-center font-bold text-xs text-slate-400">
                        ClearTax
                      </th>
                      <th className="px-2 py-3 text-center font-bold text-xs text-slate-400">
                        Tax2Win
                      </th>
                      <th className="px-2 py-3 text-center font-bold text-xs text-slate-400">
                        Quicko
                      </th>
                      <th className="px-2 py-3 text-center font-bold text-xs text-slate-400">
                        H&R Block
                      </th>
                      <th className="px-2 py-3 text-center font-bold text-xs text-slate-400">
                        TaxSpanner
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        feature: "Auto Broker Import",
                        d: true,
                        c: true,
                        t: "~",
                        q: "~",
                        h: false,
                        ts: false,
                      },
                      {
                        feature: "AI Loss Harvesting",
                        d: true,
                        c: false,
                        t: false,
                        q: false,
                        h: false,
                        ts: false,
                      },
                      {
                        feature: "DTAA / Foreign Income",
                        d: true,
                        c: "~",
                        t: false,
                        q: "~",
                        h: true,
                        ts: "~",
                      },
                      {
                        feature: "Multiple Properties",
                        d: true,
                        c: true,
                        t: true,
                        q: true,
                        h: true,
                        ts: true,
                      },
                      {
                        feature: "NRI Filing Support",
                        d: true,
                        c: "~",
                        t: false,
                        q: "~",
                        h: true,
                        ts: false,
                      },
                      {
                        feature: "Price (ITR-2)",
                        d: "₹799",
                        c: "₹999",
                        t: "₹899",
                        q: "₹799",
                        h: "₹1499",
                        ts: "₹699",
                      },
                    ].map((row, i) => (
                      <tr
                        key={row.feature}
                        className={`border-b border-[#C15F3C]/5 hover:bg-[#C15F3C]/5 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-white/60"}`}
                      >
                        <td className="px-3 py-3 font-medium text-slate-800 text-xs">
                          {row.feature}
                        </td>
                        <td className="px-2 py-3 text-center">
                          <StatusCell val={row.d} />
                        </td>
                        <td className="px-2 py-3 text-center">
                          <StatusCell val={row.c} />
                        </td>
                        <td className="px-2 py-3 text-center">
                          <StatusCell val={row.t} />
                        </td>
                        <td className="px-2 py-3 text-center">
                          <StatusCell val={row.q} />
                        </td>
                        <td className="px-2 py-3 text-center">
                          <StatusCell val={row.h} />
                        </td>
                        <td className="px-2 py-3 text-center">
                          <StatusCell val={row.ts} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="bg-white p-3 text-center text-xs text-slate-600 border-t border-[#C15F3C]/10">
                  <ThumbsUp size={12} className="inline mr-1 text-[#C15F3C]" />
                  DoStartup.in — Best AI ITR-2 platform at the lowest price
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
 AI FEATURES
 ══════════════════════════════════════ */}
        <section
          className="bg-[#F4F3EE] py-6 px-4 sm:px-6 relative overflow-hidden"
          id="features"
        >
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-[#C15F3C] text-xs font-bold uppercase mb-2 flex items-center justify-center gap-2">
                <Sparkles size={14} /> AI Technology
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
                Powered by Advanced AI
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-sm">
                DoStartup's AI engine trained on 10 lakh+ Indian tax scenarios —
                built specifically for Indian taxation.
                <span className="block mt-1 text-slate-900 font-semibold">
                  98.7% accuracy in deduction identification
                </span>
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {AI_FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="bg-white border border-[#E5E2DA] rounded-2xl p-5 hover:-translate-y-1.5 hover:border-[#C15F3C] transition-all duration-200 group"
                >
                  <div className="text-[#C15F3C] mb-3 group-hover:scale-110 transform inline-block transition-transform">
                    {f.icon}
                  </div>
                  <div className="font-display font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    {f.title}
                    <span className="text-[10px] bg-[#F4F3EE] text-[#C15F3C] border border-[#C15F3C]/20 px-2 py-0.5 rounded-full">
                      AI
                    </span>
                  </div>
                  <div className="text-slate-500 text-sm leading-relaxed">
                    {f.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
 PROCESS STEPS
 ══════════════════════════════════════ */}
        <section className="bg-[#F4F3EE] py-6 px-4 sm:px-6" id="process">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[#C15F3C] text-xs font-bold uppercase mb-2">
                How It Works
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900">
                File ITR-2 in 5 Simple Steps
              </h2>
              <p className="text-[#C15F3C] text-sm mt-2">
                Complex gains, simple filing — our AI handles everything
              </p>
            </div>

            <div className="relative">
              <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#C15F3C]/20 to-[#C15F3C]/50 z-0" />
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
                {PROCESS_STEPS.map((s) => (
                  <div key={s.num} className="text-center group cursor-pointer">
                    <div className="w-14 h-14 rounded-full bg-white border border-[#E5E2DA] flex items-center justify-center text-2xl mx-auto mb-3 group-hover:border-[#C15F3C] transition-all duration-200">
                      {s.icon}
                    </div>
                    <div className="text-[#C15F3C] text-xs font-bold mb-1">
                      STEP {s.num}
                    </div>
                    <div className="text-slate-700 text-sm font-semibold leading-tight">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link
                href="#pricing"
                className="inline-flex items-center gap-2 text-[#C15F3C] font-semibold text-sm hover:text-[#C15F3C]"
              >
                Start your ITR-2 filing now <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
 CAPITAL GAINS CALCULATOR (Fully Working)
 ══════════════════════════════════════ */}
        <section className="bg-[#F4F3EE] py-6 px-4 sm:px-6" id="calculator">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-[#C15F3C] text-xs font-bold uppercase mb-2 flex items-center justify-center gap-2">
                <Calculator size={14} /> Free Tool
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">
                ITR-2 Capital Gains Calculator FY 2025-26
              </h2>
              <p className="text-slate-600 text-sm max-w-2xl mx-auto">
                Compute LTCG, STCG, compare Old vs New Regime and find your
                exact refund.
                <span className="block mt-1 text-[#C15F3C] font-semibold">
                  Used by 30,000+ investors this month
                </span>
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-[#E5E2DA] overflow-hidden hover:border-[#C15F3C]/30 transition-all">
              {/* Header Bar */}
              <div className="bg-gradient-to-r from-[#C15F3C] to-[#C15F3C]/90 px-6 py-4 flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F4F3EE]/20 rounded-xl flex items-center justify-center">
                    <TrendingUp size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-white text-lg flex items-center gap-2">
                      ITR-2 Capital Gains Calculator
                      <span className="text-[10px] bg-[#F4F3EE]/20 text-white px-2 py-0.5 rounded-full">
                        Live
                      </span>
                    </h3>
                    <p className="text-[#F4F3EE] text-xs mt-0.5">
                      AY 2026-27 | Budget 2024 Updated Rates
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={resetCalculator}
                    className="bg-[#F4F3EE]/20 hover:bg-[#F4F3EE]/30 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors"
                  >
                    <RefreshCw size={12} /> Reset
                  </button>
                  <span className="bg-[#F4F3EE]/20 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase flex items-center gap-1">
                    <Zap size={12} /> AI Powered
                  </span>
                </div>
              </div>

              <div className="grid lg:grid-cols-2">
                {/* INPUTS */}
                <div className="p-6 border-b lg:border-b-0 lg:border-r border-[#C15F3C]/10 bg-gradient-to-br from-white to-[#F4F3EE]/30">
                  <h4 className="font-display font-bold text-slate-900 text-base mb-5 flex items-center gap-2">
                    <FileText size={16} className="text-[#C15F3C]" />
                    Enter Your Income Details
                  </h4>

                  <div className="bg-white rounded-xl p-4 mb-4 border border-[#E5E2DA]">
                    <p className="text-xs font-bold text-[#C15F3C] mb-3 uppercase ">
                      💼 Salary & Other Income
                    </p>
                    <NumInput
                      label="Annual Gross Salary / Pension (₹)"
                      value={calc.salary}
                      onChange={(v) => upd("salary", v)}
                      icon={<Briefcase size={14} />}
                    />
                    <NumInput
                      label="HRA Received (₹) — Old Regime only"
                      value={calc.hra}
                      onChange={(v) => upd("hra", v)}
                      icon={<Home size={14} />}
                    />
                    <NumInput
                      label="House Property Net Income (₹)"
                      value={calc.houseProperty}
                      onChange={(v) => upd("houseProperty", v)}
                      note="After deducting home loan interest (max ₹2L for self-occupied)"
                      icon={<Building2 size={14} />}
                    />
                    <NumInput
                      label="Foreign Income (₹) — RSU / Salary abroad"
                      value={calc.foreignIncome}
                      onChange={(v) => upd("foreignIncome", v)}
                      icon={<Globe size={14} />}
                    />
                  </div>

                  {/* Capital Gains */}
                  <div className="bg-white rounded-xl p-4 mb-4 border border-[#E5E2DA]">
                    <p className="text-xs font-bold text-[#C15F3C] mb-3 uppercase ">
                      📈 Capital Gains (Budget 2024 Rates)
                    </p>
                    <NumInput
                      label="LTCG — Equity / Equity MF (₹)"
                      value={calc.ltcg}
                      onChange={(v) => upd("ltcg", v)}
                      note="Taxed @12.5% on gains above ₹1.25L exemption (Sec 112A)"
                      icon={<TrendingUp size={14} />}
                    />
                    <NumInput
                      label="STCG — Equity / Equity MF (₹)"
                      value={calc.stcg}
                      onChange={(v) => upd("stcg", v)}
                      note="Taxed @20% flat under Section 111A"
                      icon={<TrendingDown size={14} />}
                    />
                  </div>

                  <div className="bg-white rounded-xl p-4 mb-4 border border-[#E5E2DA]">
                    <p className="text-xs font-bold text-[#C15F3C] mb-3 uppercase ">
                      🏛 Old Regime Deductions
                    </p>
                    <SliderRow
                      label="80C Investments — Max ₹1,50,000"
                      value={calc.ded80c}
                      min={0}
                      max={150000}
                      step={5000}
                      onChange={(v) => upd("ded80c", v)}
                    />
                    <SliderRow
                      label="80D Health Insurance — Max ₹75,000"
                      value={calc.ded80d}
                      min={0}
                      max={75000}
                      step={2500}
                      onChange={(v) => upd("ded80d", v)}
                    />
                    <SliderRow
                      label="Home Loan Interest Sec 24(b) — Max ₹2,00,000"
                      value={calc.homeloan}
                      min={0}
                      max={200000}
                      step={10000}
                      onChange={(v) => upd("homeloan", v)}
                    />
                  </div>

                  <div className="mb-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1">
                      <Users size={14} /> Age Group
                    </label>
                    <select
                      value={calc.age}
                      onChange={(e) => upd("age", e.target.value as AgeGroup)}
                      className="w-full px-3 py-2.5 border-2 border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:border-[#C15F3C] focus:ring-2 focus:ring-[#C15F3C]/10 transition-colors bg-white"
                    >
                      <option value="below60">Below 60 years</option>
                      <option value="60to80">
                        60–80 years (Senior Citizen)
                      </option>
                      <option value="above80">
                        Above 80 years (Super Senior)
                      </option>
                    </select>
                  </div>
                </div>

                {/* RESULTS */}
                <div className="p-6 bg-gradient-to-br from-[#F4F3EE]/60 to-white">
                  <h4 className="font-display font-bold text-slate-900 text-base mb-5 flex items-center gap-2">
                    <BarChart3 size={16} className="text-[#C15F3C]" />
                    Your Tax Breakdown
                  </h4>

                  {/* Capital Gains Breakdown */}
                  <div className="bg-white rounded-2xl border border-[#E5E2DA] p-4 mb-4">
                    <p className="text-xs font-bold text-[#C15F3C] mb-2 uppercase ">
                      📈 Capital Gains Tax
                    </p>
                    <ResultRow
                      label={`LTCG Tax (12.5% on ₹${Math.max(0, (calc.ltcg || 0) - 125000).toLocaleString("en-IN")} + 4% cess)`}
                      value={fmt(result.ltcgTax)}
                      color="text-slate-700"
                    />
                    <ResultRow
                      label={`STCG Tax (20% on ₹${(calc.stcg || 0).toLocaleString("en-IN")} + 4% cess)`}
                      value={fmt(result.stcgTax)}
                      color="text-slate-700"
                    />
                  </div>

                  {/* Summary */}
                  <div className="bg-white rounded-2xl border border-[#E5E2DA] p-4 mb-4">
                    <ResultRow
                      label="Gross Total Income"
                      value={fmt(result.grossTotal)}
                    />
                    <ResultRow
                      label="Taxable (New Regime — normal income)"
                      value={fmt(result.normalTaxableNew)}
                      color="text-[#C15F3C]"
                    />
                    <ResultRow
                      label="Total Tax — New Regime"
                      value={fmt(result.totalTaxNew)}
                      color="text-slate-600"
                    />
                    <ResultRow
                      label="Taxable (Old Regime — normal income)"
                      value={fmt(result.normalTaxableOld)}
                      color="text-[#C15F3C]"
                    />
                    <ResultRow
                      label="Total Tax — Old Regime"
                      value={fmt(result.totalTaxOld)}
                      color="text-slate-600"
                    />
                    <ResultRow
                      label="Est. TDS Deducted"
                      value={fmt(result.tds)}
                      tooltip="Salary TDS + STCG TDS"
                    />
                    <ResultRow
                      label={
                        result.refund >= 0
                          ? "🎉 Estimated Tax Refund"
                          : "⚠️ Tax Payable"
                      }
                      value={
                        result.refund >= 0
                          ? fmt(result.refund)
                          : fmt(-result.refund)
                      }
                      color={
                        result.refund >= 0 ? "text-[#C15F3C]" : "text-red-600"
                      }
                    />
                  </div>

                  {/* AI Recommendation */}
                  <div
                    className={`rounded-2xl p-4 border-2 text-center mb-4 transform hover:scale-105 transition-transform ${
                      result.recommendation === "new"
                        ? "bg-gradient-to-r from-[#F4F3EE] to-[#C15F3C]/5 border-[#C15F3C]/30"
                        : "bg-gradient-to-r from-[#C15F3C]/10 to-[#C15F3C]/20 border-[#C15F3C]/40"
                    }`}
                  >
                    <div className="text-xs font-bold uppercase mb-1 flex items-center justify-center gap-1 text-[#C15F3C]">
                      <Brain size={14} /> AI Recommendation
                    </div>
                    <div className="font-display font-bold text-slate-900 text-base">
                      {result.recommendation === "new"
                        ? "✨ New Regime is better for you"
                        : "🏛 Old Regime is better for you"}
                    </div>
                    <div className="font-extrabold text-2xl mt-1 text-[#C15F3C]">
                      Save {fmt(result.savings)} more
                    </div>
                  </div>

                  {/* Regime Pills */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {[
                      {
                        label: "New Regime",
                        tax: result.totalTaxNew,
                        win: result.recommendation === "new",
                      },
                      {
                        label: "Old Regime",
                        tax: result.totalTaxOld,
                        win: result.recommendation === "old",
                      },
                    ].map((r) => (
                      <div
                        key={r.label}
                        className={`rounded-xl p-3 border-2 text-center transition-all ${
                          r.win
                            ? "bg-[#C15F3C] border-[#C15F3C] shadow-lg shadow-[#C15F3C]/20"
                            : "bg-white border-slate-200 hover:border-[#C15F3C]"
                        }`}
                      >
                        <div
                          className={`text-xs font-bold ${r.win ? "text-white" : "text-[#C15F3C]"}`}
                        >
                          {r.label}
                        </div>
                        <div
                          className={`font-extrabold text-lg ${r.win ? "text-white" : "text-slate-700"}`}
                        >
                          {fmt(r.tax)}
                        </div>
                        {r.win && (
                          <div className="text-white text-[10px] mt-0.5 flex items-center justify-center gap-1">
                            <CheckCircle size={10} /> BETTER CHOICE
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <Link
                    href="#pricing"
                    className="block bg-gradient-to-r from-[#C15F3C] to-[#C15F3C]/90 hover:from-[#C15F3C] hover:to-[#C15F3C] text-white font-bold text-sm text-center py-3.5 rounded-2xl transition-all hover:shadow-lg hover:shadow-[#C15F3C]/30 hover:-translate-y-0.5"
                  >
                    🚀 File ITR-2 Now — Use This Data
                  </Link>
                  <p className="text-center text-[10px] text-slate-400 mt-2">
                    * Budget 2024 rates applied. Consult CA for F&O / foreign
                    income.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
 TESTIMONIALS
 ══════════════════════════════════════ */}
        <section className="bg-[#F4F3EE] py-6 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-[#C15F3C] text-xs font-bold uppercase mb-2">
                Testimonials
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">
                Trusted by 2 Lakh+ Investors
              </h2>
              <p className="text-[#C15F3C] text-sm">
                See what investors say about DoStartup.in ITR-2 filing
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#E5E2DA] rounded-2xl p-6 hover:border-[#C15F3C] transition-all"
                >
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        size={16}
                        className="fill-[#C15F3C] text-[#C15F3C]"
                      />
                    ))}
                  </div>
                  <p className="text-slate-800 text-sm mb-4">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C15F3C]/70 to-[#C15F3C] flex items-center justify-center text-white font-bold text-sm">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-slate-900">
                        {t.name}
                      </div>
                      <div className="text-xs text-[#C15F3C]">
                        {t.role} • {t.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
 PRICING PLANS
 ══════════════════════════════════════ */}

        {/* ══════════════════════════════════════
 FINAL CTA BANNER
 ══════════════════════════════════════ */}
        <section className="bg-[#F4F3EE] py-20 px-4 sm:px-6 relative overflow-hidden border-t border-[#C15F3C]/10">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#C15F3C]/5 rounded-full blur-3xl opacity-20" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#C15F3C]/10 rounded-full blur-3xl opacity-20" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-0.5 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={24}
                  className="text-[#C15F3C] fill-[#C15F3C]"
                />
              ))}
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 italic tracking-tight">
              Complex Gains.<br /><span className="text-[#C15F3C]">Simple Filing.</span>
            </h2>

            <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto leading-relaxed italic">
              Join 2 lakh+ investors who trust DoStartup AI to file ITR-2
              accurately — in under 10 minutes.
              <span className="block mt-4 text-[#C15F3C] font-black text-xl">
                Compare with ClearTax, Tax2Win, Quicko, H&R Block & TaxSpanner — we're 40% cheaper!
              </span>
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="#pricing"
                className="inline-flex items-center gap-2 bg-[#C15F3C] text-white font-bold text-lg px-10 py-5 rounded-full hover:shadow-2xl hover:shadow-[#C15F3C]/40 hover:-translate-y-1 transition-all duration-150 group"
              >
                🚀 File ITR-2 Free Today
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="#calculator"
                className="inline-flex items-center gap-2 border-2 border-slate-300 text-slate-700 font-semibold text-lg px-10 py-5 rounded-full hover:bg-white hover:border-[#C15F3C] transition-all bg-white/60"
              >
                <Calculator size={20} />
                Try Calculator First →
              </Link>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-slate-500 font-bold">
              <span className="flex items-center gap-2">
                <Shield size={16} className="text-[#C15F3C]" /> 256-bit SSL
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} className="text-[#C15F3C]" /> 10-min filing
              </span>
              <span className="flex items-center gap-2">
                <Users size={16} className="text-[#C15F3C]" /> 2L+ investors
              </span>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
 FOOTER
 ══════════════════════════════════════ */}
        <section className="bg-[#F4F3EE]">
          <DynamicPricingSection category="itr-2-return-filing" />
        </section>
        <FAQAccordion category="itr-2-return-filing" />
        <PopularSearches />
      </main>
      <Footer />
    </>
  );
}
