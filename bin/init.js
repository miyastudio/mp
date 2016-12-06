var db = require('./db');
db.Insert('tags', [
    { name: '情感' },
    { name: '职场' },
    { name: '健康' }
], function (docs) {
    console.log('docs');
});