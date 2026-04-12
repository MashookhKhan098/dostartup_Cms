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
 heading: "Easy & Fast ",
 headingHighlight: "80G Registration",
 description:
 "Get your 80G Registration and secure 3 years income tax exemptions for your Trust or NGO. Our experts handle the entire process with accuracy and care, ensuring quick and hassle-free approval.",

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
 "80G Provisional Registration\nEnable your donors to claim tax deductions on their contributions while boosting your NGO’s credibility. A must-have registration to attract more funding and donor support.",
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
 <DynamicTabContent category="Startup India Registration" />
 <div className="bg-[#F4F3EE] py-8">
   <DynamicPricingSection category="80g-registration" />
 </div>
 <FAQAccordion category="80g-registration" />
 <Popularsearches />
 <Footer />
 </>
 );
}

