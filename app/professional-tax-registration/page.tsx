import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Registration/Hero';
import DynamicTabContent from '../components/DynamicTabContent';
import Faq from '../components/Faq';
import Price from '../components/Price';


export default function Home() {

const heroProps = {
  // ================= LEFT SIDE =================
  heading: "Professional Tax Registration ",
  headingHighlight: "for Your Business",
  description:
    "Register for Professional Tax to deduct PT from employees' salaries, ensuring compliance with state-specific registration requirements. Get expert guidance and accurate documentation for a smooth registration process.",

  features: [
    {
      icon: "document",
      text: "Fast and seamless Professional Tax Registration",
    },
    {
      icon: "chart",
      text: "State-wise compliance handled by experts",
    },
    {
      icon: "users",
      text: "Professional Tax Return Filing assistance",
    },
    {
      icon: "plus",
      text: "Expert support for PT Cancellation when required",
    },
    {
      icon: "document",
      text: "Ensuring your business stays fully compliant",
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
        "Professional Tax Registration\nProfessional Tax Registration made easy with expert guidance and accurate documentation. Our expert team manages all state-wise requirements to ensure a fast and seamless registration process.",
    },

    // 🔹 SELECT & INPUT FIELDS
    {
      type: "select",
      name: "state",
      placeholder: "Select State/UT",
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
      placeholder: "PAN or GSTIN",
    },
  ],

  buttonText: "Apply Now",
};


const pricingData = {
  heading: "Simple, Transparent Professional Tax Pricing",
  subheading:
    "Get expert assistance for Professional Tax Registration, Return Filing, and Cancellation — with accurate state-wise pricing, quick processing, and complete compliance support.",
  note: "",
  showStateSelector: true,
  cards: [
    {
      id: 1,
      title: "Professional Tax Registration Certificate",
      price: "7,899",
      priceNote: "+ GST | Govt. fee included",
      buttonText: "Start Filing Now",
      stateLabel: "Select Your State for Accurate Pricing",
      defaultState: "Telangana",
      features: [
        "Application Preparation",
        "Application Submission",
        "PTRC & PTEC Number",
        "Professional Tax Registration Certificate",
        "All-inclusive pricing"
      ]
    },
    {
      id: 2,
      title: "Professional Tax Return Filing",
      price: "5,899",
      priceNote: "+ GST",
      buttonText: "Start Filing Now",
      stateLabel: "Select Your State for Accurate Pricing",
      defaultState: "Karnataka (Without Employees)",
      features: [
        "Filing of PT Return for 2 Directors",
        "Filing of Professional Tax Return for 1 Year",
        "Compliance Review & Expert Support",
        "All-inclusive pricing"
      ]
    },
    {
      id: 3,
      title: "Professional Tax Cancellation",
      price: "12,899",
      priceNote: "+ GST",
      buttonText: "Start Cancellation",
      stateLabel: "Select Your State for Accurate Pricing",
      defaultState: "Karnataka",
      features: [
        "Cancellation of PTEC",
        "Cancellation of PTRC",
        "Application Filing & Follow-up",
        "All-inclusive pricing"
      ]
    }
  ]
};


  return (
    <>
      <Navbar />
      <Hero {...heroProps}/>
      <Price />
      <DynamicTabContent category="Proprietorship" />
      <Faq />
      <Popularsearches />
      <Footer />
    </>
  );
}
