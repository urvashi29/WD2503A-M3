// space complexity O(n)
getElements = (arr) => {
  let getElements = []; //O(n): n is the length of the array
  for (let i = 0; i < arr.length; i++) {
    getElements[i] = arr[i];
  }

  return getElements;
};

let arr = [10, 20, 30, 100, 200, 400]; //input
console.log(getElements(arr));

//  space O(1) : constant
getFirstElement = (arr) => {
  let str = "hello";
  return arr[0];
};

let a = [10, 20, 30, 100, 200, 400]; //input
console.log(getFirstElement(a));

// Time complexity O(n): n is the length of the array
linearSearch = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 200) {
      return arr[i];
    }
  }
};

console.log(linearSearch(arr));

// Time complexity O(1)
getElement = (a) => {
  return a[1];
};

console.log(getElement(a));
