App.controller('post', function ($scope, menu, api) {
    api.menu.get();
    $scope.items = menu;
    $scope.init_post = function () {
        $scope.post = {
            title: '',
            text: ''
        }
    }
    $scope.init_post();
    $scope.save = function () {
        var post = $scope.post;
        api.post.save(post, function (id) {
            console.log('_id', id);
            $scope.init_post();
        });
    }
});