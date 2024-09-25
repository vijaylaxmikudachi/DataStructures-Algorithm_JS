//  class  Node
class Node {
    constructor(value) {
        this.value = value;
        this.children = []; // Array to store child nodes
    }
    
    //add a child node
    addChild(child) {
        this.children.push(child);
    }
}

const root = new Node(1); // Root node with value 1
const child1 = new Node(2); // Child node with value 2
const child2 = new Node(3); // Child node with value 3

root.addChild(child1);
root.addChild(child2);

console.log(root);
