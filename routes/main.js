const express = require('express');
const router = new express.Router();

router.get('/', function(req, res) {
    res.send('Hello World');
});

router.get('/nodejs', function(req, res) {
    res.render('index', {title: 'Welcome to Nodejs', message: 'Hello there!'});
});
router.get('/api', function(req, res) {
    res.json(req.query);
});

router.post('/api', function(req, res) {
    res.json(req.body);
});

router.put('/api', function(req, res) {
    res.json(req.body);
});

router.delete('/api', function(req, res) {
    res.json(req.body);
});
module.exports = router;
