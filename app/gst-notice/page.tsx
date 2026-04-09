import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Gst/Hero';
import DynamicTabContent from '../components/DynamicTabContent';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero
        imageUrl="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop"
        title="GST Tax Notice - 30 Minutes Tax Consultation"
        rating={5}
        description="Consult an Experienced Professional on tax matters."
        exclusiveOffersCount={2}
        features={[
          "Online Consultation",
          "30 Minute Session",
          "Preferred language Selection",
          "Tax consultation",
          "Corporate Financial Consultation",
          "Consultation report - Financial"
        ]}
      />
      <DynamicTabContent category="GST" />
      <DynamicPricingSection />
      <FAQAccordion />
      <Popularsearches />
      <Footer />
    </>
  );
}
