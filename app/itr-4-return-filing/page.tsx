"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
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
  FileText,
  Briefcase,
  Calculator,
  RefreshCw,
  Target,
  ThumbsUp,
  HelpCircle,
  PieChart,
  Percent,
} from "lucide-react";

// ─────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────
type AgeGroup = "below60" | "60to80" | "above80";
type SchemeType = "44AD" | "44ADA" | "44AE";

interface CalcState {
  schemeType: SchemeType;
  turnover: number;
  digitalReceipts: number;
  salary: number;
  houseProperty: number;
  ded80c: number;
  ded80d: number;
  age: AgeGroup;
}

interface CalcResult {
  presumptiveIncome: number;
  grossTotal: number;
  totalTaxNew: number;
  totalTaxOld: number;
  tds: number;
  refund: number;
  recommendation: "new" | "old";
  savings: number;
  presumptiveRate: number;
  auditRequired: boolean;
}

// ─────────────────────────────────────────────
// PURE TAX CALCULATION — ITR-4 SPECIFIC
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
  let tax = 0,
    prev = 0;
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
  let tax = 0,
    prev = 0;
  for (const [limit, rate] of slabs) {
    if (taxable <= prev) break;
    tax += (Math.min(taxable, limit) - prev) * rate;
    prev = limit;
  }
  if (taxable <= 500000) tax = 0;
  return Math.round(tax * 1.04);
}

function runCalc(s: CalcState): CalcResult {
  const turnover = s.turnover || 0;
  const digital = Math.min(s.digitalReceipts || 0, turnover);
  const cash = turnover - digital;
  const salary = s.salary || 0;
  const hp = s.houseProperty || 0;

  // Presumptive income calculation
  let presumptiveIncome = 0;
  let presumptiveRate = 0;

  if (s.schemeType === "44AD") {
    // 6% on digital receipts, 8% on cash receipts
    presumptiveIncome = Math.round(digital * 0.06 + cash * 0.08);
    presumptiveRate = 8;
  } else if (s.schemeType === "44ADA") {
    // 50% of gross receipts
    presumptiveIncome = Math.round(turnover * 0.5);
    presumptiveRate = 50;
  } else if (s.schemeType === "44AE") {
    // ₹1,000 per ton per month (simplified as 7.5% for calculator)
    presumptiveIncome = Math.round(turnover * 0.075);
    presumptiveRate = 7.5;
  }

  const grossTotal = presumptiveIncome + salary + hp;

  // New Regime
  const stdNew = salary > 0 ? 75000 : 0;
  const taxableNew = Math.max(0, grossTotal - stdNew);
  const totalTaxNew = calcNewTax(taxableNew);

  // Old Regime
  const totalDed =
    Math.min(s.ded80c || 0, 150000) +
    Math.min(s.ded80d || 0, 75000) +
    (salary > 0 ? 50000 : 0);
  const taxableOld = Math.max(0, grossTotal - totalDed);
  const totalTaxOld = calcOldTax(taxableOld, s.age);

  const auditRequired =
    (s.schemeType === "44AD" && turnover > 20000000) ||
    (s.schemeType === "44ADA" && turnover > 7500000) ||
    (s.schemeType === "44AE" && turnover > 10000000);

  const tds = Math.round(salary * 0.1);
  const bestTax = Math.min(totalTaxNew, totalTaxOld);
  const refund = tds - bestTax;
  const recommendation: "new" | "old" =
    totalTaxNew <= totalTaxOld ? "new" : "old";
  const savings = Math.abs(totalTaxNew - totalTaxOld);

  return {
    presumptiveIncome,
    grossTotal,
    totalTaxNew,
    totalTaxOld,
    tds,
    refund,
    recommendation,
    savings,
    presumptiveRate,
    auditRequired,
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
    title: "Turnover Verified from AIS",
    desc: "AI fetched all business receipts — ₹42L in 4 seconds",
    bg: "bg-orange-500/20",
  },
  {
    icon: "💡",
    title: "Presumptive Rate Applied",
    desc: "Section 44AD: 6% digital + 8% cash receipts",
    bg: "bg-orange-500/15",
  },
  {
    icon: "⚖️",
    title: "Regime Comparison Done",
    desc: "Old Regime saves ₹22,400 with your deductions",
    bg: "bg-orange-500/10",
  },
  {
    icon: "✅",
    title: "ITR-4 Ready to File",
    desc: "0 errors • No audit required • Refund: ₹18,600",
    bg: "bg-orange-500/20",
  },
];

const WHY_FEATURES = [
  {
    icon: <Percent size={20} className="text-orange-500" />,
    title: "Auto Presumptive Calculation",
    desc: "AI reads your turnover from AIS/26AS and applies correct 44AD (6%/8%), 44ADA (50%), or 44AE rate instantly.",
  },
  {
    icon: <Brain size={20} className="text-orange-500" />,
    title: "Digital vs Cash Split",
    desc: "Automatically splits receipts into digital (6%) and cash (8%) for Section 44AD to minimize your tax.",
  },
  {
    icon: <Search size={20} className="text-orange-500" />,
    title: "Deduction Maximizer",
    desc: "Finds every 80C, 80D, NPS, HRA deduction available under presumptive scheme to reduce your tax liability.",
  },
  {
    icon: <Shield size={20} className="text-orange-500" />,
    title: "Bank-Grade Security",
    desc: "256-bit SSL + SOC2 certified. Your turnover and income data is encrypted end-to-end and never sold.",
  },
];

const AI_FEATURES = [
  {
    icon: <Percent size={26} />,
    title: "Presumptive Tax Engine",
    desc: "Computes income under 44AD (business), 44ADA (profession), or 44AE (transport) with correct rates automatically.",
  },
  {
    icon: <PieChart size={26} />,
    title: "Digital vs Cash Optimizer",
    desc: "Splits receipts into digital (6% tax) and cash (8% tax) for 44AD filers to ensure minimum presumptive income.",
  },
  {
    icon: <Search size={26} />,
    title: "Deduction Finder",
    desc: "AI identifies all allowed deductions under presumptive scheme — 80C, 80D, NPS, HRA — to minimize final tax.",
  },
  {
    icon: <BarChart3 size={26} />,
    title: "Turnover Auto-Fetch",
    desc: "Fetches your business receipts directly from AIS, 26AS, and GST returns. No manual entry needed.",
  },
  {
    icon: <Bell size={26} />,
    title: "AIS/26AS Reconciler",
    desc: "Matches declared turnover with AIS entries to prevent mismatches that trigger IT notices or scrutiny.",
  },
  {
    icon: <AlertTriangle size={26} />,
    title: "ITR-4 Notice Shield",
    desc: "180+ validation rules — cash receipt limits, turnover caps, and deduction eligibility verified before filing.",
  },
];

const PROCESS_STEPS = [
  { num: "01", icon: "👤", label: "Create Free Account" },
  { num: "02", icon: "📊", label: "Enter Turnover Details" },
  { num: "03", icon: "🤖", label: "AI Applies Presumptive Rate" },
  { num: "04", icon: "✅", label: "Review & Optimize" },
  { num: "05", icon: "🎉", label: "File & Track Refund" },
];

const FAQS = [
  {
    q: "Who should file ITR-4 (Sugam)?",
    a: "ITR-4 is for individuals, HUFs, and firms (other than LLP) opting for presumptive taxation under Section 44AD (business up to ₹2 crore), 44ADA (professionals up to ₹75 lakh), or 44AE (transport operators). Total income must be ≤ ₹50 lakh.",
  },
  {
    q: "What is Section 44AD presumptive taxation?",
    a: "Under Section 44AD, small businesses with turnover up to ₹2 crore can declare income at 8% of turnover (or 6% for digital receipts) without maintaining detailed books of accounts. No tax audit is required if you declare income at or above this rate.",
  },
  {
    q: "What is Section 44ADA for professionals?",
    a: "Section 44ADA applies to specified professionals (doctors, lawyers, CAs, engineers, architects, consultants) with gross receipts up to ₹75 lakh. They can declare 50% of gross receipts as income and skip maintaining books of accounts.",
  },
  {
    q: "What is the difference between ITR-3 and ITR-4?",
    a: "ITR-4 is for those opting for presumptive taxation (44AD/44ADA/44AE) — simpler filing without detailed books. ITR-3 is for those maintaining actual books of accounts and declaring actual profit/loss. F&O traders must always use ITR-3.",
  },
  {
    q: "What is the turnover limit for ITR-4?",
    a: "Section 44AD: ₹2 crore (or ₹3 crore if 95%+ receipts are digital). Section 44ADA: ₹75 lakh (or ₹75 lakh). Section 44AE: unlimited vehicles but ≤ 10 goods vehicles at any time. Total income must not exceed ₹50 lakh.",
  },
  {
    q: "Can I claim deductions under 80C, 80D in ITR-4?",
    a: "Yes. Under the Old Regime, you can claim all deductions (80C, 80D, 80CCD, home loan interest, HRA, etc.) in addition to declaring presumptive income. Our AI identifies every deduction you're eligible for.",
  },
  {
    q: "What is the last date to file ITR-4 for AY 2026-27?",
    a: "The due date for ITR-4 is July 31, 2026. Since presumptive taxation does not require a tax audit, there is no extended deadline. Belated returns can be filed till December 31, 2026 with a late fee under Section 234F.",
  },
  {
    q: "Can I opt out of presumptive taxation scheme?",
    a: "Yes, but if you opt out of 44AD, you cannot re-enter the scheme for 5 consecutive years. If you opt out of 44ADA, you can re-enter next year. DoStartup's AI advises whether presumptive taxation is beneficial for your specific situation.",
  },
];

const SCHEME_TABLE = [
  {
    section: "44AD",
    who: "Small Business Owners",
    limit: "Turnover ≤ ₹2 Crore (₹3Cr if 95% digital)",
    rate: "6% (digital) / 8% (cash)",
    audit: "Not required",
  },
  {
    section: "44ADA",
    who: "Specified Professionals",
    limit: "Gross Receipts ≤ ₹75 Lakh",
    rate: "50% of gross receipts",
    audit: "Not required",
  },
  {
    section: "44AE",
    who: "Transport Operators",
    limit: "≤ 10 goods vehicles",
    rate: "₹1,000/ton/month (HGV) or ₹7,500/vehicle/month",
    audit: "Not required",
  },
];

const TESTIMONIALS = [
  {
    name: "Suresh Patel",
    location: "Surat",
    rating: 5,
    text: "I run a small grocery business. DoStartup computed my 44AD income automatically — 6% on digital, 8% on cash. Got ₹22,000 refund in 15 days. Super easy!",
    role: "Small Business Owner",
  },
  {
    name: "Dr. Priya Nair",
    location: "Kochi",
    rating: 5,
    text: "As a doctor with clinic income under 44ADA, I just entered my receipts and DoStartup filed my ITR-4 in 10 minutes. Saved ₹18,000 vs my previous CA.",
    role: "Doctor (44ADA)",
  },
  {
    name: "Ramesh Yadav",
    location: "Lucknow",
    rating: 5,
    text: "Transport business with 4 trucks. DoStartup calculated 44AE income perfectly, found 80C deductions I missed, and filed everything in one go. Excellent!",
    role: "Transport Operator",
  },
];

const PROFESSIONALS_44ADA = [
  "Doctor",
  "Lawyer",
  "CA / CMA / CS",
  "Architect",
  "Engineer",
  "Interior Designer",
  "Technical Consultant",
  "Film Artist",
];

// ─────────────────────────────────────────────
// SLIDER COMPONENT
// ─────────────────────────────────────────────
function SliderRow({
  label,
  value,
  min,
  max,
  step,
  onChange,
  note,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  note?: string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-1">
        <label className="text-xs font-semibold text-black">{label}</label>
        <span className="text-xs font-bold text-orange-500 bg-orange-50 border border-orange-200 px-2 py-0.5 rounded-lg">
          {fmt(value)}
        </span>
      </div>
      {note && <p className="text-[10px] text-gray-400 mb-1.5">{note}</p>}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 rounded-full appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, #f97316 0%, #f97316 ${pct}%, #e5e7eb ${pct}%, #e5e7eb 100%)`,
        }}
      />
      <div className="flex justify-between text-[10px] text-gray-400 mt-1">
        <span>{fmt(min)}</span>
        <span>{fmt(max)}</span>
      </div>
    </div>
  );
}

function StatusCell({ val }: { val: boolean | string }) {
  if (val === true)
    return <CheckCircle size={16} className="text-orange-500 mx-auto" />;
  if (val === false)
    return <XCircle size={16} className="text-gray-300 mx-auto" />;
  if (val === "~")
    return <span className="text-orange-400 font-bold text-sm">~</span>;
  return <span className="font-bold text-sm text-orange-500">{val}</span>;
}

function ResultRow({
  label,
  value,
  color = "text-black",
  tooltip,
}: {
  label: string;
  value: string;
  color?: string;
  tooltip?: string;
}) {
  return (
    <div className="flex justify-between items-center py-2.5 border-b border-gray-100 last:border-0 group">
      <span className="text-xs text-gray-500 flex items-center gap-1">
        {label}
        {tooltip && (
          <HelpCircle
            size={11}
            className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity"
          />
        )}
      </span>
      <span className={`font-bold text-sm ${color}`}>{value}</span>
    </div>
  );
}

// ─────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────
export default function ITR4Page() {
  const [calc, setCalc] = useState<CalcState>({
    schemeType: "44AD",
    turnover: 4000000,
    digitalReceipts: 2500000,
    salary: 0,
    houseProperty: 0,
    ded80c: 150000,
    ded80d: 25000,
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

  const itrPlans = [
    {
      title: "Assisted Tax Filing",
      price: "1,499",
      description: "Standard ITR-4 preparation and filing for small business owners and professionals under presumptive schemes.",
      features: [
        "44AD / 44ADA Scheme Filing",
        "Business Income Computation",
        "Check for Audit Requirement",
        "Expert Support for Small Biz",
        "e-Filing and Acknowledgement"
      ]
    },
    {
      title: "CA Assisted Tax Filing",
      price: "2,999",
      isPopular: true,
      description: "Dedicated CA support for optimized presumptive taxation, multiple sources, and AIS/26AS reconciliation.",
      features: [
        "All features of Assisted Filing",
        "AI Expense Maximizer (44AD)",
        "Calculation of Capital Gains",
        "AIS/26AS Deep Reconciliation",
        "Dedicated CA Review",
        "Priority Support"
      ]
    },
    {
      title: "CA Managed Tax Compliance",
      price: "4,999",
      description: "Full compliance management including advance tax computation, notice response, and dedicated CA advisor.",
      features: [
        "All features of CA Assisted Filing",
        "IT Notice Handling & Response",
        "Advance Tax Support (4 Quarters)",
        "Year-round CA Availability",
        "Refund follow-up & tracking",
        "Compliance Calendar Reminders"
      ]
    },
  ];

  const resetCalc = () =>
    setCalc({
      schemeType: "44AD",
      turnover: 4000000,
      digitalReceipts: 2500000,
      salary: 0,
      houseProperty: 0,
      ded80c: 150000,
      ded80d: 25000,
      age: "below60",
    });

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F4F3EE] font-sans">
        {/* ════════════════════════════════════
        HERO
        ════════════════════════════════════ */}
        <section className="bg-[#F4F3EE] relative overflow-hidden pt-8 pb-20">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#C15F3C 1px,transparent 1px),linear-gradient(90deg,#C15F3C 1px,transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-orange-100 rounded-full blur-3xl pointer-events-none opacity-60" />
          <div className="absolute left-0 bottom-0 w-[300px] h-[300px] bg-[#F4F3EE] rounded-full blur-2xl pointer-events-none opacity-80" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#F4F3EE] border border-orange-200 text-[#C15F3C] text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase ">
                <span className="w-2 h-2 bg-[#C15F3C] rounded-full animate-pulse" />
                AY 2026-27 · ITR-4 Filing Open
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black leading-[1.08] mb-5">
                File <span className="text-[#C15F3C]">ITR-4</span> Online
                <br />
                <span className="text-[#C15F3C]">Presumptive Tax</span> Made
                Easy
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
                For small business owners, doctors, CAs, lawyers & transport
                operators. No books needed — our AI applies the correct 44AD,
                44ADA, or 44AE rate and files in minutes.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link
                  href="#pricing"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3.5 rounded-full text-base transition-all hover:shadow-xl hover:shadow-orange-100 hover:-translate-y-0.5 inline-flex items-center gap-2 group"
                >
                  🚀 Start Filing ITR-4
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link
                  href="#calculator"
                  className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold px-7 py-3.5 rounded-full text-base transition-all"
                >
                  Try Tax Calculator →
                </Link>
              </div>
            </div>

            {/* Right — AI Card */}
            <div className="lg:pl-4">
              <div className="bg-[#F4F3EE] border-2 border-orange-100 rounded-3xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-5">
                  <span className="font-display font-bold text-black text-sm flex items-center gap-2">
                    <Brain size={18} className="text-orange-500" />
                    🤖 AI ITR-4 Assistant — Live
                  </span>
                  <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    ACTIVE
                  </span>
                </div>

                {AI_STEPS.map((s, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-0"
                  >
                    <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-xl flex-shrink-0">
                      {s.icon}
                    </div>
                    <div>
                      <div className="text-black font-semibold text-sm">
                        {s.title}
                      </div>
                      <div className="text-gray-500 text-xs mt-0.5">
                        {s.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════
        ELIGIBILITY
        ════════════════════════════════════ */}
        <section className="bg-[#F4F3EE] py-6 px-4 sm:px-6" id="eligibility">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-orange-500 text-xs font-bold uppercase mb-2">
                Eligibility
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-black mb-3">
                Who Should File ITR-4?
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm">
                ITR-4 (Sugam) is for small business owners, professionals &
                transport operators opting for presumptive taxation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#F4F3EE] border-2 border-orange-500 rounded-2xl p-6 hover:shadow-lg transition-all">
                <div className="flex items-center gap-2 font-bold text-black mb-4 text-base">
                  <CheckCircle size={20} className="text-orange-500" /> File
                  ITR-4 If You Are:
                </div>
                <ul className="space-y-2.5">
                  {[
                    "Small business owner (Sec 44AD)",
                    "Professional (Sec 44ADA)",
                    "Transport operator (Sec 44AE)",
                    "Income up to ₹50 lakh",
                    "Choose presumptive taxation scheme",
                  ].map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-black">
                      <span className="text-orange-500 mt-0.5 flex-shrink-0 font-bold">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#F4F3EE] border-2 border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all">
                <div className="flex items-center gap-2 font-bold text-black mb-4 text-base">
                  <AlertTriangle size={20} className="text-orange-500" /> NOT
                  ITR-4 If:
                </div>
                <ul className="space-y-2.5">
                  {[
                    "Business turnover > ₹2 crore",
                    "Professional income > ₹75 lakh",
                    "Capital gains",
                    "Foreign income source",
                  ].map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-black">
                      <span className="text-orange-500 mt-0.5 flex-shrink-0 font-bold">
                        ✗
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════
        WHY DOSTARTUP
        ════════════════════════════════════ */}
        <section className="bg-[#F4F3EE] py-6 px-4 sm:px-6" id="compare">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-orange-500 text-xs font-bold uppercase mb-2">
                Why Choose Us
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-black mb-3">
                Better Than Major Platforms
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-3">
                {WHY_FEATURES.map((f) => (
                  <div
                    key={f.title}
                    className="flex gap-4 p-4 bg-[#F4F3EE] border border-gray-200 rounded-2xl hover:border-orange-500 transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      {f.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-black text-sm mb-0.5">
                        {f.title}
                      </div>
                      <div className="text-gray-500 text-xs leading-relaxed">
                        {f.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-[#F4F3EE]">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-orange-500">
                      <th className="px-3 py-3 text-left font-bold text-xs text-white">
                        Feature
                      </th>
                      <th className="px-2 py-3 text-center font-bold text-xs text-white">
                        DoStartup
                      </th>
                      <th className="px-2 py-3 text-center font-bold text-xs text-orange-100">
                        Competitors
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: "Presumptive Tax Engine", d: true, c: true },
                      { feature: "Digital/Cash Split", d: true, c: false },
                      { feature: "AI Deduction Tool", d: true, c: false },
                      { feature: "Price", d: "₹699", c: "₹999+" },
                    ].map((row, i) => (
                      <tr
                        key={row.feature}
                        className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-[#F4F3EE]" : "bg-[#F4F3EE]"}`}
                      >
                        <td className="px-3 py-3 text-xs">{row.feature}</td>
                        <td className="px-2 py-3 text-center">
                          <StatusCell val={row.d} />
                        </td>
                        <td className="px-2 py-3 text-center">
                          <StatusCell val={row.c} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════
        CALCULATOR
        ════════════════════════════════════ */}
        <section className="bg-[#F4F3EE] py-6 px-4 sm:px-6" id="calculator">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-orange-500 text-xs font-bold uppercase mb-2">
                Free Tool
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-black mb-2">
                ITR-4 Tax Calculator FY 2025-26
              </h2>
            </div>

            <div className="bg-[#F4F3EE] rounded-3xl border border-gray-200 shadow-2xl overflow-hidden">
              <div className="bg-orange-500 px-6 py-4 flex items-center justify-between">
                <h3 className="font-display font-extrabold text-white text-lg">
                  ITR-4 Calculator
                </h3>
                <button
                  onClick={resetCalc}
                  className="text-white bg-[#F4F3EE]/20 px-3 py-1 rounded-full text-xs font-bold"
                >
                  Reset
                </button>
              </div>

              <div className="grid lg:grid-cols-2">
                <div className="p-6 border-b lg:border-r border-gray-100">
                  <div className="mb-5">
                    <label className="block text-xs font-semibold mb-1.5">
                      Select Scheme
                    </label>
                    <select
                      value={calc.schemeType}
                      onChange={(e) =>
                        upd("schemeType", e.target.value as SchemeType)
                      }
                      className="w-full p-2.5 border rounded-xl"
                    >
                      <option value="44AD">44AD (Business)</option>
                      <option value="44ADA">44ADA (Professionals)</option>
                      <option value="44AE">44AE (Transport)</option>
                    </select>
                  </div>
                  <SliderRow
                    label="Total Turnover (₹)"
                    value={calc.turnover}
                    min={0}
                    max={20000000}
                    step={100000}
                    onChange={(v) => upd("turnover", v)}
                  />
                  <SliderRow
                    label="Salary Income (₹)"
                    value={calc.salary}
                    min={0}
                    max={2000000}
                    step={50000}
                    onChange={(v) => upd("salary", v)}
                  />
                  <SliderRow
                    label="80C Deductions"
                    value={calc.ded80c}
                    min={0}
                    max={150000}
                    step={5000}
                    onChange={(v) => upd("ded80c", v)}
                  />
                </div>

                <div className="p-6 bg-orange-50/30">
                  <h4 className="font-display font-bold text-base mb-5">
                    Your Tax Summary
                  </h4>
                  <div className="bg-[#F4F3EE] rounded-2xl border p-4 mb-4">
                    <ResultRow
                      label="Gross Total Income"
                      value={fmt(result.grossTotal)}
                    />
                    <ResultRow
                      label="Presumptive Income"
                      value={fmt(result.presumptiveIncome)}
                    />
                    <ResultRow
                      label="Tax (New Regime)"
                      value={fmt(result.totalTaxNew)}
                      color="text-orange-500"
                    />
                    <ResultRow
                      label="Tax (Old Regime)"
                      value={fmt(result.totalTaxOld)}
                      color="text-orange-500"
                    />
                    <ResultRow
                      label="Est. Refund"
                      value={fmt(result.refund)}
                      color="text-orange-500"
                    />
                  </div>
                  <div className="bg-orange-500 text-white p-4 rounded-2xl text-center">
                    <p className="text-xs font-bold">AI BEST CHOICE</p>
                    <p className="text-lg font-bold">
                      {result.recommendation === "new"
                        ? "New Regime"
                        : "Old Regime"}
                    </p>
                    <p className="text-sm">Save {fmt(result.savings)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════
        PRICING
        ════════════════════════════════════ */}
        <section id="pricing">
          <DoStartupPricing plans={itrPlans} />
        </section>

        {/* ════════════════════════════════════
        FAQ
        ════════════════════════════════════ */}
        <section className="bg-[#F4F3EE] py-6 px-4 sm:px-6" id="faq">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-orange-500 text-xs font-bold uppercase mb-2">
                FAQ
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-black">
                Questions Answered
              </h2>
            </div>
            <div className="space-y-3 mb-10">
              {FAQS.map((faq, i) => (
                <div key={i} className="border-2 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex justify-between p-5 text-left"
                  >
                    <span className="font-semibold text-sm">{faq.q}</span>
                    {openFaq === i ? (
                      <ChevronUp size={17} />
                    ) : (
                      <ChevronDown size={17} />
                    )}
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-4 border-t pt-3 bg-orange-50/20 text-gray-600 text-sm">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <AddQuestionModal category="itr-4-return-filing" />
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
