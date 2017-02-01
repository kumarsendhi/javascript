var Task = require('./task');

var repo = require('./taskRepository');

var task1 = new Task('create a demo for constructors');
var task2 = new Task('create a demo for modules');
var task3 = new Task('create a demo for singletons');
var task4 = new Task('create a demo for prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();

var task5 = new repo.get(1);

console.log(task5)