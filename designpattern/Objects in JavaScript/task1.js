var task =Object.create(Object.prototype);
task.title = 'My task';
task.description ='My Description';
task.toString() = function(){
    return task.title;
}

console.log(task.title);