const https = require('https');

https.get('https://www.shadowyn.id/assets/TradingPage-CfanYazt.js', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    // print out strings that look like UI text
    const textMatches = data.match(/"([^"]+)"/g) || [];
    const uiText = textMatches
        .map(s => s.replace(/"/g, ''))
        .filter(s => 
            s.length > 3 && 
            s.length < 50 && 
            !s.includes('js') &&
            !s.includes('flex') &&
            !s.includes('text') &&
            !s.includes('bg-') &&
            !s.includes('border') &&
            !s.includes('hover:') &&
            !s.includes('w-') &&
            !s.includes('h-') &&
            !s.includes('justify') &&
            !s.includes('items') &&
            !s.includes('rounded') &&
            !s.includes('transition') &&
            !s.includes('absolute') &&
            !s.includes('relative')
        );
    console.log(uiText.slice(0, 100).join('\n'));
  });
});
