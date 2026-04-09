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
 heading: "Trusted & Legal ",
 headingHighlight: "Drug License",
 description:
 "Obtain your Drug License easily to start manufacturing or selling medicines legally and safely, ensuring compliance with the Drugs & Cosmetics Act.",

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
 "Drug License\nMandatory license to manufacture, distribute, or sell medicines. Issued by the drug control authority under the Drugs & Cosmetics Act.",
 },

 // 🔹 INPUT & SELECT FIELDS
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
 <DynamicTabContent category="Trademark" />
 <FAQAccordion />
 <Popularsearches />
 <Footer />
 </>
 );
}
