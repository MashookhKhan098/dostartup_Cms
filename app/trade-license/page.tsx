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
 heading: "Get your ",
 headingHighlight: "Trade License",
 description:
 "A Trade License is mandatory for businesses operating from commercial properties. Easily apply for Trade License online using DoStartup and ensure full compliance with local municipal regulations.",

 features: [
 {
 icon: "document",
 text: "Digital Process",
 },
 {
 icon: "chart",
 text: "Incorporation Dashboard",
 },
 {
 icon: "rocket",
 text: "Super Fast Service",
 },
 {
 icon: "document",
 text: "Trade License Registration",
 },
 {
 icon: "users",
 text: "Trade License Renewal",
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
 placeholder: "PAN / GSTIN *",
 },
 {
 type: "select",
 name: "state",
 placeholder: "State *",
 options: [
 "Andhra Pradesh",
 "Delhi",
 "Gujarat",
 "Karnataka",
 "Maharashtra",
 "Tamil Nadu",
 "Telangana",
 "Uttar Pradesh",
 ],
 },
 {
 type: "select",
 name: "nature_of_trade",
 placeholder: "Nature of Trade *",
 options: [
 "Manufacturing",
 "Trading",
 "Retail Business",
 "Wholesale Business",
 "Service Provider",
 "Restaurant / Food Business",
 "Other",
 ],
 },
 ],

 buttonText: "Continue",
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
