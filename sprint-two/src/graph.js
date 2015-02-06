

var Graph = function(){
  // instantiate a graph with variable for value
  // an array for nodes which are connected
  this.allNodes = [];
};

var GraphNode = function(value) {
  this.nodeValue = value;
  this.connectedTo = [];
};

//

Graph.prototype.addNode = function(value){
  var newNode = new GraphNode(value);
  this.allNodes.push(newNode);
};

Graph.prototype.contains = function(target){
  for (var i = 0; i < this.allNodes.length; i++){
    if (this.allNodes[i].nodeValue === target) return true;
  }
  return false;
};

Graph.prototype.removeNode = function(target){
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
  var from, to, fromIndex, toIndex;
  for (var i = 0; i < this.allNodes.length; i++) {
    if (this.allNodes[i].nodeValue === fromNode) from = this.allNodes[i];
    if (this.allNodes[i].nodeValue === toNode) to = this.allNodes[i];
  }
  fromIndex = from.connectedTo.indexOf(to);
  toIndex = to.connectedTo.indexOf(from);
  from.connectedTo.splice(fromIndex, 1);
  to.connectedTo.splice(toIndex, 1);
};

Graph.prototype.forEachNode = function(cb){
  for (var i = 0; i < this.allNodes.length; i++) {
    cb(this.allNodes[i].nodeValue,i,this.allNodes[i]); 
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



