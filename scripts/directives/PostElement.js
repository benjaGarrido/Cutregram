/**
 * Created by benjamingarridobarreiro on 30/10/16.
 */
angular.module('Cutregram').directive('bgPostElement',['BackEnd',function (BackEnd) {
    return {
        // Con restrict indicamos si permitimos el uso de la directiva como elemento (E) o atributo (A)
        restrict:'EA',
        // Con templateUrl establecemos la vista de la directiva (también se puede usar template para fragmentos más pequeños)
        templateUrl: 'views/PostElement.html',
        // Con scope establecemos la interfaz de comunicación
        scope:{
            // Con = establecemos enlace bidireccional
            post:'=',
            // Con & establecemos notificación desde la directiva hacia scope padre (controlador de la vista asociada)
            viewDetail:'&'
        },
        // Establecemos la lógica de la directiva y manipulamos el DOM en caso de necesitarlo
        link: function (scope) {
            scope.meGusta = function () {
                BackEnd.sumarMeGusta(scope.post.id).then(
                    function () {
                        scope.post.likes++;
                    }
                );
            };

            scope.noMeGusta = function () {
                BackEnd.sumarNoMeGusta(scope.post.id).then(
                    function () {
                        scope.post.dislikes++;
                    }
                );
            };

            scope.notificarClick = function () {
                scope.viewDetail({
                    idPost:scope.post.id
                });
            };
        }
    };
}]);