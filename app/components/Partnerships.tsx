"use client";

import { useEffect, useState } from "react";

const COCKPIT_BASE = process.env.NEXT_PUBLIC_COCKPIT_URL;
const PARTNER_API = `${COCKPIT_BASE}/api/content/items/Partner`;

export default function Partnerships() {
 const [partners, setPartners] = useState<any[]>([]);

 useEffect(() => {
 fetchPartners();
 }, []);

 async function fetchPartners() {
 try {
 const res = await fetch(PARTNER_API, {
 cache: "no-store"
 });
 const data = await res.json();
 if (Array.isArray(data)) {
 setPartners(data);
 }
 } catch (error) {
 console.error("Partners fetch error:", error);
 }
 }

 function getLogoUrl(partner: any) {
 if (!partner.logo) return "";

 // CASE 1: Asset object (correct Cockpit format)
 if (typeof partner.logo === "object" && partner.logo.path) {
 return `${COCKPIT_BASE}/storage/uploads${partner.logo.path}`;
 }

 // CASE 2: String URL
 if (typeof partner.logo === "string") {
 // localhost fix → replace with production base
 if (partner.logo.includes("localhost")) {
 const filename = partner.logo.split("/uploads/")[1];
 return `${COCKPIT_BASE}/storage/uploads/${filename}`;
 }
 return partner.logo;
 }

 return "";
 }

 return (
 <section className="bg-[#F4F3EE]">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 lg:py-5">

 {/* Header Section */}
 <div className="mb-8 space-y-3">
 <div className="inline-flex items-center gap-2 bg-[#F5F5F5] border border-gray-200 rounded-full px-3 py-1">
 <span className="w-2 h-2 bg-[#C15F3C] rounded-full"></span>
 <span className="text-xs font-medium text-[#C15F3C]">Partners & Alliances</span>
 </div>
 <h2 className="text-2xl md:text-3xl font-semibold text-[#2F2E2B]">
 Industry leading partnerships
 </h2>
 <p className="text-sm text-[#6F6B63] max-w-2xl">
 We work with top Indian Institutions to further our shared mission of improving ease of doing business and promoting Entrepreneurship in India.
 </p>
 </div>

 {/* Partners Grid */}
 <div className="bg-white rounded-2xl border border-[#E5E2DA] p-6 md:p-8">
 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center">
 {partners.map((partner, idx) => {
 const logoUrl = getLogoUrl(partner);
 if (!logoUrl) return null;
 return (
 <div
 key={partner._id || idx}
 className="w-full flex items-center justify-center p-2 transition-all duration-200"
 >
 <img
 src={logoUrl}
 alt={partner.Name}
 className="max-h-12 object-contain opacity-80 hover:opacity-100 transition-opacity duration-200"
 />
 </div>
 );
 })}
 </div>
 </div>

 {/* Enterprise Partnership CTA */}
 <div className="mt-8 bg-white rounded-2xl border border-[#E5E2DA] overflow-hidden">
 <div className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-10">
 <div className="flex-1 text-center md:text-left">
 <div className="inline-flex items-center gap-2 bg-[#F5F5F5] border border-gray-200 rounded-full px-3 py-1 mb-4">
 <span className="w-2 h-2 bg-[#C15F3C] rounded-full"></span>
 <span className="text-xs font-medium text-[#C15F3C]">Enterprise Partnership</span>
 </div>
 <h3 className="text-xl md:text-2xl font-semibold text-[#2F2E2B] mb-3">
 Enterprise Partnership
 </h3>
 <p className="text-sm text-[#6F6B63] mb-6 leading-relaxed max-w-xl mx-auto md:mx-0">
 If you're an independent professional, firm, enterprise client,
 bank, or government organization, we invite you to reach out to
 our Enterprise Partnership Team.
 </p>
 <button className="px-6 py-2.5 bg-[#C15F3C] hover:bg-[#A94E30] text-white font-medium text-sm rounded-lg transition-all duration-200 shadow-sm hover:shadow-md">
 Get Started
 </button>
 </div>
 <div className="flex-1 flex justify-center md:justify-end">
 <div className="w-full max-w-xs bg-[#F9F9F9] rounded-xl border border-[#E5E2DA] p-2">
 <img
 src="/images/hero.webp"
 alt="Enterprise Partnership"
 className="w-full h-auto rounded-lg object-cover"
 />
 </div>
 </div>
 </div>
 </div>

 {/* Trust Badges */}
 <div className="mt-8 pb-0">
 <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#B1ADA1]">
 <div className="flex items-center gap-1.5">
 <svg className="w-4 h-4 fill-[#C15F3C] text-[#C15F3C]" viewBox="0 0 20 20">
 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
 </svg>
 <span>Trusted by 50,000+ startups</span>
 </div>
 <div className="flex items-center gap-1.5">
 <svg className="w-4 h-4 fill-[#C15F3C] text-[#C15F3C]" viewBox="0 0 20 20">
 <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
 </svg>
 <span>100% Secure & Compliant</span>
 </div>
 <div className="flex items-center gap-1.5">
 <svg className="w-4 h-4 fill-[#C15F3C] text-[#C15F3C]" viewBox="0 0 20 20">
 <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
 <circle cx="10" cy="10" r="3" />
 </svg>
 <span>Enterprise Ready</span>
 </div>
 </div>
 </div>
 </div>
 </section>
 );
}
