"use client";

import { useEffect, useState } from "react";
import {
 Briefcase,
 Stamp,
 Calculator,
 FileText,
 Receipt,
 Wallet,
 ArrowRight,
} from "lucide-react";

const ICON_MAP: any = {
 Briefcase,
 Stamp,
 Calculator,
 FileText,
 Receipt,
 Wallet,
};

const TOKEN = "API-d969d00908e5d49261dc97c71fdd75794712b377";
const API = `https://cms.dostartup.in/api/content/items/service?token=${TOKEN}`;

export default function ServicesSection() {
 const [services, setServices] = useState<any[]>([]);
 const [title, setTitle] = useState("Our Services");
 const [description, setDescription] = useState(
 "Explore our professional solutions designed to help your business grow."
 );
 const [loading, setLoading] = useState(true);
 const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

 useEffect(() => {
 async function fetchServices() {
 try {
 const res = await fetch(API);
 const json = await res.json();
 if (Array.isArray(json)) {
 setServices(json);
 if (json[0]?.sectionTitle) setTitle(json[0].sectionTitle);
 if (json[0]?.sectionDescription) setDescription(json[0].sectionDescription);
 }
 } catch (err) {
 console.error("Cockpit services fetch error:", err);
 } finally {
 setLoading(false);
 }
 }
 fetchServices();
 }, []);

 if (loading) {
 return (
 <section style={{ background: "#F4F3EE" }} className="py-5">
 <div className="max-w-7xl mx-auto px-4 sm:px-6">
 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
 {[...Array(6)].map((_, i) => (
 <div
 key={i}
 className="rounded-2xl animate-pulse"
 style={{ background: "#E5E2DA", height: "120px" }}
 />
 ))}
 </div>
 </div>
 </section>
 );
 }

 return (
 <>
 <style jsx global>{`
 @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap');

 .service-card-line {
 width: 0;
 height: 2px;
 background: #C15F3C;
 transition: width 0.3s ease;
 margin-top: 8px;
 border-radius: 99px;
 }
 .service-card:hover .service-card-line {
 width: 28px;
 }

 .service-icon-wrap {
 transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
 background 0.2s ease,
 box-shadow 0.2s ease;
 }
 .service-card:hover .service-icon-wrap {
 transform: translateY(-3px) scale(1.08);
 box-shadow: 0 6px 18px rgba(193,95,60,0.18);
 }

 .star-fill { fill: #C15F3C; color: #C15F3C; }
 `}</style>

 <section style={{ background: "#F4F3EE" }} className="py-3 sm:py-5">
 <div className="max-w-7xl mx-auto px-4 sm:px-6">

 {/* ── HEADER ─────────────────────────────────── */}
 <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
 <div>
 {/* Badge */}
 <span
 className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-3"
 style={{
 background: "#fff",
 border: "1px solid #E5E2DA",
 }}
 >
 <span
 className="w-2 h-2 rounded-full animate-pulse"
 style={{ background: "#C15F3C" }}
 />
 <span
 className="text-xs font-semibold uppercase"
 style={{ color: "#C15F3C", fontFamily: "'Sora', sans-serif" }}
 >
 What We Offer
 </span>
 </span>

 <h2
 className="text-2xl md:text-3xl font-semibold leading-tight"
 style={{ color: "#2F2E2B", fontFamily: "'Sora', sans-serif" }}
 >
 {title}
 </h2>
 <p className="mt-1.5 text-sm max-w-lg" style={{ color: "#6F6B63" }}>
 {description}
 </p>
 </div>


 </div>

 {/* ── SERVICES GRID ──────────────────────────── */}
 <div
 className="rounded-2xl p-5 sm:p-6"
 style={{
 background: "#fff",
 border: "1px solid #E5E2DA",
 boxShadow: "0 2px 16px rgba(47,46,43,0.06)",
 }}
 >
 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
 {services.map((service: any, idx: number) => {
 const iconName = service.icon || service.ICON;
 const serviceName = service.name || service.NAME;
 const Icon = ICON_MAP[iconName];
 const isHovered = hoveredIdx === idx;

 return (
 <div
 key={service._id || idx}
 className="service-card group flex flex-col items-center text-center cursor-pointer rounded-xl py-5 px-3 transition-all duration-200"
 style={{
 background: isHovered ? "#F4F3EE" : "transparent",
 border: isHovered ? "1px solid #E5E2DA" : "1px solid transparent",
 }}
 onMouseEnter={() => setHoveredIdx(idx)}
 onMouseLeave={() => setHoveredIdx(null)}
 >
 {/* Icon */}
 {Icon && (
 <div
 className="service-icon-wrap w-12 h-12 rounded-full flex items-center justify-center mb-3"
 style={{
 background: isHovered ? "#fff" : "#F4F3EE",
 border: "1px solid #E5E2DA",
 color: "#C15F3C",
 }}
 >
 <Icon size={20} />
 </div>
 )}

 {/* Label */}
 <span
 className="text-xs sm:text-sm font-medium leading-snug transition-colors duration-200"
 style={{
 color: isHovered ? "#C15F3C" : "#2F2E2B",
 fontFamily: "'Sora', sans-serif",
 }}
 >
 {serviceName}
 </span>

 {/* Animated underline */}
 <div className="service-card-line" />
 </div>
 );
 })}
 </div>
 </div>

 {/* ── BOTTOM STRIP ───────────────────────────── */}
 <div
 className="mt-5 rounded-2xl px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
 style={{ background: "#fff", border: "1px solid #E5E2DA" }}
 >
 {/* Stars + Reviews */}
 <div className="flex items-center gap-2">
 <div className="flex items-center gap-0.5">
 {[...Array(5)].map((_, i) => (
 <svg key={i} className="star-fill" width="14" height="14" viewBox="0 0 20 20">
 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
 </svg>
 ))}
 </div>
 <span className="text-xs font-semibold" style={{ color: "#2F2E2B" }}>4.9</span>
 <span className="text-xs" style={{ color: "#B1ADA1" }}>· 2,400+ happy clients</span>
 </div>

 {/* CTA */}
 <div className="flex items-center gap-3">
 <span className="text-xs" style={{ color: "#6F6B63" }}>
 Not sure which service fits?
 </span>
 <a
 href="#"
 className="inline-flex items-center gap-1.5 text-xs font-semibold rounded-lg px-3.5 py-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1"
 style={{
 background: "#C15F3C",
 color: "#fff",
 fontFamily: "'Sora', sans-serif",
 }}
 onMouseOver={(e) => (e.currentTarget.style.background = "#A94E30")}
 onMouseOut={(e) => (e.currentTarget.style.background = "#C15F3C")}
 >
 Talk to an Expert
 <ArrowRight size={12} />
 </a>
 </div>
 </div>

 </div>
 </section>
 </>
 );
}