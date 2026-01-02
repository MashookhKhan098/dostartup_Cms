"use client";
import Link from "next/link";

import { FiSearch } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="bg-white border-b relative">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Left: Logo + Links */}
        <div className="flex items-center">
          <div className="flex items-center space-x-8 bg-gray-900 px-4 py-2 rounded-md">
            <img src="/logo.png" alt="IndiaFilings" className="h-10" />
          </div>

          <div className="flex items-center space-x-8 px-4 py-2 rounded-md">
            <ul className="hidden lg:flex items-center space-x-6 text-sm font-semibold text-gray-900">
              {/* STARTUP */}
<li className="relative group">
  <span className="relative cursor-pointer transition-colors duration-200 hover:text-blue-600 after:content-[''] after:block after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 group-hover:after:w-full after:absolute after:-bottom-1 after:left-0">
    Startup
  </span>

  <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 shadow-md rounded-md w-[360px] p-4 grid grid-cols-2 gap-x-5 gap-y-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
    
    {/* LEFT COLUMN */}
    <div className="flex flex-col space-y-1">
      {[
        { label: "Proprietorship", url: "/proprietorship" },
        { label: "Partnership", url: "/partnership" },
        { label: "One Person Company", url: "/one-person-company" },
        { label: "Limited Liability Partnership", url: "/llp-registartion" },
        { label: "Private Limited Company", url: "/company-registration" },
      ].map((item, idx) => (
        <Link
          key={idx}
          href={item.url}
          className="w-full text-xs font-normal text-gray-700 px-2 py-1 rounded hover:bg-gray-100 whitespace-nowrap block"
        >
          {item.label}
        </Link>
      ))}
    </div>

    {/* RIGHT COLUMN */}
    <div className="flex flex-col space-y-1">
      {[
        { label: "Section 8 Company", url: "/section-8-company-registration" },
        { label: "Trust Registration", url: "/trust-registration" },
        { label: "Public Limited Company", url: "/public-limited-company" },
        { label: "Producer Company", url: "/producer-company-registration" },
        { label: "Indian Subsidiary", url: "/indian-subsidiary" },
      ].map((item, idx) => (
        <Link
          key={idx}
          href={item.url}
          className="w-full text-xs font-normal text-gray-700 px-2 py-1 rounded hover:bg-gray-100 whitespace-nowrap block"
        >
          {item.label}
        </Link>
      ))}
    </div>
  </div>
</li>

{/* REGISTRATIONS */}
<li className="relative group">
  <span className="relative cursor-pointer transition-colors duration-200 hover:text-blue-600 after:content-[''] after:block after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 group-hover:after:w-full after:absolute after:-bottom-1 after:left-0">
    Registrations
  </span>

  <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 shadow-md rounded-md w-[760px] p-4 grid grid-rows-7 grid-flow-col gap-x-5 gap-y-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
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
      <Link
        key={idx}
        href={item.url}
        className="text-xs font-normal text-gray-700 px-2 py-1 rounded hover:bg-gray-100 whitespace-nowrap block"
      >
        {item.label}
      </Link>
    ))}
  </div>
</li>


              {/* TRADEMARK */}
<li className="relative group">
  <span className="relative cursor-pointer transition-colors duration-200 hover:text-blue-600 after:content-[''] after:block after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 group-hover:after:w-full after:absolute after:-bottom-1 after:left-0">
    Trademark
  </span>

  <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 shadow-md rounded-md w-[520px] p-4 grid grid-rows-6 grid-flow-col gap-x-5 gap-y-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
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
      <Link
        key={idx}
        href={item.url}
        className="text-xs font-normal text-gray-700 px-2 py-1 rounded hover:bg-gray-100 whitespace-nowrap block"
      >
        {item.label}
      </Link>
    ))}
  </div>
</li>

              {/* GST */}
<li className="relative group">
  <span className="relative cursor-pointer transition-colors duration-200 hover:text-blue-600 after:content-[''] after:block after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 group-hover:after:w-full after:absolute after:-bottom-1 after:left-0">
    GST
  </span>

  <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 shadow-md rounded-md w-[450px] p-4 grid grid-rows-7 grid-flow-col gap-x-5 gap-y-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
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
      <Link
        key={idx}
        href={item.url}
        className="text-xs font-normal text-gray-700 px-2 py-1 rounded hover:bg-gray-100 whitespace-nowrap block"
      >
        {item.label}
      </Link>
    ))}
  </div>
</li>

              {/* INCOME TAX */}
              <li className="relative group">
                <a
                  href="#"
                  className="relative transition-colors duration-200 hover:text-blue-600 after:content-[''] after:block after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 group-hover:after:w-full after:absolute after:-bottom-1 after:left-0"
                >
                  Income Tax
                </a>

                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 shadow-md rounded-md w-[320px] p-4 grid grid-rows-7 grid-flow-col gap-x-5 gap-y-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {[
                    "Income Tax E-Filing",
                    "Business Tax Filing",
                    "ITR-1 Return Filing",
                    "ITR-2 Return Filing",
                    "ITR-3 Return Filing",
                    "ITR-4 Return Filing",
                    "ITR-5 Return Filing",
                    "ITR-6 Return Filing",
                    "ITR-7 Return Filing",
                    "15CA - 15CB Filing",
                    "TAN Registration",
                    "TDS Return Filing",
                    "Income Tax Notice",
                  ].map((item, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="text-xs font-normal text-gray-700 px-2 py-1 rounded hover:bg-gray-100 whitespace-nowrap"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </li>

              {/* Remaining Menu Items */}
              {["MCA", "Compliance", "Personal", "Global", "Cities", "Guides"].map(
                (item, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="relative transition-colors duration-200 hover:text-blue-600 after:content-[''] after:block after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full after:absolute after:-bottom-1 after:left-0"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Right: Search + Login + Sign Up */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
            <FiSearch size={18} />
          </button>
          <button className="text-gray-700 text-sm font-medium relative transition-colors duration-200 hover:text-blue-600 after:content-[''] after:block after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full after:absolute after:-bottom-1 after:left-0">
            Login
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-1.5 rounded-md transition-colors duration-200">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
}
