import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Registration/Hero';
import DynamicTabContent from '../components/DynamicTabContent';
import Faq from '../components/Faq';

export default function Home() {

   const heroProps = {
  // ================= LEFT SIDE =================
  headingHighlight: "ICEGATE Registration",
  description:
    "Register on ICEGATE quickly to manage your import and export filings seamlessly with expert support.",

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
    // 🔹 TEXT BLOCK (this was missing earlier)
    {
      type: "text",
      content: "Registration Service",
    },
    {
      type: "text",
      content:
        "ICEGATE Registration\nPortal for importers and exporters to file customs documents online. Simplifies trade processes with Indian Customs.",
    },

    // 🔹 INPUTS
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
