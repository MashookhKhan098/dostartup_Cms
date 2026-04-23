import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import PatentRegistrationHero from '../components/Registration/PatentRegistrationHero';
import DynamicTabContent from '../components/DynamicTabContent';

export default function PatentRegistrationPage() {
  return (
    <main className="min-h-screen bg-[#F4F3EE]">
      <Navbar />
      <PatentRegistrationHero
        heading="Patent"
        headingHighlight="Registration"
        description="Secure your technological innovations with official patent protection. Our experts handle searches, drafting, and filing."
        features={[
          { icon: "✓", text: "Global Prior-Art Search" },
          { icon: "✓", text: "Expert Patent Drafting" },
          { icon: "✓", text: "Provisional & Complete Filing" },
          { icon: "✓", text: "Patentability Reports" },
          { icon: "✓", text: "IP India Representative" },
          { icon: "✓", text: "Full Confidentiality" }
        ]}
      />

      <DynamicTabContent category="patent-registration" />
      <div className="bg-[#F4F3EE] py-8">
        <DynamicPricingSection category="patent-registration" />
      </div>
      <FAQAccordion category="patent-registration" />
      <Popularsearches />
      <Footer />
    </main>
  );
}
