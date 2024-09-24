class Node{
    constructor(data){
        this.head = data;
        this.prev = null;
        this.next = null;
    }
}
class doublylinkedlist{
    constructor(data){
        this.head = null;
    }
    addFirst(data){
        let newNode = new Node(data);
        newNode.next = this.head;
        if(this.head){
            this.head.prev = newNode;
        }
        this.head = newNode;
    }
    addLast(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
        }
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        newNode.prev = current;
         current.next = newNode;
    }
    size(){
        let count = 0;
        let current = this.head;
        while(current.next){
            current = current.next;
            count++
        }
        return count;
    }
    addAt(index,data){
        if(index<0 || index>this.size){
            console.log("Out of bound")
        }
        let newNode = new Node(data);
        if(index === 0){
            newNode.next = this.head;
            if(this.head){
                this.head.prev = newNode;
            }
            this.head = newNode;
        }
        let current = this.head;
        for(let i=0 ; i<index ;i++){
            current = current.next;
        }
        newNode.prev = current;
        newNode.next = current.next;
        if(current.next){
            current.next.prev = newNode;
        }
        current.next = newNode;
    }
    removeFirst(){
        if(!this.head){
            return;
        }
        this.head = this.head.next;
        if(this.head){
            this.head.prev = null;
        }
    }
    removeLast(){
        if(!this.head){
            return;
        }
        if(!this.head.next){
            this.head = null;
            return;
        }
        let current = this.head;
        while(current.next.next){
            current = current.next;
        }
        current.next = null;
    }
    removeAt(index){
        if(index<0 || index>this.size){
            console.log("Ount of bound")
        }
        if(index === 0){
            this.head = this.head.next;
            if(this.head){
                this.head.prev = null;
            }
        }
        let current = this.head
        for(let i=0 ; i<index-1;i++){
            current = current.next;
        }
        if(current.next){
            current.next = current.next.next;
            if(current.next){
                current.next.prev = current;
            }
        }
    }
    print(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}
let dll = new doublylinkedlist(100);
dll.addFirst(200);
dll.addFirst(300);
dll.addAt(1,1000);
dll.print();