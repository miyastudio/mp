App.controller('post', function ($scope, menu, api) {
    api.menu.get();
    $scope.items = menu;
    $scope.post = {
        title: '',
        text: ''
    }
    $scope.save = function () {
        var post = $scope.post;
        api.post.save(post);
    }
});