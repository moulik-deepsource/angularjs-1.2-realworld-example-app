(function () {

    var BASE_URL = "article";

    /**
     * 
     * @param {*} request 
     */
    var create = function (request) {

        return {
            new : function(_article, body) {
                return request.post([BASE_URL, _article, 'comments'], body);
            }
        }
    };

    /**
     * 
     * @param {*} request 
     */
    var read = function (request) {
        
        return {    
            all : function(_article) {
                return request.get([BASE_URL, _article, 'comments']);
            }
        }
    };

    /**
     * 
     * @param {*} request 
     */
    var update = function (request) {
        // archive api collection
    };


    /**
     * 
     * @param {*} request 
     */
    var archive = function (request) {
        
        return {    
            single : function(_article, id) {
                return request.delete([BASE_URL, _article, 'comments', id]);
            }
        }
    };

    var Service = function (Request) {

        return {
            create  : create(Request),
            read    : read(Request),
            update  : update(Request),
            archive : archive(Request)
        }
    };

    Service.$injector = ['Request'];
    angular.module('realworld.model').factory('CommentModel', Service);
})()
