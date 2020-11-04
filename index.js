// const express = require('express');
// const app = express();
// const path = require('path');
// const port = process.env.PORT || 5000;

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '/HomePage.html'));
// });

// app.listen(port, () => console.log(`test listening on port ${port}!`));

const express = require('express'); 
const app = express();
app.use(express.static('public'));
app.get('/', (req, res) => {
     res.sendFile('HomePage.html', {root: __dirname + '/public/'});
});
app.listen(process.env.PORT || 5000)