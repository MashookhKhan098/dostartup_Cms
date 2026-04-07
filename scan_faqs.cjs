const fs = require('fs');
const path = require('path');

const targetDirs = [
  'app/startup', 'app/company-registration', 'app/proprietorship', 'app/one-person-company',
  'app/llp-registartion', 'app/partnership', // Startup / Registration
  'app/trademark', 'app/copyright-registration', 'app/design-registration', // Trademark
  'app/gst-registration', 'app/gst-return-filing', 'app/lut-in-gst', 'app/eway-bill', // GST
  'app/income-tax-efiling', 'app/itr-1-return-filing', 'app/itr-2-return-filing', 
  'app/itr-3-return-filing', 'app/itr-4-return-filing', 'app/itr-5-return-filing', 
  'app/itr-6-return-filing', 'app/itr-7-return-filing', 'app/tds-return-filing', // Income Tax
  'app/add-director', 'app/remove-director', 'app/increase-authorized-capital', // MCA
  'app/pf-registration', 'app/esi-registration', 'app/pf-return-filing', // Compliance
  'app/fssai-registration', 'app/fssai-renewal'
];

function processFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  console.log(`Processing ${filePath}...`);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Very simplistic check: does it have a FAQ section?
  if (content.includes("FAQ\'s on") || content.includes("Frequently Asked Questions") || content.includes("FAQ\'s")) {
    // If it doesn't have DoStartupFAQ import, we should ideally refactor it, 
    // but refactoring inline state (faqs, openFaq, etc.) automatically is highly risky.
    console.log(`Found FAQ in ${filePath}. Needs refactor.`);
  }
}

function run() {
  const baseDir = path.join(__dirname);
  const allSubDirs = fs.readdirSync(path.join(baseDir, 'app'), { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => `app/${dirent.name}`);

  for (const p of allSubDirs) {
    const pagePath = path.join(baseDir, p, 'page.tsx');
    processFile(pagePath);
  }
}

run();
