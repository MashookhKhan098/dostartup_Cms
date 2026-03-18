"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TrademarkSearchPage() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Trademark Search:", query);

    // connect real API later
  };

  return (
    <>
      <Navbar />

      <section className="bg-[#F4F3EE] py-12 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trademark Search
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Search trademarks by name, owner, or application number to check availability and status.
            </p>
          </div>

          {/* Search Box */}
          <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 mb-8">

            <form
              onSubmit={handleSearch}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="text"
                placeholder="Enter trademark name or application number..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C15F3C]"
              />

              <button
                type="submit"
                className="bg-[#C15F3C] hover:bg-[#a94f30] text-white px-6 py-2 rounded-lg text-sm font-medium transition"
              >
                Search
              </button>
            </form>

          </div>

          {/* Results */}
          <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">

            {query ? (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Results for "{query}"
                </h3>

                {/* Example Result */}
                <div className="border border-[#B1ADA1]/40 rounded-xl p-4 mb-4">
                  <p className="text-sm font-semibold text-[#C15F3C]">
                    DO STARTUP
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Application No: 1234567
                  </p>
                  <p className="text-xs text-gray-500">
                    Class: 35
                  </p>
                  <p className="text-xs text-gray-500">
                    Status: Registered
                  </p>
                </div>

                <p className="text-xs text-gray-500">
                  (Connect your trademark API for real data)
                </p>
              </div>
            ) : (
              <div className="text-center text-gray-500 text-sm">
                Enter a trademark name to begin search.
              </div>
            )}

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}