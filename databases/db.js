const mongoose=require('mongoose')

const Schema=mongoose.Schema;
const ObjectId=Schema.ObjectId;

// creating the data model schema --> userModel which will be exported
const User = new Schema({
  name: String,
  email: String,
  password: String
});

const Todo = new Schema({
    userId: ObjectId,
    title: String,
    done: Boolean
});

const UserModel=mongoose.model('users',User); // send data to mongo Db tables
const TodoModel=mongoose.model('todos',Todo);


module.exports={
    UserModel:UserModel,
    TodoModel:TodoModel
}