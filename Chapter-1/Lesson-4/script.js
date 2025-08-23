// 1. Find the maximum element in an array.
//    Traditional Solution
//    Time Complexity: O(n), where n is the length of array
//    Space Complexity: O(1)

// function findMaxElement(arr) {
//   let max = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }

//   return max;
// }

// console.log(findMaxElement([3, 16, 8, 4, 5]));

// Optimized
//    Time Complexity: O(n), where n is the length of array
//    Space Complexity: O(1)

// function findMaxElement(arr) {
//   if (arr.length == 0) {
//     return "array is empty!";
//   }

//   let max = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }

//   return max;
// }

// console.log(findMaxElement([3, 16, 8, 4]));
// console.log(findMaxElement([]));

// Task
// Find the biggest even number in an array [10, 20, 30, 100, 909, 1]: 100
// Find the biggest odd number in an array [10, 20, 30, 100, 9080, 1001]: 1001

// 2. Reverse an array in-place.
// Traditional Solution
// Time Complexity: O(n)
// Space Complexity: O(1)

// function reverseArray(arr) {
//   let start = 0;
//   let end = arr.length - 1;

//   while (start < end) {
//     const temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;
//     start++;
//     end--;
//   }

//   return arr;
// }

// console.log(reverseArray([3, 6, 8, 4, 9, 5]));

// Optimized
// Time Complexity: O(n)
// Space Complexity: O(1)

function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr;
}

console.log(reverseArray([3, 6, 8, 4, 9, 5]));

// Task
//1. let a = 10, b = 20 , swap the value of a & b without temp variable
//2. Reverse each string in an array without using in-built js methods
// Input -> ["pink", "red", "blue", "orange"]
// Output - ["knip", "der", "eulb", "egnaro"]

// 3. Find the second smallest element in an array.
// Traditional Solution
// Time Complexity: O(n logn), where n is the length of array
// Space Complexity: O(n), where n is the length of array

// function findSecondSmallest(arr) {
//   const sortedArr = arr.sort((a, b) => a - b);
//   console.log(sortedArr); //[3, 3, 4, 5, 6, 8,9]

//   const uniqueArr = [...new Set(sortedArr)]; //[3, 4, 5, 6, 8, 9]

//   if (uniqueArr.length < 2) {
//     return "Don't add duplicate";
//   }

//   return uniqueArr[1];
// }

// console.log(findSecondSmallest([3, 3, 6, 8, 4, 9, 5]));

// Optimized
// Time complexity: O(n)
// Space Complexity: O(1)

// function findSecondSmallest(arr) {
//   let smallest = Infinity;
//   let secondSmallest = Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//       secondSmallest = smallest;
//       smallest = arr[i];
//     } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
//       secondSmallest = arr[i];
//     }
//   }

//   return secondSmallest;
// }

// console.log(findSecondSmallest([3, 6, 8, 4, 9, 5]));

// Task: Find the second largest value in an array

// 4. Find intersection of two arrays.
// Traditional Solution
// Time Complexity: O(n * m)
// Space Complexity: O(k), where k is the length of an array

// function findIntersection(arr1, arr2) {
//   const intersection = []; //k

//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j] && !intersection.includes(arr1[i])) {
//         intersection.push(arr1[i]);
//       }
//     }
//   }
//   return intersection;
// }

// const arr1 = [1, 2, 3, 4, 5]; //n
// const arr2 = [4, 5, 6, 7, 8]; //m
// console.log(findIntersection(arr1, arr2)); //[4,5]

// Optimized
// Time complexity: O(m)
// Space Compexity: O(k)

// function findIntersection(arr1, arr2) {
//   const set1 = new Set(arr1);
//   const intersection = [];

//   for (let i = 0; i < arr2.length; i++) {
//     if (set1.has(arr2[i])) {
//       intersection.push(arr2[i]);
//       set1.delete(arr2[i]);
//     }
//   }

//   return intersection;
// }

// const arr1 = [1, 2, 3, 4, 5]; //n
// const arr2 = [4, 5, 6, 7, 8]; //m
// console.log(findIntersection(arr1, arr2)); //

// Task
// Symmetric diff:
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [4, 5, 6, 7, 8];
// outout: [1, 2, 3, 6, 7, 8 ]

// 5.  Find the longest substring without repeating characters.
// Traditional Solution
// Time Complexity:
// Space Complexity:

// function longestSubstringWithoutRepeatingChars(str) {
//   let longest = "";
//   for (let i = 0; i < str.length; i++) {
//     let substring = "";
//     for (let j = i; j < str.length; j++) {
//       if (substring.includes(str[j])) {
//         break;
//       }
//       substring += str[j]; //
//     }
//     if (substring.length > longest.length) {
//       longest = substring;
//     }
//   }
//   return longest;
// }

// console.log(longestSubstringWithoutRepeatingChars("abcdbcbb"));

// Optimized
// function longestSubstringWithoutRepeatingChars(str) {
// }

// console.log(longestSubstringWithoutRepeatingChars("abcdbcbb"));

// 6. Find the first non-repeating character in it.
// Traditional Solution
// Time Complexity:
// Space Complexity:

// function firstNonRepeatingChar(str) {
//   for (let i = 0; i < str.length; i++) {
//     let isRepeated = false;
//     for (let j = 0; j < str.length; j++) {
//       if (i !== j && str[i] === str[j]) {
//         isRepeated = true;
//         break;
//       }
//     }
//     if (!isRepeated) {
//       return str[i];
//     }
//   }
//   return null;
// }

// console.log(firstNonRepeatingChar("lovealmario"));

// Optimized
// Time compelxity
// Space compelxity

// function firstNonRepeatingChar(str) {
// }

// console.log(firstNonRepeatingChar("lovealmario"));

// 7. Find the length of the longest palindromic substring.
// Traditional Solution
// Time Complexity:
// Space Complexity:

// function longestPalindromicSubstring(str) {
//   let longest = '';
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i; j < str.length; j++) {
//       let substring = str.substring(i, j + 1);
//       if (isPalindrome(substring) && substring.length > longest.length) {
//         longest = substring;
//       }
//     }
//   }
//   return longest;
// }

// function isPalindrome(str) {
//   return str === str.split('').reverse().join('');
// }

// console.log(longestPalindromicSubstring("babad"));

// Optimized

// function isPalindrome(str) {
// }

// console.log(longestPalindromicSubstring("babad"));

// 8. Determine if 2nd string is an anagram of 1st string.
// Traditional Solution
// Time Complexity: O(n logn)
// Space Complexity: O(n)

// function isAnagram(s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }

//   const sortedS = s.split("").sort().join("");
//   const sortedT = t.split("").sort().join("");
//   return sortedS === sortedT;
// }

// console.log(isAnagram("triangle", "integral"));

// Optimized
// Time complexity: O(n)
// space complexity: O(n)

// function isAnagram(s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }

//   const charCount = {}; //

//   for (let char of s) {
//     charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
//   }

//   //   console.log(charCount);

//   for (let char of t) {
//     if (!charCount[char]) {
//       return false;
//     }
//     charCount[char]--; //decrement the count of characters
//   }

//   return true;
// }

// console.log(isAnagram("triangle", "integral"));

// Task
//   Try it with Map

// 9. Check if a String Matches a Pattern
// Traditional Solution
// Time Complexity:
// Space Complexity:

// function patternMatching(pattern, str) {
//   const patternLength = pattern.length;
//   const strLength = str.length;
//   if (patternLength === 0 && strLength === 0) {
//     return true;
//   }
//   if (patternLength === 0 || strLength === 0) {
//     return false;
//   }
//   const patternArr = pattern.split("");
//   const strArr = str.split(" ");
//   if (patternArr.length !== strArr.length) {
//     return false;
//   }
//   const patternMap = new Map();
//   const strSet = new Set();
//   for (let i = 0; i < patternLength; i++) {
//     const char = patternArr[i];
//     const word = strArr[i];
//     if (!patternMap.has(char) && !strSet.has(word)) {
//       patternMap.set(char, word);
//       strSet.add(word);
//     } else {
//       if (patternMap.get(char) !== word) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

// console.log(patternMatching("abba", "dog cat cat dog")); //

// Optimized

// function patternMatching(pattern, str) {
// }

// console.log(patternMatching("abba", "dog cat cat dog")); //

// 10. Implement a function to find all occurrences of the pattern in the text.
// Traditional Solution
// Time Complexity: O(n - m  * m)
// Space Complexity: O(K), where k is the length of occurences array

// function patternMatching(text, pattern) {
//   const n = text.length;
//   const m = pattern.length;
//   const occurrences = [];

//   for (let i = 0; i <= n - m; i++) {
//     let j = 0;
//     for (j = 0; j < m; j++) {
//       if (text[i + j] !== pattern[j]) {
//         break;
//       }
//     }

//     if (j === m) {
//       occurrences.push(i);
//     }
//   }
//   return occurrences;
// }

// console.log(patternMatching("abababab", "aba"));

// Optimized
// Time complexity: O(n - m * (m - 1)) -> O(n * m)
// space complexity: O(k)

// function patternMatching(text, pattern) {
//   const n = text.length;
//   const m = pattern.length;
//   const occurrences = [];

//   let i = 0;
//   while (i <= n - m) {
//     let j = 0;
//     while (j < m && text[i + j] === pattern[j]) {
//       j++;
//     }

//     if (j == m) {
//       occurrences.push(i);
//       i = i + m - 1; //
//     } else {
//       i++;
//     }
//   }

//   return occurrences;
// }

// console.log(patternMatching("abacbabab", "aba"));

// 11. Count the number of occurrences of the pattern in the text.
// Traditional Solution
// Time Complexity: O(n - m  * m)
// Space Complexity: O(1), where k is the length of occurences array

// function countOccurrences(text, pattern) {
//   const n = text.length;
//   const m = pattern.length;
//   let count = 0;

//   for (let i = 0; i <= n - m; i++) {
//     let j = 0;
//     while (j < m) {
//       if (text[i + j] !== pattern[j]) {
//         break;
//       }
//       j++;
//     }
//     if (j === m) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countOccurrences("Hello, Hello, world!", "Hello"));

// Optimized
// Time complexity: O(n - m * (m - 1)) -> O(n * m)
// space complexity: O(1)

// function countOccurrences(text, pattern) {
//   const n = text.length;
//   const m = pattern.length;
//   let count = 0;

//   let i = 0;
//   while (i <= n - m) {
//     let j = 0;
//     while (j < m && text[i + j] === pattern[j]) {
//       j++;
//     }

//     if (j == m) {
//       count++;
//       i = i + m - 1; //
//     } else {
//       i++;
//     }
//   }

//   return count;
// }

// console.log(countOccurrences("abababab", "aba"));

// 12.Replace all occurrences of the pattern in the text with a given replacement string.
// Traditional Solution
// Time Complexity: O(n * m)
// Space Complexity: O(1)

// function patternReplace(text, pattern, replacement) {
//   let result = "";
//   const n = text.length;
//   const m = pattern.length;

//   let i = 0;
//   while (i <= n - m) {
//     let j = 0;
//     while (j < m && text[i + j] === pattern[j]) {
//       j++;
//     }
//     if (j === m) {
//       result += replacement;
//       i += m; // i = i + m
//     } else {
//       result += text[i];
//       i++;
//     }
//   }
//   return result + text.slice(i);
// }

// console.log(patternReplace("abababab", "aba", "xyz"));

// Optimized
// Time complexity: O(n)
// Space complexity: O(n)
// function patternReplace(text, pattern, replacement) {
//   let regex = /pattern/g;
//   return text.replace(regex, replacement);
// }

// console.log(patternReplace("abababab", "aba", "xyz"));

//Covered: 1, 2, 3, 4, 8, 10, 11, 6, 12, 9, 5, 7
//Complete Task: Mentioned below the questions, I have covered
