'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DeskSchema = new Schema({
	Desk: {
		type: String,
		required: true
	}
}, {
	collection: 'Desk',
	timestamps: true
});

module.exports = mongoose.model('Desk', DeskSchema);
