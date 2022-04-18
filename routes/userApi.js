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

router.get('/getAllUsers', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    userService.getAllUsers(req,res);
});

router.post('/getUser', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    userService.getUser(req,res);
});

router.put('/update', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    userService.update(req,res);
});

router.post('/delete', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    userService.deleteUser(req,res);
});

module.exports = router;
