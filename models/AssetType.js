'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AssetTypeSchema = new Schema({
	AssetType: {
		type: String,
		required: true
	}
}, {
	collection: 'AssetType',
	timestamps: true
});

module.exports = mongoose.model('AssetType', AssetTypeSchema);
