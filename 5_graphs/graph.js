// Undirected Graph

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(name) {
    // Add protection if name already is in the graph
    if (!this.addVertex[name]) {
      this.adjacencyList[name] = [];
    } else {
      return "Name already exists";
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vertex => {
      return vertex !== vertex2;
    });
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vertex => {
      return vertex !== vertex1;
    });
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}
