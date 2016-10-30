/**
 * Created by benjamingarridobarreiro on 25/10/16.
 */
angular.module('Cutregram').controller('postColletionCtrl',['$scope','PostCollection',function ($scope,PostCollection) {
    // Autenticarse primero cutregram-sp.appspot.com/webapp/index.html
    $scope.posts = PostCollection.data;
}]);