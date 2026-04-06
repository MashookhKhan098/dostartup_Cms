const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
    const fullPath = path.resolve(__dirname, filePath);
    if (!fs.existsSync(fullPath)) {
        console.log('SKIP (not found): ' + filePath);
        return;
    }

    let content = fs.readFileSync(fullPath, 'utf8');
    let changed = false;

    // Step 1: Add SidebarCart import if missing (right after the Navbar import line)
    if (!content.includes('SidebarCart')) {
        const navbarImport = 'import Navbar from "../components/Navbar";';
        if (content.includes(navbarImport)) {
            content = content.replace(
                navbarImport,
                navbarImport + '\nimport SidebarCart from "../components/SidebarCart";'
            );
            changed = true;
            console.log('  + Added SidebarCart import');
        }
    }

    // Step 2: Add Footer import if missing (right after SidebarCart import or Navbar import)
    if (!content.includes('import Footer from "../components/Footer"')) {
        // Check if there's a LOCAL Footer definition (const Footer = ...) - if so, don't add import
        const hasLocalFooter = /const Footer[\s:]/m.test(content);
        if (!hasLocalFooter) {
            if (content.includes('import SidebarCart from "../components/SidebarCart";')) {
                content = content.replace(
                    'import SidebarCart from "../components/SidebarCart";',
                    'import SidebarCart from "../components/SidebarCart";\nimport Footer from "../components/Footer";'
                );
                changed = true;
                console.log('  + Added Footer import');
            }
        }
    }

    // Step 3: Replace the legacy cart widget INSIDE <aside> tags with <SidebarCart />
    // We look for the pattern: cart icon img + "Your cart is empty" + form fields
    // and replace just that block with <SidebarCart />
    const cartWidgetPattern = /(<aside[^>]*>)\s*(?:\{\/\*.*?\*\/\}\s*)?<div[^>]*(?:shadow-md|shadow-lg)[^>]*>\s*<div[^>]*text-center[^>]*>\s*<img[\s\S]*?Your cart is empty[\s\S]*?<\/form>\s*<\/div>/g;
    
    if (cartWidgetPattern.test(content)) {
        content = content.replace(cartWidgetPattern, (match, asideTag) => {
            return asideTag + '\n          <SidebarCart />';
        });
        changed = true;
        console.log('  + Replaced cart widget with SidebarCart');
    }

    if (changed) {
        fs.writeFileSync(fullPath, content);
        console.log('FIXED: ' + filePath);
    } else {
        console.log('OK (no changes needed): ' + filePath);
    }
}

const files = [
    'app/aoa-amendment/page.tsx',
    'app/authorized-capital-increase/page.tsx',
    'app/registered-office-change/page.tsx',
    'app/director-change/page.tsx',
    'app/remove-director/page.tsx',
    'app/moa-amendment/page.tsx',
    'app/llp-compliance/page.tsx',
    'app/opc-compliance/page.tsx',
    'app/adt-1-filing/page.tsx',
    'app/share-transfer/page.tsx',
    'app/name-change-company/page.tsx',
    'app/dpt-3-filing/page.tsx',
    'app/winding-up-llp/page.tsx',
    'app/din-ekyc-filing/page.tsx',
];

console.log('=== Targeted SidebarCart & Footer Integration ===\n');
files.forEach(f => {
    console.log('Processing: ' + f);
    fixFile(f);
    console.log('');
});
console.log('Done.');
