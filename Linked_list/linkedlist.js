 class List{
    constructor(data){
        this.head ={
                        value: data,
                        next: null,
                    };
        this.tail = this.head;
        this.size = 1;
    }
    appendNode(nodeData){
        let newNode ={
                        value:nodeData,
                        next: null,
                      };
        this.tail.next = newNode;
        this.tail = newNode;
        this.size++;
    }
    traversing(){
        let count = 0;
        let currentNode = this.head;
        let printlist = '';
        while(count<this.size){
            printlist+=currentNode.value+'->';
            currentNode = currentNode.next;
            count++;
        }
        console.log(printlist+'null');
    }
    deleteNode(index){
        let count =1;
        let lead = this.head;
        if(index === 1){
            this.head = this.head.next;
            this.size--;
        }
        else{
            while(count<index-1){
                lead = lead.next;
                count++;
            }
            let nextNode = lead.next.next;
            lead.next = nextNode;
            this.size--;
        }
    }
 
}
let list = new List(100);
list.appendNode(200);
list.appendNode(300);
list.appendNode(400);
