//Require the library
const mongoose = require('mongoose');

//Connect mongoose with database
mongoose.connect('mongodb://localhost/todo_list_db');

//Verify whethever it got connected to our database or not
//Acquire the connection to check whether it is successful.
//the connection between mongoose and database is our database

const db = mongoose.connection;

db.on('error', function(err){
    console.log('Error connecting to db');
});

db.once('open', function(){
    console.log('Successfully connected to the database');
});