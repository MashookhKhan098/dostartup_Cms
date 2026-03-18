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
    Globe,
    Building2,
    Truck,
    Stethoscope,
    PieChart,
    Percent,
} from "lucide-react";

// ─────────────────────────────────────────────
//  TYPES
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
//  PURE TAX CALCULATION — ITR-4 SPECIFIC
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
    const recommendation: "new" | "old" = totalTaxNew <= totalTaxOld ? "new" : "old";
    const savings = Math.abs(totalTaxNew - totalTaxOld);

    return {
        presumptiveIncome, grossTotal,
        totalTaxNew, totalTaxOld,
        tds, refund, recommendation, savings,
        presumptiveRate, auditRequired,
    };
}

const fmt = (n: number) => "₹" + Math.abs(Math.round(n)).toLocaleString("en-IN");

// ─────────────────────────────────────────────
//  DATA
// ─────────────────────────────────────────────
const AI_STEPS = [
    { icon: "📊", title: "Turnover Verified from AIS", desc: "AI fetched all business receipts — ₹42L in 4 seconds", bg: "bg-orange-500/20" },
    { icon: "💡", title: "Presumptive Rate Applied", desc: "Section 44AD: 6% digital + 8% cash receipts", bg: "bg-orange-500/15" },
    { icon: "⚖️", title: "Regime Comparison Done", desc: "Old Regime saves ₹22,400 with your deductions", bg: "bg-orange-500/10" },
    { icon: "✅", title: "ITR-4 Ready to File", desc: "0 errors • No audit required • Refund: ₹18,600", bg: "bg-orange-500/20" },
];

const WHY_FEATURES = [
    { icon: <Percent size={20} className="text-orange-500" />, title: "Auto Presumptive Calculation", desc: "AI reads your turnover from AIS/26AS and applies correct 44AD (6%/8%), 44ADA (50%), or 44AE rate instantly." },
    { icon: <Brain size={20} className="text-orange-500" />, title: "Digital vs Cash Split", desc: "Automatically splits receipts into digital (6%) and cash (8%) for Section 44AD to minimize your tax." },
    { icon: <Search size={20} className="text-orange-500" />, title: "Deduction Maximizer", desc: "Finds every 80C, 80D, NPS, HRA deduction available under presumptive scheme to reduce your tax liability." },
    { icon: <Shield size={20} className="text-orange-500" />, title: "Bank-Grade Security", desc: "256-bit SSL + SOC2 certified. Your turnover and income data is encrypted end-to-end and never sold." },
];

const AI_FEATURES = [
    { icon: <Percent size={26} />, title: "Presumptive Tax Engine", desc: "Computes income under 44AD (business), 44ADA (profession), or 44AE (transport) with correct rates automatically." },
    { icon: <PieChart size={26} />, title: "Digital vs Cash Optimizer", desc: "Splits receipts into digital (6% tax) and cash (8% tax) for 44AD filers to ensure minimum presumptive income." },
    { icon: <Search size={26} />, title: "Deduction Finder", desc: "AI identifies all allowed deductions under presumptive scheme — 80C, 80D, NPS, HRA — to minimize final tax." },
    { icon: <BarChart3 size={26} />, title: "Turnover Auto-Fetch", desc: "Fetches your business receipts directly from AIS, 26AS, and GST returns. No manual entry needed." },
    { icon: <Bell size={26} />, title: "AIS/26AS Reconciler", desc: "Matches declared turnover with AIS entries to prevent mismatches that trigger IT notices or scrutiny." },
    { icon: <AlertTriangle size={26} />, title: "ITR-4 Notice Shield", desc: "180+ validation rules — cash receipt limits, turnover caps, and deduction eligibility verified before filing." },
];

const PROCESS_STEPS = [
    { num: "01", icon: "👤", label: "Create Free Account" },
    { num: "02", icon: "📊", label: "Enter Turnover Details" },
    { num: "03", icon: "🤖", label: "AI Applies Presumptive Rate" },
    { num: "04", icon: "✅", label: "Review & Optimize" },
    { num: "05", icon: "🎉", label: "File & Track Refund" },
];

const PLANS = [
    {
        name: "Self File",
        price: "₹499",
        period: "/ filing",
        desc: "For small businesses & professionals under presumptive scheme",
        features: [
            { text: "44AD / 44ADA / 44AE support", ok: true },
            { text: "Digital vs cash split (44AD)", ok: true },
            { text: "Basic deduction hints", ok: true },
            { text: "e-File to IT Dept", ok: true },
            { text: "CA review", ok: false },
        ],
        cta: "Start Filing",
        featured: false,
    },
    {
        name: "AI Assisted",
        price: "₹699",
        period: "/ filing",
        desc: "Best for business owners wanting maximum deductions & zero errors",
        features: [
            { text: "Everything in Self File", ok: true },
            { text: "AI deduction maximizer", ok: true },
            { text: "AIS/26AS reconciliation", ok: true },
            { text: "Notice Shield pre-check", ok: true },
            { text: "Priority chat support", ok: true },
        ],
        cta: "Get AI Assist",
        featured: true,
        badge: "POPULAR",
    },
    {
        name: "CA Expert",
        price: "₹1,499",
        period: "/ filing",
        desc: "Dedicated CA for complex presumptive + salary + property income",
        features: [
            { text: "Everything in AI Assisted", ok: true },
            { text: "Dedicated CA assigned", ok: true },
            { text: "Phone consultation", ok: true },
            { text: "Notice response support", ok: true },
            { text: "Year-round tax planning", ok: true },
        ],
        cta: "Hire a CA",
        featured: false,
    },
];

const FAQS = [
    { q: "Who should file ITR-4 (Sugam)?", a: "ITR-4 is for individuals, HUFs, and firms (other than LLP) opting for presumptive taxation under Section 44AD (business up to ₹2 crore), 44ADA (professionals up to ₹75 lakh), or 44AE (transport operators). Total income must be ≤ ₹50 lakh." },
    { q: "What is Section 44AD presumptive taxation?", a: "Under Section 44AD, small businesses with turnover up to ₹2 crore can declare income at 8% of turnover (or 6% for digital receipts) without maintaining detailed books of accounts. No tax audit is required if you declare income at or above this rate." },
    { q: "What is Section 44ADA for professionals?", a: "Section 44ADA applies to specified professionals (doctors, lawyers, CAs, engineers, architects, consultants) with gross receipts up to ₹75 lakh. They can declare 50% of gross receipts as income and skip maintaining books of accounts." },
    { q: "What is the difference between ITR-3 and ITR-4?", a: "ITR-4 is for those opting for presumptive taxation (44AD/44ADA/44AE) — simpler filing without detailed books. ITR-3 is for those maintaining actual books of accounts and declaring actual profit/loss. F&O traders must always use ITR-3." },
    { q: "What is the turnover limit for ITR-4?", a: "Section 44AD: ₹2 crore (or ₹3 crore if 95%+ receipts are digital). Section 44ADA: ₹75 lakh (or ₹75 lakh). Section 44AE: unlimited vehicles but ≤ 10 goods vehicles at any time. Total income must not exceed ₹50 lakh." },
    { q: "Can I claim deductions under 80C, 80D in ITR-4?", a: "Yes. Under the Old Regime, you can claim all deductions (80C, 80D, 80CCD, home loan interest, HRA, etc.) in addition to declaring presumptive income. Our AI identifies every deduction you're eligible for." },
    { q: "What is the last date to file ITR-4 for AY 2026-27?", a: "The due date for ITR-4 is July 31, 2026. Since presumptive taxation does not require a tax audit, there is no extended deadline. Belated returns can be filed till December 31, 2026 with a late fee under Section 234F." },
    { q: "Can I opt out of presumptive taxation scheme?", a: "Yes, but if you opt out of 44AD, you cannot re-enter the scheme for 5 consecutive years. If you opt out of 44ADA, you can re-enter next year. DoStartup's AI advises whether presumptive taxation is beneficial for your specific situation." },
];

const SCHEME_TABLE = [
    { section: "44AD", who: "Small Business Owners", limit: "Turnover ≤ ₹2 Crore (₹3Cr if 95% digital)", rate: "6% (digital) / 8% (cash)", audit: "Not required" },
    { section: "44ADA", who: "Specified Professionals", limit: "Gross Receipts ≤ ₹75 Lakh", rate: "50% of gross receipts", audit: "Not required" },
    { section: "44AE", who: "Transport Operators", limit: "≤ 10 goods vehicles", rate: "₹1,000/ton/month (HGV) or ₹7,500/vehicle/month", audit: "Not required" },
];

const TESTIMONIALS = [
    { name: "Suresh Patel", location: "Surat", rating: 5, text: "I run a small grocery business. DoStartup computed my 44AD income automatically — 6% on digital, 8% on cash. Got ₹22,000 refund in 15 days. Super easy!", role: "Small Business Owner" },
    { name: "Dr. Priya Nair", location: "Kochi", rating: 5, text: "As a doctor with clinic income under 44ADA, I just entered my receipts and DoStartup filed my ITR-4 in 10 minutes. Saved ₹18,000 vs my previous CA.", role: "Doctor (44ADA)" },
    { name: "Ramesh Yadav", location: "Lucknow", rating: 5, text: "Transport business with 4 trucks. DoStartup calculated 44AE income perfectly, found 80C deductions I missed, and filed everything in one go. Excellent!", role: "Transport Operator" },
];

const PROFESSIONALS_44ADA = ["Doctor", "Lawyer", "CA / CMA / CS", "Architect", "Engineer", "Interior Designer", "Technical Consultant", "Film Artist"];

// ─────────────────────────────────────────────
//  SLIDER COMPONENT
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
//  MAIN PAGE
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
        <K extends keyof CalcState>(k: K, v: CalcState[K]) =>
            setCalc((p) => ({ ...p, [k]: v })),
        []
    );

    const result = runCalc(calc);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const resetCalc = () =>
        setCalc({
            schemeType: "44AD", turnover: 4000000, digitalReceipts: 2500000,
            salary: 0, houseProperty: 0, ded80c: 150000, ded80d: 25000, age: "below60",
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
                            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-500 text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
                                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                                AY 2026-27 · ITR-4 Filing Open · Last Date: July 31, 2026
                            </div>

                            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black leading-[1.08] mb-5">
                                File <span className="text-orange-500">ITR-4</span> Online
                                <br />
                                <span className="text-orange-500">Presumptive Tax</span> Made Easy
                            </h1>

                            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
                                For small business owners, doctors, CAs, lawyers & transport operators. No books needed — our AI applies the correct 44AD, 44ADA, or 44AE rate and files in minutes.
                                <span className="block mt-2 text-black font-semibold">
                                    Compare with ClearTax, Tax2Win, Quicko, H&R Block & TaxSpanner — 40% cheaper!
                                </span>
                            </p>

                            <div className="flex flex-wrap gap-3 mb-10">
                                <Link href="#pricing"
                                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3.5 rounded-full text-base transition-all hover:shadow-xl hover:shadow-orange-100 hover:-translate-y-0.5 inline-flex items-center gap-2 group">
                                    🚀 Start Filing ITR-4
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link href="#calculator"
                                    className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold px-7 py-3.5 rounded-full text-base transition-all">
                                    <Calculator size={16} className="inline mr-2" />
                                    Presumptive Tax Calculator →
                                </Link>
                            </div>

                            <div className="flex gap-8 flex-wrap">
                                {[
                                    ["3L+", "ITR-4 Filed", <FileText key="f" size={16} className="text-orange-500" />],
                                    ["₹60Cr+", "Turnover Filed", <TrendingUp key="t" size={16} className="text-orange-500" />],
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
                                        🤖 AI ITR-4 Assistant — Live
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
                                            <Zap size={12} className="text-orange-500" /> Applying Presumptive Rates
                                        </span>
                                        <span className="font-bold text-orange-500">88% Complete</span>
                                    </div>
                                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full w-[88%] bg-orange-500 rounded-full" />
                                    </div>
                                    <p className="text-[10px] text-gray-400 mt-2">Verifying digital vs cash receipts • 1 step remaining</p>
                                </div>

                                <div className="mt-4 pt-4 border-t border-gray-100">
                                    <p className="text-gray-400 text-xs mb-2">✅ Supported Sections</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {["44AD — Business", "44ADA — Profession", "44AE — Transport", "No Books Needed", "No Tax Audit"].map((b) => (
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
                            <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Trusted by</span>
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
                <section className="bg-white py-16 px-4 sm:px-6" id="eligibility">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-10">
                            <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2 flex items-center justify-center gap-2">
                                <Target size={14} /> Eligibility
                            </p>
                            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-black mb-3">Who Should File ITR-4?</h2>
                            <p className="text-gray-500 max-w-xl mx-auto text-sm">
                                ITR-4 (Sugam) is the simplest form for small business owners, professionals & transport operators who opt for presumptive taxation — no books of accounts required.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-white border-2 border-orange-500 rounded-2xl p-6 hover:shadow-lg hover:shadow-orange-100 transition-all">
                                <div className="flex items-center gap-2 font-bold text-black mb-4 text-base">
                                    <CheckCircle size={20} className="text-orange-500" /> File ITR-4 If You Are:
                                </div>
                                <ul className="space-y-2.5">
                                    {[
                                        "Small business owner — turnover ≤ ₹2 crore (Sec 44AD)",
                                        "Professional (doctor, CA, lawyer) — receipts ≤ ₹75 lakh (Sec 44ADA)",
                                        "Transport operator with ≤ 10 goods vehicles (Sec 44AE)",
                                        "Individual, HUF, or firm (not LLP) — total income ≤ ₹50 lakh",
                                        "Want to skip maintaining detailed books of accounts",
                                        "Want to avoid mandatory tax audit",
                                        "Have salary income along with business/professional income",
                                        "Have one house property income along with business income",
                                    ].map((item) => (
                                        <li key={item} className="flex gap-2 text-sm text-black">
                                            <span className="text-orange-500 mt-0.5 flex-shrink-0 font-bold">✓</span>{item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all">
                                <div className="flex items-center gap-2 font-bold text-black mb-4 text-base">
                                    <AlertTriangle size={20} className="text-orange-500" /> NOT ITR-4 — Use Other Forms:
                                </div>
                                <ul className="space-y-3 mb-5">
                                    {[
                                        { form: "ITR-1", desc: "Only salary + 1 house property, no business income, income ≤ ₹50L" },
                                        { form: "ITR-2", desc: "Salary + capital gains + multiple properties — no business income" },
                                        { form: "ITR-3", desc: "Business income with actual books, F&O trading, income > ₹50L" },
                                    ].map((item) => (
                                        <li key={item.form} className="flex gap-3 text-sm">
                                            <span className="bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-md flex-shrink-0 h-fit">{item.form}</span>
                                            <span className="text-black">{item.desc}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* 44ADA Professionals */}
                                <div className="pt-4 border-t border-gray-100">
                                    <p className="text-xs font-semibold text-black mb-2">👨‍⚕️ Professionals eligible for 44ADA:</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {PROFESSIONALS_44ADA.map((p) => (
                                            <span key={p} className="bg-orange-50 text-orange-500 border border-orange-100 text-xs px-2 py-0.5 rounded-full">{p}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Scheme Comparison Table */}
                        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                            <h3 className="font-display font-bold text-black text-lg mb-4 flex items-center gap-2">
                                <BarChart3 size={20} className="text-orange-500" />
                                📊 Presumptive Taxation Scheme Comparison
                            </h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-xs sm:text-sm">
                                    <thead>
                                        <tr className="bg-orange-500 text-white">
                                            <th className="px-3 py-2.5 text-left rounded-tl-xl font-bold">Section</th>
                                            <th className="px-3 py-2.5 text-left font-bold">Who Can Use</th>
                                            <th className="px-3 py-2.5 text-center font-bold">Turnover Limit</th>
                                            <th className="px-3 py-2.5 text-center font-bold">Presumptive Rate</th>
                                            <th className="px-3 py-2.5 text-right rounded-tr-xl font-bold">Tax Audit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {SCHEME_TABLE.map((row, i) => (
                                            <tr key={row.section} className={`border-b border-gray-100 hover:bg-orange-50 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                                                <td className="px-3 py-2.5 font-bold text-orange-500">{row.section}</td>
                                                <td className="px-3 py-2.5 font-semibold text-black">{row.who}</td>
                                                <td className="px-3 py-2.5 text-center text-gray-600">{row.limit}</td>
                                                <td className="px-3 py-2.5 text-center font-bold text-orange-500">{row.rate}</td>
                                                <td className="px-3 py-2.5 text-right font-bold text-green-600">{row.audit}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="mt-3 grid sm:grid-cols-2 gap-2">
                                <p className="text-xs text-gray-600 bg-orange-50 rounded-xl px-3 py-2 border border-orange-100">
                                    💡 <strong className="text-black">44AD Digital Benefit:</strong> If 95%+ receipts are digital, turnover limit increases to <strong className="text-orange-500">₹3 crore</strong> and rate is only 6%.
                                </p>
                                <p className="text-xs text-gray-600 bg-orange-50 rounded-xl px-3 py-2 border border-orange-100">
                                    💡 <strong className="text-black">No Books Required:</strong> Under all three schemes, you are <strong className="text-orange-500">exempt from maintaining books</strong> of accounts under Section 44AA.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ════════════════════════════════════
            WHY DOSTARTUP + COMPARE
        ════════════════════════════════════ */}
                <section className="bg-white py-16 px-4 sm:px-6" id="compare">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-10">
                            <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">Why Choose Us</p>
                            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-black mb-3">
                                Better Than{" "}
                                <span className="text-orange-500">ClearTax, Tax2Win, Quicko, H&R Block & TaxSpanner</span>
                            </h2>
                            <p className="text-gray-500 max-w-2xl mx-auto text-sm">
                                We studied every competitor and built what they missed — a truly AI-first ITR-4 experience at the lowest price in India.
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
                                        Feature Comparison — ITR-4 Platforms
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
                                            { feature: "44AD / 44ADA / 44AE", d: true, c: true, t: true, q: true, h: true, ts: true },
                                            { feature: "Digital vs Cash Split", d: true, c: "~", t: false, q: "~", h: false, ts: false },
                                            { feature: "AI Deduction Optimizer", d: true, c: false, t: false, q: false, h: false, ts: false },
                                            { feature: "AIS Turnover Auto-Fetch", d: true, c: "~", t: false, q: true, h: false, ts: "~" },
                                            { feature: "Hindi Language Support", d: true, c: false, t: false, q: false, h: false, ts: false },
                                            { feature: "Price (ITR-4)", d: "₹699", c: "₹999", t: "₹799", q: "₹699", h: "₹1,299", ts: "₹599" },
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
                                    DoStartup.in — Best AI ITR-4 platform at the lowest price
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ════════════════════════════════════
            AI FEATURES
        ════════════════════════════════════ */}
                <section className="bg-white py-16 px-4 sm:px-6" id="features">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-10">
                            <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2 flex items-center justify-center gap-2">
                                <Sparkles size={14} /> AI Technology
                            </p>
                            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-black mb-3">Built for Simple ITR-4 Filing</h2>
                            <p className="text-gray-500 max-w-2xl mx-auto text-sm">
                                Every presumptive taxation scenario — 44AD, 44ADA, 44AE, digital/cash split — handled by AI automatically.
                                <span className="block mt-1 text-black font-semibold">99.5% accuracy in presumptive income computation</span>
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
                <section className="bg-white py-16 px-4 sm:px-6" id="process">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">How It Works</p>
                            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-black">File ITR-4 in 5 Simple Steps</h2>
                            <p className="text-gray-500 text-sm mt-2">No books needed — just enter your turnover and we handle the rest</p>
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
                                Start your ITR-4 filing now <ArrowRight size={14} />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ════════════════════════════════════
            CALCULATOR
        ════════════════════════════════════ */}
                <section className="bg-white py-16 px-4 sm:px-6" id="calculator">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-10">
                            <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2 flex items-center justify-center gap-2">
                                <Calculator size={14} /> Free Tool
                            </p>
                            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-black mb-2">
                                ITR-4 Presumptive Tax Calculator FY 2025-26
                            </h2>
                            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
                                Select your scheme, scroll to enter turnover, and get instant tax computation.
                                <span className="block mt-1 text-orange-500 font-semibold">Used by 25,000+ small business owners this month</span>
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl overflow-hidden">
                            <div className="bg-orange-500 px-6 py-4 flex items-center justify-between flex-wrap gap-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                                        <Percent size={20} className="text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-display font-extrabold text-white text-lg flex items-center gap-2">
                                            ITR-4 Presumptive Tax Calculator
                                            <span className="text-[10px] bg-white/20 text-white px-2 py-0.5 rounded-full">Live</span>
                                        </h3>
                                        <p className="text-orange-100 text-xs mt-0.5">AY 2026-27 | Sec 44AD / 44ADA / 44AE</p>
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

                                    {/* Scheme Selector */}
                                    <div className="mb-5">
                                        <label className="block text-xs font-semibold text-black mb-1.5">Select Presumptive Scheme</label>
                                        <select value={calc.schemeType} onChange={(e) => upd("schemeType", e.target.value as SchemeType)}
                                            className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-xl text-sm font-medium text-black focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-colors bg-white">
                                            <option value="44AD">Section 44AD — Small Business (turnover ≤ ₹2 Crore)</option>
                                            <option value="44ADA">Section 44ADA — Professionals (receipts ≤ ₹75 Lakh)</option>
                                            <option value="44AE">Section 44AE — Transport Operators (≤ 10 vehicles)</option>
                                        </select>
                                    </div>

                                    {/* Income */}
                                    <div className="mb-2 pb-4 border-b border-gray-100">
                                        <p className="text-xs font-bold text-orange-500 mb-4 uppercase tracking-wider flex items-center gap-1">
                                            <Briefcase size={12} /> Business Turnover / Receipts
                                        </p>
                                        <SliderRow
                                            label={calc.schemeType === "44ADA" ? "Gross Professional Receipts (₹)" : "Total Turnover / Gross Receipts (₹)"}
                                            value={calc.turnover} min={0}
                                            max={calc.schemeType === "44ADA" ? 7500000 : calc.schemeType === "44AE" ? 5000000 : 30000000}
                                            step={100000} onChange={(v) => upd("turnover", v)}
                                            note={calc.schemeType === "44AD" ? "Limit: ₹2Cr (or ₹3Cr if 95% digital)" : calc.schemeType === "44ADA" ? "Limit: ₹75 Lakh" : "Based on number of vehicles"}
                                        />

                                        {calc.schemeType === "44AD" && (
                                            <SliderRow label="Digital Receipts (₹) — taxed at 6%"
                                                value={Math.min(calc.digitalReceipts, calc.turnover)}
                                                min={0} max={calc.turnover || 1000000} step={50000}
                                                onChange={(v) => upd("digitalReceipts", v)}
                                                note="UPI, NEFT, cheque, credit/debit card receipts — rest taxed at 8%"
                                            />
                                        )}

                                        <SliderRow label="Salary Income (₹) — if any" value={calc.salary} min={0} max={5000000} step={50000} onChange={(v) => upd("salary", v)} />
                                        <SliderRow label="House Property Income (₹) — if any" value={calc.houseProperty} min={0} max={2000000} step={10000} onChange={(v) => upd("houseProperty", v)} />
                                    </div>

                                    {/* Deductions */}
                                    <div className="pt-4">
                                        <p className="text-xs font-bold text-orange-500 mb-4 uppercase tracking-wider">
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
                                <div className="p-6 bg-gray-50">
                                    <h4 className="font-display font-bold text-black text-base mb-5 flex items-center gap-2">
                                        <BarChart3 size={16} className="text-orange-500" />
                                        Your Tax Breakdown
                                    </h4>

                                    {/* Scheme Badge */}
                                    <div className="bg-white rounded-2xl border-2 border-orange-500 p-4 mb-4">
                                        <p className="text-xs font-bold text-orange-500 mb-2 uppercase tracking-wider">
                                            {calc.schemeType === "44AD" ? "💼 Section 44AD — Business" : calc.schemeType === "44ADA" ? "👨‍⚕️ Section 44ADA — Profession" : "🚛 Section 44AE — Transport"}
                                        </p>
                                        <ResultRow label="Total Turnover / Receipts" value={fmt(calc.turnover)} />
                                        {calc.schemeType === "44AD" && (
                                            <>
                                                <ResultRow label={`Digital Receipts @6%`} value={`${fmt(Math.min(calc.digitalReceipts, calc.turnover))} → ${fmt(Math.round(Math.min(calc.digitalReceipts, calc.turnover) * 0.06))}`} color="text-gray-600" />
                                                <ResultRow label={`Cash Receipts @8%`} value={`${fmt(Math.max(0, calc.turnover - calc.digitalReceipts))} → ${fmt(Math.round(Math.max(0, calc.turnover - calc.digitalReceipts) * 0.08))}`} color="text-gray-600" />
                                            </>
                                        )}
                                        {calc.schemeType === "44ADA" && (
                                            <ResultRow label="50% of Gross Receipts" value={fmt(result.presumptiveIncome)} color="text-gray-600" />
                                        )}
                                        <ResultRow label="Presumptive Income" value={fmt(result.presumptiveIncome)} color="text-orange-500" />
                                    </div>

                                    {/* Summary */}
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
                                        <div className="text-xs font-bold uppercase tracking-wider mb-1 flex items-center justify-center gap-1 text-orange-500">
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
                                        🚀 File ITR-4 Now — Use This Data
                                    </Link>
                                    <p className="text-center text-[10px] text-gray-400 mt-2">
                                        * Estimates only. Final tax depends on all sources of income.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ════════════════════════════════════
            TESTIMONIALS
        ════════════════════════════════════ */}
                <section className="bg-white py-16 px-4 sm:px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-10">
                            <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">Testimonials</p>
                            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-black mb-2">Trusted by 3 Lakh+ Small Business Owners</h2>
                            <p className="text-gray-500 text-sm">See what small businesses, doctors & transport operators say about DoStartup.in</p>
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
                <section className="bg-white py-16 px-4 sm:px-6" id="pricing">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-10">
                            <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">Pricing</p>
                            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-black mb-2">Simple Pricing for ITR-4</h2>
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
                <section className="bg-white py-16 px-4 sm:px-6" id="faq">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-10">
                            <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">FAQ</p>
                            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-black">ITR-4 Questions Answered</h2>
                            <p className="text-gray-500 text-sm mt-2">Everything about presumptive taxation, 44AD, 44ADA & 44AE.</p>
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
                            <p className="text-sm text-gray-500 mb-4">Still have questions about ITR-4?</p>
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
                <section className="bg-white py-20 px-4 sm:px-6 border-t border-gray-100">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="flex justify-center gap-0.5 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={24} className="text-orange-500 fill-orange-500" />
                            ))}
                        </div>
                        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-black mb-4">
                            Presumptive Tax. Zero Complexity.
                        </h2>
                        <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
                            Join 3 lakh+ small business owners, doctors & professionals who file ITR-4 in minutes with DoStartup AI.
                            <span className="block mt-2 text-black font-semibold">Compare with ClearTax, Tax2Win, Quicko, H&R Block & TaxSpanner — we're 40% cheaper!</span>
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link href="#pricing"
                                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-base px-8 py-4 rounded-full hover:shadow-xl hover:shadow-orange-100 hover:-translate-y-1 transition-all duration-150 group">
                                🚀 File ITR-4 Free Today
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="#calculator"
                                className="inline-flex items-center gap-2 border-2 border-orange-500 text-orange-500 font-semibold text-base px-8 py-4 rounded-full hover:bg-orange-500 hover:text-white transition-all">
                                <Calculator size={18} />Try Calculator First →
                            </Link>
                        </div>
                        <div className="mt-8 flex items-center justify-center gap-6 text-xs text-gray-400">
                            <span className="flex items-center gap-1"><Shield size={12} className="text-orange-500" /> 256-bit SSL</span>
                            <span className="flex items-center gap-1"><Clock size={12} className="text-orange-500" /> 10-min filing</span>
                            <span className="flex items-center gap-1"><Users size={12} className="text-orange-500" /> 3L+ businesses</span>
                        </div>
                    </div>
                </section>

                {/* ════════════════════════════════════
            FOOTER
        ════════════════════════════════════ */}
                <footer className="bg-orange-500 text-white py-12 px-4 sm:px-6">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-white font-bold text-lg mb-4">DoStartup<span className="text-orange-200">.in</span></h3>
                            <p className="text-orange-100 text-sm mb-4">India's most advanced AI-powered ITR-4 filing platform. Presumptive taxation made simple — 44AD, 44ADA & 44AE in minutes.</p>
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
