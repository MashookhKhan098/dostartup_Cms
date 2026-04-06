"use client";
import AddQuestionModal from "../components/AddQuestionModal";

import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, CheckCircle } from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SidebarCart from "../components/SidebarCart";

const POPULAR_SEARCHES = [
 "Partnership", "Limited Liability Partnership", "Digital Signature",
 "Copyright Registration", "Unified Portal", "PAN Card Download",
 "Nadakacheri", "Flipkart Seller", "Caste Certificate", "IAY",
 "EPFO Passbook", "Domicile Certificate", "Udyog Aadhaar", "PF Withdrawal",
 "Karnataka One", "Encumbrance Certificate", "Bonafide Certificate",
 "Instant PAN Card", "E PAN Card", "Income Certificate", "Marriage Certificate",
 "Passport Renewal", "Nivesh Mitra", "MSME Registration", "Experience Certificate",
 "Trademark Status", "Trade License", "Domicile", "eMitra", "UAN", "PICME",
 "Resignation Letter Format", "Ration Card", "TNREGINET", "RAJSSP",
 "LLP Compliance", "Form 16", "Police Clearance Certificate", "OBC Certificate",
 "Jamabandi", "Mee Bhoomi", "SC Certificate", "UAN Login", "eAadhaar Download",
 "Linking Aadhaar To Bank Accounts", "mAadhaar", "Aadhaar Enrollment Centre",
 "UAN Passbook", "Amazon How to Sell", "PAN Card Apply", "EPFO Unified Portal",
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

const RenewalTypeDropdown: React.FC<{
 value: string | null;
 onChange: (v: string) => void;
}> = ({ value, onChange }) => {
 const ref = useRef<HTMLDivElement | null>(null);
 const [open, setOpen] = useState(false);
 useOnClickOutside(ref, () => setOpen(false));
 const RENEWAL_OPTIONS = [
 "FSSAI Registration Renewal",
 "FSSAI State License Renewal - Trader, Restaurant",
 "FSSAI State Renewal - Manufacturer, Relabeler",
 "FSSAI License Central Renewal",
 ];
 return (
 <div ref={ref} className="relative">
 <label className="block text-sm font-medium text-[#2F2E2B] mb-2">
 Renewal Type
 </label>
 <button
 onClick={() => setOpen((s) => !s)}
 className="w-full text-left px-4 py-3 border border-[#E5E2DA] rounded-lg bg-[#F4F3EE] flex items-center justify-between focus:outline-none focus:ring-1 focus:ring-[#C15F3C] transition"
 aria-haspopup="listbox"
 aria-expanded={open}
 >
 <span className="truncate text-sm text-[#6F6B63]">
 {value ?? "Select Renewal Type"}
 </span>
 <ChevronDown className="w-4 h-4 text-[#B1ADA1]" />
 </button>
 {open && (
 <div className="absolute z-40 mt-1 w-full bg-white border border-[#E5E2DA] rounded-xl shadow-xl" role="listbox">
 <div className="py-2 max-h-56 overflow-auto">
 <div className="px-3 py-1 text-xs text-[#B1ADA1]">Select Renewal Type</div>
 {RENEWAL_OPTIONS.map((opt) => (
 <button
 key={opt}
 onClick={() => { onChange(opt); setOpen(false); }}
 className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-[#F4F3EE] hover:text-[#C15F3C] ${value === opt ? "bg-[#F4F3EE] text-[#C15F3C] font-medium" : "text-[#6F6B63]"
 }`}
 role="option"
 aria-selected={value === opt}
 >
 {opt}
 </button>
 ))}
 </div>
 </div>
 )}
 </div>
 );
};

const StateDropdown: React.FC<{
 value: string | null;
 onChange: (v: string) => void;
}> = ({ value, onChange }) => {
 const ref = useRef<HTMLDivElement | null>(null);
 const [open, setOpen] = useState(false);
 const [query, setQuery] = useState("");
 const STATES_UTS = [
 "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
 "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
 "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
 "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim",
 "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
 "West Bengal", "Delhi", "Puducherry", "Chandigarh",
 "Andaman and Nicobar Islands", "Dadra and Nagar Haveli and Daman and Diu",
 "Lakshadweep", "Ladakh", "Jammu & Kashmir",
 ];
 const [filtered, setFiltered] = useState<string[]>(STATES_UTS);
 useOnClickOutside(ref, () => { setOpen(false); setQuery(""); setFiltered(STATES_UTS); });
 useEffect(() => {
 setFiltered(STATES_UTS.filter((s) => s.toLowerCase().includes(query.trim().toLowerCase())));
 }, [query]);
 return (
 <div ref={ref} className="relative">
 <label className="block text-sm font-medium text-[#2F2E2B] mb-2">State / UT</label>
 <button
 onClick={() => setOpen((s) => !s)}
 className="w-full text-left px-4 py-3 border border-[#E5E2DA] rounded-lg bg-[#F4F3EE] flex items-center justify-between focus:outline-none focus:ring-1 focus:ring-[#C15F3C] transition"
 aria-haspopup="listbox"
 aria-expanded={open}
 >
 <span className="truncate text-sm text-[#6F6B63]">{value ?? "Select State/UT"}</span>
 <ChevronDown className="w-4 h-4 text-[#B1ADA1]" />
 </button>
 {open && (
 <div className="absolute z-40 mt-1 w-full bg-white border border-[#E5E2DA] rounded-xl shadow-xl" role="listbox">
 <div className="p-3">
 <input
 value={query}
 onChange={(e) => setQuery(e.target.value)}
 autoFocus
 className="w-full px-3 py-2 border border-[#E5E2DA] rounded-lg text-sm bg-[#F4F3EE] focus:outline-none focus:ring-1 focus:ring-[#C15F3C]"
 placeholder="Search State/UT..."
 />
 </div>
 <div className="max-h-52 overflow-auto divide-y divide-[#E5E2DA]">
 {filtered.length === 0 && (
 <div className="px-4 py-3 text-sm text-[#B1ADA1]">No results</div>
 )}
 {filtered.map((s) => (
 <button
 key={s}
 onClick={() => { onChange(s); setOpen(false); setQuery(""); setFiltered(STATES_UTS); }}
 className="w-full text-left px-4 py-2.5 text-sm text-[#6F6B63] hover:bg-[#F4F3EE] hover:text-[#C15F3C] transition-colors"
 role="option"
 aria-selected={value === s}
 >
 {s}
 </button>
 ))}
 </div>
 </div>
 )}
 </div>
 );
};

const YearsDropdown: React.FC<{
 value: string | null;
 onChange: (v: string) => void;
}> = ({ value, onChange }) => {
 const ref = useRef<HTMLDivElement | null>(null);
 const [open, setOpen] = useState(false);
 useOnClickOutside(ref, () => setOpen(false));
 const YEARS_OPTIONS = ["1 Year", "3 Years", "5 Years"];
 return (
 <div ref={ref} className="relative">
 <label className="block text-sm font-medium text-[#2F2E2B] mb-2">Select Years</label>
 <button
 onClick={() => setOpen((s) => !s)}
 className="w-full text-left px-4 py-3 border border-[#E5E2DA] rounded-lg bg-[#F4F3EE] flex items-center justify-between focus:outline-none focus:ring-1 focus:ring-[#C15F3C] transition"
 aria-haspopup="listbox"
 aria-expanded={open}
 >
 <span className="truncate text-sm text-[#6F6B63]">{value ?? "3 Years"}</span>
 <ChevronDown className="w-4 h-4 text-[#B1ADA1]" />
 </button>
 {open && (
 <div className="absolute z-40 mt-1 w-full bg-white border border-[#E5E2DA] rounded-xl shadow-xl">
 <div className="py-2 max-h-44 overflow-auto">
 {YEARS_OPTIONS.map((y) => (
 <button
 key={y}
 onClick={() => { onChange(y); setOpen(false); }}
 className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-[#F4F3EE] hover:text-[#C15F3C] ${value === y ? "bg-[#F4F3EE] text-[#C15F3C] font-medium" : "text-[#6F6B63]"
 }`}
 role="option"
 aria-selected={value === y}
 >
 {y}
 </button>
 ))}
 </div>
 </div>
 )}
 </div>
 );
};

export default function FSSAIRenewal(): React.ReactElement {
 const [activeFaq, setActiveFaq] = useState<number | null>(null);
 const [panOrGstin, setPanOrGstin] = useState("");
 const [existingLicense, setExistingLicense] = useState("");
 const [renewalType, setRenewalType] = useState<string | null>(null);
 const [stateUt, setStateUt] = useState<string | null>(null);
 const [years, setYears] = useState<string | null>("3 Years");

 const faqItems = [
 "Do I need to renew my FSSAI license?",
 "What is the importance of FSSAI renewal?",
 "How often do I need to renew my FSSAI license?",
 "What are the benefits of renewing my FSSAI license/registration?",
 "When should I start the FSSAI renewal process?",
 "What is the late fee for delayed FSSAI license renewal?",
 "Can I renew my FSSAI license after the expiry date?",
 "What documents are needed for FSSAI license renewal?",
 "How can DoStartup assist with FSSAI renewal?",
 "Where can I get started with FSSAI renewal through DoStartup?",
 ];

 function handleApplyNow() {
 if (!panOrGstin.trim()) { alert("Please enter PAN / GSTIN"); return; }
 if (!renewalType) { alert("Please select renewal type"); return; }
 if (!stateUt) { alert("Please select State/UT"); return; }
 alert(`Apply: ${panOrGstin}\nLicense: ${existingLicense}\nRenewal: ${renewalType}\nState: ${stateUt}\nYears: ${years}`);
 }

 return (
 <div className="min-h-screen bg-[#F4F3EE]">
 <Head>
 <title>FSSAI Renewal - DoStartup</title>
 </Head>

 <Navbar />

 {/* ── Hero Section ── */}
 <section className="bg-white border-b border-[#E5E2DA] pt-10 pb-12">
 <div className="max-w-7xl mx-auto px-4 sm:px-6">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

 {/* Left: Info */}
 <div className="pt-2">
 {/* Badge */}
 <div className="inline-flex items-center gap-2 bg-[#F4F3EE] border border-[#E5E2DA] rounded-full px-3 py-1 mb-4">
 <span className="w-2 h-2 bg-[#C15F3C] rounded-full" />
 <span className="text-xs font-medium text-[#C15F3C]">FSSAI Compliance</span>
 </div>

 <h1 className="text-3xl md:text-4xl font-semibold text-[#2F2E2B] mb-4 leading-tight">
 Get Your <span className="text-[#C15F3C]">FSSAI Renewal</span>
 </h1>

 <p className="text-sm text-[#6F6B63] mb-8 max-w-xl leading-relaxed">
 Ensure your food business stays compliant with FSSAI by renewing your license before it
 expires. Our professional team simplifies the renewal process with a fast, secure, and
 fully online service.
 </p>

 {/* Features Box */}
 <div className="bg-[#F4F3EE] border border-[#E5E2DA] rounded-xl p-5 space-y-3">
 {[
 "100% Online renewal process",
 "Expert assistance throughout the process",
 "Fast, effortless, and transparent",
 "Swift processing and quick approval",
 "Receive your FSSAI certificate without delay",
 ].map((feat) => (
 <div key={feat} className="flex items-center gap-3">
 <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-[#E5E2DA] shrink-0">
 <svg className="w-4 h-4 text-[#C15F3C]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
 </svg>
 </div>
 <span className="text-sm font-medium text-[#2F2E2B]">{feat}</span>
 </div>
 ))}
 </div>
 </div>

 {/* Right: Form Card */}
 <div>
 <div className="bg-white rounded-2xl shadow-sm border border-[#E5E2DA] overflow-hidden">
 {/* Colored top stripe */}
 <div className="h-1.5 w-full bg-[#C15F3C]" />
 <div className="p-6 space-y-4">
 <h2 className="text-base font-semibold text-[#2F2E2B]">Start Your Renewal</h2>

 <div>
 <label className="block text-sm font-medium text-[#2F2E2B] mb-2">PAN / GSTIN</label>
 <input
 value={panOrGstin}
 onChange={(e) => setPanOrGstin(e.target.value)}
 type="text"
 className="w-full px-4 py-3 bg-[#F4F3EE] border border-[#E5E2DA] rounded-lg text-sm text-[#2F2E2B] placeholder-[#B1ADA1] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] transition"
 placeholder="PAN or GSTIN"
 />
 </div>

 <div>
 <label className="block text-sm font-medium text-[#2F2E2B] mb-2">Existing License Number</label>
 <input
 type="text"
 value={existingLicense}
 onChange={(e) => setExistingLicense(e.target.value)}
 placeholder="Existing FSSAI License Number"
 className="w-full px-4 py-3 bg-[#F4F3EE] border border-[#E5E2DA] rounded-lg text-sm text-[#2F2E2B] placeholder-[#B1ADA1] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] transition"
 />
 </div>

 <RenewalTypeDropdown value={renewalType} onChange={setRenewalType} />

 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
 <StateDropdown value={stateUt} onChange={setStateUt} />
 <YearsDropdown value={years} onChange={setYears} />
 </div>

 <button
 onClick={handleApplyNow}
 className="w-full py-3 bg-[#C15F3C] hover:bg-[#A94E30] text-white text-sm font-semibold rounded-lg transition-colors duration-200"
 >
 Apply Now
 </button>
 </div>
 </div>

 {/* Trust badges */}
 <div className="mt-4 flex items-center justify-center gap-5 text-xs text-[#B1ADA1]">
 <div className="flex items-center gap-1.5">
 <svg className="w-4 h-4 fill-[#C15F3C]" viewBox="0 0 20 20">
 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
 </svg>
 <span>Trusted by 50,000+ businesses</span>
 </div>
 <div className="flex items-center gap-1.5">
 <svg className="w-4 h-4 fill-[#C15F3C]" viewBox="0 0 20 20">
 <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
 </svg>
 <span>100% Secure & Compliant</span>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* ── Main Content ── */}
 <section className="py-4">
 <div className="max-w-7xl mx-auto px-4 sm:px-6">
 <div className="flex flex-col lg:flex-row gap-8">

 {/* ── Left Main Content ── */}
 <div className="flex-1 space-y-6">

 {/* Article Card */}
 <div className="bg-white rounded-2xl border border-[#E5E2DA] p-6 space-y-4">
 <div className="text-xs text-[#B1ADA1]">
 DoStartup / Registrations / <span className="text-[#C15F3C]">FSSAI Renewal</span>
 </div>

 <h2 className="text-xl font-semibold text-[#2F2E2B]">
 FSSAI Renewal – Registration and License Renewal
 </h2>

 <p className="text-sm text-[#6F6B63] leading-relaxed">
 For food businesses, obtaining and renewing FSSAI licenses/registrations is essential
 for legal compliance and adherence to safety standards. The renewal of FSSAI licenses,
 governed by the Food Safety and Standards Authority of India, is vital for any entity
 in the food sector to ensure ongoing compliance with safety regulations and quality
 benchmarks. With licenses usually valid for 1 to 5 years, timely renewal is key to
 uninterrupted business operations.
 </p>

 <p className="text-sm text-[#6F6B63] leading-relaxed">
 DoStartup offers comprehensive assistance in renewing your FSSAI license/registration,
 simplifying the process and ensuring your food business fully complies with the
 necessary safety and quality regulations.
 </p>

 {[
 {
 title: "FSSAI License and Registration for Indian Food Businesses",
 body: "For businesses involved in manufacturing, storing, transporting, or distributing food within India, securing an FSSAI License or Registration is a crucial legal requirement. The specific type of FSSAI license needed depends on the scale and scope of the operation.",
 },
 {
 title: "FSSAI Registration",
 body: "FSSAI Registration is a mandatory requirement for small-scale food manufacturers or Food Business Operators (FBOs) with an annual turnover of less than ₹12 lakhs. This registration allows small food businesses to operate legally within India.",
 },
 ].map(({ title, body }) => (
 <div key={title}>
 <h3 className="text-base font-semibold text-[#2F2E2B] mb-2">{title}</h3>
 <p className="text-sm text-[#6F6B63] leading-relaxed">{body}</p>
 </div>
 ))}

 <div>
 <h3 className="text-base font-semibold text-[#2F2E2B] mb-2">FSSAI License</h3>
 <p className="text-sm text-[#6F6B63] leading-relaxed mb-3">
 The FSSAI License becomes essential for food enterprises whose turnover exceeds ₹12 lakhs. The license is differentiated into:
 </p>
 <ul className="space-y-2">
 {["State License: Suited for medium-sized food businesses operating within a particular state.",
 "Central License: Required for larger food businesses, especially those with a turnover exceeding ₹20 crores or those involved in interstate trade or import/export."
 ].map((item) => (
 <li key={item} className="flex items-start gap-2 text-sm text-[#6F6B63]">
 <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C15F3C] shrink-0" />
 {item}
 </li>
 ))}
 </ul>
 </div>

 <div>
 <h3 className="text-base font-semibold text-[#2F2E2B] mb-3">Validity of FSSAI Registration and License</h3>
 <div className="overflow-auto rounded-xl border border-[#E5E2DA]">
 <table className="w-full text-sm">
 <thead>
 <tr className="bg-[#F4F3EE]">
 <th className="text-left px-4 py-3 text-[#2F2E2B] font-semibold border-b border-[#E5E2DA]">License / Registration</th>
 <th className="text-left px-4 py-3 text-[#2F2E2B] font-semibold border-b border-[#E5E2DA]">Duration of Validity</th>
 </tr>
 </thead>
 <tbody>
 {[
 ["FSSAI Registration", "1 to 5 Years (as per applicant's choice)"],
 ["FSSAI State License", "1 year"],
 ["FSSAI Central License", "1 year"],
 ].map(([name, dur], i) => (
 <tr key={name} className={i % 2 === 0 ? "bg-white" : "bg-[#F4F3EE]"}>
 <td className="px-4 py-3 text-[#6F6B63]">{name}</td>
 <td className="px-4 py-3 text-[#6F6B63]">{dur}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </div>

 {[
 {
 title: "Renewal of FSSAI License",
 body: "Renewal is a crucial step to undertake before the current license expires. It's recommended to start the renewal process well before the expiry date to ensure smooth continuation of business activities.",
 },
 {
 title: "FSSAI Renewal Timeline",
 body: "The process should ideally begin 30 days before expiry; businesses can start as early as 180 days prior to prepare documents and submit the renewal application.",
 },
 {
 title: "Late Fee for Delayed FSSAI License Renewal",
 body: "A late fee of ₹100 per day applies for license renewals not initiated at least 30 days before expiry (this late fee applies to licenses and not registrations).",
 },
 {
 title: "Renewal after Expiry",
 body: "Renewals after expiry may keep the same license number but attract penalties depending on the delay (e.g., up to 90 days late: 3× the annual fee; 91–180 days late: 5× total in some cases).",
 },
 ].map(({ title, body }) => (
 <div key={title}>
 <h3 className="text-base font-semibold text-[#2F2E2B] mb-2">{title}</h3>
 <p className="text-sm text-[#6F6B63] leading-relaxed">{body}</p>
 </div>
 ))}

 <div>
 <h3 className="text-base font-semibold text-[#2F2E2B] mb-3">Benefits of Renewing FSSAI License/Registration</h3>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
 {["Continuous Legal Compliance", "Uninterrupted Business Operations", "Consumer Confidence",
 "Avoidance of Penalties", "Quality Improvement", "Market Expansion",
 "Brand Credibility", "Regulatory Updates", "Risk Management", "Operational Efficiency"
 ].map((b) => (
 <div key={b} className="flex items-center gap-2 text-sm text-[#6F6B63]">
 <span className="w-1.5 h-1.5 rounded-full bg-[#C15F3C] shrink-0" />
 {b}
 </div>
 ))}
 </div>
 </div>

 <div>
 <h3 className="text-base font-semibold text-[#2F2E2B] mb-3">Documents Needed for FSSAI License Renewal</h3>
 <ul className="space-y-2">
 {["FSMS Certificate (if applicable)", "Updated nominee details",
 "Documents supporting any modifications",
 "Supporting documents on company letterhead where applicable",
 "Any additional documents requested by licensing authority"
 ].map((doc) => (
 <li key={doc} className="flex items-start gap-2 text-sm text-[#6F6B63]">
 <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C15F3C] shrink-0" />
 {doc}
 </li>
 ))}
 </ul>
 </div>

 <div>
 <h3 className="text-base font-semibold text-[#2F2E2B] mb-2">Simplify FSSAI Renewal with DoStartup</h3>
 <p className="text-sm text-[#6F6B63] leading-relaxed">
 DoStartup is your all-in-one solution for FSSAI needs — registration, licensing, and renewal.
 Our expert team manages the process end-to-end so you can focus on your business.
 </p>
 </div>
 </div>

 {/* Procedure Card */}
 <div className="bg-white rounded-2xl border border-[#E5E2DA] p-6">
 <h3 className="text-lg font-semibold text-[#2F2E2B] mb-4">Procedure & Documents Summary</h3>
 <div className="space-y-3">
 {[
 "Start renewal process 30–180 days before expiry",
 "Prepare FSMS / nominee and supporting documents",
 "Submit online application and pay standard fees (plus any late fees if applicable)",
 ].map((step) => (
 <div key={step} className="flex items-start gap-3">
 <CheckCircle className="w-5 h-5 text-[#C15F3C] mt-0.5 shrink-0" />
 <span className="text-sm text-[#6F6B63]">{step}</span>
 </div>
 ))}
 </div>
 </div>

 {/* FAQ Card */}
 <div className="bg-white rounded-2xl border border-[#E5E2DA] p-6">
 <h3 className="text-lg font-semibold text-[#2F2E2B] mb-4">FAQ's on FSSAI Renewal</h3>
 <div className="divide-y divide-[#E5E2DA]">
 {faqItems.map((q, idx) => (
 <div key={idx}>
 <button
 className="w-full text-left flex justify-between items-center py-4 gap-4"
 onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
 >
 <span className="text-sm font-medium text-[#2F2E2B]">{q}</span>
 <span className="text-[#C15F3C] text-lg leading-none shrink-0">
 {activeFaq === idx ? "−" : "+"}
 </span>
 </button>
 {activeFaq === idx && (
 <div className="pb-4 text-sm text-[#6F6B63] leading-relaxed">
 This answer explains {q.toLowerCase()}. For full process guidance and document
 templates, reach out to our experts.
 </div>
 )}
 </div>
 ))}
 <div className="pt-4">
 <button className="px-4 py-2 border border-[#C15F3C] text-[#C15F3C] hover:bg-[#C15F3C] hover:text-white text-sm rounded-lg transition-colors duration-200">
 Load More
 </button>
 </div>
 </div>
 </div>

 {/* Popular Searches (full) */}
 <div className="bg-white rounded-2xl border border-[#E5E2DA] p-6">
 <h4 className="text-sm font-semibold text-[#2F2E2B] mb-3">Popular Searches</h4>
 <div className="flex flex-wrap gap-2">
 {POPULAR_SEARCHES.map((t, i) => (
 <span key={t + i} className="text-xs border border-[#E5E2DA] rounded-full px-3 py-1 bg-[#F4F3EE] text-[#6F6B63] hover:text-[#C15F3C] hover:border-[#C15F3C] cursor-pointer transition-colors">
 {t}
 </span>
 ))}
 </div>
 </div>
 </div>

 {/* ── Right Sidebar ── */}
         <aside className="lg:col-span-4 hidden lg:block">
          <SidebarCart />
        </aside>
 </div>
 </div>
 </section>

 <Footer />

 {/* WhatsApp CTA */}
 <button
 className="fixed right-5 bottom-5 flex items-center gap-2 px-4 py-3 bg-[#C15F3C] hover:bg-[#A94E30] text-white text-sm font-semibold rounded-full shadow-lg transition-colors duration-200 z-50"
 aria-label="Live chat with experts"
 onClick={() => alert("Open WhatsApp chat")}
 >
 <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden fill="currentColor">
 <path d="M12 2a10 10 0 00-8.66 14.2L2 22l5.93-1.7A10 10 0 1012 2z" />
 </svg>
 Live Chat with Experts
 </button>
 </div>
 );
}
