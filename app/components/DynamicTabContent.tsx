"use client";

import React, { useEffect, useState } from "react";
import NewsletterForm from "./NewsletterForm";

interface DynamicTabContentProps {
  category: string;
}

const COCKPIT_URL = process.env.NEXT_PUBLIC_COCKPIT_URL;
const TOKEN = process.env.NEXT_PUBLIC_COCKPIT_API_KEY;

const FALLBACK_DATA: Record<string, any> = {
  "startup-india": {
    title: "Startup India Registration 2025 – Get Your DPIIT Certificate",
    description: "Startup India is a flagship initiative launched by the Government of India in 2016 to promote innovation, support emerging businesses, and build a strong startup ecosystem. Through DPIIT recognition, eligible startups gain access to tax exemptions, funding opportunities, compliance benefits, and faster growth support.",
    introduction: "At DoStartup, we specialise in end-to-end Startup India Registration services. From eligibility checks and documentation to DPIIT filing and certificate issuance, our experts ensure a smooth, fast, and compliant registration process—so founders can focus on building and scaling their startups.",
    sections: [
      {
        heading: "What is Startup India?",
        content: "Startup India is a flagship initiative launched by the Government of India on January 16, 2016, to promote innovation and entrepreneurship across the country. The initiative aims to empower startups, simplify regulatory processes, improve funding access, and transform India into a nation of job creators.",
        points: ["Encourages innovation-driven businesses and technology-led solutions", "Reduces regulatory and compliance burdens for early-stage startups", "Improves access to funding, incentives, and government schemes", "Supports long-term growth and global competitiveness", "Administered by DPIIT, Government of India"]
      },
      {
        heading: "Objectives of Startup India",
        content: "The Startup India initiative was launched with clear objectives to foster entrepreneurship and innovation in India.",
        points: ["Promote Innovation", "Simplify Regulations", "Facilitate Funding Access", "Encourage Job Creation", "Build a Startup-Friendly Ecosystem"]
      },
      {
        heading: "Eligibility Criteria for Startup India Registration 2025",
        content: "To obtain DPIIT recognition under the Startup India scheme, a business must meet the following eligibility criteria:",
        points: ["Business Structure: Must be a Pvt Ltd, LLP, or Partnership Firm", "Age of Startup: Incorporated not more than 10 years ago", "Annual Turnover: Must not exceed ₹100 crore in any financial year", "Innovation Requirement: Must work towards innovation or improvement", "DPIIT Recognition: Must be registered with DPIIT", "Legal Compliance: Must be compliant with all applicable laws", "Job Creation Potential: Should have potential to generate employment"]
      },
      {
        heading: "Who Is Not Eligible for Startup India Recognition?",
        content: "Certain entities are excluded from DPIIT recognition under the Startup India initiative.",
        points: ["Sole proprietorships without company or LLP structure", "Unregistered partnership firms", "Startups exceeding ₹100 crore turnover limit", "Companies incorporated more than 10 years ago", "Entities formed by restructuring or splitting existing businesses", "Businesses lacking innovation, scalability, or employment potential"]
      },
      {
        heading: "Documents Required for Startup India Certificate",
        content: "The following documents are required to apply for Startup India (DPIIT) registration:",
        points: ["MoA & AoA or Partnership Deed", "Certificate of Incorporation or Registration", "PAN Card of the Organisation", "PAN Card of Authorised Person", "Aadhaar Card of Authorised Person", "Business Address Proof", "Company Bank Statement", "Photographs of Directors or Partners"]
      },
      {
        heading: "Benefits of Startup India Registration",
        content: "DPIIT-recognised startups enjoy multiple benefits that support growth and compliance ease.",
        points: ["100% Income Tax Exemption under Section 80-IAC", "Angel Tax Exemption under Section 56(2)(viib)", "Up to 80% rebate on patent fees and 50% on trademark fees", "Self-certification under labour and environmental laws", "Eligibility for government tenders without experience or EMD", "Access to Fund of Funds for Startups (₹10,000 crore corpus)", "Fast-track exit under Insolvency and Bankruptcy Code"]
      },
      {
        heading: "Common Reasons for Startup India Application Rejection",
        content: "Many applications are rejected due to avoidable mistakes.",
        points: ["Lack of innovation or value proposition", "Weak or generic business description", "Ineligible business structure or age", "Missing or incomplete documentation", "Business formed through restructuring or split-up"]
      },
      {
        heading: "Revocation of Startup India Registration",
        content: "DPIIT recognition can be revoked if eligibility conditions are violated.",
        points: ["Crossing ₹100 crore turnover or 10-year age limit", "False or misleading declarations", "Failure to demonstrate innovation", "Non-compliance with tax or statutory laws"]
      }
    ],
    author: { name: "Santosh Kumari M", role: "Business Advisor", updatedDate: "Jan 2025" }
  },
  "Partnership": {
    title: "Partnership Firm Registration in India",
    description: "A Partnership Firm is one of the oldest and most common forms of business organization in India, governed by the Indian Partnership Act 1932. It allows two or more individuals to jointly own and operate a business with shared profits, losses, and management responsibilities.",
    introduction: "At DoStartup, we simplify Partnership Firm registration by handling all documentation and filing requirements. Whether you're a duo of professionals or a group of entrepreneurs, our experts ensure your partnership is legally recognized and operationally ready from day one.",
    sections: [
      {
        heading: "What is a Partnership Firm?",
        content: "A Partnership Firm is a business entity formed by two or more persons who agree to share the profits and losses of a business carried on by all or any of them acting for all. It is governed by the Indian Partnership Act 1932 and can be registered or unregistered. A registered partnership provides stronger legal standing and the ability to file suits against third parties.",
        points: ["Minimum 2 Partners, Maximum 20", "Governed by Indian Partnership Act 1932", "Can Be Registered or Unregistered", "Shared Profits, Losses & Management", "Easy & Inexpensive to Form"]
      },
      {
        heading: "Key Features of a Partnership Firm",
        content: "Partnership Firms are popular among small and medium businesses for their simplicity, low cost of formation, and flexible management structure.",
        points: ["Mutual Agency Between Partners", "Shared Decision Making", "No Separate Legal Identity", "Partners Have Unlimited Liability", "Easy to Dissolve or Restructure"]
      },
      {
        heading: "Required Documents for Registration",
        content: "Registering a Partnership Firm requires basic identity and address documents from all partners, plus a Partnership Deed.",
        points: ["PAN Card of all Partners", "Aadhaar Card / Voter ID for Identity Proof", "Address Proof of all Partners", "Partnership Deed (Notarized)", "Proof of Principal Place of Business"]
      },
      {
        heading: "Benefits of a Registered Partnership",
        content: "While registration is not mandatory, a registered Partnership Firm enjoys several legal advantages over an unregistered one.",
        points: ["Can File Legal Suits Against Third Parties", "Partner Can Sue Co-Partners for Rights", "Stronger Legal Standing in Disputes", "Easier to Open Bank Accounts", "More Credible for Business Transactions"]
      },
      {
        heading: "Step-by-Step Registration Process",
        content: "The registration of a Partnership Firm is a simple, state-level process managed through the Registrar of Firms. DoStartup handles everything for you.",
        points: ["Step 1: Draft and Notarize Partnership Deed", "Step 2: Apply to Registrar of Firms in Your State", "Step 3: Pay Prescribed Registration Fees", "Step 4: Submit Application with All Documents", "Step 5: Receive Certificate of Registration"]
      }
    ],
    author: { name: "DoStartup Expert", role: "Business Law Specialist", updatedDate: "Oct 2025" }
  },
  "section-8": {
    title: "Section 8 Company Registration in India",
    description: "A Section 8 Company is a non-profit organization registered under the Companies Act 2013 to promote commerce, art, science, sports, education, research, social welfare, religion, charity, and environmental protection. It enjoys special tax exemptions and government recognition.",
    introduction: "At DoStartup, we guide NGOs, foundations, and social enterprises through Section 8 Company registration with complete documentation support. Our experts ensure your non-profit is structured for maximum impact, credibility, and access to CSR funds and government grants.",
    sections: [
      {
        heading: "What is a Section 8 Company?",
        content: "A Section 8 Company is incorporated under Section 8 of the Companies Act 2013 for promoting non-profit objectives. It must apply its income exclusively towards promoting its stated objectives and cannot distribute dividends to its members. It is similar to a Trust or Society but enjoys more credibility as it is registered with MCA.",
        points: ["Non-Profit Organization Structure", "Registered Under Companies Act 2013", "No Distribution of Profits to Members", "Exempt from Certain Tax Obligations", "Higher Credibility than Trusts/Societies"]
      },
      {
        heading: "Key Features of Section 8 Company",
        content: "Section 8 Companies have distinctive features that give them advantages over other non-profit structures like Trusts and Societies.",
        points: ["Separate Legal Entity with Limited Liability", "Directors Not Required to Hold Shares", "Can Accept Foreign Contributions (FCRA)", "Eligible for 12A & 80G Tax Exemptions", "No Minimum Capital Requirement"]
      },
      {
        heading: "Required Documents for Registration",
        content: "The registration requires documents from all directors and promoters, plus a detailed plan of proposed activities.",
        points: ["PAN Card of all Directors", "Aadhaar / Passport as Identity Proof", "Address Proof of all Directors", "Proof of Registered Office", "Declaration of Objectives & Activity Plan"]
      },
      {
        heading: "Benefits of a Section 8 Company",
        content: "Choosing a Section 8 structure offers significant advantages for organizations working towards social welfare, education, or charitable purposes.",
        points: ["Access to CSR Funding from Companies", "Eligible for Government & International Grants", "Income Tax Exemptions under 12A & 80G", "Strong Brand Credibility with Donors", "Perpetual Existence Regardless of Member Changes"]
      },
      {
        heading: "Step-by-Step Registration Process",
        content: "Section 8 Company registration involves obtaining a special license from the Regional Director along with standard MCA incorporation.",
        points: ["Step 1: Obtain DSC & DIN for Directors", "Step 2: Apply for Name Approval via SPICe+", "Step 3: Obtain License from Regional Director", "Step 4: File SPICe+ with eMoA & eAoA", "Step 5: Receive Certificate of Incorporation"]
      }
    ],
    author: { name: "DoStartup Expert", role: "Non-Profit & NGO Specialist", updatedDate: "Oct 2025" }
  },
  "trust": {
    title: "Trust Registration in India",
    description: "A Trust is a legal arrangement where a trustee holds and manages assets or funds for the benefit of beneficiaries. Trusts in India are commonly formed for charitable, religious, educational, or private wealth management purposes, governed by the Indian Trusts Act 1882 or state-specific Public Trust Acts.",
    introduction: "At DoStartup, we assist individuals and organizations in registering both public and private trusts across India. Our expert team handles the Trust Deed drafting, sub-registrar filing, and post-registration compliance, ensuring your trust is legally sound and ready to operate.",
    sections: [
      {
        heading: "What is a Trust?",
        content: "A Trust is created when a person (the Settlor) transfers property or assets to another person or entity (the Trustee) to hold and manage for the benefit of specified beneficiaries. Public Trusts are meant for the benefit of the general public and are used for charitable or religious purposes, while Private Trusts benefit specific individuals or families.",
        points: ["Created by a Trust Deed / Declaration", "Managed by a Trustee for Beneficiaries", "Public Trusts: Charitable & Religious Purposes", "Private Trusts: Family & Wealth Management", "Simple Governance Structure"]
      },
      {
        heading: "Key Features of a Trust",
        content: "Trusts offer a straightforward and flexible legal structure for managing assets and pursuing charitable or private objectives.",
        points: ["No Minimum Members Required", "Governed by Indian Trusts Act or State Laws", "Trust Property Cannot Be Misused by Trustees", "Can Accept Donations & Foreign Funds (FCRA)", "Eligible for 12A & 80G Tax Exemptions"]
      },
      {
        heading: "Required Documents for Registration",
        content: "Trust registration requires key documents from the Settlor and Trustees, along with a properly drafted Trust Deed.",
        points: ["PAN Card of Settlor & All Trustees", "Aadhaar / Passport as Identity Proof", "Address Proof of Settlor & Trustees", "Proof of Registered Office / Trust Address", "Trust Deed on Stamp Paper (Notarized)"]
      },
      {
        heading: "Benefits of Registering a Trust",
        content: "A registered Trust enjoys legal recognition, tax benefits, and added credibility for fundraising and donor engagement.",
        points: ["Income Tax Exemption via 12A Registration", "80G Certification for Donor Tax Deductions", "Eligible for Government Grants & CSR Funds", "Perpetual Succession of Trust Assets", "Protection Against Misuse of Trust Property"]
      },
      {
        heading: "Step-by-Step Registration Process",
        content: "Trust registration is primarily a state-level process done at the office of the Sub-Registrar. DoStartup manages the entire process for you.",
        points: ["Step 1: Draft Trust Deed with Objectives & Rules", "Step 2: Print on Stamp Paper of Required Value", "Step 3: Settlor & Trustees Sign Before Sub-Registrar", "Step 4: Submit Trust Deed for Registration", "Step 5: Collect Registered Trust Deed & PAN/TAN"]
      }
    ],
    author: { name: "DoStartup Expert", role: "Trust & NGO Registration Specialist", updatedDate: "Oct 2025" }
  },
  "Indian Subs.": {
    title: "Indian Subsidiary Registration in India",
    description: "An Indian Subsidiary is a company incorporated in India that is owned or controlled by a foreign parent company. It allows foreign businesses to establish a legal presence in India, access its vast market, and benefit from India's growing economy while maintaining limited liability.",
    introduction: "At DoStartup, we provide end-to-end assistance for setting up an Indian Subsidiary of a foreign company. From obtaining approvals from RBI and FIPB to MCA incorporation and post-registration compliance, our expert team ensures your India entry is seamless, fast, and fully compliant with FEMA and Companies Act 2013.",
    sections: [
      {
        heading: "What is an Indian Subsidiary Company?",
        content: "An Indian Subsidiary is a Private Limited Company incorporated in India where a foreign company holds more than 50% of the total share capital. It operates as a separate legal entity in India, distinct from its foreign parent. This structure gives the foreign company direct control over Indian operations while limiting liability to the investment made in the Indian entity.",
        points: ["Foreign Parent Holds 50%+ Shareholding", "Separate Legal Entity in India", "Governed by Companies Act 2013 & FEMA", "Can Repatriate Profits to Parent Company", "Eligible for Indian Government Incentives"]
      },
      {
        heading: "Key Features of an Indian Subsidiary",
        content: "Setting up an Indian Subsidiary offers unique advantages for foreign companies looking to enter or expand in the Indian market.",
        points: ["100% FDI Allowed in Most Sectors", "Full Operational Control for Parent Company", "Access to Indian Talent & Market", "Eligible for Make in India Incentives", "Professional Management with Indian Directors"]
      },
      {
        heading: "Required Documents for Registration",
        content: "The registration requires documents from both the foreign parent company and the proposed Indian directors, along with registered office proof.",
        points: ["Certificate of Incorporation of Parent Company", "Memorandum & Articles of Parent Company", "Board Resolution for Indian Subsidiary Formation", "Passport & Address Proof of Foreign Directors", "Proof of Registered Office Address in India"]
      },
      {
        heading: "Benefits of Setting Up an Indian Subsidiary",
        content: "An Indian Subsidiary is the most preferred route for foreign companies to enter India, providing full control, limited liability, and access to the world's fastest-growing major economy.",
        points: ["Direct Access to 1.4 Billion Consumer Market", "Lower Corporate Tax Rates in India", "Protection Under India's IP & Legal Framework", "Ability to Bid for Indian Government Contracts", "Easy Repatriation of Dividends & Profits"]
      },
      {
        heading: "Step-by-Step Registration Process",
        content: "Setting up an Indian Subsidiary involves MCA registration along with FEMA/RBI compliance. DoStartup manages every step for you.",
        points: ["Step 1: Obtain DSC & DIN for Indian Directors", "Step 2: Name Approval via SPICe+ Part A", "Step 3: File SPICe+ with eMoA & eAoA", "Step 4: Receive Certificate of Incorporation (COI)", "Step 5: RBI Filing & FEMA Compliance (FC-GPR)"]
      }
    ],
    author: { name: "DoStartup Expert", role: "Foreign Investment & FEMA Specialist", updatedDate: "Oct 2025" }
  },
  "Producer Company": {
    title: "Producer Company Registration in India",
    description: "A Producer Company is a legally recognized body of farmers, agricultural producers, or artisans, incorporated under the Companies Act 2013. It empowers primary producers to form a cooperative-style corporate entity to improve their income, livelihoods, and market access.",
    introduction: "At DoStartup, we offer complete assistance for Producer Company registration, from document preparation to MCA filing. Our experts ensure your producer group is structured legally, compliantly, and in the most cost-effective way possible, so producers can focus on their core activities.",
    sections: [
      {
        heading: "What is a Producer Company?",
        content: "A Producer Company is an incorporated body of ten or more individual producers, or two or more producer institutions. It operates like a company under the Companies Act 2013 but is designed to serve the collective interests of farmers, artisans, fishermen, and other primary producers. It bridges the gap between rural producers and corporate governance by giving them a formal legal structure with limited liability.",
        points: ["Minimum 10 Individual Members or 2 Producer Institutions", "Limited Liability for All Members", "Separate Legal Entity", "Governed by Companies Act 2013", "Profits Distributed as Patronage Bonus"]
      },
      {
        heading: "Key Features of Producer Company",
        content: "Producer Companies have unique features tailored to the needs of primary producers and agricultural groups, distinguishing them from other business structures.",
        points: ["Activities Limited to Primary Produce", "Voting Rights Equal for All Members", "Access to Government Subsidies & Schemes", "Eligible for FPC (Farmer Producer Company) Grants", "Professional Management Board Allowed"]
      },
      {
        heading: "Required Documents for Registration",
        content: "To register a Producer Company in India, basic identity and address documents from all founding members and directors are required.",
        points: ["PAN Card of all Directors & Members", "Aadhaar Card / Voter ID for Identity Proof", "Address Proof of all Directors", "Proof of Registered Office Address", "No-Objection Certificate (NOC) from Property Owner"]
      },
      {
        heading: "Benefits of Registering a Producer Company",
        content: "Forming a Producer Company gives agricultural and rural producers access to institutional support, better market linkages, and formal credit facilities.",
        points: ["Access to NABARD & Government Funding", "Better Bargaining Power in Markets", "Collective Ownership of Processing & Storage", "Input Procurement at Lower Costs", "Export Opportunities for Agricultural Produce"]
      },
      {
        heading: "Step-by-Step Registration Process",
        content: "The registration process for a Producer Company is similar to a Private Limited Company, fully digital via the MCA portal. DoStartup manages the entire process for you.",
        points: ["Step 1: Obtain Digital Signatures (DSC) for Directors", "Step 2: Apply for Director Identification Number (DIN)", "Step 3: Name Approval via SPICe+ Part A", "Step 4: File SPICe+ Form with eMoA & eAoA", "Step 5: Receive Certificate of Incorporation (COI)"]
      }
    ],
    author: { name: "DoStartup Expert", role: "Agricultural Law Specialist", updatedDate: "Oct 2025" }
  },
  "Public Limited": {
    title: "Public Limited Company Registration in India",
    description: "A Public Limited Company is a business structure that can raise capital from the general public by issuing shares on a stock exchange. It offers the highest level of credibility and is ideal for large-scale businesses seeking substantial investment.",
    introduction: "At DoStartup, we provide end-to-end assistance for Public Limited Company registration in India. Our expert team handles all MCA formalities, stock exchange compliance, and SEBI requirements, enabling your company to raise public funds legally and transparently.",
    sections: [
      {
        heading: "What is a Public Limited Company?",
        content: "A Public Limited Company (PLC) is a type of company that offers its shares to the general public and is listed on a recognized stock exchange. It is governed by the Companies Act 2013 and is subject to strict regulatory oversight by SEBI and the ROC. A minimum of 7 shareholders and 3 directors are required, with no upper limit on shareholders. This structure is best suited for businesses with large capital requirements and long-term expansion plans.",
        points: ["Separate Legal Entity", "Minimum 7 Shareholders & 3 Directors", "No Upper Limit on Shareholders", "Shares Freely Transferable", "Can Raise Funds from General Public"]
      },
      {
        heading: "Key Features of a Public Limited Company",
        content: "Public Limited Companies carry several unique characteristics that distinguish them from private companies and make them attractive for large-scale businesses.",
        points: ["Listed on BSE / NSE Stock Exchanges", "Subject to SEBI Regulations", "Annual Accounts Must Be Published", "Mandatory Statutory Audit Every Year", "Higher Credibility & Brand Value"]
      },
      {
        heading: "Required Documents for Registration",
        content: "Registering a Public Limited Company requires extensive documentation from all directors and shareholders, along with registered office proof.",
        points: ["PAN Card of all Directors & Shareholders", "Aadhaar / Passport as Identity Proof", "Address Proof of all Directors", "Proof of Registered Office Address", "No-Objection Certificate (NOC) from Owner"]
      },
      {
        heading: "Benefits of a Public Limited Company",
        content: "Opting for a Public Limited structure provides significant financial and strategic advantages for businesses planning to scale nationally or internationally.",
        points: ["Raise Large Capital via Public Issues (IPO)", "Enhanced Brand Trust & Market Credibility", "Liquidity for Shareholders via Stock Market", "Easier Access to Institutional Loans", "Ability to Attract Global Investors & Partners"]
      },
      {
        heading: "Step-by-Step Registration Process",
        content: "The registration of a Public Limited Company is a multi-step process involving MCA, SEBI, and stock exchange approvals. DoStartup manages the entire workflow for you.",
        points: ["Step 1: Obtain Digital Signatures (DSC) for Directors", "Step 2: Apply for Director Identification Number (DIN)", "Step 3: Name Approval via SPICe+ Part A", "Step 4: File SPICe+ Form with eMoA & eAoA", "Step 5: Apply for Stock Exchange Listing (IPO Process)"]
      }
    ],
    author: { name: "DoStartup Expert", role: "Corporate & SEBI Specialist", updatedDate: "Oct 2025" }
  },
  "Company Registration": {
    title: "Private Limited Company Registration in India",
    description: "A Private Limited Company is the most popular business structure in India for startups and growing businesses. It offers limited liability protection, separate legal identity, and easy access to venture capital and bank funding.",
    introduction: "At DoStartup, we offer a comprehensive and cost-effective service to register your Private Limited Company in India. We handle all legal formalities for company registration, ensuring strict compliance with government regulations and providing you with expert guidance throughout the entire process.",
    sections: [
      {
        heading: "What is a Private Limited Company?",
        content: "A Private Limited Company is a business entity registered under the Companies Act 2013, owned by a group of shareholders with limited liability. It is a separate legal entity from its owners, meaning the company can own assets, enter into contracts, and sue or be sued in its own name. The liability of each shareholder is limited to the extent of their shareholding, protecting personal assets from business obligations.",
        points: ["Separate Legal Entity", "Unlimited Shareholders (minimum 2)", "Limited Liability for Shareholders", "Perpetual Succession", "Easy Access to Capital & Funding"]
      },
      {
        heading: "Key Features of Private Limited Company",
        content: "A Private Limited Company comes with several distinctive characteristics that make it the preferred choice for entrepreneurs, startups, and businesses planning to scale.",
        points: ["Minimum 2 Directors & 2 Shareholders", "No Minimum Paid-up Capital", "Restrictions on Transfer of Shares", "Prohibition on Public Invitation for Shares", "Taxation Under Corporate Tax Slabs"]
      },
      {
        heading: "Required Documents for Company Registration",
        content: "Registering a Private Limited Company in India requires a set of documents from both the directors and for the registered office of the company.",
        points: ["PAN Card of all Directors & Shareholders", "Aadhaar / Passport for Identity Proof", "Address Proof of Directors", "Proof of Registered Office Address", "No-Objection Certificate (NOC) from Owner"]
      },
      {
        heading: "Benefits of Registering a Private Limited Company",
        content: "Choosing a Private Limited Company structure offers numerous advantages that make it ideal for ambitious entrepreneurs and startups seeking to grow and raise investment.",
        points: ["Raises Funding from Angel Investors & VCs", "Higher Credibility with Banks & Vendors", "Easy Employee Stock Option (ESOP) Plans", "Structured Corporate Governance", "Better Scalability & Exit Options"]
      },
      {
        heading: "Step-by-Step Registration Process",
        content: "The registration process involves several filings with the Ministry of Corporate Affairs (MCA) and is fully digital. DoStartup manages the entire process end-to-end.",
        points: ["Step 1: Obtain Digital Signatures (DSC) for Directors", "Step 2: Apply for Director Identification Number (DIN)", "Step 3: Name Approval via RUN or SPICe+ Part A", "Step 4: File SPICe+ Form, eMoA & eAoA", "Step 5: Receive Certificate of Incorporation (COI)"]
      }
    ],
    author: { name: "DoStartup Expert", role: "Corporate Law Specialist", updatedDate: "Oct 2025" }
  },
  "one-person-company": {
    title: "One Person Company Registration in India",
    description: "The One Person Company (OPC) is a revolutionary business structure that allows a single entrepreneur to operate a corporate entity with limited liability. It provides the legal protection of a company while offering the flexibility of a single owner.",
    introduction: "At DoStartup, we offer a comprehensive and cost-effective service to register your One Person Company in India. We handle all legal formalities for OPC registration, ensuring strict compliance with government regulations and providing you with expert guidance throughout the entire process.",
    sections: [
      {
        heading: "What is a One Person Company?",
        content: "Introduced in the Companies Act 2013, One Person Company is a hybrid of Sole Proprietorship and Private Limited Company models. It allows a single promoter to have full control over the company while limiting their liability to the extent of their share capital. This structure is ideal for small businesses and entrepreneurs who want to start a company alone with lower compliance than a Private Limited Company.",
        points: ["Single Ownership and Control", "Separate Legal Entity", "Limited Liability Protection", "Minimal Compliance compared to Pvt Ltd", "Easy Transferability"]
      },
      {
        heading: "Key Benefits of OPC Registration",
        content: "Choosing an OPC structure offers numerous advantages that make it ideal for solo entrepreneurs starting their ventures.",
        points: ["Separate Legal Identity", "Limited Liability for the Member", "Perpetual Succession", "Easy access to Funding and Loans", "Credibility among Vendors and Banks"]
      },
      {
        heading: "Registration Process for OPC",
        content: "The process involves obtaining DSC, DIN, and filing for incorporation through the SPICe+ form with the Ministry of Corporate Affairs.",
        points: ["Step 1: Obtain Digital Signature (DSC)", "Step 2: Apply for Name Approval (RUN)", "Step 3: Filing Incorporation Forms (SPICe+)", "Step 4: Issue of Certificate of Incorporation"]
      }
    ],
    author: { name: "DoStartup Expert", role: "Compliance Advisor", updatedDate: "Oct 2025" }
  },
  "llp": {
    title: "LLP Registration in India",
    description: "Limited Liability Partnership (LLP) is a modern business structure that combines the flexibility of partnership with the limited liability protection of a company. Ideal for professionals and small to medium-sized businesses.",
    introduction: "At DoStartup, we simplify the complex process of LLP registration, handling everything from Digital Signatures (DSC) to the final Certificate of Incorporation. Our expert team ensures your partnership is legally sound and fully compliant with MCA regulations from day one.",
    sections: [
      {
        heading: "What is a Limited Liability Partnership?",
        content: "An LLP is an alternative corporate business form that gives the benefits of limited liability of a company and the flexibility of a partnership. It is a separate legal entity, liable to the full extent of its assets, but the liability of the partners is limited to their agreed contribution. This structure is highly recommended for service-oriented businesses and professional firms.",
        points: ["Separate Legal Entity", "Limited Liability for Partners", "Low Compliance Cost", "No Minimum Capital Requirement", "No restriction on Max Partners"]
      },
      {
        heading: "Key Benefits of Registering an LLP",
        content: "Choosing an LLP structure offers a middle ground between a traditional partnership and a private limited company, providing several strategic advantages.",
        points: ["Asset Protection for Partners", "Tax Benefits & Flexibility", "Perpetual Succession", "Ease of Transferring Ownership", "Access to Institutional Credit"]
      },
      {
        heading: "Step-by-Step LLP Registration Process",
        content: "The registration of an LLP involves several digital filings with the Ministry of Corporate Affairs, and we manage the entire workflow for you.",
        points: ["Step 1: Obtain Digital Signatures (DSC)", "Step 2: Apply for Name Approval (RUN-LLP)", "Step 3: Filing of FiLLiP Form", "Step 4: Execution & Filing of LLP Agreement"]
      }
    ],
    author: { name: "DoStartup Expert", role: "LLP Specialist", updatedDate: "Oct 2025" }
  },
  "fssai": {
    title: "FSSAI Registration in India – Complete Guide 2025",
    description: "FSSAI (Food Safety and Standards Authority of India) registration is mandatory for all food businesses in India. Whether you run a small food stall, restaurant, cloud kitchen, or a large food manufacturing unit, obtaining an FSSAI license ensures your business operates legally and builds trust with your customers.",
    introduction: "At DoStartup, we simplify the FSSAI registration process for food businesses across India. From selecting the right license type to filing on the FoSCoS portal, our experts handle every step — so you can focus on serving great food while staying fully compliant with food safety regulations.",
    sections: [
      {
        heading: "What is FSSAI Registration?",
        content: "FSSAI registration is a mandatory legal requirement for all entities involved in the food business in India, including manufacturers, processors, distributors, retailers, importers, exporters, and food service operators. Governed by the Food Safety and Standards Act 2006, FSSAI ensures that food products meet safety and quality standards set by the Government of India.",
        points: ["Mandatory for all food businesses in India", "Governed by Food Safety & Standards Act 2006", "Administered by FSSAI under Ministry of Health", "Prevents adulteration and ensures food safety", "License number must appear on all food products"]
      },
      {
        heading: "Types of FSSAI License",
        content: "FSSAI issues three types of licenses based on the size and nature of the food business. Choosing the right type is critical for compliance.",
        points: ["Basic Registration: Turnover up to ₹12 lakhs/year", "State License: Turnover between ₹12 lakhs and ₹20 crores", "Central License: Turnover above ₹20 crores or multi-state operations", "Importers & Exporters: Central License mandatory", "E-commerce Food Businesses: Central License required"]
      },
      {
        heading: "Documents Required for FSSAI Registration",
        content: "The documents needed vary based on the type of FSSAI license applied for. Below are the common documents required across all categories.",
        points: ["PAN Card of the Applicant / Business", "Aadhaar Card of the Owner or Director", "Address Proof of Business Premises", "Food Safety Management System Plan", "List of Food Products to be Manufactured or Sold", "NOC from Municipality or Local Body", "Proof of Ownership or Rental Agreement of Premises"]
      },
      {
        heading: "Benefits of Getting FSSAI Registration",
        content: "Obtaining an FSSAI license offers multiple advantages for food businesses beyond just legal compliance.",
        points: ["Legal Authority to Operate a Food Business", "Builds Consumer Trust & Brand Credibility", "Enables Pan-India Distribution & Exports", "Access to Government Food Schemes & Contracts", "Protection from Legal Penalties & Business Closure", "Improves Hygiene & Food Safety Standards"]
      },
      {
        heading: "Step-by-Step FSSAI Registration Process",
        content: "The FSSAI registration process is fully online through the FoSCoS (Food Safety Compliance System) portal. DoStartup manages the entire process for you.",
        points: ["Step 1: Determine the correct license type (Basic/State/Central)", "Step 2: Gather all required documents", "Step 3: Apply online at FoSCoS portal", "Step 4: Pay the prescribed government fee", "Step 5: Receive FSSAI Registration Certificate"]
      },
      {
        heading: "Who Needs FSSAI Registration?",
        content: "Any entity involved in the manufacture, storage, distribution, or sale of food products in India must have a valid FSSAI registration or license.",
        points: ["Restaurants, Dhabas & Cloud Kitchens", "Food Manufacturers & Processors", "Food Importers & Exporters", "Distributors & Wholesalers", "Online Food Delivery Aggregators", "Hotels & Catering Services", "Dairy Units & Slaughterhouses"]
      }
    ],
    author: { name: "DoStartup Expert", role: "Food Compliance Specialist", updatedDate: "Jan 2025" }
  },
  "80g-registration": {
    title: "80G Registration for NGOs & Trusts – Complete Guide 2025",
    description: "80G registration under the Income Tax Act allows donors to claim tax deductions on donations made to eligible NGOs, trusts, and charitable institutions. Getting 80G certification significantly boosts your organization's fundraising ability and credibility with donors.",
    introduction: "At DoStartup, we provide end-to-end assistance for 80G registration for trusts, societies, and Section 8 companies. Our experts handle the entire process — from eligibility assessment and document preparation to filing Form 10A and follow-up with the Income Tax department — so your organization can attract more donors and funding.",
    sections: [
      {
        heading: "What is 80G Registration?",
        content: "80G registration is a certification granted by the Income Tax Department of India to non-profit organizations, enabling their donors to claim a deduction on donations made to the organization. It is governed under Section 80G of the Income Tax Act 1961. When an NGO or trust receives 80G certification, donors can deduct 50% or 100% of their donation amount from their taxable income, depending on the type of institution.",
        points: ["Governed by Section 80G of Income Tax Act 1961", "Allows donors to claim tax deductions on donations", "Applicable to NGOs, Trusts, Societies & Section 8 Companies", "Provisional registration valid for 3 years initially", "Regular registration granted after 3 years of activity"]
      },
      {
        heading: "Eligibility Criteria for 80G Registration",
        content: "Not all organizations are eligible for 80G registration. The following conditions must be met to qualify.",
        points: ["Must be a Trust, Society, or Section 8 Company", "Must be registered under applicable laws", "Income must be used solely for charitable purposes", "Must not have income from business activities (unless separate accounts)", "Must already hold 12A registration", "No political or religious affiliation that limits beneficiaries"]
      },
      {
        heading: "Documents Required for 80G Registration",
        content: "The following documents are needed to apply for 80G registration through the Income Tax portal using Form 10A.",
        points: ["Trust Deed or Memorandum of Association (MoA)", "Certificate of Registration (Trust/Society/Section 8)", "PAN Card of the Organisation", "12A Registration Certificate", "Audited Financial Statements (last 3 years if applicable)", "Activity Report of the Organisation", "List of Governing Body / Trustees with Address & PAN"]
      },
      {
        heading: "Benefits of 80G Registration",
        content: "Obtaining 80G certification provides significant advantages to NGOs and charitable organizations in terms of donor attraction and institutional credibility.",
        points: ["Donors get 50–100% tax deduction on donations", "Attracts CSR funds from corporates", "Boosts organizational credibility & transparency", "Enables access to government grants & schemes", "Increases donor confidence and recurring contributions", "Eligible for foreign donations via FCRA (with additional approval)"]
      },
      {
        heading: "80G Registration Process – Step by Step",
        content: "The process for 80G registration is fully online through the Income Tax e-filing portal. DoStartup handles every step for your organization.",
        points: ["Step 1: Ensure 12A registration is in place", "Step 2: Gather all required documents", "Step 3: File Form 10A on IT e-filing portal", "Step 4: Receive provisional 80G registration (valid 3 years)", "Step 5: Apply for regular registration after 3 years of activity"]
      },
      {
        heading: "Difference Between 12A and 80G Registration",
        content: "12A and 80G are two separate but complementary registrations for NGOs. Understanding the difference is important before applying.",
        points: ["12A: Income tax exemption for the NGO itself", "80G: Tax deduction benefit for donors of the NGO", "Both registrations are applied using Form 10A", "12A should be obtained before or alongside 80G", "Both are now provisional for 3 years initially (post 2021 amendment)"]
      }
    ],
    author: { name: "DoStartup Expert", role: "NGO & Tax Compliance Specialist", updatedDate: "Jan 2025" }
  },
  "apeda-registration": {
    title: "APEDA Registration – RCMC Certificate Guide 2025",
    description: "APEDA (Agricultural and Processed Food Products Export Development Authority) registration is mandatory for exporters of scheduled agricultural and processed food products from India. Getting your RCMC (Registration-cum-Membership Certificate) from APEDA unlocks access to government subsidies, export promotion schemes, and international market opportunities.",
    introduction: "At DoStartup, we provide end-to-end assistance for APEDA registration and RCMC certificate issuance. Our experts handle document preparation, online filing, and follow-up with APEDA — ensuring your export business is legally compliant and ready to access global food markets quickly.",
    sections: [
      {
        heading: "What is APEDA Registration?",
        content: "APEDA registration, also known as RCMC (Registration-cum-Membership Certificate), is a mandatory requirement for all exporters of scheduled products under the APEDA Act 1985. APEDA is a statutory body under the Ministry of Commerce & Industry, Government of India, that promotes the export of agricultural and processed food products.",
        points: ["Mandatory for exporters of scheduled agricultural products", "Governed by the APEDA Act 1985", "Issues RCMC (Registration-cum-Membership Certificate)", "Facilitates export promotion and financial assistance", "Administered by Ministry of Commerce & Industry"]
      },
      {
        heading: "Products Covered Under APEDA",
        content: "APEDA covers a wide range of agricultural and processed food products that require mandatory registration before export.",
        points: ["Fruits, Vegetables & Their Products", "Meat & Meat Products", "Poultry & Poultry Products", "Dairy Products", "Confectionery, Biscuits & Bakery Products", "Honey, Jaggery & Sugar Products", "Alcoholic & Non-Alcoholic Beverages", "Cereal & Cereal Products", "Groundnuts, Peanuts & Walnuts", "Pickles, Papads & Chutneys"]
      },
      {
        heading: "Documents Required for APEDA Registration",
        content: "The following documents are required to apply for APEDA registration (RCMC) through the APEDA online portal.",
        points: ["IEC (Import Export Code) Certificate", "PAN Card of the Business Entity", "Bank Certificate / Cancelled Cheque", "Aadhar Card & PAN of Proprietor/Director", "GST Registration Certificate", "Business Address Proof", "Bank Account Details (with IFSC Code)", "HSN Code of Products to be Exported"]
      },
      {
        heading: "Benefits of APEDA Registration",
        content: "Obtaining APEDA (RCMC) registration unlocks a range of government benefits and export support programs for your food export business.",
        points: ["Access to Financial Assistance & Subsidies from APEDA", "Eligibility for Export Promotion Schemes", "Participation in International Trade Fairs", "Market Development Assistance (MDA) Grants", "Quality Development & Infrastructure Support", "Access to Training Programs for Exporters", "Mandatory for customs clearance of scheduled products"]
      },
      {
        heading: "APEDA Registration Process – Step by Step",
        content: "The APEDA registration process is fully online through the APEDA portal. DoStartup manages the entire process for you.",
        points: ["Step 1: Obtain Import Export Code (IEC) if not already done", "Step 2: Register on the APEDA online portal", "Step 3: Fill the RCMC application with business details", "Step 4: Upload all required documents", "Step 5: Pay the registration fee online", "Step 6: Receive RCMC Certificate from APEDA"]
      },
      {
        heading: "Validity & Renewal of APEDA Registration",
        content: "APEDA RCMC certificates are issued for a fixed validity period and must be renewed before expiry to continue exporting scheduled products.",
        points: ["RCMC is valid for 1 Year (Annual Renewal Required)", "Renewal must be done before expiry to avoid penalties", "Updated documents may be required at renewal", "Non-renewal can lead to suspension of export benefits", "DoStartup provides renewal reminders and assistance"]
      }
    ],
    author: { name: "DoStartup Expert", role: "Export Compliance Specialist", updatedDate: "Jan 2025" }
  },
  "halal-certificate": {
    title: "Halal Certification in India – Complete Guide 2025",
    description: "Halal Certification ensures that products and services targeted at the Muslim population meet the requirements of Islamic law. It is a mark of quality and safety that allows businesses to access global markets in the Middle East, Southeast Asia, and beyond.",
    introduction: "At DoStartup, we simplify the Halal certification process for food, cosmetics, and pharmaceutical businesses. Our experts guide you through the audit process, documentation, and compliance requirements to ensure your business gains international trust and expands its market reach.",
    sections: [
      {
        heading: "What is Halal Certification?",
        content: "Halal is an Arabic word meaning 'permissible'. Halal certification is a process which ensures the features and quality of the products according to the rules established by the Islamic Council that allow the use of the mark Halal. It is mainly applied to meat products and other food items such as milk, canned food, and additives.",
        points: ["Ensures compliance with Islamic dietary laws", "Increases export opportunities to Islamic countries", "Acts as a mark of hygiene and quality", "Applicable to Food, Cosmetics, Pharma & Logistics", "Increases consumer confidence globally"]
      },
      {
        heading: "Types of Halal Certification",
        content: "Depending on the nature of the business, different Halal certification schemes are available.",
        points: ["Halal Food Certification: For restaurants, food processors & slaughterhouses", "Halal Cosmetics Certification: For makeup and personal care products", "Halal Pharmaceutical Certification: For medicines and supplements", "Industrial Scheme: For manufacturing units and factories", "Logistics & Storage: For warehouse and transportation providers"]
      },
      {
        heading: "Documents Required for Halal Certificate",
        content: "To apply for Halal certification, businesses must provide documentation confirming their adherence to Halal standards.",
        points: ["Certificate of Incorporation / Business Registration", "PAN Card of the Business Entity", "GST Registration Certificate", "FSSAI License (for food businesses)", "List of Ingredients & Raw Materials used", "Process Flow Chart of Production", "HACCP or ISO Certificates (if available)", "Laboratory Test Reports of Products"]
      },
      {
        heading: "Benefits of Halal Certification",
        content: "Obtaining a Halal certificate offers significant advantages, especially for businesses looking to export.",
        points: ["Access to a Global Market of 1.9 Billion Muslims", "Improved Competitive Advantage in International Trade", "Assurance of High Standards of Hygiene & Safety", "Better Marketability in Middle Eastern & Southeast Asian Countries", "Third-party Audit confirms compliance with Islamic standards", "Builds Trust and Brand Loyalty among Consumers"]
      },
      {
        heading: "Halal Certification Process – Step by Step",
        content: "The process involves application, audit, and certification. DoStartup manages the documentation and coordination for you.",
        points: ["Step 1: Application submission with product and process details", "Step 2: Documentation review by the Halal board", "Step 3: On-site audit of the manufacturing facility", "Step 4: Audit report submission and review", "Step 5: Grant of Halal Certificate if all standards are met"]
      },
      {
        heading: "Who Needs Halal Certification?",
        content: "Any business that wants to export to Muslim-majority countries or serve the Muslim community in India should consider Halal certification.",
        points: ["Food Manufacturers & Exporters", "Restaurants, Hotels & Catering Services", "Cosmetic & Skincare Brands", "Pharmaceutical & Healthcare Companies", "Meat Processors & Slaughterhouses", "E-commerce Platforms selling food products"]
      }
    ],
    author: { name: "DoStartup Expert", role: "Global Compliance Specialist", updatedDate: "Jan 2025" }
  },
  "udyam-registration": {
    title: "Udyam Registration – Complete MSME Guide 2025",
    description: "Udyam Registration is the government-mandated registration process for Micro, Small, and Medium Enterprises (MSMEs) in India. It replaces the old UDYOG Aadhaar and provides a permanent registration and basic recognition for small businesses.",
    introduction: "At DoStartup, we help businesses secure their Udyam registration seamlessly. Whether you are a new startup or an established business, our experts ensure that you obtain your MSME certificate quickly to start availing government subsidies and credit benefits.",
    sections: [
      {
        heading: "What is Udyam Registration?",
        content: "Udyam Registration is a self-declaration based online registration for MSMEs. Launched on July 1, 2020, it provides a single-window system for MSMEs to register their business and get a unique Udyam Registration Number (URN). This registration is valid for the lifetime of the business and does not require renewal.",
        points: ["Mandatory for all MSMEs in India", "Paperless and 100% online registration", "Replaces EM-I/II and Udyog Aadhaar Memorandum", "Linked with Income Tax and GST systems", "Permanent registration number provided"]
      },
      {
        heading: "Benefits of Udyam Registration",
        content: "Registering under Udyam unlocks a wide range of benefits provided by various ministries and departments of the Government of India.",
        points: ["Easy access to collateral-free loans from banks", "Subsidy on Patent Registration and Industrial Promotion", "Exemption from Interest on Delayed Payments", "Eligibility for ISO Certification Reimbursement", "Concession in Electricity Bills", "Priority in Government Tenders and Procurement"]
      },
      {
        heading: "Documents Required for Udyam Registration",
        content: "One of the key features of Udyam registration is that it is based on self-declaration. However, certain basic details are required to complete the process.",
        points: ["Aadhaar Number of the applicant (Proprietor/Director/Partner)", "PAN Card (mandatory from 1st April 2021)", "GSTIN (mandatory for businesses liable for GST)", "Business address and contact details", "Bank account details and IFSC code", "Date of commencement of business", "Investment and Turnover details from previous years"]
      },
      {
        heading: "Udyam Registration Classification (2025)",
        content: "Enterprises are classified into Micro, Small, or Medium based on their investment in plant and machinery, and annual turnover.",
        points: ["Micro: Investment < ₹1 Crore & Turnover < ₹5 Crore", "Small: Investment < ₹10 Crore & Turnover < ₹50 Crore", "Medium: Investment < ₹50 Crore & Turnover < ₹250 Crore"]
      },
      {
        heading: "Step-by-Step Registration Process",
        content: "The registration process is simple but requires accuracy in providing financial and business data. DoStartup handles the entire process for you.",
        points: ["Step 1: Aadhaar verification of the owner or authorized signatory", "Step 2: Filling in organizational details and classification", "Step 3: Verification of PAN and GST details from government portals", "Step 4: Self-declaration of investment and turnover", "Step 5: Final submission and generation of Udyam certificate"]
      }
    ],
    author: { name: "DoStartup Expert", role: "MSME Compliance Consultant", updatedDate: "Jan 2025" }
  },
  "icegate-registration": {
    title: "ICEGATE Registration Guide – Seamless Customs Compliance 2025",
    description: "ICEGATE is the national portal of Indian Customs that provides e-filing services to trade and cargo carriers. Registration on ICEGATE is essential for importers, exporters, and customs brokers to interact with the Customs Department electronically.",
    introduction: "At DoStartup, we simplify the ICEGATE registration process for your business. Our experts handle the documentation, digital signatures, and portal configuration so you can manage your imports and exports without any technical hurdles.",
    sections: [
      {
        heading: "What is ICEGATE Registration?",
        content: "ICEGATE (Indian Customs Electronic Gateway) is a portal that facilitates electronic filing of Bill of Entry, Shipping Bills, and other trade-related documents. Registration on this portal allows businesses to track their cargo, pay duties online, and receive real-time notifications from Customs.",
        points: ["Centralized portal for customs transactions", "Essential for EDI (Electronic Data Interchange)", "Enables online payment of customs duties", "Facilitates real-time tracking of Bill of Entry", "Provides access to e-Sanchit for document uploading"]
      },
      {
        heading: "Who Needs ICEGATE Registration?",
        content: "ICEGATE registration is mandatory for any entity involved in international trade and dealing with Indian Customs.",
        points: ["Importers and Exporters", "Customs House Agents (CHAs)", "Shipping Lines and Airlines", "Consol Agents and Freight Forwarders", "Trade Partners like Banks and Stevedores"]
      },
      {
        heading: "Documents Required for ICEGATE",
        content: "The registration process requires specific business and personal identification documents to ensure secure access to the customs portal.",
        points: ["Import Export Code (IEC) Certificate", "PAN Card of the Business Entity", "Aadhaar Card of the Authorized Signatory", "Valid Class III Digital Signature Certificate (DSC)", "Business Authorization Letter", "GST Registration Certificate", "Bank Account Details (linked with IEC)"]
      },
      {
        heading: "Benefits of ICEGATE Registration",
        content: "By registering on ICEGATE, businesses can significantly reduce the time and effort required for customs clearances.",
        points: ["Faster Clearance of Cargo through e-filing", "24/7 Access to customs filing services", "Reduced Paperwork and physical interaction", "Transparent and Secure Transaction tracking", "Instant notifications for duty payments and query replies", "Direct integration with DGFT and RBI systems"]
      },
      {
        heading: "ICEGATE Registration Process",
        content: "The process involves portal application and DSC mapping. DoStartup manages the end-to-end setup for you.",
        points: ["Step 1: Mapping the Digital Signature Certificate (DSC)", "Step 2: Filling the registration form on the ICEGATE portal", "Step 3: Verification of IEC and PAN details", "Step 4: Approval from the ICEGATE helpdesk", "Step 5: Portal access activation and testing"]
      }
    ],
    author: { name: "DoStartup Expert", role: "Customs Compliance Specialist", updatedDate: "Jan 2025" }
  },
  "bis-certification": {
    title: "BIS Certification Guide – Quality & Safety Standards in India",
    description: "BIS Certification is a means for providing third-party guarantee of quality, safety, and reliability of products to the customer. It is mandatory for several products in India to ensure they meet the Bureau of Indian Standards (BIS) specifications.",
    introduction: "At DoStartup, we provide comprehensive support for obtaining BIS certification (ISI Mark and FMCS). From identifying the applicable IS standards to lab testing and final filing, our experts ensure your product reaches the Indian market without delays.",
    sections: [
      {
        heading: "What is BIS Certification?",
        content: "BIS Certification allows the licensee to use the ISI Mark on their products, which is a symbol of safety and quality. It involves rigorous testing, factory inspections, and quality control checks to ensure compliance with the Bureau of Indian Standards Act.",
        points: ["Third-party guarantee of product quality", "Mandatory for electronics, steel, and toys", "Includes ISI Mark and CRS (Compulsory Registration Scheme)", "Promotes consumer confidence and safety", "Essential for both domestic and foreign manufacturers"]
      },
      {
        heading: "Types of BIS Certification Schemes",
        content: "Depending on the product and the location of the manufacturer, BIS offers multiple registration paths.",
        points: ["ISI Mark Scheme: For domestic manufacturers of specified products", "FMCS (Foreign Manufacturers Certification Scheme): For products made outside India", "CRS (Compulsory Registration Scheme): For electronics and IT goods", "Hallmarking: For gold and silver jewelry"]
      },
      {
        heading: "Documents Required for BIS Certification",
        content: "The documentation process involves providing technical specifications of the product and business legalities.",
        points: ["Business Registration Proof (COI/Partnership Deed)", "Flow Chart of the Manufacturing Process", "List of Manufacturing Machinery & Equipment", "Details of Quality Control (QC) Personnel", "Product Technical Drawings & Specifications", "In-house Test Reports (if available)", "Trademark Registration Proof"]
      },
      {
        heading: "Benefits of BIS Certification",
        content: "Obtaining the BIS license provides significant advantages in terms of market access and brand reputation.",
        points: ["Legal compliance for mandatory products", "Unauthorized use of ISI mark is a punishable offense", "Competitive edge in the Indian market", "Enhanced brand trust and customer loyalty", "Eligibility for government tenders and large-scale projects"]
      },
      {
        heading: "Steps to Obtain BIS Certification",
        content: "The process is technical and involves collaboration between the manufacturer, the testing lab, and BIS officials.",
        points: ["Step 1: Selection of the applicable Indian Standard (IS)", "Step 2: Sample collection and testing in BIS-recognized labs", "Step 3: Preparation and filing of the internal application", "Step 4: Audit and inspection of the manufacturing unit by BIS officers", "Step 5: Grant of license and permission to use the ISI mark"]
      }
    ],
    author: { name: "DoStartup Expert", role: "Quality Compliance Specialist", updatedDate: "Jan 2025" }
  },
  "certificate-incumbency": {
    title: "Certificate of Incumbency – Official Verification of Corporate Standing",
    description: "A Certificate of Incumbency is an official document issued by a corporation that lists the current directors, officers, and sometimes key shareholders. It is essential for opening foreign bank accounts, signing international contracts, and proving corporate authority.",
    introduction: "DoStartup assists businesses in obtaining a professional and legally valid Certificate of Incumbency. Our experts coordinate with Company Secretaries and Chartered Accountants to ensure your document is accurate and recognized by global financial and legal entities.",
    sections: [
      {
        heading: "What is a Certificate of Incumbency?",
        content: "Also known as a 'Secretary's Certificate' or 'Register of Directors', this document confirms the identity of the individuals authorized to act on behalf of the company. It serves as proof that the officers listed are currently in office and have the power to bind the company in legal agreements.",
        points: ["Official list of directors and officers", "Confirms legal authorization and signing power", "Essential for international business transactions", "Verifies corporate structure for banks", "Often required by foreign regulators (KYC/AML)"]
      },
      {
        heading: "When do you need this Certificate?",
        content: "International trade and legal procedures often require verification of who runs a company to prevent fraud.",
        points: ["Opening Corporate Bank Accounts in foreign countries", "Signing high-value legal contracts or deeds", "Applying for lines of credit or loans", "Participating in international tenders", "Mergers, Acquisitions, and Due Diligence processes"]
      },
      {
        heading: "Details Included in the Certificate",
        content: "A standard Certificate of Incumbency provides a clear snapshot of the company's management.",
        points: ["Company Name and Registration Number (CIN)", "Date and Country of Incorporation", "Names and Titles of all Directors", "Names of the President, Secretary, and Treasurer", "Statement of current standing (Good Standing)", "Signature of the authorized official (CA/CS)"]
      },
      {
        heading: "Documents Required for Issuance",
        content: "To prepare a valid certificate, we require access to the company's latest statutory records.",
        points: ["Certificate of Incorporation (COI)", "Memorandum & Articles of Association (MOA/AOA)", "Updated Register of Directors", "Latest Annual Filing (MGT-7/AOC-4) copies", "Board Resolution authorizing the request", "Identity proof of the directors being listed"]
      },
      {
        heading: "How DoStartup Helps You?",
        content: "We manage the technical documentation and verification steps to ensure a fast and error-free issuance.",
        points: ["Step 1: Review of existing corporate records for accuracy", "Step 2: Drafting the certificate according to international standards", "Step 3: Coordination for signature by qualified professionals (CA/CS)", "Step 4: Providing notarized or apostilled copies if required for international use"]
      }
    ],
    author: { name: "DoStartup Expert", role: "Corporate Legal Specialist", updatedDate: "Jan 2025" }
  },
  "patent-registration": {
    alias: ["Patent", "patent"],
    title: "Patent Registration – Protect Your Innovations and Intellectual Property",
    description: "A patent is an exclusive right granted for an invention, which is a product or a process that provides, in general, a new way of doing something, or offers a new technical solution to a problem. Patent registration ensures that no one else can make, use, or sell your invention without your permission.",
    introduction: "DoStartup simplifies the complex patent filing process. From conducting a thorough patentability search to drafting specifications and filing with the Controller General of Patents, our experts ensure your intellectual property is legally fortified.",
    sections: [
      {
        heading: "Why Should You File a Patent?",
        content: "A patent gives you a legal monopoly over your invention for a period of up to 20 years, allowing you to monetize your ideas safely.",
        points: ["Exclusive rights to the invention", "Prevents competitors from copying your technology", "Increases the market value of your business", "Opportunity to license or sell the invention for royalties", "Attracts investors and venture capital"]
      },
      {
        heading: "Types of Patent Applications",
        content: "Depending on the stage of your invention, you can choose the right filing strategy.",
        points: ["Provisional Application: Secures an early priority date while your invention is still in development.", "Complete Specification: Detailed filing required within 12 months of a provisional application.", "PCT International Application: Protects your invention in multiple countries under the Patent Cooperation Treaty.", "Convention Application: Filing in other countries within 12 months of the Indian filing."]
      },
      {
        heading: "The Patent Registration Process",
        content: "Our team follows a rigorous 5-step process to maximize your chances of a successful grant.",
        points: ["Step 1: Patentability Search – Verifying if the invention is new, non-obvious, and useful.", "Step 2: Drafting Specifications – Precise technical and legal documentation of the invention.", "Step 3: Filing – Submission of the application to the Indian Patent Office.", "Step 4: Publication – The application is published in the official gazette after 18 months.", "Step 5: Examination & Grant – Responding to office actions and final approval by the examiner."]
      },
      {
        heading: "Documents Required for Patent Filing",
        content: "We require clear details of the invention to prepare the legal drafts.",
        points: ["Title of the Invention", "Detailed Description and Working of the Invention", "Technical Drawings or Diagrams (if applicable)", "Abstract of the Invention", "Identity proof of the inventors", "Power of Authority for DoStartup to represent you"]
      }
    ],
    author: { name: "DoStartup Expert", role: "IP & Intellectual Property Specialist", updatedDate: "Jan 2025" }
  },
  "design-registration": {
    title: "Design Registration – Protecting Your Product's Unique Aesthetics",
    description: "Design Registration is a type of intellectual property protection that protects the aesthetic appeal of a product. It prevents competitors from copying the shape, configuration, pattern, ornament, or composition of lines or colors applied to any article.",
    introduction: "DoStartup provides end-to-end support for filing design registrations with the Indian Patent Office (IPINDIA). We assist Individuals and MSMEs in securing their unique product designs, ensuring all legal requirements from representation sheets to attorney-prepared filings are met.",
    sections: [
      {
        heading: "What Can Be Registered as a Design?",
        content: "Under the Designs Act 2000, protection is granted to the visual appearance of an article rather than its utility.",
        points: ["Unique Three-Dimensional Shapes", "Surface Patterns and Ornamentation", "Distinctive Color Combinations", "Configuration of Industrial Products", "Non-Functional Aesthetic Features"]
      },
      {
        heading: "Eligibility for MSMEs and Individuals",
        content: "There are special government fee structures designed to support startups and small businesses.",
        points: ["Reduced Government Fees for Individuals", "MSME/UDYAM Recognition Benefits", "Single Article Registration Support", "Special Incentives for Creative Startups"]
      },
      {
        heading: "Documents Required for Filing",
        content: "To proceed with a design application, we require specific visual and legal documentation.",
        points: ["Four copies of Representation Sheets (showing different views)", "Power of Attorney (POA) in favor of our attorneys", "Self-certified MSME/UDYAM Certificate", "Statement of Novelty and Disclaimer", "Certified copy of Priority Document (if applicable)"]
      },
      {
        heading: "Process of Registration",
        content: "We manage the technical filing and follow-ups to ensure your design is granted protection quickly.",
        points: ["Step 1: Design Search to ensure novelty", "Step 2: Drafting the application and representation sheets", "Step 3: Filing the application at IPINDIA (Patent Office)", "Step 4: Examination by the Registrar", "Step 5: Responding to any objections", "Step 6: Registration & Issuance of Certificate"]
      }
    ],
    author: { name: "DoStartup Expert", role: "Design Law & IP Specialist", updatedDate: "Jan 2025" }
  }
};


// Add aliases for case-insensitivity and route naming
FALLBACK_DATA["Patent"] = FALLBACK_DATA["patent-registration"];
FALLBACK_DATA["patent"] = FALLBACK_DATA["patent-registration"];
FALLBACK_DATA["certificate-incumbency"] = FALLBACK_DATA["certificate-incumbency"]; // already exists


export default function DynamicTabContent({ category }: DynamicTabContentProps) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const url = `${COCKPIT_URL}/api/content/items/testing?token=${TOKEN}`;
        const res = await fetch(url, { cache: "no-store" });
        const json = await res.json();

        if (Array.isArray(json) && json.length > 0) {
          const item = json.find(
            (entry: any) => entry.category?.toLowerCase() === category?.toLowerCase()
          );
          if (item?.description) {
            // Replace IndiaFilings with DoStartup in the fetched data
            const cleanData = JSON.parse(JSON.stringify(item.description).replace(/IndiaFilings/gi, "DoStartup"));
            setData(cleanData);
            setLoading(false);
            return;
          }
        }
      } catch (error) {
        console.error("DynamicTabContent fetch error:", error);
      }

      // Fallback
      const lowerCat = category.toLowerCase();
      setData(FALLBACK_DATA[lowerCat] || FALLBACK_DATA[category] || null);
      setLoading(false);
    }

    fetchData();
  }, [category]);

  if (loading) {
    return (
      <div className="bg-[#F4F3EE] rounded-2xl p-10 animate-pulse">
        <div className="h-8 bg-gray-100 rounded w-1/2 mb-4"></div>
        <div className="h-4 bg-gray-100 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-100 rounded w-3/4"></div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="bg-[#F4F3EE] border border-[#E5E2DA] rounded-2xl p-8 text-center">
        <p className="text-[#C15F3C] font-medium">
          No data found for "{category}".
        </p>
      </div>
    );
  }

  return (
    <div className="bg-transparent py-5 sm:py-6 rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Modern Hero with Split Layout */}
        <div className="relative mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Side - Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-full px-4 py-1.5 shadow-sm">
                <div className="relative">
                  <div className="w-2 h-2 bg-[#C15F3C] rounded-full animate-ping absolute"></div>
                  <div className="w-2 h-2 bg-[#C15F3C] rounded-full"></div>
                </div>
                <span className="text-xs font-medium text-[#C15F3C] uppercase">Expert Guide</span>
                <div className="w-px h-3 bg-gray-100"></div>
                <span className="text-xs text-[#6F6B63]">Updated Weekly</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-[#2F2E2B]">{data.title?.split(' ').slice(0, -1).join(' ')}</span>
                <br />
                <span className="bg-gradient-to-r from-[#C15F3C] to-[#A94E30] bg-clip-text text-transparent">
                  {data.title?.split(' ').slice(-1)}
                </span>
              </h1>

              <p className="text-[#6F6B63] text-lg leading-relaxed max-w-lg">
                {data.description}
              </p>

              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-[#C15F3C] to-[#A94E30] border-2 border-white shadow-sm"></div>
                  ))}
                </div>
                <div className="text-sm text-[#6F6B63]">
                  <span className="font-semibold text-[#2F2E2B]">2.5k+</span> readers this week
                </div>
              </div>
            </div>

            {/* Right Side - Visual */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#C15F3C]/20 to-transparent rounded-full blur-3xl"></div>
              <div className="relative bg-[#F9F8F6] rounded-2xl shadow-xl border border-gray-100 p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C15F3C] to-[#A94E30] flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2F2E2B]">Quick Summary</h3>
                    <p className="text-xs text-[#6F6B63]">5 min read</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {[
                    "Complete step-by-step guide",
                    "Expert tips & best practices",
                    "Latest compliance updates"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[#6F6B63]">
                      <svg className="w-4 h-4 text-[#C15F3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8">

          {/* Sidebar - Left */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <div className="space-y-6 sticky top-6">

              {/* Author Profile Card */}
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                <div className="bg-gradient-to-r from-[#C15F3C] to-[#A94E30] px-5 py-4">
                  <h3 className="text-white font-semibold text-sm">About the Author</h3>
                </div>
                <div className="p-5 text-center">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#C15F3C] to-[#A94E30] rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg mb-3">
                    {(data.author?.name || "NA")
                      .split(" ")
                      .map((n: string) => n[0])
                      .join("")}
                  </div>
                  <h4 className="font-semibold text-[#2F2E2B]">{data.author?.name || "Expert Author"}</h4>
                  <p className="text-sm text-[#C15F3C] font-medium mt-1">{data.author?.role || "Industry Expert"}</p>
                  <div className="flex items-center justify-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 fill-[#C15F3C] text-[#C15F3C]" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              {/* Progress Card */}
              <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-[#C15F3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h4 className="font-semibold text-[#2F2E2B] text-sm">Reading Progress</h4>
                </div>
                <div className="h-2 bg-[#F9F8F6] rounded-full overflow-hidden mb-2">
                  <div className="h-full bg-gradient-to-r from-[#C15F3C] to-[#A94E30] rounded-full" style={{ width: '65%' }}></div>
                </div>
                <p className="text-xs text-[#B1ADA1]">65% completed • 3 min left</p>
              </div>

              {/* Quick Actions Card */}
              <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                <h4 className="font-semibold text-[#2F2E2B] text-sm mb-4">Quick Actions</h4>
                <div className="space-y-2">
                  <button className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl border border-[#E5E2DA] text-sm text-[#6F6B63] hover:border-[#C15F3C] hover:text-[#C15F3C] transition-all group">
                    <span>Save for later</span>
                    <svg className="w-4 h-4 group-hover:text-[#C15F3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  </button>
                  <button className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl border border-[#E5E2DA] text-sm text-[#6F6B63] hover:border-[#C15F3C] hover:text-[#C15F3C] transition-all group">
                    <span>Download PDF</span>
                    <svg className="w-4 h-4 group-hover:text-[#C15F3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Main Content - Center */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

              {/* Content */}
              <div className="px-6 md:px-8 py-3 md:py-4">

                {/* Introduction */}
                <div className="mb-10">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-[#6F6B63] leading-relaxed text-base first-letter:text-4xl first-letter:font-bold first-letter:text-[#C15F3C] first-letter:mr-2 first-letter:float-left">
                      {data.introduction}
                    </p>
                  </div>
                </div>

                {/* Sections with Timeline Style */}
                {(data.sections || []).map((section: any, index: number) => (
                  <div key={index} className="relative mb-12 last:mb-0 pl-8 border-l-2 border-gray-100 group">
                    <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[#F9F8F6] border-2 border-[#C15F3C] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <div className="w-2 h-2 rounded-full bg-[#C15F3C]"></div>
                    </div>

                    <h2 className="text-2xl font-bold text-[#2F2E2B] mb-4 group-hover:text-[#C15F3C] transition-colors">
                      {section.heading}
                    </h2>

                    <p className="text-[#6F6B63] leading-relaxed mb-5">
                      {section.content}
                    </p>

                    {(section.points || []).length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {(section.points || []).map((point: string, i: number) => {
                          const [title] = point.split(":");
                          return (
                            <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F9F8F6] rounded-full text-xs text-[#6F6B63] hover:bg-[#C15F3C] hover:text-white transition-all cursor-pointer group/item">
                              <svg className="w-3 h-3 group-hover/item:text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              <span>{title}</span>
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Sidebar - Right */}
          <div className="lg:col-span-3 order-3">
            <div className="space-y-6 sticky top-6">

              {/* Need Help Card */}
              <div className="bg-gradient-to-br from-[#C15F3C] to-[#A94E30] rounded-2xl p-5 text-white text-center shadow-lg">
                <div className="w-14 h-14 mx-auto bg-white/20 rounded-2xl flex items-center justify-center text-2xl mb-3">
                  💬
                </div>
                <h3 className="font-bold text-base mb-1">Need Help?</h3>
                <p className="text-white/85 text-xs mb-4">Chat with our experts for personalized guidance</p>
                <button 
                  onClick={() => {
                    const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
                    if (number) {
                      window.open(`https://wa.me/${number}`, "_blank");
                    }
                  }}
                  className="w-full bg-white text-[#C15F3C] font-semibold py-2.5 rounded-xl text-sm hover:bg-[#F9F8F6] transition-all"
                >
                  Start Conversation →
                </button>
              </div>

              {/* Popular Topics */}
              <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                <h4 className="font-semibold text-[#2F2E2B] text-sm mb-4">Popular Topics</h4>
                <div className="flex flex-wrap gap-2">
                  {["#Compliance", "#Registration", "#Taxation", "#Legal", "#Startup", "#Funding", "#IPR", "#GST"].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-[#F9F8F6] border border-[#E5E2DA] rounded-full text-xs text-[#6F6B63] hover:bg-[#C15F3C] hover:text-white hover:border-[#C15F3C] transition-all cursor-pointer">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Weekly Newsletter */}
              <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-[#C15F3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <h4 className="font-semibold text-[#2F2E2B] text-sm">Weekly Newsletter</h4>
                </div>
                <p className="text-xs text-[#6F6B63] mb-3">Get expert insights delivered to your inbox</p>
                <NewsletterForm
                  wrapperClassName="flex flex-col gap-2"
                  inputClassName="w-full px-3 py-2 border border-[#E5E2DA] rounded-lg text-sm bg-[#F9F8F6] focus:ring-1 focus:ring-[#C15F3C] outline-none placeholder-[#B1ADA1]"
                  buttonClassName="w-full px-4 py-2 bg-[#C15F3C] text-white rounded-lg text-sm font-semibold hover:bg-[#A94E30] transition-all"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
