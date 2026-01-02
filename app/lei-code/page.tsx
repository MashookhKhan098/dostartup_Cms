import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Registration/Hero';
import DynamicTabContent from '../components/DynamicTabContent';
import Faq from '../components/Faq';

export default function Home() {

const heroProps = {
  // ================= LEFT SIDE =================
  heading: "Quick & Global ",
  headingHighlight: "LEI Registration",
  description:
    "Get your Legal Entity Identifier (LEI) code to meet global financial compliance standards effortlessly.",

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
        "Legal Entity Identifier Code\nA global identification number for legal entities in financial transactions. Mandatory for large value cross-border deals.",
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
    {
      type: "select",
      name: "duration",
      placeholder: "Select Duration",
      options: ["1 Year", "3 Years", "5 Years"],
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
