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
  heading: "Simplify",
  headingHighlight: "Copyright Registration",
  description:
    "Secure your creative works with IndiaFilings. Our expert-guided online Copyright Registration process protects your artistic, literary, and digital creations—ensuring your ownership and peace of mind.",

  features: [
    {
      icon: "shield",
      text: "Protect Your Original Creative Works Legally",
    },
    {
      icon: "rocket",
      text: "Quick & Easy Online Copyright Filing",
    },
    {
      icon: "search",
      text: "Get an Official Copyright Registration Certificate",
    },
    {
      icon: "user-check",
      text: "Expert Guidance Through Every Step",
    },
    {
      icon: "shield-check",
      text: "Nationwide Copyright Protection",
    },
  ],

  // ================= RIGHT SIDE =================
  tabs: [], // no tabs in this design
  defaultTab: null,
  tabDescriptions: null,

  // ================= FORM FIELDS =================
  formFields: [
    {
      type: "select",
      name: "copyright_filing_type",
      placeholder: "Select Copyright Filing Type",
      options: [
        "Literary Work",
        "Artistic Work",
        "Software / Digital Work",
        "Musical Work",
        "Other"
      ],
    },
    {
      type: "input",
      inputType: "text",
      name: "work_title",
      placeholder: "Title of the Work",
    },
    {
      type: "input",
      inputType: "text",
      name: "work_description",
      placeholder: "Description of the Work",
    },
  ],

  buttonText: "Get Quote",
};



  return (
    <>
      <Navbar />
      <Hero {...heroProps} />
      <Price {...pricingData}/>
      <DynamicTabContent category="Trademark" />
      <Faq />
      <Popularsearches />
      <Footer />
    </>
  );
}
