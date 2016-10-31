/**
 * Created by benjamingarridobarreiro on 25/10/16.
 */
angular.module('Cutregram').controller('postColletionCtrl',['$scope','PostCollection','$location',function ($scope,PostCollection,$location) {
    // Autenticarse primero cutregram-sp.appspot.com/webapp/index.html
    $scope.posts = PostCollection.data;
    $scope.navegate = function(idPost){
        $location.path('/detallepost/' + idPost);
    };
}]);