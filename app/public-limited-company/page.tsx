import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Startup/Hero';
import DynamicTabContent from '../components/DynamicTabContent';

export default function Home() {
 return (
 <>
 <Navbar />
 <Hero defaultEntity = "Public Limited"/>
 <DynamicTabContent category="Public Limited" />
 <DynamicPricingSection category="public-limited-company" />
      <FAQAccordion category="public-limited-company" title="FAQs for Public Limited Company" />
 <Popularsearches />
 <Footer />
 </>
 );
}
