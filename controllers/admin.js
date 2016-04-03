var Employee = require('../models/Employee');
var EmployeeAsset = require('../models/EmployeeAsset');
var EmployeeDesk = require('../models/EmployeeDesk');
var Wing = require('../models/Wing');
var Desk = require('../models/Desk');

var adminCtrl = {
	defaulters: function(req, res) {
		Employee.find({}).select('_id').exec(function(err, data) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}

			var all = data.map(function(v, i) {return v._id});

			EmployeeAsset.find({EmployeeID: {$nin: all}}, function(err, edata) {
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