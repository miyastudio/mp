var express = require('express');
var router = express.Router();
var db = require('../bin/db');
var role = require('../middleware/session');

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

router.get('/user/posts', role.api.user, function (req, res, next) {
    db.Find('posts', { author: req.session.user.name }, function (docs) {
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
        if (docs.length > 0) {
            req.session.user = docs[0];
        }
        res.json(json);
    });
});

router.post('/post', role.api.user, function (req, res, next) {
    var json = {
        title: req.body.title,
        text: req.body.text,
        author: req.session.user.name,
        status: 0,// 0 待审核 1 已通过 -1 审核未通过 2 已推荐 -2 已下线 -3 已经删除
        pv: 0,
        uv: 0
    };
    db.save('posts', json, function (docs) {
        var json = {
            error: 0,
            results: docs
        }
        res.json(json);
    });

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
