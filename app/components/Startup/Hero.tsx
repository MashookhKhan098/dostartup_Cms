// // Improved design with better padding and spacing
// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function StartBusinessPage({ defaultEntity = "Company" }) {
//   const router = useRouter();
//   const [activeEntity, setActiveEntity] = useState(defaultEntity);

//   const entities = [
//     { name: "Company", path: "/company-registration" },
//     { name: "LLP", path: "/llp-registration" },
//     { name: "OPC", path: "/one-person-company" },
//     { name: "Proprietorship", path: "/proprietorship" },
//     { name: "Partnership", path: "/partnership" },
//   ];

//   const descriptions = {
//     Company: "A company is a separate legal entity with limited liability protection. Ideal for businesses seeking to raise capital and expand operations with multiple shareholders.",
//     LLP: "Limited Liability Partnership combines benefits of partnership and company. Partners have limited liability and operational flexibility with minimal compliance requirements.",
//     OPC: "One Person Company allows a single entrepreneur to operate as a corporate entity with limited liability, suitable for small businesses and startups.",
//     Proprietorship: "A proprietorship is a single-owner business with no separate legal identity from the owner. Most common for micro and small businesses due to minimal compliance, full control, and ease of setup.",
//     Partnership: "A partnership is a business structure where two or more individuals share ownership, profits, and responsibilities. Suitable for collaborative ventures with shared management.",
//   };

//   const handleEntityClick = (entity: string, path: string) => {
//     setActiveEntity(entity);
//     router.push(path);
//   };

//   return (
//     <section className="relative bg-gray-50 overflow-hidden">
//       <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
//           {/* Left Side */}
//           <div className="space-y-8">
//             <div className="space-y-4">
//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
//                 Start Your{" "}
//                 <span className="text-blue-600 underline decoration-blue-600 decoration-4 underline-offset-8">
//                   Business
//                 </span>
//               </h1>

//               <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
//                 Register your entity seamlessly with a paperless, hassle-free
//                 business incorporation platform trusted by India's leading
//                 businesses.
//               </p>
//             </div>

//             <ul className="space-y-5 pt-4">
//               <li className="flex items-center gap-4">
//                 <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
//                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"/>
//                   </svg>
//                 </div>
//                 <span className="text-gray-800 font-medium text-base">
//                   Affordable & Cost-Effective Service
//                 </span>
//               </li>

//               <li className="flex items-center gap-4">
//                 <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
//                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"/>
//                   </svg>
//                 </div>
//                 <span className="text-gray-800 font-medium text-base">
//                   Digital & Paperless Process
//                 </span>
//               </li>

//               <li className="flex items-center gap-4">
//                 <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
//                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
//                   </svg>
//                 </div>
//                 <span className="text-gray-800 font-medium text-base">
//                   Over 1 Lakh Businesses Incorporated
//                 </span>
//               </li>

//               <li className="flex items-center gap-4">
//                 <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
//                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
//                   </svg>
//                 </div>
//                 <span className="text-gray-800 font-medium text-base">
//                   Expert Guidance on Business Entity
//                 </span>
//               </li>
//             </ul>
//           </div>

//           {/* Right Form Box */}
//           <div className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
//             {/* Gradient Bar */}
//             <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-orange-400"></div>
            
//             {/* Tabs */}
//             <div className="flex border-b border-gray-200 overflow-x-auto scrollbar-hide">
//               {entities.map(({ name, path }) => (
//                 <button
//                   key={name}
//                   onClick={() => handleEntityClick(name, path)}
//                   className={`px-6 py-4 text-sm font-semibold whitespace-nowrap transition-all relative ${
//                     activeEntity === name
//                       ? "text-blue-600 bg-blue-50"
//                       : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
//                   }`}
//                 >
//                   {name}
//                   {activeEntity === name && (
//                     <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
//                   )}
//                 </button>
//               ))}
//             </div>

//             {/* Content */}
//             <div className="p-8 space-y-6">
//               {/* Description */}
//               {/* <p className="text-gray-700 text-sm leading-relaxed">
//                 {descriptions[activeEntity as keyof typeof descriptions]}
//               </p> */}
//               {/* Description with better visibility */}
//               <div className="bg-gray-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
//                 <p className="text-gray-800 text-sm leading-relaxed font-medium">
//                   {descriptions[activeEntity as keyof typeof descriptions]}
//                 </p>
//               </div>


//               {/* Form */}
//               <div className="space-y-4 pt-2">
//                 <div className="relative">
//                   <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white appearance-none cursor-pointer transition">
//                     <option value="">Select State</option>
//                     <option>Delhi</option>
//                     <option>Maharashtra</option>
//                     <option>Karnataka</option>
//                     <option>Uttar Pradesh</option>
//                     <option>Gujarat</option>
//                   </select>
//                   <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
//                     <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
//                     </svg>
//                   </div>
//                 </div>

//                 <input
//                   type="text"
//                   placeholder="Proposed Name"
//                   className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
//                 />

//                 <button className="w-full bg-blue-600 text-white text-sm font-semibold py-3 rounded-lg hover:bg-blue-700 transition shadow-sm hover:shadow-md">
//                   Register
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function StartBusinessPage() {
  const router = useRouter();
  const [activeEntity, setActiveEntity] = useState("Startup");
  const [formData, setFormData] = useState({
    state: "",
    name: "",
    capital: "",
    members: ""
  });

  const entities = [
    { name: "Startup", path: "/startup-registration" },
    { name: "Company", path: "/company-registration" },
    { name: "LLP", path: "/llp-registration" },
    { name: "OPC", path: "/one-person-company" },
    { name: "Proprietorship", path: "/proprietorship" },
    { name: "Partnership", path: "/partnership" },
  ];

  const descriptions = {
    Startup: "Launch your innovative venture with our startup registration package. Perfect for high-growth potential businesses seeking investment and scalability.",
    Company: "Private Limited Company registration with full compliance. Ideal for businesses planning to raise funding and expand operations.",
    LLP: "Limited Liability Partnership combines flexibility with protection. Best for professional services and partnership-based businesses.",
    OPC: "One Person Company - perfect for solo entrepreneurs who want corporate benefits with minimal compliance.",
    Proprietorship: "Sole Proprietorship registration for small businesses. Simple structure with complete owner control.",
    Partnership: "Partnership firm registration for businesses with multiple owners. Easy to form and operate.",
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.state || !formData.name) {
      alert("Please fill in all required fields");
      return;
    }
    router.push(`/register?type=${activeEntity}&state=${formData.state}&name=${formData.name}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content - Adjusted zoom (slightly larger) */}
      <div className="max-w-7xl mx-auto px-3 sm:px-5 py-6 sm:py-8">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Left Column */}
          <div className="space-y-5 sm:space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 bg-orange-50 border border-orange-200 rounded-full px-3 py-1">
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
              <span className="text-xs sm:text-sm font-medium text-orange-600">#1 REGISTRATION PLATFORM</span>
            </div>

            {/* Heading */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                <span className="text-gray-900">Start Your</span>
                <br />
                <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
                  Dream Business
                </span>
              </h1>
              
              <p className="text-sm sm:text-base text-gray-600 max-w-lg">
                Join 50,000+ entrepreneurs. Complete digital process, expert support.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-orange-600">50K+</div>
                <div className="text-xs text-gray-500">Registrations</div>
              </div>
              <div className="w-px h-6 sm:h-8 bg-gray-200" />
              <div>
                <div className="text-xl sm:text-2xl font-bold text-blue-600">4.9</div>
                <div className="text-xs text-gray-500">Rating</div>
              </div>
              <div className="w-px h-6 sm:h-8 bg-gray-200" />
              <div>
                <div className="text-xl sm:text-2xl font-bold text-orange-600">24/7</div>
                <div className="text-xs text-gray-500">Support</div>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {[
                { icon: "⚡", text: "Same Day Registration" },
                { icon: "🛡️", text: "100% Digital" },
                { icon: "🎯", text: "Expert CA Support" },
                { icon: "💰", text: "Money-back Guarantee" },
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-gray-50 rounded-lg p-2 sm:p-2.5">
                  <span className="text-base sm:text-lg">{feature.icon}</span>
                  <span className="text-xs sm:text-sm font-medium text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            {/* Form Header */}
            <div className="bg-gradient-to-r from-orange-600 to-blue-600 px-4 sm:px-5 py-2.5 sm:py-3">
              <h2 className="text-sm sm:text-base font-bold text-white">Get Started Today</h2>
              <p className="text-orange-100 text-xs">Free consultation • No hidden charges</p>
            </div>

            {/* Entity Tabs - Scrollable on mobile */}
            <div className="border-b border-gray-200 bg-gray-50 px-3 sm:px-4 py-2 overflow-x-auto">
              <div className="flex gap-1 min-w-max">
                {entities.map(({ name }) => (
                  <button
                    key={name}
                    onClick={() => setActiveEntity(name)}
                    className={`px-2.5 sm:px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                      activeEntity === name
                        ? "bg-gradient-to-r from-orange-600 to-blue-600 text-white"
                        : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>

            {/* Form Body */}
            <div className="p-4 sm:p-5">
              {/* Description */}
              <div className="bg-orange-50 p-3 sm:p-4 rounded-lg mb-4">
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {descriptions[activeEntity as keyof typeof descriptions]}
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                {/* State Select - Fixed text color */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    State <span className="text-orange-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg text-xs sm:text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-orange-500 appearance-none cursor-pointer"
                    >
                      <option value="" className="text-gray-500">Select your state</option>
                      <option value="Delhi" className="text-gray-900">Delhi NCR</option>
                      <option value="Maharashtra" className="text-gray-900">Maharashtra</option>
                      <option value="Karnataka" className="text-gray-900">Karnataka</option>
                      <option value="Tamil Nadu" className="text-gray-900">Tamil Nadu</option>
                      <option value="Gujarat" className="text-gray-900">Gujarat</option>
                      <option value="Telangana" className="text-gray-900">Telangana</option>
                      <option value="West Bengal" className="text-gray-900">West Bengal</option>
                      <option value="Uttar Pradesh" className="text-gray-900">Uttar Pradesh</option>
                      <option value="Rajasthan" className="text-gray-900">Rajasthan</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Business Name */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Business Name <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g., Tech Solutions Pvt Ltd"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                {/* Two Column */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      Capital (₹)
                    </label>
                    <input
                      type="text"
                      name="capital"
                      value={formData.capital}
                      onChange={handleInputChange}
                      placeholder="Amount"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      Members
                    </label>
                    <input
                      type="number"
                      name="members"
                      value={formData.members}
                      onChange={handleInputChange}
                      placeholder="No."
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-600 to-blue-600 text-white font-semibold py-3 sm:py-3.5 px-4 rounded-lg text-sm sm:text-base hover:from-orange-700 hover:to-blue-700 transition-all mt-2 shadow-md hover:shadow-lg"
                >
                  Register Your {activeEntity} Now →
                </button>

                {/* Security Badge */}
                <div className="flex items-center justify-center gap-1.5 text-xs text-gray-500 pt-1">
                  <svg className="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>100% secure · No spam · Instant confirmation</span>
                </div>
              </form>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-4 sm:px-5 py-2.5 sm:py-3 border-t border-gray-200">
              <p className="text-xs sm:text-sm text-center text-gray-600">
                Already started your registration?{' '}
                <a href="/track" className="text-orange-600 hover:text-orange-700 font-semibold">
                  Track Application →
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-5 sm:mt-6">
          <div className="flex items-center gap-1">
            <span className="text-yellow-400 text-sm sm:text-base">★★★★★</span>
            <span className="text-xs sm:text-sm text-gray-600">4.9/5 (2.5k+ reviews)</span>
          </div>
          <div className="w-px h-3 bg-gray-200 hidden sm:block" />
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1.5">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-orange-400 to-blue-500 border-2 border-white" />
              ))}
            </div>
            <span className="text-xs sm:text-sm text-gray-600">Trusted by 50k+ businesses</span>
          </div>
        </div>
      </div>
    </div>
  );
}