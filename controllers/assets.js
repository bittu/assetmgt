var AssetType = require('../models/AssetType');
var AssetModel = require('../models/AssetModel');
var Processor = require('../models/Processor');
var RAM = require('../models/RAM');
var HDD = require('../models/HDD');
var Accessory = require('../models/Accessory');
var Desk = require('../models/Desk');
var OSVersion = require('../models/OSVersion');

var assetTypeCtrl = {
	get: function(req, res) {
		AssetType.find({}, function(err, data) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}

			return res.status(200).json(data);
		});
	},

	save: function(req, res) {
		var assetType = req.body.payload;
		new AssetType(assetType).save(function(err) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}

			return res.status(200).json({"message": "AssetType saved"});
		});
	},

	update: function(req, res) {
		var assetTypeID = req.params.assetTypeID;
		var assetType = req.body.payload.AssetType;

		AssetType.findById(assetTypeID, function(err, data) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}
			data.AssetType = assetType;
			data.save(function(err) {
				if(err) {
					console.log(err);
					return res.status(500).json({"error": true, "message": err});
				}
				return res.status(200).json({"message": "AssetType updated"});
			});
		});
	},

	delete: function(req, res) {
		var assetTypeID = req.params.assetTypeID;

		AssetType.findById(assetTypeID).remove(function(err) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}
			return res.status(200).json({"message": "AssetType removed"});
		});
	}
}

var assetModelCtrl = {
	get: function(req, res) {
		AssetModel.find({}, function(err, data) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}

			return res.status(200).json(data);
		});
	},

	save: function(req, res) {
		var assetModel = req.body.payload;
		new AssetModel(assetModel).save(function(err) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}

			return res.status(200).json({"message": "AssetModel saved"});
		});
	},

	update: function(req, res) {
		var assetModelID = req.params.assetModelID;
		var assetModel = req.body.payload.AssetModel;

		AssetModel.findById(assetModelID, function(err, data) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}
			data.AssetModel = assetModel;
			data.save(function(err) {
				if(err) {
					console.log(err);
					return res.status(500).json({"error": true, "message": err});
				}
				return res.status(200).json({"message": "AssetModel updated"});
			});
		});
	},

	delete: function(req, res) {
		var assetModelID = req.params.assetModelID;

		AssetModel.findById(assetModelID).remove(function(err) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}
			return res.status(200).json({"message": "AssetModel removed"});
		});
	}
}

var processorCtrl = {
	get: function(req, res) {
		Processor.find({}, function(err, data) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}

			return res.status(200).json(data);
		});
	},

	save: function(req, res) {
		var processor = req.body.payload;
		new Processor(processor).save(function(err) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}

			return res.status(200).json({"message": "Processor saved"});
		});
	},

	update: function(req, res) {
		var processorID = req.params.processorID;
		var processor = req.body.payload.Processor;

		Processor.findById(processorID, function(err, data) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}
			data.Processor = processor;
			data.save(function(err) {
				if(err) {
					console.log(err);
					return res.status(500).json({"error": true, "message": err});
				}
				return res.status(200).json({"message": "Processor updated"});
			});
		});
	},

	delete: function(req, res) {
		var processorID = req.params.processorID;

		Processor.findById(processorID).remove(function(err) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}
			return res.status(200).json({"message": "Processor removed"});
		});
	}
}

var ramCtrl = {
	get: function(req, res) {
		RAM.find({}, function(err, data) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}

			return res.status(200).json(data);
		});
	},

	save: function(req, res) {
		var ram = req.body.payload;
		new RAM(ram).save(function(err) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}

			return res.status(200).json({"message": "RAM saved"});
		});
	},

	update: function(req, res) {
		var ramID = req.params.ramID;
		var ram = req.body.payload.RAM;

		RAM.findById(ramID, function(err, data) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}
			data.RAM = ram;
			data.save(function(err) {
				if(err) {
					console.log(err);
					return res.status(500).json({"error": true, "message": err});
				}
				return res.status(200).json({"message": "RAM updated"});
			});
		});
	},

	delete: function(req, res) {
		var ramID = req.params.ramID;

		RAM.findById(ramID).remove(function(err) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}
			return res.status(200).json({"message": "RAM removed"});
		});
	}
}

var hddCtrl = {
	get: function(req, res) {
		HDD.find({}, function(err, data) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}

			return res.status(200).json(data);
		});
	},

	save: function(req, res) {
		var hdd = req.body.payload;
		new HDD(hdd).save(function(err) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}

			return res.status(200).json({"message": "HDD saved"});
		});
	},

	update: function(req, res) {
		var hddID = req.params.hddID;
		var hdd = req.body.payload.HDD;

		HDD.findById(hddID, function(err, data) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}
			data.HDD = hdd;
			data.save(function(err) {
				if(err) {
					console.log(err);
					return res.status(500).json({"error": true, "message": err});
				}
				return res.status(200).json({"message": "HDD updated"});
			});
		});
	},

	delete: function(req, res) {
		var hddID = req.params.hddID;

		HDD.findById(hddID).remove(function(err) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}
			return res.status(200).json({"message": "HDD removed"});
		});
	}
}

var accessoryCtrl = {
	get: function(req, res) {
		Accessory.find({}, function(err, data) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}

			return res.status(200).json(data);
		});
	},

	save: function(req, res) {
		var accessory = req.body.payload;
		new Accessory(accessory).save(function(err) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}

			return res.status(200).json({"message": "Accessory saved"});
		});
	},

	update: function(req, res) {
		var accessoryID = req.params.accessoryID;
		var accessory = req.body.payload.Accessory;

		Accessory.findById(accessoryID, function(err, data) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}
			data.Accessory = accessory;
			data.save(function(err) {
				if(err) {
					console.log(err);
					return res.status(500).json({"error": true, "message": err});
				}
				return res.status(200).json({"message": "Accessory updated"});
			});
		});
	},

	delete: function(req, res) {
		var accessoryID = req.params.accessoryID;

		Accessory.findById(accessoryID).remove(function(err) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}
			return res.status(200).json({"message": "Accessory removed"});
		});
	}
}

var deskCtrl = {
	get: function(req, res) {
		Desk.find({}, function(err, data) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}

			return res.status(200).json(data);
		});
	},

	save: function(req, res) {
		var desk = req.body.payload;
		new Desk(desk).save(function(err) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}

			return res.status(200).json({"message": "Desk saved"});
		});
	},

	update: function(req, res) {
		var deskID = req.params.deskID;
		var desk = req.body.payload.Desk;

		Desk.findById(deskID, function(err, data) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}
			data.Desk = desk;
			data.save(function(err) {
				if(err) {
					console.log(err);
					return res.status(500).json({"error": true, "message": err});
				}
				return res.status(200).json({"message": "Desk updated"});
			});
		});
	},

	delete: function(req, res) {
		var deskID = req.params.deskID;

		Desk.findById(deskID).remove(function(err) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}
			return res.status(200).json({"message": "Desk removed"});
		});
	}
}

var osVersionCtrl = {
	get: function(req, res) {
		OSVersion.find({}, function(err, data) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}

			return res.status(200).json(data);
		});
	},

	save: function(req, res) {
		var osVersion = req.body.payload;
		new OSVersion(osVersion).save(function(err) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}

			return res.status(200).json({"message": "OSVersion saved"});
		});
	},

	update: function(req, res) {
		var osVersionID = req.params.osVersionID;
		var osVersion = req.body.payload.OSVersion;

		OSVersion.findById(osVersionID, function(err, data) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}
			data.OSVersion = osVersion;
			data.save(function(err) {
				if(err) {
					console.log(err);
					return res.status(500).json({"error": true, "message": err});
				}
				return res.status(200).json({"message": "OSVersion updated"});
			});
		});
	},

	delete: function(req, res) {
		var osVersionID = req.params.osVersionID;

		OSVersion.findById(osVersionID).remove(function(err) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}
			return res.status(200).json({"message": "OSVersion removed"});
		});
	}
}

module.exports = {	assetTypeCtrl: assetTypeCtrl,
					assetModelCtrl: assetModelCtrl,
					processorCtrl: processorCtrl,
					ramCtrl: ramCtrl,
					hddCtrl: hddCtrl,
					accessoryCtrl: accessoryCtrl,
					deskCtrl: deskCtrl,
					osVersionCtrl: osVersionCtrl
				}