"use client";
import AddQuestionModal from "../components/AddQuestionModal";

import React, { useState } from "react";
import Navbar from "../components/Navbar";

export default function CommencementInc20aPage() {
 const [openFaq, setOpenFaq] = useState<number | null>(null);

 const faqItems = [
 {
 question: "What is the Commencement of Business (COB) Certificate?",
 answer: "A mandatory declaration confirming subscribers have paid the share value and other statutory checks, filed via Form INC-20A."
 },
 {
 question: "Who must obtain the COB Certificate?",
 answer: "Companies with share capital incorporated after November 2, 2018 must file within 180 days of incorporation."
 },
 {
 question: "Which companies are exempt?",
 answer: "Companies incorporated before Nov 2, 2018 and companies without share capital are exempt."
 },
 {
 question: "What documents are required for Form INC-20A?",
 answer: "Bank statement for subscription money, registered office proof, directors' declaration, liquidator/CA certification where needed."
 },
 {
 question: "What happens if COB is not filed?",
 answer: "The company cannot commence business, may face penalties and directors can be penalised; RoC may strike off the company for non-compliance."
 }
 ];

 const popularSearches = [
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
 ];

 return (
 <div className="min-h-screen bg-[#F4F3EE] text-slate-800 antialiased">
 {/* Imported Navbar */}
 <Navbar />

 <main className="max-w-7xl mx-auto px-6 py-5">
 {/* Hero Section */}
 <section
 className="relative rounded-2xl overflow-hidden"
 style={{ minHeight: 420 }}
 >
 <div className="absolute inset-0 rounded-2xl overflow-hidden">
 <img
 src="/images/hero.png"
 alt="hero-bg"
 className="w-full h-full object-cover"
 />
 <div
 className="absolute inset-0"
 style={{
 background:
 "radial-gradient(ellipse at center, rgba(0,0,0,0.6) 0%, rgba(2,6,23,0.7) 100%)",
 opacity: 0.95,
 }}
 />
 </div>

 <div className="absolute inset-0 flex items-center">
 <div className="w-full px-8">
 <div className="mx-auto max-w-[1180px] flex items-center gap-8">
 <div className="w-7/12">
 <div className="bg-[rgba(0,0,0,0.45)] border border-[rgba(255,255,255,0.06)] rounded-2xl p-10 backdrop-blur-sm shadow-[0_20px_50px_rgba(2,6,23,0.6)]">
 {/* Badge */}
 <div className="inline-flex items-center gap-1.5 bg-amber-500/20 border border-amber-400/30 rounded-full px-3 py-1 mb-4">
 <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
 <span className="text-xs font-medium text-amber-300">MCA COMPLIANCE</span>
 </div>

 <h1 className="text-white text-[34px] leading-tight font-semibold mb-4">
 Obtain COB Certificate — Commencement of Business
 </h1>
 <p className="text-slate-200 text-[15px] leading-relaxed mb-6">
 Get your Business Commencement Certificate quickly and
 easily with our expert assistance. We handle the filing of
 Form INC-20A on the MCA portal for a smooth and compliant
 process.
 </p>

 <div className="flex items-center gap-4">
 <div className="relative flex items-center w-full">
 <input
 placeholder="ENTER COMPANY NAME"
 className="w-full max-w-[640px] px-6 py-4 rounded-full bg-transparent text-white placeholder:text-slate-300 border border-[rgba(255,255,255,0.12)] focus:outline-none focus:ring-1 focus:ring-amber-500"
 />
 <div className="absolute right-2 top-1/2 -translate-y-1/2">
 <button className="px-5 py-[10px] bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-full text-sm font-medium shadow-[0_6px_20px_rgba(0,0,0,0.25)] hover:from-amber-700 hover:to-amber-800 transition-all">
 Start Filing
 </button>
 </div>
 </div>
 </div>
 </div>
 </div>

 <div className="w-5/12 flex justify-end pr-6">
 <div className="relative w-[340px]">
 <img
 src="/images/remove.png"
 alt="illustration"
 className="w-full h-auto rounded-2xl shadow-2xl"
 />
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Features Cards */}
 <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
 <div className="bg-[#F4F3EE] p-8 rounded-xl border border-slate-100 shadow-sm hover:border-amber-200 transition-colors">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-10 h-10 rounded-full bg-amber-50 grid place-items-center text-amber-700">
 👥
 </div>
 <div>
 <h3 className="font-semibold mb-1 text-slate-800">
 Dedicated support, flexible cost
 </h3>
 <p className="text-sm text-slate-600">
 Get an experienced accountant to manage your ledgers, vendor &
 customer reconciliations, bank reconciliations, and monthly
 close with precision and reliability - all at a fraction of
 the cost of a full-time hire.
 </p>
 </div>
 </div>
 </div>

 <div className="bg-[#F4F3EE] p-8 rounded-xl border border-slate-100 shadow-sm hover:border-amber-200 transition-colors">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-10 h-10 rounded-full bg-amber-50 grid place-items-center text-amber-700">
 ✔
 </div>
 <div>
 <h3 className="font-semibold mb-1 text-slate-800">
 Accurate & timely compliance
 </h3>
 <p className="text-sm text-slate-600">
 Complete Commencement of Business (COB) filing for Pvt Ltd
 Companies – expert assistance for filing INC-20A, ensuring
 your company meets all MCA requirements. Get automatic due
 date reminders, proactive compliance management, and expert
 guidance.
 </p>
 </div>
 </div>
 </div>

 <div className="bg-[#F4F3EE] p-8 rounded-xl border border-slate-100 shadow-sm hover:border-amber-200 transition-colors">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-10 h-10 rounded-full bg-amber-50 grid place-items-center text-amber-700">
 ⚡
 </div>
 <div>
 <h3 className="font-semibold mb-1 text-slate-800">
 Powered by LEDGERS
 </h3>
 <p className="text-sm text-slate-600">
 Experience seamless automation with real-time bank feeds,
 smart reconciliations, integrated e-invoice/e-way bill
 generation, secure document vault, and fully audit-ready
 financial reports—all in one powerful, unified platform.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* Main Content with Sidebar */}
 <div className="flex flex-col lg:flex-row gap-8 mt-10">
 {/* Left Content */}
 <article className="flex-1 bg-[#F4F3EE] p-8 rounded-xl border border-slate-100">
 <div className="mb-6">
 <div className="text-sm text-gray-500 mb-2">
 Home / MCA Services /{" "}
 <span className="text-amber-700 font-medium">
 Commencement of Business
 </span>
 </div>
 <h2 className="text-2xl font-semibold mb-4">
 Certificate of Commencement of Business
 </h2>
 <p className="text-sm text-slate-600">
 Is your company incorporated and having share capital? One
 crucial compliance that must be completed before starting
 business operations is the declaration of the Commencement of
 Business. Obtaining the Certificate of Commencement of Business
 (COB) is mandatory for companies incorporated with share capital
 after November 2, 2018. We assist with filing Form
 INC-20A and ongoing compliance to make the process simple and
 reliable.
 </p>
 </div>

 <div className="mb-6">
 <h3 className="text-lg font-semibold mb-2">
 What is Commencement of Business?
 </h3>
 <p className="text-sm text-slate-600">
 The Commencement of Business is a formal declaration made by the
 directors of a company within 180 days of its incorporation
 confirming that subscribers have paid the agreed value of shares
 and verifying the registered office address. The declaration
 must be filed using Form INC-20A and verified by a CA/CS/CWA.
 </p>
 </div>

 <div className="mb-6">
 <h3 className="text-lg font-semibold mb-2">Who needs to file?</h3>
 <p className="text-sm text-slate-600">
 Companies incorporated after November 2, 2018 and companies with
 share capital must file Form INC-20A within 180 days of
 incorporation. Companies without share capital and those
 incorporated before the specified date are exempt.
 </p>
 </div>

 <div className="mb-6">
 <h3 className="text-lg font-semibold mb-2">
 Significance of COB Certificate
 </h3>
 <ul className="list-disc pl-5 mt-3 text-sm text-slate-600 space-y-2">
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Operational Readiness Confirmation</li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Legitimacy assurance for stakeholders and regulators</li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Enables access to borrowing and business operations</li>
 </ul>
 </div>

 <div className="mb-6">
 <h3 className="text-lg font-semibold mb-2">
 Due Date & Consequences of Non-Compliance
 </h3>
 <p className="text-sm text-slate-600">
 File within 180 days of incorporation. Failure to file prevents
 commencing business, attracts penalties (company: ₹50,000;
 directors: ₹1,000 per day up to ₹1,00,000) and may lead to
 strike-off by the Registrar.
 </p>
 </div>

 <div className="mb-6">
 <h3 className="text-lg font-semibold mb-2">
 Documents Required for Form INC-20A
 </h3>
 <ul className="list-disc pl-5 mt-3 text-sm text-slate-600 space-y-2">
 <li className="hover:text-amber-700 cursor-pointer transition-colors">
 Proof of payment for share subscription (bank statement)
 </li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Registered office address verification</li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">RBI registration certificate (if applicable)</li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Directors' declaration and board resolution</li>
 </ul>
 </div>

 <div className="mb-6">
 <h3 className="text-lg font-semibold mb-2">
 Procedure to obtain COB (Form INC-20A)
 </h3>
 <ol className="list-decimal list-inside text-sm text-slate-600 space-y-2">
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Access the MCA portal and download Form INC-20A.</li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Fill company details and attach required documents.</li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">
 Affix DSC of an authorised director and get professional
 certification by CA/CS/CWA.
 </li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">
 Submit form, pay fees and note the SRN. Wait for verification
 and acknowledgement.
 </li>
 </ol>
 </div>

 <div className="mb-6">
 <h3 className="text-lg font-semibold mb-2">
 Why choose us?
 </h3>
 <ul className="list-disc pl-5 mt-3 text-sm text-slate-600 space-y-2">
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Expert guidance on MCA regulations</li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">
 End-to-end support: document prep, certification and filing
 </li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Timely compliance to avoid penalties</li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Transparent process and updates throughout</li>
 </ul>
 </div>

 <div className="mt-6">
 <h4 className="font-semibold mb-3">Related Guides</h4>
 <ul className="text-sm space-y-2">
 <li className="text-amber-700 hover:text-amber-800 cursor-pointer hover:underline">Certificate of Commencement of Business - A Guide</li>
 <li className="text-amber-700 hover:text-amber-800 cursor-pointer hover:underline">
 Form INC-20A - Companies (Incorporation) Amendment Rules, 2022
 </li>
 <li className="text-amber-700 hover:text-amber-800 cursor-pointer hover:underline">Section 10 of Companies Act</li>
 <li className="text-amber-700 hover:text-amber-800 cursor-pointer hover:underline">What is annual compliance of company?</li>
 <li className="text-amber-700 hover:text-amber-800 cursor-pointer hover:underline">Documents Required for Commencement of Business</li>
 </ul>
 </div>
 </article>

 {/* Right Sidebar */}
 <aside className="w-full lg:w-80">
 <div className="bg-[#F4F3EE] p-6 rounded-xl border border-slate-100 mb-6">
 <h4 className="font-semibold mb-3">Related Guides</h4>
 <ul className="text-sm space-y-2">
 <li className="text-amber-700 hover:text-amber-800 cursor-pointer hover:underline">
 Certificate of Commencement of Business - A Guide
 </li>
 <li className="text-amber-700 hover:text-amber-800 cursor-pointer hover:underline">
 Form INC-20A - Amendment Rules, 2022
 </li>
 <li className="text-amber-700 hover:text-amber-800 cursor-pointer hover:underline">
 Section 10 of Companies Act
 </li>
 </ul>
 </div>

 <div className="sticky top-28 bg-[#F4F3EE] p-4 rounded-xl border border-slate-100">
 <img
 src="/images/Screenshot (489).png"
 alt="ad"
 className="w-full rounded-lg"
 />
 </div>
 </aside>
 </div>

 {/* FAQ Section */}
 <section className="mt-10 bg-[#F4F3EE] p-6 rounded-xl border border-slate-100">
 <h3 className="text-xl font-semibold mb-4">
 FAQ's on Commencement of Business (COB)
 </h3>
 <ul className="divide-y divide-slate-100">
 {faqItems.map((item, index) => (
 <li key={index} className="py-4">
 <button
 className="w-full flex justify-between items-center text-left"
 onClick={() => setOpenFaq(openFaq === index ? null : index)}
 >
 <div className="flex-1">
 <div className="font-medium hover:text-amber-700 transition-colors">
 {item.question}
 </div>
 {openFaq === index && (
 <div className="text-sm text-slate-600 mt-2">
 {item.answer}
 </div>
 )}
 </div>
 <div className="text-amber-700 ml-4">
 {openFaq === index ? "−" : "+"}
 </div>
 </button>
 </li>
 ))}
 </ul>

 <div className="mt-4 pt-4 flex gap-3 items-center flex-wrap">

 <button className="px-4 py-2 bg-[#F4F3EE] border-2 border-amber-600 text-amber-700 rounded-md hover:bg-amber-50 transition-colors font-medium">
 Load More
 </button>
 
<AddQuestionModal />
</div>
 </section>

 {/* Popular Searches */}
 <section className="mt-10 bg-[#F4F3EE] p-6 rounded-xl border border-slate-100">
 <h4 className="font-semibold mb-4">Popular Searches</h4>
 <div className="flex flex-wrap gap-3">
 {popularSearches.map((t) => (
 <span
 key={t}
 className="text-xs px-3 py-2 border border-slate-200 rounded-full bg-[#F4F3EE] hover:border-amber-300 hover:text-amber-700 cursor-pointer transition-colors"
 >
 {t}
 </span>
 ))}
 </div>
 </section>
 </main>

 {/* Footer */}
 <footer className="bg-[#F4F3EE] mt-12">
 <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-1 md:grid-cols-3 gap-6">
 <div>
 <h5 className="font-semibold mb-4">Company</h5>
 <ul className="text-sm text-slate-600 space-y-2">
 <li className="hover:text-amber-700 cursor-pointer transition-colors">About Us</li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Careers</li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Contact Us</li>
 </ul>
 </div>
 <div>
 <h5 className="font-semibold mb-4">Platforms</h5>
 <ul className="text-sm text-slate-600 space-y-2">
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Business Search</li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Trademark Search</li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Filings.AE for UAE</li>
 </ul>
 </div>
 <div>
 <h5 className="font-semibold mb-4">Usage</h5>
 <ul className="text-sm text-slate-600 space-y-2">
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Terms &amp; Conditions</li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Privacy Policy</li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Refund Policy</li>
 </ul>
 </div>
 </div>
 <div className="bg-[#F4F3EE] border-t border-slate-200 py-6">
 <div className="max-w-7xl mx-auto px-6 text-sm text-slate-500">
 Copyright © {new Date().getFullYear()} All rights reserved.
 </div>
 </div>
 </footer>

 {/* WhatsApp CTA */}
 <div className="fixed right-6 bottom-6 z-50">
 <button className="px-5 py-3 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg hover:from-amber-700 hover:to-amber-800 transition-all">
 Live Chat with Experts
 </button>
 </div>
 </div>
 );
}
