import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Startup/Hero';
import DynamicTabContent from '../components/DynamicTabContent';
import Faq from '../components/Faq';



export default function Home() {
  return (
    <>
      <Navbar />
      <Hero defaultEntity="Company" />
      <DynamicTabContent category="proprietorship" />
      <div className="bg-[#F4F3EE] py-8">
        <DynamicPricingSection category="company-registration" />
      </div>
      <FAQAccordion category="company-registration" />
      <Popularsearches />
      <Footer />
    </>
  );
}
