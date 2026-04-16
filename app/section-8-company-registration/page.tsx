import React from "react";
import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import PopularSearches from "../components/PopularSearches";
import Hero from "../components/Startup/Hero";
import DynamicTabContent from "../components/DynamicTabContent";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F4F3EE]">
      <Navbar />
      <Hero defaultEntity="Section 8" />
      <DynamicTabContent category="section-8" />
      <DynamicPricingSection category="section-8-company-registration" />
      <FAQAccordion category="section-8-company-registration" />
      <PopularSearches />
      <Footer />
    </div>
  );
}

