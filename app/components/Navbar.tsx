"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FiSearch, FiMenu, FiX, FiChevronDown, FiUser, FiLogIn } from "react-icons/fi";

/* ─── dropdown data ─── */
const STARTUP_COLS = [
 [
 { label: "Proprietorship", url: "/proprietorship" },
 { label: "Partnership", url: "/partnership" },
 { label: "One Person Company", url: "/one-person-company" },
 { label: "Limited Liability Partnership", url: "/llp-registartion" },
 { label: "Private Limited Company", url: "/company-registration" },
 ],
 [
 { label: "Section 8 Company", url: "/section-8-company-registration" },
 { label: "Trust Registration", url: "/trust-registration" },
 { label: "Public Limited Company", url: "/public-limited-company" },
 { label: "Producer Company", url: "/producer-company-registration" },
 { label: "Indian Subsidiary", url: "/indian-subsidiary" },
 ],
];

const REGISTRATIONS = [
 { label: "Startup India", url: "/start-up-india" },
 { label: "Trade License", url: "/trade-license" },
 { label: "FSSAI Registration", url: "/fssai" },
 { label: "FSSAI License", url: "/fssai-license" },
 { label: "Halal License & Certification", url: "/halal-certificate" },
 { label: "ICEGATE Registration", url: "/icegate-registration" },
 { label: "Import Export Code", url: "/import-export-code" },
 { label: "Legal Entity Identifier Code", url: "/lei-code" },
 { label: "ISO Registration", url: "/iso-registration" },
 { label: "PF Registration", url: "/pf-registration" },
 { label: "ESI Registration", url: "/esi-registration" },
 { label: "Professional Tax Registration", url: "/professional-tax-registration" },
 { label: "RCMC Registration", url: "/rcmc-registration" },
 { label: "TN RERA Registration for Agents", url: "/rera-registration-agents" },
 { label: "12A and 80G Registration", url: "/12a-80g-registration" },
 { label: "12A Registration", url: "/12a-registration" },
 { label: "80G Registration", url: "/80g-registration" },
 { label: "APEDA Registration", url: "/apeda-registration" },
 { label: "Barcode Registration", url: "/barcode-registration" },
 { label: "BIS Registration", url: "/bis-certification" },
 { label: "Certificate of Incumbency", url: "/certificate-incumbency" },
 { label: "Darpan Registration", url: "/darpan-registration" },
 { label: "Digital Signature", url: "/digital-signature" },
 { label: "Shop Act Registration", url: "/shop-establishment-act-registration" },
 { label: "Drug License", url: "/drug-license" },
 { label: "Udyam Registration", url: "/udyam-registration" },
 { label: "FCRA Registration", url: "/fcra-registration" },
 { label: "Fire License", url: "/fire-license" },
];

const TRADEMARK = [
 { label: "Trademark Registration", url: "/trademark-registration" },
 { label: "Trademark Objection", url: "/trademark-objection" },
 { label: "Trademark Certificate", url: "/trademark-registration-certificate" },
 { label: "Trademark Opposition", url: "/trademark-opposition" },
 { label: "Trademark Hearing", url: "/trademark-hearing" },
 { label: "Trademark Rectification", url: "/trademark-rectification" },
 { label: "TM Infringement Notice", url: "/trademark-infringement-notice" },
 { label: "Trademark Renewal", url: "/trademark-renewal" },
 { label: "Trademark Transfer", url: "/trademark-transfer" },
 { label: "Expedited TM Registration", url: "/expedited-tm-registration" },
 { label: "Logo Designing", url: "/logo-designing" },
 { label: "Design Registration", url: "/design-registration" },
 { label: "Design Objection", url: "/design-objection" },
 { label: "Copyright Registration", url: "/copyright-registration" },
 { label: "Copyright Objection", url: "/copyright-objection" },
 { label: "Patent Registration", url: "/patent-registration" },
 { label: "Trademark Protection", url: "/trademark-protection" },
];

const GST = [
 { label: "GST Registration", url: "/gst-registration" },
 { label: "GST Return Filing by Accountant", url: "/gst-return-filing" },
 { label: "GST NIL Return Filing", url: "/gst-return-filing-nil-filing" },
 { label: "GST E-Invoicing Software", url: "/gst-einvoice" },
 { label: "GST LUT Form", url: "/gst-lut" },
 { label: "GST Notice", url: "/gst-notice" },
 { label: "GST Annual Return Filing (GSTR-9)", url: "/gst-annual-return" },
 { label: "GST Registration for Foreigners", url: "/gst-registration-for-foreigners" },
 { label: "GST Invoicing & Filing Software", url: "/gst-software" },
 { label: "GST Amendment", url: "/gst-amendment" },
 { label: "GST Revocation", url: "/gst-revocation" },
 { label: "GSTR-10", url: "/gstr-10" },
 { label: "GST Software for Accountants", url: "/ledgers-pro" },
 { label: "Virtual Office + GSTIN", url: "/virtual-office" },
];

const INCOME_TAX = [
 { label: "Income Tax E-Filing", url: "/income-tax-efiling" },
 { label: "Business Tax Filing", url: "/business-tax-filing" },
 { label: "ITR-1 Return Filing", url: "/itr-1-return-filing" },
 { label: "ITR-2 Return Filing", url: "/itr-2-return-filing" },
 { label: "ITR-3 Return Filing", url: "/itr-3-return-filing" },
 { label: "ITR-4 Return Filing", url: "/itr-4-return-filing" },
 { label: "ITR-5 Return Filing", url: "/itr-5-return-filing" },
 { label: "ITR-6 Return Filing", url: "/itr-6-return-filing" },
 { label: "ITR-7 Return Filing", url: "/itr-7-return-filing" },
 { label: "15CA - 15CB Filing", url: "/15ca-15cb-filing" },
 { label: "TAN Registration", url: "/tan-registration" },
 { label: "TDS Return Filing", url: "/tds-return-filing" },
 { label: "Income Tax Notice", url: "/income-tax-notice" },
];

const MCA = [
 { label: "ADT-1 Filing", url: "/adt-1-filing" },
 { label: "AOA Amendment", url: "/aoa-amendment" },
 { label: "Authorized Capital Increase", url: "/authorized-capital-increase" },
 { label: "Commencement INC-20A", url: "/commencement-inc-20a" },
 { label: "Company Compliance", url: "/company-compliance" },
 { label: "Demat of Shares", url: "/demat-of-shares" },
 { label: "DIN eKYC Filing", url: "/din-ekyc-filing" },
 { label: "DIN Reactivation", url: "/din-reactivation" },
 { label: "Director Change", url: "/director-change" },
 { label: "Dormant Status Filing", url: "/dormant-status-filing" },
 { label: "DPT-3 Filing", url: "/dpt-3-filing" },
 { label: "LLP Compliance", url: "/llp-compliance" },
 { label: "LLP Form 11 Filing", url: "/llp-form-11-filing" },
 { label: "MOA Amendment", url: "/moa-amendment" },
 { label: "Name Change Company", url: "/name-change-company" },
 { label: "OPC Compliance", url: "/opc-compliance" },
 { label: "Registered Office Change", url: "/registered-office-change" },
 { label: "Remove Director", url: "/remove-director" },
 { label: "Share Transfer", url: "/share-transfer" },
 { label: "Winding Up LLP", url: "/winding-up-llp" },
 { label: "Windup Company", url: "/windup-company" },
];

const COMPLIANCE = [
 { label: "Bookkeeping", url: "/bookkeeping" },
 { label: "Business Plan", url: "/business-plan" },
 { label: "CA Support", url: "/ca-support" },
 { label: "ESI Return Filing", url: "/esi-return-filing" },
 { label: "FDI Filing RBI", url: "/fdi-filing-rbi" },
 { label: "FLA Return Filing", url: "/fla-return-filing" },
 { label: "FSSAI Renewal", url: "/fssai-renewal" },
 { label: "FSSAI Return Filing", url: "/fssai-return-filing" },
 { label: "HR Payroll", url: "/hr-payroll" },
 { label: "Partnership Compliance", url: "/partnership-compliance" },
 { label: "PF Return Filing", url: "/pf-return-filing" },
 { label: "Professional Tax Return Filing", url: "/professional-tax-return-filing" },
 { label: "Proprietorship Compliance", url: "/proprietorship-compliance" },
];

const CENTRAL_APPROVALS = [
  { label: "All Approvals", url: "/central-approvals" },
  { label: "Foreign Direct Investment (FDI)", url: "/fdi-filing-rbi" },
  { label: "PESO Approvals", url: "/central-approvals?type=peso" },
];

const STATE_APPROVALS = [
  { label: "Andaman and Nicobar Islands (UT)", url: "/state-approvals?state=an" },
  { label: "Andhra Pradesh", url: "/state-approvals?state=ap" },
  { label: "Arunachal Pradesh", url: "/state-approvals?state=ar" },
  { label: "Assam", url: "/state-approvals?state=as" },
  { label: "Bihar", url: "/state-approvals?state=br" },
  { label: "Chandigarh (UT)", url: "/state-approvals?state=ch" },
  { label: "Chhattisgarh", url: "/state-approvals?state=cg" },
  { label: "Dadra and Nagar Haveli (UT)", url: "/state-approvals?state=dn" },
  { label: "Daman and Diu (UT)", url: "/state-approvals?state=dd" },
  { label: "Delhi (UT)", url: "/state-approvals?state=dl" },
  { label: "Goa", url: "/state-approvals?state=ga" },
  { label: "Gujarat", url: "/state-approvals?state=gj" },
  { label: "Haryana", url: "/state-approvals?state=hr" },
  { label: "Himachal Pradesh", url: "/state-approvals?state=hp" },
  { label: "Jammu and Kashmir (UT)", url: "/state-approvals?state=jk" },
  { label: "Jharkhand", url: "/state-approvals?state=jh" },
  { label: "Karnataka", url: "/state-approvals?state=ka" },
  { label: "Kerala", url: "/state-approvals?state=kl" },
  { label: "Ladakh (UT)", url: "/state-approvals?state=ld" },
  { label: "Lakshadweep (UT)", url: "/state-approvals?state=ld" },
  { label: "Madhya Pradesh", url: "/state-approvals?state=mp" },
  { label: "Maharashtra", url: "/state-approvals?state=mh" },
  { label: "Manipur", url: "/state-approvals?state=mn" },
  { label: "Meghalaya", url: "/state-approvals?state=ml" },
  { label: "Mizoram", url: "/state-approvals?state=mz" },
  { label: "Nagaland", url: "/state-approvals?state=nl" },
  { label: "Odisha", url: "/state-approvals?state=or" },
  { label: "Puducherry (UT)", url: "/state-approvals?state=py" },
  { label: "Punjab", url: "/state-approvals?state=pb" },
  { label: "Rajasthan", url: "/state-approvals?state=rj" },
  { label: "Sikkim", url: "/state-approvals?state=sk" },
  { label: "Tamil Nadu", url: "/state-approvals?state=tn" },
  { label: "Telangana", url: "/state-approvals?state=tg" },
  { label: "Tripura", url: "/state-approvals?state=tr" },
  { label: "Uttar Pradesh", url: "/state-approvals?state=up" },
  { label: "Uttarakhand", url: "/state-approvals?state=uk" },
  { label: "West Bengal", url: "/state-approvals?state=wb" },
];

const GOVERNMENT_SCHEMES = [
  { label: "Ethanol Policy and Helpdesk", url: "/government-schemes?scheme=ethanol" },
  { label: "Indian Footwear and Leather Development Programme (IFLDP)", url: "/government-schemes?scheme=ifldp" },
  { label: "National Green Hydrogen Mission", url: "/government-schemes?scheme=hydrogen" },
  { label: "National Programme on High Efficiency Solar PV Modules under PLI scheme", url: "/government-schemes?scheme=solar-pv" },
  { label: "Vehicle Scrapping Policy", url: "/government-schemes?scheme=vehicle-scrapping" },
];

const NSWS = [
  { label: "Central Approvals", url: "/central-approvals", submenu: CENTRAL_APPROVALS },
  { label: "State Approvals", url: "/state-approvals", submenu: STATE_APPROVALS },
  { label: "Government Schemes", url: "/government-schemes", submenu: GOVERNMENT_SCHEMES },
];

const linkCls =
 "text-xs text-[#6F6B63] px-3 py-1.5 rounded-xl hover:bg-[#F4F3EE] hover:text-[#C15F3C] whitespace-normal transition-all duration-150 block";

/* ─── NavItem: single desktop menu item with hover-safe dropdown ─── */
function NavItem({
 label,
 children,
 panelStyle,
}: {
 label: string;
 children: React.ReactNode;
 panelStyle?: React.CSSProperties;
}) {
 const [open, setOpen] = useState(false);
 const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

 const handleMouseEnter = () => {
 if (closeTimer.current) clearTimeout(closeTimer.current);
 setOpen(true);
 };

 // Small delay on leave so the pointer can travel from trigger → panel
 const handleMouseLeave = () => {
 closeTimer.current = setTimeout(() => setOpen(false), 80);
 };

 return (
 <li
 className="relative shrink-0"
 onMouseEnter={handleMouseEnter}
 onMouseLeave={handleMouseLeave}
 >
 <span
 className="cursor-pointer px-2.5 py-2 text-[13px] font-medium transition-colors flex items-center gap-0.5 whitespace-nowrap select-none"
 style={{ color: open ? "#C15F3C" : "#2F2E2B" }}
 >
 {label}
 <FiChevronDown
 className="w-3 h-3 transition-transform duration-200"
 style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
 />
 </span>

 {open && (
 /* Bridge: invisible area between trigger and panel to keep hover alive */
 <div className="absolute top-full left-0 w-full h-2 z-[9998]" />
 )}

 {open && (
 <div
 className="absolute top-[calc(100%+8px)] bg-white rounded-2xl shadow-xl border border-[#E5E2DA] z-[9999] p-5"
 style={panelStyle}
 >
 {children}
 </div>
 )}
 </li>
 );
}

export default function Navbar() {
 const [mobileOpen, setMobileOpen] = useState(false);
 const [searchOpen, setSearchOpen] = useState(false);
 const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
 const [scrolled, setScrolled] = useState(false);

 useEffect(() => {
 const handleScroll = () => setScrolled(window.scrollY > 10);
 window.addEventListener("scroll", handleScroll);
 return () => window.removeEventListener("scroll", handleScroll);
 }, []);

 useEffect(() => {
 document.body.style.overflow = mobileOpen ? "hidden" : "";
 return () => { document.body.style.overflow = ""; };
 }, [mobileOpen]);

  const toggleMobileMenu = (name: string) =>
    setOpenMobileMenu(openMobileMenu === name ? null : name);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<{ label: string; url: string }[]>([]);

  // Collect all links into a single array for searching
  const ALL_LINKS = [
    ...STARTUP_COLS.flat(),
    ...REGISTRATIONS,
    ...TRADEMARK,
    ...GST,
    ...INCOME_TAX,
    ...MCA,
    ...COMPLIANCE,
    ...CENTRAL_APPROVALS,
    ...STATE_APPROVALS,
    ...GOVERNMENT_SCHEMES,
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.length > 0) {
      const filtered = ALL_LINKS.filter(link =>
        link.label.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filtered.slice(0, 10)); // Limit results
    } else {
      setSearchResults([]);
    }
  };

 return (
 <>
 <style dangerouslySetInnerHTML={{
 __html: `
 @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap');
 nav, nav * { font-family: 'Sora', sans-serif; }
` }} />

 <nav
 className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
 ? "bg-[#F4F3EE]/95 backdrop-blur-md shadow-md border-b border-[#E5E2DA]"
 : "bg-[#F4F3EE] border-b border-[#E5E2DA]"
 }`}
 >
 <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center h-16 lg:h-20 gap-3">

 {/* ── Logo ── */}
 <div className="shrink-0 group">
 <a href="/" className="relative flex items-center">
 <img
 src="/logo2.png"
 alt="doStartup"
 className="h-9 sm:h-10 w-auto transition-transform duration-300 group-hover:scale-105"
 />
 <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#C15F3C] to-[#A94E30] transition-all duration-300 group-hover:w-full" />
 </a>
 </div>

 {/* ── Desktop Nav ── */}
 <div className="hidden lg:flex flex-1 items-center" style={{ overflow: "visible" }}>
 <ul className="flex items-center list-none m-0 p-0" style={{ gap: 0 }}>

 {/* STARTUP */}
 <NavItem label="Startup" panelStyle={{ left: 0, width: "380px" }}>
 <div className="grid grid-cols-2 gap-x-5 gap-y-1">
 {STARTUP_COLS.map((col, ci) => (
 <div key={ci} className="flex flex-col space-y-1">
 {col.map((item) => (
 <Link key={item.url} href={item.url} className={linkCls}>{item.label}</Link>
 ))}
 </div>
 ))}
 </div>
 </NavItem>

 {/* REGISTRATIONS */}
 <NavItem
 label="Registrations"
 panelStyle={{ left: "50%", transform: "translateX(-40%)", width: "min(800px, calc(100vw - 2rem))" }}
 >
 <div
 className="grid gap-x-6 gap-y-1"
 style={{ gridTemplateRows: "repeat(7, auto)", gridAutoFlow: "column" }}
 >
 {REGISTRATIONS.map((item) => (
 <Link key={item.url} href={item.url} className={linkCls}>{item.label}</Link>
 ))}
 </div>
 </NavItem>

 {/* TRADEMARK */}
 <NavItem
 label="Trademark"
 panelStyle={{ left: "50%", transform: "translateX(-40%)", width: "min(560px, calc(100vw - 2rem))" }}
 >
 <div
 className="grid gap-x-6 gap-y-1"
 style={{ gridTemplateRows: "repeat(6, auto)", gridAutoFlow: "column" }}
 >
 {TRADEMARK.map((item) => (
 <Link key={item.url} href={item.url} className={linkCls}>{item.label}</Link>
 ))}
 </div>
 </NavItem>

 {/* GST */}
 <NavItem
 label="GST"
 panelStyle={{ left: "50%", transform: "translateX(-40%)", width: "min(480px, calc(100vw - 2rem))" }}
 >
 <div
 className="grid gap-x-6 gap-y-1"
 style={{ gridTemplateRows: "repeat(7, auto)", gridAutoFlow: "column" }}
 >
 {GST.map((item) => (
 <Link key={item.url} href={item.url} className={linkCls}>{item.label}</Link>
 ))}
 </div>
 </NavItem>

 {/* INCOME TAX */}
 <NavItem
 label="Income Tax"
 panelStyle={{ left: "50%", transform: "translateX(-40%)", width: "min(340px, calc(100vw - 2rem))" }}
 >
 <div
 className="grid gap-x-6 gap-y-1"
 style={{ gridTemplateRows: "repeat(7, auto)", gridAutoFlow: "column" }}
 >
 {INCOME_TAX.map((item) => (
 <Link key={item.url} href={item.url} className={linkCls}>{item.label}</Link>
 ))}
 </div>
 </NavItem>

 {/* MCA */}
 <NavItem
 label="MCA"
 panelStyle={{ left: "50%", transform: "translateX(-50%)", width: "min(760px, calc(100vw - 2rem))" }}
 >
 <div className="grid grid-cols-3 gap-x-8 gap-y-1">
 {MCA.map((item) => (
 <Link key={item.url} href={item.url} className={linkCls}>{item.label}</Link>
 ))}
 </div>
 </NavItem>

 {/* COMPLIANCE */}
 <NavItem
 label="Compliance"
 panelStyle={{ left: "50%", transform: "translateX(-45%)", width: "min(760px, calc(100vw - 2rem))" }}
 >
 <div className="grid grid-cols-3 gap-x-8 gap-y-1">
 {COMPLIANCE.map((item) => (
 <Link key={item.url} href={item.url} className={linkCls}>{item.label}</Link>
 ))}
 </div>
 </NavItem>

 {/* NSWS */}
 <NavItem
 label="NSWS"
 panelStyle={{ right: 0, left: "auto", width: "min(500px, calc(100vw - 2rem))" }}
 >
 <div className="grid grid-cols-1 gap-1">
 {NSWS.map((item) => {
 const [submenuOpen, setSubmenuOpen] = useState(false);
 const submenuTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

 const handleMouseEnter = () => {
 if (submenuTimer.current) clearTimeout(submenuTimer.current);
 setSubmenuOpen(true);
 };

 const handleMouseLeave = () => {
 submenuTimer.current = setTimeout(() => setSubmenuOpen(false), 80);
 };

 return (
 <div
 key={item.url}
 className="relative"
 onMouseEnter={handleMouseEnter}
 onMouseLeave={handleMouseLeave}
 >
 <button
 className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-[#F4F3EE] transition-all duration-200 text-left"
 style={{ 
 color: submenuOpen ? "#C15F3C" : "#2F2E2B",
 backgroundColor: submenuOpen ? "#F4F3EE" : "transparent"
 }}
 >
 <div className="flex-1">
 <div className="text-[12px] font-semibold transition-colors uppercase tracking-tight">
 {item.label}
 </div>
 {item.label !== "State Approvals" && (
 <div className="text-[10px] text-[#9D9690] mt-0.5 leading-tight">
 {item.label === "Central Approvals" && "Issued by Ministries of Govt. of India"}
 {item.label === "Government Schemes" && "Avail the benefits by Govt. of India"}
 </div>
 )}
 </div>
 </button>
 
 {/* Invisible bridge to keep hover alive */}
 {submenuOpen && item.submenu && (
 <div className="absolute top-full left-0 w-full h-2 z-[9998]" />
 )}
 
 {/* Submenu that appears on hover */}
 {submenuOpen && item.submenu && (
 <div 
 className="absolute left-full top-0 bg-white rounded-lg shadow-lg border border-[#E5E2DA] ml-2 z-[9999] min-w-max"
 style={{
 maxHeight: item.label === "State Approvals" ? "300px" : "auto",
 overflowY: item.label === "State Approvals" ? "auto" : "visible",
 scrollbarWidth: "none",
 msOverflowStyle: "none"
 }}
 >
 <style>{`
 div[style*="overflow-y: auto"]::-webkit-scrollbar {
 display: none;
 }
 `}</style>
 {item.submenu.map((subitem) => (
 <Link
 key={subitem.url}
 href={subitem.url}
 className="text-xs text-[#6F6B63] px-3 py-1.5 rounded-xl hover:bg-[#F4F3EE] hover:text-[#C15F3C] whitespace-normal transition-all duration-150 block"
 >
 {subitem.label}
 </Link>
 ))}
 </div>
 )}
 </div>
 );
 })}
 </div>
 </NavItem>

 {/* WE ARE HIRING */}
 <li className="shrink-0 ml-1">
 <Link
 href="/hiring"
 className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[12px] font-semibold whitespace-nowrap transition-all duration-200"
 style={{
 background: "#FDF1EC",
 borderColor: "rgba(193,95,60,0.3)",
 color: "#C15F3C",
 }}
 onMouseOver={(e) => {
 e.currentTarget.style.background = "#C15F3C";
 e.currentTarget.style.color = "#fff";
 }}
 onMouseOut={(e) => {
 e.currentTarget.style.background = "#FDF1EC";
 e.currentTarget.style.color = "#C15F3C";
 }}
 >
 <span className="relative flex h-1.5 w-1.5 shrink-0">
 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C15F3C] opacity-75" />
 <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#C15F3C]" />
 </span>
 We&apos;re hiring
 </Link>
 </li>

 </ul>
 </div>

 {/* ── Right Actions ── */}
 <div className="flex items-center gap-1 shrink-0 ml-auto">
 {searchOpen ? (
 <div className="relative">
 <div className="flex items-center bg-white rounded-lg border border-[#E5E2DA] overflow-hidden shadow-md focus-within:ring-1 focus-within:ring-[#C15F3C] w-48 sm:w-64">
 <input
 autoFocus
 type="text"
 value={searchQuery}
 onChange={handleSearch}
 placeholder="Search services..."
 className="text-sm px-3 py-2 outline-none bg-transparent flex-1 text-[#2F2E2B] placeholder-[#B1ADA1]"
 />
 <button
 className="px-2 py-2 text-[#B1ADA1] hover:text-[#C15F3C] transition-colors"
 onClick={() => {
 setSearchOpen(false);
 setSearchResults([]);
 setSearchQuery("");
 }}
 >
 <FiX size={15} />
 </button>
 </div>
 
 {/* Search Results Dropdown */}
 {searchResults.length > 0 && (
 <div className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-2xl border border-[#E5E2DA] overflow-hidden z-[9999]">
 <div className="p-2 space-y-0.5">
 {searchResults.map((result, idx) => (
 <Link 
 key={idx} 
 href={result.url}
 className="block px-3 py-2 text-xs text-[#2F2E2B] hover:bg-[#F4F3EE] hover:text-[#C15F3C] rounded-lg transition-colors"
 onClick={() => {
 setSearchOpen(false);
 setSearchResults([]);
 setSearchQuery("");
 }}
 >
 {result.label}
 </Link>
 ))}
 </div>
 </div>
 )}
 </div>
 ) : (
 <button
 className="p-2 rounded-lg text-[#6F6B63] hover:text-[#C15F3C] hover:bg-[#F4F3EE] transition-all duration-200"
 onClick={() => setSearchOpen(true)}
 >
 <FiSearch size={17} />
 </button>
 )}

 <Link href="/login" className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-lg text-[13px] font-medium text-[#6F6B63] hover:text-[#C15F3C] hover:bg-[#F4F3EE] transition-all duration-200 whitespace-nowrap">
 <FiUser size={15} /> Login
 </Link>

 <Link href="/signup"
 className="hidden sm:block px-4 py-2 rounded-lg text-[13px] font-semibold text-white transition-all duration-200 shadow-sm whitespace-nowrap"
 style={{ background: "#C15F3C" }}
 onMouseOver={(e) => (e.currentTarget.style.background = "#A94E30")}
 onMouseOut={(e) => (e.currentTarget.style.background = "#C15F3C")}
 >
 Sign up
 </Link>

 <button
 className="lg:hidden p-2 rounded-lg text-[#6F6B63] hover:text-[#C15F3C] hover:bg-[#F4F3EE] transition-all duration-200"
 onClick={() => setMobileOpen(!mobileOpen)}
 >
 {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
 </button>
 </div>
 </div>

 {/* ── Mobile Drawer ── */}
 <div
 className={`lg:hidden fixed inset-x-0 top-16 bottom-0 bg-[#F4F3EE] border-t border-[#E5E2DA] overflow-y-auto overflow-x-hidden transform transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "translate-x-full"
 }`}
 >
 <div className="p-4 space-y-4">
 {/* Login / Signup */}
 <div className="flex gap-3">
 <Link href="/login" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-[#E5E2DA] text-[#6F6B63] hover:text-[#C15F3C] hover:border-[#C15F3C] transition-all duration-200">
 <FiLogIn size={16} /> Login
 </Link>
 <Link href="/signup" className="flex-1 px-4 py-3 rounded-lg font-semibold text-white shadow-sm transition-all duration-200"
 style={{ background: "#C15F3C" }}
 onMouseOver={(e) => (e.currentTarget.style.background = "#A94E30")}
 onMouseOut={(e) => (e.currentTarget.style.background = "#C15F3C")}
 >
 Sign up
 </Link>
 </div>

 {/* Search */}
 <div className="relative">
 <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#B1ADA1]" size={16} />
 <input
 type="text"
 placeholder="Search services..."
 className="w-full pl-10 pr-4 py-3 bg-white border border-[#E5E2DA] rounded-lg text-sm text-[#2F2E2B] placeholder-[#B1ADA1] focus:outline-none focus:ring-1 focus:ring-[#C15F3C]"
 />
 </div>

 {/* Accordion items */}
 <div className="space-y-1">
 {(
 [
 { name: "startup", label: "Startup", links: STARTUP_COLS.flat() },
 { name: "registrations", label: "Registrations", links: REGISTRATIONS },
 { name: "trademark", label: "Trademark", links: TRADEMARK },
 { name: "gst", label: "GST", links: GST },
 { name: "incometax", label: "Income Tax", links: INCOME_TAX },
 { name: "mca", label: "MCA", links: MCA },
 { name: "compliance", label: "Compliance", links: COMPLIANCE },
 { 
   name: "nsws", 
   label: "NSWS", 
   links: NSWS.flatMap(item => [item, ...(item.submenu || [])])
 },
 { name: "hiring", label: "We are hiring", links: [], isHiring: true },
 ] as {
 name: string;
 label: string;
 links: { label: string; url: string }[];
 isHiring?: boolean;
 }[]
 ).map(({ name, label, links, isHiring }) => (
 <div key={name} className="border-b border-[#E5E2DA] last:border-0">
 {isHiring ? (
 <Link
 href="/hiring"
 className="w-full flex items-center justify-between py-4 text-left font-semibold text-[#2F2E2B] hover:text-[#C15F3C] transition-colors"
 onClick={() => setMobileOpen(false)}
 >
 {label}
 <span className="relative flex h-2 w-2">
 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C15F3C] opacity-75" />
 <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C15F3C]" />
 </span>
 </Link>
 ) : (
 <>
 <button
 className="w-full flex items-center justify-between py-4 text-left font-semibold text-[#2F2E2B] hover:text-[#C15F3C] transition-colors"
 onClick={() => toggleMobileMenu(name)}
 >
 {label}
 <FiChevronDown
 className={`w-4 h-4 transition-transform duration-200 ${openMobileMenu === name ? "rotate-180" : ""
 }`}
 />
 </button>
 {openMobileMenu === name && (
 <div className="pb-3 grid grid-cols-2 gap-2">
 {links.map((item, idx) => (
 <Link
 key={idx}
 href={item.url}
 className="px-3 py-2 text-xs text-[#6F6B63] rounded-lg hover:bg-white hover:text-[#C15F3C] transition-all duration-150 break-words"
 onClick={() => setMobileOpen(false)}
 >
 {item.label}
 </Link>
 ))}
 </div>
 )}
 </>
 )}
 </div>
 ))}
 </div>

 {/* Trust Badges */}
 <div className="mt-2 pb-0 pt-4">
 <div className="flex items-center justify-center gap-4 text-xs text-[#B1ADA1]">
 <div className="flex items-center gap-1">
 <svg className="w-4 h-4 fill-[#C15F3C]" viewBox="0 0 20 20">
 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
 </svg>
 <span>Trusted by 50,000+ startups</span>
 </div>
 <div className="flex items-center gap-1">
 <svg className="w-4 h-4 fill-[#C15F3C]" viewBox="0 0 20 20">
 <path
 fillRule="evenodd"
 d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
 clipRule="evenodd"
 />
 </svg>
 <span>100% Secure & Compliant</span>
 </div>
 </div>
 </div>
 </div>
 </div>
 </nav>
 </>
 );
}