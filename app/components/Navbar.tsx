"use client";

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
                <a
                  href="#"
                  className="relative transition-colors duration-200 hover:text-blue-600 after:content-[''] after:block after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 group-hover:after:w-full after:absolute after:-bottom-1 after:left-0"
                >
                  Startup
                </a>

                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 shadow-md rounded-md w-[360px] p-4 grid grid-cols-2 gap-x-5 gap-y-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="flex flex-col space-y-1">
                    {[
                      "Proprietorship",
                      "Partnership",
                      "One Person Company",
                      "Limited Liability Partnership",
                      "Private Limited Company",
                    ].map((item, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="w-full text-xs font-normal text-gray-700 px-2 py-1 rounded hover:bg-gray-100 whitespace-nowrap"
                      >
                        {item}
                      </a>
                    ))}
                  </div>

                  <div className="flex flex-col space-y-1">
                    {[
                      "Section 8 Company",
                      "Trust Registration",
                      "Public Limited Company",
                      "Producer Company",
                      "Indian Subsidiary",
                    ].map((item, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="w-full text-xs font-normal text-gray-700 px-2 py-1 rounded hover:bg-gray-100 whitespace-nowrap"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              </li>

              {/* REGISTRATIONS */}
              <li className="relative group">
                <a
                  href="#"
                  className="relative transition-colors duration-200 hover:text-blue-600 after:content-[''] after:block after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 group-hover:after:w-full after:absolute after:-bottom-1 after:left-0"
                >
                  Registrations
                </a>

                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 shadow-md rounded-md w-[760px] p-4 grid grid-rows-7 grid-flow-col gap-x-5 gap-y-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {[
                    "Startup India",
                    "Trade License",
                    "FSSAI Registration",
                    "FSSAI License",
                    "Halal License & Certification",
                    "ICEGATE Registration",
                    "Import Export Code",
                    "Legal Entity Identifier Code",
                    "ISO Registration",
                    "PF Registration",
                    "ESI Registration",
                    "Professional Tax Registration",
                    "RCMC Registration",
                    "TN RERA Registration for Agents",
                    "12A and 80G Registration",
                    "12A Registration",
                    "80G Registration",
                    "APEDA Registration",
                    "Barcode Registration",
                    "BIS Registration",
                    "Certificate of Incumbency",
                    "Darpan Registration",
                    "Digital Signature",
                    "Shop Act Registration",
                    "Drug License",
                    "Udyam Registration",
                    "FCRA Registration",
                    "Fire License",
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

              {/* TRADEMARK */}
              <li className="relative group">
                <a
                  href="#"
                  className="relative transition-colors duration-200 hover:text-blue-600 after:content-[''] after:block after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 group-hover:after:w-full after:absolute after:-bottom-1 after:left-0"
                >
                  Trademark
                </a>

                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 shadow-md rounded-md w-[520px] p-4 grid grid-rows-6 grid-flow-col gap-x-5 gap-y-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {[
                    "Trademark Registration",
                    "Trademark Objection",
                    "Trademark Certificate",
                    "Trademark Opposition",
                    "Trademark Hearing",
                    "Trademark Rectification",
                    "TM Infringement Notice",
                    "Trademark Renewal",
                    "Trademark Transfer",
                    "Expedited TM Registration",
                    "Logo Designing",
                    "Design Registration",
                    "Design Objection",
                    "Copyright Registration",
                    "Copyright Objection",
                    "Patent Registration",
                    "Trademark Protection",
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

              {/* GST */}
              <li className="relative group">
                <a
                  href="#"
                  className="relative transition-colors duration-200 hover:text-blue-600 after:content-[''] after:block after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 group-hover:after:w-full after:absolute after:-bottom-1 after:left-0"
                >
                  GST
                </a>

                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 shadow-md rounded-md w-[450px] p-4 grid grid-rows-7 grid-flow-col gap-x-5 gap-y-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {[
                    "GST Registration",
                    "GST Return Filing by Accountant",
                    "GST NIL Return Filing",
                    "GST E-Invoicing Software",
                    "GST LUT Form",
                    "GST Notice",
                    "GST Annual Return Filing (GSTR-9)",
                    "GST Registration for Foreigners",
                    "GST Invoicing & Filing Software",
                    "GST Amendment",
                    "GST Revocation",
                    "GSTR-10",
                    "GST Software for Accountants",
                    "Virtual Office + GSTIN",
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
