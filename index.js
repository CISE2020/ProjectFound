const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/HomePage.html'));
});

app.listen(port, () => console.log(`test listening on port ${port}!`));