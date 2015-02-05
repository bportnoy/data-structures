var LinkedList = function(){
  var list = {};
  var index = 0;
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    //create new node
    newNode = Node(value);
    //point previous tail next to new node
    if (list.tail !== null) {//if there's a tail
      list[list.tail].next = list[index]; // assign next pointer of previous tail to new tail
      //prevTail.next = list[index];
    }
    list.tail = list[index];
    if (list.head !== null) {
      list.head = list[index];
    }
    index++;
  };

  list.removeHead = function(){
    //if null yell at someone
    //get node from list.head & assign to variable
    //set head to node.next
    //delete node
    //return result
  };

  list.contains = function(target){
    var result = false;
    //get list head
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
