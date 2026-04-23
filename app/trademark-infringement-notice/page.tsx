import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Registration/TrademarkInfringementHero';
import DynamicTabContent from '../components/DynamicTabContent';

export default function Home() {

  const heroProps = {
    heading: "Protect your brand with ",
    headingHighlight: "TM Infringement Notice",
    description: "Is someone unauthorizedly using your brand name or logo? Protect your business interests by serving a legal Trademark Infringement Notice. Our legal experts draft and dispatch professional notices to enforce your trademark rights and stop infringement effectively.",
    features: [
      { icon: "document", text: "Professional Legal Drafting" },
      { icon: "chart", text: "Strong Enforcement Language" },
      { icon: "users", text: "Expert Attorney Review" },
      { icon: "plus", text: "Fast & Official Dispatch" },
      { icon: "document", text: "Secure Brand Protection" },
    ],
    buttonText: "Draft Your Notice",
  };

  return (
    <>
      <Navbar />
      <Hero {...heroProps} />
      <DynamicTabContent category="trademark-infringement-notice" />
      <div className="bg-[#F4F3EE] py-8">
        <DynamicPricingSection category="trademark-infringement-notice" />
      </div>
      <FAQAccordion category="trademark-infringement-notice" />
      <Popularsearches />
      <Footer />
    </>
  );
}
