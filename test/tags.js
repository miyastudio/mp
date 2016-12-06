var db = require('../bin/db');
db.Find('tags', {}, function (docs) {
    console.log(docs);
});