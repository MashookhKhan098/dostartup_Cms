"use client";

import React, { useEffect, useRef, useState } from "react";
import { Search, Check, Plus, ChevronRight, Star, Shield, Clock, Users, X } from "lucide-react";
import Navbar from "../components/Navbar";

const ASSETS = {
 logo: "/images/india-logo.jpg",
 heroBg: "/images/hero.png",
 whatsapp: "/images/whatsapp.png",
 ledgersBadge: "/images/ledgers-badge.png",
 hrPeople: "/images/hr-payroll.png",
};

const POPULAR_SEARCHES = [
 "Partnership",
 "Limited Liability Partnership",
 "Digital Signature",
 "Copyright Registration",
 "Unified Portal",
 "PAN Card Download",
 "Nadakacheri",
 "Flipkart Seller",
 "Caste Certificate",
 "IAY",
 "EPFO Passbook",
 "Domicile Certificate",
 "Udyog Aadhaar",
 "PF Withdrawal",
 "Karnataka One",
 "Encumbrance Certificate",
 "Bonafide Certificate",
 "Instant PAN Card",
 "E PAN Card",
 "Income Certificate",
 "Marriage Certificate",
 "Passport Renewal",
 "Nivesh Mitra",
 "MSME Registration",
 "Experience Certificate",
 "Trademark Status",
 "Trade License",
 "Domicile",
 "eMitra",
 "UAN",
 "PICME",
 "Resignation Letter Format",
 "Ration Card",
 "TNREGINET",
 "RAJSSP",
 "LLP Compliance",
 "Form 16",
 "Police Clearance Certificate",
 "OBC Certificate",
 "Jamabandi",
 "Mee Bhoomi",
 "SC Certificate",
 "UAN Login",
 "eAadhaar Download",
 "Linking Aadhaar To Bank Accounts",
 "mAadhaar",
 "Aadhaar Enrollment Centre",
 "UAN Passbook",
 "Amazon How to Sell",
 "PAN Card Apply",
 "EPFO Unified Portal",
];

function useOnClickOutside<T extends HTMLElement = HTMLElement>(
 ref: React.RefObject<T | null>,
 handler: () => void
) {
 useEffect(() => {
 const listener = (event: MouseEvent | TouchEvent) => {
 const el = ref?.current;
 if (!el || el.contains(event.target as Node)) return;
 handler();
 };
 document.addEventListener("mousedown", listener);
 document.addEventListener("touchstart", listener);
 return () => {
 document.removeEventListener("mousedown", listener);
 document.removeEventListener("touchstart", listener);
 };
 }, [handler, ref]);
}

export default function PartnershipCompliancePage(): React.ReactElement {
 const [gstin, setGstin] = useState("");
 const [faqOpen, setFaqOpen] = useState<number | null>(null);
 const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
 const [showPaymentModal, setShowPaymentModal] = useState(false);
 const [showChat, setShowChat] = useState(false);

 const faqQuestions = [
 "What is a partnership firm?",
 "What are the types of partnership firms?",
 "Is it mandatory for a partnership firm to file income tax returns?",
 "What are the partnership firm tax slabs?",
 "What is Minimum Alternate Tax (MAT) for partnership firms?",
 "What deductions are allowed for partnership firms?",
 ];

 const faqAnswers: Record<number, string> = {
 0: "A partnership firm is a business entity formed by two or more individuals working together under a single enterprise. It may be registered or unregistered.",
 1: "There are Registered Partnership Firms (registered with Registrar of Firms) and Unregistered Partnership Firms (without registration certificate).",
 2: "Yes — every partnership firm must file its income tax return annually, even if there is nil income. Different ITR forms apply depending on the situation.",
 3: "Partnership firms are generally taxed at a flat rate (30%) on taxable income. Surcharge, cess and marginal relief may apply as per thresholds.",
 4: "MAT (Minimum Alternate Tax) for partnership firms is applicable — effective rates and mechanics depend on adjusted total income (commonly around 18.5% of adjusted total income).",
 5: "Deductions include certain partner remunerations/interest (subject to conditions), legitimate business expenses, and other deductions as per the Income Tax Act.",
 };

 const handlePlanSelect = (planName: string) => {
 setSelectedPlan(planName);
 setShowPaymentModal(true);
 };

 return (
 <div className="min-h-screen bg-[#F4F3EE]">
 <Navbar />

 {/* Breadcrumb */}
 <div className="bg-[#F4F3EE] border-b border-gray-200 py-3">
 <div className="max-w-[1180px] mx-auto px-6">
 <div className="flex items-center text-sm text-gray-500">
 <span>Home</span>
 <ChevronRight className="w-4 h-4 mx-2" />
 <span>Services</span>
 <ChevronRight className="w-4 h-4 mx-2" />
 <span className="text-[#C15F3C] font-medium">Partnership Compliance</span>
 </div>
 </div>
 </div>

 {/* Hero Section */}
 <div className="py-3">
 <div className="max-w-[1180px] mx-auto px-6">
 <section className="relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-r from-[#C15F3C] to-[#A74A2F] min-h-[320px]">
 <div className="absolute inset-0 bg-black/20"></div>
 
 <div className="relative z-10">
 <div className="mx-auto max-w-[1180px] px-6 py-5 flex flex-col md:flex-row items-center gap-8">
 <div className="flex-1 max-w-2xl">
 <div className="bg-[#F4F3EE]/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-10">
 <div className="inline-flex items-center gap-2 bg-[#F4F3EE]/20 rounded-full px-4 py-2 mb-4">
 <Star className="w-4 h-4 text-white fill-current" />
 <span className="text-xs font-medium text-white">PARTNERSHIP COMPLIANCE</span>
 </div>
 
 <h1 className="text-white text-3xl md:text-[34px] leading-tight font-semibold mb-3">
 Partnership Compliance
 </h1>
 <p className="text-white/90 text-sm md:text-base mb-6 max-w-prose">
 File GST & IT returns, handle financial statement
 preparation, and manage all monthly and annual compliances
 effortlessly using our Accountants & LEDGERS platform.
 </p>

 <form
 onSubmit={(e) => e.preventDefault()}
 className="flex flex-col sm:flex-row items-center gap-4"
 >
 <input
 aria-label="Enter GSTIN"
 placeholder="ENTER GSTIN"
 value={gstin}
 onChange={(e) => setGstin(e.target.value)}
 className="w-full sm:w-[360px] bg-[#F4F3EE]/10 border border-white/20 rounded-md px-4 py-3 placeholder:text-white/60 text-white outline-none focus:ring-2 focus:ring-white"
 />
 <button className="px-6 py-3 bg-[#F4F3EE] text-[#C15F3C] rounded-md font-medium hover:bg-[#F4F3EE] transition-colors shadow-lg">
 Get Accountant
 </button>
 </form>

 <div className="mt-4 text-sm text-white/80">
 Dedicated support, flexible cost — Experienced accountant
 managing your monthly ledgers, vendor/customer/bank
 reconciliations, and monthly close — at a fraction of a
 full-time hire.
 </div>
 </div>
 </div>

 <div className="w-full md:w-96 flex justify-end">
 <div className="relative w-full max-w-[420px]">
 <img
 src={ASSETS.hrPeople}
 alt="Accountants"
 className="pointer-events-none select-none rounded-lg shadow-2xl"
 />
 </div>
 </div>
 </div>
 </div>
 </section>
 </div>
 </div>

 {/* Stats Section */}
 <div className="bg-[#F4F3EE] border-b border-gray-200">
 <div className="max-w-[1180px] mx-auto px-6 py-5">
 <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
 <div>
 <div className="text-3xl font-bold text-[#C15F3C]">10K+</div>
 <div className="text-gray-600">Active Clients</div>
 </div>
 <div>
 <div className="text-3xl font-bold text-[#C15F3C]">50K+</div>
 <div className="text-gray-600">Returns Filed</div>
 </div>
 <div>
 <div className="text-3xl font-bold text-[#C15F3C]">4.8/5</div>
 <div className="text-gray-600">Client Rating</div>
 </div>
 <div>
 <div className="text-3xl font-bold text-[#C15F3C]">24/7</div>
 <div className="text-gray-600">Support</div>
 </div>
 </div>
 </div>
 </div>

 {/* Feature Cards */}
 <div className="max-w-[1180px] mx-auto px-6 -mt-4">
 <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
 <div className="bg-[#F4F3EE] p-8 rounded-xl border border-gray-200 shadow-lg hover:border-[#C15F3C] transition-colors">
 <div className="w-12 h-12 bg-[#C15F3C]/10 rounded-lg flex items-center justify-center mb-4">
 <Users className="w-6 h-6 text-[#C15F3C]" />
 </div>
 <h3 className="font-semibold text-[#C15F3C] mb-2">
 Dedicated Accountants
 </h3>
 <p className="text-sm text-gray-600">
 Experienced accountants to manage monthly bookkeeping, GST/IT
 filings, reconciliations and monthly close activities.
 </p>
 </div>

 <div className="bg-[#F4F3EE] p-8 rounded-xl border border-gray-200 shadow-lg hover:border-[#C15F3C] transition-colors">
 <div className="w-12 h-12 bg-[#C15F3C]/10 rounded-lg flex items-center justify-center mb-4">
 <Clock className="w-6 h-6 text-[#C15F3C]" />
 </div>
 <h3 className="font-semibold text-[#C15F3C] mb-2">
 Accurate & timely compliance
 </h3>
 <p className="text-sm text-gray-600">
 End-to-end preparation and filing of GST, Income Tax with
 due-date tracking and timely reviews.
 </p>
 </div>

 <div className="bg-[#F4F3EE] p-8 rounded-xl border border-gray-200 shadow-lg hover:border-[#C15F3C] transition-colors">
 <div className="w-12 h-12 bg-[#C15F3C]/10 rounded-lg flex items-center justify-center mb-4">
 <Shield className="w-6 h-6 text-[#C15F3C]" />
 </div>
 <h3 className="font-semibold text-[#C15F3C] mb-2">
 Powered by LEDGERS
 </h3>
 <p className="text-sm text-gray-600">
 Automated bank feeds and reconciliations, e-invoice/e-way bill,
 document vault, and audit-ready reports.
 </p>
 </div>
 </section>
 </div>

 <main className="max-w-[1180px] mx-auto px-6 py-4 space-y-8">


 {/* Services Offered */}
 <section className="bg-[#F4F3EE] rounded-xl shadow-lg border border-gray-200 p-8">
 <h3 className="text-2xl font-bold text-center text-[#C15F3C] mb-2">
 Services Offered
 </h3>
 <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
 We provide comprehensive accounting support tailored to meet the
 day-to-day financial needs of your business
 </p>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 {[
 "Access to LEDGERS",
 "GST Return Filing",
 "Preparation of Financial Statements",
 "Income Tax Return Filing",
 "E-Invoicing & E-Way Bill",
 "CA Assistance"
 ].map((service, index) => (
 <div key={index} className="p-6 rounded-lg border border-gray-200 hover:border-[#C15F3C] hover:shadow-md transition-all">
 <h4 className="font-semibold text-[#C15F3C] mb-2">{service}</h4>
 <p className="text-sm text-gray-600">
 Professional {service.toLowerCase()} services with expert guidance
 </p>
 </div>
 ))}
 </div>
 </section>

 {/* How It Works */}
 <section className="bg-[#F4F3EE] rounded-xl shadow-lg border border-gray-200 p-8">
 <h3 className="text-2xl font-bold text-center text-[#C15F3C] mb-2">How It Works</h3>
 <p className="text-gray-600 text-center mb-8">
 A guided onboarding process with consistent monthly accounting and
 reporting.
 </p>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {[
 { step: 1, title: "Assign your accountant", desc: "You get a named accountant familiar with your industry and a clear kickoff checklist." },
 { step: 2, title: "System Setup", desc: "Connect bank feeds, import masters & opening balances, map ledgers/tax series, and configure LEDGERS." },
 { step: 3, title: "Monthly close & compliance", desc: "Bank/vendor/customer reconciliations, MIS, and on-time GST, Finance Statement Preparation and Income Tax filings." }
 ].map((item) => (
 <div key={item.step} className="text-center">
 <div className="w-16 h-16 bg-[#C15F3C] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
 {item.step}
 </div>
 <h4 className="font-semibold text-[#C15F3C] mb-2">{item.title}</h4>
 <p className="text-sm text-gray-600">{item.desc}</p>
 </div>
 ))}
 </div>
 </section>

 {/* Why DoStartup */}
 <section className="bg-[#F4F3EE] rounded-xl shadow-lg border border-gray-200 p-8">
 <h3 className="text-2xl font-bold text-[#C15F3C] mb-6">
 Why DoStartup for Fractional Accountant
 </h3>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 <div className="p-6 rounded-lg border border-gray-200 hover:border-[#C15F3C] transition-colors">
 <h4 className="font-semibold text-[#C15F3C] mb-2">Affordable Expertise</h4>
 <p className="text-sm text-gray-600">
 Skilled accountants without full-time hiring costs.
 </p>
 </div>
 <div className="p-6 rounded-lg border border-gray-200 hover:border-[#C15F3C] transition-colors">
 <h4 className="font-semibold text-[#C15F3C] mb-2">Zero Surprises</h4>
 <p className="text-sm text-gray-600">
 Transparent reporting and proactive due-date alerts.
 </p>
 </div>
 <div className="p-6 rounded-lg border border-gray-200 hover:border-[#C15F3C] transition-colors">
 <h4 className="font-semibold text-[#C15F3C] mb-2">Scalable Service</h4>
 <p className="text-sm text-gray-600">
 Start with books; add GST/IT filings and compliance advisory as you grow.
 </p>
 </div>
 </div>
 </section>

 {/* Partnership Tax Return Filing Info */}
 <section className="bg-[#F4F3EE] rounded-xl shadow-lg border border-gray-200 p-8">
 <h3 className="text-2xl font-bold text-[#C15F3C] mb-4">
 Partnership Tax Return Filing
 </h3>
 <p className="text-sm text-gray-700 leading-relaxed">
 Operating a Partnership Firm in India involves a range of crucial
 financial and legal responsibilities. It is imperative to adhere to
 various tax and regulatory requirements to ensure the smooth
 functioning and growth of your business. These obligations encompass
 filing Income Tax Returns, TDS Returns, GST Returns, EPF Returns,
 and occasionally undergoing a Tax Audit if the partnership firm
 audit limit exceeds.
 </p>

 <div className="mt-6 space-y-4">
 <div>
 <h4 className="font-semibold text-[#C15F3C]">Income Tax Return filing for Partnership Firm</h4>
 <p className="mt-2 text-sm text-gray-700">
 Every partnership firm in India is obligated to file income tax
 returns annually, regardless of whether the firm has generated
 income or incurred losses during the financial year. Even if
 there was no business activity, filing a NIL income tax return
 within the stipulated due date is mandatory.
 </p>
 </div>

 <div>
 <h4 className="font-semibold text-[#C15F3C]">Partnership Firm Income Tax slabs for AY 2023-24</h4>
 <p className="mt-2 text-sm text-gray-700">
 Under the provisions of the Income Tax Act 1961, a partnership
 firm in India is subject to the partnership firm tax rate of 30%
 on taxable income. Surcharge, cess and marginal relief apply as
 relevant.
 </p>
 </div>
 </div>
 </section>

 {/* Related Guides */}
 <section className="bg-[#F4F3EE] rounded-xl shadow-lg border border-gray-200 p-8">
 <h3 className="text-xl font-semibold text-[#C15F3C] mb-4">Related Guides</h3>
 <div className="flex flex-wrap gap-3">
 {["ITR 5 Form", "What is a partnership firm?", "How to file GST returns for Partnership firm", "FAQ's on Partnership Compliance"].map((guide, index) => (
 <a key={index} className="px-4 py-2 border border-gray-200 rounded-lg text-sm hover:border-[#C15F3C] hover:text-[#C15F3C] transition-colors cursor-pointer">
 {guide}
 </a>
 ))}
 </div>
 </section>
 {/* Pricing Section */}
 <section>
 <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900">
 Simplified Partnership Compliance with Clear, Transparent Pricing.
 </h2>
 <p className="text-sm text-gray-600 mt-2 text-center max-w-[880px] mx-auto">
 File your GST and Income Tax returns online with expert assistance,
 error-free filing, and timely submission tracking.
 </p>

 <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
 {/* Software Only Plan */}
 <div className="bg-[#F4F3EE] rounded-xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-shadow">
 <div className="inline-block bg-[#C15F3C]/10 text-[#C15F3C] px-3 py-1 rounded-full text-xs font-medium mb-3">
 LEDGERS
 </div>
 <h3 className="font-semibold text-xl text-gray-900">Software Only</h3>
 <p className="text-sm text-gray-600 mt-2">
 LEDGERS GST Software Access - 1 Year
 </p>
 <div className="mt-4">
 <span className="text-3xl font-bold text-[#C15F3C]">₹5,899</span>
 <span className="text-sm text-gray-500"> /yr + GST</span>
 </div>
 <button className="mt-4 w-full bg-[#C15F3C] text-white py-3 rounded-lg font-semibold hover:bg-[#A74A2F] transition-colors">
 Start Filing Now
 </button>
 <ul className="mt-5 space-y-3 text-sm text-gray-700">
 <li className="flex items-start gap-2">
 <Check size={16} className="text-[#C15F3C] flex-shrink-0 mt-0.5" />
 <span>LEDGERS GST Software Access - 1 Year</span>
 </li>
 <li className="flex items-start gap-2">
 <Check size={16} className="text-[#C15F3C] flex-shrink-0 mt-0.5" />
 <span>Compliance Dashboard & Alerts</span>
 </li>
 <li className="flex items-start gap-2">
 <Check size={16} className="text-[#C15F3C] flex-shrink-0 mt-0.5" />
 <span>GST Invoicing & e-Invoicing</span>
 </li>
 <li className="flex items-start gap-2">
 <Check size={16} className="text-[#C15F3C] flex-shrink-0 mt-0.5" />
 <span>Invoice Management System (IMS)</span>
 </li>
 <li className="flex items-start gap-2">
 <Check size={16} className="text-[#C15F3C] flex-shrink-0 mt-0.5" />
 <span>eWay Billing & GST ITC Tools</span>
 </li>
 <li className="flex items-start gap-2">
 <Check size={16} className="text-[#C15F3C] flex-shrink-0 mt-0.5" />
 <span>Accounting Software</span>
 </li>
 <li className="flex items-start gap-2">
 <Check size={16} className="text-[#C15F3C] flex-shrink-0 mt-0.5" />
 <span>Payroll Software</span>
 </li>
 </ul>
 </div>

 {/* Accountant Quarterly Plan - Recommended */}
 <div className="bg-[#F4F3EE] rounded-xl border-2 border-[#C15F3C] p-6 shadow-xl relative transform md:scale-105">
 <div className="absolute top-0 right-0 bg-[#C15F3C] text-white px-3 py-1 text-xs font-semibold rounded-bl-lg rounded-tr-lg">
 RECOMMENDED
 </div>
 <div className="inline-block bg-[#C15F3C]/10 text-[#C15F3C] px-3 py-1 rounded-full text-xs font-medium mb-3">
 Accounting Software + Service
 </div>
 <h3 className="font-semibold text-xl text-gray-900">Accountant</h3>
 <p className="text-sm text-gray-600 mt-2">
 Accountant – Quarterly Plan
 </p>
 <div className="mt-4">
 <span className="text-3xl font-bold text-[#C15F3C]">₹7,899</span>
 <span className="text-sm text-gray-500"> /quarter + GST</span>
 </div>
 <button 
 onClick={() => handlePlanSelect("Quarterly Plan")}
 className="mt-4 w-full bg-[#C15F3C] text-white py-3 rounded-lg font-semibold hover:bg-[#A74A2F] transition-colors"
 >
 Start Filing Now
 </button>
 <ul className="mt-5 space-y-3 text-sm text-gray-700">
 <li className="flex items-start gap-2">
 <Check size={16} className="text-[#C15F3C] flex-shrink-0 mt-0.5" />
 <span>Dedicated Accountant Support - 1 Assigned Accountant</span>
 </li>
 <li className="flex items-start gap-2">
 <Check size={16} className="text-[#C15F3C] flex-shrink-0 mt-0.5" />
 <span>GST Return Filing (GSTR-1, 3B) - 1 Quarter</span>
 </li>
 <li className="flex items-start gap-2">
 <Check size={16} className="text-[#C15F3C] flex-shrink-0 mt-0.5" />
 <span>LEDGERS GST Software Access - 1 Year</span>
 </li>
 <li className="flex items-start gap-2">
 <Check size={16} className="text-[#C15F3C] flex-shrink-0 mt-0.5" />
 <span>Compliance Dashboard & Alerts</span>
 </li>
 <li className="flex items-start gap-2">
 <Check size={16} className="text-[#C15F3C] flex-shrink-0 mt-0.5" />
 <span>GST Invoicing & e-Invoicing</span>
 </li>
 <li className="flex items-start gap-2">
 <Check size={16} className="text-[#C15F3C] flex-shrink-0 mt-0.5" />
 <span>eWay Billing & GST ITC Tools</span>
 </li>
 </ul>
 </div>

 {/* Annual Plan */}
 <div className="bg-[#F4F3EE] rounded-xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-shadow">
 <div className="inline-block bg-[#C15F3C]/10 text-[#C15F3C] px-3 py-1 rounded-full text-xs font-medium mb-3">
 Most Popular
 </div>
 <h3 className="font-semibold text-xl text-gray-900">Accountant – Annual Plan</h3>
 <p className="text-sm text-gray-600 mt-2">
 Dedicated Accountant Support with annual coverage
 </p>
 <div className="mt-4">
 <span className="text-3xl font-bold text-[#C15F3C]">₹19,899</span>
 <span className="text-sm text-gray-500"> /yr + GST</span>
 </div>
 <button 
 onClick={() => handlePlanSelect("Annual Plan")}
 className="mt-4 w-full bg-[#C15F3C] text-white py-3 rounded-lg font-semibold hover:bg-[#A74A2F] transition-colors"
 >
 Start Filing Now
 </button>
 <ul className="mt-5 space-y-3 text-sm text-gray-700">
 <li className="flex items-start gap-2">
 <Check size={16} className="text-[#C15F3C] flex-shrink-0 mt-0.5" />
 <span>Dedicated Accountant Support</span>
 </li>
 <li className="flex items-start gap-2">
 <Check size={16} className="text-[#C15F3C] flex-shrink-0 mt-0.5" />
 <span>GST Return Filing (GSTR-1, 3B) - 1 Year</span>
 </li>
 <li className="flex items-start gap-2">
 <Check size={16} className="text-[#C15F3C] flex-shrink-0 mt-0.5" />
 <span>GST Annual Filing (GSTR-9) - Included</span>
 </li>
 <li className="flex items-start gap-2">
 <Check size={16} className="text-[#C15F3C] flex-shrink-0 mt-0.5" />
 <span>Annual Financial Statements</span>
 </li>
 <li className="flex items-start gap-2">
 <Check size={16} className="text-[#C15F3C] flex-shrink-0 mt-0.5" />
 <span>Income Tax Return Filing</span>
 </li>
 <li className="flex items-start gap-2">
 <Check size={16} className="text-[#C15F3C] flex-shrink-0 mt-0.5" />
 <span>CA Consultation - 4 Consultations</span>
 </li>
 </ul>
 </div>
 </div>
 </section>



 {/* FAQ Section */}
 <section className="bg-[#F4F3EE] rounded-xl shadow-lg border border-gray-200 p-8">
 <h3 className="text-xl font-semibold text-[#C15F3C] mb-4">FAQ's</h3>
 <div className="space-y-0">
 {faqQuestions.map((q, i) => (
 <div key={i} className="border-b border-gray-200 last:border-b-0">
 <button
 className="w-full text-left py-4 flex justify-between items-center text-sm hover:bg-orange-50 transition-colors"
 onClick={() => setFaqOpen(faqOpen === i ? null : i)}
 aria-expanded={faqOpen === i}
 >
 <span className="text-gray-800 font-medium">{q}</span>
 <span className="text-[#C15F3C] flex items-center gap-2">
 {faqOpen === i ? "−" : <Plus size={14} />}
 </span>
 </button>
 {faqOpen === i && (
 <div className="px-2 pb-4 text-sm text-gray-600">
 {faqAnswers[i]}
 </div>
 )}
 </div>
 ))}
 </div>

 <div className="mt-6">
 <h4 className="font-semibold text-[#C15F3C] mb-3">Popular Searches</h4>
 <div className="flex flex-wrap gap-2">
 {POPULAR_SEARCHES.slice(0, 20).map((s) => (
 <span
 key={s}
 className="text-xs px-3 py-1 border border-gray-200 rounded-full bg-[#F4F3EE] text-gray-700 hover:border-[#C15F3C] hover:text-[#C15F3C] cursor-pointer transition-colors"
 >
 {s}
 </span>
 ))}
 </div>
 </div>
 </section>
 </main>

 {/* Footer */}
 <footer className="bg-gray-900 text-white mt-12 py-5">
 <div className="max-w-[1180px] mx-auto px-6">
 <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
 <div>
 <h5 className="font-semibold text-[#C15F3C] mb-4">DoStartup</h5>
 <ul className="space-y-2">
 <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About DoStartup</a></li>
 <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
 <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
 </ul>
 </div>
 <div>
 <h5 className="font-semibold text-[#C15F3C] mb-4">Platforms</h5>
 <ul className="space-y-2">
 <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Business Search</a></li>
 <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Trademark Search</a></li>
 <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Filings.AE for UAE</a></li>
 </ul>
 </div>
 <div>
 <h5 className="font-semibold text-[#C15F3C] mb-4">Usage</h5>
 <ul className="space-y-2">
 <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</a></li>
 <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
 <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Refund Policy</a></li>
 </ul>
 </div>
 <div>
 <h5 className="font-semibold text-[#C15F3C] mb-4">Policies</h5>
 <ul className="space-y-2">
 <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Confidentiality Policy</a></li>
 <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Disclaimer Policy</a></li>
 <li><a href="#" className="text-gray-400 hover:text-white transition-colors">DoStartup Review</a></li>
 </ul>
 </div>
 </div>

 <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
 © {new Date().getFullYear()} DoStartup - Partnership Compliance
 </div>
 </div>
 </footer>

 {/* WhatsApp CTA */}
 <button 
 onClick={() => setShowChat(true)}
 className="fixed right-6 bottom-6 bg-[#C15F3C] text-white p-4 rounded-full shadow-2xl hover:bg-[#A74A2F] transition-all hover:scale-110 z-50"
 >
 <img src={ASSETS.whatsapp} alt="WhatsApp" className="w-6 h-6" />
 </button>

 {/* Payment Modal */}
 {showPaymentModal && (
 <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
 <div className="bg-[#F4F3EE] rounded-xl max-w-md w-full p-6">
 <div className="flex justify-between items-center mb-4">
 <h3 className="text-xl font-bold text-gray-900">Complete Payment</h3>
 <button onClick={() => setShowPaymentModal(false)} className="hover:bg-[#F4F3EE] p-1 rounded-full transition-colors">
 <X className="w-6 h-6 text-gray-500" />
 </button>
 </div>
 <p className="text-gray-600 mb-4">
 You've selected the <span className="font-semibold text-[#C15F3C]">{selectedPlan}</span>
 </p>
 <div className="space-y-4">
 <input
 type="text"
 placeholder="Card Number"
 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C15F3C]"
 />
 <div className="grid grid-cols-2 gap-4">
 <input
 type="text"
 placeholder="MM/YY"
 className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C15F3C]"
 />
 <input
 type="text"
 placeholder="CVV"
 className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C15F3C]"
 />
 </div>
 <button className="w-full bg-[#C15F3C] text-white py-2 rounded-lg font-semibold hover:bg-[#A74A2F] transition-colors">
 Pay Now
 </button>
 </div>
 </div>
 </div>
 )}
 </div>
 );
}
