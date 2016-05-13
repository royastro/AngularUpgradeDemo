(function () {

    'use strict';

    var taskService = function ($http, $q, httpHelper) {
        var baseUrl = 'api/task';

        return {
            get: function (id) {           
                var deferred = $q.defer();
                if (!id) {
                    httpHelper.sendRequest(deferred, 'GET', baseUrl);
                } else {
                    httpHelper.sendRequest(deferred, 'GET', baseUrl + '?id=' + id);
                }
                return deferred.promise;
            },
            post: function (task) {
                var deferred = $q.defer();                
                httpHelper.sendRequest(deferred, 'POST', baseUrl, task);                
                return deferred.promise;
            },
            put: function (task) {
                var deferred = $q.defer();                
                httpHelper.sendRequest(deferred, 'PUT', baseUrl, task);                
                return deferred.promise;
            },
            remove: function (id) {
                var deferred = $q.defer();
                httpHelper.sendRequest(deferred, 'DELETE', baseUrl + "?id=" + id );
                return deferred.promise;
            }
        };
    };

    taskService.$inject = ['$http', '$q', 'httpHelper'];

    angular.module('app.task').factory('taskService', taskService);

}());