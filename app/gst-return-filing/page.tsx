import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popularsearches from "../components/PopularSearches";
import DynamicTabContent from "../components/DynamicTabContent";
import Faq from "../components/Faq";
import Price from "../components/Price";
import GstHeroClient from "./GstHeroClient";

export default function Home() {
  const heroProps = {
    heading: "Accountant for GST Filings",
    headingHighlight: "GST Filings",
    description:
      "File GST returns, manage invoices, and reconcile bank statements effortlessly using our platform.",

    features: [
      { icon: "document", text: "Automated GST Return Filing" },
      { icon: "wallet", text: "Invoice Management & Reconciliation" },
      { icon: "users", text: "Dedicated Expert Accountant Support" },
      { icon: "education", text: "Real-time Compliance Monitoring" },
    ],

    tabs: [
      { name: "Existing GST" },
      { name: "GST Registration" },
    ],

    defaultTab: "Existing GST",

    tabDescriptions: {
      "Existing GST":
        "For businesses that already have GST and need filing support.",
      "GST Registration":
        "For new GST registration with expert guidance.",
    },

    formFields: [
      {
        type: "input",
        inputType: "text",
        name: "gstin",
        placeholder: "Enter GSTIN",
      },
      {
        type: "select",
        name: "state",
        placeholder: "Select State",
        options: ["Gujarat", "Maharashtra", "Delhi", "Karnataka"],
      },
      {
        type: "input",
        inputType: "text",
        name: "pan",
        placeholder: "PAN",
        showVerify: true,
      },
      {
        type: "select",
        name: "nature_of_business",
        placeholder: "Nature of Business",
        options: ["Trader", "Manufacturer", "Service Provider"],
      },
      {
        type: "select",
        name: "package",
        placeholder: "Select Package",
        options: ["Basic - ₹999", "Standard - ₹1999", "Premium - ₹2999"],
      },
    ],

    buttonText: "Submit",
  };

  return (
    <>
      <Navbar />

      <GstHeroClient heroProps={heroProps} />

      <Price />

      <DynamicTabContent category="GST" />

      <Faq />

      <Popularsearches />

      <Footer />
    </>
  );
}