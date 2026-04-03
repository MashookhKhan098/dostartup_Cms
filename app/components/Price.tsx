// app/components/Startup/Price.tsx
import Link from 'next/link';

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

 const filteredCards = cards.filter((card: any) => {
 return card.title && card.title !== "Proprietorship.";
 });

 return (
 <section className="bg-[#F4F3EE] py-6 px-4 sm:px-6 relative overflow-hidden">
 <div className="max-w-7xl mx-auto">

 {/* Header */}
 <div className="text-center mb-12">
 <div className="inline-flex items-center gap-2 bg-white border border-[#E5E2DA] rounded-full px-4 py-1.5 mb-4">
 <div className="w-2 h-2 bg-[#C15F3C] rounded-full" />
 <span className="text-xs font-medium text-[#C15F3C]">PRICING</span>
 </div>
 <h2 className="text-3xl sm:text-4xl font-bold text-[#2F2E2B] mb-4">
 Simple & Transparent Pricing
 </h2>
 <p className="text-[#6F6B63] text-base max-w-2xl mx-auto mb-2">
 Start your business easily with dedicated expert assistance.
 </p>
 <p className="text-xs text-[#B1ADA1] font-medium">
 Note: Prices are inclusive of professional fees and government filing charges.
 </p>
 </div>

 {/* Cards Grid */}
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center max-w-7xl mx-auto">
 {filteredCards.map((card: any) => {

 let features = [
 'Dedicated Expert',
 'Document Preparation',
 'Consultation Session',
 'Email Support',
 'Priority Processing'
 ];

 if (card.title === "Professional Tax Cancellation") {
 features = [
 'Dedicated Expert',
 'Consultation Session',
 'Email Support',
 'Priority Processing'
 ];
 } else if (card.title === "Trust Registration") {
 features = [
 'Dedicated Expert',
 'Document Preparation'
 ];
 } else if (card.title === "proprietorship." || card.title === "Proprietorship") {
 features = [
 'Dedicated Expert',
 'Consultation Session'
 ];
 } else if (card.title === "Professional Tax Return Filing") {
 features = [
 'Dedicated Expert',
 'Document Preparation',
 'Consultation Session'
 ];
 } else if (card.title === "Professional Tax Registration Certificate") {
 features = [
 'Dedicated Expert',
 'Document Preparation',
 'Consultation Session'
 ];
 }

 return (
 <div
 key={card._id}
 className="group bg-white rounded-2xl border border-[#E5E2DA] hover:border-[#C15F3C] hover:shadow-lg transition-all duration-300 w-full max-w-[280px] flex flex-col h-full overflow-hidden"
 >
 <div className="p-6 flex flex-col h-full">

 {/* Title (FIXED HEIGHT) */}
 <h3 className="text-lg font-semibold text-[#2F2E2B] mb-3 min-h-[72px]">
 {card.title}
 </h3>

 {/* Description (ALWAYS RENDERED WITH FIXED HEIGHT) */}
 <p className="text-[#6F6B63] text-xs mb-4 min-h-[40px]">
 {card.title === "Trust Registration" && "Get Your Trust Registered in Just 5-7 Days - 100% Online & Hassle-Free!"}
 {card.title === "Compliance" && "Complete Accounting & Tax Compliance for Your Trust!"}
 {card.title === "GST Registration & Software" && "Complete GST registration with software access"}
 {card.title === "Accountant" && "GST Registration & 3-Month Accountant"}
 </p>

 {/* Price */}
 <div className="mb-5">
 <div className="flex items-end gap-1">
 <span className="text-3xl font-bold text-[#2F2E2B]">₹{card.price}</span>
 <span className="text-[#B1ADA1] text-xs mb-1">/year</span>
 </div>
 <p className="text-xs text-[#B1ADA1] mt-1">+ Government fees extra</p>
 </div>

 {/* Features */}
 <div className="mb-5 flex-grow">
 <h4 className="text-xs font-semibold text-[#6F6B63] uppercase mb-3">
 WHAT'S INCLUDED:
 </h4>
 <ul className="space-y-2">
 {features.map((feature, idx) => (
 <li key={idx} className="flex items-start gap-2 text-xs">
 <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-[#C15F3C]" fill="currentColor" viewBox="0 0 20 20">
 <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
 </svg>
 <span className="text-[#4F4C45]">{feature}</span>
 </li>
 ))}
 </ul>
 </div>

 {/* Button */}
 <Link 
 href={`/register?plan=${encodeURIComponent(card.title)}`} 
 className="mt-auto"
 >
 <button className="w-full py-3 px-4 rounded-lg text-xs font-medium transition-all border border-[#C15F3C] text-[#C15F3C] hover:bg-[#C15F3C] hover:text-white bg-white">
 Get Started Now
 </button>
 </Link>

 </div>
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