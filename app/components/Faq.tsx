"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import BlogSidebar from "./BlogSidebar";
import AddQuestionModal from "./AddQuestionModal";
import { Plus } from "lucide-react";

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

const TOKEN = process.env.NEXT_PUBLIC_COCKPIT_API_KEY;
const CMS_URL = process.env.NEXT_PUBLIC_COCKPIT_URL;

export default function FAQAccordion({ category: propCategory, blogCategory }: FAQAccordionProps) {
  const pathname = usePathname();
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [visibleCount, setVisibleCount] = useState(6);

  const subpageSlug = pathname.split('/').filter(Boolean).pop() || "General";
  const finalFaqCategory = propCategory || subpageSlug;
  const finalBlogCategory = blogCategory || subpageSlug;
  const displayTitle = finalFaqCategory.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch(`${CMS_URL}/api/content/items/startupFaq?token=${TOKEN}`);
        const data = await res.json();
        if (Array.isArray(data)) {
          const filtered = data.filter((item: any) => {
            const cat = (item.category || item.CATEGORY || "").toLowerCase();
            const target = finalFaqCategory.toLowerCase();
            return cat === target || target === cat.replace(/\s+/g, '-');
          });
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

  if (loading) return <div className="bg-[#F4F3EE] py-16 text-center">Loading...</div>;

  const visibleFaqs = faqs.slice(0, visibleCount);

  return (
    <div className="bg-[#F4F3EE] py-16 border-t border-[#E5E2DA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-[#0B2545]">
            FAQs for {displayTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between h-[30px]">
              <h3 className="text-lg md:text-xl font-bold text-[#0B2545]" style={{ fontFamily: "'Sora', sans-serif" }}>
                Expert Q&A
              </h3>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden divide-y divide-gray-100">
              {faqs.length > 0 ? (
                visibleFaqs.map((faq, index) => (
                  <div key={index}>
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className={`text-sm font-semibold ${openIndex === index ? "text-[#C15F3C]" : "text-[#201F1D]"}`}>
                        {faq.question || faq.QUESTION}
                      </span>
                      <Plus className={`w-4 h-4 transition-transform ${openIndex === index ? "rotate-45 text-[#C15F3C]" : "text-gray-400"}`} />
                    </button>
                    {openIndex === index && (
                      <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed">
                        {faq.answer || faq.ANSWER}
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="bg-white rounded-xl p-12 text-center border border-gray-100">
                  <p className="text-[#201F1D] font-semibold mb-2">No FAQs available.</p>
                  <p className="text-xs text-gray-500">Our team is currently updating this section.</p>
                </div>
              )}
            </div>
            
            {visibleCount < faqs.length && (
              <button 
                onClick={() => setVisibleCount(v => v + 5)} 
                className="mt-6 w-full py-3 text-sm font-bold text-[#C15F3C] border border-[#C15F3C]/20 rounded-lg hover:bg-[#C15F3C] hover:text-white transition-all"
              >
                View More
              </button>
            )}

            <div className="mt-6">
              <AddQuestionModal category={finalFaqCategory} />
            </div>
          </div>

          <div className="lg:col-span-3 lg:border-l border-gray-100 lg:pl-12">
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
