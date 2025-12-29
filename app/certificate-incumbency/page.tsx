import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Registration/Hero2';
import DynamicTabContent from '../components/DynamicTabContent';
import Faq from '../components/Faq';
// import Price from '../components/Price';

export default function Home() {

  return (
    <>
      <Navbar />
      <Hero
  imageUrl="/images/certificate-of-incumbency.png"   // replace with your actual image path or CDN URL
  title="Certificate of Incumbency"
  rating={5}
  description="Apply for your Certificate of Incumbency effortlessly with the help of professional experts. We’ll ensure promptly issued certificates to meet all your compliance and legal requirements."
  exclusiveOffersCount={1}
  features={[
    "Certificate of Incumbency (CA/Company Secretary Signed)",
    "Board Resolution Drafting",
    "Document Verification & Compliance Check",
    "Priority Processing & Expert Support"
  ]}
/>

      <DynamicTabContent category="E-Invoice" />
      <Faq />
      <Popularsearches />
      <Footer />
    </>
  );
}
