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

/**
 * Pixel-focused recreation of the screenshots you provided.
 * - Tailwind classes used heavily to reproduce spacing, radii, shadows and layout.
 * - Header / navbar, three-column content area (image / center content / right cart),
 *   long article with FAQ, Popular Searches tags and footer are included.
 *
 * Drop this into a Next.js / React app that supports Tailwind and it should be ready to paste/run.
 */

const ASSETS = {
  logo: "/images/india-logo.jpg",
  heroBlue: "/images/din-hero-blue.jpg", // replace if you want exact hero asset
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

const NAV_ITEMS = [
  "IndiaFilings",
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
    <div className="min-h-screen bg-[#f4f6fa] text-slate-800 font-sans">
      {/* NAVBAR */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <img src={ASSETS.logo} alt="IndiaFilings logo" className="h-9" />
              <nav className="hidden lg:flex items-center gap-6">
                {NAV_ITEMS.slice(1, 7).map((i) => (
                  <a
                    key={i}
                    className="text-sm text-slate-700 hover:text-slate-900"
                  >
                    {i}
                  </a>
                ))}

                <div
                  className="relative"
                  onMouseEnter={() => setShowMcaDropdown(true)}
                  onMouseLeave={() => setShowMcaDropdown(false)}
                >
                  <button className="flex items-center gap-1 text-sm text-slate-800 font-medium">
                    MCA <ChevronDown className="w-3 h-3" />
                  </button>

                  {showMcaDropdown && (
                    <div className="absolute left-0 mt-3 w-[420px]">
                      <div className="bg-white rounded-lg border border-slate-200 shadow p-4">
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          {MCA_DROPDOWN_LINKS.map((l) => (
                            <a
                              key={l.title}
                              href={l.href}
                              className="py-1 text-slate-700 hover:text-emerald-600"
                            >
                              {l.title}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <button className="px-3 py-1.5 border border-slate-200 rounded-md text-sm">
                Login
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* PAGE HERO + ACTION cards (three-col layout) */}
      <main className="max-w-[1200px] mx-auto px-6 pt-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Left hero / image box */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
              <div className="rounded-lg overflow-hidden border border-slate-200">
                {/* top blue panel that matches screenshot feel */}
                <div className="bg-[#0727e6] p-6 text-center">
                  <h2 className="text-white text-xl font-bold tracking-wide">
                    DIN REACTIVATION
                  </h2>
                  <div className="mt-2 text-sm text-white/80">
                    DIN Reactivation: Quick and hassle-free.
                  </div>
                </div>

                {/* man image */}
                <div className="bg-[rgb(243,246,249)] p-6 flex justify-center">
                  <img
                    src={ASSETS.heroMan}
                    alt="hero man"
                    className="w-full max-w-[320px] object-contain rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Center content (title, description, offer box) */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-lg font-semibold">DIN Reactivation</h1>
                  <div className="flex items-center gap-2 mt-2 text-xs text-slate-500">
                    <div className="flex items-center gap-1">
                      {[...Array(4)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-amber-400 fill-amber-400"
                        />
                      ))}
                      <span className="text-slate-500">(428)</span>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-slate-500 max-w-[200px]">
                  Director Identification Number (DIN) may be subject to
                  deactivation due to non-compliance with regulatory
                  requirements. Reactivate it by filing Form DIR-3 through
                  IndiaFilings with expert assistance.
                </div>
              </div>

              {/* dashed offer box */}
              <div className="mt-5 border-2 border-dashed border-slate-200 rounded-md p-4 relative">
                <div className="absolute -top-3 left-4 bg-white px-2 text-[11px] text-emerald-700 rounded">
                  2 Exclusive Offers
                </div>
                <div className="text-sm font-semibold">DIN Reactivation</div>
                <ul className="mt-2 text-sm text-slate-600 space-y-1">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-slate-400 mt-1" />{" "}
                    Application Filing in MCA
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-slate-400 mt-1" />{" "}
                    Provide DIN-eKYC
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-slate-400 mt-1" />{" "}
                    Acknowledgement Copy
                  </li>
                </ul>

                <button className="mt-3 ml-auto block px-4 py-1.5 border border-emerald-600 text-emerald-600 rounded-md text-sm">
                  ADD
                </button>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 flex justify-between">
                <a href="#" className="hover:underline">
                  Terms and conditions
                </a>
                <a href="#" className="hover:underline">
                  Refer a Friend
                </a>
              </div>

              <div className="mt-5">
                <div className="text-sm font-semibold">
                  Offers and discounts
                </div>
                <div className="space-y-3 mt-3">
                  <div className="flex items-center gap-3 border border-slate-200 rounded-lg p-3">
                    <img
                      src={ASSETS.ledgers}
                      alt="ledgers"
                      className="w-10 h-10 object-contain"
                    />
                    <div className="text-sm">
                      <div className="font-medium">
                        LEDGERS - Compliance Platform
                      </div>
                      <div className="text-xs text-slate-500">
                        Invoicing, GST Filing, Banking and Payroll
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 border border-slate-200 rounded-lg p-3">
                    <img
                      src={ASSETS.gstSave}
                      alt="gst"
                      className="w-10 h-10 object-contain"
                    />
                    <div className="text-sm">
                      <div className="font-medium">
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
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm sticky top-24">
              <div className="bg-[#FAFAFA] rounded-xl p-6 text-center border border-slate-200">
                <ShoppingCart className="w-12 h-12 text-emerald-500 mx-auto mb-2" />
                <div className="text-slate-800 font-semibold">
                  Your cart is empty
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Browse our services and add some services in cart!
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-600">
                Existing User?{" "}
                <a href="#" className="text-emerald-600 font-medium">
                  Login
                </a>
              </div>

              <div className="mt-3 space-y-2">
                <input
                  placeholder="Name"
                  className="w-full px-3 py-2 border rounded-md text-sm border-slate-200"
                />
                <input
                  placeholder="Email"
                  className="w-full px-3 py-2 border rounded-md text-sm border-slate-200"
                />
                <div className="flex">
                  <select className="px-3 py-2 border border-slate-200 rounded-l-md text-sm">
                    {" "}
                    <option>+91</option>{" "}
                  </select>
                  <input
                    placeholder="Phone"
                    className="flex-1 px-3 py-2 border border-slate-200 rounded-r-md text-sm"
                  />
                </div>

                <label className="flex items-center gap-2 text-xs text-slate-700">
                  <input
                    type="checkbox"
                    checked={gstChecked}
                    onChange={() => setGstChecked(!gstChecked)}
                  />
                  Enter GSTIN to get 18% GST Credit
                </label>

                {gstChecked && (
                  <input
                    placeholder="GSTIN"
                    className="w-full px-3 py-2 border rounded-md text-sm border-slate-200"
                  />
                )}

                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-md font-semibold">
                  Get Started
                </button>
              </div>
            </div>
          </aside>
        </div>

        {/* Breadcrumb style line */}
        <div className="mt-4 text-sm text-slate-500">
          IndiaFilings / Income Tax / DIN Reactivation
        </div>

        {/* Long article content & sidebar (two-column) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <article className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">
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

              <h3 className="text-lg font-semibold mt-4">
                Director Identification Number (DIN)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                A Director Identification Number (DIN) is an 8-digit unique
                identifier assigned to directors. Once issued, it remains valid
                for the lifetime of the director.
              </p>

              <h3 className="text-lg font-semibold mt-4">
                What is Form DIR-3 KYC?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Form DIR-3 KYC is an electronic form mandated by MCA to update
                KYC details of directors.
              </p>

              <h3 className="text-lg font-semibold mt-4">Applicability</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Form DIR-3 KYC is mandatory for directors allotted DIN by or
                before March 31, 2018 and with status 'approved'.
              </p>

              <h3 className="text-lg font-semibold mt-4">
                Purpose of DIR-3 KYC (Know Your Customer)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                The purpose is to maintain current and accurate director
                information with the ROC including addresses, contact numbers
                and email addresses.
              </p>

              <h3 className="text-lg font-semibold mt-4">
                Annual Deadline for Filing Form DIR-3 KYC
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Deadline is set as September 30th of each year (subject to MCA
                extensions).
              </p>

              <h3 className="text-lg font-semibold mt-6">
                Types of DIR-3 KYC Forms
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                DIR-3 KYC eForm (for first-time filers) and DIR-3-KYC-WEB
                (simplified web form for returning filers).
              </p>

              <h3 className="text-lg font-semibold mt-6">
                Penalty for Non-Filing of DIR-3 KYC
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                A fine may be imposed for non-compliance within the stipulated
                timeframe.
              </p>

              <h3 className="text-lg font-semibold mt-6">
                DIN Deactivation & Reactivation
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                If a director does not file, their DIN may be marked
                'Deactivated due to Non-filing of DIR-3 KYC'. To reactivate,
                file the appropriate form and follow MCA approvals.
              </p>

              <h3 className="text-lg font-semibold mt-6">Documents Required</h3>
              <ul className="text-sm text-slate-600 list-disc pl-5 space-y-2">
                <li>Digital Signature Certificate (DSC) linked to PAN.</li>
                <li>PAN Card (self-attested).</li>
                <li>
                  Proof of Address (Aadhaar / Voter ID / Driving License).
                </li>
                <li>Photograph (self-attested passport photo).</li>
                <li>Mobile & Email for OTP verification.</li>
              </ul>

              <div className="mt-6">
                <h3 className="text-lg font-semibold">
                  Streamline Your DIN Reactivation Process with IndiaFilings
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mt-2">
                  IndiaFilings offers comprehensive assistance at every stage —
                  application support, form completion guidance, PAN
                  verification, DSC help, document attachment and SRN generation
                  & follow-up.
                </p>
              </div>
            </div>

            {/* FAQ section */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm mt-6">
              <h3 className="text-lg font-semibold mb-4">
                FAQ's on DIN Reactivation
              </h3>
              <div className="space-y-3">
                {faqItems.map((f, idx) => (
                  <div key={idx} className="border border-slate-100 rounded">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full px-4 py-3 text-left flex items-center justify-between bg-white"
                    >
                      <span className="text-sm text-slate-800">{f.q}</span>
                      <Plus
                        className={`w-4 h-4 text-slate-400 ${
                          openFaq === idx ? "rotate-45" : ""
                        }`}
                      />
                    </button>
                    {openFaq === idx && (
                      <div className="px-4 py-3 bg-slate-50 text-sm text-slate-600">
                        {f.a}
                      </div>
                    )}
                  </div>
                ))}
                <div className="mt-3">
                  <button className="px-4 py-2 border border-slate-200 rounded text-sm bg-white">
                    Load More
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Right article sidebar (guides + ad) */}
          <aside>
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h4 className="font-semibold mb-3">Related Guides</h4>
              <ul className="text-sm text-slate-600 space-y-2">
                {RELATED_GUIDES.map((g) => (
                  <li key={g}>
                    <a href="#" className="text-emerald-600 hover:underline">
                      {g}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-3 shadow-sm mt-4">
              <img
                src={ASSETS.partnershipCard}
                className="w-full rounded-lg"
                alt="ad"
              />
              <div className="mt-2 text-sm">Partnership Compliance</div>
            </div>
          </aside>
        </div>

        {/* Popular Searches */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm mt-6">
          <h4 className="font-semibold mb-4">Popular Searches</h4>
          <div className="flex flex-wrap gap-2">
            {POPULAR_SEARCHES.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-md border border-slate-200 bg-slate-50 text-slate-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer block content (expanded) */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm mt-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <h5 className="font-semibold mb-2">IndiaFilings</h5>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    About IndiaFilings
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-2">Platforms</h5>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Business Search
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Trademark Search
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Filings.AE for UAE
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-2">Usage</h5>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-2">Policies</h5>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Confidentiality Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Disclaimer Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    IndiaFilings Review
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 text-sm text-slate-500">
            Copyright © {new Date().getFullYear()} IndiaFilings Private Limited.
            All rights reserved.
          </div>
        </div>
      </main>

      {/* Floating WhatsApp CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="flex items-center gap-3 bg-emerald-600 text-white px-4 py-3 rounded-full shadow-lg">
          <img src={ASSETS.whatsapp} alt="whatsapp" className="w-5 h-5" />
          <span className="hidden sm:inline">Live Chat with Experts</span>
        </button>
      </div>
    </div>
  );
}
