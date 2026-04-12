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
 heading: "Digital Signature Certificate ",
 headingHighlight: "Made Easy",
 description:
 "Secure your Digital Signature Certificate quickly and reliably for smooth e-filing, compliance, and global acceptance.",

 features: [
 {
 icon: "document",
 text: "Digital Process",
 },
 {
 icon: "chart",
 text: "Secure & Verified",
 },
 {
 icon: "plus",
 text: "Fast Delivery Across India & Worldwide",
 },
 {
 icon: "users",
 text: "Authorized eMudhra Partner",
 },
 {
 icon: "document",
 text: "Fast & Secure DSC Processing",
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
 "Digital Signature Certificate\nAuthorized eMudhra Partner ensuring secure, trusted, and fully compliant Class 3 DSC issuance.",
 },

 // 🔹 INPUT FIELDS
 {
 type: "input",
 inputType: "text",
 name: "pan_passport",
 placeholder: "PAN / Passport *",
 },
 {
 type: "input",
 inputType: "text",
 name: "delivery_address",
 placeholder: "Delivery Address *",
 },
 ],

 buttonText: "Start Service",
};






 return (
 <>
 <Navbar />
 <Hero {...heroProps}/>
 <DynamicTabContent category="Trademark" />
 <div className="bg-[#F4F3EE] py-8">
   <DynamicPricingSection category="digital-signature" />
 </div>
 <FAQAccordion category="digital-signature" />
 <Popularsearches />
 <Footer />
 </>
 );
}

