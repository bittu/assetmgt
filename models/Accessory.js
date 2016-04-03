'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AccessorySchema = new Schema({
	Accessory: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Accessory', AccessorySchema);
