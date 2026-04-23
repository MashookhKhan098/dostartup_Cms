import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Registration/TrademarkRenewalHero';
import DynamicTabContent from '../components/DynamicTabContent';

export default function Home() {

  const heroProps = {
    heading: "Extend your brand rights with ",
    headingHighlight: "Trademark Renewal",
    description: "Don't let your trademark expire! A trademark is valid for 10 years and must be renewed to maintain legal protection. Our experts help you file for renewal seamlessly, ensuring your brand remains secure for another decade without any legal gaps.",
    features: [
      { icon: "document", text: "Timely Renewal Filing" },
      { icon: "chart", text: "10-Year Rights Extension" },
      { icon: "users", text: "Expert Legal Guidance" },
      { icon: "plus", text: "Hassle-Free Process" },
      { icon: "document", text: "Continuous Brand Security" },
    ],
    buttonText: "Renew Your Trademark",
  };

  return (
    <>
      <Navbar />
      <Hero {...heroProps} />
      <DynamicTabContent category="trademark-renewal" />
      <div className="bg-[#F4F3EE] py-8">
        <DynamicPricingSection category="trademark-renewal" />
      </div>
      <FAQAccordion category="trademark-renewal" />
      <Popularsearches />
      <Footer />
    </>
  );
}
