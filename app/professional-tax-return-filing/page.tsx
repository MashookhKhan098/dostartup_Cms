"use client";

/* eslint-disable @next/next/no-img-element */

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import PopularSearches from '../components/PopularSearches';
import SidebarCart from "../components/SidebarCart";
import { Check, ChevronRight, ChevronDown } from "lucide-react";

const TOKEN = process.env.NEXT_PUBLIC_COCKPIT_API_KEY || "";
const CMS_URL = process.env.NEXT_PUBLIC_COCKPIT_URL || "";

const ASSETS = {
  heroFallback: "/images/professional-tax-hero.jpg",
};

export default function ProfessionalTaxReturnPage() {
  const [heroImage, setHeroImage] = useState<string>(ASSETS.heroFallback);

  const getImageUrl = (image: any) => {
    if (!image) return null;
    let path = "";
    if (typeof image === "string") {
      path = image;
    } else if (image && typeof image === "object" && image.path) {
      path = image.path;
    } else {
      return null;
    }
    if (!path) return null;
    if (path.startsWith("http")) return path;
    const base = CMS_URL.endsWith("/") ? CMS_URL.slice(0, -1) : CMS_URL;
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    return `${base}/storage/uploads${cleanPath}`;
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const serviceRes = await fetch(`${CMS_URL}/api/content/items/service?token=${TOKEN}&filter=${encodeURIComponent(JSON.stringify({ name: "Professional Tax Return Filing" }))}`);
        const serviceData = await serviceRes.json();
        const entries = Array.isArray(serviceData) ? serviceData : (serviceData?.entries || []);
        if (entries.length > 0 && entries[0].image) {
          const url = getImageUrl(entries[0].image);
          if (url) setHeroImage(url);
        }
      } catch (error) {
        console.error("Data fetch error:", error);
      }
    }
    fetchData();
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Submitted successfully. Our experts will contact you soon.');
  };

  return (
    <div className="bg-[#F4F3EE] min-h-screen font-sans antialiased text-[#4F4C45]">
      <Navbar />
      
      {/* PERFECT HERO MATCH SECTION */}
      <section className="bg-[#F4F3EE] border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch">
          
          {/* LEFT SIDE: CONTENT */}
          <div className="flex-1 py-16 px-6 lg:px-12 flex flex-col justify-center">
             <div className="mb-6">
                <span className="inline-flex items-center gap-1.5 bg-[#FDF1EC] text-[#C15F3C] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-[#FAE5DC]">
                  <div className="w-1.5 h-1.5 bg-[#C15F3C] rounded-full" />
                  Professional Tax
                </span>
             </div>
             
             <h1 className="text-4xl lg:text-6xl font-black text-gray-900 leading-[1.05] mb-6 tracking-tighter">
               File Your <br /><span className="text-[#C15F3C]">Professional Tax</span> <br />Return On Time
             </h1>
             
             <p className="text-gray-500 text-lg mb-10 max-w-xl leading-relaxed italic font-bold">
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
                 <li key={i} className="flex items-center gap-4 text-gray-700 font-bold text-base">
                   <div className="w-8 h-8 rounded-full border border-orange-100 bg-white flex items-center justify-center flex-shrink-0 text-[#C15F3C] shadow-sm">
                     <Check className="w-4 h-4" strokeWidth={4} />
                   </div>
                   {feature}
                 </li>
               ))}
              </ul>
          </div>
          
          {/* RIGHT SIDE: THE FORM/GRAPHIC */}
          <div className="w-full lg:w-[500px] bg-[#F4F3EE] py-16 px-6 lg:px-12 flex flex-col justify-center border-l border-gray-100">
             <div className="bg-white rounded-[40px] shadow-2xl shadow-orange-900/10 relative overflow-hidden flex flex-col border border-gray-50">
                {/* Hero Specific Image fetched from CMS */}
                <div className="relative aspect-[4/3] overflow-hidden group">
                   <img src={heroImage} alt="Professional Tax" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <div className="p-10 space-y-6">
                   <div className="space-y-1">
                      <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Service Selection</h3>
                      <div className="relative">
                         <select className="w-full border-2 border-gray-100 rounded-2xl px-5 py-4 text-sm font-bold text-gray-700 bg-gray-50/50 appearance-none cursor-pointer focus:ring-2 focus:ring-[#C15F3C]/50 focus:outline-none transition-all">
                            <option>Professional Tax Return Filing</option>
                            <option>Professional Tax Registration</option>
                         </select>
                         <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                            <ChevronDown className="w-5 h-5 text-gray-400" />
                         </div>
                      </div>
                   </div>

                   <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1 space-y-1">
                         <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">State</label>
                         <div className="relative">
                            <select className="w-full border-2 border-gray-100 rounded-2xl px-5 py-4 text-sm font-bold text-gray-700 bg-gray-50/50 appearance-none cursor-pointer focus:ring-2 focus:ring-[#C15F3C]/50 focus:outline-none transition-all">
                               <option>Select State</option>
                               <option>Gujarat</option>
                               <option>Karnataka</option>
                               <option>Maharashtra</option>
                               <option>Tamil Nadu</option>
                               <option>Telangana</option>
                            </select>
                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                               <ChevronDown className="w-4 h-4 text-gray-400" />
                            </div>
                         </div>
                      </div>
                      <div className="flex-1 space-y-1">
                         <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">PAN/GSTIN</label>
                         <input 
                           type="text" 
                           placeholder="Enter ID"
                           className="w-full border-2 border-gray-100 rounded-2xl px-5 py-4 text-sm font-bold text-gray-700 bg-gray-50/50 focus:ring-2 focus:ring-[#C15F3C]/50 focus:outline-none transition-all"
                         />
                      </div>
                   </div>

                   <button 
                     onClick={handleFormSubmit}
                     className="w-full bg-[#C15F3C] text-white font-black py-5 rounded-2xl text-sm uppercase tracking-widest hover:bg-[#A94E30] transition shadow-xl shadow-orange-900/15"
                   >
                     Apply Now
                   </button>
                </div>
             </div>
          </div>
          
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 bg-[#F4F3EE]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Left Column: Educational Content */}
            <div className="flex-1 space-y-6">
              
              <div className="bg-white rounded-[40px] border border-gray-100 p-12 shadow-sm space-y-8">
                <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">Professional Tax <span className="text-[#C15F3C]">Return Filing</span></h2>
                <div className="space-y-6 text-gray-500 text-base leading-relaxed font-bold">
                  <p>
                    Professional Tax Return Filing is mandatory for individuals and businesses liable to pay Professional Tax. Professional Tax is a tax levied by the State Government on salaried individuals, professionals, or persons engaged in any trade, calling, or employment. In contrast, Professional Tax Return is a document filed with the state government containing details of the Tax paid by the individual or business.
                  </p>
                  <p className="italic border-l-4 border-[#C15F3C] pl-6 bg-gray-50 py-4 rounded-r-2xl">
                    Filing Professional Tax Returns can be a complex and time-consuming process. <strong>DoStartup</strong> provides Professional Tax Return Filing services to assist clients in fulfilling their tax obligations. Our team of experts ensures that the entire process of PT return filing is completed promptly and hassle-free.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="bg-white rounded-[32px] border border-gray-100 p-10 shadow-sm space-y-4">
                   <h3 className="text-lg font-black text-gray-900 uppercase tracking-widest border-b border-gray-50 pb-4">Tax Overview</h3>
                   <p className="text-sm text-gray-400 font-bold leading-relaxed italic">
                     Professional Tax is a form of direct taxation imposed on individuals who earn an income through employment, profession, calling, or trade. Unlike the income tax levied by the Central Government, Professional Tax is imposed by the government of a particular state.
                   </p>
                 </div>

                 <div className="bg-white rounded-[32px] border border-gray-100 p-10 shadow-sm space-y-4">
                   <h3 className="text-lg font-black text-gray-900 uppercase tracking-widest border-b border-gray-50 pb-4">Employer Obligations</h3>
                   <p className="text-sm text-gray-400 font-bold leading-relaxed italic">
                     Employers must deduct professional tax from employees&apos; salaries, remit the collected amount to the relevant government department and file the prescribed Professional Tax Return within stipulated timeframes.
                   </p>
                 </div>
              </div>

              <div className="bg-white rounded-[40px] border border-gray-100 p-12 shadow-sm space-y-10">
                <h4 className="text-xl font-black text-gray-900 uppercase tracking-widest text-center">Filing Procedures</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    "Obtain the PT Registration Certificate (PTEC/PTRC).",
                    "Determine the applicable state-specific tax slabs.",
                    "Collect salary slips and employee deduction receipts.",
                    "Prepare and validate the return in state-specific format.",
                    "Submit via state portal and pay the due taxes.",
                    "Secure official acknowledgment and payment receipts."
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-orange-50 text-[#C15F3C] flex items-center justify-center font-black flex-shrink-0 border border-orange-100 italic">{i + 1}</div>
                      <span className="text-sm font-bold text-gray-600 leading-relaxed pt-2">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#C15F3C] rounded-[40px] p-12 text-center text-white space-y-4 shadow-xl shadow-orange-900/10">
                <h4 className="text-2xl font-black uppercase tracking-widest">Why Choose DoStartup?</h4>
                <p className="text-amber-100 font-bold italic opacity-90 max-w-2xl mx-auto">
                  DoStartup provides end-to-end assistance, timely filing to avoid penalties, affordable pricing, and expert support to ensure compliance with state regulations.
                </p>
              </div>

            </div>

            {/* Right Column: Sidebar */}
            <div className="lg:w-[400px] space-y-8">
              <div className="sticky top-28">
                <SidebarCart />
                
                <div className="bg-white rounded-[40px] border border-gray-100 p-10 shadow-sm mt-8">
                  <h4 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-8 border-b border-gray-50 pb-4">Related Guides</h4>
                  <ul className="space-y-6">
                    {[
                      "Gujarat Professional Tax", "Telangana Professional Tax", "Professional Tax in Andhra Pradesh", "Kerala Professional Tax"
                    ].map((guide, i) => (
                      <li key={i}>
                        <a href="#" className="flex items-center justify-between group">
                          <span className="text-sm font-bold text-gray-600 group-hover:text-gray-900 transition-colors uppercase tracking-tight">{guide}</span>
                          <ChevronRight className="w-4 h-4 text-[#C15F3C] group-hover:translate-x-1 transition-transform" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 mb-16">
        <DynamicPricingSection category="professional-tax-return-filing" />
      </div>

      <FAQAccordion category="professional-tax-return-filing" />
      <PopularSearches />
      <Footer />
    </div>
  );
}
