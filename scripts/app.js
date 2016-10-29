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
            MyPost:['$http',function ($http) {
                return BackEnd.obtenerMisPosts();
            }]
        }
    });
    $routeProvider.otherwise({
        redirectTo:'/todosposts'
    });
}]);