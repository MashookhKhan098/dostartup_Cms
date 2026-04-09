"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";

export interface PlanFeature {
  text: string;
}

export interface PricingPlan {
  title: string;
  price: string;
  description: string;
  features: PlanFeature[];
  isPopular?: boolean;
}

const PricingCard = ({ plan }: { plan: PricingPlan }) => {
  const [expanded, setExpanded] = useState(false);
  const [descExpanded, setDescExpanded] = useState(false);

  const sliceCount = 5;
  const displayedFeatures = expanded ? plan.features : plan.features.slice(0, sliceCount);
  const hiddenCount = plan.features.length - sliceCount;

  return (
    <div className="relative bg-white rounded-[20px] border border-[#E5E2DF] p-6 sm:p-8 flex flex-col h-full transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_12px_32px_rgba(46,46,46,0.08)]">
      {plan.isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C15A36] text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-md">
          Recommended
        </div>
      )}

      <div className="mb-4">
        <div className="min-h-[64px] flex items-start mb-2">
          <h3 className="text-2xl font-bold text-[#2E2E2E] leading-tight">{plan.title}</h3>
        </div>
        <div className="text-sm text-[#2E2E2E]/70 leading-relaxed min-h-[72px]">
          {descExpanded || plan.description.length < 60
            ? plan.description
            : `${plan.description.substring(0, 60)}...`}
          {plan.description.length >= 60 && (
            <button
              onClick={() => setDescExpanded(!descExpanded)}
              className="ml-1 text-[#C15A36] font-medium hover:underline text-xs"
            >
              {descExpanded ? "Show less" : "Read more"}
            </button>
          )}
        </div>
      </div>

      <div className="mb-6 border-b border-[#E5E2DF] pb-6 min-h-[110px] flex flex-col justify-center">
        <div className="flex items-start gap-1">
          <span className="text-xl font-bold text-[#2E2E2E] mt-1">₹</span>
          <span className="text-4xl lg:text-5xl font-bold text-[#2E2E2E] tracking-tight">
            {plan.price}
          </span>
        </div>
        <p className="text-xs text-[#2E2E2E]/60 mt-2 font-medium">
          + GST | Govt. fee extra
        </p>
      </div>

      <div className="mb-8 flex-grow">
        <p className="text-sm font-bold text-[#2E2E2E] mb-4">What's included:</p>
        <ul className="space-y-3">
          {displayedFeatures.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-[#C15A36]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 text-[#C15A36]" strokeWidth={3} />
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
            className="mt-4 text-[#C15A36] text-sm font-semibold hover:underline"
          >
            {expanded ? "Show less" : `+ ${hiddenCount} more`}
          </button>
        )}
      </div>

      <div className="mt-auto">
        <button className="w-full bg-[#C15A36] text-white py-3.5 rounded-full font-bold transition-all duration-250 ease-in-out hover:bg-[#A94A2C] shadow-sm hover:shadow-md">
          Register Now
        </button>
      </div>
    </div>
  );
};

export default function PricingCards({ plans, title, subtitle }: { plans: PricingPlan[], title?: string, subtitle?: string }) {
  return (
    <section className="py-20 bg-[#F4F3EE] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {(title || subtitle) && (
          <div className="text-center mb-14">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-[#2E2E2E] mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-[#2E2E2E]/70 max-w-2xl mx-auto text-lg">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
