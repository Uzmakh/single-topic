// const fruits = ["Banana", "Orange", "Grapes", "Pear"];
// console.log(fruits.toString());
// console.log(fruits.at(3));

// Advanced Array Methods
// .forEach()
// const movies = [
//     { name: 'Wonder Woman', year: 2017 },
//     { name: 'Dark Phoenix', year: 2019 },
//     { name: 'Spider-Man Homecoming', year: 2017 },
//     { name: 'Avengers Endgame', year: 2019 },
//     { name: 'The Dark Knight', year: 2008 }
// ];
// movies.forEach((movie) => {
//     console.log(movie.name);
// })

//  .map()
// const movies2 = [
//   { name: 'Wonder Woman', year: 2017 },
//   { name: 'Dark Phoenix', year: 2019 },
//   { name: 'Spider-Man Homecoming', year: 2017 },
//   { name: 'Avengers Endgame', year: 2019 },
//   { name: 'The Dark Knight', year: 2008 }
// ]
// const moviesNames = movies2.map((movie) => {
//     return movie.name;
// })
// console.log(moviesNames);    //it gives the movies names in an array

// CLASS-31
// Assignment-array methods and LOOPs
/**
 * Write a normal function,in JS to calculate and display square of all elements of the array.color-box
 */
// let arrayOfNumbers = [2, 4, 6, 8, 10];

// function squares(eachNumber) {

//   return eachNumber * eachNumber;
// }
// for (let i = 0; i < arrayOfNumbers.length; i++) {
//   let eachNumber = arrayOfNumbers[i];
//   console.log(`The square of ${eachNumber} is : ${squares(eachNumber)}`);
// }
// Perform the same task with forEach loop

// arrayOfNumbers.forEach(function (a) {
//   console.log(`The square of ${a} is : ${a*a}`);
// });

// with arrow function
// arrayOfNumbers.forEach((a) => {
//   console.log(`The square of ${a} is : ${a * a}`);
//   return a * a;
// });

// CLASS-32
// .map()
// forEach and map both perform an operation on each element of the array but forEach doesnot store the formatted elements in a new array and map does this.

// let num = [3, 5, 7, 9, 11];
// let square = num.map(function (val) {
//   return val * val;
// })
// console.log(num);
// console.log(square);

// if we do the same with forEach, it returns undefined
// let squares = arrayOfNumbers.forEach(function (a) {
//   console.log(`The square of ${a} is : ${a * a}`);
// });
// console.log(squares);   //undefined

// arrow function with map
// let square2 = num.map(val => { return val * val });
// console.log(square2);

// using map like forEach - no return of new array
// num.map(val => { console.log(`The square of ${val} is : ${val * val}`) });   //it gives the result as forEach method

// CLASS-33
// Using .map( ) with array of objects
// let people = [
//   {
//     name: "Usama",
//     age: 23,
//   },
//   {
//     name: "Kamil",
//     age: 34,
//   },
// ];
// const names = people.map(function (val) {
//   return val.name;
// });
// console.log(people);
// console.log(names);

// Mini-Project Assignment
// const products = [
//   {
//     product: "Head Phone",
//     price: 3000,
//   },
//   {
//     product: "Laser Printer",
//     price: 5000,
//   },
//   { product: "DigitalCamera", price: 10000 },
// ];
// // Make a new array with the help of .map() method that shows the 10% discount on each product.
// let discountedPrices=products.map(function (item) {
//     return {
//         product: item.product, price: item.price*0.90
//     }
// });
// using arrow function
// let disount = products.map(item => {
//     return {
//         product:item.product,price:item.price*0.90
//     }
// })
// using arrow function, further shorter form
// let disount2 = products.map(item => 
    
//         product:item.product,price:item.price*0.90
    
// )
// console.log(products);
// console.log(discountedPrices);

// CLASS-34
// .filter()
// this method returns a new array of filtered items
// Example-01
// let words = ["cat", "car", "elephant", "monochronous", "lion"];
// let longWords = words.filter(function (val) {
//     // return val.length > 5;
//     return val.length == 3;
// });
// // Using arrow function
// let longWords2 = words.filter(val=>{
//     // return val.length > 5;
//     return val.length == 3;
// });
// console.log(longWords);

// Example-02
// Get even numbers out of an array-elements
// let numbers = [56, 67, 89, 100, 45, 34];
// let even = numbers.filter(val => {
//     return val % 2 === 0; 
// });
// console.log(even);
// check for odd numbers
// let odd = numbers.filter(val => {
//     return val % 2 !== 0
//         ;
// });
// console.log(odd);

// CLASS-35
// .reduce()
let numbers = [156, 222, 367, 4876, 590];
// to get the total-sum amount
let sum = numbers.reduce((preValue, curValue) => {
    return preValue + curValue;
});
console.log(sum);
// to get the max
let max = numbers.reduce((preValue, curValue) => {
    return curValue > preValue ? curValue : preValue;
});
console.log(max);
// to get the min
let min = numbers.reduce((preValue, curValue) => {
    return curValue < preValue ? curValue : preValue;
});
console.log(min);