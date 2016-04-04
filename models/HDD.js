'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var HDDSchema = new Schema({
	HDD: {
		type: String,
		required: true
	}
}, {
	collection: 'HDD',
	timestamps: true
});

module.exports = mongoose.model('HDD', HDDSchema);
