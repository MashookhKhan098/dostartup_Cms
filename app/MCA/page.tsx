"use client";

/* eslint-disable @next/next/no-img-element */

import React, { useMemo, useState } from "react";
import {
  ChevronRight,
  ShoppingCart,
  MessageCircle,
  Star,
  ChevronDown,
} from "lucide-react";

const ASSETS = {
  logo: "/images/india-logo.jpg",
  hero: "https://img.indiafilings.com/catalog/mca-compliance-simplified-india.webp",
  promoBlue:
    "https://img.indiafilings.com/catalog/company-compliance-india.png",
  ledgers: "https://img.indiafilings.com/catalog/ledgers.png",
  gstSave: "https://img.indiafilings.com/catalog/gstin.png",
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

const MCA_DROPDOWN_LINKS = [
  { title: "Company Compliance", href: "/MCA/company-compliance" },
  { title: "Director Change", href: "/MCA/director-change" },
  { title: "AOA Amendment", href: "/MCA/aoa-amendment" },
  { title: "LLP Compliance", href: "/MCA/llp-compliance" },
  { title: "Remove Director", href: "/MCA/remove-director" },
  {
    title: "Authorized Capital Increase",
    href: "/MCA/authorized-capital-increase",
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

const services = [
  {
    id: 1,
    title: "Company Compliance",
    desc: "Maintain accounts, MCA compliance and more…",
    image: ASSETS.cards.companyCompliance,
  },
  {
    id: 2,
    title: "DIN eKYC Filing",
    desc: "Directors with DIN must submit e-Filing…",
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
    desc: "Change of registered office…",
    image: ASSETS.cards.officeChange,
  },
  {
    id: 8,
    title: "Authorized Capital Increase",
    desc: "Increase authorised capital…",
    image: ASSETS.cards.capitalIncrease,
  },
  {
    id: 9,
    title: "Form 10BD Filing",
    desc: "Form 10BD filing for Section 8…",
    image: ASSETS.cards.form10bd,
  },
  {
    id: 10,
    title: "LLP Form 11 Filing",
    desc: "Annual return filing for LLP…",
    image: ASSETS.cards.llpForm11,
  },
  {
    id: 11,
    title: "Strike Off Company Reactivation",
    desc: "Revival of struck-off company…",
    image: ASSETS.cards.strikeOffRevival,
  },
  {
    id: 12,
    title: "FDI filing with RBI",
    desc: "FCGPR filing including CS…",
    image: ASSETS.cards.fdiRbi,
  },
  {
    id: 13,
    title: "RERA Registration",
    desc: "Registration for RERA…",
    image: ASSETS.cards.rera,
  },
  {
    id: 14,
    title: "OPC Compliance",
    desc: "OPC annual compliance…",
    image: ASSETS.cards.opcCompliance,
  },
  {
    id: 15,
    title: "DPT-3 Filing",
    desc: "DPT-3 filing for companies…",
    image: ASSETS.cards.dpt3,
  },
  {
    id: 16,
    title: "AOA Amendment",
    desc: "AOA amendment for Pvt Ltd…",
    image: ASSETS.cards.aoaAmendment,
  },
  {
    id: 17,
    title: "Legal Entity Identifier Code",
    desc: "Mandatory LEI for global finance…",
    image: ASSETS.cards.lei,
  },
  {
    id: 18,
    title: "Charge Creation",
    desc: "Register charges with ROC…",
    image: ASSETS.cards.chargeCreate,
  },
  {
    id: 19,
    title: "Charge Satisfaction",
    desc: "Report satisfaction of charge…",
    image: ASSETS.cards.chargeSatisfaction,
  },
  {
    id: 20,
    title: "Dematerialisation of Shares",
    desc: "Paperless demat process…",
    image: ASSETS.cards.dematShares,
  },
  {
    id: 21,
    title: "Business Plan",
    desc: "Pitch deck & model for funding…",
    image: ASSETS.cards.businessPlan,
  },
  {
    id: 22,
    title: "Professional Tax Return Filing",
    desc: "Mandatory for individuals…",
    image: ASSETS.cards.professionalTax,
  },
];

const Rating = () => (
  <div className="flex items-center gap-1">
    {[...Array(4)].map((_, i) => (
      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
    ))}
    <svg
      className="w-4 h-4 text-amber-400"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <defs>
        <linearGradient id="halfGrad">
          <stop offset="50%" stopColor="currentColor" />
          <stop offset="50%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <path
        fill="url(#halfGrad)"
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      />
    </svg>
    <span className="text-xs text-slate-500">(5)</span>
  </div>
);

interface NavItemProps {
  children: React.ReactNode;
  hasDropdown?: boolean;
  isActive?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
  children,
  hasDropdown = false,
  isActive = false,
  onMouseEnter,
  onMouseLeave,
}) => (
  <div
    className="relative"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <button
      className={`text-sm flex items-center gap-1 hover:text-slate-900 ${
        isActive ? "text-slate-900 font-medium" : "text-slate-700"
      }`}
    >
      {children}
      {hasDropdown && <ChevronDown className="w-3 h-3" />}
    </button>
  </div>
);

export default function MCA() {
  const [showMcaDropdown, setShowMcaDropdown] = useState(false);
  const [gstChecked, setGstChecked] = useState(false);
  const [pan, setPan] = useState("");
  const [company, setCompany] = useState("");

  const basicBullets = useMemo(
    () => [
      "Accountant",
      "MCA Compliance",
      "ADT-1",
      "ITR-6 Filing",
      "DIN eKYC (for 2 Directors)",
      "Commencement of Business",
      "LEDGERS Accounting Software",
    ],
    []
  );

  const taxAssistBullets = useMemo(
    () => [
      ...basicBullets.slice(0, 6),
      "Monthly GST Computation",
      "GSTR 3B Return Filing",
      "GSTR 1 Return Filing",
      "LEDGERS Accounting Software",
    ],
    [basicBullets]
  );

  return (
    <div className="min-h-screen bg-[#F4F6FA] text-slate-800">
      {/* NAVIGATION */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <img src={ASSETS.logo} alt="IndiaFilings" className="h-10" />

            <div className="flex items-center gap-6">
              {["Startup", "Registrations", "Trademark"].map((item) => (
                <NavItem key={item}>{item}</NavItem>
              ))}

              <NavItem>GST</NavItem>
              <NavItem>Income Tax</NavItem>

              {/* MCA DROPDOWN */}
              <NavItem
                hasDropdown
                isActive
                onMouseEnter={() => setShowMcaDropdown(true)}
                onMouseLeave={() => setShowMcaDropdown(false)}
              >
                MCA
                {showMcaDropdown && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[780px]">
                    <div className="bg-white rounded-lg shadow-xl border border-slate-200 p-6">
                      <div className="grid grid-cols-3 gap-x-6 gap-y-2">
                        {MCA_DROPDOWN_LINKS.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-slate-700 hover:text-emerald-600 py-1.5 block"
                          >
                            {link.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </NavItem>

              {["Compliance", "Personal", "Global", "Cities", "Guides"].map(
                (item) => (
                  <NavItem key={item}>{item}</NavItem>
                )
              )}

              <button className="px-4 py-2 text-sm border border-slate-300 rounded-md hover:bg-slate-50">
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="max-w-[1200px] mx-auto px-4 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* LEFT IMAGE */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-300 bg-black">
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

          {/* RIGHT FORM */}
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
                  className="w-full rounded-md border px-4 py-3 text-[14px] border-slate-200"
                />

                <input
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Company Name"
                  className="w-full rounded-md border px-4 py-3 text-[14px] border-slate-200"
                />

                <p className="text-[13px] text-slate-600">
                  Hassle-free bookkeeping, MCA, and Income Tax compliance
                  solutions.
                </p>

                <button className="h-10 w-full rounded-md text-white font-semibold bg-emerald-600 hover:bg-emerald-700">
                  Start Compliance
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-[13px] text-slate-500 mt-4">
          IndiaFilings / MCA Services
        </div>
      </section>

      {/* PRODUCT SECTION */}
      <section className="max-w-[1200px] mx-auto px-4 pb-10 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT OFFER CARD */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
            <img src={ASSETS.promoBlue} alt="" className="rounded-xl w-full" />

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
                {[
                  {
                    img: ASSETS.ledgers,
                    title: "LEDGERS - Compliance Platform",
                    desc: "Invoicing, GST Filing, Banking and Payroll",
                  },
                  {
                    img: ASSETS.gstSave,
                    title: "Save 18% with GST Registration",
                    desc: "Get GST eInvoice with Input Tax Credit",
                  },
                ].map((offer) => (
                  <div
                    key={offer.title}
                    className="flex items-center gap-3 bg-white border border-slate-200 p-3 rounded-lg"
                  >
                    <img src={offer.img} className="w-10 h-10 object-contain" />
                    <div className="text-sm">
                      <div className="font-medium">{offer.title}</div>
                      <div className="text-slate-500">{offer.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CENTER PLANS */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 md:p-6">
            <div className="flex items-center justify-between">
              <div className="text-[18px] font-semibold text-slate-900">
                Company Compliance
              </div>
              <Rating />
            </div>

            <p className="text-sm text-slate-600 mt-2">
              Maintain accounts, MCA and Income Tax compliance with Accountant &
              LEDGERS.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {[
                { name: "Basic", bullets: basicBullets },
                { name: "Tax Assist", bullets: taxAssistBullets },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className="border-2 border-dashed border-slate-200 rounded-lg p-4"
                >
                  <div className="text-xs text-emerald-600 font-semibold mb-3">
                    2 Exclusive Offers
                  </div>

                  <div className="font-semibold mb-2">{plan.name}</div>

                  <ul className="text-xs text-slate-700 space-y-1">
                    {plan.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-1">
                        <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <button className="mt-3 px-5 py-1.5 text-emerald-600 border border-emerald-600 rounded-md text-xs font-semibold hover:bg-emerald-50">
                    ADD
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CART */}
          <aside className="h-fit">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sticky top-24">
              <div className="bg-[#FAFAFA] rounded-xl p-6 text-center border border-slate-200">
                <ShoppingCart className="w-12 h-12 text-slate-300 mx-auto mb-2" />
                <div className="text-slate-800 font-semibold">
                  Your cart is empty
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Browse our services and add items to the cart!
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

                <label className="flex items-center gap-2 text-xs text-slate-700 mb-2">
                  <input
                    type="checkbox"
                    checked={gstChecked}
                    onChange={() => setGstChecked(!gstChecked)}
                  />
                  Enter GSTIN to get 18% GST Credit
                </label>

                {gstChecked && (
                  <input
                    type="text"
                    placeholder="GSTIN"
                    maxLength={15}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md mb-2 text-sm uppercase"
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

      {/* SERVICES GRID */}
      <section className="max-w-[1200px] mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* LEFT FILTER */}
          <aside className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-3">
              <ul className="space-y-2">
                {categories.map((c) => (
                  <li key={c.name}>
                    <button className="w-full flex items-center justify-between rounded-lg px-3 py-2 hover:bg-slate-50">
                      <span className="flex items-center gap-3 text-slate-700">
                        <img
                          src={c.icon}
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

          {/* RIGHT SERVICE CARDS */}
          <div className="lg:col-span-9">
            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {services.map((s) => (
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
                    <div className="font-semibold text-slate-800 text-sm">
                      {s.title}
                    </div>
                    <div className="text-xs text-slate-600 mt-1">{s.desc}</div>

                    <button className="mt-3 text-xs px-4 py-1.5 border border-emerald-600 text-emerald-600 rounded-md hover:bg-emerald-50">
                      Know More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-white border-t border-slate-200 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} IndiaFilings. All Rights Reserved.
      </footer>
    </div>
  );
}
