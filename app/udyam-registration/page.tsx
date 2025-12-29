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
  heading: "Get Your ",
  headingHighlight: "Udyam Registration",
  description:
    "Register your business easily with Udyam Registration. Our expert team ensures a seamless process, helping you establish your business under the Government of India's Udyam scheme.",

  features: [
    {
      icon: "document",
      text: "Online Paperless Process",
    },
    {
      icon: "chart",
      text: "Expert Guidance at Every Step",
    },
    {
      icon: "users",
      text: "Dedicated Business Experts",
    },
    {
      icon: "plus",
      text: "Fast & Hassle-Free Processing",
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
      type: "text",
      content: "Service",
    },
    {
      type: "text",
      content:
        "Udyam Registration\nRegister your business under the Government of India's Udyam scheme for MSME recognition and benefits.",
    },

    // 🔹 INPUT & SELECT FIELDS
    {
      type: "input",
      inputType: "text",
      name: "pan_gstin",
      placeholder: "PAN / GSTIN",
    },
    {
      type: "input",
      inputType: "text",
      name: "aadhaar_number",
      placeholder: "Aadhaar Number",
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
      name: "nic_division",
      placeholder: "Select NIC Division",
      options: [
        "Agriculture",
        "Manufacturing",
        "Construction",
        "Services",
        "Trade",
        "Transportation",
        "Information Technology",
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
      <DynamicTabContent category="E-Invoice" />
      <Faq />
      <Popularsearches />
      <Footer />
    </>
  );
}
