import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popularsearches from "../components/PopularSearches";
import DynamicTabContent from "../components/DynamicTabContent";
import Faq from "../components/Faq";
import Price from "../components/Price";
import GstNilHeroClient from "./GstNilHeroClient";
import Hero from "../components/Gst/Hero2";

export default function Home() {
  // =========================
  // GST HERO PROPS
  // =========================
  const gstHeroProps = {
    heading: "File Your GST Returns with Confidence",
    headingHighlight: "GST Returns",
    description:
      "Experience hassle-free GST compliance with expert support at every step. Trusted by thousands of businesses.",

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
      "File GSTR-1 Return":
        "Upload sales data and our experts will prepare your return.",
      "File GSTR-3B Return":
        "Declare GST liabilities with expert accuracy.",
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
        label:
          "Upload excel file for accountant review and GST preparation.",
      },
    ],

    buttonText: "Generate OTP",
  };

  // =========================
  // NIL GST HERO PROPS
  // =========================
  const nilHeroProps = {
    heading: "File NIL GST Returns Easily",
    headingHighlight: "NIL Filing",
    description:
      "Submit NIL GST returns quickly with expert verification and compliance support.",

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
      "File GSTR-1 Return": "NIL GSTR-1 filing support.",
      "File GSTR-3B Return": "NIL GSTR-3B filing support.",
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

      {/* GST SECTION */}
      <Hero {...gstHeroProps} />
      <Price />

      <DynamicTabContent category="GST" />

      {/* NIL GST SECTION */}
      <GstNilHeroClient heroProps={nilHeroProps} />

      {/* FIX: removed missing DynamicPricingSection */}

      <Faq />
      <Popularsearches />

      <Footer />
    </>
  );
}