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
  title="GST Amendment"
  rating={5}
  description="Completely managed GST amendment of Core field and Non-Core field in GST portal by changing Trade name, Contact details, Business activities, Changing the principal place of the business address, and Adding additional places of business with expert support."
  exclusiveOffersCount={2}
  features={[
    "Basic",
    "Assisted GST Amendment Filing",
    "Updated GST Registration Certificate",
    "Amendment Acknowledgement",
    "Documentation & GST Advisory",
    "Support Until Approval"
  ]}
/>
      <DynamicTabContent category="GST" />
      <Faq />
      <Popularsearches />
      <Footer />
    </>
  );
}