"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../lib/supabase";

type Tab = { name: string; path?: string };
type Feature = { icon: string; text: string };
type FormField = { type: string; name: string; [key: string]: any };

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
  document: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M4 4a2 2 0 012-2h4.586..." />
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
  onSubmit,
}: GstHero2Props) {
  const router = useRouter();

  const initialTab = defaultTab || tabs?.[0]?.name || "";
  const [activeTab, setActiveTab] = useState<string>(initialTab);

  const [verificationStates, setVerificationStates] = useState<
    Record<string, "idle" | "loading" | "verified" | "error">
  >({});

  const handleTabClick = (tabName: string, path?: string) => {
    setActiveTab(tabName);
    if (path) router.push(path);
  };

<<<<<<< Updated upstream
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
=======
  const handleVerify = async (fieldName: string) => {
    setVerificationStates((p) => ({ ...p, [fieldName]: "loading" }));

    await new Promise((r) => setTimeout(r, 1200));

    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;

    const input = document.querySelector<HTMLInputElement>(
      `input[name="${fieldName}"]`
    );

    const value = input?.value?.toUpperCase().trim() || "";

    setVerificationStates((prev) => ({
      ...prev,
      [fieldName]: panRegex.test(value) ? "verified" : "error",
    }));
  };

  const handleGstSubmit = async (formData: Record<string, any>) => {
    const { error } = await supabase.from("gst_forms").insert([
      {
        form_type: activeTab,
        gstin: formData.gstin || null,
        state: formData.state || null,
        pan: formData.pan || null,
        nature_of_business: formData.nature_of_business || null,
        package: formData.package || null,
      },
    ]);

    if (error) {
      console.error(error);
      alert("Submission failed");
      return;
    }

    alert("Submitted successfully 🚀");

    // optional external handler
    onSubmit?.(formData);
  };

  const renderFormField = (field: FormField, index: number) => {
    const state = verificationStates[field.name] || "idle";

    if (field.type === "input") {
      return (
        <div key={index}>
          <label className="block text-xs mb-1 flex justify-between">
            {field.placeholder}
          </label>

          <div className="relative">
            <input
              name={field.name}
              type={field.inputType || "text"}
              placeholder={field.placeholder}
              className="w-full border rounded-lg px-4 py-3 text-sm"
            />

            {field.showVerify && (
              <button
                type="button"
                onClick={() => handleVerify(field.name)}
                className="absolute right-2 top-2 text-xs bg-[#C15F3C] text-white px-3 py-1 rounded"
              >
                {state === "loading"
                  ? "..."
                  : state === "verified"
                  ? "Verified"
                  : state === "error"
                  ? "Retry"
                  : "Verify"}
              </button>
            )}
>>>>>>> Stashed changes
          </div>
        </div>
      );
    }

    if (field.type === "select") {
      return (
        <div key={index}>
          <label className="block text-xs mb-1">{field.placeholder}</label>
          <select name={field.name} className="w-full border rounded-lg p-3">
            <option value="">Select {field.placeholder}</option>
            {field.options?.map((o: string, i: number) => (
              <option key={i} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
      );
    }

    if (field.type === "checkbox") {
      return (
        <label key={index} className="flex gap-2">
          <input type="checkbox" name={field.name} />
          {field.label}
        </label>
      );
    }

    return null;
  };

  return (
<<<<<<< Updated upstream
    <div className="min-h-screen bg-[#F4F3EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
=======
    <div className="bg-[#F4F3EE]">
      <div className="max-w-7xl mx-auto p-4 flex gap-8">
        {/* LEFT */}
        <div className="flex-1 bg-white p-6 rounded-xl">
          <h1 className="text-2xl font-semibold">
            {heading}
            <span className="text-[#C15F3C]">{headingHighlight}</span>
          </h1>
          <p className="text-sm mt-2">{description}</p>
        </div>
>>>>>>> Stashed changes

        {/* RIGHT FORM */}
        <div className="w-80 bg-white rounded-xl p-6">
          <form
            onSubmit={(e: FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const data = Object.fromEntries(fd);

              handleGstSubmit(data);
            }}
          >
            <div className="space-y-4">
              {formFields?.map(renderFormField)}

<<<<<<< Updated upstream
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
=======
              <button className="w-full bg-[#C15F3C] text-white py-3 rounded-lg">
                {buttonText || "Submit"}
              </button>
            </div>
          </form>
>>>>>>> Stashed changes
        </div>
      </div>
    </div>
  );
}