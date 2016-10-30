/**
 * Created by benjamingarridobarreiro on 25/10/16.
 */
angular.module('Cutregram').controller('myPostColletionCtrl',['$scope','MyPost','BackEnd',function ($scope,MyPost,BackEnd) {
    // Autenticarse primero cutregram-sp.appspot.com/webapp/index.html

    $scope.posts=MyPost.data;

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
}]);