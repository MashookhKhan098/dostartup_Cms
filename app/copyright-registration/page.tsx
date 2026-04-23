import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import CopyrightRegistrationHero from '../components/Registration/CopyrightRegistrationHero';
import DynamicTabContent from '../components/DynamicTabContent';

export default function CopyrightRegistrationPage() {
  return (
    <main className="min-h-screen bg-[#F4F3EE]">
      <Navbar />
      <CopyrightRegistrationHero
        heading="Copyright"
        headingHighlight="Registration"
        description="Secure your creative legacy. From software to literature, protect your intellectual property with official copyright filing and expert guidance."
        features={[
          { icon: "✓", text: "Attorney Prepared Filing" },
          { icon: "✓", text: "Copyright in 24 Hours" },
          { icon: "✓", text: "Full Ownership Rights" },
          { icon: "✓", text: "Legal Protection" },
          { icon: "✓", text: "Source Code Security" },
          { icon: "✓", text: "Work Title Verification" }
        ]}
      />

      <DynamicTabContent category="copyright-registration" />
      <div className="bg-[#F4F3EE] py-8">
        <DynamicPricingSection category="copyright-registration" />
      </div>
      <FAQAccordion category="copyright-registration" />
      <Popularsearches />
      <Footer />
    </main>
  );
}
