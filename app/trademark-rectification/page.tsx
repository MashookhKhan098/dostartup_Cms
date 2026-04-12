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
 serviceName: "Rectification",
 serviceDescription:
 "Drafting and filing of rectification for applications marked “Formalities Check Fail” by the Trademark Examiner. Exclusive pricing for applications filed through DoStartup. Inclusive of government fees and taxes.",
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
   <DynamicPricingSection category="trademark-rectification" />
 </div>

 <FAQAccordion category="trademark-rectification" />
 <Popularsearches />
 <Footer />
 </main>
 );
}
