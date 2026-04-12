"use client";

import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import PopularSearches from "../components/PopularSearches";
import SidebarCart from "../components/SidebarCart";
import { CheckCircle, ChevronDown, Users, Shield, Monitor, Briefcase, UserCheck, FileText, Calendar, BarChart, Lock, Video } from "lucide-react";

export default function ComplianceHRPayrollPage() {
  const [panGstin, setPanGstin] = useState("");
  const [employees, setEmployees] = useState("");

  const handleRequestDemo = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Demo requested for ${panGstin} with ${employees} employees.`);
  };

  return (
    <div className="bg-white min-h-screen font-sans antialiased text-[#2F2E2B]">
      <Head>
        <title>HR & Payroll Management - DoStartup</title>
      </Head>
      <Navbar />

      {/* ── Breadcrumb ── */}
      <div className="bg-[#F4F3EE] py-4">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-sm font-medium text-[#B1ADA1]">
            Home / Compliance Services / <span className="text-[#C15F3C]">HR & Payroll</span>
          </nav>
        </div>
      </div>

      {/* ── Hero Section (Dark Theme) ── */}
      <section className="bg-[#F4F3EE] pt-10 pb-4 px-6">
        <div className="max-w-6xl mx-auto">
          <div 
            className="bg-[#0B0C10] rounded-[40px] overflow-hidden relative min-h-[500px] flex flex-col md:flex-row items-center p-10 md:p-16 gap-10 bg-cover bg-center"
            style={{ backgroundImage: "linear-gradient(90deg, rgba(11, 12, 16, 0.95) 0%, rgba(11, 12, 16, 0.7) 100%), url(/images/hero.png)" }}
          >
            {/* Left Content */}
            <div className="flex-1 space-y-8 z-10">
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                DoStartup HR
              </h1>
              <p className="text-lg text-gray-400 max-w-lg leading-relaxed font-medium">
                Get a Dedicated Accountant, a Qualified HR Professional (minimum 3 years'
                experience) and LEDGERS compliance platform for your business.
              </p>

              <form onSubmit={handleRequestDemo} className="space-y-6 max-w-xl">
                 <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1">
                       <input 
                         type="text" 
                         value={panGstin}
                         onChange={(e) => setPanGstin(e.target.value)}
                         placeholder="PAN / GSTIN"
                         className="w-full bg-[#1A1C23] border border-gray-800 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#C15F3C] transition"
                       />
                    </div>
                    <div className="relative flex-1">
                       <input 
                         type="text" 
                         value={employees}
                         onChange={(e) => setEmployees(e.target.value)}
                         placeholder="Number of Employees"
                         className="w-full bg-[#1A1C23] border border-gray-800 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#C15F3C] transition"
                       />
                    </div>
                 </div>
                 <button className="bg-white text-[#0B0C10] font-bold px-10 py-4 rounded-xl hover:bg-gray-100 transition shadow-xl text-base">
                    Request Demo
                 </button>
              </form>
            </div>

            {/* Right Image (Mockup Professionals) */}
            <div className="relative hidden lg:block w-[450px] shrink-0">
               <img 
                 src="/images/hr-payroll.png" 
                 alt="HR Professionals"
                 className="w-full h-auto object-contain drop-shadow-2xl scale-110"
               />
            </div>
          </div>
        </div>
      </section>

      {/* ── Feature Cards (3 White Boxes) ── */}
      <section className="bg-[#F4F3EE] pb-4 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { 
               title: "Dedicated support, flexible cost", 
               desc: "Get an experienced accountant to manage your ledgers, vendor & customer reconciliations, and monthly close.", 
               icon: Users 
             },
             { 
               title: "Accurate & timely compliance", 
               desc: "End-to-end Director Management for Pvt Ltd Companies & LLPs including filings, DIN allotment and more.", 
               icon: Shield 
             },
             { 
               title: "Powered by LEDGERS", 
               desc: "Experience seamless automation with real-time bank feeds, smart reconciliations and fully audit-ready financial reports.", 
               icon: Monitor 
             }
           ].map((card, i) => (
             <div key={i} className="bg-white p-10 rounded-[32px] shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
                <card.icon className="w-8 h-8 text-[#C15F3C] mb-6 transform group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-[#0B2545] mb-4 tracking-tight leading-tight">{card.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">{card.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* ── Services Offered Section ── */}
      <section className="py-8 px-6 bg-[#F4F3EE]">
        <div className="max-w-6xl mx-auto space-y-16">
           <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B2545]">Services Offered</h2>
              <p className="text-gray-400 font-medium font-sans">Smart solutions for HR operations, compliance, and employee growth.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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
                <div key={i} className="p-8 rounded-[32px] border border-gray-100 bg-white hover:bg-slate-50 transition-all space-y-4 group">
                   <h4 className="text-lg font-bold text-[#0B2545] group-hover:text-[#C15F3C] transition-colors">{service.title}</h4>
                   <p className="text-xs text-gray-400 leading-relaxed font-bold">{service.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ── How It Works Section ── */}
      <section className="py-8 px-6 bg-[#F4F3EE]">
        <div className="max-w-6xl mx-auto space-y-16">
           <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B2545]">How It Works</h2>
              <p className="text-gray-400 font-medium">A simple, guided process to set up and run HR smoothly, with ongoing reviews and compliance support.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
             {/* Decorative Line (Desktop) */}
             <div className="absolute top-1/4 left-[15%] right-[15%] h-[2px] bg-gray-200 hidden md:block" />

             {[
               { idx: 1, title: "HR Partner Assignment", desc: "We assign a dedicated HR professional and support team who understand your business, workforce, and compliance needs." },
               { idx: 2, title: "LEDGERS HR Setup", desc: "We configure your payroll, attendance, leave policies, employee records, and compliance workflows inside the LEDGERS HR platform." },
               { idx: 3, title: "Payroll, Compliance & Reviews", desc: "We handle monthly payroll, statutory filings (PF, ESI, PT, TDS), and conduct quarterly HR reviews to ensure accuracy and employee satisfaction." }
             ].map((step) => (
               <div key={step.idx} className="flex flex-col items-center text-center space-y-6 relative z-10 bg-[#F4F3EE] px-4">
                  <div className="w-16 h-16 rounded-full border-2 border-[#C15F3C] bg-white flex items-center justify-center text-xl font-bold text-[#C15F3C] shadow-lg">
                    {step.idx}
                  </div>
                  <div className="space-y-2">
                    <h5 className="text-base font-bold text-[#0B2545]">{step.title}</h5>
                    <p className="text-xs text-gray-500 leading-relaxed font-bold max-w-[280px]">{step.desc}</p>
                  </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* ── Dynamic Pricing Section ── */}
      <section className="bg-[#F4F3EE]">
        <DynamicPricingSection category="hr-payroll" />
      </section>

      {/* ── FAQ Section ── */}
      <section className="bg-[#F4F3EE]">
        <FAQAccordion category="hr-payroll" />
      </section>

      {/* ── SidebarCart Widget Below FAQs ── */}
      <section className="py-8 bg-[#F4F3EE]">
        <div className="max-w-[1180px] mx-auto px-6">
          <SidebarCart />
        </div>
      </section>

      <PopularSearches />
      <Footer />

      {/* WhatsApp CTA */}
      <div className="fixed right-6 bottom-6 bg-[#C15F3C] text-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-3 z-50 hover:scale-105 transition-all cursor-pointer font-bold">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M12 2a10 10 0 00-8.66 14.2L2 22l5.93-1.7A10 10 0 1012 2z" />
        </svg>
        Live Chat with Experts
      </div>
    </div>
  );
}
