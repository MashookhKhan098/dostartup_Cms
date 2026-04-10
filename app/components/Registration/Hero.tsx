"use client";
import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

type Tab = { name: string; path?: string };
type Feature = { icon: string; text: string };
type FormField = { type: string;[key: string]: any };

export type DynamicHeroSectionProps = {
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

export default function RegistrationHero({
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
}: DynamicHeroSectionProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>(defaultTab || tabs?.[0]?.name || "");

  const handleTabClick = (tabName: string, path?: string): void => {
    setActiveTab(tabName);
    if (path) {
      router.push(path);
    }
  };

  return (
    <div className="bg-[#F4F3EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* LEFT SECTION */}
          <div className="flex-1 bg-white rounded-2xl shadow-sm border border-[#E5E2DA] p-6">
            <div className="flex flex-col md:flex-row gap-8">

              {/* LEFT SIDEBAR WITH IMAGE PLACEHOLDER */}
              <div className="w-full md:w-64 flex-shrink-0">
                <div className="w-full h-48 bg-gradient-to-br from-[#C15F3C] to-[#A94E30] rounded-xl border border-[#E5E2DA] flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Registrations</span>
                </div>

                <div className="mt-4 space-y-2">
                  {["Documents Required", "Fee Structure", "Eligibility"].map((item) => (
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
                  <div className="inline-flex items-center gap-2 bg-white border border-[#E5E2DA] rounded-full px-3 py-1">
                    <div className="w-2 h-2 bg-[#C15F3C] rounded-full" />
                    <span className="text-xs font-medium text-[#C15F3C]">
                      TRUSTED BY 50K+ BUSINESSES
                    </span>
                  </div>
                </div>

                {/* HEADING */}
                <div>
                  <h1 className="text-2xl sm:text-3xl font-semibold text-[#2F2E2B] leading-tight">
                    {heading}<br />
                    <span className="text-[#C15F3C]">
                      {headingHighlight}
                    </span>
                  </h1>

                  <p className="text-sm text-[#6F6B63] leading-relaxed mt-3">
                    {description}
                  </p>
                </div>

                {/* FEATURES BOX */}
                <div className="bg-[#F9F8F6] border border-[#E5E2DA] rounded-2xl p-6">
                  <span className="inline-block bg-[#C15F3C] text-white text-[10px] font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider">
                    Key Features
                  </span>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#C15F3C] border border-[#E5E2DA]">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-[#2F2E2B]">
                        Digital Process
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#C15F3C] rounded-full flex items-center justify-center text-white">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-[#2F2E2B]">
                        Super Fast Service
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#C15F3C] border border-[#E5E2DA]">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1a1 1 0 112 0v1a1 1 0 11-2 0zM13.536 14.95a1 1 0 010-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414 0zM6.464 14.95a1 1 0 01-1.414 0l-.707-.707a1 1 0 011.414-1.414l.707.707a1 1 0 010 1.414z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-[#2F2E2B]">
                        Trade License Renewal
                      </span>
                    </div>
                  </div>
                </div>

                {/* RATING */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-[#C15F3C] text-[#C15F3C]" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-[#2F2E2B]">4.9/5</span>
                    <span className="text-sm text-[#B1ADA1]">|</span>
                    <span className="text-sm text-[#6F6B63]">50k+ reviews</span>
                  </div>
                </div>

                {/* LINKS */}
                <div className="flex justify-between text-sm">
                  <button className="text-[#C15F3C] hover:underline">
                    Terms and conditions
                  </button>
                  <button className="text-[#C15F3C] hover:underline">
                    Need Help?
                  </button>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div id="registration-form" className="lg:w-96 bg-white rounded-2xl shadow-sm border border-[#E5E2DA] overflow-hidden">

            {/* FORM HEADER */}
            <div className="bg-gradient-to-r from-[#C15F3C] to-[#A94E30] px-6 py-4">
              <h2 className="text-lg font-semibold text-white">Sign In</h2>
              <p className="text-sm text-[#F4F3EE]">to get started with your registration</p>
            </div>

            {/* TABS */}
            {tabs && tabs.length > 0 && (
              <div className="border-b border-[#E5E2DA] bg-white px-4 py-3">
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

            {/* FORM CONTENT */}
            <div className="p-6 space-y-6">

              {/* TAB DESCRIPTION */}
              {tabDescriptions && activeTab && tabDescriptions[activeTab] && (
                <div className="bg-[#F9F8F6] border-l-4 border-[#C15F3C] p-4 rounded-r-lg">
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
                {formFields?.map((field, index) => {
                  switch (field.type) {
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
                            required
                            maxLength={field.name === 'phone' ? 10 : field.name === 'pan' ? 10 : undefined}
                            onInput={(e: React.FormEvent<HTMLInputElement>) => {
                              const target = e.currentTarget;
                              if (field.name === 'phone' || field.inputType === 'tel') {
                                target.value = target.value.replace(/[^0-9]/g, '');
                              }
                            }}
                            className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] placeholder-[#B1ADA1] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] bg-white"
                          />
                        </div>
                      );
                    case "select":
                      return (
                        <div key={index}>
                          <label className="block text-xs text-[#6F6B63] mb-1">
                            {field.placeholder}
                          </label>
                          <div className="relative">
                            <select
                              name={field.name}
                              required
                              className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] bg-white appearance-none cursor-pointer"
                            >
                              <option value="">Select {field.placeholder}</option>
                              {field.options?.map((opt: string, i: number) => (
                                <option key={i} value={opt}>{opt}</option>
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
                    case "text":
                      return (
                        <p key={index} className="text-sm text-[#6F6B63]">{field.content}</p>
                      );
                    default:
                      return null;
                  }
                })}

                <button
                  type="submit"
                  className="w-full bg-[#C15F3C] text-white font-semibold py-3 rounded-lg text-sm hover:bg-[#A94E30] transition shadow-sm hover:shadow-md mt-2"
                >
                  {buttonText || "Get Started"} →
                </button>

                {/* SECURITY BADGE */}
                <div className="flex items-center justify-center gap-2 text-xs text-[#B1ADA1] pt-2">
                  <svg className="w-4 h-4 text-[#C15F3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>Secure · Instant access</span>
                </div>

              </form>
            </div>

            {/* FOOTER */}
            <div className="bg-white px-6 py-3 border-t border-[#E5E2DA]">
              <p className="text-sm text-center text-[#6F6B63]">
                New user?{' '}
                <button className="text-[#C15F3C] hover:underline font-semibold">
                  Create account →
                </button>
              </p>
            </div>

          </div>
        </div>

        {/* TRUST BADGES - REDUCED BOTTOM GAP */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-[#6F6B63] mt-2">
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-[#C15F3C] text-[#C15F3C]" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span>4.9/5 (2.5k+ reviews)</span>
          </div>
          <span>Trusted by 50k+ businesses</span>
        </div>

      </div>
    </div>
  );
}
