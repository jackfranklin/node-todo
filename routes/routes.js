
exports.index = function(req, res){
  res.render('index', { title: 'Welcome to JSPlayground Todo' });
};

exports.about = function(req, res){
  res.render('index', { title: 'Something Else' });
};

var redis = require("redis"),
  client = redis.createClient();

exports.todo = function(req, res){
  var todos = [];
  client.hgetall("Todo", function(err, objs) {
    for(var k in objs) {
      var newTodo = {
        text: objs[k]
      };
      todos.push(newTodo);
    }
    res.render('todo', {
      title: 'New Todo List',
      todos: todos
    });
  });
};



exports.saveTodo = function(req, res) {
  var newTodo = {};
  newTodo.name = req.body['todo-text'];
  newTodo.id = newTodo.name.replace(" ", "-");
  client.hset("Todo", newTodo.id, newTodo.name);
  res.redirect("back");
};
