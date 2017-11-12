(function() {

    'use strict';

    angular.module('realworld.component'    , []);
    angular.module('realworld.page'         , []);
    angular.module('realworld.model'        , []);

    var ApplicationModuleCollection = [

        // TODO: Expose external Vendor collection
        'ui.router',


        'realworld.component',
        'realworld.page',
        'realworld.model'
    ];

    angular.module('realworld', ApplicationModuleCollection).config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider.state('home',        { url: '/home' ,        templateUrl: 'app/pages/home/home.template.html' })
        $stateProvider.state('setting',     { url: '/setting',      templateUrl: 'app/pages/setting/setting.template.html' })
        $stateProvider.state('profile',     { url: '/profile',      templateUrl: 'app/pages/profile/profile.template.html' })
        $stateProvider.state('new-article', { url: '/new-article',  templateUrl: 'app/pages/new-article/new-article.template.html' })
        $stateProvider.state('signup',      { url: '/signup',       templateUrl: 'app/pages/signup/signup.template.html' })
    })
})();
