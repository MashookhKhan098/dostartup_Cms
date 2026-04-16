"use client";

import Link from "next/link";
import { Search } from "lucide-react";

const POPULAR_SEARCHES: { label: string; href: string }[] = [
  { label: "GST Registration",          href: "/gst-registration" },
  { label: "Company Registration",       href: "/company-registration" },
  { label: "Trademark Registration",     href: "/trademark-registration" },
  { label: "Income Tax Return",          href: "/e-filing" },
  { label: "LLP Registration",           href: "/llp-registartion" },
  { label: "FSSAI License",              href: "/fssai-license" },
  { label: "Import Export Code",         href: "/import-export-code" },
  { label: "MSME Registration",          href: "/udyam-registration" },
  { label: "ISO Certification",          href: "/iso-registration" },
  { label: "Partnership Registration",   href: "/partnership" },
  { label: "Section 8 Company",          href: "/section-8-company-registration" },
  { label: "Copyright Registration",     href: "/copyright-registration" },
  { label: "Patent Registration",        href: "/patent-registration" },
  { label: "ESI Registration",           href: "/esi-registration" },
  { label: "PF Registration",            href: "/pf-registration" },
  { label: "Professional Tax",           href: "/professional-tax-registration" },
  { label: "Digital Signature",          href: "/digital-signature" },
  { label: "Startup India Recognition",  href: "/start-up-india" },
  { label: "Virtual Office",             href: "/virtual-office" },
  { label: "Payroll Services",           href: "/hr-payroll" },
  { label: "TDS Return Filing",          href: "/tds-return-filing" },
  { label: "GST Return Filing",          href: "/gst-return-filing" },
  { label: "MCA Filings",                href: "/MCA" },
  { label: "LLP Annual Return",          href: "/llp-form-11-filing" },
  { label: "GST Notice Response",        href: "/gst-notice" },
  { label: "Business Tax Filing",        href: "/business-tax-filing" },
  { label: "Company Compliance",         href: "/company-compliance" },
  { label: "Logo Designing",             href: "/logo-designing" },
  { label: "Bookkeeping",                href: "/bookkeeping" },
  { label: "TAN Registration",           href: "/tan-registration" },
  { label: "Trust Registration",         href: "/trust-registration" },
];

export default function PopularSearches() {
  return (
    <section className="bg-[#F4F3EE] py-12 border-t border-[#E5E2DA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-xl p-8 border border-gray-200">
          <div className="flex items-center gap-2 mb-6">
            <Search size={18} className="text-[#C15F3C]" />
            <h4 className="font-semibold text-slate-900">Popular Searches</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {POPULAR_SEARCHES.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="px-3 py-1.5 bg-[#F4F3EE]/50 border border-gray-200 rounded-md text-xs text-gray-700 hover:border-[#C15F3C] hover:text-[#C15F3C] transition-all"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
