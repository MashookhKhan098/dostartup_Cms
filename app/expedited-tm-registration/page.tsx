import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Registration/ExpeditedTMHero';
import DynamicTabContent from '../components/DynamicTabContent';

export default function Home() {

  const heroProps = {
    heading: "Get your brand registered with ",
    headingHighlight: "Expedited TM Registration",
    description: "Don't wait months for your trademark approval! Our Expedited Trademark Registration service fast-tracks your application through the Registry's priority queue. We ensure all legal requirements are met for the fastest possible processing, giving you brand protection in record time.",
    features: [
      { icon: "document", text: "Fast-Track Application Filing" },
      { icon: "chart", text: "Priority Registry Processing" },
      { icon: "users", text: "Senior Attorney Consultation" },
      { icon: "plus", text: "Real-time Status Monitoring" },
      { icon: "document", text: "Minimized Approval Timelines" },
    ],
    buttonText: "Apply for Priority TM",
  };

  return (
    <>
      <Navbar />
      <Hero {...heroProps} />
      <DynamicTabContent category="expedited-tm-registration" />
      <div className="bg-[#F4F3EE] py-8">
        <DynamicPricingSection category="expedited-tm-registration" />
      </div>
      <FAQAccordion category="expedited-tm-registration" />
      <Popularsearches />
      <Footer />
    </>
  );
}
