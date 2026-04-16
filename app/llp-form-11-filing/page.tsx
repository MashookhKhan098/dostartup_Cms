"use client";

import React, { useState } from "react";
import { Star, CheckCircle, ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import SidebarCart from "../components/SidebarCart";
import PopularSearches from "../components/PopularSearches";
import Footer from "../components/Footer";

const ASSETS = {
  logo: "/images/india-logo.jpg",
  hero: "/images/registered-office-change.png",
  whatsapp: "/images/whatsapp.png",
  din: "/images/din.jpg",
};

export default function LLPForm11Filing(): React.ReactElement {
  const [llpin, setLlpin] = useState("");

  return (
    <div className="min-h-screen bg-[#F4F3EE] font-sans text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#F4F3EE] pt-10 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Column */}
            <div>
              <div className="inline-flex items-center gap-1.5 bg-gray-100 border border-gray-200 rounded-full px-3 py-1 mb-4">
                <div className="w-1.5 h-1.5 bg-[#C15F3C] rounded-full" />
                <span className="text-xs font-bold text-[#C15F3C]">LLP COMPLIANCE</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight text-gray-900">
                LLP Form 11
                <span className="text-[#C15F3C] relative ml-2">
                  Filing
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#C15F3C] rounded-full"></div>
                </span>
              </h1>
              <p className="text-gray-600 mb-6 max-w-xl text-sm sm:text-base font-bold">
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
                    <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-[#C15F3C]/10 text-[#C15F3C] font-bold">
                      ✓
                    </div>
                    <div>
                      <div className="font-bold text-sm sm:text-base text-gray-900">{feature.title}</div>
                      <div className="text-xs sm:text-sm text-gray-600 font-bold">{feature.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-3 mt-8">
                <div className="flex -space-x-1.5">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-7 h-7 rounded-full bg-gray-300 border-2 border-white shadow-sm" />
                  ))}
                </div>
                <span className="text-sm text-gray-500 font-bold">Trusted by 10,000+ businesses</span>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="relative">
              <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-8 sm:p-10">
                <div className="absolute -top-4 left-10 right-10 h-2 bg-[#C15F3C] rounded-full shadow-lg" />
                
                <h3 className="text-xl font-bold text-gray-900 mb-6">Filing Status</h3>
                
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      LLPIN <span className="text-[#C15F3C]">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C15F3C] bg-gray-50 transition-all font-bold text-gray-900"
                      placeholder="e.g. AAA-0000"
                      value={llpin}
                      onChange={(e) => setLlpin(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      LLP Name
                    </label>
                    <input
                      type="text"
                      placeholder="Auto-populated"
                      className="w-full px-4 py-3 border border-gray-100 rounded-xl bg-gray-50 text-gray-400 cursor-not-allowed font-bold"
                      readOnly
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Designated Partner Email <span className="text-[#C15F3C]">*</span>
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C15F3C] bg-gray-50 transition-all font-bold text-gray-900"
                      placeholder="e.g. partner@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Financial Year <span className="text-[#C15F3C]">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C15F3C] bg-gray-50 font-bold text-gray-900"
                      placeholder="e.g. 2024-25"
                    />
                  </div>

                  <button className="w-full bg-[#C15F3C] text-white py-4 rounded-xl font-bold shadow-lg hover:bg-[#a74a2f] transform transition-all active:scale-95 mt-4">
                    Check & File Form 11
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-gray-400 mt-4 font-bold">
                    <div className="w-2 h-2 rounded-full bg-[#C15F3C] " />
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
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 border-b pb-4">
                LLP Annual Return (Form 11)
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg font-bold">
                LLP Form 11 is the annual return that every Limited Liability Partnership must file with the Ministry of Corporate Affairs. It contains details of partners, partners' contributions and other statutory particulars for the relevant financial year.
              </p>

              <div className="grid sm:grid-cols-2 gap-8 mb-10">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-tight">Who Must File Form 11</h3>
                  <ul className="space-y-3 text-sm text-gray-700 font-bold">
                    <li className="flex items-center gap-3">
                       <CheckCircle className="w-5 h-5 text-[#C15F3C]" />
                       All registered LLPs must file Form 11 annually.
                    </li>
                    <li className="flex items-center gap-3">
                       <CheckCircle className="w-5 h-5 text-[#C15F3C]" />
                       Non-filing can attract penalties and late fees.
                    </li>
                  </ul>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-tight">Filing Timeline & Penalties</h3>
                  <p className="text-sm text-gray-600 font-bold leading-relaxed">
                    Form 11 must be filed within 60 days from the end of the financial year. Late filing attracts additional fees and penalties depending on the delay.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-[#C15F3C] rounded-full" />
                Key Contents of Form 11
              </h3>
              <div className="space-y-4 mb-8">
                {[
                  { title: "Partners' Details", desc: "Names, addresses and DIN/DPIN if applicable." },
                  { title: "Contribution Details", desc: "Capital contribution of partners." },
                  { title: "Registered Office", desc: "Confirmation of address as per records." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-5 bg-gray-50 rounded-2xl hover:bg-white border border-transparent hover:border-gray-200 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 text-[#C15F3C] font-bold border border-gray-100 group-hover:scale-110 transition-transform">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-500 font-bold">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-[#C15F3C] rounded-full" />
                Why Choose Us for Form 11
              </h3>
              <p className="text-gray-600 leading-relaxed font-bold">
                We prepare your Form 11, validate partner information, assist with DSC signing and submit the form to MCA to ensure a compliant annual return.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-4">
                Documents Required for Form 11
              </h3>
              <div className="grid md:grid-cols-1 gap-4">
                {[
                  "Partners' PAN and address proof",
                  "Details of partners' capital contribution",
                  "DSC of designated partner (if required)"
                ].map((doc, i) => (
                  <div key={i} className="flex gap-4 items-center p-4 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:border-[#C15F3C] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-gray-100">
                       <CheckCircle className="w-6 h-6 text-[#C15F3C]" />
                    </div>
                    <span className="text-sm font-bold text-gray-700">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
             {/* Related Guides */}
             <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm font-bold">
                <h4 className="font-bold text-gray-900 mb-5 text-[14px] border-b pb-3 uppercase tracking-wider">Related Guides</h4>
                <ul className="text-[13px] space-y-4 text-[#C15F3C]">
                  {["LLP Form 11 Guide", "LLP Form 8 Guide", "Drafting LLP Agreement", "Adding Partner in LLP"].map((item) => (
                    <li key={item} className="hover:text-amber-800 cursor-pointer flex gap-3 group items-center">
                       <ChevronRight className="w-4 h-4 text-[#C15F3C]/50 group-hover:translate-x-1 transition-transform" />
                       <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

             {/* LLP COMPLIANCE Banner */}
             <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm flex flex-col overflow-hidden">
                <div className="rounded-xl overflow-hidden border border-gray-100 flex flex-col">
                  <div className="bg-[#C15F3C] p-6 text-center">
                    <h2 className="text-white text-lg font-bold uppercase tracking-wide">LLP COMPLIANCE</h2>
                    <div className="mt-2 text-[10px] text-gray-100 uppercase font-bold tracking-widest">Dedicated compliance team</div>
                  </div>
                  <div className="bg-gray-100 p-8 flex justify-center items-center">
                     <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10 scale-110">
                        <img src="/images/company-compliance.jpg" alt="LLP Compliance" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/5" />
                     </div>
                  </div>
                </div>
                <div className="p-6">
                   <h4 className="font-bold text-gray-900 mb-4 text-sm border-b pb-2 uppercase">Why Choose us</h4>
                   <p className="text-[13px] text-gray-600 font-bold leading-relaxed">
                     We prepare your Form 11, validate partner information, assist with DSC signing and submit the form to MCA.
                   </p>
                </div>
             </div>

             {/* DIN eKYC Filing Banner (Added below LLP Compliance) */}
             <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm flex flex-col overflow-hidden">
                <div className="rounded-xl overflow-hidden border border-gray-100 flex flex-col">
                  <div className="bg-[#C15F3C] p-6 text-center">
                    <h2 className="text-white text-lg font-bold uppercase tracking-wide">DIN eKYC Filing</h2>
                    <div className="mt-2 text-[10px] text-gray-100 uppercase font-bold tracking-widest">Director KYC Verification</div>
                  </div>
                  <div className="bg-gray-100 p-8 flex justify-center items-center">
                     <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10 scale-110">
                        <img src={ASSETS.din} alt="DIN eKYC" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/5" />
                     </div>
                  </div>
                </div>
                <div className="p-6">
                   <h4 className="font-bold text-gray-900 mb-4 text-sm border-b pb-2 uppercase">Annual DIR-3 KYC</h4>
                   <p className="text-[13px] text-gray-600 font-bold leading-relaxed">
                     Complete your mandatory annual Director eKYC to keep your DIN active and avoid penalties of ₹5000.
                   </p>
                </div>
             </div>
            
            <div className="bg-gray-900 p-8 rounded-2xl text-white shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all" />
              <h3 className="text-xl font-bold mb-4 relative z-10">Urgent Filing?</h3>
              <p className="mb-6 opacity-80 text-sm leading-relaxed relative z-10 font-bold">
                Deadline approaching? Our fast-track team can process your Form 11 filing in under 24 hours.
              </p>
              <button className="w-full bg-white text-gray-900 py-3.5 rounded-xl font-bold shadow-soft hover:bg-gray-50 transition-all relative z-10 uppercase text-xs tracking-widest">
                Fast Track
              </button>
            </div>
          </aside>
        </div>
      </main>

      {/* Dynamic Sections */}
      <DynamicPricingSection category="llp-form-11-filing" />
      <FAQAccordion category="llp-form-11-filing" title="FAQs for LLP Form 11" />

      <PopularSearches />
      <Footer />

      {/* WhatsApp CTA */}
      <div className="fixed right-6 bottom-6 bg-[#C15F3C] text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 z-50 hover:bg-[#a74a2f] active:scale-95 transition-all cursor-pointer">
        <img src="/images/whatsapp.png" alt="whatsapp" className="w-6 h-6" />
        <span className="font-bold tracking-tight">Live Chat</span>
      </div>
    </div>
  );
}
