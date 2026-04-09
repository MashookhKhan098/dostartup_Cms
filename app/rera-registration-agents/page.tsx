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
 heading: "Fast & Compliant ",
 headingHighlight: "RERA Registration",
 description:
 "Get your RERA registration approved quickly and ensure full legal compliance for your real estate projects. Our experts guide you end-to-end for a smooth and hassle-free registration.",

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
 "RERA Registration\nMandatory registration for real estate developers and agents. Ensures transparency and protects homebuyers.",
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
 placeholder: "Select RERA Registration State",
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
 type: "select",
 name: "type",
 placeholder: "Select Type",
 options: ["Developer", "Agent"],
 },
 ],

 buttonText: "Apply Now",
};






 return (
 <>
 <Navbar />
 <Hero {...heroProps}/>
 <DynamicTabContent category="Proprietorship" />
 <FAQAccordion />
 <Popularsearches />
 <Footer />
 </>
 );
}
