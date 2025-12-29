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
  heading: "PF Registration ",
  headingHighlight: "Made Easy",
  description:
    "PF Registration is the process through which an employer registers with the Employees’ Provident Fund Organisation (EPFO) to participate in the Provident Fund scheme. Get end-to-end assistance for seamless compliance and employee account management.",

  features: [
    {
      icon: "document",
      text: "Hassle-free EPF employer registration & documentation",
    },
    {
      icon: "chart",
      text: "Accurate compliance & employer PF code generation",
    },
    {
      icon: "users",
      text: "Employee onboarding, UAN activation, KYC updates",
    },
    {
      icon: "plus",
      text: "End-to-end support for contributions & withdrawals",
    },
    {
      icon: "document",
      text: "Ensuring your organisation stays compliant from day one",
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
        "PF Registration\nPF Registration is the process through which an employer registers with the Employees’ Provident Fund Organisation (EPFO) to participate in the Provident Fund scheme.",
    },

    // 🔹 SELECT & INPUT FIELDS
    {
      type: "input",
      inputType: "text",
      name: "cin_gstin",
      placeholder: "CIN / GSTIN",
    },
    {
      type: "input",
      inputType: "number",
      name: "employee_count",
      placeholder: "Employee Count",
    },
  ],

  buttonText: "Register Now",
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
      <Price/>
      <DynamicTabContent category="Proprietorship" />
      <Faq />
      <Popularsearches />
      <Footer />
    </>
  );
}
