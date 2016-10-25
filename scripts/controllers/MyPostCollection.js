/**
 * Created by benjamingarridobarreiro on 25/10/16.
 */
angular.module('Cutregram').controller('myPostColletionCtrl',['$scope','$http',function ($scope,$http) {
    // Autenticarse primero cutregram-sp.appspot.com/webapp/index.html

    // Hacemos la petición de mis post al servidor
    $http.get('http://cutregram-sp.appspot.com/api/1/posts/me').then(
        // Petición OK
        function (response) {
            $scope.posts=response.data;
        },
        // Petición KO
        function (err) {
        }
    );
    $http.post('http://cutregram-sp.appspot.com/api/1/posts',{});
}]);