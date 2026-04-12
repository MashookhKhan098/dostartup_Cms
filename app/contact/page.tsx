"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "" // Added phone field as WhatsApp needs it
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.whatsappUrl) {
        setSubmitStatus({ type: 'success', message: 'Form submitted! Redirecting to WhatsApp...' });
        // Redirect to WhatsApp
        window.open(result.whatsappUrl, '_blank');
        // Optional: clear form
        setFormData({ name: "", email: "", subject: "", message: "", phone: "" });
      } else {
        setSubmitStatus({ type: 'error', message: result.error || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please check your connection.' });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <div className="bg-[#F4F3EE] rounded-2xl shadow-md p-6 sm:p-8 space-y-6">

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
            <div className="bg-[#F4F3EE] rounded-2xl shadow-md p-6 sm:p-8 border border-[#E5E2DA]">

              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C15F3C]"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your Email"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C15F3C]"
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    maxLength={10}
                    placeholder="Phone Number (10 digits)"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C15F3C]"
                    onInput={(e) => {
                      e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                    }}
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject (e.g. GST Registration)"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C15F3C]"
                />

                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Message"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C15F3C]"
                ></textarea>

                {submitStatus && (
                  <div className={`p-3 rounded-lg text-sm ${submitStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {submitStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#C15F3C] hover:bg-[#a94f30] text-white text-sm font-medium px-6 py-2 rounded-lg transition w-full disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message & WhatsApp'}
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

