import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Trademark/Hero3';
import DynamicTabContent from '../components/DynamicTabContent';
import Faq from '../components/Faq';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero
  imageUrl="/images/design-registration.png"
  title="Design Registration"
  rating={5}
  description="Design registration for one article, wherein the applicant is an Individual or Company having MSME. Inclusive of government fee and service tax."
  exclusiveOffersCount={2}
  features={[
    "One Article",
    "Attorney Prepared",
    "Representation sheets",
    "Power of Attorney format",
    "Filings on IPINDIA",
    "Individuals & MSMEs"
  ]}
/>


      <DynamicTabContent category="Trademark" />
      <Faq />
      <Popularsearches />
      <Footer />
    </>
  );
}
