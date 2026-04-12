"use client";

import React from "react";
import Navbar from "../components/Navbar";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import PopularSearches from "../components/PopularSearches";
import Hero from "../components/Startup/Hero";
import DynamicPricingSection from "../components/DynamicPricingSection";

const TOKEN = process.env.NEXT_PUBLIC_COCKPIT_API_KEY || "";
const CMS_URL = process.env.NEXT_PUBLIC_COCKPIT_URL || "";

export default function OnePersonCompany() {
  return (
    <div className="min-h-screen bg-[#F4F3EE] font-sans text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <Hero defaultEntity="OPC" />

      {/* Main Content Section - Hardcoded for reliability */}
      <main className="max-w-[1180px] mx-auto px-6 py-12 space-y-12">
        <section className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">About One Person Company (OPC)</h2>
          <div className="prose prose-slate max-w-none text-gray-600 space-y-4">
            <p>
              The One Person Company (OPC) is a revolutionary business structure introduced in the Companies Act 2013. 
              It allows a single entrepreneur to operate a corporate entity with limited liability protection, 
              providing the legal status of a company while allowing the owner to maintain full control.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-[#F4F3EE]/50 p-6 rounded-lg border border-gray-100">
                <h3 className="font-semibold text-slate-900 mb-3">Key Benefits</h3>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Limited Liability for the single owner</li>
                  <li>Legal status of a separate corporate entity</li>
                  <li>Continuous existence (Perpetual Succession)</li>
                  <li>Easier access to bank loans and funding</li>
                </ul>
              </div>
              <div className="bg-[#F4F3EE]/50 p-6 rounded-lg border border-gray-100">
                <h3 className="font-semibold text-slate-900 mb-3">Requirements</h3>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Only 1 Director and 1 Member (can be the same person)</li>
                  <li>Minimum 1 Nominee is mandatory</li>
                  <li>Director must be an Indian Citizen and Resident</li>
                  <li>Unique name approved by the MCA</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Pricing Section */}
        <DynamicPricingSection category="one-person-company" />

        {/* FAQs + Blogs — uses FAQAccordion which handles 40/60 layout internally */}
        <FAQAccordion category="one-person-company" />
      </main>

      <PopularSearches />
      <Footer />
    </div>
  );
}
