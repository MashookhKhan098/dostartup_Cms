import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Gst/Hero';
import DynamicTabContent from '../components/Gst/DynamicTabContent';
import Faq from '../components/Gst/Faq';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero
  imageUrl="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop"
  title="GST Annual Return Filing (GSTR - 9)"
  rating={5}
  description="GSTR-9 or GST annual return filing for taxpayers registered under GST Scheme."
  exclusiveOffersCount={2}
  features={[
    "Books-vs-GST Reconciliation",
    "GSTR-9 Preparation & Filing",
    "GSTR-9C Filing (if required)",
    "Dedicated Tax Expert Review",
    "LEDGERS GST Software - 1 Year",
    "Post-Filing Clarification Support"
  ]}
/>

      <DynamicTabContent tabName="GST Registration" />
      <Faq />
      <Popularsearches />
      <Footer />
    </>
  );
}