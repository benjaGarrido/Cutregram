/**
 * Created by benjamingarridobarreiro on 25/10/16.
 */
angular.module('Cutregram').controller('postColletionCtrl',['$scope','PostCollection','BackEnd',function ($scope,PostCollection,BackEnd) {
    // Autenticarse primero cutregram-sp.appspot.com/webapp/index.html

    $scope.posts = PostCollection.data;
    $scope.meGusta = function (post) {
        BackEnd.sumarMeGusta(post.id).then(
            function (response) {
                post.likes++;
            }
        );
    };
    $scope.noMeGusta = function (post) {
        BackEnd.sumarNoMeGusta(post.id).then(
            function (response) {
                post.dislikes++;
            }
        );
    };

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