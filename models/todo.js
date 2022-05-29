const mongoose= require('mongoose');
//Import mongoose as it is used to create schema

//Creating schema
const todoSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    date:{
        type: String,
        required:true
    },
    category:{
        type: String,
        required:true
    }
})



// Name the collection of todolist Schema. Our collection in the database will be called by this name only.
const TodoList = mongoose.model('TodoList', todoSchema);

//Export this schema
module.exports = TodoList;