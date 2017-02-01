var repo = function(){
   get = function(id){
       console.log('Getting task '+id);
       return {
           name: 'new task from db'
       }
   }

   set = function(){
       return null;
   }

    return {
        get: get,
        set:set
    }
}

module.exports = repo();