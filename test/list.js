var db = require('../bin/db');
db.save('posts', {
    title: 'title',
    text: 'text'
}, function (docs) {
    console.log(docs);
});