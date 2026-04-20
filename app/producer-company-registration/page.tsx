"use client";

/* eslint-disable @next/next/no-img-element */

import React, { useState } from "react";
import { Star } from "lucide-react";
import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import PopularSearches from "../components/PopularSearches";
import DynamicTabContent from "../components/DynamicTabContent";
import Hero from "../components/Startup/Hero";

export default function ProducerCompanyRegistrationPage() {

  return (
    <div className="min-h-screen bg-[#F4F3EE] text-slate-800">
      <Navbar />

      {/* TOP SECTION: Left = Producer Company box, Right = Hero form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* LEFT: Producer Company custom box */}
          <div className="flex-1 bg-white rounded-2xl shadow-sm border border-[#E5E2DA] p-6">
            <div className="flex flex-col md:flex-row gap-8">

              {/* Image + links */}
              <div className="w-full md:w-56 flex-shrink-0">
                <div className="w-full h-44 rounded-xl overflow-hidden border border-gray-200">
                  <img
                    src="/images/company-compliance.jpg"
                    alt="Producer Company"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  {["ID Proof", "HSN Code"].map((item) => (
                    <p key={item} className="text-sm text-[#6F6B63] hover:text-[#C15F3C] cursor-pointer transition-colors">
                      {item}
                    </p>
                  ))}
                  <button className="text-sm text-[#C15F3C] font-medium hover:underline">
                    Load More →
                  </button>
                </div>
              </div>

              {/* Right content */}
              <div className="flex-1 space-y-4">
                {/* GST badge */}
                <div className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1 shadow-sm">
                  <div className="w-2 h-2 bg-[#C15F3C] rounded-full" />
                  <span className="text-xs font-semibold text-slate-700">GST INVOICING</span>
                </div>

                {/* Title & Rating */}
                <div>
                  <h1 className="text-2xl font-bold text-slate-900 mb-1">Producer Company</h1>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />)}
                    <span className="text-sm text-slate-400 ml-1">(3)</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[14px] text-slate-500 leading-relaxed">
                  Easily register a Producer company registration through DoStartup including Incorporation kit and share certificates.
                </p>

                {/* Package Box */}
                <div className="bg-[#F5F4F0] rounded-xl p-5">
                  <div className="inline-block bg-[#9e4a2d] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4">
                    3 Exclusive Offers
                  </div>
                  <p className="text-sm font-bold text-slate-900 mb-3">1 Year License</p>
                  <ul className="space-y-2 mb-5">
                    {[
                      "Incorporation",
                      "MCA Name Approval",
                      "10 Digital Signatures",
                      "Incorporation Fee",
                      "Company Incorporation",
                      "Share Certificate",
                      "Hyper Token",
                      "DSC Support & Shipping",
                      "Bank Account Assistance",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-[13px] text-slate-700">
                        <span className="text-[#9e4a2d] font-bold text-base leading-none">›</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full border-2 border-[#9e4a2d] text-[#9e4a2d] hover:bg-[#9e4a2d] hover:text-white py-3 rounded-xl font-bold uppercase text-sm tracking-wide transition-all">
                    ADD TO CART
                  </button>
                </div>

                {/* Terms & Refer */}
                <div className="flex justify-between text-[13px] font-bold text-[#9e4a2d]">
                  <button className="hover:underline">Terms and conditions</button>
                  <button className="hover:underline">Refer a Friend</button>
                </div>

                {/* Offers and Discounts */}
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-3">Offers and discounts</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 rounded-xl border border-gray-200 bg-white">
                      <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center text-red-600 text-lg shrink-0">🟥</div>
                      <div>
                        <p className="text-[13px] font-bold text-slate-800">LEDGERS HR Software</p>
                        <p className="text-[12px] text-slate-500 mt-0.5">Attendance, Payroll, Employee Portal & HR Compliance</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-xl border border-amber-200 bg-amber-50/30">
                      <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-xs font-black text-slate-600 shrink-0">GST</div>
                      <div>
                        <p className="text-[13px] font-bold text-slate-800">Save 18% with GST Registration</p>
                        <p className="text-[12px] text-slate-500 mt-0.5">Get GST invoice with Input Tax Credit</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rating Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />)}
                    <span className="text-[12px] font-bold text-slate-700 ml-1">4.9/5 (2.5k+ reviews)</span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-bold">Trusted by 50k+ businesses</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Registration Form from Hero component */}
          <div className="lg:w-96 flex-shrink-0">
            {/* Render only the right form from Hero by wrapping it separately */}
            <ProducerRegistrationForm />
          </div>

        </div>
      </div>

      {/* Rest of the page */}
      <DynamicTabContent category="Producer Company" />
      <DynamicPricingSection category="producer-company-registration" />
      <FAQAccordion category="producer-company-registration" title="FAQs for Producer Company Registration" />
      <PopularSearches />
      <Footer />
    </div>
  );
}

/* Inline registration form matching Hero's right sidebar */
function ProducerRegistrationForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", state: "", proposedName1: "", proposedName2: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[#E5E2DA] overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#C15F3C] to-[#A94E30] px-6 py-4">
        <h2 className="text-lg font-semibold text-white">Get Started Today</h2>
        <p className="text-sm text-[#F4F3EE]">Free consultation • No hidden charges</p>
      </div>

      {/* Description */}
      <div className="px-6 pt-4">
        <div className="bg-[#F9F8F6] border-l-4 border-[#C15F3C] p-4 rounded-r-lg">
          <p className="text-sm text-[#2F2E2B] leading-relaxed">
            Producer Company registration for groups of primary producers. Empowering agricultural and rural development.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="p-6">
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          {step === 1 && (
            <>
              <div>
                <label className="block text-xs text-[#6F6B63] mb-1">State</label>
                <select name="state" value={formData.state} onChange={handleChange} className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] bg-white">
                  <option value="">Select your state</option>
                  <option value="Delhi">Delhi NCR</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Rajasthan">Rajasthan</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-[#6F6B63] mb-1">Your Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B]" />
              </div>
              <div>
                <label className="block text-xs text-[#6F6B63] mb-1">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B]" />
              </div>
              <div>
                <label className="block text-xs text-[#6F6B63] mb-1">Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} maxLength={10} placeholder="10-digit phone number" className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B]" />
              </div>
              <button type="button" onClick={() => setStep(2)} className="w-full bg-[#C15F3C] text-white font-semibold py-3 rounded-lg text-sm hover:bg-[#A94E30] transition">
                Continue →
              </button>
            </>
          )}
          {step === 2 && (
            <>
              <div>
                <label className="block text-xs text-[#6F6B63] mb-1">Proposed Name 1 (Required)</label>
                <input type="text" name="proposedName1" value={formData.proposedName1} onChange={handleChange} placeholder="First choice name" className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B]" />
              </div>
              <div>
                <label className="block text-xs text-[#6F6B63] mb-1">Proposed Name 2 (Optional)</label>
                <input type="text" name="proposedName2" value={formData.proposedName2} onChange={handleChange} placeholder="Alternative name" className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B]" />
              </div>
              <div className="flex gap-2">
                <button type="button" onClick={() => setStep(1)} className="flex-1 bg-white text-[#6F6B63] border border-[#E5E2DA] font-semibold py-3 rounded-lg text-sm">Back</button>
                <button type="button" className="flex-[2] bg-[#C15F3C] text-white font-semibold py-3 rounded-lg text-sm hover:bg-[#A94E30] transition">Submit Details →</button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
