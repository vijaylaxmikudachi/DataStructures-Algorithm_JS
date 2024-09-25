class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    
    addVertex(v) {
        if (!this.adjacencyList[v]) {
            this.adjacencyList[v] = [];
        }
    }

    // Add an edge between two nodes
    addEdge(v1, v2) {
        if (this.adjacencyList[v1]) {
            this.adjacencyList[v1].push(v2);
        }
        if (this.adjacencyList[v2]) {
            this.adjacencyList[v2].push(v1); 
        }
    }

    // Print
    printGraph() {
        for (let v in this.adjacencyList) {
            console.log(`${v} -> ${this.adjacencyList[v].join(', ')}`);
        }
    }
}


const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');
graph.printGraph();
