"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BusinessSearchPage() {
 const [query, setQuery] = useState("");

 const handleSearch = (e: React.FormEvent) => {
 e.preventDefault();
 console.log("Search:", query);

 // later you can connect API here
 };

 return (
 <>
 <Navbar />

 <section className="bg-[#F4F3EE] py-5 min-h-screen">
 <div className="max-w-6xl mx-auto px-4 sm:px-6">

 {/* Header */}
 <div className="text-center mb-10">
 <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
 Business Search
 </h1>
 <p className="text-gray-600 max-w-2xl mx-auto">
 Search for registered businesses, compliance records, and important details.
 </p>
 </div>

 {/* Search Box */}
 <div className="bg-[#F4F3EE] rounded-2xl shadow-md p-6 sm:p-8 mb-8">

 <form
 onSubmit={handleSearch}
 className="flex flex-col sm:flex-row gap-3"
 >
 <input
 type="text"
 placeholder="Enter company name, GST number, or keyword..."
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

 {/* Results Placeholder */}
 <div className="bg-[#F4F3EE] rounded-2xl shadow-md p-6 sm:p-8">

 {query ? (
 <div>
 <h3 className="text-lg font-semibold text-gray-900 mb-4">
 Results for "{query}"
 </h3>

 {/* Example Result Card */}
 <div className="border border-[#B1ADA1]/40 rounded-xl p-4 mb-4">
 <p className="text-sm font-semibold text-[#C15F3C]">
 Example Business Name Pvt Ltd
 </p>
 <p className="text-xs text-gray-500 mt-1">
 GST: 22ABCDE1234F1Z5
 </p>
 <p className="text-xs text-gray-500">
 Status: Active
 </p>
 </div>

 <p className="text-xs text-gray-500">
 (Connect your API to show real results)
 </p>
 </div>
 ) : (
 <div className="text-center text-gray-500 text-sm">
 Start typing to search for a business.
 </div>
 )}

 </div>

 </div>
 </section>

 <Footer />
 </>
 );
}
