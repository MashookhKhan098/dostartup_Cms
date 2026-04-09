import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Hero from '../components/Startup/Hero';
import DynamicTabContent from '../components/DynamicTabContent';
import Faq from '../components/Faq';

export default function Page() {
  const serviceCategory = "proprietorship"; 

  

  return (
    <main className="min-h-screen bg-[#F4F3EE]">
      <Navbar />
      <Hero defaultEntity="Proprietorship"/>

      <DynamicTabContent category={serviceCategory} />
      <DynamicPricingSection />
      <FAQAccordion />
      
      <Footer />
    </main>
  );
}
