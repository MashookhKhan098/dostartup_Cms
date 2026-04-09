import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Trademark/Hero2';
import DynamicTabContent from '../components/DynamicTabContent';

export default function Home() {
 


 const heroProps = {
 // ================= LEFT SIDE =================
 heading: "File an Effective Reply to",
 headingHighlight: "Objections",
 description:
 "Got a copyright objection? Our experts help you draft and file a clear, effective reply to resolve it quickly. Protect your creative work and secure your legal rights under the Copyright Act with a timely response.",

 features: [
 {
 icon: "shield",
 text: "Resolve Copyright Objections Quickly and Effectively",
 },
 {
 icon: "document",
 text: "Professional Drafting and Submission of Objection Replies",
 },
 {
 icon: "user-check",
 text: "100% Online Process for Easy and Secure Objection Handling",
 },
 ],

 // ================= RIGHT SIDE =================
 tabs: [], // no tabs in this design
 defaultTab: null,
 tabDescriptions: null,

 // ================= FORM FIELDS =================
 formFields: [
 {
 type: "select",
 name: "copyright_objection_type",
 placeholder: "Select Copyright Objection Type",
 options: [
 "Type 1",
 "Type 2",
 "Type 3",
 // Add other objection types if needed
 ],
 },
 {
 type: "input",
 inputType: "text",
 name: "cc_number",
 placeholder: "CC Number",
 },
 {
 type: "input",
 inputType: "text",
 name: "receipt_number",
 placeholder: "Receipt Number",
 },
 {
 type: "input",
 inputType: "text",
 name: "dairy_number",
 placeholder: "Dairy Number",
 },
 ],

 buttonText: "Get Quote",
};


 return (
 <>
 <Navbar />
 <Hero {...heroProps} />
 <DynamicTabContent category="Trademark" />
 <DynamicPricingSection />
      <FAQAccordion />
 <Popularsearches />
 <Footer />
 </>
 );
}
