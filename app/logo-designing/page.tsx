import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Trademark/Hero2';
import DynamicTabContent from '../components/DynamicTabContent';

export default function Home() {
 


 const heroProps = {
 // ================= LEFT SIDE =================
 heading: "Create a Logo Instantly",
 headingHighlight: "Logo",
 description:
 "Make your brand stand out with DoStartup. Our streamlined Logo Design & Trademark service helps you craft distinctive, high-impact logos that reflect your brand vision and ensure complete trademark readiness—merging creativity with legal precision.",

 features: [
 {
 icon: "plus",
 text: "Create Unique Logos That Strengthen Your Brand",
 },
 {
 icon: "document",
 text: "Trademark-Ready Logo Designs for Legal Protection",
 },
 {
 icon: "users",
 text: "Expert Designers & Trademark Specialists on Board",
 },
 {
 icon: "chart",
 text: "End-to-End Brand Protection & Registration Support",
 },
 ],

 // ================= RIGHT SIDE =================
 tabs: [], // no tabs in this design
 defaultTab: null,
 tabDescriptions: null,

 // ================= FORM FIELDS =================
 formFields: [
 {
 type: "input",
 inputType: "text",
 name: "brand_name",
 placeholder: "Brand Name",
 },
 {
 type: "input",
 inputType: "text",
 name: "tagline",
 placeholder: "Tag Line (optional)",
 },
 {
 type: "input",
 inputType: "text",
 name: "description",
 placeholder: "Description",
 },

 // TEXT INFO
 {
 type: "text",
 content: "What colors should be used in the logo?",
 },

 // COLOR OPTIONS (horizontal with color preview)
 {
 type: "color-options",
 options: [
 { name: "Pink", hex: "#e409f0" },
 { name: "Red", hex: "#990014" },
 { name: "Blue", hex: "#005f82" },
 { name: "Green", hex: "#008f15" },
 ],
 },

 {
 type: "input",
 inputType: "file",
 name: "sample_logo",
 placeholder: "Sample Logo",
 },
 ],

 buttonText: "Get Quote",
 };

 return (
 <>
 <Navbar />
 <Hero {...heroProps} />
 <DynamicTabContent category="Proprietorship" />
 <DynamicPricingSection />
      <FAQAccordion />
 <Popularsearches />
 <Footer />
 </>
 );
}
