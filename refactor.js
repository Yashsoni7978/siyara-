const fs = require('fs');
const path = require('path');

const replacements = {
  '--midnight': '--bg-primary',
  '--deep-forest': '--bg-secondary',
  '--rich-green': '--bg-tertiary',
  '--forest-mid': '--bg-tertiary',
  '--ivory-warm': '--text-secondary',
  '--ivory': '--text-primary',
  '--ink': '--text-inverse',
  '--muted-dark': '--text-muted-dark',
  '--muted': '--text-muted',
  '--gold-light': '--accent-secondary',
  '--gold-shimmer': '--accent-shimmer',
  '--gold-line': '--border-color',
  '--gold-glow': '--border-glow',
  '--gold': '--accent-primary'
};

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.css') || file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./src');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  for (const [oldVar, newVar] of Object.entries(replacements)) {
    // Replace variable usage
    content = content.split(oldVar).join(newVar);
  }
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated ' + file);
  }
});
