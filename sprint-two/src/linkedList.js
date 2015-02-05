var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    //create new node
    var newNode = Node(value);
    //point previous tail next to new node
    if (list.tail !== null) {//if there's a tail
      list.tail.next = newNode; // assign next pointer of previous tail to new tail
    }
    list.tail = newNode; // assign tail to new node
    if (list.head === null) {
      list.head = newNode; // if there's no head, assign head to the new node
    }
  };

  list.removeHead = function(){
    //if null yell at someone
    if (list.head === null) console.log("off with your head!");
    //get node from list.head & assign to variable
    var oldHead = list.head;
    //set head to node.next
    list.head = list.head.next;
    //delete node
    var result = oldHead.value;
    delete oldHead;
    return result;
  };

  list.contains = function(target){
    //debugger;
    var result = false;
    var current = list.head;
    while(current.next){
      if (current.value === target) result = true;
      current = current.next;
    }
    if (current.value === target) result = true;
    return result;
    //check to see if value = target
    //if it is, return true
    //else return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
