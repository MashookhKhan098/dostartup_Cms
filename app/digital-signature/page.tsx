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
  heading: "Digital Signature Certificate ",
  headingHighlight: "Made Easy",
  description:
    "Secure your Digital Signature Certificate quickly and reliably for smooth e-filing, compliance, and global acceptance.",

  features: [
    {
      icon: "document",
      text: "Digital Process",
    },
    {
      icon: "chart",
      text: "Secure & Verified",
    },
    {
      icon: "plus",
      text: "Fast Delivery Across India & Worldwide",
    },
    {
      icon: "users",
      text: "Authorized eMudhra Partner",
    },
    {
      icon: "document",
      text: "Fast & Secure DSC Processing",
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
        "Digital Signature Certificate\nAuthorized eMudhra Partner ensuring secure, trusted, and fully compliant Class 3 DSC issuance.",
    },

    // 🔹 INPUT FIELDS
    {
      type: "input",
      inputType: "text",
      name: "pan_passport",
      placeholder: "PAN / Passport *",
    },
    {
      type: "input",
      inputType: "text",
      name: "delivery_address",
      placeholder: "Delivery Address *",
    },
  ],

  buttonText: "Start Service",
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
      <DynamicTabContent category="Trademark" />
      <Faq />
      <Popularsearches />
      <Footer />
    </>
  );
}
