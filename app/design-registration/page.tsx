import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Trademark/Hero3';
import DynamicTabContent from '../components/DynamicTabContent';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F4F3EE]">
      <Navbar />
      <Hero
        imageUrl="/images/design-registration.png"
        title="Design Registration"
        rating={4.9}
        description="Design registration for one article, wherein the applicant is an Individual or Company having MSME. Inclusive of government fee and service tax."
        exclusiveOffersCount={2}
        subHeading="1 Year License"
        features={[
          "One Article",
          "Attorney Prepared",
          "Representation sheets",
          "Power of Attorney format",
          "Filings on IPINDIA",
          "Individuals & MSMEs"
        ]}
      />

      <DynamicTabContent category="design-registration" />
      <div className="bg-[#F4F3EE] py-8">
        <DynamicPricingSection category="design-registration" />
      </div>
      <FAQAccordion category="design-registration" />
      <Popularsearches />
      <Footer />
    </main>
  );
}
