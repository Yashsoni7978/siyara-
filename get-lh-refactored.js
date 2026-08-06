const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./lh-refactored.json', 'utf8'));

// Performance
const perf = data.categories.performance.score * 100;
const lcp = data.audits['largest-contentful-paint'].displayValue;
const tbt = data.audits['total-blocking-time'].displayValue;
const inp = data.audits['interactive'] ? data.audits['interactive'].displayValue : 'N/A';
const size = (data.audits['total-byte-weight'].numericValue / 1024).toFixed(2);
console.log('== Lighthouse Metrics ==');
console.log(`Performance: ${perf}`);
console.log(`LCP: ${lcp}`);
console.log(`TBT: ${tbt}`);
console.log(`INP/Interactive: ${inp}`);
console.log(`Size: ${size} KB`);

// Element Render Delay
console.log('\n== LCP Breakdown ==');
const breakdown = data.audits['lcp-breakdown-insight'] || data.audits['lcp-discovery-insight'];
if (breakdown && breakdown.details && breakdown.details.items) {
  breakdown.details.items.forEach(item => {
    if (item.type === 'table') {
      item.items.forEach(row => {
        if (row.subpart === 'elementRenderDelay') {
          console.log(`Element Render Delay: ${row.duration.toFixed(2)}ms`);
        }
      });
    }
  });
}

// Long Tasks
console.log('\n== Main Thread Tasks (>50ms) ==');
const longTasks = data.audits['main-thread-tasks'];
let longTaskCount = 0;
if (longTasks && longTasks.details && longTasks.details.items) {
  longTasks.details.items.filter(t => t.duration >= 50).forEach(task => {
    longTaskCount++;
    console.log(`StartTime: ${task.startTime.toFixed(2)}ms, Duration: ${task.duration.toFixed(2)}ms`);
  });
}
console.log(`Total Long Tasks: ${longTaskCount}`);
