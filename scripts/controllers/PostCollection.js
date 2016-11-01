/**
 * Created by benjamingarridobarreiro on 25/10/16.
 */
angular.module('Cutregram').controller('postColletionCtrl',['$scope','PostCollection','$location',function ($scope,PostCollection,$location) {
    // Autenticarse primero cutregram-sp.appspot.com/webapp/index.html
    var posts = PostCollection.data;

    $scope.paginator = {
        'pageChanged' : function () {
            var fistElement = ($scope.paginator.actualPage - 1) * $scope.paginator.elementsPerPage;
            var lastElement = fistElement + $scope.paginator.elementsPerPage;
            $scope.posts = posts.slice(fistElement,lastElement);
        },
        'actualPage' : 1,
        'totalElements' : posts.length,
        'elementsPerPage' : 10
    };
    $scope.paginator.pageChanged();

    $scope.navegate = function(idPost){
        $location.path('/detallepost/' + idPost);
    };
}]);