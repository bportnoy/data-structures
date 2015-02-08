describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = new BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a("function");
    expect(binarySearchTree.contains).to.be.a("function");
    expect(binarySearchTree.depthFirstLog).to.be.a("function");
  });

  it('should insert values at the correct location in the tree', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function(){
    var array = [];
    var func = function(value){
      array.push(value);
      console.log(value);
    };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstLog(func);
    console.log(array);
    expect(array).to.eql([5,2,3]);
  });

  it('should execute a callback on every value in a tree using "breadthFirstLog"', function(){
    binarySearchTree = new BinarySearchTree(10);
    var array = [];
    var func = function(value){array.push(value);};
    // binarySearchTree.insert(10);
    binarySearchTree.insert(8);
    binarySearchTree.insert(15);
    binarySearchTree.insert(5);
    binarySearchTree.insert(9);
    binarySearchTree.insert(13);
    binarySearchTree.breadthFirstLog(func);
    expect(array).to.eql([10,8,15,5,9,13]);
  });

  it('should calculate the height of a tree', function(){
    binarySearchTree = new BinarySearchTree(10);
    binarySearchTree.insert(8);
    binarySearchTree.insert(15);
    binarySearchTree.insert(5);
    binarySearchTree.insert(9);
    binarySearchTree.insert(13);
    expect(binarySearchTree.getNodeHeight()).to.equal(3);
    binarySearchTree.insert(12);
    expect(binarySearchTree.getNodeHeight()).to.equal(4);
  });

  it('should still calculate the height of a tree', function(){
    binarySearchTree = new BinarySearchTree(50);
    binarySearchTree.insert(75);
    binarySearchTree.insert(99);
    binarySearchTree.insert(65);
    binarySearchTree.insert(12);
    binarySearchTree.insert(55);
    binarySearchTree.insert(66);
    expect(binarySearchTree.getNodeHeight()).to.equal(4);
    binarySearchTree.insert(67);
    expect(binarySearchTree.getNodeHeight()).to.equal(5);
  });

  it('should rotate a tree to the right', function(){
    bst = new BinarySearchTree(5);
    bst.insert(3);
    bst.insert(7);
    bst.insert(2);
    bst.insert(4);
    expect(bst.left.left.value).to.equal(2);
    expect(bst.right.value).to.equal(7);
    bst = bst.rotateRight();
    expect(bst.right.right.value).to.equal(7);
    expect(bst.right.left.value).to.equal(4);
  });

  it('should rotate a tree to the left', function(){
    bst = new BinarySearchTree(3);
    bst.insert(5);
    bst.insert(2);
    bst.insert(4);
    bst.insert(7);
    expect(bst.right.right.value).to.equal(7);
    expect(bst.left.value).to.equal(2);
    bst = bst.rotateLeft();
    expect(bst.right.value).to.equal(7);
    expect(bst.left.right.value).to.equal(4);
  });

  it('should automatically balance the root if necessary', function(){
    avl = new BinarySearchTree(5,true);
    avl.insert(3);
    avl.insert(7);
    avl.insert(2);
    expect(avl.value).to.equal(3);
  });

  it('should automatically balance non-root nodes if necessary', function(){
    avl = new BinarySearchTree(10, true);
    avl.insert(5);
    avl.insert(15);
    avl.insert(2);
    avl.insert(1);
    expect(avl.left.value).to.equal(2);
  })
});
