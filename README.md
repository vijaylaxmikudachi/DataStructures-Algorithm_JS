# JavaScript Data Structures and Algorithms

## Project Overview

This project covers the implementation and detailed explanation of essential **Data Structures** and **Algorithms** in JavaScript, from foundational structures like arrays and linked lists to more complex structures like graphs and trees. It also includes a variety of **Searching** and **Sorting Algorithms** commonly used in algorithmic problem-solving and coding interviews. Each data structure and algorithm is implemented in JavaScript with well-structured code examples.

---

# DataStructures-Algorithm_JS
Data Structures
Primitive
Non-primitive
Arrays
String
Object 
Stacks
Queue


## Table of Contents

1. [Data Structures](#data-structures)
   - Arrays
   - Linked Lists
   - Stacks
   - Queues
   - Hash Tables
   - Trees
   - Graphs
2. [Algorithms](#algorithms)
   - Searching Algorithms
   - Sorting Algorithms


---

## Data Structures

### Arrays
**Arrays** are the most basic data structure in JavaScript, storing data in contiguous memory locations. They are particularly useful for storing collections of data that are accessed by an index.

## Linked Lists
A Linked List is a data structure where each element (node) contains a reference (link) to the next node in the sequence. Linked Lists are dynamic and do not require contiguous memory.

## Example Operations:

1. Insertion
2. Deletion
3. Traversal

## Stacks
A Stack is a LIFO (Last In, First Out) data structure. It supports operations at one end of the collection, typically referred to as the "top."

### Example Operations:

`push` (insertion at the top)
`pop` (removal from the top)
`peek` (retrieve the top element without removing it)

## Queues
A Queue is a FIFO (First In, First Out) data structure. It supports operations at both ends: insertion at the back and removal from the front.

### Example Operations:

`enqueue` (insert at the back)
`dequeue` (remove from the front)

## Hash Tables
Hash Tables are data structures that map keys to values for efficient lookup. JavaScript objects or Map are used to implement hash tables.

### Example Operations:

Insertion
Deletion
Searching by key

## Trees
Trees are hierarchical data structures with nodes connected by edges. The topmost node is called the root, and each node can have children. A common type of tree is the Binary Tree, where each node has at most two children.

### Binary Search Tree (BST): A BST is a tree where each node's left child is less than the node, and the right child is greater.

### Example Operations:

Insertion
Deletion
Traversal (Inorder, Preorder, Postorder)

## Graphs
Graphs are collections of nodes (vertices) connected by edges. Graphs can be directed or undirected and can have weights on edges.

Example Operations:

Adding nodes and edges
BFS (Breadth-First Search)
DFS (Depth-First Search)

## Algorithms
## Searching Algorithms
### Linear Search
Linear search checks each element of an array sequentially until the target element is found.

**Time Complexity**: O(n)

**Binary Search**
Binary search is a more efficient algorithm that works on sorted arrays. It repeatedly divides the array in half to locate the target element.

**Time Complexity**: O(log n)

## Sorting Algorithms
1. **Bubble Sort**
Worst Case: O(n²) (When the array is sorted in reverse order)
Best Case: O(n) (When the array is already sorted)
Average Case: O(n²)
Space Complexity: O(1) (In-place sorting)

2. **Insertion Sort**
Worst Case: O(n²) (When the array is sorted in reverse order)
Best Case: O(n) (When the array is already sorted)
Average Case: O(n²)
Space Complexity: O(1) (In-place sorting)

3. **Selection Sort**
Worst Case: O(n²)
Best Case: O(n²) (Even if the array is sorted, it still performs the same number of comparisons)
Average Case: O(n²)
Space Complexity: O(1) (In-place sorting)

4. **Merge Sort**
Worst Case: O(n log n)
Best Case: O(n log n)
Average Case: O(n log n)
Space Complexity: O(n) (Due to the extra space required for merging)

5. **Quick Sort**
Worst Case: O(n²) (Occurs when the pivot chosen is consistently the smallest or largest element, e.g., if the array is already sorted and a poor pivot is chosen)
Best Case: O(n log n) (When the pivot divides the array into two nearly equal halves)
Average Case: O(n log n)
Space Complexity:
In-place QuickSort: O(log n) (for the recursion stack)
Non in-place (using extra arrays): O(n)

## When to Use Each Algorithm:
1.  Bubble Sort, Insertion Sort, and Selection Sort are generally avoided for large datasets 
    due to their poor average-case performance (O(n²)).
2.  Merge Sort is good for larger datasets and guarantees O(n log n) time, but it requires extra space.
3.  Quick Sort is often the preferred choice due to its fast average-case performance (O(n log n)), 
    but care should be taken with the pivot selection to avoid the worst case.
