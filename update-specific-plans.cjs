const fs = require('fs');
const path = require('path');

const config = {
  'one-person-company': {
    varName: 'opcPlans',
    data: `const opcPlans: PricingPlan[] = [
  {
    title: "Incorporation", price: "2,899",
    description: "Register Your Company in Just 7-10 Days - Online & Hassle-Free! Fully managed incorporation with complete documentation support...",
    features: [
      { text: "Unlimited Name Approval Attempts" },
      { text: "Company Incorporation" },
      { text: "MOA & AOA Drafting" },
      { text: "1 DIN for Director" },
      { text: "Authorized Capital with No Limit" },
      { text: "Digital Signature Certificate" },
      { text: "PAN & TAN Registration" },
      { text: "Bank Account Opening Assistance" },
      { text: "Custom Document Drafting" }
    ]
  },
  {
    title: "Incorporation and Compliance", price: "19,899", isPopular: true,
    description: "Register your company in just 7-10 days with complete incorporation, compliance & accounting support.",
    features: [
      { text: "Unlimited Name Approval Attempts" },
      { text: "Company Incorporation" },
      { text: "MOA & AOA Drafting" },
      { text: "1 DIN for Director" },
      { text: "Authorized Capital with No Limit" },
      { text: "Digital Signature Certificate" },
      { text: "PAN & TAN Registration" },
      { text: "Bank Account Opening Assistance" },
      { text: "Accounting & Bookkeeping" },
      { text: "Annual ROC Filing" },
      { text: "Income Tax Return Filing" },
      { text: "GST Registration" },
      { text: "Dedicated Compliance Manager" },
      { text: "Year-long Support" }
    ]
  }
];`
  },
  'partnership': {
    varName: 'partnershipPlans',
    data: `const partnershipPlans: PricingPlan[] = [
  {
    title: "Partnership Deed", price: "2,899",
    description: "Get Your Partnership Firm in Just 5-7 Days - Online & Hassle-Free! Start your partnership firm registration with an expert-drafted deed...",
    features: [
      { text: "Partnership Deed Draft" },
      { text: "PAN Card Registration" },
      { text: "Shipping and Handling" },
      { text: "Bank Account Opening Assistance" },
      { text: "LEDGERS Software - 1 Year" }
    ]
  },
  {
    title: "Partnership- Deed & GST", price: "10,899", isPopular: true,
    description: "Get Your Partnership Firm in Just 5-7 Days - Online & Hassle-Free! Start your partnership firm registration with an expert-drafted deed...",
    features: [
      { text: "Partnership deed draft" },
      { text: "PAN Card Registration" },
      { text: "Shipping and Handling" },
      { text: "GST Registration" },
      { text: "GSTR-1 Filing - 12 Months" },
      { text: "GSTR-3B Filing - 12 Months" },
      { text: "LEDGERS GST Software Access - 12 Months" },
      { text: "Bank Account Opening Assistance" }
    ]
  },
  {
    title: "Partnership- Deed, GST & ITR", price: "14,899",
    description: "Get Your Partnership Firm in Just 5-7 Days - Online & Hassle-Free! Start your partnership firm registration with an expert-drafted deed...",
    features: [
      { text: "Partnership deed draft" },
      { text: "PAN Card Registration" },
      { text: "Shipping and Handling" },
      { text: "GST Registration" },
      { text: "GSTR-1 Filing - 12 Months" },
      { text: "GSTR-3B Filing - 12 Months" },
      { text: "Income Tax Filing" },
      { text: "Financial Statements" },
      { text: "Dedicated Accountant" }
    ]
  }
];`
  },
  'proprietorship': {
    varName: 'proprietorshipPlans',
    data: `const proprietorshipPlans: PricingPlan[] = [
  {
    title: "GST Registration + Monthly Filing", price: "1,499",
    description: "Get complete GST registration and monthly filing services, ensuring compliance and smooth processing of GSTR-1 and GSTR-3B...",
    features: [
      { text: "GST Registration Support" },
      { text: "GST Certificate" },
      { text: "Dedicated Accountant" },
      { text: "GSTR-1 Monthly Filing" },
      { text: "GSTR-3B Monthly Filing" },
      { text: "Invoicing Software Access" },
      { text: "Payment Gateway Setup" },
      { text: "Priority Phone Support" }
    ]
  },
  {
    title: "Proprietorship - GST", price: "7,899", isPopular: true,
    description: "For proprietorship businesses looking for complete GST compliance, get GST registration, UDYAM registration, 12 months of GSTR-1 & GSTR-3B...",
    features: [
      { text: "GST Registration for Proprietorship" },
      { text: "UDYAM Registration" },
      { text: "GSTR-1 Filing - 12 Months" },
      { text: "GSTR-3B Filing - 12 Months" },
      { text: "LEDGERS GST Software Access - 12 Months" }
    ]
  },
  {
    title: "1 Year GST Filing + ITR", price: "19,899",
    description: "IndiaFilings seamlessly provides customized accounting services for businesses with turnover up to 40 lakhs, ensuring compliance, tax...",
    features: [
      { text: "Dedicated Accountant" },
      { text: "GSTR-1 Filing - 12 Months" },
      { text: "GSTR-3B Filing - 12 Months" },
      { text: "Income Tax Filing" },
      { text: "Financial Statements" },
      { text: "Balance Sheet Preparation" }
    ]
  }
];`
  },
  'indian-subsidiary': {
    varName: 'subsidiaryPlans',
    data: `const subsidiaryPlans: PricingPlan[] = [
  {
    title: "Incorporation", price: "9,899",
    description: "Setup & Operate a business in India from anywhere in the world in just 12-15 Days - Online & Hassle-Free! Fully managed incorporation...",
    features: [
      { text: "Unlimited Name Approval Attempts" },
      { text: "Company Incorporation" },
      { text: "MOA & AOA Drafting" },
      { text: "3 DINs for Directors" },
      { text: "Support for unlimited shareholders" },
      { text: "Digital Signatures" },
      { text: "PAN & TAN Registration" },
      { text: "Bank Account Opening Support" },
      { text: "FEMA Compliance Advice" }
    ]
  },
  {
    title: "Incorporation and Compliance", price: "39,899", isPopular: true,
    description: "Register your company in just 7-10 days with complete incorporation, compliance & accounting support. Government fees and DSC c...",
    features: [
      { text: "Unlimited Name Approval Attempts" },
      { text: "Company Incorporation" },
      { text: "MOA & AOA Drafting" },
      { text: "3 DINs for Directors" },
      { text: "Support for unlimited shareholders" },
      { text: "Digital Signatures" },
      { text: "PAN & TAN Registration" },
      { text: "Bank Account Opening Support" },
      { text: "Accounting & Bookkeeping" },
      { text: "Annual ROC Filing" },
      { text: "Income Tax Return Filing" },
      { text: "GST Registration" },
      { text: "FDI Reporting (FLA Return)" },
      { text: "Secretarial Audit Assistance" },
      { text: "Dedicated Foreign Desk Support" },
      { text: "RBI Compliance Guidance" },
      { text: "Year-long Advisory" },
      { text: "Virtual Office Address Support" }
    ]
  }
];`
  },
  'trust-registration': {
    varName: 'trustPlans',
    data: `const trustPlans: PricingPlan[] = [
  {
    title: "Trust Deed", price: "2,899",
    description: "Get Your Trust Registered in Just 5-7 Days - Online & Hassle-Free! Start your Trust registration with an expert-drafted deed prepared by our...",
    features: [
      { text: "Trust Deed Draft" },
      { text: "PAN Card Registration" },
      { text: "Bank Account Opening Assistance" }
    ]
  },
  {
    title: "Trust- Deed & ITR", price: "10,899", isPopular: true,
    description: "Get Your Trust Registered in Just 5-7 Days - Online & Hassle-Free! Expert-drafted trust deed, ITR filing and 1-year access to Ledger account...",
    features: [
      { text: "Trust Deed Draft" },
      { text: "PAN Card Registration" },
      { text: "ITR-7 Return Filing" },
      { text: "Bank Account Opening Assistance" },
      { text: "LEDGERS Software - 1 Year" }
    ]
  },
  {
    title: "Trust- Deed, ITR, 12A & 80G", price: "26,899",
    description: "Get Your Trust Registered in Just 5-7 Days - Online & Hassle-Free! Expert-drafted trust deed, ITR filing, 12A & 80G registration, and 1-year ac...",
    features: [
      { text: "Trust Deed Draft" },
      { text: "PAN Card Registration" },
      { text: "ITR-7 Return Filing" },
      { text: "12A Registration" },
      { text: "80G Registration" },
      { text: "Darpan NGO Registration" },
      { text: "Priority Filing Support" }
    ]
  }
];`
  }
};

const appDir = path.join(__dirname, 'app');

for (const [folder, info] of Object.entries(config)) {
  const file = path.join(appDir, folder, 'page.tsx');
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');

    content = content.replace(/import\s+DoStartupPricing\s+from\s+[^;]+;/g, "import PricingCards, { PricingPlan } from '../components/PricingCards';");
    content = content.replace(/import\s+Price\s+from\s+[^;]+;/g, "import PricingCards, { PricingPlan } from '../components/PricingCards';");
    
    if (!content.includes('import PricingCards')) {
      content = content.replace('import Navbar', "import PricingCards, { PricingPlan } from '../components/PricingCards';\nimport Navbar");
    }

    // Safely remove the old array if it exists. Example: const opcPlans = [ ... ];
    const regexStr = 'const\\\\s+' + info.varName + '\\\\s*=\\\\s*\\\\[[\\\\s\\\\S]*?\\\\];\\\\n?';
    const planRegex = new RegExp(regexStr, 'g');
    content = content.replace(planRegex, '');

    const insertionPoint = content.indexOf('export default function');
    if (insertionPoint !== -1) {
      if (!content.includes('const ' + info.varName + ' =')) {
        content = content.slice(0, insertionPoint) + info.data + '\n\n' + content.slice(insertionPoint);
      }
    }

    content = content.replace(/<Price\s*\/>/g, "<PricingCards plans={" + info.varName + "} />");
    const oldComponentRegex = new RegExp('<DoStartupPricing[^>]*>', 'g');
    content = content.replace(oldComponentRegex, "<PricingCards plans={" + info.varName + "} />");

    fs.writeFileSync(file, content);
    console.log('Fixed ' + file);
  }
}
