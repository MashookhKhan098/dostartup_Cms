import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Registration/Hero';
import DynamicTabContent from '../components/DynamicTabContent';
import Faq from '../components/Faq';
// import Price from '../components/Price';

export default function Home() {

    const heroProps = {
  // ================= LEFT SIDE =================
  heading: "Get Your ",
  headingHighlight: "Startup India Certificate",
  description:
    "Get official recognition from the Government of India through DPIIT. Unlock Startup India benefits like tax exemptions, funding support, compliance relaxations, and enhanced credibility with investors and customers.",

  features: [
    {
      icon: "rocket",
      text: "Register Your Business",
    },
    {
      icon: "document",
      text: "DPIIT Recognition",
    },
    {
      icon: "shield",
      text: "Tax Exemptions & Compliance Benefits",
    },
    {
      icon: "chart",
      text: "Funding Support & Startup Schemes",
    },
    {
      icon: "users",
      text: "Boost Credibility with Investors",
    },
  ],

  // ================= RIGHT SIDE =================
  tabs: [],
  defaultTab: null,
  tabDescriptions: null,

  // ================= FORM FIELDS =================
  formFields: [
    {
      type: "input",
      inputType: "text",
      name: "pan",
      placeholder: "PAN *",
    },
    {
      type: "select",
      name: "state",
      placeholder: "Select State/UT *",
      options: [
        "Andhra Pradesh",
        "Delhi",
        "Gujarat",
        "Karnataka",
        "Maharashtra",
        "Tamil Nadu",
        "Telangana",
        "Uttar Pradesh",
      ],
    },
    {
      type: "radio",
      name: "dsc_available",
      label: "Do you have a company digital signature certificate?",
      options: ["Yes", "No"],
    },
  ],

  // ================= BUTTONS =================
  buttonText: "Pay INR 4,899 Online",
  secondaryButtonText: "Talk to Expert",

  // ================= FOOTER TEXT =================
  footerText:
    "By submitting this form, you agree to the Terms of Service. Service powered by IndiaFilings.",
};


  return (
    <>
      <Navbar />
      <Hero {...heroProps}/>
      <DynamicTabContent category="Proprietorship" />
      <Faq />
      <Popularsearches />
      <Footer />
    </>
  );
}
