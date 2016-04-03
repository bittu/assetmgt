'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RoleSchema = new Schema({
	Role: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Role', RoleSchema);
