var dbTxn = require('../db/dbTransaction');

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send({"view":"author index"})
});

router.get('/createTable', function(req, res, next) {
    dbTxn.createTable(req,res);
});

router.get('/create', function(req, res, next) {
    res.send({"view":"author create"})
});

module.exports = router;
