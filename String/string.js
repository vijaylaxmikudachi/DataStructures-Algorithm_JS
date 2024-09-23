//Reversing string
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString("abcd"));  // Output: "dcab

//first non repeating charecter
function firstNonRepeatingChar(str) {
    let charCount = {};
    
    // Count the occurrence of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first character with a count of 1
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null;
}

console.log(firstNonRepeatingChar("swiss"));  // Output: "w"
console.log(firstNonRepeatingChar("aabbcc"));  // Output: null

//Vowels in a string
function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("hello"));  // Output: 2
console.log(countVowels("xyz"));  // Output: 0

//Longest word
function findLongestWord(str) {
    let words = str.split(' ');
    let longestWord = '';

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));  // Output: "jumped"
