const https = require('https');

const url = 'https://cms.dostartup.in/api/content/items/testing';
const token = 'API-217623942d11b9d6bc4576ea8b24b3809bea14eb';

https.get(`${url}?token=${token}`, (res) => {
  console.log('Status Code:', res.statusCode);
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    console.log('Response Length:', data.length);
    try {
      const json = JSON.parse(data);
      console.log('Is Array:', Array.isArray(json));
      if (Array.isArray(json)) console.log('First Item Category:', json[0]?.category);
    } catch (e) {
      console.log('Parse Error');
    }
  });
}).on('error', (err) => {
  console.log('Error:', err.message);
});
