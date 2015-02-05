var Queue = function(){
  var newQueue = {};
  newQueue.oldest = 0;
  newQueue.newest = 0;
  newQueue.queueSize = 0;
  newQueue.storage = {};
  extend(newQueue,queueMethods);
  return newQueue;
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.newest] = value;
    this.newest++;
    this.queueSize++;
  },
  dequeue: function(){
    var result = this.storage[this.oldest];
    delete this.storage[this.oldest];
    this.oldest++;
    this.queueSize && this.queueSize--;
    return result;
  },
  size: function(){
    return this.queueSize;
  }
};


var extend = function(obj){
  Array.prototype.forEach.call(Array.prototype.slice.call(arguments,1),function(source){
    for(var key in source){
      obj[key] = source[key];
    }
  });
  return obj;
};
