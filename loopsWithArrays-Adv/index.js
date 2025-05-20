// let num = [3, 5, 4, 1, 6, 7];

// for (let i = 0; i < num.length; i++) {
//   console.log(num[i]);
// }

// forEach loop
// num.forEach((element) => {
//   console.log(element * element);
// });

// map() method
// num.map((value, index, num) => {
//   return (value = value + 1);
// });
// console.log(value, index, num);

// Given an array of objects representing students:
// const students = [
// { id: 1, name: 'Alice', age: 20 },
// { id: 2, name: 'Bob', age: 21 },
// { id: 3, name: 'Carol', age: 22 }
// ];
/*Write code to loop through students array using array methods (e.g., map, forEach) and extract each student's name and age into a string format like "Alice is 20 years old".
 */

// using forEach()
// students.forEach(student => {
//   console.log(`${student.name} is ${student.age} years old`);
// });

// using map()
// const studentsString = students.map(student => `${student.name} is ${student.age} years old`);
// console.log(studentsString);

// cloning arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

// object
const students = {
  name: "Ali",
  age: 20
}
const students2 = { ...students, age: 18 }
console.log(students2);