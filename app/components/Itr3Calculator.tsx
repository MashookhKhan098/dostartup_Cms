"use client";

import React, { useState, useCallback } from "react";
import {
  Calculator,
  RefreshCw,
  Zap,
  Briefcase,
  FileText,
  AlertTriangle,
  CheckCircle,
  Brain,
  TrendingDown,
} from "lucide-react";

type AgeGroup = "below60" | "60to80" | "above80";
type BusinessType = "business" | "profession" | "fno";

interface CalcState {
  salary: number;
  businessIncome: number;
  businessExpenses: number;
  capitalGains: number;
  houseProperty: number;
  ded80c: number;
  ded80d: number;
  age: AgeGroup;
  businessType: BusinessType;
}

interface CalcResult {
  grossTotal: number;
  netBusinessIncome: number;
  totalTaxNew: number;
  totalTaxOld: number;
  tds: number;
  advanceTax: number;
  refund: number;
  recommendation: "new" | "old";
  savings: number;
  auditRequired: boolean;
}

function calcNewTax(taxable: number): number {
  const slabs: [number, number][] = [
    [300000, 0], [700000, 0.05], [1000000, 0.1],
    [1200000, 0.15], [1500000, 0.2], [Infinity, 0.3],
  ];
  let tax = 0, prev = 0;
  for (const [limit, rate] of slabs) {
    if (taxable <= prev) break;
    tax += (Math.min(taxable, limit) - prev) * rate;
    prev = limit;
  }
  if (taxable <= 700000) tax = 0;
  return Math.round(tax * 1.04);
}

function calcOldTax(taxable: number, age: AgeGroup): number {
  const exemption = age === "above80" ? 500000 : age === "60to80" ? 300000 : 250000;
  const slabs: [number, number][] = [
    [exemption, 0], [500000, 0.05], [1000000, 0.2], [Infinity, 0.3],
  ];
  let tax = 0, prev = 0;
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
  const revenue = s.businessIncome || 0;
  const expenses = s.businessExpenses || 0;
  const cg = s.capitalGains || 0;
  const hp = s.houseProperty || 0;

  const netBusinessIncome = Math.max(0, revenue - expenses);
  const grossTotal = salary + netBusinessIncome + cg + hp;

  const stdNew = salary > 0 ? 75000 : 0;
  const taxableNew = Math.max(0, grossTotal - stdNew);
  const totalTaxNew = calcNewTax(taxableNew);

  const totalDed = Math.min(s.ded80c || 0, 150000) + Math.min(s.ded80d || 0, 75000) + (salary > 0 ? 50000 : 0);
  const taxableOld = Math.max(0, grossTotal - totalDed);
  const totalTaxOld = calcOldTax(taxableOld, s.age);

  const auditRequired = (s.businessType === "business" && revenue > 10000000) || (s.businessType === "profession" && revenue > 5000000) || (s.businessType === "fno" && revenue > 10000000);
  const tds = Math.round(salary * 0.1);
  const advanceTax = Math.round(Math.min(totalTaxNew, totalTaxOld) * 0.1);
  const bestTax = Math.min(totalTaxNew, totalTaxOld);
  const refund = tds - bestTax;
  const recommendation = totalTaxNew <= totalTaxOld ? "new" : "old";
  const savings = Math.abs(totalTaxNew - totalTaxOld);

  return { grossTotal, netBusinessIncome, totalTaxNew, totalTaxOld, tds, advanceTax, refund, recommendation, savings, auditRequired };
}

const fmt = (n: number) => "₹" + Math.abs(Math.round(n)).toLocaleString("en-IN");

function SliderRow({ label, value, min, max, step, onChange }: { label: string; value: number; min: number; max: number; step: number; onChange: (v: number) => void }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-1">
        <label className="text-xs font-semibold text-black">{label}</label>
        <span className="text-xs font-bold text-[#C15F3C] bg-orange-50 border border-orange-200 px-2 py-0.5 rounded-lg">{fmt(value)}</span>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 rounded-full appearance-none cursor-pointer"
        style={{ background: `linear-gradient(to right, #f97316 0%, #f97316 ${pct}%, #e5e7eb ${pct}%, #e5e7eb 100%)` }}
      />
    </div>
  );
}

export default function Itr3Calculator() {
  const [calc, setCalc] = useState<CalcState>({
    salary: 0, businessIncome: 2500000, businessExpenses: 800000,
    capitalGains: 150000, houseProperty: 0, ded80c: 150000, ded80d: 25000,
    age: "below60", businessType: "profession",
  });

  const upd = (k: keyof CalcState, v: any) => setCalc(p => ({ ...p, [k]: v }));
  const result = runCalc(calc);

  return (
    <section className="bg-[#F4F3EE] py-16 px-4 sm:px-6" id="calculator">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#F4F3EE] rounded-3xl border border-gray-200 shadow-2xl overflow-hidden">
            <div className="bg-[#C15F3C] px-6 py-4 flex items-center justify-between">
                <h3 className="font-bold text-white text-lg">ITR-3 Business Tax Calculator</h3>
                <button onClick={() => setCalc({ salary: 0, businessIncome: 2500000, businessExpenses: 800000, capitalGains: 150000, houseProperty: 0, ded80c: 150000, ded80d: 25000, age: "below60", businessType: "profession" })} className="text-white bg-[#F4F3EE]/20 p-2 rounded-lg hover:bg-[#F4F3EE]/30 transition-all"><RefreshCw size={14}/></button>
            </div>
            <div className="grid lg:grid-cols-2">
                <div className="p-8 border-r border-gray-100">
                    <SliderRow label="Business/Profession Revenue" value={calc.businessIncome} min={0} max={20000000} step={100000} onChange={v => upd("businessIncome", v)} />
                    <SliderRow label="Business Expenses" value={calc.businessExpenses} min={0} max={10000000} step={50000} onChange={v => upd("businessExpenses", v)} />
                    <SliderRow label="Other Income (Salary, CG)" value={calc.salary + calc.capitalGains} min={0} max={5000000} step={50000} onChange={v => upd("salary", v)} />
                </div>
                <div className="bg-[#F4F3EE] p-8 flex flex-col justify-center items-center text-center">
                    <p className="text-xs font-bold text-[#C15F3C] uppercase mb-2 tracking-widest">Potential Tax Savings</p>
                    <h4 className="text-6xl font-extrabold text-[#2F2E2B] mb-2">{fmt(result.savings)}</h4>
                    <p className="text-slate-500 text-sm mb-6">Expert filing for ITR-3 starts from <span className="font-bold text-[#C15F3C]">₹1,499</span></p>
                    <div className={`p-4 rounded-xl border-2 flex items-center gap-2 ${result.auditRequired ? "border-red-200 bg-red-50 text-red-600" : "border-green-200 bg-green-50 text-green-600"}`}>
                        {result.auditRequired ? <AlertTriangle size={16}/> : <CheckCircle size={16}/>}
                        <span className="text-sm font-bold">Tax Audit {result.auditRequired ? "REQUIRED" : "NOT REQUIRED"}</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
