/**
 * Created by benjamingarridobarreiro on 31/10/16.
 */
angular.module('Cutregram').controller('postDetailCtrl',['$scope','Post',function ($scope,Post) {
    $scope.post = Post.data;
    // Volver atrás en el navegador
    $scope.volver = function () {
        history.back();
    };
}]);