"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
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
 Home,
 Briefcase,
 Calculator,
 RefreshCw,
 Target,
 ThumbsUp,
 HelpCircle,
 Building2,
 Layers,
 PieChart,
 BookOpen,
 UserCheck,
 Scale,
} from "lucide-react";

// ─────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────
type AgeGroup = "below60" | "60to80" | "above80";
type EntityType = "partnership" | "llp" | "aop" | "boi" | "trust" | "estate";

interface CalcState {
 entityType: EntityType;
 businessIncome: number;
 businessExpenses: number;
 capitalGains: number;
 otherIncome: number;
 partnerSalary: number;
 partnerInterest: number;
 ded80c: number;
 ded80g: number;
}

interface CalcResult {
 grossTotal: number;
 netBusinessIncome: number;
 partnerDeductions: number;
 taxableIncome: number;
 totalTax: number;
 surcharge: number;
 cess: number;
 tds: number;
 refund: number;
 auditRequired: boolean;
 flatTaxRate: number;
}

// ─────────────────────────────────────────────
// TAX CALCULATION — ITR-5 SPECIFIC
// ─────────────────────────────────────────────
function runCalc(s: CalcState): CalcResult {
 const revenue = s.businessIncome || 0;
 const expenses = s.businessExpenses || 0;
 const cg = s.capitalGains || 0;
 const other = s.otherIncome || 0;
 const partnerSalary = s.partnerSalary || 0;
 const partnerInterest = Math.min(s.partnerInterest || 0, revenue * 0.12);

 const netBusinessIncome = Math.max(0, revenue - expenses);
 const partnerDeductions = Math.min(partnerSalary + partnerInterest, netBusinessIncome);
 const grossTotal = netBusinessIncome + cg + other;
 const taxableIncome = Math.max(0, grossTotal - partnerDeductions - Math.min(s.ded80c || 0, 150000) - Math.min(s.ded80g || 0, grossTotal * 0.1));

 // Flat rate taxation for firms/LLPs = 30%
 let flatTaxRate = 30;
 let baseTax = 0;

 if (s.entityType === "trust" || s.entityType === "aop" || s.entityType === "boi") {
 // Slab rates for AOP/BOI/Trust
 const slabs: [number, number][] = [
 [250000, 0], [500000, 0.05], [1000000, 0.2], [Infinity, 0.3],
 ];
 let prev = 0;
 for (const [limit, rate] of slabs) {
 if (taxableIncome <= prev) break;
 baseTax += (Math.min(taxableIncome, limit) - prev) * rate;
 prev = limit;
 }
 flatTaxRate = 0;
 } else {
 // Partnership / LLP / Estate = 30% flat
 baseTax = taxableIncome * 0.30;
 flatTaxRate = 30;
 }

 const surcharge = taxableIncome > 10000000 ? baseTax * 0.12 : taxableIncome > 1000000 ? baseTax * 0.10 : 0;
 const totalBeforeCess = baseTax + surcharge;
 const cess = totalBeforeCess * 0.04;
 const totalTax = Math.round(totalBeforeCess + cess);

 const auditRequired = revenue > 10000000;
 const tds = Math.round(revenue * 0.02);
 const refund = tds - totalTax;

 return {
 grossTotal, netBusinessIncome, partnerDeductions,
 taxableIncome, totalTax, surcharge: Math.round(surcharge),
 cess: Math.round(cess), tds, refund, auditRequired, flatTaxRate,
 };
}

const fmt = (n: number) => "₹" + Math.abs(Math.round(n)).toLocaleString("en-IN");

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const AI_STEPS = [
 { icon: "📋", title: "Firm P&L & Balance Sheet Read", desc: "AI extracted all accounts from Tally in 6 seconds", bg: "bg-orange-500/20" },
 { icon: "👥", title: "Partner Salary & Interest Verified", desc: "Deductions within Section 40(b) limits applied", bg: "bg-orange-500/15" },
 { icon: "🏦", title: "Audit Requirement Checked", desc: "Turnover ₹8.2Cr — tax audit required by Oct 31", bg: "bg-orange-500/10" },
 { icon: "✅", title: "ITR-5 Ready to File", desc: "0 errors • Surcharge computed • Tax: ₹14,82,400", bg: "bg-orange-500/20" },
];

const WHY_FEATURES = [
 { icon: <BookOpen size={20} className="text-orange-500" />, title: "Auto Books Import", desc: "Imports Tally, Zoho Books, QuickBooks P&L and Balance Sheet. AI maps all accounts to correct ITR-5 schedules." },
 { icon: <UserCheck size={20} className="text-orange-500" />, title: "Partner Salary Optimizer", desc: "Automatically computes maximum allowable partner salary under Section 40(b) to minimize firm's taxable income." },
 { icon: <Scale size={20} className="text-orange-500" />, title: "Tax Audit End-to-End", desc: "For firms with turnover > ₹1 crore, our empanelled CAs handle Form 3CA/3CB/3CD audit and filing." },
 { icon: <Shield size={20} className="text-orange-500" />, title: "Bank-Grade Security", desc: "256-bit SSL + SOC2 certified. Your firm's financial data is encrypted end-to-end and never sold." },
];

const AI_FEATURES = [
 { icon: <BookOpen size={26} />, title: "Books Auto-Import", desc: "Upload Tally XML, Zoho Books CSV, or QuickBooks P&L. AI maps every account to correct ITR-5 schedule automatically." },
 { icon: <UserCheck size={26} />, title: "Partner Salary & Interest", desc: "Computes maximum allowable partner salary (Sec 40(b)) and interest (12% p.a.) to maximize firm deductions." },
 { icon: <PieChart size={26} />, title: "Depreciation Calculator", desc: "Computes WDV and SLM depreciation for all firm assets. Auto-fills Schedule DPM, DEP, and DOE in ITR-5." },
 { icon: <Layers size={26} />, title: "Multi-Entity Support", desc: "Handles Partnership Firms, LLPs, AOPs, BOIs, Trusts, Estates, and Investment Funds in a single platform." },
 { icon: <Bell size={26} />, title: "AIS/26AS Reconciler", desc: "Matches all TDS credits, advance tax, and business receipts in AIS against firm returns to prevent notices." },
 { icon: <AlertTriangle size={26} />, title: "ITR-5 Notice Shield", desc: "280+ validation rules — partner transactions, related party, high-value receipts, and audit disclosures verified." },
];

const PROCESS_STEPS = [
 { num: "01", icon: "🏢", label: "Register Firm / Entity" },
 { num: "02", icon: "📋", label: "Upload P&L & Balance Sheet" },
 { num: "03", icon: "🤖", label: "AI Fills All Schedules" },
 { num: "04", icon: "✅", label: "CA Reviews & Approves" },
 { num: "05", icon: "🎉", label: "File & Get Acknowledgment" },
];

const PLANS = [
 {
 name: "Self File",
 price: "₹1,999",
 period: "/ filing",
 desc: "For small partnership firms & LLPs with simple income",
 features: [
 { text: "P&L & Balance Sheet import", ok: true },
 { text: "Partner salary/interest calc", ok: true },
 { text: "Depreciation calculation", ok: true },
 { text: "e-File to IT Dept", ok: true },
 { text: "Tax audit support", ok: false },
 ],
 cta: "Start Filing",
 featured: false,
 },
 {
 name: "AI Pro",
 price: "₹2,999",
 period: "/ filing",
 desc: "Best for active firms, LLPs & AOPs with multiple income sources",
 features: [
 { text: "Everything in Self File", ok: true },
 { text: "AI partner salary optimizer", ok: true },
 { text: "Capital gains computation", ok: true },
 { text: "AIS deep reconciliation", ok: true },
 { text: "Notice Shield pre-check", ok: true },
 ],
 cta: "Get AI Pro",
 featured: true,
 badge: "POPULAR",
 },
 {
 name: "CA Expert",
 price: "₹5,999",
 period: "/ filing",
 desc: "Full CA support + Tax Audit for complex entities",
 features: [
 { text: "Everything in AI Pro", ok: true },
 { text: "Dedicated CA assigned", ok: true },
 { text: "Tax audit (3CA/3CB/3CD)", ok: true },
 { text: "Trust / AOP special handling", ok: true },
 { text: "Notice response support", ok: true },
 ],
 cta: "Hire a CA",
 featured: false,
 },
];

const FAQS = [
 { q: "Who should file ITR-5?", a: "ITR-5 is filed by firms (partnership firms), LLPs (Limited Liability Partnerships), AOPs (Association of Persons), BOIs (Body of Individuals), artificial juridical persons, estates of deceased persons, and investment funds. Individual partners file their own ITR-2/3 for their share of profit." },
 { q: "What is the tax rate for a Partnership Firm / LLP in India?", a: "Partnership firms and LLPs are taxed at a flat rate of 30% on their total income, plus 10% surcharge if income exceeds ₹1 crore, plus 4% health and education cess. There is no basic exemption limit or slab benefit for firms." },
 { q: "What is Section 40(b) — partner salary and interest?", a: "Section 40(b) allows a partnership firm to deduct partner salary and interest as business expenses, subject to limits. Interest is capped at 12% per annum. Salary deduction: ₹3 lakh or 90% of book profit (whichever is higher) for first ₹3L profit, 60% for the balance. Our AI computes this automatically." },
 { q: "When is a tax audit mandatory for ITR-5?", a: "Tax audit under Section 44AB is mandatory if: (1) Business turnover exceeds ₹1 crore (₹10 crore if 95% digital transactions), (2) Professional receipts exceed ₹50 lakh, or (3) Profit is declared below presumptive rate. Audit deadline is October 31, 2026 for AY 2026-27." },
 { q: "Can an LLP file ITR-5?", a: "Yes. LLPs file ITR-5. The LLP pays tax at 30% flat rate on its income. Individual partners then include their share of LLP profit in their personal returns (ITR-2 or ITR-3) as income from partnership, which is exempt from tax in the partners' hands to avoid double taxation." },
 { q: "What is the last date to file ITR-5 for AY 2026-27?", a: "Non-audit cases: July 31, 2026. Tax audit cases: October 31, 2026. Belated returns can be filed till December 31, 2026 with a late fee of ₹1,000–₹10,000 under Section 234F depending on income." },
 { q: "How is trust income taxed under ITR-5?", a: "Trusts registered under Section 12A/12AB are exempt from tax on income applied to charitable purposes. Unregistered trusts or those with business income file ITR-5 and are taxed at maximum marginal rate (30%). Our CA Expert plan handles Section 12A/80G registrations separately." },
 { q: "Does DoStartup support filing for AOPs and BOIs?", a: "Yes. AOPs (Association of Persons) and BOIs (Body of Individuals) file ITR-5. Tax is computed at either individual slab rates or maximum marginal rate depending on membership. DoStartup AI handles both scenarios and selects the most favorable tax computation automatically." },
];

const ENTITY_TABLE = [
 { entity: "Partnership Firm", tax: "30% flat", surcharge: "10% if income > ₹1Cr", audit: "> ₹1Cr turnover", dueDate: "Jul 31 / Oct 31" },
 { entity: "LLP", tax: "30% flat", surcharge: "10% if income > ₹1Cr", audit: "> ₹1Cr turnover", dueDate: "Jul 31 / Oct 31" },
 { entity: "AOP / BOI", tax: "Slab or MMR", surcharge: "Applicable", audit: "> ₹1Cr turnover", dueDate: "Jul 31 / Oct 31" },
 { entity: "Registered Trust", tax: "Exempt (Sec 12A)", surcharge: "N/A", audit: "If required", dueDate: "Jul 31 / Oct 31" },
 { entity: "Estate of Deceased", tax: "Slab rates", surcharge: "If applicable", audit: "If required", dueDate: "Jul 31" },
];

const TESTIMONIALS = [
 { name: "Rajiv & Sons Firm", location: "Delhi", rating: 5, text: "Our partnership firm has 4 partners. DoStartup computed partner salary under 40(b) perfectly, imported from Tally, and filed ITR-5 with audit. Saved ₹45,000 in CA fees!", role: "Partnership Firm" },
 { name: "TechVenture LLP", location: "Bangalore", rating: 5, text: "Our LLP had complex capital gains and multiple partners. DoStartup handled everything — depreciation, partner interest, and the ITR-5 was filed error-free in 2 days.", role: "LLP (3 Partners)" },
 { name: "Heritage Traders AOP", location: "Ahmedabad", rating: 5, text: "As an AOP with 6 members, tax computation was confusing. DoStartup's AI chose between slab rates and MMR, saved us ₹82,000 in tax liability. Outstanding platform!", role: "AOP Member" },
];

// ─────────────────────────────────────────────
// SLIDER COMPONENT
// ─────────────────────────────────────────────
function SliderRow({
 label, value, min, max, step, onChange, note,
}: {
 label: string; value: number; min: number; max: number;
 step: number; onChange: (v: number) => void; note?: string;
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
 type="range" min={min} max={max} step={step} value={value}
 onChange={(e) => onChange(Number(e.target.value))}
 className="w-full h-2 rounded-full appearance-none cursor-pointer"
 style={{ background: `linear-gradient(to right, #f97316 0%, #f97316 ${pct}%, #e5e7eb ${pct}%, #e5e7eb 100%)` }}
 />
 <div className="flex justify-between text-[10px] text-gray-400 mt-1">
 <span>{fmt(min)}</span><span>{fmt(max)}</span>
 </div>
 </div>
 );
}

function StatusCell({ val }: { val: boolean | string }) {
 if (val === true) return <CheckCircle size={16} className="text-orange-500 mx-auto" />;
 if (val === false) return <XCircle size={16} className="text-gray-300 mx-auto" />;
 if (val === "~") return <span className="text-orange-400 font-bold text-sm">~</span>;
 return <span className="font-bold text-sm text-orange-500">{val}</span>;
}

function ResultRow({ label, value, color = "text-black", tooltip }: {
 label: string; value: string; color?: string; tooltip?: string;
}) {
 return (
 <div className="flex justify-between items-center py-2.5 border-b border-gray-100 last:border-0 group">
 <span className="text-xs text-gray-500 flex items-center gap-1">
 {label}
 {tooltip && <HelpCircle size={11} className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" />}
 </span>
 <span className={`font-bold text-sm ${color}`}>{value}</span>
 </div>
 );
}

// ─────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────
export default function ITR5Page() {
 const [calc, setCalc] = useState<CalcState>({
 entityType: "partnership",
 businessIncome: 10000000,
 businessExpenses: 6000000,
 capitalGains: 0,
 otherIncome: 200000,
 partnerSalary: 1200000,
 partnerInterest: 600000,
 ded80c: 0,
 ded80g: 100000,
 });

 const upd = useCallback(
 <K extends keyof CalcState>(k: K, v: CalcState[K]) =>
 setCalc((p) => ({ ...p, [k]: v })),
 []
 );

 const result = runCalc(calc);
 const [openFaq, setOpenFaq] = useState<number | null>(null);

 const resetCalc = () =>
 setCalc({
 entityType: "partnership", businessIncome: 10000000, businessExpenses: 6000000,
 capitalGains: 0, otherIncome: 200000, partnerSalary: 1200000,
 partnerInterest: 600000, ded80c: 0, ded80g: 100000,
 });

 return (
 <>
 <Navbar />
 <main className="min-h-screen bg-white font-sans">

 {/* ════════════════════════════════════
 HERO
 ════════════════════════════════════ */}
 <section className="bg-white relative overflow-hidden pt-8 pb-20">
 <div className="absolute inset-0 opacity-[0.03]"
 style={{ backgroundImage: "linear-gradient(#f97316 1px,transparent 1px),linear-gradient(90deg,#f97316 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
 <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-orange-100 rounded-full blur-3xl pointer-events-none opacity-60" />
 <div className="absolute left-0 bottom-0 w-[300px] h-[300px] bg-orange-50 rounded-full blur-2xl pointer-events-none opacity-80" />
 <div className="absolute top-20 left-10 w-2 h-2 bg-orange-500 rounded-full opacity-20 animate-ping" />
 <div className="absolute bottom-20 right-20 w-3 h-3 bg-orange-500 rounded-full opacity-20 animate-pulse" />

 <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
 {/* Left */}
 <div>
 <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-500 text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase ">
 <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
 AY 2026-27 · ITR-5 Filing Open · Last Date: July 31 / Oct 31, 2026
 </div>

 <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black leading-[1.08] mb-5">
 File <span className="text-orange-500">ITR-5</span> Online
 <br />
 For <span className="text-orange-500">Firms, LLPs & AOPs</span>
 </h1>

 <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
 For Partnership Firms, LLPs, AOPs, BOIs, Trusts & Estates. Our AI imports your books, computes partner salary under Sec 40(b), handles tax audit, and files ITR-5 accurately.
 <span className="block mt-2 text-black font-semibold">
 Compare with ClearTax, Tax2Win, Quicko, H&R Block & TaxSpanner — 40% cheaper!
 </span>
 </p>

 <div className="flex flex-wrap gap-3 mb-10">
 <Link href="#pricing"
 className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3.5 rounded-full text-base transition-all hover:shadow-xl hover:shadow-orange-100 hover:-translate-y-0.5 inline-flex items-center gap-2 group">
 🚀 Start Filing ITR-5
 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
 </Link>
 <Link href="#calculator"
 className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold px-7 py-3.5 rounded-full text-base transition-all">
 <Calculator size={16} className="inline mr-2" />
 Firm Tax Calculator →
 </Link>
 </div>

 <div className="flex gap-8 flex-wrap">
 {[
 ["50K+", "ITR-5 Filed", <FileText key="f" size={16} className="text-orange-500" />],
 ["₹200Cr+", "Firm Income Filed", <Building2 key="b" size={16} className="text-orange-500" />],
 ["4.9★", "Google Rating", <Star key="s" size={16} className="text-orange-500 fill-orange-500" />],
 ].map(([num, lbl, icon]) => (
 <div key={String(lbl)} className="flex items-center gap-2">
 <div className="w-9 h-9 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center">
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

 {/* Right — AI Card */}
 <div className="lg:pl-4">
 <div className="bg-white border-2 border-orange-100 rounded-3xl p-6 shadow-2xl shadow-orange-100 hover:border-orange-300 hover:shadow-orange-200 transition-all duration-300">
 <div className="flex items-center justify-between mb-5">
 <span className="font-display font-bold text-black text-sm flex items-center gap-2">
 <Brain size={18} className="text-orange-500" />
 🤖 AI ITR-5 Assistant — Live
 </span>
 <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
 <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
 ACTIVE
 </span>
 </div>

 {AI_STEPS.map((s, i) => (
 <div key={i} className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-0 hover:bg-orange-50 rounded-lg px-2 transition-colors">
 <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-xl flex-shrink-0">
 {s.icon}
 </div>
 <div>
 <div className="text-black font-semibold text-sm">{s.title}</div>
 <div className="text-gray-500 text-xs mt-0.5">{s.desc}</div>
 </div>
 </div>
 ))}

 <div className="mt-4 bg-orange-50 border border-orange-100 rounded-xl p-4">
 <div className="flex justify-between text-xs mb-2">
 <span className="text-gray-500 flex items-center gap-1">
 <Zap size={12} className="text-orange-500" /> Processing Firm Returns
 </span>
 <span className="font-bold text-orange-500">75% Complete</span>
 </div>
 <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
 <div className="h-full w-[75%] bg-orange-500 rounded-full" />
 </div>
 <p className="text-[10px] text-gray-400 mt-2">Computing partner deductions & audit schedules • 2 steps remaining</p>
 </div>

 <div className="mt-4 pt-4 border-t border-gray-100">
 <p className="text-gray-400 text-xs mb-2">🏢 Supported Entities</p>
 <div className="flex flex-wrap gap-1.5">
 {["Partnership Firm", "LLP", "AOP", "BOI", "Trust", "Estate", "Investment Fund"].map((b) => (
 <span key={b} className="bg-orange-50 border border-orange-100 text-orange-500 text-[10px] font-semibold px-2 py-1 rounded-md">
 {b}
 </span>
 ))}
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* ════════════════════════════════════
 TRUST BADGES
 ════════════════════════════════════ */}
 <section className="bg-white border-y border-gray-100 py-6">
 <div className="max-w-7xl mx-auto px-4 sm:px-6">
 <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
 <span className="text-xs text-gray-400 font-semibold uppercase ">Trusted by</span>
 {["SBI", "HDFC Bank", "ICICI", "Axis Bank", "Kotak"].map((b) => (
 <div key={b} className="text-gray-300 font-bold text-sm hover:text-orange-500 transition-colors">{b}</div>
 ))}
 <span className="text-xs text-orange-500 font-bold flex items-center gap-1">
 <Shield size={14} /> ISO 27001 Certified
 </span>
 </div>
 </div>
 </section>

 {/* ════════════════════════════════════
 ELIGIBILITY
 ════════════════════════════════════ */}
 <section className="bg-white py-6 px-4 sm:px-6" id="eligibility">
 <div className="max-w-7xl mx-auto">
 <div className="text-center mb-10">
 <p className="text-orange-500 text-xs font-bold uppercase mb-2 flex items-center justify-center gap-2">
 <Target size={14} /> Eligibility
 </p>
 <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-black mb-3">Who Should File ITR-5?</h2>
 <p className="text-gray-500 max-w-xl mx-auto text-sm">
 ITR-5 is for entities other than individuals, HUFs, and companies. It covers firms, LLPs, AOPs, BOIs, trusts, and estates.
 </p>
 </div>

 <div className="grid md:grid-cols-2 gap-6 mb-8">
 <div className="bg-white border-2 border-orange-500 rounded-2xl p-6 hover:shadow-lg hover:shadow-orange-100 transition-all">
 <div className="flex items-center gap-2 font-bold text-black mb-4 text-base">
 <CheckCircle size={20} className="text-orange-500" /> File ITR-5 If You Are:
 </div>
 <ul className="space-y-2.5">
 {[
 "Partnership Firm (registered or unregistered)",
 "Limited Liability Partnership (LLP)",
 "Association of Persons (AOP)",
 "Body of Individuals (BOI)",
 "Estate of a Deceased Person",
 "Estate of an Insolvent Person",
 "Business Trust / Investment Fund",
 "Local Authority or Artificial Juridical Person",
 ].map((item) => (
 <li key={item} className="flex gap-2 text-sm text-black">
 <span className="text-orange-500 mt-0.5 flex-shrink-0 font-bold">✓</span>{item}
 </li>
 ))}
 </ul>
 </div>

 <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all">
 <div className="flex items-center gap-2 font-bold text-black mb-4 text-base">
 <AlertTriangle size={20} className="text-orange-500" /> NOT ITR-5 — Use Other Forms:
 </div>
 <ul className="space-y-3 mb-5">
 {[
 { form: "ITR-1/2/3/4", desc: "Individual or HUF — use ITR-1, 2, 3, or 4 based on income type" },
 { form: "ITR-6", desc: "Companies (other than those claiming exemption under Sec 11)" },
 { form: "ITR-7", desc: "Trusts / institutions claiming exemption under Sec 139(4A)/(4C)/(4D)" },
 ].map((item) => (
 <li key={item.form} className="flex gap-3 text-sm">
 <span className="bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-md flex-shrink-0 h-fit">{item.form}</span>
 <span className="text-black">{item.desc}</span>
 </li>
 ))}
 </ul>
 <div className="pt-4 border-t border-gray-100">
 <p className="text-xs text-black font-semibold mb-1">🤖 Not sure which form?</p>
 <p className="text-xs text-gray-500">DoStartup AI identifies the correct ITR form for your entity type — just answer 3 quick questions.</p>
 </div>
 </div>
 </div>

 {/* Entity Tax Table */}
 <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
 <h3 className="font-display font-bold text-black text-lg mb-4 flex items-center gap-2">
 <BarChart3 size={20} className="text-orange-500" />
 📊 ITR-5 Tax Rates by Entity Type — FY 2025-26
 </h3>
 <div className="overflow-x-auto">
 <table className="w-full text-xs sm:text-sm">
 <thead>
 <tr className="bg-orange-500 text-white">
 <th className="px-3 py-2.5 text-left rounded-tl-xl font-bold">Entity Type</th>
 <th className="px-3 py-2.5 text-center font-bold">Tax Rate</th>
 <th className="px-3 py-2.5 text-center font-bold">Surcharge</th>
 <th className="px-3 py-2.5 text-center font-bold">Audit Threshold</th>
 <th className="px-3 py-2.5 text-right rounded-tr-xl font-bold">Due Date</th>
 </tr>
 </thead>
 <tbody>
 {ENTITY_TABLE.map((row, i) => (
 <tr key={row.entity} className={`border-b border-gray-100 hover:bg-orange-50 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
 <td className="px-3 py-2.5 font-semibold text-black">{row.entity}</td>
 <td className="px-3 py-2.5 text-center font-bold text-orange-500">{row.tax}</td>
 <td className="px-3 py-2.5 text-center text-gray-600">{row.surcharge}</td>
 <td className="px-3 py-2.5 text-center text-gray-600">{row.audit}</td>
 <td className="px-3 py-2.5 text-right font-bold text-orange-500">{row.dueDate}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 <div className="mt-3 grid sm:grid-cols-2 gap-2">
 <p className="text-xs text-gray-600 bg-orange-50 rounded-xl px-3 py-2 border border-orange-100">
 💡 <strong className="text-black">No Slab Benefits:</strong> Partnership Firms & LLPs are taxed at <strong className="text-orange-500">30% flat</strong> — there is no basic exemption limit unlike individuals.
 </p>
 <p className="text-xs text-gray-600 bg-orange-50 rounded-xl px-3 py-2 border border-orange-100">
 💡 <strong className="text-black">Partner's Share:</strong> Individual partners' share of firm profit is <strong className="text-orange-500">exempt</strong> in their hands (no double taxation under Section 10(2A)).
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* ════════════════════════════════════
 WHY DOSTARTUP + COMPARE
 ════════════════════════════════════ */}
 <section className="bg-white py-6 px-4 sm:px-6" id="compare">
 <div className="max-w-7xl mx-auto">
 <div className="text-center mb-10">
 <p className="text-orange-500 text-xs font-bold uppercase mb-2">Why Choose Us</p>
 <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-black mb-3">
 Better Than{" "}
 <span className="text-orange-500">ClearTax, Tax2Win, Quicko, H&R Block & TaxSpanner</span>
 </h2>
 <p className="text-gray-500 max-w-2xl mx-auto text-sm">
 We studied every competitor and built what they missed — a truly AI-first ITR-5 experience at the lowest price in India.
 </p>
 </div>

 <div className="grid lg:grid-cols-2 gap-12 items-start">
 <div className="space-y-3">
 {WHY_FEATURES.map((f) => (
 <div key={f.title} className="flex gap-4 p-4 bg-white border border-gray-200 rounded-2xl hover:border-orange-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group">
 <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange-100 group-hover:scale-110 transition-all">{f.icon}</div>
 <div>
 <div className="font-semibold text-black text-sm mb-0.5 flex items-center gap-2">
 {f.title}
 {f.title.includes("AI") && <Sparkles size={12} className="text-orange-500" />}
 </div>
 <div className="text-gray-500 text-xs leading-relaxed">{f.desc}</div>
 </div>
 </div>
 ))}
 </div>

 <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-white">
 <div className="bg-orange-500 px-4 py-3">
 <h3 className="text-white font-bold text-sm flex items-center gap-2">
 <TrendingUp size={16} className="text-white" />
 Feature Comparison — ITR-5 Platforms
 </h3>
 </div>
 <table className="w-full text-sm">
 <thead>
 <tr className="bg-gray-50">
 <th className="px-3 py-3 text-left font-bold text-xs text-black w-[28%]">Feature</th>
 <th className="px-2 py-3 text-center font-bold text-xs text-orange-500">DoStartup</th>
 <th className="px-2 py-3 text-center font-bold text-xs text-gray-500">ClearTax</th>
 <th className="px-2 py-3 text-center font-bold text-xs text-gray-500">Tax2Win</th>
 <th className="px-2 py-3 text-center font-bold text-xs text-gray-500">Quicko</th>
 <th className="px-2 py-3 text-center font-bold text-xs text-gray-500">H&R Block</th>
 <th className="px-2 py-3 text-center font-bold text-xs text-gray-500">TaxSpanner</th>
 </tr>
 </thead>
 <tbody>
 {[
 { feature: "Partnership / LLP", d: true, c: true, t: "~", q: true, h: true, ts: "~" },
 { feature: "AOP / BOI / Trust", d: true, c: "~", t: false, q: "~", h: "~", ts: false },
 { feature: "Sec 40(b) Auto-Compute", d: true, c: "~", t: false, q: false, h: false, ts: false },
 { feature: "Tally / Books Import", d: true, c: true, t: "~", q: true, h: false, ts: "~" },
 { feature: "Tax Audit (3CA/3CB/3CD)", d: true, c: true, t: true, q: "~", h: true, ts: true },
 { feature: "Price (ITR-5)", d: "₹2,999", c: "₹3,999", t: "₹3,499", q: "₹2,999", h: "₹4,999", ts: "₹2,499" },
 ].map((row, i) => (
 <tr key={row.feature} className={`border-b border-gray-100 hover:bg-orange-50 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
 <td className="px-3 py-3 font-medium text-black text-xs">{row.feature}</td>
 <td className="px-2 py-3 text-center"><StatusCell val={row.d} /></td>
 <td className="px-2 py-3 text-center"><StatusCell val={row.c} /></td>
 <td className="px-2 py-3 text-center"><StatusCell val={row.t} /></td>
 <td className="px-2 py-3 text-center"><StatusCell val={row.q} /></td>
 <td className="px-2 py-3 text-center"><StatusCell val={row.h} /></td>
 <td className="px-2 py-3 text-center"><StatusCell val={row.ts} /></td>
 </tr>
 ))}
 </tbody>
 </table>
 <div className="bg-orange-50 p-3 text-center text-xs text-black border-t border-orange-100">
 <ThumbsUp size={12} className="inline mr-1 text-orange-500" />
 DoStartup.in — Best AI ITR-5 platform at the lowest price
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* ════════════════════════════════════
 AI FEATURES
 ════════════════════════════════════ */}
 <section className="bg-white py-6 px-4 sm:px-6" id="features">
 <div className="max-w-7xl mx-auto">
 <div className="text-center mb-10">
 <p className="text-orange-500 text-xs font-bold uppercase mb-2 flex items-center justify-center gap-2">
 <Sparkles size={14} /> AI Technology
 </p>
 <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-black mb-3">Built for Complex ITR-5 Filing</h2>
 <p className="text-gray-500 max-w-2xl mx-auto text-sm">
 Every ITR-5 complexity — partner salary, depreciation, tax audit, AOP taxation — handled by AI automatically.
 <span className="block mt-1 text-black font-semibold">99.2% accuracy in firm income computation</span>
 </p>
 </div>
 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
 {AI_FEATURES.map((f) => (
 <div key={f.title} className="bg-white border-2 border-gray-100 rounded-2xl p-5 hover:-translate-y-1.5 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-100 transition-all duration-200 group">
 <div className="text-orange-500 mb-3 group-hover:scale-110 transform inline-block transition-transform">{f.icon}</div>
 <div className="font-display font-bold text-black text-base mb-2 flex items-center gap-2">
 {f.title}
 <span className="text-[10px] bg-orange-50 text-orange-500 border border-orange-200 px-2 py-0.5 rounded-full">AI</span>
 </div>
 <div className="text-gray-500 text-sm leading-relaxed">{f.desc}</div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ════════════════════════════════════
 PROCESS
 ════════════════════════════════════ */}
 <section className="bg-white py-6 px-4 sm:px-6" id="process">
 <div className="max-w-7xl mx-auto">
 <div className="text-center mb-12">
 <p className="text-orange-500 text-xs font-bold uppercase mb-2">How It Works</p>
 <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-black">File ITR-5 in 5 Simple Steps</h2>
 <p className="text-gray-500 text-sm mt-2">Complex firm returns, simple filing — our AI & CAs handle everything</p>
 </div>
 <div className="relative">
 <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-0.5 bg-orange-500 z-0 opacity-30" />
 <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
 {PROCESS_STEPS.map((s) => (
 <div key={s.num} className="text-center group cursor-pointer">
 <div className="w-14 h-14 rounded-full bg-white border-2 border-orange-500 flex items-center justify-center text-2xl mx-auto mb-3 shadow-md group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-200">
 {s.icon}
 </div>
 <div className="text-orange-500 text-xs font-bold mb-1">STEP {s.num}</div>
 <div className="text-black text-sm font-semibold leading-tight">{s.label}</div>
 </div>
 ))}
 </div>
 </div>
 <div className="mt-10 text-center">
 <Link href="#pricing" className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm hover:text-orange-600">
 Start your ITR-5 filing now <ArrowRight size={14} />
 </Link>
 </div>
 </div>
 </section>

 {/* ════════════════════════════════════
 CALCULATOR
 ════════════════════════════════════ */}
 <section className="bg-white py-6 px-4 sm:px-6" id="calculator">
 <div className="max-w-7xl mx-auto">
 <div className="text-center mb-10">
 <p className="text-orange-500 text-xs font-bold uppercase mb-2 flex items-center justify-center gap-2">
 <Calculator size={14} /> Free Tool
 </p>
 <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-black mb-2">
 ITR-5 Firm Tax Calculator FY 2025-26
 </h2>
 <p className="text-gray-500 text-sm max-w-2xl mx-auto">
 Enter your firm's income, expenses & partner details to get instant tax computation.
 <span className="block mt-1 text-orange-500 font-semibold">Used by 10,000+ firms this month</span>
 </p>
 </div>

 <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl overflow-hidden">
 <div className="bg-orange-500 px-6 py-4 flex items-center justify-between flex-wrap gap-3">
 <div className="flex items-center gap-3">
 <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
 <Building2 size={20} className="text-white" />
 </div>
 <div>
 <h3 className="font-display font-extrabold text-white text-lg flex items-center gap-2">
 ITR-5 Firm Tax Calculator
 <span className="text-[10px] bg-white/20 text-white px-2 py-0.5 rounded-full">Live</span>
 </h3>
 <p className="text-orange-100 text-xs mt-0.5">AY 2026-27 | Firms, LLPs, AOPs & BOIs</p>
 </div>
 </div>
 <div className="flex items-center gap-2">
 <button onClick={resetCalc}
 className="bg-white/20 hover:bg-white/30 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors">
 <RefreshCw size={12} /> Reset
 </button>
 <span className="bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
 <Zap size={12} /> AI Powered
 </span>
 </div>
 </div>

 <div className="grid lg:grid-cols-2">
 {/* INPUTS */}
 <div className="p-6 border-b lg:border-b-0 lg:border-r border-gray-100">
 <h4 className="font-display font-bold text-black text-base mb-5 flex items-center gap-2">
 <FileText size={16} className="text-orange-500" />
 Scroll to Enter Firm Details
 </h4>

 <div className="mb-5">
 <label className="block text-xs font-semibold text-black mb-1.5">Entity Type</label>
 <select value={calc.entityType} onChange={(e) => upd("entityType", e.target.value as EntityType)}
 className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-xl text-sm font-medium text-black focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-colors bg-white">
 <option value="partnership">Partnership Firm (30% flat tax)</option>
 <option value="llp">LLP — Limited Liability Partnership (30% flat tax)</option>
 <option value="aop">AOP — Association of Persons (Slab / MMR)</option>
 <option value="boi">BOI — Body of Individuals (Slab / MMR)</option>
 <option value="trust">Trust / Estate (30% or Exempt)</option>
 <option value="estate">Estate of Deceased (Slab rates)</option>
 </select>
 </div>

 <div className="mb-2 pb-4 border-b border-gray-100">
 <p className="text-xs font-bold text-orange-500 mb-4 uppercase flex items-center gap-1">
 <Briefcase size={12} /> Business Income & Expenses
 </p>
 <SliderRow label="Gross Business Revenue (₹)" value={calc.businessIncome} min={0} max={100000000} step={500000} onChange={(v) => upd("businessIncome", v)} note="Total turnover / receipts of the firm" />
 <SliderRow label="Total Business Expenses (₹)" value={calc.businessExpenses} min={0} max={80000000} step={500000} onChange={(v) => upd("businessExpenses", v)} note="Rent, salary to staff, depreciation, professional fees, etc." />
 <SliderRow label="Capital Gains (₹)" value={calc.capitalGains} min={0} max={10000000} step={100000} onChange={(v) => upd("capitalGains", v)} />
 <SliderRow label="Other Income (₹)" value={calc.otherIncome} min={0} max={5000000} step={50000} onChange={(v) => upd("otherIncome", v)} />
 </div>

 {(calc.entityType === "partnership" || calc.entityType === "llp") && (
 <div className="mb-2 pt-4 pb-4 border-b border-gray-100">
 <p className="text-xs font-bold text-orange-500 mb-4 uppercase flex items-center gap-1">
 <Users size={12} /> Partner Deductions (Sec 40(b))
 </p>
 <SliderRow label="Partner Salary (Sec 40(b))" value={calc.partnerSalary} min={0} max={10000000} step={100000} onChange={(v) => upd("partnerSalary", v)} note="Max: ₹3L or 90% of book profit (first ₹3L), 60% on balance" />
 <SliderRow label="Partner Interest @12% p.a. (Sec 40(b))" value={calc.partnerInterest} min={0} max={5000000} step={50000} onChange={(v) => upd("partnerInterest", v)} note="Max 12% p.a. on partner's capital contribution" />
 </div>
 )}

 <div className="pt-4">
 <p className="text-xs font-bold text-orange-500 mb-4 uppercase ">💡 Other Deductions</p>
 <SliderRow label="80G Donations" value={calc.ded80g} min={0} max={1000000} step={10000} onChange={(v) => upd("ded80g", v)} note="50% or 100% of donation amount depending on fund" />
 </div>
 </div>

 {/* RESULTS */}
 <div className="p-6 bg-gray-50">
 <h4 className="font-display font-bold text-black text-base mb-5 flex items-center gap-2">
 <BarChart3 size={16} className="text-orange-500" />
 Firm Tax Breakdown
 </h4>

 {/* Audit Alert */}
 <div className={`rounded-2xl p-4 mb-4 border-2 ${result.auditRequired ? "bg-red-50 border-red-300" : "bg-orange-50 border-orange-200"}`}>
 <p className={`text-xs font-bold uppercase mb-1 ${result.auditRequired ? "text-red-600" : "text-orange-500"}`}>
 {result.auditRequired ? "⚠️ Tax Audit Required" : "✅ No Tax Audit Required"}
 </p>
 <p className={`text-sm font-semibold ${result.auditRequired ? "text-red-800" : "text-black"}`}>
 {result.auditRequired
 ? "Turnover exceeds ₹1 crore. Form 3CA/3CB/3CD required by October 31, 2026."
 : "Turnover within limits. File ITR-5 directly by July 31, 2026."}
 </p>
 </div>

 {/* Income Breakdown */}
 <div className="bg-white rounded-2xl border-2 border-orange-500 p-4 mb-4">
 <p className="text-xs font-bold text-orange-500 mb-2 uppercase ">🏢 Income Computation</p>
 <ResultRow label="Gross Revenue" value={fmt(calc.businessIncome)} />
 <ResultRow label="Less: Business Expenses" value={`- ${fmt(calc.businessExpenses)}`} color="text-gray-500" />
 <ResultRow label="Net Business Income" value={fmt(result.netBusinessIncome)} color="text-orange-500" />
 {(calc.entityType === "partnership" || calc.entityType === "llp") && (
 <ResultRow label="Less: Partner Salary/Interest (40(b))" value={`- ${fmt(result.partnerDeductions)}`} color="text-gray-500" />
 )}
 <ResultRow label="Gross Total Income" value={fmt(result.grossTotal)} />
 <ResultRow label="Taxable Income (after deductions)" value={fmt(result.taxableIncome)} color="text-orange-500" />
 </div>

 {/* Tax Computation */}
 <div className="bg-white rounded-2xl border border-gray-200 p-4 mb-4 shadow-sm">
 <ResultRow
 label={result.flatTaxRate > 0 ? `Income Tax @ ${result.flatTaxRate}%` : "Income Tax (Slab rates)"}
 value={fmt(result.totalTax - result.surcharge - result.cess)}
 />
 <ResultRow label="Surcharge" value={fmt(result.surcharge)} color="text-gray-600" />
 <ResultRow label="Health & Education Cess (4%)" value={fmt(result.cess)} color="text-gray-600" />
 <ResultRow label="Total Tax Payable" value={fmt(result.totalTax)} color="text-orange-500" />
 <ResultRow label="Est. TDS Deducted (@ 2%)" value={fmt(result.tds)} tooltip="TDS on business receipts" />
 <ResultRow
 label={result.refund >= 0 ? "🎉 Estimated Tax Refund" : "⚠️ Net Tax Payable"}
 value={result.refund >= 0 ? fmt(result.refund) : fmt(-result.refund)}
 color={result.refund >= 0 ? "text-orange-500" : "text-red-500"}
 />
 </div>

 <Link href="#pricing"
 className="block bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm text-center py-3.5 rounded-2xl transition-all hover:shadow-lg hover:-translate-y-0.5">
 🚀 File ITR-5 Now — Use This Data
 </Link>
 <p className="text-center text-[10px] text-gray-400 mt-2">
 * Estimates only. Consult CA for audit cases, AOP/BOI MMR computation & trust exemptions.
 </p>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* ════════════════════════════════════
 TESTIMONIALS
 ════════════════════════════════════ */}
 <section className="bg-white py-6 px-4 sm:px-6">
 <div className="max-w-7xl mx-auto">
 <div className="text-center mb-10">
 <p className="text-orange-500 text-xs font-bold uppercase mb-2">Testimonials</p>
 <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-black mb-2">Trusted by 50,000+ Firms & LLPs</h2>
 <p className="text-gray-500 text-sm">See what partnership firms, LLPs & AOPs say about DoStartup.in</p>
 </div>
 <div className="grid md:grid-cols-3 gap-6">
 {TESTIMONIALS.map((t, i) => (
 <div key={i} className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-orange-500 hover:shadow-xl transition-all hover:-translate-y-1">
 <div className="flex gap-1 mb-3">
 {[...Array(5)].map((_, j) => (
 <Star key={j} size={16} className="fill-orange-500 text-orange-500" />
 ))}
 </div>
 <p className="text-black text-sm mb-4">"{t.text}"</p>
 <div className="flex items-center gap-3">
 <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm">
 {t.name.charAt(0)}
 </div>
 <div>
 <div className="font-semibold text-sm text-black">{t.name}</div>
 <div className="text-xs text-gray-500">{t.role} • {t.location}</div>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ════════════════════════════════════
 PRICING
 ════════════════════════════════════ */}
 <section className="bg-white py-6 px-4 sm:px-6" id="pricing">
 <div className="max-w-7xl mx-auto">
 <div className="text-center mb-10">
 <p className="text-orange-500 text-xs font-bold uppercase mb-2">Pricing</p>
 <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-black mb-2">Simple Pricing for ITR-5</h2>
 <p className="text-gray-500 text-sm">No hidden charges. Cheaper than every major competitor.</p>
 </div>
 <div className="grid md:grid-cols-3 gap-6">
 {PLANS.map((plan) => (
 <div key={plan.name} className="relative rounded-3xl p-7 border-2 border-gray-200 bg-white transition-all duration-200 hover:-translate-y-2 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-100">
 {plan.badge && (
 <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
 {plan.badge}
 </span>
 )}
 <div className="font-display font-bold text-lg mb-1 text-black">{plan.name}</div>
 <div className="flex items-end gap-1 my-3">
 <span className="font-display text-4xl font-extrabold text-orange-500">{plan.price}</span>
 <span className="text-sm pb-1 text-gray-400">{plan.period}</span>
 </div>
 <p className="text-sm mb-5 leading-relaxed text-gray-500">{plan.desc}</p>
 <ul className="space-y-2.5 mb-6">
 {plan.features.map((f) => (
 <li key={f.text} className="flex items-center gap-2 text-sm">
 {f.ok ? <CheckCircle size={15} className="flex-shrink-0 text-orange-500" /> : <XCircle size={15} className="flex-shrink-0 text-gray-300" />}
 <span className="text-black">{f.text}</span>
 </li>
 ))}
 </ul>
 <button className="w-full py-3 rounded-full font-bold text-sm border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-150">
 {plan.cta}
 </button>
 </div>
 ))}
 </div>
 <p className="text-center text-xs text-gray-400 mt-6">* All plans include free revisions. GST included in price.</p>
 </div>
 </section>

 {/* ════════════════════════════════════
 FAQ
 ════════════════════════════════════ */}
 <section className="bg-white py-6 px-4 sm:px-6" id="faq">
 <div className="max-w-4xl mx-auto">
 <div className="text-center mb-10">
 <p className="text-orange-500 text-xs font-bold uppercase mb-2">FAQ</p>
 <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-black">ITR-5 Questions Answered</h2>
 <p className="text-gray-500 text-sm mt-2">Everything about firm taxation, partner deductions, LLPs & AOPs.</p>
 </div>
 <div className="space-y-3">
 {FAQS.map((faq, i) => (
 <div key={i} className={`bg-white border-2 rounded-2xl overflow-hidden transition-all duration-200 ${openFaq === i ? "border-orange-500 shadow-lg shadow-orange-100" : "border-gray-100 hover:border-orange-300"}`}>
 <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
 className="w-full flex justify-between items-start gap-4 px-5 py-4 text-left group">
 <span className="font-semibold text-sm text-black leading-snug group-hover:text-orange-500 transition-colors">{faq.q}</span>
 {openFaq === i
 ? <ChevronUp size={17} className="text-orange-500 flex-shrink-0 mt-0.5" />
 : <ChevronDown size={17} className="text-orange-500 flex-shrink-0 mt-0.5 group-hover:translate-y-0.5 transition-transform" />}
 </button>
 {openFaq === i && (
 <div className="px-5 pb-4 border-t border-orange-100 pt-3 bg-orange-50/30">
 <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
 </div>
 )}
 </div>
 ))}
 </div>
 <div className="mt-8 text-center">
 <p className="text-sm text-gray-500 mb-4">Still have questions about ITR-5?</p>
 <Link href="/support"
 className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm hover:text-orange-600 border border-orange-300 px-6 py-3 rounded-full hover:bg-orange-50 transition-all">
 <MessageCircle size={16} />Chat with our AI Tax Support (24/7)
 </Link>
 </div>
 </div>
 </section>

 {/* ════════════════════════════════════
 FINAL CTA
 ════════════════════════════════════ */}
 <section className="bg-white py-6 px-4 sm:px-6 border-t border-gray-100">
 <div className="max-w-3xl mx-auto text-center">
 <div className="flex justify-center gap-0.5 mb-4">
 {[...Array(5)].map((_, i) => (
 <Star key={i} size={24} className="text-orange-500 fill-orange-500" />
 ))}
 </div>
 <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-black mb-4">
 Complex Firm Returns. Simple Filing.
 </h2>
 <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
 Join 50,000+ partnership firms, LLPs & AOPs who trust DoStartup AI to file ITR-5 accurately every year.
 <span className="block mt-2 text-black font-semibold">Compare with ClearTax, Tax2Win, Quicko, H&R Block & TaxSpanner — we're 40% cheaper!</span>
 </p>
 <div className="flex flex-wrap gap-4 justify-center">
 <Link href="#pricing"
 className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-base px-8 py-4 rounded-full hover:shadow-xl hover:shadow-orange-100 hover:-translate-y-1 transition-all duration-150 group">
 🚀 File ITR-5 Free Today
 <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
 </Link>
 <Link href="#calculator"
 className="inline-flex items-center gap-2 border-2 border-orange-500 text-orange-500 font-semibold text-base px-8 py-4 rounded-full hover:bg-orange-500 hover:text-white transition-all">
 <Calculator size={18} />Try Calculator First →
 </Link>
 </div>
 <div className="mt-8 flex items-center justify-center gap-6 text-xs text-gray-400">
 <span className="flex items-center gap-1"><Shield size={12} className="text-orange-500" /> 256-bit SSL</span>
 <span className="flex items-center gap-1"><Clock size={12} className="text-orange-500" /> CA-Assisted Filing</span>
 <span className="flex items-center gap-1"><Users size={12} className="text-orange-500" /> 50K+ Firms Filed</span>
 </div>
 </div>
 </section>

 {/* ════════════════════════════════════
 FOOTER
 ════════════════════════════════════ */}
 <footer className="bg-orange-500 text-white py-5 px-4 sm:px-6">
 <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
 <div>
 <h3 className="text-white font-bold text-lg mb-4">DoStartup<span className="text-orange-200">.in</span></h3>
 <p className="text-orange-100 text-sm mb-4">India's most advanced AI-powered ITR-5 filing platform. Partnership firms, LLPs, AOPs, Trusts — all handled end-to-end.</p>
 <div className="flex gap-3">
 {["f", "t", "in", "yt", "ig"].map((s) => (
 <a key={s} href="#"
 className="w-8 h-8 rounded-full bg-orange-600 hover:bg-orange-700 flex items-center justify-center text-xs font-bold text-white transition-colors">{s}</a>
 ))}
 </div>
 </div>
 <div>
 <h4 className="text-white font-semibold text-sm mb-4">ITR Forms</h4>
 <ul className="space-y-2 text-sm text-orange-100">
 {[
 { label: "ITR-1 (Sahaj)", url: "/itr-1-return-filing" },
 { label: "ITR-2", url: "/itr-2-return-filing" },
 { label: "ITR-3", url: "/itr-3-return-filing" },
 { label: "ITR-4 (Sugam)", url: "/itr-4-return-filing" },
 { label: "ITR-5", url: "/itr-5-return-filing" },
 ].map((item) => (
 <li key={item.label}><Link href={item.url} className="hover:text-white transition-colors">{item.label}</Link></li>
 ))}
 </ul>
 </div>
 <div>
 <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
 <ul className="space-y-2 text-sm text-orange-100">
 {["About Us", "Careers", "Blog", "Press", "Contact"].map((item) => (
 <li key={item}><Link href="#" className="hover:text-white transition-colors">{item}</Link></li>
 ))}
 </ul>
 </div>
 <div>
 <h4 className="text-white font-semibold text-sm mb-4">Support</h4>
 <ul className="space-y-2 text-sm text-orange-100">
 {["Help Center", "FAQ", "Privacy Policy", "Terms of Use", "Refund Policy"].map((item) => (
 <li key={item}><Link href="#" className="hover:text-white transition-colors">{item}</Link></li>
 ))}
 </ul>
 </div>
 </div>
 <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-orange-400 text-center text-xs text-orange-200">
 <p>© 2026 DoStartup.in — Compare with ClearTax, Tax2Win, Quicko, H&R Block, TaxSpanner. All rights reserved.</p>
 <p className="mt-2 text-orange-300">* Competitor prices based on publicly available information as of March 2026.</p>
 </div>
 </footer>

 </main>
 </>
 );
}
