import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Registration/TradeLicenseHero';
import DynamicTabContent from '../components/DynamicTabContent';

export default function Home() {

  const heroProps = {
    // ================= LEFT SIDE =================
    heading: "Get your ",
    headingHighlight: "Trade License",
    description:
      "A Trade License is mandatory for businesses operating from commercial properties. Easily apply for Trade License online using DoStartup and ensure full compliance with local municipal regulations.",

    features: [
      {
        icon: "rocket",
        text: "Digital Process",
      },
      {
        icon: "document",
        text: "Trade License Registration",
      },
      {
        icon: "shield",
        text: "Full Compliance Support",
      },
      {
        icon: "chart",
        text: "Incorporation Dashboard",
      },
      {
        icon: "users",
        text: "Trade License Renewal",
      },
    ],
    buttonText: "Pay INR 2,999 Online",
  };

  return (
    <>
      <Navbar />
      <Hero {...heroProps}/>
      <DynamicTabContent category="Proprietorship" />
      <div className="bg-[#F4F3EE] py-8">
        <DynamicPricingSection category="trade-license" />
      </div>
      <FAQAccordion category="trade-license" />
      <Popularsearches />
      <Footer />
    </>
  );
}
