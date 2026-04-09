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
 heading: "Easy",
 headingHighlight: "Patent",
 description:
 "Secure your inventions with DoStartup. Our simplified online process helps you file and protect your innovative ideas under the Indian Patent Act—guided by experts at every step.",

 features: [
 {
 icon: "shield",
 text: "Legal Protection for Your Inventions",
 },
 {
 icon: "rocket",
 text: "Quick & Simple Online Filing",
 },
 {
 icon: "user-check",
 text: "Expert Guidance from Start to Grant",
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
 name: "patent_service_type",
 placeholder: "Select Patent Search Type",
 options: [
 "Patent Search",
 "Provisional Patent",
 "Complete Patent"
 ],
 },
 {
 type: "input",
 inputType: "text",
 name: "invention_name",
 placeholder: "Identify your invention",
 },
 ],

 buttonText: "Get Quote",
};


 return (
 <>
 <Navbar />
 <Hero {...heroProps} />
 <DynamicTabContent category="E-Invoice" />
 <DynamicPricingSection />
      <FAQAccordion />
 <Popularsearches />
 <Footer />
 </>
 );
}
