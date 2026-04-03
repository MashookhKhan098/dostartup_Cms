"use client";

import React, { useState } from "react";
import { ChevronRight, ShoppingBag, Star, Plus } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


interface ADT1FilingMergedPageProps {
 // Add any props if needed
}

const ASSETS = {
 logo: "/images/india-logo.jpg",
 hero: "/images/adt1-hero.jpg",
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

const ADT1FilingMergedPage: React.FC<ADT1FilingMergedPageProps> = () => {
 const [openFaq, setOpenFaq] = useState<number | null>(null);
 const [gstChecked, setGstChecked] = useState(false);

 const faqItems = [
 "What is Form ADT-1?",
 "Who is responsible for filing Form ADT-1?",
 "Is Form ADT-1 required for the appointment of the first auditor?",
 "When should Form ADT-1 be filed?",
 "What is the penalty for late filing of Form ADT-1?",
 "What are the documents required for filing Form ADT-1?",
 ];

 const faqAnswers: Record<number, string> = {
 0: "Form ADT-1 is a statutory return filed by companies with the Registrar of Companies (ROC) to report the appointment of an auditor.",
 1: "The company is responsible for filing Form ADT-1 when an auditor is appointed or reappointed.",
 2: "Yes — ADT-1 is mandatory for first auditor appointments under the updated rules (check latest MCA rules for exemptions).",
 3: "ADT-1 must be filed within 15 days from the date of the auditor's appointment.",
 4: "Late filing attracts additional fees (multiples of normal fee based on delay).",
 5: "Typical attachments: Board resolution, consent of auditor, auditor certificate under Section 141, intimation copy to auditor.",
 };

 return (
 <div className="min-h-screen bg-[#F4F3EE] font-sans text-[#2F2E2B]">
 {/* Navbar - Imported */}
 <Navbar />


 {/* Main */}
 <main className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col lg:flex-row gap-8">
 {/* Left column */}
 <section className="flex-1 space-y-6">
 {/* Top card */}
 <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col md:flex-row gap-6">
 {/* Left image card */}
 <div className="md:w-1/3 flex-shrink-0">
 <div className="rounded-xl overflow-hidden">
 <div className="bg-[#C15F3C] rounded-t-xl p-4 text-white text-center">
 <h2 className="text-2xl font-bold ">
 ADT-1 FILING
 </h2>
 <div className="text-xs mt-1 opacity-90">
 ADT - 1: Notifies first auditor appointment to ROC
 </div>
 </div>

 <div className="bg-white px-4 py-6 flex justify-center">
 <div className="w-44 h-44 rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center -mt-4">
 <img
 src={ASSETS.man}
 alt="ADT hero"
 className="w-full h-full object-cover"
 />
 </div>
 </div>
 </div>

 <ul className="mt-4 text-sm space-y-2 text-[#6F6B63]">
 <li className="hover:text-[#C15F3C] cursor-pointer transition-colors">Consent for Appointment as Statutory Auditor</li>
 <li className="hover:text-[#C15F3C] cursor-pointer transition-colors">Appointment as Statutory Auditor</li>
 <li className="hover:text-[#C15F3C] cursor-pointer transition-colors">Board Resolution for Auditor Appointment</li>
 <li className="text-[#C15F3C] underline cursor-pointer hover:text-[#A94E30]">Load More</li>
 </ul>
 </div>

 {/* Right content */}
 <div className="md:w-2/3 flex-1">
 <div className="flex flex-col sm:flex-row justify-between gap-4">
 <div>
 <div className="inline-flex items-center gap-2 bg-[#F4F3EE] border border-[#E5E2DA] rounded-full px-3 py-1 mb-2">
 <div className="w-2 h-2 bg-[#C15F3C] rounded-full" />
 <span className="text-xs font-medium text-[#C15F3C]">MCA COMPLIANCE</span>
 </div>
 <h2 className="text-lg font-semibold text-[#2F2E2B]">
 ADT-1 Filing
 </h2>
 <div className="flex items-center gap-3 mt-2">
 <div className="flex items-center gap-1">
 {[...Array(5)].map((_, i) => (
 <Star key={i} size={14} className="fill-[#C15F3C] text-[#C15F3C]" />
 ))}
 </div>
 <span className="text-xs text-[#B1ADA1]">(2709)</span>
 </div>
 </div>

 <p className="text-sm text-[#6F6B63] max-w-md">
 Auditor appointment services include help with discovering,
 engaging and appointing of Auditor for newly incorporated
 Private Limited Company (Audit fee will be extra based on the
 nature and volume of transaction).
 </p>
 </div>

 {/* Offer box */}
 <div className="relative mt-6">
 <div className="absolute -top-3 left-6 bg-white px-2 rounded-md text-xs text-[#C15F3C] border border-[#E5E2DA]">
 1 Exclusive Offers
 </div>
 <div className="border-2 border-dashed rounded-xl border-[#E5E2DA] p-4 bg-[#F4F3EE]">
 <div className="font-semibold text-[#2F2E2B]">Basic</div>
 <ul className="mt-2 text-sm text-[#6F6B63]">
 <li className="flex items-center gap-2">
 <ChevronRight size={14} className="text-[#C15F3C]" /> Filed Form ADT-1
 </li>
 <li className="flex items-center gap-2">
 <ChevronRight size={14} className="text-[#C15F3C]" /> Acknowledgement Copy
 </li>
 </ul>
 <div className="mt-3">
 <button className="bg-white border-2 border-[#C15F3C] text-[#C15F3C] px-4 py-1.5 rounded-lg hover:bg-[#C15F3C] hover:text-white transition text-sm font-medium">
 ADD TO CART
 </button>
 </div>
 </div>
 </div>

 <div className="mt-4 border-t border-[#E5E2DA] pt-4 text-sm flex justify-between items-center text-[#6F6B63]">
 <a className="text-[#C15F3C] underline hover:text-[#A94E30] cursor-pointer">
 Terms and conditions
 </a>
 <a className="text-[#C15F3C] underline hover:text-[#A94E30] cursor-pointer">Refer a Friend</a>
 </div>

 <div className="mt-6">
 <h4 className="font-semibold mb-2 text-[#2F2E2B]">Offers and discounts</h4>
 <div className="p-3 border border-[#E5E2DA] rounded-xl hover:border-[#C15F3C] transition-colors">
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
 <div className="text-[#B1ADA1] text-xs">
 Invoicing, GST Filing, Banking and Payroll
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>

 {/* Article */}
 <article className="bg-white rounded-2xl shadow-sm p-6">
 <h1 className="text-2xl font-semibold text-center text-[#2F2E2B]">
 Form ADT-1 Filing for Auditor Appointment
 </h1>

 <div className="mt-4 text-[15px] leading-7 text-[#6F6B63]">
 <p>
 Appointing an auditor is a mandatory compliance step for every
 company, and filing Form ADT-1 with the Registrar of Companies
 (ROC) is a legal requirement under the Companies Act, 2013.
 Whether you're appointing your first auditor after incorporation
 or reappointing one at your Annual General Meeting (AGM), timely
 and accurate filing is essential to avoid penalties.
 </p>

 <h3 className="mt-6 text-lg font-semibold text-[#2F2E2B]">
 What is the ADT 1 Form?
 </h3>
 <p className="mt-2">
 Form ADT 1 is a statutory return filed by companies with the
 Registrar of Companies (ROC) to report the appointment of an
 auditor, as required under Section 139 of the Companies Act,
 2013. It is used to formally notify the ROC when a company
 appoints its first auditor after incorporation or
 appoints/reappoints an auditor at the Annual General Meeting
 (AGM).
 </p>

 <h3 className="mt-6 text-lg font-semibold text-[#2F2E2B]">
 Requirements for Filing ADT 1 Form
 </h3>
 <p className="mt-2">
 Filing ADT 1 Form is mandatory for all companies, including
 public, private, listed, unlisted, and one-person companies
 (OPCs), upon the appointment of an auditor, whether for the
 first time or at a subsequent Annual General Meeting (AGM). The
 form must be submitted to the Registrar of Companies (ROC)
 within 15 days from the date of the auditor's appointment.
 </p>

 <h3 className="mt-6 text-lg font-semibold text-[#2F2E2B]">ADT 1 Late Fees</h3>
 <div className="mt-4 overflow-auto">
 <table className="w-full text-sm table-auto border-collapse">
 <thead>
 <tr className="bg-[#F4F3EE]">
 <th className="p-5 border border-[#E5E2DA] text-left">Sl. No.</th>
 <th className="p-5 border border-[#E5E2DA] text-left">
 Delay in Filing (Number of Days)
 </th>
 <th className="p-5 border border-[#E5E2DA] text-left">Penalty</th>
 </tr>
 </thead>
 <tbody>
 {[
 [1, "Up to 30 days", "2 times the normal fee"],
 [
 2,
 "More than 30 days and up to 60 days",
 "4 times the normal fee",
 ],
 [
 3,
 "More than 60 days and up to 90 days",
 "6 times the normal fee",
 ],
 [
 4,
 "More than 90 days and up to 180 days",
 "10 times the normal fee",
 ],
 [5, "More than 180 days", "12 times the normal fee"],
 ].map((row) => (
 <tr
 key={row[0] as number}
 className="odd:bg-white even:bg-[#F4F3EE]"
 >
 <td className="p-5 border border-[#E5E2DA] text-center">{row[0]}</td>
 <td className="p-5 border border-[#E5E2DA]">{row[1]}</td>
 <td className="p-5 border border-[#E5E2DA]">{row[2]}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <h3 className="mt-6 text-lg font-semibold text-[#2F2E2B]">
 How to File Form ADT 1 (E-Filing Process)
 </h3>
 <ol className="mt-3 list-decimal list-inside text-sm text-[#6F6B63] space-y-2">
 <li>Download the E-Form ADT 1</li>
 <li>Fill in the required details</li>
 <li>Attach supporting documents</li>
 <li>Verify and submit the form</li>
 </ol>

 <h3 className="mt-6 text-lg font-semibold text-[#2F2E2B]">
 How We Can Assist with Filing Form ADT-1
 </h3>
 <ul className="mt-3 text-sm text-[#6F6B63] space-y-2">
 <li>
 Document Preparation: We help prepare all the necessary
 documents required for Form ADT-1, including board
 resolutions, auditor consents, and declarations.
 </li>
 <li>
 Expert Review: Our professionals thoroughly review your
 documentation to ensure accuracy, completeness, and adherence
 to statutory requirements.
 </li>
 <li>
 End-to-End Filing Support: We handles the complete
 filing process on your behalf, ensuring timely and error-free
 submission of Form ADT-1 through the MCA portal.
 </li>
 </ul>
 </div>
 </article>

 {/* Documents + other registrations */}
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
 <div className="lg:col-span-7 bg-white rounded-2xl shadow-sm p-6">
 <h3 className="text-lg font-semibold mb-4 text-[#2F2E2B]">
 Documents Required For ADT-1 Filing
 </h3>
 <ul className="space-y-3 text-sm text-[#6F6B63]">
 <li className="border-b border-[#E5E2DA] pb-3 hover:text-[#C15F3C] cursor-pointer transition-colors">
 Consent for Appointment as Statutory Auditor
 </li>
 <li className="border-b border-[#E5E2DA] pb-3 hover:text-[#C15F3C] cursor-pointer transition-colors">
 Appointment as Statutory Auditor
 </li>
 <li className="border-b border-[#E5E2DA] pb-3 hover:text-[#C15F3C] cursor-pointer transition-colors">
 Board Resolution for Auditor Appointment
 </li>
 <li className="mt-4 inline-block px-3 py-2 border-2 border-[#C15F3C] rounded-lg text-sm text-[#C15F3C] hover:bg-[#C15F3C] hover:text-white cursor-pointer transition-colors">
 Load More
 </li>
 </ul>
 </div>

 <aside className="lg:col-span-5 bg-white rounded-2xl shadow-sm p-6">
 <h3 className="text-lg font-semibold mb-4 text-[#2F2E2B]">
 Documents Required for Other Registrations
 </h3>
 <ul className="space-y-3 text-sm">
 {[
 ["Documents Required for LLP Registration", 8],
 ["Documents Required for Proprietorship Registration", 2],
 ["Documents Required for Company Registration", 2],
 ["Documents Required for Trademark Registration", 7],
 ["Documents Required for GST Registration", 10],
 ].map(([label, count]) => (
 <li
 key={label as string}
 className="flex justify-between items-center border-b border-[#E5E2DA] pb-2 hover:text-[#C15F3C] cursor-pointer transition-colors"
 >
 <span className="text-[#6F6B63]">{label}</span>
 <span className="bg-[#C15F3C] text-white rounded-full w-6 h-6 inline-flex items-center justify-center text-xs">
 {count}
 </span>
 </li>
 ))}
 </ul>
 </aside>
 </div>

 {/* FAQ */}
 <div className="bg-white rounded-2xl shadow-sm p-6">
 <h3 className="text-xl font-semibold mb-4 text-[#2F2E2B]">
 FAQ's on ADT-1 Filing
 </h3>
 <div className="space-y-0">
 {faqItems.map((q, i) => (
 <div key={i} className="border-b border-[#E5E2DA] last:border-b-0">
 <button
 className="w-full text-left py-4 flex justify-between items-center text-sm"
 onClick={() => setOpenFaq(openFaq === i ? null : i)}
 >
 <span className="text-[#2F2E2B] font-medium">{q}</span>
 <span className="text-[#C15F3C] flex items-center gap-2">
 {openFaq === i ? "−" : <Plus size={14} />}
 </span>
 </button>
 {openFaq === i && (
 <div className="px-2 pb-4 text-sm text-[#6F6B63]">
 {faqAnswers[i]}
 </div>
 )}
 </div>
 ))}
 </div>

 <div className="mt-4">
 <button className="px-4 py-2 border-2 border-[#C15F3C] text-[#C15F3C] rounded-lg text-sm hover:bg-[#C15F3C] hover:text-white transition-colors font-medium">
 Load More
 </button>
 </div>
 </div>

 {/* Trust Badges */}
 <div className="mt-2 pb-0">
 <div className="flex items-center justify-center gap-4 flex-wrap">
 {[...Array(5)].map((_, i) => (
 <Star key={i} size={16} className="fill-[#C15F3C] text-[#C15F3C]" />
 ))}
 <span className="text-sm text-[#6F6B63]">Trusted by 10,000+ Businesses</span>
 </div>
 </div>
 </section>

 {/* Right column (sidebar) */}
 <aside className="lg:w-96 space-y-6">
 <div className="bg-white rounded-2xl shadow-sm p-6 top-28">
 <div className="text-center text-[#6F6B63]">
 <img
 src={"/adt1_filing.webp"}
 alt="cart"
 className="mx-auto h-12 w-auto mb-3"
 />
 <h3 className="font-semibold text-[#2F2E2B]">Your cart is empty</h3>
 <p className="text-sm mt-2 text-[#B1ADA1]">
 Browse our services and add some services in cart!
 </p>
 </div>

 <div className="mt-6 text-center">
 <div className="text-sm text-[#6F6B63]">
 Existing User?{" "}
 <a className="text-[#C15F3C] underline hover:text-[#A94E30] font-medium cursor-pointer">Login</a>
 </div>
 </div>

 <form
 className="mt-4 space-y-3"
 onSubmit={(e) => e.preventDefault()}
 >
 <input
 className="w-full bg-[#F4F3EE] border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm placeholder-[#B1ADA1] focus:outline-none focus:ring-1 focus:ring-[#C15F3C]"
 placeholder="Name"
 />
 <input
 className="w-full bg-[#F4F3EE] border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm placeholder-[#B1ADA1] focus:outline-none focus:ring-1 focus:ring-[#C15F3C]"
 placeholder="Email"
 />
 <div className="flex gap-2">
 <div className="flex items-center gap-2 border border-[#E5E2DA] rounded-lg px-3 bg-[#F4F3EE]">
 <img src={ASSETS.indiaFlag} alt="flag" className="h-4" />
 <span className="text-sm text-[#2F2E2B]">+91</span>
 </div>
 <input
 className="flex-1 bg-[#F4F3EE] border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm placeholder-[#B1ADA1] focus:outline-none focus:ring-1 focus:ring-[#C15F3C]"
 placeholder="Phone"
 />
 </div>

 <label className="flex items-center gap-2 text-sm text-[#6F6B63]">
 <input
 type="checkbox"
 checked={gstChecked}
 onChange={() => setGstChecked((s) => !s)}
 className="w-4 h-4 accent-[#C15F3C]"
 />
 <span>Enter GSTIN to get 18% GST Credit</span>
 </label>

 {gstChecked && (
 <input
 className="w-full bg-[#F4F3EE] border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm placeholder-[#B1ADA1] focus:outline-none focus:ring-1 focus:ring-[#C15F3C]"
 placeholder="GSTIN"
 />
 )}

 <button className="w-full bg-[#C15F3C] text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-[#A94E30] transition shadow-md">
 <ShoppingBag size={16} /> Get Started
 </button>

 <div className="flex items-center justify-center gap-1.5 text-xs text-[#B1ADA1] pt-1">
 <svg className="w-3.5 h-3.5 text-[#C15F3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
 </svg>
 <span>Secure · No spam · Instant confirmation</span>
 </div>
 </form>
 </div>

 <div className="bg-white rounded-2xl shadow-sm p-4">
 <h4 className="font-semibold mb-3 text-[#2F2E2B]">Related Guides</h4>
 <ul className="text-sm space-y-2">
 <li className="text-[#C15F3C] hover:text-[#A94E30] cursor-pointer hover:underline">Form-ADT-1</li>
 <li className="text-[#C15F3C] hover:text-[#A94E30] cursor-pointer hover:underline">
 MCA Relaxes Levy of Additional Fee in the Filing of certain forms under companies act
 </li>
 <li className="text-[#C15F3C] hover:text-[#A94E30] cursor-pointer hover:underline">Exemption for Form Adt 1</li>
 </ul>
 </div>

 <div className="rounded-2xl overflow-hidden shadow-sm">
 <img
 src={ASSETS.adRight1}
 alt="company compliance"
 className="w-full h-56 object-cover"
 />
 </div>

 <div className="rounded-2xl overflow-hidden shadow-sm">
 <img
 src={ASSETS.dinEkyc}
 alt="din ekyc"
 className="w-full h-56 object-cover"
 />
 </div>

 <div className="bg-white rounded-2xl p-4">
 <h4 className="font-semibold mb-3 text-[#2F2E2B]">Popular Searches</h4>
 <div className="flex flex-wrap gap-2">
 {POPULAR_SEARCHES.slice(0, 14).map((t) => (
 <span
 key={t}
 className="text-xs px-3 py-1 border border-[#E5E2DA] rounded-lg bg-white text-[#6F6B63] hover:border-[#C15F3C] hover:text-[#C15F3C] cursor-pointer transition-colors"
 >
 {t}
 </span>
 ))}
 </div>
 </div>
 </aside>
 </main>

 {/* WhatsApp CTA */}
 <div className="fixed right-6 bottom-6 bg-[#C15F3C] text-white px-4 py-3 rounded-full shadow-2xl flex items-center gap-3 z-50 hover:bg-[#A94E30] transition-all cursor-pointer">
 <img src={ASSETS.whatsapp} alt="wa" className="w-5 h-5" />
 <span className="font-semibold text-sm">Live Chat with Experts</span>
 </div>
 <Footer />

 </div>

 );
};

export default ADT1FilingMergedPage;