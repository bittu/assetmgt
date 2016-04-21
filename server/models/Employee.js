'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
	bcrypt = require('bcrypt-nodejs'),
	SALT_WORK_FACTOR = 10;


var EmployeeSchema = new Schema({
	EmployeeID: {
		type: Number,
		required: true,
		unique: true
	},
	FirstName: {
		type: String,
		required: true
	},
	LastName: {
		type: String,
		required: true
	},
	Stream: {
		type: String,
		required: true
	},
	Password: {
		type: String,
		required: true
	},
	Admin: {
		type: Boolean,
		default: false
	}
}, {
	collection: 'Employee',
	timestamps: true
});

EmployeeSchema.pre('save', function(next) {
    var employee = this;

    if (!employee.isModified('Password')) return next();

    employee.Password = bcrypt.hashSync(employee.Password, bcrypt.genSaltSync(SALT_WORK_FACTOR), null);
    next();
});

EmployeeSchema.methods.comparePassword = function (Password, callback) {
    bcrypt.compare(Password, this.Password, callback);
};

module.exports = mongoose.model('Employee', EmployeeSchema);
