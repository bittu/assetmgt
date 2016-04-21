var Employee = require('../models/Employee');
var EmployeeAsset = require('../models/EmployeeAsset');

var employeeAssetCtrl = {
	get: function(req, res) {
		var employeeID = req.params.employeeID;
		EmployeeAsset.find({EmployeeID: employeeID}, function(err, data) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}

			return res.status(200).json(data);
		});
	},

	save: function(req, res) {
		var employeeID = req.params.employeeID;
		var assetDetails = req.body.payload;

		var employeeAsset = new EmployeeAsset();
		employeeAsset.employeeID = employeeID;
		employeeAsset.AssetID = assetDetails.AssetID;
		employeeAsset.AssetType = assetDetails.AssetType;
		employeeAsset.AssetModel = assetDetails.AssetModel;
		employeeAsset.Processor = assetDetails.Processor;
		employeeAsset.RAM = assetDetails.RAM;
		employeeAsset.HDD = assetDetails.HDD;
		employeeAsset.Accessory = assetDetails.Accessory;

		employeeAsset.save(function(err) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}
			return res.status(200).json({"message": "Asset tagged"});
		});
	},

	update: function(req, res) {
		var employeeID = req.params.employeeID;
		var assetID = req.params.assetID;
		var assetDetails = req.body.payload;

		EmployeeAsset.findById(assetID, function(err, data) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}

			data.AssetID = assetDetails.AssetID;
			data.AssetType = assetDetails.AssetType;
			data.AssetModel = assetDetails.AssetModel;
			data.Processor = assetDetails.Processor;
			data.RAM = assetDetails.RAM;
			data.HDD = assetDetails.HDD;
			data.Accessory = assetDetails.Accessory;

			data.save(function(err) {
				if(err) {
					console.log(err);
					return res.status(500).json({"error": true, "message": err});
				}
				return res.status(200).json({"message": "Asset tag updated"});
			});
		});
	},

	delete: function(req, res) {
		var employeeID = req.params.employeeID;
		var assetID = req.params.assetID;

		EmployeeAsset.findById(assetID).remove(function(err) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}
			return res.status(200).json({"message": "Asset tag removed"});
		})

	}
}

module.exports = employeeAssetCtrl;
