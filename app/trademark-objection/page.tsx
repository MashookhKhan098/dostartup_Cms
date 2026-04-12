
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
 serviceName: "Expedited",
 serviceDescription:
 "Expedited trademark filing under one class for individuals and small enterprises, inclusive of government fees and taxes.",
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
   <DynamicPricingSection category="trademark-objection" />
 </div>
 <FAQAccordion category="trademark-objection" />
 <Popularsearches />
 <Footer />
 </main>
 );
}

