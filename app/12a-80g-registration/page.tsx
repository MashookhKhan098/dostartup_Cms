import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Registration/Hero';
import DynamicTabContent from '../components/DynamicTabContent';
import Faq from '../components/Faq';
// import Price from '../components/Price';

export default function Home() {

const heroProps = {
  // ================= LEFT SIDE =================
  heading: "Easy & Fast ",
  headingHighlight: "12A & 80G Registration",
  description:
    "Get your 12A & 80G Registration and secure 3 years income tax exemptions for your Trust or NGO. Our experts handle the entire process with accuracy and care, ensuring quick and hassle-free approval.",

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
      content: "Service",
    },
    {
      type: "text",
      content:
        "12A and 80G Registration\nGet both 12A and 80G registrations together for maximum benefits — tax exemption for your organization and tax deductions for your donors, ensuring long-term financial growth and trust.",
    },

    // 🔹 SELECT & INPUT FIELDS
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
      <DynamicTabContent category="Startup" />
      <Faq />
      <Popularsearches />
      <Footer />
    </>
  );
}
