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
import DynamicTabContent from '../components/DynamicTabContent';
import Faq from '../components/Faq';
import Price from '../components/Price';

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
    heading: "Accountant for GST Filings",
    headingHighlight: "GST Filings",
    description: "File GST returns, manage invoices, and reconcile bank statements effortlessly using our Accountants & LEDGERS platform.",
    features: [
      {
        icon: "document",
        text: "Automated GST Return Filing"
      },
      {
        icon: "wallet",
        text: "Invoice Management & Reconciliation"
      },
      {
        icon: "users",
        text: "Dedicated Expert Accountant Support"
      },
      {
        icon: "education",
        text: "Real-time Compliance Monitoring"
      }
    ],
    
    // Right side form - Tabs
    tabs: [
      { name: "Existing GST", path: null },
      { name: "GST Registration", path: null }
    ],
    defaultTab: "Existing GST",
    tabDescriptions: {
      "Existing GST": "For businesses that already have a GST number and need assistance with filing returns, managing invoices, and maintaining compliance. Enter your GSTIN to get started with our accounting services.",
      "GST Registration": "For businesses or individuals applying for GST for the first time. Get your GST number and start managing your compliance with expert guidance from our team."
    },
    
    // Form fields
    formFields: [
      {
        type: "input",
        inputType: "text",
        name: "gstin",
        placeholder: "Enter GSTIN",
        showOnTab: "Existing GST"
      },
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
        ],
        showOnTab: "GST Registration"
      },
      {
        type: "input",
        inputType: "text",
        name: "pan",
        placeholder: "PAN",
        showOnTab: "GST Registration"
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
      <Price/>
      <DynamicTabContent category="GST" />
      <Faq />
      <Popularsearches />
      <Footer />
    </>
  );
}