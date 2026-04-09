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
 heading: "ESI Registration ",
 headingHighlight: "Made Easy",
 description:
 "ESI Registration allows employers to register with the Employees’ State Insurance Corporation (ESIC) to provide medical and cash benefits to employees under the ESI scheme. Get complete guidance and seamless compliance support.",

 features: [
 {
 icon: "document",
 text: "Hassle-free ESIC employer registration & documentation",
 },
 {
 icon: "chart",
 text: "Accurate compliance & employer ESI code generation",
 },
 {
 icon: "users",
 text: "Employee onboarding and ESI account management",
 },
 {
 icon: "plus",
 text: "Support for contributions, claims, and benefits",
 },
 {
 icon: "document",
 text: "Ensuring your organisation stays compliant from day one",
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
 "ESI Registration\nESI registration allows employers to register with the Employees’ State Insurance Corporation (ESIC) to provide medical and cash benefits to employees under the ESI scheme.",
 },

 // 🔹 SELECT & INPUT FIELDS
 {
 type: "input",
 inputType: "text",
 name: "cin_gstin",
 placeholder: "CIN / GSTIN",
 },
 {
 type: "input",
 inputType: "number",
 name: "employee_count",
 placeholder: "Employee Count",
 },
 ],

 buttonText: "Register Now",
};




 return (
 <>
 <Navbar />
 <Hero {...heroProps}/>
 <DynamicTabContent category="Trademark" />
 <DynamicPricingSection />
      <FAQAccordion />
 <Popularsearches />
 <Footer />
 </>
 );
}
