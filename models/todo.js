const mongoose= require('mongoose');
//Import mongoose as it is used to create schema

//creating schema
const todoSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:date,
        required:true
    }
})

//Since we have created our schema we have to tell what would be the name for our collection of schema
//what we want our collection to be called in database where it would be stored.
//Start with capital letter
const TodoList = mongoose.model('TodoList', todoSchema);

//Now, we need to just export this schema
module.exports = TodoList;