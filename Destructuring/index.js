const numbers = ['1', '2', '3', '4', '5'];

// Tradidition way of ES5
// accessing each element of the array
// const val1 = numbers[0];
// const val2 = numbers[1];
// const val3 = numbers[2];
// const val4 = numbers[3];
// const val5 = numbers[4];

// console.log(val1)
// console.log(val2)
// console.log(val3)
// console.log(val4)
// console.log(val5)

// Problem-1   ES6 gives modern Js method of
// Using destructuring, getting all values into variables
const [val1, val2, val3, val4, val5] = numbers;

console.log(val1, val2, val3, val4, val5);

console.log(val1)
console.log(val2)
console.log(val3)
console.log(val4)
console.log(val5)

// get the first 2 values into variables
const [first, second, ...rest] = numbers;

console.log(first, second);
console.log(rest);           //rest element are in string form in an array

// Problem-2
const colors = ["red", "green", "blue", "yellow"];

// using destructuring, ignore the first and the last values and extract green and blue values into variables.
const [, green, blue, ] = colors;

console.log(green)
console.log(blue)