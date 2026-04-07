'use client';

import React from 'react';
import { Check } from 'lucide-react';

interface PricingPlan {
  title: string;
  price: string;
  subtitle?: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText?: string;
}

interface DoStartupPricingProps {
  plans: PricingPlan[];
  title?: string;
  subtitle?: string;
  containerClassName?: string;
}

const DoStartupPricing: React.FC<DoStartupPricingProps> = ({ 
  plans, 
  title = "Simple packages. Transparent pricing.",
  subtitle = "Transparent pricing and full support from incorporation to compliance.",
  containerClassName = "py-16 bg-[#F4F3EE] font-sans"
}) => {
  return (
    <section className={containerClassName}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title.toLowerCase().includes('pricing') ? (
              <>
                {title.substring(0, title.toLowerCase().lastIndexOf('pricing'))}
                <span className="text-[#C15F3C] italic">Pricing</span>
                {title.substring(title.toLowerCase().lastIndexOf('pricing') + 7) || "."}
              </>
            ) : (
              title
            )}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className={`grid grid-cols-1 ${plans.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' : 'md:grid-cols-3'} gap-8 items-stretch w-full`}>
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-[32px] border ${plan.isPopular ? 'border-[#C15F3C] shadow-xl' : 'border-gray-200 shadow-sm hover:shadow-md'} p-8 flex flex-col h-full transition-all duration-300`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <span className="text-yellow-400">★</span> POPULAR
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 h-14 flex items-center">
                  {plan.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4 min-h-[3rem]">
                  {plan.description}
                </p>
              </div>

              {plan.price !== "" && (
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-gray-900">₹{plan.price}</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold">
                    + {plan.subtitle || "GST | Govt. fee extra"}
                  </p>
                </div>
              )}

              <div className="mb-8 flex-grow">
                <p className="text-sm font-bold text-gray-900 mb-4">What's included:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#C15F3C]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-[#C15F3C]" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                className={`w-full py-4 rounded-xl font-bold transition-all ${
                  index === 0 
                  ? 'bg-[#C15F3C] text-white hover:bg-[#C15F3C]/90 shadow-lg shadow-[#C15F3C]/20' 
                  : 'bg-white text-[#C15F3C] hover:bg-orange-50 border border-[#C15F3C]/20'
                }`}
              >
                {plan.buttonText || "Register Now"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoStartupPricing;
