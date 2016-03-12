/**
 * "Focus on" directive
 *
 * Set the focus of a field when a given scope condition is true
 *
 * @author  Javis Perez <javisperez@gmail.com> http://www.javisperez.com
 */

'use strict';

angular.module('ng-focus-on', [])

     .directive('ngFocusOn', function ($timeout) {

        return {
            restrict: 'A',
            scope: {
                trigger: '=ngFocusOn'
            },
            link : function ($scope, $element) {
                $scope.$watch('trigger', function (value) {
                    if (value === true) {
                        $timeout(function () {
                            $element[0].focus();
                        });
                    }
                });
            }
        };
    });
