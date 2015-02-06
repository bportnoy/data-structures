var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //store item in tuple
  var tuple = [k,v];
  //check index and see if there's already something there
  var oldBucket = this._storage.get(i);
  if (oldBucket === undefined){
    //if there isn't, store the tuple
    var newBucket = [tuple];
    this._storage.set(i,newBucket);
  } else {
    //if there is, store them all in a bucket
    oldBucket.push(tuple);
    this._storage.set(i,oldBucket);
  }
  //check to see if array needs to be resized, if it does, run doubling function
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
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
