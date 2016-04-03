'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RAMSchema = new Schema({
	RAM: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('RAM', RAMSchema);
