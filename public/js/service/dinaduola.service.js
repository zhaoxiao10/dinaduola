(function (app) {
    'use strict';
    app.factory('DinaduolaService', function ($http, $q) {
        return {
            getAllDinaduolas: function () {
                var url = "http://www.jiunb.com/api/dinaduola/all";
                var deferred = $q.defer();
                $http.get(url).then(
                    function success(respData) {
                        var dinaduolas = respData.data;
                        deferred.resolve(dinaduolas);
                    },
                    function error(reason) {
                        deferred.reject(reason);
                    }
                );
                return deferred.promise;
            },
            createDinaduola: function (dinaduola) {
                var url = "http://www.jiunb.com/api/dinaduola/create";
                var deferred = $q.defer();
                $http.put(url, dinaduola).then(
                    function success(respData) {
                        var dinaduolas = respData.data;
                        deferred.resolve(dinaduolas);
                    },
                    function error(reason) {
                        deferred.reject(reason);
                    }
                );
                return deferred.promise;
            },
            deleteDinaduola: function (id) {
                var url = "http://www.jiunb.com/api/dinaduola/delete/"+id;
                var deferred = $q.defer();
                $http.delete(url).then(
                    function success(respData) {
                        var dinaduolas = respData.data;
                        deferred.resolve(dinaduolas);
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
