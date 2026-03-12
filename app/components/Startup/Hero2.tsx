"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Hero2() {
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
      {/* Main Content */}
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
                <span className="text-orange-600">
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
                <div className="text-xl sm:text-2xl font-bold text-orange-600">4.9</div>
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
                <div key={idx} className="flex items-center gap-2 bg-orange-50 rounded-lg p-2 sm:p-2.5">
                  <span className="text-base sm:text-lg">{feature.icon}</span>
                  <span className="text-xs sm:text-sm font-medium text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            {/* Form Header */}
            <div className="bg-gradient-to-r from-orange-600 to-orange-700 px-4 sm:px-5 py-2.5 sm:py-3">
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
                        ? "bg-orange-600 text-white"
                        : "bg-white text-gray-600 border border-gray-200 hover:bg-orange-50"
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
                {/* State Select */}
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
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-500"
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
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-500"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white font-semibold py-3 sm:py-3.5 px-4 rounded-lg text-sm sm:text-base hover:from-orange-700 hover:to-orange-800 transition-all mt-2 shadow-md hover:shadow-lg"
                >
                  Register Your {activeEntity} Now →
                </button>

                {/* Security Badge */}
                <div className="flex items-center justify-center gap-1.5 text-xs text-gray-500 pt-1">
                  <svg className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <span className="text-yellow-500 text-sm sm:text-base">★★★★★</span>
            <span className="text-xs sm:text-sm text-gray-600">4.9/5 (2.5k+ reviews)</span>
          </div>
          <div className="w-px h-3 bg-gray-200 hidden sm:block" />
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1.5">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 border-2 border-white" />
              ))}
            </div>
            <span className="text-xs sm:text-sm text-gray-600">Trusted by 50k+ businesses</span>
          </div>
        </div>
      </div>
    </div>
  );
}