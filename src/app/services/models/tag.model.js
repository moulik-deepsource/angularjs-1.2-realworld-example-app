(function () {

    var BASE_URL = "tags";

    /**
     * 
     * @param {*} request 
     */
    var create = function (request) {
        // create api collection
    };

    /**
     * 
     * @param {*} request 
     */
    var read = function (request) {
        return {
            
            all : function() {
                return request.get([BASE_URL]);
            }
        }
    };

    /**
     * 
     * @param {*} request 
     */
    var update = function (request) {
        // update api collection
    };


    /**
     * 
     * @param {*} request 
     */
    var archive = function (request) {
        // archive api collection
    };

    /**
     * 
     * @param {*} Request 
     */
    var Service = function (Request) {
        return {
            create  : create(Request),
            read    : read(Request),
            update  : update(Request),
            archive : archive(Request)
        }
    };

    Service.$injector = ['Request'];
    angular.module('realworld.model').factory('TagModel', Service);
})()
