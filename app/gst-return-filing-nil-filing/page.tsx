"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popularsearches from "../components/PopularSearches";
import Hero from "../components/Gst/Hero2";
import DynamicTabContent from "../components/DynamicTabContent";
import FAQAccordion from "../components/Faq";
import DynamicPricingSection from "../components/DynamicPricingSection";
import GstNilHeroClient from "./GstNilHeroClient";

export default function Home() {
  const gstHeroProps = {
    heading: "File Your GST Returns with Confidence",
    headingHighlight: "GST Returns",
    description: "Experience hassle-free GST compliance with expert support at every step. Trusted by thousands of businesses for secure and timely GST filing.",
    features: [
      { icon: "document", text: "Automated Data Import & Error Checks" },
      { icon: "users", text: "Dedicated GST Experts & Support" },
      { icon: "wallet", text: "Affordable Pricing for Businesses of All Sizes" },
    ],

    tabs: [
      { name: "File GSTR-1 Return" },
      { name: "File GSTR-3B Return" },
    ],

    defaultTab: "File GSTR-1 Return",

    tabDescriptions: {
      "File GSTR-1 Return": "GSTR-1 is a monthly/quarterly return for outward supplies. Upload your sales data and our experts will review and prepare your return for filing.",
      "File GSTR-3B Return": "GSTR-3B is a monthly summary return for declaring GST liabilities and input tax credit. Let our experts handle your filing with accuracy.",
    },

    formFields: [
      {
        type: "input",
        inputType: "text",
        name: "gstin",
        placeholder: "GSTIN",
      },
      {
        type: "input",
        inputType: "text",
        name: "username",
        placeholder: "GST User Name",
      },
      {
        type: "checkbox",
        name: "upload_consent",
        label: "Upload excel file with sales data for Accountant to review and prepare GST return.",
      },
    ],

    buttonText: "Generate OTP",
  };

  const nilHeroProps = {
    heading: "File NIL GST Returns Easily",
    headingHighlight: "NIL Filing",
    description: "Submit NIL GST returns quickly with expert verification and compliance support.",

    features: [
      { icon: "document", text: "Zero Transaction Filing" },
      { icon: "users", text: "Expert Assisted Submission" },
      { icon: "wallet", text: "Fast & Affordable Compliance" },
    ],

    tabs: [
      { name: "File GSTR-1 Return" },
      { name: "File GSTR-3B Return" },
    ],

    defaultTab: "File GSTR-1 Return",

    tabDescriptions: {
      "File GSTR-1 Return": "NIL GSTR-1 filing support for businesses with no outward supplies.",
      "File GSTR-3B Return": "NIL GSTR-3B filing support for businesses with no GST liability.",
    },

    formFields: [
      {
        type: "input",
        inputType: "text",
        name: "gstin",
        placeholder: "GSTIN",
      },
      {
        type: "input",
        inputType: "text",
        name: "username",
        placeholder: "GST Username",
      },
      {
        type: "checkbox",
        name: "upload_consent",
        label: "Consent for NIL return verification",
      },
    ],

    buttonText: "Submit NIL Return",
  };

  return (
    <>
      <Navbar />

      {/* GST Return Filing Section */}
      <Hero {...gstHeroProps} />

      <DynamicTabContent category="GST" />

      {/* NIL GST Filing Section */}
      <GstNilHeroClient heroProps={nilHeroProps} />

      <DynamicPricingSection />

      <FAQAccordion />
      <Popularsearches />
      <Footer />
    </>
  );
}

