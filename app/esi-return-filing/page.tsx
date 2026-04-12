"use client";

/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useRef, useState } from "react";
import {
  FileText,
  File,
  Plus,
  ShieldCheck,
  ArrowRight,
  Star,
} from "lucide-react";
import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import PopularSearches from "../components/PopularSearches";

const ASSETS = {
  logo: "/images/india-logo.jpg",
  heroBg: "/images/hero.png",
  whatsapp: "/images/whatsapp.png",
  docsImg: "/images/business-docs.png",
  formsImg: "/images/business-forms.png",
  docsRequiredImg: "/images/business-docs-required.png",
  ledgersBadge: "/images/ledgers-badge.png",
  hrPeople: "/images/esireturn.png", // Fallback
  pfIcon: "/images/group.png",
  esiIcon: "/images/esi.png",
  payrollIcon: "/images/payroll.png",
  avatar: "/images/avatar-placeholder.png",
};

interface Blog {
  _id: string;
  title: string;
  category: string;
  content: string | string[] | any;
  image_url: any;
  author_name: string;
  author_image: any;
  upload_date: string;
  writer_name: string;
}

const TOKEN = process.env.NEXT_PUBLIC_COCKPIT_API_KEY || "";
const CMS_URL = process.env.NEXT_PUBLIC_COCKPIT_URL || "";

export default function EsiReturnFilingPage(): React.ReactElement {
  const [demoRequested, setDemoRequested] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [heroImage, setHeroImage] = useState<string>(ASSETS.hrPeople);
  const [loadingContent, setLoadingContent] = useState(true);

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
        // Fetch Blogs
        const blogRes = await fetch(`${CMS_URL}/api/content/items/blogs?token=${TOKEN}`);
        const blogData = await blogRes.json();
        if (Array.isArray(blogData)) {
          let filtered = blogData.filter((b: Blog) => 
            b.category?.toLowerCase() === "esi-return-filing" 
          );
          setBlogs(filtered.slice(0, 3));
        }

        // Fetch Service Image
        const serviceRes = await fetch(`${CMS_URL}/api/content/items/service?token=${TOKEN}&filter=${encodeURIComponent(JSON.stringify({ name: "ESI Return Filing" }))}`);
        const serviceData = await serviceRes.json();
        const entries = Array.isArray(serviceData) ? serviceData : (serviceData?.entries || []);
        if (entries.length > 0 && entries[0].image) {
          const url = getImageUrl(entries[0].image);
          if (url) setHeroImage(url);
        }
      } catch (error) {
        console.error("Data fetch error:", error);
      } finally {
        setLoadingContent(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (demoRequested) {
      const t = setTimeout(() => setDemoRequested(false), 2500);
      return () => clearTimeout(t);
    }
  }, [demoRequested]);

  return (
    <div className="min-h-screen bg-[#F4F3EE] text-[#4F4C45] font-sans antialiased">
  <Navbar />

  {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 text-sm text-gray-500">
  Home / Compliance / <span className="text-[#C15F3C] font-medium italic">ESI Return Filing</span>
  </div>

  <main className="py-2 space-y-2">

  {/* HERO SECTION */}
  <section className="max-w-7xl mx-auto px-4 sm:px-6">
    <div className="relative rounded-[32px] overflow-hidden shadow-lg min-h-[480px] group">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${ASSETS.heroBg})` }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, rgba(2,6,23,0.95) 0%, rgba(2,6,23,0.75) 50%, rgba(0,0,0,0.3) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 h-full flex items-center py-12 px-8 lg:px-16">
        <div className="w-full flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 max-w-2xl">
            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-12 backdrop-blur-md">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#C15F3C]/20 border border-[#C15F3C]/30 rounded-full px-4 py-1.5 mb-8">
                <div className="w-2 h-2 bg-[#C15F3C] rounded-full animate-pulse" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">HR & PAYROLL Compliance</span>
              </div>

              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                ESI Return <br /><span className="text-[#C15F3C]">Filing</span>
              </h1>
              <p className="text-slate-200 text-lg mb-10 leading-relaxed italic opacity-90">
                Ensure timely ESI contribution management, mapping, and monthly filing. Supported by a Dedicated Accountant and the LEDGERS HR system.
              </p>

              {/* Trust Section */}
              <div className="flex items-center gap-4 mb-10">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-r from-[#C15F3C] to-[#A74A2F] border-2 border-[#1a1714] flex items-center justify-center text-[10px] text-white font-bold">
                       DS
                    </div>
                  ))}
                </div>
                <div className="h-8 w-px bg-white/20 mx-2" />
                <span className="text-sm text-slate-300 font-medium">Trusted by 10,000+ businesses</span>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setDemoRequested(true);
                }}
                className="flex flex-col sm:flex-row items-center gap-3"
              >
                <div className="relative w-full sm:flex-1">
                  <input
                    placeholder="PAN / GSTIN"
                    className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-[#C15F3C]/50 transition-all text-sm font-medium"
                    required
                  />
                </div>
                <button className="w-full sm:w-auto px-10 py-4 bg-[#C15F3C] text-white rounded-2xl font-extrabold hover:bg-[#A74A2F] hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap shadow-xl shadow-[#C15F3C]/20 text-sm">
                  Request Demo
                </button>
              </form>
              
              {demoRequested && (
                <p className="text-green-400 text-xs mt-4 font-bold animate-bounce">✓ Request received! Our expert will call you shortly.</p>
              )}
            </div>
          </div>
          <div className="hidden lg:block flex-shrink-0 animate-float">
            <div className="relative">
              <img src={heroImage} alt="ESI" className="w-[440px] h-auto object-contain rounded-3xl drop-shadow-2xl max-h-[500px]" />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                   <ShieldCheck className="text-[#C15F3C]" size={20} />
                </div>
                <div>
                   <p className="text-[10px] font-bold text-gray-400 uppercase leading-none">Status</p>
                   <p className="text-xs font-bold text-[#0B2545]">Compliant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* 3 Feature Cards */}
  <section className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
  <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center shrink-0">
  <img src={ASSETS.pfIcon} alt="pf" className="w-6 h-6 object-contain" />
  </div>
  <div>
  <h3 className="font-bold text-[#C15F3C] mb-2 leading-none uppercase text-xs tracking-wider">PF Return Expertise</h3>
  <p className="text-sm text-gray-500 leading-relaxed italic">Manage employee PF contributions, challan generation and monthly return filing with automated reconciliation.</p>
  </div>
  </div>
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
  <img src={ASSETS.esiIcon} alt="esi" className="w-6 h-6 object-contain" />
  </div>
  <div>
  <h3 className="font-bold text-[#C15F3C] mb-2 leading-none uppercase text-xs tracking-wider">ESI Return Support</h3>
  <p className="text-sm text-gray-500 leading-relaxed italic">Assistance for ESI registration, contribution mapping and return submission to ESIC portal.</p>
  </div>
  </div>
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
  <img src={ASSETS.payrollIcon} alt="payroll" className="w-6 h-6 object-contain" />
  </div>
  <div>
  <h3 className="font-bold text-[#C15F3C] mb-2 leading-none uppercase text-xs tracking-wider">Payroll & HR</h3>
  <p className="text-sm text-gray-500 leading-relaxed italic">Automated salary processing, attendance, leave and employee self-serve in LEDGERS HR platform.</p>
  </div>
  </div>
  </section>

  {/* Section 1: HR Compliance Made Easy */}
  <section className="max-w-7xl mx-auto px-4 sm:px-6">
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
  <h2 className="text-2xl md:text-3xl font-bold text-[#0B2545] mb-4">
  HR Compliance Made Easy
  </h2>
  <p className="text-[#4F4C45] text-[15px] md:text-[16px] leading-relaxed mb-10">
  End-to-End HR Compliance Stay worry-free with complete support for PF, ESI, PT, TDS, employee contracts, and statutory filings-handled accurately and on time.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div className="bg-[#F9FAFB] p-6 rounded-2xl border border-gray-50 flex flex-col items-start h-full">
  <h4 className="font-bold text-[#C15F3C] text-[16px] mb-3">Onboarding & Contracts</h4>
  <p className="text-sm text-[#4F4C45] leading-relaxed">
  Offer letters, joining formalities, employee KYC and documentation setup.
  </p>
  </div>
  <div className="bg-[#F9FAFB] p-6 rounded-2xl border border-gray-50 flex flex-col items-start h-full">
  <h4 className="font-bold text-[#C15F3C] text-[16px] mb-3">Attendance & Payroll</h4>
  <p className="text-sm text-[#4F4C45] leading-relaxed">
  Attendance platform integration, automated salary runs, and statutory deductions processed through LEDGERS.
  </p>
  </div>
  <div className="bg-[#F9FAFB] p-6 rounded-2xl border border-gray-50 flex flex-col items-start h-full">
  <h4 className="font-bold text-[#C15F3C] text-[16px] mb-3">Compliance & Returns</h4>
  <p className="text-sm text-[#4F4C45] leading-relaxed">
  PF, ESI, PT, TDS returns and challan reconciliation with alerts and audit-ready records.
  </p>
  </div>
  </div>
  </div>
  </section>

  {/* Section 2: Expert Guidance on ESI Return Filing */}
  <section className="max-w-7xl mx-auto px-4 sm:px-6">
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
  <h2 className="text-2xl md:text-3xl font-bold text-[#0B2545] mb-6">
  Expert Guidance on ESI Return Filing
  </h2>
  <div className="space-y-6">
  <p className="text-[#4F4C45] text-[15px] leading-relaxed">
  Employee State Insurance (ESI) registration is a critical requirement for businesses in India, ensuring their employees are covered under the ESI scheme, which provides a range of social security benefits. Following registration, employers are mandated to file ESI returns quarterly, detailing the contributions made towards the scheme for each employee. These returns are crucial for maintaining compliance with the ESIC regulations and ensuring that employees can avail the benefits they are entitled to. We specialize in simplifying this process for businesses. Our experts guide you through every step of ESI registration and the crucial process of how to file ESIC returns, ensuring accuracy, compliance, and peace of mind for employers and employees alike.
  </p>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
  <div className="space-y-4">
  <h3 className="text-lg font-bold text-[#0B2545]">Employees' State Insurance (ESI) Scheme</h3>
  <p className="text-[14px] md:text-[15px] leading-relaxed">
  Employees' State Insurance (ESI) is a comprehensive social security program designed to offer financial protection and healthcare benefits to employees in the event of unexpected circumstances. Funded by contributions from both employers and employees, this scheme ensures that insured workers and their families have access to medical services, financial support during illness or maternity, compensation for workplace-related disabilities, and coverage for funeral and confinement expenses.
  </p>
  </div>
  <div className="space-y-4">
  <h3 className="text-lg font-bold text-[#0B2545]">We assist businesses with the process of ESI registration.</h3>
  <p className="text-[14px] md:text-[15px] leading-relaxed mb-6">
  Get Started and ensure your employees are protected with timely registration and accurate return filing.
  </p>
  <div className="flex flex-wrap gap-4">
  <button className="px-8 py-3 bg-[#C15F3C] text-white rounded-xl font-bold hover:bg-[#A74A2F] transition-all">
  Get Started
  </button>
  <button onClick={() => setContactOpen(!contactOpen)} className="px-8 py-3 border-2 border-[#C15F3C] text-[#C15F3C] rounded-xl font-bold hover:bg-orange-50 transition-colors">
  Talk to an Expert
  </button>
  </div>
  </div>
  </div>
  </div>
  </div>
  </section>
 
  {/* Section 3: Who should Register for the ESI scheme? */}
  <section className="max-w-7xl mx-auto px-4 sm:px-6">
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
  <h2 className="text-xl md:text-2xl font-bold text-[#0B2545] mb-6">
  Who should Register for the ESI scheme?
  </h2>
  <div className="space-y-6">
  <p className="text-[#4F4C45] text-[15px] leading-relaxed">
  The ESI scheme, overseen by the Employees' State Insurance Corporation (ESIC) and regulated by India's Ministry of Labour and Employment, requires contributions from both employers and employees, totaling 4% of an employee's monthly gross salary to the ESI fund. Businesses in India with a workforce of 10 or more are expected to proactively enroll with the ESIC within 15 days of becoming eligible.
  </p>
  <div className="space-y-3">
  <h3 className="text-lg font-bold text-[#0B2545] italic">Filing ESI Returns: An Overview</h3>
  <p className="text-[14px] md:text-[15px] leading-relaxed">
  ESI Registered employers are required to submit ESI Returns every sixth month, providing critical information about the employees insured under the scheme, their salaries, and the contributions made by both the employer and the employees. These returns play a key role in verifying the accuracy of contributions to the ESI scheme and ensuring that insured employees are accessing the benefits they're entitled to. Understanding how to file ESIC returns is essential for businesses to ensure compliance with regulatory rules regarding employee welfare and healthcare contributions.
  </p>
  </div>
  </div>
  </div>
  </section>
 
  {/* Section 4: ESI Return Filing Deadlines */}
  <section className="max-w-7xl mx-auto px-4 sm:px-6">
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
  <h2 className="text-xl md:text-2xl font-bold text-[#0B2545] mb-4">
  ESI Return Filing Deadlines
  </h2>
  <p className="text-[#4F4C45] text-[15px] leading-relaxed mb-8">
  ESI Return Filing is a crucial aspect of Employer responsibilities under the Employees' State Insurance (ESI) Act. These returns are submitted to the Employees' State Insurance Corporation (ESIC) to track contributions made by both employers and employees.
  </p>
  
  <div className="overflow-x-auto rounded-xl border border-gray-100 bg-white mb-10">
  <table className="w-full text-sm text-left">
  <thead className="bg-[#FFF8F4]">
  <tr>
  <th className="py-4 px-6 font-bold text-[#C15F3C]">Return Type</th>
  <th className="py-4 px-6 font-bold text-[#C15F3C]">Due Date</th>
  </tr>
  </thead>
  <tbody>
  <tr className="border-t border-gray-50">
  <td className="py-4 px-6 font-medium">Monthly Contribution</td>
  <td className="py-4 px-6">15th of the following month</td>
  </tr>
  <tr className="border-t border-gray-50">
  <td className="py-4 px-6 font-medium">Annual Return</td>
  <td className="py-4 px-6">31st January of the following year</td>
  </tr>
  <tr className="border-t border-gray-50">
  <td className="py-4 px-6 font-medium">Half-yearly Contribution Returns</td>
  <td className="py-4 px-6 leading-relaxed italic">
  Within 42 days of the end of each contribution period: Contribution Period 1 (Ends on 30th September): 11th November; Contribution Period 2 (Ends on 31st March): 12th May
  </td>
  </tr>
  </tbody>
  </table>
  </div>
 
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
  <div>
  <h3 className="text-lg font-bold text-[#0B2545] mb-6">Essential Documents for Filing ESI Returns</h3>
  <ul className="space-y-3">
  {[
    "Attendance register", "Form 6", "Register of wages", "Accident register", 
    "Cancelled cheque of the company", "PAN card of the organisation", 
    "Monthly challans and returns for ESI"
  ].map((doc, i) => (
    <li key={i} className="flex items-center gap-2 text-sm">
      <div className="w-5 h-5 flex items-center justify-center border border-[#C15F3C] rounded-sm shrink-0">
        <FileText size={12} className="text-[#C15F3C]" />
      </div>
      <span>{doc}</span>
    </li>
  ))}
  </ul>
  </div>
  <div>
  <h3 className="text-lg font-bold text-[#0B2545] mb-4">Consequences of Non-Payment or Late Payment</h3>
  <p className="text-sm text-[#4F4C45] leading-relaxed mb-6">
  Failing to deposit the ESI contributions deducted from employees' salaries is considered a serious violation, as these amounts are entrusted to employers by their employees. Delays or non-payment can attract interest, damages, and possible prosecution under relevant legal provisions.
  </p>
  <div className="space-y-4">
  <h4 className="text-[15px] font-bold text-[#C15F3C]">Penalty Structure for Delayed or Unpaid ESI Contributions</h4>
  <ul className="text-sm space-y-2">
  <li className="flex justify-between"><span>Delay under 2 months: Damages at 5% per annum</span></li>
  <li className="flex justify-between"><span>Delay between 2 to 4 months: Damages at 10% per annum</span></li>
  <li className="flex justify-between"><span>Delay between 4 to 6 months: Damages at 15% per annum</span></li>
  <li className="flex justify-between"><span>Delay over 6 months: Damages at 25% per annum</span></li>
  <li className="pt-2 border-t border-gray-100 font-bold text-[#C15F3C]">Interest for delayed payments: 12% annually applied per day of delay</li>
  </ul>
  </div>
  </div>
  </div>
  </div>
  </section>
 
  {/* Section 5: Procedure to File ESI Returns for Employers */}
  <section className="max-w-7xl mx-auto px-4 sm:px-6">
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
  <h2 className="text-xl md:text-2xl font-bold text-[#0B2545] mb-8">
  Procedure to File ESI Returns for Employers
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
  <div className="space-y-3">
  {[
    "Registration on ESIC Portal",
    "Login to ESIC Portal using employer code and password",
    "Employee Enrollment and data update",
    "Download the Return Form",
    "Review Contribution Details",
    "Correct Discrepancies if Any",
    "Submit the Return",
    "Save Acknowledgment Receipt",
    "Maintain Records for Audits"
  ].map((step, idx) => (
    <div key={idx} className="flex items-start gap-2 text-sm">
      <span className="font-bold text-[#0B2545] leading-none mt-0.5">{idx + 1}.</span>
      <span className="leading-relaxed">{step}</span>
    </div>
  ))}
  </div>
  <div className="flex flex-col justify-center items-start">
  <p className="text-sm text-[#4F4C45] leading-relaxed mb-8">
  We offer comprehensive assistance in both obtaining ESI registration and managing the ESI return filing process for businesses. Our ESI experts collect documents, prepare returns, validate contribution details, file on the ESIC portal and provide support during audits.
  </p>
  <button className="px-8 py-3 bg-[#C15F3C] text-white rounded-xl font-bold hover:bg-[#A74A2F] transition-all">
  Request ESI Assistance
  </button>
  </div>
  </div>
  </div>
  </section>
 
  {/* Section 6: How We Support ESI Return Filing */}
  <section className="max-w-7xl mx-auto px-4 sm:px-6">
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
  <h2 className="text-xl md:text-2xl font-bold text-[#0B2545] mb-8">
  How We Support ESI Return Filing
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  <div className="p-6 rounded-2xl border border-gray-100 flex flex-col items-start h-full">
  <h4 className="font-bold text-[#C15F3C] text-[16px] mb-4">Document Collection</h4>
  <p className="text-sm text-[#4F4C45] leading-relaxed">
  An expert will gather all necessary data and documents required for ESI return preparation specific to your business needs.
  </p>
  </div>
  <div className="p-6 rounded-2xl border border-gray-100 flex flex-col items-start h-full">
  <h4 className="font-bold text-[#C15F3C] text-[16px] mb-4">Return Preparation</h4>
  <p className="text-sm text-[#4F4C45] leading-relaxed">
  Our ESI expert will meticulously prepare your ESI return ensuring accuracy and compliance with regulations.
  </p>
  </div>
  <div className="p-6 rounded-2xl border border-gray-100 flex flex-col items-start h-full">
  <h4 className="font-bold text-[#C15F3C] text-[16px] mb-4">Return Filing</h4>
  <p className="text-sm text-[#4F4C45] leading-relaxed">
  Following your verification, our dedicated professional will file the ESI return with the ESIC department and secure your compliance.
  </p>
  </div>
  </div>
  </div>
  </section>
 
  {/* Section 7: Benefits of Timely ESI Return Filing */}
  <section className="max-w-7xl mx-auto px-4 sm:px-6">
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
  <h2 className="text-xl md:text-2xl font-bold text-[#0B2545] mb-8">
  Benefits of Timely ESI Return Filing
  </h2>
  <ul className="space-y-3">
  {[
    "Compliance: Avoid legal penalties and fines associated with non-compliance",
    "Record Keeping: Maintain accurate records of contributions",
    "Benefit Entitlement: Ensures employees can access medical and other benefits",
    "Transparency: Promotes trust between employer and employees",
    "Dispute Resolution: Filed returns serve as reference points for discrepancies",
    "Ease of Benefit Processing: Facilitates smooth processing of claims",
    "Financial Health: Reflects positively on business operations",
    "Updates and Adjustments: Allows corrections and updates to records"
  ].map((benefit, i) => (
    <li key={i} className="flex items-start gap-2 text-sm leading-relaxed">
      <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 shrink-0" />
      <span>{benefit}</span>
    </li>
  ))}
  </ul>
  </div>
  </section>
 
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <DynamicPricingSection category="esi-return-filing" />
  </div>
 
  <FAQAccordion category="esi-return-filing" />
 
 
  <PopularSearches />
 
  <Footer />
  </main>
 
  {/* WhatsApp CTA */}
  <div className="fixed right-8 bottom-8 z-50">
    <button className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform">
      <img src={ASSETS.whatsapp} alt="WA" className="w-8 h-8" />
    </button>
  </div>
    </div>
  );
}
