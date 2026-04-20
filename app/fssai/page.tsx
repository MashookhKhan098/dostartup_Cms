import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Registration/StartupIndiaHero';
import DynamicTabContent from '../components/DynamicTabContent';

export default function Home() {

 const heroProps = {
 // ================= LEFT SIDE =================
 heading: "Get Your ",
 headingHighlight: "FSSAI",
 description:
 "Ensure your food business is fully compliant with FSSAI regulations. Our expert team provides step-by-step guidance for fast, secure, and hassle-free FSSAI registration, so you can focus on growing your business with confidence.",

 features: [
 {
 icon: "monitor",
 text: "Digital Process",
 },
 {
 icon: "zap",
 text: "Super Fast Service",
 },
 {
 icon: "clipboard",
 text: "Trade License Renewal",
 },
 ],

 // ================= BUTTONS =================
 buttonText: "Pay INR 1,499 Online",
};

 return (
 <>
 <Navbar />
 <Hero {...heroProps}/>
 <DynamicTabContent category="fssai" />
 <div className="bg-[#F4F3EE] py-8">
   <DynamicPricingSection category="fssai" />
 </div>
 <FAQAccordion category="fssai" />
 <Popularsearches />
 <Footer />
 </>
 );
}
