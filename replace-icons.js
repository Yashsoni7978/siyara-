const fs = require('fs');
const path = require('path');

const files = [
  'src/app/page.tsx',
  'src/app/services/page.tsx',
  'src/app/pricing/page.tsx',
  'src/app/portfolio/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/blog/page.tsx'
];

files.forEach(file => {
  const filePath = path.join('c:/Users/Lenovo/Downloads/siyara-innovations', file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Add import if not present
  if (!content.includes('import { IconMap }')) {
    // Find last import
    const lines = content.split('\n');
    let lastImportIdx = -1;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith('import ')) {
        lastImportIdx = i;
      }
    }
    if (lastImportIdx !== -1) {
      lines.splice(lastImportIdx + 1, 0, "import { IconMap } from '@/components/ui/Icons'");
      content = lines.join('\n');
    } else {
      content = "import { IconMap } from '@/components/ui/Icons'\n" + content;
    }
  }

  // Replace {stat.icon} with {IconMap[stat.icon]}
  content = content.replace(/\{stat\.icon\}/g, '{IconMap[stat.icon]}');
  // Replace {svc.icon} with {IconMap[svc.icon]}
  content = content.replace(/\{svc\.icon\}/g, '{IconMap[svc.icon]}');
  // Replace {stat.logo} with {IconMap[stat.logo]} (if any)
  content = content.replace(/\{stat\.logo\}/g, '{IconMap[stat.logo]}');

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Updated ${file}`);
});
