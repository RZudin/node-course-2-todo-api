const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const {User} = require('./../server/models/user');

//Todo.remove({}).then((result) => {
//  console.log(result);
//});

//Todo.findAndRemove({}).then((result))

Todo.findByIdAndRemove('587646b621fe9756a8949691').then((todo) => {
  console.log(todo);
});
