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
 heading: "Simplify",
 headingHighlight: "Copyright Registration",
 description:
 "Secure your creative works with DoStartup. Our expert-guided online Copyright Registration process protects your artistic, literary, and digital creations—ensuring your ownership and peace of mind.",

 features: [
 {
 icon: "shield",
 text: "Protect Your Original Creative Works Legally",
 },
 {
 icon: "rocket",
 text: "Quick & Easy Online Copyright Filing",
 },
 {
 icon: "search",
 text: "Get an Official Copyright Registration Certificate",
 },
 {
 icon: "user-check",
 text: "Expert Guidance Through Every Step",
 },
 {
 icon: "shield-check",
 text: "Nationwide Copyright Protection",
 },
 ],

 // ================= RIGHT SIDE =================
 tabs: [], // no tabs in this design
 defaultTab: null,
 tabDescriptions: null,

 // ================= FORM FIELDS =================
 formFields: [
 {
 type: "select",
 name: "copyright_filing_type",
 placeholder: "Select Copyright Filing Type",
 options: [
 "Literary Work",
 "Artistic Work",
 "Software / Digital Work",
 "Musical Work",
 "Other"
 ],
 },
 {
 type: "input",
 inputType: "text",
 name: "work_title",
 placeholder: "Title of the Work",
 },
 {
 type: "input",
 inputType: "text",
 name: "work_description",
 placeholder: "Description of the Work",
 },
 ],

 buttonText: "Get Quote",
};



 return (
 <>
 <Navbar />
 <Hero {...heroProps} />
 <DynamicTabContent category="Trademark" />
 <DynamicPricingSection />
      <FAQAccordion />
 <Popularsearches />
 <Footer />
 </>
 );
}
