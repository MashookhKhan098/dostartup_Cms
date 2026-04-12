"use client";


import React, { useState } from "react";
import { ChevronRight, ShoppingBag, Star, Plus, CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import SidebarCart from "../components/SidebarCart";
import Footer from "../components/Footer";

export default function WindingUpLLPPage() {
 const [openFaq, setOpenFaq] = useState<number | null>(null);
 const [gstChecked, setGstChecked] = useState(false);

 const faqItems = [
 "What is winding up an LLP?",
 "What are the reasons for winding up an LLP?",
 "What is the procedure for voluntary winding up?",
 "What are the steps in compulsory winding up?",
 "What is the role of designated partners during winding up?",
 "Can an LLP be revived after winding up?",
 "How long does the winding-up process usually take?",
 "What are statutory filing requirements during winding up?",
 ];

 const faqAnswers: Record<number, string> = {
 0: "Formal process to close the LLP by settling debts and distributing assets.",
 1: "Insolvency, inactivity, insufficient partners, court/tribunal orders, or voluntary decision by partners.",
 2: "Declaration of solvency, resolution, appointment of liquidator, public announcement, claim verification, asset realisation, deposit & distribution of proceeds, dissolution filing.",
 3: "Tribunal petition, winding-up order, appointment of liquidator, claims settlement, asset realisation, dissolution order filed with Registrar.",
 4: "Make solvency declarations, pass resolutions, assist liquidator, and ensure statutory compliance during the process.",
 5: "Revival is complex and depends on legal provisions and tribunal orders; consult professionals for specific cases.",
 6: "Time varies based on complexity, creditor claims, asset realisation and tribunal timelines.",
 7: "Filing resolutions, notices, liquidator reports and dissolution orders with Registrar and IBBI as applicable.",
 };

 const ASSETS = {
 logo: "/images/india-logo.jpg",
 hero: "/images/hero.png",
 windup: "/images/windup.png",
 ad: "/images/Screenshot (489).png",
 whatsapp: "/images/whatsapp.png",
 cartIcon: "/images/cart-icon.svg",
 indiaFlag: "/images/india-flag.png",
 ledgers: "https://img.dostartup.com/catalog/ledgers.png",
 adRight1: "/images/company-compliance.jpg",
 dinEkyc: "/images/din.jpg",
 };

 return (
 <div className="min-h-screen bg-[#F4F3EE] font-sans text-gray-800">
 {/* Navbar - Imported */}
 <Navbar />

 {/* Breadcrumb */}
 <div className="bg-[#F4F3EE] py-5">
 <div className="max-w-[1180px] mx-auto px-6 text-sm text-gray-500">
 Home / Windup Business /{" "}
 <span className="text-amber-700 font-medium">Winding Up - LLP</span>
 </div>
 </div>

 {/* Main */}
 <main className="max-w-[1180px] mx-auto px-6 py-3 grid grid-cols-1 lg:grid-cols-12 gap-8">
 {/* Left column */}
 <section className="lg:col-span-8 space-y-6">
 {/* Top card */}
 <div className="bg-[#F4F3EE] rounded-lg shadow-sm p-6 flex flex-col md:flex-row gap-6">
 {/* Left image card */}
 <div className="md:w-1/3 flex-shrink-0">
 <div className="rounded-lg overflow-hidden">
 <div className="bg-gradient-to-r from-amber-700 to-amber-800 rounded-t-lg p-4 text-white text-center">
 <h2 className="text-2xl font-bold ">
 WINDING UP
 </h2>
 <div className="text-xs mt-1 opacity-90">
 Close your LLP legally and efficiently
 </div>
 </div>

 <div className="bg-[#F4F3EE] px-4 py-6 flex justify-center">
 <div className="w-44 h-44 rounded-full overflow-hidden bg-[#F4F3EE] shadow-sm flex items-center justify-center -mt-4">
 <img
 src={ASSETS.windup}
 alt="Windup hero"
 className="w-full h-full object-cover"
 />
 </div>
 </div>
 </div>

 <ul className="mt-4 text-sm space-y-2 text-gray-600">
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Declaration of Solvency (DOS)</li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Resolution for Voluntary Liquidation</li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Appointment of Liquidator</li>
 <li className="text-amber-700 underline cursor-pointer hover:text-amber-800">Load More</li>
 </ul>
 </div>

 {/* Right content */}
 <div className="md:w-2/3 flex-1">
 <div className="flex flex-col sm:flex-row justify-between gap-4">
 <div>
 <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 mb-2">
 <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
 <span className="text-xs font-medium text-amber-700">LLP WINDING UP</span>
 </div>
 <h2 className="text-lg font-semibold text-slate-900">
 Winding Up - LLP
 </h2>
 <div className="flex items-center gap-3 mt-2">
 <div className="flex items-center gap-1">
 {[...Array(5)].map((_, i) => (
 <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />
 ))}
 </div>
 <span className="text-xs text-slate-500">(189 reviews)</span>
 </div>
 </div>

 <p className="text-sm text-gray-600 max-w-md">
 Close your company or LLP legally and efficiently. Get
 expert assistance for striking off your company name from
 the MCA register with complete documentation support.
 </p>
 </div>

 {/* Offer box */}
 <div className="relative mt-6">
 <div className="absolute -top-3 left-6 bg-[#F4F3EE] px-2 rounded-md text-xs text-amber-700 border border-amber-200">
 2 Exclusive Offers
 </div>
 <div className="border-2 border-dashed rounded-md border-amber-200 p-4 bg-amber-50/30">
 <div className="font-semibold text-slate-900">Basic</div>
 <ul className="mt-2 text-sm text-gray-600">
 <li className="flex items-center gap-2">
 <ChevronRight size={14} className="text-amber-600" /> Declaration of Solvency
 </li>
 <li className="flex items-center gap-2">
 <ChevronRight size={14} className="text-amber-600" /> Resolution Filing
 </li>
 <li className="flex items-center gap-2">
 <ChevronRight size={14} className="text-amber-600" /> Dissolution Order
 </li>
 </ul>
 <div className="mt-3">
 <button className="bg-[#F4F3EE] border-2 border-amber-600 text-amber-700 px-4 py-1.5 rounded hover:bg-amber-50 transition-colors text-sm font-medium">
 ADD TO CART
 </button>
 </div>
 </div>
 </div>

 <div className="mt-4 border-t pt-4 text-sm flex justify-between items-center text-slate-600">
 <a className="text-amber-700 underline hover:text-amber-800 cursor-pointer">
 Terms and conditions
 </a>
 <a className="text-amber-700 underline hover:text-amber-800 cursor-pointer">Refer a Friend</a>
 </div>

 <div className="mt-6">
 <h4 className="font-semibold mb-2 text-slate-900">Offers and discounts</h4>
 <div className="p-3 border border-gray-200 rounded-lg hover:border-amber-200 transition-colors">
 <div className="flex items-center gap-3">
 <img
 src={ASSETS.ledgers}
 alt="ledgers"
 className="h-8 w-8 object-contain"
 />
 <div className="text-sm">
 <div className="text-amber-700 font-medium">
 LEDGERS - Compliance Platform
 </div>
 <div className="text-gray-500 text-xs">
 Invoicing, GST Filing, Banking and Payroll
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>

 {/* Article */}
 <article className="bg-[#F4F3EE] rounded-lg shadow-sm p-6">
 <h1 className="text-2xl font-semibold text-center text-slate-900">
 Winding up of an LLP
 </h1>

 <div className="mt-4 text-[15px] leading-7 text-gray-700">
 <p>
 Winding up a Limited Liability Partnership (LLP) involves
 legally dissolving the entity by settling its debts, liquidating
 its assets, and distributing the remaining assets to the
 partners. This process can be initiated voluntarily by the
 partners or compulsorily by a tribunal for various reasons such
 as insolvency, inactivity, or breach of laws. Navigating the
 complexities of winding up requires a thorough understanding of
 legal procedures, compliance requirements, and financial
 management.
 </p>
 <p className="mt-4">
 DoStartup can provide expert guidance and support throughout
 your winding up of LLP, ensuring compliance with all legal
 requirements and minimising potential complications. Contact us
 today to get started and ensure a seamless and compliant
 winding-up procedure for your LLP.
 </p>

 <h3 className="mt-6 text-lg font-semibold text-slate-900">
 What is the Winding up of LLP?
 </h3>
 <p className="mt-2">
 Winding up of a Limited Liability Partnership (LLP) refers to
 the formal process of closing down the LLP's operations,
 disposing of its assets, and settling its liabilities. This
 process is undertaken when an LLP ceases its business activities
 and dissolves as a legal entity.
 </p>

 <h3 className="mt-6 text-lg font-semibold text-slate-900">
 Law Governing - LLP Winding up
 </h3>
 <ul className="list-disc pl-5 mt-3 text-sm text-gray-600 space-y-2">
 <li>
 Section 65 of the LLP Act, 2008: Empowers the Central
 Government to make rules on LLP winding up and dissolution
 process.
 </li>
 <li>
 Section 67 of the LLP Act, 2008: Permits applying provisions
 of the Companies Act, 1956 to LLPs where necessary.
 </li>
 <li>
 Notification GSR 6(E), dated 6 Jan 2010: Applies certain
 Companies Act provisions to LLP winding up.
 </li>
 <li>
 Limited Liability Partnership (Winding up and Dissolution)
 Rules, 2012: Specific rules addressing forms, fees, and
 procedures.
 </li>
 </ul>

 <h3 className="mt-6 text-lg font-semibold text-slate-900">
 Comparison Between LLP Winding Up and Dissolution
 </h3>
 <div className="overflow-auto text-sm text-gray-600 mt-3">
 <table className="w-full table-auto border-collapse">
 <thead>
 <tr className="bg-amber-50">
 <th className="p-3 border border-gray-200 text-left">Basis</th>
 <th className="p-3 border border-gray-200 text-left">Winding Up</th>
 <th className="p-3 border border-gray-200 text-left">Dissolution</th>
 </tr>
 </thead>
 <tbody>
 <tr className="odd:bg-[#F4F3EE] even:bg-[#F4F3EE]">
 <td className="p-3 border border-gray-200 align-top">Meaning</td>
 <td className="p-3 border border-gray-200">
 Preparing to close by selling assets and paying
 creditors.
 </td>
 <td className="p-3 border border-gray-200">
 Final step; LLP ceases to exist after all procedures are
 complete.
 </td>
 </tr>
 <tr className="odd:bg-[#F4F3EE] even:bg-[#F4F3EE]">
 <td className="p-3 border border-gray-200 align-top">Legal Entity</td>
 <td className="p-3 border border-gray-200">
 LLP remains a legal entity during winding up.
 </td>
 <td className="p-3 border border-gray-200">
 LLP no longer exists after dissolution.
 </td>
 </tr>
 </tbody>
 </table>
 </div>

 <h3 className="mt-6 text-lg font-semibold text-slate-900">
 Modes of LLP Winding Up
 </h3>
 <ul className="list-disc pl-5 mt-3 text-sm text-gray-600 space-y-2">
 <li>Voluntary Winding Up — initiated by partners.</li>
 <li>
 Compulsory Winding Up by Tribunal — ordered by the Tribunal
 for specified reasons.
 </li>
 <li>
 Voluntary Liquidation — partners decide to liquidate and
 appoint a liquidator.
 </li>
 </ul>

 <h3 className="mt-6 text-lg font-semibold text-slate-900">
 Pre-requisites for Voluntary Liquidation
 </h3>
 <ul className="list-disc pl-5 mt-3 text-sm text-gray-600 space-y-2">
 <li>Solvency: LLP must be able to pay its debts in full.</li>
 <li>
 Declaration by Designated Partners: Majority must declare
 solvency via affidavit and provide audited statements.
 </li>
 <li>
 No Intent to Defraud: Liquidation must be undertaken in good
 faith.
 </li>
 </ul>

 <h3 className="mt-6 text-lg font-semibold text-slate-900">
 Procedure for Voluntary Liquidation Of LLP
 </h3>
 <ol className="list-decimal list-inside text-sm text-gray-600 space-y-2">
 <li>
 Declaration of Solvency (DOS) with audited financials and
 valuation report.
 </li>
 <li>
 Pass resolution for voluntary liquidation and appoint an
 insolvency professional within four weeks of DOS.
 </li>
 <li>
 If debts exist, creditors representing two-thirds of debt
 value must approve within seven days.
 </li>
 <li>
 Notify Registrar and IBBI within seven days of passing
 resolution.
 </li>
 <li>
 Liquidator commences liquidation and makes public
 announcements to invite claims within 30 days.
 </li>
 <li>
 Verify claims, realise assets, deposit proceeds in LLP 'in
 voluntary liquidation' account, and distribute proceeds after
 costs.
 </li>
 </ol>

 <h3 className="mt-6 text-lg font-semibold text-slate-900">
 Winding Up Of LLP By Tribunal
 </h3>
 <p className="text-sm text-gray-600">
 Tribunal-ordered winding up can arise due to insolvency,
 insufficient partners, non-compliance, activities against
 national interest, or other just and equitable grounds. The
 Tribunal appoints a liquidator, oversees claims settlement,
 asset realisation, distribution, and files the dissolution order
 with the Registrar.
 </p>

 <h3 className="mt-6 text-lg font-semibold text-slate-900">
 Insolvency Proceedings under IBC
 </h3>
 <p className="text-sm text-gray-600">
 Under IBC, 2016 LLP insolvency includes initiation by
 creditors/partners, moratorium, appointment of IRP, formation of
 CoC, review of resolution plans, and liquidation if resolution
 fails — followed by dissolution.
 </p>

 <h3 className="mt-6 text-lg font-semibold text-slate-900">
 DoStartup: Your Partner in LLP Winding Up
 </h3>
 <p className="text-sm text-gray-600">
 DoStartup offers specialised services to facilitate winding
 up of LLPs — documentation, declaration of solvency, resolution
 passing, liquidator appointment, claim verification, asset
 realisation, and final dissolution filings. Contact our experts
 for a guided, compliant closure.
 </p>
 </div>
 </article>

 {/* Documents + other registrations */}
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
 <div className="lg:col-span-7 bg-[#F4F3EE] rounded-lg shadow-sm p-6">
 <h3 className="text-lg font-semibold mb-4 text-slate-900">
 Documents Required For Winding Up - LLP
 </h3>
 <ul className="space-y-3 text-sm text-gray-700">
 <li className="border-b pb-3 hover:text-amber-700 cursor-pointer transition-colors">
 Declaration of Solvency (DOS)
 </li>
 <li className="border-b pb-3 hover:text-amber-700 cursor-pointer transition-colors">
 Resolution for Voluntary Liquidation
 </li>
 <li className="border-b pb-3 hover:text-amber-700 cursor-pointer transition-colors">
 Audited Financial Statements
 </li>
 <li className="border-b pb-3 hover:text-amber-700 cursor-pointer transition-colors">
 Valuation Report
 </li>
 <li className="border-b pb-3 hover:text-amber-700 cursor-pointer transition-colors">
 Affidavit by Designated Partners
 </li>
 <li className="mt-4 inline-block px-3 py-2 border-2 border-amber-600 rounded-md text-sm text-amber-700 hover:bg-amber-50 cursor-pointer transition-colors">
 Load More
 </li>
 </ul>
 </div>

 <aside className="lg:col-span-5 bg-[#F4F3EE] rounded-lg shadow-sm p-6">
 <h3 className="text-lg font-semibold mb-4 text-slate-900">
 Related Guides
 </h3>
 <ul className="space-y-3 text-sm">
 {[
 "How to Close a LLP – Winding Up of LLP",
 "Voluntary Liquidation of LLPs",
 "LLP Form 24 – Easily Close a LLP",
 "Difference between Winding up and Dissolution of Company",
 "Documents Required For Winding Up - LLP",
 ].map((item) => (
 <li
 key={item}
 className="border-b pb-2 text-amber-700 hover:text-amber-800 cursor-pointer hover:underline"
 >
 {item}
 </li>
 ))}
 </ul>
 </aside>
 </div>

 {/* FAQ */}
 <div className="bg-[#F4F3EE] rounded-lg shadow-sm p-6">
 <h3 className="text-xl font-semibold mb-4 text-slate-900">
 FAQ's on Winding Up - LLP
 </h3>
 <div className="space-y-0">
 {faqItems.map((q, i) => (
 <div key={i} className="border-b last:border-b-0">
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
 </div>
 </section>

 {/* Right column (sidebar) */}
 <aside className="lg:col-span-4 hidden lg:block">
          <SidebarCart />

 <div className="bg-[#F4F3EE] rounded-lg shadow-sm p-4 mb-4">
 <h4 className="font-semibold mb-3 text-slate-900">Related Guides</h4>
 <ul className="text-sm space-y-2">
 <li className="text-amber-700 hover:text-amber-800 cursor-pointer hover:underline">How to Close a LLP – Winding Up of LLP</li>
 <li className="text-amber-700 hover:text-amber-800 cursor-pointer hover:underline">Voluntary Liquidation of LLPs</li>
 <li className="text-amber-700 hover:text-amber-800 cursor-pointer hover:underline">LLP Form 24 – Easily Close a LLP</li>
 <li className="text-amber-700 hover:text-amber-800 cursor-pointer hover-underline">Difference between Winding up and Dissolution of Company</li>
 </ul>
 </div>

 <div className="rounded-lg overflow-hidden shadow-sm mb-4">
 <img
 src={ASSETS.adRight1}
 alt="company compliance"
 className="w-full h-56 object-cover"
 />
 </div>

 <div className="rounded-lg overflow-hidden shadow-sm mb-6">
 <img
 src={ASSETS.dinEkyc}
 alt="din ekyc"
 className="w-full h-56 object-cover"
 />
 </div>

 <div className="bg-[#F4F3EE] rounded-lg p-4">
 <h4 className="font-semibold mb-3 text-slate-900">Popular Searches</h4>
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
 ].slice(0, 14).map((t) => (
 <span
 key={t}
 className="text-xs px-3 py-1 border border-gray-200 rounded bg-[#F4F3EE] text-gray-700 hover:border-amber-300 hover:text-amber-700 cursor-pointer transition-colors"
 >
 {t}
 </span>
 ))}
 </div>
 </div>
 </aside>
 </main>

 {/* WhatsApp CTA */}
 <div className="fixed right-6 bottom-6 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-4 py-3 rounded-full shadow-2xl flex items-center gap-3 z-50 hover:from-amber-700 hover:to-amber-800 transition-all cursor-pointer">
 <img src={ASSETS.whatsapp} alt="wa" className="w-5 h-5" />
 <span className="font-semibold text-sm">Live Chat with Experts</span>
 </div>
 </div>
 );
}

