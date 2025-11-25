// Dynamic FAQ Accordion Component
"use client";
import { useState } from "react";

// Import your FAQ data from utils folder
// import faqData from "@/utils/faqData.json";

// Example data structure - replace this with your actual import
const faqData = {
  title: "FAQ's on Company Registration",
  faqs: [
    {
      id: 1,
      question: "What is the registration process of a company?",
      answer: "The company registration process in India involves several steps: obtaining Digital Signature Certificate (DSC), applying for Director Identification Number (DIN), name approval through RUN (Reserve Unique Name), filing incorporation documents including MOA and AOA, and finally receiving the Certificate of Incorporation from the Ministry of Corporate Affairs (MCA). The entire process typically takes 7-10 working days and can be completed online through the MCA portal."
    },
    {
      id: 2,
      question: "How much is the private limited company registration fees?",
      answer: "The registration fees for a Private Limited Company in India varies based on the authorized capital. For companies with authorized capital up to ₹1 lakh, the government fees are approximately ₹4,000-₹5,000. Professional fees for documentation, filing, and expert assistance typically range from ₹6,000 to ₹15,000. Additional costs may include DSC (₹1,500-₹2,000), DIN application fees, and stamp duty charges which vary by state."
    },
    {
      id: 3,
      question: "What are the types of registration?",
      answer: "In India, businesses can register under various structures including Private Limited Company, Public Limited Company, One Person Company (OPC), Limited Liability Partnership (LLP), Partnership Firm, Sole Proprietorship, Section 8 Company (for non-profit), Producer Company, and Indian Subsidiary. Each structure has different compliance requirements, liability protection, and taxation benefits suitable for different business needs and scales of operation."
    },
    {
      id: 4,
      question: "Can NRIs or foreign national or foreign entities register a company in India?",
      answer: "Yes, NRIs and foreign nationals can register a company in India. However, at least one director must be a resident of India. Foreign entities can establish a wholly-owned subsidiary or joint venture in India, subject to Foreign Direct Investment (FDI) regulations and sector-specific caps. The process requires additional documentation including passport copies, overseas address proof, and compliance with FEMA (Foreign Exchange Management Act) regulations."
    },
    {
      id: 5,
      question: "How do I check the availability of names for my company?",
      answer: "You can check name availability through the MCA portal's RUN (Reserve Unique Name) service. The name should be unique and not similar to existing company names or trademarks. It should not contain prohibited words or violate the Company Name Guidelines. You can submit up to two name choices with their significance. The MCA typically approves or rejects the name within 2-3 working days."
    },
    {
      id: 6,
      question: "Is GST registration mandatory at this stage?",
      answer: "GST registration is not mandatory at the time of company incorporation. However, it becomes mandatory if your annual turnover exceeds ₹40 lakhs (₹20 lakhs for service providers) or ₹20 lakhs/₹10 lakhs for special category states. You must register within 30 days of crossing the threshold. Even if turnover is below the limit, voluntary GST registration is recommended for businesses that need to issue GST invoices or claim input tax credit."
    },
    {
      id: 7,
      question: "What are the compliances of a Private Limited Company?",
      answer: "Private Limited Companies must comply with various statutory requirements including holding Board Meetings (minimum 4 per year) and Annual General Meetings, filing Annual Returns (Form MGT-7) and Financial Statements (Form AOC-4) with MCA, maintaining statutory registers and books of accounts, filing Income Tax Returns, conducting statutory audits, and maintaining proper accounting records. Director KYC must be filed annually, and any changes in directors or registered office must be reported to MCA within prescribed timelines."
    },
    {
      id: 8,
      question: "how to register a private limited company in India?",
      answer: "To register a Private Limited Company in India, first obtain DSC and DIN for proposed directors, then file SPICe+ form (INC-32) for name reservation and incorporation along with MOA, AOA, and other required documents. Submit proof of registered office, director declarations, and payment of government fees. Upon approval, you'll receive Certificate of Incorporation, PAN, TAN, and other registration documents. The entire process can be completed online through the MCA portal within 7-15 working days."
    },
    {
      id: 9,
      question: "Which Form is to be filed for the ITR filing of Private Limited Company?",
      answer: "Private Limited Companies must file their Income Tax Return using ITR-6 form. This form is specifically designed for companies other than those claiming exemption under Section 11. The return must be filed electronically with digital signature and should include audited financial statements, tax audit report (if applicable), and other required attachments. The due date for filing is typically October 31st of the assessment year, or November 30th if a tax audit is required."
    },
    {
      id: 10,
      question: "Which form is to be filed for filing the annual returns of a Company?",
      answer: "Companies must file their annual returns using Form MGT-7 with the Ministry of Corporate Affairs. This form contains details about the company's management, shareholders, directors, and compliance status. It must be filed within 60 days from the date of the Annual General Meeting (AGM). Along with MGT-7, companies must also file Form AOC-4 (financial statements) and other applicable forms for a complete annual compliance package."
    },
    {
      id: 11,
      question: "What is the minimum capital requirement for Private Limited Company?",
      answer: "There is no minimum capital requirement for registering a Private Limited Company in India since the Companies Act, 2013 removed this requirement. Previously, a minimum paid-up capital of ₹1 lakh was required. Now, companies can be incorporated with any amount of authorized and paid-up capital based on business requirements. However, adequate capital should be maintained to meet business operational needs and demonstrate financial credibility."
    },
    {
      id: 12,
      question: "Can a Private Limited Company be converted to LLP?",
      answer: "Yes, a Private Limited Company can be converted into a Limited Liability Partnership (LLP) under the provisions of the Companies Act and LLP Act. The conversion process requires approval from all shareholders and creditors, filing of prescribed forms with MCA, obtaining a certificate of incorporation for the LLP, and transferring all assets and liabilities. The company must not have defaulted in filing returns or violated any provisions. Professional assistance is recommended for smooth conversion."
    },
    {
      id: 13,
      question: "What documents are required for company registration?",
      answer: "Required documents include PAN card, Aadhaar card, passport-size photographs of directors, proof of identity and address of directors and shareholders, Digital Signature Certificate (DSC), Director Identification Number (DIN), registered office address proof (rental agreement or ownership deed), utility bills not older than 2 months, and NOC from the property owner. Foreign nationals need additional documents including passport, overseas address proof, and notarized affidavits."
    },
    {
      id: 14,
      question: "How many directors are required for a Private Limited Company?",
      answer: "A Private Limited Company requires a minimum of two directors and can have a maximum of 15 directors. At least one director must be a resident of India who has stayed in India for a minimum of 182 days in the previous calendar year. Directors must obtain Director Identification Number (DIN) before incorporation. Additional directors beyond 15 can be appointed by passing a special resolution in the general meeting and obtaining Central Government approval."
    },
    {
      id: 15,
      question: "What is the difference between authorized and paid-up capital?",
      answer: "Authorized capital is the maximum amount of share capital a company is authorized to issue to shareholders as per its Memorandum of Association. Paid-up capital is the actual amount of money received from shareholders against issued shares. For example, if authorized capital is ₹10 lakhs but only ₹2 lakhs worth of shares are issued and paid by shareholders, the paid-up capital is ₹2 lakhs. Stamp duty is payable on authorized capital, while compliance requirements depend on paid-up capital."
    },
    {
      id: 16,
      question: "Can a company have only one shareholder?",
      answer: "A Private Limited Company requires a minimum of two shareholders. However, if you want single ownership, you can opt for a One Person Company (OPC) which allows a single shareholder and director. In a Private Limited Company, one person can be both director and shareholder, but there must be at least two distinct shareholders at any given time. The maximum number of shareholders in a Private Limited Company is 200, excluding current and former employees."
    },
    {
      id: 17,
      question: "What is the validity of company name approval?",
      answer: "Once a company name is approved by the Ministry of Corporate Affairs through the RUN (Reserve Unique Name) service, it remains valid for 20 days from the date of approval. The company must complete its incorporation within this period. If the incorporation is not completed within 20 days, the name approval lapses and you need to apply for name reservation again. It's advisable to have all required documents ready before applying for name approval to avoid expiry."
    },
    {
      id: 18,
      question: "Is physical presence required for company registration?",
      answer: "No, physical presence is not mandatory for company registration in India. The entire process can be completed online through the MCA portal. Directors need to obtain Digital Signature Certificates (DSC) which can be obtained online. All documents can be submitted electronically, and video verification (KYC) of directors can be done remotely. However, original documents must be maintained at the registered office for inspection. Some service providers may require one physical meeting for document collection and verification."
    },
    {
      id: 19,
      question: "What is the difference between a Private and Public Limited Company?",
      answer: "A Private Limited Company requires minimum 2 directors and 2 shareholders (maximum 200 shareholders), cannot invite public to subscribe to shares, has restrictions on share transfer, and requires 'Private Limited' suffix in name. A Public Limited Company requires minimum 3 directors and 7 shareholders with no maximum limit, can raise capital from public through IPO, has freely transferable shares, faces higher compliance requirements including mandatory appointment of whole-time company secretary, and requires 'Limited' suffix in name."
    },
    {
      id: 20,
      question: "Can the registered office address be a residential address?",
      answer: "Yes, a residential address can be used as the registered office of a Private Limited Company. However, you need to provide proof of ownership or a rent agreement along with a No Objection Certificate (NOC) from the property owner. The address should be a physical location where official communication can be received. Some states or municipalities may have restrictions on using residential properties for commercial purposes, so it's advisable to check local regulations. The registered office address must be verified and can be changed later by filing the appropriate form with MCA."
    }
  ]
};

interface FAQAccordionProps {
  category?: string; // Optional prop to filter by category if needed
}

export default function FAQAccordion({ category }: FAQAccordionProps) {
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