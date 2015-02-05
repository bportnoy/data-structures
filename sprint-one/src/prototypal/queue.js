var Queue = function() {
  var newQueue = Object.create(queueMethods);
  newQueue.queueSize = 0;
  newQueue.storage = {};
  newQueue.oldest = 0;
  newQueue.newest = 0;
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


