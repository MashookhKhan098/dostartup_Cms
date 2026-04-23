import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import CopyrightObjectionHero from '../components/Registration/CopyrightObjectionHero';
import DynamicTabContent from '../components/DynamicTabContent';

export default function CopyrightObjectionPage() {
  return (
    <main className="min-h-screen bg-[#F4F3EE]">
      <Navbar />
      <CopyrightObjectionHero
        heading="Copyright"
        headingHighlight="Objection Reply"
        description="Filing a professional reply to the copyright objection raised by the examiner. Our experts ensure your work stays protected."
        features={[
          { icon: "✓", text: "Attorney Drafted Reply" },
          { icon: "✓", text: "CC & Receipt Matching" },
          { icon: "✓", text: "IP India Portal Filing" },
          { icon: "✓", text: "Status Monitoring" },
          { icon: "✓", text: "Legal Consultation" },
          { icon: "✓", text: "Fast Processing" }
        ]}
      />

      <DynamicTabContent category="copyright-objection" />
      <div className="bg-[#F4F3EE] py-8">
        <DynamicPricingSection category="copyright-objection" />
      </div>
      <FAQAccordion category="copyright-objection" />
      <Popularsearches />
      <Footer />
    </main>
  );
}
