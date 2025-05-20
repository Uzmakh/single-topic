const array = [3, 6, 4, 7, 11, 1];

// 1 = [3,4,6,7,1,11]
// 2 = [3,4,6,1,7,11]
// 3 = [3,4,1,6,7,11]
// 4 = [3,1,4,6,7,11]
// 5 = [1,3,4,6,7,11]

/**
 * sorting with loop
  const bubbleSort = (array) => {
  const len = array.length;

  for (i = 0; i < len; i++) {
      for (j = 0; j < len; j++) {
        // swap
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};
console.log(array);
bubbleSort(array);
console.log(array);
 */

// another method
const bubbleSort = (array) => {
  const len = array.length;
  const swap = (array, left, right) => {
    // const temp = array[left];
    // array[left] = array[right];
    // array[right] = temp;
    ([array[left], array[right]] = [array[right], array[left]])
  }

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}
console.log(array);
bubbleSort(array);    //calling function
console.log(array);

// some details
// Time complexity involves here in sorting
// bubble-sort is a slow sorting algorithm.

// Example-3
// sorting with if-else statement
const primeNumbers = [10, 1, 2, 3, 5, 7, 11, 13, 17];
console.log(primeNumbers.sort(function (num1, num2) {
  if (num1 < num2) {
    return 1;
  }
  else if (num1 > num2) {
    return -1;
  }
  return 0
}));

// Example with strings
const str = ['a', 'd', 'f', 'b', 'c'];
console.log(str.sort());
const modifiedStr =
  str.map(function (string) { return string.toUpperCase() }).sort();
console.log(modifiedStr);
// use of arrow function
str.map((string) => { return string.toUpperCase() }).sort();
str.map((string) => string.toUpperCase()).sort();     // with implicit return

// An example of chaining functions in strings
const x = "This is something";
// joining the words to make sentence after having letters in uppercase
console.log(x.split('')
  .map(s => s.toUpperCase()).join(''));
// joining the words to make sentence after filtering the condition
console.log(x.split('')
  .map(s => s.toUpperCase())
  .filter(s => s !== "I")
  .join(''));

