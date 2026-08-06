const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./lh-test.json', 'utf8'));
console.log(JSON.stringify(data.audits['lcp-breakdown-insight'] || {}, null, 2));
