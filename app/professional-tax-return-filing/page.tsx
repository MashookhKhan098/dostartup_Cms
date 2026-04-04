"use client";
import AddQuestionModal from "../components/AddQuestionModal";

import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, CheckCircle, ShoppingBag, Plus } from "lucide-react";
import Navbar from "../components/Navbar";

const ASSETS = {
 logo: "/images/india-logo.jpg",
 hero: "/images/professional-tax-hero.png",
 whatsapp: "/images/whatsapp.svg",
 footerBg: "/images/footer-bg.png",
 cartIcon: "/images/cart-icon.svg",
 indiaFlag: "/images/india-flag.png",
 ledgers: "https://img.indiafilings.com/catalog/ledgers.png",
 adRight1: "/images/company-compliance-ad.png",
 dinEkyc: "/images/din-ekyc-ad.png",
};

const STATES_UTS = [
 "Andhra Pradesh",
 "Assam",
 "Bihar",
 "Chhattisgarh",
 "Gujarat",
 "Karnataka",
 "Kerala",
 "Madhya Pradesh",
 "Maharashtra",
 "Manipur",
 "Meghalaya",
 "Mizoram",
 "Nagaland",
 "Odisha",
 "Punjab",
 "Rajasthan",
 "Tamil Nadu",
 "Telangana",
 "Tripura",
 "Uttar Pradesh",
 "West Bengal",
 "Delhi",
 "Puducherry",
 "Chandigarh",
 "Andaman and Nicobar Islands",
 "Dadra and Nagar Haveli and Daman and Diu",
 "Lakshadweep",
 "Ladakh",
 "Jammu & Kashmir",
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

const StateDropdown: React.FC<{
 value: string | null;
 onChange: (v: string) => void;
}> = ({ value, onChange }) => {
 const ref = useRef<HTMLDivElement | null>(null);
 const [open, setOpen] = useState(false);
 const [query, setQuery] = useState("");
 const [filtered, setFiltered] = useState<string[]>(STATES_UTS);

 useOnClickOutside(ref, () => {
 setOpen(false);
 setQuery("");
 setFiltered(STATES_UTS);
 });

 useEffect(() => {
 setFiltered(
 STATES_UTS.filter((s) =>
 s.toLowerCase().includes(query.trim().toLowerCase())
 )
 );
 }, [query]);

 return (
 <div ref={ref} className="relative">
 <label className="block text-sm font-medium text-slate-700 mb-2">
 State
 </label>
 <div>
 <button
 onClick={() => setOpen((s) => !s)}
 className="w-full text-left px-4 py-2 border border-gray-200 rounded bg-white flex items-center justify-between focus:outline-none focus:ring-1 focus:ring-amber-600"
 aria-haspopup
 aria-expanded={open}
 >
 <span className="truncate text-slate-600">
 {value ?? "Select State/UT"}
 </span>
 <ChevronDown className="w-4 h-4 text-slate-400" />
 </button>
 </div>

 {open && (
 <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded shadow-lg z-40">
 <div className="p-3">
 <input
 value={query}
 onChange={(e) => setQuery(e.target.value)}
 className="w-full px-3 py-2 border border-gray-200 rounded text-sm focus:outline-none focus:ring-1 focus:ring-amber-600"
 placeholder="Search State/UT..."
 />
 </div>
 <div className="max-h-40 overflow-auto divide-y divide-gray-200">
 {filtered.map((s) => (
 <button
 key={s}
 onClick={() => {
 onChange(s);
 setOpen(false);
 setQuery("");
 }}
 className="w-full text-left px-4 py-2 hover:bg-amber-50 hover:text-amber-700 text-sm text-slate-700 transition-colors"
 role="option"
 aria-selected={value === s}
 >
 {s}
 </button>
 ))}
 {filtered.length === 0 && (
 <div className="px-4 py-3 text-sm text-slate-500">No results</div>
 )}
 </div>
 </div>
 )}
 </div>
 );
};

const ProfessionalTaxDropdown: React.FC<{
 value: string | null;
 onChange: (v: string) => void;
}> = ({ value, onChange }) => {
 const ref = useRef<HTMLDivElement | null>(null);
 const [open, setOpen] = useState(false);
 const OPTIONS = [
 "Professional Tax Registration Certificate",
 "Professional Tax Registration Return Filing",
 "Professional Tax Registration Cancellation",
 ];
 useOnClickOutside(ref, () => setOpen(false));
 return (
 <div ref={ref} className="relative">
 <label className="block text-sm font-medium text-slate-700 mb-2">
 Professional Tax
 </label>
 <button
 onClick={() => setOpen((s) => !s)}
 className="w-full text-left px-4 py-2 border border-gray-200 rounded bg-white flex items-center justify-between focus:outline-none focus:ring-1 focus:ring-amber-600"
 aria-haspopup
 aria-expanded={open}
 >
 <span className="truncate text-slate-600">
 {value ?? "Select Professional Tax..."}
 </span>
 <ChevronDown className="w-4 h-4 text-slate-400" />
 </button>
 {open && (
 <div className="absolute z-40 mt-2 w-full bg-white border border-gray-200 rounded shadow-lg">
 <div className="px-3 py-2 text-xs text-slate-400 border-b border-gray-200">
 Select Professional Tax...
 </div>
 <div className="py-1 max-h-48 overflow-auto">
 {OPTIONS.map((opt) => (
 <button
 key={opt}
 onClick={() => {
 onChange(opt);
 setOpen(false);
 }}
 className={`w-full text-left px-4 py-3 hover:bg-amber-50 hover:text-amber-700 text-sm flex items-center justify-between transition-colors ${
 value === opt
 ? "font-medium text-amber-700 bg-amber-50"
 : "text-slate-700"
 }`}
 role="option"
 aria-selected={value === opt}
 >
 <span>{opt}</span>
 {value === opt && (
 <svg
 width="16"
 height="16"
 viewBox="0 0 24 24"
 fill="none"
 aria-hidden
 className="text-amber-600"
 >
 <path
 d="M20 6L9 17l-5-5"
 stroke="currentColor"
 strokeWidth="2"
 strokeLinecap="round"
 strokeLinejoin="round"
 />
 </svg>
 )}
 </button>
 ))}
 </div>
 </div>
 )}
 </div>
 );
};

export default function ProfessionalTaxReturnPage() {
 const [state, setState] = useState<string | null>(null);
 const [panOrGstin, setPanOrGstin] = useState("");
 const [ptNumber, setPtNumber] = useState("");
 const [activeFaq, setActiveFaq] = useState<number | null>(null);
 const [gstChecked, setGstChecked] = useState(false);
 const [professionalTaxOption, setProfessionalTaxOption] = useState<
 string | null
 >("Professional Tax Registration Return Filing");

 function handleApplyNow() {
 if (!state) {
 alert("Please select State/UT");
 return;
 }
 if (!panOrGstin.trim()) {
 alert("Please enter PAN / GSTIN");
 return;
 }
 alert(
 `Apply Now submitted\nType: ${professionalTaxOption}\nState: ${state}\nPAN/GSTIN: ${panOrGstin}\nPT No: ${ptNumber}`
 );
 }

 const faqList = [
 "What is a professional tax return?",
 "How often do I need to file professional tax returns?",
 "When is the professional tax return due date?",
 "What happens if I fail to file professional tax returns on time?",
 "Can I file professional tax returns online?",
 "What documents are required for filing professional tax returns?",
 "How do I calculate the professional tax payable for a particular period?",
 "Is there any penalty for the late filing of professional tax returns?",
 "Can I revise my professional tax returns?",
 "What happens if I overpay professional tax?",
 ];

 const faqAnswers: Record<number, string> = {
 0: "A professional tax return is a document filed with the state government containing details of the tax paid by individuals or businesses liable to pay professional tax.",
 1: "The frequency varies by state - monthly, quarterly, or annually. Check your state's specific requirements for PT return filing.",
 2: "Due dates vary by state. Generally, returns must be filed within the time specified by the respective state government, often by the end of the month following the reporting period.",
 3: "Penalties vary by state but may include daily penalties for late filing, interest on late payments, and potential legal consequences.",
 4: "Yes, most states now offer online filing facilities through their respective professional tax portals.",
 5: "Documents include PAN Card, Aadhaar Card, bank details, salary details, registration certificate, challans for tax payment, and TDS details if applicable.",
 6: "Professional tax is calculated based on slab rates prescribed by each state, typically based on monthly income brackets.",
 7: "Yes, late filing penalties vary by state but may include daily penalties, flat fees, and interest on delayed payments.",
 8: "Revision rules vary by state. Some states allow revisions within a specified timeframe with additional fees.",
 9: "Overpaid tax can typically be adjusted against future liability or claimed as a refund, subject to state rules.",
 };

 return (
 <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
 {/* Navbar - Imported */}
 <Navbar />

 {/* Breadcrumb */}
 <div className="bg-gray-50 py-5">
 <div className="max-w-[1180px] mx-auto px-6 text-sm text-gray-500">
 Home / Compliance Services /{" "}
 <span className="text-amber-700 font-medium">
 Professional Tax Return Filing
 </span>
 </div>
 </div>

 {/* Main Content */}
 <main className="max-w-[1180px] mx-auto px-6 py-3">
 {/* Hero Section */}
 <section className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
 <div className="flex flex-col lg:flex-row">
 {/* Left Content */}
 <div className="lg:w-1/2 p-8 lg:p-10">
 <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 mb-4">
 <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
 <span className="text-xs font-medium text-amber-700">
 PROFESSIONAL TAX
 </span>
 </div>

 <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
 File Your{" "}
 <span className="text-amber-600 underline decoration-4 decoration-amber-300">
 Professional
 </span>
 <br />
 Tax Return On Time
 </h1>

 <p className="text-gray-600 mb-6 max-w-xl">
 Stay compliant with expert-assisted PT Return Filing. Ensure
 timely submission, avoid penalties, and keep your business
 compliant with state PT regulations.
 </p>

 <div className="space-y-4">
 <div className="flex items-center gap-4">
 <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
 <CheckCircle className="w-4 h-4 text-amber-600" />
 </div>
 <span className="font-medium text-slate-900">
 Accurate &amp; On-Time Filing
 </span>
 </div>
 <div className="flex items-center gap-4">
 <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
 <CheckCircle className="w-4 h-4 text-amber-600" />
 </div>
 <span className="font-medium text-slate-900">
 PTEC &amp; PTRC Return Assistance
 </span>
 </div>
 <div className="flex items-center gap-4">
 <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
 <CheckCircle className="w-4 h-4 text-amber-600" />
 </div>
 <span className="font-medium text-slate-900">
 Simplified Filing with Expert Support
 </span>
 </div>
 <div className="flex items-center gap-4">
 <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
 <CheckCircle className="w-4 h-4 text-amber-600" />
 </div>
 <span className="font-medium text-slate-900">
 Ensure Error-Free Government Submissions
 </span>
 </div>
 <div className="flex items-center gap-4">
 <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
 <CheckCircle className="w-4 h-4 text-amber-600" />
 </div>
 <span className="font-medium text-slate-900">
 Trusted by 1 Lakh+ Businesses
 </span>
 </div>
 </div>
 </div>

 {/* Right Form Card */}
 <div className="lg:w-1/2 p-8 lg:p-10 bg-gradient-to-br from-amber-50 to-amber-100">
 <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
 <div
 className="h-1.5 w-full rounded-t-xl mb-4"
 style={{
 background: "linear-gradient(90deg, #b45309, #d97706)",
 }}
 />

 <div className="space-y-4 mt-3">
 <ProfessionalTaxDropdown
 value={professionalTaxOption}
 onChange={(v) => setProfessionalTaxOption(v)}
 />

 <div>
 <p className="text-xs text-slate-500">
 File your Professional Tax Return on time by reporting
 employee deductions or nil returns. Submit payment details
 for the selected period to stay compliant.
 </p>
 </div>

 <StateDropdown value={state} onChange={(v) => setState(v)} />

 <div>
 <label className="block text-sm font-medium text-slate-700 mb-2">
 PAN or GSTIN
 </label>
 <input
 type="text"
 value={panOrGstin}
 onChange={(e) => setPanOrGstin(e.target.value)}
 placeholder="PAN or GSTIN"
 className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-amber-600"
 />
 </div>

 <div>
 <label className="block text-sm font-medium text-slate-700 mb-2">
 PT Number (optional)
 </label>
 <input
 type="text"
 value={ptNumber}
 onChange={(e) => setPtNumber(e.target.value)}
 placeholder="PT Number (optional)"
 className="w-full px-4 py-2 border border-gray-200 rounded bg-white text-slate-600 focus:outline-none focus:ring-1 focus:ring-amber-600"
 />
 </div>

 <div className="flex justify-end">
 <button
 onClick={handleApplyNow}
 className="px-6 py-3 rounded bg-gradient-to-r from-amber-700 to-amber-800 text-white font-semibold shadow hover:from-amber-800 hover:to-amber-900 transition-all"
 >
 Apply Now
 </button>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Main content with left column & right sidebar */}
 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
 {/* content column (span 2 on large) */}
 <div className="lg:col-span-2 space-y-6">
 {/* Article */}
 <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
 <h2 className="text-2xl font-bold mb-3 text-slate-900">
 Professional Tax Return Filing
 </h2>

 <p className="text-gray-600 mb-4">
 Professional Tax Return Filing is mandatory for individuals
 and businesses liable to pay Professional Tax. Professional
 Tax is a tax levied by the State Government on salaried
 individuals, professionals, or persons engaged in any trade,
 calling, or employment. In contrast, Professional Tax Return
 is a document filed with the state government containing
 details of the Tax paid by the individual or business.
 </p>

 <p className="text-gray-600 mb-4">
 Filing Professional Tax Returns can be a complex and
 time-consuming process. IndiaFilings provides Professional Tax
 Return Filing services to assist clients in fulfilling their
 tax obligations. Our team of experts at IndiaFilings ensures
 that the entire process of PT return filing is completed
 promptly and hassle-free. We provide end-to-end assistance for
 PT annual return, from the collection of documents to the
 submission of the tax return and payment of Professional Tax.
 Contact us today to avail of our PT return filing service and
 ensure compliance with the rules and regulations of the state
 government.
 </p>

 <h3 className="text-lg font-semibold mt-4 mb-2 text-slate-900">
 Professional Tax
 </h3>
 <p className="text-gray-600 mb-4">
 Professional Tax is a form of direct taxation imposed on
 individuals who earn an income through employment, profession,
 calling, or trade. Unlike the income tax levied by the Central
 Government, Professional Tax is imposed by the government of a
 particular state or union territory in India.
 </p>

 <h3 className="text-lg font-semibold mt-4 mb-2 text-slate-900">
 Professional Tax Return Applicability
 </h3>
 <p className="text-gray-600 mb-4">
 PT return filing is mandatory for all individuals and
 businesses liable to pay Professional Tax as per the rules and
 regulations of the state government. The tax liability and
 filing frequency may vary from state to state.
 </p>

 <h3 className="text-lg font-semibold mt-4 mb-2 text-slate-900">
 Professional Tax slab rate
 </h3>
 <p className="text-gray-600 mb-4">
 The Professional Tax slab rate varies from state to state in
 India. Each state has its slab and rate for Professional Tax
 based on the taxpayer's income. Generally, slabs are split
 across income bands such as monthly income less than Rs.
 15,000, between Rs. 15,001 to Rs. 25,000 and above Rs. 25,000.
 Taxpayers must comply with their respective state's
 regulations.
 </p>

 <h3 className="text-lg font-semibold mt-4 mb-2 text-slate-900">
 PTRC Return Filing: Employer's Obligations
 </h3>
 <p className="text-gray-600 mb-4">
 Employers must deduct professional tax from employees'
 salaries, remit the collected amount to the relevant
 government department and file the prescribed Professional Tax
 Return within stipulated timeframes, enclosing proof of
 payment.
 </p>

 <h3 className="text-lg font-semibold mt-4 mb-2 text-slate-900">
 Benefits of PT Return Filing
 </h3>
 <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-4">
 <li>Avoidance of penalties and legal consequences</li>
 <li>Compliance with applicable laws</li>
 <li>Improved creditworthiness</li>
 <li>Access to social security benefits</li>
 <li>Easy and convenient online filing</li>
 <li>Increased government revenue and accurate records</li>
 </ul>

 <h3 className="text-lg font-semibold mt-4 mb-2 text-slate-900">
 Documents required for Professional Tax Return filing
 </h3>
 <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-4">
 <li>PAN Card</li>
 <li>Aadhaar Card</li>
 <li>Voter ID or Passport</li>
 <li>Bank account details</li>
 <li>Salary details or income proof</li>
 <li>
 Registration Certificate or Shop &amp; Establishment
 Certificate
 </li>
 <li>
 Challans or payment receipts for Professional Tax payment
 </li>
 <li>Details of TDS from salary (if any)</li>
 </ul>

 <h3 className="text-lg font-semibold mt-4 mb-2 text-slate-900">
 Procedure for Professional Tax Return Filing
 </h3>
 <ol className="list-decimal pl-5 text-gray-600 space-y-2 mb-4">
 <li>
 Obtain the Professional Tax Registration Certificate from
 the state authority.
 </li>
 <li>
 Determine the applicable slab and rate for the taxpayer.
 </li>
 <li>
 Collect necessary documents such as salary slips and payment
 receipts.
 </li>
 <li>Prepare the return in the prescribed format.</li>
 <li>
 Submit the return along with supporting documents and pay
 any tax due.
 </li>
 <li>Obtain acknowledgment for filing and payment.</li>
 </ol>

 <h3 className="text-lg font-semibold mt-4 mb-2 text-slate-900">
 Penalties for failing to File Professional Tax Return
 </h3>
 <p className="text-gray-600 mb-4">
 Penalties vary by state. For example, some states impose daily
 penalties for not registering, flat penalties for late filing
 and interest + penalties on late payments. (State rules vary;
 consult state authority for specifics.)
 </p>

 <h3 className="text-lg font-semibold mt-4 mb-2 text-slate-900">
 Why Choose IndiaFilings for Professional Tax Return Filing
 Service?
 </h3>
 <p className="text-gray-600 mb-4">
 IndiaFilings provides end-to-end assistance, timely filing to
 avoid penalties, affordable pricing, and expert support to
 ensure compliance with state regulations.
 </p>
 </div>

 {/* FAQ */}
 <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
 <h3 className="text-2xl font-bold mb-4 text-slate-900">
 FAQ's on Professional Tax Return Filing
 </h3>
 <div className="divide-y divide-gray-200">
 {faqList.map((q, i) => (
 <div key={i} className="py-3">
 <button
 onClick={() => setActiveFaq(activeFaq === i ? null : i)}
 className="w-full text-left flex justify-between items-center py-3"
 >
 <span className="font-medium text-slate-800">{q}</span>
 <span className="text-amber-600">
 {activeFaq === i ? "−" : "+"}
 </span>
 </button>
 {activeFaq === i && (
 <div className="mt-2 text-gray-600 pl-2">
 <p>{faqAnswers[i]}</p>
 </div>
 )}
 </div>
 ))}
 <div className="py-4">
 <button className="px-4 py-2 border-2 border-amber-600 text-amber-700 rounded text-sm hover:bg-amber-50 transition-colors font-medium">
 Load More
 </button>
 </div>
 </div>
 </div>
 </div>

 {/* Right sidebar */}
 <aside className="space-y-6">
 {/* Cart Widget */}
 <div className="bg-white rounded-lg shadow-md p-6 sticky top-28 border border-gray-200">
 <div className="text-center text-gray-600">
 <img
 src={ASSETS.cartIcon}
 alt="cart"
 className="mx-auto h-12 w-auto mb-3"
 />
 <h3 className="font-semibold text-slate-900">
 Your cart is empty
 </h3>
 <p className="text-sm mt-2 text-gray-600">
 Browse our services and add some services in cart!
 </p>
 </div>

 <div className="mt-6 text-center">
 <div className="text-sm text-gray-500">
 Existing User?{" "}
 <a className="text-amber-700 underline hover:text-amber-800 font-medium cursor-pointer">
 Login
 </a>
 </div>
 </div>

 <form className="mt-4 space-y-3" onSubmit={(e) => e.preventDefault()}>
 <input
 className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-600"
 placeholder="Name"
 />
 <input
 className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-600"
 placeholder="Email"
 />
 <div className="flex gap-2">
 <div className="flex items-center gap-2 border border-gray-200 rounded-md px-2">
 <img src={ASSETS.indiaFlag} alt="flag" className="h-4" />
 <span className="text-sm">+91</span>
 </div>
 <input
 className="flex-1 border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-600"
 placeholder="Phone"
 />
 </div>

 <label className="flex items-center gap-2 text-sm">
 <input
 type="checkbox"
 checked={gstChecked}
 onChange={() => setGstChecked((s) => !s)}
 className="w-4 h-4 accent-amber-600"
 />
 <span>Enter GSTIN to get 18% GST Credit</span>
 </label>

 {gstChecked && (
 <input
 className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-600"
 placeholder="GSTIN"
 />
 )}

 <button className="w-full bg-gradient-to-r from-amber-700 to-amber-800 text-white py-2 rounded-md font-medium flex items-center justify-center gap-2 hover:from-amber-800 hover:to-amber-900 transition-all shadow-md hover:shadow-lg">
 <ShoppingBag size={16} /> Get Started
 </button>

 <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400 pt-1">
 <svg className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
 </svg>
 <span>Secure · No spam · Instant confirmation</span>
 </div>
 </form>
 </div>

 <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-200">
 <h4 className="font-semibold mb-3 text-slate-900">
 Related Guides
 </h4>
 <ul className="text-sm space-y-2">
 <li>
 <a className="text-amber-700 hover:text-amber-800 hover:underline cursor-pointer">
 Gujarat Professional Tax
 </a>
 </li>
 <li>
 <a className="text-amber-700 hover:text-amber-800 hover:underline cursor-pointer">
 Telangana Professional Tax
 </a>
 </li>
 <li>
 <a className="text-amber-700 hover:text-amber-800 hover:underline cursor-pointer">
 Professional Tax in Andhra Pradesh
 </a>
 </li>
 <li>
 <a className="text-amber-700 hover:text-amber-800 hover:underline cursor-pointer">
 Kerala Professional Tax
 </a>
 </li>
 </ul>
 </div>

 <div className="bg-white rounded-lg shadow-sm p-4 text-center border border-gray-200">
 <img
 src={ASSETS.adRight1}
 alt="Company Compliance"
 className="rounded w-full"
 />
 <div className="mt-3 font-medium text-slate-900">
 Company Compliance
 </div>
 </div>

 <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
 <h4 className="font-semibold mb-3 text-slate-900">
 Popular Searches
 </h4>
 <div className="flex flex-wrap gap-2">
 {[
 "Partnership",
 "LLP",
 "Digital Signature",
 "PAN Card Download",
 "MSME Registration",
 "Trademark Status",
 ].map((t) => (
 <span
 key={t}
 className="text-xs px-2 py-1 border border-gray-200 rounded bg-white text-gray-700 hover:border-amber-300 hover:text-amber-700 cursor-pointer transition-colors"
 >
 {t}
 </span>
 ))}
 </div>
 </div>
 </aside>
 </div>
 </main>

 {/* WhatsApp CTA */}
 <div
 className="fixed right-6 bottom-6 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-4 py-3 rounded-full shadow-2xl flex items-center gap-3 z-50 hover:from-amber-700 hover:to-amber-800 transition-all cursor-pointer"
 onClick={() => alert("Open WhatsApp chat")}
 >
 <img src={ASSETS.whatsapp} alt="wa" className="w-5 h-5" />
 <span className="font-semibold text-sm">Live Chat with Experts</span>
 </div>
 </div>
 );
}