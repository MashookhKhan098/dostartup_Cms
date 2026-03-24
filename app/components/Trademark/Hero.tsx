"use client";
import React from "react";
import { useState } from "react";
import { BadgeCheck, Search, User, Briefcase } from "lucide-react";

type Feature = {
  icon: React.ReactNode;
  text: string;
};

type FormField =
  | {
    type: "input";
    name: string;
    placeholder: string;
    inputType?: string;
  }
  | {
    type: "select";
    name: string;
    placeholder: string;
    options: string[];
  };

type TrademarkServiceProps = {
  serviceName: string;
  serviceDescription: string;
  formFields: FormField[];
  buttonText: string;
  onSubmit?: (data: Record<string, FormDataEntryValue>) => void;
};

type Props = {
  trademarkService: TrademarkServiceProps;
};

export default function TrademarkHero({ trademarkService }: Props) {
  const {
    serviceName,
    serviceDescription,
    formFields,
    buttonText,
    onSubmit
  } = trademarkService;

  return (
    <div className="min-h-screen bg-[#F4F3EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* LEFT SECTION */}
          <div className="flex-1 bg-white rounded-2xl shadow-sm border border-[#E5E2DA] p-6">
            <div className="flex flex-col md:flex-row gap-8">

              {/* LEFT SIDEBAR WITH IMAGE PLACEHOLDER */}
              <div className="w-full md:w-64 flex-shrink-0">
                <div className="w-full h-48 bg-gradient-to-br from-[#C15F3C] to-[#A94E30] rounded-xl border border-[#E5E2DA] flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Trademark</span>
                </div>

                <div className="mt-4 space-y-2">
                  {["Trademark Classes", "Fee Structure", "Documents Required"].map((item) => (
                    <p key={item} className="text-sm text-[#6F6B63] hover:text-[#C15F3C] cursor-pointer">
                      {item}
                    </p>
                  ))}
                  <button className="text-sm text-[#C15F3C] font-medium hover:underline">
                    Learn More →
                  </button>
                </div>
              </div>

              {/* MAIN CONTENT */}
              <div className="flex-1 space-y-6">

                {/* BADGE */}
                <div>
                  <div className="inline-flex items-center gap-2 bg-[#F4F3EE] border border-[#E5E2DA] rounded-full px-3 py-1">
                    <div className="w-2 h-2 bg-[#C15F3C] rounded-full" />
                    <span className="text-xs font-medium text-[#C15F3C]">
                      TRADEMARK REGISTRATION
                    </span>
                  </div>
                </div>

                {/* HEADING */}
                <div>
                  <h1 className="text-2xl sm:text-3xl font-semibold text-[#2F2E2B] leading-tight">
                    Manage & Track your<br />
                    <span className="text-[#C15F3C]">
                      Trademark Application
                    </span>
                  </h1>

                  <p className="text-sm text-[#6F6B63] leading-relaxed mt-3">
                    AI-powered search and government-backed filings, handled end-to-end by India's most trusted compliance platform.
                  </p>
                </div>

                {/* FEATURES */}
                <div className="bg-[#F4F3EE] border border-[#E5E2DA] rounded-xl p-5">
                  <span className="inline-block bg-[#C15F3C] text-white text-xs px-3 py-1.5 rounded-full mb-4">
                    Why Choose Us
                  </span>

                  <div className="space-y-3">
                    {STATIC_FEATURES.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 group">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:bg-[#C15F3C] group-hover:text-white transition-colors border border-[#E5E2DA]">
                          <div className="text-[#C15F3C] group-hover:text-white w-4 h-4">
                            {item.icon}
                          </div>
                        </div>
                        <span className="text-sm font-medium text-[#2F2E2B] group-hover:text-[#C15F3C] transition-colors">
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* TRUST BADGES */}
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-[#C15F3C] to-[#A94E30] border-2 border-white shadow-sm" />
                    ))}
                  </div>
                  <span className="text-sm text-[#6F6B63]">Trusted by 10,000+ businesses</span>
                </div>

                {/* LINKS */}
                <div className="flex justify-between text-sm">
                  <button className="text-[#C15F3C] hover:underline">
                    Terms and conditions
                  </button>
                  <button className="text-[#C15F3C] hover:underline">
                    Need Help?
                  </button>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:w-96 bg-white rounded-2xl shadow-sm border border-[#E5E2DA] overflow-hidden">

            {/* FORM HEADER */}
            <div className="bg-gradient-to-r from-[#C15F3C] to-[#A94E30] px-6 py-4">
              <h2 className="text-lg font-semibold text-white">Trademark Services</h2>
              <p className="text-sm text-[#F4F3EE]">Register your trademark in 3 simple steps</p>
            </div>

            {/* FORM CONTENT */}
            <div className="p-6 space-y-6">
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!onSubmit) return;
                  const data = Object.fromEntries(
                    new FormData(e.currentTarget)
                  );
                  onSubmit(data as Record<string, string>);
                }}
              >

                {/* SERVICE SELECT */}
                <div>
                  <label className="block text-xs text-[#6F6B63] mb-1">
                    Select Service
                  </label>
                  <div className="relative">
                    <select
                      name="service"
                      className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] bg-[#F4F3EE] appearance-none cursor-pointer"
                    >
                      <option>{serviceName}</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-[#6F6B63]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* DESCRIPTION */}
                <div className="bg-[#F4F3EE] border-l-4 border-[#C15F3C] p-4 rounded-r-lg">
                  <p className="text-sm text-[#2F2E2B] leading-relaxed">
                    {serviceDescription}
                  </p>
                </div>

                {/* APPLICATION NUMBER */}
                <div>
                  <label className="block text-xs text-[#6F6B63] mb-1">
                    Application Number
                  </label>
                  <input
                    name="applicationNumber"
                    type="text"
                    placeholder="Application Number"
                    className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] placeholder-[#B1ADA1] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] bg-[#F4F3EE]"
                  />
                </div>

                {/* BRAND NAME */}
                <div>
                  <label className="block text-xs text-[#6F6B63] mb-1">
                    Brand Name
                  </label>
                  <input
                    name="brandName"
                    type="text"
                    placeholder="Brand Name"
                    className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] placeholder-[#B1ADA1] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] bg-[#F4F3EE]"
                  />
                </div>

                {/* SELECT CLASS */}
                <div>
                  <label className="block text-xs text-[#6F6B63] mb-1">
                    Select Class
                  </label>
                  <div className="relative">
                    <select
                      name="class"
                      className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] bg-[#F4F3EE] appearance-none cursor-pointer"
                    >
                      <option value="">Select Class</option>
                      <option>Class 1 - Chemicals</option>
                      <option>Class 2 - Paints</option>
                      <option>Class 3 - Cosmetics</option>
                      <option>Class 4 - Lubricants</option>
                      <option>Class 5 - Pharmaceuticals</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-[#6F6B63]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  className="w-full bg-[#C15F3C] text-white font-semibold py-3 rounded-lg text-sm hover:bg-[#A94E30] transition shadow-sm hover:shadow-md mt-2"
                >
                  Get Quote →
                </button>

                {/* SECURITY BADGE */}
                <div className="flex items-center justify-center gap-2 text-xs text-[#B1ADA1] pt-2">
                  <svg className="w-4 h-4 text-[#C15F3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>100% secure · Govt. filing guarantee</span>
                </div>

              </form>
            </div>

            {/* FOOTER */}
            <div className="bg-[#F4F3EE] px-6 py-3 border-t border-[#E5E2DA]">
              <p className="text-sm text-center text-[#6F6B63]">
                Need help choosing?{' '}
                <button className="text-[#C15F3C] hover:underline font-semibold">
                  Talk to an expert →
                </button>
              </p>
            </div>

          </div>
        </div>

        {/* TRUST BADGES - REDUCED BOTTOM GAP */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-[#6F6B63] mt-2 pb-0">
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-[#C15F3C] text-[#C15F3C]" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span>4.9/5 (2.5k+ reviews)</span>
          </div>
          <span>Trusted by 50k+ businesses</span>
        </div>

      </div>
    </div>
  );
}

/* ================= STATIC DATA ================= */

const STATIC_FEATURES: Feature[] = [
  {
    icon: <BadgeCheck className="w-full h-full" />,
    text: "100% Legal Validity & Govt. Filing Guarantee",
  },
  {
    icon: <Search className="w-full h-full" />,
    text: "AI-Powered Trademark Search & Filing",
  },
  {
    icon: <User className="w-full h-full" />,
    text: "Dedicated Experts & Compliance Support",
  },
  {
    icon: <Briefcase className="w-full h-full" />,
    text: "MSME Priority Pricing & Global Protection",
  },
];