// Dynamic FAQ Accordion Component for GST Registration & E-Invoicing
"use client";
import { useState } from "react";

// Example data structure - replace this with your actual import
const faqData = {
  title: "FAQ's on GST Registration & E-Invoicing",
  faqs: [
    {
      id: 1,
      question: "What is GST registration and who needs it?",
      answer: "GST registration is mandatory for businesses with an annual turnover exceeding ₹40 lakhs (₹20 lakhs for service providers) or ₹20 lakhs/₹10 lakhs for special category states. It's also required for inter-state suppliers, e-commerce operators, casual taxable persons, and businesses required to pay tax under reverse charge. GST registration provides a unique GSTIN (GST Identification Number) and enables businesses to collect GST from customers and claim input tax credit."
    },
    {
      id: 2,
      question: "What documents are required for GST registration?",
      answer: "Required documents include PAN card of the business, Aadhaar card of proprietor/partners/directors, proof of business registration (incorporation certificate/partnership deed), photograph of proprietor/partners/directors, registered office address proof (rental agreement/ownership deed), bank account statement or cancelled cheque, authorization letter for authorized signatory, and digital signature. Additional documents may be required based on business type and state regulations."
    },
    {
      id: 3,
      question: "How long does GST registration take?",
      answer: "The GST registration process typically takes 2-6 working days after submission of the application on the GST portal. Once you submit the application with all required documents, the jurisdictional GST officer verifies the details. If everything is in order, you receive the GST registration certificate with your GSTIN. In case of any discrepancies or requirement of additional documents, the officer may issue a notice, which can extend the timeline."
    },
    {
      id: 4,
      question: "What is GST E-Invoicing and who needs to generate it?",
      answer: "GST E-Invoicing is a system where B2B invoices are electronically authenticated by GSTN for further use on the GST portal. Currently, it's mandatory for businesses with aggregate turnover exceeding ₹5 crores. E-invoicing involves generating invoices on your accounting software, uploading them to the Invoice Registration Portal (IRP), receiving a unique Invoice Reference Number (IRN) and QR code, and then the IRP automatically sends the invoice details to GST and E-Way Bill portals."
    },
    {
      id: 5,
      question: "What are the benefits of GST E-Invoicing?",
      answer: "E-Invoicing offers multiple benefits including elimination of manual data entry errors, auto-population of GST return details, faster invoice processing, real-time tracking of invoices, reduced disputes between buyers and sellers, seamless integration with E-Way Bill system, improved cash flow through faster payments, easier compliance management, and reduction in tax evasion. It also standardizes invoice formats across India and enables interoperability between different software systems."
    },
    {
      id: 6,
      question: "How much does GST registration cost?",
      answer: "GST registration itself is free on the government portal. However, businesses often use professional services for assistance, which typically costs between ₹2,000 to ₹5,000 depending on the complexity of the business structure and state. This includes help with documentation, filling the application form, liaising with GST authorities, and obtaining the registration certificate. Some service providers also offer post-registration support for GST compliance."
    },
    {
      id: 7,
      question: "Can I register for GST online?",
      answer: "Yes, GST registration is completely online through the GST portal (www.gst.gov.in). The process involves creating an account on the portal, filling Part A of Form GST REG-01 with basic details, receiving a Temporary Reference Number (TRN), completing Part B with detailed business information and uploading documents, submitting the application with digital signature, and receiving the GST certificate upon approval. No physical presence or document submission is required."
    },
    {
      id: 8,
      question: "What is the format of GSTIN?",
      answer: "GSTIN (GST Identification Number) is a 15-digit unique alphanumeric code. The format is: first 2 digits represent the state code, next 10 digits are the PAN of the business, 13th digit is entity number (for same PAN multiple registrations), 14th digit is 'Z' by default, and 15th digit is a check code. For example, 27AABCU9603R1Z5 where 27 is Maharashtra state code, AABCU9603R is the PAN, 1 is the entity number, Z is default, and 5 is the check digit."
    },
    {
      id: 9,
      question: "What are GST return filing requirements?",
      answer: "Regular taxpayers must file GSTR-1 (outward supplies) monthly by 11th of next month, GSTR-3B (summary return with tax payment) monthly by 20th of next month, and GSTR-9 (annual return) by December 31st of next financial year. Composition scheme taxpayers file quarterly returns. Failure to file returns on time attracts late fees of ₹50 per day (₹20 for nil returns) under CGST and SGST separately, plus interest at 18% per annum on outstanding tax liability."
    },
    {
      id: 10,
      question: "How does Input Tax Credit (ITC) work?",
      answer: "Input Tax Credit allows businesses to reduce the GST paid on purchases from the GST collected on sales. For example, if you paid ₹10,000 as GST on purchases and collected ₹15,000 as GST on sales, you can claim ITC of ₹10,000 and only pay ₹5,000 to the government. To claim ITC, you must have a valid tax invoice, goods/services must be received, returns must be filed, and the supplier must have deposited the tax. ITC cannot be claimed on certain items like motor vehicles (unless for specified use), food and beverages, and outdoor catering."
    },
    {
      id: 11,
      question: "What is the difference between CGST, SGST, and IGST?",
      answer: "CGST (Central GST) is collected by the Central Government on intra-state sales, SGST (State GST) is collected by the State Government on intra-state sales, and IGST (Integrated GST) is collected by the Central Government on inter-state sales and imports. For example, on an intra-state sale with 18% GST, 9% goes as CGST and 9% as SGST. On an inter-state sale with 18% GST, the entire 18% is collected as IGST, which is later settled between Central and State governments."
    },
    {
      id: 12,
      question: "Can I cancel my GST registration?",
      answer: "Yes, GST registration can be cancelled if business is discontinued, turnover falls below threshold, business structure changes, or transfer of business occurs. You need to file Form GST REG-16 on the GST portal within 30 days of the event requiring cancellation. The tax officer may approve within 30 days or issue a show cause notice. Voluntary cancellation is also possible. After cancellation, you must file final returns and clear all pending dues. The cancellation becomes effective from the date mentioned in the cancellation order."
    },
    {
      id: 13,
      question: "What is the GST composition scheme?",
      answer: "The composition scheme is a simpler GST compliance option for small taxpayers with turnover up to ₹1.5 crores (₹75 lakhs for certain states). Under this scheme, businesses pay GST at lower rates (1% for manufacturers, 5% for restaurants, 6% for other suppliers) on turnover without claiming ITC. They file quarterly returns instead of monthly, cannot issue tax invoices, cannot make inter-state supplies, and cannot supply goods through e-commerce platforms. This scheme reduces compliance burden significantly for small businesses."
    },
    {
      id: 14,
      question: "What is HSN code and why is it required?",
      answer: "HSN (Harmonized System of Nomenclature) is an internationally standardized system of names and numbers for classifying traded products. It's required in GST invoices for proper classification of goods and determining applicable GST rates. Businesses with turnover above ₹5 crores must mention 6-digit HSN code, those with turnover ₹1.5 crores to ₹5 crores must mention 4-digit code, and below ₹1.5 crores need only 2-digit code. For services, SAC (Services Accounting Code) is used instead of HSN."
    },
    {
      id: 15,
      question: "How to generate E-Invoice?",
      answer: "To generate E-Invoice, first register on the E-Invoice portal (einvoice1.gst.gov.in) using your GSTIN credentials. Create invoice on your accounting/billing software in prescribed JSON format. Upload the invoice to IRP either through API integration or manual upload. IRP validates the invoice, generates unique IRN (Invoice Reference Number) and QR code, digitally signs it, and returns it to you. You can then send this E-Invoice to your customer. The IRP automatically transmits invoice data to GST and E-Way Bill portals."
    },
    {
      id: 16,
      question: "What is IRN in E-Invoicing?",
      answer: "IRN (Invoice Reference Number) is a unique 64-character hash generated by the Invoice Registration Portal (IRP) for each E-Invoice. It's created using seller's GSTIN, invoice number, document type, and financial year. Once generated, IRN cannot be edited or deleted, only cancelled within 24 hours. The IRN ensures uniqueness of invoices, prevents duplication, enables digital verification, and serves as a reference for the invoice throughout its lifecycle. It's mandatory to quote IRN on E-Invoices and related documents."
    },
    {
      id: 17,
      question: "What are the penalties for non-compliance with GST?",
      answer: "GST non-compliance attracts various penalties: late filing of returns incurs ₹50 per day (₹20 for nil returns) plus 18% interest on tax dues, non-registration when required can lead to penalty up to 100% of tax amount, issuing invoices without registration attracts penalty up to ₹25,000, not issuing proper invoices leads to ₹25,000 penalty, wrong input tax credit claims result in penalty of 100% of credit wrongly availed, and deliberate tax evasion can lead to imprisonment up to 5 years plus penalty up to 100% of tax evaded."
    },
    {
      id: 18,
      question: "Can NRI or foreign company register for GST?",
      answer: "Yes, NRIs and foreign companies can register for GST in India if they supply goods or services in India. They need to appoint an authorized representative in India who will handle all GST compliance. The registration process requires similar documents as domestic companies plus passport, visa, overseas address proof, and authorization letter for the Indian representative. Foreign companies may need to obtain PAN first before GST registration. They must comply with all GST provisions including return filing and tax payment like domestic taxpayers."
    },
    {
      id: 19,
      question: "What is E-Way Bill and when is it required?",
      answer: "E-Way Bill is an electronic document required for movement of goods worth more than ₹50,000 (intra-state or inter-state). It must be generated on the E-Way Bill portal before goods are transported. The bill contains details of goods, transporter, and journey. It's valid for different durations based on distance: 1 day for up to 200 km, plus 1 additional day for every 200 km thereafter. Exemptions include non-GST goods, certain categories of goods, and movements by non-motorized transport. Both supplier and transporter can generate E-Way Bill."
    },
    {
      id: 20,
      question: "How to link E-Invoice software with GST portal?",
      answer: "To integrate E-Invoice software with GST portal, first register your software on the E-Invoice portal and obtain API credentials (username and password). Configure your accounting software with IRP endpoint URLs and authentication details. Implement the standard E-Invoice JSON schema in your software. Use GST Suvidha Provider (GSP) or directly connect to IRP through APIs for invoice upload and IRN generation. Test the integration in sandbox environment before going live. Most modern accounting software like Tally, SAP, Busy, and Zoho Books offer built-in E-Invoice integration with step-by-step configuration guides."
    }
  ]
};

interface FAQAccordionProps {
  category?: string; // Optional prop to filter by category if needed
}

export default function GSTFAQAccordion({ category }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(5);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, faqData.faqs.length));
  };

  const visibleFaqs = faqData.faqs.slice(0, visibleCount);
  const hasMore = visibleCount < faqData.faqs.length;

  return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="px-6 py-5 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">
              {faqData.title}
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="divide-y divide-gray-200">
            {visibleFaqs.map((faq, index) => (
              <div key={faq.id} className="transition-all">
                {/* Question */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-sm font-medium text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                      openIndex === index ? "transform rotate-45" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>

                {/* Answer */}
                {openIndex === index && (
                  <div className="px-6 pb-4 pt-2">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="px-6 py-5 border-t border-gray-200">
              <button
                onClick={loadMore}
                className="px-6 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}