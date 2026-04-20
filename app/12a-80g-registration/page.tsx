
import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import A1280GRegistrationHero, { A1280GRegistrationHeroProps } from '../components/Registration/A1280GRegistrationHero';
import DynamicTabContent from '../components/DynamicTabContent';

export default function Home() {

  const heroProps: A1280GRegistrationHeroProps = {
    heading: "Easy & Fast ",
    headingHighlight: "12A & 80G Registration",
    description: "Get your 12A & 80G Registration and secure 3 years income tax exemptions for your Trust or NGO. Our experts handle the entire process with accuracy and care, ensuring quick and hassle-free approval.",
    features: [
      { icon: "document", text: "End-to-End Assistance for All Registrations" },
      { icon: "chart", text: "Smart Solutions Tailored to Your Business Needs" },
      { icon: "users", text: "100% Online and Paperless Process" },
      { icon: "plus", text: "Quick Turnaround with Zero Hassle" },
      { icon: "document", text: "Dedicated Experts to Guide You at Every Step" },
    ],
    buttonText: "Apply Now",
  };

  return (
    <>
      <Navbar />
      <A1280GRegistrationHero {...heroProps} />
      <DynamicTabContent category="Startup" />
      <div className="bg-[#F4F3EE] py-8">
        <DynamicPricingSection category="12a-80g-registration" />
      </div>
      <FAQAccordion category="12a-80g-registration" />
      <Popularsearches />
      <Footer />
    </>
  );
}
