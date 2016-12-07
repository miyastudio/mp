App.controller('list', function ($scope, posts, api) {
    api.post.get();
    $scope.posts = posts;
});