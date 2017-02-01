var taskHandler = require('./taskHandler');
var myrepo = require('./repo');
//var myrepo = repo(); to make it singleton

myrepo.save('fromMain');
myrepo.save('fromMain');
myrepo.save('fromMain');
taskHandler.save();
taskHandler.save();
taskHandler.save();
taskHandler.save();
