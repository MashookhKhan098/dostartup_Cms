"use client";

import { useEffect, useState } from "react";

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
const API = `https://cms.dostartup.in/api/content/items/startupFaq?token=${TOKEN}`;
const N8N_WEBHOOK_URL = "https://your-n8n-webhook-url.com/"; // Replace with actual n8n webhook URL

export default function FAQAccordion({ category }: FAQAccordionProps) {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(5);
  const [title] = useState("Frequently Asked Questions");
  const [loading, setLoading] = useState(true);

  // Modal State for n8n Webhook
  const [modalType, setModalType] = useState<'faq' | 'question' | null>(null);
  const [formQuestion, setFormQuestion] = useState("");
  const [formAnswer, setFormAnswer] = useState("");
  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    async function fetchFaqs() {
      try {
        const res = await fetch(API);
        const json = await res.json();

        if (Array.isArray(json)) {
          const filtered = category
            ? json.filter(
                (item: FAQ) =>
                  item.category === category || item.CATEGORY === category
              )
            : json;
          setFaqs(filtered);
        }
      } catch (err) {
        console.error("Cockpit FAQ fetch error:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchFaqs();
  }, [category]);

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
        category: category || "general",
      };

      const res = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // Even if n8n gives a non-200, we check if it went through
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
      <div className="bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-[#E5E2DA] p-12 text-center">
            <div className="inline-block">
              <div className="w-12 h-12 border-4 border-[#E5E2DA] border-t-[#C15F3C] rounded-full animate-spin"></div>
            </div>
            <p className="mt-4 text-[#6F6B63]">Loading FAQs...</p>
          </div>
        </div>
      </div>
    );
  }

  const visibleFaqs = faqs.slice(0, visibleCount);
  const hasMore = visibleCount < faqs.length;

  return (
    <div className="bg-[#ffffff] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN: FAQ SECTION */}
          <div className="lg:col-span-2">
            
            {/* Header Section */}
            <div className="mb-10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="text-left">
                  <div className="inline-flex items-center gap-2 bg-white border border-[#E5E2DA] rounded-full px-4 py-1.5 mb-4 shadow-sm">
                    <div className="w-2 h-2 bg-[#C15F3C] rounded-full animate-pulse" />
                    <span className="text-xs font-medium text-[#C15F3C] uppercase tracking-wider">
                      Knowledge Base
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#2F2E2B] mb-3 leading-tight">
                    {title}
                  </h2>
                  <p className="text-[#6F6B63] text-base">
                    Find answers to commonly asked questions about our services
                  </p>
                  <div className="h-1 w-20 bg-gradient-to-r from-[#C15F3C] to-[#A94E30] rounded-full mt-5"></div>
                </div>


              </div>
            </div>

            {/* FAQ Container */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#E5E2DA] overflow-hidden">
              
              {/* FAQ Items */}
              <div className="divide-y divide-[#E5E2DA]">
                {visibleFaqs.map((faq, index) => {
                  const question = faq.question || faq.QUESTION;
                  const answer = faq.answer || faq.ANSWER;
                  const isOpen = openIndex === index;

                  return (
                    <div key={faq._id || faq.id || index} className="group">
                      <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full px-6 sm:px-8 py-5 flex items-center justify-between text-left hover:bg-[#F9F8F6] transition-all duration-200"
                      >
                        <div className="flex items-start gap-4 pr-4">
                          <div className={`flex-shrink-0 w-6 h-6 mt-0.5 rounded-lg flex items-center justify-center transition-all duration-200 ${isOpen ? 'bg-[#C15F3C] text-white shadow-sm' : 'bg-[#F4F3EE] text-[#C15F3C] group-hover:bg-[#C15F3C]/10'}`}>
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className={`text-sm sm:text-base font-medium transition-colors ${isOpen ? 'text-[#C15F3C]' : 'text-[#2F2E2B]'}`}>
                            {question}
                          </span>
                        </div>

                        <svg
                          className={`w-5 h-5 text-[#6F6B63] transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                        <div className="px-6 sm:px-8 pb-6 pt-1">
                          <div className="flex gap-4">
                            <div className="w-6 flex-shrink-0"></div>
                            <div className="flex-1">
                              <div className="h-px w-full bg-gradient-to-r from-[#C15F3C]/30 to-transparent mb-4"></div>
                              <p className="text-sm text-[#6F6B63] leading-relaxed">
                                {answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Load More & Add Question Section */}
              <div className="px-6 sm:px-8 py-6 border-t border-[#E5E2DA] bg-[#FAFAFA] flex flex-col sm:flex-row items-center justify-start gap-4">
                {hasMore && (
                  <button
                    onClick={loadMore}
                    className="group w-full sm:w-auto px-6 py-2.5 text-sm font-medium text-[#C15F3C] border-2 border-[#C15F3C] rounded-xl hover:bg-[#C15F3C] hover:text-white transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow"
                  >
                    <span>Load More Questions</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}

                <button
                  onClick={() => openModal('question')}
                  className="w-full sm:w-auto px-6 py-2.5 text-sm font-medium text-[#6F6B63] border-2 border-[#E5E2DA] rounded-xl hover:border-[#C15F3C] hover:text-[#C15F3C] bg-white transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  <span>Add Question</span>
                </button>
              </div>
            </div>

            {/* Still Have Questions Section */}
            <div className="mt-8 text-center sm:text-left">
              <div className="bg-white rounded-2xl border border-[#E5E2DA] p-6 sm:p-8 shadow-sm hover:shadow transition-shadow">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg font-semibold text-[#2F2E2B] mb-1">
                      Still have questions?
                    </h3>
                    <p className="text-sm text-[#6F6B63]">
                      Can't find the answer you're looking for? Reach out to us.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <button className="px-5 py-2.5 bg-[#C15F3C] text-white rounded-xl text-sm font-medium hover:bg-[#A94E30] transition-all shadow-sm flex-1 sm:flex-none">
                      Contact Support
                    </button>
                    <button className="px-5 py-2.5 border border-[#E5E2DA] text-[#6F6B63] bg-white rounded-xl text-sm font-medium hover:border-[#C15F3C] hover:text-[#C15F3C] transition-all flex-1 sm:flex-none">
                      Live Chat
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: BLOGS PLACEHOLDER */}
          <div className="lg:col-span-1 hidden lg:block">
            <div className="sticky top-6">
              <div className="bg-white rounded-2xl shadow-sm border border-[#E5E2DA] p-6 h-full min-h-[400px] flex flex-col items-center justify-center text-center bg-gradient-to-b from-white to-[#FAFAFA]">
                <div className="w-16 h-16 bg-white border border-[#E5E2DA] shadow-sm rounded-full flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-[#C15F3C]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15M9 11l3 3L22 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#2F2E2B] mb-2">
                  Related Insights
                </h3>
                <p className="text-[#6F6B63] text-sm px-4">
                  Latest blogs and articles will appear here. Stay tuned for expert advice!
                </p>
                <div className="mt-8 border-t border-dashed border-[#E5E2DA] w-full pt-8">
                  <div className="animate-pulse space-y-5 px-4">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-[#F4F3EE] rounded-lg flex-shrink-0"></div>
                      <div className="flex-1 space-y-2 py-1">
                        <div className="h-3 bg-[#F4F3EE] rounded w-3/4"></div>
                        <div className="h-3 bg-[#F4F3EE] rounded w-1/2"></div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-[#F4F3EE] rounded-lg flex-shrink-0"></div>
                      <div className="flex-1 space-y-2 py-1">
                        <div className="h-3 bg-[#F4F3EE] rounded w-5/6"></div>
                        <div className="h-3 bg-[#F4F3EE] rounded w-2/3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* MOBILE BLOGS PLACEHOLDER (Visible only on mobile/tablet at bottom) */}
          <div className="lg:hidden col-span-1 mt-4">
             <div className="bg-white rounded-2xl shadow-sm border border-[#E5E2DA] p-8 text-center bg-gradient-to-b from-white to-[#FAFAFA]">
                <h3 className="text-xl font-semibold text-[#2F2E2B] mb-2">
                  Related Insights
                </h3>
                <p className="text-[#6F6B63] text-sm">
                  Latest blogs and articles will appear here soon.
                </p>
             </div>
          </div>

        </div>
      </div>

      {/* Modal Overlay Component */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#2F2E2B]/50 backdrop-blur-sm z-[999]">
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