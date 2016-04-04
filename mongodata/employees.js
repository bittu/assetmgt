var mongoose = require('mongoose'),
    async = require('async');
require('./../config/mongodb');

var AssetType = require('../models/AssetType');
var AssetModel = require('../models/AssetModel');
var Processor = require('../models/Processor');
var RAM = require('../models/RAM');
var HDD = require('../models/HDD');
var Accessory = require('../models/Accessory');
var Desk = require('../models/Desk');
var Employee = require('../models/Employee');


var accessoryData = [{"Accessory":"Charger"},{"Accessory":"Cable"},{"Accessory":"Earphone"}];
var assetModelData = [{"AssetModel":"iMac"},{"AssetModel":"Mac Mini"},{"AssetModel":"Windows"},{"AssetModel":"iPad"},{"AssetModel":"iPhone 5"},{"AssetModel":"iPhone 5S"},{"AssetModel":"iPhone 6"},{"AssetModel":"LG Nexus 4"},{"AssetModel":"LG Nexus 5"},{"AssetModel":"LG Nexus 6"}];
var assetTypeData = [{"AssetType":"Desktop"},{"AssetType":"Tablet"},{"AssetType":"Phone"}];
var deskData = [{"Desk":"B-7"},{"Desk":"A-7"},{"Desk":"A-353"},{"Desk":"T-3"},{"Desk":"T-235"},{"Desk":"A-870"},{"Desk":"T-3"},{"Desk":"B-6"},{"Desk":"T-122"},{"Desk":"A-5"},{"Desk":"B-607"},{"Desk":"T-1"},{"Desk":"T-6"},{"Desk":"T-38"},{"Desk":"A-39"},{"Desk":"T-3"},{"Desk":"T-8"},{"Desk":"A-1"},{"Desk":"T-940"},{"Desk":"A-745"},{"Desk":"T-052"},{"Desk":"B-099"},{"Desk":"T-8"},{"Desk":"T-1"},{"Desk":"A-761"},{"Desk":"B-83"},{"Desk":"A-632"},{"Desk":"T-1"},{"Desk":"B-158"},{"Desk":"T-71"},{"Desk":"T-57"},{"Desk":"T-724"},{"Desk":"A-293"},{"Desk":"B-7"},{"Desk":"B-14"},{"Desk":"T-707"},{"Desk":"A-6"},{"Desk":"T-49"},{"Desk":"B-4"},{"Desk":"B-8"},{"Desk":"A-54"},{"Desk":"T-69"},{"Desk":"A-80"},{"Desk":"T-69"},{"Desk":"B-218"},{"Desk":"B-558"},{"Desk":"B-084"},{"Desk":"T-38"},{"Desk":"A-0"},{"Desk":"B-15"},{"Desk":"B-0"},{"Desk":"B-389"},{"Desk":"T-5"},{"Desk":"B-1"},{"Desk":"B-188"},{"Desk":"A-0"},{"Desk":"B-47"},{"Desk":"B-73"},{"Desk":"A-16"},{"Desk":"B-967"},{"Desk":"T-04"},{"Desk":"B-564"},{"Desk":"T-42"},{"Desk":"T-5"},{"Desk":"T-942"},{"Desk":"B-1"},{"Desk":"T-882"},{"Desk":"T-9"},{"Desk":"T-998"},{"Desk":"B-5"},{"Desk":"B-3"},{"Desk":"T-79"},{"Desk":"B-799"},{"Desk":"A-2"},{"Desk":"T-202"},{"Desk":"B-8"},{"Desk":"T-2"},{"Desk":"T-15"},{"Desk":"B-174"},{"Desk":"T-36"},{"Desk":"T-9"},{"Desk":"T-500"},{"Desk":"A-52"},{"Desk":"B-9"},{"Desk":"T-4"},{"Desk":"T-216"},{"Desk":"B-74"},{"Desk":"T-05"},{"Desk":"B-9"},{"Desk":"T-57"},{"Desk":"T-9"},{"Desk":"T-243"},{"Desk":"T-98"},{"Desk":"A-285"},{"Desk":"T-5"},{"Desk":"T-80"},{"Desk":"B-84"},{"Desk":"A-61"},{"Desk":"A-127"},{"Desk":"T-704"}];
var hddData = [{"HDD":"500GB"},{"HDD":"1TB"},{"HDD":"2TB"},{"HDD":"3TB"},{"HDD":"4TB"}];
var processorData = [{"Processor":"Intel Core i3"},{"Processor":"Intel Core i5"},{"Processor":"Intel Core i7"}];
var ramData = [{"RAM":"2GB"},{"RAM":"3GB"},{"RAM":"4GB"},{"RAM":"5GB"},{"RAM":"6GB"},{"RAM":"7GB"},{"RAM":"8GB"}];
var employeeData = [{"EmployeeID":"784793","FirstName":"Adam","LastName":"Frazier","Stream":"Mobility","Password":"784793@Frazier","Admin":"true"},{"EmployeeID":"926371","FirstName":"Frances","LastName":"Allen","Stream":"BigData","Password":"926371@Allen","Admin":"false"},{"EmployeeID":"435761","FirstName":"Carl","LastName":"Wright","Stream":"BigData","Password":"435761@Wright","Admin":"true"},{"EmployeeID":"467616","FirstName":"Larry","LastName":"Hamilton","Stream":"ABIAP","Password":"467616@Hamilton","Admin":"true"},{"EmployeeID":"247181","FirstName":"Phillip","LastName":"Perry","Stream":"Mobility","Password":"247181@Perry","Admin":"true"},{"EmployeeID":"871158","FirstName":"Jonathan","LastName":"Dean","Stream":"Mobility","Password":"871158@Dean","Admin":"false"},{"EmployeeID":"885806","FirstName":"Alan","LastName":"Elliott","Stream":"Mobility","Password":"885806@Elliott","Admin":"true"},{"EmployeeID":"444123","FirstName":"Craig","LastName":"Freeman","Stream":"BigData","Password":"444123@Freeman","Admin":"true"},{"EmployeeID":"121168","FirstName":"Billy","LastName":"Garrett","Stream":"ABIAP","Password":"121168@Garrett","Admin":"false"},{"EmployeeID":"361673","FirstName":"Roy","LastName":"Reyes","Stream":"Mobility","Password":"361673@Reyes","Admin":"true"},{"EmployeeID":"421201","FirstName":"Harold","LastName":"Parker","Stream":"BigData","Password":"421201@Parker","Admin":"false"},{"EmployeeID":"311903","FirstName":"Kimberly","LastName":"Hall","Stream":"BigData","Password":"311903@Hall","Admin":"false"},{"EmployeeID":"229836","FirstName":"Robert","LastName":"Barnes","Stream":"BigData","Password":"229836@Barnes","Admin":"false"},{"EmployeeID":"861582","FirstName":"Heather","LastName":"Watkins","Stream":"BigData","Password":"861582@Watkins","Admin":"true"},{"EmployeeID":"576651","FirstName":"Jonathan","LastName":"Holmes","Stream":"Mobility","Password":"576651@Holmes","Admin":"true"},{"EmployeeID":"268331","FirstName":"Irene","LastName":"Oliver","Stream":"ABIAP","Password":"268331@Oliver","Admin":"false"},{"EmployeeID":"449372","FirstName":"Angela","LastName":"Ramirez","Stream":"ABIAP","Password":"449372@Ramirez","Admin":"true"},{"EmployeeID":"958531","FirstName":"Patrick","LastName":"Wagner","Stream":"ABIAP","Password":"958531@Wagner","Admin":"true"},{"EmployeeID":"294864","FirstName":"Willie","LastName":"Gonzales","Stream":"ABIAP","Password":"294864@Gonzales","Admin":"false"},{"EmployeeID":"597642","FirstName":"Barbara","LastName":"Riley","Stream":"BigData","Password":"597642@Riley","Admin":"false"},{"EmployeeID":"303428","FirstName":"Kathleen","LastName":"Marshall","Stream":"ABIAP","Password":"303428@Marshall","Admin":"false"},{"EmployeeID":"635267","FirstName":"Pamela","LastName":"Perez","Stream":"BigData","Password":"635267@Perez","Admin":"true"},{"EmployeeID":"511864","FirstName":"Doris","LastName":"Walker","Stream":"ABIAP","Password":"511864@Walker","Admin":"false"},{"EmployeeID":"742202","FirstName":"Marilyn","LastName":"Gomez","Stream":"Mobility","Password":"742202@Gomez","Admin":"true"},{"EmployeeID":"620157","FirstName":"Patricia","LastName":"Peterson","Stream":"BigData","Password":"620157@Peterson","Admin":"false"},{"EmployeeID":"543408","FirstName":"Maria","LastName":"Murray","Stream":"ABIAP","Password":"543408@Murray","Admin":"false"},{"EmployeeID":"352301","FirstName":"Martha","LastName":"Willis","Stream":"BigData","Password":"352301@Willis","Admin":"true"},{"EmployeeID":"948069","FirstName":"Steve","LastName":"White","Stream":"ABIAP","Password":"948069@White","Admin":"false"},{"EmployeeID":"131948","FirstName":"Cynthia","LastName":"Garrett","Stream":"BigData","Password":"131948@Garrett","Admin":"true"},{"EmployeeID":"177666","FirstName":"Scott","LastName":"Perkins","Stream":"ABIAP","Password":"177666@Perkins","Admin":"true"},{"EmployeeID":"794348","FirstName":"Doris","LastName":"Price","Stream":"ABIAP","Password":"794348@Price","Admin":"true"},{"EmployeeID":"852727","FirstName":"Dorothy","LastName":"Gibson","Stream":"Mobility","Password":"852727@Gibson","Admin":"true"},{"EmployeeID":"624074","FirstName":"Kimberly","LastName":"Harrison","Stream":"ABIAP","Password":"624074@Harrison","Admin":"true"},{"EmployeeID":"617578","FirstName":"Jerry","LastName":"Jacobs","Stream":"BigData","Password":"617578@Jacobs","Admin":"true"},{"EmployeeID":"220720","FirstName":"Joan","LastName":"Wallace","Stream":"ABIAP","Password":"220720@Wallace","Admin":"false"},{"EmployeeID":"170137","FirstName":"Michael","LastName":"Campbell","Stream":"ABIAP","Password":"170137@Campbell","Admin":"true"},{"EmployeeID":"386804","FirstName":"Stephanie","LastName":"Wagner","Stream":"Mobility","Password":"386804@Wagner","Admin":"false"},{"EmployeeID":"868842","FirstName":"Thomas","LastName":"Simpson","Stream":"Mobility","Password":"868842@Simpson","Admin":"true"},{"EmployeeID":"543135","FirstName":"Betty","LastName":"Lynch","Stream":"BigData","Password":"543135@Lynch","Admin":"true"},{"EmployeeID":"430971","FirstName":"Lisa","LastName":"Brown","Stream":"BigData","Password":"430971@Brown","Admin":"false"},{"EmployeeID":"272472","FirstName":"Gerald","LastName":"West","Stream":"Mobility","Password":"272472@West","Admin":"true"},{"EmployeeID":"187646","FirstName":"Albert","LastName":"Moore","Stream":"BigData","Password":"187646@Moore","Admin":"false"},{"EmployeeID":"176548","FirstName":"Gerald","LastName":"Marshall","Stream":"BigData","Password":"176548@Marshall","Admin":"true"},{"EmployeeID":"224768","FirstName":"Robert","LastName":"Dixon","Stream":"BigData","Password":"224768@Dixon","Admin":"true"},{"EmployeeID":"396854","FirstName":"Eric","LastName":"Hansen","Stream":"BigData","Password":"396854@Hansen","Admin":"false"},{"EmployeeID":"374647","FirstName":"Emily","LastName":"Palmer","Stream":"Mobility","Password":"374647@Palmer","Admin":"true"},{"EmployeeID":"825899","FirstName":"Dennis","LastName":"Gilbert","Stream":"Mobility","Password":"825899@Gilbert","Admin":"true"},{"EmployeeID":"782077","FirstName":"Cheryl","LastName":"Fowler","Stream":"BigData","Password":"782077@Fowler","Admin":"false"},{"EmployeeID":"914036","FirstName":"Benjamin","LastName":"Carroll","Stream":"ABIAP","Password":"914036@Carroll","Admin":"false"},{"EmployeeID":"800496","FirstName":"Brenda","LastName":"Duncan","Stream":"ABIAP","Password":"800496@Duncan","Admin":"true"}];


function removeDocs(callback1) {
    async.series([
        function(callback2){Accessory.remove({}, function(err){if(err){console.log(err); return;} console.log('Accessory removed');callback2(null, 'Accessory');})},
        function(callback2){AssetType.remove({}, function(err){if(err){console.log(err); return;} console.log('AssetType removed');callback2(null, 'AssetType');})},
        function(callback2){AssetModel.remove({}, function(err){if(err){console.log(err); return;} console.log('AssetModel removed');callback2(null, 'AssetModel');})},
        function(callback2){Processor.remove({}, function(err){if(err){console.log(err); return;} console.log('Processor removed');callback2(null, 'Processor');})},
        function(callback2){RAM.remove({}, function(err){if(err){console.log(err); return;} console.log('RAM removed');callback2(null, 'RAM');})},
        function(callback2){HDD.remove({}, function(err){if(err){console.log(err); return;} console.log('HDD removed');callback2(null, 'HDD');})},
        function(callback2){Desk.remove({}, function(err){if(err){console.log(err); return;} console.log('Desk removed');callback2(null, 'Desk');})},
        function(callback2){Employee.remove({}, function(err){if(err){console.log(err); return;} console.log('Employee removed');callback2(null, 'Employee');})}
        ], function(err, results){if(err){console.log(err); return;} console.log('All removed');console.log(results); callback1(null, 'Removed')});
}

function addData(callback1) {
    async.series([
        function(callback2){
            Accessory.create(accessoryData, function(err) {
                if(err) {
                    console.log(err);
                    return;
                }
                console.log('Accessory saved');
                callback2(null, 'Accessory');
            });
        },
        function(callback2){
            AssetModel.create(assetModelData, function(err) {
                if(err) {
                    console.log(err);
                    return;
                }
                console.log('AssetModel saved');
                callback2(null, 'AssetModel');
            });
        },
        function(callback2) {
            AssetType.create(assetTypeData, function(err) {
                if(err) {
                    console.log(err);
                    return;
                }
                console.log('AssetType saved');
                callback2(null, 'AssetType');
            });
        },
        function(callback2) {
            Desk.create(deskData, function(err) {
                if(err) {
                    console.log(err);
                    return;
                }
                console.log('Desk saved');
                callback2(null, 'Desk');
            });
        },
        function(callback2) {
            HDD.create(hddData, function(err) {
                if(err) {
                    console.log(err);
                    return;
                }
                console.log('HDD saved');
                callback2(null, 'HDD');
            });
        },
        function(callback2) {
            Processor.create(processorData, function(err) {
                if(err) {
                    console.log(err);
                    return;
                }
                console.log('Processor saved');
                callback2(null, 'Processor');
            });
        },
        function(callback2) {
            RAM.create(ramData, function(err) {
                if(err) {
                    console.log(err);
                    return;
                }
                console.log('RAM saved');
                callback2(null, 'RAM');
            });
        },
        function(callback2) {
            Employee.create(employeeData, function(err) {
                if(err) {
                    console.log(err);
                    return;
                }
                console.log('Employee saved');
                callback2(null, 'Employee');
            });
        }
        ], function(err, results){if(err){console.log(err); return;} console.log('All added');console.log(results); callback1(null, 'Added')});
}




async.series([removeDocs,addData], function(err, results){if(err){console.log(err); return;} console.log('Done');console.log(results);process.exit();});









function JSON2CSV(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;

    var str = '';
    var line = '';

    var head = array[0];

    for (var index in array[0]) {
        var value = index + "";
        line += '"' + value.replace(/"/g, '""') + '",';
    }
   

    line = line.slice(0, -1);
    str += line + '\r\n';

    for (var i = 0; i < array.length; i++) {
        var line = '';

        for (var index in array[i]) {
            var value = array[i][index] + "";
            line += '"' + value.replace(/"/g, '""') + '",';
        }
        

        line = line.slice(0, -1);
        str += line + '\r\n';
    }
    return str;
    
}
