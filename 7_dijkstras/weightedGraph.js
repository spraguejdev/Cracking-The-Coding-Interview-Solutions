class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ vertex: vertex2, weight });
    this.adjacencyList[vertex2].push({ vertex: vertex1, weight });
  }
  dijkstras(start, end) {
    var distances = {};
    // Set each key to be every vertex in teh adjacency list with a value of infinity, except the starting point (0)
    for (var node in this.adjacencyList) {
      if (node !== start) {
        distances[node] = Infinity;
      } else {
        distances[node] = 0;
      }
    }

    // Make a new priority queue and add each one of the verticies into the pq
    var priorityQueue = new PriorityQueue();
    for (var verticy in distances) {
      if (verticy !== start) {
        priorityQueue.values.push({ verticy, priority: 0 });
      } else {
        priorityQueue.values.push({ verticy, priority: Infinity });
      }
    }
    // Initialize previous object
    var previous = {};
    for (var verticy in distances) {
      previous[verticy] = null;
    }
    // Loop while there is anything in the priorityQueue
    while (priorityQueue.values.length !== 0) {
      var vertex = priorityQueue.dequeue();
      if (vertex.values.verticy === end) return 0;
      else {
        // Loop through each value in the adjacency list at the vertex
      }
    }
  }
}

// Niave Priority Queue
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

var graph = new WeightedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B", 9);
graph.addEdge("A", "C", 5);
graph.addEdge("B", "C", 7);
// console.log(graph);
console.log(graph.dijkstras("A", "C"));
