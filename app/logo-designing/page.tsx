import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Trademark/Hero2';
import DynamicTabContent from '../components/DynamicTabContent';
import Faq from '../components/Faq';
import Price from '../components/Price';

export default function Home() {
  const pricingData = {
  heading: "Simple, Transparent Patent Registration Pricing",
  subheading: "File your patent easily with IndiaFilings — guided by experts, transparent pricing, and complete support for provisional and complete patent filings.",
  note: "",
  showStateSelector: false, // Image does not show state selection
  cards: [
    {
      id: 1,
      title: "Patent Search",
      price: "12,899",
      priceNote: "+ GST",
      buttonText: "Start Filing Now",
      features: [
        "Patentability Assessment",
        "Similarity Analysis",
        "Relevant Prior Art List",
        "Patent Search Report"
      ]
    },
    {
      id: 2,
      badge: "Most Popular",
      title: "Provisional Patent",
      price: "35,899",
      priceNote: "+ GST",
      buttonText: "Start Filing Now",
      features: [
        "Provisional Specification Draft",
        "Flowcharts (if applicable)",
        "Filing in IP portal (Form)",
        "Patent Application Number",
        "Timeline for filing Complete Specification (within 12 months)"
      ]
    },
    {
      id: 3,
      title: "Complete Patent",
      price: "69,899",
      priceNote: "+ GST",
      buttonText: "Start Filing Now",
      features: [
        "Complete Specification Draft (Claims/Abstract)",
        "Patent Drawings / Diagrams",
        "Filing in IP portal (Form)",
        "Patent Application Number"
      ]
    }
  ]
};


  const heroProps = {
    // ================= LEFT SIDE =================
    heading: "Create a Logo Instantly",
    headingHighlight: "Logo",
    description:
      "Make your brand stand out with IndiaFilings. Our streamlined Logo Design & Trademark service helps you craft distinctive, high-impact logos that reflect your brand vision and ensure complete trademark readiness—merging creativity with legal precision.",

    features: [
      {
        icon: "plus",
        text: "Create Unique Logos That Strengthen Your Brand",
      },
      {
        icon: "document",
        text: "Trademark-Ready Logo Designs for Legal Protection",
      },
      {
        icon: "users",
        text: "Expert Designers & Trademark Specialists on Board",
      },
      {
        icon: "chart",
        text: "End-to-End Brand Protection & Registration Support",
      },
    ],

    // ================= RIGHT SIDE =================
    tabs: [], // no tabs in this design
    defaultTab: null,
    tabDescriptions: null,

    // ================= FORM FIELDS =================
    formFields: [
      {
        type: "input",
        inputType: "text",
        name: "brand_name",
        placeholder: "Brand Name",
      },
      {
        type: "input",
        inputType: "text",
        name: "tagline",
        placeholder: "Tag Line (optional)",
      },
      {
        type: "input",
        inputType: "text",
        name: "description",
        placeholder: "Description",
      },

      // TEXT INFO
      {
        type: "text",
        content: "What colors should be used in the logo?",
      },

      // COLOR OPTIONS (horizontal with color preview)
      {
        type: "color-options",
        options: [
          { name: "Pink", hex: "#e409f0" },
          { name: "Red", hex: "#990014" },
          { name: "Blue", hex: "#005f82" },
          { name: "Green", hex: "#008f15" },
        ],
      },

      {
        type: "input",
        inputType: "file",
        name: "sample_logo",
        placeholder: "Sample Logo",
      },
    ],

    buttonText: "Get Quote",
  };

  return (
    <>
      <Navbar />
      <Hero {...heroProps} />
      <Price />
      <DynamicTabContent category="Proprietorship" />
      <Faq />
      <Popularsearches />
      <Footer />
    </>
  );
}
