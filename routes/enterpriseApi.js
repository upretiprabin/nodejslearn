var enterpriseService = require('../mongodb/services/enterpriseService');

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.send({"view":"enterprise index"})
});

router.post('/create', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    enterpriseService.create(req,res);
});

module.exports = router;
