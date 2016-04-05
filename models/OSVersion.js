'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OSVersionSchema = new Schema({
	OSVersion: {
		type: String,
		required: true
	}
}, {
	collection: 'OSVersion',
	timestamps: true
});

module.exports = mongoose.model('OSVersion', OSVersionSchema);
