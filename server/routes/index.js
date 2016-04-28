var express = require('express');
var router = express.Router();
 
var auth = require('../controllers/auth.js');
var assets = require('../controllers/assets');
var employee = require('../controllers/employee');
var employeeAsset = require('../controllers/employeeAsset');
var employeeDesk = require('../controllers/employeeDesk');
var admin = require('../controllers/admin');

/*
 * Routes that can be accessed by any one
 */
router.post('/login', auth.login);
router.post('/logout', auth.logout);
 
/*
 * Routes that can be accessed only by autheticated users
 */
router.get('/api/employee/:employeeID/desk', employeeDesk.get);
router.post('/api/employee/:employeeID/desk', employeeDesk.save);
router.put('/api/employee/:employeeID/desk/:deskID', employeeDesk.update);
router.delete('/api/employee/:employeeID/desk/:deskID', employeeDesk.delete);

router.get('/api/employee/:employeeID/asset', employeeAsset.get);
router.post('/api/employee/:employeeID/asset', employeeAsset.save);
router.put('/api/employee/:employeeID/asset/:assetID', employeeAsset.update);
router.delete('/api/employee/:employeeID/asset/:assetID', employeeAsset.delete);

/*
 * Routes that can be accessed only by authenticated & authorized users
 */

router.get('/api/admin/employee', employee.get);
router.post('/api/admin/employee', employee.save);
router.put('/api/admin/employee/:employeeID', employee.update);
router.delete('/api/admin/employee/:employeeID', employee.delete);

router.get('/api/admin/assetType', assets.assetTypeCtrl.get);
router.post('/api/admin/assetType', assets.assetTypeCtrl.save);
router.put('/api/admin/assetType/:assetTypeID', assets.assetTypeCtrl.update);
router.delete('/api/admin/assetType/:assetTypeID', assets.assetTypeCtrl.delete);

router.get('/api/admin/assetModel', assets.assetModelCtrl.get);
router.post('/api/admin/assetModel', assets.assetModelCtrl.save);
router.put('/api/admin/assetModel/:assetModelID', assets.assetModelCtrl.update);
router.delete('/api/admin/assetModel/:assetModelID', assets.assetModelCtrl.delete);

router.get('/api/admin/processor', assets.processorCtrl.get);
router.post('/api/admin/processor', assets.processorCtrl.save);
router.put('/api/admin/processor/:processorID', assets.processorCtrl.update);
router.delete('/api/admin/processor/:processorID', assets.processorCtrl.delete);

router.get('/api/admin/ram', assets.ramCtrl.get);
router.post('/api/admin/ram', assets.ramCtrl.save);
router.put('/api/admin/ram/:ramID', assets.ramCtrl.update);
router.delete('/api/admin/ram/:ramID', assets.ramCtrl.delete);

router.get('/api/admin/hdd', assets.hddCtrl.get);
router.post('/api/admin/hdd', assets.hddCtrl.save);
router.put('/api/admin/hdd/:hddID', assets.hddCtrl.update);
router.delete('/api/admin/hdd/:hddID', assets.hddCtrl.delete);

router.get('/api/admin/accessory', assets.accessoryCtrl.get);
router.post('/api/admin/accessory', assets.accessoryCtrl.save);
router.put('/api/admin/accessory/:accessoryID', assets.accessoryCtrl.update);
router.delete('/api/admin/accessory/:accessoryID', assets.accessoryCtrl.delete);

router.get('/api/admin/desk', assets.deskCtrl.get);
router.post('/api/admin/desk', assets.deskCtrl.save);
router.put('/api/admin/desk/:deskID', assets.deskCtrl.update);
router.delete('/api/admin/desk/:deskID', assets.deskCtrl.delete);

router.get('/api/admin/osVersion', assets.osVersionCtrl.get);
router.post('/api/admin/osVersion', assets.osVersionCtrl.save);
router.put('/api/admin/osVersion/:osVersionID', assets.osVersionCtrl.update);
router.delete('/api/admin/osVersion/:osVersionID', assets.osVersionCtrl.delete);

router.get('/defaulters', admin.defaulters);
 
module.exports = router;