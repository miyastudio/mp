App.factory('api', function ($http, menu) {
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
        user: {
            login: function (user) {
                console.log('user', user);
                $http.post(base_url + 'user/login', user).then(function () {

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