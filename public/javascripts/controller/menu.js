App.controller('menu', function ($scope, menu, api) {
    api.menu.get();
    $scope.items = menu;
});