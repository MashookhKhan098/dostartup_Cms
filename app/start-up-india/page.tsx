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
 icon: "rocket",
 text: "Register Your Business",
 },
 {
 icon: "document",
 text: "DPIIT Recognition",
 },
 {
 icon: "shield",
 text: "Tax Exemptions & Compliance Benefits",
 },
 {
 icon: "chart",
 text: "Funding Support & Startup Schemes",
 },
 {
 icon: "users",
 text: "Boost Credibility with Investors",
 },
 ],

 // ================= BUTTONS =================
 buttonText: "Pay INR 4,899 Online",
};

 return (
 <>
 <Navbar />
 <Hero {...heroProps}/>
 <DynamicTabContent category="Proprietorship" />
 <div className="bg-[#F4F3EE] py-8">
   <DynamicPricingSection category="start-up-india" />
 </div>
 <FAQAccordion category="start-up-india" />
 <Popularsearches />
 <Footer />
 </>
 );
}
