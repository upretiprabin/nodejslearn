var userService = require('../mongodb/services/userService');

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.send({"view":"user index"})
});

router.post('/create', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    userService.create(req,res);
});

module.exports = router;
