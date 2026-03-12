"use client";

/* eslint-disable @next/next/no-img-element */

import React, { useMemo, useState } from "react";
import {
  ChevronRight,
  ShoppingCart,
  Star,
  ChevronDown,
  Plus,
} from "lucide-react";
import Navbar from "../components/Navbar";

/**
 * DIN Reactivation page with amber theme and imported Navbar
 */

const ASSETS = {
  logo: "/images/india-logo.jpg",
  heroBlue: "/images/din-hero-blue.jpg",
  heroMan:
    "https://img.indiafilings.com/catalog/mca-compliance-simplified-india.webp",
  whatsapp: "/images/whatsapp.svg",
  promoBlue:
    "https://img.indiafilings.com/catalog/company-compliance-india.png",
  ledgers: "https://img.indiafilings.com/catalog/ledgers.png",
  gstSave: "https://img.indiafilings.com/catalog/gstin.png",
  partnershipCard:
    "https://img.indiafilings.com/catalog/partnership-compliance.png",
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

const RELATED_GUIDES = [
  "Complete Guide on Director Identification Number",
  "How to Obtain DIN?",
  "DIN Number Registration & Search",
  "Designated Partner Identification Number (DPIN)",
  "How to Change DIN details ?",
];

export default function DINReactivationPixel() {
  const [showMcaDropdown, setShowMcaDropdown] = useState(false);
  const [gstChecked, setGstChecked] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqItems = [
    {
      q: "What exactly is a Director Identification Number (DIN)?",
      a: "An 8-digit unique identifier allotted by MCA to directors.",
    },
    {
      q: "Can you explain Form DIR-3 KYC in detail?",
      a: "DIR-3 KYC is the annual KYC form for directors to update contact and personal details on MCA.",
    },
    {
      q: "Who is mandated to file DIR-3 KYC, and when?",
      a: "Directors allotted DIN by or before March 31, 2018 must file annually by September 30 (subject to extensions).",
    },
    {
      q: "What happens if DIR-3 KYC is not filed by the deadline?",
      a: "DIN may be deactivated and marked 'Deactivated due to Non-filing of DIR-3 KYC' restricting director functions.",
    },
    {
      q: "How to reactivate DIN number?",
      a: "File DIR-3 KYC (eForm or web) and follow MCA processes; upon approval DIN is reactivated.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-slate-800 font-sans">
      {/* Imported Navbar */}
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-gradient-to-r from-white to-slate-50 py-3 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-500">
          Home / Income Tax /{" "}
          <span className="text-[#C15F3C] font-medium">DIN Reactivation</span>
        </div>
      </div>

      {/* PAGE HERO + ACTION cards (three-col layout) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Left hero / image box */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-lg">
              <div className="rounded-lg overflow-hidden border border-gray-200">
                {/* top panel - amber gradient */}
                <div className="bg-gradient-to-r from-[#C15F3C] to-[#A74A2F] p-6 text-center">
                  <h2 className="text-white text-xl font-bold tracking-wide">
                    DIN REACTIVATION
                  </h2>
                  <div className="mt-2 text-sm text-orange-100">
                    DIN Reactivation: Quick and hassle-free.
                  </div>
                </div>

                {/* man image */}
                <div className="bg-gray-50 p-6 flex justify-center">
                  <img
                    src={ASSETS.heroMan}
                    alt="hero man"
                    className="w-full max-w-[320px] object-contain rounded-md"
                  />
                </div>
              </div>

              {/* Document links */}
              <ul className="mt-4 text-xs sm:text-sm space-y-2 text-gray-600">
                <li className="hover:text-[#C15F3C] cursor-pointer transition-colors">Digital Signature Certificate (DSC)</li>
                <li className="hover:text-[#C15F3C] cursor-pointer transition-colors">PAN Card (self-attested)</li>
                <li className="hover:text-[#C15F3C] cursor-pointer transition-colors">Proof of Address</li>
                <li className="text-[#C15F3C] underline hover:text-[#A74A2F] cursor-pointer font-medium">Load More</li>
              </ul>
            </div>
          </div>

          {/* Center content (title, description, offer box) */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  {/* Badge */}
                  <div className="inline-flex items-center gap-1.5 bg-orange-50 border border-[#C15F3C]/20 rounded-full px-3 py-1 mb-2">
                    <div className="w-1.5 h-1.5 bg-[#C15F3C] rounded-full" />
                    <span className="text-xs font-medium text-[#C15F3C]">MCA COMPLIANCE</span>
                  </div>
                  <h1 className="text-lg font-semibold">DIN Reactivation</h1>
                  <div className="flex items-center gap-2 mt-2 text-xs text-slate-500">
                    <div className="flex items-center gap-1">
                      {[...Array(4)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                      <span className="text-slate-500">(428)</span>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-slate-500 max-w-[200px]">
                  Director Identification Number (DIN) may be subject to
                  deactivation due to non-compliance with regulatory
                  requirements. Reactivate it by filing Form DIR-3 with expert assistance.
                </div>
              </div>

              {/* dashed offer box */}
              <div className="mt-5 border-2 border-dashed border-[#C15F3C]/30 rounded-md p-4 relative bg-orange-50/30">
                <div className="absolute -top-3 left-4 bg-white px-2 text-[11px] text-[#C15F3C] rounded border border-[#C15F3C]/20">
                  2 Exclusive Offers
                </div>
                <div className="text-sm font-semibold">DIN Reactivation</div>
                <ul className="mt-2 text-sm text-slate-600 space-y-1">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#C15F3C] mt-1" />{" "}
                    Application Filing in MCA
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#C15F3C] mt-1" />{" "}
                    Provide DIN-eKYC
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#C15F3C] mt-1" />{" "}
                    Acknowledgement Copy
                  </li>
                </ul>

                <button className="mt-3 ml-auto block px-4 py-1.5 border-2 border-[#C15F3C] text-[#C15F3C] rounded-md text-sm hover:bg-orange-50 transition-colors font-medium">
                  ADD TO CART
                </button>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 flex justify-between">
                <a href="#" className="text-[#C15F3C] hover:text-[#A74A2F] hover:underline font-medium">
                  Terms and conditions
                </a>
                <a href="#" className="text-[#C15F3C] hover:text-[#A74A2F] hover:underline font-medium">
                  Refer a Friend
                </a>
              </div>

              <div className="mt-5">
                <div className="text-sm font-semibold mb-3">
                  Offers and discounts
                </div>
                <div className="space-y-3 mt-3">
                  <div className="flex items-center gap-3 border border-gray-200 rounded-lg p-3 hover:border-[#C15F3C]/30 transition-colors">
                    <img
                      src={ASSETS.ledgers}
                      alt="ledgers"
                      className="w-10 h-10 object-contain"
                    />
                    <div className="text-sm">
                      <div className="font-medium text-[#C15F3C]">
                        LEDGERS - Compliance Platform
                      </div>
                      <div className="text-xs text-slate-500">
                        Invoicing, GST Filing, Banking and Payroll
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 border border-gray-200 rounded-lg p-3 hover:border-[#C15F3C]/30 transition-colors">
                    <img
                      src={ASSETS.gstSave}
                      alt="gst"
                      className="w-10 h-10 object-contain"
                    />
                    <div className="text-sm">
                      <div className="font-medium text-[#C15F3C]">
                        Save 18% with GST Registration
                      </div>
                      <div className="text-xs text-slate-500">
                        Get GST eInvoice with Input Tax Credit
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right cart / form */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg sticky top-24">
              <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
                <ShoppingCart className="w-12 h-12 text-[#C15F3C] mx-auto mb-2" />
                <div className="text-slate-800 font-semibold">
                  Your cart is empty
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Browse our services and add some services in cart!
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-600 text-center">
                Existing User?{" "}
                <a href="#" className="text-[#C15F3C] font-medium hover:text-[#A74A2F]">
                  Login
                </a>
              </div>

              <div className="mt-3 space-y-3">
                <input
                  placeholder="Name"
                  className="w-full px-3 py-2 border rounded-md text-sm border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#C15F3C]"
                />
                <input
                  placeholder="Email"
                  className="w-full px-3 py-2 border rounded-md text-sm border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#C15F3C]"
                />
                <div className="flex">
                  <select className="px-3 py-2 border border-gray-200 rounded-l-md text-sm focus:outline-none focus:ring-1 focus:ring-[#C15F3C]">
                    <option>+91</option>
                  </select>
                  <input
                    placeholder="Phone"
                    className="flex-1 px-3 py-2 border border-gray-200 rounded-r-md text-sm focus:outline-none focus:ring-1 focus:ring-[#C15F3C]"
                  />
                </div>

                <label className="flex items-center gap-2 text-xs text-slate-700">
                  <input
                    type="checkbox"
                    checked={gstChecked}
                    onChange={() => setGstChecked(!gstChecked)}
                    className="accent-[#C15F3C]"
                  />
                  Enter GSTIN to get 18% GST Credit
                </label>

                {gstChecked && (
                  <input
                    placeholder="GSTIN"
                    className="w-full px-3 py-2 border rounded-md text-sm border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#C15F3C]"
                  />
                )}

                <button className="w-full bg-gradient-to-r from-[#C15F3C] to-[#A74A2F] hover:from-[#A74A2F] hover:to-[#8F3F27] text-white py-2 rounded-md font-semibold transition-all shadow-md hover:shadow-lg">
                  Get Started
                </button>

                <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400 pt-1">
                  <svg className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Secure · No spam · Instant confirmation</span>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Long article content & sidebar (two-column) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <article className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-[#C15F3C]">
                DIN Reactivation - Filing Form DIR-3 KYC
              </h2>

              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                Director Identification Number (DIN) is an essential identifier
                for anyone aspiring to be a director in Indian companies, issued
                by the Ministry of Corporate Affairs (MCA). Directors are
                required to update their KYC details annually through the DIR-3
                KYC form with the MCA. Failure to do so leads to the
                deactivation of the DIN, which restricts their ability to
                function in corporate roles. To reactivate a deactivated DIN,
                directors must file the DIR-3 KYC form, sometimes with a late
                fee, depending on the delay.
              </p>

              <h3 className="text-lg font-semibold mt-4 text-[#C15F3C]">
                Director Identification Number (DIN)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed hover:text-[#C15F3C] transition-colors">
                A Director Identification Number (DIN) is an 8-digit unique
                identifier assigned to directors. Once issued, it remains valid
                for the lifetime of the director.
              </p>

              <h3 className="text-lg font-semibold mt-4 text-[#C15F3C]">
                What is Form DIR-3 KYC?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed hover:text-[#C15F3C] transition-colors">
                Form DIR-3 KYC is an electronic form mandated by MCA to update
                KYC details of directors.
              </p>

              <h3 className="text-lg font-semibold mt-4 text-[#C15F3C]">Applicability</h3>
              <p className="text-sm text-slate-600 leading-relaxed hover:text-[#C15F3C] transition-colors">
                Form DIR-3 KYC is mandatory for directors allotted DIN by or
                before March 31, 2018 and with status 'approved'.
              </p>

              <h3 className="text-lg font-semibold mt-4 text-[#C15F3C]">
                Purpose of DIR-3 KYC (Know Your Customer)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed hover:text-[#C15F3C] transition-colors">
                The purpose is to maintain current and accurate director
                information with the ROC including addresses, contact numbers
                and email addresses.
              </p>

              <h3 className="text-lg font-semibold mt-4 text-[#C15F3C]">
                Annual Deadline for Filing Form DIR-3 KYC
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed hover:text-[#C15F3C] transition-colors">
                Deadline is set as September 30th of each year (subject to MCA
                extensions).
              </p>

              <h3 className="text-lg font-semibold mt-6 text-[#C15F3C]">
                Types of DIR-3 KYC Forms
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed hover:text-[#C15F3C] transition-colors">
                DIR-3 KYC eForm (for first-time filers) and DIR-3-KYC-WEB
                (simplified web form for returning filers).
              </p>

              <h3 className="text-lg font-semibold mt-6 text-[#C15F3C]">
                Penalty for Non-Filing of DIR-3 KYC
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed hover:text-[#C15F3C] transition-colors">
                A fine may be imposed for non-compliance within the stipulated
                timeframe.
              </p>

              <h3 className="text-lg font-semibold mt-6 text-[#C15F3C]">
                DIN Deactivation & Reactivation
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed hover:text-[#C15F3C] transition-colors">
                If a director does not file, their DIN may be marked
                'Deactivated due to Non-filing of DIR-3 KYC'. To reactivate,
                file the appropriate form and follow MCA approvals.
              </p>

              <h3 className="text-lg font-semibold mt-6 text-[#C15F3C]">Documents Required</h3>
              <ul className="text-sm text-slate-600 list-disc pl-5 space-y-2">
                <li className="hover:text-[#C15F3C] transition-colors">Digital Signature Certificate (DSC) linked to PAN.</li>
                <li className="hover:text-[#C15F3C] transition-colors">PAN Card (self-attested).</li>
                <li className="hover:text-[#C15F3C] transition-colors">
                  Proof of Address (Aadhaar / Voter ID / Driving License).
                </li>
                <li className="hover:text-[#C15F3C] transition-colors">Photograph (self-attested passport photo).</li>
                <li className="hover:text-[#C15F3C] transition-colors">Mobile & Email for OTP verification.</li>
              </ul>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-[#C15F3C]">
                  Streamline Your DIN Reactivation Process
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mt-2 hover:text-[#C15F3C] transition-colors">
                  We offer comprehensive assistance at every stage —
                  application support, form completion guidance, PAN
                  verification, DSC help, document attachment and SRN generation
                  & follow-up.
                </p>
              </div>
            </div>

            {/* FAQ section */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg mt-6">
              <h3 className="text-lg font-semibold mb-4 text-[#C15F3C]">
                FAQ's on DIN Reactivation
              </h3>
              <div className="space-y-3">
                {faqItems.map((f, idx) => (
                  <div key={idx} className="border border-gray-200 rounded">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full px-4 py-3 text-left flex items-center justify-between bg-white hover:bg-orange-50/30 transition-colors"
                    >
                      <span className="text-sm text-slate-800 hover:text-[#C15F3C] transition-colors">{f.q}</span>
                      <Plus
                        className={`w-4 h-4 text-[#C15F3C] ${
                          openFaq === idx ? "rotate-45" : ""
                        } transition-transform`}
                      />
                    </button>
                    {openFaq === idx && (
                      <div className="px-4 py-3 bg-orange-50/30 text-sm text-slate-600 border-t border-gray-200">
                        {f.a}
                      </div>
                    )}
                  </div>
                ))}
                <div className="mt-3">
                  <button className="px-4 py-2 border-2 border-[#C15F3C] rounded text-sm bg-white text-[#C15F3C] hover:bg-orange-50 transition-colors font-medium">
                    Load More
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Right article sidebar (guides + ad) */}
          <aside>
            <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-lg">
              <h4 className="font-semibold mb-3 text-[#C15F3C]">Related Guides</h4>
              <ul className="text-sm space-y-2">
                {RELATED_GUIDES.map((g) => (
                  <li key={g}>
                    <a href="#" className="text-[#C15F3C] hover:text-[#A74A2F] hover:underline">
                      {g}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-3 shadow-lg mt-4 hover:border-[#C15F3C]/30 transition-colors">
              <img
                src={ASSETS.partnershipCard}
                className="w-full rounded-lg"
                alt="ad"
              />
              <div className="mt-2 text-sm font-medium text-[#C15F3C]">Partnership Compliance</div>
            </div>
          </aside>
        </div>

        {/* Popular Searches */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg mt-6">
          <h4 className="font-semibold mb-4 text-[#C15F3C]">Popular Searches</h4>
          <div className="flex flex-wrap gap-2">
            {POPULAR_SEARCHES.slice(0, 20).map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-md border border-gray-200 bg-white text-slate-600 hover:border-[#C15F3C]/30 hover:text-[#C15F3C] cursor-pointer transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer block content (expanded) */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg mt-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <h5 className="font-semibold mb-2 text-[#C15F3C]">Company</h5>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>
                  <a href="#" className="hover:text-[#C15F3C] transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#C15F3C] transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#C15F3C] transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-2 text-[#C15F3C]">Platforms</h5>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>
                  <a href="#" className="hover:text-[#C15F3C] transition-colors">
                    Business Search
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#C15F3C] transition-colors">
                    Trademark Search
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#C15F3C] transition-colors">
                    Filings.AE for UAE
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-2 text-[#C15F3C]">Usage</h5>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>
                  <a href="#" className="hover:text-[#C15F3C] transition-colors">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#C15F3C] transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#C15F3C] transition-colors">
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-2 text-[#C15F3C]">Policies</h5>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>
                  <a href="#" className="hover:text-[#C15F3C] transition-colors">
                    Confidentiality Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#C15F3C] transition-colors">
                    Disclaimer Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#C15F3C] transition-colors">
                    Reviews
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 text-sm text-slate-500 border-t border-gray-200 pt-4">
            Copyright © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </main>

      {/* Floating WhatsApp CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="flex items-center gap-3 bg-gradient-to-r from-[#C15F3C] to-[#A74A2F] text-white px-4 py-3 rounded-full shadow-lg hover:from-[#A74A2F] hover:to-[#8F3F27] transition-all hover:scale-105">
          <img src={ASSETS.whatsapp} alt="whatsapp" className="w-5 h-5" />
          <span className="hidden sm:inline font-medium">Live Chat with Experts</span>
        </button>
      </div>
    </div>
  );
}