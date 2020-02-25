const express = require('express');
const app = new express.Router();

// Serve link example (http://localhost:3000/__)
app.get('/', function(req, res) {
    res.render('index', {title: 'start-node', message: 'Hello there!'});
});

app.get('/playground/angularjs', function(req, res) {
    res.render('playground/angularjs', {title: 'Welcome to AngularJS', message: 'Hello there!'});
});

app.get('/playground/vuejs', function(req, res) {
    res.render('playground/vuejs', {title: 'Welcome to VueJS', message: 'Hello there!'});
});

app.get('/signup', function(req, res) {
    res.render('account/signup', {title: 'Welcome to start-node', message: 'Hello there!'});
});

app.get('/json', function(req, res) {
    let myJSON = {
        "id": 1,
        "name": "laohan"
    }
    res.json(myJSON)
});

module.exports = app;
