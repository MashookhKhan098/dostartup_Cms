import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Startup/Hero2';
import Price from '../components/Startup/Price';
import DynamicTabContent from '../components/Startup/DynamicTabContent';
import Faq from '../components/Startup/Faq';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero defaultEntity = "Public Limited"/>
      <Price />
      <DynamicTabContent tabName="Proprietorship" />
      <Faq />
      <Popularsearches />
      <Footer />
    </>
  );
}