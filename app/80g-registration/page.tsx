import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Registration/A80GRegistrationHero';
import DynamicTabContent from '../components/DynamicTabContent';

export default function Home() {

const heroProps = {
  heading: "Easy & Fast ",
  headingHighlight: "80G Registration",
  description: "Get your 80G Registration and secure 3 years income tax exemptions for your NGO. Enable donors to claim tax benefits on their contributions, boosting credibility and support.",
  features: [
    { icon: "document", text: "End-to-End Assistance for 80G Registrations" },
    { icon: "chart", text: "Boost NGO Compliance and Donor Confidence" },
    { icon: "users", text: "100% Online and Paperless Process" },
    { icon: "plus", text: "Quick Turnaround with zero hassle" },
    { icon: "document", text: "Dedicated NGO Experts to Guide You" },
  ],
  buttonText: "Apply Now",
};

  return (
    <>
      <Navbar />
      <Hero {...heroProps}/>
      <DynamicTabContent category="trust" />
      <div className="bg-[#F4F3EE] py-8">
        <DynamicPricingSection category="80g-registration" />
      </div>
      <FAQAccordion category="80g-registration" />
      <Popularsearches />
      <Footer />
    </>
  );
}
