"use client";

import React, { useState } from "react";
import { Star, CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import SidebarCart from "../components/SidebarCart";
import PopularSearches from "../components/PopularSearches";
import Footer from "../components/Footer";

const ASSETS = {
  logo: "/images/india-logo.jpg",
  hero: "/images/registered-office-change.png",
};

export default function LLPForm11Filing(): React.ReactElement {
  const [llpin, setLlpin] = useState("");

  return (
    <div className="min-h-screen bg-[#F4F3EE] font-sans text-slate-800">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#F4F3EE] pt-10 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Column */}
            <div>
              <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 mb-4">
                <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
                <span className="text-xs font-medium text-amber-700">LLP COMPLIANCE</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
                LLP Form 11
                <span className="text-amber-700 relative ml-2">
                  Filing
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-amber-600 to-amber-700 rounded-full"></div>
                </span>
              </h1>
              <p className="text-slate-600 mb-6 max-w-xl text-sm sm:text-base">
                File your LLP annual return (Form 11) quickly and accurately. We
                assist with form preparation, DSC requirements and submission to
                MCA.
              </p>

              <ul className="space-y-4">
                {[
                  { title: "Hassle-free Filing", desc: "We prepare and submit Form 11 on your behalf" },
                  { title: "DSC & DIN Assistance", desc: "Guidance on digital signatures and LLP partner details" },
                  { title: "Compliance Reminders", desc: "Avoid penalties with timely filings" },
                  { title: "End-to-end Support", desc: "From document checklist to MCA submission" }
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 group">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-amber-100 text-amber-700 group-hover:bg-amber-200 transition-colors">
                      ✓
                    </div>
                    <div>
                      <div className="font-semibold text-sm sm:text-base">{feature.title}</div>
                      <div className="text-xs sm:text-sm text-slate-600">{feature.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-3 mt-8">
                <div className="flex -space-x-1.5">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-7 h-7 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 border-2 border-white shadow-sm" />
                  ))}
                </div>
                <span className="text-sm text-gray-500 font-medium">Trusted by 10,000+ businesses</span>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="relative">
              <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-8 sm:p-10">
                <div className="absolute -top-4 left-10 right-10 h-2 bg-gradient-to-r from-[#C15F3C] to-[#A74A2F] rounded-full shadow-lg" />
                
                <h3 className="text-xl font-bold text-slate-900 mb-6">Filing Status</h3>
                
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      LLPIN <span className="text-amber-600">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50 transition-all"
                      placeholder="e.g. AAA-0000"
                      value={llpin}
                      onChange={(e) => setLlpin(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      LLP Name
                    </label>
                    <input
                      type="text"
                      placeholder="Auto-populated"
                      className="w-full px-4 py-3 border border-gray-100 rounded-xl bg-gray-50 text-slate-400 cursor-not-allowed"
                      readOnly
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Financial Year <span className="text-amber-600">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50"
                      placeholder="e.g. 2024-25"
                    />
                  </div>

                  <button className="w-full bg-[#C15F3C] text-white py-4 rounded-xl font-bold shadow-lg hover:bg-[#A74A2F] transform transition-all active:scale-95 mt-4">
                    Check & File Form 11
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-gray-400 mt-4">
                    <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                    <span>Secure MCA Server Connection Established</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Article */}
          <div className="lg:col-span-2 space-y-10">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-900">
                LLP Annual Return (Form 11) Guide
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                LLP Form 11 is the annual return that every Limited Liability
                Partnership must file with the Ministry of Corporate Affairs (MCA).
                It contains details of partners, contributions and
                other statutory particulars for the relevant financial year.
              </p>

              <div className="grid sm:grid-cols-2 gap-8 mb-10">
                <div className="p-6 bg-white rounded-2xl border border-amber-100">
                  <h3 className="text-lg font-bold text-amber-900 mb-3">Who Must File?</h3>
                  <ul className="space-y-2 text-sm text-slate-700 font-medium">
                    <li className="flex items-center gap-2">✓ All registered Indian LLPs</li>
                    <li className="flex items-center gap-2">✓ Active and Dormant LLPs</li>
                    <li className="flex items-center gap-2">✓ Foreign LLPs with branches</li>
                  </ul>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-slate-100">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">Timeline</h3>
                  <ul className="space-y-2 text-sm text-slate-700 font-medium">
                    <li className="flex items-center gap-2">✓ Within 60 days of FY end</li>
                    <li className="flex items-center gap-2">✓ Usually by 30th May</li>
                    <li className="flex items-center gap-2">✓ Penalty for late filing: ₹100/day</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4">Key Contents of Form 11</h3>
              <div className="space-y-4 mb-8">
                {[
                  { title: "Partners' Details", desc: "Names, addresses and DPIN/DIN information of all active partners." },
                  { title: "Contribution Details", desc: "Monetary and non-monetary capital contributions of each partner." },
                  { title: "Registered Office", desc: "Verification of the LLP's principal place of business as per MCA records." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 hover:bg-gray-50 rounded-xl transition-colors">
                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 text-[#C15F3C] font-bold">
                      0{idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Documents Required for Form 11
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Partners' PAN and Aadhaar proof",
                  "Details of partners' capital contribution",
                  "DSC of designated partner",
                  "Registered Office address proof",
                  "Financial statements summary",
                  "LLP Agreement copy"
                ].map((doc, i) => (
                  <div key={i} className="flex gap-3 items-center p-3 bg-white rounded-lg border border-gray-100">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm font-medium text-slate-700">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <SidebarCart />
            
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="font-bold text-slate-900 mb-4 text-lg">Why Choose Us</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                We provide a technology-first approach to LLP compliance. Our experts ensure your returns are filed with 100% accuracy using the LEDGERS platform.
              </p>
              <button className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-lg">
                Speak to Expert
              </button>
            </div>
            
            <div className="bg-[#C15F3C] rounded-2xl p-8 text-white shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all" />
              <h3 className="text-xl font-bold mb-4 relative z-10">Urgent Filing?</h3>
              <p className="mb-6 opacity-90 text-sm leading-relaxed relative z-10">
                Deadline approaching? Our fast-track team can process your Form 11 filing in under 24 hours.
              </p>
              <button className="w-full bg-white text-[#C15F3C] py-3.5 rounded-xl font-bold shadow-soft hover:bg-gray-50 transition-all relative z-10">
                Fast Track Processing
              </button>
            </div>
          </aside>
        </div>
      </main>

      {/* Dynamic Sections */}
      <DynamicPricingSection category="llp-form-11-filing" />
      <FAQAccordion category="llp-form-11-filing" />

      <PopularSearches />
      <Footer />

      {/* WhatsApp CTA */}
      <div className="fixed right-6 bottom-6 bg-[#C15F3C] text-white px-6 py-4 rounded-full shadow-[0_12px_36px_rgba(193,95,60,0.35)] flex items-center gap-3 z-50 hover:bg-[#A74A2F] active:scale-95 transition-all cursor-pointer">
        <div className="w-6 h-6 flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.522-2.961-2.639-.087-.117-.708-.941-.708-1.774 0-.833.435-1.241.588-1.413.153-.172.33-.216.441-.216.111 0 .221 0 .319.005.102.003.215-.04.332.246.129.319.44 1.074.484 1.161.044.087.073.189.015.305-.059.117-.088.19-.176.291-.088.102-.177.221-.252.324-.084.113-.174.226-.075.396.099.172.441.728.948 1.18.653.582 1.201.762 1.373.848.172.087.273.073.374-.044.102-.117.435-.506.551-.68.117-.172.233-.144.396-.087.163.058 1.036.488 1.213.575.176.088.291.13.333.204.043.074.043.423-.1.828z"/>
          </svg>
        </div>
        <span className="font-bold tracking-tight">Live Chat with Experts</span>
      </div>
    </div>
  );
}
