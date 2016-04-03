var Employee = require('../models/Employee');
var EmployeeAuth = require('../models/EmployeeAuth');
var Role = require('../models/Role');

var employeeCtrl = {
	get: function(req, res) {
		Employee.find({}, function(err, data) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}

			return res.status(200).json(data);
		});
	},

	save: function(req, res) {
		var employee = req.body.payload;
		var employeeObj = new Employee();
		employeeObj.EmployeeID = employee.EmployeeID;
		employeeObj.FirstName = employee.FirstName;
		employeeObj.LastName = employee.LastName;
		employeeObj.Stream = employee.Stream;

		employeeObj.save(function(err) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}

			var employeeAuthObj = new EmployeeAuth();
			employeeAuthObj.EmployeeID = employeeObj._id;
			employeeAuthObj.Password = employeeObj.EmployeeID+'@'+employeeObj.LastName;
			employeeAuthObj.Role = employeeObj.Role;

			employeeAuthObj.save(function(err) {
				if(err) {
					console.log(err);
					return res.status(500).json({"error": true, "message": err});
				}
				return res.status(200).json({"message": "Employee saved"});
			});
		});
	},

	update: function(req, res) {
		var _employeeID = req.params.employeeID;
		var employee = req.body.payload;

		Employee.findById(_employeeID, function(err, data) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}
			data.EmployeeID = employee.EmployeeID;
			data.FirstName = employee.FirstName;
			data.LastName = employee.LastName;
			data.Stream = employee.Stream;
			data.save(function(err) {
				if(err) {
					console.log(err);
					return res.status(500).json({"error": true, "message": err});
				}

				EmployeeAuth.findOne({EmployeeID: _employeeID}, function(err, edata) {
					if(err) {
						console.log(err);
						return res.status(500).json({"error": true, "message": err});
					}

					edata.Password = employee.EmployeeID+'@'+employee.LastName;
					edata.Role = employee.Role;

					edata.save(function(err) {
						if(err) {
							console.log(err);
							return res.status(500).json({"error": true, "message": err});
						}
						return res.status(200).json({"message": "Employee updated"});
					});
				})
			});
		});
	},

	delete: function(req, res) {
		var _employeeID = req.params.employeeID;

		Employee.findById(_employeeID).remove(function(err) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}
			EmployeeAuth.findOne({EmployeeID: _employeeID}).remove(function(err){
				if(err) {
					console.log(err);
					return res.status(500).json({"error": true, "message": err});
				}
				return res.status(200).json({"message": "Employee removed"});
			});
		});
	}
}

var roleCtrl = {
	get: function(req, res) {
		Role.find({}, function(err, data) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}

			return res.status(200).json(data);
		});
	},

	save: function(req, res) {
		var role = req.body.payload;
		new Role(role).save(function(err) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}

			return res.status(200).json({"message": "Role saved"});
		});
	},

	update: function(req, res) {
		var roleID = req.params.roleID;
		var role = req.body.payload.Role;

		Role.findById(roleID, function(err, data) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}
			data.Role = role;
			data.save(function(err) {
				if(err) {
					console.log(err);
					return res.status(500).json({"error": true, "message": err});
				}
				return res.status(200).json({"message": "Role updated"});
			});
		});
	},

	delete: function(req, res) {
		var roleID = req.params.roleID;

		Role.findById(roleID).remove(function(err) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}
			return res.status(200).json({"message": "Role removed"});
		});
	}
}

module.exports = {	employeeCtrl: employeeCtrl,
					roleCtrl: roleCtrl
				};