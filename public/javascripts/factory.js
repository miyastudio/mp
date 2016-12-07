App.factory('api', function ($http, menu, posts) {
    var base_url = '/api/';

    //装载器
    function load(obj, data) {
        data.map(function (d) {
            obj.push(d);
        });
    }

    //清空
    function init(obj) {
        obj.splice(0, obj.length);
    }

    var api = {
        menu: {
            get: function () {
                $http.get(base_url + 'menu').then(function (json) {
                    console.log('json', json);
                    init(menu);
                    load(menu, json.data.results);

                }, function (json) {

                });
            }
        },
        post: {
            save: function (post, cb) {
                //console.log(post);
                $http.post(base_url + 'post', post).then(function (json) {
                    console.log(json);
                    cb(json.data.results.insertedIds[0]);
                }, function () {

                });
            },
            up: function (id) {

            },
            del: function (id) {

            },
            get: function (id) {
                $http.get(base_url + 'user/posts').then(function (json) {
                    console.log('json', json);
                    init(posts);
                    load(posts, json.data.results);
                }, function (json) {

                });
            }
        },
        user: {
            login: function (user) {
                console.log('user', user);
                $http.post(base_url + 'user/login', user).then(function (json) {
                    console.log(json);
                    if (json.data.results.length > 0) {
                        console.log('login success !');
                        location.href = '/mp';
                    }
                }, function () {

                });
            },
            reg: function (user) {
                console.log('user', user);
                $http.post(base_url + 'user/new', user).then(function () {

                }, function () {

                });
            }
        }
    }
    return api;
});

App.factory('menu', function () {
    return [];
});
App.factory('posts', function () {
    return [];
});