// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Popularsearches from '../components/PopularSearches';
// import Hero from '../components/Gst/Hero2';
// import DynamicTabContent from '../components/Gst/DynamicTabContent';
// import Faq from '../components/Gst/Faq';

// export default function Home() {
//   return (
//     <>
//       <Navbar />
//       <Hero/>
//       <DynamicTabContent tabName="GST Registration" />
//       <Faq />
//       <Popularsearches />
//       <Footer />
//     </>
//   );
// }

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Gst/Hero2';
import DynamicTabContent from '../components/Gst/DynamicTabContent';
import Faq from '../components/Gst/Faq';
import Price from '../components/Gst/Price';

export default function Home() {
  const pricingData = {
    heading: "GST Registration Packages",
    subheading: "Choose the perfect plan for your business needs",
    note: "Note: Prices are inclusive of professional fees and government filing charges.",
    selectLabel: "Select your State for pricing",
    showStateSelector: true,
    states: ["Delhi", "Maharashtra", "Karnataka", "Gujarat"],
    cards: [
      {
        id: 1,
        badge: "LEDGERS", // optional
        title: "GST Registration & Software",
        description: "Complete GST registration with software access",
        price: "5,899",
        priceNote: "/yr + GST",
        buttonText: "Start Registration",
        // onButtonClick: () => console.log("Card 1 clicked"),
        features: [
          "GST Registration Support",
          "GST Certificate",
          "Compliance Dashboard & Tracker",
          "LEDGERS GST Software Access",
          "GST Invoicing & e-invoicing"
        ]
      },
      {
        id: 2,
        badge: "Accountant", // optional
        title: "GST Registration & 3-Month Accountant",
        price: "7,899",
        priceNote: "/quarter + GST",
        buttonText: "Start Registration",
        features: [
          "GST Registration Support",
          "GST Certificate",
          "Dedicated Accountant Support",
          "GST Return Filing (GSTR-1, 3B)",
          "Invoice Management System"
        ]
      }
    ]
  };

  const heroProps = {
    // Left side content
    heading: "GST Registration",
    headingHighlight: "GST",
    description: "Register your business for GST and manage returns, invoices, and compliance effortlessly in one place.",
    features: [
      {
        icon: "wallet",
        text: "Affordable & Cost-Effective Service"
      },
      {
        icon: "document",
        text: "Digital & Paperless Process"
      },
      {
        icon: "users",
        text: "Over 1 Lakh Businesses Registered"
      },
      {
        icon: "education",
        text: "Expert Guidance on GST Compliance"
      }
    ],
    
    // Right side form - Tabs
    tabs: [
      { name: "New Registration", path: null },
      { name: "New State", path: null }
    ],
    defaultTab: "New Registration",
    tabDescriptions: {
      "New Registration": "For businesses or individuals applying for GST for the first time. This is the initial GST number required to legally collect GST and claim input tax credit. This applies if your business meets the GST Registration Threshold.",
      "New State": "For businesses already registered in one state and expanding to another state. You need to register separately in each state where you have a business presence."
    },
    
    // Form fields
    formFields: [
      {
        type: "select",
        name: "state",
        placeholder: "Select State",
        options: [
          "Andhra Pradesh",
          "Delhi",
          "Gujarat",
          "Karnataka",
          "Maharashtra",
          "Tamil Nadu",
          "Uttar Pradesh",
          "West Bengal"
        ]
      },
      {
        type: "input",
        inputType: "text",
        name: "pan",
        placeholder: "PAN"
      },
      {
        type: "select",
        name: "nature_of_business",
        placeholder: "Nature of Business",
        options: [
          "Manufacturer",
          "Trader",
          "Service Provider",
          "Retailer",
          "Wholesaler",
          "E-commerce",
          "Others"
        ]
      },
      {
        type: "select",
        name: "package",
        placeholder: "Select Package",
        options: [
          "Basic Package - ₹999",
          "Standard Package - ₹1,999",
          "Premium Package - ₹2,999"
        ]
      }
    ],
    
    buttonText: "Submit",
    
    // onSubmit: (formData) => {
    //   console.log("Form submitted:", formData);
    //   // Handle form submission here
    // }
  };

  return (
    <>
      <Navbar />
      <Hero {...heroProps} />
      <Price {...pricingData}/>
      <DynamicTabContent tabName="GST Registration" />
      <Faq />
      <Popularsearches />
      <Footer />
    </>
  );
}