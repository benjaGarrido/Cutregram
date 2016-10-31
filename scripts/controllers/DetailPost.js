/**
 * Created by benjamingarridobarreiro on 31/10/16.
 */
angular.module('Cutregram').controller('detailPostCtrl',['$scope','Post',function ($scope,Post) {
    $scope.post = Post.data;
}]);