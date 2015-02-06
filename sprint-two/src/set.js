var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if (!this._storage.hasOwnProperty(item)){
    this._storage[item] = item;
  }
};

setPrototype.contains = function(item){
  return this._storage.hasOwnProperty(item);
};

setPrototype.remove = function(item){
  if (this._storage.hasOwnProperty(item)){
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
