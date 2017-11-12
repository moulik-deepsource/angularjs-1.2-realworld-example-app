(function() {

    var Component = function() {

    };

    angular.module('realworld.component').directive('realworldFooter',function() {
        return {
            templateUrl     : 'app/components/footer/realworld-footer.template.html',
            controller      : Component
        }
    });
})();
