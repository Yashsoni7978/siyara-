const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./lh-after.json', 'utf8'));
console.log("Has artifacts?", !!data.artifacts);
if (data.artifacts) {
  console.log("Has Trace?", !!data.artifacts.Trace);
}
