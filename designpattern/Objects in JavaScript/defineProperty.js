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

/** 
 * 
 * 
 * we should make sure consfigurable is false so that we cannot change this as shown below
Object.defineProperty(task,'toString',{
    enumerable:true
})
*/
task.toString = 'hi'  // will not result in an error because writable is False*

//enumerable :false will make sure when we access task for seeing its members we dont see toString function it makes it private
//


//console.log(task);
//console.log(task.toString());
console.log(Object.keys(task));