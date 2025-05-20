//! CLASS-24
//! Intro of Arrays
//? ordered collection of items
//? special type of object, to store multiple types of data

// let fruits = ["apple", "mango", "banana"];
// console.log(fruits); //access the array
// console.log(fruits.length); //get the number of items in an array

//? accessing the elements of array(simple method)
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
  //  console.log(fruits[0].length);

//? accessing the elements of array through loops
//? for-loop
// for (let i = 0; i < fruits.length; i++){
//   console.log(fruits[i]);
// }

//? for-of loop
// for (let x of fruits) {
//   console.log(x);
// }
// for (let fruit of fruits) {
//   console.log(fruit);
// }

//? for-in loop    //prints index of elements
// for (let fruit in fruits) {
//   console.log(fruit);
// }
// to print its data
// for (let fruit in fruits) {
//   console.log(fruits[fruit]);
// }

//? any data-types can be the items of an array
// let mixed = [ 'apple', 4, null, undefined, true];
// console.log(mixed);

//? updating an array?
// replacing the element
// fruits[0] = "grapes";
// fruits[1] = "grapes";
// fruits[2] = "grapes";
// console.log(fruits);

// array length can be increased or decreased.It is not fixed in size.As elements are added or removed.

// knowing the type of array
// console.log(typeof fruits);   //object
// to become more specific to know
// console.log(Array.isArray(fruits));

/**
 * Assignments
 */
//? assignment-01
//? Calculate the sum of all numbers using a loop.
// let numbers = [2, 3, 5, 6, 7, 9, 12, 17, 20];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++){
  // console.log(i);
//   console.log(numbers[i]);
//   sum = sum += numbers[i];
// }
//   console.log("Sum of all values :", sum);

// for-of
// for (let i of numbers) {
//   console.log(i);
//   sum = sum += i;
// }
// console.log("sum of all values :", sum);

//? assignment-02
//? Write a program that reverses the elements of an array, using a loop.
// let numbe?rs = [2, 3, 5, 6, 7, 9, 12, 17, 20];
// for (let i = numbers.length; i >=0 ; i--){
//   console.log(numbers[i]);
// }

//? assignment-03
//? Write a JS program to find the largest number in an array, using a loop.
// let arrayOfNumbers = [45, 78, 34, 87, 98, 234];
// let largestNumber = 0;
// let largestNumber = arrayOfNumbers[0];

// for (let i = 0; i < arrayOfNumbers.length;i++){
  // console.log(arrayOfNumbers[i]);
//   if (arrayOfNumbers[i] > largestNumber) {
//     largestNumber = arrayOfNumbers[i];
//   }

//   }
// console.log(largestNumber);
//? assignment-04
//? Write a JS program that counts how many even numbers are in an array, using loop.
// let arrayOfNumbers = [45, 78, 34, 87, 98, 234];
// let count = 0;
// for (let i = 0; i < arrayOfNumbers.length; i++){
  // console.log(arrayOfNumbers[i]);
//   if (arrayOfNumbers[i] % 2 === 0) {
//    count++;
//   }
//   }
// console.log("Even numbers are:", count);

//? assignment-05
//? For a given array,with marks of students,find the average marks of an entire class.
let marks = [87, 97, 85, 44, 67, 60];
let sum = 0;

for (let val of marks) {
  // console.log(val);
  sum = sum += val;
  // console.log(sum); 

  }
console.log(sum);

console.log(marks.length)
  
let aver = sum / marks.length;
console.log(`Average marks of the class=${aver}`);

//? assignment-06
//? For a given array of prices, all items have an offer of 10% on them,change the array to have/store the final price after applying offer.

let prices = [250, 645, 300, 900, 50];

// ? using for-of loop
// * tracking index in for-of loop
let i = 0;
for (let val of prices) {
  console.log(`value at ${i} index: ${val}`);
  let offer = val / 10;
  prices[i] = prices[i] - offer;
  console.log(`value after offer: ${prices[i]}`);
  i++;
}
console.log(`Prices after applying offer: ${prices} `)

// ? for-loop
for (let i = 0; i < prices.length; i++){
  let offer = prices[i] / 10;
  prices[i] -= offer;
}
console.log(prices);


//! CLASS-25
//! Array Methods(Part-1)
//? length,push,pop,unshift,shift,join,concat(),
//? array.slice(starting - index, ending - index)
// let fruits = ["apple", "mango", "banana"];
//? adding the value at the end
// fruits.push('gauva','mango','lemon');
// console.log(fruits);
//? removing the value at the end
// fruits.pop();
// console.log(fruits);

//* the removed item from the array is returned and thus can be stored in a variable(container) to use later
// let poppedFruit = fruits.pop();
// console.log('removed item from the array is', poppedFruit);

//? adding the value at the start
// fruits.unshift('gauva');
// console.log(fruits);
//? removing the value at the start
// fruits.shift();   //changes the original array(Type-1)
// console.log(fruits);
//? inserting something inbetween each element
// console.log(fruits.join("+"));
//? having comma inbetween
// console.log(fruits.join());
//? concat();
// let moreFruits=["pear","lemon"]
// let newFruits = fruits.concat(moreFruits);
// let animals=["monkey","bat"]
// console.log(moreFruits);
// console.log(newFruits.concat(animals));


//? array.slice(starting-index, ending-index)
// let fruits1=["animal","birds", "fruits","vegetables","jewellary"]
// let newArray = fruits1.slice(1, 4);
// console.log(newArray);

//! CLASS-26
//! Array-methods(PART-2)
//? splice();
//? It adds/removes elements from an array,at a specific index and returns the removed elements
//? splice(starting index,number of removed items,names-in string of add-items)
let fruits = ["apple", "banana", "cherry", "mango", "grapes", "lemon"];
// console.log(fruits);
// removing items and returns new array of removed items
let newFruits = fruits.splice(2, 3);   //it removes items from 2-index to total three items
// original array after removing elements
console.log(fruits);
// console.log("Removed Elements :", newFruits);
// it means with the help of splice, we can remove elements from a specific location in an array

// adding elements
// let addedFruits = fruits.splice(1, 0, "kiwi", "guava");
// console.log("Added fruits:", fruits);
// console.log(addedFruits);  //empty array

// replacing elements
// fruits.splice(1, 2, "kiwi", "guava");
// console.log(fruits);

// it can remove all elements also
// with the starting index, next all elements will be removed
// fruits.splice(1);
// console.log(fruits);

// ? Practice Q :
//? Create an array to store the companies:
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies);

//? Remove the first company from the array
// let deletedCompany = companies.shift();
// console.log(deletedCompany);
// console.log(companies);

//* the removed item from the array is returned and thus can be stored in a variable(container) to use later
// let poppedFruit = fruits.pop();
// let deletedCompany = companies.shift();
// console.log('removed item from the array is', deletedCompany);
// console.log(companies);

// ? Remove Uber and add Ola in its place
// let replacedCompany = companies.splice(2, 1, "Ola");
// console.log(replacedCompany)
// console.log(companies)

// ? Add "Amazon" at the end
 companies.push("Amazon");
console.log(companies);










//! CLASS-27
//! Array-methods(PART-3)
//? indexOf(), includes(),sort(),reverse(),join()

//? indexOf()
// returns the searched item of its first index,at which the item is found/located,otherwise returns -1
// let fruits = ["apple", "banana", "cherry", "mango", "grapes", "lemon"];
// console.log(fruits.indexOf("grapes"));    //returns index
// console.log(fruits.indexOf("melon"));    //returns -1

//? includes()
// checks whther a specific element is contained in the array or not and returns boolean
// console.log(fruits.includes("guava"));    //false

//? sort()
// returns a sorted array after sorting the elements in ascending order
// console.log(fruits.sort());

//? reverse()
// it reverses the order of the elements in an array
console.log(fruits.reverse());

//? join()
// it joins all the elements of the array into a string
console.log(fruits.join(","));
console.log(fruits.join("-"));
console.log(fruits.join("/"));
// we can store the elements in a new variable
let string = fruits.join(",");
console.log(string);
console.log(typeof string);






// Example of push & replace an element at index-2
// const courses = [
//   { teacher: "Kyle Simpson", course: "JS Function Lite" },
//   { teacher: "Sarah Drasner", course: "Intro to Vue" },
//   { teacher: "Brian Holt", course: "Complete Intro to React v3" },
//   { teacher: "Steve Kinney", course: "State Management" },
// ];
// courses.push({ teacher: "Sean Larkin", course: "Webpack" });
// courses.pop();

// console.log(courses);

// courses[2] = { teacer: "Brian Holt", course: "Intro to React v4" };
// console.log(courses);

// Just as substr/substring in strings,here we have slice and splice methods
// const courses = [
//   { teacher: "Kyle Simpson", course: "JS Function Lite" },
//   { teacher: "Sarah Drasner", course: "Intro to Vue" },
//   { teacher: "Brian Holt", course: "Complete Intro to React v3" },
//   { teacher: "Steve Kinney", course: "State Management" },
// ];
// const removedCourse = courses.splice(2, 1);
// console.log(courses.splice(2, 1));

// console.log(removedCourse);
// adding a key-value pair to index-0
// courses[0].isGoodCourse = true;
// getting the keys 0f object at index-0
// console.log(Object.keys(courses[0]));
// console.log(courses);

//Primitive vs Reference type
// primitive types
// let num1 = 5;
// let num2 = num1;
// console.log("value of num1 is", num1);
// console.log("value of num2 is", num2);
// num1++;
// console.log('after incrementing num1');
// console.log("value of num1 is", num1);
// console.log("value of num2 is", num2);

// for string
// let str = 'Uzma';
// let newStr = str;
// console.log('The name is ', str);
// console.log('The name is', newStr);
// str = 'Uzma' + ' Khan'
// console.log("The value of ", str);
// console.log('The name is', newStr);

// reference types
// array
// let array1 = ['item1', 'item2'];
// console.log(Array.isArray(array1));
// let array2 = array1;
// console.log('array1', array1);
// console.log('array2', array2);

// array1.push('item3');
// console.log('after pushing an element in array1 :')
// console.log('array1', array1);
// console.log('array2', array2);

// How to clone array?
// how to concatenate arrays ?
// arr1 = ["item1", "item2"];
// arr3 = arr1;
// arr3 = ["item1", "item2"];
// arr2 = arr1.slice(0); //it will take the index from 0 and goes to the last
// let arr2 = [].concat(arr1);
// arr2 = [...arr1];

// arr1.push("item3");
// console.log( arr1 === arr2 );   //now they are not the same
// console.log(arr1);
// console.log(arr2);

// ? Nested Arrays
// ? Usually we have one-level nesting in arrays.
let nums = [[1, 2], [3, 4], [5, 6], [7, 8]];

console.log(nums);
console.log(nums.length);
console.log(nums[0][0]);
console.log(nums[0][1]);
console.log(nums[1][0]);
console.log(nums[1][1]);

// ? Practice Qs
// ? Create a nested array to show the following tic-tac-toe game state.

let game = [['X', null, 'O'], [null, 'X', null], ['O', null, 'X']];

console.log(game[0]);
console.log(game[0][1] = 'O');
console.log(game[0]);







