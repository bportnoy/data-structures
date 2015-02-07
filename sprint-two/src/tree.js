var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  extend(newTree,treeMethods);

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  var newChild = Tree(value);
  newChild.parent = this;
  this.children.push(newChild);
};

treeMethods.contains = function(target){
  var result = false;
  for (var i = 0; i<this.children.length; i++){
    if (this.children[i].value === target){
      result = true;
    }
    if (this.children[i].length !== 0 && !result){
      result = this.children[i].contains(target);
    }
  }
  return result;
};

treeMethods.removeFromParent = function(){
  if (this.parent === null) console.log("I'm an orphan!");
  for (var i = 0; i < this.parent.children.length; i++){
    if (this.parent.children[i] === this){
      this.parent.children.splice(i,1);
    }
  }
  this.parent = null;
  return this;
}

var extend = function(obj){
  Array.prototype.forEach.call(Array.prototype.slice.call(arguments,1),function(source){
    for(var key in source){
      obj[key] = source[key];
    }
  });
  return obj;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
