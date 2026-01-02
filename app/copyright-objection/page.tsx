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
  heading: "File an Effective Reply to",
  headingHighlight: "Objections",
  description:
    "Got a copyright objection? Our experts help you draft and file a clear, effective reply to resolve it quickly. Protect your creative work and secure your legal rights under the Copyright Act with a timely response.",

  features: [
    {
      icon: "shield",
      text: "Resolve Copyright Objections Quickly and Effectively",
    },
    {
      icon: "document",
      text: "Professional Drafting and Submission of Objection Replies",
    },
    {
      icon: "user-check",
      text: "100% Online Process for Easy and Secure Objection Handling",
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
      name: "copyright_objection_type",
      placeholder: "Select Copyright Objection Type",
      options: [
        "Type 1",
        "Type 2",
        "Type 3",
        // Add other objection types if needed
      ],
    },
    {
      type: "input",
      inputType: "text",
      name: "cc_number",
      placeholder: "CC Number",
    },
    {
      type: "input",
      inputType: "text",
      name: "receipt_number",
      placeholder: "Receipt Number",
    },
    {
      type: "input",
      inputType: "text",
      name: "dairy_number",
      placeholder: "Dairy Number",
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
