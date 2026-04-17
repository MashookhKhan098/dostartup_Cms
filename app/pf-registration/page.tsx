import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import PfRegistrationHero from '../components/Registration/PfRegistrationHero';
import DynamicTabContent from '../components/DynamicTabContent';


export default function Home() {

const heroProps = {
 // ================= LEFT SIDE =================
 heading: "PF Registration ",
 headingHighlight: "Made Easy",
 description:
 "PF Registration is the process through which an employer registers with the Employees’ Provident Fund Organisation (EPFO) to participate in the Provident Fund scheme. Get end-to-end assistance for seamless compliance and employee account management.",

 features: [
 {
 icon: "document",
 text: "Hassle-free EPF employer registration & documentation",
 },
 {
 icon: "chart",
 text: "Accurate compliance & employer PF code generation",
 },
 {
 icon: "users",
 text: "Employee onboarding, UAN activation, KYC updates",
 },
 {
 icon: "plus",
 text: "End-to-end support for contributions & withdrawals",
 },
 {
 icon: "document",
 text: "Ensuring your organisation stays compliant from day one",
 },
 ],

 buttonText: "Register Now",
};




 return (
 <>
 <Navbar />
 <PfRegistrationHero {...heroProps}/>
 <DynamicTabContent category="Proprietorship" />
 <DynamicPricingSection />
      <FAQAccordion />
 <Popularsearches />
 <Footer />
 </>
 );
}
