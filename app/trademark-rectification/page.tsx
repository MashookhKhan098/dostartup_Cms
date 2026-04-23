import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Registration/TrademarkRectificationHero';
import DynamicTabContent from '../components/DynamicTabContent';

export default function Home() {

  const heroProps = {
    heading: "Correct errors with ",
    headingHighlight: "Trademark Rectification",
    description: "Need to update or correct your trademark details? Our experts assist you in filing for Trademark Rectification to ensure your brand records are accurate and legally sound. Whether it's a clerical error or a change in ownership, we manage the entire process efficiently.",
    features: [
      { icon: "document", text: "Accurate Record Correction" },
      { icon: "chart", text: "Legal Documentation Support" },
      { icon: "users", text: "Expert Consultation" },
      { icon: "plus", text: "Timely Filing & Follow-up" },
      { icon: "document", text: "Ownership Update Support" },
    ],
    buttonText: "Apply for Rectification",
  };

  return (
    <>
      <Navbar />
      <Hero {...heroProps} />
      <DynamicTabContent category="trademark-rectification" />
      <div className="bg-[#F4F3EE] py-8">
        <DynamicPricingSection category="trademark-rectification" />
      </div>
      <FAQAccordion category="trademark-rectification" />
      <Popularsearches />
      <Footer />
    </>
  );
}
