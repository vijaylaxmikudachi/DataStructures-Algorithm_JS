class Stack {
    constructor() {
      this.items = [];
    }
  
    //  Add an element to the top of the stack
    push(element) {
      this.items.push(element);
    }
  
    // Remove and return the top element of the stack
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items.pop();
    }
  
    // top element of the stack without removing it
    top() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items[this.items.length - 1];
    }
  
    // isEmpty: Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // size: Get the number of elements in the stack
    size() {
      return this.items.length;
    }
  
    // Print the stack
    printStack() {
      console.log(this.items.toString());
    }
  }
  
  // Example usage:
  let stack = new Stack();
  
  // Adding elements to the stack
  stack.push(10);
  stack.push(20);
  stack.push(30);
  console.log("Stack after pushing elements:");
  stack.printStack(); // Output: 10,20,30
  
  // Removing the top element from the stack
  console.log("Popped element:", stack.pop()); // Output: 30
  console.log("Stack after pop:");
  stack.printStack(); // Output: 10,20
  
  //  top element
  console.log("Top element:", stack.top()); // Output: 20
  
  // Check 
  console.log("Is the stack empty?", stack.isEmpty()); // Output: false
  
  //  size of the stack
  console.log("Stack size:", stack.size()); // Output: 2
  