/**
 * Created by benjamingarridobarreiro on 25/10/16.
 */
angular.module('Cutregram').controller('postColletionCtrl',['$scope','PostCollection',function ($scope,PostCollection) {
    // Autenticarse primero cutregram-sp.appspot.com/webapp/index.html

    $scope.posts=PostCollection.data;


    // Hacemos la petición de post al servidor
    /*$http.get('http://cutregram-sp.appspot.com/api/1/posts').then(
        // Petición OK
        function (response) {
            $scope.posts=response.data;
        },
        // Petición KO
        function (err) {
        }
    );*/
}]);