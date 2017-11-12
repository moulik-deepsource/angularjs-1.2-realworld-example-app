(function() {

    var BASE_URL = 'https://conduit.productionready.io/api';

    /**
     * 
     * @param {*} collection 
     */
    var buildUrl = function(collection) {

        var collection = collection || [];
        return [BASE_URL, collection.join('/')].join('/');
    };

    /**
     * 
     * @param {*}  
     */
    var Service = function($http) {
        return {
            get : function(collection) {
                return $http.get(buildUrl(collection))
            },

            post: function(collection, body) {
                return $http.post(buildUrl(collection), body)
            },

            put: function() {
                return $http.post(buildUrl(collection), body)
            },

            delete: function() {
                return $http.delete(buildUrl(collection), body)
            }
        }
    };

    Service.$injector = ['$http'];
    angular.module('realworld').factory('Request', Service);
})()
