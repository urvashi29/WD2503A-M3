//Space & Time complexity (Worst (O))

// In Space complexity, input is not counted
//How to calculate
// O(1): constant
// Time : element is the start (no loops)
// Space: No new array/map/set is created

// Example
function search(arr) {
  console.log(arr[0]);
}

search([10, 2, 10, 30]);

// O(n)- Linear, n is the length of array
function linearSearch(arr) {
  let arrOne = [];
  for (let i = 0; i < arr.length; i++) {
    arrOne[i] = arr[i];
  }
  console.log(arrOne);
}

linearSearch([1, 3, 10, 2]);
// Time: O(n)
// space: O(n)

// O(n^2) -> Quadratic
let arr = [1, 3, 9, 8, 10]; //n
let arrTwo = [10, 20, 30]; //m

// O(n) * O(m) -> O(n * m)
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arrTwo.length; j++) {}
}

// O(n) *  O(n) -> O(n2)
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {}
}

// O(logn) -> logrithmic
// for (let i = 0; i < arr.length / 2; i++) {}

// O(nlog n)
// for(let i = 0; i < arr.length; i++) {
//     for(let j = 0; j < arr.length /2; j++) {

//     }
// }

// O(2n)
// O(n) + O(n) -> O(2n)
// function sample() {
// for() {

// }

// for() {

// }
// }
// sample();

// O(2^n)-> Exponential (Recursion)

// Activity
function findMax(arr) {
  let max = arr[0];
  for (var num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

// Space: O(1)
// Time: O(n)

// Task
// Palindrome Number
// Maximum Subarray
// Remove Element
// Contains Duplicate
// Add Two Numbers
// Majority Element
// Remove Duplicates from Sorted Array
// Two Sum
