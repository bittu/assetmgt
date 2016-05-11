'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LocationSchema = new Schema({
	Location: {
		type: String,
		required: true
	}
}, {
	collection: 'Location',
	timestamps: true
});

module.exports = mongoose.model('Location', LocationSchema);
