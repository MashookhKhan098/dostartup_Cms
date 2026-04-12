"use client";

import React from "react";
import Navbar from "../components/Navbar";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import PopularSearches from "../components/PopularSearches";
import Hero from "../components/Startup/Hero";
import DynamicPricingSection from "../components/DynamicPricingSection";

export default function LLPRegistration() {
  return (
    <div className="min-h-screen bg-[#F4F3EE] font-sans text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <Hero defaultEntity="LLP" />

      {/* Main Content Section */}
      <main className="max-w-[1180px] mx-auto px-6 py-12 space-y-12">
        <section className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">LLP Registration in India</h2>
          <div className="prose prose-slate max-w-none text-gray-600 space-y-4">
            <p>
              Limited Liability Partnership (LLP) has become a preferred business form as it is very easy to manage 
              and provides the benefits of limited liability to the partners. It is a hybrid between a company 
              and a partnership, offering the flexibility of a partnership while having the legal status of a company.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-[#F4F3EE]/50 p-6 rounded-lg border border-gray-100">
                <h3 className="font-semibold text-slate-900 mb-3">Advantages of LLP</h3>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Partners have Limited Liability</li>
                  <li>Lower Compliance cost compared to companies</li>
                  <li>No minimum capital requirement</li>
                  <li>Easier to exit or dissolve</li>
                </ul>
              </div>
              <div className="bg-[#F4F3EE]/50 p-6 rounded-lg border border-gray-100">
                <h3 className="font-semibold text-slate-900 mb-3">Required Documents</h3>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>PAN and Aadhaar of all Partners</li>
                  <li>Address Proof of Partners (Voter ID/Passport)</li>
                  <li>Registered Office Proof (Rent Agreement/Utility Bill)</li>
                  <li>Digital Signature Certificate (DSC) for Designated Partners</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Pricing Section */}
        <DynamicPricingSection category="llp-registration" />

        {/* FAQs + Blogs — uses FAQAccordion which handles 40/60 layout internally */}
        <FAQAccordion category="llp-registration" />
      </main>

      <PopularSearches />
      <Footer />
    </div>
  );
}
