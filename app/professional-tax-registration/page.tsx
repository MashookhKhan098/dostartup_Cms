import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Registration/Hero';
import DynamicTabContent from '../components/DynamicTabContent';


export default function Home() {

const heroProps = {
 // ================= LEFT SIDE =================
 heading: "Professional Tax Registration ",
 headingHighlight: "for Your Business",
 description:
 "Register for Professional Tax to deduct PT from employees' salaries, ensuring compliance with state-specific registration requirements. Get expert guidance and accurate documentation for a smooth registration process.",

 features: [
 {
 icon: "document",
 text: "Fast and seamless Professional Tax Registration",
 },
 {
 icon: "chart",
 text: "State-wise compliance handled by experts",
 },
 {
 icon: "users",
 text: "Professional Tax Return Filing assistance",
 },
 {
 icon: "plus",
 text: "Expert support for PT Cancellation when required",
 },
 {
 icon: "document",
 text: "Ensuring your business stays fully compliant",
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
 "Professional Tax Registration\nProfessional Tax Registration made easy with expert guidance and accurate documentation. Our expert team manages all state-wise requirements to ensure a fast and seamless registration process.",
 },

 // 🔹 SELECT & INPUT FIELDS
 {
 type: "select",
 name: "state",
 placeholder: "Select State/UT",
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
 type: "input",
 inputType: "text",
 name: "pan_gstin",
 placeholder: "PAN or GSTIN",
 },
 ],

 buttonText: "Apply Now",
};


 


 return (
 <>
 <Navbar />
 <Hero {...heroProps}/>
 <DynamicTabContent category="Proprietorship" />
 <DynamicPricingSection />
      <FAQAccordion />
 <Popularsearches />
 <Footer />
 </>
 );
}
