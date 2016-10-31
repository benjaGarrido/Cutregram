/**
 * Created by benjamingarridobarreiro on 25/10/16.
 */
var app = angular.module('Cutregram',['ngRoute','angular-loading-bar']);

// Inyectamos en fase config los proveedores necesarios

app.config(['BackEndProvider','Properties',function (BackEndProvider,Properties) {

    BackEndProvider.establecerApiKey(Properties.apiKey);
    BackEndProvider.habilitarPeticionesCors();
    BackEndProvider.establecerUrlBackend(Properties.backendUrl);
}]);
app.config(['$routeProvider',function ($routeProvider) {
    // Definimos las distintas rutas que manejamos en la aplicación
    $routeProvider.when('/todosposts',{
        controller:'postColletionCtrl',
        templateUrl:'views/PostCollection.html',
        resolve:{
            PostCollection:['BackEnd',function (BackEnd) {
                return BackEnd.obtenerTodosPosts();
            }]
        }
    });
    $routeProvider.when('/misposts',{
        controller:'myPostColletionCtrl',
        templateUrl:'views/MyPostCollection.html',
        resolve:{
            MyPost:['BackEnd',function (BackEnd) {
                return BackEnd.obtenerMisPosts();
            }]
        }
    });
    $routeProvider.when('/detallepost/:idPost',{
        controller:'postDetailCtrl',
        templateUrl:'views/PostDetail.html',
        resolve:{
            Post:['BackEnd','$route',function (BackEnd,$route) {
                return BackEnd.obtenerDetallePost($route.current.params.idPost);
            }]
        }
    });
    $routeProvider.otherwise({
        redirectTo:'/todosposts'
    });
}]);