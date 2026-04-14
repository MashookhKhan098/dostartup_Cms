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
 <Hero defaultEntity="Producer Company" />
 <DynamicTabContent category="Producer Company" />
 <DynamicPricingSection />
      <FAQAccordion />
 <Popularsearches />
 <Footer />
 </>
 );
}
