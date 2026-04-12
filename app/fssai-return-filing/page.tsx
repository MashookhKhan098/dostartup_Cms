"use client";

import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, CheckCircle, Search } from "lucide-react";
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

const FSSAI_SERVICES = [
  "Renewal",
  "Return Filing",
  "Modifications (State and Central)",
  "Surrender",
];

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

const YEARS_OPTIONS = ["1 Year", "3 Years", "5 Years"];

const FssaiServiceDropdown: React.FC<{
  value: string | null;
  onChange: (v: string) => void;
}> = ({ value, onChange }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState<string[]>(FSSAI_SERVICES);
  useOnClickOutside(ref, () => { setOpen(false); setQuery(""); setFiltered(FSSAI_SERVICES); });
  useEffect(() => {
    setFiltered(FSSAI_SERVICES.filter((s) => s.toLowerCase().includes(query.trim().toLowerCase())));
  }, [query]);
  return (
    <div className="relative" ref={ref}>
      <label className="block text-sm font-medium text-[#2F2E2B] mb-2">FSSAI Service</label>
      <button
        onClick={() => setOpen((s) => !s)}
        className="w-full text-left px-4 py-3 border border-[#E5E2DA] rounded-lg bg-white flex items-center justify-between focus:outline-none focus:ring-1 focus:ring-[#C15F3C] transition"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="truncate text-sm text-[#6F6B63]">{value ?? "Select FSSAI Service"}</span>
        <ChevronDown className="w-4 h-4 text-[#B1ADA1]" />
      </button>
      {open && (
        <div className="absolute z-50 mt-1 w-full bg-white border border-[#E5E2DA] rounded-xl shadow-xl">
          <div className="p-3 border-b border-[#E5E2DA]">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#B1ADA1]" />
              <input
                className="w-full pl-9 pr-3 py-2 border border-[#E5E2DA] rounded-lg text-sm bg-white focus:outline-none focus:ring-1 focus:ring-[#C15F3C]"
                placeholder="Search FSSAI Service..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
              />
            </div>
          </div>
          <div className="max-h-48 overflow-auto">
            {filtered.map((s) => (
              <button
                key={s}
                onClick={() => { onChange(s); setOpen(false); setQuery(""); }}
                className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-[#F4F3EE] hover:text-[#C15F3C] ${value === s ? "bg-[#F4F3EE] text-[#C15F3C] font-medium" : "text-[#6F6B63]"
                  }`}
              >
                {s}
              </button>
            ))}
            {filtered.length === 0 && (
              <div className="px-4 py-3 text-sm text-[#B1ADA1]">No results</div>
            )}
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
  return (
    <div ref={ref} className="relative">
      <label className="block text-sm font-medium text-[#2F2E2B] mb-2">Select Years</label>
      <button
        onClick={() => setOpen((s) => !s)}
        className="w-full text-left px-4 py-3 border border-[#E5E2DA] rounded-lg bg-white flex items-center justify-between focus:outline-none focus:ring-1 focus:ring-[#C15F3C] transition"
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
                className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-[#F4F3EE] hover:text-[#C15F3C] ${value === y ? "bg-[#F4F3EE] text-[#C15F3C] font-medium" : "text-[#6F6B63]"
                  }`}
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

export default function FSSAIReturnFiling(): React.ReactElement {
  const [service, setService] = useState<string | null>("Return Filing");
  const [panOrGstin, setPanOrGstin] = useState("");
  const [existingLicense, setExistingLicense] = useState("");
  const [stateUt, setStateUt] = useState<string | null>(null);
  const [years, setYears] = useState<string | null>("3 Years");

  function handleApplyNow() {
    if (!panOrGstin.trim()) { alert("Please enter PAN / GSTIN"); return; }
    if (!service) { alert("Please select FSSAI service"); return; }
    alert(`Apply: Service=${service}\nPAN/GSTIN=${panOrGstin}\nLicense=${existingLicense}\nState=${stateUt}\nYears=${years}`);
  }

  return (
    <div className="min-h-screen bg-[#F4F3EE]">
      <Head>
        <title>FSSAI Return Filing - DoStartup</title>
      </Head>

      <Navbar />

      {/* ── Hero Section ── */}
      <section className="bg-[#F4F3EE] border-b border-[#E5E2DA] pt-10 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* Left: Info */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 bg-white border border-[#E5E2DA] rounded-full px-3 py-1 mb-4 shadow-sm">
                <span className="w-2 h-2 bg-[#C15F3C] rounded-full" />
                <span className="text-xs font-medium text-[#C15F3C]">FSSAI Compliance</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-semibold text-[#2F2E2B] mb-4 leading-tight">
                Get Your <span className="text-[#C15F3C]">FSSAI Return Filing</span>
              </h1>

              <p className="text-sm text-[#6F6B63] mb-8 max-w-xl leading-relaxed">
                Ensure your food business stays compliant with FSSAI by filing your annual return on
                time. Our professional team simplifies the filing process with a fast, secure, and
                fully online service.
              </p>

              <div className="bg-white border border-[#E5E2DA] rounded-xl p-5 space-y-3 shadow-sm">
                {[
                  "100% Online filing process",
                  "Expert assistance throughout the process",
                  "Fast, effortless, and transparent",
                  "Swift processing and quick approval",
                  "Receive your FSSAI certificate without delay",
                ].map((feat) => (
                  <div key={feat} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-[#E5E2DA] shrink-0">
                      <svg className="w-4 h-4 text-[#C15F3C]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-[#2F2E2B]">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form Card */}
            <div>
              <div className="bg-white rounded-2xl shadow-sm border border-[#E5E2DA] overflow-hidden">
                <div className="h-1.5 w-full bg-[#C15F3C]" />
                <div className="p-6 space-y-4">
                  <h2 className="text-base font-semibold text-[#2F2E2B]">Start Your Filing</h2>

                  <FssaiServiceDropdown value={service} onChange={setService} />

                  <p className="text-xs text-[#6F6B63] leading-relaxed">
                    FSSAI license holders must file annual returns to remain compliant. We manage the
                    complete filing process on your behalf, helping you avoid late fees and penalties
                    while keeping your business hassle-free.
                  </p>

                  <div>
                    <label className="block text-sm font-medium text-[#2F2E2B] mb-2">PAN / GSTIN</label>
                    <input
                      value={panOrGstin}
                      onChange={(e) => setPanOrGstin(e.target.value)}
                      type="text"
                      className="w-full px-4 py-3 bg-white border border-[#E5E2DA] rounded-lg text-sm text-[#2F2E2B] placeholder-[#B1ADA1] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] transition"
                      placeholder="PAN / GSTIN"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#2F2E2B] mb-2">Existing License Number</label>
                    <input
                      type="text"
                      value={existingLicense}
                      onChange={(e) => setExistingLicense(e.target.value)}
                      placeholder="Existing License Number"
                      className="w-full px-4 py-3 bg-white border border-[#E5E2DA] rounded-lg text-sm text-[#2F2E2B] placeholder-[#B1ADA1] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] transition"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#2F2E2B] mb-2">State / UT</label>
                      <select
                        value={stateUt ?? ""}
                        onChange={(e) => setStateUt(e.target.value || null)}
                        className="w-full px-4 py-3 bg-white border border-[#E5E2DA] rounded-lg text-sm text-[#6F6B63] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] transition"
                      >
                        <option value="">Select State / UT</option>
                        {STATES_UTS.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <YearsDropdown value={years} onChange={setYears} />
                  </div>

                  <button
                    onClick={handleApplyNow}
                    className="w-full py-3 bg-[#C15F3C] hover:bg-[#A94E30] text-white text-sm font-semibold rounded-lg transition-colors duration-200"
                  >
                    Apply Now
                  </button>
                </div>
              </div>

              {/* Trust badges */}
              <div className="mt-4 flex items-center justify-center gap-5 text-xs text-[#B1ADA1]">
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 fill-[#C15F3C]" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>Trusted by 50,000+ businesses</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 fill-[#C15F3C]" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>100% Secure & Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* ── Left Main Content ── */}
            <div className="lg:w-[65%] space-y-4">

              {/* Article Card */}
              <div className="bg-white rounded-2xl border border-[#E5E2DA] p-6 space-y-5 shadow-sm">
                <div className="text-xs text-[#B1ADA1]">
                  DoStartup / Registrations / <span className="text-[#C15F3C]">FSSAI Return Filing</span>
                </div>

                <h2 className="text-xl font-semibold text-[#2F2E2B]">FSSAI Annual Return Filing</h2>

                {/* Author row */}
                <div className="flex items-center gap-3 pb-2 border-b border-[#E5E2DA]">
                  <div className="w-10 h-10 rounded-full bg-white border border-[#E5E2DA] flex items-center justify-center text-sm font-semibold text-[#C15F3C]">R</div>
                  <div>
                    <div className="text-sm font-medium text-[#2F2E2B]">Rajesh Kumar Patra</div>
                    <div className="text-xs text-[#B1ADA1]">Business Advisor • Updated on: Mar 18, 2025</div>
                  </div>
                </div>

                <p className="text-sm text-[#6F6B63] leading-relaxed">
                  DoStartup is your trusted partner for a seamless, stress-free experience to file Food
                  Business Annual Returns before the FSSAI annual return due date. We understand the
                  critical importance of compliance in the food industry, and our dedicated team of
                  experts is committed to helping you swiftly fulfill your regulatory obligations. Our
                  comprehensive services ensure that your food business operates in full compliance with
                  FSSAI regulations, safeguarding both your business and the well-being of your consumers.
                </p>

                {[
                  {
                    title: "FSSAI Return Filing",
                    body: "Following regulations set by FSSAI, every food business holding an FSSAI license is obligated to submit an annual return individually. This requirement applies to each license held, regardless of whether the same Food Business Operator possesses multiple licenses.",
                  },
                  {
                    title: "Purpose of the Annual Food Business Return",
                    body: "The Annual Food Business Return ensures that food businesses adhere to FSSAI regulations and maintain transparency in their operations. By submitting the annual return, businesses provide essential information to the FSSAI concerning production, handling, storage, and distribution. Failure to adhere to this requirement may result in penalties or suspension of the FSSAI license.",
                  },
                ].map(({ title, body }) => (
                  <div key={title}>
                    <h3 className="text-base font-semibold text-[#2F2E2B] mb-2">{title}</h3>
                    <p className="text-sm text-[#6F6B63] leading-relaxed">{body}</p>
                  </div>
                ))}

                <div>
                  <h3 className="text-base font-semibold text-[#2F2E2B] mb-3">
                    Food Business Operators (FBOs) Eligible for Annual Return Submission
                  </h3>
                  <p className="text-sm text-[#6F6B63] mb-3 leading-relaxed">
                    The annual return in Form D1 FSSAI must be filed online by the following categories of FBOs:
                  </p>
                  <ul className="space-y-2">
                    {["Food manufacturers", "Labelers", "Importers", "Packers"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-[#6F6B63]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C15F3C] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-[#2F2E2B] mb-3">Eligibility Criteria for FSSAI Returns</h3>
                  <ul className="space-y-2">
                    {[
                      "Business Turnover: FBOs with a business turnover exceeding ₹12 lakhs must file FSSAI returns.",
                      "Involvement in Food Activities: FBOs engaged in importing, selling, manufacturing, exporting, storing, distributing, handling, or transporting any food product.",
                      "Milk Manufacturing and Distribution: FBOs involved in manufacturing and distributing milk.",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[#6F6B63]">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C15F3C] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-[#2F2E2B] mb-3">Exempted Entities from Filing Returns</h3>
                  <ul className="space-y-2">
                    {["Fast-food joints", "Restaurants", "Grocery stores", "Canteens"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-[#6F6B63]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C15F3C] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {[
                  {
                    title: "Deadline for Food Business Annual Return",
                    body: "All licensed Manufacturers and Importers are required to submit their Annual Return using Form D1 FSSAI no later than May 31st each year, covering activities conducted during the previous Financial Year. Ensure to file before the FSSAI annual return due date to avoid penalty.",
                  },
                  {
                    title: "FSSAI Annual Return Penalty for Late or Non-Submission",
                    body: "Any delay in filing the Food Business Annual Return beyond May 31 each year shall attract a penalty of ₹100 per day for delay until the date of filing. The maximum penalty levied shall be at most five times the annual license fees.",
                  },
                ].map(({ title, body }) => (
                  <div key={title}>
                    <h3 className="text-base font-semibold text-[#2F2E2B] mb-2">{title}</h3>
                    <p className="text-sm text-[#6F6B63] leading-relaxed">{body}</p>
                  </div>
                ))}

                <div>
                  <h3 className="text-base font-semibold text-[#2F2E2B] mb-3">
                    Information Needed for Filing the FSSAI Annual Return
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Name of the product manufactured or imported.",
                      "Size of the container, packaging, or bulk packaging.",
                      "Quantity measured in Metric Tons.",
                      "Selling price of the food products per kilogram or per unit of packaging.",
                      "Value of the Food Product.",
                      "Quantity of imported goods measured in kilograms.",
                      "A comprehensive list of countries or ports from which food products are imported.",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[#6F6B63]">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C15F3C] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-[#2F2E2B] mb-2">
                    Online Submission of Annual Returns for Food Businesses
                  </h3>
                  <p className="text-sm text-[#6F6B63] leading-relaxed">
                    FSSAI now requires food businesses engaged in the manufacturing and importing of food
                    products to submit their annual returns online, starting from the financial year 2020–2021,
                    as per the notification released on December 18, 2020.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-[#2F2E2B] mb-3">
                    How DoStartup Can Assist with FSSAI Annual Return Filings
                  </h3>
                  <div className="bg-white border border-[#E5E2DA] rounded-xl p-5 space-y-3">
                    {[
                      { title: "Compliance Expertise", body: "Our experts provide clear guidance on the FSSAI Annual Return filing process." },
                      { title: "Document Collection and Verification", body: "We assist in collecting and organizing the required information and documents needed for the FSSAI Annual Return." },
                      { title: "Form D1 Preparation", body: "We prepare the FSSAI Annual Return in the prescribed Form D1, ensuring all relevant details are correctly filled out." },
                      { title: "Timely Submission", body: "We inform you about the FSSAI annual return last date to ensure you file on time, avoiding penalties." },
                    ].map(({ title, body }) => (
                      <div key={title} className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-[#E5E2DA] shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-[#C15F3C]" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-[#2F2E2B]">{title}</div>
                          <div className="text-xs text-[#6F6B63] mt-0.5">{body}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-[#6F6B63]">
                    Contact us now to file your FSSAI Annual Return and ensure food safety compliance for your business.
                  </p>
                </div>
              </div>
            </div>

            {/* ── Right Sidebar ── */}
            <aside className="lg:w-[35%] h-fit sticky top-28 hidden lg:block">
              <SidebarCart />
            </aside>
          </div>
        </div>
      </section>

      <div className="mt-4">
        <DynamicPricingSection category="fssai-return-filing" />
      </div>

      <FAQAccordion category="fssai-return-filing" />

      <PopularSearches />

      <Footer />

      {/* WhatsApp CTA */}
      <button
        className="fixed right-5 bottom-5 flex items-center gap-2 px-6 py-4 bg-[#C15F3C] hover:bg-[#A94E30] text-white text-sm font-semibold rounded-full shadow-lg transition-colors duration-200 z-50"
        aria-label="Live chat with experts"
        onClick={() => alert("Open WhatsApp chat")}
      >
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden fill="currentColor">
          <path d="M12 2a10 10 0 00-8.66 14.2L2 22l5.93-1.7A10 10 0 1012 2z" />
        </svg>
        Live Chat with Experts
      </button>
    </div>
  );
}
