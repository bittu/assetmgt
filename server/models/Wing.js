'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var WingSchema = new Schema({
	Wing: {
		type: String,
		required: true
	}
}, {
	collection: 'Wing',
	timestamps: true
});

module.exports = mongoose.model('Wing', WingSchema);
