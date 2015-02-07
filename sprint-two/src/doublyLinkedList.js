var DoublyLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    //create new node
    var newNode = Node(value, list.tail);
    //point previous tail next to new node
    if (list.tail !== null) {//if there's a tail
      list.tail.next = newNode; // assign next pointer of previous tail to new tail
    }
    list.tail = newNode; // assign tail to new node
    if (list.head === null) { //in case it's the first
      list.head = newNode; // if there's no head, assign head to the new node
    }
  };

  list.removeHead = function(){
    //if null yell at someone
    if (list.head === null) console.log("off with your head!");
    //get node from list.head & assign to variable
    var result = list.head.value;
    //set head to node.next
    if (list.head.next){
      list.head.next.previous = null;
      list.head = list.head.next;
    } else {
      list.head = null;
    }
    //delete node
    //var result = oldHead.value;
    //delete oldHead;
    return result;
  };

  list.contains = function(target){
    //debugger;
    var result = false;
    var current = list.head; //start at the beginning
    while(current){ // while there's another node in the list
      if (current.value === target) result = true; //if the value is present, set result to true
      current = current.next;//get the next node
    }
    return result;
  };

  list.addToHead = function(value){
    var newNode = Node(value,null);
    if (list.head !== null){
      newNode.next = list.head;
      list.head.previous = newNode;
    } else {
      list.tail = newNode;
    }
    list.head = newNode;
  }

  list.removeTail = function(){
    var result = list.tail.value;
    list.tail.previous.next = null;
    list.tail = list.tail.previous;
    return result;
  }

  return list;
};

var Node = function(value,previous){
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = previous;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
