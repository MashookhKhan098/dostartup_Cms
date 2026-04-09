
import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Registration/Hero';
import type { DynamicHeroSectionProps } from '../components/Registration/Hero';
import DynamicTabContent from '../components/DynamicTabContent';
// 
export default function Home() {

 const heroProps: DynamicHeroSectionProps = {
 // ================= LEFT SIDE =================
 heading: "Easy & Fast ",
 headingHighlight: "12A & 80G Registration",
 description:
 "Get your 12A & 80G Registration and secure 3 years income tax exemptions for your Trust or NGO. Our experts handle the entire process with accuracy and care, ensuring quick and hassle-free approval.",

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
 "12A and 80G Registration\nGet both 12A and 80G registrations together for maximum benefits — tax exemption for your organization and tax deductions for your donors, ensuring long-term financial growth and trust.",
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
 <Hero {...heroProps} />
 <DynamicTabContent category="Startup" />
 <FAQAccordion />
 <Popularsearches />
 <Footer />
 </>
 );
}
