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
 ID Proof
 </p>
 <p className="text-sm text-[#6F6B63] hover:text-[#C15F3C] cursor-pointer transition-colors">
 HSN Code
 </p>
 <button className="text-sm text-[#C15F3C] font-medium hover:underline">
 Load More →
 </button>
 </div>
 </div>

 {/* MAIN CONTENT */}
 <div className="flex-1 space-y-6">

 {/* HEADER */}
 <div>
 <div className="inline-flex items-center gap-2 bg-[#F4F3EE] border border-[#E5E2DA] rounded-full px-3 py-1 mb-3">
 <div className="w-2 h-2 bg-[#C15F3C] rounded-full" />
 <span className="text-xs font-medium text-[#C15F3C]">
 GST INVOICING
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
 <div className="bg-[#F4F3EE] border border-[#E5E2DA] rounded-xl p-5">
 <span className="inline-block bg-[#C15F3C] text-white text-xs px-3 py-1.5 rounded-full mb-4">
 {exclusiveOffersCount} Exclusive Offers
 </span>

 <p className="font-semibold text-[#2F2E2B] text-sm mb-2">
 1 Year License
 </p>

 <div className="space-y-2">
 {features.map((feature, index) => (
 <div key={index} className="flex gap-2">
 <span className="text-[#C15F3C] font-bold text-lg">›</span>
 <p className="text-sm text-[#4F4C45]">{feature}</p>
 </div>
 ))}
 </div>

 <button className="mt-5 w-full border border-[#C15F3C] text-[#C15F3C] py-2.5 rounded-lg hover:bg-[#C15F3C] hover:text-white transition font-medium text-sm">
 ADD TO CART
 </button>
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

 {/* OFFERS AND DISCOUNTS */}
 <div>
 <h2 className="text-lg font-semibold text-[#2F2E2B] mb-3">
 Offers and discounts
 </h2>

 <div className="space-y-3">
 <div className="flex gap-3 p-4 border border-[#E5E2DA] rounded-lg hover:border-[#C15F3C] transition cursor-pointer">
 <div className="w-10 h-10 bg-[#F4F3EE] rounded flex items-center justify-center flex-shrink-0">
 <div className="w-6 h-6 bg-[#C15F3C] rounded"></div>
 </div>
 <div>
 <h3 className="font-medium text-[#2F2E2B] text-sm">
 LEDGERS HR Software
 </h3>
 <p className="text-xs text-[#6F6B63]">
 Attendance, Payroll, Employee Portal & HR Compliance
 </p>
 </div>
 </div>

 <div className="flex gap-3 p-4 border border-[#E5E2DA] rounded-lg hover:border-[#C15F3C] transition cursor-pointer">
 <div className="w-10 h-10 bg-[#F4F3EE] rounded flex items-center justify-center flex-shrink-0 text-[#C15F3C] font-bold text-xs">
 GST
 </div>
 <div>
 <h3 className="font-medium text-[#2F2E2B] text-sm">
 Save 18% with GST Registration
 </h3>
 <p className="text-xs text-[#6F6B63]">
 Get GST invoice with Input Tax Credit
 </p>
 </div>
 </div>
 </div>
 </div>

 </div>
 </div>
 </div>

 {/* RIGHT SIDEBAR - CART FORM */}
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

 {/* EMPTY CART MESSAGE */}
 <div className="text-center">
 <h3 className="font-semibold text-[#2F2E2B] text-sm mb-1">
 Your cart is empty
 </h3>
 <p className="text-xs text-[#6F6B63]">
 Add services to get started
 </p>
 </div>

 {/* LOGIN */}
 <p className="text-center text-xs text-[#6F6B63]">
 Existing User?{" "}
 <button className="text-[#C15F3C] font-medium hover:underline">
 Login
 </button>
 </p>

 {/* FORM */}
 <div className="space-y-3">
 <input
 type="text"
 placeholder="Name"
 className="w-full px-3 py-2.5 border border-[#E5E2DA] rounded-lg bg-[#F4F3EE] focus:ring-1 focus:ring-[#C15F3C] outline-none text-sm placeholder-[#B1ADA1]"
 />
 <input
 type="email"
 placeholder="Email"
 className="w-full px-3 py-2.5 border border-[#E5E2DA] rounded-lg bg-[#F4F3EE] focus:ring-1 focus:ring-[#C15F3C] outline-none text-sm placeholder-[#B1ADA1]"
 />

 <div className="flex gap-2">
 <select className="px-3 py-2.5 border border-[#E5E2DA] rounded-lg bg-[#F4F3EE] text-sm text-[#2F2E2B] focus:ring-1 focus:ring-[#C15F3C] outline-none">
 <option>🇮🇳 +91</option>
 </select>
 <input
 type="tel"
 placeholder="Phone"
 className="flex-1 px-3 py-2.5 border border-[#E5E2DA] rounded-lg bg-[#F4F3EE] text-sm placeholder-[#B1ADA1] focus:ring-1 focus:ring-[#C15F3C] outline-none"
 />
 </div>

 <label className="flex items-center gap-2 text-xs text-[#6F6B63] cursor-pointer">
 <input type="checkbox" className="accent-[#C15F3C]" />
 Enter GSTN to get credit
 </label>

 <button className="w-full bg-[#C15F3C] text-white py-3 rounded-lg hover:bg-[#A94E30] transition font-semibold text-sm">
 Get Started
 </button>
 </div>

 {/* SECURITY BADGE */}
 <p className="text-center text-xs text-[#B1ADA1]">
 Secure · No spam · Instant confirmation
 </p>

 </div>
 </div>

 {/* TRUST BADGES - REDUCED BOTTOM GAP */}
 <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-[#6F6B63] mt-2 pb-0">
 <div className="flex items-center gap-1">
 <div className="flex">
 {[...Array(5)].map((_, i) => (
 <svg key={i} className="w-4 h-4 fill-[#C15F3C] text-[#C15F3C]" viewBox="0 0 20 20">
 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
 </svg>
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