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
 heading: "Shop & Establishment ",
 headingHighlight: "License Made Simple",
 description:
 "Register your shop or commercial establishment easily and operate legally with confidence, ensuring compliance with local labor laws.",

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
 icon: "plus",
 text: "100% Online and Paperless Process",
 },
 {
 icon: "users",
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
 "Shop and Establishment Act License\nMandatory license for businesses, shops, and commercial establishments. Regulates working hours, holidays, and employee rights.",
 },

 // 🔹 INPUT & SELECT FIELDS
 {
 type: "input",
 inputType: "text",
 name: "pan_gstin",
 placeholder: "PAN / GSTIN",
 },
 {
 type: "input",
 inputType: "number",
 name: "employee_count",
 placeholder: "Employee Count",
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
 <DynamicTabContent category="Proprietorship" />
 <FAQAccordion />
 <Popularsearches />
 <Footer />
 </>
 );
}
