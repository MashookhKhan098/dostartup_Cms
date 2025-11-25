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
  title="GST Invoicing & Filing Software"
  rating={5}
  description="Invoicing & GST Filing Software. Easily create invoices and file GST returns using LEDGERS accounting software with integrated payment gateway and payroll."
  exclusiveOffersCount={2}
  features={[
    "6 Months Filing",
    "1 GSTIN",
    "Accountant",
    "1 Year Software",
    "GSTR 3B Filing",
    "GSTR 1 Filing"
  ]}
/>

      <DynamicTabContent tabName="GST Registration" />
      <Faq />
      <Popularsearches />
      <Footer />
    </>
  );
}