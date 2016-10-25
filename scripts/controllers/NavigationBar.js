/**
 * Created by benjamingarridobarreiro on 26/10/16.
 */
angular.module('Cutregram').controller('navigationBarCtrl',['$scope','$route',function ($scope,$route) {
    $scope.rutaEsTodos=function () {
        return $route.current && $route.current.$$route.originalPath ==='/todosposts';
    };
    $scope.rutaEsMios=function () {
        return $route.current && $route.current.$$route.originalPath ==='/misposts';
    };
}]);