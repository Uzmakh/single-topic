//? Function to add two numbers
function addNumbers(num1, num2) {
  return num1 + num2;
}
// Declare two numbers
// var number1 = 5;
// var number2 = 10;
// Call the function and store the result in sum-variable,
// var sum = addNumbers(number1, number2);
// Display the result
// console.log("The sum of " + number1 + " and " + number2 + " is: " + sum);

// Another Example
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(5, 4));

// Arrow Function
const product = (x, y) => {
  var result = x * y;
 
  console.log(result);
  return result;
};
var data = product(10, 7);

console.log(data + 10);

// function performOperations(x, y) {
//   var sum = x + y;
//   var diff = x - y;
//   var prod = x * y;
//   var quot = x / y;

//   console.log("Sum: " + sum);
//   console.log("Difference: " + diff);
//   console.log("Product: " + prod);
//   console.log("Quotient: " + quot);
// }

// performOperations(10, 2);

// Functions and parameters
// A function is a bit of re-usable code. Just how we like to re-use CSS classes, we love to re-use code. Let's start with an example:
// function addTwo(number) {
//   return number + 2;
// }
// const finalAnswer = addTwo(10);
// console.log(finalAnswer);

// function without parameter
// function giveBackFive() {
//   return 5;
// }
// console.log(giveBackFive());

// Defining and calling a function
// An Example of Function
// function myIntro() {
//   document.write("Hello! I am sir Hussain.");
//   document.write("<br>");
//   document.write("I am your instructor.");
//   document.write("<br>");
//   document.write("<br>");
//   document.write("I make youtube tutorials.");
//   document.write("<br>");
// }
// myIntro();

// Assignment-01
// Class - 29(Shaihid Naeem):
// function findBigNumber(num1,num2) {
//   if (num1 > num2) {
//     return num1;
//   } else {
//     return num2;
//   };

// };
// let bigNum = findBigNumber(567, 236);
// console.log("The bigger number is :", bigNum);
// Assignment-02
// Create a function to check even and odd numbers
// function isEven(num) {
//   if (num % 2 === 0) {
//     console.log("The number is Even.")
//     return true;
//   } else {
//     console.log("The number is Odd.")
//     return false;
//   }
// }
// let check = isEven(6);
// console.log(check);

// Another complex example
// function greet(firstName, lastName, honorific, greeting) {
//   return `${greeting} ${honorific} ${lastName}! I’m extremely pleased you could join us, ${firstName}! I hope you enjoy your stay, ${honorific} ${lastName}.`;
// }
// const greetPerson = greet("Brian", "Holt", "Lord", "Salutations");
// const greetPerson2 = greet("Jack", "Sparrow", "Captain", "A-hoy");
// console.log(greetPerson);
// document.write(greetPerson);
// console.log(greetPerson2);
// document.write(greetPerson2);
// console.log(greet("Brian", "Holt", "Lord", "Salutations"));
// console.log(greet("Jack", "Sparrow", "Captain", "A-hoy"));

// Another Example
// const myHomeCity = "Salt Lake City";
// const myHomeState = "Utah";
// const myHomeCountry = "USA";

// function logOutYourHome(city, state, country) {
//   console.log(`You are from ${city}, ${state} ${country}.`);
// }
// passing constants as params
// logOutYourHome(myHomeCity, myHomeState, myHomeCountry);

// function with two parameters
// function add(num1, num2) {
//   return num1 + num2;
// }
// console.log(add(6, 8));
// OR
// function add(num1, num2) {
//   const sum = num1 + num2;
//   return sum;
// }
// console.log("The sum is:", sum);

// Functions and parameters
// Syntax
// function myFunction(parameter1, parameter2) {
// code logic here
// }
// myFunction(argument1, argument2); // argument1 is passed through parameter1 and argument2 through parameter2 as value or var-name
// parameters are used in function-body
// without argument, parameter will be undefined

// function myFunction(fName, lName) {
//   document.write("Hello " + fName + " " + lName);
// }
// myFunction("Uzma", "Khan");
// myFunction(); //undefined wiyhout values
// or value direct pass in parameters like this
// function myFunction(fName = "Uzma", lName = "Khan") {
//   document.write("Hello " + fName + " " + lName + "<br>");
// }
// If now I pass arguments while calling function, these arguments will overwrite those directly passed values
// myFunction("Nazish", "Ali");
// myFunction("Kanwal", "Farooq");
// myFunction("Malaika", "Tabassum");

// function add(num1, num2) {
//   document.write(num1 + num2 + "<br>");
// }
// add(25, 25);
// add(2, 25);
// add(40, 30);
// add(35, 25);

// Understanding return in function
// while using return, variables are to be declared in function-body ; function returns that variable to the function-name,what stores in that; we store what function has returned, in a separate variable to print.
/*function fullName(fName, lName) {
  var name = "Hello " + fName + " " + lName + "<br>";
  return name;
}
var greet = fullName("Malaika", "Tabassum"); //returned stored in a separate (new) variable
document.write(greet);
*/

// in practical example
/*document.write("Total Subjects - 5 <br> Total Marks - 500 <br> <br>");
function sumMarks(eng, urd, math, phys, chem) {
  var total = eng + urd + math + phys + chem;
  return total;
}
var obtainedMarks = sumMarks(50, 50, 50, 50, 50);
document.write("Obtained Marks : " + obtainedMarks + "</br>");

// to take %age
function percentage(obtainedMarks) {
  var percentageForm = (obtainedMarks / 500) * 100;
  return percentageForm;
}
var percentageGot = percentage(obtainedMarks);
document.write("Percentage Obtained : " + percentageGot + "%");
*/

// scope of variable inside a function is local and outside the function is global
// With the help of this example, Scope is pretty understandable
///Example///
// const A = "A";
// let F;

// function doStuff(B) {
//   console.log(B);
//   const C = "C";
//   let H = "H";
//   if (1 + 1 === 2) {
//     const D = "D";
//     H = "something else";
//   }
//   console.log(D);
//   console.log(H);
//   F = "F";
// }

// let E = 0;
// while (E < 3) {
//   E++;
//   console.log(A);
//   const G = "G";
// }
// console.log(E);
// console.log(G);

// doStuff("B");
// console.log(B);
// console.log(C);
// console.log(F);

//Answers
/*const A = "A";
let F;
function doStuff(B) {
  console.log(B); // works, B parameter is still in scope
  const C = "C";
  let H = "H";
  if (1 + 1 === 2) {
    const D = "D";
    H = "something else";
  }
  console.log(D); // does not work, D was declared in that if statement block
  console.log(H); // works, H was declared outside the if statement
  F = "F";
}

let E = 0;
while (E < 3) {
  E++;
  console.log(A); // works, the outter block (called the global scope) is still in scope
  const G = "G";
}
console.log(E); // works, E was declared outside the whie loop
console.log(G); // does not work, declared inside the while loop and it's over

doStuff("B");
console.log(B); // does not work, the B parameter expires after the function call
console.log(C); // does not work, C was declared inside the function and the function is over
console.log(F); // works, F was declared in the global scope
*/

// still another example to understand the scope
// s //it works-3
// console.log(thingsToKeep); //it works-4

