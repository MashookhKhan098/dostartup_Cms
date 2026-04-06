"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
 return (
 <>
 <Navbar />

 <section className="bg-[#F4F3EE] py-5">
 <div className="max-w-6xl mx-auto px-4 sm:px-6">

 {/* Header */}
 <div className="text-center mb-10">
 <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
 Contact Us
 </h1>
 <p className="text-gray-600 max-w-2xl mx-auto">
 Have questions or need help? Our team is here to assist you.
 </p>
 </div>

 <div className="grid md:grid-cols-2 gap-8">

 {/* Contact Info */}
 <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 space-y-6">

 <div>
 <h3 className="text-lg font-semibold text-[#C15F3C] mb-1">
 📞 Phone
 </h3>
 <p className="text-gray-700 text-sm">
 +91 9999644807
 </p>
 </div>

 <div>
 <h3 className="text-lg font-semibold text-[#C15F3C] mb-1">
 📧 Email
 </h3>
 <p className="text-gray-700 text-sm">
 office.dostartup@gmail.com
 </p> 
 </div>

 <div>
 <h3 className="text-lg font-semibold text-[#C15F3C] mb-1">
 📍 Address
 </h3>
 <p className="text-gray-700 text-sm">
 C-84, Sector 2 , Noida , UP India 
 </p>
 </div>

 <div>
 <h3 className="text-lg font-semibold text-[#C15F3C] mb-1">
 ⏰ Working Hours
 </h3>
 <p className="text-gray-700 text-sm">
 Monday - Saturday: 9:30 to 6:00
 </p>
 </div>

 </div>

 {/* Contact Form */}
 <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">

 <h3 className="text-lg font-semibold text-gray-900 mb-4">
 Send a Message
 </h3>

 <form className="space-y-4">

 <input
 type="text"
 placeholder="Your Name"
 className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C15F3C]"
 />

 <input
 type="email"
 placeholder="Your Email"
 className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C15F3C]"
 />

 <input
 type="text"
 placeholder="Subject"
 className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C15F3C]"
 />

 <textarea
 rows={4}
 placeholder="Your Message"
 className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C15F3C]"
 ></textarea>

 <button
 type="submit" 
 className="bg-[#C15F3C] hover:bg-[#a94f30] text-white text-sm font-medium px-6 py-2 rounded-lg transition w-full"
 >
 Send Message
 </button>

 </form>

 </div>

 </div>

 </div>
 </section>
 <Footer />
 </>
 );
}
