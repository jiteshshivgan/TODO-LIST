// Server file
const http=require('http');
const port =8000;
const fs=require('fs');
const express=require('express');
const path = require('path');
const app=express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.urlencoded());

app.use(express.static('assets'));



app.get('/', function(request, response){
    response.render('home');
})

// function requestHandler(request, response){
//     console.log(request.url);
//     response.writeHead(200, {'content-type':'text/html'});
//     fs.readFile('./index.html', function(error, data){
//         if(error){
//             console.log('Error', error);
//         }
//         return response.end(data);
//     })
// };

// const server=http.createServer(requestHandler);














app.listen(port, function(error){
    if(error){
        console.log(error);
        return;
    }

    console.log("My express server is up and running on port", port);
    
});