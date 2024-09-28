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
  class QueueUsingStacks {
    constructor() {
        this.stack1 = []; // Enqueue stack
        this.stack2 = []; // Dequeue stack
    }

    // Add element to the queue
    enqueue(element) {
        this.stack1.push(element);  // Add to the top of stack1
    }

    // Remove and return the element from the front of the queue
    dequeue() {
        if (this.stack2.length === 0) {
            // If stack2 is empty, move all elements from stack1 to stack2
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }

        // If stack2 is still empty, the queue is empty
        if (this.stack2.length === 0) {
            return "Queue is empty";
        } else {
            return this.stack2.pop();  // Remove from the top of stack2
        }
    }

    // Get the front element of the queue
    front() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }

        if (this.stack2.length === 0) {
            return "Queue is empty";
        } else {
            return this.stack2[this.stack2.length - 1];
        }
    }

    // Check if the queue is empty
    isEmpty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }
}
function mergeQueues(queue1, queue2) {
  let mergedQueue = new Queue();

  // Merge elements from both queues
  while (!queue1.isEmpty() || !queue2.isEmpty()) {
      if (!queue1.isEmpty()) {
          mergedQueue.enqueue(queue1.dequeue());
      }
      if (!queue2.isEmpty()) {
          mergedQueue.enqueue(queue2.dequeue());
      }
  }

  return mergedQueue;
}
