var Todos = require("../models/todoModel");


module.exports = function(app){
    app.get("/api/setupTodos",function(req,res){
        //setup seed data
        var seedData = [
            {
                text: "Hoc Nodejs",
                isDone: false
            },
            {
                text: "Hoc Mongoose",
                isDone: false
            },
            {
                text: "Hoc Angular",
                isDone: false
            },
            {
                text: "Viet Ung dung hoan chinh",
                isDone: false
            }
        ];

        Todos.create(seedData,function(err,results){
            res.send(results);
        })

    });
}

