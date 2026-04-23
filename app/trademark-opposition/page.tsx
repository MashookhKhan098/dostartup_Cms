
import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import TrademarkOppositionHero from '../components/Trademark/TrademarkOppositionHero';
import DynamicTabContent from '../components/DynamicTabContent';

export default function Home() {
 return (
 <main className="min-h-screen bg-[#F4F3EE]">
 <Navbar />
 <TrademarkOppositionHero />
 <DynamicTabContent category="Trademark" />
 <div className="bg-[#F4F3EE] py-8">
   <DynamicPricingSection category="trademark-opposition" />
 </div>
 <FAQAccordion category="trademark-opposition" />
 <Popularsearches />
 <Footer />
 </main>
 );
}

