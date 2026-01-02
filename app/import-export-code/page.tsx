import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Registration/Hero';
import DynamicTabContent from '../components/DynamicTabContent';
import Faq from '../components/Faq';

export default function Home() {

const heroProps = {
  // ================= LEFT SIDE =================
  heading: "Simple & Quick ",
  headingHighlight: "Import Export Code",
  description:
    "Get your Import Export Code fast and start your import/export business with ease. Our experts guide you step by step for a smooth and compliant process.",

  features: [
    {
      icon: "document",
      text: "End-to-End Assistance for All Registrations",
    },
    {
      icon: "chart",
      text: "Smart Solutions Tailored to Your Business Needs",
    },
    {
      icon: "users",
      text: "100% Online and Paperless Process",
    },
    {
      icon: "plus",
      text: "Quick Turnaround with Zero Hassle",
    },
    {
      icon: "document",
      text: "Dedicated Experts to Guide You at Every Step",
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
      content: "Registration Service",
    },
    {
      type: "text",
      content:
        "Import Export Code\nA 10-digit code required for businesses to import or export goods. Issued by the Directorate General of Foreign Trade (DGFT).",
    },

    // 🔹 INPUT FIELDS
    {
      type: "input",
      inputType: "text",
      name: "pan_gstin",
      placeholder: "PAN / GSTIN",
    },
    {
      type: "select",
      name: "state",
      placeholder: "Select State / UT",
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
  ],

  buttonText: "Apply Now",
};


  return (
    <>
      <Navbar />
      <Hero {...heroProps}/>
      <DynamicTabContent category="E-Invoice" />
      <Faq />
      <Popularsearches />
      <Footer />
    </>
  );
}
