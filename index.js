const express = require('express'),
    favicon = require('serve-favicon'),
    urlMain = require('./routes/main'),
    path = require('path');

app = express();
app.set('view engine', 'pug');

// templates
app.set('views', './templates');

// static
app.use('/static', express.static('static'));

// use routes from routes/main.js
app.use(urlMain);

app.use(favicon(path.join(__dirname, 'static', 'favicon', 'favicon.png')));

const portNumber = 3000;
app.listen(portNumber, function() {
  console.log('listening on port ' + portNumber + '!');
  console.log('http://localhost:' + portNumber);
});
