"use client";

/* eslint-disable @next/next/no-img-element */

import React, { useMemo, useState } from "react";
import SidebarCart from "../components/SidebarCart";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  ChevronRight,
  ShoppingCart,
  MessageCircle,
  Star,
  ChevronDown,
} from "lucide-react";

const ASSETS = {
  logo: "/images/india-logo.jpg",
  hero: "/images/mca-compliance-simplified-india.webp",
  promoBlue: "/images/company-compliance-india.png",
  ledgers: "/images/ledgers.png",
  gstSave: "/images/gstin.png",
  cards: {
    companyCompliance: "/images/company-compliance-india.png",
    dinEKyc: "/images/din-ekyc.png",
    directorChange: "/images/director-change.png",
    removeDirector: "/images/remove-director.png",
    shareTransfer: "/images/share-transfer.png",
    moaAmendment: "/images/moa-amendment.png",
    officeChange: "/images/registered-office-change.png",
    capitalIncrease: "/images/authorized-capital-increase.png",
    form10bd: "/images/form-10bd-filing.png",
    llpForm11: "/images/llp-form-11.png",
    strikeOffRevival: "/images/strike-off-revival.png",
    fdiRbi: "/images/fdi-filing-rbi.png",
    rera: "/images/rera.png",
    opcCompliance: "/images/opc-compliance.png",
    dpt3: "/images/dpt3.png",
    aoaAmendment: "/images/aoa-amendment.png",
    lei: "/images/lei.png",
    chargeCreate: "/images/charge-creation.png",
    chargeSatisfaction: "/images/charge-satisfaction.png",
    dematShares: "/images/demat-shares.png",
    businessPlan: "/images/business-plan.png",
    professionalTax: "/images/professional-tax-return.png",
  },
};

const MCA_DROPDOWN_LINKS = [
  { title: "Company Compliance", href: "/MCA/company-compliance" },
  { title: "Director Change", href: "/MCA/director-change" },
  { title: "AOA Amendment", href: "/MCA/aoa-amendment" },
  { title: "LLP Compliance", href: "/MCA/llp-compliance" },
  { title: "Remove Director", href: "/MCA/remove-director" },
  { title: "Authorized Capital Increase", href: "/MCA/authorized-capital-increase" },
  { title: "OPC Compliance", href: "/MCA/opc-compliance" },
  { title: "ADT-1 Filing", href: "/MCA/adt-1-filing" },
  { title: "Share Transfer", href: "/MCA/share-transfer" },
  { title: "Name Change - Company", href: "/MCA/name-change-company" },
  { title: "DPT-3 Filing", href: "/MCA/dpt-3-filing" },
  { title: "Demat of Shares", href: "/MCA/demat-of-shares" },
  { title: "Registered Office Change", href: "/MCA/registered-office-change" },
  { title: "LLP Form 11 Filing", href: "/MCA/llp-form-11-filing" },
  { title: "Winding Up - LLP", href: "/MCA/winding-up-llp" },
  { title: "DIN eKYC Filing", href: "/MCA/din-ekyc-filing" },
  { title: "Dormant Status Filing", href: "/MCA/dormant-status-filing" },
  { title: "Winding Up - Company", href: "MCA/winding-up-company" },
  { title: "DIN Reactivation", href: "/MCA/din-reactivation" },
  { title: "MOA Amendment", href: "/MCA/moa-amendment" },
  { title: "Commencement (INC-20A)", href: "/MCA/commencement-inc-20a" },
];

const categories = [
  { name: "Startup", icon: "/images/startup-icon.png" },
  { name: "Registrations", icon: "/images/registration-icon.png" },
  { name: "Trademark", icon: "/images/trademark-icon.png" },
  { name: "Goods & Services Tax", icon: "/images/gst.png" },
  { name: "Income Tax", icon: "/images/income-tax.png" },
  { name: "MCA", icon: "/images/mca.png" },
  { name: "Compliance", icon: "/images/compliance.png" },
  { name: "Consultation", icon: "/images/consultation.png" },
];

const services = [
  { id: 1, title: "Company Compliance", desc: "Maintain accounts, MCA compliance and more…", image: ASSETS.cards.companyCompliance },
  { id: 2, title: "DIN eKYC Filing", desc: "Directors with DIN must submit e-Filing…", image: ASSETS.cards.dinEKyc },
  { id: 3, title: "Director Change", desc: "Add a Director to the Board of Directors…", image: ASSETS.cards.directorChange },
  { id: 4, title: "Remove Director", desc: "Resignation of a Director from the Board…", image: ASSETS.cards.removeDirector },
  { id: 5, title: "Share Transfer", desc: "Transfer shares between individuals or groups…", image: ASSETS.cards.shareTransfer },
  { id: 6, title: "MOA Amendment", desc: "MOA amendment for a private limited company…", image: ASSETS.cards.moaAmendment },
  { id: 7, title: "Registered Office Change", desc: "Change of registered office…", image: ASSETS.cards.officeChange },
  { id: 8, title: "Authorized Capital Increase", desc: "Increase authorised capital…", image: ASSETS.cards.capitalIncrease },
  { id: 9, title: "Form 10BD Filing", desc: "Form 10BD filing for Section 8…", image: ASSETS.cards.form10bd },
  { id: 10, title: "LLP Form 11 Filing", desc: "Annual return filing for LLP…", image: ASSETS.cards.llpForm11 },
  { id: 11, title: "Strike Off Company Reactivation", desc: "Revival of struck-off company…", image: ASSETS.cards.strikeOffRevival },
  { id: 12, title: "FDI filing with RBI", desc: "FCGPR filing including CS…", image: ASSETS.cards.fdiRbi },
  { id: 13, title: "RERA Registration", desc: "Registration for RERA…", image: ASSETS.cards.rera },
  { id: 14, title: "OPC Compliance", desc: "OPC annual compliance…", image: ASSETS.cards.opcCompliance },
  { id: 15, title: "DPT-3 Filing", desc: "DPT-3 filing for companies…", image: ASSETS.cards.dpt3 },
  { id: 16, title: "AOA Amendment", desc: "AOA amendment for Pvt Ltd…", image: ASSETS.cards.aoaAmendment },
  { id: 17, title: "Legal Entity Identifier Code", desc: "Mandatory LEI for global finance…", image: ASSETS.cards.lei },
  { id: 18, title: "Charge Creation", desc: "Register charges with ROC…", image: ASSETS.cards.chargeCreate },
  { id: 19, title: "Charge Satisfaction", desc: "Report satisfaction of charge…", image: ASSETS.cards.chargeSatisfaction },
  { id: 20, title: "Dematerialisation of Shares", desc: "Paperless demat process…", image: ASSETS.cards.dematShares },
  { id: 21, title: "Business Plan", desc: "Pitch deck & model for funding…", image: ASSETS.cards.businessPlan },
  { id: 22, title: "Professional Tax Return Filing", desc: "Mandatory for individuals…", image: ASSETS.cards.professionalTax },
];

export default function MCA() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-[1200px] mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              MCA Compliance <br /><span className="text-[#C15F3C]">Simplified for India</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Ensure your business stays compliant with MCA regulations effortlessly. From director changes to annual filings, we handle everything for you.
            </p>
            <div className="mt-8 flex gap-4">
              <button className="bg-[#C15F3C] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#A94E30] transition-all">Get Started</button>
              <button className="border border-slate-300 text-slate-700 px-8 py-3 rounded-lg font-bold hover:bg-slate-50 transition-all">View Services</button>
            </div>
          </div>
          <div className="relative">
            <img src={ASSETS.hero} alt="MCA Hero" className="rounded-2xl shadow-2xl" />
          </div>
        </div>
      </section>

      {/* SERVICES HUB SECTION */}
      <section className="max-w-[1200px] mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Filter */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-3 sticky top-24">
              <h3 className="font-bold text-slate-900 px-3 py-2 mb-2 uppercase text-xs tracking-widest">Categories</h3>
              <ul className="space-y-1">
                {categories.map((c) => (
                  <li key={c.name}>
                    <button className="w-full flex items-center justify-between rounded-lg px-3 py-2.5 hover:bg-slate-50 text-slate-700 text-sm font-medium transition-all group">
                      <span className="flex items-center gap-3">
                        <img src={c.icon} alt="" className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                        {c.name}
                      </span>
                      <ChevronRight size={14} className="text-slate-400" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Service Cards Grid */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {services.map((s) => (
                <div key={s.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-all group border-b-4 border-b-transparent hover:border-b-[#C15F3C]">
                  <div className="h-44 overflow-hidden">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-slate-900 leading-snug">{s.title}</h3>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-2">{s.desc}</p>
                    <button className="mt-4 text-xs font-bold text-[#C15F3C] flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn More <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
