"use client";

import React, { useState, useCallback } from "react";
import {
  TrendingUp,
  Brain,
  Home,
  Globe,
  HelpCircle,
} from "lucide-react";

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

function calcNewRegimeTax(taxable: number): number {
  const slabs: [number, number][] = [
    [300000, 0],
    [700000, 0.05],
    [1000000, 0.1],
    [1200000, 0.15],
    [1500000, 0.2],
    [Infinity, 0.3],
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

function calcOldRegimeTax(taxable: number, age: AgeGroup): number {
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
  const ltcg = s.ltcg || 0;
  const stcg = s.stcg || 0;
  const hp = s.houseProperty || 0;
  const foreign = s.foreignIncome || 0;

  const ltcgTaxable = Math.max(0, ltcg - 125000);
  const ltcgTax = Math.round(ltcgTaxable * 0.125 * 1.04);
  const stcgTax = Math.round(stcg * 0.2 * 1.04);

  const normalIncome = salary + hp + foreign;
  const normalTaxableNew = Math.max(0, normalIncome - 75000);
  const normalTaxNew = calcNewRegimeTax(normalTaxableNew);
  const totalTaxNew = normalTaxNew + ltcgTax + stcgTax;

  const hraExempt = Math.min(s.hra || 0, salary * 0.5);
  const totalDed = Math.min(s.ded80c || 0, 150000) + Math.min(s.ded80d || 0, 75000) + Math.min(s.homeloan || 0, 200000) + 50000 + hraExempt;
  const normalTaxableOld = Math.max(0, normalIncome - totalDed);
  const normalTaxOld = calcOldRegimeTax(normalTaxableOld, s.age);
  const totalTaxOld = normalTaxOld + ltcgTax + stcgTax;

  const grossTotal = normalIncome + ltcg + stcg;
  const tds = Math.round(salary * 0.1 + stcg * 0.2);
  const bestTax = Math.min(totalTaxNew, totalTaxOld);
  const refund = tds - bestTax;
  const recommendation = totalTaxNew <= totalTaxOld ? "new" : "old";
  const savings = Math.abs(totalTaxNew - totalTaxOld);

  return {
    grossTotal, ltcgTax, stcgTax, normalTaxableNew, normalTaxableOld,
    normalTaxNew, normalTaxOld, totalTaxNew, totalTaxOld, tds, refund,
    recommendation, savings
  };
}

const fmt = (n: number) => "₹" + Math.abs(Math.round(n)).toLocaleString("en-IN");

function NumInput({ label, value, onChange, icon }: { label: string; value: number; onChange: (v: number) => void; icon?: React.ReactNode }) {
  return (
    <div className="mb-4">
      <label className="block text-xs font-semibold text-slate-700 mb-1">{label}</label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">₹</span>
        <input
          type="number" value={value}
          onChange={(e) => onChange(Math.max(0, Number(e.target.value)))}
          className="w-full pl-7 pr-3 py-2 border-2 border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:border-[#C15F3C] transition-colors bg-[#F4F3EE]"
        />
        {icon && <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#C15F3C]/40">{icon}</span>}
      </div>
    </div>
  );
}

export default function Itr2Calculator() {
  const [calc, setCalc] = useState<CalcState>({
    salary: 1200000, hra: 180000, ltcg: 300000, stcg: 80000,
    houseProperty: 180000, foreignIncome: 0, ded80c: 150000,
    ded80d: 50000, homeloan: 150000, age: "below60",
  });

  const upd = (k: keyof CalcState, v: any) => setCalc(p => ({ ...p, [k]: v }));
  const result = runCalc(calc);

  return (
    <section className="bg-[#F4F3EE] py-16 px-4 sm:px-6" id="calculator">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#F4F3EE] rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid lg:grid-cols-[1fr_400px]">
            <div className="p-8 border-r border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <TrendingUp className="text-[#C15F3C]" /> Capital Gains & Income Tax Calculator
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                    <NumInput label="Annual Salary" value={calc.salary} onChange={v => upd("salary", v)} />
                    <NumInput label="Capital Gains (LTCG)" value={calc.ltcg} onChange={v => upd("ltcg", v)} icon={<TrendingUp size={14}/>}/>
                    <NumInput label="Capital Gains (STCG)" value={calc.stcg} onChange={v => upd("stcg", v)} icon={<TrendingUp size={14}/>}/>
                    <NumInput label="House Property Income" value={calc.houseProperty} onChange={v => upd("houseProperty", v)} icon={<Home size={14}/>}/>
                    <NumInput label="Foreign Income" value={calc.foreignIncome} onChange={v => upd("foreignIncome", v)} icon={<Globe size={14}/>}/>
                    <NumInput label="DEDUCTIONS (80C)" value={calc.ded80c} onChange={v => upd("ded80c", v)} />
                </div>
            </div>
            <div className="bg-[#C15F3C]/5 p-8 flex flex-col justify-center text-center">
                 <p className="text-xs font-bold text-[#C15F3C] uppercase mb-2 tracking-widest">Calculated Savings</p>
                 <h4 className="text-5xl font-extrabold text-slate-900 mb-2">{fmt(result.savings)}</h4>
                 <p className="text-slate-500 text-sm mb-6">by optimizing for <span className="font-bold text-[#C15F3C]">{result.recommendation} regime</span></p>
                 <button className="w-full bg-[#C15F3C] text-white font-bold py-4 rounded-2xl hover:shadow-xl transition-all">
                    Get Detailed Tax Report
                 </button>
            </div>
        </div>
      </div>
    </section>
  );
}
