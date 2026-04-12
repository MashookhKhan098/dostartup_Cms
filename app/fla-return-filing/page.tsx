"use client";

import React, { useState } from "react";
import {
 Star,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SidebarCart from "../components/SidebarCart";
import FAQAccordion from "../components/Faq";
import PopularSearches from "../components/PopularSearches";

const ASSETS = {
 logo: "/images/india-logo.jpg",
 hero: "/images/FDI-filing-RBI.jpg",
 ledgers: "/images/ledgers.jpg",
 whatsapp: "/images/whatsapp.png",
 adRight1: "/images/company-compliance.jpg",
 dinEkyc: "/images/din.jpg",
 cartIcon: "/images/cart.png",
 indiaFlag: "/images/india-flag.png",
 assuredBadge: "/images/Steps.png", // Changed from missing assured-ledgers.png to Steps.png or similar
};

const TOKEN = process.env.NEXT_PUBLIC_COCKPIT_API_KEY || "";
const CMS_URL = process.env.NEXT_PUBLIC_COCKPIT_URL || "";

const POPULAR_SEARCHES = [
 "Partnership",
 "Limited Liability Partnership",
 "Digital Signature",
 "Copyright Registration",
 "Unified Portal",
 "PAN Card Download",
 "Nadakacheri",
 "Flipkart Seller",
 "Caste Certificate",
 "IAY",
 "EPFO Passbook",
 "Domicile Certificate",
 "Udyog Aadhaar",
 "PF Withdrawal",
 "Karnataka One",
 "Encumbrance Certificate",
 "Bonafide Certificate",
 "Instant PAN Card",
 "E PAN Card",
 "Income Certificate",
 "Marriage Certificate",
 "Passport Renewal",
 "Nivesh Mitra",
 "MSME Registration",
 "Experience Certificate",
 "Trademark Status",
 "Trade License",
 "Domicile",
 "eMitra",
 "UAN",
 "PICME",
 "Resignation Letter Format",
 "Ration Card",
 "TNREGINET",
 "RAJSSP",
 "LLP Compliance",
 "Form 16",
 "Police Clearance Certificate",
 "OBC Certificate",
 "Jamabandi",
 "Mee Bhoomi",
 "SC Certificate",
 "UAN Login",
 "eAadhaar Download",
 "Linking Aadhaar To Bank Accounts",
 "mAadhaar",
 "Aadhaar Enrollment Centre",
 "UAN Passbook",
 "Amazon How to Sell",
 "PAN Card Apply",
 "EPFO Unified Portal",
];

 export default function FlaReturnFilingPage() {
  const [gstChecked, setGstChecked] = useState(false);
  const [heroImage, setHeroImage] = useState<string>(ASSETS.hero);
  const [incomeTaxImage, setIncomeTaxImage] = useState<string>(ASSETS.ledgers);
  const [complianceImage, setComplianceImage] = useState<string>(ASSETS.adRight1);
  const [dinEkycImage, setDinEkycImage] = useState<string>(ASSETS.dinEkyc);

  const getImageUrl = (image: any) => {
    if (!image) return null;
    let path = "";
    if (typeof image === "string") {
      path = image;
    } else if (image && typeof image === "object") {
      path = image.path || image.url || "";
    }
    if (!path) return null;
    if (path.startsWith("http")) return path;
    
    const baseUrl = CMS_URL.replace(/\/$/, "");
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    // Some Cockpit versions include storage/uploads in the path itself
    if (cleanPath.includes("storage/uploads")) {
      return `${baseUrl}${cleanPath}`;
    }
    return `${baseUrl}/storage/uploads${cleanPath}`;
  };

  React.useEffect(() => {
    async function fetchData() {
      try {
        const baseUrl = CMS_URL.replace(/\/$/, "");
        
        // Fetch ALL services once to find matches efficiently
        const res = await fetch(`${baseUrl}/api/content/items/service?token=${TOKEN}`);
        const data = await res.json();
        const services = Array.isArray(data) ? data : (data?.entries || []);
        
        if (services.length > 0) {
          // Hero Image matching
          const hero = services.find((s: any) => 
            s.name?.toLowerCase().includes("fla") || 
            s.title?.toLowerCase().includes("fla")
          );
          if (hero?.image) setHeroImage(getImageUrl(hero.image) || ASSETS.hero);

          // Income Tax matching
          const it = services.find((s: any) => 
            s.name?.toLowerCase().includes("income tax") || 
            s.title?.toLowerCase().includes("income tax")
          );
          if (it?.image) setIncomeTaxImage(getImageUrl(it.image) || ASSETS.ledgers);

          // Compliance matching
          const comp = services.find((s: any) => 
            s.name?.toLowerCase().includes("compliance") && 
            (s.name?.toLowerCase().includes("company") || s.title?.toLowerCase().includes("company"))
          );
          if (comp?.image) setComplianceImage(getImageUrl(comp.image) || ASSETS.adRight1);

          // DIN matching
          const din = services.find((s: any) => 
            s.name?.toLowerCase().includes("din") || 
            s.title?.toLowerCase().includes("din")
          );
          if (din?.image) setDinEkycImage(getImageUrl(din.image) || ASSETS.dinEkyc);
        }

      } catch (error) {
        console.error("Data fetch error:", error);
      }
    }
    fetchData();
  }, []);

 return (
 <div className="min-h-screen bg-[#F4F3EE] font-sans text-gray-800">
 {/* Navbar - Imported */}
 <Navbar />

 {/* Breadcrumb */}
 <div className="bg-[#F4F3EE] py-5">
 <div className="max-w-[1180px] mx-auto px-6 text-sm text-gray-500">
 Home / Compliance Services /{" "}
 <span className="text-amber-700 font-medium">
 FLA Return Filing
 </span>
 </div>
 </div>

 {/* Main Content */}
 <main className="max-w-[1180px] mx-auto px-6 py-3">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
 {/* Left Column */}
 <section className="lg:col-span-8 space-y-6">
 {/* Top Card */}
 <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col md:flex-row gap-6">
 {/* Left image card */}
 <div className="md:w-1/3 flex-shrink-0">
 <div className="rounded-lg overflow-hidden">
 <div className="bg-gradient-to-r from-amber-700 to-amber-800 rounded-t-lg p-4 text-white text-center">
 <h2 className="text-2xl font-bold ">
 FLA RETURN
 </h2>
 <div className="text-xs mt-1 opacity-90">
 Annual filing for foreign investments
 </div>
 </div>

 <div className="bg-white px-4 py-6 flex justify-center">
 <div className="w-44 h-44 rounded-full overflow-hidden bg-[#F4F3EE] shadow-sm flex items-center justify-center -mt-4">
 <img
 src={heroImage}
 alt="FLA hero"
 className="w-full h-full object-cover"
 />
 </div>
 </div>
 </div>

 <ul className="mt-4 text-sm space-y-2 text-gray-600">
 <li className="hover:text-amber-700 cursor-pointer transition-colors">FLA Return Filing</li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Companies with FDI must file</li>
 <li className="hover:text-amber-700 cursor-pointer transition-colors">Annual submission to RBI</li>
 <li className="text-amber-700 underline cursor-pointer hover:text-amber-800">Load More</li>
 </ul>
 </div>

 {/* Right content */}
 <div className="md:w-2/3 flex-1">
 <div className="flex flex-col sm:flex-row justify-between gap-4">
 <div>
 <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 mb-2">
 <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
 <span className="text-xs font-medium text-amber-700">RBI COMPLIANCE</span>
 </div>
 <h2 className="text-lg font-semibold text-slate-900">
 FLA Return Filing
 </h2>
 <div className="flex items-center gap-3 mt-2">
 <div className="flex items-center gap-1">
 {[...Array(5)].map((_, i) => (
 <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />
 ))}
 </div>
 <span className="text-xs text-slate-500">(128 reviews)</span>
 </div>
 </div>

 <p className="text-sm text-gray-600 max-w-md">
 Companies that have received FDI and/or made FDI overseas in
 any financial year must complete FLA Return Filing with the
 RBI.
 </p>
 </div>

 {/* Offer box */}
 <div className="relative mt-6">
 <div className="absolute -top-3 left-6 bg-[#F4F3EE] px-2 rounded-md text-xs text-amber-700 border border-amber-200">
 2 Exclusive Offers
 </div>
 <div className="border-2 border-dashed rounded-md border-amber-200 p-4 bg-amber-50/30">
 <div className="font-semibold text-slate-900">RBI Compliance</div>
 <div className="mt-2 text-sm text-gray-600">
 Annual FLA Return Filing
 <div>RBI Compliance Support</div>
 </div>
 <div className="mt-3">
 <button className="bg-[#F4F3EE] border-2 border-amber-600 text-amber-700 px-4 py-1.5 rounded hover:bg-amber-50 transition-colors text-sm font-medium">
 ADD TO CART
 </button>
 </div>
 </div>
 </div>

 <div className="mt-4 border-t pt-4 text-sm flex flex-col sm:flex-row justify-between items-start sm:items-center text-slate-600 gap-3">
 <a className="text-amber-700 underline hover:text-amber-800 cursor-pointer">
 Terms and conditions
 </a>
 <a className="text-amber-700 underline hover:text-amber-800 cursor-pointer">Refer a Friend</a>
 </div>

 <div className="mt-6">
 <h4 className="font-semibold mb-2 text-slate-900">Offers and discounts</h4>
 <div className="p-3 border border-gray-200 rounded-lg hover:border-amber-200 transition-colors">
 <div className="flex items-center gap-3">
 <img
 src={ASSETS.ledgers}
 alt="ledgers"
 className="h-8 w-8 object-contain"
 />
 <div className="text-sm">
 <div className="text-amber-700 font-medium">
 LEDGERS - Compliance Platform
 </div>
 <div className="text-gray-500 text-xs">
 Invoicing, GST Filing, Banking and Payroll
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>

 {/* Article */}
 <article className="bg-white rounded-lg shadow-sm p-6">
 <h1 className="text-2xl font-semibold text-center text-slate-900">
 FLA Return Filing
 </h1>

 <div className="mt-4 text-[15px] leading-7 text-gray-700 space-y-4">
 <p>
 The FLA Return is a mandatory annual filing for Indian
 companies, LLPs, and other entities engaged in receiving or
 making foreign direct investments. This includes entities
 involved in Foreign Direct Investment (FDI) within India or
 Overseas Direct Investment (ODI). Under the regulations of the
 Reserve Bank of India (RBI) and the Foreign Exchange
 Management Act, 1999 (FEMA), the FLA Return is designed to
 gather information on foreign liabilities and assets that are
 reflected in the financial statements of these entities.
 </p>
 <p>
 At DoStartup, we provide expert services to help Indian
 Companies and LLPs efficiently handle their FLA Return
 filings.
 </p>

 <h3 className="mt-4 font-semibold text-slate-900">
 Introduction to FLA Return
 </h3>
 <p>
 The Foreign Liabilities and Asset (FLA) Return is a mandatory
 annual report for Indian organisations that have received
 foreign direct investment (FDI) or have invested in FDI
 overseas. This report, submitted to the Reserve Bank of India
 (RBI), collects detailed information on the foreign
 liabilities and assets listed on these entities' balance
 sheets. Governed by the Foreign Exchange Management Act, 1999
 (FEMA), the FLA Return thoroughly regulates India's foreign
 exchange and international financial transactions.
 </p>
 </div>
 </article>

  {/* Quick Services Section - Moved from sidebar */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
    {/* Income Tax E-Filing */}
    <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
      <h4 className="font-semibold mb-3 text-slate-900">Income Tax E-Filing</h4>
      <div className="p-3 border border-gray-200 rounded-md flex items-center gap-3 hover:border-amber-200 transition-colors">
        <img
          src={incomeTaxImage}
          alt="ledgers"
          className="h-8 w-8 object-contain"
        />
        <div className="text-sm">
          <div className="text-amber-700 font-medium">Income Tax E-Filing</div>
          <div className="text-gray-500 text-xs">Income Tax E-Filing</div>
        </div>
      </div>
      <div className="mt-3 text-sm">
        <div className="font-medium text-slate-900">Partnership Compliance</div>
        <div className="text-gray-500">Partnership Compliance</div>
      </div>
    </div>

    {/* Company Compliance Ad */}
    <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200 bg-white">
      <img
        src={complianceImage}
        alt="company compliance"
        className="w-full h-40 object-cover"
      />
      <div className="p-3 text-center">
        <span className="text-xs font-semibold text-slate-900 uppercase">Company Compliance</span>
      </div>
    </div>

    {/* DIN eKYC Ad */}
    <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200 bg-white">
      <img
        src={dinEkycImage}
        alt="din ekyc"
        className="w-full h-40 object-cover"
      />
      <div className="p-3 text-center">
        <span className="text-xs font-semibold text-slate-900 uppercase">DIN eKYC</span>
      </div>
    </div>
  </div>

  {/* Related Guides */}

 <div className="bg-white rounded-lg shadow-sm p-6 mt-8">
 <h3 className="text-lg font-semibold mb-4 text-slate-900">Related Guides</h3>
 <ul className="space-y-3 text-sm text-amber-700">
 <li className="hover:text-amber-800 cursor-pointer hover:underline">FLA Return Filing</li>
 <li className="hover:text-amber-800 cursor-pointer hover:underline">What is FLA Return?</li>
 <li className="hover:text-amber-800 cursor-pointer hover:underline">FDI in Insurance sector</li>
 <li className="hover:text-amber-800 cursor-pointer hover:underline">8 Measure to Promote FDI</li>
 <li className="hover:text-amber-800 cursor-pointer hover:underline">Types of Foreign investments in India</li>
 </ul>
 </div>

 </section>

 {/* Right Sidebar */}
  <aside className="lg:col-span-4 hidden lg:block space-y-8">
 {/* Cart Widget */}
 <SidebarCart />



 {/* Contact Advisor */}
 <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
 <h4 className="font-semibold mb-3 text-slate-900">Contact Advisor</h4>
 <p className="text-sm text-gray-600">
 Need help with FLA filings? Our advisors can assist with
 end-to-end filing and documentation.
 </p>
 <div className="mt-3">
 <button className="w-full bg-gradient-to-r from-amber-700 to-amber-800 text-white py-2 rounded-md text-sm hover:from-amber-800 hover:to-amber-900 transition-all">
 Schedule a Call
 </button>
 </div>
  </div>
  </aside>
 </div>
 </main>

 <FAQAccordion category="fla-return-filing" />

 <PopularSearches />

 {/* WhatsApp CTA */}
 <div className="fixed right-6 bottom-6 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-4 py-3 rounded-full shadow-2xl flex items-center gap-3 z-50 hover:from-amber-700 hover:to-amber-800 transition-all cursor-pointer">
 <img src={ASSETS.whatsapp} alt="wa" className="w-5 h-5" />
 <span className="font-semibold text-sm">Live Chat with Experts</span>
 </div>

 <Footer />
 </div>
 );
}
