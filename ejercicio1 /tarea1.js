/**
 * Exercise #1 ( sugerencia join() )
Copy the code below into your workspace:
let arr = ["This", "is", "a", "sentence."];
function printOutString() {
  // your code here
}

printOutString();
Complete the function to print out the string: This is a sentence.

 * 
 * 
 */

let arr = ["This", "is", "a", "sentence."];

function printOutString(arr) {
    let sentence = "";
    for (let wordIndex = 0; wordIndex < arr.length; wordIndex++) {
        sentence += " "+ arr[wordIndex]; // sentence = sentence + " "+ arr[wordIndex];
    }
    return sentence;
  }
  console.log(printOutString(arr)); // " This is a sentence."
  console.log( arr.join(" ")  );