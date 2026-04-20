"use client";

import React from 'react';
import { ShoppingCart, Star, ChevronRight } from 'lucide-react';

type Offer = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type GSTInvoicingProps = {
  imageUrl: string;
  title: string;
  rating: number | string;
  description?: string;
  exclusiveOffersCount?: number;
  features?: string[];
  badgeText?: string;
  subHeading?: string;
  buttonText?: string;
  offers?: Offer[];
};

const GSTInvoicingComponent: React.FC<GSTInvoicingProps> = ({
  imageUrl,
  title,
  rating,
  description = '',
  exclusiveOffersCount = 0,
  features = [],
  badgeText = "#1 REGISTRATION PLATFORM",
  subHeading = "1 Year License",
  buttonText = "ADD TO CART",
  offers = []
}) => {
  return (
    <div className="bg-[#F4F3EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* LEFT SECTION */}
          <div className="flex-1 bg-white rounded-2xl shadow-sm border border-[#E5E2DA] p-6 lg:p-8">
            <div className="flex flex-col md:flex-row gap-8">

              {/* LEFT SIDEBAR - IMAGE AND LINKS */}
              <div className="w-full md:w-64 flex-shrink-0">
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full rounded-xl border border-[#E5E2DA] shadow-sm"
                />

                <div className="mt-6 space-y-3">
                  <p className="text-sm font-medium text-[#6F6B63] hover:text-[#C15F3C] cursor-pointer transition-colors">
                    ID Proof
                  </p>
                  <p className="text-sm font-medium text-[#6F6B63] hover:text-[#C15F3C] cursor-pointer transition-colors">
                    HSN Code
                  </p>
                  <button className="text-sm text-[#C15F3C] font-semibold hover:underline flex items-center gap-1">
                    Load More →
                  </button>
                </div>
              </div>

              {/* MAIN CONTENT */}
              <div className="flex-1 space-y-6">

                {/* HEADER */}
                <div>
                  <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-3 py-1 mb-4">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    <span className="text-[10px] uppercase font-bold text-orange-600 tracking-wider">
                      {badgeText}
                    </span>
                  </div>

                  <h1 className="text-2xl font-bold text-[#2F2E2B] mb-2 leading-tight">
                    {title}
                  </h1>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#C15F3C] text-[#C15F3C]" />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-[#6F6B63]">({rating})</span>
                  </div>

                  <p className="text-sm text-[#6F6B63] leading-relaxed max-w-xl">
                    {description}
                  </p>
                </div>

                {/* FEATURES BOX */}
                <div className="bg-[#F9F8F6] border border-[#E5E2DA] rounded-2xl p-6 lg:p-8">
                  <span className="inline-block bg-[#C15F3C] text-white text-[10px] font-bold px-3 py-2 rounded-lg mb-6 uppercase tracking-widest">
                    {exclusiveOffersCount} Exclusive Offers
                  </span>

                  {subHeading && (
                    <h3 className="text-base font-bold text-[#2F2E2B] mb-4">
                      {subHeading}
                    </h3>
                  )}

                  <div className="space-y-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <ChevronRight className="w-4 h-4 text-[#C15F3C] mt-0.5" />
                        <p className="text-sm font-medium text-[#4F4C45]">{feature}</p>
                      </div>
                    ))}
                  </div>

                  <button className="mt-8 w-full border-2 border-[#C15F3C] text-[#C15F3C] py-3.5 rounded-xl hover:bg-[#C15F3C] hover:text-white transition-all font-bold text-sm tracking-[0.2em] uppercase shadow-sm">
                    {buttonText}
                  </button>
                </div>

                {/* LINKS */}
                <div className="flex justify-between items-center text-sm py-4 border-b border-[#F4F3EE]">
                  <button className="text-[#C15F3C] font-medium hover:underline">
                    Terms and conditions
                  </button>
                  <button className="text-[#C15F3C] font-medium hover:underline">
                    Refer a Friend
                  </button>
                </div>

                {/* OFFERS AND DISCOUNTS */}
                {offers.length > 0 && (
                  <div className="pt-2 space-y-4">
                    <h3 className="text-sm font-bold text-[#2F2E2B] uppercase tracking-wider">
                      Offers and discounts
                    </h3>
                    <div className="space-y-3">
                      {offers.map((offer, idx) => (
                        <div key={idx} className="flex items-center gap-4 p-4 bg-white border border-[#E5E2DA] rounded-2xl hover:shadow-md transition-shadow cursor-pointer group">
                          <div className="w-12 h-12 flex-shrink-0 bg-[#F9F8F6] rounded-xl flex items-center justify-center border border-[#E5E2DA] group-hover:border-[#C15F3C] transition-colors">
                            {offer.icon}
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-[#2F2E2B] group-hover:text-[#C15F3C] transition-colors">
                              {offer.title}
                            </h4>
                            <p className="text-xs text-[#6F6B63] leading-snug">
                              {offer.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR - FORM */}
          <div id="registration-form" className="lg:w-96 bg-white rounded-2xl shadow-sm border border-[#E5E2DA] overflow-hidden flex flex-col h-fit">
            
            <div className="p-6 space-y-6">
              {/* CART ICON */}
              <div className="flex justify-end">
                <div className="relative">
                  <div className="bg-[#FFF1EC] p-2.5 rounded-xl">
                    <ShoppingCart className="w-6 h-6 text-[#C15F3C]" />
                  </div>
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#C15F3C] text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white">
                    0
                  </span>
                </div>
              </div>

              {/* HEADER */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-[#2F2E2B] mb-1">
                  Start Registration
                </h3>
                <p className="text-xs text-[#6F6B63]">
                  Fill the form to get a personalized quote
                </p>
              </div>

              {/* FORM */}
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Registration started successfully!");
                }}
                className="space-y-4"
              >
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-[#B1ADA1] uppercase tracking-wider ml-1">Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    className="w-full px-4 py-3.5 border border-[#E5E2DA] rounded-xl bg-[#F9F8F6] focus:bg-white focus:ring-2 focus:ring-[#C15F3C]/20 focus:border-[#C15F3C] outline-none text-sm transition-all shadow-inner"
                  />
                </div>
                
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-[#B1ADA1] uppercase tracking-wider ml-1">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3.5 border border-[#E5E2DA] rounded-xl bg-[#F9F8F6] focus:bg-white focus:ring-2 focus:ring-[#C15F3C]/20 focus:border-[#C15F3C] outline-none text-sm transition-all shadow-inner"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-[#B1ADA1] uppercase tracking-wider ml-1">Mobile Number</label>
                  <div className="flex gap-2">
                    <div className="w-24 px-3 py-3.5 border border-[#E5E2DA] rounded-xl bg-[#F9F8F6] text-sm text-[#2F2E2B] font-medium flex items-center gap-2 shadow-inner">
                      <span>🇮🇳</span>
                      <span>+91</span>
                    </div>
                    <input
                      type="tel"
                      placeholder="99999 00000"
                      required
                      maxLength={10}
                      pattern="[0-9]{10}"
                      className="flex-1 px-4 py-3.5 border border-[#E5E2DA] rounded-xl bg-[#F9F8F6] focus:bg-white focus:ring-2 focus:ring-[#C15F3C]/20 focus:border-[#C15F3C] outline-none text-sm transition-all shadow-inner"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <label className="flex items-center gap-2 text-xs text-[#6F6B63] cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded-md border-[#E5E2DA] text-[#C15F3C] focus:ring-[#C15F3C] accent-[#C15F3C]" required />
                    <span className="group-hover:text-[#2F2E2B] transition-colors">I accept the terms and conditions</span>
                  </label>
                </div>

                <button type="submit" className="w-full bg-[#C15F3C] text-white py-4 rounded-xl hover:bg-[#A94E30] active:scale-[0.98] transition-all font-bold text-sm shadow-lg shadow-orange-200 uppercase tracking-widest mt-2">
                  Get Started Now
                </button>
              </form>

              {/* SECURITY */}
              <div className="flex items-center justify-center gap-2 pt-2 text-[#B1ADA1]">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                <span className="text-[10px] font-bold uppercase tracking-widest">Secure & Encrypted</span>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER INFO - TRUST INDICATORS */}
        <div className="mt-2 flex flex-col items-center justify-center gap-4 pt-2">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C15F3C] text-[#C15F3C]" />
                ))}
              </div>
              <div className="text-sm font-bold text-[#201F1D]">
                4.9/5 <span className="text-[#6F6B63] font-normal">(2.5k+ reviews)</span>
              </div>
            </div>
            
            <div className="hidden md:block w-px h-6 bg-[#E5E2DA]" />
            
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1.5">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-[#F9F8F6] flex items-center justify-center overflow-hidden shadow-sm">
                    <div className="w-full h-full bg-gradient-to-br from-[#C15F3C] to-[#A94E30]" />
                  </div>
                ))}
              </div>
              <span className="text-sm font-bold text-[#201F1D]">Trusted by 50k+ businesses</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GSTInvoicingComponent;


