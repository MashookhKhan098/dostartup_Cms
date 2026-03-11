
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
// app/components/Startup/Price.tsx

type PricingProps = {
  category?: string;
};

const COCKPIT_BASE = "https://cms.dostartup.in";
const TOKEN = process.env.NEXT_PUBLIC_COCKPIT_API_KEY;

async function getPricing(category?: string) {
  try {
    const sectionRes = await fetch(
      `${COCKPIT_BASE}/api/content/item/pricingSection?api-key=${TOKEN}`,
      { cache: "no-store" }
    );
    const section = await sectionRes.json();

    const filter = category 
      ? `&filter=${encodeURIComponent(JSON.stringify({ 
          category: { "$regex": category, "$options": "i" } 
        }))}` 
      : "";

    const cardRes = await fetch(
      `${COCKPIT_BASE}/api/content/items/pricingCard?api-key=${TOKEN}${filter}`,
      { cache: "no-store" }
    );

    const cardData = await cardRes.json();
    const cards = Array.isArray(cardData) ? cardData : (cardData?.entries || []);

    return { section, cards };
  } catch (error) {
    console.error("Pricing Fetch Error:", error);
    return null;
  }
}

export default async function PricingSection({ category }: PricingProps) {
  const data = await getPricing(category);

  if (!data || !data.section || data.cards.length === 0) return null;

  const { section, cards } = data;

  return (
    <section className="bg-white py-16 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-100 rounded-full blur-3xl -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
            <span className="text-gray-900">Simple </span>
            <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Transparent pricing with no hidden charges
          </p>
        </div>

        {/* Cards Grid - Increased gap for more space between columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center max-w-7xl mx-auto">
          {cards.map((card: any, index: number) => {
            // Filter out invalid cards
            if (!card.title || card.title === "Proprietorship.") return null;
            
            const colorIndex = index % 3;
            const colors = colorIndex === 0 ? 'orange' : colorIndex === 1 ? 'blue' : 'orange';
            
            return (
              <div
                key={card._id}
                className="group relative bg-white rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl w-full max-w-[280px] shadow-lg border border-gray-200 flex flex-col h-full"
              >
                <div className="p-6 flex flex-col h-full">
                  {/* Title - Increased bottom margin */}
                  <h3 className={`text-base font-bold mb-3 min-h-[40px] ${
                    colors === 'orange' ? 'text-orange-600' : 'text-blue-600'
                  }`}>
                    {card.title}
                  </h3>
                  
                  {/* Description - Increased bottom margin */}
                  {card.description && card.description !== card.title && (
                    <p className="text-gray-500 text-xs mb-4 line-clamp-2 min-h-[32px]">
                      {card.description}
                    </p>
                  )}

                  {/* Price - Increased bottom margin */}
                  <div className="mb-5">
                    <div className="flex items-end gap-1">
                      <span className="text-2xl font-bold text-gray-900">₹{card.price}</span>
                      <span className="text-gray-400 text-xs mb-1">/year</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">+ Government fees extra</p>
                  </div>

                  {/* What's included - Increased spacing */}
                  <div className="mb-5 flex-grow">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                      WHAT'S INCLUDED:
                    </h4>
                    <ul className="space-y-2">
                      {[
                        'Dedicated Expert',
                        'Document Preparation',
                        'Consultation Session',
                        'Email Support',
                        'Priority Processing'
                      ].map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs">
                          <svg className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${
                            colors === 'orange' ? 'text-orange-500' : 'text-blue-500'
                          }`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Button - Increased padding */}
                  <button className={`w-full py-3 px-4 rounded-lg text-xs font-medium transition-all mt-auto ${
                    colors === 'orange' 
                      ? 'bg-orange-50 text-orange-600 hover:bg-orange-100 border border-orange-200' 
                      : 'bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-200'
                  }`}>
                    Get Started Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-500 text-sm">
            Need a custom plan? <span className="text-orange-600 font-medium cursor-pointer hover:underline">Contact sales</span>
          </p>
        </div>
      </div>
    </section>
  );
} 