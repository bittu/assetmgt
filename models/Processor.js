'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProcessorSchema = new Schema({
	Processor: {
		type: String,
		required: true
	}
}, {
	collection: 'Processor',
	timestamps: true
});

module.exports = mongoose.model('Processor', ProcessorSchema);
