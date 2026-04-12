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
 heading: "Get Your ",
 headingHighlight: "Udyam Registration",
 description:
 "Register your business easily with Udyam Registration. Our expert team ensures a seamless process, helping you establish your business under the Government of India's Udyam scheme.",

 features: [
 {
 icon: "document",
 text: "Online Paperless Process",
 },
 {
 icon: "chart",
 text: "Expert Guidance at Every Step",
 },
 {
 icon: "users",
 text: "Dedicated Business Experts",
 },
 {
 icon: "plus",
 text: "Fast & Hassle-Free Processing",
 },
 {
 icon: "document",
 text: "100% Genuine & Verified Certification",
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
 "Udyam Registration\nRegister your business under the Government of India's Udyam scheme for MSME recognition and benefits.",
 },

 // 🔹 INPUT & SELECT FIELDS
 {
 type: "input",
 inputType: "text",
 name: "pan_gstin",
 placeholder: "PAN / GSTIN",
 },
 {
 type: "input",
 inputType: "text",
 name: "aadhaar_number",
 placeholder: "Aadhaar Number",
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
 name: "nic_division",
 placeholder: "Select NIC Division",
 options: [
 "Agriculture",
 "Manufacturing",
 "Construction",
 "Services",
 "Trade",
 "Transportation",
 "Information Technology",
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
   <DynamicPricingSection category="udyam-registration" />
 </div>
 <FAQAccordion category="udyam-registration" />
 <Popularsearches />
 <Footer />
 </>
 );
}

