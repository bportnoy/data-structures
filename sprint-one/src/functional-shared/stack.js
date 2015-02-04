var Stack = function() {
  var newStack = {};
  newStack.size = 0;
  newStack.storage = {};
  extend(newStack,stackMethods);
  return newStack;
};

var stackMethods = {
  pop: function(){
  	var result = storage[size];
  	size--;
  };

  push: function(){

  };
};

var extend = function(obj){
	Array.prototype.forEach.call(Array.prototype.slice.call(arguments,1),function(source){
		for(var key in source){
		  obj[key] = source[key];
	});
	return obj;
};


