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


