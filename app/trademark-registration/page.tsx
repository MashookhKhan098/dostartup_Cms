
import PricingCards, { PricingPlan } from '../components/PricingCards';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Trademark/Hero2';
import DynamicTabContent from '../components/DynamicTabContent';
import Faq from '../components/Faq';


const trademarkPlans: PricingPlan[] = [
  {
    title: "Trademark Registration", price: "1,999",
    description: "Secure your brand identity in just 3 days! Complete end-to-end trademark registration service with expert attorney support.",
    features: [
      { text: "Comprehensive Trademark Search" },
      { text: "Class Classification Consultation" },
      { text: "TM Application Drafting" },
      { text: "Filing of TM Application" },
      { text: "Application Status Tracking" },
      { text: "Support for TM Objections" }
    ]
  },
  {
    title: "Trademark + Logo Design", price: "5,899", isPopular: true,
    description: "Professional logo design coupled with trademark registration to completely safeguard your intellectual property.",
    features: [
      { text: "Professional Logo Design Options" },
      { text: "Comprehensive Trademark Search" },
      { text: "Class Classification Consultation" },
      { text: "TM Application Drafting" },
      { text: "Filing of TM Application" },
      { text: "Application Status Tracking" },
      { text: "Support for TM Objections" },
      { text: "Copyright Advisory" }
    ]
  }
];

export default function Home() {
 const heroProps = {
 // LEFT SIDE
 heading: "Protect Your Brand. File Your Trademark.",
 headingHighlight: "Brand",
 description:
 "AI-powered brand monitoring software and trademark filing platform trusted by India's top brands.",

 features: [
 {
 icon: "plus",
 text: "Instant, Digital Trademark Filing",
 },
 {
 icon: "chart",
 text: "AI-Powered Trademark Search & Monitoring",
 },
 {
 icon: "users",
 text: "Experienced Trademark Lawyers",
 },
 {
 icon: "document",
 text: "Over 1 Lakh Brands Registered",
 },
 ],

 // RIGHT SIDE TABS (Individuals/MSMEs & All Others)
 

 // FORM FIELDS
 formFields: [
 {
 type: "input",
 inputType: "text",
 name: "brand_name",
 placeholder: "Brand Name",
 },
 {
 type: "select",
 name: "trademark_class",
 placeholder: "Select Class",
 options: [
 "Class 1 – Chemicals",
 "Class 9 – Electronics & Software",
 "Class 25 – Clothing",
 "Class 35 – Advertising & Business",
 "Class 41 – Education & Entertainment",
 "Class 42 – IT & Software Services",
 ],
 },
 ],
 
 tabs: [
 { name: "Individuals & MSMEs" },
 { name: "All Others" },
 ],
 defaultTab: "Individuals & MSMEs",

 tabDescriptions: {
 "Individuals & MSMEs":
 "Government fee is ₹4,500 for Individuals and valid UDYAM-registered MSMEs.",
 "All Others":
 "Applicable for companies, LLPs, foreign entities, and others. Government fees differ as per entity type.",
 },

 buttonText: "Register TM",

 // OPTIONAL
 // onSubmit: (data) => {
 // console.log("Trademark Form Data:", data);
 // },
};


 return (
 <>
 <Navbar />
 <Hero {...heroProps} />
 <DynamicTabContent category="Trademark" />
 <Faq category="Trademark" />
 <Popularsearches />
 <Footer />
 </>
 );
}
