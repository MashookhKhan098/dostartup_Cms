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
 heading: "Secure & Fast ",
 headingHighlight: "Fire License",
 description:
 "Stay compliant with safety standards by obtaining your Fire License quickly and efficiently.",

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
 {
 type: "text",
 content: "Service",
 },
 {
 type: "text",
 content:
 "Fire License\nCertification from the fire department ensuring fire safety compliance. Required before starting operations in many businesses.",
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
 options: ["Tamil Nadu"],
 },
 ],

 buttonText: "Apply Now",
};




 return (
 <>
 <Navbar />
 <Hero {...heroProps}/>
 <DynamicTabContent category="Trademark" />
 <div className="bg-[#F4F3EE] py-8">
   <DynamicPricingSection category="fire-license" />
 </div>
 <FAQAccordion category="fire-license" />
 <Popularsearches />
 <Footer />
 </>
 );
}

