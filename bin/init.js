var db = require('./db');
db.save('config',{
    title:'semioe订阅中心'
}, function (docs) {
    console.log('docs');
});
db.Insert('tags', [
    { name: '情感' },
    { name: '职场' },
    { name: '健康' }
], function (docs) {
    console.log('docs');
});
db.save('users',{
    name:'admin',
    pass:'123456',
    role:['admin','user']
}, function (docs) {
    console.log('docs');
});