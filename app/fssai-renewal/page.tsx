"use client";

import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, CheckCircle, Star } from "lucide-react";
import Footer from "../components/Footer";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Navbar from "../components/Navbar";
import SidebarCart from "../components/SidebarCart";
import PopularSearches from "../components/PopularSearches";

function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T | null>,
  handler: () => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const el = ref?.current;
      if (!el || el.contains(event.target as Node)) return;
      handler();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [handler, ref]);
}

const RenewalTypeDropdown: React.FC<{
  value: string | null;
  onChange: (v: string) => void;
}> = ({ value, onChange }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  useOnClickOutside(ref, () => setOpen(false));
  const RENEWAL_OPTIONS = [
    "FSSAI Registration Renewal",
    "FSSAI State License Renewal - Trader, Restaurant",
    "FSSAI State Renewal - Manufacturer, Relabeler",
    "FSSAI License Central Renewal",
  ];
  return (
    <div ref={ref} className="relative">
      <label className="block text-sm font-medium text-[#2F2E2B] mb-2">
        Renewal Type
      </label>
      <button
        onClick={() => setOpen((s) => !s)}
        className="w-full text-left px-4 py-3 border border-[#E5E2DA] rounded-lg bg-white flex items-center justify-between focus:outline-none focus:ring-1 focus:ring-[#C15F3C] transition shadow-sm"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="truncate text-sm text-[#6F6B63]">
          {value ?? "Select Renewal Type"}
        </span>
        <ChevronDown className="w-4 h-4 text-[#B1ADA1]" />
      </button>
      {open && (
        <div className="absolute z-40 mt-1 w-full bg-white border border-[#E5E2DA] rounded-xl shadow-xl" role="listbox">
          <div className="py-2 max-h-56 overflow-auto">
            <div className="px-3 py-1 text-xs text-[#B1ADA1]">Select Renewal Type</div>
            {RENEWAL_OPTIONS.map((opt) => (
              <button
                key={opt}
                onClick={() => { onChange(opt); setOpen(false); }}
                className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-slate-50 hover:text-[#C15F3C] ${value === opt ? "bg-slate-50 text-[#C15F3C] font-medium" : "text-[#6F6B63]"
                  }`}
                role="option"
                aria-selected={value === opt}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const StateDropdown: React.FC<{
  value: string | null;
  onChange: (v: string) => void;
}> = ({ value, onChange }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const STATES_UTS = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
    "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim",
    "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
    "West Bengal", "Delhi", "Puducherry", "Chandigarh",
    "Andaman and Nicobar Islands", "Dadra and Nagar Haveli and Daman and Diu",
    "Lakshadweep", "Ladakh", "Jammu & Kashmir",
  ];
  const [filtered, setFiltered] = useState<string[]>(STATES_UTS);
  useOnClickOutside(ref, () => { setOpen(false); setQuery(""); setFiltered(STATES_UTS); });
  useEffect(() => {
    setFiltered(STATES_UTS.filter((s) => s.toLowerCase().includes(query.trim().toLowerCase())));
  }, [query]);
  return (
    <div ref={ref} className="relative">
      <label className="block text-sm font-medium text-[#2F2E2B] mb-2">State / UT</label>
      <button
        onClick={() => setOpen((s) => !s)}
        className="w-full text-left px-4 py-3 border border-[#E5E2DA] rounded-lg bg-white flex items-center justify-between focus:outline-none focus:ring-1 focus:ring-[#C15F3C] transition shadow-sm"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="truncate text-sm text-[#6F6B63]">{value ?? "Select State/UT"}</span>
        <ChevronDown className="w-4 h-4 text-[#B1ADA1]" />
      </button>
      {open && (
        <div className="absolute z-40 mt-1 w-full bg-white border border-[#E5E2DA] rounded-xl shadow-xl" role="listbox">
          <div className="p-3">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
              className="w-full px-3 py-2 border border-[#E5E2DA] rounded-lg text-sm bg-white focus:outline-none focus:ring-1 focus:ring-[#C15F3C]"
              placeholder="Search State/UT..."
            />
          </div>
          <div className="max-h-52 overflow-auto divide-y divide-[#E5E2DA]">
            {filtered.length === 0 && (
              <div className="px-4 py-3 text-sm text-[#B1ADA1]">No results</div>
            )}
            {filtered.map((s) => (
              <button
                key={s}
                onClick={() => { onChange(s); setOpen(false); setQuery(""); setFiltered(STATES_UTS); }}
                className="w-full text-left px-4 py-2.5 text-sm text-[#6F6B63] hover:bg-slate-50 hover:text-[#C15F3C] transition-colors"
                role="option"
                aria-selected={value === s}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const YearsDropdown: React.FC<{
  value: string | null;
  onChange: (v: string) => void;
}> = ({ value, onChange }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  useOnClickOutside(ref, () => setOpen(false));
  const YEARS_OPTIONS = ["1 Year", "3 Years", "5 Years"];
  return (
    <div ref={ref} className="relative">
      <label className="block text-sm font-medium text-[#2F2E2B] mb-2">Select Years</label>
      <button
        onClick={() => setOpen((s) => !s)}
        className="w-full text-left px-4 py-3 border border-[#E5E2DA] rounded-lg bg-white flex items-center justify-between focus:outline-none focus:ring-1 focus:ring-[#C15F3C] transition shadow-sm"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="truncate text-sm text-[#6F6B63]">{value ?? "3 Years"}</span>
        <ChevronDown className="w-4 h-4 text-[#B1ADA1]" />
      </button>
      {open && (
        <div className="absolute z-40 mt-1 w-full bg-white border border-[#E5E2DA] rounded-xl shadow-xl">
          <div className="py-2 max-h-44 overflow-auto">
            {YEARS_OPTIONS.map((y) => (
              <button
                key={y}
                onClick={() => { onChange(y); setOpen(false); }}
                className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-slate-50 hover:text-[#C15F3C] ${value === y ? "bg-slate-50 text-[#C15F3C] font-medium" : "text-[#6F6B63]"
                  }`}
                role="option"
                aria-selected={value === y}
              >
                {y}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default function FSSAIRenewal(): React.ReactElement {
  const [panOrGstin, setPanOrGstin] = useState("");
  const [existingLicense, setExistingLicense] = useState("");
  const [renewalType, setRenewalType] = useState<string | null>(null);
  const [stateUt, setStateUt] = useState<string | null>(null);
  const [years, setYears] = useState<string | null>("3 Years");

  function handleApplyNow() {
    if (!panOrGstin.trim()) { alert("Please enter PAN / GSTIN"); return; }
    if (!renewalType) { alert("Please select renewal type"); return; }
    if (!stateUt) { alert("Please select State/UT"); return; }
    alert(`Apply: ${panOrGstin}\nLicense: ${existingLicense}\nRenewal: ${renewalType}\nState: ${stateUt}\nYears: ${years}`);
  }

  return (
    <div className="min-h-screen bg-[#F4F3EE]">
      <Head>
        <title>FSSAI Renewal - DoStartup</title>
      </Head>

      <Navbar />

      {/* ── Hero Section ── */}
      <section className="bg-[#F4F3EE] border-b border-[#E5E2DA] pt-10 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* Left: Info */}
            <div className="pt-2">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white border border-[#E5E2DA] rounded-full px-3 py-1 mb-4 shadow-sm">
                <span className="w-2 h-2 bg-[#C15F3C] rounded-full" />
                <span className="text-xs font-medium text-[#C15F3C]">FSSAI Compliance</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-semibold text-[#2F2E2B] mb-4 leading-tight">
                Get Your <span className="text-[#C15F3C]">FSSAI Renewal</span>
              </h1>

              <p className="text-sm text-[#6F6B63] mb-8 max-w-xl leading-relaxed">
                Ensure your food business stays compliant with FSSAI by renewing your license before it
                expires. Our professional team simplifies the renewal process with a fast, secure, and
                fully online service.
              </p>

              {/* Features Box */}
              <div className="bg-white border border-[#E5E2DA] rounded-xl p-5 shadow-sm space-y-3">
                {[
                  "100% Online renewal process",
                  "Expert assistance throughout the process",
                  "Fast, effortless, and transparent",
                  "Swift processing and quick approval",
                  "Receive your FSSAI certificate without delay",
                ].map((feat) => (
                  <div key={feat} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-[#E5E2DA] shrink-0 shadow-sm">
                      <CheckCircle size={16} className="text-[#C15F3C]" />
                    </div>
                    <span className="text-sm font-medium text-[#2F2E2B]">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form Card */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl border border-[#E5E2DA] overflow-hidden">
                <div className="h-1.5 w-full bg-gradient-to-r from-[#C15F3C] to-[#A94E30]" />
                <div className="p-8 space-y-5">
                  <h2 className="text-xl font-bold text-[#2F2E2B]">Start Your Renewal</h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-[#2F2E2B] mb-2 uppercase tracking-tight">PAN / GSTIN</label>
                      <input
                        value={panOrGstin}
                        onChange={(e) => setPanOrGstin(e.target.value)}
                        type="text"
                        className="w-full px-4 py-3 bg-white border border-[#E5E2DA] rounded-lg text-sm text-[#2F2E2B] placeholder-[#B1ADA1] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] transition"
                        placeholder="PAN or GSTIN"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-[#2F2E2B] mb-2 uppercase tracking-tight">Existing License Number</label>
                      <input
                        type="text"
                        value={existingLicense}
                        onChange={(e) => setExistingLicense(e.target.value)}
                        placeholder="Existing FSSAI License Number"
                        className="w-full px-4 py-3 bg-white border border-[#E5E2DA] rounded-lg text-sm text-[#2F2E2B] placeholder-[#B1ADA1] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] transition"
                      />
                    </div>

                    <RenewalTypeDropdown value={renewalType} onChange={setRenewalType} />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <StateDropdown value={stateUt} onChange={setStateUt} />
                      <YearsDropdown value={years} onChange={setYears} />
                    </div>
                  </div>

                  <button
                    onClick={handleApplyNow}
                    className="w-full py-4 bg-[#C15F3C] hover:bg-[#A94E30] text-white text-base font-bold rounded-lg transition-all duration-200 shadow-lg transform hover:-translate-y-0.5"
                  >
                    Apply Now
                  </button>
                </div>
              </div>

              {/* Trust badges */}
              <div className="mt-4 flex items-center justify-center gap-5 text-[10px] text-[#B1ADA1] font-bold uppercase tracking-widest">
                <div className="flex items-center gap-1.5">
                  <Star size={12} fill="#C15F3C" className="text-[#C15F3C]" />
                  <span>50,000+ Trust</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle size={12} className="text-[#C15F3C]" />
                  <span>100% Secure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="pt-4 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* ── Left Main Content ── */}
            <div className="lg:w-[65%] space-y-10">

              <div className="bg-white rounded-3xl border border-gray-100 p-8 md:p-10 space-y-8 shadow-sm">
                {/* Breadcrumb */}
                <div className="text-[11px] text-[#B1ADA1] uppercase tracking-[0.2em] font-bold">
                  DoStartup / Registrations / <span className="text-[#C15F3C]">FSSAI Renewal</span>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#2F2E2B] leading-tight tracking-tight">
                    FSSAI Renewal – Registration and License Renewal
                  </h2>

                  <p className="text-[15px] text-[#6F6B63] leading-relaxed">
                    For food businesses, obtaining and renewing FSSAI licenses/registrations is essential
                    for legal compliance and adherence to safety standards. The renewal of FSSAI licenses,
                    governed by the Food Safety and Standards Authority of India, is vital for any entity
                    in the food sector to ensure ongoing compliance with safety regulations and quality
                    benchmarks. With licenses usually valid for 1 to 5 years, timely renewal is key to
                    uninterrupted business operations.
                  </p>

                  <p className="text-[15px] text-[#6F6B63] leading-relaxed">
                    DoStartup offers comprehensive assistance in renewing your FSSAI license/registration,
                    simplifying the process and ensuring your food business fully complies with the
                    necessary safety and quality regulations.
                  </p>
                </div>

                {/* Sub-sections */}
                <div className="space-y-8">
                  {[
                    {
                      title: "FSSAI License and Registration for Indian Food Businesses",
                      body: "For businesses involved in manufacturing, storing, transporting, or distributing food within India, securing an FSSAI License or Registration is a crucial legal requirement. The specific type of FSSAI license needed depends on the scale and scope of the operation.",
                    },
                    {
                      title: "FSSAI Registration",
                      body: "FSSAI Registration is a mandatory requirement for small-scale food manufacturers or Food Business Operators (FBOs) with an annual turnover of less than ₹12 lakhs. This registration allows small food businesses to operate legally within India.",
                    },
                  ].map(({ title, body }) => (
                    <div key={title} className="space-y-3">
                      <h3 className="text-lg font-bold text-[#2F2E2B]">{title}</h3>
                      <p className="text-[15px] text-[#6F6B63] leading-relaxed">{body}</p>
                    </div>
                  ))}

                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-[#2F2E2B]">FSSAI License</h3>
                    <p className="text-[15px] text-[#6F6B63] leading-relaxed">
                      The FSSAI License becomes essential for food enterprises whose turnover exceeds ₹12 lakhs. The license is differentiated into:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                       {["State License: Suited for medium-sized food businesses.", "Central License: Required for larger or interstate trade businesses."].map(item => (
                         <li key={item} className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 bg-slate-50 text-sm text-[#6F6B63]">
                           <span className="w-2 h-2 rounded-full bg-[#C15F3C] shrink-0" />
                           {item}
                         </li>
                       ))}
                    </ul>
                  </div>

                  {/* Validity Table */}
                  <div className="space-y-4 pt-4">
                    <h3 className="text-lg font-bold text-[#2F2E2B]">Validity of FSSAI Registration and License</h3>
                    <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-slate-50">
                            <th className="text-left px-6 py-4 text-[#2F2E2B] font-bold uppercase tracking-wider border-b border-gray-100">License / Registration</th>
                            <th className="text-left px-6 py-4 text-[#2F2E2B] font-bold uppercase tracking-wider border-b border-gray-100">Validity</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                          {[
                            ["FSSAI Registration", "1 to 5 Years"],
                            ["FSSAI State License", "1 year"],
                            ["FSSAI Central License", "1 year"],
                          ].map(([name, dur]) => (
                            <tr key={name} className="hover:bg-slate-50 transition-colors">
                              <td className="px-6 py-4 text-[#6F6B63] font-medium">{name}</td>
                              <td className="px-6 py-4 text-[#6F6B63]">{dur}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Restored Original Sections */}
                  <div className="space-y-8">
                    {[
                      {
                        title: "Renewal of FSSAI License",
                        body: "Renewal is a crucial step to undertake before the current license expires. It's recommended to start the renewal process well before the expiry date to ensure smooth continuation of business activities.",
                      },
                      {
                        title: "FSSAI Renewal Timeline",
                        body: "The process should ideally begin 30 days before expiry; businesses can start as early as 180 days prior to prepare documents and submit the renewal application.",
                      },
                      {
                        title: "Late Fee for Delayed FSSAI License Renewal",
                        body: "A late fee of ₹100 per day applies for license renewals not initiated at least 30 days before expiry (this late fee applies to licenses and not registrations).",
                      },
                      {
                        title: "Renewal after Expiry",
                        body: "Renewals after expiry may keep the same license number but attract penalties depending on the delay (e.g., up to 90 days late: 3× the annual fee; 91–180 days late: 5× total in some cases).",
                      },
                    ].map(({ title, body }) => (
                      <div key={title} className="space-y-3">
                        <h3 className="text-lg font-bold text-[#2F2E2B]">{title}</h3>
                        <p className="text-[15px] text-[#6F6B63] leading-relaxed">{body}</p>
                      </div>
                    ))}
                  </div>

                  {/* Benefits */}
                  <div className="space-y-5">
                    <h3 className="text-lg font-bold text-[#2F2E2B]">Benefits of Renewing FSSAI License/Registration</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {["Continuous Legal Compliance", "Uninterrupted Business Operations", "Consumer Confidence",
                        "Avoidance of Penalties", "Quality Improvement", "Market Expansion",
                        "Brand Credibility", "Regulatory Updates", "Risk Management", "Operational Efficiency"
                      ].map((b) => (
                        <div key={b} className="flex items-center gap-3 text-sm text-[#6F6B63] hover:text-[#C15F3C] transition-colors p-1">
                          <CheckCircle size={14} className="text-[#C15F3C]" />
                          {b}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Documents */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-[#2F2E2B]">Documents Needed for FSSAI License Renewal</h3>
                    <div className="grid grid-cols-1 gap-3">
                      {["FSMS Certificate (if applicable)", "Updated nominee details",
                        "Documents supporting any modifications",
                        "Supporting documents on company letterhead where applicable",
                        "Any additional documents requested by licensing authority"
                      ].map((doc) => (
                        <div key={doc} className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 bg-slate-50 text-sm">
                          <CheckCircle size={14} className="text-[#C15F3C] mt-0.5 shrink-0" />
                          <span className="text-[#6F6B63]">{doc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* DoStartup Value Prop */}
                  <div className="bg-slate-50 rounded-2xl p-8 border border-gray-100 space-y-4">
                    <h3 className="text-xl font-bold text-[#2F2E2B]">Simplify FSSAI Renewal with DoStartup</h3>
                    <p className="text-[15px] text-[#6F6B63] leading-relaxed">
                      DoStartup is your all-in-one solution for FSSAI needs — registration, licensing, and renewal.
                      Our expert team manages the process end-to-end so you can focus on your business. We ensure 
                      timely filings to avoid penalties and keep your operations fully compliant with the latest 
                      RBI and FSSAI guidelines.
                    </p>
                  </div>
                </div>
              </div>

              {/* Procedure Summary Card */}
              <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
                <h3 className="text-xl font-bold text-[#2F2E2B] mb-8 uppercase tracking-widest text-[14px]">Procedure & Documents Summary</h3>
                <div className="space-y-6">
                  {[
                    "Start renewal process 30–180 days before expiry",
                    "Prepare FSMS / nominee and supporting documents",
                    "Submit online application and pay standard fees",
                  ].map((step, idx) => (
                    <div key={step} className="flex items-start gap-5">
                      <div className="w-10 h-10 rounded-2xl bg-slate-50 border border-gray-100 flex items-center justify-center shrink-0 font-bold text-[#C15F3C]">
                        0{idx + 1}
                      </div>
                      <div className="pt-2 text-[15px] text-[#6F6B63] font-medium">{step}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right Sidebar ── */}
            <aside className="lg:w-[35%] h-fit sticky top-28 hidden lg:block space-y-8">
              <SidebarCart />
            </aside>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <DynamicPricingSection category="fssai-renewal" />

      {/* FAQ Section */}
      <FAQAccordion category="fssai-renewal" />

      {/* Popular Searches */}
      <PopularSearches />

      <Footer />

      {/* WhatsApp CTA */}
      <div className="fixed right-6 bottom-6 bg-gradient-to-r from-[#C15F3C] to-[#A94E30] text-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-3 z-50 hover:scale-105 transition-all cursor-pointer font-bold border-2 border-white/20">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M12 2a10 10 0 00-8.66 14.2L2 22l5.93-1.7A10 10 0 1012 2z" />
        </svg>
        Live Chat with Experts
      </div>
    </div>
  );
}
