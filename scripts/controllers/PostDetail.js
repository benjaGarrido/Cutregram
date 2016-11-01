/**
 * Created by benjamingarridobarreiro on 31/10/16.
 */
angular.module('Cutregram').controller('postDetailCtrl',['$scope','Post','BackEnd',function ($scope,Post,BackEnd) {
    $scope.post = Post.data;
    // Volver atrás en el navegador
    $scope.volver = function () {
        history.back();
    };
    //Enviamos al servidor un nuevo comentario
    $scope.enviarComentario = function () {
        debugger;
        BackEnd.enviarComentario($scope.post.id,$scope.comment).then(
            function (response) {
                $scope.post.comments.unshift(response.data);
            },function (err) {
            }
        );
    };
}]);