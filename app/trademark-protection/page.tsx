
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Trademark/Hero';
import Faq from '../components/Faq';
import DynamicTabContent from '../components/DynamicTabContent';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero
      trademarkService={{
        serviceName: "Protection",
        serviceDescription:
          "Safeguard your brand from misuse, counterfeiting, or unauthorized use by ensuring legal protection and enforcement of your registered or pending trademark rights.",
        formFields: [
          {
            type: "input",
            name: "applicationNumber",
            placeholder: "Application Number",
          },
          {
            type: "input",
            name: "brandName",
            placeholder: "Brand Name",
          },
          {
            type: "select",
            name: "class",
            placeholder: "Select Class",
            options: ["Class 1", "Class 9", "Class 35", "Class 42"],
          },
        ],
        buttonText: "Get Quote"
      }}
    />
      <DynamicTabContent category="Trademark" />
      <Faq />
      <Popularsearches />
      <Footer />
    </>
  );
}