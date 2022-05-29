// Server file
const express=require('express');
const app=express();
const port =8000;
const path = require('path');
const db=require('./config/mongoose');
const TodoList =require('./models/todo');
//This TodoList will now be used to create entries

//Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.urlencoded({extended: true}));
//Access static files
app.use(express.static('assets'));

//Action controller for adding todo list. To send data to the database.
app.post('/add-todo/', function(req,res){
        
        TodoList.create(
            {
            description: req.body.description,
            date: req.body.date,
            category: req.body.category
            }, function(err,newTodoList){
            if(err){
                console.log('Error in creating a todo list', err);
                return;
            }
    
            console.log('todoSchema', newTodoList);
            return res.redirect('/');
        });
    
})

 
//Action controller for deleting a specific todo list
app.get('/delete-todo/', function(req,res){
    //get the id from the query in the parameter in the url
    
    let id =req.query.id;

    //find the todolist in the database using id and delete it
    //There is a function which automatically find and delete using id.
    //As we are deleting something so there is no second argument in the function.
    TodoList.findByIdAndDelete(id, function(err){
        if(err){
            console.log('Error in deleting an object from database');
            return;
        }
        return res.redirect('/');
    })

});

//Action controller for the home page
app.get('/', function(req, res){
      
    TodoList.find({}, function(err, todoList){
        if(err){
            console.log('Error in fetching the todo list');
        }

        return res.render('home',{
            newListItem: todoList
        })
    })
})


//Start the server
app.listen(port, function(error){
    if(error){
        console.log(error);
        return;
    }

    console.log("My express server is up and running on port", port);
    
});