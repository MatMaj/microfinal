var express = require('express');
var router = express.Router();

/* GET proste powitanie w mikroserwisie. */
router.get('/saywitam', function(req, res, next) {
    res.send('Witam w mikroserwisie');
});

module.exports = router;
