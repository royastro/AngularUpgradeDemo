(function () {

    'use strict';

    var mod = angular.module('app.task', [
        'app.common'
    ]);

    mod.config(['$stateProvider', function ($stateProvider) {           
        
        var taskViewBase = 'app/task/';

        var taskList = {
            name: 'taskList',
            url: '/task',
            templateUrl: taskViewBase + 'index.html',
            controllerAs: 'vm',
            controller: 'taskController',
            resolve: {
                taskListResolve: ['taskService', function (taskService) {
                    return taskService.get();
                }]
            }
        }, 
        
        createTask = {
            name: 'createTask',
            url: '/create-task',
            templateUrl: taskViewBase + 'create-task.html'
        },

        editTask = {
            name: 'editTask',
            url: '/edit-task',
            templateUrl: taskViewBase + 'edit-task.html'
        };
        
        $stateProvider
            .state(taskList)
            .state(createTask)
            .state(editTask);

    }]);

})();