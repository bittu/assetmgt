var Employee = require('../models/Employee');
var EmployeeAsset = require('../models/EmployeeAsset');
var EmployeeDesk = require('../models/EmployeeDesk');
var Desk = require('../models/Desk');

var adminCtrl = {
	defaulters: function(req, res) {
		EmployeeAsset.find({}).select('EmployeeID').exec(function(err, data) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}
			
			var all = data.map(function(v, i) {return v.EmployeeID});
			
			Employee.find({_id: {$nin: all}}, function(err, edata) {
				if(err) {
					console.log(err);
					return res.status(500).json({"error": true, "message": err});
				}

				return res.status(200).json(edata);
			})
		});
	},

	emptyDesks: function(req, res) {
		
	}
}

module.exports = adminCtrl;