import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Gst/Hero2';
import DynamicTabContent from '../components/DynamicTabContent';
import FAQAccordion from '../components/Faq';
import DynamicPricingSection from '../components/DynamicPricingSection';

export default function Home() {
  const heroProps = {
    // Left side content
    heading: "Accountant for GST Filings",
    headingHighlight: "GST Filings",
    description: "File GST returns, manage invoices, and reconcile bank statements effortlessly using our Accountants & LEDGERS platform.",
    features: [
      {
        icon: "document",
        text: "Automated GST Return Filing"
      },
      {
        icon: "wallet",
        text: "Invoice Management & Reconciliation"
      },
      {
        icon: "users",
        text: "Dedicated Expert Accountant Support"
      },
      {
        icon: "education",
        text: "Real-time Compliance Monitoring"
      }
    ],
    
    // Right side form - Tabs
    tabs: [
      { name: "Existing GST" },
      { name: "GST Registration" }
    ],
    defaultTab: "Existing GST",
    tabDescriptions: {
      "Existing GST": "For businesses that already have a GST number and need assistance with filing returns, managing invoices, and maintaining compliance. Enter your GSTIN to get started with our accounting services.",
      "GST Registration": "For businesses or individuals applying for GST for the first time. Get your GST number and start managing your compliance with expert guidance from our team."
    },
    
    // Form fields
    formFields: [
      {
        type: "input",
        inputType: "text",
        name: "gstin",
        placeholder: "Enter GSTIN",
        showOnTab: "Existing GST"
      },
      {
        type: "select",
        name: "state",
        placeholder: "Select State",
        options: [
          "Andhra Pradesh",
          "Delhi",
          "Gujarat",
          "Karnataka",
          "Maharashtra",
          "Tamil Nadu",
          "Uttar Pradesh",
          "West Bengal"
        ],
        showOnTab: "GST Registration"
      },
      {
        type: "input",
        inputType: "text",
        name: "pan",
        placeholder: "PAN",
        showOnTab: "GST Registration"
      },
      {
        type: "select",
        name: "nature_of_business",
        placeholder: "Nature of Business",
        options: [
          "Manufacturer",
          "Trader",
          "Service Provider",
          "Retailer",
          "Wholesaler",
          "E-commerce",
          "Others"
        ]
      },
      {
        type: "select",
        name: "package",
        placeholder: "Select Package",
        options: [
          "Basic Package - ₹999",
          "Standard Package - ₹1,999",
          "Premium Package - ₹2,999"
        ]
      }
    ],
    
    buttonText: "Submit",
  };

  return (
    <>
      <Navbar />
      <Hero {...heroProps} />
      <DynamicTabContent category="GST" />
      <DynamicPricingSection />
      <FAQAccordion />
      <Popularsearches />
      <Footer />
    </>
  );
}
