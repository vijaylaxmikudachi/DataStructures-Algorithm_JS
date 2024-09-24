function FirstElement(arr) {
    return arr[0];  // Accessing an element is constant time
}

console.log(FirstElement([1,2,3,4]));

function printElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);  // Loop runs n times, where n is the size of arr
    }
}
console.log(printElements([1,2,3,4]));

function printAllPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i], arr[j]);  // Nested loops cause the time complexity to be O(n^2)
        }
    }
}
console.log(printAllPairs([1,2,3,4]));

//Searching
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {                     //O(log n) - Logarithmic Time
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}


//Space
//1.Constant space
function sum(a, b) {
    return a + b;  // No extra space used other than the input
}

//2.Linear space
function createArray(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(i);  // The array grows linearly with the size n
    }
    return arr;
}
//3.Quadratic n^2
function createMatrix(n) {
    let matrix = [];
    for (let i = 0; i < n; i++) {
        matrix[i] = [];
        for (let j = 0; j < n; j++) {
            matrix[i][j] = i * j;  // The space used grows quadratically as n increases
        }
    }
    return matrix;
}

//Note:
/*
Time Complexity focuses on how the time taken by an algorithm increases as the input size grows.
Space Complexity measures how much extra memory the algorithm needs as the input size grows.
*/

