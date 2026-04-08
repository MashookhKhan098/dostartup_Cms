"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FiSearch, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from "react";

const MINISTRIES = [
  { name: "Ministry of Commerce & Industry", count: 85 },
  { name: "Ministry of Corporate Affairs", count: 62 },
  { name: "Ministry of Labor & Employment", count: 58 },
  { name: "Ministry of Environment & Forests", count: 54 },
  { name: "Ministry of Ayush", count: 48 },
  { name: "Ministry of Steel", count: 42 },
  { name: "Ministry of Petroleum & Natural Gas", count: 38 },
  { name: "Ministry of Power", count: 35 },
  { name: "Ministry of Civil Aviation", count: 32 },
  { name: "Ministry of Mines", count: 28 },
  { name: "Ministry of Chemicals & Fertilizers", count: 25 },
  { name: "Ministry of Consumer Affairs", count: 22 },
  { name: "Ministry of Food Public Distribution", count: 20 },
  { name: "Ministry of Heavy Industries", count: 18 },
  { name: "Ministry of Railways", count: 16 },
];

const DEPARTMENTS = [
  { name: "Department of Industrial Policy", count: 52 },
  { name: "Department of Promotion of Industry", count: 48 },
  { name: "Department of Exports", count: 42 },
  { name: "Department of Scientific Research", count: 38 },
  { name: "Department of Biotechnology", count: 35 },
  { name: "Department of Space", count: 32 },
  { name: "Department of Telecommunications", count: 28 },
  { name: "Department of Energy", count: 25 },
  { name: "Department of Infrastructure", count: 22 },
  { name: "Department of Investment", count: 20 },
  { name: "Department of Trade", count: 18 },
  { name: "Department of Labor Statistics", count: 16 },
];

const SAMPLE_APPROVALS = [
  {
    ministry: "Ministry of Commerce & Industry",
    title: "Import Export Code Registration",
    description: "Application for registration to engage in import and export activities",
  },
  {
    ministry: "Ministry of Corporate Affairs",
    title: "Company Registration & Incorporation",
    description: "Registration of new company and incorporation documents at MCA",
  },
  {
    ministry: "Ministry of Labor & Employment",
    title: "Shops and Establishment Act Registration",
    description: "Registration of shops, commercial establishments under labor laws",
  },
  {
    ministry: "Ministry of Commerce & Industry",
    title: "Trade License Application",
    description: "Application for trade license approval from local authorities",
  },
  {
    ministry: "Ministry of Environment & Forests",
    title: "Environmental Clearance",
    description: "Environmental impact assessment and clearance for industrial projects",
  },
  {
    ministry: "Ministry of Corporate Affairs",
    title: "Director Identification Number (DIN)",
    description: "Unique identification for company directors and officials",
  },
  {
    ministry: "Ministry of Ayush",
    title: "Ayurvedic Medicine License",
    description: "License for manufacturing and distribution of Ayurvedic medications",
  },
  {
    ministry: "Ministry of Commerce & Industry",
    title: "SEZ Authorization",
    description: "Special Economic Zone establishment and approval process",
  },
  {
    ministry: "Ministry of Labor & Employment",
    title: "Building & Construction Permits",
    description: "Permits and approvals for construction and building projects",
  },
  {
    ministry: "Ministry of Steel",
    title: "Steel Industry License",
    description: "License for steel manufacturing and production facilities",
  },
  {
    ministry: "Ministry of Petroleum & Natural Gas",
    title: "Petroleum Dealer License",
    description: "Authorization to operate petroleum retail outlets",
  },
  {
    ministry: "Ministry of Power",
    title: "Power Generation License",
    description: "License for establishing power generation facilities",
  },
  {
    ministry: "Ministry of Civil Aviation",
    title: "Airport Operating License",
    description: "License for operation and management of aviation facilities",
  },
  {
    ministry: "Ministry of Mines",
    title: "Mining Lease Application",
    description: "Application for mineral extraction and mining operations",
  },
  {
    ministry: "Ministry of Chemicals & Fertilizers",
    title: "Fertilizer Manufacturing License",
    description: "License for production and distribution of fertilizers",
  },
  {
    ministry: "Ministry of Consumer Affairs",
    title: "Food Product Licensing",
    description: "License for food processing and consumer product manufacturing",
  },
  {
    ministry: "Ministry of Corporate Affairs",
    title: "Limited Liability Partnership Registration",
    description: "Formation and registration of LLP entities",
  },
  {
    ministry: "Ministry of Commerce & Industry",
    title: "Startup Registration",
    description: "Startup recognition and registration with government",
  },
  {
    ministry: "Ministry of Labor & Employment",
    title: "PF Registration",
    description: "Provident Fund registration for employers",
  },
  {
    ministry: "Ministry of Environment & Forests",
    title: "Waste Management Approval",
    description: "Approval for industrial waste management systems",
  },
];

export default function CentralApprovals() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMinistry, setSelectedMinistry] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredApprovals = SAMPLE_APPROVALS.filter((approval) => {
    const matchesSearch =
      approval.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      approval.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesMinistry =
      !selectedMinistry || approval.ministry === selectedMinistry;
    return matchesSearch && matchesMinistry;
  });

  const totalPages = Math.ceil(filteredApprovals.length / itemsPerPage);
  const paginatedApprovals = filteredApprovals.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <main className="min-h-screen bg-[#F4F3EE]">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2F2E2B] to-[#1a1a18] py-12 px-4 text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Central Approvals</h1>
          <p className="text-[#B1ADA1] text-lg">
            Issued by Ministries of Govt. of India
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="bg-[#F4F3EE] border-b border-[#E5E2DA] py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B1ADA1] w-5 h-5" />
            <input
              type="text"
              placeholder="Search for Approvals and Registrations"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-12 pr-6 py-4 border border-[#E5E2DA] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C15F3C] text-[#2F2E2B] placeholder-[#B1ADA1]"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-8">
            {/* Sidebar Filters */}
            <div className="w-64 flex-shrink-0">
              <div className="bg-[#F4F3EE] rounded-xl border border-[#E5E2DA] p-6 sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none"
                }}>
                <style>{`
                  div[style*="overflow-y: auto"]::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>
                <h3 className="text-lg font-bold text-[#2F2E2B] mb-6 flex items-center gap-2">
                  <FiSearch className="w-5 h-5 text-[#C15F3C]" />
                  FILTERS
                </h3>

                {/* Ministries */}
                <div className="mb-8">
                  <h4 className="font-semibold text-[#2F2E2B] mb-4 text-sm uppercase tracking-wide">
                    Ministries
                  </h4>
                  <div className="space-y-3">
                    {MINISTRIES.map((ministry) => (
                      <label
                        key={ministry.name}
                        className="flex items-center gap-3 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          checked={selectedMinistry === ministry.name}
                          onChange={() =>
                            setSelectedMinistry(
                              selectedMinistry === ministry.name
                                ? null
                                : ministry.name
                            )
                          }
                          className="w-5 h-5 rounded border-[#E5E2DA] text-[#C15F3C] cursor-pointer accent-[#C15F3C]"
                        />
                        <span className="text-sm text-[#6F6B63] group-hover:text-[#2F2E2B] transition-colors flex-1">
                          {ministry.name}
                        </span>
                        <span className="text-xs bg-[#F4F3EE] text-[#9D9690] px-2 py-1 rounded font-medium">
                          {ministry.count}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Departments */}
                <div className="border-t border-[#E5E2DA] pt-6">
                  <h4 className="font-semibold text-[#2F2E2B] mb-4 text-sm uppercase tracking-wide">
                    Departments
                  </h4>
                  <div className="space-y-3">
                    {DEPARTMENTS.map((dept) => (
                      <label
                        key={dept.name}
                        className="flex items-center gap-3 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          className="w-5 h-5 rounded border-[#E5E2DA] text-[#C15F3C] cursor-pointer accent-[#C15F3C]"
                        />
                        <span className="text-sm text-[#6F6B63] group-hover:text-[#2F2E2B] transition-colors flex-1">
                          {dept.name}
                        </span>
                        <span className="text-xs bg-[#F4F3EE] text-[#9D9690] px-2 py-1 rounded font-medium">
                          {dept.count}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="flex-1">
              <div className="mb-6">
                <p className="text-[#6F6B63] font-medium">
                  <span className="font-bold text-[#2F2E2B]">
                    {filteredApprovals.length}
                  </span>{" "}
                  Approvals Found
                </p>
              </div>

              {/* Approval Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {paginatedApprovals.map((approval, idx) => (
                  <div
                    key={idx}
                    className="bg-[#F4F3EE] rounded-xl border border-[#E5E2DA] p-6 hover:shadow-lg hover:border-[#C15F3C] transition-all duration-300 group cursor-pointer"
                  >
                    <p className="text-[#C15F3C] text-xs font-bold uppercase tracking-wide mb-2">
                      {approval.ministry}
                    </p>
                    <h3 className="text-[#2F2E2B] font-bold text-lg mb-3 group-hover:text-[#C15F3C] transition-colors line-clamp-2">
                      {approval.title}
                    </h3>
                    <p className="text-[#6F6B63] text-sm line-clamp-3">
                      {approval.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-4 mb-12">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#E5E2DA] text-[#C15F3C] hover:bg-[#F4F3EE] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    <FiChevronLeft className="w-4 h-4" />
                    PREV
                  </button>

                  <div className="flex gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                            currentPage === page
                              ? "bg-[#C15F3C] text-white"
                              : "border border-[#E5E2DA] text-[#2F2E2B] hover:border-[#C15F3C]"
                          }`}
                        >
                          {page}
                        </button>
                      )
                    )}
                  </div>

                  <button
                    onClick={() =>
                      setCurrentPage(Math.min(totalPages, currentPage + 1))
                    }
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#E5E2DA] text-[#C15F3C] hover:bg-[#F4F3EE] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    NEXT
                    <FiChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-[#C15F3C]/10 to-[#C15F3C]/5 border-2 border-[#C15F3C] rounded-xl p-8 text-center">
                <h3 className="text-xl font-bold text-[#2F2E2B] mb-2">
                  Don't know which approvals you need?
                </h3>
                <p className="text-[#6F6B63] mb-6">
                  Answer a few simple questions and we will guide you
                </p>
                <button className="px-8 py-3 bg-[#C15F3C] text-white rounded-xl font-semibold hover:bg-[#A94E30] transition-all">
                  Know Your Approvals
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
