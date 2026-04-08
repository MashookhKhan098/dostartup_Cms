import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';

type GSTInvoicingProps = {
  imageUrl: string;
  title: string;
  rating: number | string;
  description?: string;
  exclusiveOffersCount?: number;
  features?: string[];
};

const GSTInvoicingComponent: React.FC<GSTInvoicingProps> = ({
  imageUrl,
  title,
  rating,
  description = '',
  exclusiveOffersCount = 0,
  features = []
}) => {
  return (
    <div className="bg-[#F4F3EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* LEFT SECTION */}
          <div className="flex-1 bg-white rounded-2xl shadow-sm border border-[#E5E2DA] p-6">
            <div className="flex flex-col md:flex-row gap-8">

              {/* LEFT SIDEBAR - IMAGE AND LINKS */}
              <div className="w-full md:w-64 flex-shrink-0">
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full rounded-xl border border-[#E5E2DA]"
                />

                <div className="mt-4 space-y-2">
                  <p className="text-sm text-[#6F6B63] hover:text-[#C15F3C] cursor-pointer transition-colors">
                    Documents Required
                  </p>
                  <p className="text-sm text-[#6F6B63] hover:text-[#C15F3C] cursor-pointer transition-colors">
                    Fee Structure
                  </p>
                  <button className="text-sm text-[#C15F3C] font-medium hover:underline">
                    Learn More →
                  </button>
                </div>
              </div>

              {/* MAIN CONTENT */}
              <div className="flex-1 space-y-6">

                {/* HEADER */}
                <div>
                  <div className="inline-flex items-center gap-2 bg-white border border-[#E5E2DA] rounded-full px-3 py-1 mb-3">
                    <div className="w-2 h-2 bg-[#C15F3C] rounded-full" />
                    <span className="text-xs font-medium text-[#C15F3C]">
                      #1 REGISTRATION PLATFORM
                    </span>
                  </div>

                  <h1 className="text-xl font-semibold text-[#2F2E2B] mb-2">
                    {title}
                  </h1>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#C15F3C] text-[#C15F3C]" />
                      ))}
                    </div>
                    <span className="text-sm text-[#6F6B63]">({rating})</span>
                  </div>

                  <p className="text-sm text-[#6F6B63] leading-relaxed">
                    {description}
                  </p>
                </div>

                {/* FEATURES BOX */}
                <div className="bg-[#F9F8F6] border border-[#E5E2DA] rounded-2xl p-6">
                  <span className="inline-block bg-[#C15F3C] text-white text-[10px] font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">
                    {exclusiveOffersCount} Exclusive Offers
                  </span>

                  <div className="space-y-2 mt-2">
                    {features.map((feature, index) => (
                      <div key={index} className="flex gap-2">
                        <span className="text-[#C15F3C] font-bold text-lg">›</span>
                        <p className="text-sm text-[#4F4C45]">{feature}</p>
                      </div>
                    ))}
                  </div>

                  <button className="mt-5 w-full border border-[#C15F3C] text-[#C15F3C] py-2.5 rounded-lg hover:bg-[#C15F3C] hover:text-white transition font-medium text-sm">
                    VIEW DETAILS
                  </button>
                </div>

                {/* TRUST INFO */}
                <div className="flex items-center gap-4 text-xs text-[#6F6B63]">
                  <span>★★★★★ 4.9/5 TrustScore</span>
                  <span>Trusted by 50,000+ Enterprises</span>
                </div>

                {/* LINKS */}
                <div className="flex justify-between text-sm">
                  <button className="text-[#C15F3C] hover:underline">
                    Terms and conditions
                  </button>
                  <button className="text-[#C15F3C] hover:underline">
                    Refer a Friend
                  </button>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR - FORM */}
          <div className="lg:w-80 bg-white rounded-2xl shadow-sm border border-[#E5E2DA] p-6 space-y-6 h-fit">

            {/* CART ICON */}
            <div className="flex justify-end">
              <div className="relative">
                <ShoppingCart className="w-7 h-7 text-[#C15F3C]" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#C15F3C] text-white text-xs flex items-center justify-center rounded-full">
                  0
                </span>
              </div>
            </div>

            {/* HEADER */}
            <div className="text-center">
              <h3 className="font-semibold text-[#2F2E2B] text-sm mb-1">
                Start Registration
              </h3>
              <p className="text-xs text-[#6F6B63]">
                Fill details to get an instant quote
              </p>
            </div>

            {/* FORM */}
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 border border-[#E5E2DA] rounded-lg bg-white focus:ring-1 focus:ring-[#C15F3C] outline-none text-sm placeholder-[#B1ADA1]"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-[#E5E2DA] rounded-lg bg-white focus:ring-1 focus:ring-[#C15F3C] outline-none text-sm placeholder-[#B1ADA1]"
              />

              <div className="flex gap-2">
                <select className="px-2 py-3 border border-[#E5E2DA] rounded-lg bg-white text-sm text-[#2F2E2B] focus:ring-1 focus:ring-[#C15F3C] outline-none cursor-pointer">
                  <option>🇮🇳 +91</option>
                </select>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="flex-1 px-3 py-3 border border-[#E5E2DA] rounded-lg bg-white text-sm placeholder-[#B1ADA1] focus:ring-1 focus:ring-[#C15F3C] outline-none"
                />
              </div>

              <label className="flex items-center gap-2 text-xs text-[#6F6B63] cursor-pointer">
                <input type="checkbox" className="accent-[#C15F3C]" />
                I agree to the terms
              </label>

              <button className="w-full bg-[#C15F3C] text-white py-3 rounded-lg hover:bg-[#A94E30] transition font-semibold text-sm shadow-sm">
                Get Started Now
              </button>
            </div>

            {/* SECURITY */}
            <p className="text-center text-xs text-[#B1ADA1]">
              Secure · Encrypted · No Spam
            </p>

          </div>
        </div>

        {/* TRUST BADGES */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-[#6F6B63] mt-4">
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#C15F3C] text-[#C15F3C]" />
              ))}
            </div>
            <span>4.9/5 (2.5k+ reviews)</span>
          </div>
          <span>Trusted by 50k+ businesses</span>
        </div>

      </div>
    </div>
  );
};

export default GSTInvoicingComponent;
