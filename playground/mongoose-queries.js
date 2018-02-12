const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

const id = '5a8182cec1606b45d7176f8b';

Todo.find({
    _id: id,
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id,
}).then((todo) => {
    console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('Id not found');
    }
    console.log('Todo', todo);
});

