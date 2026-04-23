import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Registration/FcraRegistrationHero';
import DynamicTabContent from '../components/DynamicTabContent';

export default function Home() {

  const heroProps = {
    heading: "Secure & Smooth ",
    headingHighlight: "FCRA Registration",
    description: "Get authorized to receive foreign donations with FCRA registration made simple and fast. Mandatory for NGOs regulated under the Foreign Contribution (Regulation) Act.",
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
    <main className="min-h-screen bg-[#F4F3EE]">
      <Navbar />
      <Hero {...heroProps} />
      <DynamicTabContent category="fcra-registration" />
      <div className="bg-[#F4F3EE] py-8">
        <DynamicPricingSection category="fcra-registration" />
      </div>
      <FAQAccordion category="fcra-registration" />
      <Popularsearches />
      <Footer />
    </main>
  );
}
