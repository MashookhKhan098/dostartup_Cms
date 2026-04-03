"use client";

import React, { useState } from "react";
import { ChevronRight, ShoppingBag, Star, Plus } from "lucide-react";
import Navbar from "../components/Navbar";

export default function RemoveDirectorPage() {
 const [openFaq, setOpenFaq] = useState<number | null>(null);

 const faqItems = [
 "What prompts the removal of a director in a company?",
 "What governs the director removal process?",
 "Can a director be removed for not attending meetings?",
 "What is the role of shareholders in director removal?",
 "What are the steps for voluntary director resignation?",
 "What is an Ordinary Resolution in the context of director removal?",
 "What is the significance of Form DIR-12?",
 "Are there penalties for late filing of Form DIR-12?",
 "How does director removal affect the company?",
 "What is the importance of a Board Meeting in director removal?",
 ];

 const faqAnswers: Record<number, string> = {
 0: "Reasons include disqualification, misconduct, non-attendance or voluntary resignation.",
 1: "The Companies Act 2013 and related rules govern the removal procedure.",
 2: "Yes — absence for 12 consecutive months can result in vacation of office under Section 167.",
 3: "Shareholders can remove directors by passing resolutions in general meetings, following statutory notice and hearing requirements.",
 4: "Submit resignation in writing, Board acknowledgement, file DIR-12 within 30 days, and update statutory registers.",
 5: "An Ordinary Resolution is a shareholder vote passed by a simple majority used for standard corporate actions including removal in many cases.",
 6: "Form DIR-12 is the statutory form to notify the Registrar of Companies about appointment or cessation of directors.",
 7: "Yes — penalties increase with delay; timely filing avoids escalated government fees and legal consequences.",
 8: "It affects governance, authority, and potentially reputation; proper procedure helps minimise disruption.",
 9: "The Board Meeting is required to acknowledge resignation, pass necessary resolutions and initiate filings to the ROC.",
 };

 const ASSETS = {
 logo: "/images/india-logo.jpg",
 hero: "/images/hero.png",
 remove: "/images/remove.png",
 ad: "/images/Screenshot (489).png",
 whatsapp: "/images/whatsapp.svg",
 cartIcon: "/images/cart-icon.svg",
 indiaFlag: "/images/india-flag.png",
 ledgers: "https://img.indiafilings.com/catalog/ledgers.png",
 };

 return (
 <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
 {/* Navbar - Imported */}
 <Navbar />

 {/* Breadcrumb */}
 <div className="bg-gray-50 py-5">
 <div className="max-w-[1180px] mx-auto px-6 text-sm text-gray-500">
 Home / MCA Services /{" "}
 <span className="text-amber-700 font-medium">Remove Director</span>
 </div>
 </div>

 <main className="max-w-[1180px] mx-auto px-6 py-3">
 {/* Hero Section */}
 <section className="relative rounded-2xl overflow-hidden" style={{ minHeight: 420 }}>
 <div className="absolute inset-0 rounded-2xl overflow-hidden">
 <img
 src={ASSETS.hero}
 alt="hero-bg"
 className="w-full h-full object-cover"
 />
 <div
 className="absolute inset-0"
 style={{
 background: "radial-gradient(ellipse at center, rgba(0,0,0,0.6) 0%, rgba(2,6,23,0.7) 100%)",
 opacity: 0.95,
 }}
 />
 </div>

 <div className="absolute inset-0 flex items-center">
 <div className="w-full px-8">
 <div className="mx-auto max-w-[1180px] flex items-center gap-8">
 <div className="w-7/12">
 <div className="bg-[rgba(0,0,0,0.45)] border border-[rgba(255,255,255,0.06)] rounded-2xl p-10 backdrop-blur-sm shadow-[0_20px_50px_rgba(2,6,23,0.6)]">
 <h1 className="text-white text-[34px] leading-tight font-semibold mb-4">
 Director Management
 </h1>
 <p className="text-slate-200 text-[15px] leading-relaxed mb-6">
 Manage your company's directors effortlessly with
 AI-assisted MCA compliance. Our intelligent system ensures
 complete legal adherence, auto-checks documentation, and
 provides end-to-end support for a hassle-free experience.
 </p>

 <div className="flex items-center gap-4">
 <div className="relative flex items-center w-full">
 <input
 placeholder="ENTER COMPANY NAME"
 className="w-full max-w-[640px] px-6 py-4 rounded-full bg-transparent text-white placeholder:text-slate-300 border border-[rgba(255,255,255,0.12)] focus:outline-none focus:ring-1 focus:ring-amber-600"
 />
 <div className="absolute right-2 top-1/2 -translate-y-1/2">
 <button className="px-5 py-[10px] bg-white rounded-full text-sm font-medium shadow-[0_6px_20px_rgba(0,0,0,0.25)] hover:bg-amber-50 transition-colors text-amber-700">
 Remove Director
 </button>
 </div>
 </div>
 </div>
 </div>
 </div>

 <div className="w-5/12 flex justify-end pr-6">
 <div className="relative w-[340px]">
 <img
 src={ASSETS.remove}
 alt="phone"
 className="w-full h-auto rounded-2xl shadow-2xl"
 />
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Features Grid */}
 <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
 <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:border-amber-200 transition-colors">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-10 h-10 rounded-full bg-amber-50 grid place-items-center text-amber-600">
 👥
 </div>
 <div>
 <h3 className="font-semibold mb-1 text-slate-900">
 Dedicated support, flexible cost
 </h3>
 <p className="text-sm text-gray-600">
 Get an experienced accountant to manage your ledgers, vendor
 &amp; customer reconciliations, bank reconciliations, and
 monthly close with precision and reliability - all at a
 fraction of the cost of a full-time hire.
 </p>
 </div>
 </div>
 </div>

 <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:border-amber-200 transition-colors">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-10 h-10 rounded-full bg-amber-50 grid place-items-center text-amber-600">
 ✔
 </div>
 <div>
 <h3 className="font-semibold mb-1 text-slate-900">
 Accurate & timely compliance
 </h3>
 <p className="text-sm text-gray-600">
 End-to-end Director Management for Pvt Ltd Companies &amp;
 LLPs – filing of DIR-3 KYC, Director Appointments (DIR-12),
 Director Resignations (DIR-12), Director Disclosures (MGT-6),
 and DIN Allotment. Stay updated with MCA regulations,
 automatic due date reminders, proactive compliance management,
 and expert guidance—so your business avoids penalties and
 stays legally compliant, always.
 </p>
 </div>
 </div>
 </div>

 <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:border-amber-200 transition-colors">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-10 h-10 rounded-full bg-amber-50 grid place-items-center text-amber-600">
 ⚡
 </div>
 <div>
 <h3 className="font-semibold mb-1 text-slate-900">
 Powered by LEDGERS
 </h3>
 <p className="text-sm text-gray-600">
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
 {/* Left Column - Article */}
 <article className="flex-1 bg-white p-8 rounded-xl border border-gray-200">
 <div className="mb-6">
 <h2 className="text-2xl font-semibold mb-4 text-slate-900">
 Removal of Director from a Company
 </h2>
 <p className="text-sm text-gray-600">
 Company Directors oversee the management and operations of a
 business, while shareholders own the company. Situations may
 arise where shareholders opt to remove a director due to
 inadequate performance or other concerns, or a director may
 choose to resign. Removing a director is a significant corporate
 action that requires careful deliberation and strict compliance
 with the legal framework provided by the Companies Act 2013 or
 applicable local laws. Whether initiated by an ordinary
 resolution, board resolution, or judicial order, the process
 must be conducted fairly, transparently, and in the company's
 best interest.
 </p>
 <p className="text-sm text-gray-600 mt-4">
 IndiaFilings specialises in navigating the intricacies of the
 director removal or resignation process, ensuring full
 compliance with legal standards and meticulous attention to
 detail. Let our experts assist you in navigating this critical
 corporate transition smoothly and effectively. Contact us today
 to get started.
 </p>
 </div>

 <div className="mb-6">
 <h3 className="text-lg font-semibold mb-2 text-slate-900">
 Reasons for Director Removal
 </h3>
 <p className="text-sm text-gray-600">
 Under The Companies Act 2013, it's mandatory for a private
 limited company to appoint at least two directors to commence
 its operations.
 </p>
 <ul className="list-disc pl-5 mt-3 text-sm text-gray-600 space-y-2">
 <li>
 Being disqualified as per the criteria set out in the
 Companies Act.
 </li>
 <li>Not attending board meetings for more than a year.</li>
 <li>
 Violating the terms of Section 184 by engaging in prohibited
 transactions.
 </li>
 <li>
 Being prohibited from participating due to a court or Tribunal
 order.
 </li>
 <li>
 Conviction by a court for a criminal offence with a sentence
 of at least six months.
 </li>
 <li>
 Non-compliance with the regulations and requirements of the
 Companies Act, 2013.
 </li>
 <li>Choosing to resign voluntarily from the board.</li>
 </ul>
 </div>

 <div className="mb-6">
 <h3 className="text-lg font-semibold mb-2 text-slate-900">
 Methods for Director Removal from a Company
 </h3>
 <p className="text-sm text-gray-600">
 There are three primary methods to remove a director from a
 company:
 </p>
 <ul className="list-disc pl-5 mt-3 text-sm text-gray-600 space-y-2">
 <li>
 Resignation by Directors: Directors resign voluntarily by
 giving notice to the company.
 </li>
 <li>
 Director Absence from Board Meetings: A director who fails to
 attend board meetings for 12 months may be deemed to have
 vacated office.
 </li>
 <li>
 Shareholder-initiated Removal: Shareholders may remove a
 director through an ordinary resolution at a General Meeting,
 following statutory procedure.
 </li>
 </ul>
 </div>

 <div className="mb-6">
 <h3 className="text-lg font-semibold mb-2 text-slate-900">
 Law Governing the Director Removal
 </h3>
 <ul className="list-disc pl-5 mt-3 text-sm text-gray-600 space-y-2">
 <li>
 Section 169: Explains how a company can legally remove a
 director and the required steps.
 </li>
 <li>
 Section 115: Relevant for special notices and related
 procedural requirements.
 </li>
 <li>
 Section 163: Relates to representation and procedural fairness
 in director selection and removal.
 </li>
 <li>
 Rule 23 of the Companies (Management and Administration)
 Rules, 2014: Specific procedural guidelines for proper
 removal.
 </li>
 </ul>
 </div>

 <div className="mb-6">
 <h3 className="text-lg font-semibold mb-2 text-slate-900">
 Essential Requirements for Director Removal
 </h3>
 <ul className="list-disc pl-5 mt-3 text-sm text-gray-600 space-y-2">
 <li>
 Issuance of Special Notice: A special notice must be issued to
 initiate the removal process.
 </li>
 <li>
 Notice Period to Director: The director must receive the
 special notice at least 14 days before the resolution is voted
 on.
 </li>
 <li>
 Right to be Heard: The director facing removal must be allowed
 to make written representations or speak at the meeting.
 </li>
 <li>
 Restriction on Reappointment: Once removed, the director is
 typically ineligible for immediate reappointment.
 </li>
 <li>
 Filing of Form DIR-12: The company must file Form DIR-12 to
 officially notify the Registrar of Companies.
 </li>
 </ul>
 </div>

 <div className="mb-6">
 <h3 className="text-lg font-semibold mb-2 text-slate-900">
 Procedure for Director Removal
 </h3>
 <p className="text-sm text-gray-600">
 The procedure involves multiple steps depending on the method
 used. Below are key procedural elements for common scenarios.
 </p>

 <h4 className="font-semibold mt-4 text-slate-900">
 Director's Voluntary Resignation
 </h4>
 <p className="text-sm text-gray-600 mt-2">
 A director's resignation becomes effective on the date the
 company receives the notice or on a later date specified by the
 director, whichever is later. Even after stepping down, a
 resigned director remains accountable for any offences committed
 during their term.
 </p>

 <h4 className="font-semibold mt-4 text-slate-900">
 Mandatory Steps on Resignation
 </h4>
 <ul className="list-disc pl-5 mt-3 text-sm text-gray-600 space-y-2">
 <li>
 Schedule a Board Meeting in line with Section 173 and
 Secretarial Standard-1 (SS-1).
 </li>
 <li>
 Send Board Meeting notices to all directors at least 7 days
 before the meeting (shorter notice in urgent cases).
 </li>
 <li>
 Prepare meeting documents including agenda, explanatory notes
 and draft resolutions.
 </li>
 <li>
 Acknowledge resignation in the Board Meeting and assign
 responsibility for ROC filings.
 </li>
 <li>
 Public companies must notify stock exchanges per Regulation 30
 &amp; 46(3) of the SEBI LODR Regulations, 2015.
 </li>
 <li>
 Circulate draft minutes to directors within 15 days after the
 meeting.
 </li>
 </ul>

 <h4 className="font-semibold mt-4 text-slate-900">Submission of Forms</h4>
 <p className="text-sm text-gray-600 mt-2">
 File Form DIR-12 with the Registrar of Companies within 30 days
 of the director's resignation, attaching a certified copy of the
 Board Resolution, the resignation notice and proof of cessation.
 The resigning director may also file Form DIR-11 within 30 days
 to notify the Registrar.
 </p>
 </div>

 <div className="mb-6">
 <h3 className="text-lg font-semibold mb-2 text-slate-900">
 Director Absence from Board Meetings for 12 Months
 </h3>
 <p className="text-sm text-gray-600">
 If a director fails to attend any board meetings for twelve
 months without leave, their office may be vacated under Section
 167. Companies should acknowledge the vacancy, file DIR-12 and
 update the MCA database to reflect the change.
 </p>
 </div>

 <div className="mb-6">
 <h3 className="text-lg font-semibold mb-2 text-slate-900">
 Penalties for Delayed Submission of Form DIR-12
 </h3>
 <p className="text-sm text-gray-600">
 Penalties escalate with delay: 30–60 days — double the
 government fees; 60–90 days — four times the fees; beyond 90
 days — ten times; beyond 180 days — twelve times and potential
 legal action. Timely filing is essential to avoid these
 consequences.
 </p>
 </div>

 <div className="mb-6">
 <h3 className="text-lg font-semibold mb-2 text-slate-900">
 Why choose IndiaFilings for Director removal?
 </h3>
 <ul className="list-disc pl-5 mt-3 text-sm text-gray-600 space-y-2">
 <li>
 Expertise and Experience: Professionals well-versed in
 corporate law and director removal procedures.
 </li>
 <li>
 Compliance Assurance: Steps executed to minimize legal risk
 and ensure statutory compliance.
 </li>
 <li>
 End-to-End Support: From consultation to submission of DIR-12,
 IndiaFilings handles the full process.
 </li>
 <li>
 Customized Solutions: Tailored advice based on the company's
 unique circumstances.
 </li>
 </ul>
 </div>
 </article>

 {/* Right Column - Sidebar */}
 <aside className="w-full lg:w-80">
 {/* Cart Widget */}
 <div className="bg-white rounded-lg shadow-md p-6 mb-6 sticky top-28 border border-gray-200">
 <div className="text-center text-gray-600">
 <img
 src={ASSETS.cartIcon}
 alt="cart"
 className="mx-auto h-12 w-auto mb-3"
 />
 <h3 className="font-semibold text-slate-900">Your cart is empty</h3>
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

 {/* Related Guides */}
 <div className="bg-white p-6 rounded-xl border border-gray-200 mb-6">
 <h4 className="font-semibold mb-3 text-slate-900">Related Guides</h4>
 <ul className="text-sm text-gray-600 space-y-2">
 <li className="hover:text-amber-700 cursor-pointer hover:underline">
 DIN Number Registration and Search
 </li>
 <li className="hover:text-amber-700 cursor-pointer hover:underline">
 Articles of Association (AOA)
 </li>
 <li className="hover:text-amber-700 cursor-pointer hover:underline">
 Guide to Annual General Meeting
 </li>
 <li className="hover:text-amber-700 cursor-pointer hover:underline">
 Independent Director – Companies Act 2013
 </li>
 <li className="hover:text-amber-700 cursor-pointer hover:underline">
 Women Directors
 </li>
 </ul>
 </div>

 {/* Ad */}
 <div className="sticky top-28 bg-white p-4 rounded-xl border border-gray-200">
 <img
 src={ASSETS.ad}
 alt="ad"
 className="w-full rounded-lg"
 />
 </div>
 </aside>
 </div>

 {/* FAQ Section */}
 <section className="mt-10 bg-white p-6 rounded-xl border border-gray-200">
 <h3 className="text-xl font-semibold mb-4 text-slate-900">
 FAQ's on Remove Director
 </h3>
 <div className="space-y-0">
 {faqItems.map((q, i) => (
 <div key={i} className="border-b border-gray-200 last:border-b-0">
 <button
 className="w-full text-left py-4 flex justify-between items-center text-sm"
 onClick={() => setOpenFaq(openFaq === i ? null : i)}
 >
 <span className="text-slate-800 font-medium">{q}</span>
 <span className="text-amber-700 flex items-center gap-2">
 {openFaq === i ? "−" : <Plus size={14} />}
 </span>
 </button>
 {openFaq === i && (
 <div className="px-2 pb-4 text-sm text-gray-600">
 {faqAnswers[i]}
 </div>
 )}
 </div>
 ))}
 </div>

 <div className="mt-4">
 <button className="px-4 py-2 border-2 border-amber-600 text-amber-700 rounded-md text-sm hover:bg-amber-50 transition-colors font-medium">
 Load More
 </button>
 </div>
 </section>

 {/* Popular Searches */}
 <section className="mt-10 bg-white p-6 rounded-xl border border-gray-200">
 <h4 className="font-semibold mb-4 text-slate-900">Popular Searches</h4>
 <div className="flex flex-wrap gap-2">
 {[
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
 "MSME Registration",
 "Trademark Status",
 "Trade License",
 "Domicile",
 "eMitra",
 "UAN",
 "PICME",
 ].map((t) => (
 <span
 key={t}
 className="text-xs px-3 py-1.5 border border-gray-200 rounded bg-white text-gray-700 hover:border-amber-300 hover:text-amber-700 cursor-pointer transition-colors"
 >
 {t}
 </span>
 ))}
 </div>
 </section>
 </main>

 {/* WhatsApp CTA */}
 <div className="fixed right-6 bottom-6 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-4 py-3 rounded-full shadow-2xl flex items-center gap-3 z-50 hover:from-amber-700 hover:to-amber-800 transition-all cursor-pointer">
 <img src={ASSETS.whatsapp} alt="wa" className="w-5 h-5" />
 <span className="font-semibold text-sm">Live Chat with Experts</span>
 </div>
 </div>
 );
}