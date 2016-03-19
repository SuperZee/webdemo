var express = require('express');
var app = express();

app.listen(3000, () => {
    console.log('server start');
});

app.get('/', function (req, res) {
  res.end('Hello Node');
});
