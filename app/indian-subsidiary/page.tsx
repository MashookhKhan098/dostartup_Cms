import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Startup/Hero2';
import DynamicTabContent from '../components/DynamicTabContent';
import Faq from '../components/Faq';



export default function Home() {
 return (
 <>
 <Navbar />
 <Hero defaultEntity = "Indian Subs."/>
 <DynamicTabContent category="Proprietorship" />
 <DynamicPricingSection />
      <FAQAccordion />
 <Popularsearches />
 <Footer />
 </>
 );
}
