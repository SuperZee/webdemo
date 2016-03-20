var router = require('express').Router();
var timer = require('./timer');
var user = require('./users');

//timer的路由
router
  .get('/timer', timer.get)
  .post('/timer', timer.post);

//user的路由
router
  .get('/user', user.get)
  .post('/user', user.post);

module.exports = router;
