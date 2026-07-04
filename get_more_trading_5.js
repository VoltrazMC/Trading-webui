const https = require('https');

https.get('https://www.shadowyn.id/assets/TradingPage-CfanYazt.js', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const texts = data.match(/>([^<]{3,30})</g);
    if (texts) {
        console.log(texts.map(t => t.substring(1, t.length-1)).filter(t => !t.match(/^[0-9A-Za-z]+$/)).slice(0, 50).join('\n'));
    }
  });
});
