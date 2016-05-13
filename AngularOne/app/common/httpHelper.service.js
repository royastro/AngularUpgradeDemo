(function () {

    'use strict';

    var httpFactory = function ($http) {
        return {
            sendRequest: function (deferred, method, url, formData, responseType) {

                $http({ method: method, url: url, data: formData, responseType: responseType })
                    .success(
                        function (data, status, headers, config) {
                            deferred.resolve(data, status, headers, config);
                        })
                    .error(
                        function (data, status, headers, config) {
                            deferred.reject(data, status, headers, config);
                        }
                    );
            },
            sendRequestCached: function (deferred, method, url, formData, responseType) {

                $http({ method: method, url: url, data: formData, responseType: responseType, cache: true })
                    .success(
                        function (data, status, headers, config) {
                            deferred.resolve(data, status, headers, config);
                        })
                    .error(
                        function (data, status, headers, config) {
                            deferred.reject(data, status, headers, config);
                        }
                    );
            }
        };
    };

    httpFactory.$inject = ['$http'];

    angular.module('app.common').factory('httpHelper', httpFactory);

}());