// ! Practice Questions
// ! Apna College-DELTA
//? Use of:
//? let keyword
//? multiple math expressions
//?  assignment operator


//* What is the value of age after this code runs?
let age = 23;
age + 2;

age = age + 2;
console.log(age);

//* what is the value of avg after this code runs?
let hindi = 80;
let eng = 45;
let math = 56;
let avg = (hindi + eng + math) / 3;
console.log(avg);



//* What is the value of each variable in each line of code?  (based on increment unary operator -> post-increment, pre-increment)
// let num = 5;
// console.log(num);     //5
// let newNum = num++;    //5(+1)
// console.log(newNum);    //5
// console.log(num);    //6
// newNum = ++num;
// console.log(newNum);   // 6+1=7

// ! if-statements
// * Create a traffic light system that shows what to do based on color.

let color = "yellow";

// Traffic Light System
if (color === "red") {
    console.log("Stop");
}
if (color === "yellow") {
    console.log("Stand By");
}
if (color === "green") {
    console.log("Go");
}

// ! 09-Create a system to calculate popcorn prices based on the size, the customer asked for:

let size = "M";
if (size === "XL") {
    console.log("Price is 250")
}
else if (size === "L") {
    console.log("Price is 200")
}
else if (size === "M") {
    console.log("Price is 100")
}
else {
    console.log("Price is 50")
}

// ! 15- A "good string" is a string that starts with letter "a" and has length grater than 5. Write a JS program to find if a string is good or not.

let good_string = "atmosphere";

if (good_string[0] === "a" && good_string.length > 5) {
    console.log("Good String");
} else {
    console.log("Not a good string");
}

// ! Predict the output of following code:
let num = 12;
if ((num % 3 === 0) && ((num + 1 == 15) || (num - 1 == 11))) {
    console.log("Safe");   //true
} else {
    console.log("unsafe");
}

// ! 18- Use switch statement to print the day of week, using a number variable "day" with values 1-7.

let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    
    default:
        console.log("Enjoy your days!");
}

// ! Q#1: Create a number variable num with 




// ! String Manipulation
// * Declare your name as a string and print its length in JS?

let myName = "Uzma Khan";
console.log(myName.length);

// * Declare your firstName as a string and print its first character.

// let firstName = "Uzma";
// console.log(firstName[0]);

// * Declare your firstName as a string and print its last character.

let firstName = "Uzma";
console.log(firstName[3]);
console.log(firstName.length);

// * What is the output of the following code?
"apnacollege" + 123;
console.log("apnacollege" + 123);

// * What are the lengths of an empty string and a string with a single space?
let empty = "";
console.log(empty.length);

let space = " ";
console.log(space.length);

//* Use of .slice() and .replace() methods
let str = "ApnaCollege";
// separate the "College" part in above string
console.log(str.slice(4));     //Cotlege
// replace letter 'l' with 't'
console.log(str.slice(4).replace('l', 't'));  //Cottege

// Alternatively, storing it in a variable
let newStr = str.slice(4).replace('l', 't');
console.log(newStr.replace('l', 't'));     //Cottege

let newStr1 = str.slice(4).replace('l', 't').replace('l', 't');
console.log(newStr1);

//! Part-3 - 15   Arrays
// * For the given state of an array, change it to final state of form using methods.

// let months = ["January", "July", "March", "August"];
// let finalMonths = ["July", "June", "March", "August"];

// console.log(months.shift());     //removing first element
// console.log(months);        //removing january
// console.log(months.shift());
// console.log(months);         //removing july
// console.log(months.unshift("June"));     //adding June at the start
// console.log(months);
// console.log(months.unshift("July"));    //adding July at the end
// console.log(months);     // ["July", "June", "March", "August"];

//* For the given state of an array, change it to final state of array, using  splice method.

let months = ["January", "July", "March", "August"];
// let finalMonths = ["July", "June", "March", "August"];

let finalMonths = months.splice(0,2, "July", "June");
console.log(finalMonths);

// * Return the index of the "javascript" from the given array, if it was reversed.

let lang = ['C', 'C++', 'html', 'javascript', 'python', 'java', 'C#', 'sql'];

// First we reverse the array, then will find the index of "javascript".

let newLang = lang.reverse();
console.log(newLang);
newLang = lang.reverse().indexOf("javascript");
console.log(newLang);

//! Part-3 - 25   Arrays
// ? Practice Qs-Nested Array
// ? Create a nested array to show the following tic-tac-toe game state.

let game = [['X', null, 'O'], [null, 'X', null], ['O', null, 'X']];

//* accessing array-elements
console.log(game[0]);
console.log(game[0][1] = 'O');
console.log(game[0]);



























