const https = require('https');

https.get('https://www.shadowyn.id/assets/TradingPage-CfanYazt.js', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    // print out strings that look like UI text
    const textMatches = data.match(/`([^`]+)`/g) || [];
    const uiText = textMatches
        .map(s => s.replace(/`/g, ''))
        .filter(s => 
            s.length > 2 && 
            s.length < 50 && 
            !s.includes('path') && 
            !s.includes('d:') &&
            !s.includes('key:') &&
            !s.match(/^[a-z0-9]+$/) &&
            !s.includes('function') &&
            !s.includes('M') &&
            !s.includes('L') &&
            !s.includes('px') &&
            !s.includes('rem') &&
            !s.match(/^[0-9]+$/) &&
            !s.includes('16.65') &&
            !s.includes('2.5')
        );
    console.log(uiText.slice(100, 200).join('\n'));
  });
});
