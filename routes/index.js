var express = require('express');
var router = express.Router();
var role = require('../middleware/session');
var db = require('../bin/db');
ObjectID = require('mongodb').ObjectID;
/* GET home page. */
router.get('/', function(req, res, next) {
    var user = req.session.user;
    res.render('index', { title: 'wemedia', user: user, controllers: ['menu'] });
});
router.get('/post/:id', function(req, res, next) {
    var user = req.session.user;
    var id = req.params.id;
    id = ObjectID(id);
    db.Find('posts', { _id: id }, function(docs) {
        console.log(docs);
        var post = docs[0];
        var title = post.title;
        res.render('post', { title: title, post: post, user: user, controllers: ['menu'] });
    });
});
router.get('/mp', role.page.user, function(req, res, next) {
    var user = req.session.user;
    res.render('mp', { title: 'mp', user: user, controllers: ['menu'] });
});
router.get('/mp/post', role.page.user, function(req, res, next) {
    var user = req.session.user;
    res.render('mp/post', { title: 'post', user: user, controllers: ['menu', 'mp_post'] });
});
router.get('/mp/list', role.page.user, function(req, res, next) {
    var user = req.session.user;
    res.render('mp/list', { title: 'list', user: user, controllers: ['menu', 'mp_list'] });
});
router.get('/login', function(req, res, next) {
    var user = req.session.user;
    res.render('login', { title: '自媒体登录', user: user, controllers: ['login'] });
});
router.get('/logout', function(req, res, next) {
    req.session.user = {
        name: '游客',
        role: 'guest'
    };
    var user = req.session.user;
    res.render('logout', { title: 'logout', user: user, controllers: ['logout'] });
});
router.get('/reg', function(req, res, next) {
    res.render('reg', { title: 'reg', controllers: ['reg'] });
});

module.exports = router;
