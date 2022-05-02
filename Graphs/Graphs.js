class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }

  addVertex(node) {
    this.adjacentList[node] = [];
    this.numberOfNodes++;
  }

  addEdge(node1, node2) {
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }

  showConnection() {}
}

console.clear();
const myGraph = new Graph();
myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
myGraph.addEdge("3", "1");
myGraph.addEdge("3", "4");
myGraph.addEdge("4", "2");
myGraph.addEdge("4", "5");
myGraph.addEdge("1", "2");
myGraph.addEdge("1", "0");
myGraph.addEdge("0", "2");
myGraph.addEdge("6", "5");

console.log(myGraph);

console.clear();

//Fabinacci Series

let sum = 0;
let first = 0;
let second = 0;
let third;
function recur(n) {
  third = first + second;
  first = second;
  second = third;
  console.log(third);
  if (first === 0) {
    first = 1;
  }
  if (n === 0) {
    return third;
  }
  return recur(--n);
}

console.log(recur(5));

const st = "GIGI";
const hi = st.split("");
console.log(hi.pop());
console.log(hi.pop());
console.log(hi);
