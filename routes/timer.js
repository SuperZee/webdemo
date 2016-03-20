var express = require('express');
var router = express.Router();

// POST
router.get('/timer', (req, res, next) => {
    console.log('timer');
    res.render('index', {title: ' TIMER', name: 'SuperZee'});
});

module.exports = router;