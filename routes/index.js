var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'wemedia', controllers: ['menu'] });
});
router.get('/login', function (req, res, next) {
  res.render('login', { title: 'login', controllers: ['login'] });
});
router.get('/reg', function (req, res, next) {
  res.render('reg', { title: 'reg', controllers: ['reg'] });
});

module.exports = router;
