const fs = require('fs');
const path = require('path');

const config = {
  'company-registration': {
    varName: 'companyRegistrationPlans',
    data: `const companyRegistrationPlans: PricingPlan[] = [
  {
    title: "Incorporation", price: "2,899",
    description: "Register Your Company in Just 7-10 Days - Online & Hassle-Free! Fully managed incorporation with complete documentation support...",
    features: [
      { text: "Unlimited Name Approval Attempts" },
      { text: "Company Incorporation" },
      { text: "MOA & AOA Drafting" },
      { text: "2 DINs for Directors" },
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
      { text: "2 DINs for Directors" },
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
  'trademark-registration': {
    varName: 'trademarkPlans',
    data: `const trademarkPlans: PricingPlan[] = [
  {
    title: "Trademark Registration", price: "1,999",
    description: "Secure your brand identity in just 3 days! Complete end-to-end trademark registration service with expert attorney support.",
    features: [
      { text: "Comprehensive Trademark Search" },
      { text: "Class Classification Consultation" },
      { text: "TM Application Drafting" },
      { text: "Filing of TM Application" },
      { text: "Application Status Tracking" },
      { text: "Support for TM Objections" }
    ]
  },
  {
    title: "Trademark + Logo Design", price: "5,899", isPopular: true,
    description: "Professional logo design coupled with trademark registration to completely safeguard your intellectual property.",
    features: [
      { text: "Professional Logo Design Options" },
      { text: "Comprehensive Trademark Search" },
      { text: "Class Classification Consultation" },
      { text: "TM Application Drafting" },
      { text: "Filing of TM Application" },
      { text: "Application Status Tracking" },
      { text: "Support for TM Objections" },
      { text: "Copyright Advisory" }
    ]
  }
];`
  },
  'gst-registration': {
    varName: 'gstPlans',
    data: `const gstPlans: PricingPlan[] = [
  {
    title: "GST Registration + Monthly Filing", price: "1,499",
    description: "Get complete GST registration and monthly filing services, ensuring compliance and smooth processing of GSTR-1 and GSTR-3B.",
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
    title: "1 Year GST Filing + ITR", price: "19,899", isPopular: true,
    description: "IndiaFilings seamlessly provides customized accounting services for businesses ensuring compliance and tax filing.",
    features: [
      { text: "Dedicated Accountant" },
      { text: "GSTR-1 Filing - 12 Months" },
      { text: "GSTR-3B Filing - 12 Months" },
      { text: "Income Tax Filing" },
      { text: "Financial Statements" },
      { text: "Balance Sheet Preparation" },
      { text: "LEDGERS GST Software Access - 12 Months" },
      { text: "Audit Support (Basic)" }
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

    // 1. Replace old imports with PricingCards
    content = content.replace(/import\s+DoStartupPricing\s+from\s+[^;]+;/g, "import PricingCards, { PricingPlan } from '../components/PricingCards';");
    content = content.replace(/import\s+Price\s+from\s+[^;]+;/g, "import PricingCards, { PricingPlan } from '../components/PricingCards';");
    // Ensure import is there if wasn't replaced
    if (!content.includes('import PricingCards')) {
      content = content.replace('import Navbar', "import PricingCards, { PricingPlan } from '../components/PricingCards';\nimport Navbar");
    }

    // 2. Remove old plan array if it exists. Example: const companyRegistrationPlans = [ ... ];
    const regexStr = 'const\\\\s+' + info.varName + '(:\\\\s*PricingPlan\\\\[\\\\])?\\\\s*=\\\\s*\\\\[[\\\\s\\\\S]*?\\\\];\\\\n?';
    const planRegex = new RegExp(regexStr, 'g');
    content = content.replace(planRegex, '');

    // 3. Insert new plan array after imports
    const insertionPoint = content.indexOf('export default function');
    if (insertionPoint !== -1) {
      if (!content.includes('const ' + info.varName + ':')) {
        content = content.slice(0, insertionPoint) + info.data + '\n\n' + content.slice(insertionPoint);
      }
    }

    // 4. Replace <Price /> or <DoStartupPricing plans={...} /> or <PricingCards plans={...} /> with EXACT new component
    content = content.replace(/<Price\s*\/>/g, "<PricingCards plans={" + info.varName + "} />");
    const oldComponentRegex = new RegExp('<DoStartupPricing[^>]*>', 'g');
    content = content.replace(oldComponentRegex, "<PricingCards plans={" + info.varName + "} />");
    const newComponentRegex = new RegExp('<PricingCards[^>]*>', 'g');
    content = content.replace(newComponentRegex, "<PricingCards plans={" + info.varName + "} />");

    fs.writeFileSync(file, content);
    console.log('Fixed ' + file);
  }
}
