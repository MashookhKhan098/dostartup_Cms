"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ConfidentialityPolicyPage() {
 return (
 <>
 <Navbar />

 <section className="bg-[#F4F3EE] py-5">
 <div className="max-w-6xl mx-auto px-4 sm:px-6">

 {/* Header */}
 <div className="text-center mb-12">
 <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
 Confidentiality Policy
 </h1>
 <p className="text-gray-600 max-w-2xl mx-auto">
 Your data is sensitive. We treat it with strict confidentiality and industry-level protection.
 </p>
 </div>

 {/* Highlight Box */}
 <div className="bg-[#F4F3EE] border border-[#B1ADA1]/40 rounded-2xl p-6 mb-10 text-center shadow-sm">
 <p className="text-sm text-gray-700">
 We handle personal documents like PAN, Aadhaar, GST, and business data. 
 Our systems are designed to keep your information secure and private at all times.
 </p>
 </div>

 {/* Grid Sections */}
 <div className="grid md:grid-cols-2 gap-6">

 {[
 {
 title: "Data Protection",
 text: "We use secure systems and restricted access to ensure your data is protected from unauthorized use.",
 },
 {
 title: "Limited Usage",
 text: "Your data is only used to deliver requested services and meet legal requirements.",
 },
 {
 title: "No Selling of Data",
 text: "We never sell or misuse your personal or business information.",
 },
 {
 title: "Authorized Sharing",
 text: "Data is shared only with government authorities or trusted partners when required.",
 },
 {
 title: "Secure Storage",
 text: "Your documents are stored securely and retained only as long as necessary.",
 },
 {
 title: "Team Confidentiality",
 text: "All team members are trained and bound by strict confidentiality obligations.",
 },
 ].map((item, i) => (
 <div
 key={i}
 className="bg-[#F4F3EE] rounded-xl p-5 border border-[#B1ADA1]/40 shadow-sm hover:shadow-md transition"
 >
 <h3 className="text-sm font-semibold text-[#C15F3C] mb-2">
 {item.title}
 </h3>
 <p className="text-xs text-gray-600">{item.text}</p>
 </div>
 ))}

 </div>

 {/* Bottom Section */}
 <div className="mt-12 bg-[#F4F3EE] rounded-2xl shadow-md p-6 text-center">
 <h3 className="text-lg font-semibold text-gray-900 mb-2">
 Questions about your data?
 </h3>
 <p className="text-sm text-gray-600 mb-3">
 Contact our support team for any concerns regarding confidentiality.
 </p>
 <p className="text-sm font-medium text-[#C15F3C]">
 support@dostartup.in
 </p>
 </div>

 </div>
 </section>

 <Footer />
 </>
 );
}
