import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import TrademarkProtectionHero from '../components/Registration/TrademarkProtectionHero';
import DynamicTabContent from '../components/DynamicTabContent';

export default function TrademarkProtectionPage() {
  return (
    <main className="min-h-screen bg-[#F4F3EE]">
      <Navbar />
      <TrademarkProtectionHero
        heading="Trademark"
        headingHighlight="Protection"
        description="Monitor your brand 24/7 and receive instant alerts on potential infringements. Safeguard your business identity with expert legal oversight."
        features={[
          { icon: "🛡️", text: "24/7 Brand Monitoring" },
          { icon: "🛡️", text: "Infringement Alerts" },
          { icon: "🛡️", text: "TM Journal Review" },
          { icon: "🛡️", text: "Legal Notice Support" },
          { icon: "🛡️", text: "Competitor Watch" },
          { icon: "🛡️", text: "Expert Consultation" }
        ]}
      />

      <DynamicTabContent category="trademark-protection" />
      <div className="bg-[#F4F3EE] py-8">
        <DynamicPricingSection category="trademark-protection" />
      </div>
      <FAQAccordion category="trademark-protection" />
      <Popularsearches />
      <Footer />
    </main>
  );
}
