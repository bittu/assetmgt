'use strict';

var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();
var db = require('./config/mongodb');

var routes = require('./routes');
//var validateRequest = require('./controllers/validateRequest');

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
	console.log('Express server started on port: '+ server);
  console.log(server)
});

app.use(logger('dev'));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './public')));

//app.all('/api/*', [validateRequest]);

app.use('/', routes);

app.get('*', function (req, res) {
    res.sendFile('./public/index.html');
});

// If no route is matched by now, it must be a 404
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
