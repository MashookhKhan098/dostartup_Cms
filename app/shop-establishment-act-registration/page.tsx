import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import ShopEstablishmentRegistrationHero from '../components/Registration/ShopEstablishmentRegistrationHero';
import DynamicTabContent from '../components/DynamicTabContent';

export default function Home() {
  const heroProps = {
    heading: "Shop & Establishment ",
    headingHighlight: "License Made Simple",
    description: "Register your shop or commercial establishment easily and operate legally with confidence, ensuring compliance with local labor laws.",
    features: [
      { icon: "document", text: "End-to-End Assistance for All Registrations" },
      { icon: "chart", text: "Smart Solutions Tailored to Your Business Needs" },
      { icon: "plus", text: "100% Online and Paperless Process" },
      { icon: "users", text: "Quick Turnaround with Zero Hassle" },
      { icon: "document", text: "Dedicated Experts to Guide You at Every Step" },
    ],
    buttonText: "Apply Now",
  };

  return (
    <>
      <Navbar />
      <ShopEstablishmentRegistrationHero {...heroProps} />
      <DynamicTabContent category="Proprietorship" />
      <div className="bg-[#F4F3EE] py-8">
        <DynamicPricingSection category="shop-establishment-act-registration" />
      </div>
      <FAQAccordion category="shop-establishment-act-registration" />
      <Popularsearches />
      <Footer />
    </>
  );
}
