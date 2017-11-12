(function () {

    var BASE_URL = "profile";

    /**
     * 
     * @param {*} request 
     */
    var create = function (request) {
        return {
            follow : function(_user, _body) {
                return request.post([BASE_URL, _user, 'follow'], _body)
            }
        }
    };

    /**
     * 
     * @param {*} request 
     */
    var read = function (request) {
        return {

            profile : function() {
                return request.get([BASE_URL])
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
            unfollow : function(_user) {
                return request.delete([BASE_URL, _user, 'follow']);
            }
        }
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
    angular.module('realworld.model').factory('ProfileModel', Service);
})()
