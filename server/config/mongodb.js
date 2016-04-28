'use strict';

var mongoose = require('mongoose');

var DB_URL = 'mongodb://localhost/rajat';

exports.mongoose = mongoose;

var mongoOptions = {
    db: {
        safe: true
    }
};

// Connect to Database
module.exports = mongoose.connect(DB_URL, mongoOptions, function (err, res) {
    if (err) {
        console.log('ERROR connecting to: ' + DB_URL + '. ' + err);
    } else {
        console.log('Successfully connected to: ' + DB_URL);
    }
});