
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Trademark/Hero2';
import DynamicTabContent from '../components/DynamicTabContent';
import Faq from '../components/Faq';


export default function Home() {
  const heroProps = {
  // LEFT SIDE
  heading: "Protect Your Brand. File Your Trademark.",
  headingHighlight: "Brand",
  description:
    "AI-powered brand monitoring software and trademark filing platform trusted by India's top brands.",

  features: [
    {
      icon: "plus",
      text: "Instant, Digital Trademark Filing",
    },
    {
      icon: "chart",
      text: "AI-Powered Trademark Search & Monitoring",
    },
    {
      icon: "users",
      text: "Experienced Trademark Lawyers",
    },
    {
      icon: "document",
      text: "Over 1 Lakh Brands Registered",
    },
  ],

  // RIGHT SIDE TABS (Individuals/MSMEs & All Others)
  

  // FORM FIELDS
  formFields: [
    {
      type: "input",
      inputType: "text",
      name: "brand_name",
      placeholder: "Brand Name",
    },
    {
      type: "select",
      name: "trademark_class",
      placeholder: "Select Class",
      options: [
        "Class 1 – Chemicals",
        "Class 9 – Electronics & Software",
        "Class 25 – Clothing",
        "Class 35 – Advertising & Business",
        "Class 41 – Education & Entertainment",
        "Class 42 – IT & Software Services",
      ],
    },
  ],
  
  tabs: [
    { name: "Individuals & MSMEs", path: null },
    { name: "All Others", path: null },
  ],
  defaultTab: "Individuals & MSMEs",

  tabDescriptions: {
    "Individuals & MSMEs":
      "Government fee is ₹4,500 for Individuals and valid UDYAM-registered MSMEs.",
    "All Others":
      "Applicable for companies, LLPs, foreign entities, and others. Government fees differ as per entity type.",
  },

  buttonText: "Register TM",

  // OPTIONAL
  // onSubmit: (data) => {
  //   console.log("Trademark Form Data:", data);
  // },
};


  return (
    <>
      <Navbar />
      <Hero {...heroProps} />
      <DynamicTabContent category="Trademark" />
      <Faq />
      <Popularsearches />
      <Footer />
    </>
  );
}