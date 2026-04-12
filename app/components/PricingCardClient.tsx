"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";
import Link from "next/link";

export interface PlanFeature {
  text: string;
}

export interface PricingPlan {
  title: string;
  price: string;
  description: string;
  features: PlanFeature[];
  isPopular?: boolean;
  image?: string;
}

const PricingCardClient = ({ plan }: { plan: PricingPlan }) => {
  const [expanded, setExpanded] = useState(false);
  const [descExpanded, setDescExpanded] = useState(false);

  const sliceCount = 5;
  const displayedFeatures = expanded ? plan.features : plan.features.slice(0, sliceCount);
  const hiddenCount = plan.features.length - sliceCount;

  // Format price with commas (Indian Style: en-IN)
  const formattedPrice = !isNaN(Number(plan.price)) 
    ? Number(plan.price).toLocaleString('en-IN') 
    : plan.price;

  return (
    <div className="relative bg-white rounded-[24px] border border-[#E5E2DF] p-7 sm:p-8 flex flex-col h-full transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_12px_32px_rgba(46,46,46,0.08)] w-full">
      {plan.isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C15A36] text-white px-5 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase shadow-md z-10">
          Recommended
        </div>
      )}

      {plan.image && (
        <div className="mb-6 flex justify-center">
          <img 
            src={plan.image} 
            alt={plan.title} 
            className="w-16 h-16 object-contain"
          />
        </div>
      )}

      <div className="mb-5">
        <div className="min-h-[64px] flex items-start mb-3">
          <h3 className="text-2xl font-bold text-[#2E2E2E] leading-tight">{plan.title}</h3>
        </div>
        <div className="text-sm text-[#2E2E2E]/70 leading-relaxed min-h-[72px]">
          {descExpanded || plan.description.length < 80
            ? plan.description
            : `${plan.description.substring(0, 80)}...`}
          {plan.description.length >= 80 && (
            <button
              onClick={() => setDescExpanded(!descExpanded)}
              className="ml-1 text-[#C15A36] font-semibold hover:underline text-xs"
            >
              {descExpanded ? "Show less" : "Read more"}
            </button>
          )}
        </div>
      </div>

      <div className="mb-6 pb-6 border-b border-[#E5E2DF] min-h-[110px] flex flex-col justify-center">
        <div className="flex items-start gap-1.5">
          <span className="text-2xl font-bold text-[#2E2E2E] mt-1">₹</span>
          <div className="flex flex-col">
            <span className="text-4xl lg:text-5xl font-bold text-[#2E2E2E] tracking-tight">
              {formattedPrice}
            </span>
          </div>
        </div>
        <p className="text-xs text-[#2E2E2E]/60 mt-2.5 font-medium">
          + GST | Govt. fee extra
        </p>
      </div>

      <div className="mb-8 flex-grow">
        <p className="text-xs font-bold text-[#2E2E2E] mb-5 uppercase tracking-wider">What's included:</p>
        <ul className="space-y-3.5">
          {displayedFeatures.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-[#C15A36]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-[#C15A36]" strokeWidth={3} />
              </div>
              <span className="text-sm text-[#2E2E2E]/80 leading-snug">
                {feature.text}
              </span>
            </li>
          ))}
        </ul>

        {hiddenCount > 0 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 text-[#C15A36] text-xs font-bold hover:underline transition-colors"
          >
            {expanded ? "Show less" : `+ ${hiddenCount} more`}
          </button>
        )}
      </div>

      <div className="mt-auto pt-2">
        <button 
          onClick={() => {
            const element = document.getElementById('registration-form');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            } else {
              // Fallback if the ID is missing on a specific page
              window.location.href = `/register?plan=${encodeURIComponent(plan.title)}`;
            }
          }}
          className="w-full bg-[#C15A36] text-white py-4 rounded-full font-bold text-sm tracking-wide transition-all duration-250 ease-in-out hover:bg-[#A94A2C] shadow-sm hover:shadow-md"
        >
          Register Now
        </button>
      </div>
    </div>
  );
};

export default PricingCardClient;
