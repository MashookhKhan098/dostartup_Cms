"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import BlogSidebar from "./BlogSidebar";

interface FAQ {
  _id?: string;
  id?: number;
  question?: string;
  QUESTION?: string;
  answer?: string;
  ANSWER?: string;
  category?: string;
  CATEGORY?: string;
}

interface FAQAccordionProps {
  category?: string;
  blogCategory?: string;
}

const TOKEN = "API-d969d00908e5d49261dc97c71fdd75794712b377";
const CMS_URL = "https://cms.dostartup.in";

export default function FAQAccordion({ category: propCategory, blogCategory }: FAQAccordionProps) {
  const pathname = usePathname();
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [visibleCount, setVisibleCount] = useState(6);

  // The subpage name (slug) from the URL
  const subpageSlug = pathname.split('/').filter(Boolean).pop() || "General";

  // FAQ logic: now strictly based on subpage slug unless prop override provided
  const finalFaqCategory = propCategory || subpageSlug;
  
  // Blog logic: strictly based on subpage slug unless prop override provided
  const finalBlogCategory = blogCategory || subpageSlug;

  // Title for display (Title-cased subpage name)
  const displayTitle = finalFaqCategory.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        // Fetch from startupFaq (as confirmed by your screenshot)
        const res = await fetch(`${CMS_URL}/api/content/items/startupFaq?token=${TOKEN}`);
        const data = await res.json();
        
        console.log("FAQ Fetch Attempt (startupFaq):", data);

        if (Array.isArray(data)) {
          // Strict filtering based on the subpage-based category
          const filtered = data.filter(
            (item: any) => {
              const cat = (item.category || item.CATEGORY || "").toLowerCase();
              const target = finalFaqCategory.toLowerCase();
              // Exact match or contains (for robustness)
              return cat === target || target === cat.replace(/\s+/g, '-');
            }
          );
          
          console.log("Target FAQ Category:", finalFaqCategory);
          console.log("Filtered FAQs Count:", filtered.length);
          
          setFaqs(filtered);
        }
      } catch (err) {
        console.error("Cockpit FAQ fetch error:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [finalFaqCategory]);

  if (loading) {
     return (
      <div className="bg-[#F4F3EE] py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 animate-pulse">
           <div className="lg:col-span-2 h-96 bg-gray-200 rounded-3xl"></div>
           <div className="lg:col-span-3 h-96 bg-gray-200 rounded-3xl"></div>
        </div>
      </div>
    );
  }

  const visibleFaqs = faqs.slice(0, visibleCount);

  return (
    <div className="bg-[#F4F3EE] py-16 scroll-mt-20 border-t border-[#E5E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Full-Width Header Segment */}
        <div className="mb-12">
           <div className="inline-flex items-center gap-2 bg-white border border-[#E5E2DA] rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <div className="w-2 h-2 bg-[#C15F3C] rounded-full" />
            <span className="text-[10px] font-bold text-[#C15F3C] uppercase tracking-wider">
              Expert Guidance
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#201F1D] leading-tight" style={{ fontFamily: "'Sora', sans-serif" }}>
             Everything you need <br /> to <span className="text-[#C15F3C]">Grow your Business</span>
          </h2>
        </div>

        {/* Fixed 40/60 Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* FAQ Column (40%) */}
          <div className="lg:col-span-2 order-1">
             <div className="mb-6">
                <h3 className="text-xl font-bold text-[#201F1D] mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>Frequently Asked Questions</h3>
                <p className="text-[#6F6B63] text-sm leading-relaxed">
                  Expert guidance for {displayTitle} legal services.
                </p>
             </div>

             <div className="bg-white rounded-3xl shadow-sm border border-[#E5E2DA] overflow-hidden divide-y divide-[#E5E2DA]">
                {faqs.length > 0 ? (
                  visibleFaqs.map((faq, index) => (
                    <div key={index} className="group">
                      <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full px-6 py-5 flex items-start justify-between text-left hover:bg-[#F4F3EE]/30 transition-colors"
                      >
                        <span className={`text-sm font-bold leading-snug ${openIndex === index ? "text-[#C15F3C]" : "text-[#2F2E2B]"}`} style={{ fontFamily: "'Sora', sans-serif" }}>
                          {faq.question || faq.QUESTION}
                        </span>
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full border border-[#E5E2DA] flex items-center justify-center transition-transform mt-0.5 ${openIndex === index ? "rotate-180 bg-[#F4F3EE]" : ""}`}>
                          <svg className="w-3 h-3 text-[#6F6B63]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
                        </div>
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-[500px]" : "max-h-0"}`}>
                        <div className="px-6 pb-6 text-[13px] text-[#6F6B63] leading-relaxed">
                          {faq.answer || faq.ANSWER}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-12 text-center flex flex-col items-center justify-center bg-white/50">
                    <div className="w-12 h-12 rounded-2xl bg-[#F4F3EE] flex items-center justify-center mb-4 text-[#C15F3C]">
                       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                    </div>
                    <p className="text-[#2F2E2B] text-sm font-bold opacity-80" style={{ fontFamily: "'Sora', sans-serif" }}>No FAQs Available yet</p>
                    <p className="text-[#6F6B63] text-[10px] mt-1 max-w-[150px] mx-auto leading-relaxed">Our legal team is currently preparing the guide for {displayTitle}.</p>
                  </div>
                )}
             </div>
             
             {visibleCount < faqs.length && (
               <button onClick={() => setVisibleCount(v => v + 5)} className="mt-6 w-full py-4 text-[10px] font-bold text-[#C15F3C] border border-[#C15F3C]/20 rounded-2xl hover:bg-[#C15F3C] hover:text-white transition-all tracking-widest uppercase">
                  View More Questions
               </button>
             )}
          </div>

          {/* Blog Column (60%) */}
          <div className="lg:col-span-3 order-2">
            <BlogSidebar 
              category={finalBlogCategory} 
              isMainFeed={true} 
              maxItems={3} 
              columns={3} 
            />
          </div>

        </div>

      </div>
    </div>
  );
}
