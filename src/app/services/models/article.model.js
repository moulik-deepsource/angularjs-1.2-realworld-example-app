(function () {

    var BASE_URL = "article";


    var create = function () {
        // archive api collection
    };


    var read = function () {
        // archive api collection
    };


    var update = function () {
        // archive api collection
    };


    var archive = function () {
        // archive api collection
    };


    var Service = function () {
        return {
            create: create,
            read: read,
            update: update,
            archive: archive
        }
    };


    angular.module('realworld.models').factory('ArticleModel', Service);
})()
