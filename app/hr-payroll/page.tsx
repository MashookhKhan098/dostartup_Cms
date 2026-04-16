"use client";

/* eslint-disable @next/next/no-img-element */

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import PopularSearches from "../components/PopularSearches";
import SidebarCart from "../components/SidebarCart";
import { Users, Shield, Monitor, Briefcase, UserCheck, FileText, Calendar, BarChart, Lock, Video, Star, MessageCircle } from "lucide-react";

export default function ComplianceHRPayrollPage() {
  const [panGstin, setPanGstin] = useState("");
  const [employees, setEmployees] = useState("");

  const handleRequestDemo = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Demo requested for ${panGstin} with ${employees} employees.`);
  };

  return (
    <div className="min-h-screen bg-[#F4F3EE] font-sans antialiased text-gray-800">
      <Navbar />

      {/* ── Breadcrumb ── */}
      <div className="max-w-[1240px] mx-auto px-6 py-4 text-sm text-gray-500">
        Home / Compliance Services / <span className="text-amber-800 font-semibold">HR & Payroll</span>
      </div>

      {/* ── Hero Section (Standardized Box Structure) ── */}
      <section className="py-12 bg-[#F4F3EE]">
        <div className="max-w-[1240px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 mb-6">
              <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
              <span className="text-[10px] font-bold text-amber-700 uppercase tracking-widest">HR & PAYROLL Compliance</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-6">
              DoStartup HR <br className="hidden lg:block"/> Management Simplified
            </h1>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed max-w-xl">
               Get a Dedicated Accountant, a Qualified HR Professional (minimum 3 years'
               experience) and LEDGERS compliance platform for your business.
            </p>
            
            <div className="flex items-center gap-3 mb-8">
               <div className="flex -space-x-2 text-amber-500">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-current" />)}
               </div>
               <span className="text-xs text-gray-400 font-bold italic">Trusted by 10,000+ businesses</span>
            </div>

            <form onSubmit={handleRequestDemo} className="flex flex-col sm:flex-row gap-4 max-w-2xl">
              <input
                className="flex-[2] px-6 py-4 bg-white border border-gray-200 rounded-full outline-none focus:ring-1 focus:ring-amber-500 text-sm font-bold uppercase tracking-widest"
                placeholder="PAN / GSTIN"
                value={panGstin}
                onChange={(e) => setPanGstin(e.target.value)}
              />
              <input
                className="flex-[1] px-6 py-4 bg-white border border-gray-200 rounded-full outline-none focus:ring-1 focus:ring-amber-500 text-sm font-bold uppercase tracking-widest text-center"
                placeholder="QTY"
                value={employees}
                onChange={(e) => setEmployees(e.target.value)}
              />
              <button type="submit" className="px-8 py-4 bg-[#C15F3C] text-white rounded-full font-bold hover:bg-[#A94E30] transition-all uppercase tracking-widest text-xs whitespace-nowrap">
                Request Demo
              </button>
            </form>
          </div>
          <div className="w-full lg:w-[480px]">
             <div className="bg-black rounded-[40px] p-8 relative overflow-hidden group">
                <img src="/images/hr-payroll.png" alt="hr hero" className="w-full h-auto rounded-xl opacity-90 transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-x-8 bottom-8 text-center">
                   <div className="bg-[#042F2C] text-white px-6 py-2 rounded-full inline-block text-[10px] font-bold uppercase tracking-widest border border-white/20">
                      HR & Payroll Management
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      <main className="max-w-[1240px] mx-auto px-6 py-2 space-y-12">
        
        {/* ── Feature Cards (3 Simple White Boxes) ── */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {[
             { 
               title: "Affordable Expertise", 
               desc: "Access DoStartup Chartered Accountants without the high cost of full-time hiring.", 
               icon: Users 
             },
             { 
               title: "Seamless Compliance", 
               desc: "Monthly GST, quarterly CA review, and annual ITRs managed with accuracy and care.", 
               icon: Shield 
             },
             { 
               title: "Trusted Oversight", 
               desc: "Your finances are reviewed by expert Chartered Accountants with years of industry experience.", 
               icon: Monitor 
             }
           ].map((card, i) => (
             <div key={i} className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-[#FDF1EC] flex items-center justify-center shrink-0">
                   <card.icon className="w-5 h-5 text-[#C15F3C]" />
                </div>
                <div>
                   <h3 className="text-sm font-bold text-gray-900 mb-2">{card.title}</h3>
                   <p className="text-[12px] text-gray-500 leading-relaxed font-medium">{card.desc}</p>
                </div>
             </div>
           ))}
        </section>

        {/* ── Services Offered Section (Simplified Boxes) ── */}
        <section className="bg-white rounded-lg border border-gray-100 shadow-sm p-10 md:p-14">
           <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Services Offered</h2>
              <p className="text-sm text-gray-400 font-medium">Comprehensive financial management and compliance support for growing businesses.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Payroll Processing", desc: "Accurate and timely salary processing with payslips, tax deductions.", icon: FileText },
                { title: "Attendance & Leave Management", desc: "Track working hours, shifts, overtime, and leave requests with integrated approval workflows.", icon: Calendar },
                { title: "Compliance & Statutory Filings", desc: "Complete support for PF, ESI, Professional Tax, TDS, and labour law compliance.", icon: Shield },
                { title: "Employee Onboarding", desc: "Digital offer letters, contracts, policy acknowledgments, and smooth employee joining experience.", icon: UserCheck },
                { title: "HR Policies & Contracts", desc: "Custom drafting of HR policies, employee handbooks, contracts, and compliance documentation.", icon: Briefcase },
                { title: "Employee Self-Service Portal", desc: "Employee-friendly portal for leave requests, payslips, and HR document access.", icon: Monitor },
                { title: "HR Reports & Analytics", desc: "Custom dashboards and reports on payroll, headcount, and compliance status.", icon: BarChart },
                { title: "Secure Document Storage", desc: "Employee and compliance documents stored safely in our cloud for up to 8 years, ensuring easy access and audit readiness.", icon: Lock },
                { title: "V-KYC Platform", desc: "Real-time, auditable video KYC verification integrated into the LEDGERS HR Platform for instant identity validation and compliance logs.", icon: Video }
              ].map((service, i) => (
                <div key={i} className="p-8 rounded border border-gray-50 bg-[#F9FAFB] hover:bg-white hover:border-amber-200 transition-all space-y-3 group">
                   <h4 className="text-sm font-bold text-gray-900 group-hover:text-amber-800 transition-colors uppercase tracking-tight">{service.title}</h4>
                   <p className="text-[12px] text-gray-500 leading-relaxed font-bold">{service.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* ── How It Works Section (Simplified Circles) ── */}
        <section className="bg-white rounded-lg border border-gray-100 shadow-sm p-10 md:p-14">
           <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-xl font-bold text-gray-900 mb-2">How It Works</h2>
              <p className="text-sm text-gray-400 font-medium">A simple, guided onboarding process followed by consistent monthly filings and quarterly CA reviews.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
             {[
               { idx: 1, title: "Team assignment", desc: "We assign a dedicated HR professional and support team who understand your business, workforce, and compliance needs." },
               { idx: 2, title: "LEDGERS Setup", desc: "We configure your payroll, attendance, leave policies, employee records, and compliance workflows inside the LEDGERS HR platform." },
               { idx: 3, title: "Filings & Reviews", desc: "We handle monthly payroll, statutory filings (PF, ESI, PT, TDS), and conduct quarterly HR reviews to ensure accuracy and employee satisfaction." }
             ].map((step) => (
                <div key={step.idx} className="space-y-6">
                   <div className="w-12 h-12 rounded-full border border-amber-500 bg-white flex items-center justify-center mx-auto text-sm font-bold text-amber-600">
                     {step.idx}
                   </div>
                   <div className="space-y-2">
                     <h5 className="text-sm font-bold text-gray-900">{step.title}</h5>
                     <p className="text-[12px] text-gray-500 leading-relaxed font-bold max-w-[280px] mx-auto">{step.desc}</p>
                   </div>
                </div>
             ))}
           </div>
        </section>

        {/* ── Why DoStartup (Grid Boxes) ── */}
        <section className="bg-white rounded-lg border border-gray-100 shadow-sm p-10 md:p-14">
           <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Why DoStartup for HR & Payroll</h2>
              <p className="text-sm text-gray-400 font-medium font-sans">Experience, technology, and nationwide coverage combined in one platform.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Experienced HR Team", desc: "Specialists across payroll, labour law, and statutory compliance with 10+ years experience." },
                { title: "Process-driven Delivery", desc: "Monthly checklists, maker-checker reviews, and SLA-backed support for every client." },
                { title: "Nationwide Coverage", desc: "Serving 1,00,000+ businesses across India since 2014 with regional compliance expertise." }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded border border-gray-100 bg-white">
                   <h4 className="text-sm font-bold text-gray-900 mb-3">{item.title}</h4>
                   <p className="text-[12px] text-gray-400 leading-relaxed font-bold">{item.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* ── Pricing and Final Widgets ── */}
        <div className="space-y-6">
          <DynamicPricingSection category="hr-payroll" />
          <FAQAccordion category="hr-payroll" />
          <SidebarCart />
        </div>

      </main>

      <PopularSearches />
      <Footer />

      {/* WhatsApp Fixed CTA - Standard for project */}
      <div className="fixed bottom-8 right-8 z-50">
         <div className="bg-gradient-to-r from-amber-700 to-amber-800 text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-3 cursor-pointer hover:scale-105 transition-all">
            <MessageCircle className="w-5 h-5" />
            <span className="font-bold text-xs uppercase tracking-widest">Live Chat with Experts</span>
         </div>
      </div>
    </div>
  );
}
