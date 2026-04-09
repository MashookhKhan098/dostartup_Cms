import fs from 'fs';
import path from 'path';

const pagesDir = 'app';
const dynamicImports = `import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";`;

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Replace imports
    const oldImports = [
        'DoStartupPricing',
        'DoStartupFAQ',
        'AddQuestionModal',
        'PricingCards'
    ];

    let hasOldImport = false;
    for (const item of oldImports) {
        if (content.includes(item)) {
            const regex = new RegExp(`import ${item}(, { PricingPlan })? from ["']\\.\\.\\/components\\/${item}["'];?\\r?\\n?`, 'g');
            content = content.replace(regex, '');
            hasOldImport = true;
        }
    }

    if (hasOldImport) {
        if (!content.includes('import DynamicPricingSection')) {
            content = content.replace(/(import (Navbar|Footer) from ["']\.\.\/components\/(Navbar|Footer)["'];?\r?\n)/, `$1${dynamicImports}\n`);
            modified = true;
        }
    }

    // Replace PricingCards usage
    if (content.includes('<PricingCards')) {
        content = content.replace(/<PricingCards[\s\S]*?\/>/g, '<DynamicPricingSection />');
        modified = true;
    }

    // Replace DoStartupPricing usage
    if (content.includes('<DoStartupPricing')) {
        content = content.replace(/<DoStartupPricing[\s\S]*?\/>/g, '<DynamicPricingSection />');
        modified = true;
    }

    // Replace DoStartupFAQ usage
    if (content.includes('<DoStartupFAQ')) {
        content = content.replace(/<DoStartupFAQ[\s\S]*?\/>/g, '<FAQAccordion />');
        modified = true;
    }
    
    // Replace Faq usage if it's the standard import
    if (content.includes('<Faq')) {
        content = content.replace(/<Faq[\s\S]*?\/>/g, '<FAQAccordion />');
        modified = true;
    }

    // If FAQ is manually mapped
    if (content.includes('{FAQS.map')) {
        content = content.replace(/<section[^>]*id="faq"[\s\S]*?<\/section>/g, '<FAQAccordion />');
        modified = true;
    }

    // Remove FAQS and PLANS constants
    content = content.replace(/const FAQS = \[[\s\S]*?\];/g, '');
    content = content.replace(/const PLANS = \[[\s\S]*?\];/g, '');
    content = content.replace(/const itrPlans = \[[\s\S]*?\];/g, '');
    content = content.replace(/const [a-zA-Z]+Plans: PricingPlan\[\] = \[[\s\S]*?\];/g, '');
    content = content.replace(/const [a-zA-Z]+Plans = \[[\s\S]*?\];/g, '');

    // Cleanup AddQuestionModal
    content = content.replace(/<AddQuestionModal[\s\S]*?\/>/g, '');

    if (modified) {
        fs.writeFileSync(filePath, content);
        console.log(`Updated ${filePath}`);
    }
}

function walk(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walk(fullPath);
        } else if (file === 'page.tsx') {
            processFile(fullPath);
        }
    }
}

walk(pagesDir);
