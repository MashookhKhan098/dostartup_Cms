import React from "react";
import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import PopularSearches from "../components/PopularSearches";
import Hero from "../components/Startup/Hero";
import DynamicTabContent from "../components/DynamicTabContent";

export default function LLPRegistration() {
  return (
    <div className="min-h-screen bg-[#F4F3EE]">
      <Navbar />
      <Hero defaultEntity="LLP" />
      <DynamicTabContent category="llp" />
      <DynamicPricingSection category="llp" />
      <FAQAccordion category="llp" title="FAQs for LLP Registration" />
      <PopularSearches />
      <Footer />
    </div>
  );
}

