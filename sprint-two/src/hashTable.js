var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //store item in tuple
  var tuple = [k,v];
  //check index and see if there's already something there
  var oldBucket = this._storage.get(i);
  if (oldBucket === undefined){
    //if there isn't, store the tuple
    //var newBucket = [tuple];
    this._storage.set(i,[tuple]);
  } else {
    //if there is, store them all in a bucket
    oldBucket.push(tuple);
    this._storage.set(i,oldBucket);
  }
  this._size++;
  //check to see if array needs to be resized, if it does, run doubling function
  if (this._size >= (0.75*this._limit)) {
    this._grow();
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //iterate over bucket until key value is found, return
  var bucket = this._storage.get(i);
  if (bucket === undefined) return null;
  for (var j = 0; j < bucket.length; j++){
    if (bucket[j][0] === k) return bucket[j][1];
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //check what's at the index, see if it's a bucket or a tuple
  var bucket = this._storage.get(i);
  for (var j = 0; j < bucket.length; j++){
    if (bucket[j][0] === k){
      bucket.splice(j,1);
    }
  }
  this._size--;
  if (this._size < (0.25*this._limit)) {
    this._shrink();
  }
};

HashTable.prototype._grow = function(){
  var newLimit = this._limit * 2;
  var newStorage = new LimitedArray(newLimit);
  this._storage.each(function(bucket){
    //iterate over old storage
    //return reach bucket
    //for each bucket, iterate and add
    if (bucket !== undefined){
      for (var j = 0; j < bucket.length; j++){
        var i = getIndexBelowMaxForKey(bucket[j][0], newLimit);
        var tuple = [bucket[j][0], bucket[j][1]];
        var oldBucket = newStorage.get(i);
        if (oldBucket === undefined) {
          newStorage.set(i, [tuple]);
        } else {
          oldBucket.push(tuple);
          newStorage.set(i, oldBucket);
          }
      }
    }
  });
  this._storage = newStorage;
  this._limit = newLimit;
}

HashTable.prototype._shrink = function(){
  var newLimit = this._limit * 0.5;
  var newStorage = new LimitedArray(newLimit);
  this._storage.each(function(bucket){
    if (bucket !== undefined){
      for (var j = 0; j < bucket.length; j++){
        var i = getIndexBelowMaxForKey(bucket[j][0], newLimit);
        var tuple = [bucket[j][0], bucket[j][1]];
        var oldBucket = newStorage.get(i);
        if (oldBucket === undefined) {
          newStorage.set(i, [tuple]);
        } else {
          oldBucket.push(tuple);
          newStorage.set(i, oldBucket);
          }
      }
    }
  });
  this._storage = newStorage;
  this._limit = newLimit;
}




/*
 * Complexity: What is the time complexity of the above functions?
 */
