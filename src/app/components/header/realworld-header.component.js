(function() {

    /**
     * 
     */
    var Component = function() {

    };


    angular.module('realworld.component').directive('realworldHeader',function() {
        return {
            templateUrl     : 'app/components/header/realworld-header.template.html',
            controller      : Component
        }
    });
})();
