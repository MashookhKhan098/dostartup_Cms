"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import DoStartupPricing from "../components/DoStartupPricing";
import Footer from "../components/Footer";
import {
  ChevronRight,
  ChevronLeft,
  CheckCircle,
  Brain,
  RefreshCw,
  Download,
  Share2,
  ArrowRight,
  User,
  Briefcase,
  Home,
  TrendingUp,
  DollarSign,
  Shield,
  Star,
  Info,
  Zap,
  FileText,
} from "lucide-react";

// ─────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────
type AgeGroup = "below60" | "60to80" | "above80";
type FinancialYear = "2025-26" | "2024-25";

interface Step1Data {
  fy: FinancialYear;
  age: AgeGroup;
}

interface Step2Data {
  basicSalary: number;
  hra: number;
  specialAllowance: number;
  otherAllowance: number;
  rentPaid: number;
  isMetro: boolean;
  housePropertyIncome: number;
  homeLoanInterestSelfOcc: number;
  homeLoanInterestLetOut: number;
  ltcg: number;
  stcg: number;
  otherIncome: number;
  digitalAssets: number;
}

interface Step3Data {
  ded80C: number;
  ded80D_self: number;
  ded80D_parents: number;
  ded80G: number;
  ded80E: number;
  ded80TTA: number;
  nps80CCD: number;
}

interface TaxResult {
  // Old Regime
  oldGrossSalary: number;
  oldHRAExemption: number;
  oldStdDeduction: number;
  oldNetSalary: number;
  oldHouseProperty: number;
  oldCapitalGains: number;
  oldOtherIncome: number;
  oldGrossTotal: number;
  old80C: number;
  old80D: number;
  old80G: number;
  old80E: number;
  old80TTA: number;
  oldNPS: number;
  oldTotalDeductions: number;
  oldTaxableIncome: number;
  oldBaseTax: number;
  oldRebate87A: number;
  oldCess: number;
  oldTotalTax: number;
  // New Regime
  newGrossSalary: number;
  newStdDeduction: number;
  newNetSalary: number;
  newHouseProperty: number;
  newCapitalGains: number;
  newOtherIncome: number;
  newGrossTotal: number;
  newTaxableIncome: number;
  newBaseTax: number;
  newRebate87A: number;
  newCess: number;
  newTotalTax: number;
  // LTCG / STCG / Digital
  ltcgTax: number;
  stcgTax: number;
  digitalTax: number;
  // Recommendation
  recommendation: "old" | "new";
  savings: number;
}

// ─────────────────────────────────────────────
// TAX CALCULATION ENGINE
// ─────────────────────────────────────────────
function calcOldSlab(taxable: number, age: AgeGroup): number {
  const exemption = age === "above80" ? 500000 : age === "60to80" ? 300000 : 250000;
  const slabs: [number, number][] = [
    [exemption, 0], [500000, 0.05], [1000000, 0.2], [Infinity, 0.3],
  ];
  let tax = 0, prev = 0;
  for (const [lim, rate] of slabs) {
    if (taxable <= prev) break;
    tax += (Math.min(taxable, lim) - prev) * rate;
    prev = lim;
  }
  return Math.round(tax);
}

function calcNewSlab(taxable: number): number {
  const slabs: [number, number][] = [
    [300000, 0], [700000, 0.05], [1000000, 0.1],
    [1200000, 0.15], [1500000, 0.2], [Infinity, 0.3],
  ];
  let tax = 0, prev = 0;
  for (const [lim, rate] of slabs) {
    if (taxable <= prev) break;
    tax += (Math.min(taxable, lim) - prev) * rate;
    prev = lim;
  }
  return Math.round(tax);
}

function calcHRAExemption(s2: Step2Data): number {
  const monthly = s2.basicSalary / 12;
  const hra = s2.hra;
  const rent = s2.rentPaid;
  if (rent === 0) return 0;
  const actual = hra;
  const rentExcess = Math.max(0, rent - monthly * 0.1);
  const pct = s2.isMetro ? monthly * 0.5 : monthly * 0.4;
  return Math.min(actual, rentExcess, pct);
}

function compute(s1: Step1Data, s2: Step2Data, s3: Step3Data): TaxResult {
  // ── OLD REGIME ──
  const grossSalary = s2.basicSalary + s2.hra + s2.specialAllowance + s2.otherAllowance;
  const hraExemption = calcHRAExemption(s2);
  const oldStdDed = 50000;
  const oldNetSalary = grossSalary - hraExemption - oldStdDed;

  const hpLoss = Math.min(200000, s2.homeLoanInterestSelfOcc);
  const hpIncome = s2.housePropertyIncome - s2.homeLoanInterestLetOut;
  const oldHouseProperty = hpIncome - hpLoss;

  const ltcgTax = Math.round(Math.max(0, s2.ltcg - 125000) * 0.125 * 1.04);
  const stcgTax = Math.round(s2.stcg * 0.20 * 1.04);
  const digitalTax = Math.round(s2.digitalAssets * 0.30 * 1.04);

  const old80D = Math.min(s3.ded80D_self, 25000) + Math.min(s3.ded80D_parents, 50000);
  const old80C = Math.min(s3.ded80C, 150000);
  const old80TTA = Math.min(s3.ded80TTA, 10000);
  const oldNPS = Math.min(s3.nps80CCD, 50000);
  const oldTotalDeductions = old80C + old80D + s3.ded80G + s3.ded80E + old80TTA + oldNPS;

  const oldGrossTotal = oldNetSalary + oldHouseProperty + s2.otherIncome;
  const oldTaxableIncome = Math.max(0, oldGrossTotal - oldTotalDeductions);
  let oldBaseTax = calcOldSlab(oldTaxableIncome, s1.age);
  const oldRebate87A = oldTaxableIncome <= 500000 ? Math.min(oldBaseTax, 12500) : 0;
  oldBaseTax = Math.max(0, oldBaseTax - oldRebate87A);
  const oldCess = Math.round(oldBaseTax * 0.04);
  const oldTotalTax = oldBaseTax + oldCess + ltcgTax + stcgTax + digitalTax;

  // ── NEW REGIME ──
  const newStdDed = 75000;
  const newNetSalary = grossSalary - newStdDed;
  const newGrossTotal = newNetSalary + s2.otherIncome;
  const newTaxableIncome = Math.max(0, newGrossTotal);
  let newBaseTax = calcNewSlab(newTaxableIncome);
  const newRebate87A = newTaxableIncome <= 700000 ? newBaseTax : 0;
  newBaseTax = Math.max(0, newBaseTax - newRebate87A);
  const newCess = Math.round(newBaseTax * 0.04);
  const newTotalTax = newBaseTax + newCess + ltcgTax + stcgTax + digitalTax;

  const recommendation: "old" | "new" = oldTotalTax <= newTotalTax ? "old" : "new";
  const savings = Math.abs(oldTotalTax - newTotalTax);

  return {
    oldGrossSalary: grossSalary, oldHRAExemption: hraExemption,
    oldStdDeduction: oldStdDed, oldNetSalary,
    oldHouseProperty, oldCapitalGains: s2.ltcg + s2.stcg,
    oldOtherIncome: s2.otherIncome, oldGrossTotal,
    old80C, old80D, old80G: s3.ded80G, old80E: s3.ded80E,
    old80TTA, oldNPS, oldTotalDeductions, oldTaxableIncome,
    oldBaseTax, oldRebate87A, oldCess, oldTotalTax,
    newGrossSalary: grossSalary, newStdDeduction: newStdDed,
    newNetSalary, newHouseProperty: 0,
    newCapitalGains: s2.ltcg + s2.stcg, newOtherIncome: s2.otherIncome,
    newGrossTotal, newTaxableIncome, newBaseTax, newRebate87A,
    newCess, newTotalTax, ltcgTax, stcgTax, digitalTax,
    recommendation, savings,
  };
}

const fmt = (n: number) => "₹" + Math.abs(Math.round(n)).toLocaleString("en-IN");
const fmtK = (n: number) => {
  const abs = Math.abs(Math.round(n));
  if (abs >= 100000) return "₹" + (abs / 100000).toFixed(2) + "L";
  if (abs >= 1000) return "₹" + (abs / 1000).toFixed(1) + "K";
  return "₹" + abs;
};

// ─────────────────────────────────────────────
// SMALL COMPONENTS
// ─────────────────────────────────────────────
function InputField({ label, value, onChange, prefix = "₹", note, max }: {
  label: string; value: number; onChange: (v: number) => void;
  prefix?: string; note?: string; max?: number;
}) {
  return (
    <div className="mb-5">
      <label className="block text-sm font-semibold text-black mb-1">{label}</label>
      {note && <p className="text-xs text-gray-400 mb-1.5">{note}</p>}
      <div className="relative">
        {prefix && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold text-sm">{prefix}</span>}
        <input
          type="number" min={0} max={max} value={value}
          onChange={(e) => onChange(Math.max(0, Number(e.target.value)))}
          className="w-full pl-7 pr-3 py-3 border-2 border-gray-200 rounded-xl text-sm font-medium text-black focus:outline-none focus:border-[#C15F3C] focus:ring-2 focus:ring-[#C15F3C]/10 transition-colors bg-[#F4F3EE]"
        />
      </div>
    </div>
  );
}

function SectionTitle({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-2 mb-5 pb-3 border-b border-gray-100">
      <div className="w-8 h-8 rounded-lg bg-[#F4F3EE] flex items-center justify-center text-[#C15F3C]">{icon}</div>
      <h3 className="font-display font-bold text-black text-base">{title}</h3>
    </div>
  );
}

function ResultLine({ label, value, color = "text-black", bold = false, indent = false }: {
  label: string; value: string; color?: string; bold?: boolean; indent?: boolean;
}) {
  return (
    <div className={`flex justify-between items-center py-2 border-b border-gray-50 last:border-0 ${indent ? "pl-4" : ""}`}>
      <span className={`text-xs ${bold ? "font-bold text-black" : "text-gray-500"}`}>{label}</span>
      <span className={`text-sm font-bold ${color}`}>{value}</span>
    </div>
  );
}

// ─────────────────────────────────────────────
// STEP INDICATOR
// ─────────────────────────────────────────────
function StepIndicator({ current, total }: { current: number; total: number }) {
  const steps = ["Personal Info", "Income Details", "Deductions", "Tax Summary"];
  return (
    <div className="flex items-center justify-center gap-0 mb-8">
      {steps.map((label, i) => {
        const stepNum = i + 1;
        const done = stepNum < current;
        const active = stepNum === current;
        return (
          <div key={label} className="flex items-center">
            <div className="flex flex-col items-center">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all ${done ? "bg-[#C15F3C] border-[#C15F3C] text-white" : active ? "bg-[#F4F3EE] border-[#C15F3C] text-[#C15F3C]" : "bg-[#F4F3EE] border-gray-200 text-gray-400"}`}>
                {done ? <CheckCircle size={16} /> : stepNum}
              </div>
              <span className={`text-[10px] font-semibold mt-1 hidden sm:block ${active ? "text-[#C15F3C]" : done ? "text-[#C15F3C]/60" : "text-gray-400"}`}>
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className={`w-12 sm:w-20 h-0.5 mx-1 mb-4 ${stepNum < current ? "bg-[#C15F3C]" : "bg-gray-200"}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

// Custom Icons
function BarChart3({ size, className }: { size: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  );
}

function Users({ size, className }: { size: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

// ─────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────
export default function TaxCalculatorPage() {
  const [step, setStep] = useState(1);

  const [s1, setS1] = useState<Step1Data>({ fy: "2025-26", age: "below60" });
  const [s2, setS2] = useState<Step2Data>({
    basicSalary: 800000, hra: 120000, specialAllowance: 120000,
    otherAllowance: 0, rentPaid: 120000, isMetro: true,
    housePropertyIncome: 0, homeLoanInterestSelfOcc: 0,
    homeLoanInterestLetOut: 0, ltcg: 0, stcg: 0,
    otherIncome: 20000, digitalAssets: 0,
  });
  const [s3, setS3] = useState<Step3Data>({
    ded80C: 150000, ded80D_self: 25000, ded80D_parents: 0,
    ded80G: 0, ded80E: 0, ded80TTA: 10000, nps80CCD: 0,
  });

  const updS2 = function updateS2<K extends keyof Step2Data>(k: K, v: Step2Data[K]) {
    setS2((p) => ({ ...p, [k]: v }));
  };
  const updS3 = function updateS3<K extends keyof Step3Data>(k: K, v: Step3Data[K]) {
    setS3((p) => ({ ...p, [k]: v }));
  };

  const result = compute(s1, s2, s3);

  const reset = () => {
    setStep(1);
    setS1({ fy: "2025-26", age: "below60" });
    setS2({ basicSalary: 800000, hra: 120000, specialAllowance: 120000, otherAllowance: 0, rentPaid: 120000, isMetro: true, housePropertyIncome: 0, homeLoanInterestSelfOcc: 0, homeLoanInterestLetOut: 0, ltcg: 0, stcg: 0, otherIncome: 20000, digitalAssets: 0 });
    setS3({ ded80C: 150000, ded80D_self: 25000, ded80D_parents: 0, ded80G: 0, ded80E: 0, ded80TTA: 10000, nps80CCD: 0 });
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F4F3EE] font-sans">

        {/* ── PAGE HEADER ── */}
        <div className="bg-[#F4F3EE] border-b border-[#C15F3C]/10 py-3 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#F4F3EE] border border-[#C15F3C]/20 text-[#C15F3C] text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase ">
                  <Zap size={12} /> Free Tool — Updated for Budget 2025
                </div>
                <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-black mb-1">
                  Income Tax Calculator FY 2025-26
                </h1>
                <p className="text-gray-500 text-sm max-w-xl">
                  Calculate your income tax for AY 2026-27. Compare Old vs New regime instantly and see which saves you more money.
                </p>
              </div>
              <div className="flex gap-2">
                <button onClick={reset}
                  className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-[#C15F3C] border border-gray-200 hover:border-[#C15F3C]/50 px-3 py-2 rounded-lg transition-colors">
                  <RefreshCw size={13} /> Reset
                </button>
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mt-4">
              {[
                { icon: <Brain size={13} />, label: "AI-Powered" },
                { icon: <Shield size={13} />, label: "100% Secure" },
                { icon: <Star size={13} className="fill-[#C15F3C]" />, label: "4.9★ Rated" },
                { icon: <Users size={13} />, label: "50L+ Users" },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-1.5 text-xs text-gray-500">
                  <span className="text-[#C15F3C]">{b.icon}</span>{b.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">

          {/* ── STEP INDICATOR ── */}
          <StepIndicator current={step} total={4} />

          <div className="grid lg:grid-cols-[1fr_380px] gap-6 items-start">

            {/* ══════════════════════════ MAIN FORM PANEL ══════════════════════════ */}
            <div className="bg-[#F4F3EE] rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

              {/* ── STEP 1: Personal Info ── */}
              {step === 1 && (
                <div className="p-6 sm:p-8">
                  <SectionTitle icon={<User size={16} />} title="Step 1: Personal Information" />

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-black mb-3">Financial Year</label>
                    <div className="grid grid-cols-2 gap-3">
                      {(["2025-26", "2024-25"] as FinancialYear[]).map((fy) => (
                        <button key={fy} onClick={() => setS1(p => ({ ...p, fy }))}
                          className={`py-3 rounded-xl border-2 text-sm font-semibold transition-all ${s1.fy === fy ? "bg-[#C15F3C] border-[#C15F3C] text-white" : "border-gray-200 text-black hover:border-[#C15F3C]/50"}`}>
                          FY {fy}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-black mb-3">Age Group</label>
                    <div className="grid grid-cols-3 gap-3">
                      {([
                        { val: "below60", label: "Below 60", sub: "General" },
                        { val: "60to80", label: "60 – 80 yrs", sub: "Senior Citizen" },
                        { val: "above80", label: "Above 80", sub: "Super Senior" },
                      ] as { val: AgeGroup; label: string; sub: string }[]).map((opt) => (
                        <button key={opt.val} onClick={() => setS1(p => ({ ...p, age: opt.val }))}
                          className={`py-3 px-2 rounded-xl border-2 text-sm transition-all text-center ${s1.age === opt.val ? "bg-[#C15F3C] border-[#C15F3C] text-white" : "border-gray-200 text-black hover:border-[#C15F3C]/50"}`}>
                          <div className="font-bold">{opt.label}</div>
                          <div className={`text-[10px] mt-0.5 ${s1.age === opt.val ? "text-orange-100" : "text-gray-400"}`}>{opt.sub}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#F4F3EE] border border-[#C15F3C]/10 rounded-xl p-4 mb-6">
                    <div className="flex items-start gap-2">
                      <Info size={15} className="text-[#C15F3C] flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-gray-600">
                        <strong className="text-black">New Regime is Default</strong> for FY 2025-26. You can still opt for Old Regime while filing. This calculator computes both and recommends the better one.
                      </p>
                    </div>
                  </div>

                  <button onClick={() => setStep(2)}
                    className="w-full bg-[#C15F3C] hover:bg-[#C15F3C]/90 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-lg">
                    Go to Next Step <ChevronRight size={18} />
                  </button>
                </div>
              )}

              {/* ── STEP 2: Income Details ── */}
              {step === 2 && (
                <div className="p-6 sm:p-8">
                  <SectionTitle icon={<Briefcase size={16} />} title="Step 2: Income Details" />

                  {/* Salary */}
                  <div className="bg-[#F4F3EE] border border-[#C15F3C]/10 rounded-xl p-4 mb-6">
                    <h4 className="text-xs font-bold text-[#C15F3C] uppercase mb-4">💼 Salary Income</h4>
                    <div className="grid sm:grid-cols-2 gap-x-4">
                      <InputField label="Basic Salary (Annual)" value={s2.basicSalary} onChange={(v) => updS2("basicSalary", v)} />
                      <InputField label="HRA Received (Annual)" value={s2.hra} onChange={(v) => updS2("hra", v)} />
                      <InputField label="Special Allowance (Annual)" value={s2.specialAllowance} onChange={(v) => updS2("specialAllowance", v)} />
                      <InputField label="Other Allowances (Annual)" value={s2.otherAllowance} onChange={(v) => updS2("otherAllowance", v)} />
                      <InputField label="Rent Paid (Annual)" value={s2.rentPaid} onChange={(v) => updS2("rentPaid", v)} note="For HRA exemption calculation" />
                      <div className="mb-5">
                        <label className="block text-sm font-semibold text-black mb-1">City Type</label>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          {[{ val: true, label: "Metro City" }, { val: false, label: "Non-Metro" }].map((opt) => (
                            <button key={String(opt.val)} onClick={() => updS2("isMetro", opt.val)}
                              className={`py-2.5 rounded-lg border-2 text-xs font-semibold transition-all ${s2.isMetro === opt.val ? "bg-[#C15F3C] border-[#C15F3C] text-white" : "border-gray-200 text-black hover:border-[#C15F3C]/50"}`}>
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* House Property */}
                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6">
                    <h4 className="text-xs font-bold text-blue-600 uppercase mb-4">🏠 House Property Income</h4>
                    <div className="grid sm:grid-cols-2 gap-x-4">
                      <InputField label="Rental Income (Annual)" value={s2.housePropertyIncome} onChange={(v) => updS2("housePropertyIncome", v)} />
                      <InputField label="Home Loan Interest — Self Occupied" value={s2.homeLoanInterestSelfOcc} onChange={(v) => updS2("homeLoanInterestSelfOcc", v)} note="Max ₹2L deduction in Old Regime" />
                      <InputField label="Home Loan Interest — Let Out Property" value={s2.homeLoanInterestLetOut} onChange={(v) => updS2("homeLoanInterestLetOut", v)} />
                    </div>
                  </div>

                  {/* Capital Gains & Others */}
                  <div className="bg-purple-50 border border-purple-100 rounded-xl p-4 mb-6">
                    <h4 className="text-xs font-bold text-purple-600 uppercase mb-4">📈 Capital Gains & Other Income</h4>
                    <div className="grid sm:grid-cols-2 gap-x-4">
                      <InputField label="LTCG — Equity / MF" value={s2.ltcg} onChange={(v) => updS2("ltcg", v)} note="Taxed @12.5% above ₹1.25L (Sec 112A)" />
                      <InputField label="STCG — Equity / MF" value={s2.stcg} onChange={(v) => updS2("stcg", v)} note="Taxed @20% (Sec 111A)" />
                      <InputField label="Other Income (Interest, FD, etc.)" value={s2.otherIncome} onChange={(v) => updS2("otherIncome", v)} />
                      <InputField label="Digital Assets (Crypto, NFT)" value={s2.digitalAssets} onChange={(v) => updS2("digitalAssets", v)} note="Taxed @30% flat + cess" />
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button onClick={() => setStep(1)}
                      className="flex items-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-[#C15F3C] border border-gray-200 hover:border-[#C15F3C]/50 px-5 py-3 rounded-xl transition-colors">
                      <ChevronLeft size={16} /> Back
                    </button>
                    <button onClick={() => setStep(3)}
                      className="flex-1 bg-[#C15F3C] hover:bg-[#C15F3C]/90 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-lg">
                      Go to Next Step <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {/* ── STEP 3: Deductions (Old Regime) ── */}
              {step === 3 && (
                <div className="p-6 sm:p-8">
                  <SectionTitle icon={<Shield size={16} />} title="Step 3: Tax Saving Deductions (Old Regime)" />

                  <div className="bg-[#F4F3EE] border border-[#C15F3C]/10 rounded-xl p-3 mb-5 flex items-start gap-2">
                    <Info size={14} className="text-[#C15F3C] flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-gray-600">These deductions apply to the <strong className="text-black">Old Tax Regime only</strong>. They are not available under the New Regime. Enter 0 if not applicable.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-x-4">
                    <InputField
                      label="Section 80C (PPF, ELSS, LIC, EPF)" value={s3.ded80C}
                      onChange={(v) => updS3("ded80C", Math.min(v, 150000))}
                      note="Max: ₹1,50,000" max={150000}
                    />
                    <InputField
                      label="NPS Contribution 80CCD(1B)" value={s3.nps80CCD}
                      onChange={(v) => updS3("nps80CCD", Math.min(v, 50000))}
                      note="Max: ₹50,000 (over 80C limit)" max={50000}
                    />
                    <InputField
                      label="80D — Health Insurance (Self/Family)" value={s3.ded80D_self}
                      onChange={(v) => updS3("ded80D_self", Math.min(v, 25000))}
                      note="Max: ₹25,000" max={25000}
                    />
                    <InputField
                      label="80D — Health Insurance (Parents)" value={s3.ded80D_parents}
                      onChange={(v) => updS3("ded80D_parents", Math.min(v, 50000))}
                      note="Max: ₹25,000 (₹50,000 if parents senior citizen)" max={50000}
                    />
                    <InputField
                      label="80TTA — Savings Account Interest" value={s3.ded80TTA}
                      onChange={(v) => updS3("ded80TTA", Math.min(v, 10000))}
                      note="Max: ₹10,000" max={10000}
                    />
                    <InputField
                      label="80E — Education Loan Interest" value={s3.ded80E}
                      onChange={(v) => updS3("ded80E", v)}
                      note="No upper limit (for 8 years)"
                    />
                    <InputField
                      label="80G — Donations" value={s3.ded80G}
                      onChange={(v) => updS3("ded80G", v)}
                      note="50% or 100% of eligible donations"
                    />
                  </div>

                  <div className="flex gap-3 mt-2">
                    <button onClick={() => setStep(2)}
                      className="flex items-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-[#C15F3C] border border-gray-200 hover:border-[#C15F3C]/50 px-5 py-3 rounded-xl transition-colors">
                      <ChevronLeft size={16} /> Back
                    </button>
                    <button onClick={() => setStep(4)}
                      className="flex-1 bg-[#C15F3C] hover:bg-[#C15F3C]/90 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-lg">
                      Calculate Tax <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {/* ── STEP 4: RESULTS ── */}
              {step === 4 && (
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-6">
                    <SectionTitle icon={<FileText size={16} />} title="Tax Computation Summary" />
                    <button onClick={() => setStep(1)}
                      className="text-xs text-[#C15F3C] font-semibold hover:underline flex items-center gap-1">
                      <RefreshCw size={12} /> Recalculate
                    </button>
                  </div>

                  {/* AI Recommendation Banner */}
                  <div className={`rounded-2xl p-5 mb-6 border-2 text-center ${result.recommendation === "new" ? "bg-green-50 border-green-300" : "bg-[#F4F3EE] border-[#C15F3C]/30"}`}>
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <Brain size={18} className="text-[#C15F3C]" />
                      <span className="text-xs font-bold uppercase text-[#C15F3C]">AI Recommendation</span>
                    </div>
                    <p className="font-display font-extrabold text-xl text-black">
                      {result.recommendation === "new" ? "✨ New Tax Regime saves you more" : "🏛️ Old Tax Regime saves you more"}
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                      You save <strong className="text-[#C15F3C] text-lg">{fmt(result.savings)}</strong> by choosing {result.recommendation === "new" ? "New" : "Old"} Regime
                    </p>
                  </div>

                  {/* Side by side comparison */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    {/* OLD REGIME */}
                    <div className={`rounded-2xl border-2 p-4 ${result.recommendation === "old" ? "border-[#C15F3C] bg-[#C15F3C]/5" : "border-gray-200 bg-[#F4F3EE]"}`}>
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-display font-bold text-black text-sm">🏛️ Old Tax Regime</h4>
                        {result.recommendation === "old" && (
                          <span className="bg-[#C15F3C] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">BETTER</span>
                        )}
                      </div>
                      <ResultLine label="Gross Salary" value={fmt(result.oldGrossSalary)} />
                      <ResultLine label="HRA Exemption" value={`- ${fmt(result.oldHRAExemption)}`} color="text-gray-400" indent />
                      <ResultLine label="Standard Deduction" value={`- ${fmt(result.oldStdDeduction)}`} color="text-gray-400" indent />
                      <ResultLine label="Net Salary Income" value={fmt(result.oldNetSalary)} />
                      <ResultLine label="House Property" value={fmt(result.oldHouseProperty)} color={result.oldHouseProperty < 0 ? "text-red-500" : "text-black"} />
                      <ResultLine label="Other Income" value={fmt(result.oldOtherIncome)} />
                      <ResultLine label="Gross Total Income" value={fmt(result.oldGrossTotal)} bold />
                      <ResultLine label="Total Deductions" value={`- ${fmt(result.oldTotalDeductions)}`} color="text-gray-400" />
                      <ResultLine label="Taxable Income" value={fmt(result.oldTaxableIncome)} bold />
                      <ResultLine label="Income Tax" value={fmt(result.oldBaseTax + result.oldRebate87A)} />
                      {result.oldRebate87A > 0 && <ResultLine label="Rebate u/s 87A" value={`- ${fmt(result.oldRebate87A)}`} color="text-green-600" indent />}
                      <ResultLine label="Health & Ed. Cess (4%)" value={fmt(result.oldCess)} />
                      {result.ltcgTax > 0 && <ResultLine label="LTCG Tax" value={fmt(result.ltcgTax)} />}
                      {result.stcgTax > 0 && <ResultLine label="STCG Tax" value={fmt(result.stcgTax)} />}
                      {result.digitalTax > 0 && <ResultLine label="Digital Assets Tax" value={fmt(result.digitalTax)} />}
                      <div className="mt-2 pt-2 border-t-2 border-[#C15F3C]/20">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-black text-sm">Total Tax</span>
                          <span className={`font-extrabold text-xl ${result.recommendation === "old" ? "text-[#C15F3C]" : "text-black"}`}>{fmt(result.oldTotalTax)}</span>
                        </div>
                      </div>
                    </div>

                    {/* NEW REGIME */}
                    <div className={`rounded-2xl border-2 p-4 ${result.recommendation === "new" ? "border-[#C15F3C] bg-[#C15F3C]/5" : "border-gray-200 bg-[#F4F3EE]"}`}>
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-display font-bold text-black text-sm">✨ New Tax Regime</h4>
                        {result.recommendation === "new" && (
                          <span className="bg-[#C15F3C] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">BETTER</span>
                        )}
                      </div>
                      <ResultLine label="Gross Salary" value={fmt(result.newGrossSalary)} />
                      <ResultLine label="Standard Deduction" value={`- ${fmt(result.newStdDeduction)}`} color="text-gray-400" indent />
                      <ResultLine label="Net Salary Income" value={fmt(result.newNetSalary)} />
                      <ResultLine label="Other Income" value={fmt(result.newOtherIncome)} />
                      <ResultLine label="Gross Total Income" value={fmt(result.newGrossTotal)} bold />
                      <ResultLine label="Deductions" value="₹0 (not available)" color="text-gray-300" />
                      <ResultLine label="Taxable Income" value={fmt(result.newTaxableIncome)} bold />
                      <ResultLine label="Income Tax (new slabs)" value={fmt(result.newBaseTax + result.newRebate87A)} />
                      {result.newRebate87A > 0 && <ResultLine label="Rebate u/s 87A" value={`- ${fmt(result.newRebate87A)}`} color="text-green-600" indent />}
                      <ResultLine label="Health & Ed. Cess (4%)" value={fmt(result.newCess)} />
                      {result.ltcgTax > 0 && <ResultLine label="LTCG Tax" value={fmt(result.ltcgTax)} />}
                      {result.stcgTax > 0 && <ResultLine label="STCG Tax" value={fmt(result.stcgTax)} />}
                      {result.digitalTax > 0 && <ResultLine label="Digital Assets Tax" value={fmt(result.digitalTax)} />}
                      <div className="mt-2 pt-2 border-t-2 border-[#C15F3C]/20">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-black text-sm">Total Tax</span>
                          <span className={`font-extrabold text-xl ${result.recommendation === "new" ? "text-[#C15F3C]" : "text-black"}`}>{fmt(result.newTotalTax)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tax Slabs breakdown */}
                  <div className="bg-[#F4F3EE] rounded-2xl p-4 mb-5">
                    <h4 className="font-bold text-black text-sm mb-3 flex items-center gap-2">
                      <BarChart3 size={15} className="text-[#C15F3C]" /> New Regime Tax Slab Breakdown
                    </h4>
                    {[
                      { range: "Up to ₹3,00,000", rate: "0%", tax: 0 },
                      { range: "₹3L – ₹7L", rate: "5%", tax: Math.round(Math.min(Math.max(0, result.newTaxableIncome - 300000), 400000) * 0.05) },
                      { range: "₹7L – ₹10L", rate: "10%", tax: Math.round(Math.min(Math.max(0, result.newTaxableIncome - 700000), 300000) * 0.10) },
                      { range: "₹10L – ₹12L", rate: "15%", tax: Math.round(Math.min(Math.max(0, result.newTaxableIncome - 1000000), 200000) * 0.15) },
                      { range: "₹12L – ₹15L", rate: "20%", tax: Math.round(Math.min(Math.max(0, result.newTaxableIncome - 1200000), 300000) * 0.20) },
                      { range: "Above ₹15L", rate: "30%", tax: Math.round(Math.max(0, result.newTaxableIncome - 1500000) * 0.30) },
                    ].filter((r) => r.range === "Up to ₹3,00,000" || r.tax > 0).map((s) => (<div key={s.range} className="flex justify-between items-center py-1.5 border-b border-gray-100 last:border-0 text-xs">
                      <span className="text-gray-600">{s.range}</span>
                      <span className="text-gray-400">{s.rate}</span>
                      <span className={`font-bold ${s.tax > 0 ? "text-[#C15F3C]" : "text-gray-300"}`}>{fmt(s.tax)}</span>
                    </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link href="/itr-1-return-filing"
                    className="block bg-[#C15F3C] hover:bg-[#C15F3C]/90 text-white font-bold text-base text-center py-4 rounded-xl transition-all hover:shadow-lg hover:-translate-y-0.5 mb-3">
                    🚀 File Your ITR Now — Use This Tax Data
                  </Link>
                  <button onClick={() => setStep(1)}
                    className="w-full border-2 border-[#C15F3C] text-[#C15F3C] hover:bg-[#C15F3C] hover:text-white font-semibold py-3 rounded-xl transition-all text-sm">
                    <RefreshCw size={14} className="inline mr-2" />Calculate Again
                  </button>
                </div>
              )}
            </div>

            {/* ══════════════════════════ SIDE PANEL ══════════════════════════ */}
            <div className="space-y-4">

              {/* Live Summary Card */}
              <div className="bg-[#F4F3EE] rounded-2xl border border-gray-200 shadow-sm p-5">
                <h3 className="font-display font-bold text-black text-sm mb-4 flex items-center gap-2">
                  <Brain size={15} className="text-[#C15F3C]" /> Live Tax Summary
                </h3>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className={`rounded-xl p-3 text-center border-2 ${result.recommendation === "old" ? "border-[#C15F3C] bg-[#C15F3C]" : "border-gray-200 bg-[#F4F3EE]"}`}>
                    <div className={`text-[10px] font-bold uppercase ${result.recommendation === "old" ? "text-orange-100" : "text-gray-400"}`}>Old Regime</div>
                    <div className={`font-extrabold text-lg mt-0.5 ${result.recommendation === "old" ? "text-white" : "text-black"}`}>{fmtK(result.oldTotalTax)}</div>
                    {result.recommendation === "old" && <div className="text-[10px] text-white font-bold">✓ BETTER</div>}
                  </div>
                  <div className={`rounded-xl p-3 text-center border-2 ${result.recommendation === "new" ? "border-[#C15F3C] bg-[#C15F3C]" : "border-gray-200 bg-[#F4F3EE]"}`}>
                    <div className={`text-[10px] font-bold uppercase ${result.recommendation === "new" ? "text-orange-100" : "text-gray-400"}`}>New Regime</div>
                    <div className={`font-extrabold text-lg mt-0.5 ${result.recommendation === "new" ? "text-white" : "text-black"}`}>{fmtK(result.newTotalTax)}</div>
                    {result.recommendation === "new" && <div className="text-[10px] text-white font-bold">✓ BETTER</div>}
                  </div>
                </div>
                <div className="text-center py-2 bg-[#F4F3EE] rounded-xl border border-[#C15F3C]/10">
                  <p className="text-xs text-gray-500">You save</p>
                  <p className="font-display font-extrabold text-xl text-[#C15F3C]">{fmt(result.savings)}</p>
                  <p className="text-xs text-gray-500">by choosing {result.recommendation === "new" ? "New" : "Old"} Regime</p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-[#F4F3EE] rounded-2xl border border-gray-200 shadow-sm p-5">
                <h3 className="font-display font-bold text-black text-sm mb-3">📊 Quick Stats</h3>
                {[
                  { label: "Gross Total Income", value: fmt(Math.max(result.oldGrossTotal, result.newGrossTotal)) },
                  { label: "Effective Tax Rate (New)", value: result.newGrossTotal > 0 ? ((result.newTotalTax / result.newGrossTotal) * 100).toFixed(1) + "%" : "0%" },
                  { label: "Effective Tax Rate (Old)", value: result.oldGrossTotal > 0 ? ((result.oldTotalTax / result.oldGrossTotal) * 100).toFixed(1) + "%" : "0%" },
                  { label: "Total Deductions (Old)", value: fmt(result.oldTotalDeductions) },
                  { label: "HRA Exemption", value: fmt(result.oldHRAExemption) },
                ].map((s) => (
                  <div key={s.label} className="flex justify-between items-center py-1.5 border-b border-gray-50 last:border-0">
                    <span className="text-xs text-gray-500">{s.label}</span>
                    <span className="text-xs font-bold text-black">{s.value}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Why DoStartup + Ready to File — full-width 2-column row */}
          <div className="mt-4 grid md:grid-cols-2 gap-5">
            {/* Why DoStartup — LEFT */}
            <div className="bg-[#F4F3EE] rounded-2xl border border-gray-200 shadow-sm p-5">
              <h3 className="font-display font-bold text-black text-sm mb-3">Why DoStartup.in?</h3>
              {[
                { icon: "🤖", text: "AI reads Form-16 automatically" },
                { icon: "⚡", text: "File in under 5 minutes" },
                { icon: "🔒", text: "Bank-grade 256-bit SSL" },
                { icon: "📱", text: "Works on mobile & desktop" },
              ].map((f) => (
                <div key={f.text} className="flex items-center gap-2.5 py-1.5 border-b border-gray-50 last:border-0">
                  <span className="text-base">{f.icon}</span>
                  <span className="text-xs text-gray-600">{f.text}</span>
                </div>
              ))}
            </div>

            {/* Ready to File — RIGHT */}
            <div className="bg-[#C15F3C] rounded-2xl p-5 text-center">
              <div className="flex justify-center gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} size={13} className="fill-white text-white" />)}
              </div>
              <h3 className="font-display font-bold text-white text-base mb-1">Ready to File?</h3>
              <p className="text-orange-100 text-xs mb-3">Use this calculation to file your ITR in 5 minutes</p>
              <Link href="/itr-1-return-filing"
                className="block bg-[#F4F3EE] text-[#C15F3C] font-bold text-sm py-2.5 rounded-xl hover:bg-orange-50 transition-colors">
                File ITR Now →
              </Link>
            </div>
          </div>

          {/* ── TAX SLABS REFERENCE ── */}
          <div className="mt-4 grid md:grid-cols-2 gap-5">
            <div className="bg-[#F4F3EE] rounded-2xl border border-gray-200 shadow-sm p-5">
              <h3 className="font-display font-bold text-black text-base mb-4 flex items-center gap-2">
                <TrendingUp size={16} className="text-[#C15F3C]" /> New Regime Tax Slabs FY 2025-26
              </h3>
              <table className="w-full text-xs">
                <thead><tr className="bg-[#C15F3C] text-white"><th className="px-3 py-2 text-left rounded-tl-lg">Income Range</th><th className="px-3 py-2 text-right rounded-tr-lg">Rate</th></tr></thead>
                <tbody>
                  {[["Up to ₹3,00,000", "NIL", true], ["₹3L – ₹7L", "5%", false], ["₹7L – ₹10L", "10%", false], ["₹10L – ₹12L", "15%", false], ["₹12L – ₹15L", "20%", false], ["Above ₹15L", "30%", false]].map(([r, t, nil], i) => (
                    <tr key={String(r)} className={i % 2 === 0 ? "bg-[#F4F3EE]" : "bg-[#F4F3EE]"}>
                      <td className="px-3 py-2 text-gray-700">{r}</td>
                      <td className={`px-3 py-2 text-right font-bold ${nil ? "text-green-600" : "text-black"}`}>{t}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-gray-500 mt-2 bg-[#F4F3EE] p-2 rounded-lg">
                ✅ <strong>87A Rebate:</strong> If taxable income ≤ ₹7L — <strong className="text-[#C15F3C]">Zero tax</strong> under New Regime.
              </p>
            </div>

            <div className="bg-[#F4F3EE] rounded-2xl border border-gray-200 shadow-sm p-5">
              <h3 className="font-display font-bold text-black text-base mb-4 flex items-center gap-2">
                <Shield size={16} className="text-[#C15F3C]" /> Old Regime Tax Slabs FY 2025-26
              </h3>
              <table className="w-full text-xs">
                <thead><tr className="bg-gray-700 text-white"><th className="px-3 py-2 text-left rounded-tl-lg">Income Range</th><th className="px-3 py-2 text-center">Below 60</th><th className="px-3 py-2 text-right rounded-tr-lg">Senior</th></tr></thead>
                <tbody>
                  {[["Up to ₹2.5L", "NIL", "NIL", true], ["₹2.5L – ₹5L", "5%", "5%", false], ["₹5L – ₹10L", "20%", "20%", false], ["Above ₹10L", "30%", "30%", false]].map(([r, b, s, nil], i) => (
                    <tr key={String(r)} className={i % 2 === 0 ? "bg-[#F4F3EE]" : "bg-[#F4F3EE]"}>
                      <td className="px-3 py-2 text-gray-700">{r}</td>
                      <td className={`px-3 py-2 text-center font-bold ${nil ? "text-green-600" : "text-black"}`}>{b}</td>
                      <td className={`px-3 py-2 text-right font-bold ${nil ? "text-green-600" : "text-black"}`}>{s}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ── PRICING SECTION ── */}
        <DoStartupPricing
          title="Simple packages. Transparent pricing."
          subtitle="Registration fees are charged at cost. Upgrade or add services anytime."
          plans={[
            {
              title: "Assisted Tax Filing",
              price: "1,499",
              subtitle: "GST | Govt. fee extra",
              description: "Our experienced accountants manage your end-to-end ITR filing from document review and form identification to tax computation and submission.",
              features: [
                "Document collection & review",
                "ITR form identification",
                "Income computation",
                "Standard deduction & basic deductions (80C, 80D, 80TTA)",
                "Tax liability computation & payable/refund summary",
                "ITR preparation & filing",
                "ITR acknowledgement copy",
              ],
              buttonText: "Start Filing Now",
            },
            {
              title: "CA Assisted Tax Filing",
              price: "2,999",
              subtitle: "GST | Govt. fee extra",
              description: "A qualified Chartered Accountant personally handles your tax return from document review and computation to filing.",
              isPopular: true,
              features: [
                "Dedicated CA assigned to your return",
                "Income from all heads (capital gains, business & profession, foreign income)",
                "Capital gains computation — equity, mutual funds, debt, property",
                "HRA, LTA, perquisites & Form 16 reconciliation",
                "Tax optimisation: deductions, exemptions & regime selection (Old vs New)",
                "Advance tax review & shortfall advisory",
                "Form 26AS / AIS / TIS reconciliation",
                "Priority CA support (chat/call)",
                "Included all deliverables in Assisted Tax Filing",
              ],
              buttonText: "Start Filing Now",
            },
            {
              title: "CA Managed Tax Compliance",
              price: "5,999",
              subtitle: "GST | Govt. fee extra",
              description: "A dedicated Chartered Accountant manages your complete compliance lifecycle — annual tax planning, advance tax, TDS reconciliation, notices & more.",
              features: [
                "Dedicated CA assigned to your return",
                "Annual tax planning session with your CA",
                "Advance tax computation & reminders (all 4 quarters)",
                "Form 16 / Form 16A / TDS reconciliation",
                "DTAA & foreign asset reporting (Schedule FA / FSI)",
                "Income Tax Notice handling & response drafting",
                "Rectification filing (Section 154)",
                "Refund follow-up & status tracking",
                "Year-round CA availability (phone & email)",
                "Compliance calendar with reminders",
                "Included all deliverables in CA Assisted Tax Filing",
              ],
              buttonText: "Start Filing Now",
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
