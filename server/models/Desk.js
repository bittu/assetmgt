'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DeskSchema = new Schema({
	Desk: {
		type: String,
		required: true
	},
	Wing: {
		type: Schema.Types.ObjectId,
    	ref: 'Wing',
    	required: true
	}
}, {
	collection: 'Desk',
	timestamps: true
});

module.exports = mongoose.model('Desk', DeskSchema);
