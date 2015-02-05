var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.queueSize = 0;
  this.newest = 0;
  this.oldest = 0;
};

Queue.prototype.enqueue = function(value){
	this.storage[this.newest] = value;
	this.newest++;
	this.queueSize++;
};

Queue.prototype.dequeue = function(){
	var result = this.storage[this.oldest];
	this.oldest++;
	this.queueSize && this.queueSize--;
	return result;
};

Queue.prototype.size = function(){
	return this.queueSize;
};


