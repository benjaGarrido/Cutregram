/**
 * Created by benjamingarridobarreiro on 30/10/16.
 */
angular.module('Cutregram').filter('SignatureFilter',['$filter',function ($filter) {
    return function (author, publishDate) {
        return 'Publicado por ' + author + ' en ' + $filter('date')(publishDate,'medium');
    };
}]);