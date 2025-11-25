// Dynamic Tab Content Component with Author Section
"use client";
import { useState } from "react";

// Example data structure for GST, E-Invoice, and Notice
const tabsData = {
  "GST Registration": {
    title: "GST Registration in India",
    description: "Goods and Services Tax (GST) registration is mandatory for businesses whose turnover exceeds the prescribed threshold limit. GST has unified multiple indirect taxes into a single tax system, making it easier for businesses to comply with tax regulations. Registration under GST provides businesses with legal recognition, enables them to collect tax from customers, and allows them to claim input tax credit on their purchases.",
    introduction: "At IndiaFilings, we offer comprehensive GST registration services to help businesses register quickly and efficiently. Our expert team handles all documentation, filing procedures, and compliance requirements, ensuring your business is GST-compliant from day one.",
    sections: [
      {
        heading: "What is GST Registration?",
        content: "GST registration is the process of obtaining a unique Goods and Services Tax Identification Number (GSTIN) from the tax authorities. This 15-digit alphanumeric code is mandatory for businesses engaged in the supply of goods or services that exceed the threshold turnover limits. GST registration enables businesses to legally collect GST from their customers and remit it to the government while claiming input tax credits on their business expenses.",
        points: [
          "Mandatory for Businesses Above Threshold: Businesses with an aggregate turnover exceeding Rs. 40 lakhs (Rs. 20 lakhs for special category states) for services, or Rs. 40 lakhs for goods suppliers must register under GST. E-commerce operators and certain specified categories must register regardless of turnover.",
          "Unified Tax System Across India: GST has replaced multiple indirect taxes like VAT, service tax, excise duty, and others, creating a unified tax structure. This simplification has reduced compliance burden and eliminated the cascading effect of taxes.",
          "Input Tax Credit Benefits: Registered businesses can claim credit for GST paid on purchases, raw materials, and business expenses. This credit can be used to offset GST liability on sales, reducing the overall tax burden and improving cash flow.",
          "Legal Recognition and Credibility: GST registration provides businesses with legal recognition and enhances credibility with customers, suppliers, and financial institutions. It demonstrates compliance with tax laws and professional business operations.",
          "Interstate Supply and E-commerce: Businesses engaged in interstate supply of goods or services, or those supplying through e-commerce platforms, must obtain GST registration irrespective of their turnover."
        ]
      },
      {
        heading: "Key Features of GST Registration",
        content: "GST registration comes with several important features and benefits that streamline business operations and ensure tax compliance.",
        points: [
          "Unique GSTIN for Each State: Businesses operating in multiple states must obtain separate GST registration for each state. Each registration provides a unique 15-digit GSTIN that includes the state code and PAN of the business.",
          "Online Registration Process: The entire GST registration process is conducted online through the GST portal. Businesses can submit applications, upload documents, and track their registration status digitally without visiting tax offices.",
          "Three Types of GST: The GST system comprises CGST (Central GST) for intra-state supplies collected by the central government, SGST (State GST) for intra-state supplies collected by state governments, and IGST (Integrated GST) for inter-state supplies and imports.",
          "Regular Compliance Requirements: Registered businesses must file monthly or quarterly GST returns depending on their turnover and business type. Annual returns must be filed by all registered taxpayers, ensuring transparency in tax reporting.",
          "Composition Scheme for Small Businesses: Small taxpayers with turnover up to Rs. 1.5 crores can opt for the composition scheme, which allows them to pay tax at a fixed rate with simplified compliance requirements and quarterly return filing."
        ]
      },
      {
        heading: "Required Documents for GST Registration",
        content: "To complete the GST registration process, businesses need to prepare and submit several documents that verify their identity, business operations, and premises.",
        points: [
          "PAN Card of Business or Proprietor: A valid PAN card is the primary requirement for GST registration. For proprietorships, the proprietor's PAN is used, while partnerships and companies need their entity PAN. This links the GST registration to the tax identification system.",
          "Aadhaar Card for Authentication: The Aadhaar card of the proprietor or authorized signatory is required for biometric or OTP-based authentication during the registration process. This ensures the legitimacy of the applicant and prevents fraudulent registrations.",
          "Proof of Business Registration: Businesses must provide incorporation certificates for companies, partnership deeds for partnerships, or other relevant registration documents. This establishes the legal existence and nature of the business entity.",
          "Proof of Principal Place of Business: Documentation of the business premises is essential, including rental agreements with NOC from the landlord, property ownership documents, or recent utility bills. The address proof should clearly show the complete business address.",
          "Bank Account Details and Cancelled Cheque: A current or savings bank account in the name of the business is required. A cancelled cheque or bank statement showing the account number and IFSC code must be submitted to verify banking details.",
          "Digital Signature Certificate for Companies: Companies and LLPs require a valid Digital Signature Certificate (DSC) for online filing and authentication of GST registration applications. Individual proprietors can use Aadhaar-based e-signature.",
          "Authorized Signatory Documents: If someone other than the proprietor or director is authorized to manage GST matters, their KYC documents including PAN, Aadhaar, photograph, and authorization letter must be provided."
        ]
      },
      {
        heading: "Benefits of GST Registration",
        content: "Obtaining GST registration provides numerous advantages to businesses, from legal compliance to operational efficiency and financial benefits.",
        points: [
          "Legal Authorization to Collect Tax: GST registration authorizes businesses to collect tax from customers on behalf of the government. This is essential for maintaining pricing competitiveness and operating legally within the GST framework.",
          "Input Tax Credit Eligibility: Registered businesses can claim input tax credit on all business purchases, reducing their overall tax liability. This credit mechanism eliminates tax-on-tax and improves working capital management.",
          "Enhanced Business Credibility: GST registration enhances business reputation and credibility with customers, especially other businesses who prefer dealing with GST-registered suppliers to claim their input tax credits. It also helps in securing business contracts and tenders.",
          "Seamless Interstate Commerce: GST registration enables smooth interstate movement of goods without multiple state-level registrations. The unified system simplifies logistics, reduces compliance costs, and eliminates check-post delays.",
          "Access to E-commerce and Online Marketplaces: Major e-commerce platforms and online marketplaces require sellers to be GST-registered. Registration opens up opportunities to reach wider markets and scale business operations through digital channels.",
          "Government Schemes and Loan Benefits: GST-registered businesses can more easily access government schemes, subsidies, and credit facilities from banks. Financial institutions view GST registration as evidence of legitimate business operations and creditworthiness."
        ]
      }
    ],
    author: {
      name: "SANTOSH KUMARI M",
      role: "Business Advisor",
      image: "/author-avatar.jpg",
      updatedDate: "Oct 27, 2025"
    }
  },
  "E-Invoice": {
    title: "E-Invoice System in India",
    description: "The Electronic Invoice (e-Invoice) system is a revolutionary step by the government to digitize invoice management and enhance tax compliance. E-invoicing standardizes the invoice format and enables real-time reporting of B2B transactions to the GST system. This system reduces tax evasion, eliminates data entry errors, and streamlines the invoice matching process between buyers and sellers, making business transactions more transparent and efficient.",
    introduction: "At IndiaFilings, we provide complete e-invoice implementation and compliance services to help businesses transition smoothly to the e-invoicing system. Our team offers technical support, software integration guidance, and ongoing compliance assistance to ensure seamless e-invoice generation and reporting.",
    sections: [
      {
        heading: "What is E-Invoice?",
        content: "E-invoice is an electronic invoice that is generated and authenticated through the Invoice Registration Portal (IRP) before being shared with the buyer. Unlike traditional invoicing where businesses create invoices in their own formats, e-invoicing requires businesses to generate invoices in a standardized schema and obtain a unique Invoice Reference Number (IRN) from the government portal. This IRN serves as proof of invoice authentication and cannot be modified once generated.",
        points: [
          "Standardized Invoice Schema: All e-invoices must follow a uniform schema prescribed by the GST Network. This standardization includes mandatory fields such as supplier and recipient details, HSN/SAC codes, tax rates, invoice amounts, and other transaction details, ensuring consistency across all businesses.",
          "Real-Time Invoice Authentication: Once an invoice is generated, it is immediately uploaded to the IRP which validates the data and generates a unique IRN along with a digitally signed QR code. This real-time authentication prevents duplicate or fake invoices and ensures data integrity.",
          "Automatic GST Return Population: E-invoice data is automatically made available in the GST returns (GSTR-1) of the supplier, eliminating manual data entry. This auto-population significantly reduces the time spent on return filing and minimizes errors in tax reporting.",
          "Integration with E-Way Bill: For applicable transactions, the e-invoice system automatically generates Part-A of the e-way bill. This integration eliminates the need to separately enter data on the e-way bill portal, streamlining logistics and transportation documentation.",
          "QR Code for Quick Verification: Every authenticated e-invoice contains a digitally signed QR code that can be scanned to verify invoice authenticity. This feature helps buyers quickly validate invoices and prevents the circulation of fraudulent documents."
        ]
      },
      {
        heading: "Key Features of E-Invoice System",
        content: "The e-invoice system has been designed with several advanced features that benefit businesses, tax authorities, and the overall economy.",
        points: [
          "Mandatory for Large Taxpayers: E-invoicing is currently mandatory for businesses with aggregate turnover exceeding Rs. 5 crores in any financial year from 2017-18 onwards. The government has been progressively lowering the threshold to bring more businesses under the e-invoice regime.",
          "Reduces Invoice Manipulation and Fraud: Since invoices are authenticated in real-time by the government portal and assigned an IRN, it becomes nearly impossible to manipulate invoice data after generation. This significantly reduces fraudulent claims of input tax credit and fake invoice generation.",
          "Seamless Data Flow Across Systems: E-invoice data flows automatically from the IRP to the GST portal and e-way bill system. This interoperability ensures that businesses don't need to enter the same data multiple times across different government platforms.",
          "Multiple Generation Methods: Businesses can generate e-invoices through various methods including direct upload on the IRP portal, API integration with their accounting software, GST Suvidha Provider (GSP) platforms, or through offline tools provided by the government.",
          "Document Types Covered: The e-invoice system covers various B2B transaction documents including tax invoices, debit notes, and credit notes. Export invoices and invoices to SEZ units with payment of tax also fall under the e-invoice mandate."
        ]
      },
      {
        heading: "Required Setup for E-Invoice Implementation",
        content: "To implement e-invoicing, businesses need to complete certain technical and administrative preparations to ensure smooth integration with the IRP.",
        points: [
          "Active GST Registration: Businesses must have an active GST registration with a valid GSTIN. The e-invoice system uses GST credentials for authentication, so maintaining GST compliance is essential for accessing the IRP.",
          "Registration on Invoice Registration Portal: The authorized person must register on the e-invoice portal (einvoice1.gst.gov.in) using GST credentials. After registration, API credentials can be generated for system-to-system integration or direct portal usage can be configured.",
          "Accounting Software with E-Invoice Compatibility: Businesses need to upgrade their accounting or ERP software to generate invoices in the prescribed e-invoice schema. Many popular accounting software providers have already integrated e-invoice functionality into their platforms.",
          "API Credentials for Integration: For businesses opting for API-based e-invoice generation, they need to generate API credentials (username and password) from the e-invoice portal. These credentials allow secure communication between the business software and the IRP.",
          "Employee Training and Process Documentation: Staff responsible for invoicing and accounts must be trained on e-invoice generation procedures, error handling, and compliance requirements. Documenting standard operating procedures ensures consistency in e-invoice operations.",
          "Backup Systems and Contingency Planning: Businesses should have backup systems in place to handle situations where the e-invoice portal is temporarily unavailable. Understanding the relaxation provisions and alternative compliance methods is crucial for business continuity."
        ]
      },
      {
        heading: "Benefits of E-Invoice System",
        content: "Implementing e-invoicing offers substantial benefits to businesses by improving operational efficiency, reducing compliance burden, and enhancing data accuracy.",
        points: [
          "Elimination of Data Entry Errors: Since e-invoice data automatically flows to GST returns and e-way bills, manual data entry is eliminated. This automation significantly reduces human errors, mismatches in returns, and notices from tax authorities due to incorrect reporting.",
          "Faster Return Filing Process: With invoice data automatically available in GSTR-1, businesses can file their GST returns much faster. The auto-population feature saves considerable time during monthly or quarterly return filing periods and reduces the workload on accounting teams.",
          "Reduced Reconciliation Efforts: E-invoicing simplifies the process of matching invoices between buyers and sellers since both parties work with authenticated data from the IRP. This streamlines input tax credit claims and reduces disputes over invoice authenticity or data mismatches.",
          "Improved Cash Flow Management: Real-time authentication and reporting of invoices provide better visibility of transactions and pending payments. Businesses can track their receivables more efficiently and improve working capital management through timely follow-ups.",
          "Enhanced Business Credibility: E-invoice adoption demonstrates a business's commitment to transparency and compliance. This enhanced credibility helps in building trust with customers, suppliers, banks, and other stakeholders, potentially leading to better business relationships.",
          "Prevention of Tax Evasion: For the economy as a whole, e-invoicing creates a robust audit trail that makes it difficult to evade taxes through fake invoices or underreporting of sales. This contributes to increased tax revenue and a more level playing field for compliant businesses."
        ]
      }
    ],
    author: {
      name: "SANTOSH KUMARI M",
      role: "Business Advisor",
      image: "/author-avatar.jpg",
      updatedDate: "Oct 27, 2025"
    }
  },
  "Notice": {
    title: "GST Notice Response and Compliance",
    description: "Receiving a notice from GST authorities can be concerning for businesses, but it's a normal part of tax administration. GST notices are issued for various reasons such as discrepancies in returns, non-filing of returns, mismatch in input tax credit claims, or requests for additional information. Responding appropriately and timely to these notices is crucial to avoid penalties, interest charges, and further legal complications. Understanding the types of notices and the proper response procedure helps businesses maintain compliance and protect their interests.",
    introduction: "At IndiaFilings, we specialize in handling GST notices and providing expert representation before tax authorities. Our experienced professionals analyze each notice carefully, prepare comprehensive responses with supporting documentation, and guide businesses through the entire notice resolution process to ensure favorable outcomes.",
    sections: [
      {
        heading: "What is a GST Notice?",
        content: "A GST notice is an official communication from tax authorities requiring a taxpayer to respond to queries, provide clarifications, or submit additional documents regarding their GST compliance. Notices are issued through the GST portal in Form GST DRC-01, DRC-02, ASMT-10, or other prescribed forms depending on the nature of the issue. These notices serve as a mechanism for the tax department to verify taxpayer compliance, seek explanations for discrepancies, and initiate proceedings where violations are suspected.",
        points: [
          "Statutory Communication Tool: GST notices are legal documents issued under specific provisions of the CGST Act, 2017. They require mandatory response within specified timelines and non-compliance can lead to adverse consequences including assessments, penalties, and prosecution in severe cases.",
          "Various Types and Purposes: Notices can be issued for multiple reasons including return scrutiny, audit objections, mismatch in ITC (Input Tax Credit) claims between GSTR-2A/2B and GSTR-3B, discrepancies in GSTR-1 and GSTR-3B, demand for tax payment, show cause for penalty imposition, or requests for documents and information.",
          "Timeline for Response: Most GST notices specify a deadline for response, typically ranging from 7 to 30 days from the date of issuance. Timely response is critical as failure to respond can result in ex-parte orders, best judgment assessments, and forfeiture of the right to be heard.",
          "Electronic Service through GST Portal: All GST notices are served electronically through the GST portal and can be accessed by logging into the taxpayer's account. Email and SMS notifications are sent to the registered email address and mobile number to alert taxpayers about new notices.",
          "Opportunity for Clarification: Notices provide taxpayers an opportunity to explain their position, submit evidence, correct errors, and avoid adverse orders. A well-prepared response with proper documentation can resolve issues without proceeding to adjudication or litigation."
        ]
      },
      {
        heading: "Common Types of GST Notices",
        content: "GST authorities issue various types of notices depending on the specific compliance issue or information requirement. Understanding the nature of each notice type helps in preparing an appropriate response.",
        points: [
          "Scrutiny Notice - Form ASMT-10: This notice is issued when discrepancies or inconsistencies are found in the returns filed by the taxpayer. It typically relates to mismatches between GSTR-1 and GSTR-3B, incorrect reporting of turnover, tax liability calculations, or ITC claims. Taxpayers must explain the discrepancies or accept liability.",
          "Mismatch Notice - Form GSTR-3A: Issued when there is a mismatch between ITC claimed in GSTR-3B and the eligible credit available in GSTR-2A or GSTR-2B. This notice requires taxpayers to reconcile their ITC claims, reverse excess claims if any, and provide explanations for legitimate differences.",
          "Show Cause Notice - Form DRC-01: This is a demand notice issued when the department determines that tax has been short-paid, incorrectly refunded, or input tax credit has been wrongly availed. The notice proposes a tax demand along with interest and penalty, requiring the taxpayer to show cause why the demand should not be confirmed.",
          "Non-Filing Notice - Form GSTR-3A: Sent to taxpayers who have failed to file their GST returns within the due dates. This notice prompts the taxpayer to file pending returns immediately to avoid further action such as late fees, interest charges, cancellation of GST registration, or blocking of e-way bill generation.",
          "Audit Notice - Form ADT-01: Issued to inform the taxpayer that their records and books of accounts will be audited by GST officers. The notice specifies the period to be audited, documents required, and the date when the taxpayer or their representative should appear before the audit team.",
          "Summons - Form ASMT-14 or INV-01: A summons is issued requiring a person to appear before the tax officer, either to give evidence or produce documents. This is typically issued during investigations, inquiries, or when the officer needs to verify certain facts or records in person."
        ]
      },
      {
        heading: "Required Documents for Notice Response",
        content: "When responding to a GST notice, taxpayers must submit relevant documents and evidence to support their explanations and clarifications. The specific documents vary based on the notice type.",
        points: [
          "Copy of Returns Filed: Copies of relevant GST returns (GSTR-1, GSTR-3B, GSTR-9) for the period in question should be submitted. These returns serve as primary evidence of what was reported to the department and form the basis for reconciliation and explanation.",
          "Invoice and Bill Register: Detailed sales and purchase registers showing all transactions during the disputed period are essential. These registers should match with the data reported in returns and help explain any discrepancies flagged in the notice.",
          "Bank Statements and Payment Evidence: Bank statements showing tax payments, receipts from customers, and payments to suppliers help verify the genuineness of transactions. Payment evidence is particularly important when responding to notices questioning the legitimacy of ITC claims or turnover reporting.",
          "GSTR-2A and GSTR-2B Reconciliation: For ITC mismatch notices, a detailed reconciliation statement comparing ITC claimed in GSTR-3B with amounts available in GSTR-2A/2B is crucial. This should explain reasons for differences such as timing mismatches, supplier non-compliance, or invoice amendments.",
          "Ledger Accounts and Books of Accounts: Relevant ledger accounts from books of accounts showing entries for disputed transactions may be required. These provide audit trail and demonstrate proper accounting of GST transactions in accordance with GST laws.",
          "Correspondence with Suppliers or Customers: Any relevant correspondence, emails, contracts, or agreements with suppliers or customers can help establish the genuineness of transactions and explain unusual patterns that may have triggered the notice.",
          "Supporting Documents for Exemptions or Deductions: If the notice questions certain exemptions claimed or deductions taken, appropriate notifications, circulars, certificates, or other documents justifying such claims should be submitted.",
          "Written Explanation and Reply: A detailed written reply addressing each point raised in the notice with proper legal and factual arguments is the most important document. This should be drafted carefully, be factually accurate, and cite relevant provisions of law and judicial precedents where applicable."
        ]
      },
      {
        heading: "Best Practices for Notice Response",
        content: "Handling GST notices properly requires careful attention to procedural and substantive aspects. Following best practices helps achieve favorable outcomes and maintains good compliance record.",
        points: [
          "Respond Within Timeline: Always respond to notices before the deadline specified. If more time is needed, file a request for extension with valid reasons well before the original deadline. Late responses can result in adverse orders being passed without considering your submissions.",
          "Seek Professional Assistance: Engage experienced GST consultants or tax professionals to analyze the notice and prepare the response. Professional experts understand the legal nuances, know what supporting documents are needed, and can frame responses in legally sound language that protects your interests.",
          "Be Honest and Transparent: If there is a genuine error or omission in your returns, acknowledge it in your response. Voluntary disclosure of errors with payment of dues and interest demonstrates good faith and may result in penalty waiver or reduction under GST laws.",
          "Maintain Complete Documentation: Keep copies of all notices received, responses submitted, and documents filed. Maintain a register of notices with dates of receipt, response deadlines, and status of resolution. This documentation is valuable for future reference and audit trails.",
          "Regular Reconciliation and Compliance: The best way to minimize notices is to maintain regular reconciliation of books with GST returns, ensure timely filing of returns with accurate data, obtain and verify documents from suppliers, and address any mismatches proactively before they result in notices.",
          "Attend Personal Hearings: If a personal hearing is scheduled, ensure attendance either personally or through an authorized representative. Personal hearings provide opportunity to explain your case in detail, submit additional evidence, and respond to officer's queries, often leading to better outcomes than written submissions alone."
        ]
      }
    ],
    author: {
      name: "SANTOSH KUMARI M",
      role: "Business Advisor",
      image: "/author-avatar.jpg",
      updatedDate: "Oct 27, 2025"
    }
  }
};

interface DynamicTabContentProps {
  tabName: string;
}

function DynamicTabContent({ tabName }: DynamicTabContentProps) {
  const data = tabsData[tabName as keyof typeof tabsData];

  if (!data) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
        <p className="text-red-600 font-medium">
          No data found for "{tabName}". Please check the tab name.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden max-w-5xl mx-auto">
      {/* Author Section */}
      <div className="bg-gray-50 px-8 py-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              {data.author.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900">
                {data.author.name}
              </h3>
              <p className="text-sm text-gray-600">{data.author.role}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Updated on:</p>
            <p className="text-sm font-semibold text-gray-900">{data.author.updatedDate}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-8 py-10 space-y-8">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          {data.title}
        </h1>

        {/* Description */}
        <p className="text-gray-700 text-base leading-relaxed">
          {data.description}
        </p>

        {/* Introduction */}
        <p className="text-gray-700 text-base leading-relaxed">
          {data.introduction}
        </p>

        {/* Sections */}
        {data.sections.map((section, index) => (
          <div key={index} className="space-y-5">
            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              {section.heading}
            </h2>
            
            <p className="text-gray-700 text-base leading-relaxed">
              {section.content}
            </p>

            <ul className="space-y-4 mt-4">
              {section.points.map((point, pointIndex) => {
                const [title, ...description] = point.split(':');
                return (
                  <li key={pointIndex} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div className="flex-1">
                      <span className="font-semibold text-gray-900">{title}:</span>
                      <span className="text-gray-700"> {description.join(':')}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

// Export the component
export default DynamicTabContent;