class List{
    constructor(data){
        this.head ={
                    value: data,
                    next: null
        };
        this.tail = this.head;
        this.size = 1;
    }
appendNode(nodeData){
    let newNode ={
                    value:nodeData,
                    next: null
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;

}
traversing(){
    let currentNode = this.head;
    let printlist = '';
    while(currentNode){
        printlist+=currentNode.value+'->';
        currentNode = currentNode.next;

    }
    console.log(printlist+'null');
}
deleteNode(index){
    let count = 1;
    let lead = this.head;
    if(index === 1)
    {
        this.head = this.head.next;
    }
    while(count<index-1)
    {
    lead = lead.next;
    count++;
    }
    let nextNode = lead.next.next;
    lead.next = nextNode;
    this.size--;
}

insertNode(index,Value){
    let count = 1;
    let currentNode = this.head;
    while(count<index-1){
        count++;
        currentNode = currentNode.next;
    }
    let nextNode = currentNode.next;
    currentNode.next = {
                    value: Value,
                    next: nextNode
    };
    this.size++;
}
search(ele){
    let currentNode = this.head;
    var isp = false;
    while(currentNode){
        if(currentNode.value === ele){
            isp = true;
        }
        currentNode = currentNode.next;
    }
    return isp;
}
boubleS(){
    let swap ;
    let currentNode = this.head;
    do{
         swap = false;
        while(currentNode!==null && currentNode.next!==null){
            if(currentNode.value>currentNode.next.value){
                let temp = currentNode.data;
                currentNode.value = currentNode.next.value;
                currentNode.next.value = temp;
                swap = true;
            }
            currentNode = currentNode.next;
        }

    }while(swap);
}
}
let list = new List(100);
list.appendNode(300);
list.appendNode(200);

list.appendNode(400);
list.traversing();

//list.deleteNode(2);
list.traversing();

list.insertNode(2,1000);
list.traversing();
list.boubleS();
list.traversing();


console.log("Searching for 300:", list.search(300));  // true
console.log("Searching for 50:", list.search(50));  // false