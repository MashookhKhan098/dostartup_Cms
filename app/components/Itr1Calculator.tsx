"use client";

import React, { useState, useCallback } from "react";
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
  ArrowRight,
  ChevronDown,
  ChevronUp,
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
// SMALL SUB-COMPONENTS
// ─────────────────────────────────────────────
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

export default function Itr1Calculator() {
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

  return (
    <section className="bg-[#F4F3EE] py-16 px-4 sm:px-6" id="calculator">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[#C15F3C] text-xs font-bold uppercase mb-2">
            Free Tool
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2F2E2B] mb-2">
            AI Tax Calculator FY 2025-26
          </h2>
          <p className="text-[#6F6B63] text-sm">
            Instantly compare Old vs New Regime and find your exact refund amount.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left - Hero-like AI Steps */}
            <div className="bg-[#2F2E2B]/5 border border-[#E5E2DA] rounded-3xl p-6 hidden lg:block">
                 <div className="flex items-center justify-between mb-5">
                  <span className="font-bold text-slate-900 text-sm">
                    🤖 AI Tax Assistant
                  </span>
                  <span className="bg-[#C15F3C] text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                    Live
                  </span>
                </div>
                {AI_STEPS.map((s, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 py-4 border-b border-slate-200 last:border-0"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl ${s.bg} flex items-center justify-center text-2xl flex-shrink-0 animate-pulse`}
                    >
                      {s.icon}
                    </div>
                    <div>
                      <div className="text-slate-900 font-bold text-base">
                        {s.title}
                      </div>
                      <div className="text-slate-500 text-sm mt-0.5 leading-relaxed">
                        {s.desc}
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Right - Calculator */}
            <div className="bg-[#F4F3EE] rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
                <div className="bg-[#C15F3C] px-6 py-4">
                    <h3 className="font-bold text-white text-lg">🧮 ITR-1 Tax Calculator</h3>
                    <p className="text-white/80 text-xs">Updated for AY 2026-27</p>
                </div>
                <div className="p-6">
                   <div className="grid sm:grid-cols-1 gap-4">
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
                            label="80C Investments (PPF, ELSS, EPF)"
                            value={calc.ded80c}
                            min={0}
                            max={150000}
                            step={5000}
                            onChange={(v) => upd("ded80c", v)}
                        />
                        <SliderRow
                            label="80D Health Insurance"
                            value={calc.ded80d}
                            min={0}
                            max={75000}
                            step={2500}
                            onChange={(v) => upd("ded80d", v)}
                        />
                         <div className="mb-4">
                          <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                            Age Group
                          </label>
                          <select
                            value={calc.age}
                            onChange={(e) => upd("age", e.target.value as AgeGroup)}
                            className="w-full px-3 py-2.5 border-2 border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:border-[#C15F3C]/50 transition-colors bg-[#F4F3EE]"
                          >
                            <option value="below60">Below 60 years</option>
                            <option value="60to80">60–80 years</option>
                            <option value="above80">Above 80 years</option>
                          </select>
                        </div>
                   </div>

                   <div className="mt-8 bg-[#C15F3C]/5 rounded-2xl p-5 border border-[#C15F3C]/20">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-sm font-bold text-slate-700">Best Regime:</span>
                            <span className="bg-[#C15F3C] text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                                {result.recommendation} Regime
                            </span>
                        </div>
                        <div className="flex justify-between items-end">
                            <div>
                                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Total Savings</p>
                                <h4 className="text-3xl font-extrabold text-[#C15F3C]">{fmt(result.savings)}</h4>
                            </div>
                            <button className="bg-[#C15F3C] text-white font-bold px-6 py-2.5 rounded-xl hover:shadow-lg transition-all text-sm">
                                View Full Report
                            </button>
                        </div>
                   </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
