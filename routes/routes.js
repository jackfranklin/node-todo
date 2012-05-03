
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Welcome to JSPlayground Todo' });
};

exports.about = function(req, res){
  res.render('index', { title: 'Something Else' });
};

exports.todo = function(req, res){
  res.render('todo', {
    title: 'New Todo List',
    todos: [
      { text: "todo number 1" },
      { text: "todo number 2" }
    ]
  });
};

exports.saveTodo = function(req, res) {


};
