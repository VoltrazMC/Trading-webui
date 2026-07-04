const https = require('https');

https.get('https://www.shadowyn.id/assets/TradingPage-CfanYazt.js', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    // print out objects that look like they have label or title
    const matches = data.match(/\{label:"[^"]*",value:"[^"]*"\}/g) || data.match(/label:`[^`]+`/g) || data.match(/>[^<]+</g);
    if (matches) {
        console.log(matches.slice(0, 50).join('\n'));
    }
  });
});
