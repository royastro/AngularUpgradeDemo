(function () {

    'use strict';

    var common = angular.module('app.common', []);

    common.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        var commonViewBase = 'app/common/';

        var home = {
            name: 'home',
            url: '/home',
            templateUrl: commonViewBase + 'home.html',
            resolve: {
                dynamicDataResolve: [function () {
                    return "";
                }]
            }
        };

        $stateProvider.
            state(home);        

        $urlRouterProvider.otherwise("/home")

    }]);
    
}());
