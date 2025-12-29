import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Gst/Hero';
import DynamicTabContent from '../components/DynamicTabContent';
import Faq from '../components/Faq';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero
  imageUrl="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop"
  title="GSTR - 10"
  rating={5}
  description="A taxable person whose GST registration is cancelled or surrendered has to file a return in Form GSTR-10 called Final Return. This is a statement of stocks held by such taxpayer on the day immediately preceding the date from which cancellation is made effective."
  exclusiveOffersCount={1}
  features={[
    "Basic",
    "Filed GSTR 10",
    "Acknowledgement Copy"
  ]}
/>

      <DynamicTabContent category="GST" />
      <Faq />
      <Popularsearches />
      <Footer />
    </>
  );
}