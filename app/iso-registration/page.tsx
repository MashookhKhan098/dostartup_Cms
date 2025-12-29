import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Registration/Hero';
import DynamicTabContent from '../components/DynamicTabContent';
import Faq from '../components/Faq';

export default function Home() {

const heroProps = {
  // ================= LEFT SIDE =================
  heading: "ISO Registration ",
  headingHighlight: "for Businesses",
  description:
    "Boost your business credibility and global recognition with professional ISO Registration services. Ensure compliance with international quality standards through expert guidance and end-to-end certification support.",

  features: [
    {
      icon: "document",
      text: "Transparent & Competitive Pricing",
    },
    {
      icon: "chart",
      text: "Assistance for All ISO Standards (9001, 14001, 45001 & more)",
    },
    {
      icon: "users",
      text: "Document Preparation & Audit Support",
    },
    {
      icon: "plus",
      text: "Fast Processing & Digital Certificate Delivery",
    },
    {
      icon: "document",
      text: "Trusted by 50,000+ Certified Businesses",
    },
  ],

  // ================= RIGHT SIDE =================
  tabs: [],
  defaultTab: null,
  tabDescriptions: null,

  // ================= FORM FIELDS =================
  formFields: [
    // 🔹 TEXT BLOCKS
    {
      type: "text",
      content: "Service",
    },
    {
      type: "text",
      content:
        "ISO Registration\nISO Registration is the process of certifying that a company meets international quality and management standards.",
    },

    // 🔹 SELECT & INPUT FIELDS
    {
      type: "select",
      name: "variant",
      placeholder: "Select Variant Type",
      options: [
        "ISO 9001 – Quality Management",
        "ISO 14001 – Environmental Management",
        "ISO 45001 – Occupational Health & Safety",
        "ISO 22000 – Food Safety",
        "ISO 27001 – Information Security",
      ],
    },
    {
      type: "select",
      name: "state",
      placeholder: "Select State of Registration",
      options: [
        "Andaman & Nicobar Islands",
        "Delhi",
        "Gujarat",
        "Karnataka",
        "Maharashtra",
        "Tamil Nadu",
        "Telangana",
        "Uttar Pradesh",
        "West Bengal",
      ],
    },
    {
      type: "input",
      inputType: "text",
      name: "pan_gstin",
      placeholder: "PAN / GSTIN",
    },
  ],

  buttonText: "Apply Now",
};

  return (
    <>
      <Navbar />
      <Hero {...heroProps}/>
      <DynamicTabContent category="Proprietorship" />
      <Faq />
      <Popularsearches />
      <Footer />
    </>
  );
}
