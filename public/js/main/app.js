var app = angular.module('app.todos', []);

app.controller("todoController",['$scope',function($scope){
    $scope.appName = "TODOS DASHBOARD";
    $scope.formData = {};
    $scope.todos = [

        {
            text: "Cài đặt Angularjs,bootstrap,fontawesome...",
            isDone: true
        },{
            text: "Kết nôi Nodejs Server",
            isDone: true
        },{
            text: "Data binding vào teamplate..",
            isDone: false
        },{
            text: "Deploy app lên hedoku..",
            isDone: false
        }
    ];

    $scope.createTodo = function(){
        var todo = {
            text: $scope.formData.text,
            isDone: false
        };
        $scope.todos.push(todo);
        $scope.formData.text = "";
    }
}]);