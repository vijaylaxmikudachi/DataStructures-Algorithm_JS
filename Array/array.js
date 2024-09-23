//Maximim number in an array
function maxNum(a) {
    let max = a[0]; // first element is the max
    for (let i = 1; i < a.length; i++) {
        if (a[i] > max) {
            max = a[i];
        }
    }
    return max;
}

console.log("Maximum number is: "+maxNum([3, 5, 7, 2, 8]));  // Output: 8


//Removing duplicates
function removeDuplicates(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (uniqueArr.indexOf(arr[i]) === -1) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));  // Output: [1, 2, 3, 4, 5]


