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
}

const TOKEN = "API-d969d00908e5d49261dc97c71fdd75794712b377";
const FAQ_API = `https://cms.dostartup.in/api/content/items/startupFaq?token=${TOKEN}`;
const BLOG_API = `https://cms.dostartup.in/api/content/items/blogs?token=${TOKEN}`;

export default function FAQAccordion({ category: propCategory }: FAQAccordionProps) {
  const pathname = usePathname();
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [hasBlogs, setHasBlogs] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [visibleCount, setVisibleCount] = useState(5);
  const [loading, setLoading] = useState(true);

  // Derive category from pathname if not provided
  const derivedCategory = propCategory || 
    pathname.split('/').filter(Boolean).pop()?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 
    "General";

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch FAQs and Blogs in parallel
        const [faqRes, blogRes] = await Promise.all([
          fetch(FAQ_API),
          fetch(BLOG_API)
        ]);
        
        const faqData = await faqRes.json();
        const blogData = await blogRes.json();

        // Process FAQs
        if (Array.isArray(faqData)) {
          const filteredFaqs = faqData.filter(
            (item: FAQ) =>
              item.category?.toLowerCase() === derivedCategory.toLowerCase() ||
              item.CATEGORY?.toLowerCase() === derivedCategory.toLowerCase()
          );
          setFaqs(filteredFaqs);
        }

        // Process Blogs compatibility
        if (Array.isArray(blogData)) {
          const hasMatchingBlogs = blogData.some(
            (blog: any) => blog.category?.toLowerCase() === derivedCategory.toLowerCase()
          );
          setHasBlogs(hasMatchingBlogs);
        }
      } catch (err) {
        console.error("Cockpit fetch error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [derivedCategory]);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, faqs.length));
  };

  if (loading) {
    return (
      <div className="bg-[#F4F3EE] py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl border border-[#E5E2DA] p-12 text-center">
            <div className="w-10 h-10 border-4 border-[#E5E2DA] border-t-[#C15F3C] rounded-full animate-spin mx-auto"></div>
            <p className="mt-4 text-[#6F6B63] font-medium">Loading Information...</p>
          </div>
        </div>
      </div>
    );
  }

  const visibleFaqs = faqs.slice(0, visibleCount);
  const hasMore = visibleCount < faqs.length;

  return (
    <div className="bg-[#F4F3EE] py-12">
      <div className={`${hasBlogs ? 'max-w-7xl' : 'max-w-4xl'} mx-auto px-4 sm:px-6`}>
        
        {/* Header Section */}
        <div className={`${hasBlogs ? 'text-left' : 'text-center'} mb-10`}>
          <div className={`inline-flex items-center gap-2 bg-white border border-[#E5E2DA] rounded-full px-4 py-1.5 mb-4 shadow-sm`}>
            <div className="w-2 h-2 bg-[#C15F3C] rounded-full" />
            <span className="text-[10px] font-bold text-[#C15F3C] uppercase tracking-wider">
              Knowledge Base
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2F2E2B] mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>
             Frequently Asked <span className="text-[#C15F3C]">Questions</span>
          </h2>
          <p className={`text-[#6F6B63] text-sm ${hasBlogs ? 'max-w-xl' : 'max-w-2xl mx-auto'}`}>
            Expert insights and detailed answers regarding {derivedCategory} services and compliance.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className={`grid ${hasBlogs ? 'lg:grid-cols-12 gap-10' : 'grid-cols-1'}`}>
          
          {/* FAQ Column */}
          <div className={`${hasBlogs ? 'lg:col-span-8' : ''}`}>
            <div className="bg-white rounded-3xl shadow-sm border border-[#E5E2DA] overflow-hidden">
              <div className="divide-y divide-[#E5E2DA]">
                {visibleFaqs.length > 0 ? (
                  visibleFaqs.map((faq, index) => {
                    const question = faq.question || faq.QUESTION;
                    const answer = faq.answer || faq.ANSWER;
                    const isOpen = openIndex === index;

                    return (
                      <div key={faq._id || faq.id || index} className="group">
                        <button
                          onClick={() => toggleAccordion(index)}
                          className="w-full px-6 sm:px-8 py-6 flex items-center justify-between text-left hover:bg-[#F4F3EE]/30 transition-all duration-200"
                        >
                          <div className="flex items-start gap-4 pr-6">
                            <div className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 font-bold text-sm ${
                              isOpen ? "bg-[#C15F3C] text-white shadow-lg shadow-[#C15F3C]/20" : "bg-[#F4F3EE] text-[#C15F3C] group-hover:bg-[#C15F3C]/10"
                            }`}>
                              {index + 1}
                            </div>
                            <span className={`text-sm sm:text-base font-bold leading-tight transition-colors ${
                              isOpen ? "text-[#C15F3C]" : "text-[#2F2E2B]"
                            }`} style={{ fontFamily: "'Sora', sans-serif" }}>
                              {question}
                            </span>
                          </div>
                          <div className={`w-6 h-6 rounded-full border border-[#E5E2DA] flex items-center justify-center transition-all duration-300 ${
                            isOpen ? "rotate-180 bg-[#F4F3EE]" : ""
                          }`}>
                            <svg className="w-3.5 h-3.5 text-[#6F6B63]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </button>

                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                        }`}>
                          <div className="px-8 sm:px-12 pb-8 pt-0">
                            <div className="pl-6 border-l-2 border-[#C15F3C]/30 pt-1">
                              <p className="text-sm text-[#6F6B63] leading-relaxed">
                                {answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="p-12 text-center">
                    <p className="text-[#6F6B63]">No questions found for this section yet.</p>
                  </div>
                )}
              </div>

              {hasMore && (
                <div className="px-6 py-6 border-t border-[#E5E2DA] bg-[#FDFCFB]">
                  <button
                    onClick={loadMore}
                    className="w-full sm:w-auto px-6 py-3 text-xs font-bold text-[#C15F3C] border-2 border-[#C15F3C] rounded-xl hover:bg-[#C15F3C] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-widest"
                  >
                    <span>Show More Guidelines</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Blogs Column */}
          {hasBlogs && (
            <div className="lg:col-span-4 lg:sticky lg:top-8 self-start">
              <BlogSidebar category={derivedCategory} />
            </div>
          )}

        </div>

        {/* Support Section */}
        <div className={`mt-12 ${hasBlogs ? '' : 'max-w-4xl mx-auto'}`}>
          <div className="bg-white rounded-3xl border border-[#E5E2DA] p-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-[#2F2E2B]" style={{ fontFamily: "'Sora', sans-serif" }}>Still have questions?</h3>
                <p className="text-[#6F6B63] text-sm mt-1">Our experts are here to help you with your {derivedCategory} needs.</p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-3 bg-[#C15F3C] text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-[#A94E30] transition-all shadow-lg shadow-[#C15F3C]/20">
                  Speak to Expert
                </button>
                <button className="px-8 py-3 border border-[#E5E2DA] text-[#6F6B63] rounded-xl text-xs font-bold uppercase tracking-widest hover:border-[#C15F3C] hover:text-[#C15F3C] transition-all">
                  Chat Now
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}