class Node {
    constructor(data) {
      this.data = data; // Initialize with data
      this.prev = null;
      this.next = null;
    }
  }
  
  class doublylinkedlist {
    constructor(data) {
      this.head = null;
    }
  
    addFirst(data) {
      let newNode = new Node(data);
      newNode.next = this.head;
      if (this.head) {
        this.head.prev = newNode;
      }
      this.head = newNode;
    }
  
    addLast(data) {
      let newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
        return;
      }
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      newNode.prev = current;
      current.next = newNode;
    }
  
    size() {
      let count = 0;
      let current = this.head;
      while (current) {
        count++;
        current = current.next;
      }
      return count;
    }
  
    addAt(index, data) {
      if (index < 0 || index > this.size) {
        console.log("Out of bound");
        return;
      }
      let newNode = new Node(data);
      if (index === 0) {
        newNode.next = this.head;
        if (this.head) {
          this.head.prev = newNode;
        }
        this.head = newNode;
        return;
      }
      let current = this.head;
      for (let i = 0; i < index && current != null; i++) {
        current = current.next;
      }
      if (!current) {
        console.log("Index out of range");
        return;
      }
      newNode.prev = current.prev;
      newNode.next = current;
      if (current.prev) {
        current.prev.next = newNode;
      }
      current.prev = newNode;
    }
  
    removeFirst() {
      if (!this.head) {
        return;
      }
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      }
    }
  
    removeLast() {
      if (!this.head) {
        return;
      }
      if (!this.head.next) {
        this.head = null;
        return;
      }
      let current = this.head;
      while (current.next.next) {
        current = current.next;
      }
      current.next = null;
    }
  
    removeAt(index) {
      if (index < 0 || index > this.size) {
        console.log("Out of bound");
        return;
      }
      // ... rest of removeAt implementation
    }
  
    print() {
      let current = this.head;
      while (current != null) {
        console.log(current.data); // Use console.log here
        current = current.next;
      }
    }
  }
  
  let dll = new doublylinkedlist(100);
  dll.addFirst(200);
  dll.addFirst(300);
  dll.addAt(1,1000);
  dll.print();