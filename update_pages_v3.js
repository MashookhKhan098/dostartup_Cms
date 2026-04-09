import fs from 'fs';
import path from 'path';

const pagesDir = 'app';
const dynamicImports = `import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";`;

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Detect if already modernized
    if (content.includes('DynamicPricingSection') && content.includes('FAQAccordion')) {
        return;
    }

    // Replace various pricing components
    const pricingReplaces = [
        /<PricingCards[\s\S]*?\/>/g,
        /<DoStartupPricing[\s\S]*?\/>/g,
        /<Price[\s\S]*?\/>/g
    ];

    for (const regex of pricingReplaces) {
        if (regex.test(content)) {
            content = content.replace(regex, '<DynamicPricingSection />');
            modified = true;
        }
    }

    // Replace various FAQ components
    const faqReplaces = [
        /<DoStartupFAQ[\s\S]*?\/>/g,
        /<Faq[\s\S]*?\/>/g,
        /<FAQAccordion[\s\S]*?\/>/g
    ];

    for (const regex of faqReplaces) {
        if (regex.test(content)) {
            // Special check: if it already has FAQAccordion, maybe don't replace or replace once
            content = content.replace(regex, '<FAQAccordion />');
            modified = true;
        }
    }

    // Final check for FAQ manually mapped
    if (content.includes('{FAQS.map') || content.includes('id="faq"')) {
        content = content.replace(/<section[^>]*id="faq"[\s\S]*?<\/section>/g, '<FAQAccordion />');
        modified = true;
    }

    if (modified) {
        // Clean up imports
        const importsToRemove = [
            'DoStartupPricing',
            'DoStartupFAQ',
            'AddQuestionModal',
            'PricingCards',
            'Price',
            'Faq'
        ];

        for (const item of importsToRemove) {
            const regex = new RegExp(`import ${item}(, { PricingPlan })? from ["']\\.\\.\\/components\\/${item}["'];?\\r?\\n?`, 'g');
            content = content.replace(regex, '');
        }

        // Add correct dynamic imports
        if (!content.includes('import DynamicPricingSection')) {
            content = content.replace(/(import (Navbar|Footer) from ["']\.\.\/components\/(Navbar|Footer)["'];?\r?\n)/, `$1${dynamicImports}\n`);
        }

        // Remove old constants
        content = content.replace(/const FAQS = \[[\s\S]*?\];/g, '');
        content = content.replace(/const PLANS = \[[\s\S]*?\];/g, '');
        content = content.replace(/const itrPlans = \[[\s\S]*?\];/g, '');
        content = content.replace(/const [a-zA-Z]+Plans: PricingPlan\[\] = \[[\s\S]*?\];/g, '');
        content = content.replace(/const [a-zA-Z]+Plans = \[[\s\S]*?\];/g, '');
        content = content.replace(/const pricingData = \[[\s\S]*?\];/g, '');
        content = content.replace(/const pricingData = \{[\s\S]*?\};/g, '');

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
