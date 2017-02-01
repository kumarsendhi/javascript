var myrepo = require('./repo');

//var myrepo = repo(); to make singleton commented


var taskHandler = function(){
    return{
        save:function(){
            myrepo.save('Hi from taskHandler');
        }
    }
}

module.exports = taskHandler();