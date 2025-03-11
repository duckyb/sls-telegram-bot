import https from 'https';
import config from '../configuration';

const { token } = config.production;

https.get(`https://api.telegram.org/bot${token}/deleteWebhook`, (res) => {
    let data = '';
    res.on('data', (chunk) => (data += chunk));
    res.on('end', () => {
        console.log(JSON.parse(data).description);
    }).on('error', (e: Error) => console.log('Error: ' + e.message));
});
