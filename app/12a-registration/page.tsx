import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Registration/Hero';
import DynamicTabContent from '../components/DynamicTabContent';
// 
export default function Home() {

const heroProps = {
 // ================= LEFT SIDE =================
 heading: "Quick & Simple ",
 headingHighlight: "12A Registration",
 description:
 "Get your 12A Registration and secure 3 years income tax exemptions for your Trust or NGO. Our experts handle the entire process with accuracy and care, ensuring quick and hassle-free approval.",

 features: [
 {
 icon: "document",
 text: "End-to-End Assistance for All Registrations",
 },
 {
 icon: "chart",
 text: "Smart Solutions Tailored to Your Business Needs",
 },
 {
 icon: "users",
 text: "100% Online and Paperless Process",
 },
 {
 icon: "plus",
 text: "Quick Turnaround with Zero Hassle",
 },
 {
 icon: "document",
 text: "Dedicated Experts to Guide You at Every Step",
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
 "12A Provisional Registration\nGet official recognition for your NGO or Trust and enjoy income tax exemptions under Section 12A. Essential for organizations seeking tax benefits and compliance in India.",
 },

 // 🔹 SELECT & INPUT FIELDS
 {
 type: "input",
 inputType: "text",
 name: "pan_gstin",
 placeholder: "PAN / GSTIN",
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
 ],

 buttonText: "Apply Now",
};




 return (
 <>
 <Navbar />
 <Hero {...heroProps}/>
 <DynamicTabContent category="E-Invoice" />
 <div className="bg-[#F4F3EE] py-8">
   <DynamicPricingSection category="12a-registration" />
 </div>
 <FAQAccordion category="12a-registration" />
 <Popularsearches />
 <Footer />
 </>
 );
}

