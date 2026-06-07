const fs = require('fs');
const path = require('path');

const targets = [
  'about',
  'blog',
  'case-studies',
  'contact',
  'faq',
  'industries',
  'portfolio',
  'pricing',
  'privacy',
  'process',
  'results',
  'services',
  'showcase',
  'terms'
];

const appDir = path.join(__dirname, 'src', 'app');

targets.forEach(target => {
  const targetPath = path.join(appDir, target);
  if (fs.existsSync(targetPath)) {
    console.log(`Deleting: ${targetPath}`);
    fs.rmSync(targetPath, { recursive: true, force: true });
  } else {
    console.log(`Not found: ${targetPath}`);
  }
});
console.log('Cleanup completed successfully!');
