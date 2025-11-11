"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useMemo, useState } from "react";
import {
  ChevronRight,
  ShoppingCart,
  MessageCircle,
  CheckCircle,
  Star,
  StarHalf,
} from "lucide-react";

/**
 * MCA/page.tsx
 * TailwindCSS required.
 * Replace any ASSETS.* with your exact CDN URLs if you have different ones.
 */

const ASSETS = {
  logo: "/images/india-logo.jpg",
  hero: "https://img.indiafilings.com/catalog/mca-compliance-simplified-india.webp",
  promoBlue:
    "https://img.indiafilings.com/catalog/company-compliance-india.png",
  ledgers: "https://img.indiafilings.com/catalog/ledgers.png",
  gstSave: "https://img.indiafilings.com/catalog/gstin.png",
  // Example service card creatives (swap with exact ones you prefer)
  cards: {
    companyCompliance:
      "https://img.indiafilings.com/catalog/company-compliance-india.png",
    dinEKyc: "https://img.indiafilings.com/catalog/din-ekyc.png",
    directorChange: "https://img.indiafilings.com/catalog/director-change.png",
    removeDirector: "https://img.indiafilings.com/catalog/remove-director.png",
    shareTransfer: "https://img.indiafilings.com/catalog/share-transfer.png",
    moaAmendment: "https://img.indiafilings.com/catalog/moa-amendment.png",
    officeChange:
      "https://img.indiafilings.com/catalog/registered-office-change.png",
    capitalIncrease:
      "https://img.indiafilings.com/catalog/authorized-capital-increase.png",
    form10bd: "https://img.indiafilings.com/catalog/form-10bd-filing.png",
    llpForm11: "https://img.indiafilings.com/catalog/llp-form-11.png",
    strikeOffRevival:
      "https://img.indiafilings.com/catalog/strike-off-revival.png",
    fdiRbi: "https://img.indiafilings.com/catalog/fdi-filing-rbi.png",
    rera: "https://img.indiafilings.com/catalog/rera.png",
    opcCompliance: "https://img.indiafilings.com/catalog/opc-compliance.png",
    dpt3: "https://img.indiafilings.com/catalog/dpt3.png",
    aoaAmendment: "https://img.indiafilings.com/catalog/aoa-amendment.png",
    lei: "https://img.indiafilings.com/catalog/lei.png",
    chargeCreate: "https://img.indiafilings.com/catalog/charge-creation.png",
    chargeSatisfaction:
      "https://img.indiafilings.com/catalog/charge-satisfaction.png",
    dematShares: "https://img.indiafilings.com/catalog/demat-shares.png",
    businessPlan: "https://img.indiafilings.com/catalog/business-plan.png",
    professionalTax:
      "https://img.indiafilings.com/catalog/professional-tax-return.png",
  },
};

const categories = [
  {
    name: "Startup",
    icon: "https://img.indiafilings.com/catalog/startup-icon.png",
  },
  {
    name: "Registrations",
    icon: "https://img.indiafilings.com/catalog/registration-icon.png",
  },
  {
    name: "Trademark",
    icon: "https://img.indiafilings.com/catalog/trademark-icon.png",
  },
  {
    name: "Goods & Services Tax",
    icon: "https://img.indiafilings.com/catalog/gst.png",
  },
  {
    name: "Income Tax",
    icon: "https://img.indiafilings.com/catalog/income-tax.png",
  },
  { name: "MCA", icon: "https://img.indiafilings.com/catalog/mca.png" },
  {
    name: "Compliance",
    icon: "https://img.indiafilings.com/catalog/compliance.png",
  },
  {
    name: "Consultation",
    icon: "https://img.indiafilings.com/catalog/consultation.png",
  },
];

type Service = {
  id: number;
  title: string;
  desc: string;
  image: string;
};

const servicesTop: Service[] = [
  {
    id: 1,
    title: "Company Compliance",
    desc: "Maintain accounts, MCA compliance and more…",
    image: ASSETS.cards.companyCompliance,
  },
  {
    id: 2,
    title: "DIN eKYC Filing",
    desc: "Directors with DIN must submit e‑Filing…",
    image: ASSETS.cards.dinEKyc,
  },
  {
    id: 3,
    title: "Director Change",
    desc: "Add a Director to the Board of Directors…",
    image: ASSETS.cards.directorChange,
  },
  {
    id: 4,
    title: "Remove Director",
    desc: "Resignation of a Director from the Board…",
    image: ASSETS.cards.removeDirector,
  },
];

const servicesMid: Service[] = [
  {
    id: 5,
    title: "Share Transfer",
    desc: "Transfer shares between individuals or groups…",
    image: ASSETS.cards.shareTransfer,
  },
  {
    id: 6,
    title: "MOA Amendment",
    desc: "MOA amendment for a private limited company…",
    image: ASSETS.cards.moaAmendment,
  },
  {
    id: 7,
    title: "Registered Office Change",
    desc: "Change of registered office within the same city…",
    image: ASSETS.cards.officeChange,
  },
  {
    id: 8,
    title: "Authorized Capital Increase",
    desc: "Increase in authorised capital up to Rs.10 lakhs…",
    image: ASSETS.cards.capitalIncrease,
  },
  {
    id: 9,
    title: "Form 10BD Filing",
    desc: "Form 10BD filing must be completed by all Section 8…",
    image: ASSETS.cards.form10bd,
  },
  {
    id: 10,
    title: "LLP Form 11 Filing",
    desc: "File LLP Form 11 — annual return with support…",
    image: ASSETS.cards.llpForm11,
  },
  {
    id: 11,
    title: "Strike Off Company Reactivation",
    desc: "Seamless Revival of Struck‑Off Company…",
    image: ASSETS.cards.strikeOffRevival,
  },
  {
    id: 12,
    title: "FDI filing with RBI",
    desc: "FCGPR filing for Convertible Note including CS…",
    image: ASSETS.cards.fdiRbi,
  },
];

const servicesBottom: Service[] = [
  {
    id: 13,
    title: "RERA Registration",
    desc: "Registration for RERA agents and developers…",
    image: ASSETS.cards.rera,
  },
  {
    id: 14,
    title: "OPC Compliance",
    desc: "OPC annual compliance with Accountant…",
    image: ASSETS.cards.opcCompliance,
  },
  {
    id: 15,
    title: "DPT‑3 Filing",
    desc: "DPT‑3 filing required for companies with loans…",
    image: ASSETS.cards.dpt3,
  },
  {
    id: 16,
    title: "AOA Amendment",
    desc: "AOA amendment for a Pvt Ltd & OPC…",
    image: ASSETS.cards.aoaAmendment,
  },
  {
    id: 17,
    title: "Legal Entity Identifier Code",
    desc: "LEI code requirement for global finance operations…",
    image: ASSETS.cards.lei,
  },
  {
    id: 18,
    title: "Charge Creation",
    desc: "Register charges with ROC when assets are secured…",
    image: ASSETS.cards.chargeCreate,
  },
  {
    id: 19,
    title: "Charge Satisfaction",
    desc: "Inform the registrar about satisfaction of charge…",
    image: ASSETS.cards.chargeSatisfaction,
  },
  {
    id: 20,
    title: "Dematerialisation of Company Shares",
    desc: "Secure, Paperless, Efficient demat of shares…",
    image: ASSETS.cards.dematShares,
  },
  {
    id: 21,
    title: "Business Plan",
    desc: "Pitch deck and financial model for funding…",
    image: ASSETS.cards.businessPlan,
  },
  {
    id: 22,
    title: "Professional Tax Return Filing",
    desc: "Mandatory for individuals & companies…",
    image: ASSETS.cards.professionalTax,
  },
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

const Rating = () => (
  <div className="flex items-center gap-1">
    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
    <StarHalf className="w-4 h-4 text-amber-400 fill-amber-400" />
    <span className="text-xs text-slate-500">(5)</span>
  </div>
);

export default function MCA() {
  const [gstChecked, setGstChecked] = useState(false);
  const [pan, setPan] = useState("");
  const [company, setCompany] = useState("");

  const basicBullets = useMemo(
    () => [
      "Accountant",
      "MCA Compliance",
      "ADT‑1",
      "ITR‑6 Filing",
      "DIN eKYC (for 2 Directors)",
      "Commencement of Business",
      "LEDGERS Accounting Software",
    ],
    []
  );

  const taxAssistBullets = useMemo(
    () => [
      "Accountant",
      "MCA Compliance",
      "ADT‑1",
      "ITR‑6 Filing",
      "DIN eKYC (for 2 Directors)",
      "Commencement of Business",
      "Monthly GST Computation",
      "GSTR 3B Return Filing",
      "GSTR 1 Return Filing",
      "LEDGERS Accounting Software",
    ],
    []
  );

  return (
    <div className="min-h-screen bg-[#F4F6FA] text-slate-800">
      {/* HERO: black image left + form right */}
      <section className="max-w-[1200px] mx-auto px-4 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Left Black Card */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-300 bg-black">
              {/* Inset faint white border */}
              <div
                className="pointer-events-none absolute inset-3 rounded-2xl"
                style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.35)" }}
              />
              {/* Diagonal texture */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 2px, transparent 2px, transparent 8px)",
                }}
              />
              <img
                src={ASSETS.hero}
                alt="MCA Compliance Simplified"
                className="relative z-[1] w-full h-[520px] object-contain"
              />
              <div className="absolute left-6 bottom-6 z-[2]">
                <div className="px-6 py-2 rounded-full text-white text-[18px] font-semibold shadow bg-emerald-700">
                  MCA Compliance Simplified
                </div>
              </div>
            </div>
          </div>

          {/* Right form card */}
          <div>
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-start justify-between">
                <h1 className="text-[20px] font-semibold text-slate-900">
                  MCA Compliance Service
                </h1>
                <button className="text-[13px] px-3 py-1.5 rounded border border-slate-200">
                  Consult Advisor
                </button>
              </div>

              <div className="mt-4 space-y-3">
                <input
                  value={pan}
                  onChange={(e) => setPan(e.target.value.toUpperCase())}
                  maxLength={10}
                  placeholder="Company PAN"
                  className="w-full rounded-md border px-4 py-3 text-[14px] outline-none focus:ring-2 border-slate-200"
                />
                <input
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Company Name"
                  className="w-full rounded-md border px-4 py-3 text-[14px] outline-none focus:ring-2 border-slate-200"
                />
                <p className="text-[13px] text-slate-600">
                  Hassle‑free bookkeeping, MCA, and Income Tax compliance
                  solutions for companies and LLPs, backed by the LEDGERS
                  platform.
                </p>
                <div className="pt-2">
                  <button className="h-10 px-5 rounded-md text-white font-semibold bg-emerald-600 hover:bg-emerald-700">
                    Start Compliance
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Breadcrumbs */}
        <div className="text-[13px] text-slate-500 mt-4">
          IndiaFilings / MCA Services
        </div>
      </section>

      {/* Product + Cart/Lead */}
      <section className="max-w-[1200px] mx-auto px-4 pb-10 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Promo + Terms + Offers */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
            <img
              src={ASSETS.promoBlue}
              alt="Simplifying Compliance"
              className="rounded-xl w-full object-cover"
            />
            <div className="mt-3 flex items-center justify-between text-xs text-slate-500 px-1">
              <a href="#" className="hover:underline">
                Terms and conditions
              </a>
              <a href="#" className="hover:underline">
                Refer a Friend
              </a>
            </div>

            <div className="mt-5">
              <div className="font-semibold text-slate-800 mb-3">
                Offers and discounts
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-white rounded-lg border border-slate-200 p-3">
                  <img
                    src={ASSETS.ledgers}
                    alt="LEDGERS"
                    className="w-10 h-10 object-contain"
                  />
                  <div className="text-sm">
                    <div className="font-medium">
                      LEDGERS - Compliance Platform
                    </div>
                    <div className="text-slate-500">
                      Invoicing, GST Filing, Banking and Payroll
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-lg border border-slate-200 p-3">
                  <img
                    src={ASSETS.gstSave}
                    alt="Save GST"
                    className="w-10 h-10 object-contain"
                  />
                  <div className="text-sm">
                    <div className="font-medium">
                      Save 18% with GST Registration
                    </div>
                    <div className="text-slate-500">
                      Get GST eInvoice with Input Tax Credit
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Product Card */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 md:p-6">
            <div className="flex items-center justify-between">
              <div className="text-[18px] font-semibold text-slate-900">
                Company Compliance
              </div>
              <Rating />
            </div>
            <p className="text-sm text-slate-600 mt-2">
              Maintain accounts, MCA and Income Tax compliance for your company
              with dedicated Accountant and LEDGERS platform.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {/* Basic plan */}
              <div className="border-2 border-dashed border-slate-200 rounded-lg p-4">
                <div className="text-xs text-emerald-600 font-semibold mb-3">
                  2 Exclusive Offers
                </div>
                <div className="font-semibold mb-2">Basic</div>
                <ul className="text-xs text-slate-700 space-y-1">
                  {basicBullets.map((b) => (
                    <li key={b} className="flex items-center gap-1">
                      <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="pt-3">
                  <button className="px-5 py-1.5 text-emerald-600 border border-emerald-600 rounded-md text-xs font-semibold hover:bg-emerald-50">
                    ADD
                  </button>
                </div>
              </div>

              {/* Tax Assist plan */}
              <div className="border-2 border-dashed border-slate-200 rounded-lg p-4">
                <div className="text-xs text-emerald-600 font-semibold mb-3">
                  2 Exclusive Offers
                </div>
                <div className="font-semibold mb-2">Tax Assist</div>
                <ul className="text-xs text-slate-700 space-y-1">
                  {taxAssistBullets.map((b) => (
                    <li key={b} className="flex items-center gap-1">
                      <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="pt-3">
                  <button className="px-5 py-1.5 text-emerald-600 border border-emerald-600 rounded-md text-xs font-semibold hover:bg-emerald-50">
                    ADD
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sticky Cart + Lead */}
          <aside className="h-fit">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sticky top-24">
              <div className="bg-[#FAFAFA] rounded-xl p-6 text-center border border-slate-200">
                <ShoppingCart className="w-12 h-12 text-slate-300 mx-auto mb-2" />
                <div className="text-slate-800 font-semibold">
                  Your cart is empty
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Browse our services and add some services in cart!
                </div>
              </div>

              <div className="mt-5">
                <div className="text-xs text-slate-600 mb-2">
                  Existing User?{" "}
                  <a href="#" className="text-[#0B5CF0] font-medium">
                    Login
                  </a>
                </div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-3 py-2 border border-slate-300 rounded-md mb-2 text-sm"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-3 py-2 border border-slate-300 rounded-md mb-2 text-sm"
                />
                <div className="flex mb-2">
                  <select className="px-3 py-2 border border-slate-300 rounded-l-md bg-white text-sm">
                    <option>+91</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="flex-1 px-3 py-2 border border-slate-300 rounded-r-md text-sm"
                  />
                </div>

                <label className="flex items-center gap-2 text-xs text-slate-700 mb-2 select-none">
                  <input
                    type="checkbox"
                    checked={gstChecked}
                    onChange={() => setGstChecked((v) => !v)}
                  />
                  Enter GSTIN to get 18% GST Credit
                </label>
                {gstChecked && (
                  <input
                    type="text"
                    placeholder="Please Enter GSTIN"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md mb-2 text-sm uppercase"
                    maxLength={15}
                  />
                )}

                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 rounded-md font-semibold">
                  Get Started
                </button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Categories rail + services grid */}
      <section className="max-w-[1200px] mx-auto px-4 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Categories */}
          <aside className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-3">
              <ul className="space-y-2">
                {categories.map((c) => (
                  <li key={c.name}>
                    <button className="w-full flex items-center justify-between rounded-lg px-3 py-2 hover:bg-slate-50">
                      <span className="flex items-center gap-3 text-slate-700">
                        <img
                          src={c.icon}
                          alt=""
                          className="w-5 h-5 object-contain"
                          onError={(e) =>
                            ((e.target as HTMLImageElement).style.display =
                              "none")
                          }
                        />
                        {c.name}
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Services Grid */}
          <div className="lg:col-span-9">
            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {[...servicesTop, ...servicesMid, ...servicesBottom].map((s) => (
                <div
                  key={s.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-[180px] object-cover"
                  />
                  <div className="p-4">
                    <div className="font-semibold">{s.title}</div>
                    <div className="text-sm text-slate-600 mt-1 line-clamp-2">
                      {s.desc}
                    </div>
                    <div className="pt-3">
                      <button className="px-5 py-1.5 text-emerald-700 border border-emerald-700 rounded-md text-xs font-semibold hover:bg-emerald-50">
                        ADD
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Searches */}
      <section className="max-w-[1200px] mx-auto px-4">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <div className="font-semibold mb-3">Popular Searches</div>
          <div className="flex flex-wrap gap-2">
            {popularSearches.map((t) => (
              <span
                key={t}
                className="text-[12px] px-3 py-1 border border-slate-200 rounded-full text-slate-700 bg-slate-50"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-10 pb-24">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="bg-[#EEF3F9] rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="font-semibold mb-3">IndiaFilings</div>
                <ul className="text-[14px] text-slate-700 space-y-2">
                  <li>About IndiaFilings</li>
                  <li>Careers</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold mb-3">Platforms</div>
                <ul className="text-[14px] text-slate-700 space-y-2">
                  <li>Business Search</li>
                  <li>Trademark Search</li>
                  <li>Filings.AE for UAE</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold mb-3">Usage</div>
                <ul className="text-[14px] text-slate-700 space-y-2">
                  <li>Terms &amp; Conditions</li>
                  <li>Privacy Policy</li>
                  <li>Refund Policy</li>
                </ul>
              </div>
            </div>
            <div className="text-[12px] text-slate-500 mt-6">
              Copyright © 2025 IndiaFilings Private Limited. All rights
              reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/911234567890"
        target="_blank"
        rel="noreferrer"
        className="fixed right-6 bottom-6 z-50 bg-[#25D366] hover:brightness-95 text-white rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3"
        aria-label="Live Chat with Experts"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline-block text-sm font-medium">
          Live Chat with Experts
        </span>
      </a>
    </div>
  );
}
