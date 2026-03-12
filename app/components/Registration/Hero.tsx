

// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function DynamicHeroSection({
//   // Left side content props
//   heading,
//   headingHighlight,
//   description,
//   features,
  
//   // Right side tab/form props
//   tabs,
//   defaultTab,
//   tabDescriptions,
//   formFields,
//   buttonText,
//   onSubmit
// }) {
//   const router = useRouter();
//   const [activeTab, setActiveTab] = useState(defaultTab || tabs?.[0]?.name);

//   const handleTabClick = (tabName, path) => {
//     setActiveTab(tabName);
//     if (path) {
//       router.push(path);
//     }
//   };

//   const renderIcon = (iconType) => {
//     const icons = {
//       plus: (
//         <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
//           <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"/>
//         </svg>
//       ),
//       document: (
//         <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
//           <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"/>
//         </svg>
//       ),
//       chart: (
//         <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
//           <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
//         </svg>
//       ),
//       education: (
//         <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
//           <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
//         </svg>
//       ),
//       pause: (
//         <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
//           <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"/>
//         </svg>
//       ),
//       users: (
//         <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
//           <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
//         </svg>
//       ),
//       wallet: (
//         <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
//           <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
//         </svg>
//       )
//     };
//     return icons[iconType] || icons.document;
//   };

//   const renderFormField = (field, index) => {
//     switch (field.type) {
//       case "select":
//         return (
//           <div key={index} className="relative">
//             <select 
//               name={field.name}
//               className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white appearance-none cursor-pointer transition"
//             >
//               <option value="">{field.placeholder}</option>
//               {field.options?.map((option, i) => (
//                 <option key={i} value={option}>{option}</option>
//               ))}
//             </select>
//             <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
//               <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
//               </svg>
//             </div>
//           </div>
//         );
      
//       case "input":
//         return (
//           <input
//             key={index}
//             type={field.inputType || "text"}
//             name={field.name}
//             placeholder={field.placeholder}
//             className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
//           />
//         );
      
//       case "checkbox":
//         return (
//           <label key={index} className="flex items-start gap-3 cursor-pointer">
//             <input 
//               type="checkbox" 
//               name={field.name}
//               className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
//             />
//             <span className="text-sm text-gray-600">{field.label}</span>
//           </label>
//         );
      
//       case "text":
//         return (
//           <p key={index} className="text-sm text-gray-600">
//             {field.content}
//           </p>
//         );
      
//       default:
//         return null;
//     }
//   };

//   return (
//     <section className="relative bg-gray-50 overflow-hidden">
//       <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
//           {/* Left Side */}
//           <div className="space-y-8">
//             <div className="space-y-4">
//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
//                 {heading?.split(headingHighlight)[0]}
//                 <span className="text-blue-600 underline decoration-blue-600 decoration-4 underline-offset-8">
//                   {headingHighlight}
//                 </span>
//                 {heading?.split(headingHighlight)[1]}
//               </h1>

//               <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
//                 {description}
//               </p>
//             </div>

//             <ul className="space-y-5 pt-4">
//               {features?.map((feature, index) => (
//                 <li key={index} className="flex items-center gap-4">
//                   <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
//                     {renderIcon(feature.icon)}
//                   </div>
//                   <span className="text-gray-800 font-medium text-base">
//                     {feature.text}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Right Form Box */}
//           <div className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
//             {/* Gradient Bar */}
//             <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-orange-400"></div>
            
//             {/* Tabs (if provided) */}
//             {tabs && tabs.length > 0 && (
//               <div className="flex justify-center gap-2 p-4">
//                 {tabs.map(({ name, path }) => (
//                   <button
//                     key={name}
//                     onClick={() => handleTabClick(name, path)}
//                     className={`flex-1 px-6 py-3 text-sm font-semibold whitespace-nowrap transition-all rounded-lg ${
//                       activeTab === name
//                         ? "bg-blue-600 text-white"
//                         : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
//                     }`}
//                   >
//                     {name}
//                   </button>
//                 ))}
//               </div>
//             )}

//             {/* Content */}
//             <div className="p-8 space-y-6">
//               {/* Description (if tab descriptions provided) */}
//               {tabDescriptions && activeTab && tabDescriptions[activeTab] && (
//                 <div className="bg-gray-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
//                   <p className="text-gray-800 text-sm leading-relaxed font-medium">
//                     {tabDescriptions[activeTab]}
//                   </p>
//                 </div>
//               )}

//               {/* Form */}
//               <form 
//                 onSubmit={(e) => {
//                   e.preventDefault();
//                   if (onSubmit) {
//                     const formData = new FormData(e.target);
//                     onSubmit(Object.fromEntries(formData));
//                   }
//                 }}
//                 className="space-y-4 pt-2"
//               >
//                 {formFields?.map((field, index) => renderFormField(field, index))}

//                 <button 
//                   type="submit"
//                   className="w-full bg-blue-600 text-white text-sm font-semibold py-3 rounded-lg hover:bg-blue-700 transition shadow-sm hover:shadow-md"
//                 >
//                   {buttonText || "Submit"}
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

type Tab = {
  name: string;
  path?: string;
};

type Feature = {
  icon: string;
  text: string;
};

type FormField = {
  type: string;
  name?: string;
  placeholder?: string;
  inputType?: string;
  options?: string[];
  label?: string;
  content?: string;
  [key: string]: any;
};

type DynamicHeroSectionProps = {
  heading?: string;
  headingHighlight?: string;
  description?: string;
  features?: Feature[];
  tabs?: Tab[];
  defaultTab?: string | null;
  tabDescriptions?: Record<string, string> | null;
  formFields?: FormField[];
  buttonText?: string;
  onSubmit?: (data: Record<string, FormDataEntryValue>) => void;
};

export default function DynamicHeroSection({
  heading = "Start Your",
  headingHighlight = "Dream Business",
  description = "A Trade License is mandatory for businesses operating from commercial properties. Easily apply for Trade License online using IndiaFilings and ensure full compliance with local municipal regulations.",
  features,
  tabs,
  defaultTab,
  tabDescriptions,
  formFields,
  buttonText = "Continue",
  onSubmit
}: DynamicHeroSectionProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>(defaultTab || tabs?.[0]?.name || "");

  const handleTabClick = (tabName: string, path?: string): void => {
    setActiveTab(tabName);
    if (path) {
      router.push(path);
    }
  };

  return (
    <div className="bg-white">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-5 py-4 sm:py-6">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          
          {/* Left Column */}
          <div className="space-y-5 sm:space-y-6">

            <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-full px-3 py-1">
              <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
              <span className="text-xs sm:text-sm font-medium text-amber-700">
                TRUSTED BY 50K+ BUSINESSES
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                <span className="text-gray-900">{heading}</span>
                <br />
                <span className="text-amber-700">{headingHighlight}</span>
              </h1>

              <p className="text-sm sm:text-base text-gray-600 max-w-lg">
                {description}
              </p>
            </div>

            <div className="space-y-2 pt-1">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 border border-gray-300 rounded"></div>
                <span className="text-sm text-gray-700">Digital Process</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-amber-600 rounded flex items-center justify-center text-white text-xs">
                  ✓
                </div>
                <span className="text-sm text-gray-700">Super Fast Service</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 border border-gray-300 rounded"></div>
                <span className="text-sm text-gray-700">Trade License Renewal</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-1">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-base">★</span>
                ))}
              </div>
              <span className="text-sm font-medium text-gray-900">4.9/5</span>
              <span className="text-gray-300 text-sm">|</span>
              <span className="text-sm text-gray-600">50k+ reviews</span>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">

            <div className="bg-gradient-to-r from-amber-700 to-amber-800 px-4 sm:px-5 py-2.5 sm:py-3">
              <h2 className="text-sm sm:text-base font-bold text-white">Sign In</h2>
              <p className="text-amber-100 text-xs">
                to get started with your registration
              </p>
            </div>

            <div className="p-4 sm:p-5">
              <form
                onSubmit={(e: FormEvent<HTMLFormElement>) => {
                  e.preventDefault();
                  if (onSubmit) {
                    const formData = new FormData(e.currentTarget);
                    onSubmit(Object.fromEntries(formData));
                  }
                }}
                className="space-y-3 sm:space-y-4"
              >

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    PAN / GSTIN <span className="text-amber-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="pan"
                    placeholder="Enter PAN or GSTIN"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-600"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    State <span className="text-amber-600">*</span>
                  </label>

                  <select
                    name="state"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg text-xs sm:text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-amber-600"
                  >
                    <option>Select State</option>
                    <option>Maharashtra</option>
                    <option>Delhi NCR</option>
                    <option>Karnataka</option>
                    <option>Tamil Nadu</option>
                    <option>Gujarat</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Nature of Trade <span className="text-amber-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="trade"
                    placeholder="Retail, Manufacturing, Services"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-700 to-amber-800 text-white font-semibold py-3 sm:py-3.5 rounded-lg text-sm sm:text-base mt-2"
                >
                  {buttonText}
                </button>

                <div className="flex items-center justify-center gap-1.5 text-xs text-gray-500 pt-1">
                  <span>Secure · Instant access</span>
                </div>

              </form>
            </div>

            <div className="bg-gray-50 px-4 sm:px-5 py-2.5 sm:py-3 border-t border-gray-200">
              <p className="text-xs sm:text-sm text-center text-gray-600">
                New user?{" "}
                <a href="/signup" className="text-amber-700 font-semibold">
                  Create account →
                </a>
              </p>
            </div>

          </div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-4">
          <div className="flex items-center gap-1">
            <span className="text-yellow-500 text-sm sm:text-base">★★★★★</span>
            <span className="text-xs sm:text-sm text-gray-600">
              4.9/5 (2.5k+ reviews)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm text-gray-600">
              Trusted by 50k+ businesses
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}