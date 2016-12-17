(function (app) {
    'use strict';
    app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/dinaduola');
        //$urlRouterProvider.otherwise('/movie');
        $stateProvider
            .state('movie', {
                abstract: 'true',
                templateUrl: '/views/menu.html'
            })
            .state('movie.main', {
                url: '/movie',
                controller: 'MainController',
                templateUrl: '/views/main.html',
                resolve: {
                    'movies': function (MovieService) {
                        return MovieService.getAllMovies();
                    }
                }
            })
            .state('movie.update', {
                url: '/movie/update',
                controller: 'MovieController',
                templateUrl: '/views/update.html',
                params: {
                    data: null
                }
            })
            .state('dinaduola', {
                abstract: 'true',
                templateUrl: '/views/dinaduola/menu.html'
            })
            .state('dinaduola.main', {
                url: '/dinaduola',
                controller: 'DinaduolaMainController',
                templateUrl: '/views/dinaduola/main.html',
                resolve: {
                    'dinaduolas': function (DinaduolaService) {
                        return DinaduolaService.getAllDinaduolas();
                    }
                }
            })
            .state('dinaduola.add', {
                url: '/dinaduola/add',
                controller: 'DinaduolaController',
                templateUrl: '/views/dinaduola/add.html',
                params: {
                    data: null
                }
            });
    });
})(angular.module('app'));
