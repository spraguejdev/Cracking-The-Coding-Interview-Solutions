class DirectedGraph {
  constructor() {
    this.adjList = {};
  }

  addVertex(vertex) {
    this.adjList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjList[vertex1].push(vertex2);
  }

  dfs() {
    const nodes = Object.keys(this.adjList);
    const visited = {};
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      this.dfsUtil(node, visited);
    }
  }

  dfsUtil(vertex, visited) {
    if (!visited[vertex]) {
      visited[vertex] = true;
      console.log("Vertex: ", vertex, " Visited: ", visited);
      const neighbors = this.adjList[vertex];
      for (let i = 0; i < neighbors.length; i++) {
        const neighbor = neighbors[i];
        this.dfsUtil(neighbor, visited);
      }
    }
  }

  detectCycle() {
    const graphNodes = Object.keys(this.adjList);
    const visited = {};
    const recStack = {};

    for (let i = 0; i < graphNodes.length; i++) {
      const node = graphNodes[i];
      if (this.detectCycleUtil(node, visited, recStack)) {
        return "there is a cycle";
      }
    }
    return "no cycle";
  }

  detectCycleUtil(vertex, visited, recStack) {
    if (!visited[vertex]) {
      visited[vertex] = true;
      recStack[vertex] = true;
      const nodeNeighbors = this.adjList[vertex];
      for (let i = 0; i < nodeNeighbors.length; i++) {
        const currentNode = nodeNeighbors[i];
        if (
          !visited[currentNode] &&
          this.detectCycleUtil(currentNode, visited, recStack)
        ) {
          return true;
        } else if (recStack[currentNode]) {
          return true;
        }
      }
    }
    recStack[vertex] = false;
    return false;
  }
}

const graph = new DirectedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("D", "E");
graph.addEdge("C", "E");
graph.addEdge("A", "D");
graph.addEdge("A", "C");
graph.addEdge("E", "B");
graph.addEdge("D", "B");

console.log(graph.detectCycle());
