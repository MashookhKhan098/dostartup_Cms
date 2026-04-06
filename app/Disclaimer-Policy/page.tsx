"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DisclaimerPage() {
 return (
 <>
 <Navbar />

 <section className="bg-[#F4F3EE] py-5">
 <div className="max-w-4xl mx-auto px-4 sm:px-6">

 {/* Header */}
 <div className="text-center mb-10">
 <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
 Disclaimer
 </h1>
 <p className="text-gray-600">
 Important information regarding the use of our services and website.
 </p>
 </div>

 {/* Content */}
 <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 space-y-6 text-sm text-gray-700 leading-relaxed">

 <div>
 <h2 className="text-lg font-semibold text-[#C15F3C] mb-2">
 1. General Information
 </h2>
 <p>
 The information provided on DoStartup is for general informational purposes only.
 While we strive to keep information accurate and up to date, we make no warranties
 of any kind regarding completeness, accuracy, or reliability.
 </p>
 </div>

 <div>
 <h2 className="text-lg font-semibold text-[#C15F3C] mb-2">
 2. No Professional Advice
 </h2>
 <p>
 The content on this website does not constitute legal, financial, or professional advice.
 You should consult a qualified professional before making any decisions.
 </p>
 </div>

 <div>
 <h2 className="text-lg font-semibold text-[#C15F3C] mb-2">
 3. Third-Party Services
 </h2>
 <p>
 We may rely on third-party platforms and government authorities for processing services.
 We are not responsible for delays, errors, or outcomes controlled by such entities.
 </p>
 </div>

 <div>
 <h2 className="text-lg font-semibold text-[#C15F3C] mb-2">
 4. No Guarantee of Approval
 </h2>
 <p>
 Approval of registrations, licenses, or filings depends on respective authorities.
 DoStartup does not guarantee approval or timelines.
 </p>
 </div>

 <div>
 <h2 className="text-lg font-semibold text-[#C15F3C] mb-2">
 5. Limitation of Liability
 </h2>
 <p>
 DoStartup shall not be held liable for any direct, indirect, or incidental damages
 arising from the use of our website or services.
 </p>
 </div>

 <div>
 <h2 className="text-lg font-semibold text-[#C15F3C] mb-2">
 6. External Links
 </h2>
 <p>
 Our website may contain links to external websites. We are not responsible for
 the content or reliability of any third-party sites.
 </p>
 </div>

 <div>
 <h2 className="text-lg font-semibold text-[#C15F3C] mb-2">
 7. Changes to Disclaimer
 </h2>
 <p>
 We reserve the right to update this Disclaimer at any time without prior notice.
 Continued use of the website means acceptance of the updated terms.
 </p>
 </div>

 <div>
 <h2 className="text-lg font-semibold text-[#C15F3C] mb-2">
 8. Contact Us
 </h2>
 <p>
 If you have any questions regarding this Disclaimer, contact us at{" "}
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
