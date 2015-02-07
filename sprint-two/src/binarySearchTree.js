var BinarySearchTree = function(value,isAVL){
  this.value = value;
  this.left = null;
  this.right = null;
  this.numChildren = 0;
  this.parent = null;
  this.AVL = isAVL;
};

BinarySearchTree.prototype.insert = function(value){
  if (this.value === value) console.log("no duplicates please");
  var newNode = new BinarySearchTree(value);
  newNode.parent = this;
  if (newNode.value < this.value){//go left
    if (this.left === null){
      this.left = newNode;
    } else {
      this.left.insert(value);
    }
    this.numChildren++;
  }
  if (newNode.value > this.value){
    if (this.right === null){
      this.right = newNode;
    } else {
      this.right.insert(value);
    }
    this.numChildren++;
  }
  var minHeight = Math.floor(Math.log2(this.numChildren))+1;
  if (this.getNodeHeight() > (2 * minHeight)){
    // this.rebalance();
  }
  //compare new value to current value
  //if less & left = null, create new BST with value @ left. if left != null, call on left node
  //if more & right = null, create new BST with value @ right. if right != null, call on right node
};

BinarySearchTree.prototype.rotateRight = function(){
  var previousParent = this.parent;
  var root = this;
  var pivot = this.left;
  var previousPivotRight = pivot.right;
  if (previousParent !== null){
    if (previousParent.left === root){
      previousParent.left = pivot;
    }
    if (previousParent.right === root){
      previousParent.right = pivot;
    }
  }
  pivot.right = root;
  root.left = previousPivotRight;
  root.parent = pivot;
  return pivot;
}

BinarySearchTree.prototype.rotateLeft = function(){
  var previousParent = this.parent;
  var root = this;
  var pivot = this.right;
  var previousPivotLeft = pivot.left;
  if (previousParent != null){
    if (previousParent.right === root) {
      previousParent.right = pivot;
    }
    if (previousParent.left === root){
      previousParent.left = pivot;
    }
  }
  pivot.left = root;
  root.right = previousPivotLeft;
  root.parent = pivot;
  return pivot;
}

BinarySearchTree.prototype.getNodeHeight = function(){
  var leftHeight = 0, rightHeight = 0;
  if (this.left === null && this.right === null) return 1;
  if (this.left !== null) leftHeight = this.left.getNodeHeight();
  if (this.right !== null) rightHeight = this.right.getNodeHeight();
  return leftHeight > rightHeight ? leftHeight+1 : rightHeight+1;
}

BinarySearchTree.prototype.contains = function(target){
  var result = false;
  if (this.value === target) return true;
  if (this.value > target && this.left !== null) {
    result = this.left.contains(target);
  }
  if (this.value < target && this.right !== null) {
    result = this.right.contains(target);
  }
  return result;
};

BinarySearchTree.prototype.depthFirstLog = function(cb){
  //execute callback on curent node
  //if left is not null, call DFL on left
  //if right is not null, call DFL on right
  cb(this.value);
  if (this.left !== null){
    this.left.depthFirstLog(cb);
  }
  if (this.right !== null){
    this.right.depthFirstLog(cb);
  }
};

BinarySearchTree.prototype.breadthFirstLog = function(cb,queue){
  var queue = new Queue();
  cb(this.value);
  queue.enqueue(this.left);
  queue.enqueue(this.right);
  while(queue.size() !== 0){
    var current = queue.dequeue();
    if (current.left !== null){
      queue.enqueue(current.left);
    }
    if (current.right !== null){
      queue.enqueue(current.right);
    }
    cb(current.value);
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
