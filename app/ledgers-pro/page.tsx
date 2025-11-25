// // import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer";
// // import Popularsearches from '../components/PopularSearches';
// // import Hero from '../components/Gst/Hero2';
// // import DynamicTabContent from '../components/Gst/DynamicTabContent';
// // import Faq from '../components/Gst/Faq';

// // export default function Home() {
// //   return (
// //     <>
// //       <Navbar />
// //       <Hero/>
// //       <DynamicTabContent tabName="GST Registration" />
// //       <Faq />
// //       <Popularsearches />
// //       <Footer />
// //     </>
// //   );
// // }

// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Popularsearches from '../components/PopularSearches';
// import Hero from '../components/Gst/Hero2';
// import DynamicTabContent from '../components/Gst/DynamicTabContent';
// import Faq from '../components/Gst/Faq';

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
    
//     // onSubmit: (formData) => {
//     //   console.log("Form submitted:", formData);
//     //   // Handle form submission here
//     // }
//   };

//   return (
//     <>
//       <Navbar />
//       <Hero {...heroProps} />
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
import Hero from '../components/Gst/Hero2';
import DynamicTabContent from '../components/Gst/DynamicTabContent';
import Faq from '../components/Gst/Faq';
import { Rocket, Zap, Users } from 'lucide-react';

export default function Home() {

  const heroProps = {
    // Left side content
    heading: "Partner with IndiaFilings",
    headingHighlight: "IndiaFilings",
    description: "Grow your business with IndiaFilings' AI-powered partner ecosystem - simplify compliance, automate workflows, and serve more clients with speed, precision, and confidence.",
    features: [
      {
        icon: "users",
        text: "AI-Powered Partner Ecosystem"
      },
      {
        icon: "document",
        text: "Simplified Compliance Management"
      },
      {
        icon: "wallet",
        text: "Automated Workflow Solutions"
      },
      {
        icon: "education",
        text: "Serve More Clients with Precision"
      }
    ],
    
    // Right side form - No tabs for this form
    tabs: null,
    defaultTab: null,
    tabDescriptions: null,
    
    // Modal/Form configuration
    modalTitle: "LEDGERS PRO Platform Signup",
    
    // Form fields
    formFields: [
      {
        type: "select",
        name: "accountant_type",
        placeholder: "Accountant Type",
        label: "Accountant Type",
        options: [
          "Chartered Accountant",
          "Tax Consultant",
          "Company Secretary",
          "Cost Accountant",
          "Accounting Firm",
          "Individual Accountant",
          "Others"
        ]
      },
      {
        type: "input",
        inputType: "text",
        name: "location",
        placeholder: "Location"
      },
      {
        type: "input",
        inputType: "text",
        name: "name",
        placeholder: "Name"
      },
      {
        type: "input",
        inputType: "email",
        name: "email",
        placeholder: "Email"
      },
      {
        type: "phone",
        name: "phone",
        placeholder: "Phone",
        countryCode: "+91",
        defaultCountry: "IN"
      },
      {
        type: "input",
        inputType: "text",
        name: "business_name",
        placeholder: "Business Name"
      }
    ],
    
    buttonText: "Request Demo",
  };

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
      <Hero {...heroProps} />
      
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