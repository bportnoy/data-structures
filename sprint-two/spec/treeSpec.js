describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a("function");
    expect(tree.contains).to.be.a("function");
    expect(tree.hasOwnProperty("value")).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function(){
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function(){
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should correctly reference its parent', function(){
    tree.addChild(3);
    tree.addChild(4);
    tree.children[0].addChild(8);
    expect(tree.children[0].children[0].parent.value).to.equal(3);
  });

  it('should correctly remove parents and return a new tree', function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    var removed = tree.children[0].children[0].removeFromParent();
    expect(removed.value).to.equal(7);
    expect(removed.parent).to.equal(null);
    expect(tree.contains(7)).to.equal(false);
    expect(tree.children[0].children[0]).to.equal(undefined);
  })

  it('should property traverse a tree',function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    // var callBack = function(value){
    //   value = value*2;
    // }
    // tree.traverse(callBack);
    // expect(tree.contains(10)).to.equal(true);
    // expect(tree.contains(12)).to.equal(true);
    // expect(tree.contains(14)).to.equal(true);
    // expect(tree.contains(7)).to.equal(false);
    var array = [];
    var func = function(value){ array.push(value); };
    tree.traverse(func);
    expect(array).to.eql([undefined,5,7,6,8]);
  })

});
