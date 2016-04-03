'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt-nodejs'),
    SALT_WORK_FACTOR = 10;

var EmployeeAuthSchema = new Schema({
	EmployeeID: {
        type: Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
    Password: {
    	type: String,
    	required: true
    },
    Role: [{
    	type: Schema.Types.ObjectId,
    	ref: 'Role',
    	required: true
    }]
});

EmployeeAuthSchema.pre('save', function(next) {
    var employee = this;

    if (!employee.isModified('Password')) return next();

    employee.Password = bcrypt.hashSync(employee.Password, bcrypt.genSaltSync(SALT_WORK_FACTOR), null);
    next();
});

EmployeeAuthSchema.methods.comparePassword = function (Password, callback) {
    callback(bcrypt.compareSync(Password, this.Password));
};

module.exports = mongoose.model('EmployeeAuth', EmployeeAuthSchema);
