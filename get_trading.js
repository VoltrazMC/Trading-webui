const fs = require('fs');
const https = require('https');

https.get('https://www.shadowyn.id/assets/TradingPage-CfanYazt.js', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    // Look for recognizable keywords to extract some data points
    const keywords = ["BTC", "Bitcoin", "ETH", "Trading", "Trade", "Chart"];
    let snippet = data.substring(0, 1000); // first bit
    console.log("FIRST PART:", snippet);
    
    // find any json looking things
    const matches = data.match(/\{[^}]*BTC[^}]*\}/g);
    if (matches) {
      console.log("MATCHES:", matches.slice(0, 5));
    }
  });
});
