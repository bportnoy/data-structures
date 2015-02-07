var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var oldest = 0;
  var newest = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[newest] = value;
    size++;
    newest++;
  };

  someInstance.dequeue = function(){
    var result = storage[oldest];
    delete storage[oldest];
    oldest++;
    size && size--;
    return result;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
