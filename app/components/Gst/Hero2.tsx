"use client";
import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

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
  const [isExpanded, setIsExpanded] = useState(false);

  const handleTabClick = (tabName: string, path?: string) => {
    setActiveTab(tabName);
    if (path) {
      router.push(path);
    }
  };

  const renderIcon = (iconType: string) => {
    return ICONS[iconType] ?? ICONS.document;
  };

  const [verificationStates, setVerificationStates] = useState<Record<string, 'idle' | 'loading' | 'verified' | 'error'>>({});

  const handleVerify = async (fieldName: string) => {
    setVerificationStates(prev => ({ ...prev, [fieldName]: 'loading' }));

    // Mocking API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Simple mock logic: check if PAN matches standard format
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    const form = document.querySelector('form');
    const input = form?.querySelector(`input[name="${fieldName}"]`) as HTMLInputElement;
    const value = input?.value?.toUpperCase() || "";

    if (input && panRegex.test(value)) {
      setVerificationStates(prev => ({ ...prev, [fieldName]: 'verified' }));
    } else {
      setVerificationStates(prev => ({ ...prev, [fieldName]: 'error' }));
    }
  };

  const renderFormField = (field: FormField, index: number) => {
    const fieldVerificationState = verificationStates[field.name] || 'idle';

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
                required
                className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] bg-white appearance-none cursor-pointer"
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
            <label className="block text-xs text-[#6F6B63] mb-1 flex justify-between items-center">
              {field.placeholder}
              {field.showVerify && fieldVerificationState === 'verified' && (
                <span className="text-[10px] text-green-600 font-bold uppercase tracking-wider bg-green-50 px-2 py-0.5 rounded-full border border-green-100 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                  Verified
                </span>
              )}
            </label>
            <div className="relative">
              <input
                type={(field.name === 'phone' || field.inputType === 'tel') ? 'tel' : (field.inputType || "text")}
                name={field.name}
                placeholder={field.placeholder}
                required
                maxLength={field.name === 'phone' ? 10 : field.name === 'pan' ? 10 : undefined}
                pattern={field.name === 'pan' ? "[A-Z]{5}[0-9]{4}[A-Z]{1}" : field.name === 'phone' ? "[0-9]{10}" : undefined}
                onInput={(e: React.FormEvent<HTMLInputElement>) => {
                  const target = e.currentTarget;
                  if (field.name === 'phone') {
                    target.value = target.value.replace(/[^0-9]/g, '');
                  } else if (field.name === 'pan') {
                    target.value = target.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
                  }
                }}
                className={`w-full border rounded-lg px-4 py-3 text-sm text-[#2F2E2B] placeholder-[#B1ADA1] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] bg-white ${field.showVerify ? 'pr-20' : ''} ${fieldVerificationState === 'verified' ? 'border-green-200' : 'border-[#E5E2DA]'}`}
              />
              {field.showVerify && (
                <button
                  type="button"
                  onClick={() => handleVerify(field.name)}
                  disabled={fieldVerificationState === 'loading'}
                  className={`absolute right-2 top-1.5 bottom-1.5 px-3 rounded-md text-[10px] font-bold uppercase tracking-wider transition-all ${
                    fieldVerificationState === 'loading'
                      ? 'bg-[#F4F3EE] text-gray-400 cursor-not-allowed'
                      : fieldVerificationState === 'verified'
                        ? 'bg-green-600 text-white shadow-sm'
                        : fieldVerificationState === 'error'
                          ? 'bg-red-500 text-white'
                          : 'bg-[#C15F3C] text-white hover:bg-[#A94E30] shadow-sm'
                  }`}
                >
                  {fieldVerificationState === 'loading' ? '...' : fieldVerificationState === 'verified' ? 'Verify' : fieldVerificationState === 'error' ? 'Retry' : 'Verify'}
                </button>
              )}
            </div>
            {field.showVerify && fieldVerificationState === 'error' && (
              <p className="mt-1 text-[10px] text-red-500 font-medium">Invalid {field.placeholder} format</p>
            )}
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
    <div className="bg-[#F4F3EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex flex-col lg:flex-row gap-8 items-start">

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
                  <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-sm text-[#C15F3C] font-medium hover:underline flex items-center gap-1 group"
                  >
                    {isExpanded ? "Show Less ↑" : "Learn More →"}
                  </button>
                  
                  {isExpanded && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="text-xs text-[#6F6B63] leading-relaxed pt-2 bg-[#F4F3EE] p-3 rounded-lg border border-[#E5E2DA]"
                    >
                      Our comprehensive {headingHighlight} registration service handles everything from documentation to final government approval. 
                      Stay compliant with expert CA support and 24/7 status tracking through our dedicated portal.
                    </motion.div>
                  )}
                </div>
              </div>

              {/* MAIN CONTENT */}
              <div className="flex-1 space-y-6">

                {/* BADGE */}
                <div>
                  <div className="inline-flex items-center gap-2 bg-white border border-[#E5E2DA] rounded-full px-3 py-1">
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
                <div className="bg-[#F9F8F6] border border-[#E5E2DA] rounded-2xl p-6">
                  <span className="inline-block bg-[#C15F3C] text-white text-[10px] font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider">
                    Key Benefits
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {features?.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-[#E5E2DA] shadow-sm">
                        <div className="w-8 h-8 bg-[#F9F8F6] rounded-full flex items-center justify-center text-[#C15F3C] border border-[#E5E2DA] flex-shrink-0">
                          {renderIcon(feature.icon)}
                        </div>
                        <span className="text-sm font-semibold text-[#2F2E2B]">
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
                <div className="flex justify-between items-center text-sm pt-4 border-t border-[#F4F3EE]">
                  <button className="text-[#C15F3C] hover:underline font-medium">
                    Terms and conditions
                  </button>
                  <button className="text-[#C15F3C] hover:underline font-medium">
                    Refer a Friend
                  </button>
                </div>

                {/* HOW IT WORKS TIMELINE - ADDED TO FILL SPACE */}
                <div className="mt-8 pt-6 border-t border-[#F4F3EE]">
                  <h3 className="text-xs font-bold text-[#2F2E2B] uppercase tracking-widest mb-6 opacity-60">How it Works</h3>
                  <div className="relative">
                    <div className="absolute top-4 left-0 w-full h-0.5 bg-[#F4F3EE]"></div>
                    <div className="flex justify-between relative text-center">
                      {[
                        { step: "01", label: "Consultation", sub: "Expert Guidance" },
                        { step: "02", label: "Documentation", sub: "Paperless Upload" },
                        { step: "03", label: "Submission", sub: "Fast Filing" },
                        { step: "04", label: "Approval", sub: "Final Certificate" }
                      ].map((s, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-white border-2 border-[#C15F3C] flex items-center justify-center text-[10px] font-bold text-[#C15F3C] z-10 mb-2 shadow-sm">
                            {s.step}
                          </div>
                          <p className="text-[10px] font-bold text-[#2F2E2B]">{s.label}</p>
                          <p className="text-[9px] text-[#B1ADA1]">{s.sub}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div id="registration-form" className="lg:w-80 bg-white rounded-2xl shadow-sm border border-[#E5E2DA] overflow-hidden">

            {/* FORM HEADER */}
            <div className="bg-gradient-to-r from-[#C15F3C] to-[#A94E30] px-6 py-4">
              <h2 className="text-lg font-semibold text-white">Get Started Today</h2>
              <p className="text-sm text-[#F4F3EE]">Free consultation • No hidden charges</p>
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

            {/* CONTENT */}
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
            <div className="bg-white px-6 py-3 border-t border-[#E5E2DA]">
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
