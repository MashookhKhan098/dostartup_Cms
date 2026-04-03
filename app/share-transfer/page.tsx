"use client";

import React, { useState } from "react";
import { ChevronRight, ShoppingBag, Star, Plus } from "lucide-react";
import Navbar from "../components/Navbar";

const ASSETS = {
 logo: "/images/india-logo.jpg",
 hero: "/images/share-transfer-hero.jpg",
 man: "https://img.indiafilings.com/catalog/mca-compliance-simplified-india.webp",
 ledgers: "https://img.indiafilings.com/catalog/ledgers.png",
 whatsapp: "/images/whatsapp.svg",
 adRight1: "/images/company-compliance-ad.png",
 dinEkyc: "/images/din-ekyc-ad.png",
 cartIcon: "/images/cart-icon.svg",
 indiaFlag: "/images/india-flag.png",
 companyCompliance: "/images/company-compliance.png",
};

const MCA_DROPDOWN_LINKS = [
 { title: "Company Compliance", href: "/MCA/company-compliance" },
 { title: "Director Change", href: "/MCA/director-change" },
 { title: "AOA Amendment", href: "/MCA/aoa-amendment" },
 { title: "LLP Compliance", href: "/MCA/llp-compliance" },
 { title: "Remove Director", href: "/MCA/remove-director" },
 {
 title: "Authorized Capital Increase",
 href: "/authorized-capital-increase",
 },
 { title: "OPC Compliance", href: "/MCA/opc-compliance" },
 { title: "ADT-1 Filing", href: "/MCA/adt-1-filing" },
 { title: "Share Transfer", href: "/MCA/share-transfer" },
 { title: "Name Change - Company", href: "/MCA/name-change-company" },
 { title: "DPT-3 Filing", href: "/MCA/dpt-3-filing" },
 { title: "Demat of Shares", href: "/MCA/demat-of-shares" },
 { title: "Registered Office Change", href: "/MCA/registered-office-change" },
 { title: "LLP Form 11 Filing", href: "/MCA/llp-form-11-filing" },
 { title: "Winding Up - LLP", href: "/MCA/winding-up-llp" },
 { title: "DIN eKYC Filing", href: "/MCA/din-ekyc-filing" },
 { title: "Dormant Status Filing", href: "/MCA/dormant-status-filing" },
 { title: "Winding Up - Company", href: "MCA/winding-up-company" },
 { title: "DIN Reactivation", href: "/MCA/din-reactivation" },
 { title: "MOA Amendment", href: "/MCA/moa-amendment" },
 { title: "Commencement (INC-20A)", href: "/MCA/commencement-inc-20a" },
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

export default function ShareTransferPage(): React.ReactElement {
 const [openFaq, setOpenFaq] = useState<number | null>(null);
 const [gstChecked, setGstChecked] = useState(false);

 const faqItems = [
 "What is share transfer?",
 "What are the key regulations for share transfer in private companies?",
 "How are share transfer rules in private limited companies determined?",
 "What documents are required for a share transfer?",
 "Is stamp duty required for a share transfer?",
 "What is the process for executing a Share Transfer Deed (SH-4)?",
 ];

 const faqAnswers: Record<number, string> = {
 0: "Share transfer refers to the process where a shareholder transfers ownership of their shares to another person, subject to the company's AOA and statutory requirements.",
 1: "Section 56 of the Companies Act, 2013 and the Companies (Share Capital & Debentures) Rules regulate share transfers in private companies, along with the company's Articles of Association.",
 2: "Private companies follow their Articles of Association which may include pre-emptive rights and transfer restrictions. Directors often have powers to accept or refuse transfers as per AOA.",
 3: "Typical documents: Share Transfer Deed (SH-4), original share certificate, PAN of transferee, board resolution, NOC/indemnity (if required) and proof of stamp duty payment.",
 4: "Yes — the share transfer deed must be stamped as per the Indian Stamp Act; stamp duty rates vary by state and nature of transfer.",
 5: "Execute SH-4 signed by transferor and transferee, pay stamp duty, attach share certificate, submit to company for board approval and issuance of new share certificate to transferee.",
 };

 return (
 <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
 {/* Imported Navbar */}
 <Navbar />

 {/* Breadcrumb */}
 <div className="bg-gradient-to-r from-white to-slate-50 py-4">
 <div className="max-w-[1180px] mx-auto px-4 sm:px-6 text-sm text-gray-500">
 Home / MCA Services /{" "}
 <span className="text-amber-700 font-medium">Share Transfer</span>
 </div>
 </div>

 {/* Main */}
 <main className="max-w-[1180px] mx-auto px-4 sm:px-6 py-3 grid grid-cols-1 lg:grid-cols-12 gap-8">
 {/* Left column */}
 <section className="lg:col-span-8 space-y-6">
 {/* Top card */}
 <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 sm:p-6 flex flex-col md:flex-row gap-6">
 {/* Left image card */}
 <div className="md:w-1/3 flex-shrink-0">
 <div className="rounded-lg overflow-hidden">
 <div className="bg-gradient-to-r from-amber-700 to-amber-800 rounded-t-lg p-4 text-white text-center">
 <h2 className="text-xl sm:text-2xl font-bold ">
 Share Transfer
 </h2>
 <div className="text-xs mt-1 opacity-90">
 Share transfer procedures for private companies
 </div>
 </div>

 <div className="bg-white px-4 py-6 flex justify-center">
 <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden bg-white shadow-md flex items-center justify-center -mt-4">
 <img
 src={ASSETS.man}
 alt="share transfer"
 className="w-full h-full object-cover"
 />
 </div>
 </div>
 </div>

 <ul className="mt-4 text-xs sm:text-sm space-y-2 text-gray-600">
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Share Transfer Deed (SH-4)</li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Original Share Certificate</li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Board Resolution for Transfer</li>
 <li className="text-amber-700 underline hover:text-amber-800 cursor-pointer font-medium">Load More</li>
 </ul>
 </div>

 {/* Right content */}
 <div className="md:w-2/3 flex-1">
 <div className="flex flex-col sm:flex-row justify-between gap-4">
 <div>
 <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 mb-2">
 <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
 <span className="text-xs font-medium text-amber-700">MCA COMPLIANCE</span>
 </div>
 <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
 Share Transfer
 </h2>
 <div className="flex items-center gap-3 mt-2">
 <div className="flex items-center gap-1">
 {[...Array(5)].map((_, i) => (
 <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />
 ))}
 </div>
 <span className="text-xs text-slate-500">(231)</span>
 </div>
 </div>

 <p className="text-xs sm:text-sm text-gray-600 max-w-md">
 Share transfer from one person to another (or many-to-one /
 one-to-many) with end-to-end support — deeds, stamping, board
 approvals, and new share certificate issuance.
 </p>
 </div>

 {/* Offer box */}
 <div className="relative mt-6">
 <div className="absolute -top-3 left-6 bg-white px-2 rounded-md text-xs text-amber-700 border border-amber-200">
 2 Exclusive Offers
 </div>
 <div className="border-2 border-dashed rounded-md border-amber-200 p-4 bg-amber-50/30">
 <div className="font-semibold text-slate-900">Basic</div>
 <ul className="mt-2 text-xs sm:text-sm text-gray-600">
 <li className="flex items-center gap-2">
 <ChevronRight size={14} className="text-amber-600" /> Application Filing in MCA
 </li>
 <li className="flex items-center gap-2">
 <ChevronRight size={14} className="text-amber-600" /> Provide Updated MOA & Updated AOA
 </li>
 </ul>
 <div className="mt-3">
 <button className="bg-white border-2 border-amber-600 text-amber-700 px-4 py-1.5 rounded hover:bg-amber-50 transition-colors text-xs sm:text-sm font-medium">
 ADD TO CART
 </button>
 </div>
 </div>
 </div>

 <div className="mt-4 border-t pt-4 text-xs sm:text-sm flex justify-between items-center text-slate-600">
 <a className="text-amber-700 underline hover:text-amber-800 cursor-pointer font-medium">
 Terms and conditions
 </a>
 <a className="text-amber-700 underline hover:text-amber-800 cursor-pointer font-medium">Refer a Friend</a>
 </div>

 <div className="mt-6">
 <h4 className="font-semibold mb-2 text-sm sm:text-base">Offers and discounts</h4>
 <div className="p-3 border border-gray-200 rounded-lg hover:border-amber-200 transition-colors">
 <div className="flex items-center gap-3">
 <img
 src={ASSETS.ledgers}
 alt="ledgers"
 className="h-8 w-8 object-contain"
 />
 <div className="text-xs sm:text-sm">
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
 <article className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 sm:p-6">
 <h1 className="text-xl sm:text-2xl font-semibold text-center">
 Private Limited Company Share Transfer
 </h1>

 <div className="mt-4 text-sm sm:text-[15px] leading-7 text-gray-700">
 <p>
 The Share Transfer Procedure in a Private Limited Company is a
 structured process that facilitates transferring ownership of
 shares from one individual to another. Shares represent portions
 of ownership within a company, and transfers are regulated by
 the Companies Act 2013 and the company's Articles of Association
 (AOA).
 </p>

 <h3 className="mt-6 text-base sm:text-lg font-semibold text-amber-800">
 Meaning of Share Transfer
 </h3>
 <p className="mt-2">
 Share transfer refers to the process where a shareholder
 voluntarily transfers their ownership rights — and associated
 obligations — to another person. Transfers follow the terms in
 the company's AOA and central laws.
 </p>

 <h3 className="mt-6 text-base sm:text-lg font-semibold text-amber-800">
 Key Regulations for Transfer of Shares
 </h3>
 <p className="mt-2">
 The transfer of shares in a private company is governed by
 Section 56(1) & (3) of the Companies Act, 2013, and the
 Companies (Share Capital and Debentures) Rules, 2014, along with
 the company's AOA.
 </p>

 <h3 className="mt-6 text-base sm:text-lg font-semibold text-amber-800">
 Documents Required for Share Transfer
 </h3>
 <ul className="mt-3 list-disc list-inside text-xs sm:text-sm text-gray-600 space-y-2">
 <li className="hover:text-amber-700 cursor-pointer transition-colors">
 Share Transfer Deed: SH-4 signed by transferor & transferee
 </li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Original Share Certificate</li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">PAN Card copy of transferee</li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Board Resolution approving transfer</li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Stamp duty payment evidence</li>
 </ul>

 <h3 className="mt-6 text-base sm:text-lg font-semibold text-amber-800">
 Share Transfer Process (Summary)
 </h3>
 <ol className="mt-3 list-decimal list-inside text-xs sm:text-sm text-gray-600 space-y-2">
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Review AOA for restrictions & pre-emptive rights.</li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">
 Transferor issues notice to directors and initiates valuation
 (if required).
 </li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">
 Execute SH-4, pay stamp duty and attach share certificate.
 </li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Submit documents to company & obtain board approval.</li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Company issues new share certificate to transferee.</li>
 </ol>

 <h3 className="mt-6 text-base sm:text-lg font-semibold text-amber-800">
 How We Help
 </h3>
 <ul className="mt-3 text-xs sm:text-sm text-gray-600 space-y-2">
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Document preparation and stamping guidance.</li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Board resolution & meeting support.</li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">
 Processing SH-4 and follow up until share certificate issue.
 </li>
 </ul>
 </div>
 </article>

 {/* Documents + other registrations */}
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
 <div className="lg:col-span-7 bg-white rounded-lg shadow-lg border border-gray-200 p-4 sm:p-6">
 <h3 className="text-base sm:text-lg font-semibold mb-4">
 Key Documents for Share Transfer
 </h3>
 <ul className="space-y-3 text-xs sm:text-sm text-gray-700">
 <li className="border-b pb-3 hover:text-amber-700 cursor-pointer transition-colors">
 Share Transfer Deed (Form SH-4)
 </li>
 <li className="border-b pb-3 hover:text-amber-700 cursor-pointer transition-colors">Original Share Certificate</li>
 <li className="border-b pb-3 hover:text-amber-700 cursor-pointer transition-colors">PAN Card of Transferee</li>
 <li className="mt-4 inline-block px-3 py-2 border-2 border-amber-600 rounded-md text-xs sm:text-sm text-amber-700 hover:bg-amber-50 cursor-pointer transition-colors font-medium">
 Load More
 </li>
 </ul>
 </div>

 <aside className="lg:col-span-5 bg-white rounded-lg shadow-lg border border-gray-200 p-4 sm:p-6">
 <h3 className="text-base sm:text-lg font-semibold mb-4">
 Documents Required for Other Registrations
 </h3>
 <ul className="space-y-3 text-xs sm:text-sm">
 {[
 ["Documents Required for LLP Registration", 8],
 ["Documents Required for Proprietorship Registration", 2],
 ["Documents Required for Company Registration", 2],
 ["Documents Required for Trademark Registration", 7],
 ["Documents Required for GST Registration", 10],
 ].map(([label, count]) => (
 <li
 key={label as string}
 className="flex justify-between items-center border-b pb-2 hover:text-amber-700 cursor-pointer transition-colors"
 >
 <span>{label}</span>
 <span className="bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-full w-6 h-6 inline-flex items-center justify-center text-xs">
 {count}
 </span>
 </li>
 ))}
 </ul>
 </aside>
 </div>

 {/* FAQ */}
 <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 sm:p-6">
 <h3 className="text-lg sm:text-xl font-semibold mb-4">
 FAQ's on Share Transfer
 </h3>
 <div className="space-y-0">
 {faqItems.map((q, i) => (
 <div key={i} className="border-b last:border-b-0">
 <button
 className="w-full text-left py-4 flex justify-between items-center text-xs sm:text-sm"
 onClick={() => setOpenFaq(openFaq === i ? null : i)}
 >
 <span className="text-slate-800 hover:text-amber-700 transition-colors">{q}</span>
 <span className="text-amber-700 flex items-center gap-2">
 {openFaq === i ? "−" : <Plus size={14} />}
 </span>
 </button>
 {openFaq === i && (
 <div className="px-2 pb-4 text-xs sm:text-sm text-gray-600">
 {faqAnswers[i]}
 </div>
 )}
 </div>
 ))}
 </div>

 <div className="mt-4">
 <button className="px-4 py-2 border-2 border-amber-600 rounded-md text-xs sm:text-sm text-amber-700 hover:bg-amber-50 transition-colors font-medium">
 Load More
 </button>
 </div>
 </div>
 </section>

 {/* Right column (sidebar) */}
 <aside className="lg:col-span-4 hidden lg:block">
 <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 mb-6 sticky top-28">
 <div className="text-center text-gray-600">
 <img
 src={ASSETS.cartIcon}
 alt="cart"
 className="mx-auto h-12 w-auto mb-3"
 />
 <h3 className="font-semibold">Your cart is empty</h3>
 <p className="text-sm mt-2">
 Browse our services and add some services in cart!
 </p>
 </div>

 <div className="mt-6 text-center">
 <div className="text-sm text-gray-500">
 Existing User?{" "}
 <a className="text-amber-700 underline hover:text-amber-800 font-medium cursor-pointer">Login</a>
 </div>
 </div>

 <form
 className="mt-4 space-y-3"
 onSubmit={(e) => e.preventDefault()}
 >
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

 <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 mb-4">
 <h4 className="font-semibold mb-3">Related Guides</h4>
 <ul className="text-sm space-y-2">
 <li className="text-amber-700 hover:text-amber-800 cursor-pointer hover:underline">How to Transfer Shares of Private Limited Company</li>
 <li className="text-amber-700 hover:text-amber-800 cursor-pointer hover:underline">Private Limited Company Registration in India</li>
 <li className="text-amber-700 hover:text-amber-800 cursor-pointer hover:underline">Articles of Association (AOA)</li>
 </ul>
 </div>

 <div className="rounded-lg overflow-hidden shadow-lg mb-4">
 <img
 src={ASSETS.adRight1}
 alt="company compliance"
 className="w-full h-56 object-cover"
 />
 </div>

 <div className="rounded-lg overflow-hidden shadow-lg mb-6">
 <img
 src={ASSETS.dinEkyc}
 alt="din ekyc"
 className="w-full h-56 object-cover"
 />
 </div>

 <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4">
 <h4 className="font-semibold mb-3">Popular Searches</h4>
 <div className="flex flex-wrap gap-2">
 {POPULAR_SEARCHES.slice(0, 14).map((t) => (
 <span
 key={t}
 className="text-xs px-3 py-1 border border-gray-200 rounded bg-white text-gray-700 hover:border-amber-300 hover:text-amber-700 cursor-pointer transition-colors"
 >
 {t}
 </span>
 ))}
 </div>
 </div>
 </aside>
 </main>

 {/* Footer */}
 <footer className="bg-white mt-12 py-3 border-t">
 <div className="max-w-[1180px] mx-auto px-4 sm:px-6 text-sm text-gray-600">
 <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
 <div>
 <h5 className="font-semibold text-gray-800 mb-2">Company</h5>
 <a className="block hover:text-amber-700 cursor-pointer transition-colors">About Us</a>
 <a className="block hover:text-amber-700 cursor-pointer transition-colors">Careers</a>
 <a className="block hover:text-amber-700 cursor-pointer transition-colors">Contact Us</a>
 </div>
 <div>
 <h5 className="font-semibold text-gray-800 mb-2">Platforms</h5>
 <a className="block hover:text-amber-700 cursor-pointer transition-colors">Business Search</a>
 <a className="block hover:text-amber-700 cursor-pointer transition-colors">Trademark Search</a>
 <a className="block hover:text-amber-700 cursor-pointer transition-colors">Filings.AE for UAE</a>
 </div>
 <div>
 <h5 className="font-semibold text-gray-800 mb-2">Usage</h5>
 <a className="block hover:text-amber-700 cursor-pointer transition-colors">Terms & Conditions</a>
 <a className="block hover:text-amber-700 cursor-pointer transition-colors">Privacy Policy</a>
 <a className="block hover:text-amber-700 cursor-pointer transition-colors">Refund Policy</a>
 </div>
 <div>
 <h5 className="font-semibold text-gray-800 mb-2">Policies</h5>
 <a className="block hover:text-amber-700 cursor-pointer transition-colors">Confidentiality Policy</a>
 <a className="block hover:text-amber-700 cursor-pointer transition-colors">Disclaimer Policy</a>
 <a className="block hover:text-amber-700 cursor-pointer transition-colors">Reviews</a>
 </div>
 </div>

 <div className="text-center text-gray-500 mt-6">
 © {new Date().getFullYear()} All rights reserved.
 </div>
 </div>
 </footer>

 {/* WhatsApp CTA */}
 <div className="fixed right-4 sm:right-6 bottom-4 sm:bottom-6 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-4 py-3 rounded-full shadow-2xl flex items-center gap-3 z-50 hover:from-amber-700 hover:to-amber-800 transition-all cursor-pointer">
 <img src={ASSETS.whatsapp} alt="wa" className="w-5 h-5" />
 <span className="font-semibold text-xs sm:text-sm">Live Chat with Experts</span>
 </div>
 </div>
 );
}