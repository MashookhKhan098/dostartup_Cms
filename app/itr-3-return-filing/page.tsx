"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DoStartupPricing from "../components/DoStartupPricing";
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
 Globe,
 Building2,
 TrendingDown,
 BookOpen,
 PieChart,
 Layers,
} from "lucide-react";

// ─────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────
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

// ─────────────────────────────────────────────
// PURE TAX CALCULATION — ITR-3 SPECIFIC
// ─────────────────────────────────────────────
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

 // New Regime — business income can't use most deductions
 const stdNew = salary > 0 ? 75000 : 0;
 const taxableNew = Math.max(0, grossTotal - stdNew);
 const totalTaxNew = calcNewTax(taxableNew);

 // Old Regime
 const totalDed =
 Math.min(s.ded80c || 0, 150000) +
 Math.min(s.ded80d || 0, 75000) +
 (salary > 0 ? 50000 : 0); // std deduction only if salary exists
 const taxableOld = Math.max(0, grossTotal - totalDed);
 const totalTaxOld = calcOldTax(taxableOld, s.age);

 // Audit threshold
 const auditRequired =
 (s.businessType === "business" && revenue > 10000000) ||
 (s.businessType === "profession" && revenue > 5000000) ||
 (s.businessType === "fno" && revenue > 10000000);

 const tds = Math.round(salary * 0.1);
 const advanceTax = Math.round(Math.min(totalTaxNew, totalTaxOld) * 0.1);
 const bestTax = Math.min(totalTaxNew, totalTaxOld);
 const refund = tds - bestTax;
 const recommendation: "new" | "old" = totalTaxNew <= totalTaxOld ? "new" : "old";
 const savings = Math.abs(totalTaxNew - totalTaxOld);

 return {
 grossTotal, netBusinessIncome, totalTaxNew, totalTaxOld,
 tds, advanceTax, refund, recommendation, savings, auditRequired,
 };
}

const fmt = (n: number) => "₹" + Math.abs(Math.round(n)).toLocaleString("en-IN");

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const AI_STEPS = [
 { icon: "📋", title: "Books of Accounts Analyzed", desc: "AI read P&L, Balance Sheet & Trial Balance in 8 seconds", bg: "bg-orange-500/20" },
 { icon: "💹", title: "F&O Turnover Computed", desc: "All trades aggregated — turnover ₹2.4Cr, profit ₹1.8L", bg: "bg-orange-500/15" },
 { icon: "🧾", title: "Expenses Categorized & Verified", desc: "31 business expenses validated, ₹68,000 maximized", bg: "bg-orange-500/10" },
 { icon: "✅", title: "ITR-3 Ready to File", desc: "0 errors • Audit not required • Refund: ₹41,200", bg: "bg-orange-500/20" },
];

const WHY_FEATURES = [
 { icon: <BookOpen size={20} className="text-orange-500" />, title: "Auto Books Import", desc: "Imports Tally, Zoho Books, QuickBooks P&L and Balance Sheet. AI maps every account to correct ITR-3 schedule." },
 { icon: <TrendingUp size={20} className="text-orange-500" />, title: "F&O Turnover Calculator", desc: "Automatically computes F&O turnover using absolute profit method. Determines tax audit applicability instantly." },
 { icon: <Brain size={20} className="text-orange-500" />, title: "AI Expense Maximizer", desc: "Identifies all allowable business deductions — depreciation, rent, salary, professional fees — to minimize tax." },
 { icon: <Shield size={20} className="text-orange-500" />, title: "Tax Audit Support", desc: "If turnover exceeds limits, our empanelled CAs handle Form 3CA/3CB/3CD audit end-to-end." },
];

const AI_FEATURES = [
 { icon: <BookOpen size={26} />, title: "Books Auto-Import", desc: "Upload Tally, Zoho, or QuickBooks export. AI extracts P&L and Balance Sheet and maps to Schedule BP automatically." },
 { icon: <PieChart size={26} />, title: "F&O Turnover Engine", desc: "Computes F&O turnover using the absolute profit method. Determines if tax audit is required based on CBDT rules." },
 { icon: <Search size={26} />, title: "Expense Optimizer", desc: "AI scans all expenses — depreciation (WDV/SLM), rent, salary, professional fees — and validates every claim." },
 { icon: <Layers size={26} />, title: "Depreciation Calculator", desc: "Computes Written Down Value and Straight Line depreciation for all assets. Auto-fills Schedule DPM in ITR-3." },
 { icon: <Bell size={26} />, title: "AIS/26AS Reconciler", desc: "Matches all TDS entries, advance tax, and business receipts in AIS against your books to prevent notices." },
 { icon: <AlertTriangle size={26} />, title: "ITR-3 Notice Shield", desc: "250+ validation rules — high-value business transactions, cash receipts, and expense ratios verified before filing." },
];

const PROCESS_STEPS = [
 { num: "01", icon: "👤", label: "Create Free Account" },
 { num: "02", icon: "📋", label: "Upload P&L & Balance Sheet" },
 { num: "03", icon: "🤖", label: "AI Fills All Schedules" },
 { num: "04", icon: "✅", label: "Review & Optimize" },
 { num: "05", icon: "🎉", label: "File & Track Refund" },
];

const PLANS = [
 {
 name: "Self File",
 price: "₹999",
 period: "/ filing",
 desc: "For freelancers & professionals with simple business income",
 features: [
 { text: "P&L & Balance Sheet import", ok: true },
 { text: "Business income calculation", ok: true },
 { text: "F&O turnover check", ok: true },
 { text: "e-File to IT Dept", ok: true },
 { text: "Tax audit support", ok: false },
 ],
 cta: "Start Filing",
 featured: false,
 },
 {
 name: "AI Pro",
 price: "₹1,499",
 period: "/ filing",
 desc: "Best for business owners, traders & multiple income sources",
 features: [
 { text: "Everything in Self File", ok: true },
 { text: "AI expense maximizer", ok: true },
 { text: "Depreciation calculator", ok: true },
 { text: "AIS deep reconciliation", ok: true },
 { text: "Capital gains + F&O income", ok: true },
 ],
 cta: "Get AI Pro",
 featured: true,
 badge: "POPULAR",
 },
 {
 name: "CA Expert",
 price: "₹2,999",
 period: "/ filing",
 desc: "Dedicated CA + Tax Audit for complex business filing",
 features: [
 { text: "Everything in AI Pro", ok: true },
 { text: "Dedicated CA assigned", ok: true },
 { text: "Tax audit (3CA/3CB/3CD)", ok: true },
 { text: "Notice response support", ok: true },
 { text: "Year-round tax planning", ok: true },
 ],
 cta: "Hire a CA",
 featured: false,
 },
];

const FAQS = [
 { q: "Who should file ITR-3?", a: "ITR-3 is for individuals and HUFs having income from business or profession along with any other income. This includes freelancers, consultants, doctors, lawyers, proprietors, partners in a firm, and F&O traders. If you have both salary and business income, you must file ITR-3." },
 { q: "What is the difference between ITR-3 and ITR-4?", a: "ITR-4 (Sugam) is for those opting for presumptive taxation under Section 44AD (business), 44ADA (professionals), or 44AE (transport). ITR-3 is for those maintaining actual books of accounts and declaring actual profit/loss. F&O traders must use ITR-3, not ITR-4." },
 { q: "Is F&O trading treated as business income in ITR-3?", a: "Yes. F&O (Futures & Options) income is treated as non-speculative business income under the Income Tax Act. It must be reported in ITR-3 under Schedule BP. Losses can be carried forward for 8 years and set off against future business income." },
 { q: "When is a Tax Audit required for ITR-3?", a: "Tax audit under Section 44AB is required if: (1) Business turnover exceeds ₹1 crore (or ₹10 crore if 95% transactions are digital), (2) Professional receipts exceed ₹50 lakh, or (3) You opt for presumptive taxation but declare profit below the prescribed limit." },
 { q: "What is F&O turnover for tax audit purposes?", a: "F&O turnover for tax audit is calculated using the absolute profit method — sum of absolute values (positive + negative) of all F&O trades in the year. It is NOT the total contract value. DoStartup's AI computes this automatically from your broker statement." },
 { q: "What is the last date to file ITR-3 for AY 2026-27?", a: "For non-audit cases: July 31, 2026. For tax audit cases: October 31, 2026. Belated returns can be filed till December 31, 2026 with a late fee of ₹1,000–₹5,000 under Section 234F." },
 { q: "Can I claim business expenses against my income in ITR-3?", a: "Yes. All legitimate business expenses — office rent, salaries, internet, depreciation, professional fees, travel — can be claimed as deductions against business income. Our AI maximizes allowable deductions by scanning your P&L statement." },
 { q: "How does DoStartup handle Tally/accounting software data?", a: "DoStartup accepts Tally XML export, Zoho Books CSV, QuickBooks reports, and manual P&L uploads. Our AI reads the trial balance, categorizes expenses, computes depreciation, and auto-fills all schedules (BP, DPM, AL) in ITR-3." },
];

const INCOME_TYPES_TABLE = [
 { type: "Freelancer / Consultant", itr: "ITR-3", turnoverLimit: "Actual books", audit: "> ₹50L receipts", regime: "Old preferred" },
 { type: "Business Owner (Proprietor)", itr: "ITR-3", turnoverLimit: "Actual books", audit: "> ₹1Cr turnover", regime: "Depends on profit" },
 { type: "F&O Trader", itr: "ITR-3", turnoverLimit: "Absolute profit method", audit: "> ₹1Cr turnover", regime: "Old preferred" },
 { type: "Partner in Firm", itr: "ITR-3", turnoverLimit: "Share of profit", audit: "Not required", regime: "New usually better" },
 { type: "Presumptive Business (44AD)", itr: "ITR-4", turnoverLimit: "6-8% of turnover", audit: "Not required", regime: "New usually better" },
];

const TESTIMONIALS = [
 { name: "Arjun Mehta", location: "Pune", rating: 5, text: "I do F&O trading and run a small consultancy. DoStartup computed my F&O turnover automatically, said audit not needed, and filed ITR-3 in 15 minutes. Saved ₹8,000 vs CA fees!", role: "F&O Trader" },
 { name: "Kavitha Iyer", location: "Chennai", rating: 5, text: "As a freelance software developer, I had no idea how to file ITR-3. DoStartup's AI read my invoices, maximized my expense claims, and got me a ₹34,000 refund.", role: "Freelancer" },
 { name: "Manish Gupta", location: "Jaipur", rating: 5, text: "My business had ₹80 lakh turnover. DoStartup confirmed no audit required, uploaded Tally data, and filed in one sitting. Best tax platform for small businesses!", role: "Business Owner" },
];

const BROKERS = ["Zerodha", "Groww", "Angel One", "ICICI Direct", "HDFC Sec", "Upstox", "Tally", "Zoho Books"];

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

// ─────────────────────────────────────────────
// STATUS CELL
// ─────────────────────────────────────────────
function StatusCell({ val }: { val: boolean | string }) {
 if (val === true) return <CheckCircle size={16} className="text-orange-500 mx-auto" />;
 if (val === false) return <XCircle size={16} className="text-gray-300 mx-auto" />;
 if (val === "~") return <span className="text-orange-400 font-bold text-sm">~</span>;
 return <span className="font-bold text-sm text-orange-500">{val}</span>;
}

// ─────────────────────────────────────────────
// RESULT ROW
// ─────────────────────────────────────────────
function ResultRow({
 label, value, color = "text-black", tooltip,
}: {
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
export default function ITR3Page() {
 const [calc, setCalc] = useState<CalcState>({
 salary: 0,
 businessIncome: 2500000,
 businessExpenses: 800000,
 capitalGains: 150000,
 houseProperty: 0,
 ded80c: 150000,
 ded80d: 25000,
 age: "below60",
 businessType: "profession",
 });

 const upd = useCallback(
 function update<K extends keyof CalcState>(k: K, v: CalcState[K]) {
 setCalc((p) => ({ ...p, [k]: v }));
 },
 []
 );

 const result = runCalc(calc);
 const [openFaq, setOpenFaq] = useState<number | null>(null);

 const resetCalc = () =>
 setCalc({
 salary: 0, businessIncome: 2500000, businessExpenses: 800000,
 capitalGains: 150000, houseProperty: 0,
 ded80c: 150000, ded80d: 25000, age: "below60", businessType: "profession",
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
 AY 2026-27 · ITR-3 Filing Open · Last Date: July 31, 2026
 </div>

 <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black leading-[1.08] mb-5">
 File <span className="text-orange-500">ITR-3</span> Online
 <br />
 For <span className="text-orange-500">Business & F&O</span>
 </h1> 

 <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
 For freelancers, business owners, F&O traders & professionals. Our AI imports your books, computes turnover, maximizes expenses, and files ITR-3 without errors.
 <span className="block mt-2 text-black font-semibold">
 Compare with ClearTax, Tax2Win, Quicko, H&R Block & TaxSpanner — 40% cheaper!
 </span>
 </p>

 <div className="flex flex-wrap gap-3 mb-10">
 <Link href="#pricing"
 className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3.5 rounded-full text-base transition-all hover:shadow-xl hover:shadow-orange-100 hover:-translate-y-0.5 inline-flex items-center gap-2 group">
 🚀 Start Filing ITR-3
 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
 </Link>
 <Link href="#calculator"
 className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold px-7 py-3.5 rounded-full text-base transition-all">
 <Calculator size={16} className="inline mr-2" />
 Business Tax Calculator →
 </Link>
 </div>

 <div className="flex gap-8 flex-wrap">
 {[
 ["1L+", "ITR-3 Filed", <FileText key="f" size={16} className="text-orange-500" />],
 ["₹85Cr+", "Business Income", <Briefcase key="b" size={16} className="text-orange-500" />],
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
 🤖 AI ITR-3 Assistant — Live
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
 <Zap size={12} className="text-orange-500" /> Processing Business Returns
 </span>
 <span className="font-bold text-orange-500">78% Complete</span>
 </div>
 <div className="h-2 bg-white rounded-full overflow-hidden">
 <div className="h-full w-[78%] bg-orange-500 rounded-full" />
 </div>
 <p className="text-[10px] text-gray-400 mt-2">Verifying expenses & depreciation • 2 steps remaining</p>
 </div>

 <div className="mt-4 pt-4 border-t border-gray-100">
 <p className="text-gray-400 text-xs mb-2">📊 Supported Platforms</p>
 <div className="flex flex-wrap gap-1.5">
 {BROKERS.map((b) => (
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
 <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-black mb-3">Who Should File ITR-3?</h2>
 <p className="text-gray-500 max-w-xl mx-auto text-sm">
 ITR-3 is for individuals and HUFs with business or profession income. If you run a business, freelance, trade F&O, or are a partner in a firm — ITR-3 is your form.
 </p>
 </div>

 <div className="grid md:grid-cols-2 gap-6 mb-8">
 <div className="bg-white border-2 border-orange-500 rounded-2xl p-6 hover:shadow-lg hover:shadow-orange-100 transition-all">
 <div className="flex items-center gap-2 font-bold text-black mb-4 text-base">
 <CheckCircle size={20} className="text-orange-500" /> File ITR-3 If You Have:
 </div>
 <ul className="space-y-2.5">
 {[
 "Business income (proprietorship, trading, manufacturing)",
 "Professional income (doctor, lawyer, CA, architect, consultant)",
 "Freelance income (developer, designer, writer, etc.)",
 "F&O (Futures & Options) trading income or loss",
 "Intraday equity trading income",
 "Partner's share of profit from a firm",
 "Business income + salary + capital gains together",
 "Income from speculative business (intraday)",
 ].map((item) => (
 <li key={item} className="flex gap-2 text-sm text-black">
 <span className="text-orange-500 mt-0.5 flex-shrink-0 font-bold">✓</span>{item}
 </li>
 ))}
 </ul>
 </div>

 <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all">
 <div className="flex items-center gap-2 font-bold text-black mb-4 text-base">
 <AlertTriangle size={20} className="text-orange-500" /> NOT ITR-3 — Use Other Forms:
 </div>
 <ul className="space-y-3">
 {[
 { form: "ITR-1", desc: "Only salary + 1 house property, no business income, income ≤ ₹50L" },
 { form: "ITR-2", desc: "Salary + capital gains + multiple properties — no business income" },
 { form: "ITR-4", desc: "Presumptive business income under Section 44AD / 44ADA / 44AE" },
 ].map((item) => (
 <li key={item.form} className="flex gap-3 text-sm">
 <span className="bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-md flex-shrink-0 h-fit">{item.form}</span>
 <span className="text-black">{item.desc}</span>
 </li>
 ))}
 </ul>
 <div className="mt-5 pt-4 border-t border-gray-100">
 <p className="text-xs text-black font-semibold mb-1">🤖 Not sure which form?</p>
 <p className="text-xs text-gray-500">DoStartup AI automatically identifies the correct ITR form — just answer 3 quick questions about your income.</p>
 </div>
 </div>
 </div>

 {/* Who Files ITR-3 Table */}
 <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
 <h3 className="font-display font-bold text-black text-lg mb-4 flex items-center gap-2">
 <BarChart3 size={20} className="text-orange-500" />
 📊 ITR-3 Filing Guide by Income Type
 </h3>
 <div className="overflow-x-auto">
 <table className="w-full text-xs sm:text-sm">
 <thead>
 <tr className="bg-orange-500 text-white">
 <th className="px-3 py-2.5 text-left rounded-tl-xl font-bold">Income Type</th>
 <th className="px-3 py-2.5 text-center font-bold">ITR Form</th>
 <th className="px-3 py-2.5 text-center font-bold">Turnover Method</th>
 <th className="px-3 py-2.5 text-center font-bold">Audit Threshold</th>
 <th className="px-3 py-2.5 text-right rounded-tr-xl font-bold">Best Regime</th>
 </tr>
 </thead>
 <tbody>
 {INCOME_TYPES_TABLE.map((row, i) => (
 <tr key={row.type} className={`border-b border-gray-100 hover:bg-orange-50 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-white"}`}>
 <td className="px-3 py-2.5 font-semibold text-black">{row.type}</td>
 <td className="px-3 py-2.5 text-center font-bold text-orange-500">{row.itr}</td>
 <td className="px-3 py-2.5 text-center text-gray-600">{row.turnoverLimit}</td>
 <td className="px-3 py-2.5 text-center text-gray-600">{row.audit}</td>
 <td className="px-3 py-2.5 text-right font-bold text-orange-500">{row.regime}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 <div className="mt-3 grid sm:grid-cols-2 gap-2">
 <p className="text-xs text-gray-600 bg-orange-50 rounded-xl px-3 py-2 border border-orange-100">
 💡 <strong className="text-black">F&O Turnover:</strong> Computed using <strong className="text-orange-500">absolute profit method</strong> — sum of all profits + losses (not contract value).
 </p>
 <p className="text-xs text-gray-600 bg-orange-50 rounded-xl px-3 py-2 border border-orange-100">
 💡 <strong className="text-black">Business Loss:</strong> ITR-3 losses can be carried forward 8 years and set off against future business profits.
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
 We studied every competitor and built what they missed — a truly AI-first ITR-3 experience at the lowest price in India.
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
 Feature Comparison — ITR-3 Platforms
 </h3>
 </div>
 <table className="w-full text-sm">
 <thead>
 <tr className="bg-white">
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
 { feature: "Tally / Books Import", d: true, c: true, t: "~", q: true, h: false, ts: "~" },
 { feature: "F&O Turnover Calc", d: true, c: true, t: true, q: true, h: false, ts: "~" },
 { feature: "AI Expense Optimizer", d: true, c: false, t: false, q: false, h: false, ts: false },
 { feature: "Depreciation Engine", d: true, c: "~", t: false, q: "~", h: false, ts: false },
 { feature: "Tax Audit (3CA/3CD)", d: true, c: true, t: true, q: "~", h: true, ts: true },
 { feature: "Price (ITR-3)", d: "₹1,499", c: "₹1,999", t: "₹1,799", q: "₹1,499", h: "₹2,499", ts: "₹1,299" },
 ].map((row, i) => (
 <tr key={row.feature} className={`border-b border-gray-100 hover:bg-orange-50 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-white"}`}>
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
 DoStartup.in — Best AI ITR-3 platform at the lowest price
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
 <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-black mb-3">Built for Complex ITR-3 Filing</h2>
 <p className="text-gray-500 max-w-2xl mx-auto text-sm">
 Every ITR-3 complexity — books of accounts, F&O turnover, depreciation, audit — handled by AI automatically.
 <span className="block mt-1 text-black font-semibold">99.3% accuracy in business income computation</span>
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
 <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-black">File ITR-3 in 5 Simple Steps</h2>
 <p className="text-gray-500 text-sm mt-2">Complex business returns, simple filing — our AI handles everything</p>
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
 Start your ITR-3 filing now <ArrowRight size={14} />
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
 ITR-3 Business Tax Calculator FY 2025-26
 </h2>
 <p className="text-gray-500 text-sm max-w-2xl mx-auto">
 Scroll sliders to compute business income tax, compare regimes & check audit requirement.
 <span className="block mt-1 text-orange-500 font-semibold">Used by 20,000+ business owners this month</span>
 </p>
 </div>

 <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl overflow-hidden">
 <div className="bg-orange-500 px-6 py-4 flex items-center justify-between flex-wrap gap-3">
 <div className="flex items-center gap-3">
 <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
 <Briefcase size={20} className="text-white" />
 </div>
 <div>
 <h3 className="font-display font-extrabold text-white text-lg flex items-center gap-2">
 ITR-3 Business Tax Calculator
 <span className="text-[10px] bg-white/20 text-white px-2 py-0.5 rounded-full">Live</span>
 </h3>
 <p className="text-orange-100 text-xs mt-0.5">AY 2026-27 | Includes Tax Audit Check</p>
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
 Scroll to Enter Your Details
 </h4>

 {/* Business Type */}
 <div className="mb-5">
 <label className="block text-xs font-semibold text-black mb-1.5">Business / Income Type</label>
 <select value={calc.businessType} onChange={(e) => upd("businessType", e.target.value as BusinessType)}
 className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-xl text-sm font-medium text-black focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-colors bg-white">
 <option value="profession">Professional / Freelancer (44ADA not opted)</option>
 <option value="business">Business Owner / Proprietor</option>
 <option value="fno">F&O / Intraday Trader</option>
 </select>
 </div>

 {/* Income */}
 <div className="mb-2 pb-4 border-b border-gray-100">
 <p className="text-xs font-bold text-orange-500 mb-4 uppercase flex items-center gap-1">
 <Briefcase size={12} /> Income & Revenue
 </p>
 <SliderRow label="Gross Business / Professional Revenue (₹)" value={calc.businessIncome} min={0} max={20000000} step={100000} onChange={(v) => upd("businessIncome", v)} note="Total receipts / turnover before expenses" />
 <SliderRow label="Total Business Expenses (₹)" value={calc.businessExpenses} min={0} max={10000000} step={50000} onChange={(v) => upd("businessExpenses", v)} note="Rent, salary, depreciation, professional fees, etc." />
 <SliderRow label="Salary Income (₹) — if any" value={calc.salary} min={0} max={5000000} step={50000} onChange={(v) => upd("salary", v)} />
 <SliderRow label="Capital Gains (₹) — if any" value={calc.capitalGains} min={0} max={5000000} step={25000} onChange={(v) => upd("capitalGains", v)} />
 </div>

 {/* Deductions */}
 <div className="pt-4">
 <p className="text-xs font-bold text-orange-500 mb-4 uppercase ">
 🏛 Old Regime Deductions
 </p>
 <SliderRow label="80C Investments — Max ₹1,50,000" value={calc.ded80c} min={0} max={150000} step={5000} onChange={(v) => upd("ded80c", v)} />
 <SliderRow label="80D Health Insurance — Max ₹75,000" value={calc.ded80d} min={0} max={75000} step={2500} onChange={(v) => upd("ded80d", v)} />

 <div>
 <label className="block text-xs font-semibold text-black mb-1.5 flex items-center gap-1">
 <Users size={13} /> Age Group
 </label>
 <select value={calc.age} onChange={(e) => upd("age", e.target.value as AgeGroup)}
 className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-xl text-sm font-medium text-black focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-colors bg-white">
 <option value="below60">Below 60 years</option>
 <option value="60to80">60–80 years (Senior Citizen)</option>
 <option value="above80">Above 80 years (Super Senior)</option>
 </select>
 </div>
 </div>
 </div>

 {/* RESULTS */}
 <div className="p-6 bg-white">
 <h4 className="font-display font-bold text-black text-base mb-5 flex items-center gap-2">
 <BarChart3 size={16} className="text-orange-500" />
 Your Tax Breakdown
 </h4>

 {/* Audit Alert */}
 <div className={`rounded-2xl p-4 mb-4 border-2 ${result.auditRequired ? "bg-red-50 border-red-300" : "bg-orange-50 border-orange-200"}`}>
 <p className={`text-xs font-bold uppercase mb-1 ${result.auditRequired ? "text-red-600" : "text-orange-500"}`}>
 {result.auditRequired ? "⚠️ Tax Audit Required" : "✅ No Tax Audit Required"}
 </p>
 <p className={`text-sm font-semibold ${result.auditRequired ? "text-red-800" : "text-black"}`}>
 {result.auditRequired
 ? "Your turnover exceeds the audit threshold. Form 3CA/3CB/3CD required by Oct 31, 2026."
 : "Your turnover is within limits. File ITR-3 directly by July 31, 2026."}
 </p>
 </div>

 {/* Business Income Summary */}
 <div className="bg-white rounded-2xl border-2 border-orange-500 p-4 mb-4">
 <p className="text-xs font-bold text-orange-500 mb-2 uppercase ">💼 Business Income</p>
 <ResultRow label="Gross Revenue" value={fmt(calc.businessIncome)} />
 <ResultRow label="Less: Business Expenses" value={`- ${fmt(calc.businessExpenses)}`} color="text-gray-500" />
 <ResultRow label="Net Business Income" value={fmt(result.netBusinessIncome)} color="text-orange-500" />
 </div>

 {/* Full Summary */}
 <div className="bg-white rounded-2xl border border-gray-200 p-4 mb-4 shadow-sm">
 <ResultRow label="Gross Total Income" value={fmt(result.grossTotal)} />
 <ResultRow label="Total Tax — New Regime" value={fmt(result.totalTaxNew)} color="text-orange-500" />
 <ResultRow label="Total Tax — Old Regime" value={fmt(result.totalTaxOld)} color="text-orange-500" />
 <ResultRow label="Est. TDS Deducted" value={fmt(result.tds)} tooltip="TDS on salary component" />
 <ResultRow
 label={result.refund >= 0 ? "🎉 Estimated Tax Refund" : "⚠️ Tax Payable"}
 value={result.refund >= 0 ? fmt(result.refund) : fmt(-result.refund)}
 color={result.refund >= 0 ? "text-orange-500" : "text-red-500"}
 />
 </div>

 {/* AI Recommendation */}
 <div className="rounded-2xl p-4 border-2 border-orange-500 bg-orange-50 text-center mb-4 transform hover:scale-105 transition-transform">
 <div className="text-xs font-bold uppercase mb-1 flex items-center justify-center gap-1 text-orange-500">
 <Brain size={14} /> AI Recommendation
 </div>
 <div className="font-display font-bold text-black text-base">
 {result.recommendation === "new" ? "✨ New Regime is better for you" : "🏛 Old Regime is better for you"}
 </div>
 <div className="font-extrabold text-2xl mt-1 text-orange-500">
 Save {fmt(result.savings)} more
 </div>
 </div>

 {/* Regime Pills */}
 <div className="grid grid-cols-2 gap-3 mb-4">
 {[
 { label: "New Regime", tax: result.totalTaxNew, win: result.recommendation === "new" },
 { label: "Old Regime", tax: result.totalTaxOld, win: result.recommendation === "old" },
 ].map((r) => (
 <div key={r.label} className={`rounded-xl p-3 border-2 text-center transition-all ${r.win ? "bg-orange-500 border-orange-500 shadow-lg" : "bg-white border-gray-200 hover:border-orange-500"}`}>
 <div className={`text-xs font-bold ${r.win ? "text-white" : "text-gray-500"}`}>{r.label}</div>
 <div className={`font-extrabold text-lg ${r.win ? "text-white" : "text-black"}`}>{fmt(r.tax)}</div>
 {r.win && (
 <div className="text-white text-[10px] mt-0.5 flex items-center justify-center gap-1">
 <CheckCircle size={10} /> BETTER CHOICE
 </div>
 )}
 </div>
 ))}
 </div>

 <Link href="#pricing"
 className="block bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm text-center py-3.5 rounded-2xl transition-all hover:shadow-lg hover:-translate-y-0.5">
 🚀 File ITR-3 Now — Use This Data
 </Link>
 <p className="text-center text-[10px] text-gray-400 mt-2">
 * Estimates only. Consult CA for tax audit cases & complex business income.
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
 <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-black mb-2">Trusted by 1 Lakh+ Business Owners</h2>
 <p className="text-gray-500 text-sm">See what freelancers, traders & business owners say about DoStartup.in</p>
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
 <div id="pricing">
<DoStartupPricing 
  title="Simple Pricing for ITR-3"
  subtitle="No hidden charges. Cheaper than every major competitor. All plans include free revisions. GST included in price."
  plans={[
    {
      title: "Self File",
      price: "999",
      subtitle: "GST Included",
      description: "For freelancers & professionals with simple business income",
      features: [
        "P&L & Balance Sheet import",
        "Business income calculation",
        "F&O turnover check",
        "e-File to IT Dept"
      ],
      buttonText: "Start Filing"
    },
    {
      title: "AI Pro",
      price: "1,499",
      subtitle: "GST Included",
      description: "Best for business owners, traders & multiple income sources",
      features: [
        "Everything in Self File",
        "AI expense maximizer",
        "Depreciation calculator",
        "AIS deep reconciliation",
        "Capital gains + F&O income"
      ],
      isPopular: true,
      buttonText: "Get AI Pro"
    },
    {
      title: "CA Expert",
      price: "2,999",
      subtitle: "GST Included",
      description: "Dedicated CA + Tax Audit for complex business filing",
      features: [
        "Everything in AI Pro",
        "Dedicated CA assigned",
        "Tax audit (3CA/3CB/3CD)",
        "Notice response support",
        "Year-round tax planning"
      ],
      buttonText: "Hire a CA"
    }
  ]}
/>
</div>

 {/* ════════════════════════════════════
 FAQ
 ════════════════════════════════════ */}
 <section className="bg-white py-6 px-4 sm:px-6" id="faq">
 <div className="max-w-4xl mx-auto">
 <div className="text-center mb-10">
 <p className="text-orange-500 text-xs font-bold uppercase mb-2">FAQ</p>
 <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-black">ITR-3 Questions Answered</h2>
 <p className="text-gray-500 text-sm mt-2">Everything about business income, F&O trading & tax audit.</p>
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
 <p className="text-sm text-gray-500 mb-4">Still have questions about ITR-3?</p>
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
 Complex Business. Simple Filing.
 </h2>
 <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
 Join 1 lakh+ business owners, freelancers & F&O traders who trust DoStartup AI to file ITR-3 accurately.
 <span className="block mt-2 text-black font-semibold">Compare with ClearTax, Tax2Win, Quicko, H&R Block & TaxSpanner — we&apos;re 40% cheaper!</span>
 </p>
 <div className="flex flex-wrap gap-4 justify-center">
 <Link href="#pricing"
 className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-base px-8 py-4 rounded-full hover:shadow-xl hover:shadow-orange-100 hover:-translate-y-1 transition-all duration-150 group">
 🚀 File ITR-3 Free Today
 <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
 </Link>
 <Link href="#calculator"
 className="inline-flex items-center gap-2 border-2 border-orange-500 text-orange-500 font-semibold text-base px-8 py-4 rounded-full hover:bg-orange-500 hover:text-white transition-all">
 <Calculator size={18} />Try Calculator First →
 </Link>
 </div>
 <div className="mt-8 flex items-center justify-center gap-6 text-xs text-gray-400">
 <span className="flex items-center gap-1"><Shield size={12} className="text-orange-500" /> 256-bit SSL</span>
 <span className="flex items-center gap-1"><Clock size={12} className="text-orange-500" /> 15-min filing</span>
 <span className="flex items-center gap-1"><Users size={12} className="text-orange-500" /> 1L+ businesses</span>
 </div>
 </div>
 </section>

 {/* ════════════════════════════════════
 FOOTER
 ════════════════════════════════════ */}
 <Footer />

 </main>
 </>
 );
}
