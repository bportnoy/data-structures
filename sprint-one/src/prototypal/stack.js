var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.stackSize = 0;
  newStack.storage = {};
  return newStack;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.stackSize] = value;
    this.stackSize++;
  },

  pop: function() {
    this.stackSize && this.stackSize--;
    var result = this.storage[this.stackSize];
    return result;
  },

  size: function() {
    return this.stackSize;
  }
};


