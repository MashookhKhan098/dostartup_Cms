const fs = require('fs');
const path = require('path');

function processDir(dir) {
    try {
        const files = fs.readdirSync(dir);
        for (const file of files) {
            if (file === 'node_modules' || file === '.next' || file === '.git') continue;
            const fullPath = path.join(dir, file);
            let stat;
            try {
                stat = fs.statSync(fullPath);
            } catch (e) { continue; }
            if (stat.isDirectory()) {
                processDir(fullPath);
            } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
                let content = fs.readFileSync(fullPath, 'utf8');
                let original = content;

                content = content.replace(/bg-slate-50/g, 'bg-white');
                content = content.replace(/bg-gray-50/g, 'bg-white');
                content = content.replace(/bg-slate-100/g, 'bg-white');
                content = content.replace(/bg-gray-100/g, 'bg-white');
                content = content.replace(/bg-\[\#F4F6FA\]/g, 'bg-white');
                content = content.replace(/bg-\[\#f5f7ff\]/g, 'bg-white');
                content = content.replace(/bg-\[\#f8fafc\]/g, 'bg-white');
                content = content.replace(/bg-\[\#f1f5f9\]/g, 'bg-white');
                content = content.replace(/bg-\[\#F8FAFC\]/g, 'bg-white');
                content = content.replace(/bg-\[\#F1F5F9\]/g, 'bg-white');
                
                content = content.replace(/#f8fafc/gi, '#ffffff');
                content = content.replace(/#f1f5f9/gi, '#ffffff');
                content = content.replace(/#F4F6FA/gi, '#ffffff');
                content = content.replace(/#f5f7ff/gi, '#ffffff');

                if (content !== original) {
                    fs.writeFileSync(fullPath, content);
                    console.log('Updated ' + fullPath);
                }
            }
        }
    } catch (e) {}
}

processDir(path.join(__dirname, 'app'));
