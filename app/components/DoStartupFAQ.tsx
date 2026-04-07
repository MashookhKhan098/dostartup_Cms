"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, MessageCircle } from "lucide-react";
import Link from "next/link";
import BlogSidebar from "./BlogSidebar";

export interface FAQItem {
  q: string;
  a: string;
}

export interface BlogItem {
  title: string;
  description: string;
  link: string;
}

interface DoStartupFAQProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
  category?: string;
}

export default function DoStartupFAQ({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about our services and compliance.",
  category,
}: DoStartupFAQProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="bg-white py-12 px-4 sm:px-6 border-t border-gray-100" id="faq">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left: FAQ (Main Content) */}
        <div className="lg:col-span-8">
          <div className="mb-8">
            <p className="text-[#C15F3C] text-xs font-bold uppercase mb-2">FAQ</p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-black">{title}</h2>
            <p className="text-gray-500 text-sm mt-2">{subtitle}</p>
          </div>
          
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className={`bg-white border-2 rounded-2xl overflow-hidden transition-all duration-200 ${
                  openFaq === i 
                    ? "border-[#C15F3C] shadow-lg shadow-orange-100/50" 
                    : "border-gray-100 hover:border-[#C15F3C]/50"
                }`}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-start gap-4 px-5 py-4 text-left group"
                >
                  <span className="font-semibold text-sm text-black leading-snug group-hover:text-[#C15F3C] transition-colors">
                    {faq.q}
                  </span>
                  {openFaq === i ? (
                    <ChevronUp size={17} className="text-[#C15F3C] flex-shrink-0 mt-0.5" />
                  ) : (
                    <ChevronDown size={17} className="text-[#C15F3C] flex-shrink-0 mt-0.5 group-hover:translate-y-0.5 transition-transform" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 border-t border-[#C15F3C]/20 pt-3 bg-orange-50/20">
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-left">
            <p className="text-sm text-gray-500 mb-4">Still have questions?</p>
            <Link href="/support" className="inline-flex items-center gap-2 text-[#C15F3C] font-semibold text-sm hover:text-orange-700 border border-[#C15F3C]/30 px-6 py-3 rounded-full hover:bg-orange-50 transition-all">
              <MessageCircle size={16} />Chat with our AI Support (24/7)
            </Link>
          </div>
        </div>

        {/* Right: Blog Section (Secondary Content) */}
        <aside className="lg:col-span-4 mt-8 lg:mt-0">
          <BlogSidebar category={category} />
        </aside>

      </div>
    </section>
  );
}
