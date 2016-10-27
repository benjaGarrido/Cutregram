/**
 * Created by benjamingarridobarreiro on 25/10/16.
 */
var app = angular.module('Cutregram',['ngRoute']);

// Inyectamos en fase config los proveedores necesarios

app.config(['$httpProvider','Properties',function ($httpProvider,Properties) {
    // Configuramos el servicio $http para que envie la cabcera necesaria
    $httpProvider.defaults.headers.common = {
        'X-Cutregram-Api-Key':Properties.apiKey
    };

    // Configuramos las cabeceras por defecto para evitar problemas de CORS.
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};
}]);
app.config(['$routeProvider','Properties',function ($routeProvider,Properties) {
    // Definimos las distintas rutas que manejamos en la aplicación
    $routeProvider.when('/todosposts',{
        controller:'postColletionCtrl',
        templateUrl:'views/PostCollection.html',
        resolve:{
            PostCollection:['$http',function ($http) {
                return $http.get(Properties.backendUrl + '/posts',{
                    'cache':true
                });
            }]
        }
    });
    $routeProvider.when('/misposts',{
        controller:'myPostColletionCtrl',
        templateUrl:'views/MyPostCollection.html',
        resolve:{
            MyPost:['$http',function ($http) {
                return $http.get(Properties.backendUrl + '/posts/me',{
                    'cache':true
                });
            }]
        }
    });
    $routeProvider.otherwise({
        redirectTo:'/todosposts'
    });
}]);