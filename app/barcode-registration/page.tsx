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
 heading: "Barcode Registration ",
 headingHighlight: "for Businesses",
 description:
 "Get your products globally recognized with seamless Barcode Registration. Ensure faster market entry, product authenticity, and compliance with expert-assisted GS1 barcode services.",

 features: [
 {
 icon: "document",
 text: "Affordable & Transparent Registration Plans",
 },
 {
 icon: "chart",
 text: "GS1-Compliant Barcode Generation with Expert Support",
 },
 {
 icon: "users",
 text: "End-to-End Documentation & Application Handling",
 },
 {
 icon: "plus",
 text: "Quick Approval & Digital Delivery of Barcodes",
 },
 {
 icon: "document",
 text: "Trusted by Over 1 Lakh Manufacturers and Retailers",
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
 "Barcode Registration\nBarcode Registration is the process of getting a unique barcode for your products for easy identification and tracking.",
 },

 // 🔹 SELECT & INPUT FIELDS
 {
 type: "select",
 name: "state",
 placeholder: "Select State of Registration",
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
 name: "validity",
 placeholder: "Select Validity",
 options: ["1 Year", "3 Years", "5 Years"],
 },
 {
 type: "input",
 inputType: "text",
 name: "pan_gstin",
 placeholder: "PAN / GSTIN",
 },
 ],

 buttonText: "Apply Now",
};






 return (
 <>
 <Navbar />
 <Hero {...heroProps}/>
 <DynamicTabContent category="E-Invoice" />
 <FAQAccordion />
 <Popularsearches />
 <Footer />
 </>
 );
}
