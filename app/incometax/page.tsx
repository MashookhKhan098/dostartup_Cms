"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SidebarCart from "../components/SidebarCart";
import {
  ChevronRight,
  Search,
  CheckCircle,
  Zap,
  Shield,
  Lock,
  Star,
  StarHalf,
} from "lucide-react";

/* ---------------------------
 Assets & Data
 --------------------------- */
const ASSETS = {
  heroRight: "/images/itr-hero-woman-tablet.webp",
  cardPartnership: "/images/partnership-compliance-card.webp",
  cardBusinessTax: "/images/business-tax-filing-card.webp",
};

const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Delhi", "Goa", "Gujarat", "Haryana",
  "Himachal Pradesh", "Jammu And Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra",
  "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

const RatingStars = ({ value = 4.5 }: { value?: number }) => {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: full }).map((_, i) => (
        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
      ))}
      {half && <StarHalf className="w-4 h-4 text-amber-400 fill-amber-400" />}
    </div>
  );
};

export default function IncomeTaxHubPage() {
  const [activeTab, setActiveTab] = useState("ITR 1");

  return (
    <div className="min-h-screen bg-[#F4F3EE] text-slate-800">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full bg-[#C15F3C] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Income Tax E-Filing <br /> <span className="text-orange-200 italic">Fast & Reliable</span></h1>
            <p className="mt-6 text-white/90 text-lg max-w-xl">
              File your ITR online with expert assistance. We ensure accuracy, maximize your deductions, and handle the entire process for you.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md">
              <input type="text" placeholder="Enter PAN Card" className="flex-1 px-6 py-4 rounded-xl text-slate-900 outline-none font-medium" />
              <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-black transition-all">File Now</button>
            </div>
          </div>
          <div className="relative">
            <img src={ASSETS.heroRight} alt="Income Tax" className="rounded-[32px] shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <div className="bg-white border-b border-slate-200 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between gap-4 text-sm font-medium text-slate-500">
          <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-[#C15F3C]" /> Assisted Filing</div>
          <div className="flex items-center gap-2"><Shield className="w-5 h-5 text-[#C15F3C]" /> CA Support</div>
          <div className="flex items-center gap-2"><Zap className="w-5 h-5 text-yellow-500" /> Instant Processing</div>
          <div className="flex items-center gap-2"><Lock className="w-5 h-5 text-slate-400" /> Secure & Confidential</div>
        </div>
      </div>

      {/* Main Content Grid */}
      <main className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-12">
          {/* Main Article Card */}
          <article className="bg-white rounded-[32px] shadow-sm p-8 md:p-12 border border-[#E5E2DA]">
            <h2 className="text-3xl font-bold text-slate-900">E-File Your Income Tax Return online</h2>
            <div className="mt-8 space-y-6 text-slate-600 leading-relaxed">
              <p>Income tax filing is a crucial annual responsibility for every earning citizen. Whether you are a salaried individual, a professional, or a business owner, filing your ITR correctly and on time is essential to avoid penalties and legal notices.</p>
              <h3 className="text-xl font-bold text-slate-900">Why choose DoStartup for ITR?</h3>
              <p>Our platform combines advanced technology with expert Chartered Accountant support to make tax season stress-free for you. We help you identify all applicable deductions under Chapter VI-A and ensure 100% compliance with the latest IT Act provisions.</p>
            </div>
            
            <div className="mt-12 grid sm:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2">Salaried Individuals</h4>
                <p className="text-sm text-slate-600">Perfect for resident individuals with salary, pension, or interest income.</p>
                <button className="mt-4 text-[#C15F3C] font-bold text-sm">Add to Cart</button>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2">Business & Professionals</h4>
                <p className="text-sm text-slate-600">For shop owners, freelancers, and small business partners.</p>
                <button className="mt-4 text-[#C15F3C] font-bold text-sm">Add to Cart</button>
              </div>
            </div>
          </article>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-8">
          <SidebarCart />
          
          <div className="bg-white rounded-[32px] shadow-sm p-8 border border-[#E5E2DA]">
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">States in Focus</h4>
            <div className="max-h-[300px] overflow-y-auto pr-2 space-y-2">
              {states.map((s) => (
                <a key={s} href="#" className="flex items-center justify-between text-sm text-slate-600 hover:text-[#C15F3C] transition-colors py-1">
                  {s} <ChevronRight size={14} className="text-slate-300" />
                </a>
              ))}
            </div>
          </div>
        </aside>
      </main>

      <Footer />
    </div>
  );
}
