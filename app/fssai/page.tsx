import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Registration/Hero';
import DynamicTabContent from '../components/DynamicTabContent';
import Faq from '../components/Faq';

export default function Home() {

   const heroProps = {
  // ================= LEFT SIDE =================
  heading: "Get Your ",
  headingHighlight: "FSSAI",
  description:
    "Ensure your food business is fully compliant with FSSAI regulations. Our expert team provides step-by-step guidance for fast, secure, and hassle-free FSSAI registration, so you can focus on growing your business with confidence.",

  features: [
    {
      icon: "document",
      text: "Fully Online & Paperless",
    },
    {
      icon: "users",
      text: "Expert Guidance at Every Step",
    },
    {
      icon: "chart",
      text: "Dedicated FSSAI Experts for Your Business",
    },
    {
      icon: "plus",
      text: "Quick & Hassle-Free Processing",
    },
    {
      icon: "document",
      text: "100% Genuine & Verified Certification",
    },
  ],

  // ================= RIGHT SIDE =================
  tabs: [],
  defaultTab: null,
  tabDescriptions: null,

  // ================= FORM FIELDS =================
  formFields: [
    {
      type: "input",
      inputType: "text",
      name: "pan_gstin",
      placeholder: "PAN / GSTIN",
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
        "Telangana",
        "Uttar Pradesh",
      ],
    },
    {
      type: "select",
      name: "business_activity",
      placeholder: "Select Business Activity",
      options: [
        "Manufacturer",
        "Trader",
        "Restaurant / Cafe",
        "Cloud Kitchen",
        "Food Processor",
        "Distributor",
        "Retailer",
      ],
    },
    {
      type: "select",
      name: "license_type",
      placeholder: "Select Type",
      options: [
        "FSSAI Basic Registration",
        "FSSAI State License",
        "FSSAI Central License",
      ],
    },
    {
      type: "select",
      name: "validity",
      placeholder: "Select Validity",
      options: [
        "1 Year",
        "2 Years",
        "3 Years",
        "4 Years",
        "5 Years",
      ],
    },
  ],

  buttonText: "Start Service",
};


  return (
    <>
      <Navbar />
      <Hero {...heroProps}/>
      <DynamicTabContent category="Trademark" />
      <Faq />
      <Popularsearches />
      <Footer />
    </>
  );
}
