const https = require('https');

https.get('https://www.shadowyn.id/assets/TradingPage-CfanYazt.js', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const textmatches = data.match(/"([^"]+)"/g) || [];
    const uniqueStrings = [...new Set(textmatches)].filter(s => s.length > 5 && s.length < 50);
    console.log(uniqueStrings.slice(0, 100).join('\n'));
  });
});
