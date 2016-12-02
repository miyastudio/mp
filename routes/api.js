var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});


router.get('/menu', function (req, res, next) {
    var json = {
        error: 0,
        results: [
            '人工智能',
            '医疗健康',
            '饮食养生'
        ]
    }
    res.json(json);
});

//login
router.post('/user/login', function (req, res, next) {
    var json = {
        error: 0,
        results: {
            user: req.body.name,
            pass: req.body.pass
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
