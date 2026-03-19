"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RefundPolicyPage() {
  return (
    <>
      <Navbar />

      <section className="bg-[#F4F3EE] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Refund Policy
            </h1>
            <p className="text-gray-600">
              Our refund policy is designed to be fair and transparent for all users.
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 space-y-6 text-sm text-gray-700 leading-relaxed">

            <div>
              <h2 className="text-lg font-semibold text-[#C15F3C] mb-2">
                1. No Refund After Service Initiation
              </h2>
              <p>
                Once the service process has started or documents have been submitted,
                no refunds will be provided.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#C15F3C] mb-2">
                2. Government Fees
              </h2>
              <p>
                Any government fees, taxes, or third-party charges are non-refundable
                under any circumstances.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#C15F3C] mb-2">
                3. Duplicate Payment
              </h2>
              <p>
                In case of duplicate payment, the extra amount will be refunded after verification.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#C15F3C] mb-2">
                4. Service Not Delivered
              </h2>
              <p>
                If we fail to deliver the agreed service due to internal reasons,
                a partial or full refund may be issued at our discretion.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#C15F3C] mb-2">
                5. User Cancellation
              </h2>
              <p>
                If you cancel the service before work has started, you may be eligible
                for a partial refund after deducting processing charges.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#C15F3C] mb-2">
                6. Delays by Authorities
              </h2>
              <p>
                We are not responsible for delays caused by government departments,
                and such delays do not qualify for refunds.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#C15F3C] mb-2">
                7. Refund Processing Time
              </h2>
              <p>
                Approved refunds will be processed within 7–10 business days to the original payment method.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#C15F3C] mb-2">
                8. Contact Us
              </h2>
              <p>
                For refund-related queries, contact us at{" "}
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