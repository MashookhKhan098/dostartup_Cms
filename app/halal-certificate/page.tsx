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
 heading: "Trusted ",
 headingHighlight: "HALAL Certification",
 description:
 "Get your HALAL certification quickly to expand your market reach and build global consumer trust. Our experts ensure a smooth, compliant, and hassle-free certification process.",

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
 {
 type: "select",
 name: "variant",
 placeholder: "Select Variant",
 options: [
 "Food Products",
 "Cosmetics",
 "Pharmaceuticals",
 "Nutraceuticals",
 "Personal Care Products",
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
   <DynamicPricingSection category="halal-certificate" />
 </div>
 <FAQAccordion category="halal-certificate" />
 <Popularsearches />
 <Footer />
 </>
 );
}

