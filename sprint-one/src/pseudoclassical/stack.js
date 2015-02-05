var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  storage = {};
  stackSize = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.stackSize] = value;
  this.stackSize++;
};

Stack.prototype.pop = function() {
  this.stackSize && this.stackSize--;
  var result = this.storage[this.stackSize];
  return result;
};

Stack.prototype.size = function() {
  return this.stackSize;
};

//var ourStack = new Stack();
