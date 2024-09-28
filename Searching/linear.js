function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;  // Return the index if the target is found
        }
    }
    return -1;  // Return -1 if the target is not found
}
//Linear Search	BC:O(1)	AC:O(n)	WC:O(n)	Space:O(1)