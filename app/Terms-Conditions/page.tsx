"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsPage() {
 return (
 <>
 <Navbar />

 <section className="bg-[#F4F3EE] py-5">
 <div className="max-w-4xl mx-auto px-4 sm:px-6">

 {/* Header */}
 <div className="text-center mb-10">
 <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
 Terms & Conditions
 </h1>
 <p className="text-gray-600">
 Please read these terms carefully before using our services.
 </p>
 </div>

 {/* Content */}
 <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 space-y-6 text-sm text-gray-700 leading-relaxed">

 <div>
 <h2 className="text-lg font-semibold text-[#C15F3C] mb-2">
 1. Acceptance of Terms
 </h2>
 <p>
 By accessing and using DoStartup services, you accept and agree
 to be bound by these Terms & Conditions. If you do not agree,
 please do not use our services.
 </p>
 </div>

 <div>
 <h2 className="text-lg font-semibold text-[#C15F3C] mb-2">
 2. Services Offered
 </h2>
 <p>
 DoStartup provides business registration, compliance, and
 related consultancy services. We act as a service provider and
 do not guarantee approval from government authorities.
 </p>
 </div>

 <div>
 <h2 className="text-lg font-semibold text-[#C15F3C] mb-2">
 3. User Responsibilities
 </h2>
 <p>
 You agree to provide accurate and complete information. Any
 incorrect or misleading data may result in delays or rejection of
 services.
 </p>
 </div>

 <div>
 <h2 className="text-lg font-semibold text-[#C15F3C] mb-2">
 4. Payments & Refunds
 </h2>
 <p>
 All payments made are subject to our pricing policy. Refunds are
 processed only under specific conditions and may vary depending
 on the service.
 </p>
 </div>

 <div>
 <h2 className="text-lg font-semibold text-[#C15F3C] mb-2">
 5. Limitation of Liability
 </h2>
 <p>
 DoStartup shall not be held liable for any direct or indirect
 damages arising from the use of our services or delays caused by
 external authorities.
 </p>
 </div>

 <div>
 <h2 className="text-lg font-semibold text-[#C15F3C] mb-2">
 6. Intellectual Property
 </h2>
 <p>
 All content, branding, and materials on this website are the
 property of DoStartup and may not be reused without permission.
 </p>
 </div>

 <div>
 <h2 className="text-lg font-semibold text-[#C15F3C] mb-2">
 7. Changes to Terms
 </h2>
 <p>
 We reserve the right to update these terms at any time. Continued
 use of the website means you accept the updated terms.
 </p>
 </div>

 <div>
 <h2 className="text-lg font-semibold text-[#C15F3C] mb-2">
 8. Contact Information
 </h2>
 <p>
 For any questions regarding these Terms, please contact us at{" "}
 <span className="text-[#C15F3C] font-medium">
 support@dostartup.in
 </span>.
 </p>
 </div>

 </div>

 </div>
 </section>

 <Footer />
 </>
 );
}