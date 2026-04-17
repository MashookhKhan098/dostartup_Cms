import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import EsiRegistrationHero from '../components/Registration/EsiRegistrationHero';
import DynamicTabContent from '../components/DynamicTabContent';


export default function Home() {

const heroProps = {
 // ================= LEFT SIDE =================
 heading: "ESI Registration ",
 headingHighlight: "Made Easy",
 description:
 "ESI Registration allows employers to register with the Employees’ State Insurance Corporation (ESIC) to provide medical and cash benefits to employees under the ESI scheme. Get complete guidance and seamless compliance support.",

 features: [
 {
 icon: "document",
 text: "Hassle-free ESIC employer registration & documentation",
 },
 {
 icon: "chart",
 text: "Accurate compliance & employer ESI code generation",
 },
 {
 icon: "users",
 text: "Employee onboarding and ESI account management",
 },
 {
 icon: "plus",
 text: "Support for contributions, claims, and benefits",
 },
 {
 icon: "document",
 text: "Ensuring your organisation stays compliant from day one",
 },
 ],
};


 return (
 <>
 <Navbar />
 <EsiRegistrationHero {...heroProps}/>
 <DynamicTabContent category="Trademark" />
 <DynamicPricingSection />
      <FAQAccordion />
 <Popularsearches />
 <Footer />
 </>
 );
}
