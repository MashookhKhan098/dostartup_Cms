"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Faq from "../components/Faq";
import PopularSearches from "../components/PopularSearches";
import SidebarCart from "../components/SidebarCart";
import { Check, ChevronRight, ChevronDown, Monitor, Users, Shield, Clock, FileText, BarChart, Lock, UserCheck, Briefcase, Calendar, Globe } from "lucide-react";

export default function ComplianceHRPayrollPage() {
  const [selectedPackage, setSelectedPackage] = useState("Payroll Management");

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Application submitted! Our HR experts will contact you shortly.");
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />

      {/* Hero Section - Matching Live Site Wording */}
      <section className="bg-white border-b border-gray-100 overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch min-h-[600px]">
           <div className="flex-1 py-16 px-6 lg:px-12 flex flex-col justify-center">
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 px-3 py-1.5 rounded-full">
                  <div className="w-1.5 h-1.5 bg-[#C15F3C] rounded-full" />
                  <span className="text-[10px] font-bold text-[#C15F3C] uppercase tracking-widest">HR Solutions</span>
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-[#2F2E2B] leading-[1.1] mb-8">
                DoStartup <span className="text-[#C15F3C]">HR</span>
              </h1>
              <p className="text-lg text-[#6F6B63] mb-10 max-w-xl leading-relaxed">
                Get a Dedicated Accountant, a Qualified HR Professional (minimum 3 years&apos; experience) and LEDGERS compliance platform for your business.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {[
                   { title: "Dedicated Support", desc: "Experienced accountant to manage your ledgers and reconciliations.", icon: Users },
                   { title: "Timely Compliance", desc: "End-to-end Director and Statutory management for companies.", icon: Shield },
                   { title: "Powered by LEDGERS", desc: "Seamless automation with real-time bank feeds and e-invoicing.", icon: Monitor }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-[#C15F3C] group-hover:bg-[#C15F3C] group-hover:text-white transition-all">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#2F2E2B] text-sm">{item.title}</h4>
                        <p className="text-xs text-[#6F6B63] mt-1 line-clamp-2">{item.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           {/* Form Side */}
           <div className="w-full lg:w-[480px] bg-[#FFF9F1] py-16 px-6 lg:px-12 flex flex-col justify-center border-l border-gray-100">
             <div className="bg-white rounded-3xl shadow-2xl shadow-orange-900/5 relative overflow-hidden">
                <div className="h-2 bg-[#C15F3C] w-full" />
                <form className="p-8 space-y-6" onSubmit={handleApply}>
                   <div className="space-y-1">
                      <label className="text-xs font-bold text-[#2F2E2B] uppercase tracking-tighter">Package Selected</label>
                      <div className="relative">
                         <select 
                           value={selectedPackage}
                           onChange={(e) => setSelectedPackage(e.target.value)}
                           className="w-full border border-[#E5E2DA] rounded-xl px-4 py-3.5 text-sm text-[#2F2E2B] bg-white appearance-none focus:ring-2 focus:ring-[#C15F3C]/20 outline-none"
                         >
                            <option>Payroll Management</option>
                            <option>Fractional HR</option>
                            <option>PF & ESI Compliance</option>
                         </select>
                         <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6F6B63]" />
                      </div>
                   </div>
                   <input type="text" placeholder="Full Name" className="w-full border border-[#E5E2DA] rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-[#C15F3C]/20 outline-none" required />
                   <input type="email" placeholder="Email Address" className="w-full border border-[#E5E2DA] rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-[#C15F3C]/20 outline-none" required />
                   <input type="tel" placeholder="Mobile Number" className="w-full border border-[#E5E2DA] rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-[#C15F3C]/20 outline-none" required />
                   <button className="w-full bg-[#C15F3C] text-white font-bold py-4 rounded-xl text-lg hover:bg-[#A94E30] transition-all shadow-lg shadow-[#C15F3C]/20 mt-4">
                     Apply for HR Support
                   </button>
                   <p className="text-[10px] text-center text-[#B1ADA1] mt-4 uppercase font-bold tracking-widest">Powered by LEDGERS Platform</p>
                </form>
             </div>
           </div>
        </div>
      </section>

      {/* Main Content Area - EXACT CONTENT FROM LIVE SITE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left Column: Educational Content */}
            <div className="flex-1 space-y-16">
              
              <div className="space-y-8">
                <h2 className="text-4xl font-extrabold text-[#2F2E2B]">Expert HR & Payroll Outsourcing</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   {[
                     { title: "Dedicated support, flexible cost", desc: "Get an experienced accountant to manage your ledgers, vendor & customer reconciliations, bank reconciliations, and monthly close with precision and reliability.", icon: Briefcase },
                     { title: "Accurate & timely compliance", desc: "End-to-end Director Management for Pvt Ltd Companies & LLPs including filings and DIN allotment.", icon: UserCheck }
                   ].map((feature, i) => (
                     <div key={i} className="p-8 border border-gray-100 rounded-3xl bg-white/50 hover:bg-white hover:shadow-xl hover:shadow-orange-900/5 transition-all">
                        <feature.icon className="w-8 h-8 text-[#C15F3C] mb-4" />
                        <h3 className="text-xl font-bold text-[#2F2E2B] mb-3">{feature.title}</h3>
                        <p className="text-[#6F6B63] text-[15px] leading-relaxed">{feature.desc}</p>
                     </div>
                   ))}
                </div>
              </div>

              {/* Services Offered Section (Exact match) */}
              <div className="space-y-10">
                <div className="flex items-center gap-4">
                  <div className="h-[2px] w-12 bg-[#C15F3C]" />
                  <h3 className="text-2xl font-extrabold text-[#2F2E2B] uppercase tracking-tight">Services Offered</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   {[
                     { title: "Payroll Processing", desc: "Accurate and timely salary processing with payslips, tax deductions.", icon: FileText },
                     { title: "Attendance & Leave Management", desc: "Track working hours, shifts, overtime, and requests with workflows.", icon: Calendar },
                     { title: "Compliance & Statutory Filings", desc: "Complete support for PF, ESI, Professional Tax, TDS and labor laws.", icon: Shield },
                     { title: "Employee Onboarding", desc: "Digital offer letters, contracts, and smooth joining experience.", icon: Briefcase },
                     { title: "HR Policies & Contracts", desc: "Custom drafting of policies, employee handbooks and contracts.", icon: FileText },
                     { title: "Employee Self-Service Portal", desc: "User-friendly portal for leave, payslips and document access.", icon: Monitor },
                     { title: "HR Reports & Analytics", desc: "Custom dashboards on payroll, headcount and compliance.", icon: BarChart },
                     { title: "Secure Document Storage", desc: "Safe storage for up to 8 years ensured easy access and readiness.", icon: Lock }
                   ].map((service, i) => (
                     <div key={i} className="flex gap-4 p-4 hover:translate-x-2 transition-transform cursor-default">
                        <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-[#C15F3C] flex-shrink-0">
                          <service.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#2F2E2B] text-sm">{service.title}</h4>
                          <p className="text-xs text-[#6F6B63] mt-1 leading-relaxed">{service.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>
              </div>

              {/* How It Works Section (Exact match) */}
              <div className="bg-[#FFF9F1] rounded-[40px] p-12 border border-orange-100">
                <h3 className="text-2xl font-extrabold text-[#2F2E2B] mb-12 text-center">How It Works</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                   {[
                     { step: "01", title: "HR Partner Assignment", desc: "We assign a dedicated HR professional who understands your business needs." },
                     { step: "02", title: "LEDGERS HR Setup", desc: "We configure payroll, attendance, and compliance inside the platform." },
                     { step: "03", title: "Reviews & Filing", desc: "We handle monthly payroll, statutory filings and quarterly reviews." }
                   ].map((step, i) => (
                     <div key={i} className="text-center relative z-10">
                        <div className="text-4xl font-black text-[#C15F3C]/20 mb-4">{step.step}</div>
                        <h4 className="font-bold text-[#2F2E2B] mb-3 text-sm">{step.title}</h4>
                        <p className="text-[13px] text-[#6F6B63] leading-relaxed">{step.desc}</p>
                     </div>
                   ))}
                </div>
              </div>

            </div>

            {/* Sidebar Column */}
            <div className="lg:w-[400px] flex flex-col gap-10">
              <SidebarCart />
              
              <div className="bg-white rounded-3xl border border-[#E5E2DA] p-10 shadow-sm relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                 <div className="relative">
                    <h4 className="text-lg font-bold text-[#2F2E2B] mb-8">HR Compliance Guides</h4>
                    <ul className="space-y-6">
                      {[
                        "Payroll Best Practices", "PF & ESI Guide", "Gratuity Calculations", "Statutory Compliance"
                      ].map((guide, i) => (
                        <li key={i}>
                          <a href="#" className="flex items-center justify-between group/link">
                            <span className="text-sm font-bold text-[#C15F3C] group-hover/link:underline">{guide}</span>
                            <ChevronRight className="w-4 h-4 text-[#C15F3C]" />
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

      {/* PRICING SECTION - MATCHING PREVIOUS STANDARDS */}
      <section className="bg-white py-24 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2F2E2B] mb-4">Simple, Transparent <span className="text-[#896BAE] relative pb-1">Pricing<span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#896BAE]"></span></span></h2>
            <p className="text-[#6F6B63] max-w-2xl mx-auto">Manage your HR and payroll online with guided onboarding, automated salary processing, and expert compliance support.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Payroll Management",
                desc: "Manage your HR and payroll online with guided onboarding and automated salary processing.",
                features: [
                  "LEDGERS HR Software (1 Year Subscription)",
                  "Attendance Platform",
                  "Employee Self-Serve",
                  "12 Months Managed Payroll Service",
                  "12 Months HR Support & Assistance",
                  "Upto 20 Employees"
                ]
              },
              {
                title: "Fractional HR",
                desc: "Managed HR support with dedicated partner for up to 20 employees.",
                features: [
                  "LEDGERS HR Platform setup & migration",
                  "1 Year Monthly Payroll Service",
                  "Dedicated Accountant",
                  "Attendance Platform",
                  "1 Year PF & ESI Filing",
                  "1 Year TDS Return Filing",
                  "Offer letter, Leave & holiday policy setup",
                  "Upto 20 Employees"
                ]
              },
              {
                title: "PF & ESI Compliance",
                desc: "Comprehensive PF/ESI management for your workforce.",
                features: [
                  "12 Months Managed PF Return Filing",
                  "12 Months Managed ESI Return Filing",
                  "Employee KYC Registration",
                  "Up to 20 Employees"
                ]
              }
            ].map((card, i) => (
              <div key={i} className="bg-white border border-[#E5E2DA] rounded-[40px] p-10 flex flex-col shadow-lg shadow-orange-900/5 hover:-translate-y-2 transition-all">
                <h3 className="text-2xl font-bold text-[#2F2E2B] mb-4 leading-tight">{card.title}</h3>
                <p className="text-sm text-[#6F6B63] mb-10 leading-relaxed">{card.desc}</p>
                <div className="space-y-4 mb-12 flex-grow">
                  {card.features.map((feat, fi) => (
                    <div key={fi} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0 mt-0.5 border border-green-100">
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </div>
                      <span className="text-[13px] font-medium text-[#4F4C45]">{feat}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full border-2 border-[#E5E2DA] text-[#2F2E2B] font-bold py-4 rounded-2xl hover:border-[#C15F3C] hover:text-[#C15F3C] transition-all">
                  Get Started Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq category="HR Payroll" />
      <PopularSearches />
      <Footer />
    </div>
  );
}
