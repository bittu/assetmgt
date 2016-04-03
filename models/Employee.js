'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
	EmployeeID: {
		type: Number,
		required: true,
		unique: true
	},
	FirstName: {
		type: String,
		required: true
	},
	LastName: {
		type: String,
		required: true
	},
	Stream: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Employee', EmployeeSchema);
