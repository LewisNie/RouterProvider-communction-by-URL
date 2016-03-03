app.controller('catController',["$scope","$routeParams",catCtrl]);
function catCtrl($scope,$routeParams){
    $scope.cat_id=$routeParams.cat_id;
}