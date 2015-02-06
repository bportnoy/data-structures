

var Graph = function(){
  // instantiate a graph with variable for value
  // an array for nodes which are connected
  this.allNodes = [];
  // this.nodeValue = null;
  // this.connectedTo = [];
};

var GraphNode = function(value) {
  this.nodeValue = value;
  this.connectedTo = [];
};

//

Graph.prototype.addNode = function(value){
  // if (this.nodeValue === null) {
  //   this.nodeValue = value;
  // } else {
  //   var newNode = new Graph();
  //   newNode.nodeValue = value;
  //   newNode.connectedTo.push(this);
  //   this.connectedTo.push(newNode);
  // }
  var newNode = new GraphNode(value);
  this.allNodes.push(newNode);
};

Graph.prototype.contains = function(target){
  // var result = false;
  //var explored = [];
  // if (this.nodeValue === target) {
  //   return true;
  // } else {
  //     for (var i = 0; i < this.connectedTo.length; i++) {
  //       this.connectedTo[i].contains(target);
  //       //explored.push(this.connectedTo[i]);
  //     }
  //     return false;
  // }
  //////////////////
  // if (explored.length === this.connectedTo.length) {
  //   return false;
  // traverse connectedTo
  // if value of current node is equal to target
  // return true
  // else run contains on child nodes
  for (var i = 0; i < this.allNodes.length; i++){
    if (this.allNodes[i].nodeValue === target) return true;
  }
  return false;
};

Graph.prototype.removeNode = function(target){
  // traverse the graph
  // if node value equals target
  // dereference from any edges
  // remove the node
  // if (this.nodeValue === target) {
  //   // dereference all connections/edges
  //   // delete the object
  //   if (this.connectedTo.length === 0) delete this;
  //   for (var i = 0; i < this.connectedTo.length; i++) {
  //     var index = this.connectedTo[i].indexOf(this);
  //     delete this.connectedTo[i].connectedTo[index];
  //   }
  //   delete this;
  // } else {
  //     for (var i = 0; i < this.connectedTo.length; i++) {
  //       this.removeNode(target);
  //     }
  //   }
  // for (var i = 0; i < this.allNodes.length; i++) {
  //   if (this.allNodes[i].nodeValue === target) {

  //   }
  // }
  for (var i = 0; i < this.allNodes.length; i++){
    if (this.allNodes[i].nodeValue === target){
      this.allNodes.splice(i,1);
    }
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  var from, to;
  for (var i = 0; i < this.allNodes.length; i++){
    if (this.allNodes[i].nodeValue === fromNode) from = this.allNodes[i];
    if (this.allNodes[i].nodeValue === toNode) to = this.allNodes[i];
  }
  if (from.connectedTo.indexOf(to) !== -1) return true;
  else return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  var from, to;
  for (var i = 0; i < this.allNodes.length; i++){
    if (this.allNodes[i].nodeValue === fromNode) from = this.allNodes[i];
    if (this.allNodes[i].nodeValue === toNode) to = this.allNodes[i];
  }
  from.connectedTo.push(to);
  to.connectedTo.push(from);
};

Graph.prototype.removeEdge = function(fromNode, toNode){

};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



