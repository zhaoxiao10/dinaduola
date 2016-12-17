(function (app) {
    'use strict';
    app.controller('DinaduolaMainController', function ($scope, $rootScope, $state, $stateParams, DinaduolaService, SessionStorage, dinaduolas) {
        $rootScope.title = '蒂娜朵拉';
        $scope.dinaduolas = dinaduolas;
        $scope.add = function() {
            console.log('进入导入页！');
            $state.go('dinaduola.add');
        }
        $scope.deleteDinaduola = function (dinaduola) {
            var promise = DinaduolaService.deleteDinaduola(dinaduola._id);
            promise.then(function (data) {
                alert('delete success!');
                $state.go('dinaduola.main', {}, {reload:true});
            });
        };
    });
    app.controller('DinaduolaController', function ($scope, $rootScope, $state, $stateParams, DinaduolaService, SessionStorage) {
        $rootScope.title = '蒂娜朵拉';
        $scope.create = function () {
            var promise = DinaduolaService.createDinaduola($scope.dinaduola);
            promise.then(function (data) {
                alert('create success!');
                $state.go('dinaduola.main');
            });
        };
    });
})(angular.module('app'));
