//! CLASS-06
//! Arithmetic Operators
let a = 3;
let b = 5;

document.write(
    "value of a is ",
    a,
    " and value of b is ",
    b,
    "   <br />"
);

document.write("The sum of a and b is ", a + b, "   <br />");
document.write("The difference of a and b is ", a - b, "   <br />");
document.write("The product of a and b is ", a * b, "   <br />");
document.write("The quotient of a and b is ", a / b, "   <br />");
document.write("The remainder of a and b is ", a % b, "   <br />");
document.write("The exponentiation of a and b is ", a ** b, "   <br />"); //this operator raises the value of first operand to the value of second operand
// ! Unary Operators
//!   Increment Operator ++
//   It increases the size of operand by one
let x = 5;
  x++; //x+1
  console.log("value of x :", x);
  console.log("value of x :", x++);
console.log("value of x :", x++);
console.log("value of x :", x);
console.log("value of x :", ++x);
console.log("value of x :", x);
//!   Decrement Operator --
//!   It decreases the size of operand by one
  
//! CLASS-07
// !  Assignment Operators
//    = , += , -= , *= , %= , **=
let c = 5;
c = c + 1;
// or
c += 1;   //6

let salary = 5000;
// salary = salary + 500;
salary += 500;
console.log(salary);   //5500

//! CLASS-08
//!   Comparison Operators
//? >,<,>=,<=,==,!=
//? used to compare 2 values and give result in boolean
// let age = 18;
// console.log(age > 18);     //false




//! CLASS-09
//! Logical Operators
//? used for decision making and to check multiple conditions : &&, ||, !
//? In case of &&: both conditions should be true
//? In case of ||: one condition be true
//? In case of !: it turns true to false and false to true

// (5>3) && (3>1)   //true-true && true
// (5<3) && (3<1)   //false-true && false
// (5<3) && (3>1)   //false-false && true
// (5<3) && (3<1)   //false-false && false

// Logical Operator-&&-AND
// let marks = 90;

// if (marks >= 33 && marks>=80) {
//   console.log("Pass")
//   console.log("A+")
// }

// Logical Operator-||-OR
  //  true || true - true
// true || false - true
// false || true  - true
//false||false  - false

// Example
// let marks = 90;

// if (marks >= 33 || marks >= 80) {
//   console.log("Pass")
//   console.log("A+")
// }


// Logical Operator-!-NOT
// let marks = 90;

// if (!marks < 33) {
//   console.log("Pass")
//   console.log("A+")
// }

// combined logical operators
// let marks = 75;
// if ((marks > 33 && marks <= 80) || !false) {
//   console.log("Pass")
//     console.log("A+")   //true
// };


//! Class-10
//! Ternary Operator 
//? Alternative way of if-else logical or conditional statements but used for short form of conditions-used for small decions
let marks, studentStatus;
marks = 23;
marks >= 33 ? studentStatus="PASS" : studentStatus="FAIL";
console.log("student status:", studentStatus);

// another example
let age = 22;

age >= 18 ? canDrive = "true" : canDrive = "false";
console.log("He can drive:", canDrive);

// Third Example
let age1 = 23;
let result = age1 >= 18 ? "adult" : "not adult";
console.log(result);

// Assignment # 02:
let employeeName = "Shahid Mehmood";
let hisSalary = 75000;
let tax;
let netSalary = hisSalary - 500;

hisSalary < 10000 ? tax = 0 : tax = 500;
console.log("Employee Name:",employeeName);
console.log("His Salary :",hisSalary);
console.log("Tax :",tax)
console.log("Net Salary :",netSalary);
// or
console.log("Employee Name:", employeeName, "His Salary :", hisSalary, "Tax :", tax, "Net Salary :", netSalary);




