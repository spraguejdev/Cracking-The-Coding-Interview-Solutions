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
      return vertex !== vaertex2;
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
  dfsRecurse(start) {
    var visited = {};
    var results = [];
    const adjacencyList = this.adjacencyList;
    (function dfs(vertex) {
      if (!vertex) {
        return null;
      }
      visited[vertex] = true;
      results.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);
    return results;
  }
  dfsIterative(start) {
    var visited = {};
    var results = [];
    var stack = [];
    stack.push(start);
    while (stack.length) {
      var temp = stack.pop();
      if (!visited[temp]) {
        visited[temp] = true;
        results.push(temp);
        this.adjacencyList[temp].forEach(neighbor => {
          stack.push(neighbor);
        });
      }
    }
    return results;
  }

  dfsIterative(start) {
    var visited = {};
    var results = [];
    var stack = [];
    var temp;
    stack.push(start);
    visited[start] = true;
    while (stack.length) {
      temp = stack.pop();
      results.push(temp);
      this.adjacencyList[temp].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return results;
  }

  bfsIterative(start) {
    var visited = {};
    var queue = [start];
    var results = [];
    var temp;
    visited[start] = true;

    while (queue.length) {
      temp = queue.shift();
      results.push(temp);
      this.adjacencyList[temp].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return results;
  }
}

var graph = new Graph();
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);
graph.addVertex(7);
graph.addVertex(8);
graph.addEdge(3, 6);
graph.addEdge(5, 8);
graph.addEdge(4, 5);
graph.addEdge(4, 6);
graph.addEdge(4, 7);
graph.addEdge(5, 6);
graph.addEdge(6, 7);
console.log(graph.bfsIterative(4));
