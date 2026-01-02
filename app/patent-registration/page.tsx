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
  heading: "Easy",
  headingHighlight: "Patent",
  description:
    "Secure your inventions with IndiaFilings. Our simplified online process helps you file and protect your innovative ideas under the Indian Patent Act—guided by experts at every step.",

  features: [
    {
      icon: "shield",
      text: "Legal Protection for Your Inventions",
    },
    {
      icon: "rocket",
      text: "Quick & Simple Online Filing",
    },
    {
      icon: "user-check",
      text: "Expert Guidance from Start to Grant",
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
      name: "patent_service_type",
      placeholder: "Select Patent Search Type",
      options: [
        "Patent Search",
        "Provisional Patent",
        "Complete Patent"
      ],
    },
    {
      type: "input",
      inputType: "text",
      name: "invention_name",
      placeholder: "Identify your invention",
    },
  ],

  buttonText: "Get Quote",
};


  return (
    <>
      <Navbar />
      <Hero {...heroProps} />
      <Price/>
      <DynamicTabContent category="E-Invoice" />
      <Faq />
      <Popularsearches />
      <Footer />
    </>
  );
}
