(function (app) {
    'use strict';
    app.factory('MovieService', function ($http, $q) {
        return {
            getAllMovies: function () {
                var url = "http://www.jiunb.com/api/movie/all";
                var deferred = $q.defer();
                $http.get(url).then(
                    function success(respData) {
                        var movies = respData.data;
                        deferred.resolve(movies);
                    },
                    function error(reason) {
                        deferred.reject(reason);
                    }
                );
                return deferred.promise;
            },
            updateMovie: function (movie, id) {
                var url = "http://www.jiunb.com/api/movie/" + id;
                var deferred = $q.defer();
                $http.put(url, movie).then(
                    function success(respData) {
                        var movies = respData.data;
                        deferred.resolve(movies);
                    },
                    function error(reason) {
                        deferred.reject(reason);
                    }
                );
                return deferred.promise;
            }
        }
    });
})(angular.module('app'));
