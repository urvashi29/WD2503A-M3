//Regex
function emailValidation(email) {
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/gm;
  if (emailPattern.test(email)) {
    console.log("valid email!");
  } else {
    console.log("Invalid Email!");
  }
}

let email = "admin@gmail.com";
emailValidation(email);

//match for a specific word
const regex = /almabetter/gi;
console.log(regex.test("I study at Almabetter"));

//extraction
const regexDate = /\d{2}-\d{2}-\d{4}/;
let str = "My DOB is: 12-12-2025";
console.log(str.match(regexDate));

//Replace
const regeReplace = /study/g;
const strVal = "I study at Almabetter, I study MERN stack";
console.log(strVal.replaceAll(regeReplace, "Learn"));

// [0-9]
// [A-Z]
// [a-z]
// g -> global
// i -> case insensitive
// m -> multi line

//Naive String Pattern Algo
function naiveAlgo(text, pattern) {
  let m = text.length;
  let n = pattern.length;
  let count = 0;

  for (let i = 0; i <= m - n; i++) {
    let j;
    for (j = 0; j < n; j++) {
      if (text[i + j] !== pattern[j]) {
        break;
      }
    }
    if (j == n) {
      count++;
    }
  }
  console.log(count);
}

naiveAlgo("ABABABCABAABAABABC", "ABABC");

// Regex
// Find a digit in a string (e.g: "hello789":  789)
// Find all the consonants in string: "iaiuhgufiiai"
// Check whether a given value is alphanumeric or not (e.g: hello789:  yes)
// email, password, contact regex, try test method on this
// check given value(string) contains alpha, underscore, dash check given url is valid or not (e.g. http://www.amazon.in)