import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Hero from '../components/Startup/Hero';
import DynamicTabContent from '../components/DynamicTabContent';

import PopularSearches from '../components/PopularSearches';

export default function Page() {
  const serviceCategory = "proprietorship"; 

  return (
    <main className="min-h-screen bg-[#F4F3EE]">
      <Navbar />
      <Hero defaultEntity="Proprietorship"/>

      <DynamicTabContent category={serviceCategory} />
      <div className="bg-[#F4F3EE] py-8">
        <DynamicPricingSection category="proprietorship" />
      </div>
      <FAQAccordion category="proprietorship" />
      
      <PopularSearches />
      <Footer />
    </main>
  );
}
