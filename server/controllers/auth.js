var jwt = require('jsonwebtoken'),
	crypto = require('crypto'),
	secret = require('../config/secret');

var Employee = require('../models/Employee');

var level = require('../config/leveldb').db;

var TOKEN_EXPIRATION = 60*60,
	GUID_LENGTH = 12

var auth = {
	login: function(req, res) {
		console.log(req.body)
		var employee = req.body.payload;

		if (!employee || !employee.EmployeeID || !employee.Password) {
			return res.status(401).json({"error": true, "message": "Invalid credentials"});
		}

		Employee.findOne({EmployeeID: employee.EmployeeID}, function(err, data) {
			if(err) {
				console.log(err);
				return res.status(500).json({"error": true, "message": err});
			}

			if(!data) {
				return res.status(401).json({"error": true, "message": "Invalid credentials"});
			}

			data.comparePassword(employee.Password, function(err, isAuthenticate) {
				if(err) {
					console.log(err);
					return res.status(500).json({"error": true, "message": err});
				}
				if(!isAuthenticate) {
					console.log("Attempt failed to login with " + employee.EmployeeID);
					return res.status(200).json({"error": true, "message": "Invalid credentials"});
				}
				
				data = data.toObject();
				delete data.Password;

				var token = generateAndStoreToken(req, data);
				res.set('Authorization', token);
				return res.status(200).send(true);
			})

		});
	},

	logout: function(req, res) {
		// invalidate the token
		var token = req.headers.authorization;
		var decoded = verify(token);
		if(decoded) { // otherwise someone can force the server to crash by sending a bad token!
			// asynchronously read and invalidate
			level.get(decoded.auth, function(err, record){
				var updated = JSON.parse(record);
				updated.valid = false;
				level.put(decoded.auth, updated, function (err) {
					// console.log('updated: ', updated)
					return res.status(200).json({"message": "Logged Out"});
				});
			});
		} else {
			return res.status(200).json({ "error": true, "message": "Invalid Request" });
		}
	},

	validate: function(req, res, next) {
		var token = req.headers.authorization;
		var decoded = verify(token);
		if(!decoded || !decoded.auth) {
			return res.status(401).json({ "error": true, "message": "Invalid Request" });
		} else {
			// check if a key exists, else import word list:
			level.get(decoded.auth, function (err, record) {
				var r;
				try {
					r = JSON.parse(record);
				} catch (e) {
					r = { valid : false };
				}
				if (err || !r.valid) {
					res.status(401).json({ "error": true, "message": "Invalid Request" });
				} else {
					next();
				}
			});
		}
	}
}

function generateGUID() {
	return crypto.randomBytes(Math.ceil(GUID_LENGTH * 3 / 4))
		.toString('base64') // convert to base64 format
		.slice(0, GUID_LENGTH) // return required number of characters
		.replace(/\+/g, '0') // replace '+' with '0'
		.replace(/\//g, '0'); // replace '/' with '0'
}

function generateAndStoreToken(req, data) {
	var GUID = generateGUID();
	var token = jwt.sign({
			auth:  GUID,
			agent: req.headers['user-agent'],
			employee: data,
			exp:   Math.floor(new Date().getTime()/1000) + 60*60
		  }, secret.secretToken);
	console.log(jwt.decode(token, secret.secretToken))
	var record = {
		"valid": true,
		"created": new Date().getTime()
	};

	level.put(GUID, JSON.stringify(record), function(err) {
		if (err) {
			console.log(err);
		}
		console.log("record saved ", record);
	});

	return token;
}

function verify(token) {
	var decoded = false;
	try {
		decoded = jwt.verify(token, secret.secretToken);
	} catch (e) {
		decoded = false; // still false
	}
	return decoded;
}

module.exports = auth;