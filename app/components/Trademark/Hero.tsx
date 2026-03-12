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
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-5 py-6 sm:py-8">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Left Column */}
          <div className="space-y-5 sm:space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-full px-3 py-1">
              <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
              <span className="text-xs sm:text-sm font-medium text-amber-700">TRADEMARK REGISTRATION</span>
            </div>

            {/* Heading */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                <span className="text-gray-900">Manage & Track your</span>
                <br />
                <span className="text-amber-700">
                  Trademark Application
                </span>
              </h1>
              
              <p className="text-sm sm:text-base text-gray-600 max-w-lg">
                AI-powered search and government-backed filings, handled end-to-end by India's most trusted compliance platform.
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-3 pt-1">
              {STATIC_FEATURES.map((item, i) => (
                <li key={i} className="flex items-center gap-3 group">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-amber-100 rounded-full flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                    <div className="text-amber-700 w-4 h-4 sm:w-5 sm:h-5">
                      {item.icon}
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-amber-700 transition-colors">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Trust Badges */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex -space-x-1.5">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 border-2 border-white shadow-sm" />
                ))}
              </div>
              <span className="text-xs sm:text-sm text-gray-600">Trusted by 10,000+ businesses</span>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            {/* Form Header */}
            <div className="bg-gradient-to-r from-amber-700 to-amber-800 px-4 sm:px-5 py-3">
              <h2 className="text-sm sm:text-base font-bold text-white">Trademark Services</h2>
              <p className="text-amber-100 text-xs mt-0.5">Register your trademark in 3 simple steps</p>
            </div>

            {/* Form Body */}
            <div className="p-4 sm:p-5">
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
                {/* Service Select */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Select Service <span className="text-amber-600">*</span>
                  </label>
                  <select 
                    name="service"
                    className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs sm:text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-amber-600 appearance-none cursor-pointer"
                  >
                    <option>{serviceName}</option>
                  </select>
                </div>

                {/* Description */}
                <div className="bg-amber-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {serviceDescription}
                  </p>
                </div>

                {/* Application Number */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Application Number <span className="text-amber-600">*</span>
                  </label>
                  <input
                    name="applicationNumber"
                    type="text"
                    placeholder="Application Number"
                    className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-600"
                  />
                </div>

                {/* Brand Name */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Brand Name <span className="text-amber-600">*</span>
                  </label>
                  <input
                    name="brandName"
                    type="text"
                    placeholder="Brand Name"
                    className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-600"
                  />
                </div>

                {/* Select Class */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Select Class <span className="text-amber-600">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="class"
                      className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs sm:text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-amber-600 appearance-none cursor-pointer"
                    >
                      <option value="">Select Class</option>
                      <option>Class 1 - Chemicals</option>
                      <option>Class 2 - Paints</option>
                      <option>Class 3 - Cosmetics</option>
                      <option>Class 4 - Lubricants</option>
                      <option>Class 5 - Pharmaceuticals</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-700 to-amber-800 text-white font-semibold py-3 px-4 rounded-lg text-sm sm:text-base hover:from-amber-800 hover:to-amber-900 transition-all mt-2 shadow-md hover:shadow-lg"
                >
                  Get Quote →
                </button>

                {/* Security Badge */}
                <div className="flex items-center justify-center gap-1.5 text-xs text-gray-500 pt-1">
                  <svg className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>100% secure · Govt. filing guarantee</span>
                </div>
              </form>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-4 sm:px-5 py-3 border-t border-gray-200">
              <p className="text-xs sm:text-sm text-center text-gray-600">
                Need help choosing?{' '}
                <a href="/contact" className="text-amber-700 hover:text-amber-800 font-semibold">
                  Talk to an expert →
                </a>
              </p>
            </div>
          </div>
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