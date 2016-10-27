/**
 * Created by benjamingarridobarreiro on 25/10/16.
 */
var app = angular.module('Cutregram',['ngRoute']);

// Inyectamos en fase config los proveedores necesarios

app.config(function ($httpProvider) {
    // Configuramos el servicio $http para que envie la cabcera necesaria
    $httpProvider.defaults.headers.common = {
        'X-Cutregram-Api-Key':'f8195d4cbb1b4c35b9478778af67a4d0'
    };

    // Configuramos las cabeceras por defecto para evitar problemas de CORS.
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};
});
app.config(function ($routeProvider) {
    // Definimos las distintas rutas que manejamos en la aplicación
    $routeProvider.when('/todosposts',{
        controller:'postColletionCtrl',
        templateUrl:'views/PostCollection.html',
        resolve:{
            PostCollection:['$http',function ($http) {
                return $http.get('http://cutregram-sp.appspot.com/api/1/posts',{
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
                return $http.get('http://cutregram-sp.appspot.com/api/1/posts/me',{
                    'cache':true
                });
            }]
        }
    });
    $routeProvider.otherwise({
        redirectTo:'/todosposts'
    });
});