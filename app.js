const express = require('express'),
    favicon = require('serve-favicon'),
    urlMain = require('./routes/main'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser');

app = express();
// View filetype .pug
app.set('view engine', 'pug');

// Templates
app.set('views', './views');

// Static
app.use('/static', express.static('static'));

// Middleware to parse POST request & cookies
// Must include if you want to parse POST request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Use routes from routes/main.js
app.use(urlMain);

app.use(favicon(path.join(__dirname, 'static', 'favicon', 'favicon.png')));

const portNumber = 3000;
app.listen(portNumber, function() {
    console.log('listening on port ' + portNumber + '!');
    console.log('http://localhost:' + portNumber);
});
