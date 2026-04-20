import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Registration/StartupIndiaHero';
import DynamicTabContent from '../components/DynamicTabContent';
// 
export default function Home() {

 const heroProps = {
 // ================= LEFT SIDE =================
 heading: "Get Your ",
 headingHighlight: "Startup India Certificate",
 description:
 "Get official recognition from the Government of India through DPIIT. Unlock Startup India benefits like tax exemptions, funding support, compliance relaxations, and enhanced credibility with investors and customers.",

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
 buttonText: "Pay INR 4,899 Online",
};

 return (
 <>
 <Navbar />
 <Hero {...heroProps}/>
 <DynamicTabContent category="startup-india" />
 <div className="bg-[#F4F3EE] py-8">
   <DynamicPricingSection category="start-up-india" />
 </div>
 <FAQAccordion category="start-up-india" />
 <Popularsearches />
 <Footer />
 </>
 );
}
