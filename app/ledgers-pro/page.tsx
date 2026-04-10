"use client";

import { supabase } from "../../lib/supabase";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popularsearches from "../components/PopularSearches";
import Hero from "../components/Gst/Hero2";
import DynamicTabContent from "../components/DynamicTabContent";
import Faq from "../components/Faq";

import { Rocket, Zap, Users } from "lucide-react";

export default function Home() {
  const heroProps = {
    heading: "Partner with IndiaFilings",
    headingHighlight: "IndiaFilings",
    description:
      "Grow your business with IndiaFilings' AI-powered partner ecosystem - simplify compliance, automate workflows, and serve more clients with speed, precision, and confidence.",
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
      { type: "input", inputType: "text", name: "location", placeholder: "Location" },
      { type: "input", inputType: "text", name: "name", placeholder: "Name" },
      { type: "input", inputType: "email", name: "email", placeholder: "Email" },
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
      icon: <Rocket className="w-8 h-8 text-blue-600" />,
      title: "Scale Smarter, Grow Faster",
      description:
        "Designed for CA, Tax Practitioners & Consultants, LEDGERS Pro CRM streamlines client management and operations.",
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Productivity, Powered by AI",
      description:
        "AI tools help your team manage client demands efficiently while maintaining quality and compliance.",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Dedicated Customer Experience",
      description:
        "Personalized support for onboarding, troubleshooting, and optimizing your experience.",
    },
  ];

  // ✅ FIXED: Supabase submit function inside component
  const handleSubmit = async (formData: any) => {
    const { error } = await supabase.from("ledgers_pro_signups").insert([
      {
        accountant_type: formData.accountant_type,
        location: formData.location,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        business_name: formData.business_name,
      },
    ]);

    if (error) {
      console.error("Insert error:", error.message);
      return;
    }

    alert("Request submitted successfully");
  };

  return (
    <>
      <Navbar />

      <Hero {...heroProps} onSubmit={handleSubmit} />

      {/* Feature Section */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-50 rounded-full">
                  {feature.icon}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-center mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 text-center text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <DynamicTabContent category="GST" />
      <Faq />
      <Popularsearches />
      <Footer />
    </>
  );
}