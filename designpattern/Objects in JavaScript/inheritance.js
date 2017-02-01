var task =Object.create(Object.prototype);
task.title = 'My task';
task.description ='My Description';

Object.defineProperty(task,'toString',{
    value: function(){
        return this.title;
    },
    writable:false,
    enumerable:false,
    configurable:false

})

var urgentTask = Object.create(task);

Object.defineProperty(urgentTask,'toString',{
    value: function(){
        return this.title + ' is urgent';
    },
    writable:false,
    enumerable:false,
    configurable:false

})

urgentTask.title = "Hello change it";

console.log(task.title);
console.log(urgentTask.title);
console.log(urgentTask.toString());