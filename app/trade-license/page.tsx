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
  heading: "Get your ",
  headingHighlight: "Trade License",
  description:
    "A Trade License is mandatory for businesses operating from commercial properties. Easily apply for Trade License online using IndiaFilings and ensure full compliance with local municipal regulations.",

  features: [
    {
      icon: "document",
      text: "Digital Process",
    },
    {
      icon: "chart",
      text: "Incorporation Dashboard",
    },
    {
      icon: "rocket",
      text: "Super Fast Service",
    },
    {
      icon: "document",
      text: "Trade License Registration",
    },
    {
      icon: "users",
      text: "Trade License Renewal",
    },
  ],

  // ================= RIGHT SIDE =================
  tabs: [],
  defaultTab: null,
  tabDescriptions: null,

  // ================= FORM FIELDS =================
  formFields: [
    {
      type: "input",
      inputType: "text",
      name: "pan_gstin",
      placeholder: "PAN / GSTIN *",
    },
    {
      type: "select",
      name: "state",
      placeholder: "State *",
      options: [
        "Andhra Pradesh",
        "Delhi",
        "Gujarat",
        "Karnataka",
        "Maharashtra",
        "Tamil Nadu",
        "Telangana",
        "Uttar Pradesh",
      ],
    },
    {
      type: "select",
      name: "nature_of_trade",
      placeholder: "Nature of Trade *",
      options: [
        "Manufacturing",
        "Trading",
        "Retail Business",
        "Wholesale Business",
        "Service Provider",
        "Restaurant / Food Business",
        "Other",
      ],
    },
  ],

  buttonText: "Continue",
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
