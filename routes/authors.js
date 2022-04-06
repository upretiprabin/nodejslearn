var dbTxn = require('../db/dbTransaction');

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.send({"view":"author index"})
});

router.get('/createTable', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    dbTxn.createTable(req,res);
});

router.get('/load', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    dbTxn.loadSampleData(req,res);
});

router.put('/add', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    dbTxn.addItem(req,res);
});

router.post('/get', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    dbTxn.getItem(req,res);
});

router.get('/scan', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    dbTxn.scan(req,res);
});

router.post('/updateItem', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    dbTxn.updateItem(req,res);
});

router.post('/delete', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    dbTxn.deleteItem(req,res);
});

module.exports = router;
