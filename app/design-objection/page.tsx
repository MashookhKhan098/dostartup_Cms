import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import DesignObjectionHero from '../components/Registration/DesignObjectionHero';
import DynamicTabContent from '../components/DynamicTabContent';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F4F3EE]">
      <Navbar />
      <DesignObjectionHero
        heading="Design"
        headingHighlight="Objection Reply"
        description="Drafting and filing of reply for objection raised by Examiner."
        features={[
          { icon: "✓", text: "Attorney Prepared Reply" },
          { icon: "✓", text: "Reply to Design Objection" },
          { icon: "✓", text: "Filing on IPIndia Portal" }
        ]}
      />

      <DynamicTabContent category="design-objection" />
 <div className="bg-[#F4F3EE] py-8">
   <DynamicPricingSection category="design-objection" />
 </div>
 <FAQAccordion category="design-objection" />
 <Popularsearches />
 <Footer />
 </main>
 );
}

