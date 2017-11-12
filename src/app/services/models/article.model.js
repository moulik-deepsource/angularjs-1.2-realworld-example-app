(function () {

    var BASE_URL = "article";

    /**
     * 
     * @param {*} request 
     */
    var create = function (request) {
        return {
            article : function(body) {
                return request.post([BASE_URL, body]);
            }
        }
    };

    /**
     * 
     * @param {*} request 
     */
    var read = function (request) {
        return {
            
            all : function() {
                return request.get([BASE_URL])
            },

            feed : function() {
                return request.get([BASE_URL, 'feed'])
            },

            byAuthor : function() {
                return request.get([BASE_URL])
            },

            byTag : function() {
                return request.get([BASE_URL])
            },

            bySlug : function() {
                return request.get([BASE_URL])
            },

            byFavorite : function() {
                return request.get([BASE_URL])
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


    var Service = function (Request) {
        return {
            create  : create(Request),
            read    : read(Request),
            update  : update(Request),
            archive : archive(Request)
        }
    };

    Service.$injector = ['Request'];
    angular.module('realworld.model').factory('ArticleModel', Service);
})()
