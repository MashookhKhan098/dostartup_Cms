import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Startup/Hero';
import Price from '../components/Startup/Price';
import DynamicTabContent from '../components/Startup/DynamicTabContent';
import Faq from '../components/Startup/Faq';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero defaultEntity = "LLP"/>
      <Price />
      <DynamicTabContent tabName="Proprietorship" />
      <Faq />
      <Popularsearches />
      <Footer />
    </>
  );
}