"use client";
import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import SidebarCart from "../components/SidebarCart";
import Footer from "../components/Footer";

import React, { useState } from "react";
import {
 ChevronRight,
 ShoppingBag,
 Star,
 Plus,
 ChevronDown,
} from "lucide-react";

/* ---------------------------
 Assets & Navigation data
 --------------------------- */
const ASSETS = {
 logo: "/images/india-logo.jpg",
 hero: "/images/tan-reg.png", // square hero image (replace file as needed)
 man: "/images/mca-compliance-simplified-india.webp",
 ledgers: "/images/ledgers.png",
 whatsapp: "/images/whatsapp.png",
 adRight1: "/images/company-compliance.jpg",
 dinEkyc: "/images/din.jpg",
 cartIcon: "/images/cart-icon.svg",
 indiaFlag: "/images/india-flag.png",
 companyCompliance: "/images/company-compliance.png",
};

const INCOME_TAX_DROPDOWN_LINKS = [
 { title: "Income Tax E-Filing", href: "/income-tax/e-filing" },
 { title: "Business Tax Filing", href: "/income-tax/business-tax-filing" },
 {
 title: "Partnership Firm / LLP ITR",
 href: "/income-tax/partnership-llp-itr",
 },
 { title: "Company ITR Filing", href: "/income-tax/company-itr-filing" },
 { title: "Trust / NGO Tax Filing", href: "/income-tax/trust-ngo-tax-filing" },
 { title: "15CA - 15CB Filing", href: "/income-tax/15ca-15cb-filing" },
 { title: "TAN Registration", href: "/income-tax/tan-registration" },
 { title: "TDS Return Filing", href: "/income-tax/tds-return-filing" },
 { title: "Income Tax Notice", href: "/income-tax/income-tax-notice" },
];

const NAV_ITEMS = [
 "DoStartup",
 "Startup",
 "Registrations",
 "Trademark",
 "GST",
 "Income Tax",
 "MCA",
 "Compliance",
 "Personal",
 "Global",
 "Cities",
 "Guides",
 "Login",
];

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

/* ---------------------------
 Component
 --------------------------- */
export default function TanRegistrationPage(): React.ReactElement {
 const [showIncomeDropdown, setShowIncomeDropdown] = useState(false);

 /* -----------------------------------
 Render
 ----------------------------------- */
 return (
 <div className="min-h-screen bg-[#F4F3EE] font-sans text-gray-800">
 <Navbar />

 {/* Breadcrumb */}
 <div className="bg-[#F4F3EE] py-5">
 <div className="max-w-[1180px] mx-auto px-6 text-sm text-gray-500">
 DoStartup / Business Registration /{" "}
 <span className="text-[#C15F3C] font-medium">TAN Registration</span>
 </div>
 </div>

 {/* Main */}
 <main className="max-w-[1180px] mx-auto px-6 py-3 grid grid-cols-1 lg:grid-cols-12 gap-8">
 {/* Left column */}
 <section className="lg:col-span-8 space-y-6">
 {/* Top card */}
 <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col md:flex-row gap-6">
 {/* Left image card (square hero image) */}
 <div className="md:w-1/3 flex-shrink-0">
 <div className="rounded-lg overflow-hidden border border-gray-100">
 <div className="bg-[#C15F3C] rounded-t-lg p-4 text-white text-center">
 <h2 className="text-2xl font-bold ">
 TAN Registration
 </h2>
 <div className="text-xs mt-1 opacity-90">
 Tax Deduction and Collection Account Number
 </div>
 </div>

 <div className="bg-white px-4 py-6 flex justify-center">
 {/* square image — remove rounded-full to keep square */}
 <div className="w-44 h-44 rounded-md overflow-hidden bg-white shadow-sm flex items-center justify-center -mt-4 border border-gray-100">
 <img
 src={ASSETS.hero}
 alt="tan registration hero"
 className="w-full h-full object-cover"
 />
 </div>
 </div>
 </div>

 <ul className="mt-4 text-sm space-y-2 text-gray-600">
 <li>TAN Application filing</li>
 <li>TAN Certificate and Number</li>
 <li>Support for TDS/TCS compliance</li>
 <li className="text-[#C15F3C] underline">Load More</li>
 </ul>
 </div>

 {/* Right content */}
 <div className="md:w-2/3 flex-1">
 <div className="flex flex-col sm:flex-row justify-between gap-4">
 <div>
 <h2 className="text-lg font-semibold text-slate-900">
 TAN Registration
 </h2>
 <div className="flex items-center gap-3 mt-2">
 <div className="flex items-center gap-1">
 {[...Array(5)].map((_, i) => (
 <Star key={i} size={14} className="text-yellow-400" />
 ))}
 </div>
 <span className="text-xs text-slate-500">(630)</span>
 </div>
 </div>

 <p className="text-sm text-gray-600 max-w-md">
 Tax Deduction and Collection Account Number. It is a 10-digit
 alpha-numeric number issued by the ITD, TAN must be obtained
 by all persons responsible for deducting tax at source or who
 are required to collect tax at source.
 </p>
 </div>

 {/* Offer box */}
 <div className="relative mt-6">
 <div className="absolute -top-3 left-6 bg-white px-2 rounded-md text-xs text-[#C15F3C] border border-[#eff8f0]">
 1 Exclusive Offers
 </div>
 <div className="border-2 border-dashed rounded-md border-[#f0dcd0] p-4 bg-gray-50">
 <div className="font-semibold text-slate-900">Basic</div>
 <ul className="mt-2 text-sm text-gray-600">
 <li className="flex items-center gap-2">
 <ChevronRight size={14} /> TAN Application filing
 </li>
 <li className="flex items-center gap-2">
 <ChevronRight size={14} /> TAN Certificate and Number
 </li>
 </ul>
 <div className="mt-3">
 <button className="bg-white border border-[#C15F3C] text-[#C15F3C] px-3 py-1 rounded hover:bg-[#C15F3C]/5 transition-colors">
 ADD
 </button>
 </div>
 </div>
 </div>

 <div className="mt-4 border-t pt-4 text-sm flex justify-between items-center text-slate-600">
 <a className="text-[#C15F3C] underline">
 Terms and conditions
 </a>
 <a className="text-[#C15F3C] underline">Refer a Friend</a>
 </div>

 <div className="mt-6">
 <h4 className="font-semibold mb-2">Offers and discounts</h4>
 <div className="p-3 border rounded-md">
 <div className="flex items-center gap-3">
 <img
 src={ASSETS.ledgers}
 alt="ledgers"
 className="h-8 w-8 object-contain"
 />
 <div className="text-sm">
 <div className="text-[#C15F3C] font-medium">
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
 <article className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
 <h1 className="text-2xl font-semibold text-center">
 TAN Registration
 </h1>

 <div className="mt-4 text-[15px] leading-7 text-gray-700 space-y-4">
 <p>
 In India, it is mandatory for businesses to have a Tax Deduction
 Account Number (TAN). This number is issued by the Income Tax
 Department and is used as a unique identifier for individuals or
 entities responsible for deducting or collecting Tax at source.
 It is compulsory to mention the TAN in all TDS returns and on
 other documents related to income tax procedures. Non-compliance
 may lead to penalties.
 </p>

 <p>
 DoStartup can help both individuals and companies with their
 TAN application online and secure their company TAN Number (Tax
 Deduction and Collection Account Number) in a prompt and
 efficient manner. Leveraging our proficiency in tax and
 regulatory affairs, DoStartup makes the complex TAN
 Registration process straightforward.
 </p>

 <h3 className="mt-6 text-lg font-semibold">
 What is TAN Registration Number?
 </h3>
 <p>
 TAN, or Tax Deduction and Collection Account Number, is a unique
 10-digit alphanumeric identifier issued by the Income Tax
 Department. It's primarily used by individuals or entities
 responsible for deducting or collecting Tax at source (TDS/TCS).
 </p>

 <h3 className="mt-6 text-lg font-semibold">
 TAN Number: Definition and Configuration
 </h3>
 <ul className="mt-3 list-disc list-inside text-sm text-gray-600 space-y-2">
 <li>
 First Four Characters (Alphabetic): The TAN's initial three
 characters represent the jurisdiction where it was issued. The
 fourth character signifies the first letter of the name of the
 entity or individual applying for the TAN.
 </li>
 <li>
 Middle Five Characters (Numeric): These central five
 characters are system-generated unique numbers.
 </li>
 <li>
 Final Character (Alphabetic): The concluding character is a
 system-generated unique letter.
 </li>
 </ul>

 <h3 className="mt-6 text-lg font-semibold">
 Who Should Obtain a TAN?
 </h3>
 <p>
 Tax Deducting Entities: Any individual or organization that
 needs to deduct Tax at source during certain transactions, such
 as salary distributions, contractor payments, or rent payments
 exceeding regulatory thresholds.
 </p>

 <h3 className="mt-6 text-lg font-semibold">
 The Importance of Securing a Company TAN Number
 </h3>
 <p>
 As outlined in Section 203A of the Income-tax Act, 1961, any
 individual or entity tasked with the responsibility of deducting
 or collecting Tax at source is required to obtain a TAN (Tax
 Deduction and Collection Account Number). Moreover, this section
 stipulates that the TAN Number be incorporated in multiple
 documents including TDS/TCS returns, challans, and certificates.
 </p>

 <h3 className="mt-6 text-lg font-semibold">
 TAN Registration Process (Step-by-step)
 </h3>
 <ol className="mt-3 list-decimal list-inside text-sm text-gray-600 space-y-2">
 <li>
 Collect required documents: PAN of applicant/company, proof of
 registered office address, passport sized photograph (if
 individual), and any legal entity registration documents.
 </li>
 <li>
 Complete Form 49B accurately with PAN and other details.
 </li>
 <li>
 Submit online through the TIN-NSDL (NSDL) portal or submit a
 physical form at a TIN Facilitation Centre (TIN-FC).
 </li>
 <li>
 Pay the applicable processing fee (varies by channel and
 provider).
 </li>
 <li>
 Receive TAN allotment — verify correctness and keep records
 for compliance.
 </li>
 </ol>

 <h3 className="mt-6 text-lg font-semibold">
 Features & Advantages
 </h3>
 <ul className="mt-3 list-disc list-inside text-sm text-gray-600 space-y-2">
 <li>Lifetime validity once issued.</li>
 <li>
 Mandatory to be quoted in all TDS/TCS related documents and
 challans.
 </li>
 <li>
 Simplifies reconciliation and tracking of tax
 deducted/collected.
 </li>
 </ul>

 <h3 className="mt-6 text-lg font-semibold">Practical Tips</h3>
 <p>
 Always double-check your PAN and registered office address
 before submitting the TAN application. Keep scanned copies of
 supporting documents ready for faster online submission. If
 applying offline, ensure the form is filled legibly to avoid
 delays.
 </p>

 {/* Large content block to increase file length and match user's request for large file */}
 <section className="mt-8">
 <h4 className="text-lg font-semibold">
 Common Issues and Resolutions
 </h4>
 <p className="mt-2 text-sm text-gray-700">
 Below are common issues applicants face while applying for TAN
 and suggested resolutions:
 </p>
 <ul className="mt-3 list-disc list-inside text-sm text-gray-600 space-y-2">
 <li>
 <strong>Mismatch in PAN details:</strong> Ensure PAN
 spelling, sequence and DOB/Date of incorporation matches
 government records. Update PAN details before applying if
 mismatch exists.
 </li>
 <li>
 <strong>Incorrect registered office address:</strong> Use
 utility bills or official rent agreements as proof and
 verify postal pin code.
 </li>
 <li>
 <strong>Delayed processing:</strong> Check the application
 status on NSDL portal with the acknowledgement number and
 contact the facilitation centre if delays exceed expected
 timelines.
 </li>
 <li>
 <strong>
 Bank refuses TDS deposit due to missing TAN:
 </strong>{" "}
 Always ensure TAN is quoted before attempting the bank
 transaction — banks may reject deposits without TAN.
 </li>
 </ul>

 <h4 className="text-lg font-semibold mt-6">Use Cases</h4>
 <p className="mt-2 text-sm text-gray-700">
 TAN is required across several scenarios, many of which are
 listed here to help you decide if you need to apply:
 </p>
 <ul className="mt-3 list-disc list-inside text-sm text-gray-600 space-y-2">
 <li>Employers deducting TDS on salary payments.</li>
 <li>
 Businesses deducting TDS on contractor payments, rent,
 commission, professional fees that are subject to TDS.
 </li>
 <li>
 Branch offices of companies making certain taxable payments
 where TAN needs to be individually quoted.
 </li>
 </ul>
 </section>
 </div>
 </article>

 {/* Documents + other registrations */}
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
 <div className="lg:col-span-7 bg-white border border-gray-200 rounded-lg shadow-sm p-6">
 <h3 className="text-lg font-semibold mb-4">
 Key Documents for TAN Application
 </h3>
 <ul className="space-y-3 text-sm text-gray-700">
 <li className="border-b border-gray-100 pb-3">Form 49B (TAN Application)</li>
 <li className="border-b border-gray-100 pb-3">
 PAN Card copy of the applicant
 </li>
 <li className="border-b border-gray-100 pb-3">
 Proof of Registered Office Address
 </li>
 <li className="border-b border-gray-100 pb-3">
 Passport size photograph (if applicable)
 </li>
 <li className="mt-4 inline-block px-3 py-2 border border-gray-200 rounded-md text-sm text-[#C15F3C] cursor-pointer hover:bg-gray-50 transition-colors">
 Load More
 </li>
 </ul>
 </div>

 <aside className="lg:col-span-5 bg-white border border-gray-200 rounded-lg shadow-sm p-6">
 <h3 className="text-lg font-semibold mb-4">Related Guides</h3>
 <ul className="space-y-3 text-sm text-[#C15F3C]">
 <li>
 Private Limited Company Registration – Process & Documents
 Required
 </li>
 <li>
 How to open a current account for a Private Limited Company?
 </li>
 <li>
 Convert a Sole Proprietorship to a Private Limited Company
 </li>
 <li>How to apply for PAN online</li>
 <li>GST registration for businesses</li>
 </ul>
 </aside>
 </div>

 {/* Extra long content block — to expand file length and provide more reference text */}
 <article className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
 <h3 className="text-lg font-semibold">
 Compliance Calendar & Notes
 </h3>
 <p className="mt-3 text-sm text-gray-700">
 The following table is a concise compliance checklist that new TAN
 holders should keep handy. Use it as a quick reminder of actions
 you may need to perform through the financial year.
 </p>

 <div className="mt-4 overflow-x-auto">
 <table className="min-w-full text-sm text-left">
 <thead>
 <tr className="text-gray-700 border-b border-gray-200">
 <th className="py-2 px-3">Task</th>
 <th className="py-2 px-3">Frequency</th>
 <th className="py-2 px-3">Relevant Form</th>
 <th className="py-2 px-3">Notes</th>
 </tr>
 </thead>
 <tbody>
 <tr className="border-b border-gray-50">
 <td className="py-2 px-3">TDS Payment</td>
 <td className="py-2 px-3">Monthly/Quarterly</td>
 <td className="py-2 px-3">Challan</td>
 <td className="py-2 px-3">
 Ensure TAN is quoted on challan
 </td>
 </tr>
 <tr className="border-b border-gray-50">
 <td className="py-2 px-3">TDS Returns</td>
 <td className="py-2 px-3">Quarterly</td>
 <td className="py-2 px-3">Form 24Q / 26Q / 27Q</td>
 <td className="py-2 px-3">
 Use TAN for filing returns & certificates
 </td>
 </tr>
 <tr>
 <td className="py-2 px-3">TDS Certificates</td>
 <td className="py-2 px-3">Annual</td>
 <td className="py-2 px-3">Form 16 / 16A</td>
 <td className="py-2 px-3">
 Issue to deductees as required
 </td>
 </tr>
 </tbody>
 </table>
 </div>
 </article>
 </section>

 {/* Right column (sidebar) */}
 <aside className="lg:col-span-4 hidden lg:block sticky top-24 self-start">
 <SidebarCart />

 <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 mb-4">
 <h4 className="font-semibold mb-3">Offers and discounts</h4>
 <div className="p-3 border rounded-md flex items-center gap-3">
 <img
 src={ASSETS.ledgers}
 alt="ledgers"
 className="h-8 w-8 object-contain"
 />
 <div className="text-sm">
 <div className="text-[#C15F3C] font-medium">
 LEDGERS - Compliance Platform
 </div>
 <div className="text-gray-500 text-xs">
 Invoicing, GST Filing, Banking and Payroll
 </div>
 </div>
 </div>
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

 <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-4">
 <h4 className="font-semibold mb-3">Popular Searches</h4>
 <div className="flex flex-wrap gap-2">
 {POPULAR_SEARCHES.slice(0, 20).map((t) => (
 <span
 key={t}
 className="text-xs px-3 py-1 border border-gray-200 rounded bg-gray-50 text-gray-700"
 >
 {t}
 </span>
 ))}
 </div>
 </div>

 {/* small content block to make sidebar informative */}
 <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 mt-4">
 <h4 className="font-semibold mb-3">Contact Advisor</h4>
 <p className="text-sm text-gray-600">
 Need help with TAN? Our advisors can assist with end-to-end filing
 and documentation.
 </p>
 <div className="mt-3">
 <button className="w-full bg-[#C15F3C] text-white py-2 rounded-md text-sm">
 Schedule a Call
 </button>
 </div>
 </div>
 </aside>
 </main>

 <DynamicPricingSection />
 <FAQAccordion category="tan-registration" />

 <Footer />
 </div>
 );
}
