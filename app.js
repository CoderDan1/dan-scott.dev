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
    res.redirect('co.uk.mysse://callback/login#code=73d02c4b9eae9c06cc05479e4d1dcc0afb35c236948e53f3ad8cb42c910ff5e0&id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjFxc2pGcUVydFUyMkxLVXFxWWZwYlNLSzVlNCIsInR5cCI6IkpXVCIsIng1dCI6IjFxc2pGcUVydFUyMkxLVXFxWWZwYlNLSzVlNCJ9.eyJuYmYiOjE2MjgxNzM4ODQsImV4cCI6MTYyODE3NDE4NCwiaXNzIjoiaHR0cHM6Ly9pZGVudGl0eS1kZXZzdHViLmRldi5kaWdpdGFsc3NlLmNsb3VkIiwiYXVkIjoibXlzc2Vtb2JpbGVqd3QiLCJub25jZSI6IjE4Njc1N2E3YmVmNDQ3ZWI4OWMwYjc1ZTZiYWVkMjdiIiwiaWF0IjoxNjI4MTczODg0LCJjX2hhc2giOiJLOEZkSlJkS3FsQjNGUnBtbGhFd0RnIiwic2lkIjoiNzllODY1Y2IzYjYzMjc5MTI4YjY3YjgyYzk1ZmFmZDciLCJzdWIiOiJ7NzNkYzQ2MmQtOTFiOS00YmY0LTlmZjAtODRiMTEzMzBlOTY5fSIsImF1dGhfdGltZSI6MTYyODE3Mzg4NCwiaWRwIjoibG9jYWwiLCJhbXIiOlsicHdkIl19.Whv-Kx2JTe-5uTUjOMWj-gEbssYJPA7TCTpCkzdddfBChG203YUbeaV6BKKaxK-ktDseCihc6LsCe0JhwhOwFkaNgfSdEMwERrW6Vs_whsOUVRA0AZPMrIMUGMA9N4AOvcZ92qohZRSlxa1C4kKqxHcsyWi1c9JqmQoNdsOaqRkHaljxgDDToDg24TAU5WEXGYyWVvK6sFzN8qFCTcUFKMDM9cXwwiOJXv8WHkk8PpC4_1pabLrXRxv75CgdA7RoVN1pZwSnTwW1j6zuZqjnMFRS1fthyNYvYw8tslyjEfaSaINwuKgDcPY4oo-_0mTM4_-vRJwq2tr7usIjSE1Fag&scope=openid%20profile%20email%20phone%20customer.account%20customer-info-api%20offline_access&state=37c8fc3aa16945aea7d22b99f8badee6&session_state=jWW6xXHwLmSD4A2xkOrCwlW_TH7E5WrwQp1dwnd07A0.fc70f911abd1004eb0242721866eaf1f');
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