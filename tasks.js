var fs = require('fs'),
path = require('path');

const xml2js = require('xml2js');

var xpath   = require('xpath');
var Dom     = require('xmldom').DOMParser;
var XMLSerializer = require('xmldom').XMLSerializer;

var TasksCatalog;
var TeamCatalog;

function LoadTasks(fileid) {
    //not used: var TaskFileId= fileid.replace(".xml", "_tasks.json");
    var TasksCatalogString ='';

    var data = fs.readFileSync(fileid, { encoding : 'UTF-8' });
    // Create an XMLDom Element:
    var doc = new Dom().parseFromString(data);

    var project = xpath.select("/Audit/Arrangements/project",doc);

    xml2js.parseString(project, { explicitArray : false}, function (err, result) {
        TasksCatalog= result; 
    });
    
    removeProp(TasksCatalog, '_');
    TasksCatalogString = JSON.stringify(TasksCatalog).replace("}]}}","}]");
    TasksCatalogString = TasksCatalogString.replace('{"project":{"task":[{','[{');
    //not used
    //fs.writeFileSync(TaskFileId, TasksCatalogString);
    //return TaskFileId;
    return TasksCatalogString;
};

function removeProp(obj, propName) {
  for (var p in obj) {
    if (obj.hasOwnProperty(p)) {
      if (p == propName) {
        delete obj[p];
      } else if (typeof obj[p] == 'object') {
        removeProp(obj[p], propName);
      }
    }
  }
  return obj;
};

function LoadTeam(fileid) {
    TeamCatalog = [];

    var data = fs.readFileSync(fileid, { encoding : 'UTF-8' });
    // Create an XMLDom Element:
    var doc = new Dom().parseFromString(data);

    var vPointerMember='';
    var vMembers = xpath.select("/Audit/Arrangements/team/member/@id",doc);
    for (var i=0; i<vMembers.length; i++) {
        var NewEntry = {
            id: vMembers[i].nodeValue,
            name: xpath.select("/Audit/Arrangements/team/member[@id='" + vMembers[i].nodeValue + "']/@name",doc)[0].nodeValue
        };
        TeamCatalog.push(NewEntry);        
    }
    //console.log(JSON.stringify(TeamCatalog));
    return JSON.stringify(TeamCatalog);
};

module.exports.LoadTasks = LoadTasks;
module.exports.LoadTeam = LoadTeam;