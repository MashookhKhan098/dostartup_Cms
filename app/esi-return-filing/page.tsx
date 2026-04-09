"use client";

import React, { useEffect, useRef, useState } from "react";
import {
 Search,
 Check,
 Plus,
 ChevronDown,
 User,
 Phone,
 Mail,
 Calendar,
 FileText,
 File,
} from "lucide-react";
import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";

const ASSETS = {
 logo: "/images/india-logo.jpg",
 heroBg: "/images/hero.png",
 whatsapp: "/images/whatsapp.png",
 docsImg: "/images/business-docs.png",
 formsImg: "/images/business-forms.png",
 docsRequiredImg: "/images/business-docs-required.png",
 ledgersBadge: "/images/ledgers-badge.png",
 hrPeople: "/images/esireturn.png",
 pfIcon: "/images/group.png",
 esiIcon: "/images/esi.png",
 payrollIcon: "/images/payroll.png",
 avatar: "/images/avatar-placeholder.png",
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

const Footer: React.FC = () => {
 return (
 <footer className="bg-[#F4F3EE] mt-12 py-5 border-t">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
 <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
 <div>
 <h5 className="font-semibold text-[#C15F3C] mb-2">Company</h5>
 <a className="block hover:text-[#C15F3C] transition-colors">About Us</a>
 <a className="block hover:text-[#C15F3C] transition-colors">Careers</a>
 <a className="block hover:text-[#C15F3C] transition-colors">Contact Us</a>
 </div>
 <div>
 <h5 className="font-semibold text-[#C15F3C] mb-2">Platforms</h5>
 <a className="block hover:text-[#C15F3C] transition-colors">Business Search</a>
 <a className="block hover:text-[#C15F3C] transition-colors">Trademark Search</a>
 <a className="block hover:text-[#C15F3C] transition-colors">Filings.AE for UAE</a>
 </div>
 <div>
 <h5 className="font-semibold text-[#C15F3C] mb-2">Usage</h5>
 <a className="block hover:text-[#C15F3C] transition-colors">Terms & Conditions</a>
 <a className="block hover:text-[#C15F3C] transition-colors">Privacy Policy</a>
 <a className="block hover:text-[#C15F3C] transition-colors">Refund Policy</a>
 </div>
 <div>
 <h5 className="font-semibold text-[#C15F3C] mb-2">Policies</h5>
 <a className="block hover:text-[#C15F3C] transition-colors">Confidentiality Policy</a>
 <a className="block hover:text-[#C15F3C] transition-colors">Disclaimer Policy</a>
 <a className="block hover:text-[#C15F3C] transition-colors">Reviews</a>
 </div>
 </div>
 <div className="text-center text-gray-500 mt-6">
 © {new Date().getFullYear()} All rights reserved.
 </div>
 </div>
 </footer>
 );
};

export default function EsiReturnFilingPage(): React.ReactElement {
 const [companyId, setCompanyId] = useState("");
 const [employees, setEmployees] = useState<string | number>("");
 const [demoRequested, setDemoRequested] = useState(false);
 const [faqOpen, setFaqOpen] = useState<number | null>(null);
 const [contactOpen, setContactOpen] = useState(false);
 const [selectedPlan, setSelectedPlan] = useState<string>("fractional-hr");
 const [searchQuery, setSearchQuery] = useState("");
 const contactRef = useRef<HTMLDivElement | null>(null);
 useOnClickOutside(contactRef, () => setContactOpen(false));
 const faqQuestions = [
 "What is ESI registration?",
 "Why is ESI return filing important?",
 "Who needs to register for the ESI scheme?",
 "What benefits does ESI offer to employees?",
 "When should ESI returns be filed?",
 "What happens if ESI returns are not filed?",
 "What documents are required for ESI return filing?",
 "What are the consequences of non-payment or late payment of employee's ESI contribution?",
 "How can DoStartup assist with ESI return filing?",
 ];
 const faqAnswers: Record<number, string> = {
 0: "ESI registration is the process by which an employer enrolls their establishment under the Employees' State Insurance Scheme to provide statutory social security benefits to eligible employees.",
 1: "ESI return filing is important to maintain compliance with ESIC regulations, ensure employees receive benefits, and avoid penalties and legal action for non-compliance.",
 2: "Businesses in India with a workforce of 10 or more employees are typically required to register for the ESI scheme and make contributions on behalf of their employees.",
 3: "ESI offers medical, maternity and disability benefits, compensation for workplace injuries, and several other social security entitlements to employees and their families.",
 4: "Monthly contributions must be paid by the 15th of the following month; half-yearly and annual returns have their own due dates as regulated by ESIC.",
 5: "Failing to file returns can result in penalties, interest, and potential legal consequences including fines and prosecution in severe cases.",
 6: "Essential documents include attendance registers, Form 6, register of wages, PAN of the organisation, cancelled cheque, monthly challans and return records.",
 7: "Delayed or non-payment can attract interest, damages, and in cases of deliberate non-payment, prosecution under relevant provisions which can include imprisonment or fines.",
 8: "We assist by collecting documents, preparing returns, validating contribution details, filing returns on the ESIC portal, and providing support during audits.",
 };

 useEffect(() => {
 if (demoRequested) {
 const t = setTimeout(() => setDemoRequested(false), 2500);
 return () => clearTimeout(t);
 }
 return;
 }, [demoRequested]);

 return (
 <div className="min-h-screen bg-[#F4F3EE] text-gray-800 font-sans antialiased">
 {/* Imported Navbar */}
 <Navbar />

 {/* Breadcrumb */}
 <div className="bg-gradient-to-r from-white to-slate-50 py-3 border-b border-gray-200">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-500">
 Home / Services /{" "}
 <span className="text-[#C15F3C] font-medium">ESI Return Filing</span>
 </div>
 </div>

 <main className="py-3">
 {/* HERO SECTION */}
 <section
 aria-label="hero"
 className="relative rounded-2xl overflow-hidden shadow-lg max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
 style={{ minHeight: 360 }}
 >
 <div
 className="absolute inset-0 bg-center bg-no-repeat bg-cover"
 style={{ backgroundImage: `url(${ASSETS.heroBg})` }}
 >
 <img src={ASSETS.heroBg} alt="hero-bg" className="hidden" />
 <div
 className="absolute inset-0"
 style={{
 background:
 "linear-gradient(90deg, rgba(2,6,23,0.85) 0%, rgba(2,6,23,0.55) 50%, rgba(0,0,0,0.12) 100%)",
 }}
 />
 </div>
 <div className="relative z-10">
 <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center gap-8">
 <div className="flex-1 max-w-2xl">
 <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-2xl p-8 md:p-10 backdrop-blur-sm">
 {/* Badge */}
 <div className="inline-flex items-center gap-1.5 bg-[#C15F3C]/20 border border-[#C15F3C]/30 rounded-full px-3 py-1 mb-4">
 <div className="w-1.5 h-1.5 bg-[#C15F3C] rounded-full" />
 <span className="text-xs font-medium text-white">HR & PAYROLL</span>
 </div>

 <h1 className="text-white text-3xl md:text-[34px] leading-tight font-semibold mb-3">
 PF Return Filing
 </h1>
 <p className="text-slate-200 text-sm md:text-base mb-6 max-w-prose">
 Ensure timely PF contribution management, challan
 generation, and monthly return filing. Supported by a
 Dedicated Accountant and the LEDGERS payroll
 compliance system.
 </p>

 {/* Trust Badges */}
 <div className="flex items-center gap-3 mt-4 mb-6">
 <div className="flex -space-x-1.5">
 {[1, 2, 3].map((i) => (
 <div key={i} className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-r from-[#C15F3C] to-[#A74A2F] border-2 border-white shadow-sm" />
 ))}
 </div>
 <span className="text-xs text-gray-300">Trusted by 10,000+ businesses</span>
 </div>

 <form
 onSubmit={(e) => {
 e.preventDefault();
 setDemoRequested(true);
 }}
 className="flex flex-col sm:flex-row items-center gap-4"
 >
 <input
 aria-label="PAN / GSTIN"
 placeholder="PAN / GSTIN"
 value={companyId}
 onChange={(e) => setCompanyId(e.target.value)}
 className="w-full sm:w-[240px] bg-transparent border border-[rgba(255,255,255,0.12)] rounded-md px-4 py-3 placeholder:text-slate-300 text-white outline-none focus:ring-1 focus:ring-[#C15F3C]"
 />
 <input
 aria-label="Number of Employees"
 placeholder="Number of Employees"
 value={employees}
 onChange={(e) => setEmployees(e.target.value)}
 className="w-full sm:w-[180px] bg-transparent border border-[rgba(255,255,255,0.12)] rounded-md px-4 py-3 placeholder:text-slate-300 text-white outline-none focus:ring-1 focus:ring-[#C15F3C]"
 />
 <button className="px-6 py-3 bg-gradient-to-r from-[#C15F3C] to-[#A74A2F] text-white rounded-md font-medium hover:from-[#A74A2F] hover:to-[#8F3F27] transition-all shadow-md hover:shadow-lg">
 Request Demo
 </button>
 </form>
 </div>
 </div>
 <div className="w-full md:w-96 flex justify-end">
 <div
 className="relative"
 style={{ width: 420, maxWidth: "100%" }}
 >
 <img
 src={ASSETS.hrPeople}
 alt="HR"
 style={{
 width: "100%",
 height: "auto",
 display: "block",
 }}
 className="pointer-events-none select-none rounded-lg shadow-md"
 />
 </div>
 </div>
 </div>
 </div>
 <div
 className="absolute inset-0 pointer-events-none"
 style={{
 borderRadius: "1rem",
 background:
 "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.06) 100%)",
 }}
 />
 </section>

 {/* 3 Feature Cards */}
 <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
 <div className="bg-[#F4F3EE] p-8 rounded-xl border border-gray-200 shadow-lg hover:border-[#C15F3C]/30 transition-colors">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-15 h-10 rounded-full bg-orange-50 grid place-items-center">
 <img src={ASSETS.pfIcon} alt="pf" className="w-8 h-6" />
 </div>
 <div>
 <h3 className="font-semibold mb-1 text-[#C15F3C]">
 PF Return Expertise
 </h3>
 <p className="text-sm text-slate-600">
 Manage employee PF contributions, challan generation and
 timely return filing with automated reconciliation.
 </p>
 </div>
 </div>
 </div>

 <div className="bg-[#F4F3EE] p-8 rounded-xl border border-gray-200 shadow-lg hover:border-[#C15F3C]/30 transition-colors">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-16 h-10 rounded-full bg-orange-50 grid place-items-center">
 <img src={ASSETS.esiIcon} alt="esi" className="w-8 h-6" />
 </div>
 <div>
 <h3 className="font-semibold mb-1 text-[#C15F3C]">
 ESI Return Support
 </h3>
 <p className="text-sm text-slate-600">
 Assistance for ESI registration, contribution mapping and
 return submission to ESIC portal.
 </p>
 </div>
 </div>
 </div>

 <div className="bg-[#F4F3EE] p-8 rounded-xl border border-gray-200 shadow-lg hover:border-[#C15F3C]/30 transition-colors">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-16 h-10 rounded-full bg-orange-50 grid place-items-center">
 <img
 src={ASSETS.payrollIcon}
 alt="payroll"
 className="w-8 h-6"
 />
 </div>
 <div>
 <h3 className="font-semibold mb-1 text-[#C15F3C]">
 Payroll & HR
 </h3>
 <p className="text-sm text-slate-600">
 Automated salary processing, attendance, leave and employee
 self-serve in LEDGERS HR platform.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* Main Content */}
 <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 space-y-8">


 {/* HR Compliance Made Easy */}
 <div className="bg-[#F4F3EE] rounded-lg shadow-lg border border-gray-200 p-6">
 <h3 className="text-xl font-semibold mb-4 text-[#C15F3C]">
 HR Compliance Made Easy
 </h3>
 <p className="text-gray-600">
 End-to-End HR Compliance Stay worry-free with complete support for
 PF, ESI, PT, TDS, employee contracts, and statutory
 filings-handled accurately and on time.
 </p>
 <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
 <div className="p-4 rounded-lg border border-gray-200 hover:border-[#C15F3C]/30 transition-colors">
 <h4 className="font-semibold text-[#C15F3C]">Onboarding & Contracts</h4>
 <p className="mt-2 text-sm">
 Offer letters, joining formalities, employee KYC and
 documentation setup.
 </p>
 </div>
 <div className="p-4 rounded-lg border border-gray-200 hover:border-[#C15F3C]/30 transition-colors">
 <h4 className="font-semibold text-[#C15F3C]">Attendance & Payroll</h4>
 <p className="mt-2 text-sm">
 Attendance platform integration, automated salary runs, and
 statutory deductions processed through LEDGERS.
 </p>
 </div>
 <div className="p-4 rounded-lg border border-gray-200 hover:border-[#C15F3C]/30 transition-colors">
 <h4 className="font-semibold text-[#C15F3C]">Compliance & Returns</h4>
 <p className="mt-2 text-sm">
 PF, ESI, PT, TDS returns and challan reconciliation with
 alerts and audit-ready records.
 </p>
 </div>
 </div>
 </div>

 {/* Expert Guidance */}
 <div className="bg-[#F4F3EE] rounded-lg shadow-lg border border-gray-200 p-6">
 <h3 className="text-xl font-semibold mb-4 text-[#C15F3C]">
 Expert Guidance on ESI Return Filing
 </h3>
 <p className="text-sm text-gray-700 leading-relaxed">
 Employee State Insurance (ESI) registration is a critical
 requirement for businesses in India, ensuring their employees are
 covered under the ESI scheme, which provides a range of social
 security benefits. Following registration, employers are mandated
 to file ESI returns quarterly, detailing the contributions made
 towards the scheme for each employee. These returns are crucial
 for maintaining compliance with the ESIC regulations and ensuring
 that employees can avail the benefits they are entitled to. We
 specialize in simplifying this process for
 businesses. Our experts guide you through every step of ESI
 registration and the crucial process of how to file ESIC returns,
 ensuring accuracy, compliance, and peace of mind for employers and
 employees alike.
 </p>

 <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
 <div>
 <h4 className="font-semibold text-[#C15F3C]">
 Employees' State Insurance (ESI) Scheme
 </h4>
 <p className="mt-2 text-sm text-gray-600">
 Employees' State Insurance (ESI) is a comprehensive social
 security program designed to offer financial protection and
 healthcare benefits to employees in the event of unexpected
 circumstances. Funded by contributions from both employers and
 employees, this scheme ensures that insured workers and their
 families have access to medical services, financial support
 during illness or maternity, compensation for
 workplace-related disabilities, and coverage for funeral and
 confinement expenses.
 </p>
 </div>
 <div>
 <h4 className="font-semibold text-[#C15F3C]">
 We assist businesses with the process of ESI registration.
 </h4>
 <p className="mt-2 text-sm text-gray-600">
 Get Started and ensure your employees are
 protected with timely registration and accurate return filing.
 </p>
 <div className="mt-3 flex gap-3">
 <button className="px-4 py-2 bg-gradient-to-r from-[#C15F3C] to-[#A74A2F] text-white rounded hover:from-[#A74A2F] hover:to-[#8F3F27] transition-all shadow-md hover:shadow-lg">
 Get Started
 </button>
 <button
 onClick={() => setContactOpen((s) => !s)}
 className="px-4 py-2 border-2 border-[#C15F3C] text-[#C15F3C] rounded hover:bg-orange-50 transition-colors"
 >
 Talk to an Expert
 </button>
 </div>
 {contactOpen && (
 <div
 ref={contactRef}
 className="mt-4 p-4 border border-gray-200 rounded bg-orange-50/30"
 >
 <div className="flex items-center gap-3">
 <img
 src={ASSETS.avatar}
 alt="avatar"
 className="w-10 h-10 rounded-full"
 />
 <div>
 <div className="font-semibold text-[#C15F3C]">HR Specialist</div>
 <div className="text-sm text-gray-600">
 Available to help with ESI registration and returns
 </div>
 </div>
 </div>
 <div className="mt-3 grid grid-cols-1 gap-2">
 <div className="flex items-center gap-2 text-sm">
 <Phone size={14} className="text-[#C15F3C]" /> <span>+91-XXXXXXXXXX</span>
 </div>
 <div className="flex items-center gap-2 text-sm">
 <Mail size={14} className="text-[#C15F3C]" /> <span>hr@example.com</span>
 </div>
 </div>
 </div>
 )}
 </div>
 </div>
 </div>

 {/* Who should Register */}
 <div className="bg-[#F4F3EE] rounded-lg shadow-lg border border-gray-200 p-6">
 <h3 className="text-xl font-semibold mb-4 text-[#C15F3C]">
 Who should Register for the ESI scheme?
 </h3>
 <p className="text-sm text-gray-600">
 The ESI scheme, overseen by the Employees' State Insurance
 Corporation (ESIC) and regulated by India's Ministry of Labour and
 Employment, requires contributions from both employers and
 employees, totaling 4% of an employee's monthly gross salary to
 the ESI fund. Businesses in India with a workforce of 10 or more
 are expected to proactively enroll with the ESIC within 15 days of
 becoming eligible.
 </p>
 <div className="mt-4">
 <h4 className="font-semibold text-[#C15F3C]">Filing ESI Returns: An Overview</h4>
 <p className="mt-2 text-sm text-gray-600">
 ESI Registered employers are required to submit ESI Returns
 every sixth month, providing critical information about the
 employees insured under the scheme, their salaries, and the
 contributions made by both the employer and the employees. These
 returns play a key role in verifying the accuracy of
 contributions to the ESI scheme and ensuring that insured
 employees are accessing the benefits they're entitled to.
 Understanding how to file ESIC returns is essential for
 businesses to ensure compliance with regulatory rules regarding
 employee welfare and healthcare contributions.
 </p>
 </div>
 </div>

 {/* ESI Return Filing Deadlines */}
 <div className="bg-[#F4F3EE] rounded-lg shadow-lg border border-gray-200 p-6">
 <h3 className="text-xl font-semibold mb-4 text-[#C15F3C]">
 ESI Return Filing Deadlines
 </h3>
 <p className="text-sm text-gray-700">
 ESI Return Filing is a crucial aspect of Employer responsibilities
 under the Employees' State Insurance (ESI) Act. These returns are
 submitted to the Employees' State Insurance Corporation (ESIC) to
 track contributions made by both employers and employees.
 </p>

 <div className="mt-4 overflow-x-auto">
 <table className="w-full text-sm text-left">
 <thead>
 <tr className="bg-orange-50">
 <th className="py-3 px-2 border-b text-[#C15F3C]">Return Type</th>
 <th className="py-3 px-2 border-b text-[#C15F3C]">Due Date</th>
 </tr>
 </thead>
 <tbody>
 <tr className="hover:bg-orange-50/30 transition-colors">
 <td className="py-3 px-2 border-b">Monthly Contribution</td>
 <td className="py-3 px-2 border-b">
 15th of the following month
 </td>
 </tr>
 <tr className="hover:bg-orange-50/30 transition-colors">
 <td className="py-3 px-2 border-b">Annual Return</td>
 <td className="py-3 px-2 border-b">
 31st January of the following year
 </td>
 </tr>
 <tr className="hover:bg-orange-50/30 transition-colors">
 <td className="py-3 px-2 border-b">
 Half-yearly Contribution Returns
 </td>
 <td className="py-3 px-2 border-b">
 Within 42 days of the end of each contribution period:
 Contribution Period 1 (Ends on 30th September): 11th
 November; Contribution Period 2 (Ends on 31st March): 12th
 May
 </td>
 </tr>
 </tbody>
 </table>
 </div>

 <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
 <div>
 <h4 className="font-semibold text-[#C15F3C]">
 Essential Documents for Filing ESI Returns
 </h4>
 <ul className="mt-2 text-sm space-y-1 list-inside">
 <li className="flex items-start gap-2 hover:text-[#C15F3C] transition-colors">
 <File size={14} className="text-[#C15F3C]" /> Attendance register
 </li>
 <li className="flex items-start gap-2 hover:text-[#C15F3C] transition-colors">
 <FileText size={14} className="text-[#C15F3C]" /> Form 6
 </li>
 <li className="flex items-start gap-2 hover:text-[#C15F3C] transition-colors">
 <FileText size={14} className="text-[#C15F3C]" /> Register of wages
 </li>
 <li className="flex items-start gap-2 hover:text-[#C15F3C] transition-colors">
 <FileText size={14} className="text-[#C15F3C]" /> Accident register
 </li>
 <li className="flex items-start gap-2 hover:text-[#C15F3C] transition-colors">
 <File size={14} className="text-[#C15F3C]" /> Cancelled cheque of the company
 </li>
 <li className="flex items-start gap-2 hover:text-[#C15F3C] transition-colors">
 <FileText size={14} className="text-[#C15F3C]" /> PAN card of the organisation
 </li>
 <li className="flex items-start gap-2 hover:text-[#C15F3C] transition-colors">
 <File size={14} className="text-[#C15F3C]" /> Monthly challans and returns for ESI
 </li>
 </ul>
 </div>
 <div>
 <h4 className="font-semibold text-[#C15F3C]">
 Consequences of Non-Payment or Late Payment
 </h4>
 <p className="mt-2 text-sm text-gray-600">
 Failing to deposit the ESI contributions deducted from
 employees' salaries is considered a serious violation, as
 these amounts are entrusted to employers by their employees.
 Delays or non-payment can attract interest, damages, and
 possible prosecution under relevant legal provisions.
 </p>
 <div className="mt-3">
 <h5 className="font-semibold text-[#C15F3C]">
 Penalty Structure for Delayed or Unpaid ESI Contributions
 </h5>
 <ul className="mt-2 text-sm space-y-1">
 <li className="hover:text-[#C15F3C] transition-colors">Delay under 2 months: Damages at 5% per annum</li>
 <li className="hover:text-[#C15F3C] transition-colors">
 Delay between 2 to 4 months: Damages at 10% per annum
 </li>
 <li className="hover:text-[#C15F3C] transition-colors">
 Delay between 4 to 6 months: Damages at 15% per annum
 </li>
 <li className="hover:text-[#C15F3C] transition-colors">Delay over 6 months: Damages at 25% per annum</li>
 <li className="hover:text-[#C15F3C] transition-colors">
 Interest for delayed payments: 12% annually applied per
 day of delay
 </li>
 </ul>
 </div>
 </div>
 </div>
 </div>

 {/* Procedure to File ESI Returns */}
 <div className="bg-[#F4F3EE] rounded-lg shadow-lg border border-gray-200 p-6">
 <h3 className="text-xl font-semibold mb-4 text-[#C15F3C]">
 Procedure to File ESI Returns for Employers
 </h3>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div>
 <ol className="list-decimal list-inside text-sm space-y-2">
 <li className="hover:text-[#C15F3C] transition-colors">Registration on ESIC Portal</li>
 <li className="hover:text-[#C15F3C] transition-colors">Login to ESIC Portal using employer code and password</li>
 <li className="hover:text-[#C15F3C] transition-colors">Employee Enrollment and data update</li>
 <li className="hover:text-[#C15F3C] transition-colors">Download the Return Form</li>
 <li className="hover:text-[#C15F3C] transition-colors">Review Contribution Details</li>
 <li className="hover:text-[#C15F3C] transition-colors">Correct Discrepancies if Any</li>
 <li className="hover:text-[#C15F3C] transition-colors">Submit the Return</li>
 <li className="hover:text-[#C15F3C] transition-colors">Save Acknowledgment Receipt</li>
 <li className="hover:text-[#C15F3C] transition-colors">Maintain Records for Audits</li>
 </ol>
 </div>
 <div>
 <p className="text-sm text-gray-600">
 We offer comprehensive assistance in both obtaining
 ESI registration and managing the ESI return filing process
 for businesses. Our ESI experts collect documents, prepare
 returns, validate contribution details, file on the ESIC
 portal and provide support during audits.
 </p>
 <div className="mt-3">
 <button className="px-4 py-2 bg-gradient-to-r from-[#C15F3C] to-[#A74A2F] text-white rounded hover:from-[#A74A2F] hover:to-[#8F3F27] transition-all shadow-md hover:shadow-lg">
 Request ESI Assistance
 </button>
 </div>
 </div>
 </div>
 </div>

 {/* How We Support ESI Return Filing */}
 <div className="bg-[#F4F3EE] rounded-lg shadow-lg border border-gray-200 p-6">
 <h3 className="text-xl font-semibold mb-4 text-[#C15F3C]">
 How We Support ESI Return Filing
 </h3>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
 <div className="p-4 border border-gray-200 rounded hover:border-[#C15F3C]/30 transition-colors">
 <h4 className="font-semibold text-[#C15F3C]">Document Collection</h4>
 <p className="mt-2 text-sm text-gray-600">
 An expert will gather all necessary data and documents
 required for ESI return preparation specific to your business
 needs.
 </p>
 </div>
 <div className="p-4 border border-gray-200 rounded hover:border-[#C15F3C]/30 transition-colors">
 <h4 className="font-semibold text-[#C15F3C]">Return Preparation</h4>
 <p className="mt-2 text-sm text-gray-600">
 Our ESI expert will meticulously prepare your ESI return
 ensuring accuracy and compliance with regulations.
 </p>
 </div>
 <div className="p-4 border border-gray-200 rounded hover:border-[#C15F3C]/30 transition-colors">
 <h4 className="font-semibold text-[#C15F3C]">Return Filing</h4>
 <p className="mt-2 text-sm text-gray-600">
 Following your verification, our dedicated professional will
 file the ESI return with the ESIC department and secure your
 compliance.
 </p>
 </div>
 </div>
 </div>

 {/* Benefits of Timely ESI Return Filing */}
 <div className="bg-[#F4F3EE] rounded-lg shadow-lg border border-gray-200 p-6">
 <h3 className="text-xl font-semibold mb-4 text-[#C15F3C]">
 Benefits of Timely ESI Return Filing
 </h3>
 <ul className="list-inside list-disc text-sm space-y-2">
 <li className="hover:text-[#C15F3C] transition-colors">
 Compliance: Avoid legal penalties and fines associated with
 non-compliance
 </li>
 <li className="hover:text-[#C15F3C] transition-colors">
 Record Keeping: Maintain accurate records of contributions
 </li>
 <li className="hover:text-[#C15F3C] transition-colors">
 Benefit Entitlement: Ensures employees can access medical and
 other benefits
 </li>
 <li className="hover:text-[#C15F3C] transition-colors">
 Transparency: Promotes trust between employer and employees
 </li>
 <li className="hover:text-[#C15F3C] transition-colors">
 Dispute Resolution: Filed returns serve as reference points for
 discrepancies
 </li>
 <li className="hover:text-[#C15F3C] transition-colors">
 Ease of Benefit Processing: Facilitates smooth processing of
 claims
 </li>
 <li className="hover:text-[#C15F3C] transition-colors">
 Financial Health: Reflects positively on business operations
 </li>
 <li className="hover:text-[#C15F3C] transition-colors">
 Updates and Adjustments: Allows corrections and updates to
 records
 </li>
 </ul>
 </div>

 {/* Related Guides */}
 <div className="bg-[#F4F3EE] rounded-lg shadow-lg border border-gray-200 p-6">
 <h3 className="text-xl font-semibold mb-4 text-[#C15F3C]">Related Guides</h3>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
 <a className="p-4 border border-gray-200 rounded hover:border-[#C15F3C]/30 hover:shadow-lg transition-all">
 <div className="font-semibold text-[#C15F3C]">Employees Compensation Act</div>
 </a>
 <a className="p-4 border border-gray-200 rounded hover:border-[#C15F3C]/30 hover:shadow-lg transition-all">
 <div className="font-semibold text-[#C15F3C]">
 Requirements for Operating Commercial Establishment – COVID-19
 </div>
 </a>
 <a className="p-4 border border-gray-200 rounded hover:border-[#C15F3C]/30 hover:shadow-lg transition-all">
 <div className="font-semibold text-[#C15F3C]">
 Benefits of ESI registration
 </div>
 </a>
 </div>
 </div>

 {/* Pricing Section with DoStartupPricing */}
 <div className="-mx-4 sm:-mx-6 lg:-mx-8">
   <DynamicPricingSection />
 </div>

 {/* FAQ Section */}
 <div className="bg-[#F4F3EE] rounded-lg shadow-lg border border-gray-200 p-6">
 <h3 className="text-xl font-semibold mb-4 text-[#C15F3C]">
 FAQ's on ESI Return Filing
 </h3>
 <div className="space-y-0">
 {faqQuestions.map((q, i) => (
 <div key={i} className="border-b border-gray-200 last:border-b-0">
 <button
 className="w-full text-left py-4 flex justify-between items-center text-sm hover:bg-orange-50/30 transition-colors"
 onClick={() => setFaqOpen(faqOpen === i ? null : i)}
 aria-expanded={faqOpen === i}
 >
 <span className="text-slate-800 hover:text-[#C15F3C] transition-colors">{q}</span>
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
 </div>

 {/* What is ESI registration? (Quick section) */}
 <div className="bg-[#F4F3EE] rounded-lg shadow-lg border border-gray-200 p-6">
 <h3 className="text-xl font-semibold mb-4 text-[#C15F3C]">
 What is ESI registration?
 </h3>
 <p className="text-sm text-gray-700">
 ESI registration is the formal enrollment of an employer and
 eligible employees into the Employees' State Insurance scheme
 ensuring access to social security benefits.
 </p>
 <h3 className="text-xl font-semibold mt-6 mb-4 text-[#C15F3C]">
 Why is ESI return filing important?
 </h3>
 <p className="text-sm text-gray-700">
 Timely filing ensures employees receive benefits, keeps the
 employer compliant and prevents penalties.
 </p>

 <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
 <div className="p-4 border border-gray-200 rounded hover:border-[#C15F3C]/30 transition-colors">
 <h4 className="font-semibold text-[#C15F3C]">
 When should ESI returns be filed?
 </h4>
 <p className="text-sm text-gray-600 mt-2">
 Monthly contributions by 15th of the following month;
 half-yearly returns and annual returns have separate due
 dates.
 </p>
 </div>
 <div className="p-4 border border-gray-200 rounded hover:border-[#C15F3C]/30 transition-colors">
 <h4 className="font-semibold text-[#C15F3C]">
 What happens if ESI returns are not filed?
 </h4>
 <p className="text-sm text-gray-600 mt-2">
 Penalties, interest and potential legal consequences including
 prosecution in severe cases.
 </p>
 </div>
 </div>
 </div>

 {/* Procedure Checklist */}
 <div className="bg-[#F4F3EE] rounded-lg shadow-lg border border-gray-200 p-6">
 <h3 className="text-xl font-semibold mb-4 text-[#C15F3C]">
 Procedure to File ESI Returns for Employers - Quick Checklist
 </h3>
 <ul className="list-inside list-decimal text-sm space-y-2">
 <li className="hover:text-[#C15F3C] transition-colors">Register establishment on ESIC portal</li>
 <li className="hover:text-[#C15F3C] transition-colors">Maintain attendance registers and wage registers</li>
 <li className="hover:text-[#C15F3C] transition-colors">Reconcile monthly challans and contributions</li>
 <li className="hover:text-[#C15F3C] transition-colors">Download and review returns on ESIC portal</li>
 <li className="hover:text-[#C15F3C] transition-colors">Submit returns and save acknowledgment</li>
 </ul>
 </div>

 {/* Consequences of Delayed Payment */}
 <div className="bg-[#F4F3EE] rounded-lg shadow-lg border border-gray-200 p-6">
 <h3 className="text-xl font-semibold mb-4 text-[#C15F3C]">
 Consequences of Delayed Payment
 </h3>
 <p className="text-sm text-gray-600">
 If an employer does not make the required contributions within the
 specified timeframe, they will incur a simple interest charge of
 12% annually for each day the payment is delayed. Severe or
 repeated non-compliance may invite prosecution under the ESI Act
 and IPC provisions relating to breach of trust.
 </p>
 </div>

 {/* How We Make ESI Return Filing Easy */}
 <div className="bg-[#F4F3EE] rounded-lg shadow-lg border border-gray-200 p-6">
 <h3 className="text-xl font-semibold mb-4 text-[#C15F3C]">
 How We Make ESI Return Filing Easy
 </h3>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
 <div className="p-4 border border-gray-200 rounded hover:border-[#C15F3C]/30 transition-colors">
 <h4 className="font-semibold text-[#C15F3C]">Dedicated Expert</h4>
 <p className="text-sm text-gray-600 mt-2">
 A named ESI expert will handle your filings and
 reconciliations.
 </p>
 </div>
 <div className="p-4 border border-gray-200 rounded hover:border-[#C15F3C]/30 transition-colors">
 <h4 className="font-semibold text-[#C15F3C]">Automated Reconciliation</h4>
 <p className="text-sm text-gray-600 mt-2">
 Match challans, employee contributions and ensure records
 reflect correctly.
 </p>
 </div>
 <div className="p-4 border border-gray-200 rounded hover:border-[#C15F3C]/30 transition-colors">
 <h4 className="font-semibold text-[#C15F3C]">Audit-Ready Reports</h4>
 <p className="text-sm text-gray-600 mt-2">
 Maintain files and receipts for statutory audits and
 inquiries.
 </p>
 </div>
 </div>
 </div>

 {/* Popular Searches */}
 <div className="bg-[#F4F3EE] rounded-lg shadow-lg border border-gray-200 p-6">
 <h4 className="font-semibold mb-3 text-[#C15F3C]">Popular Searches</h4>
 <div className="flex flex-wrap gap-2">
 {POPULAR_SEARCHES.slice(0, 20).map((s) => (
 <span
 key={s}
 className="text-xs px-3 py-1 border border-gray-200 rounded bg-[#F4F3EE] text-gray-700 hover:border-[#C15F3C]/30 hover:text-[#C15F3C] cursor-pointer transition-colors"
 >
 {s}
 </span>
 ))}
 </div>
 </div>
 </section>
 </main>

 <Footer />

 {/* WhatsApp CTA */}
 <div className="fixed bottom-6 right-6 z-50">
 <button className="flex items-center gap-3 bg-gradient-to-r from-[#C15F3C] to-[#A74A2F] text-white px-4 py-3 rounded-full shadow-lg hover:from-[#A74A2F] hover:to-[#8F3F27] transition-all hover:scale-105">
 <img src={ASSETS.whatsapp} alt="wa" className="w-5 h-5" />
 <span className="hidden sm:inline font-medium text-sm">Live Chat with Experts</span>
 </button>
 </div>
 </div>
 );
}
