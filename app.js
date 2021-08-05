require('dotenv').config();
const express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');
const app = express();
const privkey = process.env.privkey;
const fullchain = process.env.fullchain;

app.get('/', (req, res) => {
    res.send("Hello! Follow my twitter @CoderDan");
});

app.get('/forward', (req, res) => {
    res.redirect('co.uk.mysse://callback/login');
});

var httpServer = http.createServer(app);

httpServer.listen(80, () => {
    console.log('HTTP Server running on port 80');
});

const httpsServer = https.createServer({
    key: privkey ? fs.readFileSync(privkey) : null,
    cert: fullchain ? fs.readFileSync(fullchain) : null,
}, app);
  
httpsServer.listen(443, () => {
    console.log(`HTTPS server running on port 443`);
});