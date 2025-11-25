

// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Popularsearches from '../components/PopularSearches';
// import Hero from '../components/Gst/Hero2';
// import DynamicTabContent from '../components/Gst/DynamicTabContent';
// import Faq from '../components/Gst/Faq';
// import { Rocket, Zap, Users } from 'lucide-react';

// export default function Home() {

//   const heroProps = {
//     // Left side content
//     heading: "Partner with IndiaFilings",
//     headingHighlight: "IndiaFilings",
//     description: "Grow your business with IndiaFilings' AI-powered partner ecosystem - simplify compliance, automate workflows, and serve more clients with speed, precision, and confidence.",
//     features: [
//       {
//         icon: "users",
//         text: "AI-Powered Partner Ecosystem"
//       },
//       {
//         icon: "document",
//         text: "Simplified Compliance Management"
//       },
//       {
//         icon: "wallet",
//         text: "Automated Workflow Solutions"
//       },
//       {
//         icon: "education",
//         text: "Serve More Clients with Precision"
//       }
//     ],
    
//     // Right side form - No tabs for this form
//     tabs: null,
//     defaultTab: null,
//     tabDescriptions: null,
    
//     // Modal/Form configuration
//     modalTitle: "LEDGERS PRO Platform Signup",
    
//     // Form fields
//     formFields: [
//       {
//         type: "select",
//         name: "accountant_type",
//         placeholder: "Accountant Type",
//         label: "Accountant Type",
//         options: [
//           "Chartered Accountant",
//           "Tax Consultant",
//           "Company Secretary",
//           "Cost Accountant",
//           "Accounting Firm",
//           "Individual Accountant",
//           "Others"
//         ]
//       },
//       {
//         type: "input",
//         inputType: "text",
//         name: "location",
//         placeholder: "Location"
//       },
//       {
//         type: "input",
//         inputType: "text",
//         name: "name",
//         placeholder: "Name"
//       },
//       {
//         type: "input",
//         inputType: "email",
//         name: "email",
//         placeholder: "Email"
//       },
//       {
//         type: "phone",
//         name: "phone",
//         placeholder: "Phone",
//         countryCode: "+91",
//         defaultCountry: "IN"
//       },
//       {
//         type: "input",
//         inputType: "text",
//         name: "business_name",
//         placeholder: "Business Name"
//       }
//     ],
    
//     buttonText: "Request Demo",
//   };

//   const features = [
//     {
//       icon: <Rocket className="w-8 h-8 text-blue-600" />,
//       title: "Scale Smarter, Grow Faster",
//       description: "Designed specifically for CA, Tax Practitioners & Consultants professionals, LEDGERS Pro CRM streamlines client management and operations, empowering you to scale your business seamlessly."
//     },
//     {
//       icon: <Zap className="w-8 h-8 text-blue-600" />,
//       title: "Productivity, Powered by AI",
//       description: "Stay ahead in a competitive market. Our AI tools equip your in-house team to manage client demands efficiently while maintaining quality and compliance."
//     },
//     {
//       icon: <Users className="w-8 h-8 text-blue-600" />,
//       title: "Dedicated Customer Experience",
//       description: "Our team is committed to providing personalized support at every step-onboarding, troubleshooting, and optimizing your use of LEDGERS."
//     }
//   ];
  
//   return (
//     <>
//       <Navbar />
//       <Hero {...heroProps} />
      
//       {/* Feature Cards Section */}
//       <div className="py-16 px-4 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {features.map((feature, index) => (
//               <div 
//                 key={index}
//                 className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
//               >
//                 <div className="flex justify-center mb-4">
//                   <div className="p-3 bg-blue-50 rounded-full">
//                     {feature.icon}
//                   </div>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600 text-center text-sm leading-relaxed">
//                   {feature.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <DynamicTabContent tabName="GST Registration" />
//       <Faq />
//       <Popularsearches />
//       <Footer />
//     </>
//   );
// }




import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import DynamicTabContent from '../components/Gst/DynamicTabContent';
import Faq from '../components/Gst/Faq';
import { Rocket, Zap, Users, CheckCircle2, MapPin, FileText, Zap as ZapIcon } from 'lucide-react';

export default function Home() {

  const features = [
    {
      icon: <Rocket className="w-8 h-8 text-blue-600" />,
      title: "Scale Smarter, Grow Faster",
      description: "Designed specifically for CA, Tax Practitioners & Consultants professionals, LEDGERS Pro CRM streamlines client management and operations, empowering you to scale your business seamlessly."
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Productivity, Powered by AI",
      description: "Stay ahead in a competitive market. Our AI tools equip your in-house team to manage client demands efficiently while maintaining quality and compliance."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Dedicated Customer Experience",
      description: "Our team is committed to providing personalized support at every step-onboarding, troubleshooting, and optimizing your use of LEDGERS."
    }
  ];
  
  return (
    <>
      <Navbar />
      
      {/* Hero Section - Virtual Office + GSTIN */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Set Up Your Virtual Office + GSTIN
            </h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Establish your business presence anywhere in India with a Virtual Office address
              and hassle-free GST registration trusted by 1000s of
              startups, freelancers and SMEs.
            </p>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span className="text-gray-700 font-medium">Assured Virtual Office Setup</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span className="text-gray-700 font-medium">11-Month Agreement with Stamp Paper</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span className="text-gray-700 font-medium">100% Refund Guarantee</span>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left Side - Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Start Your Virtual Office
              </h2>
              
              <div className="flex gap-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-blue-600">
                  <MapPin className="w-4 h-4" />
                  <span>Virtual Address</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-blue-600">
                  <FileText className="w-4 h-4" />
                  <span>Document Handling</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-blue-600">
                  <ZapIcon className="w-4 h-4" />
                  <span>Fast Compliance</span>
                </div>
              </div>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="PAN / GSTIN"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
                
                <div className="relative">
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white"
                  >
                    <option>Virtual Office Location</option>
                    <option>Delhi</option>
                    <option>Mumbai</option>
                    <option>Bangalore</option>
                    <option>Hyderabad</option>
                    <option>Chennai</option>
                    <option>Kolkata</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                >
                  Buy Virtual Office + GSTIN
                  <span className="bg-white text-black rounded-full w-6 h-6 flex items-center justify-center text-sm">→</span>
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our{' '}
                  <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                  {' '}and{' '}
                  <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>
                </p>
              </form>
            </div>

            {/* Right Side - Benefits */}
            <div className="bg-gradient-to-br from-purple-100 via-pink-50 to-orange-100 rounded-2xl p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white rounded-full p-2 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    Assured Service by Trusted Partner
                  </h3>
                  <p className="text-gray-600">
                    Your virtual office and GSTIN setup is handled by verified partners, ensuring a
                    seamless and professional experience.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white rounded-full p-2 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    11-Month Agreement with Stamp Paper
                  </h3>
                  <p className="text-gray-600">
                    Receive a legally valid 11-month agreement, documented on stamp paper,
                    providing full compliance and peace of mind.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white rounded-full p-2 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    100% Refund Guarantee
                  </h3>
                  <p className="text-gray-600">
                    If the service is not successfully completed, you are eligible for a full refund,
                    making your investment risk-free.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Feature Cards Section */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-50 rounded-full">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <DynamicTabContent tabName="GST Registration" />
      <Faq />
      <Popularsearches />
      <Footer />
    </>
  );
}