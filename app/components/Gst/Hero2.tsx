"use client";
import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

type Tab = { name: string; path?: string };
type Feature = { icon: string; text: string };
type FormField = { type: string;[key: string]: any };

export type GstHero2Props = {
  heading?: string;
  headingHighlight?: string;
  description?: string;
  features?: Feature[];
  tabs?: Tab[];
  defaultTab?: string | null;
  tabDescriptions?: Record<string, string> | null;
  formFields?: FormField[];
  buttonText?: string;
  onSubmit?: (data: Record<string, FormDataEntryValue>) => void;
};

const ICONS: Record<string, JSX.Element> = {
  plus: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
        clipRule="evenodd"
      />
    </svg>
  ),
  document: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
        clipRule="evenodd"
      />
    </svg>
  ),
  chart: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  ),
  education: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
    </svg>
  ),
  pause: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
        clipRule="evenodd"
      />
    </svg>
  ),
  users: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
    </svg>
  ),
  wallet: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
        clipRule="evenodd"
      />
    </svg>
  ),
};

export default function DynamicHeroSection({
  heading,
  headingHighlight,
  description,
  features,
  tabs,
  defaultTab,
  tabDescriptions,
  formFields,
  buttonText,
  onSubmit
}: GstHero2Props) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(defaultTab || tabs?.[0]?.name);

  const handleTabClick = (tabName: string, path?: string) => {
    setActiveTab(tabName);
    if (path) {
      router.push(path);
    }
  };

  const renderIcon = (iconType: string) => {
    return ICONS[iconType] ?? ICONS.document;
  };

  const renderFormField = (field: FormField, index: number) => {
    switch (field.type) {
      case "select":
        return (
          <div key={index}>
            <label className="block text-xs text-[#6F6B63] mb-1">
              {field.placeholder}
            </label>
            <div className="relative">
              <select
                name={field.name}
                className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] bg-[#F4F3EE] appearance-none cursor-pointer"
              >
                <option value="">Select {field.placeholder}</option>
                {field.options?.map((option: string, i: number) => (
                  <option key={i} value={option}>{option}</option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-[#6F6B63]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        );

      case "input":
        return (
          <div key={index}>
            <label className="block text-xs text-[#6F6B63] mb-1">
              {field.placeholder}
            </label>
            <input
              type={field.inputType || "text"}
              name={field.name}
              placeholder={field.placeholder}
              className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] placeholder-[#B1ADA1] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] bg-[#F4F3EE]"
            />
          </div>
        );

      case "checkbox":
        return (
          <label key={index} className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name={field.name}
              className="mt-1 w-4 h-4 accent-[#C15F3C] border-[#E5E2DA] rounded focus:ring-1 focus:ring-[#C15F3C]"
            />
            <span className="text-sm text-[#6F6B63]">{field.label}</span>
          </label>
        );

      case "text":
        return (
          <p key={index} className="text-sm text-[#6F6B63]">
            {field.content}
          </p>
        );

      default:
        return null;
    }
  };

  const headingParts =
    heading && headingHighlight ? heading.split(headingHighlight) : [heading ?? "", ""];

  return (
    <div className="min-h-screen bg-[#F4F3EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* LEFT SECTION */}
          <div className="flex-1 bg-white rounded-2xl shadow-sm border border-[#E5E2DA] p-6">
            <div className="flex flex-col md:flex-row gap-8">

              {/* LEFT SIDEBAR WITH IMAGE PLACEHOLDER */}
              <div className="w-full md:w-64 flex-shrink-0">
                <div className="w-full h-48 bg-gradient-to-br from-[#C15F3C] to-[#A94E30] rounded-xl border border-[#E5E2DA] flex items-center justify-center">
                  <span className="text-white font-bold text-xl">GST</span>
                </div>

                <div className="mt-4 space-y-2">
                  {["Why Choose Us", "Documentation", "Pricing"].map((item) => (
                    <p key={item} className="text-sm text-[#6F6B63] hover:text-[#C15F3C] cursor-pointer">
                      {item}
                    </p>
                  ))}
                  <button className="text-sm text-[#C15F3C] font-medium hover:underline">
                    Learn More →
                  </button>
                </div>
              </div>

              {/* MAIN CONTENT */}
              <div className="flex-1 space-y-6">

                {/* BADGE */}
                <div>
                  <div className="inline-flex items-center gap-2 bg-[#F4F3EE] border border-[#E5E2DA] rounded-full px-3 py-1">
                    <div className="w-2 h-2 bg-[#C15F3C] rounded-full" />
                    <span className="text-xs font-medium text-[#C15F3C]">
                      #1 REGISTRATION PLATFORM
                    </span>
                  </div>
                </div>

                {/* HEADING */}
                <div>
                  <h1 className="text-2xl font-semibold text-[#2F2E2B] leading-tight">
                    {headingParts[0]}
                    <span className="text-[#C15F3C]">
                      {headingHighlight}
                    </span>
                    {headingParts[1]}
                  </h1>

                  <p className="text-sm text-[#6F6B63] leading-relaxed mt-3">
                    {description}
                  </p>
                </div>

                {/* FEATURES */}
                <div className="bg-[#F4F3EE] border border-[#E5E2DA] rounded-xl p-5">
                  <span className="inline-block bg-[#C15F3C] text-white text-xs px-3 py-1.5 rounded-full mb-4">
                    Key Benefits
                  </span>

                  <div className="space-y-3">
                    {features?.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#C15F3C] border border-[#E5E2DA]">
                          {renderIcon(feature.icon)}
                        </div>
                        <span className="text-sm font-medium text-[#2F2E2B]">
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* TRUST BADGES */}
                <div className="flex items-center gap-4 text-sm text-[#6F6B63]">
                  <span>★★★★★ 4.9/5 (2.5k+ reviews)</span>
                  <span>Trusted by 50k+ businesses</span>
                </div>

                {/* LINKS */}
                <div className="flex justify-between text-sm">
                  <button className="text-[#C15F3C] hover:underline">
                    Terms and conditions
                  </button>
                  <button className="text-[#C15F3C] hover:underline">
                    Refer a Friend
                  </button>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:w-80 bg-white rounded-2xl shadow-sm border border-[#E5E2DA] overflow-hidden">

            {/* FORM HEADER */}
            <div className="bg-gradient-to-r from-[#C15F3C] to-[#A94E30] px-6 py-4">
              <h2 className="text-lg font-semibold text-white">Get Started Today</h2>
              <p className="text-sm text-[#F4F3EE]">Free consultation • No hidden charges</p>
            </div>

            {/* TABS */}
            {tabs && tabs.length > 0 && (
              <div className="border-b border-[#E5E2DA] bg-[#F4F3EE] px-4 py-3">
                <div className="flex gap-2">
                  {tabs.map(({ name, path }) => (
                    <button
                      key={name}
                      onClick={() => handleTabClick(name, path)}
                      className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${activeTab === name
                        ? "bg-[#C15F3C] text-white"
                        : "bg-white text-[#6F6B63] border border-[#E5E2DA] hover:border-[#C15F3C] hover:text-[#C15F3C]"
                        }`}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* CONTENT */}
            <div className="p-6 space-y-6">

              {/* TAB DESCRIPTION */}
              {tabDescriptions && activeTab && tabDescriptions[activeTab] && (
                <div className="bg-[#F4F3EE] border-l-4 border-[#C15F3C] p-4 rounded-r-lg">
                  <p className="text-sm text-[#2F2E2B] leading-relaxed">
                    {tabDescriptions[activeTab]}
                  </p>
                </div>
              )}

              {/* FORM */}
              <form
                onSubmit={(e: FormEvent<HTMLFormElement>) => {
                  e.preventDefault();
                  if (onSubmit) {
                    const formData = new FormData(e.currentTarget);
                    onSubmit(Object.fromEntries(formData));
                  }
                }}
                className="space-y-4"
              >
                {formFields?.map((field, index) => renderFormField(field, index))}

                <button
                  type="submit"
                  className="w-full bg-[#C15F3C] text-white font-semibold py-3 rounded-lg text-sm hover:bg-[#A94E30] transition shadow-sm hover:shadow-md"
                >
                  {buttonText || "Get Started"} →
                </button>

                {/* SECURITY BADGE */}
                <div className="flex items-center justify-center gap-2 text-xs text-[#B1ADA1] pt-2">
                  <svg className="w-4 h-4 text-[#C15F3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>100% secure · No spam · Instant confirmation</span>
                </div>
              </form>
            </div>

            {/* FOOTER */}
            <div className="bg-[#F4F3EE] px-6 py-3 border-t border-[#E5E2DA]">
              <p className="text-sm text-center text-[#6F6B63]">
                Already started?{' '}
                <button className="text-[#C15F3C] hover:underline font-semibold">
                  Track Application →
                </button>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}