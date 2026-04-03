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

const API =
  `https://cms.dostartup.in/api/content/items/startupFaq?token=${TOKEN}`;

export default function FAQAccordion({ category }: FAQAccordionProps) {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(5);
  const [title] = useState("Frequently Asked Questions");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFaqs() {
      try {
        const res = await fetch(API);
        const json = await res.json();

        if (Array.isArray(json)) {
          const filtered = category
            ? json.filter(
              (item: FAQ) =>
                item.category === category ||
                item.CATEGORY === category
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

  if (loading) {
    return (
      <div className="bg-[#F4F3EE] py-16 px-4">
        <div className="max-w-4xl mx-auto">
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
    <div className="bg-white py-10 px-6">
      <div className="max-w-[1200px] mx-auto">

        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-left mb-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 mb-4 shadow-sm">
              <div className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse" />
              <span className="text-xs font-medium text-emerald-600 uppercase tracking-wider">
                Knowledge Base
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
              {title}
            </h2>
            <p className="text-slate-600 text-base max-w-2xl">
              Find answers to commonly asked questions about our services
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-full mt-4"></div>
          </div>
          <div className="mt-6 sm:mt-0 flex-shrink-0">
            <button className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl text-sm font-medium hover:bg-emerald-700 transition-all shadow-sm">
              + Add Question
            </button>
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
                    className="w-full px-6 sm:px-8 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-all duration-200"
                  >
                    <div className="flex items-start gap-3 pr-4">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center transition-all duration-200 ${isOpen
                          ? 'bg-emerald-600 text-white'
                          : 'bg-slate-100 text-emerald-600 group-hover:bg-emerald-50'
                        }`}>
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className={`text-sm sm:text-base font-medium transition-colors ${isOpen ? 'text-emerald-700' : 'text-slate-900'
                        }`}>
                        {question}
                      </span>
                    </div>

                    <svg
                      className={`w-5 h-5 text-[#6F6B63] transition-all duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                  >
                    <div className="px-6 sm:px-8 pb-5 pt-2">
                      <div className="flex gap-3">
                        <div className="w-6 flex-shrink-0"></div>
                        <div className="flex-1">
                          <div className="h-px w-full bg-gradient-to-r from-emerald-500 to-transparent mb-4"></div>
                          <p className="text-sm text-slate-600 leading-relaxed">
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

          {/* Load More Section */}
          {hasMore && (
            <div className="px-6 sm:px-8 py-6 border-t border-slate-200 bg-gradient-to-r from-white to-slate-50">
              <button
                onClick={loadMore}
                className="group w-full sm:w-auto px-6 py-3 text-sm font-medium text-emerald-600 border-2 border-emerald-600 rounded-xl hover:bg-emerald-600 hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Load More Questions</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          )}

        </div>

        <div className="mt-10 text-center">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <h3 className="text-lg font-semibold text-slate-900 mb-1">
                  Still have questions?
                </h3>
                <p className="text-sm text-slate-600">
                  Can't find the answer you're looking for?
                </p>
              </div>
              <div className="flex gap-3">
                <button className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl text-sm font-medium hover:bg-emerald-700 transition-all shadow-sm hover:shadow-md">
                  Contact Support
                </button>
                <button className="px-5 py-2.5 border border-slate-200 text-slate-600 rounded-xl text-sm font-medium hover:border-emerald-600 hover:text-emerald-600 transition-all">
                  Live Chat
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}