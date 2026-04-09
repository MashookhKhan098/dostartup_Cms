"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import SidebarCart from "../components/SidebarCart";
import { CheckCircle, Clock, Shield, FileText, AlertCircle, Info, ChevronRight, Check, ChevronDown } from "lucide-react";

export default function ProfessionalTaxReturnPage() {

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Submitted successfully. Our experts will contact you soon.');
  };

  return (
    <div className="bg-[#F4F3EE] min-h-screen font-sans">
      <Navbar />
      
      {/* PERFECT HERO MATCH SECTION */}
      <section className="bg-[#F4F3EE] border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch">
          
          {/* LEFT SIDE: CONTENT */}
          <div className="flex-1 py-16 px-6 lg:px-12 flex flex-col justify-center">
             <div className="mb-6">
                <span className="inline-flex items-center gap-1.5 bg-[#FDF1EC] text-[#C15F3C] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-[#FAE5DC]">
                  <div className="w-1 h-1 bg-[#C15F3C] rounded-full" />
                  Professional Tax
                </span>
             </div>
             
             <h1 className="text-4xl lg:text-6xl font-extrabold text-[#2F2E2B] leading-[1.1] mb-6">
               File Your <span className="text-[#C15F3C]">Professional Tax Return On Time</span>
             </h1>
             
             <p className="text-[#6F6B63] text-lg mb-10 max-w-xl leading-relaxed">
               Stay compliant with expert-assisted PT Return Filing. Ensure timely submission, avoid penalties, and keep your business compliant with state PT regulations.
             </p>
             
             <ul className="space-y-4 mb-8">
               {[
                 "Accurate & On-Time Filing",
                 "PTEC & PTRC Return Assistance",
                 "Simplified Filing with Expert Support",
                 "Ensure Error-Free Government Submissions",
                 "Trusted by 1 Lakh+ Businesses"
               ].map((feature, i) => (
                 <li key={i} className="flex items-center gap-4 text-[#2F2E2B] font-medium text-base">
                   <div className="w-6 h-6 rounded-full border border-[#FAE5DC] bg-[#FFF8F6] flex items-center justify-center flex-shrink-0 text-[#C15F3C]">
                     <Check className="w-3.5 h-3.5" strokeWidth={3} />
                   </div>
                   {feature}
                 </li>
               ))}
             </ul>
          </div>
          
          {/* RIGHT SIDE: THE FORM */}
          <div className="w-full lg:w-[500px] bg-[#FFF9F1] py-16 px-6 lg:px-12 flex flex-col justify-center border-l border-gray-100">
             <div className="bg-[#F4F3EE] rounded-2xl shadow-xl shadow-orange-900/5 relative overflow-hidden flex flex-col">
                <div className="h-2 bg-[#C15F3C] w-full" />
                <div className="p-8 space-y-6">
                   <div className="space-y-1">
                      <h3 className="text-sm font-bold text-[#2F2E2B]">Professional Tax</h3>
                      <div className="relative">
                         <select className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#6F6B63] bg-[#F4F3EE] appearance-none cursor-pointer focus:ring-1 focus:ring-[#C15F3C] focus:outline-none">
                            <option>Professional Tax Registration Return Filing</option>
                            <option>Professional Tax Registration</option>
                         </select>
                         <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                            <ChevronDown className="w-4 h-4 text-[#6F6B63]" />
                         </div>
                      </div>
                      <p className="text-[10px] text-[#B1ADA1] mt-1 italic">
                        File your Professional Tax Return on time by reporting employee deductions or nil returns. Submit payment details for the selected period to stay compliant.
                      </p>
                   </div>

                   <div className="space-y-1">
                      <label className="text-xs font-bold text-[#2F2E2B]">State</label>
                      <div className="relative">
                         <select className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#6F6B63] bg-[#F4F3EE] appearance-none cursor-pointer focus:ring-1 focus:ring-[#C15F3C] focus:outline-none">
                            <option>Select State/UT</option>
                            <option>Gujarat</option>
                            <option>Karnataka</option>
                            <option>Maharashtra</option>
                            <option>Tamil Nadu</option>
                            <option>Telangana</option>
                            <option>West Bengal</option>
                         </select>
                         <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                            <ChevronDown className="w-4 h-4 text-[#6F6B63]" />
                         </div>
                      </div>
                   </div>

                   <div className="space-y-1">
                      <label className="text-xs font-bold text-[#2F2E2B]">PAN or GSTIN</label>
                      <input 
                        type="text" 
                        placeholder="PAN or GSTIN"
                        className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] focus:ring-1 focus:ring-[#C15F3C] focus:outline-none"
                      />
                   </div>

                   <div className="space-y-1">
                      <label className="text-xs font-bold text-[#2F2E2B]">PT Number (optional)</label>
                      <input 
                        type="text" 
                        placeholder="PT Number (optional)"
                        className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] focus:ring-1 focus:ring-[#C15F3C] focus:outline-none"
                      />
                   </div>

                   <button 
                     onClick={handleFormSubmit}
                     className="w-full bg-[#C15F3C] text-white font-bold py-4 rounded-xl text-lg hover:bg-[#A94E30] transition shadow-lg shadow-orange-900/10 mt-4"
                   >
                     Apply Now
                   </button>
                </div>
             </div>
          </div>
          
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 bg-[#F4F3EE] min-h-[500px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Left Column: Educational Content */}
            <div className="flex-1 space-y-10">
              
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#202939]">Professional Tax Return Filing</h2>
                <div className="space-y-4 text-[#4F4C45] text-lg leading-relaxed">
                  <p>
                    Professional Tax Return Filing is mandatory for individuals and businesses liable to pay Professional Tax. Professional Tax is a tax levied by the State Government on salaried individuals, professionals, or persons engaged in any trade, calling, or employment. In contrast, Professional Tax Return is a document filed with the state government containing details of the Tax paid by the individual or business.
                  </p>
                  <p>
                    Filing Professional Tax Returns can be a complex and time-consuming process. <strong>DoStartup</strong> provides Professional Tax Return Filing services to assist clients in fulfilling their tax obligations. Our team of experts ensures that the entire process of PT return filing is completed promptly and hassle-free. We provide end-to-end assistance for PT annual return, from the collection of documents to the submission of the tax return and payment of Professional Tax. Contact us today to avail of our PT return filing service and ensure compliance with the rules and regulations of the state government.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#202939]">Professional Tax</h3>
                <p className="text-[#4F4C45] leading-relaxed">
                  Professional Tax is a form of direct taxation imposed on individuals who earn an income through employment, profession, calling, or trade. Unlike the income tax levied by the Central Government, Professional Tax is imposed by the government of a particular state or union territory in India.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#202939]">Professional Tax Return Applicability</h3>
                <p className="text-[#4F4C45] leading-relaxed">
                  PT return filing is mandatory for all individuals and businesses liable to pay Professional Tax as per the rules and regulations of the state government. The tax liability and filing frequency may vary from state to state.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#202939]">Professional Tax slab rate</h3>
                <p className="text-[#4F4C45] leading-relaxed">
                  The Professional Tax slab rate varies from state to state in India. Each state has its slab and rate for Professional Tax based on the taxpayer&apos;s income. Generally, slabs are split across income bands such as monthly income less than Rs. 15,000, between Rs. 15,001 to Rs. 25,000 and above Rs. 25,000. Taxpayers must comply with their respective state&apos;s regulations.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#202939]">PTRC Return Filing: Employer&apos;s Obligations</h3>
                <p className="text-[#4F4C45] leading-relaxed">
                  Employers must deduct professional tax from employees&apos; salaries, remit the collected amount to the relevant government department and file the prescribed Professional Tax Return within stipulated timeframes, enclosing proof of payment.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-[#202939]">Benefits of PT Return Filing</h4>
                <ul className="space-y-3">
                  {[
                    "Avoidance of penalties and legal consequences",
                    "Compliance with applicable laws",
                    "Improved creditworthiness",
                    "Access to social security benefits",
                    "Easy and convenient online filing",
                    "Increased government revenue and accurate records"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start text-[#4F4C45]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C15F3C] mt-2.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-[#202939]">Documents required for Professional Tax Return filing</h4>
                <ul className="space-y-3">
                  {[
                    "PAN Card", "Aadhaar Card", "Voter ID or Passport", "Bank account details",
                    "Salary details or income proof", "Registration Certificate or Shop & Establishment Certificate",
                    "Challans or payment receipts for Professional Tax payment", "Details of TDS from salary (if any)"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start text-[#4F4C45]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C15F3C] mt-2.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-[#202939]">Procedure for Professional Tax Return Filing</h4>
                <ol className="space-y-4">
                  {[
                    "Obtain the Professional Tax Registration Certificate from the state authority.",
                    "Determine the applicable slab and rate for the taxpayer.",
                    "Collect necessary documents such as salary slips and payment receipts.",
                    "Prepare the return in the prescribed format.",
                    "Submit the return along with supporting documents and pay any tax due.",
                    "Obtain acknowledgment for filing and payment."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start text-[#4F4C45]">
                      <span className="font-bold text-[#C15F3C]">{i + 1}.</span>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-orange-50 border-l-4 border-[#C15F3C] p-6 rounded-r-2xl">
                <h4 className="text-lg font-bold text-[#202939] mb-2 font-bold">Penalties for failing to File Professional Tax Return</h4>
                <p className="text-[#4F4C45]">
                  Penalties vary by state. For example, some states impose daily penalties for not registering, flat penalties for late filing and interest + penalties on late payments. (State rules vary; consult state authority for specifics.)
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-[#202939]">Why Choose DoStartup for Professional Tax Return Filing Service?</h4>
                <p className="text-[#4F4C45] leading-relaxed">
                  DoStartup provides end-to-end assistance, timely filing to avoid penalties, affordable pricing, and expert support to ensure compliance with state regulations.
                </p>
              </div>

            </div>

            {/* Right Column: Sidebar */}
            <div className="lg:w-[400px] space-y-8">
              <SidebarCart />
              
              <div className="bg-[#F4F3EE] rounded-2xl border border-[#E5E2DA] p-8 shadow-sm">
                <h4 className="text-lg font-bold text-[#202939] mb-6">Related Guides</h4>
                <ul className="space-y-4">
                  {[
                    "Gujarat Professional Tax", "Telangana Professional Tax", "Professional Tax in Andhra Pradesh", "Kerala Professional Tax"
                  ].map((guide, i) => (
                    <li key={i}>
                      <a href="#" className="flex items-center justify-between group">
                        <span className="text-[#C15F3C] font-medium group-hover:underline">{guide}</span>
                        <ChevronRight className="w-4 h-4 text-[#C15F3C]" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PERFECT PRICING MATCH SECTION (Matching latest screenshot) */}
      <section className="bg-[#F4F3EE] py-16 px-4 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-10">
             <h2 className="text-3xl font-medium text-[#2F2E2B] mb-4">
               Simple packages. Transparent <span className="text-[#896BAE] relative pb-1">pricing<span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#896BAE]"></span></span>.
             </h2>
             <p className="text-sm text-[#6F6B63] max-w-2xl mx-auto">
               Transparent pricing for Professional Tax return filing. Choose a plan that fits your business—from single return filing to annual compliance packages.
             </p>
          </div>

          {/* Package Dropdown */}
          <div className="flex justify-center mb-12">
             <div className="relative w-full max-w-sm">
                <label className="absolute -top-2 left-4 bg-[#F4F3EE] px-2 text-[10px] font-bold text-[#008C44] uppercase tracking-wider z-10">Package</label>
                <div className="relative">
                   <select className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] bg-[#F4F3EE] appearance-none cursor-pointer focus:ring-1 focus:ring-[#C15F3C] focus:outline-none">
                      <option>Telangana - (PTRC)</option>
                      <option>Maharashtra - (PTRC)</option>
                      <option>Karnataka - (PTEC)</option>
                   </select>
                   <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <ChevronDown className="w-4 h-4 text-[#6F6B63]" />
                   </div>
                </div>
             </div>
          </div>

          {/* Cards Grid (Matching IndiaFilings style from latest screenshot) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Manipur - (PTEC)",
                desc: "Professional Tax Return Filing is mandatory for individuals and businesses registered under the...",
                features: [
                  "Filing of PT Return for up to 2 individuals (Proprietor / Partners / Directors)",
                  "Filing of PT Return for 1 Year"
                ]
              },
              {
                title: "Tamil Nadu - (Within Chennai City)",
                desc: "Professional Tax Return Filing is mandatory for individuals and businesses registered under the...",
                features: [
                  "Filing of PT Return for 2 directors",
                  "Filing of PT Return for 1 year"
                ]
              },
              {
                title: "Andhra Pradesh - (PTRC)",
                desc: "Professional Tax Return Filing is mandatory for individuals and businesses registered under the...",
                features: [
                  "Professional Tax return filing for all employees",
                  "Filing of PT Return for 1 year",
                  "Professional Tax Annual Return Filing"
                ]
              }
            ].map((card, i) => (
              <div 
                key={i} 
                className="bg-[#F4F3EE] border border-[#E5E2DA] rounded-3xl p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow min-h-[450px]"
              >
                <h3 className="text-2xl font-bold text-[#2F2E2B] mb-3">{card.title}</h3>
                <p className="text-sm text-[#6F6B63] mb-8 leading-relaxed">
                  {card.desc}
                </p>
                
                <h4 className="text-sm font-bold text-[#2F2E2B] mb-5 uppercase tracking-tight">What&apos;s included:</h4>
                <ul className="space-y-4 mb-10 flex-grow">
                   {card.features.map((feat, fi) => (
                     <li key={fi} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full border border-green-100 bg-green-50 flex items-center justify-center flex-shrink-0 text-green-600 mt-0.5">
                          <Check className="w-3.5 h-3.5" strokeWidth={3} />
                        </div>
                        <span className="text-[13px] text-[#4F4C45] leading-relaxed">{feat}</span>
                     </li>
                   ))}
                </ul>

                <button className="w-full border border-[#E5E2DA] text-[#2F2E2B] font-bold py-3.5 rounded-2xl hover:border-[#C15F3C] hover:text-[#C15F3C] transition-all">
                  Start Filing Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQAccordion />

      {/* Popular Searches */}
      <Popularsearches />

      <Footer />
    </div>
  );
}
