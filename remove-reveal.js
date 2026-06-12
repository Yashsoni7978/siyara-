const fs = require('fs');
const path = require('path');

function removeReveal(filePath) {
  let code = fs.readFileSync(filePath, 'utf8');

  // Remove import
  code = code.replace(/import\s+\{\s*Reveal\s*\}\s+from\s+['"]@\/components\/ui\/Reveal['"];?[\r\n]*/, '');

  const revealOpenRe = /<Reveal([^>]*)>/g;
  const revealCloseRe = /<\/Reveal>/g;
  
  let openMatches = [...code.matchAll(revealOpenRe)];
  let closeMatches = [...code.matchAll(revealCloseRe)];
  
  let allMatches = [...openMatches, ...closeMatches].sort((a, b) => a.index - b.index);
  
  let tagStack = [];
  let result = '';
  let lastIndex = 0;

  for (let m of allMatches) {
    result += code.substring(lastIndex, m.index);
    
    if (m[0].startsWith('<Reveal')) {
      let attrs = m[1];
      let tag = 'div';
      const asMatch = attrs.match(/as=["']([^"']+)["']/);
      if (asMatch) {
        tag = asMatch[1];
        attrs = attrs.replace(asMatch[0], '');
      }
      attrs = attrs.replace(/delay=\{[^}]+\}/g, '');
      attrs = attrs.replace(/\s+/g, ' ');
      if (attrs.endsWith(' ')) attrs = attrs.slice(0, -1);
      
      result += '<' + tag + (attrs ? attrs : '') + '>';
      tagStack.push(tag);
    } else {
      let tag = tagStack.pop() || 'div';
      result += '</' + tag + '>';
    }
    lastIndex = m.index + m[0].length;
  }
  
  result += code.substring(lastIndex);

  fs.writeFileSync(filePath, result, 'utf8');
  console.log('Processed', filePath);
}

const files = [
  'src/app/portfolio/page.tsx',
  'src/app/pricing/page.tsx',
  'src/app/privacy/page.tsx'
];

files.forEach(f => {
  const p = path.join(__dirname, f);
  if (fs.existsSync(p)) {
      removeReveal(p);
  }
});
