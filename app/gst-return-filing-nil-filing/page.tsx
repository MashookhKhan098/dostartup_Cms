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
    heading: "File Your GST Returns with Confidence",
    headingHighlight: "GST Returns",
    description: "Experience hassle-free GST compliance with expert support at every step. Trusted by thousands of businesses for secure and timely GST filing.",
    features: [
      {
        icon: "document",
        text: "Automated Data Import & Error Checks"
      },
      {
        icon: "users",
        text: "Dedicated GST Experts & Support"
      },
      {
        icon: "wallet",
        text: "Affordable Pricing for Businesses of All Sizes"
      }
    ],
    
    // Right side form - Tabs
    tabs: [
      { name: "File GSTR-1 Return", path: null },
      { name: "File GSTR-3B Return", path: null }
    ],
    defaultTab: "File GSTR-1 Return",
    tabDescriptions: {
      "File GSTR-1 Return": "GSTR-1 is a monthly/quarterly return for outward supplies. Upload your sales data and our experts will review and prepare your return for filing.",
      "File GSTR-3B Return": "GSTR-3B is a monthly summary return for declaring GST liabilities and input tax credit. Let our experts handle your filing with accuracy."
    },
    
    // Form fields
    formFields: [
      {
        type: "input",
        inputType: "text",
        name: "gstin",
        placeholder: "GSTIN"
      },
      {
        type: "input",
        inputType: "text",
        name: "username",
        placeholder: "GST User Name"
      },
      {
        type: "checkbox",
        name: "upload_consent",
        label: "Upload excel file with sales data for Accountant to review and prepare GST return."
      }
    ],
    
    buttonText: "Generate OTP",
    
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