var Stack = function() {
  var newStack = {};
  newStack.stackSize = 0;
  newStack.storage = {};
  extend(newStack,stackMethods);
  //debugger;
  return newStack;
};

var stackMethods = {
  pop: function(){
  	var result = this.storage[this.stackSize];
    delete this.storage[this.stackSize];
  	this.stackSize && this.stackSize--;
    return result;
  },

  push: function(value){
    this.stackSize++;
    this.storage[this.stackSize] = value;
  },

  size: function(){
    return this.stackSize;
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


