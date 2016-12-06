var express = require('express');
var router = express.Router();
var role = require('../middleware/session');

/* GET home page. */
router.get('/', function (req, res, next) {
  var user = req.session.user;
  res.render('index', { title: 'wemedia', user: user, controllers: ['menu'] });
});
router.get('/mp', role.page.user, function (req, res, next) {
  var user = req.session.user;
  res.render('mp', { title: 'mp', user: user, controllers: ['menu'] });
});
router.get('/mp/post', role.page.user, function (req, res, next) {
  var user = req.session.user;
  res.render('mp/post', { title: 'post', user: user, controllers: ['menu','mp_post'] });
});
router.get('/login', function (req, res, next) {
  res.render('login', { title: 'login', controllers: ['login'] });
});
router.get('/reg', function (req, res, next) {
  res.render('reg', { title: 'reg', controllers: ['reg'] });
});

module.exports = router;
