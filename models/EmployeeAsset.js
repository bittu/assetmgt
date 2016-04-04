'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EmployeeAssetSchema = new Schema({
	EmployeeID: {
        type: Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
    AssetID: {
    	type: String,
    	required: true
    },
    AssetType: {
    	type: Schema.Types.ObjectId,
    	ref: 'AssetType',
    	required: true
    },
    AssetModel: {
    	type: Schema.Types.ObjectId,
    	ref: 'AssetModel',
    	required: true
    },
    Processor: {
    	type: Schema.Types.ObjectId,
    	ref: 'Processor'
    },
    RAM: {
    	type: Schema.Types.ObjectId,
    	ref: 'RAM'
    },
    HDD: {
    	type: Schema.Types.ObjectId,
    	ref: 'HDD'
    },
    Accessory: [{
    	type: Schema.Types.ObjectId,
    	ref: 'Accessory',
    	required: true
    }]
}, {
    collection: 'EmployeeAsset',
    timestamps: true
});

module.exports = mongoose.model('EmployeeAsset', EmployeeAssetSchema);
