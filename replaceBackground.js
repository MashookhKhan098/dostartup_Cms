const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'app');

function replaceAll(filePath) {
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
        const files = fs.readdirSync(filePath);
        for (const file of files) {
            replaceAll(path.join(filePath, file));
        }
    } else if (stat.isFile() && (filePath.endsWith('.tsx') || filePath.endsWith('.jsx') || filePath.endsWith('.js'))) {
        let content = fs.readFileSync(filePath, 'utf8');
        if (content.includes('bg-[#F4F6FA]')) {
            content = content.replace(/bg-\[#F4F6FA\]/g, 'bg-white');
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated: ${filePath}`);
        }
    }
}

replaceAll(directoryPath);
console.log("Done");
