
import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Trademark/Hero';
import DynamicTabContent from '../components/DynamicTabContent';

export default function Home() {
 return (
 <main className="min-h-screen bg-[#F4F3EE]">
 <Navbar />
 <Hero
 trademarkService={{
 serviceName: "Infringement",
 serviceDescription:
 "Send a legal notice to initiate action or defend against the unauthorized use of a registered trademark that could cause confusion or dilute your brand identity.",
 formFields: [
 {
 type: "input",
 name: "applicationNumber",
 placeholder: "Application Number",
 },
 {
 type: "input",
 name: "brandName",
 placeholder: "Brand Name",
 },
 {
 type: "select",
 name: "class",
 placeholder: "Select Class",
 options: ["Class 1", "Class 9", "Class 35", "Class 42"],
 },
 ],
 buttonText: "Get Quote"
 }}
 />
 <DynamicTabContent category="Trademark" />
 <div className="bg-[#F4F3EE] py-8">
   <DynamicPricingSection category="trademark-infringement-notice" />
 </div>
 <FAQAccordion category="trademark-infringement-notice" />
 <Popularsearches />
 <Footer />
 </main>
 );
}

