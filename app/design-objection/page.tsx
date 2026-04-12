import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Trademark/Hero3';
import DynamicTabContent from '../components/DynamicTabContent';

export default function Home() {
 return (
 <main className="min-h-screen bg-[#F4F3EE]">
 <Navbar />
 <Hero
 imageUrl="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop" // or the actual CDN/image path you are using
 title="Design Objection"
 rating={5}
 description="Drafting and filing of reply for objection raised by Examiner."
 exclusiveOffersCount={2}
 features={[
 "Attorney Prepared",
 "Reply to Design Objection",
 "Filing on IPIndia"
 ]}
/>

 <DynamicTabContent category="Trademark" />
 <div className="bg-[#F4F3EE] py-8">
   <DynamicPricingSection category="design-objection" />
 </div>
 <FAQAccordion category="design-objection" />
 <Popularsearches />
 <Footer />
 </main>
 );
}

