import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from "../components/PopularSearches";
import Hero from "../components/Registration/IncomeTaxFilingHero";
import DynamicTabContent from "../components/DynamicTabContent";

export default function IncomeTaxEFilingPage() {
  const heroProps = {
    heading: "Income Tax ",
    headingHighlight: "E-Filing",
    description:
      "File your Income Tax Return accurately and on time with expert CA support. Get maximum refunds, compare Old vs New regime, and stay fully compliant with India's tax laws.",
    features: [
      { icon: "check", text: "ITR-1 to ITR-7 – All Forms Covered" },
      { icon: "check", text: "Old & New Regime Comparison" },
      { icon: "check", text: "CA-Assisted Filing with Expert Review" },
      { icon: "check", text: "Refund Tracking & Notice Handling" },
      { icon: "check", text: "AIS / 26AS Reconciliation" },
    ],
    buttonText: "Pay & File ITR",
  };

  return (
    <main className="min-h-screen bg-[#F4F3EE]">
      <Navbar />
      <Hero {...heroProps} />
      <DynamicTabContent category="income-tax-efiling" />
      <div className="bg-[#F4F3EE] py-8">
        <DynamicPricingSection category="income-tax-efiling" />
      </div>
      <FAQAccordion category="income-tax-efiling" />
      <Popularsearches />
      <Footer />
    </main>
  );
}
