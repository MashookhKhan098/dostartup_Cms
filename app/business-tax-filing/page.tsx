import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import PopularSearchesComponent from "../components/PopularSearches";
import Hero from "../components/Registration/BusinessTaxFilingHero";
import DynamicTabContent from "../components/DynamicTabContent";

export default function BusinessTaxFilingPage() {
  const heroProps = {
    heading: "Business Tax",
    headingHighlight: "Filing",
    description:
      "File your Business Income Tax Return accurately and on time with expert CA support. Covers Proprietorship, Partnership, LLP, and Company ITR filings (ITR-3 to ITR-6).",
    features: [
      { icon: "check", text: "ITR-3, ITR-4, ITR-5, ITR-6 – All Forms Covered" },
      { icon: "check", text: "Proprietorship, Partnership, LLP & Company" },
      { icon: "check", text: "CA-Assisted Filing with Expert Review" },
      { icon: "check", text: "GST & TDS Compliance Included" },
      { icon: "check", text: "Advance Tax & Penalty Advisory" },
    ],
    buttonText: "Pay & File Business ITR",
  };

  return (
    <main className="min-h-screen bg-[#F4F3EE]">
      <Navbar />
      <Hero {...heroProps} />
      <DynamicTabContent category="business-tax-filing" />
      <div className="bg-[#F4F3EE] py-8">
        <DynamicPricingSection category="business-tax-filing" />
      </div>
      <FAQAccordion category="business-tax-return-filing" />
      <PopularSearchesComponent />
      <Footer />
    </main>
  );
}
