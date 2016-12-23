var app = angular.module('app.todos', ["xeditable"]);

app.controller("todoController",['$scope','svTodos',function($scope,svTodos){
    $scope.appName = "TODOS DASHBOARD";
    $scope.formData = {};
    $scope.todos = [];

    $scope.loading = true;

    // load data from api 
    svTodos.get().then(function(response){
        $scope.todos=response.data;
        $scope.loading = false;
    });
            

    $scope.createTodo = function(){
        $scope.loading = true;
        var todo = {
            text: $scope.formData.text,
            isDone: false
        };
        svTodos.create(todo).then(function(response){
            $scope.todos=response.data;
            $scope.formData.text = "";
            $scope.loading = false;
        })
        
    }

    $scope.updateTodo = function(todo){
        $scope.loading = true;
        svTodos.update(todo).then(function(response){
            $scope.todos=response.data;
            $scope.loading = false;
        });
    }
    $scope.deleteTodo = function(todo){
        $scope.loading = true;
        svTodos.delete(todo._id).then(function(response){
            $scope.todos=response.data;
            $scope.loading = false;
        });
    }
}]);