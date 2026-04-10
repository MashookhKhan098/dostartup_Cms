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

  const handleVerify = async (fieldName: string) => {
    setVerificationStates((p) => ({ ...p, [fieldName]: "loading" }));

    await new Promise((r) => setTimeout(r, 1000));

    const input = document.querySelector<HTMLInputElement>(
      `input[name="${fieldName}"]`
    );

    const value = input?.value?.toUpperCase().trim() || "";
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

    setVerificationStates((p) => ({
      ...p,
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
    onSubmit?.(formData);
  };

  const renderFormField = (field: FormField, index: number) => {
    const state = verificationStates[field.name] || "idle";

    if (field.type === "select") {
      return (
        <div key={index}>
          <label className="block text-xs mb-1">
            {field.placeholder}
          </label>

          <select
            name={field.name}
            className="w-full border rounded-lg px-4 py-3 text-sm"
          >
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

    if (field.type === "input") {
      return (
        <div key={index}>
          <label className="block text-xs mb-1 flex justify-between">
            {field.placeholder}

            {field.showVerify && (
              <span
                className={`text-[10px] ${
                  state === "verified"
                    ? "text-green-600"
                    : state === "error"
                    ? "text-red-500"
                    : "text-gray-400"
                }`}
              >
                {state}
              </span>
            )}
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
          </div>
        </div>
      );
    }

    if (field.type === "checkbox") {
      return (
        <label key={index} className="flex gap-2">
          <input type="checkbox" name={field.name} />
          <span className="text-sm">{field.label}</span>
        </label>
      );
    }

    return null;
  };

  const headingParts =
    heading && headingHighlight
      ? heading.split(headingHighlight)
      : [heading ?? "", ""];

  return (
    <div className="bg-[#F4F3EE]">
      <div className="max-w-7xl mx-auto p-6 flex gap-8">

        {/* LEFT */}
        <div className="flex-1 bg-white p-6 rounded-xl">
          <h1 className="text-2xl font-semibold">
            {headingParts[0]}
            <span className="text-[#C15F3C]">{headingHighlight}</span>
            {headingParts[1]}
          </h1>

          <p className="text-sm mt-2 text-gray-600">
            {description}
          </p>

          <div className="mt-4 space-y-2">
            {features?.map((f, i) => (
              <div key={i} className="text-sm">
                • {f.text}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="w-80 bg-white rounded-xl p-6">

          {tabs && (
            <div className="flex gap-2 mb-4">
              {tabs.map((t) => (
                <button
                  key={t.name}
                  onClick={() => handleTabClick(t.name, t.path)}
                  className={`px-3 py-1 text-xs rounded ${
                    activeTab === t.name
                      ? "bg-[#C15F3C] text-white"
                      : "border"
                  }`}
                >
                  {t.name}
                </button>
              ))}
            </div>
          )}

          {tabDescriptions?.[activeTab] && (
            <p className="text-xs mb-3 text-gray-500">
              {tabDescriptions[activeTab]}
            </p>
          )}

          <form
            onSubmit={(e: FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              const data = Object.fromEntries(
                new FormData(e.currentTarget)
              );
              handleGstSubmit(data);
            }}
            className="space-y-4"
          >
            {formFields?.map(renderFormField)}

            <button
              type="submit"
              className="w-full bg-[#C15F3C] text-white py-3 rounded-lg"
            >
              {buttonText || "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}