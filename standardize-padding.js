const fs = require('fs');
const path = require('path');

function walk(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const stat = fs.statSync(path.join(dir, file));
    if (stat.isDirectory()) {
      walk(path.join(dir, file), fileList);
    } else if (file.endsWith('.css')) {
      fileList.push(path.join(dir, file));
    }
  }
  return fileList;
}

const cssFiles = walk(path.join(__dirname, 'src'));

const sectionPaddingRegex = /padding:\s*(80px|100px|120px|140px)\s+0;/g;
const cardPaddingRegex = /padding:\s*(32px|40px|44px|36px|24px|28px)(\s+(20px|24px|28px|32px|36px|40px))?;/g;

let updatedFiles = 0;

for (const file of cssFiles) {
  let content = fs.readFileSync(file, 'utf-8');
  let originalContent = content;

  // Skip Navigation and globals.css since we handled/want to keep them as is (except section if there is any)
  if (file.includes('Navigation.module.css')) continue;

  // Replace section padding
  content = content.replace(sectionPaddingRegex, 'padding: var(--section-padding);');

  // Replace card padding (heuristics based on values > 20px)
  // We'll replace matching card paddings with var(--card-padding)
  content = content.replace(cardPaddingRegex, (match, p1, p2) => {
    // We only want to replace if it looks like a block padding for a card.
    // e.g. 40px 32px, 32px 24px, 32px
    return 'padding: var(--card-padding);';
  });

  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
    updatedFiles++;
  }
}

console.log(`Total files updated: ${updatedFiles}`);
