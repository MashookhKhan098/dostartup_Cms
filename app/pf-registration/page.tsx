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
 heading: "PF Registration ",
 headingHighlight: "Made Easy",
 description:
 "PF Registration is the process through which an employer registers with the Employees’ Provident Fund Organisation (EPFO) to participate in the Provident Fund scheme. Get end-to-end assistance for seamless compliance and employee account management.",

 features: [
 {
 icon: "document",
 text: "Hassle-free EPF employer registration & documentation",
 },
 {
 icon: "chart",
 text: "Accurate compliance & employer PF code generation",
 },
 {
 icon: "users",
 text: "Employee onboarding, UAN activation, KYC updates",
 },
 {
 icon: "plus",
 text: "End-to-end support for contributions & withdrawals",
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
 "PF Registration\nPF Registration is the process through which an employer registers with the Employees’ Provident Fund Organisation (EPFO) to participate in the Provident Fund scheme.",
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
 <DynamicTabContent category="Proprietorship" />
 <DynamicPricingSection />
      <FAQAccordion />
 <Popularsearches />
 <Footer />
 </>
 );
}
