'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AccessorySchema = new Schema({
	Accessory: {
		type: String,
		required: true
	}
}, {
	collection: 'Accessory',
	timestamps: true
});

module.exports = mongoose.model('Accessory', AccessorySchema);
