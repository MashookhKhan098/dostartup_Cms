"use client";
// import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
// import Footer from "../components/Footer";
// import Popularsearches from '../components/PopularSearches';
// import Hero from '../components/Gst/Hero2';
// import DynamicTabContent from '../components/Gst/DynamicTabContent';
// import Faq from '../components/Gst/Faq';

// export default function Home() {
// return (
// <>
// <Navbar />
// <Hero/>
// <DynamicTabContent tabName="GST Registration" />
// <DynamicPricingSection />
      <FAQAccordion />
// <Popularsearches />
// <Footer />
// </>
// );
// }

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Gst/Hero2';
import DynamicTabContent from '../components/DynamicTabContent';

export default function Home() {
 

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
 { name: "New Registration" },
 { name: "New State" }
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
 "Basic Package - â‚¹999",
 "Standard Package - â‚¹1,999",
 "Premium Package - â‚¹2,999"
 ]
 }
 ],
 
 buttonText: "Submit",
 
 // onSubmit: (formData) => {
 // console.log("Form submitted:", formData);
 // // Handle form submission here
 // }
 };

 return (
 <>
 <Navbar />
 <Hero {...heroProps} />
 <DynamicTabContent category="GST" />
 <DynamicPricingSection />
      <FAQAccordion />
 <Popularsearches />
 <Footer />
 </>
 );
}

