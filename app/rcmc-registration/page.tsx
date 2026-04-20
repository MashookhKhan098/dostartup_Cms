import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import RcmcRegistrationHero from '../components/Registration/RcmcRegistrationHero';
import DynamicTabContent from '../components/DynamicTabContent';
// 
export default function Home() {

const heroProps = {
 // ================= LEFT SIDE =================
 heading: "Smooth & Fast ",
 headingHighlight: "RCMC Registration",
 description:
 "Get your RCMC registration to avail export benefits and prove your membership with export councils. Our experts guide you end-to-end for a quick and hassle-free registration.",

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
};


 return (
 <>
 <Navbar />
 <RcmcRegistrationHero {...heroProps}/>
 <DynamicTabContent category="E-Invoice" />
 <div className="bg-[#F4F3EE] py-8">
   <DynamicPricingSection category="rcmc-registration" />
 </div>
 <FAQAccordion category="rcmc-registration" />
 <Popularsearches />
 <Footer />
 </>
 );
}
