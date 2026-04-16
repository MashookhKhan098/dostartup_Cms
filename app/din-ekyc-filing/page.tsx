"use client";

import React, { useState } from "react";
import {
 ChevronRight,
 ShoppingBag,
 Star,
 Plus,
 Check,
 Search,
} from "lucide-react";
import Navbar from "../components/Navbar";
import SidebarCart from "../components/SidebarCart";
import Footer from "../components/Footer";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import PopularSearches from "../components/PopularSearches";

/**
 * DIR-3 KYC Page with amber theme and imported Navbar
 */

const ASSETS = {
  logo: "/images/india-logo.jpg",
  heroBg: "/images/din-ekyc-hero.jpg",
  heroPortrait:
  "/images/hero.webp",
  ledgers: "/images/hero.webp",
  whatsapp: "/images/whatsapp.png",
  adRight1: "/images/company-compliance.jpg",
  dinEkyc: "/images/din.jpg",
  cartIcon: "/images/cart-icon.svg",
  indiaFlag: "/images/india-flag.png",
  heroImage: "/images/hero.png",
  portraitImage: "/images/remove.png",
};

const POPULAR_SEARCHES_SIDEBAR = [
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
];

export default function DIR3KycPage(): React.ReactElement {
 const [gstChecked, setGstChecked] = useState(false);
 const [din, setDin] = useState("");
 const [searchQuery, setSearchQuery] = useState("");
 const [companyName, setCompanyName] = useState("");

 const handleAddDirector = (e?: React.MouseEvent | React.FormEvent) => {
 e?.preventDefault();
 if (!companyName.trim()) {
 window.alert("Please enter a company name before adding a director.");
 return;
 }
 window.alert(`Add Director for company: ${companyName}`);
 };

 return (
 <div className="min-h-screen bg-[#F4F3EE] text-gray-800 font-sans">
 {/* Imported Navbar */}
 <Navbar />

 {/* Breadcrumb */}
 <div className="bg-[#F4F3EE] py-4 font-bold text-slate-800">
 <div className="max-w-[1180px] mx-auto px-4 sm:px-6 text-sm text-gray-500">
 Home / MCA Services /{" "}
 <span className="text-amber-700 font-medium">DIR 3 KYC Filing</span>
 </div>
 </div>

 {/* Main */}
 <main className="max-w-[1180px] mx-auto px-4 sm:px-6 py-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
 {/* Left content */}
 <section className="lg:col-span-8 space-y-6">
 {/* Director Management HERO */}
 <section
 className="relative rounded-2xl overflow-hidden"
 style={{ minHeight: 420 }}
 >
 {/* Background image + overlay */}
 <div className="absolute inset-0 rounded-2xl overflow-hidden">
 <img
 src={ASSETS.heroImage}
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

 {/* Foreground content */}
 <div className="absolute inset-0 flex items-center">
 <div className="w-full px-4 sm:px-8">
 <div className="mx-auto max-w-[1180px] flex flex-col lg:flex-row items-center gap-8">
 {/* Left - text card */}
 <div className="w-full lg:w-7/12">
 <div
 className="bg-[rgba(0,0,0,0.45)] border border-[rgba(255,255,255,0.06)] rounded-2xl p-6 sm:p-10 backdrop-blur-sm shadow-[0_20px_50px_rgba(2,6,23,0.6)]"
 role="region"
 aria-label="Director management hero"
 >
 {/* Badge */}
 <div className="inline-flex items-center gap-1.5 bg-amber-500/20 border border-amber-400/30 rounded-full px-3 py-1 mb-4">
 <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
 <span className="text-xs font-medium text-amber-300">MCA COMPLIANCE</span>
 </div>

 <h1 className="text-white text-2xl sm:text-3xl lg:text-[34px] leading-tight font-semibold mb-4">
 Director Management
 </h1>

 <p className="text-slate-200 text-sm sm:text-[15px] leading-relaxed mb-6">
 Manage your company's directors effortlessly with
 AI-assisted MCA compliance. Our intelligent system
 ensures complete legal adherence, auto-checks
 documentation, and provides end-to-end support for a
 hassle-free experience.
 </p>

 <form
 className="flex items-center gap-4"
 onSubmit={handleAddDirector}
 >
 <div className="relative flex items-center w-full">
 <input
 value={companyName}
 onChange={(e) => setCompanyName(e.target.value)}
 placeholder="ENTER COMPANY NAME"
 aria-label="Enter company name"
 className="w-full max-w-[640px] px-4 sm:px-6 py-3 sm:py-4 rounded-full bg-transparent text-white placeholder:text-slate-300 border border-[rgba(255,255,255,0.12)] focus:outline-none focus:ring-1 focus:ring-amber-500 text-sm sm:text-base"
 />

 {/* Add button */}
 <div className="absolute right-2 top-1/2 -translate-y-1/2">
 <button
 type="submit"
 onClick={handleAddDirector}
 className="px-4 sm:px-5 py-2 sm:py-[10px] bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-full text-xs sm:text-sm font-medium shadow-[0_6px_20px_rgba(0,0,0,0.25)] hover:from-amber-700 hover:to-amber-800 transition-all"
 aria-label="Add Director"
 >
 Add Director
 </button>
 </div>
 </div>
 </form>
 </div>
 </div>

 {/* Right - portrait */}
 <div className="w-full lg:w-5/12 flex justify-center lg:justify-end pr-0 lg:pr-6 mt-6 lg:mt-0">
 <div className="relative w-[280px] sm:w-[340px]">
 <img
 src={ASSETS.portraitImage}
 alt="portrait"
 className="w-full h-auto rounded-2xl shadow-2xl"
 />
 </div>
 </div>
 </div>
 </div>
 </div>

 {/* soft gradient at bottom */}
 <div
 className="absolute inset-0 pointer-events-none"
 style={{
 background:
 "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.18) 100%)",
 borderRadius: "1rem",
 }}
 aria-hidden
 />
 </section>


 {/* Article content - WHITE BOX */}
 <article className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 sm:p-10">
 <h1 className="text-xl sm:text-2xl font-semibold text-center">
 DIR 3 KYC — Application for KYC of Directors
 </h1>

 <div className="mt-4 text-sm sm:text-[15px] leading-7 text-gray-700">
 <p>
 A Director Identification Number (DIN) is a unique number
 assigned to an individual who wishes to become a director or is
 already serving as a director of a company. With MCA updates,
 every director holding a DIN must annually submit KYC details
 through Form DIR-3 KYC.
 </p>

 <h3 className="mt-6 text-base sm:text-lg font-semibold">
 What is DIR-3 KYC Form?
 </h3>
 <p className="mt-2">
 Form DIR-3 KYC is an electronic form mandated by the Ministry of
 Corporate Affairs for updating the KYC details (Know Your
 Customer) of individuals who have been allotted a DIN.
 </p>

 <h3 className="mt-6 text-base sm:text-lg font-semibold">Applicability</h3>
 <p className="mt-2">
 It is mandatory for directors allotted with a DIN whose status
 is approved to file DIR-3 KYC annually.
 </p>

 <h3 className="mt-6 text-base sm:text-lg font-semibold">DIR-3 KYC Due Date</h3>
 <p className="mt-2">
 Generally, every director must file DIR-3 KYC by 30th September
 of the immediately following financial year. Late filing
 penalties may apply.
 </p>

 <h3 className="mt-6 text-base sm:text-lg font-semibold">
 Types of e-Form DIR-3 KYC
 </h3>
 <p className="mt-2">
 DIR-3 KYC (Form) - First-time filing after a DIN is allotted or
 whenever change is required. DIR-3 KYC WEB - For directors who
 previously submitted DIR-3 KYC and only require no-change
 re-filing.
 </p>

 <h3 className="mt-6 text-base sm:text-lg font-semibold">
 Checkpoints for Filing
 </h3>
 <ul className="mt-2 list-disc list-inside text-sm text-gray-700 space-y-1">
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Personal contact details (mobile and email) for OTPs</li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">
 Director's digital signature (DSC) for signing as required
 </li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">
 Accuracy & certification by professional (CA/CS/CMA)
 </li>
 </ul>

 <h3 className="mt-6 text-base sm:text-lg font-semibold">Documents Required</h3>
 <ul className="mt-2 list-disc list-inside text-sm text-gray-700 space-y-1">
 <li className="hover:text-amber-700 cursor-pointer transition-colors">PAN Card</li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Aadhaar Card</li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Passport</li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Other supporting documents (if applicable)</li>
 </ul>

 <h3 className="mt-6 text-base sm:text-lg font-semibold">
 How to File DIR 3 KYC: Step-by-Step Guide
 </h3>
 <ol className="mt-3 list-decimal list-inside text-sm text-gray-600 space-y-2">
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Visit the MCA portal and login with your credentials.</li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">
 Provide mobile and email for OTP verification and proceed.
 </li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Enter personal and identification details.</li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Upload attachments & certify the e-Form using DSC.</li>
 </ol>
 </div>
 </article>
 
 {/* Pricing section within the main column */}
 <DynamicPricingSection category="din-ekyc-filing" />

 </section>

 {/* Sidebar */}
 <aside className="lg:col-span-4 hidden lg:block">
 <div className="sticky top-28 space-y-6">
 <SidebarCart />

 <div className="bg-white rounded-2xl border border-[#E5E2DA] shadow-sm p-6 mb-4">
 <h4 className="font-semibold text-[#2F2E2B] mb-4">Related Guides</h4>
 <ul className="text-sm space-y-3">
 <li className="text-amber-700 hover:text-amber-800 cursor-pointer hover:underline transition-colors">A Complete Guide on Director Identification Number (DIN)</li>
 <li className="text-amber-700 hover:text-amber-800 cursor-pointer hover:underline transition-colors">DIN Number Registration and Search</li>
 <li className="text-amber-700 hover:text-amber-800 cursor-pointer hover:underline transition-colors">How to Obtain DIN?</li>
 <li className="text-amber-700 hover:text-amber-800 cursor-pointer hover:underline transition-colors">Company Compliance</li>
 </ul>
 </div>

 <div className="rounded-2xl overflow-hidden shadow-sm mb-4 border border-[#E5E2DA]">
 <img
 src={ASSETS.adRight1}
 alt="company compliance"
 className="w-full h-56 object-cover"
 />
 </div>

 <div className="rounded-2xl overflow-hidden shadow-sm mb-6 border border-[#E5E2DA]">
 <img
 src={ASSETS.dinEkyc}
 alt="din ekyc"
 className="w-full h-56 object-cover"
 />
 </div>

 <div className="bg-white rounded-2xl border border-[#E5E2DA] shadow-sm p-6">
 <h4 className="font-semibold text-[#2F2E2B] mb-4">Popular Searches</h4>
 <div className="flex flex-wrap gap-2">
 {POPULAR_SEARCHES_SIDEBAR.slice(0, 14).map((t) => (
 <span
 key={t}
 className="text-xs px-3 py-1.5 border border-gray-100 rounded-lg bg-[#F9F9F9] text-gray-700 hover:border-amber-300 hover:text-amber-700 cursor-pointer transition-all"
 >
 {t}
 </span>
 ))}
 </div>
 </div>
 </div>
 </aside>
 </main>

 {/* FAQ Section like partnership page - full width below main content */}
 <FAQAccordion transparent={true} />

 {/* Footer from components */}
 <Footer />

 {/* Floating WhatsApp CTA */}
 <div className="fixed right-4 sm:right-6 bottom-4 sm:bottom-6 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-4 py-3 rounded-full shadow-2xl flex items-center gap-3 z-50 hover:from-amber-700 hover:to-amber-800 transition-all cursor-pointer">
 <img src={ASSETS.whatsapp} alt="wa" className="w-5 h-5" />
 <span className="font-semibold text-xs sm:text-sm">Live Chat with Experts</span>
 </div>
 </div>
 );
}
