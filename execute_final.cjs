const fs = require('fs');
const path = require('path');

const config = {
  'company-registration': {
    varName: 'companyRegistrationPlans',
    data: `const companyRegistrationPlans: PricingPlan[] = [
  {
    title: "Incorporation", price: "2,899",
    description: "Register Your Company in Just 7-10 Days - Online & Hassle-Free! Fully managed incorporation with complete documentation support. Go ...",
    features: [
      { text: "Unlimited Name Approval Attempts" },
      { text: "Company Incorporation" },
      { text: "MOA & AOA Drafting" },
      { text: "3 DINs for Directors" },
      { text: "Support for unlimited shareholders" },
      { text: "Digital Signatures" },
      { text: "PAN & TAN Registration" },
      { text: "Bank Account Opening Assistance" },
      { text: "Custom Document Drafting" },
      { text: "1 Year Compliance" }
    ]
  },
  {
    title: "Incorporation and Compliance", price: "19,899", isPopular: true,
    description: "Register your company in just 7-10 days with complete incorporation, compliance & accounting support. Government fees and DSC c...",
    features: [
      { text: "Unlimited Name Approval Attempts" },
      { text: "Company Incorporation" },
      { text: "MOA & AOA Drafting" },
      { text: "3 DINs for Directors" },
      { text: "Support for unlimited shareholders" },
      { text: "Digital Signatures" },
      { text: "PAN & TAN Registration" },
      { text: "Bank Account Opening Assistance" },
      { text: "Accounting & Bookkeeping" },
      { text: "Annual ROC Filing" },
      { text: "Income Tax Return Filing" },
      { text: "GST Registration" },
      { text: "Dedicated Compliance Manager" },
      { text: "Year-long Support" },
      { text: "Priority Phone Support" }
    ]
  }
];`
  },
  'section-8-company-registration': {
    varName: 'section8Plans',
    data: `const section8Plans: PricingPlan[] = [
  {
    title: "Incorporation", price: "2,899",
    description: "Register Your Company in Just 7-10 Days - Online & Hassle-Free! Fully managed incorporation with complete documentation support. Go ...",
    features: [
      { text: "Unlimited Name Approval Attempts" },
      { text: "Company Incorporation" },
      { text: "MOA & AOA Drafting" },
      { text: "3 DINs for Directors" },
      { text: "RD License" },
      { text: "Digital Signatures" },
      { text: "PAN & TAN Registration" },
      { text: "Bank Account Opening Assistance" },
      { text: "Custom Document Drafting" },
      { text: "Section 8 Compliance Advice" }
    ]
  },
  {
    title: "Incorporation and Compliance", price: "19,899", isPopular: true,
    description: "Register your company in just 7-10 days with complete incorporation, compliance & accounting support. Government fees and DSC c...",
    features: [
      { text: "Unlimited Name Approval Attempts" },
      { text: "Company Incorporation" },
      { text: "MOA & AOA Drafting" },
      { text: "3 DINs for Directors" },
      { text: "RD License" },
      { text: "Digital Signatures" },
      { text: "PAN & TAN Registration" },
      { text: "Bank Account Opening Assistance" },
      { text: "Accounting & Bookkeeping" },
      { text: "Annual ROC Filing" },
      { text: "Income Tax Return Filing" },
      { text: "GST Registration" },
      { text: "Dedicated Compliance Manager" },
      { text: "Year-long Support" },
      { text: "Priority Support" },
      { text: "12A and 80G Support" }
    ]
  }
];`
  }
};

const appDir = path.join(__dirname, 'app');

// Part 1: Inject Exact Data for Section-8 and Company Registration
for (const [folder, info] of Object.entries(config)) {
  const file = path.join(appDir, folder, 'page.tsx');
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');

    content = content.replace(/import\s+DoStartupPricing\s+from\s+[^;]+;/g, "import PricingCards, { PricingPlan } from '../components/PricingCards';");
    content = content.replace(/import\s+Price\s+from\s+[^;]+;/g, "import PricingCards, { PricingPlan } from '../components/PricingCards';");
    if (!content.includes('import PricingCards')) {
      content = content.replace('import Navbar', "import PricingCards, { PricingPlan } from '../components/PricingCards';\nimport Navbar");
    }

    const regexStr = 'const\\\\s+' + info.varName + '(:\\\\s*PricingPlan\\\\[\\\\])?\\\\s*=\\\\s*\\\\[[\\\\s\\\\S]*?\\\\];\\\\n?';
    const planRegex = new RegExp(regexStr, 'g');
    content = content.replace(planRegex, '');

    const insertionPoint = content.indexOf('export default function');
    if (insertionPoint !== -1) {
      if (!content.includes('const ' + info.varName + ':')) {
        content = content.slice(0, insertionPoint) + info.data + '\n\n' + content.slice(insertionPoint);
      }
    }

    content = content.replace(/<Price\s*\/>/g, "<PricingCards plans={" + info.varName + "} />");
    const oldComp = new RegExp('<DoStartupPricing[^>]*>', 'g');
    content = content.replace(oldComp, "<PricingCards plans={" + info.varName + "} />");
    const existingComp = new RegExp('<PricingCards[^>]*>', 'g');
    content = content.replace(existingComp, "<PricingCards plans={" + info.varName + "} />");

    fs.writeFileSync(file, content);
    console.log('Injected precise data in ' + file);
  }
}

// Part 2: Global Reorder (EVERY file in app/)
function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir(appDir, function(filePath) {
  if (filePath.endsWith('page.tsx')) {
    let original = fs.readFileSync(filePath, 'utf8');
    let content = original;
    
    // Check if it has a Pricing component AND a Faq component inside JSX
    // To do this simply, we'll extract the Pricing tag, delete it, and insert it right before <Faq
    
    const pricingMatch = content.match(/\s*<(PricingCards|DoStartupPricing|Price)[^>]*\/>/g);
    if (!pricingMatch) return;
    
    const pricingTag = pricingMatch[0];
    
    // Remove the pricing tag from its original position
    content = content.replace(pricingTag, '');
    
    // We expect there to be a <Faq .../> tag.
    const faqRegex = /(<Faq[^>]*\/>)/g;
    if (faqRegex.test(content)) {
      // replace <Faq /> with pricingTag \n <Faq />
      content = content.replace(faqRegex, pricingTag.trimStart() + '\n      $1');
      
      if (content !== original) {
        fs.writeFileSync(filePath, content);
        console.log('Reordered Pricing above Faq in ' + filePath);
      }
    } else {
        // If no FAQ is found, just append it back to where we removed it or do nothing since we shouldn't ruin the file
        fs.writeFileSync(filePath, original);
    }
  }
});

console.log('Done.');
