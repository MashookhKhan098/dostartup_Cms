// import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
// import Footer from "../components/Footer";
// import Popularsearches from '../components/PopularSearches';
// import Hero from '../components/Gst/Hero2';
// import DynamicTabContent from '../components/Gst/DynamicTabContent';
// import Faq from '../components/Gst/Faq';

// export default function Home() {
// return (
// <>
// <Navbar />
// <Hero/>
// <DynamicTabContent tabName="GST Registration" />
// <DynamicPricingSection />
      <FAQAccordion />
// <Popularsearches />
// <Footer />
// </>
// );
// }

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Gst/Hero2';
import DynamicTabContent from '../components/DynamicTabContent';

export default function Home() {
 

 const heroProps = {
 // Left side content
 heading: "File Your GST Returns with Confidence",
 headingHighlight: "GST Returns",
 description: "Experience hassle-free GST compliance with expert support at every step. Trusted by thousands of businesses for secure and timely GST filing.",
 features: [
 {
 icon: "document",
 text: "Automated Data Import & Error Checks"
 },
 {
 icon: "users",
 text: "Dedicated GST Experts & Support"
 },
 {
 icon: "wallet",
 text: "Affordable Pricing for Businesses of All Sizes"
 }
 ],
 
 // Right side form - Tabs
 tabs: [
 { name: "File GSTR-1 Return" },
 { name: "File GSTR-3B Return" }
 ],
 defaultTab: "File GSTR-1 Return",
 tabDescriptions: {
 "File GSTR-1 Return": "GSTR-1 is a monthly/quarterly return for outward supplies. Upload your sales data and our experts will review and prepare your return for filing.",
 "File GSTR-3B Return": "GSTR-3B is a monthly summary return for declaring GST liabilities and input tax credit. Let our experts handle your filing with accuracy."
 },
 
 // Form fields
 formFields: [
 {
 type: "input",
 inputType: "text",
 name: "gstin",
 placeholder: "GSTIN"
 },
 {
 type: "input",
 inputType: "text",
 name: "username",
 placeholder: "GST User Name"
 },
 {
 type: "checkbox",
 name: "upload_consent",
 label: "Upload excel file with sales data for Accountant to review and prepare GST return."
 }
 ],
 
 buttonText: "Generate OTP",
 
 // onSubmit: (formData) => {
 // console.log("Form submitted:", formData);
 // // Handle form submission here
 // }
 };

 return (
 <>
 <Navbar />
 <Hero {...heroProps} />
 <DynamicTabContent category="GST" />
 <DynamicPricingSection />
      <FAQAccordion />
 <Popularsearches />
 <Footer />
 </>
 );
}
