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
  title="GST Revocation"
  rating={5}
  description="GST Revocation service by IndiaFilings helps businesses restore their canceled GST registration by assisting with application preparation, submission, and follow-up. Our experts ensure seamless and timely reinstatement, allowing businesses to resume operations without interruptions."
  exclusiveOffersCount={2}
  features={[
    "Andaman and Nicobar Islands",
    "Filing Revocation Application",
    "Followup and Clarifications",
    "Reactivated GSTIN",
    "GST Compliance Advisory"
  ]}
/>

      <DynamicTabContent category="GST" />
      <Faq />
      <Popularsearches />
      <Footer />
    </>
  );
}