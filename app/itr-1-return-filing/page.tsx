"use client";

import { useState, useCallback } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DoStartupPricing from "../components/DoStartupPricing";
import AddQuestionModal from "../components/AddQuestionModal";
import {
  CheckCircle,
  XCircle,
  Brain,
  Zap,
  Shield,
  Smartphone,
  Search,
  BarChart3,
  Bell,
  MessageCircle,
  AlertTriangle,
  Star,
  ChevronDown,
  ChevronUp,
  ArrowRight,
} from "lucide-react";

// ─────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────
type AgeGroup = "below60" | "60to80" | "above80";

interface CalcState {
  salary: number;
  hra: number;
  ded80c: number;
  ded80d: number;
  homeloan: number;
  interest: number;
  age: AgeGroup;
}

interface CalcResult {
  grossTotal: number;
  newTaxable: number;
  newTax: number;
  oldTaxable: number;
  oldTax: number;
  tds: number;
  refund: number;
  recommendation: "new" | "old";
  savings: number;
}

// ─────────────────────────────────────────────
// PURE TAX CALCULATION
// ─────────────────────────────────────────────
function calcNewTax(taxable: number): number {
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

function calcOldTax(taxable: number, age: AgeGroup): number {
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
  const grossTotal = (s.salary || 0) + (s.interest || 0);

  // New Regime
  const newTaxable = Math.max(0, grossTotal - 75000);
  const newTax = calcNewTax(newTaxable);

  // Old Regime
  const hraExempt = Math.min(s.hra || 0, (s.salary || 0) * 0.5);
  const totalDed =
    Math.min(s.ded80c || 0, 150000) +
    Math.min(s.ded80d || 0, 75000) +
    Math.min(s.homeloan || 0, 200000) +
    50000 + // std deduction
    hraExempt +
    Math.min(s.interest || 0, 10000);
  const oldTaxable = Math.max(0, grossTotal - totalDed);
  const oldTax = calcOldTax(oldTaxable, s.age);

  const tds = Math.round((s.salary || 0) * 0.1);
  const bestTax = Math.min(newTax, oldTax);
  const refund = tds - bestTax;
  const recommendation: "new" | "old" = newTax <= oldTax ? "new" : "old";
  const savings = Math.abs(newTax - oldTax);

  return {
    grossTotal,
    newTaxable,
    newTax,
    oldTaxable,
    oldTax,
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
    icon: "📄",
    title: "Form-16 Uploaded & Read",
    desc: "AI extracted 12 fields in 3 seconds",
    bg: "bg-[#C15F3C]/20",
  },
  {
    icon: "🔍",
    title: "Deductions Optimized",
    desc: "Found ₹1,42,500 in missed deductions",
    bg: "bg-[#C15F3C]/15",
  },
  {
    icon: "⚖️",
    title: "Regime Comparison Done",
    desc: "New Regime saves you ₹18,200 more",
    bg: "bg-[#C15F3C]/10",
  },
  {
    icon: "✅",
    title: "ITR-1 Ready to File",
    desc: "Zero errors • Refund: ₹32,600",
    bg: "bg-[#C15F3C]/25",
  },
];

const WHY_FEATURES = [
  {
    icon: <Brain size={20} className="text-[#C15F3C]" />,
    title: "Conversational AI Filing",
    desc: "Talk to our AI like a CA — smart questions, auto-fill every field.",
  },
  {
    icon: <Zap size={20} className="text-[#C15F3C]" />,
    title: "5-Minute Filing Guarantee",
    desc: "Upload Form-16 → AI fills ITR → Review → File. Done.",
  },
  {
    icon: <Shield size={20} className="text-[#C15F3C]" />,
    title: "Bank-Grade Security",
    desc: "256-bit SSL + SOC2 certified. Your data is never sold.",
  },
  {
    icon: <Smartphone size={20} className="text-[#C15F3C]" />,
    title: "Works on Any Device",
    desc: "Web, Android & iOS. File anywhere, anytime.",
  },
];

const COMPARE = [
  { feature: "Conversational AI", d: true, c: "~", t: "~" },
  { feature: "Free Filing (ITR-1)", d: true, c: true, t: false },
  { feature: "AI Deduction Finder", d: true, c: "~", t: true },
  { feature: "Regime Optimizer", d: true, c: true, t: true },
  { feature: "WhatsApp Filing", d: true, c: true, t: false },
  { feature: "Price (Basic Plan)", d: "₹299", c: "₹499", t: "₹699" },
];

const AI_FEATURES = [
  {
    icon: <Brain size={26} />,
    title: "AI Form-16 Reader",
    desc: "Upload any Form-16 PDF or image. AI extracts all income, TDS & deduction data instantly with 99.7% accuracy.",
  },
  {
    icon: <Search size={26} />,
    title: "Smart Deduction Engine",
    desc: "Proactively suggests 80C, 80D, HRA, LTA deductions you may have missed — maximizing your refund.",
  },
  {
    icon: <BarChart3 size={26} />,
    title: "Regime Optimizer",
    desc: "Instantly compares Old vs New regime with your exact numbers to recommend the tax-saving option.",
  },
  {
    icon: <Bell size={26} />,
    title: "AIS/26AS Reconciler",
    desc: "Auto-fetches your AIS and reconciles with Form-16. Flags any TDS mismatches before you file.",
  },
  {
    icon: <MessageCircle size={26} />,
    title: "24×7 AI Tax Chat",
    desc: "Ask any tax question in Hindi or English. Available on web, WhatsApp, and app — anytime.",
  },
  {
    icon: <AlertTriangle size={26} />,
    title: "Notice Shield",
    desc: "AI pre-validates your return against 200+ IT rules to catch issues that trigger notices.",
  },
];

const PROCESS_STEPS = [
  { num: "01", icon: "👤", label: "Create Free Account" },
  { num: "02", icon: "📄", label: "Upload Form-16" },
  { num: "03", icon: "🤖", label: "AI Auto-Fills ITR" },
  { num: "04", icon: "✅", label: "Review & Confirm" },
  { num: "05", icon: "🎉", label: "Filed! Track Refund" },
];

const FAQS = [
  {
    q: "Who should file ITR-1 (Sahaj)?",
    a: "ITR-1 is for resident individuals with total income up to ₹50 lakh from salary/pension, one house property, and other sources like interest. It cannot be filed if you have capital gains, business income, or are a director in a company.",
  },
  {
    q: "What is the last date for AY 2026-27?",
    a: "The due date is July 31, 2026. Filing after the due date attracts a late fee of up to ₹5,000 under Section 234F. Belated returns can be filed till December 31, 2026.",
  },
  {
    q: "Is DoStartup.in safe? How is data protected?",
    a: "Yes. DoStartup.in uses 256-bit SSL encryption, is SOC2 compliant, and is a registered e-Return Intermediary (ERI) with the Income Tax Department. Your data is never sold to third parties.",
  },
  {
    q: "What documents do I need to file ITR-1?",
    a: "You primarily need your Form-16 (from employer), PAN card, Aadhaar, bank account details, and interest certificates. Our AI guides you if anything is missing.",
  },
  {
    q: "Can I file ITR-1 without Form-16?",
    a: "Yes! Our AI can help you file even without Form-16 using your salary slips, AIS data, and manually entered income details. We auto-fetch your 26AS for TDS verification.",
  },
  {
    q: "How long does it take to get a tax refund?",
    a: "Tax refunds are typically processed within 15–45 days of e-verification. DoStartup provides a real-time refund tracker inside your dashboard.",
  },
];

const TAX_SLABS = [
  { slab: "Up to ₹3,00,000", rate: "NIL", nil: true },
  { slab: "₹3,00,001 – ₹7,00,000", rate: "5%", nil: false },
  { slab: "₹7,00,001 – ₹10,00,000", rate: "10%", nil: false },
  { slab: "₹10,00,001 – ₹12,00,000", rate: "15%", nil: false },
  { slab: "₹12,00,001 – ₹15,00,000", rate: "20%", nil: false },
  { slab: "Above ₹15,00,000", rate: "30%", nil: false },
];

// ─────────────────────────────────────────────
// SMALL SUB-COMPONENTS
// ─────────────────────────────────────────────
function StatusCell({ val }: { val: boolean | string }) {
  if (val === true)
    return <CheckCircle size={16} className="text-[#C15F3C] mx-auto" />;
  if (val === false)
    return <XCircle size={16} className="text-slate-300 mx-auto" />;
  if (val === "~")
    return <span className="text-[#C15F3C]/70 font-bold text-sm">~</span>;
  return <span className="font-bold text-sm text-slate-800">{val}</span>;
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
  return (
    <div className="mb-5">
      <div className="flex justify-between items-center mb-1.5">
        <label className="text-xs font-semibold text-slate-600">{label}</label>
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
          background: `linear-gradient(to right, #C15F3C 0%, #C15F3C ${((value - min) / (max - min)) * 100}%, #C15F3C40 ${((value - min) / (max - min)) * 100}%, #C15F3C40 100%)`,
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
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="mb-5">
      <label className="block text-xs font-semibold text-slate-600 mb-1.5">
        {label}
      </label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">
          ₹
        </span>
        <input
          type="number"
          min={0}
          value={value}
          onChange={(e) => onChange(Math.max(0, Number(e.target.value)))}
          className="w-full pl-7 pr-3 py-2.5 border-2 border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:border-[#C15F3C]/50 transition-colors bg-[#F4F3EE]"
        />
      </div>
    </div>
  );
}

function ResultRow({
  label,
  value,
  color = "text-slate-800",
}: {
  label: string;
  value: string;
  color?: string;
}) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-[#C15F3C]/10 last:border-0">
      <span className="text-xs text-slate-500">{label}</span>
      <span className={`font-bold text-sm ${color}`}>{value}</span>
    </div>
  );
}

// ─────────────────────────────────────────────
// MAIN PAGE COMPONENT
// ─────────────────────────────────────────────
export default function ITR1Page() {
  // Calculator state
  const [calc, setCalc] = useState<CalcState>({
    salary: 800000,
    hra: 120000,
    ded80c: 120000,
    ded80d: 25000,
    homeloan: 0,
    interest: 15000,
    age: "below60",
  });
  const upd = useCallback(
    function update<K extends keyof CalcState>(k: K, v: CalcState[K]) {
      setCalc((p) => ({ ...p, [k]: v }));
    },
    [],
  );
  const result = runCalc(calc);

  // FAQ open state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const itrPlans = [
    {
      title: "Assisted Tax Filing",
      price: "999",
      description: "Standard ITR-1 preparation and filing for salaried individuals with one house property.",
      features: [
        "Income from Salary & Rent",
        "Form 16/AIS Reconciliation",
        "80C/80D Deduction Review",
        "Expert Support for Salaried",
        "e-Filing and Acknowledgement"
      ]
    },
    {
      title: "CA Assisted Tax Filing",
      price: "1,999",
      isPopular: true,
      description: "Dedicated CA support for tax optimization, multiple sources, and complex AIS/26AS reconciliation.",
      features: [
        "All features of Assisted Filing",
        "Tax Optimization & Review",
        "Interest & Other Income Support",
        "AIS/26AS Deep Reconciliation",
        "Relief under Section 89(1)",
        "Priority CA Support"
      ]
    },
    {
      title: "CA Managed Tax Compliance",
      price: "3,999",
      description: "Complete peace of mind with notice handling, rectification filing, and year-round CA support.",
      features: [
        "All features of CA Assisted Filing",
        "IT Notice Handling & Response",
        "Rectification Filing (Sec 154)",
        "Year-round CA Availability",
        "Refund Follow-up & Tracking",
        "Expert Tax Planning Advice"
      ]
    },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F4F3EE] font-sans">
        {/* ══════════════════════════════════════
        HERO
        ══════════════════════════════════════ */}
        <section className="bg-slate-900 relative overflow-hidden pt-8 pb-20">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-[#C15F3C]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute left-0 bottom-0 w-[300px] h-[300px] bg-[#C15F3C]/8 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#C15F3C]/15 border border-[#C15F3C]/30 text-[#C15F3C] text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase ">
                <span className="w-2 h-2 bg-[#C15F3C] rounded-full animate-pulse" />
                AY 2026-27 Filing Now Open
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] mb-5">
                File <span className="text-[#C15F3C]">ITR-1</span> Online
                <br />
                Powered by{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C15F3C] to-[#C15F3C]/60">
                  AI
                </span>
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg">
                India's smartest income tax filing platform. Our AI reads your
                Form-16, finds every deduction, picks the best tax regime, and
                files in under 5 minutes.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                <a
                  href="#pricing"
                  className="bg-[#C15F3C] hover:bg-[#C15F3C]/90 text-white font-bold px-7 py-3.5 rounded-full text-base transition-all hover:shadow-2xl hover:shadow-[#C15F3C]/30 hover:-translate-y-0.5 inline-flex items-center gap-2"
                >
                  🚀 Start Filing Free <ArrowRight size={16} />
                </a>
                <a
                  href="#calculator"
                  className="border border-white/20 hover:border-white/50 text-white font-semibold px-7 py-3.5 rounded-full text-base transition-all hover:bg-[#F4F3EE]/5"
                >
                  Try Tax Calculator →
                </a>
              </div>
              <div className="flex gap-8 flex-wrap">
                {[
                  ["5L+", "Returns Filed"],
                  ["₹47Cr+", "Refunds Processed"],
                  ["4.9★", "Google Rating"],
                ].map(([num, lbl]) => (
                  <div key={lbl}>
                    <div className="font-display text-2xl font-extrabold text-white">
                      {num}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">{lbl}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — AI card */}
            <div className="lg:pl-4">
              <div className="bg-[#F4F3EE]/6 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-5">
                  <span className="font-display font-bold text-white text-sm">
                    🤖 AI Tax Assistant — Live
                  </span>
                  <span className="bg-[#C15F3C] text-white text-xs font-bold px-3 py-1 rounded-full">
                    ACTIVE
                  </span>
                </div>
                {AI_STEPS.map((s, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 py-3 border-b border-white/8 last:border-0"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center text-xl flex-shrink-0`}
                    >
                      {s.icon}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">
                        {s.title}
                      </div>
                      <div className="text-slate-400 text-xs mt-0.5">
                        {s.desc}
                      </div>
                    </div>
                  </div>
                ))}
                <div className="mt-4 bg-[#F4F3EE]/8 rounded-xl p-4">
                  <div className="flex justify-between text-xs text-slate-400 mb-2">
                    <span>Filing Progress</span>
                    <span className="font-bold text-[#C15F3C]">73%</span>
                  </div>
                  <div className="h-2 bg-[#F4F3EE]/10 rounded-full overflow-hidden">
                    <div className="h-full w-[73%] bg-gradient-to-r from-[#C15F3C] to-[#C15F3C]/60 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
        WHO CAN FILE + ELIGIBILITY
        ══════════════════════════════════════ */}
        <section className="bg-[#F4F3EE] py-6 px-4 sm:px-6" id="eligibility">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-[#C15F3C] text-xs font-bold uppercase mb-2">
                Eligibility
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
                Who Can File ITR-1?
              </h2>
              <p className="text-slate-500 max-w-lg mx-auto text-sm">
                ITR-1 (Sahaj) is for resident salaried individuals. Check your
                eligibility below.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#F4F3EE] border-2 border-[#C15F3C]/20 rounded-2xl p-6">
                <div className="flex items-center gap-2 font-bold text-[#C15F3C] mb-4 text-base">
                  <CheckCircle size={20} /> CAN File ITR-1 If You Have:
                </div>
                <ul className="space-y-2.5">
                  {[
                    "Total income up to ₹50 lakh",
                    "Income from salary or pension",
                    "Income from one house property",
                    "Interest income (savings, FD)",
                    "Agricultural income up to ₹5,000",
                    "Resident Indian (not NRI/RNOR)",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm text-[#C15F3C]/80"
                    >
                      <span className="text-[#C15F3C] mt-0.5 flex-shrink-0 font-bold">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#F4F3EE]/50 border-2 border-slate-200 rounded-2xl p-6 opacity-70">
                <div className="flex items-center gap-2 font-bold text-slate-600 mb-4 text-base">
                  <AlertTriangle size={20} /> CANNOT File ITR-1 If You Have:
                </div>
                <ul className="space-y-2.5">
                  {[
                    "Business or profession income",
                    "Capital gains (stocks, property)",
                    "More than one house property",
                    "Income from foreign sources",
                    "Agricultural income > ₹5,000",
                    "Director in a company or unlisted shares holder",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm text-slate-500"
                    >
                      <span className="text-slate-400 mt-0.5 flex-shrink-0 font-bold">
                        ✗
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Tax Slabs */}
            <div className="bg-[#F4F3EE] border border-[#C15F3C]/20 rounded-2xl p-6">
              <h3 className="font-display font-bold text-slate-900 text-lg mb-4">
                📊 Income Tax Slabs FY 2025-26 (New Regime — Default)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#C15F3C] text-white">
                      <th className="px-4 py-2.5 text-left rounded-tl-xl font-bold">
                        Income Slab
                      </th>
                      <th className="px-4 py-2.5 text-right rounded-tr-xl font-bold">
                        Tax Rate
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {TAX_SLABS.map((s, i) => (
                      <tr
                        key={s.slab}
                        className={i % 2 === 0 ? "bg-[#F4F3EE]" : "bg-[#F4F3EE]/60"}
                      >
                        <td className="px-4 py-2.5 text-slate-700">{s.slab}</td>
                        <td
                          className={`px-4 py-2.5 text-right font-bold ${s.nil ? "text-[#C15F3C]" : "text-slate-900"}`}
                        >
                          {s.rate}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 mt-3">
                ✅ <strong>87A Rebate:</strong> If total income ≤ ₹7 lakh under
                New Regime — <strong>Zero tax payable.</strong> With ₹75,000
                standard deduction, effective nil tax up to ₹12 lakh for most
                salaried employees.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
        WHY DOSTARTUP + COMPARE
        ══════════════════════════════════════ */}
        <section className="bg-[#F4F3EE] py-6 px-4 sm:px-6" id="compare">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[#C15F3C] text-xs font-bold uppercase mb-2">
                Why Choose Us
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3 leading-tight">
                Better Than ClearTax,
                <br />
                TaxBuddy & EZTax
              </h2>
              <p className="text-slate-500 mb-8 max-w-md text-sm leading-relaxed">
                We studied every competitor and built what they missed — a truly
                AI-first experience at the lowest price in India.
              </p>
              <div className="space-y-3">
                {WHY_FEATURES.map((f) => (
                  <div
                    key={f.title}
                    className="flex gap-4 p-4 bg-[#F4F3EE] border border-slate-100 rounded-2xl hover:border-[#C15F3C] hover:translate-x-1 transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 bg-[#F4F3EE] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#C15F3C]/10 transition-colors">
                      {f.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm mb-0.5">
                        {f.title}
                      </div>
                      <div className="text-slate-500 text-xs leading-relaxed">
                        {f.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Compare table */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-[#F4F3EE]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-900">
                    <th className="px-4 py-3 text-left text-white font-bold text-xs w-[38%]">
                      Feature
                    </th>
                    <th className="px-3 py-3 text-center text-[#C15F3C] font-bold text-xs">
                      DoStartup
                    </th>
                    <th className="px-3 py-3 text-center text-slate-400 font-bold text-xs">
                      ClearTax
                    </th>
                    <th className="px-3 py-3 text-center text-slate-400 font-bold text-xs">
                      TaxBuddy
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-[#F4F3EE]/30" : "bg-[#F4F3EE]"}`}
                    >
                      <td className="px-4 py-3 font-medium text-slate-700 text-xs">
                        {row.feature}
                      </td>
                      <td className="px-3 py-3 text-center">
                        <StatusCell val={row.d} />
                      </td>
                      <td className="px-3 py-3 text-center">
                        <StatusCell val={row.c} />
                      </td>
                      <td className="px-3 py-3 text-center">
                        <StatusCell val={row.t} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
        AI FEATURES
        ══════════════════════════════════════ */}
        <section
          className="bg-slate-900 py-6 px-4 sm:px-6 relative overflow-hidden"
          id="features"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C15F3C]/8 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-[#C15F3C] text-xs font-bold uppercase mb-2">
                AI Technology
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-3">
                Powered by Advanced AI
              </h2>
              <p className="text-slate-400 max-w-lg mx-auto text-sm">
                DoStartup's AI engine trained on 10 lakh+ Indian tax scenarios —
                built specifically for Indian taxation.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {AI_FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="bg-[#F4F3EE]/5 border border-white/10 rounded-2xl p-5 hover:-translate-y-1.5 hover:border-[#C15F3C]/40 transition-all duration-200 group"
                >
                  <div className="text-[#C15F3C] mb-3 group-hover:text-[#C15F3C]/80 transition-colors">
                    {f.icon}
                  </div>
                  <div className="font-display font-bold text-white text-base mb-2">
                    {f.title}
                  </div>
                  <div className="text-slate-400 text-sm leading-relaxed">
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
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[#C15F3C] text-xs font-bold uppercase mb-2">
                How It Works
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900">
                File ITR-1 in 5 Simple Steps
              </h2>
            </div>
            <div className="relative">
              <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#C15F3C]/30 to-[#C15F3C]/60 z-0" />
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
                {PROCESS_STEPS.map((s) => (
                  <div key={s.num} className="text-center group">
                    <div className="w-14 h-14 rounded-full bg-[#F4F3EE] border-2 border-[#C15F3C]/20 flex items-center justify-center text-2xl mx-auto mb-3 shadow-md group-hover:border-[#C15F3C] group-hover:bg-[#C15F3C]/10 transition-all duration-200">
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
          </div>
        </section>

        {/* ══════════════════════════════════════
        TAX CALCULATOR
        ══════════════════════════════════════ */}
        <section className="bg-[#F4F3EE] py-6 px-4 sm:px-6" id="calculator">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-[#C15F3C] text-xs font-bold uppercase mb-2">
                Free Tool
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">
                AI Tax Calculator FY 2025-26
              </h2>
              <p className="text-slate-500 text-sm">
                Instantly compare Old vs New Regime and find your exact refund
                amount.
              </p>
            </div>

            <div className="bg-[#F4F3EE] rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-[#C15F3C] to-[#C15F3C]/90 px-6 py-4 flex items-center justify-between flex-wrap gap-3">
                <div>
                  <h3 className="font-display font-extrabold text-white text-lg">
                    🧮 ITR-1 Tax Calculator
                  </h3>
                  <p className="text-[#F4F3EE] text-xs mt-0.5">
                    AY 2026-27 | Updated for Budget 2025
                  </p>
                </div>
                <span className="bg-[#F4F3EE]/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase ">
                  AI Powered
                </span>
              </div>

              <div className="grid lg:grid-cols-2">
                <div className="p-6 border-b lg:border-b-0 lg:border-r border-slate-100">
                  <h4 className="font-display font-bold text-slate-900 text-base mb-5">
                    📝 Enter Your Details
                  </h4>
                  <NumInput
                    label="Annual Gross Salary (₹)"
                    value={calc.salary}
                    onChange={(v) => upd("salary", v)}
                  />
                  <NumInput
                    label="HRA Received (₹) — for Old Regime"
                    value={calc.hra}
                    onChange={(v) => upd("hra", v)}
                  />
                  <SliderRow
                    label="80C Investments (PPF, ELSS, LIC, EPF) — Max ₹1,50,000"
                    value={calc.ded80c}
                    min={0}
                    max={150000}
                    step={5000}
                    onChange={(v) => upd("ded80c", v)}
                  />
                  <SliderRow
                    label="80D Health Insurance Premium — Max ₹75,000"
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
                  <NumInput
                    label="Other Interest Income (Savings / FD)"
                    value={calc.interest}
                    onChange={(v) => upd("interest", v)}
                  />
                  <div className="mb-2">
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                      Age Group
                    </label>
                    <select
                      value={calc.age}
                      onChange={(e) => upd("age", e.target.value as AgeGroup)}
                      className="w-full px-3 py-2.5 border-2 border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:border-[#C15F3C]/50 transition-colors bg-[#F4F3EE]"
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

                <div className="p-6 bg-[#C15F3C]/5">
                  <h4 className="font-display font-bold text-slate-900 text-base mb-5">
                    📊 Your Tax Summary
                  </h4>
                  <div className="bg-[#F4F3EE] rounded-2xl border border-slate-200 p-4 mb-4 shadow-sm">
                    <ResultRow
                      label="Gross Total Income"
                      value={fmt(result.grossTotal)}
                    />
                    <ResultRow
                      label="Taxable (New Regime)"
                      value={fmt(result.newTaxable)}
                      color="text-[#C15F3C]"
                    />
                    <ResultRow
                      label="Tax + Cess (New Regime)"
                      value={fmt(result.newTax)}
                      color="text-[#C15F3C]"
                    />
                    <ResultRow
                      label="Taxable (Old Regime)"
                      value={fmt(result.oldTaxable)}
                      color="text-[#C15F3C]"
                    />
                    <ResultRow
                      label="Tax + Cess (Old Regime)"
                      value={fmt(result.oldTax)}
                      color="text-[#C15F3C]"
                    />
                    <ResultRow
                      label="Est. TDS Deducted (10%)"
                      value={fmt(result.tds)}
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
                        result.refund >= 0 ? "text-[#C15F3C]" : "text-slate-800"
                      }
                    />
                  </div>
                  <div
                    className={`rounded-2xl p-4 border-2 text-center mb-4 ${result.recommendation === "new" ? "bg-[#C15F3C]/5 border-[#C15F3C]/30" : "bg-[#F4F3EE] border-slate-200"}`}
                  >
                    <div
                      className={`text-xs font-bold uppercase mb-1 ${result.recommendation === "new" ? "text-[#C15F3C]" : "text-slate-500"}`}
                    >
                      🤖 AI Recommendation
                    </div>
                    <div className="font-display font-bold text-slate-900 text-base">
                      {result.recommendation === "new"
                        ? "✨ New Regime is better for you"
                        : "🏛 Old Regime is better for you"}
                    </div>
                    <div
                      className={`font-extrabold text-2xl mt-1 ${result.recommendation === "new" ? "text-[#C15F3C]" : "text-slate-700"}`}
                    >
                      Save {fmt(result.savings)} more
                    </div>
                  </div>
                  <a
                    href="#pricing"
                    className="block bg-[#C15F3C] hover:bg-[#C15F3C]/90 text-white font-bold text-sm text-center py-3.5 rounded-2xl transition-all hover:shadow-lg hover:shadow-[#C15F3C]/20 hover:-translate-y-0.5"
                  >
                    🚀 File ITR-1 Now — Use This Data
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
        PRICING
        ══════════════════════════════════════ */}
        <section id="pricing">
          <DoStartupPricing plans={itrPlans} />
        </section>

        {/* ══════════════════════════════════════
        FAQ
        ══════════════════════════════════════ */}
        <section className="bg-[#F4F3EE] py-6 px-4 sm:px-6" id="faq">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-[#C15F3C] text-xs font-bold uppercase mb-2">
                FAQ
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <div
                  key={i}
                  className={`bg-[#F4F3EE] border-2 rounded-2xl overflow-hidden transition-all duration-200 ${openFaq === i ? "border-orange-400" : "border-slate-100"}`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex justify-between items-start gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-semibold text-sm text-slate-800 leading-snug">
                      {faq.q}
                    </span>
                    {openFaq === i ? (
                      <ChevronUp
                        size={17}
                        className="text-orange-500 flex-shrink-0 mt-0.5"
                      />
                    ) : (
                      <ChevronDown
                        size={17}
                        className="text-orange-500 flex-shrink-0 mt-0.5"
                      />
                    )}
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-4 border-t border-orange-100 pt-3">
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <AddQuestionModal category="itr-1-return-filing" />
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-orange-500 to-orange-700 py-6 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-0.5 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-white fill-white" />
              ))}
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Stop Overpaying. Start Filing Smart.
            </h2>
            <p className="text-orange-100 text-lg mb-8">
              Join 5 lakh+ Indians who file ITR-1 smarter with DoStartup's AI —
              in under 5 minutes.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 bg-[#F4F3EE] text-orange-600 font-bold text-base px-8 py-4 rounded-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-150"
              >
                🚀 File ITR-1 Free Today <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
