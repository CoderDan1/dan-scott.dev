const express = require('express');

const app = express();

const port = 80;

app.get('/', (req, res) => {
    res.send("Hello! Follow my twitter @CoderDan");
});

app.get('/forward', (req, res) => {
    res.redirect('co.uk.mysse://callback/login');
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
})