const https = require('https');

https.get('https://www.shadowyn.id/assets/TradingPage-CfanYazt.js', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    // Extract JSX elements with their children text
    const textSnippets = data.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
    const snippets = data.match(/children:\[?"([^"]+)"\]?/g);
    if (snippets) {
        console.log(snippets.join('\n'));
    }
  });
});
