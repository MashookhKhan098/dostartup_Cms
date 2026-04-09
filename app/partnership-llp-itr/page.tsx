"use client";
import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import SidebarCart from "../components/SidebarCart";
import Footer from "../components/Footer";

import React, { useState } from "react";
import {
 ChevronDown,
 ShoppingBag,
 Plus,
 Check,
 Search,
 ChevronRight,
} from "lucide-react";

/**
 * File: app/business-tax-filing/page.tsx
 * Updated: content replaced with Partnership / ITR-3 / ITR-5 text per user's request.
 * Put images in /public/images/ with the filenames used in ASSETS if you want visuals.
 */

const ASSETS = {
 logo: "/images/india-logo.jpg",
 heroBusiness: "/images/hero.png",
 ledgersBadge: "/images/ledgers-badge.png",
 whatsapp: "/images/whatsapp.png",
 adRight1: "/images/business-ad-right.png",
 itrAd1: "/images/business-itr-ad.png",
 cartIcon: "/images/cart.png",
 indiaFlag: "/images/india-flag.png",
 phoneMock: "/images/remove.png",
 docsImg: "/images/business-docs.png",
 stepsImg: "/images/business-steps.png",
 formsImg: "/images/business-forms.png",
 dueDatesImg: "/images/business-due-dates.png",
 docsRequiredImg: "/images/business-docs-required.png",
 moreImg: "/images/business-more.png",
 more2Img: "/images/business-more2.png",
};

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

const INCOME_TAX_DROPDOWN_LINKS = [
 { title: "Income Tax E-Filing", href: "income-tax/e-filing" },
 { title: "Business Tax Filing", href: "income-tax/business-tax-filing" },
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

export default function BusinessTaxFilingPage(): React.ReactElement {
 const [faqOpen, setFaqOpen] = useState<number | null>(null);
 const [gstChecked, setGstChecked] = useState(false);
 const [searchQuery, setSearchQuery] = useState("");
 const [showIncomeDropdown, setShowIncomeDropdown] = useState(false);

 // FAQ headings taken from user's supplied text (short list)
 const faqQuestions = [
 "What is the ITR 3 form?",
 "Who should file the ITR-3 form?",
 "Who is not eligible to file the ITR-3 form?",
 "What is ITR 3 due date for filing it for non-audit cases in the assessment year 2023-24?",
 "What are the penalties for late filing of the ITR-3 form in India?",
 "What documents are required to file the ITR-3 form?",
 "How many sections are there in the ITR-3 form?",
 "What information is required in the 'Income Details' section of the ITR-3 form?",
 ];

 const faqAnswers: Record<number, string> = {
 0: "The ITR 3 form is used by individuals/HUFs with income from business or profession. It's a detailed form for reporting business/professional income and related details.",
 1: "Individuals or Hindu Undivided Families (HUFs) who have income from a business or profession and meet the applicability criteria (including directors, proprietors, etc.) should use ITR-3.",
 2: "An individual/HUF who is a partner of a partnership firm engaged in business or profession should not file ITR-3; they typically must follow the filing route applicable to partners and the firm (ITR-5 for firms/LLPs).",
 3: "For Assessment Year 2023-24: Non-audit cases: July 31, 2023. Audit cases: October 31, 2023. (Always check official announcements for changes.)",
 4: "Late filing penalties may include a fee of up to ₹5,000 if filed after the due date but before Dec 31 of the assessment year, and up to ₹10,000 if filed after Dec 31. For taxpayers with total income < ₹5 lakh, the fee may be capped at ₹1,000.",
 5: "Common documents: PAN, Aadhaar, bank details, Form 16 (if applicable), investment proofs, books of accounts (if business/professional income), and other supporting documents.",
 6: "ITR-3 is structured into sections such as General Information, Income Details, Deductions & Taxes Paid, TDS/TCS Credit, and Verification/Declaration.",
 7: "Income Details includes disclosure of salary, pension, income from house property, business/professional income, capital gains, and other income — along with tax computation and taxable total.",
 };

 return (
 <div className="min-h-screen bg-[#F4F3EE] text-gray-800 font-sans">
 <Navbar />

 {/* Breadcrumb & Hero */}
 <div className="bg-gradient-to-r from-white to-slate-50 py-6">
 <div className="max-w-[1180px] mx-auto px-6">
 <div className="text-sm text-gray-500 mb-4">
 DoStartup / Income Tax /{" "}
 <span className="text-[#C15F3C] font-medium">
 Partnership / LLP Tax Filing
 </span>
 </div>

 <section
 aria-label="Hero"
 className="relative rounded-2xl overflow-hidden shadow-sm"
 style={{ minHeight: 380 }}
 >
 <div
 className="absolute inset-0 bg-center bg-no-repeat bg-cover"
 style={{
 backgroundImage: `url(${ASSETS.heroBusiness})`,
 }}
 >
 <img
 src={ASSETS.heroBusiness}
 alt="hero background"
 className="hidden"
 loading="eager"
 draggable={false}
 />
 <div
 className="absolute inset-0"
 style={{
 background:
 "radial-gradient(ellipse at left center, rgba(0,0,0,0.25) 0%, rgba(2,6,23,0.45) 100%)",
 }}
 />
 </div>

 <div className="relative z-10">
 <div className="mx-auto max-w-[1180px] px-6 py-5 flex flex-col md:flex-row items-center gap-8">
 {/* left text */}
 <div className="flex-1 max-w-2xl">
 <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-2xl p-8 md:p-10 backdrop-blur-sm shadow-[0_20px_50px_rgba(2,6,23,0.18)]">
 <h1 className="text-white text-3xl md:text-[34px] leading-tight font-semibold mb-4">
 Partnership / LLP Tax Filing
 </h1>
 <p className="text-slate-200 text-sm md:text-base mb-6 max-w-prose">
 For firms, LLPs, AOPs, BOIs, cooperative societies, local
 authorities, and other non-company entities.
 </p>

 {/* small form row */}
 <form
 onSubmit={(e) => e.preventDefault()}
 className="flex flex-col sm:flex-row gap-3 items-center"
 >
 <div className="flex items-center gap-2 bg-transparent rounded-full border border-[rgba(255,255,255,0.08)] px-3 py-2 w-full sm:w-auto">
 <div className="text-white text-xs px-3 py-1 bg-[rgba(255,255,255,0.05)] rounded-md">
 ITR-5
 </div>
 <input
 className="bg-transparent outline-none placeholder:text-slate-300 text-white text-sm w-full"
 placeholder="PAN Number"
 />
 </div>

 <button className="whitespace-nowrap px-5 py-3 bg-[#F4F3EE] text-slate-900 rounded-full font-medium shadow-[0_6px_20px_rgba(0,0,0,0.12)]">
 File ITR
 </button>
 </form>
 </div>
 </div>

 {/* right image - phone / illustration */}
 <div className="w-full md:w-96 flex justify-end">
 <div className="relative w-[340px]">
 <img
 src={ASSETS.phoneMock}
 alt="phone"
 className="w-full h-auto rounded-2xl shadow-2xl"
 />
 </div>
 </div>
 </div>
 </div>

 <div
 className="absolute inset-0 pointer-events-none"
 style={{
 background:
 "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.12) 100%)",
 borderRadius: "1rem",
 }}
 />
 </section>
 </div>
 </div>

 {/* Main content */}
 <main className="max-w-[1180px] mx-auto px-6 py-4 grid grid-cols-1 lg:grid-cols-12 gap-8">
 {/* Left column */}
 <section className="lg:col-span-8 space-y-6">
 {/* Pricing cards */}
 <section>
 <h2 className="text-2xl font-semibold text-center lg:text-left">
 Simple, Transparent ITR Filing Pricing
 </h2>
 <p className="text-sm text-gray-600 mt-2 max-w-prose">
 Apply for your ITR Filing online with expert assistance and
 complete end-to-end tracking.
 </p>

 <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
 {/* Personal */}
 <div className="bg-[#F4F3EE] rounded-xl border p-6 shadow-sm">
 <div className="inline-block bg-[#C15F3C]/10 text-[#C15F3C] px-3 py-1 rounded-full text-xs mb-3">
 Personal
 </div>
 <h3 className="font-semibold text-lg">Personal Tax Filing</h3>
 <p className="text-sm text-gray-600 mt-2">
 For resident salaried/pension earners with total income up to
 ₹50 lakh, one house...
 </p>
 <div className="mt-4 text-2xl font-bold">
 ₹1,499 <span className="text-sm font-normal">/ yr + GST</span>
 </div>
 <button className="mt-4 w-full bg-slate-900 text-white py-3 rounded-full">
 Start Filing
 </button>
 <ul className="mt-5 space-y-2 text-sm text-gray-700">
 <li className="flex items-center gap-2">
 <Check size={16} /> Income Tax computation
 </li>
 <li className="flex items-center gap-2">
 <Check size={16} /> Tax Consultation
 </li>
 <li className="flex items-center gap-2">
 <Check size={16} /> E Filing
 </li>
 </ul>
 </div>

 {/* Business */}
 <div className="bg-[#F4F3EE] rounded-xl border p-6 shadow-sm">
 <div className="inline-block bg-[#C15F3C]/10 text-[#C15F3C] px-3 py-1 rounded-full text-xs mb-3">
 Business
 </div>
 <h3 className="font-semibold text-lg">Business Tax Filing</h3>
 <p className="text-sm text-gray-600 mt-2">
 For individuals/HUFs whose income includes business or
 professional profits (e.g., shop owners, freelancers, firm
 partners)...
 </p>
 <div className="mt-4 text-2xl font-bold">
 ₹4,899 <span className="text-sm font-normal">/ yr + GST</span>
 </div>
 <button className="mt-4 w-full bg-slate-900 text-white py-3 rounded-full">
 Start Filing
 </button>
 <ul className="mt-5 space-y-2 text-sm text-gray-700">
 <li className="flex items-center gap-2">
 <Check size={16} /> Income Tax computation
 </li>
 <li className="flex items-center gap-2">
 <Check size={16} /> Tax Consultation
 </li>
 <li className="flex items-center gap-2">
 <Check size={16} /> E Filing
 </li>
 </ul>
 <div className="mt-3 text-xs text-gray-500">
 LEDGERS Platform — Most popular
 </div>
 </div>

 {/* Not for Profit */}
 <div className="bg-[#F4F3EE] rounded-xl border p-6 shadow-sm">
 <div className="inline-block bg-[#C15F3C]/10 text-[#C15F3C] px-3 py-1 rounded-full text-xs mb-3">
 Not for Profit
 </div>
 <h3 className="font-semibold text-lg">Not for Profit</h3>
 <p className="text-sm text-gray-600 mt-2">
 For all companies except those claiming charitable or
 religious exemption under applicable provisions.
 </p>
 <div className="mt-4 text-2xl font-bold">
 ₹19,899{" "}
 <span className="text-sm font-normal">/ yr + GST</span>
 </div>
 <button className="mt-4 w-full bg-slate-900 text-white py-3 rounded-full">
 Start Filing
 </button>
 <ul className="mt-5 space-y-2 text-sm text-gray-700">
 <li className="flex items-center gap-2">
 <Check size={16} /> Income Tax computation
 </li>
 <li className="flex items-center gap-2">
 <Check size={16} /> Tax Consultation
 </li>
 <li className="flex items-center gap-2">
 <Check size={16} /> E Filing
 </li>
 </ul>
 <div className="mt-2 text-xs text-gray-500">
 LEDGERS Accounting Software • MCA Compliance • Dedicated
 support, flexible cost
 </div>
 </div>
 </div>

 <div className="mt-6 text-gray-700">
 <img
 src={ASSETS.formsImg}
 alt="which itr form"
 className="w-full rounded shadow-sm"
 />
 </div>
 </section>

 {/* long textual content */}
 <article className="bg-[#F4F3EE] rounded-lg shadow-sm p-6">
 <h1 className="text-2xl font-semibold text-center">
 Expert Assistance for ITR 3 Form Filing
 </h1>

 <div className="mt-4 text-[15px] leading-7 text-gray-700 space-y-4">
 <p>
 At DoStartup, we're your trusted partner for simplifying the
 ITR-3 form filing process, making it easy, precise, and
 stress-free. As a leading online platform specializing in tax
 and compliance solutions, we understand that navigating the
 intricacies of income tax returns can be overwhelming. Whether
 you're an individual with income from business or a Hindu
 Undivided Family (HUF) looking to meet your tax obligations, our
 expert team is here to assist you at every step.
 </p>

 <h3 className="text-lg font-semibold">What is ITR 3 Form?</h3>
 <p>
 The ITR 3 Form is crucial for taxpayers earning income from a
 business or a profession. It plays a vital role in the Income
 Tax Department's efforts to collect comprehensive financial
 information, ensuring tax compliance.
 </p>

 <h3 className="text-lg font-semibold">
 Who Should File ITR-3 Form?
 </h3>
 <p>
 The ITR Form 3 can be used for filing an income tax return by
 individuals or Hindu Undivided Families (HUFs) who meet the
 following ITR 3 applicability criteria:
 </p>
 <ul className="list-disc list-inside">
 <li>
 Directorship: The taxpayer is a director of a company or is
 engaged in a business.
 </li>
 <li>
 Residential Status: The taxpayer's residential status can be
 either resident or non-resident of India.
 </li>
 <li>
 Pension Income: The taxpayer is receiving income from a
 pension.
 </li>
 <li>
 House Property Income: The taxpayer is earning income from
 house property.
 </li>
 <li>
 Investments in Unlisted Equity Shares: The taxpayer has
 investments in unlisted equity shares.
 </li>
 <li>
 Income Under 'Profits and Gains of Business or Profession':
 The taxpayer's income is taxable under the category of
 'profits and gains of business or profession.' This can
 include income elements such as salary, interest, commission,
 bonus, or remuneration.
 </li>
 </ul>

 <p>
 Additionally, taxpayers can use the ITR Form 3 if their total
 income includes items such as income from house property,
 lotteries, capital gains, proprietorship business income, or
 foreign assets. Meeting these eligibility criteria allows
 individuals and HUFs to use the ITR Form 3 for filing their
 income tax returns, provided that their income falls into the
 specified categories mentioned above.
 </p>

 <h3 className="text-lg font-semibold">
 Who is Not Eligible to File the ITR 3 Form?
 </h3>
 <p>
 An individual or Hindu Undivided Family (HUF) earning income as
 a partner of a partnership firm engaged in a business or
 profession is not eligible to file ITR-3. In such cases, they
 should file ITR-2 instead.
 </p>

 <h3 className="text-lg font-semibold">
 Due Date for Filing Form ITR3
 </h3>
 <p>
 The due date for filing the ITR Form 3 varies depending on
 whether the case is an audit case or a non-audit case for
 different assessment years. For Assessment Year 2023-24:
 Non-audit Cases: July 31, 2023. Audit Cases: October 31, 2023.
 These dates are subject to change by the income tax authorities,
 so it's essential to stay updated with any revisions or
 extensions.
 </p>

 <h3 className="text-lg font-semibold">
 Late Filing Penalties for ITR3 Form
 </h3>
 <p>
 The penalties for late filing of the ITR3 form in India are as
 follows:
 </p>
 <ul className="list-disc list-inside">
 <li>
 If you file your return after the due date but before December
 31 of the assessment year: A late filing fee of ₹ 5,000 may be
 levied.
 </li>
 <li>
 If you file your return after December 31 of the assessment
 year: A late filing fee of ₹ 10,000 may be levied.
 </li>
 </ul>
 <p>
 Note: The late filing fee may vary based on the taxpayer's total
 income and other factors. If your total income is less than ₹5
 lakh, the maximum late filing fee is capped at ₹1,000.
 </p>

 <h3 className="text-lg font-semibold">
 Documents required for ITR 3 Form
 </h3>
 <p>
 To file your income tax return (ITR) on DoStartup for ITR-3,
 the following documents are typically needed:
 </p>
 <ul className="list-disc list-inside">
 <li>PAN (Permanent Account Number)</li>
 <li>Aadhaar Card</li>
 <li>Bank account details (account number and IFSC code)</li>
 <li>Form 16, if applicable (for salaried individuals)</li>
 <li>Details of your investments</li>
 <li>
 Books of accounts (if you have a business or professional
 income)
 </li>
 </ul>

 <h3 className="text-lg font-semibold">
 Sections of the ITR 3 Form
 </h3>
 <p>
 The ITR 3 Form is structured into sections: General Information,
 Income Details, Deductions and Taxes Paid, TDS/TCS Credit,
 Verification & Declaration.
 </p>

 <h3 className="text-lg font-semibold">
 Why Choose DoStartup for ITR3 Form Filing?
 </h3>
 <p>
 DoStartup is your ideal partner for ITR3 Form filing,
 offering expert guidance, accuracy, timely filing, documentation
 assistance, and a secure platform. We simplify the process,
 ensuring your compliance with tax regulations.
 </p>

 <h3 className="text-lg font-semibold">
 How DoStartup Simplifies Your ITR-3 Filing
 </h3>
 <p>
 Filing your ITR-3 form accurately and on time is crucial.
 DoStartup makes it hassle-free with expert guidance, a
 user-friendly platform, document management, deduction
 optimization, review and verification of ITR 3 applicability,
 secure filing, timely reminders, and post-filing support.
 </p>

 <p>
 Let DoStartup assist you in filing your ITR-3 form, allowing
 you to focus on your business and financial well-being. Contact
 us today for expert assistance in meeting your tax obligations
 and ensuring a smooth filing experience.
 </p>
 </div>
 </article>

 {/* Documents required card */}
 <article className="bg-[#F4F3EE] rounded-lg shadow-sm p-6">
 <h3 className="text-xl font-semibold mb-4">
 Documents Required to File Your Business ITR
 </h3>
 <div className="mt-2 text-gray-700">
 <img
 src={ASSETS.docsRequiredImg}
 alt="documents required"
 className="w-full rounded shadow-sm"
 />
 <ul className="list-disc list-inside mt-4 space-y-2">
 <li>PAN & Aadhaar</li>
 <li>Books of Accounts / Financial Statements</li>
 <li>Bank Statements</li>
 <li>GST Returns (if applicable)</li>
 <li>TDS Certificates & Form 26AS</li>
 <li>Invoices & supporting vouchers</li>
 </ul>
 </div>
 </article>

 {/* FAQ */}
 <div className="bg-[#F4F3EE] rounded-lg shadow-sm p-6">
 <h3 className="text-xl font-semibold mb-4">
 FAQ's on ITR-3 Return Filing
 </h3>
 <div className="space-y-0">
 {faqQuestions.map((q, i) => (
 <div key={i} className="border-b last:border-b-0">
 <button
 className="w-full text-left py-4 flex justify-between items-center text-sm"
 onClick={() => setFaqOpen(faqOpen === i ? null : i)}
 aria-expanded={faqOpen === i}
 aria-controls={`faq-${i}`}
 >
 <span className="text-slate-800">{q}</span>
 <span className="text-[#C15F3C] flex items-center gap-2">
 {faqOpen === i ? "-" : <Plus size={14} />}
 </span>
 </button>

 {faqOpen === i && (
 <div
 id={`faq-${i}`}
 className="px-2 pb-4 text-sm text-gray-600"
 >
 {faqAnswers[i] ?? "Content coming soon."}
 </div>
 )}
 </div>
 ))}
 </div>

 <div className="mt-4 pt-4 flex gap-3 items-center flex-wrap">

 <button className="px-4 py-2 border rounded text-sm">
 Load More
 </button>
 

</div>
 </div>
 </section>

 {/* Sidebar */}
         <aside className="lg:col-span-4 hidden lg:block">
          <SidebarCart />
        </aside>
 </main>

 <Footer />
 </div>
 );
}
