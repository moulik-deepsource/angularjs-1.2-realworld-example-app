(function() {
    
        /**
         * 
         */
        var Component = function() {
    
        };
    
        angular.module('realworld.component').directive('realworldTag',function() {
            return {
                scope           : {
                    uiTitle     : '@'
                },
                restrict        : 'E',
                templateUrl     : 'app/components/tag/realworld-tag.template.html',
                controller      : Component
            }
        });
    })();
    