
// // Pricing Component with dynamic cards from file data
// "use client";
// import { useState } from "react";

// // Import your pricing data from utils folder
// // import pricingData from "@/utils/pricingData.json";

// // Example data structure - replace this with your actual import
// const pricingData = {
//   heading: "Simple & Transparent Pricing",
//   subheading: "Start your business easily with dedicated expert assistance.",
//   note: "Note: Prices are inclusive of professional fees and government filing charges.",
//   selectLabel: "Select your State for pricing",
//   cards: [
//     {
//       id: 1,
//       title: "Trust Registration",
//       description: "Get Your Trust Registered in Just 5-7 Days - 100% Online & Hassle-Free!",
//       price: "5,899",
//       gstNote: "+ GST | Govt. fee included",
//       buttonText: "Start Filing Now",
//       features: [
//         "Trust Deed Preparation",
//         "Trust PAN Card"
//       ]
//     },
//     {
//       id: 2,
//       title: "Compliance",
//       description: "Complete Accounting & Tax Compliance for Your Trust!",
//       price: "19,899",
//       gstNote: "+ GST",
//       buttonText: "Start Filing Now",
//       features: [
//         "Fractional Accountant",
//         "CA Assistance (4 Consultations)",
//         "GST Return Filing (Monthly/Quarterly)",
//         "Preparation of Financial Statements",
//         "Income Tax Return Filing",
//         "1-year LEDGERS subscription"
//       ]
//     }
//   ]
// };

// export default function PricingSection() {
//   const [selectedState, setSelectedState] = useState("");

//   const states = [
//     "Delhi",
//     "Maharashtra",
//     "Karnataka",
//     "Uttar Pradesh",
//     "Gujarat",
//     "Tamil Nadu",
//     "West Bengal",
//     "Rajasthan",
//     "Haryana",
//     "Punjab"
//   ];

//   return (
//     <section className="relative bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header - Fixed */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
//             {pricingData.heading}
//           </h2>
//           <p className="text-gray-600 text-base sm:text-lg mb-2">
//             {pricingData.subheading}
//           </p>
//           <p className="text-sm text-gray-500 font-medium">
//             {pricingData.note}
//           </p>
//         </div>

//         {/* State Selector */}
//         <div className="max-w-md mx-auto mb-12">
//           <label className="block text-gray-700 font-medium text-sm mb-3 text-center">
//             {pricingData.selectLabel}
//           </label>
//           <div className="relative">
//             <select
//               value={selectedState}
//               onChange={(e) => setSelectedState(e.target.value)}
//               className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer transition"
//             >
//               <option value="">Select State</option>
//               {states.map((state) => (
//                 <option key={state} value={state}>
//                   {state}
//                 </option>
//               ))}
//             </select>
//             <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
//               <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
//               </svg>
//             </div>
//           </div>
//         </div>

//         {/* Dynamic Pricing Cards */}
//         <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
//           {pricingData.cards.map((card) => (
//             <div
//               key={card.id}
//               className="bg-white rounded-xl border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 overflow-hidden group w-full max-w-xs"
//             >
//               {/* Card Header */}
//               <div className="p-5 pb-3 text-center border-b border-gray-100">
//                 <h3 className="text-lg font-bold text-gray-900 mb-2">
//                   {card.title}
//                 </h3>
//                 <p className="text-xs text-gray-600 leading-relaxed">
//                   {card.description}
//                 </p>
//               </div>

//               {/* Price Section */}
//               <div className="px-5 py-5 text-center">
//                 <div className="text-3xl font-bold text-gray-900 mb-1">
//                   ₹{card.price}
//                 </div>
//                 <p className="text-xs text-gray-500 font-medium">
//                   {card.gstNote}
//                 </p>
//               </div>

//               {/* CTA Button */}
//               <div className="px-5 pb-5">
//                 <button className="w-full blue-600 text-white text-xs font-semibold py-2.5 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all shadow-md hover:shadow-lg">
//                   {card.buttonText}
//                 </button>
//               </div>

//               {/* Features List */}
//               <div className="px-5 pb-5 space-y-2.5">
//                 {card.features.map((feature, index) => (
//                   <div key={index} className="flex items-start gap-2.5">
//                     <svg
//                       className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M5 13l4 4L19 7"
//                       />
//                     </svg>
//                     <span className="text-xs text-gray-700">{feature}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



// app/components/Startup/Price.tsx

type PricingProps = {
  category?: string;
};

async function getPricing(category?: string) {
  // ===== FETCH PRICING SECTION =====
  const sectionRes = await fetch(
    category
      ? `http://localhost:1337/api/pricing-sections?filters[category][$eq]=${category}`
      : `http://localhost:1337/api/pricing-sections`,
    { cache: "no-store" }
  );

  const sectionJson = await sectionRes.json();

  if (!Array.isArray(sectionJson.data) || sectionJson.data.length === 0) {
    return null;
  }

  // category passed → same
  // no category → first section = default
  const section = sectionJson.data[0];
  const finalCategory = section.category;

  // ===== FETCH PRICING CARDS =====
  const cardsRes = await fetch(
    `http://localhost:1337/api/pricing-cards?filters[category][$eq]=${finalCategory}`,
    { cache: "no-store" }
  );

  const cardsJson = await cardsRes.json();

  return {
    section,
    cards: Array.isArray(cardsJson.data) ? cardsJson.data : [],
  };
}

export default async function PricingSection({ category }: PricingProps) {
  const data = await getPricing(category);

  if (!data) return null;

  const { section, cards } = data;

  return (
    <section className="relative bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* ===== HEADER (UNCHANGED) ===== */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {section.heading}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-2">
            {section.subheading}
          </p>
          {section.note && (
            <p className="text-sm text-gray-500 font-medium">
              {section.note}
            </p>
          )}
        </div>

        {/* ===== PRICING CARDS (UNCHANGED) ===== */}
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {cards.map((card: any) => (
            <div
              key={card.id}
              className="bg-white rounded-xl border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 overflow-hidden group w-full max-w-xs"
            >
              <div className="p-5 pb-3 text-center border-b border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="px-5 py-5 text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  ₹{card.price}
                </div>
                {card.gstNote && (
                  <p className="text-xs text-gray-500 font-medium">
                    {card.gstNote}
                  </p>
                )}
              </div>

              <div className="px-5 pb-5">
  <button className="w-full bg-blue-600 text-white text-xs font-semibold py-2.5 rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg">
    {card.buttonText}
  </button>
</div>


              <div className="px-5 pb-5 space-y-2.5">
                {Array.isArray(card.features) &&
                  card.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start gap-2.5">
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
                      <span className="text-xs text-gray-700">
                        {feature}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
