"use client";
import { useState } from "react";

export default function DynamicPricingSection({
  heading = "Simple & Transparent Pricing",
  subheading = "Start your business easily with dedicated expert assistance.",
  note = "Note: Prices are inclusive of professional fees and government filing charges.",
  selectLabel = "Select your State for pricing",
  showStateSelector = true,
  states = [
    "Delhi",
    "Maharashtra",
    "Karnataka",
    "Uttar Pradesh",
    "Gujarat",
    "Tamil Nadu",
    "West Bengal",
    "Rajasthan",
    "Haryana",
    "Punjab"
  ],
  cards = []
}) {
  const [selectedState, setSelectedState] = useState("");

  return (
    <section className="relative bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {heading}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-2">
            {subheading}
          </p>
          {note && (
            <p className="text-sm text-gray-500 font-medium">
              {note}
            </p>
          )}
        </div>

        {/* State Selector */}
        {showStateSelector && (
          <div className="max-w-md mx-auto mb-12">
            <label className="block text-gray-700 font-medium text-sm mb-3 text-center">
              {selectLabel}
            </label>
            <div className="relative">
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer transition"
              >
                <option value="">Select State</option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </div>
            </div>
          </div>
        )}

        {/* Dynamic Pricing Cards */}
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={card.id || index}
              className="bg-white rounded-xl border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 overflow-hidden group w-full max-w-xs"
            >
              {/* Badge (optional) */}
              {card.badge && (
                <div className="bg-blue-600 text-white text-xs font-semibold py-1 px-4 text-center">
                  {card.badge}
                </div>
              )}

              {/* Card Header */}
              <div className="p-5 pb-3 text-center border-b border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {card.title}
                </h3>
                {card.description && (
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                )}
              </div>

              {/* Price Section */}
              <div className="px-5 py-5 text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  ₹{card.price}
                </div>
                {card.priceNote && (
                  <p className="text-xs text-gray-500 font-medium">
                    {card.priceNote}
                  </p>
                )}
              </div>

              {/* CTA Button */}
              <div className="px-5 pb-5">
                <button 
                  onClick={card.onButtonClick}
                  className="w-full bg-blue-900 text-white text-xs font-semibold py-2.5 rounded-lg hover:bg-blue-800 transition-all shadow-md hover:shadow-lg"
                >
                  {card.buttonText || "Start Registration"}
                </button>
              </div>

              {/* Features List */}
              {card.features && card.features.length > 0 && (
                <div className="px-5 pb-5 space-y-2.5">
                  {card.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <svg
                        className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-xs text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}