var express = require('express');
var router = express.Router();
var db = require('../bin/db');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});


router.get('/menu', function (req, res, next) {
    db.Find('tags', {}, function (docs) {
        var json = {
            error: 0,
            results: docs
        }
        res.json(json);
    });
});

//login
router.post('/user/login', function (req, res, next) {
    var user = req.body.name;
    var pass = req.body.pass;
    db.Find('users', {
        name: user,
        pass: pass
    }, function (docs) {
        var json = {
            error: 0,
            results: docs
        }
        if(docs.length>0){
            req.session.user=docs[0];
        }
        res.json(json);
    });
});

router.post('/post', function (req, res, next) {
    var json = {
        error: 0,
        results: {
            user: req.body.title,
            pass: req.body.text
        }
    }
    res.json(json);
});
//reg
router.post('/user/add', function (req, res, next) {
    var json = {
        error: 0,
        results: {
            user: req.body.name,
            pass: req.body.pass
        }
    }
    res.json(json);
});

module.exports = router;
