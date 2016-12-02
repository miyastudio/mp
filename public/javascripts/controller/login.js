App.controller('login', function ($scope, api) {
    $scope.user = {
        name: '',
        pass: ''
    }
    $scope.login = function () {
        var _self = this;
        api.user.login(_self.user);
    }
});