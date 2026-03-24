"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function StartBusinessPage({ defaultEntity = "Startup" }: { defaultEntity?: string }) {
  const router = useRouter();
  const [activeEntity, setActiveEntity] = useState(defaultEntity);
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
    <div className="min-h-screen bg-[#F4F3EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* LEFT SECTION */}
          <div className="flex-1 bg-white rounded-2xl shadow-sm border border-[#E5E2DA] p-6">
            <div className="flex flex-col md:flex-row gap-8">

              {/* LEFT SIDEBAR WITH IMAGE PLACEHOLDER */}
              <div className="w-full md:w-64 flex-shrink-0">
                <div className="w-full h-48 bg-gradient-to-br from-[#C15F3C] to-[#A94E30] rounded-xl border border-[#E5E2DA] flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Startup</span>
                </div>

                <div className="mt-4 space-y-2">
                  {["Documents Required", "Fee Structure", "Eligibility"].map((item) => (
                    <p key={item} className="text-sm text-[#6F6B63] hover:text-[#C15F3C] cursor-pointer">
                      {item}
                    </p>
                  ))}
                  <button className="text-sm text-[#C15F3C] font-medium hover:underline">
                    Learn More →
                  </button>
                </div>
              </div>

              {/* MAIN CONTENT */}
              <div className="flex-1 space-y-6">

                {/* BADGE */}
                <div>
                  <div className="inline-flex items-center gap-2 bg-[#F4F3EE] border border-[#E5E2DA] rounded-full px-3 py-1">
                    <div className="w-2 h-2 bg-[#C15F3C] rounded-full" />
                    <span className="text-xs font-medium text-[#C15F3C]">
                      #1 REGISTRATION PLATFORM
                    </span>
                  </div>
                </div>

                {/* HEADING */}
                <div>
                  <h1 className="text-2xl sm:text-3xl font-semibold text-[#2F2E2B] leading-tight">
                    Start Your<br />
                    <span className="text-[#C15F3C]">
                      Dream Business
                    </span>
                  </h1>

                  <p className="text-sm text-[#6F6B63] leading-relaxed mt-3">
                    Join 50,000+ entrepreneurs. Complete digital process, expert support.
                  </p>
                </div>

                {/* STATS */}
                <div className="flex flex-wrap items-center gap-6">
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-[#C15F3C]">50K+</div>
                    <div className="text-xs text-[#6F6B63]">Registrations</div>
                  </div>
                  <div className="w-px h-8 bg-[#E5E2DA]" />
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-[#C15F3C]">4.9</div>
                    <div className="text-xs text-[#6F6B63]">Rating</div>
                  </div>
                  <div className="w-px h-8 bg-[#E5E2DA]" />
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-[#C15F3C]">24/7</div>
                    <div className="text-xs text-[#6F6B63]">Support</div>
                  </div>
                </div>

                {/* FEATURES */}
                <div className="bg-[#F4F3EE] border border-[#E5E2DA] rounded-xl p-5">
                  <span className="inline-block bg-[#C15F3C] text-white text-xs px-3 py-1.5 rounded-full mb-4">
                    Key Features
                  </span>

                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: "⚡", text: "Same Day Registration" },
                      { icon: "🛡️", text: "100% Digital" },
                      { icon: "🎯", text: "Expert CA Support" },
                      { icon: "💰", text: "Money-back Guarantee" },
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-white rounded-lg p-2.5 border border-[#E5E2DA]">
                        <span className="text-base">{feature.icon}</span>
                        <span className="text-xs font-medium text-[#2F2E2B]">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* LINKS */}
                <div className="flex justify-between text-sm">
                  <button className="text-[#C15F3C] hover:underline">
                    Terms and conditions
                  </button>
                  <button className="text-[#C15F3C] hover:underline">
                    Need Help?
                  </button>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:w-96 bg-white rounded-2xl shadow-sm border border-[#E5E2DA] overflow-hidden">

            {/* FORM HEADER */}
            <div className="bg-gradient-to-r from-[#C15F3C] to-[#A94E30] px-6 py-4">
              <h2 className="text-lg font-semibold text-white">Get Started Today</h2>
              <p className="text-sm text-[#F4F3EE]">Free consultation • No hidden charges</p>
            </div>

            {/* ENTITY TABS */}
            <div className="border-b border-[#E5E2DA] bg-[#F4F3EE] px-4 py-3 overflow-x-auto">
              <div className="flex gap-2 min-w-max">
                {entities.map(({ name }) => (
                  <button
                    key={name}
                    onClick={() => setActiveEntity(name)}
                    className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${activeEntity === name
                      ? "bg-[#C15F3C] text-white"
                      : "bg-white text-[#6F6B63] border border-[#E5E2DA] hover:border-[#C15F3C] hover:text-[#C15F3C]"
                      }`}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>

            {/* FORM CONTENT */}
            <div className="p-6 space-y-6">

              {/* DESCRIPTION */}
              <div className="bg-[#F4F3EE] border-l-4 border-[#C15F3C] p-4 rounded-r-lg">
                <p className="text-sm text-[#2F2E2B] leading-relaxed">
                  {descriptions[activeEntity as keyof typeof descriptions]}
                </p>
              </div>

              {/* FORM */}
              <form onSubmit={handleSubmit} className="space-y-4">

                {/* STATE SELECT */}
                <div>
                  <label className="block text-xs text-[#6F6B63] mb-1">
                    State
                  </label>
                  <div className="relative">
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] bg-[#F4F3EE] appearance-none cursor-pointer"
                    >
                      <option value="" className="text-[#B1ADA1]">Select your state</option>
                      <option value="Delhi">Delhi NCR</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Telangana">Telangana</option>
                      <option value="West Bengal">West Bengal</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Rajasthan">Rajasthan</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-[#6F6B63]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* BUSINESS NAME */}
                <div>
                  <label className="block text-xs text-[#6F6B63] mb-1">
                    Business Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g., Tech Solutions Pvt Ltd"
                    className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] placeholder-[#B1ADA1] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] bg-[#F4F3EE]"
                  />
                </div>

                {/* TWO COLUMN GRID */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-[#6F6B63] mb-1">
                      Capital (₹)
                    </label>
                    <input
                      type="text"
                      name="capital"
                      value={formData.capital}
                      onChange={handleInputChange}
                      placeholder="Amount"
                      className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] placeholder-[#B1ADA1] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] bg-[#F4F3EE]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#6F6B63] mb-1">
                      Members
                    </label>
                    <input
                      type="number"
                      name="members"
                      value={formData.members}
                      onChange={handleInputChange}
                      placeholder="No."
                      className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] placeholder-[#B1ADA1] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] bg-[#F4F3EE]"
                    />
                  </div>
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  className="w-full bg-[#C15F3C] text-white font-semibold py-3 rounded-lg text-sm hover:bg-[#A94E30] transition shadow-sm hover:shadow-md mt-2"
                >
                  Register Your {activeEntity} Now →
                </button>

                {/* SECURITY BADGE */}
                <div className="flex items-center justify-center gap-2 text-xs text-[#B1ADA1] pt-2">
                  <svg className="w-4 h-4 text-[#C15F3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>100% secure · No spam · Instant confirmation</span>
                </div>

              </form>
            </div>

            {/* FOOTER */}
            <div className="bg-[#F4F3EE] px-6 py-3 border-t border-[#E5E2DA]">
              <p className="text-sm text-center text-[#6F6B63]">
                Already started your registration?{' '}
                <button className="text-[#C15F3C] hover:underline font-semibold">
                  Track Application →
                </button>
              </p>
            </div>

          </div>
        </div>

        {/* TRUST BADGES - REDUCED BOTTOM GAP */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-[#6F6B63] mt-2 pb-0">
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-[#C15F3C] text-[#C15F3C]" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span>4.9/5 (2.5k+ reviews)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-r from-[#C15F3C] to-[#A94E30] border-2 border-white shadow-sm" />
              ))}
            </div>
            <span>Trusted by 50k+ businesses</span>
          </div>
        </div>

      </div>
    </div>
  );
}