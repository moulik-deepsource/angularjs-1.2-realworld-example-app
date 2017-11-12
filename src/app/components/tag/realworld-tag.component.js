(function() {

    /**
     * 
     * @param {*} TagModel 
     */
    var Component = function(TagModel) {
        
        // Directive Properties
        var model           = this;
        model.tagCollection = [];

        // @Request resolution
        var request = TagModel.read.all();

        request.then(function(response) {
            model.tagCollection = response.data.tags;    
        });

        request.catch(function() {
            console.log("@Error: Data coul not be fetched at the moment");
        });
    };

    Component.$injector = ['TagModel'];
    
    var Directive = {
        scope           : {
            uiTitle     : '@'
        },
        restrict        : 'E',
        templateUrl     : 'app/components/tag/realworld-tag.template.html',
        controller      : Component,
        controllerAs    : 'model'            
    }

    angular.module('realworld.component').directive('realworldTag',function() {
        return Directive;
    });
})();
    