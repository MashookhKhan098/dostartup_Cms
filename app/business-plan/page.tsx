"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  ChevronRight,
  ShoppingBag,
  Star,
  Plus,
  ChevronDown,
} from "lucide-react";
import Navbar from "../components/Navbar";
import SidebarCart from "../components/SidebarCart";
import Footer from "../components/Footer";
import DoStartupPricing from "../components/DoStartupPricing";

const ASSETS = {
  logo: "/images/india-logo.jpg",
  hero: "/images/FDI-filing-RBI.jpg",
  ledgers: "/images/ledgers.png",
  whatsapp: "/images/whatsapp.png",
  adRight1: "/images/company-compliance.jpg",
  dinEkyc: "/images/din.jpg",
  cartIcon: "/images/cart-icon.svg",
  indiaFlag: "/images/india-flag.png",
  assuredBadge: "/images/assured-ledgers.png",
};

const POPULAR_SEARCHES = [
  "Partnership", "Limited Liability Partnership", "Digital Signature", "Copyright Registration",
  "Unified Portal", "PAN Card Download", "Nadakacheri", "Flipkart Seller", "Caste Certificate",
  "IAY", "EPFO Passbook", "Domicile Certificate", "Udyog Aadhaar", "PF Withdrawal",
  "Encumbrance Certificate", "Instant PAN Card", "Income Certificate", "Trademark Status", "Trade License"
];

function useOutsideClick<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T | null>,
  handler: () => void
) {
  useEffect(() => {
    function listener(e: MouseEvent | TouchEvent) {
      const el = ref?.current;
      if (!el) return;
      if (e.target instanceof Node && !el.contains(e.target)) handler();
    }
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export default function BusinessPlanPage() {
  const [selectedOffer, setSelectedOffer] = useState<string>("Pitch Deck");
  const [showOfferDropdown, setShowOfferDropdown] = useState(false);
  const offerRef = useRef<HTMLDivElement | null>(null);

  const OFFER_OPTIONS = ["Pitch Deck", "Equity Raise", "Financial Model", "Loan Syndication"];

  useOutsideClick(offerRef, () => setShowOfferDropdown(false));

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 antialiased">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-5">
        <div className="max-w-7xl mx-auto px-6 text-sm text-gray-500">
          Home / MCA Services / <span className="text-[#C15F3C] font-medium">Business Plan</span>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content (Left) */}
          <section className="lg:col-span-8 space-y-12">
            
            {/* Top Product Card */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 flex flex-col md:flex-row gap-10">
              <div className="md:w-1/3 flex-shrink-0">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                  <div className="bg-gradient-to-br from-[#C15F3C] to-[#8E442B] p-5 text-white text-center">
                    <h2 className="text-xl font-bold uppercase tracking-wide">Business Plan</h2>
                  </div>
                  <img src={ASSETS.hero} alt="Business Plan" className="w-full h-56 object-cover" />
                </div>
                
                <ul className="mt-6 text-xs space-y-3 text-slate-500 px-2 font-medium">
                   <li className="flex gap-2 items-start"><ChevronRight className="w-3 h-3 text-[#C15F3C] mt-0.5" /> Business Plan</li>
                   <li className="flex gap-2 items-start"><ChevronRight className="w-3 h-3 text-[#C15F3C] mt-0.5" /> A business plan with pitch deck and financial model is essential for business owners to raise loan or equity funding.</li>
                   <li className="text-[#C15F3C] cursor-pointer hover:underline font-bold">Load More</li>
                </ul>
              </div>

              <div className="flex-1 space-y-6">
                 <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 bg-orange-100/50 border border-orange-100 rounded-full px-3 py-1">
                      <div className="w-1.5 h-1.5 bg-[#C15F3C] rounded-full" />
                      <span className="text-[10px] font-bold text-[#C15F3C] uppercase tracking-wider">Compliance Service</span>
                    </div>
                    <h1 className="text-3xl font-extrabold text-slate-900 leading-tight">Business Plan</h1>
                    <div className="flex items-center gap-1.5">
                       {[...Array(5)].map((_, i) => (
                         <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />
                       ))}
                       <span className="text-xs text-slate-400 font-medium ml-1">(5)</span>
                    </div>
                 </div>

                 <p className="text-gray-600 leading-relaxed text-[15px]">
                   A business plan with pitch deck and financial model is essential for business owners to raise loan or equity funding. Get a professional pitch deck and financial model prepared for your business through Experts.
                 </p>

                 {/* Dropdown Selector */}
                 <div className="relative pt-2" ref={offerRef}>
                  <button
                    type="button"
                    onClick={() => setShowOfferDropdown(!showOfferDropdown)}
                    className="w-full sm:w-80 flex items-center justify-between border-2 border-gray-100 rounded-xl px-5 py-3.5 bg-gray-50 text-left hover:border-[#C15F3C] transition-all focus:outline-none"
                  >
                    <span className="text-sm font-semibold text-slate-700">{selectedOffer}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${showOfferDropdown ? 'rotate-180' : ''}`} />
                  </button>

                  {showOfferDropdown && (
                    <div className="absolute top-full left-0 mt-2 w-full sm:w-80 bg-white border border-gray-100 rounded-xl shadow-2xl z-50 overflow-hidden py-1">
                      {OFFER_OPTIONS.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => {
                            setSelectedOffer(opt);
                            setShowOfferDropdown(false);
                          }}
                          className={`w-full text-left px-5 py-3 text-sm hover:bg-orange-50 transition-colors ${selectedOffer === opt ? 'text-[#C15F3C] font-bold' : 'text-slate-600'}`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-8 border-t border-gray-50 pt-6 flex flex-col sm:flex-row gap-6 text-[11px] font-bold uppercase tracking-widest text-slate-400">
                   <a href="#" className="hover:text-[#C15F3C] transition-colors underline decoration-2 underline-offset-4">Terms and conditions</a>
                   <a href="#" className="hover:text-[#C15F3C] transition-colors underline decoration-2 underline-offset-4">Refer a Friend</a>
                </div>
              </div>
            </div>

            {/* EXACT CONTENT SECTION */}
            <article className="bg-white rounded-3xl shadow-sm border border-gray-100 p-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b border-gray-50 pb-4 text-center">Business Plan</h2>
              
              <div className="space-y-8 text-[#4F4C45] text-[16px] leading-[1.8]">
                <p>
                  A business plan is more than just a document—it&apos;s a strategic tool that outlines your company&apos;s objectives, provides a roadmap for achieving them, and acts as a persuasive document for potential investors and stakeholders. Whether you&apos;re a startup seeking your first round of funding or an established business looking to expand, having a well-structured business plan is critical for success.
                </p>
                
                <p>
                  At <strong>DoStartup</strong>, we specialise in helping businesses draft comprehensive and tailored business plans that align with industry standards and comply with regulatory requirements.
                </p>

                <p className="font-bold text-slate-900 italic border-l-4 border-[#C15F3C] pl-6 py-2 bg-orange-50/30 rounded-r-xl">
                  Get Your Expert-Designed Business Plan with DoStartup. Start Your Success Story Today!
                </p>

                <div className="pt-4">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">What is a Business Plan?</h3>
                  <p>
                    A business plan is a formal document that defines your business objectives, strategies, market research, financial projections, and more. It serves as a guiding document for securing funding and setting internal goals and benchmarks.
                  </p>
                </div>

                <div className="pt-6">
                   <h3 className="text-xl font-bold text-slate-900 mb-6">Related Guides</h3>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        "Importance of Business Plan",
                        "Types of Business Plan",
                        "How to write a Business Plan?",
                        "Business Plan Template",
                        "Checklist for Starting a Business"
                      ].map((guide, i) => (
                        <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100 group cursor-pointer hover:border-[#C15F3C] transition-all">
                           <div className="w-2 h-2 rounded-full bg-[#C15F3C]/40 group-hover:bg-[#C15F3C]" />
                           <span className="text-sm font-bold text-slate-700 group-hover:text-[#C15F3C]">{guide}</span>
                        </div>
                      ))}
                   </div>
                </div>
              </div>
            </article>

          </section>

          {/* Sidebar (Right) */}
          <aside className="lg:col-span-4 space-y-10">
            <SidebarCart />
            
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 space-y-6">
              <h4 className="text-lg font-bold text-slate-900 border-b border-gray-50 pb-4">Related Guides</h4>
              <ul className="space-y-5">
                {[
                  "Business Plan Template",
                  "How to Create a Pitch Deck for Investors",
                  "Financial Model Best Practices"
                ].map((guide, i) => (
                  <li key={i}>
                    <a href="#" className="flex items-center justify-between group">
                      <span className="text-sm font-medium text-[#C15F3C] group-hover:underline">{guide}</span>
                      <ChevronRight className="w-4 h-4 text-[#C15F3C]" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 h-64 relative bg-slate-900 group">
              <img src={ASSETS.adRight1} alt="Compliance" className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 flex flex-col justify-center p-8 text-white space-y-2">
                 <p className="text-[10px] font-bold uppercase tracking-widest text-[#C15F3C]">Compliance</p>
                 <h4 className="text-xl font-bold">Annual Filing & Audit</h4>
                 <button className="text-sm font-bold underline hover:text-[#C15F3C] text-left pt-4">Explore Services →</button>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
              <h4 className="text-lg font-bold text-slate-900 mb-6">Popular Searches</h4>
              <div className="flex flex-wrap gap-2">
                {POPULAR_SEARCHES.map((t) => (
                  <span key={t} className="text-[10px] px-3 py-1.5 border border-gray-200 rounded-lg bg-gray-50 text-slate-600 hover:border-[#C15F3C] hover:text-[#C15F3C] cursor-pointer transition-all">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </aside>

        </div>
      </main>

      <DoStartupPricing 
        plans={[
          {
            title: "Pitch Deck",
            price: "",
            description: "A business plan with pitch deck and financial model is essential for business owners to raise loan or equity...",
            features: [
              "PPT Presentation",
              "Market Research"
            ],
            buttonText: "Start Filing Now"
          },
          {
            title: "Financial Model",
            price: "",
            description: "A business plan with pitch deck and financial model is essential for business owners to raise loan or equity...",
            features: [
              "Business Analysis",
              "Excel Model",
              "Financial Projections"
            ],
            buttonText: "Start Filing Now"
          },
          {
            title: "Loan Syndication",
            price: "",
            description: "A business plan with pitch deck and financial model is essential for business owners to raise loan or equity...",
            features: [
              "Pitch Deck",
              "Financial Model",
              "Loan Syndication"
            ],
            buttonText: "Start Filing Now"
          }
        ]}
      />

      <Footer />

      {/* WhatsApp CTA */}
      <div className="fixed right-8 bottom-8 bg-gradient-to-br from-[#C15F3C] to-[#8E442B] text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 z-50 hover:scale-105 transition-transform cursor-pointer border-2 border-white/20">
        <img src={ASSETS.whatsapp} alt="WhatsApp" className="w-6 h-6" />
        <span className="font-bold text-sm tracking-tight">Live Chat with Experts</span>
      </div>
    </div>
  );
}
