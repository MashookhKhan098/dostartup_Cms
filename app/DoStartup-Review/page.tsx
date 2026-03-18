"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ReviewsPage() {
  const reviews = [
    {
      name: "Amit Sharma",
      role: "Startup Founder",
      text: "The team made my company registration process smooth and hassle-free. Highly recommended!",
      rating: 5,
    },
    {
      name: "Neha Verma",
      role: "Entrepreneur",
      text: "Very professional service. They handled my GST registration quickly and efficiently.",
      rating: 4,
    },
    {
      name: "Rahul Mehta",
      role: "Business Owner",
      text: "Great support team. They guided me through every step of compliance.",
      rating: 5,
    },
    {
      name: "Priya Singh",
      role: "Freelancer",
      text: "Affordable and reliable. I got my MSME registration done without any issues.",
      rating: 4,
    },
  ];

  return (
    <>
      <Navbar />

      <section className="bg-[#F4F3EE] py-12 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Customer Reviews
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See what our customers say about our services and experience with DoStartup.
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 border border-[#B1ADA1]/40"
              >
                {/* Rating */}
                <div className="flex mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} className="text-[#C15F3C] text-lg">★</span>
                  ))}
                  {Array.from({ length: 5 - review.rating }).map((_, i) => (
                    <span key={i} className="text-gray-300 text-lg">★</span>
                  ))}
                </div>

                {/* Text */}
                <p className="text-sm text-gray-700 mb-4">
                  "{review.text}"
                </p>

                {/* User */}
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {review.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {review.role}
                  </p>
                </div>
              </div>
            ))}

          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Have you used our services?
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Share your experience and help others make better decisions.
            </p>

            <button className="bg-[#C15F3C] hover:bg-[#a94f30] text-white text-sm font-medium px-6 py-2 rounded-lg transition">
              Write a Review
            </button>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}