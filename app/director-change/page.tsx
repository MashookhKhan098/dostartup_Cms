"use client";


import React, { useState } from "react";
import { ChevronRight, ShoppingBag, Star, Plus, CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import SidebarCart from "../components/SidebarCart";
import Footer from "../components/Footer";

export default function AppointmentOfDirectorReplica() {
 const [openFaq, setOpenFaq] = useState<number | null>(null);
 const [gstChecked, setGstChecked] = useState(false);

 const faqItems = [
 "What is the role of a director in a Private Limited Company?",
 "Why might a company need to add new directors?",
 "How does DoStartup assist with director appointments?",
 "What are the types of directors?",
 "What are the qualifications for becoming a director?",
 "What documents are required for director appointment?",
 "What is the procedure for appointing a director?",
 "What is Form DIR-12 and when is it filed?",
 ];

 const faqAnswers: Record<number, string> = {
 0: "Directors oversee company operations and strategy on behalf of shareholders. They are responsible for managing daily activities and making crucial decisions that affect the company's future.",
 1: "To add fresh expertise, maintain strategic control, revitalize board performance, meet regulatory requirements, or support business growth and expansion.",
 2: "DoStartup provides end-to-end filing assistance, DIN/DSC support, compliance checks, documentation preparation, and expert guidance throughout the director appointment process.",
 3: "The main types are Executive Directors (involved in daily operations), Non-Executive Directors (provide oversight), Independent Directors (unbiased governance), and Nominee Directors.",
 4: "Candidate must be 18 or older, must not be disqualified under the Companies Act, and must have consensual agreement from shareholders/board for appointment.",
 5: "PAN Card, Proof of Identity (Aadhaar/Voter ID/Driving license), Residential Proof, Recent Passport-Sized Photograph, and Digital Signature Certificate (DSC).",
 6: "The procedure includes obtaining DIN, convening board meeting, passing board resolution, filing Form DIR-12 with ROC within 30 days, and updating statutory registers.",
 7: "Form DIR-12 is filed with the Registrar of Companies within 30 days of director appointment to notify the ROC about the change in directorship.",
 };

 const ASSETS = {
 logo: "/images/india-logo.jpg",
 hero: "/images/hero.png",
 remove: "/images/remove.png",
 ad: "/images/Screenshot (489).png",
 whatsapp: "/images/whatsapp.png",
 cartIcon: "/images/cart-icon.svg",
 indiaFlag: "/images/india-flag.png",
 ledgers: "https://img.dostartup.com/catalog/ledgers.png",
 };

 return (
 <div className="min-h-screen bg-[#F4F3EE] font-sans text-gray-800">
 {/* Navbar - Imported */}
 <Navbar />

 {/* Breadcrumb */}
 <div className="bg-[#F4F3EE] py-5">
 <div className="max-w-[1180px] mx-auto px-6 text-sm text-gray-500">
 Home / MCA Services /{" "}
 <span className="text-amber-700 font-medium">Appointment of Director</span>
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
 <button className="px-5 py-[10px] bg-[#F4F3EE] rounded-full text-sm font-medium shadow-[0_6px_20px_rgba(0,0,0,0.25)] hover:bg-amber-50 transition-colors text-amber-700">
 Add Director
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
 <div className="bg-[#F4F3EE] p-8 rounded-xl border border-gray-200 shadow-sm hover:border-amber-200 transition-colors">
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

 <div className="bg-[#F4F3EE] p-8 rounded-xl border border-gray-200 shadow-sm hover:border-amber-200 transition-colors">
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
 and DIN Allotment.
 </p>
 </div>
 </div>
 </div>

 <div className="bg-[#F4F3EE] p-8 rounded-xl border border-gray-200 shadow-sm hover:border-amber-200 transition-colors">
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
 financial reports.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* Main Content with Sidebar */}
 <div className="flex flex-col lg:flex-row gap-8 mt-10">
 {/* Left Column - Article */}
 <article className="flex-1 bg-[#F4F3EE] p-8 rounded-xl border border-gray-200">
 <div className="mb-6">
 <h2 className="text-2xl font-semibold mb-4 text-slate-900">
 Addition of New Directors
 </h2>
 <p className="text-sm text-gray-600">
 In a Private Limited Company, directors are pivotal to the
 business's seamless operation and strategic direction, managing
 daily activities and making crucial decisions that affect the
 company's future. As businesses evolve and expand, a need may
 arise to appoint additional directors to meet growing demands or
 to satisfy shareholder expectations. This process must be
 carried out strictly to the regulations outlined in the
 Companies Act of 2013 to ensure the company remains compliant
 and maintains proper governance.
 </p>
 </div>

 <div className="mb-6">
 <h3 className="text-lg font-semibold mb-2 text-slate-900">
 Who Is a Director in a Company?
 </h3>
 <p className="text-sm text-gray-600 mb-4">
 A director in a company serves as a key figure appointed by
 shareholders to oversee the company's operations, in alignment
 with the guidelines set out in the Memorandum of Association
 (MOA) and Articles of Association (AOA). Since a company is a
 legal entity and cannot act independently, it operates through
 natural persons, namely the directors.
 </p>
 </div>

 <div className="mb-6">
 <h3 className="text-lg font-semibold mb-2 text-slate-900">
 Types of Directors of a Company
 </h3>
 <p className="text-sm text-gray-600 mb-4">
 Directors within a company are differentiated into several
 categories, reflecting their distinct functions and duties. The
 principal types are:
 </p>

 <div className="mb-4">
 <h4 className="font-semibold text-slate-900">Executive Directors</h4>
 <p className="text-sm text-gray-600">
 These individuals are deeply engaged in the company's routine
 operations and management. They typically occupy specific
 executive positions like CEO, CFO, or COO.
 </p>
 </div>

 <div className="mb-4">
 <h4 className="font-semibold text-slate-900">Non-Executive Directors</h4>
 <p className="text-sm text-gray-600">
 Non-executive directors do not partake in the day-to-day
 management and provide objective oversight and strategic
 direction.
 </p>
 </div>

 <div>
 <h4 className="font-semibold text-slate-900">Independent Directors</h4>
 <p className="text-sm text-gray-600">
 Independent directors are distinguished by independence from
 the company management and ensure unbiased judgments and
 governance.
 </p>
 </div>
 </div>

 <div className="mb-6">
 <h3 className="text-xl font-semibold mb-3 text-slate-900">
 Key Sections of the Companies Act, 2013 for Director Appointment
 </h3>
 <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
 <li>
 Section 149: Outlines the Board composition requirements.
 </li>
 <li>
 Section 152: Governs the appointment procedure and DIN
 requirement.
 </li>
 <li>
 Section 161: Offers directives on appointment of additional
 directors.
 </li>
 <li>Section 164: Conditions of disqualification.</li>
 </ul>
 </div>

 <div className="mb-6">
 <h3 className="text-xl font-semibold mb-3 text-slate-900">
 Reasons for Adding or Changing Directors
 </h3>
 <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
 <li>Incorporating Fresh Expertise</li>
 <li>Maintaining Strategic Control</li>
 <li>Revitalizing Board Performance</li>
 <li>Legal Compliance</li>
 </ul>
 </div>

 <div className="mb-6">
 <h3 className="text-xl font-semibold mb-3 text-slate-900">
 Qualifications for Director
 </h3>
 <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
 <li>Age Requirement: Candidate must be 18 or older.</li>
 <li>
 Compliance with the Companies Act: Must not be disqualified.
 </li>
 <li>
 Consensual Agreement: Appointment must be approved by
 shareholders/board.
 </li>
 </ul>
 </div>

 <div>
 <h3 className="text-xl font-semibold mb-3 text-slate-900">
 Documents Required for Director Appointment
 </h3>
 <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
 <li>PAN Card</li>
 <li>Proof of Identity (Aadhaar/Voter ID/Driving license)</li>
 <li>Residential Proof</li>
 <li>Recent Passport-Sized Photograph</li>
 <li>Digital Signature Certificate (DSC)</li>
 </ul>
 </div>
 </article>

 {/* Right Column - Sidebar */}
 <aside className="w-full lg:w-80">
          <SidebarCart />

 {/* Related Guides */}
 <div className="bg-[#F4F3EE] p-6 rounded-xl border border-gray-200 mb-6">
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
 Types of Directors in Company
 </li>
 <li className="hover:text-amber-700 cursor-pointer hover:underline">
 Form DIR-12 Filing Process
 </li>
 </ul>
 </div>

 {/* Ad */}
 <div className="sticky top-28 bg-[#F4F3EE] p-4 rounded-xl border border-gray-200">
 <img
 src={ASSETS.ad}
 alt="ad"
 className="w-full rounded-lg"
 />
 </div>
 </aside>
 </div>

 {/* FAQ Section */}
 <section className="mt-10 bg-[#F4F3EE] p-6 rounded-xl border border-gray-200">
 <h3 className="text-xl font-semibold mb-4 text-slate-900">
 FAQ's on Director Appointment
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

 <div className="mt-4 flex gap-3 items-center flex-wrap">
  <button className="px-4 py-2 border-2 border-amber-600 text-amber-700 rounded-md text-sm hover:bg-amber-50 transition-colors font-medium">
 Load More
 </button>
  
</div>
 </section>

 {/* Popular Searches */}
 <section className="mt-10 bg-[#F4F3EE] p-6 rounded-xl border border-gray-200">
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
 className="text-xs px-3 py-1.5 border border-gray-200 rounded bg-[#F4F3EE] text-gray-700 hover:border-amber-300 hover:text-amber-700 cursor-pointer transition-colors"
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

