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
      <Hero defaultEntity="OPC" />
      <DynamicTabContent category="one-person-company" />
      <DynamicPricingSection category="one-person-company" />
      <FAQAccordion />
      <Popularsearches />
      <Footer />
    </>
  );
}
