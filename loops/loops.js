/*
Different Kinds of Loops
JavaScript supports different kinds of loops:

for - loops through a block of code a number of times
for/in - loops through the properties of an object
for/of - loops through the values of an iterable object
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true
*/

// for loop
let text = "";
for (let i = 0; i < 5; i++){
 text += "The number is " + i + "<br>";
}
console.log(text);

// Example of for-loop
// show even numbers within first 10 digits
for (let i = 1; i <= 10; i++){
    if (i % 2 === 0)
    // if (i % 2 !== 0)
    {
        console.log(i);
    }
}



// You can initiate many values in expression 1 (separated by comma):
// numbers = [1, 2, 3, 4, 5];
// let len = numbers.length;
// let text1 = "";

// for (let i = 0; i < len; i++) {
//   text1 +=   numbers[i] ;
//       text1 += `${i} <br> ` ;
//     // console.log(numbers[i]);     //to get the numbers in separate lines
//     console.log(text1);     //to get the numbers in separate lines
// }

// while loop
// let i = 0;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// another example
// let pressUpCount = 1;
// while (pressUpCount <= 5) {
//     console.log(`pressUp : ${pressUpCount}`)
//     pressUpCount++;
// }

// do while
// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i <= 5);

// Example of do-while loop
let password;
do {
    password = prompt("What is your passcode?")

} while ( password !== "wah g wah");

// Difference 
// for loop
// for (let i = 0; i <= 10; i++){
//     console.log(i);   //0-10
// }
// while loop
// let i = 0;
// while (i < 10) {
//     // i++;   //1-9
//     console.log(i);
//     i++;    //0-9
// }

// do-while
// let i = 0;
// do {
//     console.log(i);
//     i++;
// }while(i < 5 )