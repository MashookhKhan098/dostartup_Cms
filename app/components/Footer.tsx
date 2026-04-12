import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerColumns = [
    {
      title: "DOSTARTUP",
      links: [
        { name: "About DoStartup", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "PLATFORMS",
      links: [
        { name: "Business Search", href: "/Business-Search" },
        { name: "Trademark Search", href: "/trademark" },
        { name: "Filings.AE for UAE", href: "/Filings-AE-for-UAE" },
      ],
    },
    {
      title: "USAGE",
      links: [
        { name: "Terms & Conditions", href: "/Terms-Conditions" },
        { name: "Privacy Policy", href: "/Privacy-Policy" },
        { name: "Refund Policy", href: "/refund-policy" },
      ],
    },
    {
      title: "MORE",
      links: [
        { name: "Confidentiality Policy", href: "/Confidentiality-Policy" },
        { name: "Disclaimer Policy", href: "/Disclaimer-Policy" },
        { name: "DoStartup Review", href: "/DoStartup-Review" },
        { name: "Writer Login", href: "/writer/writerlogin" },
      ],
    },
  ];

  return (
    <footer className="bg-[#F4F3EE] border-t border-[#E5E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-5">

        {/* Main Footer Content */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#E5E2DA] overflow-hidden">

          {/* Top Gradient Bar */}
          <div className="h-1 bg-gradient-to-r from-[#C15F3C] via-[#C15F3C]/50 to-transparent"></div>

          {/* Columns Grid */}
          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {footerColumns.map((column, idx) => (
                <div key={idx}>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-4 bg-gradient-to-b from-[#C15F3C] to-[#A94E30] rounded-full"></div>
                    <h4 className="text-sm font-semibold text-[#2F2E2B] uppercase ">
                      {column.title}
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    {column.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <Link href={link.href}>
                          <span className="text-sm text-[#6F6B63] hover:text-[#C15F3C] transition-all duration-300 cursor-pointer inline-flex items-center gap-1 group">
                            <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                            <span className="group-hover:translate-x-1 transition-transform duration-300">
                              {link.name}
                            </span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mx-6 mb-6 p-5 bg-white rounded-xl border border-[#E5E2DA]">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#C15F3C]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#C15F3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#2F2E2B]">Stay Updated</h4>
                  <p className="text-xs text-[#6F6B63]">Get the latest updates and offers</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row w-full flex-1 max-w-md gap-2 mt-4 sm:mt-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 w-full px-4 py-2.5 bg-white border border-[#E5E2DA] rounded-xl text-sm text-[#2F2E2B] placeholder-[#B1ADA1] focus:outline-none focus:ring-1 focus:ring-[#C15F3C]"
                />
                <button className="w-full sm:w-auto px-5 py-2.5 bg-[#C15F3C] hover:bg-[#A94E30] text-white text-sm font-medium rounded-xl transition-all shadow-sm hover:shadow-md whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col gap-6">

          {/* Copyright and Social */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            {/* Copyright */}
            <div className="flex-1">
              <p className="text-sm text-[#6F6B63]">
                Copyright © {currentYear} Ure Consulting LLP. All rights reserved.
              </p>
              <p className="mt-2 text-xs text-[#B1ADA1] max-w-2xl leading-relaxed">
                Unless otherwise indicated, all materials on these pages are copyrighted by DoStartup Private Limited.
                All rights reserved. No part of these pages, either text or image may be used for any purpose.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-[#B1ADA1]">Follow us:</span>
              <div className="flex items-center gap-2">
                <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-xl bg-white border border-[#E5E2DA] flex items-center justify-center text-[#6F6B63] hover:bg-[#C15F3C] hover:text-white hover:border-[#C15F3C] transition-all duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99H8.898v-2.89h1.54V9.845c0-1.523.903-2.366 2.287-2.366.662 0 1.354.118 1.354.118v1.49h-.764c-.753 0-.988.468-.988.948v1.143h1.678l-.268 2.89h-1.41v6.99C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" aria-label="WhatsApp" className="w-9 h-9 rounded-xl bg-white border border-[#E5E2DA] flex items-center justify-center text-[#6F6B63] hover:bg-[#C15F3C] hover:text-white hover:border-[#C15F3C] transition-all duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.52 3.48A11.92 11.92 0 0012 0C5.373 0 .001 5.373.001 12 0 13.99.448 15.88 1.28 17.57L0 24l6.66-1.76A11.92 11.92 0 0012 24c6.627 0 12-5.373 12-12 0-1.71-.35-3.34-1.48-4.72zM12 21.5c-1.7 0-3.36-.44-4.8-1.26l-.34-.2-3.96 1.05 1.05-3.86-.21-.35A9.5 9.5 0 013.5 12C3.5 6.2 7.7 2 13.5 2c3.6 0 6.78 1.78 8.72 4.72A9.43 9.43 0 0121.5 12c0 5.5-4.48 9.5-9.5 9.5z" />
                  </svg>
                </a>
                <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-xl bg-white border border-[#E5E2DA] flex items-center justify-center text-[#6F6B63] hover:bg-[#C15F3C] hover:text-white hover:border-[#C15F3C] transition-all duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.25 4.063a1 1 0 00-1.406-1.406L12 12.5 2.156 2.657A1 1 0 00.75 4.063L10.5 13.813.75 23.563a1 1 0 001.406 1.406L12 14.5l9.844 10.469a1 1 0 001.406-1.406L13.5 13.813 23.25 4.063z" />
                  </svg>
                </a>
                <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-xl bg-white border border-[#E5E2DA] flex items-center justify-center text-[#6F6B63] hover:bg-[#C15F3C] hover:text-white hover:border-[#C15F3C] transition-all duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.5 6.2s-.2-1.7-.82-2.45C21.78 2.4 20.73 2.4 20.04 2.32 17.22 2 12 2 12 2s-5.22 0-8.04.32C3.27 2.4 2.22 2.4 1.32 3.75.7 4.5.5 6.2.5 6.2S.33 8.07.33 9.95v.1c0 1.88.17 3.75.17 3.75s.2 1.7.82 2.45c.9 1.35 2 1.35 2.7 1.43C6.78 21.6 12 21.6 12 21.6s5.22 0 8.04-.32c.69-.08 1.74-.08 2.45-1.43.62-.75.82-2.45.82-2.45s.17-1.87.17-3.75v-.1c0-1.88-.17-3.75-.17-3.75zM9.75 15.02V8.98l5.25 3.02-5.25 3.02z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row gap-6 pt-6 border-t border-[#E5E2DA]">
              <div className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-[#C15F3C]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-[#6F6B63]">100% Secure</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-[#C15F3C]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-[#6F6B63]">Trusted by 50k+ Businesses</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-[#C15F3C]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-[#6F6B63]">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
