"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import PricingCardClient from './PricingCardClient';

type PricingProps = {
  category?: string;
};

const COCKPIT_BASE = process.env.NEXT_PUBLIC_COCKPIT_URL;
const TOKEN = process.env.NEXT_PUBLIC_COCKPIT_API_KEY;

export default function DynamicPricingSection({ category: propCategory }: PricingProps) {
  const pathname = usePathname();
  const [cards, setCards] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // The subpage name (slug) from the URL (e.g., "gst-registration")
  const subpageSlug = pathname.split('/').filter(Boolean).pop() || "General";
  const finalCategory = propCategory || subpageSlug;

  useEffect(() => {
    async function getPricing() {
      setLoading(true);
      try {
        // Fetching pricing cards matching the category field in Cockpit
        const filter = JSON.stringify({
          category: { "$regex": finalCategory, "$options": "i" }
        });

        const cardRes = await fetch(
          `${COCKPIT_BASE}/api/content/items/pricingCard?token=${TOKEN}&filter=${encodeURIComponent(filter)}`,
          { cache: "no-store" }
        );

        const cardData = await cardRes.json();
        const cardEntries = Array.isArray(cardData) ? cardData : (cardData?.entries || []);
        
        setCards(cardEntries);
      } catch (error) {
        console.error("Pricing Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    }

    getPricing();
  }, [finalCategory]);

  if (loading) {
    return (
      <div className="bg-[#F4F3EE] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 animate-pulse">
          <div className="h-10 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-10"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="h-96 bg-gray-200 rounded-3xl"></div>
            <div className="h-96 bg-gray-200 rounded-3xl"></div>
            <div className="h-96 bg-gray-200 rounded-3xl"></div>
          </div>
        </div>
      </div>
    );
  }

  if (cards.length === 0) return null;

  return (
    <section className="bg-[#F4F3EE] py-20 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white border border-[#E5E2DA] rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <div className="w-2 h-2 bg-[#C15F3C] rounded-full" />
            <span className="text-xs font-medium text-[#C15F3C]">PRICING</span>
          </div>
          <h2 className="text-3xl md:text-3xl font-bold text-[#2E2E2E] mb-4">
            Simple & Transparent Pricing
          </h2>
          <p className="text-[#6F6B63] text-lg max-w-2xl mx-auto mb-2">
            Start your business easily with dedicated expert assistance.
          </p>
          <p className="text-xs text-[#B1ADA1] font-medium">
            Note: Prices are inclusive of professional fees and government filing charges.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-wrap gap-8 justify-center">
          {cards.map((card: any) => {
            // Default features since they aren't explicitly in the CMS fields shown
            const features = [
              { text: 'Dedicated Expert Support' },
              { text: 'Complete Document Preparation' },
              { text: 'Government Fee Reconciliation' },
              { text: 'Consultation & Advisory' },
              { text: 'Priority Email Support' }
            ];

            const plan = {
              title: card.title || "Standard Plan",
              price: card.price?.toString() || "0",
              description: card.description || "Comprehensive service package for your business needs.",
              features: features,
              isPopular: card.isPopular || false
            };

            return (
              <div key={card._id} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] xl:w-[calc(25%-1.5rem)] min-w-[300px] max-w-[380px]">
                <PricingCardClient plan={plan} />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-[#6F6B63] text-sm">
            Need a custom plan?{' '}
            <span className="text-[#C15F3C] font-medium cursor-pointer hover:underline">
              Contact sales
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}
