import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Registration/TrademarkHearingHero';
import DynamicTabContent from '../components/DynamicTabContent';

export default function Home() {

  const heroProps = {
    heading: "Expert representation for your ",
    headingHighlight: "Trademark Hearing",
    description: "Facing a trademark hearing? Our experienced attorneys provide professional representation before the Trademark Registrar. We help you prepare your case, present strong arguments, and protect your brand's legal rights with expert guidance at every step.",
    features: [
      { icon: "document", text: "Expert Attorney Representation" },
      { icon: "chart", text: "Strong Legal Arguments & Prep" },
      { icon: "users", text: "Dedicated Support Team" },
      { icon: "plus", text: "High Success Rate" },
      { icon: "document", text: "End-to-End Hearing Management" },
    ],
    buttonText: "Book Your Hearing",
  };

  return (
    <>
      <Navbar />
      <Hero {...heroProps} />
      <DynamicTabContent category="trademark-hearing" />
      <div className="bg-[#F4F3EE] py-8">
        <DynamicPricingSection category="trademark-hearing" />
      </div>
      <FAQAccordion category="trademark-hearing" />
      <Popularsearches />
      <Footer />
    </>
  );
}
