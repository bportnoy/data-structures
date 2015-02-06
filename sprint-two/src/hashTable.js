var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //store item in tuple
  //check index and see if there's already something there
  //if there isn't, store the tuple
  //if there is, store them all in a bucket
  //check to see if array needs to be resized, if it does, run doubling function
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //check what's at the index and see if it's a bucket or just a tuple (if the value is equivalent to what we're looking for)
  //if it's a tuple, return the values
  //if it's a bucket, iterate and then return
  //perhaps it's not found, return undefined
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //check what's at the index, see if it's a bucket or a tuple
  //if tuple, delete what's at the index
  //if bucket, iterate until you find it and then remove
  //if it needs to be resized, run halving function
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
