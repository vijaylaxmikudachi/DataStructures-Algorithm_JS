class Queue {
    constructor() {
      this.items = [];
    }
  
    // pushing an element to the end of the queue
    enqueue(element) {
      this.items.push(element);
    }
  
    // shift Remove an element from the front of the queue
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items.shift();
    }
  
    //  front element of the queue without removing it
    front() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items[0];
    }
  
    // isEmpty:
    isEmpty() {
      return this.items.length === 0;
    }
  
    // size of the queue
    size() {
      return this.items.length;
    }
  
    // Print the queue
    printQueue() {
      console.log(this.items.toString());
    }
  }
  
  let queue = new Queue();
  
  // Adding elements 
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  console.log("Queue after enqueuing elements:");
  queue.printQueue(); // Output: 10,20,30
  
  // Removing an element from the queue
  console.log("Dequeued element:", queue.dequeue()); // Output: 10
  console.log("Queue after dequeue:");
  queue.printQueue(); // Output: 20,30
  
  // Check the front element
  console.log("Front element:", queue.front()); // Output: 20
  
  // Check if the queue is empty
  console.log("Is the queue empty?", queue.isEmpty()); // Output: false
  
  // Get the size of the queue
  console.log("Queue size:", queue.size()); // Output: 2
  