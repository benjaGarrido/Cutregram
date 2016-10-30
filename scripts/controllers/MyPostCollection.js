/**
 * Created by benjamingarridobarreiro on 25/10/16.
 */
angular.module('Cutregram').controller('myPostColletionCtrl',['$scope','MyPost',function ($scope,MyPost) {
    // Autenticarse primero cutregram-sp.appspot.com/webapp/index.html
    $scope.posts=MyPost.data;
}]);