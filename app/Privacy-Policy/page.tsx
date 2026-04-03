"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicyPage() {
 return (
 <>
 <Navbar />

 <section className="bg-[#F4F3EE] py-5">
 <div className="max-w-4xl mx-auto px-4 sm:px-6">

 {/* Header */}
 <div className="text-center mb-10">
 <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
 Privacy Policy
 </h1>
 <p className="text-gray-600">
 Your privacy is important to us. This policy explains how we handle your data.
 </p>
 </div>

 {/* Content */}
 <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 space-y-6 text-sm text-gray-700 leading-relaxed">

 <div>
 <h2 className="text-lg font-semibold text-[#C15F3C] mb-2">
 1. Information We Collect
 </h2>
 <p>
 We may collect personal information such as your name, email address,
 phone number, and business details when you use our services or fill out forms.
 </p>
 </div>

 <div>
 <h2 className="text-lg font-semibold text-[#C15F3C] mb-2">
 2. How We Use Your Information
 </h2>
 <p>
 Your information is used to provide services, process requests,
 communicate updates, and improve our platform.
 </p>
 </div>

 <div>
 <h2 className="text-lg font-semibold text-[#C15F3C] mb-2">
 3. Data Sharing
 </h2>
 <p>
 We do not sell your personal data. Information may be shared with
 trusted partners or government authorities only as required to complete services.
 </p>
 </div>

 <div>
 <h2 className="text-lg font-semibold text-[#C15F3C] mb-2">
 4. Data Security
 </h2>
 <p>
 We implement appropriate security measures to protect your data.
 However, no method of transmission over the internet is completely secure.
 </p>
 </div>

 <div>
 <h2 className="text-lg font-semibold text-[#C15F3C] mb-2">
 5. Cookies
 </h2>
 <p>
 Our website may use cookies to enhance user experience and analyze traffic.
 You can choose to disable cookies in your browser settings.
 </p>
 </div>

 <div>
 <h2 className="text-lg font-semibold text-[#C15F3C] mb-2">
 6. User Rights
 </h2>
 <p>
 You have the right to access, update, or request deletion of your personal data.
 Contact us for any such requests.
 </p>
 </div>

 <div>
 <h2 className="text-lg font-semibold text-[#C15F3C] mb-2">
 7. Third-Party Links
 </h2>
 <p>
 Our website may contain links to third-party websites. We are not responsible
 for their privacy practices.
 </p>
 </div>

 <div>
 <h2 className="text-lg font-semibold text-[#C15F3C] mb-2">
 8. Changes to This Policy
 </h2>
 <p>
 We may update this Privacy Policy from time to time. Continued use of our services
 implies acceptance of the updated policy.
 </p>
 </div>

 <div>
 <h2 className="text-lg font-semibold text-[#C15F3C] mb-2">
 9. Contact Us
 </h2>
 <p>
 If you have any questions about this Privacy Policy, contact us at{" "}
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