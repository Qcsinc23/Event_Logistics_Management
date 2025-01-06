const fs = require('fs');
const path = require('path');

function fixIconComponent(directory) {
  const files = fs.readdirSync(directory);
  
  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      fixIconComponent(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      let content = fs.readFileSync(filePath, 'utf8');
      if (content.includes('IconComponent={null}')) {
        content = content.replace(/IconComponent={null}/g, 'IconComponent={undefined}');
        fs.writeFileSync(filePath, content);
        console.log(`Fixed IconComponent in ${filePath}`);
      }
      // Also fix JSX.Element type
      if (content.includes('icon: JSX.Element')) {
        content = content.replace(/icon: JSX\.Element/, 'icon: React.ReactElement');
        content = content.includes('import React') ? content : 'import React from "react";\n' + content;
        fs.writeFileSync(filePath, content);
        console.log(`Fixed JSX.Element type in ${filePath}`);
      }
    }
  });
}

fixIconComponent('src');
