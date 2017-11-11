const express = require('express');
const router = new express.Router();

router.get('/', function(req, res) {
  res.send('Hello World');
});

router.get('/nodejs', function(req, res) {
  res.render('index', {title: 'Welcome to Nodejs', message: 'Hello there!'});
});

module.exports = router;
