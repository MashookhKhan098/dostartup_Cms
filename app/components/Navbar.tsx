"use client";
import Link from "next/link";
import { useState } from "react";
import { FiSearch, FiMenu, FiX, FiChevronDown } from "react-icons/fi";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  // const [openMobileMenu, setOpenMobileMenu] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);

  const toggleMobileMenu = (name: string) => {
    setOpenMobileMenu(openMobileMenu === name ? null : name);
  };

  return (
    <nav className="border-b relative z-50" style={{ backgroundColor: "#F4F3EE" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

        {/* Left: Logo (no background) + Desktop Links */}
        <div className="flex items-center">
          <div className="flex items-center shrink-0">
            <img src="/logo2.png" alt="doStartup" className="h-9 sm:h-10 w-auto" />
          </div>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center space-x-5 xl:space-x-6 px-4 text-sm font-semibold" style={{ color: "#3d3a35" }}>

            {/* STARTUP */}
            <li className="relative group">
              <span className="relative cursor-pointer transition-colors duration-200 hover:text-[#C15F3C] after:content-[''] after:block after:h-0.5 after:w-0 after:bg-[#C15F3C] after:transition-all after:duration-300 group-hover:after:w-full after:absolute after:-bottom-1 after:left-0 whitespace-nowrap">
                Startup
              </span>
              <div className="absolute top-full left-0 mt-2 border border-[#B1ADA1]/30 shadow-lg rounded-xl w-[360px] p-4 grid grid-cols-2 gap-x-5 gap-y-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200" style={{ backgroundColor: "#F4F3EE" }}>
                {[[
                  { label: "Proprietorship", url: "/proprietorship" },
                  { label: "Partnership", url: "/partnership" },
                  { label: "One Person Company", url: "/one-person-company" },
                  { label: "Limited Liability Partnership", url: "/llp-registartion" },
                  { label: "Private Limited Company", url: "/company-registration" },
                ], [
                  { label: "Section 8 Company", url: "/section-8-company-registration" },
                  { label: "Trust Registration", url: "/trust-registration" },
                  { label: "Public Limited Company", url: "/public-limited-company" },
                  { label: "Producer Company", url: "/producer-company-registration" },
                  { label: "Indian Subsidiary", url: "/indian-subsidiary" },
                ]].map((col, ci) => (
                  <div key={ci} className="flex flex-col space-y-1">
                    {col.map((item, idx) => (
                      <Link key={idx} href={item.url} className="w-full text-xs font-normal text-gray-700 px-2 py-1.5 rounded-lg hover:bg-[#B1ADA1]/20 hover:text-[#C15F3C] whitespace-nowrap block transition-colors duration-150">{item.label}</Link>
                    ))}
                  </div>
                ))}
              </div>
            </li>

            {/* REGISTRATIONS */}
            <li className="relative group">
              <span className="relative cursor-pointer transition-colors duration-200 hover:text-[#C15F3C] after:content-[''] after:block after:h-0.5 after:w-0 after:bg-[#C15F3C] after:transition-all after:duration-300 group-hover:after:w-full after:absolute after:-bottom-1 after:left-0 whitespace-nowrap">Registrations</span>
              <div className="absolute top-full left-0 mt-2 border border-[#B1ADA1]/30 shadow-lg rounded-xl w-[760px] p-4 grid grid-rows-7 grid-flow-col gap-x-5 gap-y-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200" style={{ backgroundColor: "#F4F3EE" }}>
                {[
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
                ].map((item, idx) => (
                  <Link key={idx} href={item.url} className="text-xs font-normal text-gray-700 px-2 py-1.5 rounded-lg hover:bg-[#B1ADA1]/20 hover:text-[#C15F3C] whitespace-nowrap block transition-colors duration-150">{item.label}</Link>
                ))}
              </div>
            </li>

            {/* TRADEMARK */}
            <li className="relative group">
              <span className="relative cursor-pointer transition-colors duration-200 hover:text-[#C15F3C] after:content-[''] after:block after:h-0.5 after:w-0 after:bg-[#C15F3C] after:transition-all after:duration-300 group-hover:after:w-full after:absolute after:-bottom-1 after:left-0 whitespace-nowrap">Trademark</span>
              <div className="absolute top-full left-0 mt-2 border border-[#B1ADA1]/30 shadow-lg rounded-xl w-[520px] p-4 grid grid-rows-6 grid-flow-col gap-x-5 gap-y-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200" style={{ backgroundColor: "#F4F3EE" }}>
                {[
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
                ].map((item, idx) => (
                  <Link key={idx} href={item.url} className="text-xs font-normal text-gray-700 px-2 py-1.5 rounded-lg hover:bg-[#B1ADA1]/20 hover:text-[#C15F3C] whitespace-nowrap block transition-colors duration-150">{item.label}</Link>
                ))}
              </div>
            </li>

            {/* GST */}
            <li className="relative group">
              <span className="relative cursor-pointer transition-colors duration-200 hover:text-[#C15F3C] after:content-[''] after:block after:h-0.5 after:w-0 after:bg-[#C15F3C] after:transition-all after:duration-300 group-hover:after:w-full after:absolute after:-bottom-1 after:left-0">GST</span>
              <div className="absolute top-full left-0 mt-2 border border-[#B1ADA1]/30 shadow-lg rounded-xl w-[450px] p-4 grid grid-rows-7 grid-flow-col gap-x-5 gap-y-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200" style={{ backgroundColor: "#F4F3EE" }}>
                {[
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
                ].map((item, idx) => (
                  <Link key={idx} href={item.url} className="text-xs font-normal text-gray-700 px-2 py-1.5 rounded-lg hover:bg-[#B1ADA1]/20 hover:text-[#C15F3C] whitespace-nowrap block transition-colors duration-150">{item.label}</Link>
                ))}
              </div>
            </li>
            {/* INCOME TAX */}
            <li className="relative group">
              <span className="relative cursor-pointer transition-colors duration-200 hover:text-[#C15F3C] after:content-[''] after:block after:h-0.5 after:w-0 after:bg-[#C15F3C] after:transition-all after:duration-300 group-hover:after:w-full after:absolute after:-bottom-1 after:left-0 whitespace-nowrap">
                Income Tax
              </span>

              <div
                className="absolute top-full left-0 mt-2 border border-[#B1ADA1]/30 shadow-lg rounded-xl w-[320px] p-4 grid grid-rows-7 grid-flow-col gap-x-5 gap-y-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                style={{ backgroundColor: "#F4F3EE" }}
              >
                {[
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
                ].map((item) => (
                  <Link
                    key={item.url}
                    href={item.url}
                    className="text-xs font-normal text-gray-700 px-2 py-1.5 rounded-lg hover:bg-[#B1ADA1]/20 hover:text-[#C15F3C] whitespace-nowrap block transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </li>

            {/* MCA */}
            <li className="relative group">
              <span className="relative cursor-pointer transition-colors duration-200 hover:text-[#C15F3C] after:content-[''] after:block after:h-0.5 after:w-0 after:bg-[#C15F3C] after:transition-all after:duration-300 group-hover:after:w-full after:absolute after:-bottom-1 after:left-0 whitespace-nowrap">
                MCA
              </span>

              <div
                className="absolute top-full left-0 mt-3 bg-[#F4F3EE] border border-[#B1ADA1]/30 shadow-xl rounded-2xl w-[720px] p-6 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
              >
                <div className="grid grid-cols-3 gap-x-10 gap-y-3">
                  {[
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
                  ].map((item) => (
                    <Link
                      key={item.url}
                      href={item.url}
                      className="text-xs font-normal text-gray-700 px-2 py-1.5 rounded-lg hover:bg-[#B1ADA1]/20 hover:text-[#C15F3C] whitespace-nowrap block transition-colors duration-150"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            {/* Compliance */}
            <li className="relative group">
              <span className="relative cursor-pointer transition-colors duration-200 hover:text-[#C15F3C] after:content-[''] after:block after:h-0.5 after:w-0 after:bg-[#C15F3C] after:transition-all after:duration-300 group-hover:after:w-full after:absolute after:-bottom-1 after:left-0 whitespace-nowrap">
                Compliance
              </span>

              <div
                className="absolute top-full left-0 mt-3 bg-[#F4F3EE] border border-[#B1ADA1]/30 shadow-xl rounded-2xl w-[720px] p-6 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
              >
                <div className="grid grid-cols-3 gap-x-10 gap-y-3">
                  {[
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
                  ].map((item) => (
                    <Link
                      key={item.url}
                      href={item.url}
                      className="text-xs font-normal text-gray-700 px-2 py-1.5 rounded-lg hover:bg-[#B1ADA1]/20 hover:text-[#C15F3C] whitespace-nowrap block transition-colors duration-150"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            {/* Remaining
            {["MCA","Compliance","Personal","Global","Cities","Guides"].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="relative transition-colors duration-200 hover:text-[#C15F3C] after:content-[''] after:block after:h-0.5 after:w-0 after:bg-[#C15F3C] after:transition-all after:duration-300 hover:after:w-full after:absolute after:-bottom-1 after:left-0 whitespace-nowrap">{item}</a>
              </li>
            ))} */}
          </ul>
        </div>

        {/* Right: Search + Login + Sign Up + Hamburger */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {searchOpen ? (
            <div className="flex items-center border rounded-lg overflow-hidden bg-white/70" style={{ borderColor: "#B1ADA1" }}>
              <input autoFocus type="text" placeholder="Search..." className="text-sm px-3 py-1.5 outline-none bg-transparent w-32 sm:w-44" style={{ color: "#3d3a35" }} onBlur={() => setSearchOpen(false)} />
              <button className="px-2 py-1.5" style={{ color: "#B1ADA1" }} onClick={() => setSearchOpen(false)}><FiX size={15} /></button>
            </div>
          ) : (
            <button className="transition-colors duration-200 hover:text-[#C15F3C]" style={{ color: "#B1ADA1" }} onClick={() => setSearchOpen(true)}><FiSearch size={18} /></button>
          )}

          <button className="hidden sm:block text-sm font-medium relative transition-colors duration-200 hover:text-[#C15F3C] after:content-[''] after:block after:h-0.5 after:w-0 after:bg-[#C15F3C] after:transition-all after:duration-300 hover:after:w-full after:absolute after:-bottom-1 after:left-0" style={{ color: "#3d3a35" }}>Login</button>

          <button className="hidden sm:block text-sm font-semibold px-4 py-1.5 rounded-lg transition-all duration-200 hover:opacity-90 hover:shadow-md" style={{ backgroundColor: "#C15F3C", color: "#fff" }}>Sign up</button>

          <button className="lg:hidden p-1.5 rounded-lg transition-colors duration-200 hover:bg-[#B1ADA1]/20" style={{ color: "#3d3a35" }} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t overflow-y-auto" style={{ backgroundColor: "#F4F3EE", borderColor: "#B1ADA1", maxHeight: "calc(100vh - 4rem)" }}>

          {/* Login/Signup */}
          <div className="flex items-center gap-3 px-4 py-3 border-b" style={{ borderColor: "rgba(177,173,161,0.3)" }}>
            <button className="flex-1 text-sm font-semibold py-2 rounded-lg border transition-colors duration-200 hover:bg-[#B1ADA1]/20" style={{ color: "#3d3a35", borderColor: "#B1ADA1" }}>Login</button>
            <button className="flex-1 text-sm font-semibold py-2 rounded-lg transition-all duration-200 hover:opacity-90" style={{ backgroundColor: "#C15F3C", color: "#fff" }}>Sign up</button>
          </div>

          {/* Search */}
          <div className="px-4 py-3 border-b" style={{ borderColor: "rgba(177,173,161,0.2)" }}>
            <div className="flex items-center border rounded-lg overflow-hidden bg-white/60" style={{ borderColor: "#B1ADA1" }}>
              <FiSearch className="ml-3 shrink-0" size={15} style={{ color: "#B1ADA1" }} />
              <input type="text" placeholder="Search services..." className="text-sm px-3 py-2 outline-none bg-transparent w-full" style={{ color: "#3d3a35" }} />
            </div>
          </div>

          {/* Accordion items */}
          <ul>
            {[
              {
                name: "startup", label: "Startup", links: [
                  { label: "Proprietorship", url: "/proprietorship" },
                  { label: "Partnership", url: "/partnership" },
                  { label: "One Person Company", url: "/one-person-company" },
                  { label: "Limited Liability Partnership", url: "/llp-registartion" },
                  { label: "Private Limited Company", url: "/company-registration" },
                  { label: "Section 8 Company", url: "/section-8-company-registration" },
                  { label: "Trust Registration", url: "/trust-registration" },
                  { label: "Public Limited Company", url: "/public-limited-company" },
                  { label: "Producer Company", url: "/producer-company-registration" },
                  { label: "Indian Subsidiary", url: "/indian-subsidiary" },
                ]
              },
              {
                name: "registrations", label: "Registrations", links: [
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
                ]
              },
              {
                name: "trademark", label: "Trademark", links: [
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
                ]
              },
              {
                name: "gst", label: "GST", links: [
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
                ]
              },
              {
                name: "incometax", label: "Income Tax", links: [
                  "Income Tax E-Filing", "Business Tax Filing", "ITR-1 Return Filing", "ITR-2 Return Filing", "ITR-3 Return Filing", "ITR-4 Return Filing", "ITR-5 Return Filing", "ITR-6 Return Filing", "ITR-7 Return Filing", "15CA - 15CB Filing", "TAN Registration", "TDS Return Filing", "Income Tax Notice"
                ].map(l => ({ label: l, url: "#" }))
              },
            ].map(({ name, label, links }) => (
              <li key={name} className="border-b" style={{ borderColor: "rgba(177,173,161,0.2)" }}>
                <button className="w-full flex items-center justify-between px-4 py-3.5 text-sm font-semibold transition-colors" style={{ color: "#3d3a35" }} onClick={() => toggleMobileMenu(name)}>
                  {label}
                  <FiChevronDown size={16} className="transition-transform duration-200" style={{ color: "#B1ADA1", transform: openMobileMenu === name ? "rotate(180deg)" : "rotate(0deg)" }} />
                </button>
                {openMobileMenu === name && (
                  <div className="px-4 pb-3 grid grid-cols-2 gap-1" style={{ backgroundColor: "rgba(177,173,161,0.08)" }}>
                    {links.map((item, idx) => (
                      <Link key={idx} href={item.url} className="text-xs px-2 py-1.5 rounded-lg transition-colors hover:text-[#C15F3C]" style={{ color: "#3d3a35" }} onClick={() => setMobileOpen(false)}>{item.label}</Link>
                    ))}
                  </div>
                )}
              </li>
            ))}

            {/* Simple items */}
            {["MCA", "Compliance", "Personal", "Global", "Cities", "Guides"].map((item, idx) => (
              <li key={idx} className="border-b" style={{ borderColor: "rgba(177,173,161,0.2)" }}>
                <a href="#" className="flex items-center px-4 py-3.5 text-sm font-semibold transition-colors hover:text-[#C15F3C]" style={{ color: "#3d3a35" }} onClick={() => setMobileOpen(false)}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
