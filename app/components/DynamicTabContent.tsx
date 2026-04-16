"use client";

import React, { useEffect, useState } from "react";
import NewsletterForm from "./NewsletterForm";

interface DynamicTabContentProps {
  category: string;
}

const COCKPIT_URL = process.env.NEXT_PUBLIC_COCKPIT_URL;
const TOKEN = process.env.NEXT_PUBLIC_COCKPIT_API_KEY;

const FALLBACK_DATA: Record<string, any> = {
  "one-person-company": {
    title: "One Person Company Registration",
    description: "The One Person Company (OPC) is a revolutionary business structure that allows a single entrepreneur to operate a corporate entity with limited liability.",
    introduction: "Introduced in the Companies Act 2013, One Person Company is a hybrid of Sole Proprietorship and Private Limited Company models. It provides the legal protection of a company while offering the flexibility of a single owner.",
    sections: [
      {
        heading: "Key Benefits of OPC",
        content: "OPC offers several advantages including limited liability, continuous existence, and easy access to funding.",
        points: ["Separate Legal Entity", "Limited Liability Protection", "Easy Transferability", "Minimal Compliance compared to Pvt Ltd"]
      },
      {
        heading: "Registration Process",
        content: "The process involves obtaining DSC, DIN, and filing for incorporation through the SPICe+ form.",
        points: ["Step 1: Obtain Digital Signature (DSC)", "Step 2: Apply for Name Approval", "Step 3: Filing Incorporation Forms", "Step 4: Issue of Certificate of Incorporation"]
      }
    ],
    author: { name: "Compliance Expert", role: "Chartered Accountant", updatedDate: "April 2024" }
  },
  "llp": {
    title: "LLP Registration Services",
    description: "Limited Liability Partnership (LLP) is one of the easiest ways to start a business in India with partners.",
    introduction: "LLPs provide the benefits of limited liability to its partners and allow them to manage their internal affairs like a partnership firm.",
    sections: [
      {
        heading: "Why Choose LLP?",
        content: "LLPs are ideal for professional firms and small businesses that want low compliance and limited liability.",
        points: ["No Minimum Capital", "Lower Compliance Cost", "No Dividend Distribution Tax", "Limited Liability for all Partners"]
      }
    ],
    author: { name: "Legal Advisory", role: "Corporate Lawyer", updatedDate: "April 2024" }
  }
};

export default function DynamicTabContent({ category }: DynamicTabContentProps) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const url = `${COCKPIT_URL}/api/content/items/testing?token=${TOKEN}`;
        const res = await fetch(url, { cache: "no-store" });
        const json = await res.json();

        if (Array.isArray(json) && json.length > 0) {
          const item = json.find(
            (entry: any) => entry.category?.toLowerCase() === category?.toLowerCase()
          );
          if (item?.description) {
            setData(item.description);
            setLoading(false);
            return;
          }
        }
      } catch (error) {
        console.error("DynamicTabContent fetch error:", error);
      }

      // Fallback
      const lowerCat = category.toLowerCase();
      setData(FALLBACK_DATA[lowerCat] || FALLBACK_DATA[category] || null);
      setLoading(false);
    }

    fetchData();
  }, [category]);

  if (loading) {
    return (
      <div className="bg-white rounded-2xl p-10 animate-pulse">
        <div className="h-8 bg-gray-100 rounded w-1/2 mb-4"></div>
        <div className="h-4 bg-gray-100 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-100 rounded w-3/4"></div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="bg-white border border-gray-100 rounded-2xl p-8 text-center">
        <p className="text-[#C15F3C] font-medium">
          No data found for "{category}".
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white py-5 sm:py-6 rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Modern Hero with Split Layout */}
        <div className="relative mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Side - Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-full px-4 py-1.5 shadow-sm">
                <div className="relative">
                  <div className="w-2 h-2 bg-[#C15F3C] rounded-full animate-ping absolute"></div>
                  <div className="w-2 h-2 bg-[#C15F3C] rounded-full"></div>
                </div>
                <span className="text-xs font-medium text-[#C15F3C] uppercase">Expert Guide</span>
                <div className="w-px h-3 bg-gray-100"></div>
                <span className="text-xs text-[#6F6B63]">Updated Weekly</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-[#2F2E2B]">{data.title?.split(' ').slice(0, -1).join(' ')}</span>
                <br />
                <span className="bg-gradient-to-r from-[#C15F3C] to-[#A94E30] bg-clip-text text-transparent">
                  {data.title?.split(' ').slice(-1)}
                </span>
              </h1>

              <p className="text-[#6F6B63] text-lg leading-relaxed max-w-lg">
                {data.description}
              </p>

              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-[#C15F3C] to-[#A94E30] border-2 border-white shadow-sm"></div>
                  ))}
                </div>
                <div className="text-sm text-[#6F6B63]">
                  <span className="font-semibold text-[#2F2E2B]">2.5k+</span> readers this week
                </div>
              </div>
            </div>

            {/* Right Side - Visual */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#C15F3C]/20 to-transparent rounded-full blur-3xl"></div>
              <div className="relative bg-[#F9F8F6] rounded-2xl shadow-xl border border-gray-100 p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C15F3C] to-[#A94E30] flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2F2E2B]">Quick Summary</h3>
                    <p className="text-xs text-[#6F6B63]">5 min read</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {[
                    "Complete step-by-step guide",
                    "Expert tips & best practices",
                    "Latest compliance updates"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[#6F6B63]">
                      <svg className="w-4 h-4 text-[#C15F3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8">

          {/* Sidebar - Left */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <div className="space-y-6 sticky top-6">

              {/* Author Profile Card */}
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                <div className="bg-gradient-to-r from-[#C15F3C] to-[#A94E30] px-5 py-4">
                  <h3 className="text-white font-semibold text-sm">About the Author</h3>
                </div>
                <div className="p-5 text-center">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#C15F3C] to-[#A94E30] rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg mb-3">
                    {(data.author?.name || "NA")
                      .split(" ")
                      .map((n: string) => n[0])
                      .join("")}
                  </div>
                  <h4 className="font-semibold text-[#2F2E2B]">{data.author?.name || "Expert Author"}</h4>
                  <p className="text-sm text-[#C15F3C] font-medium mt-1">{data.author?.role || "Industry Expert"}</p>
                  <div className="flex items-center justify-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 fill-[#C15F3C] text-[#C15F3C]" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              {/* Progress Card */}
              <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-[#C15F3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h4 className="font-semibold text-[#2F2E2B] text-sm">Reading Progress</h4>
                </div>
                <div className="h-2 bg-[#F9F8F6] rounded-full overflow-hidden mb-2">
                  <div className="h-full bg-gradient-to-r from-[#C15F3C] to-[#A94E30] rounded-full" style={{ width: '65%' }}></div>
                </div>
                <p className="text-xs text-[#B1ADA1]">65% completed • 3 min left</p>
              </div>

            </div>
          </div>

          {/* Main Content - Center */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

              {/* Content */}
              <div className="px-6 md:px-8 py-3 md:py-4">

                {/* Introduction */}
                <div className="mb-10">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-[#6F6B63] leading-relaxed text-base first-letter:text-4xl first-letter:font-bold first-letter:text-[#C15F3C] first-letter:mr-2 first-letter:float-left">
                      {data.introduction}
                    </p>
                  </div>
                </div>

                {/* Sections with Timeline Style */}
                {(data.sections || []).map((section: any, index: number) => (
                  <div key={index} className="relative mb-12 last:mb-0 pl-8 border-l-2 border-gray-100 group">
                    <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[#F9F8F6] border-2 border-[#C15F3C] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <div className="w-2 h-2 rounded-full bg-[#C15F3C]"></div>
                    </div>

                    <h2 className="text-2xl font-bold text-[#2F2E2B] mb-4 group-hover:text-[#C15F3C] transition-colors">
                      {section.heading}
                    </h2>

                    <p className="text-[#6F6B63] leading-relaxed mb-5">
                      {section.content}
                    </p>

                    {(section.points || []).length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {(section.points || []).map((point: string, i: number) => {
                          const [title] = point.split(":");
                          return (
                            <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F9F8F6] rounded-full text-xs text-[#6F6B63] hover:bg-[#C15F3C] hover:text-white transition-all cursor-pointer group/item">
                              <svg className="w-3 h-3 group-hover/item:text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              <span>{title}</span>
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Sidebar - Right */}
          <div className="lg:col-span-3 order-3">
            <div className="space-y-6 sticky top-6">

              {/* Status Badge */}
              <div className="bg-gradient-to-br from-[#C15F3C] to-[#A94E30] rounded-2xl p-5 text-white text-center shadow-lg">
                <div className="w-16 h-16 mx-auto bg-white/20 rounded-2xl flex items-center justify-center text-3xl mb-4">
                  🏆
                </div>
                <h3 className="font-bold text-lg mb-2">Verified Guide</h3>
                <p className="text-white/90 text-sm mb-4">Our compliance team has verified this information for 2024-25.</p>
              </div>

              {/* Newsletter */}
              <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-[#C15F3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <h4 className="font-semibold text-[#2F2E2B] text-sm">Stay Updated</h4>
                </div>
                <p className="text-xs text-[#6F6B63] mb-3">Compliance alerts sent to your inbox</p>
                <NewsletterForm
                  wrapperClassName="flex flex-col gap-2"
                  inputClassName="w-full px-3 py-2 border border-gray-100 rounded-lg text-sm bg-[#F9F8F6] focus:ring-1 focus:ring-[#C15F3C] outline-none"
                  buttonClassName="w-full px-4 py-2 bg-[#C15F3C] text-white rounded-lg text-sm hover:bg-[#A94E30] transition-all"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
