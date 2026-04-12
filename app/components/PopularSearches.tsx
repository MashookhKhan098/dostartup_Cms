"use client";

import Link from "next/link";
import { Search } from "lucide-react";

const POPULAR_SEARCHES = [
  "GST Registration", "Company Registration", "Trademark Filing", "Income Tax Return",
  "LLP Registration", "FSSAI License", "Import Export Code", "MSME Registration",
  "ISO Certification", "Partnership Startup", "Section 8 Company", "Copyright Registration",
  "Patent Search", "ESI Registration", "PF Compliance", "Professional Tax",
  "Digital Signature", "Startup India Recognition", "GeM Registration", "NITI Aayog",
  "Business Logo", "Drafting Agreements", "Legal Notice", "Tax Planning",
  "Virtual Office", "Payroll Services", "TDS Return", "TCS Return",
  "MCA Filing", "Company Audit", "LLP Annual Return", "GST Notice Response"
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
                key={s}
                href={`/search?q=${encodeURIComponent(s)}`}
                className="px-3 py-1.5 bg-[#F4F3EE]/50 border border-gray-200 rounded-md text-xs text-gray-700 hover:border-[#C15F3C] hover:text-[#C15F3C] transition-all"
              >
                {s}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
