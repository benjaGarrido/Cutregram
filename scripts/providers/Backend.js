/**
 * Created by benjamingarridobarreiro on 29/10/16.
 */
angular.module('Cutregram').provider('BackEnd',['$httpProvider',function ($httpProvider) {
    var urlBackend ='';
    return{
        'establecerApiKey':function (valor) {
            // Configuramos el servicio $http para que envie la cabcera necesaria
            $httpProvider.defaults.headers.common = {
                'X-Cutregram-Api-Key':valor
            };
        },
        'habilitarPeticionesCors':function () {
            // Configuramos las cabeceras por defecto para evitar problemas de CORS.
            $httpProvider.defaults.headers.post = {};
            $httpProvider.defaults.headers.put = {};
            $httpProvider.defaults.headers.patch = {};
        },
        'establecerUrlBackend':function (valor) {
            urlBackend=valor;
        },
        //Definimos el factory que se inyectará en fase de run
        $get:['$http',function ($http) {
            return {
                'obtenerTodosPosts': function () {
                    return $http.get(urlBackend + '/posts',{
                        'cache':true
                    });
                },
                'obtenerMisPosts':function () {
                    return $http.get(urlBackend + '/posts/me',{
                        'cache':true
                    });
                },
                'obtenerDetallePost':function (idPost) {
                    return $http.get(urlBackend + '/posts/' + idPost,{
                        'cache':true
                    });
                },
                'sumarMeGusta':function (idPost) {
                    return $http.post(urlBackend + '/posts/' + idPost + '/like');
                },
                'sumarNoMeGusta':function (idPost) {
                    return $http.post(urlBackend + '/posts/' + idPost + '/dislike');
                }
            };
        }]
    };
}]);