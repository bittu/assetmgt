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
	console.log('Express server started on port: '+ app.get('port'));
});

app.use(logger('dev'));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './public')));

//app.all('/api/*', [validateRequest]);

app.use('/', routes);

// If no route is matched by now, it must be a 404
app.use(function(req, res, next){
  return res.status(404).json({"error": true, "message": "Not found"});
});
