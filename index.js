const express = require('express');
var app = express();

app.set('view engine', 'pug')
// templates
app.set('views', './templates')
// static
app.use('/static', express.static('static')); 

// Start From Here
// ****************** Work Area ***************************
app.get("/",function(req,res){
   res.send('Hello World')
});

app.get("/nodejs",function(req,res){
   res.render('index', { title: 'Welcome to Nodejs', message: 'Hello there!'})
});


// ****************** End of Work Area ***************************


app.listen(3000, function () {
	console.log('listening on port 3000!');
});