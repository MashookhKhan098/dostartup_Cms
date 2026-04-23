import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import DesignRegistrationHero from '../components/Registration/DesignRegistrationHero';
import DynamicTabContent from '../components/DynamicTabContent';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F4F3EE]">
      <Navbar />
      <DesignRegistrationHero
        heading="Design"
        headingHighlight="Registration"
        description="Design registration for one article, wherein the applicant is an Individual or Company having MSME. Inclusive of government fee and service tax."
        features={[
          { icon: "✓", text: "One Article Protection" },
          { icon: "✓", text: "Attorney Prepared Representation" },
          { icon: "✓", text: "Representation Sheets included" },
          { icon: "✓", text: "Power of Attorney format" },
          { icon: "✓", text: "Direct Filings on IPINDIA" },
          { icon: "✓", text: "Ideal for Individuals & MSMEs" }
        ]}
      />

      <DynamicTabContent category="design-registration" />
      <div className="bg-[#F4F3EE] py-8">
        <DynamicPricingSection category="design-registration" />
      </div>
      <FAQAccordion category="design-registration" />
      <Popularsearches />
      <Footer />
    </main>
  );
}
