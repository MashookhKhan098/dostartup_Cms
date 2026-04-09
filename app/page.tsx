import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import UpdatesAndDueDates from "./components/Updates";
import OurStory from "./components/Ourstory";
import Partnerships from "./components/Partnerships";
import DynamicPricingSection from "./components/DynamicPricingSection";
import PopularSearches from "./components/PopularSearches";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <UpdatesAndDueDates />
      <OurStory />
      <Partnerships />
      <DynamicPricingSection category="General" />
      <PopularSearches />
      <Footer />
    </>
  );
}
