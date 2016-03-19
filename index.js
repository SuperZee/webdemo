var express = require('express');
var app = express();

app.listen(3000, () => {
  console.log('server start');
});

app.get('/user', (req, res) => {
  console.log('hello user');
});
