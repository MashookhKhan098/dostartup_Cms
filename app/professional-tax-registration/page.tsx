import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import ProfessionalTaxRegistrationHero from '../components/Registration/ProfessionalTaxRegistrationHero';
import DynamicTabContent from '../components/DynamicTabContent';


export default function Home() {

const heroProps = {
 // ================= LEFT SIDE =================
 heading: "Professional Tax Registration ",
 headingHighlight: "for Your Business",
 description:
 "Register for Professional Tax to deduct PT from employees' salaries, ensuring compliance with state-specific registration requirements. Get expert guidance and accurate documentation for a smooth registration process.",

 features: [
 {
 icon: "document",
 text: "Fast and seamless Professional Tax Registration",
 },
 {
 icon: "chart",
 text: "State-wise compliance handled by experts",
 },
 {
 icon: "users",
 text: "Professional Tax Return Filing assistance",
 },
 {
 icon: "plus",
 text: "Expert support for PT Cancellation when required",
 },
 {
 icon: "document",
 text: "Ensuring your business stays fully compliant",
 },
 ],
};


 return (
 <>
 <Navbar />
 <ProfessionalTaxRegistrationHero {...heroProps}/>
 <DynamicTabContent category="Proprietorship" />
 <DynamicPricingSection />
      <FAQAccordion />
 <Popularsearches />
 <Footer />
 </>
 );
}
