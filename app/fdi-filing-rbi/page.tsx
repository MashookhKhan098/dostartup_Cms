"use client";

import React, { useState, useEffect } from "react";
import SidebarCart from "../components/SidebarCart";
import { 
  FileText, 
  Check, 
  HelpCircle, 
  ArrowRight,
  ShoppingCart,
  Phone,
  MessageSquare,
  Clock,
  ShieldCheck,
  Star,
  File
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FAQAccordion from "../components/Faq";
import DynamicPricingSection from "../components/DynamicPricingSection";
import PopularSearches from "../components/PopularSearches";

const ASSETS = {
  fdiMain: "/images/FDI-filing-RBI.jpg", 
  globe: "/images/fdi-globe.png", 
  ledgersBadge: "/images/ledgers-badge.png",
  whatsapp: "/images/whatsapp.png",
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

export default function FdiFilingRbiPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [heroImage, setHeroImage] = useState<string>("/images/fdi-graphic.png");
  const [loadingBlogs, setLoadingBlogs] = useState(true);

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
        const blogRes = await fetch(`${CMS_URL}/api/content/items/blogs?token=${TOKEN}`);
        const blogData = await blogRes.json();
        if (Array.isArray(blogData)) {
          let filtered = blogData.filter((b: Blog) => 
            b.category?.toLowerCase() === "fdi-filing-rbi"
          );
          
          setBlogs(filtered.slice(0, 3));
        }

        const serviceRes = await fetch(`${CMS_URL}/api/content/items/service?token=${TOKEN}&filter=${encodeURIComponent(JSON.stringify({ name: "FDI filing with RBI" }))}`);
        const serviceData = await serviceRes.json();
        const entries = Array.isArray(serviceData) ? serviceData : (serviceData?.entries || []);
        if (entries.length > 0 && entries[0].image) {
          const url = getImageUrl(entries[0].image);
          if (url) setHeroImage(url);
        }
      } catch (error) {
        console.error("Data fetch error:", error);
      } finally {
        setLoadingBlogs(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-[#F4F3EE] font-sans text-[#4F4C45] antialiased">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-2 pb-6">
        {/* Breadcrumb */}
        <div className="py-4 text-[13px] text-gray-500">
          DoStartup / MCA Services / <span className="text-gray-900 font-medium tracking-tight">FDI filing with RBI</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content (Left) */}
          <div className="lg:w-[65%] space-y-2">

            {/* Top Product Card Section */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row p-8 gap-8">
              <div className="md:w-1/3 flex flex-col gap-4">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#A74A2F] flex items-center justify-center text-center p-4">
                  <div className="text-white space-y-2">
                    <h3 className="text-xl font-bold leading-tight">FDI filing with RBI</h3>
                    <div className="h-0.5 w-16 bg-white/30 mx-auto" />
                    <p className="text-[10px] opacity-80 uppercase tracking-widest font-semibold">FDI filing with RBI</p>
                  </div>
                </div>
                <div className="aspect-square rounded-2xl bg-slate-50 overflow-hidden border border-gray-100 p-2">
                   <img src={heroImage} alt="FDI" className="w-full h-full object-contain rounded-xl" />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-[#0B2545] uppercase">FDI filing with RBI</p>
                  <p className="text-[10px] font-bold text-[#C15F3C] uppercase">FDI filing with RBI</p>
                  <p className="text-[9px] text-gray-400 italic leading-tight">FCGPR for filing Convertible Note including CS certificate</p>
                </div>
              </div>

              <div className="md:w-2/3 flex flex-col pt-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-[#FFF8F4] text-[#C15F3C] text-[10px] font-bold px-3 py-1 rounded-full border border-[#C15F3C]/20 uppercase tracking-widest scale-90 -ml-1">
                    RBI COMPLIANCE
                  </div>
                  <p className="text-[11px] text-[#A74A2F] italic">FCGPR for filing Convertible Note including CS certificate</p>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-[#0B2545] mb-2 leading-tight tracking-tight">
                   FDI filing with RBI
                </h1>
                <div className="flex items-center gap-1 text-orange-400 mb-6 scale-90 -ml-2">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                  <span className="text-xs text-gray-400 ml-1 font-medium">(5)</span>
                </div>
                <div className="flex justify-between items-center text-[10px] text-[#C15F3C] font-bold uppercase tracking-widest mt-auto border-t border-gray-50 pt-4 cursor-pointer">
                   <span className="hover:text-[#A74A2F] underline decoration-dotted">Terms and conditions</span>
                   <span className="hover:text-[#A74A2F] underline decoration-dotted">Refer a Friend</span>
                </div>
              </div>
            </div>

            {/* Section 1: What is FDI */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
              <h2 className="text-2xl font-bold text-[#0B2545] mb-4">What is FDI Filing with RBI?</h2>
              <p className="text-[15px] text-[#4F4C45] leading-relaxed mb-6">
                Foreign Direct Investment (FDI) refers to investment made by a foreign entity into an Indian company. When a foreign investor receives shares or convertible instruments from an Indian company, the company is required to report this to the Reserve Bank of India (RBI) within a specified timeline. This reporting is done through the filing of Form FC-GPR (Foreign Currency — Gross Provisional Return).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                   <h4 className="font-bold text-[#C15F3C] text-[14px] mb-3 uppercase tracking-wide">Who Must File</h4>
                   <ul className="space-y-2 text-sm text-[#4F4C45]">
                     {["Indian companies receiving FDI from foreign entities", "Startups issuing convertible notes to foreign investors", "Companies allotting equity/preference shares to NRIs or OCIs", "Firms receiving ESOP conversions by foreign employees"].map((item, i) => (
                       <li key={i} className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-[#C15F3C] rounded-full mt-1.5 shrink-0" /><span>{item}</span></li>
                     ))}
                   </ul>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                   <h4 className="font-bold text-[#C15F3C] text-[14px] mb-3 uppercase tracking-wide">Key Requirements</h4>
                   <ul className="space-y-2 text-sm text-[#4F4C45]">
                     {["Filing within 30 days of allotment of shares", "Reporting via RBI's FIRMS portal (Form FC-GPR)", "Certification from a Company Secretary (CS)", "KYC documents of foreign investor through AD Bank"].map((item, i) => (
                       <li key={i} className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-[#C15F3C] rounded-full mt-1.5 shrink-0" /><span>{item}</span></li>
                     ))}
                   </ul>
                </div>
              </div>
            </div>

            {/* Section 2: FEMA Framework */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
              <h2 className="text-xl font-bold text-[#0B2545] mb-4">FEMA Framework for FDI</h2>
              <p className="text-[15px] text-[#4F4C45] leading-relaxed mb-6">
                FDI in India is governed by the Foreign Exchange Management Act (FEMA), 1999 and the regulations issued by the RBI and DPIIT (Department for Promotion of Industry and Internal Trade). India allows FDI under two routes — the Automatic Route (no prior approval required) and the Government Route (approval by the relevant ministry is required).
              </p>
              <div className="overflow-x-auto rounded-xl border border-gray-100">
                <table className="w-full text-sm text-left">
                  <thead className="bg-white border-b border-gray-100">
                    <tr>
                      <th className="py-4 px-6 font-bold text-[#C15F3C]">Route</th>
                      <th className="py-4 px-6 font-bold text-[#C15F3C]">Approval Needed</th>
                      <th className="py-4 px-6 font-bold text-[#C15F3C]">Examples</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-gray-50">
                      <td className="py-4 px-6 font-medium">Automatic Route</td>
                      <td className="py-4 px-6">No prior RBI/Govt approval</td>
                      <td className="py-4 px-6">IT, Manufacturing, E-commerce</td>
                    </tr>
                    <tr className="border-t border-gray-50">
                      <td className="py-4 px-6 font-medium">Government Route</td>
                      <td className="py-4 px-6">Prior approval from FIPB/Ministry</td>
                      <td className="py-4 px-6">Defence, Media, Banking</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 3: FC-GPR Filing Procedure */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
              <h2 className="text-xl font-bold text-[#0B2545] mb-6">FC-GPR Filing Procedure</h2>
              <div className="space-y-3">
                {[
                  "Receive foreign remittance through AD (Authorised Dealer) Bank",
                  "Allot shares/convertible instruments to foreign investor",
                  "Obtain valuation certificate from SEBI-registered valuer",
                  "Prepare Board Resolution for share allotment",
                  "Obtain CS certificate confirming compliance",
                  "Login to RBI FIRMS portal and submit Form FC-GPR",
                  "Upload supporting documents: KYC, valuation report, board resolution",
                  "AD Bank certifies and forwards to RBI for acknowledgment",
                  "Receive Unique Identification Number (UIN) from RBI"
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm">
                    <span className="w-6 h-6 bg-white text-[#C15F3C] font-bold rounded-full flex items-center justify-center shrink-0 text-xs border border-gray-200">{idx + 1}</span>
                    <span className="leading-relaxed pt-0.5">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 4: Documents Required */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
              <h2 className="text-xl font-bold text-[#0B2545] mb-6">Documents Required for FDI Filing</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "SWIFT copy of inward remittance from foreign investor",
                  "Debit certificate issued by AD Bank",
                  "Memorandum of Association (MoA) of the Indian company",
                  "Board Resolution for share allotment",
                  "Valuation certificate from SEBI-registered CA/CMA",
                  "KYC of foreign investor (passport, address proof)",
                  "CS Certificate confirming FEMA compliance",
                  "Foreign Inward Remittance Certificate (FIRC)"
                ].map((doc, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm p-3 rounded-xl border border-gray-100 bg-white shadow-sm">
                    <FileText size={14} className="text-[#C15F3C] shrink-0" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 5: Penalty for Non-Compliance */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
              <h2 className="text-xl font-bold text-[#0B2545] mb-4">Penalties for Non-Compliance</h2>
              <p className="text-sm text-[#4F4C45] leading-relaxed mb-6">
                 Failure to file FC-GPR within 30 days of share allotment is a contravention of FEMA. The RBI has a compounding procedure for regularising such violations. Late filing can attract penalties up to 3 times the amount involved or ₹2 lakh per day until the violation is rectified.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: "Late Filing", desc: "Penalty up to 3x the investment amount" },
                  { title: "Non-Reporting", desc: "₹2 lakh/day until regularised" },
                  { title: "Compounding", desc: "Voluntary disclosure reduces penalty" }
                ].map((item, i) => (
                  <div key={i} className="p-5 rounded-2xl border border-gray-100 bg-white shadow-sm">
                    <h4 className="font-bold text-[#C15F3C] text-sm mb-2">{item.title}</h4>
                    <p className="text-xs text-[#4F4C45] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sticky Sidebar (Right) */}
          <aside className="lg:w-[35%] h-fit sticky top-28 space-y-8">
            <SidebarCart />

            <div className="bg-white rounded-[40px] shadow-2xl border border-gray-100 overflow-hidden">
               <div className="bg-white border-t border-gray-50 p-10 space-y-8">
                  <h5 className="text-[14px] font-extrabold text-[#0B2545] uppercase tracking-tight">Offers and discounts</h5>
                  <div className="flex items-center gap-5 group cursor-pointer hover:bg-white transition-colors p-2 rounded-2xl">
                     <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center p-2 group-hover:scale-110 transition-transform">
                        <img src={ASSETS.ledgersBadge} alt="Ledgers" className="w-full h-full object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                     </div>
                     <div>
                        <h6 className="text-[12px] font-bold text-[#0B2545] uppercase tracking-tight">LEDGERS Platform</h6>
                        <p className="text-[10px] text-gray-400 font-medium italic">Invoicing, GST & Payroll</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-5 group cursor-pointer hover:bg-white transition-colors p-2 rounded-2xl border-t border-gray-50 pt-6">
                     <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center p-2 group-hover:scale-110 transition-transform">
                        <img src="/logo2.png" alt="DoStartup" className="w-full h-full object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                     </div>
                     <div>
                        <h6 className="text-[12px] font-bold text-[#0B2545] uppercase tracking-tight leading-tight">Save 18% with GST Registration</h6>
                        <p className="text-[10px] text-gray-400 font-medium italic">Get GST eInvoice with Input Tax Credit</p>
                     </div>
                  </div>
               </div>
            </div>
          </aside>
        </div>

        <div className="mt-4">
          <DynamicPricingSection category="fdi-filing-rbi" />
        </div>

        <FAQAccordion category="fdi-filing-rbi" />

        <PopularSearches />
      </main>

      <Footer />
    </div>
  );
}
