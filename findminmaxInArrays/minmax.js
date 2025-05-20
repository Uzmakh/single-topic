/**
  ========================================= 
    Find the min and max value in an array
  =========================================
  */

/**
    const arr = [12, 3, 6, 45, 67, 2];

function getMinNum(arr){
    let smallNum = Number.POSITIVE_INFINITY; 
    for (const num of arr) {
        if (num < smallNum) {
            smallNum = num;
        }
    }
return smallNum;
}
const minNum = getMinNum(arr);
console.log(minNum);
 */

//// Basic method

/*
function findMinMax(numbers) {
  let min = numbers[0]; //first index
let max = numbers[0];
let len = numbers.length;

  for (let i = 0; i < len; i++) {
    if (min > numbers[i]) {
      min = numbers[i];
    }
    else if (max < numbers[i]) {
      max = numbers[i];
    }
  }  
  min;
  max;
  return `Max: ${max}, Min: ${min}`;
  }

let numbers = [3, -1, 0, -19];
//   console.log("Minimum value in array is : " + min);
// console.log("Maximum value in array is : " + max);
const output = findMinMax(numbers);
console.log(output);
*/



// Find min and max values using reduce method
// let arr1 = [10, 30, 20, 15, 90, 65];

// let maxi = arr1.reduce((acc, val) => {
//   return acc > val ? acc : val;
// });
// let mini = arr1.reduce((acc, val) => {
//   return acc < val ? acc : val;
// });
// console.log("max: " + maxi);
// console.log("min: " + mini);

// Example-3
// Sort the array using findMin method and remove that element.
/*
function getMinAndRemove(array) {
  // Find the index of the minimum value
  let minIndex = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[minIndex]) {
      minIndex = i;
    }
  }

  // Extract and remove the minimum value using splice
  const minValue = array.splice(minIndex, 1)[0];

  // Return the minimum value directly
  return minValue;
}

const number = [6, 3, 9, 10, 2];
const min = getMinAndRemove(number);

console.log(number); // Output: [6, 9, 10, 2]
console.log(min);    // Output: 3
*/

// Another method
/*function findMinMax(numbers2) {
  const sortedArray = numbers2.sort((a, b) => a - b)
  return {
    min: sortedArray[0],
    max: sortedArray[sortedArray.length-1]
  }
  }
const numbers2 = [6, 3, 9, 10, 2];
console.log(findMinMax(numbers2));
*/