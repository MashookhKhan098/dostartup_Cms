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
 <Hero defaultEntity="Indian Subs." />
 <DynamicTabContent category="Indian Subs." />
 <DynamicPricingSection category="indian-subsidiary" />
      <FAQAccordion category="indian-subsidiary" title="FAQs for Indian Subsidiary Registration" />
 <Popularsearches />
 <Footer />
 </>
 );
}
