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
const N8N_WEBHOOK_URL = "https://your-n8n-webhook-url.com/"; // Replace with actual n8n webhook URL

export default function FAQAccordion({ category: propCategory }: FAQAccordionProps) {
  const pathname = usePathname();
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [hasBlogs, setHasBlogs] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [visibleCount, setVisibleCount] = useState(5);
  const [loading, setLoading] = useState(true);

  // Modal State for n8n Webhook
  const [modalType, setModalType] = useState<'faq' | 'question' | null>(null);
  const [formQuestion, setFormQuestion] = useState("");
  const [formAnswer, setFormAnswer] = useState("");
  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Derive category from pathname if not provided
  const derivedCategory = propCategory || 
    pathname.split('/').filter(Boolean).pop()?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 
    "General";

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
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

  const openModal = (type: 'faq' | 'question') => {
    setModalType(type);
    setFormQuestion("");
    setFormAnswer("");
    setSubmitSuccess(false);
    setSubmitError("");
  };

  const closeModal = () => {
    setModalType(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formQuestion.trim()) {
      setSubmitError("Question is required.");
      return;
    }
    if (modalType === 'faq' && !formAnswer.trim()) {
      setSubmitError("Answer is required.");
      return;
    }

    setSubmitLoading(true);
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      const payload = {
        question: formQuestion,
        answer: modalType === 'faq' ? formAnswer : undefined,
        type: modalType,
        category: derivedCategory || "general",
      };

      const res = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok || res.type === 'opaque') {
        setSubmitSuccess(true);
        setTimeout(() => closeModal(), 2000);
      } else {
        setSubmitError("Failed to submit. Please check your n8n URL.");
      }
    } catch (err) {
      setSubmitError("Network error. Please check your connection.");
    } finally {
      setSubmitLoading(false);
    }
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

              {/* Load More & Add Question Section */}
              <div className="px-6 py-6 border-t border-[#E5E2DA] bg-[#FDFCFB] flex flex-col sm:flex-row items-center justify-start gap-4">
                {hasMore && (
                  <button
                    onClick={loadMore}
                    className="w-full sm:w-auto px-6 py-3 text-xs font-bold text-[#C15F3C] border-2 border-[#C15F3C] rounded-xl hover:bg-[#C15F3C] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-widest"
                  >
                    <span>Show More Guidelines</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
                <button
                  onClick={() => openModal('question')}
                  className="w-full sm:w-auto px-6 py-3 text-xs font-bold text-[#6F6B63] border-2 border-[#E5E2DA] rounded-xl hover:border-[#C15F3C] hover:text-[#C15F3C] bg-white transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-widest"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  <span>Add Question</span>
                </button>
              </div>
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

      {/* Modal Overlay Component */}
      {modalType && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6 bg-[#2F2E2B]/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]">
            
            <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#E5E2DA] bg-[#FAFAFA]">
              <h3 className="text-lg font-bold text-[#2F2E2B]">
                {modalType === 'faq' ? 'Add New FAQ' : 'Submit a Question'}
              </h3>
              <button 
                onClick={closeModal} 
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-[#E5E2DA] text-[#6F6B63] hover:text-[#C15F3C] hover:border-[#C15F3C] transition-all shadow-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6 sm:p-8 overflow-y-auto">
              {submitSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-5 shadow-inner">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-[#2F2E2B] mb-2">Success!</h4>
                  <p className="text-[#6F6B63]">Your submission has been securely sent.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {submitError && (
                    <div className="p-4 bg-red-50 text-red-600 text-sm rounded-xl border border-red-100 flex items-start gap-3">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                      <span>{submitError}</span>
                    </div>
                  )}
                  
                  <div>
                    <label className="block text-sm font-semibold text-[#2F2E2B] mb-2">
                      Question <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      value={formQuestion}
                      onChange={(e) => setFormQuestion(e.target.value)}
                      placeholder="Enter the question..."
                      className="w-full px-4 py-3 rounded-xl border border-[#E5E2DA] focus:outline-none focus:border-[#C15F3C] focus:ring-2 focus:ring-[#C15F3C]/20 transition-all text-[#2F2E2B] placeholder-[#A3A099]"
                    />
                  </div>

                  {modalType === 'faq' && (
                    <div>
                      <label className="block text-sm font-semibold text-[#2F2E2B] mb-2">
                        Answer <span className="text-red-500">*</span>
                      </label>
                      <textarea 
                        value={formAnswer}
                        onChange={(e) => setFormAnswer(e.target.value)}
                        placeholder="Enter the detailed answer..."
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-[#E5E2DA] focus:outline-none focus:border-[#C15F3C] focus:ring-2 focus:ring-[#C15F3C]/20 transition-all resize-none text-[#2F2E2B] placeholder-[#A3A099]"
                      />
                    </div>
                  )}

                  <div className="pt-4 flex flex-col-reverse sm:flex-row justify-end gap-3 mt-2">
                    <button 
                      type="button" 
                      onClick={closeModal}
                      className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-[#6F6B63] hover:text-[#2F2E2B] bg-white border border-[#E5E2DA] rounded-xl hover:border-[#6F6B63] transition-all"
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit" 
                      disabled={submitLoading}
                      className="w-full sm:w-auto px-6 py-3 bg-[#C15F3C] text-white rounded-xl text-sm font-medium hover:bg-[#A94E30] transition-all shadow-sm hover:shadow-md disabled:bg-[#d99f8c] disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {submitLoading && (
                        <div className="w-4 h-4 border-2 border-white/50 border-t-white rounded-full animate-spin"></div>
                      )}
                      <span>{submitLoading ? 'Submitting...' : 'Submit'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
