(function () {

    'use strict';

    var taskController = function ($state, taskService, taskListResolve) {

        var vm = this;        

        init();

        function init() {
            vm.taskList = taskListResolve;
        }

        vm.navigation = {
            createTask: function () {                
                $state.go('createTask');                                        
            },
            editTask: function (id) {
                taskService.get(id).then(function (response) {
                    $state.go('editTask');
                });
            },
            deleteTask: function (id) {
                deleteTask(id);                
            }
        }

        function getTask(id) {
            taskService.get(id).then(function (response) {
                vm.task = response;
            });
        }

        function deleteTask(id) {
            taskService.remove(id).then(function (response) {
                $state.reload();
            })
        }

        function updateTask(task) {
            taskService.put(task).then(function (response) {

            });
        }

        function createTask(task) {
            taskService.post(task).then(function (response) {

            });
        }
    };

    taskController.$inject = ['$state','taskService', 'taskListResolve'];
    angular.module('app.task').controller("taskController", taskController);

}());