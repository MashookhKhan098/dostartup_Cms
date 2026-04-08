"use client";

import React, { useState } from "react";

export default function AddQuestionModal({ category = "general" }: { category?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formQuestion, setFormQuestion] = useState("");
  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const N8N_WEBHOOK_URL = "https://your-n8n-webhook-url.com/";

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formQuestion.trim()) {
      setSubmitError("Question is required.");
      return;
    }

    setSubmitLoading(true);
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      const payload = {
        question: formQuestion,
        type: 'question',
        category,
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

  return (
    <>
      <button
        onClick={() => {
          setIsOpen(true);
          setFormQuestion("");
          setSubmitSuccess(false);
          setSubmitError("");
        }}
        className="px-4 py-2 border-2 border-slate-200 rounded-md text-sm text-slate-600 hover:border-amber-600 hover:text-amber-700 bg-[#F4F3EE] transition-colors font-medium flex items-center justify-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
        </svg>
        <span>Add Question</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity">
          <div className="bg-[#F4F3EE] rounded-2xl shadow-xl w-full max-w-lg overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-[#F4F3EE]">
              <h3 className="text-lg font-bold text-slate-900">
                Submit a Question
              </h3>
              <button 
                onClick={closeModal} 
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F4F3EE] border border-gray-200 text-gray-500 hover:text-amber-700 hover:border-amber-700 transition-all shadow-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6">
              {submitSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Success!</h4>
                  <p className="text-gray-600">Your question has been securely sent.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  {submitError && (
                    <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100 flex items-start gap-2">
                       <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                      <span>{submitError}</span>
                    </div>
                  )}
                  
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Question <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      value={formQuestion}
                      onChange={(e) => setFormQuestion(e.target.value)}
                      placeholder="Enter your question..."
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-all text-gray-900"
                    />
                  </div>

                  <div className="pt-4 flex justify-end gap-3 mt-2">
                    <button 
                      type="button" 
                      onClick={closeModal}
                      className="px-5 py-2.5 text-sm font-medium text-gray-600 bg-[#F4F3EE] border border-gray-200 rounded-xl hover:border-gray-400 hover:text-gray-900 transition-colors"
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit" 
                      disabled={submitLoading}
                      className="px-5 py-2.5 bg-gradient-to-r from-amber-700 to-amber-800 text-white rounded-xl text-sm font-medium hover:from-amber-800 hover:to-amber-900 transition-all shadow-sm hover:shadow-md disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {submitLoading && (
                        <div className="w-3.5 h-3.5 border-2 border-white/50 border-t-white rounded-full animate-spin"></div>
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
    </>
  );
}
