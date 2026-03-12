"use client";

import React, { useState } from "react";
import { ChevronRight, ShoppingBag, Star, Plus, CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";

const ASSETS = {
  logo: "/images/india-logo.jpg",
  hero: "https://img.indiafilings.com/catalog/llp-compliance-india.webp",
  ledgers: "https://img.indiafilings.com/catalog/ledgers.png",
  whatsapp: "/images/whatsapp.svg",
  cartIcon: "/images/cart-icon.svg",
  indiaFlag: "/images/india-flag.png",
  adRight1: "/images/company-compliance-ad.png",
  dinEkyc: "/images/din-ekyc-ad.png",
};

const pricingPlans = [
  {
    name: "LLP Compliance - 1 Year",
    subtitle: "Basic annual compliance for Limited Liability Partnerships",
    price: "₹14,899",
    popular: true,
    features: [
      "LEDGERS Accounting Software - 1 Year",
      "LLP Annual Filing (Form 8 & 11)",
      "Dedicated Accountant",
      "Dedicated Compliance Advisor",
      "Annual Bookkeeping",
      "Financial Statement Preparation",
      "Partner Capital Account Statement",
      "Income Tax Return Filing for LLP",
      "DIN KYC for 2 Designated Partners",
    ],
  },
  {
    name: "LLP Compliance - 2 Year",
    subtitle: "Extended LLP compliance support & better value",
    price: "₹23,899",
    features: [
      "Everything in 1-Year LLP plan",
      "Priority support",
      "Quarterly compliance review meetings",
      "Proactive ROC and tax filing alerts",
      "ROC filing support for event based changes",
      "Tax planning review for partners",
      "Digital document vault for LLP records",
    ],
  },
  {
    name: "LLP Compliance - 3 Year",
    subtitle: "Long-term LLP compliance management",
    price: "₹36,899",
    features: [
      "Everything in 2-Year LLP plan",
      "Dedicated compliance manager",
      "On-demand advisory calls for partners",
      "Custom LLP compliance calendar",
      "Secretarial support for partner meetings",
      "Detailed annual compliance report",
    ],
  },
];

const popularTags = [
  "LLP Compliance",
  "LLP Registration",
  "LLP Agreement",
  "LLP Form 8",
  "LLP Form 11",
  "LLP Name Change",
  "Add Partner in LLP",
  "Remove Partner from LLP",
  "Winding Up - LLP",
  "DIN eKYC Filing",
  "Digital Signature",
  "Trademark Registration",
  "GST Registration",
  "Income Tax Filing",
  "Professional Tax",
  "Partnership Firm",
  "Private Limited Company",
  "OPC Compliance",
  "Form 10BD Filing",
  "Authorized Capital Increase",
  "Registered Office Change",
  "Business Plan",
  "Experience Certificate",
  "Trademark Status",
  "PAN Card Apply",
  "EPFO Passbook",
  "UAN Login",
  "eAadhaar Download",
  "MSME Registration",
];

export default function LlpCompliancePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [gstChecked, setGstChecked] = useState(false);
  const [companyInput, setCompanyInput] = useState("");

  const faqItems = [
    "What is LLP compliance?",
    "What are the annual compliance requirements for an LLP?",
    "What is Form 8 and Form 11 in LLP compliance?",
    "What is the due date for LLP annual filing?",
    "What is the penalty for late filing of LLP returns?",
    "Is GST registration mandatory for LLPs?",
    "Can an LLP file income tax return?",
    "What is DIN KYC for designated partners?",
  ];

  const faqAnswers: Record<number, string> = {
    0: "LLP compliance refers to the mandatory filings and legal requirements that a Limited Liability Partnership must fulfill under the Limited Liability Partnership Act, 2008 and Income Tax Act.",
    1: "Annual compliance includes filing Form 8 (Statement of Account & Solvency) and Form 11 (Annual Return), Income Tax Return filing, and DIN KYC for designated partners.",
    2: "Form 8 is the Statement of Account and Solvency, while Form 11 is the Annual Return of an LLP. Both must be filed annually with the ROC.",
    3: "The due date for filing Form 8 and Form 11 is 30th October for the financial year ending 31st March of the previous year.",
    4: "Late filing attracts additional fees - ₹100 per day for each form. Prolonged non-filing may lead to strike off of the LLP from the register.",
    5: "GST registration is mandatory for LLPs if their aggregate turnover exceeds ₹20 lakhs (₹10 lakhs for special category states) or if they engage in inter-state supply.",
    6: "Yes, LLPs are required to file Income Tax Return (ITR-5) annually, regardless of whether they have income or not.",
    7: "DIN KYC (Form DIR-3 KYC) is an annual filing required for each designated partner of an LLP to update their details with the MCA.",
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
      {/* Navbar - Imported */}
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-5">
        <div className="max-w-[1180px] mx-auto px-6 text-sm text-gray-500">
          Home / MCA Services /{" "}
          <span className="text-amber-700 font-medium">LLP Compliance</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[1180px] mx-auto px-6 py-8">
        {/* Hero Section */}
        <section className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="flex flex-col lg:flex-row">
            {/* Left Content */}
            <div className="lg:w-1/2 p-8 lg:p-10">
              <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 mb-4">
                <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
                <span className="text-xs font-medium text-amber-700">LLP COMPLIANCE</span>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Simple, end-to-end LLP bookkeeping and compliance
              </h1>
              
              <p className="text-gray-600 text-lg mb-6">
                Stay on top of all ROC and Income Tax deadlines for your Limited
                Liability Partnership with LEDGERS platform and a dedicated
                compliance team.
              </p>

              <form
                className="flex flex-col sm:flex-row gap-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(`LLP compliance demo requested for "${companyInput || "Unnamed LLP"}"`);
                }}
              >
                <input
                  className="flex-1 border border-gray-200 rounded-md px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-600"
                  placeholder="ENTER LLP NAME"
                  value={companyInput}
                  onChange={(e) => setCompanyInput(e.target.value)}
                />
                <button 
                  type="submit"
                  className="bg-gradient-to-r from-amber-700 to-amber-800 text-white px-6 py-3 rounded-md font-medium hover:from-amber-800 hover:to-amber-900 transition-all shadow-md hover:shadow-lg"
                >
                  Book Demo
                </button>
              </form>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 bg-gradient-to-br from-amber-50 to-amber-100 p-8 flex items-center justify-center">
              <img
                src={ASSETS.hero}
                alt="LLP compliance"
                className="w-full max-w-md h-auto object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">LLP Compliance Made Easy</h2>
            <p className="text-gray-600">
              Pick the right plan for your LLP and avoid penalties, delays and strike-off risk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-white rounded-lg shadow-sm border-2 p-6 relative ${
                  plan.popular ? 'border-amber-600' : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-4">
                  <h3 className="font-semibold text-slate-900">{plan.name}</h3>
                  <div className="text-2xl font-bold text-amber-700 mt-2">{plan.price}</div>
                  <p className="text-xs text-gray-500 mt-1">{plan.subtitle}</p>
                </div>

                <button 
                  className="w-full bg-white border-2 border-amber-600 text-amber-700 py-2 rounded-md font-medium hover:bg-amber-50 transition-colors mb-4"
                  onClick={() => alert(`Selected plan: ${plan.name}`)}
                >
                  Select Plan
                </button>

                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-amber-600">
                <path d="M12 12a3 3 0 100-6 3 3 0 000 6zm0 2c-3.866 0-7 1.79-7 4v1h14v-1c0-2.21-3.134-4-7-4z" strokeWidth="1.5" />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Dedicated LLP compliance team</h3>
            <p className="text-sm text-gray-600">
              Work with professionals who understand LLP structures, partner
              obligations and ROC rules so that nothing is missed and partners
              can focus on running the business.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-amber-600">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="1.5" />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">On-time ROC and tax filings</h3>
            <p className="text-sm text-gray-600">
              Automated reminders and a clear compliance calendar keep Form 8,
              Form 11 and Income Tax filings on schedule, avoiding penalties
              and late fees.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-amber-600">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeWidth="1.5" />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Powered by LEDGERS</h3>
            <p className="text-sm text-gray-600">
              Use LEDGERS for real-time bookkeeping, reconciliations, document
              storage and partner reports, giving complete visibility into
              your LLP finances.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-slate-900">
            FAQ's on LLP Compliance
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
        </section>

        {/* Popular Searches */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h4 className="font-semibold mb-4 text-slate-900">Popular Searches</h4>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 border border-gray-200 rounded bg-white text-gray-700 hover:border-amber-300 hover:text-amber-700 cursor-pointer transition-colors"
                onClick={() => alert(tag)}
              >
                {tag}
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