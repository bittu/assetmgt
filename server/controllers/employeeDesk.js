var Employee = require('../models/Employee');
var EmployeeDesk = require('../models/EmployeeDesk');

var employeeDeskCtrl = {
	get: function(req, res) {
		var employeeID = req.params.employeeID;
		EmployeeDesk.find({EmployeeID: employeeID}, function(err, data) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}

			return res.status(200).json(data);
		});
	},

	save: function(req, res) {
		var employeeID = req.params.employeeID;
		var deskNo = req.body.payload.DeskNo;

		var employeeDesk = new EmployeeDesk();
		employeeDesk.employeeID = employeeID;
		employeeDesk.DeskNo = deskNo;

		employeeDesk.save(function(err) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}
			return res.status(200).json({"message": "Desk tagged"});
		});
	},

	update: function(req, res) {
		var employeeID = req.params.employeeID;
		var deskID = req.params.deskID;
		var deskNo = req.body.payload.DeskNo;

		EmployeeDesk.findById(deskID, function(err, data) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}

			data.DeskNo = deskNo;
			data.save(function(err) {
				if(err) {
					console.log(err);
					return res.status(500).json({"error": true, "message": err});
				}
				return res.status(200).json({"message": "Desk tag updated"});
			});
		});
	},

	delete: function(req, res) {
		var employeeID = req.params.employeeID;
		var deskID = req.params.deskID;

		EmployeeDesk.findById(deskID).remove(function(err) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}
			return res.status(200).json({"message": "Desk tag removed"});
		})

	}
}

module.exports = employeeDeskCtrl;
