//Reversing an array
function reverseArray(a) {
    let left = 0;
    let right = a.length - 1;
    while (left < right) {
        let temp = a[left];
        a[left] = a[right];
        a[right] = temp;
        left++;
        right--;
    }
    return a;
}

console.log(reverseArray([1, 2, 3, 4, 5]));  // Output: [5, 4, 3, 2, 1]


//pairs of number whose sum == target number
function findPairs(arr, target) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                result.push([arr[i], arr[j]]);
            }
        }
    }
    return result;
}

console.log(findPairs([1, 2, 3, 4, 5], 6));  // Output: [[1, 5], [2, 4]]
