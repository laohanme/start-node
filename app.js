const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const routing = require('./route/route')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

// View filetype .pug
app.set('view engine', 'pug');

// Templates
app.set('views', path.join(__dirname, '.', 'views'));

// Static
app.use('/static', express.static(path.join(__dirname, '.', 'static')));

// Routing link
app.use(routing);

// Middleware to parse POST request & cookies
// Must include if you want to parse POST request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(favicon(path.join(__dirname, 'static', 'favicon', 'favicon.png')));

const portNumber = 3018;

app.listen(portNumber, function() {
    console.log('listening on port ' + portNumber + '!');
    console.log(
        '\n\nGo to your browser and type this: http://localhost:' + portNumber
    );
});
