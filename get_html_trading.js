const https = require('https');

https.get('https://www.shadowyn.id/assets/TradingPage-CfanYazt.js', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    // regex for react create element or jsx runtime
    const matches = data.match(/children:[^,}]+/g);
    if (matches) {
        console.log(matches.map(m => m.substring(0, 100)).slice(0, 50).join('\n'));
    }
  });
});
