'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AssetModelSchema = new Schema({
	AssetModel: {
		type: String,
		required: true
	}
}, {
	collection: 'AssetModel',
	timestamps: true
});

module.exports = mongoose.model('AssetModel', AssetModelSchema);
