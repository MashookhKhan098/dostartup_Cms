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
        title="GST E-Invoicing Software"
        rating={5}
        description="Easily generate GST E-Invoices and file GST returns using LEDGERS Platform from mobile or desktop computer."
        exclusiveOffersCount={2}
        features={[
            "E-Invoice Activation",
            "Setup & Training",
            "INR 2 per E-Invoice"
        ]}
        />
      <DynamicTabContent tabName="GST Registration" />
      <Faq />
      <Popularsearches />
      <Footer />
    </>
  );
}