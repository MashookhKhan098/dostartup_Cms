"use client";

import { Bell, CalendarDays, ArrowRight, Clock } from "lucide-react";
import { useEffect, useState } from "react";

const UPDATES_API = "https://cms.dostartup.in/api/content/items/update";
const DUEDATE_API = "https://cms.dostartup.in/api/content/items/duedate";

function formatDate(dateStr: string) {
 if (!dateStr) return "";
 const d = new Date(dateStr);
 if (isNaN(d.getTime())) return dateStr;
 return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

function getDaysLeft(dateStr: string): number | null {
 if (!dateStr) return null;
 const due = new Date(dateStr);
 if (isNaN(due.getTime())) return null;
 const now = new Date();
 const diff = Math.ceil((due.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
 return diff;
}

function DaysLeftBadge({ days }: { days: number | null }) {
 if (days === null) return null;
 const isUrgent = days <= 7;
 const isSoon = days <= 30;
 return (
 <span
 className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold"
 style={{
 background: isUrgent ? "#FEE2E2" : isSoon ? "#FEF9C3" : "#F4F3EE",
 color: isUrgent ? "#B91C1C" : isSoon ? "#92400E" : "#6F6B63",
 border: `1px solid ${isUrgent ? "#FECACA" : isSoon ? "#FDE68A" : "#E5E2DA"}`,
 }}
 >
 <Clock size={9} />
 {days < 0 ? "Overdue" : days === 0 ? "Today" : `${days}d left`}
 </span>
 );
}

export default function UpdatesAndDueDates() {
 const [updates, setUpdates] = useState<any[]>([]);
 const [dueDates, setDueDates] = useState<any[]>([]);

 useEffect(() => {
 fetchUpdates();
 fetchDueDates();
 }, []);

 async function fetchUpdates() {
 try {
 const res = await fetch(UPDATES_API, { cache: "no-store" });
 const data = await res.json();
 if (!Array.isArray(data)) return;
 const sorted = data.sort(
 (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
 );
 setUpdates(sorted);
 } catch (error) {
 console.error("Updates fetch error:", error);
 }
 }

 async function fetchDueDates() {
 try {
 const res = await fetch(DUEDATE_API, { cache: "no-store" });
 const data = await res.json();
 if (!Array.isArray(data)) return;
 const sorted = data.sort(
 (a, b) => new Date(a["due-date"]).getTime() - new Date(b["due-date"]).getTime()
 );
 setDueDates(sorted);
 } catch (error) {
 console.error("DueDates fetch error:", error);
 }
 }

 return (
 <>
 <style jsx global>{`
 @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap');

 .timeline-scroll::-webkit-scrollbar { width: 4px; }
 .timeline-scroll::-webkit-scrollbar-track { background: transparent; }
 .timeline-scroll::-webkit-scrollbar-thumb {
 background: #E5E2DA;
 border-radius: 99px;
 }

 .timeline-item {
 transition: background 0.18s ease;
 }
 .timeline-item:hover {
 background: #F4F3EE;
 }

 .dot-pulse {
 animation: pulse-ring 2s ease-out infinite;
 }
 @keyframes pulse-ring {
 0% { box-shadow: 0 0 0 0 rgba(193,95,60,0.35); }
 70% { box-shadow: 0 0 0 6px rgba(193,95,60,0); }
 100% { box-shadow: 0 0 0 0 rgba(193,95,60,0); }
 }
 `}</style>

 <section style={{ background: "#F4F3EE" }} className="py-3 sm:py-5">
 <div className="max-w-7xl mx-auto px-4 sm:px-6">

 {/* Section header */}
 <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
 <div>
 <span
 className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-2"
 style={{ background: "#fff", border: "1px solid #E5E2DA" }}
 >
 <span className="w-2 h-2 rounded-full" style={{ background: "#C15F3C" }} />
 <span
 className="text-xs font-semibold uppercase"
 style={{ color: "#C15F3C", fontFamily: "'Sora', sans-serif" }}
 >
 Stay Informed
 </span>
 </span>
 <h2
 className="text-2xl md:text-3xl font-semibold"
 style={{ color: "#2F2E2B", fontFamily: "'Sora', sans-serif" }}
 >
 Updates & Compliance Tracker
 </h2>
 <p className="text-sm mt-1" style={{ color: "#6F6B63" }}>
 Latest regulatory alerts and upcoming filing deadlines, all in one place.
 </p>
 </div>
 </div>

 {/* Two-column grid */}
 <div className="grid md:grid-cols-2 gap-5">

 {/* ── UPDATES & ALERTS ────────────────────────────── */}
 <div
 className="rounded-2xl overflow-hidden flex flex-col"
 style={{
 background: "#fff",
 border: "1px solid #E5E2DA",
 boxShadow: "0 2px 16px rgba(47,46,43,0.06)",
 }}
 >
 {/* Card header */}
 <div
 className="flex items-center justify-between px-5 py-4"
 style={{ borderBottom: "1px solid #E5E2DA" }}
 >
 <div className="flex items-center gap-2.5">
 <div
 className="w-8 h-8 rounded-full flex items-center justify-center"
 style={{ background: "#F4F3EE", border: "1px solid #E5E2DA" }}
 >
 <Bell size={15} style={{ color: "#C15F3C" }} />
 </div>
 <span
 className="font-semibold text-base"
 style={{ color: "#2F2E2B", fontFamily: "'Sora', sans-serif" }}
 >
 Updates & Alerts
 </span>
 </div>
 {updates.length > 0 && (
 <span
 className="text-xs font-semibold rounded-full px-2.5 py-1"
 style={{ background: "#F4F3EE", color: "#C15F3C", border: "1px solid #E5E2DA" }}
 >
 {updates.length} new
 </span>
 )}
 </div>

 {/* Scrollable list */}
 <div className="timeline-scroll overflow-y-auto flex-1 px-4 py-3 space-y-1" style={{ maxHeight: "280px" }}>
 {updates.length === 0 ? (
 <p className="text-sm text-center py-3" style={{ color: "#B1ADA1" }}>
 No updates available
 </p>
 ) : (
 updates.map((item, idx) => (
 <div
 key={item._id || idx}
 className="timeline-item relative pl-5 rounded-xl cursor-pointer"
 style={{ padding: "10px 12px 10px 20px" }}
 >
 {/* Timeline line */}
 {idx < updates.length - 1 && (
 <div
 className="absolute left-[7px] top-5 bottom-0 w-px"
 style={{ background: "#E5E2DA" }}
 />
 )}
 {/* Dot */}
 <div
 className={`absolute left-[3px] top-3.5 w-2 h-2 rounded-full ${idx === 0 ? "dot-pulse" : ""}`}
 style={{ background: "#C15F3C" }}
 />

 <div className="flex flex-col gap-1 pl-3">
 <p
 className="text-sm font-medium leading-snug"
 style={{ color: "#2F2E2B", fontFamily: "'Sora', sans-serif" }}
 >
 {item.titile}
 </p>
 <div className="flex items-center gap-2 flex-wrap">
 <span className="text-xs" style={{ color: "#B1ADA1" }}>
 {formatDate(item.publishedDate)}
 </span>
 {item.tag && (
 <span
 className="inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold"
 style={{ background: "#F4F3EE", color: "#C15F3C", border: "1px solid #E5E2DA" }}
 >
 {item.tag}
 </span>
 )}
 </div>
 </div>
 </div>
 ))
 )}
 </div>

 {/* Footer */}
 <div
 className="px-5 py-3 flex items-center justify-end"
 style={{ borderTop: "1px solid #E5E2DA" }}
 >

 </div>
 </div>

 {/* ── DUE DATES ───────────────────────────────────── */}
 <div
 className="rounded-2xl overflow-hidden flex flex-col"
 style={{
 background: "#fff",
 border: "1px solid #E5E2DA",
 boxShadow: "0 2px 16px rgba(47,46,43,0.06)",
 }}
 >
 {/* Card header */}
 <div
 className="flex items-center justify-between px-5 py-4"
 style={{ borderBottom: "1px solid #E5E2DA" }}
 >
 <div className="flex items-center gap-2.5">
 <div
 className="w-8 h-8 rounded-full flex items-center justify-center"
 style={{ background: "#F4F3EE", border: "1px solid #E5E2DA" }}
 >
 <CalendarDays size={15} style={{ color: "#C15F3C" }} />
 </div>
 <span
 className="font-semibold text-base"
 style={{ color: "#2F2E2B", fontFamily: "'Sora', sans-serif" }}
 >
 Due Dates
 </span>
 </div>
 {dueDates.length > 0 && (
 <span
 className="text-xs font-semibold rounded-full px-2.5 py-1"
 style={{ background: "#FEE2E2", color: "#B91C1C", border: "1px solid #FECACA" }}
 >
 {dueDates.filter(d => {
 const days = getDaysLeft(d["due-date"]);
 return days !== null && days <= 30;
 }).length} upcoming
 </span>
 )}
 </div>

 {/* Scrollable list */}
 <div className="timeline-scroll overflow-y-auto flex-1 px-4 py-3 space-y-1" style={{ maxHeight: "280px" }}>
 {dueDates.length === 0 ? (
 <p className="text-sm text-center py-3" style={{ color: "#B1ADA1" }}>
 No due dates available
 </p>
 ) : (
 dueDates.map((item, idx) => {
 const daysLeft = getDaysLeft(item["due-date"]);
 return (
 <div
 key={item._id || idx}
 className="timeline-item relative rounded-xl cursor-pointer"
 style={{ padding: "10px 12px 10px 20px" }}
 >
 {/* Timeline line */}
 {idx < dueDates.length - 1 && (
 <div
 className="absolute left-[7px] top-5 bottom-0 w-px"
 style={{ background: "#E5E2DA" }}
 />
 )}
 {/* Dot */}
 <div
 className="absolute left-[3px] top-3.5 w-2 h-2 rounded-full"
 style={{
 background:
 daysLeft !== null && daysLeft <= 7
 ? "#EF4444"
 : daysLeft !== null && daysLeft <= 30
 ? "#F59E0B"
 : "#C15F3C",
 }}
 />

 <div className="flex items-start justify-between gap-2 pl-3">
 <div className="flex flex-col gap-1">
 <p
 className="text-sm font-medium leading-snug"
 style={{ color: "#2F2E2B", fontFamily: "'Sora', sans-serif" }}
 >
 {item.title}
 </p>
 <span className="text-xs" style={{ color: "#B1ADA1" }}>
 {formatDate(item["due-date"])}
 </span>
 </div>
 <DaysLeftBadge days={daysLeft} />
 </div>
 </div>
 );
 })
 )}
 </div>

 {/* Footer */}
 <div
 className="px-5 py-3 flex items-center justify-end"
 style={{ borderTop: "1px solid #E5E2DA" }}
 >

 </div>
 </div>

 </div>

 {/* Bottom trust strip */}
 <div
 className="mt-5 rounded-2xl px-5 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3"
 style={{ background: "#fff", border: "1px solid #E5E2DA" }}
 >
 {/* <div className="flex items-center gap-2">
 <div className="flex items-center gap-0.5">
 {[...Array(5)].map((_, i) => (
 <svg key={i} width="13" height="13" viewBox="0 0 20 20" style={{ fill: "#C15F3C" }}>
 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
 </svg>
 ))}
 </div>
 <span className="text-xs font-semibold" style={{ color: "#2F2E2B" }}>4.9</span>
 <span className="text-xs" style={{ color: "#B1ADA1" }}>· Trusted by 10,000+ businesses across India</span>
 </div> */}
 <span
 className="inline-flex items-center gap-1.5 text-xs font-semibold"
 style={{ color: "#C15F3C", fontFamily: "'Sora', sans-serif" }}
 >
 <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#C15F3C" }} />
 Updated Daily by Our Compliance Team
 </span>
 </div>

 </div>
 </section>
 </>
 );
}