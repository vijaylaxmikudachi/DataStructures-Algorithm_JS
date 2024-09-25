class Node{
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class Btree{
    constructor(){
        this.root = null;
    }
    makeTree(val){
        let newNode = new Node(val);
        if(this.root === null){
            this.root = newNode;
        }
        else{
            this.insertNode(this.root,newNode);
        }
    }
    insertNode(root,newNode){
        if(root.value>newNode){
            if(root.left === null){
                root.left = newNode;
            }
            else{
                this.insertNode(root.left,newNode);
            }
        }
        else{
            if(root.right === null){
                root.right = newNode;
            }
            else {
                this.insertNode(root.right,newNode);
            }
        }
    }
    search(root,val){
        if(root === null){
            return false;
        }
        else if(root === val){
            return true;
        }
        else if(root>val){
            return this.search(root.left,val);
        }
        else{
            return this.search(root.right,val);
        }
    }
}

let bt = new Btree();
bt.makeTree(20);
bt.makeTree(30);

console.log(bt);

console.log(bt.search(bt.root,20));

// Class 
class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;  // Left 
        this.right = null; // Right 
    }
}

const root = new BinaryTreeNode(10);
root.left = new BinaryTreeNode(5);
root.right = new BinaryTreeNode(20);
root.left.left = new BinaryTreeNode(3);
root.left.right = new BinaryTreeNode(8);
root.right.left = new BinaryTreeNode(15);
root.right.right = new BinaryTreeNode(25);

console.log(root);

