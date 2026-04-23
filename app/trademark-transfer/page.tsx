import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Registration/TrademarkTransferHero';
import DynamicTabContent from '../components/DynamicTabContent';

export default function Home() {

  const heroProps = {
    heading: "Smoothly manage your ",
    headingHighlight: "Trademark Transfer",
    description: "Looking to sell or acquire a trademark? A Trademark Transfer (Assignment) ensures the legal change of ownership from one entity to another. Our experts help you draft the assignment deed and complete the official transfer process with the Trademark Registry seamlessly.",
    features: [
      { icon: "document", text: "Legal Assignment Deed Drafting" },
      { icon: "chart", text: "Official Ownership Transfer" },
      { icon: "users", text: "Expert Consultation" },
      { icon: "plus", text: "Registry Compliance Support" },
      { icon: "document", text: "End-to-End Asset Transfer" },
    ],
    buttonText: "Transfer Your Trademark",
  };

  return (
    <>
      <Navbar />
      <Hero {...heroProps} />
      <DynamicTabContent category="trademark-transfer" />
      <div className="bg-[#F4F3EE] py-8">
        <DynamicPricingSection category="trademark-transfer" />
      </div>
      <FAQAccordion category="trademark-transfer" />
      <Popularsearches />
      <Footer />
    </>
  );
}
