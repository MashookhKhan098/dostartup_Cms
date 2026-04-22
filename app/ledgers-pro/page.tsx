"use client";

import React from "react";
import { supabase } from "../../lib/supabase";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popularsearches from "../components/PopularSearches";
import Hero from "../components/Gst/Hero2";
import DynamicTabContent from "../components/DynamicTabContent";
import FAQAccordion from "../components/Faq";
import { Rocket, Zap, Users } from "lucide-react";
import { handleWhatsAppSubmission } from "@/lib/form-utils";

export default function Home() {
  const heroProps = {
    heading: "Partner with DoStartup",
    headingHighlight: "DoStartup",
    description: "Grow your business with DoStartup's AI-powered partner ecosystem - simplify compliance, automate workflows, and serve more clients with speed, precision, and confidence.",
    features: [
      { icon: "users", text: "AI-Powered Partner Ecosystem" },
      { icon: "document", text: "Simplified Compliance Management" },
      { icon: "wallet", text: "Automated Workflow Solutions" },
      { icon: "education", text: "Serve More Clients with Precision" },
    ],

    tabs: [],
    defaultTab: null,
    tabDescriptions: null,

    modalTitle: "LEDGERS PRO Platform Signup",

    formFields: [
      {
        type: "select",
        name: "accountant_type",
        placeholder: "Accountant Type",
        label: "Accountant Type",
        options: [
          "Chartered Accountant",
          "Tax Consultant",
          "Company Secretary",
          "Cost Accountant",
          "Accounting Firm",
          "Individual Accountant",
          "Others",
        ],
      },
      {
        type: "input",
        inputType: "text",
        name: "location",
        placeholder: "Location",
      },
      {
        type: "input",
        inputType: "text",
        name: "name",
        placeholder: "Name",
      },
      {
        type: "input",
        inputType: "email",
        name: "email",
        placeholder: "Email",
      },
      {
        type: "phone",
        name: "phone",
        placeholder: "Phone",
        countryCode: "+91",
        defaultCountry: "IN",
      },
      {
        type: "input",
        inputType: "text",
        name: "business_name",
        placeholder: "Business Name",
      },
    ],

    buttonText: "Request Demo",
  };

  const features = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Scale Smarter, Grow Faster",
      description: "Designed specifically for CA, Tax Practitioners & Consultants professionals, LEDGERS Pro CRM streamlines client management and operations, empowering you to scale your business seamlessly.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Productivity, Powered by AI",
      description: "Stay ahead in a competitive market. Our AI tools equip your in-house team to manage client demands efficiently while maintaining quality and compliance.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Dedicated Customer Experience",
      description: "Our team is committed to providing personalized support at every step-onboarding, troubleshooting, and optimizing your use of LEDGERS.",
    },
  ];

  const handleSubmit = async (formData: any) => {
    // Try to save to Supabase (non-blocking - won't stop submission if table missing)
    try {
      await supabase.from("ledgers_pro_signups").insert([
        {
          accountant_type: formData.accountant_type,
          location: formData.location,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          business_name: formData.business_name,
        },
      ]);
    } catch (err) {
      console.error("Supabase insert error:", err);
    }

    // Always send lead to email + open WhatsApp regardless of Supabase result
    await handleWhatsAppSubmission(formData, "LEDGERS PRO");
  };

  return (
    <>
      <Navbar />
      <Hero {...heroProps} onSubmit={handleSubmit} />

      {/* Feature Cards Section */}
      <div className="py-16 bg-[#F4F3EE]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-[#E5E2DA] group"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-[#FDF1EC] rounded-2xl border border-[#C15F3C]/10 group-hover:bg-[#C15F3C]/10 transition-colors">
                    {React.cloneElement(feature.icon as React.ReactElement, { className: "w-8 h-8 text-[#C15F3C]" })}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#2F2E2B] text-center mb-4">
                  {feature.title}
                </h3>
                <p className="text-[#6F6B63] text-center text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <DynamicTabContent category="GST" />
      <FAQAccordion />
      <Popularsearches />
      <Footer />
    </>
  );
}



