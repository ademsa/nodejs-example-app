const express = require('express');
const os = require('os');

const app = express();

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        "lang": "js",
        'hostname': os.hostname()
    }));
});

app.listen(3000, '0.0.0.0', () => {
    console.log('Listening for requests on 0.0.0.0:3000')
});