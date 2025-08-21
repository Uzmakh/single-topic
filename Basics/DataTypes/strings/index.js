//! CLASS-19
//! String Indices
// let name = "Tony Stark";
// ? JavaScript follows zero-based indexing
// ? Accessing each letter of string
// console.log(name[0]);
// console.log(name[1]);
// console.log(name[2]);
// console.log(name[3]);
// console.log(name[4]);
// console.log(name[5]);
// console.log(name[6]);
// console.log(name[7]);
// console.log(name[8]);
// console.log(name[9]);
//! STRINGS and Its Length Property
// let empName = "Ali Imran";
// let countryName = "Pakistan";
// console.log ("Variable name:", empName,"Length of characters:", empName.length);
// console.log("Variable name:", countryName, "Length of characters:", countryName.length);
// accessing each/individual character in a string on its index-position
// console.log(empName[0]); 
// console.log(empName[1]); 
// console.log(empName[2]); 
// console.log(empName[3]);
// // Alternatively, we can print the whole string through for-loop method 
// let empName1 = "Sher Zaman";
// let strlength = empName1.length;
// for (let i = 0; i < strlength; i++){
//     console.log(empName1[i]);
// }

// Assignment:
// Reversing a string
// Take a string input from user and display it in reverse order
// let cityName = prompt("Enter your city name.");
// let strLength = cityName.length;

// for (let i = strLength-1; i >= 0; i--){
//     console.log(cityName[i]);
// }

// CLASS-20
// Escape Sequences In JS
// let str = "I Love\nPakistan";
// console.log(str);
// console.log(str.length);

// let wish = "\"Every new day of your life\nbrings you new joy!\"\t\'Your Mother\'";
// console.log(wish);

//! CLASS-21
//! Template Literals- are used to add embedded expressions in a string.
// let pencilPrice = 10;
// let erasorPrice = 5;
// // let totalPrice = "The total price is : " + (pencilPrice + erasorPrice) + " Rupees." 

// let totalPrice = `The total price is : ${pencilPrice + erasorPrice} Rupees.` 

// console.log(totalPrice);
//? We can avoid \n through tempelate literals
//? same as in tempelate literals folder

//! CLASS-22
//? String Methods-PART-1
// str.toLowerCase();
// str.toUpperCase();
// str.trim();
// str.includes();
// str.startsWith();
// str.endsWith();

// let str1 = "We Are LeaRNING Javascript wiTH Shahid NaEEM";
// console.log(str1.toUpperCase());
// console.log(str1.toLowerCase());
/**
 * The original string will not change and the methods give new value that can be stored in a new variable.
 * In JS, strings are immutable by default.
 */

// trim();
// let message = 'Hello'
// let extraSpace = '     Hi,    welcome    ';
// let removeExtraSpace = extraSpace.trim();
// console.log(removeExtraSpace);
// let password = prompt("Set your password");
// console.log("Password :" + password.trim());

// includes();
// let str2 = "New Champion of this season is from Pakistan."
// if (str2.includes("Pakistan")) {
//     console.log("Winner is from Pakistan")
// }
// else {
//     console.log("Winner is not from Pakistan")
// }     //as includes returns true/false, we check it in if-else

// startsWith();
// const url = "www.mydomain.com";
// if (url.startsWith("www")) {
//     console.log("Valid URL");
// } else {
//     console.log("Invalid URL");
// }

// to have valid phone #
// const phoneNo = prompt("Enter int. phone #.");
// if (phoneNo.startsWith("+")) {
//     console.log("It is a valid phone number.")
// } else {
//     console.log("It is not a valid phone number")
// }
// to have valid email
// const email = "example@gmail.com";
// if (email.endsWith(".com")) {
//     console.log("It is a valid email.")
// } else {
//     console.log("It is not a valid email.")
// }

//! CLASS-23
//? More String Methods-PART-2
//* str.slice(starting index, ending index);   //.substr()
//* str.concat(otherString);   It combines strings
//* str.replace(str1,str2);    //case-sensitive
//* str.replaceAll(str1,str2);
//* str.repeat(number);  //returns a new string with the number of copies of a string
//* padStart();
//* padEnd();
//* indexOf(arg);     (with argument)
//* Method chaining


//* str.slice(starting index, ending index);

const carBrand = "Mercedes";
// let substr = carBrand.slice(1, 4);
// console.log(substr);    //erc

// let subStr = carBrand.slice(0,carBrand.length);
// let subStr1 = carBrand.slice(carBrand.length-1);
// console.log(subStr);  //full word
// console.log(subStr1);  //s  - last index-character

// ? str.slice(starting index);
// let substr1 = carBrand.slice(0);
// console.log(substr1);

// ? str.slice(-num);   str.slice(length-num)
// let subStr2 = carBrand.slice(-1);   //7-1  => 6   - slice(6)  -index6 to onwards
// let subStr3 = carBrand.slice(-2);   //7-2   => 5 index   - slice(5)   -index5 to onwards
// let subStr4 = carBrand.slice(-3);    //7-3   => 4 index   - slice(4)   -index4 to onwards
// console.log(subStr2);  //s  - after skipping first 6 indices 
// console.log(subStr3);    //es   - after skipping first 5 indices 
// console.log(subStr4);   //des   - after skipping first 4 indices 

//* str.concat(otherString);
// let str1 = "Welcome to";
// let str2 = " Javascript course";
// let combinedStrings = str1.concat(str2);
// let combinedStrings = str1+str2+ " 2024";

// console.log(combinedStrings);

//* str.replace(str1,str2);
//? case-sensitive search of str1 which is to be replaced by str2
let message = "We are learning JS on youtube channel";
let message2 = message.replace("JS", "JavaScript");
console.log(message);
console.log(message2);

//? strings are immutable
//? if we try to change any of characters in a string, they won't
// let name = "Shahid Naeem";
// console.log(name);
// name2 = name[4];
// name[4] = "i";
// console.log(name2);
// to have changing,
// console.log(name.replace("ee", "i"));

//? another example of replace();
// let a = 'Hallo';
// let b = a.replace('a', ' ');
// alert(b);

//* str.replaceAll("str1", "str2");
// case-sensitive search of str1 which is to be replaced
// let sentence = "the brown fox jumps quickly over the black fox.";
// let newSentence = sentence.replace("the", "a");
// console.log(newSentence);
// let newSentence2 = sentence.replaceAll("the", "a");
// console.log(newSentence2);

//* str.repeat(number);  //returns a new string with the number of copies of a string
// let str = "Mango";
// newStr = str.repeat(3);
// console.log(newStr);


//? Assignment
/**
 * Input name of a person using prompt and autogenerate a password for him/her in the following manner;
 * Take first three letters of his/her name, then display 3, and use the number of his/her name.length.
 * Example: name= "Ali Imran";
 * password= ali#9
 */
// let userName = prompt("Enter your name.");
// let threeLetters = userName.slice(0, 3);
// console.log(threeLetters);
// let password = threeLetters + "#" + userName.length;
// console.log ("Auto Generated Password :", password);


// padStart();    //To have hidden numbers at start
// const lastFourDigits = '6574'

// const hiddenNumber = lastFourDigits.padStart(16, 'X');
// console.log(hiddenNumber);


//? Different ways of concatenation of string
// const lastFourDigits = '6574'
// const simpleCombine = 'Last four digits of my account # are ' + lastFourDigits;
// const concatenatedString = 'Last four digits of my account # are'.concat(" ",lastFourDigits);
// const templateString = `Last four digits of my account # are ${lastFourDigits}`;
// console.log(lastFourDigits)
// console.log(simpleCombine)
// console.log(concatenatedString)
// console.log(templateString)

// const accountNumberExtended = `My account number is ${lastFourDigits.padStart(16, 'X')}`
// const accountNumber = `My account number is ${hiddenNumber}`
// console.log(hiddenNumber)
// console.log(accountNumberExtended)

//? indexOf("argument-value"); 
// let str = "I love coding";
// console.log(str.indexOf("love"));
// console.log(str.indexOf("e"));
// console.log(str.indexOf("L"));

//? Method chaining
// ? Using multiple methods together in a chain
// let msg = "    hello  ";
// let newMsg = msg.trim();
// console.log("After trim :", newMsg);

// newMsg = newMsg.toUpperCase();
// console.log("After upperCase : ", newMsg);

// ? Chain executes from left to right
// let newMsg = msg.trim().toUpperCase();
// console.log(newMsg);


// ? Reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Example usage:
let originalString = "Hello, World!";
let reversedString = reverseString(originalString);
console.log("Original string: " + originalString);
console.log("Reversed string: " + reversedString);
function reverseString(str) {
    return str.split("").reverse().join("");
}



// separate topic
// concept of hoisting
// console.log(a);
// var a = 3;
// console.log(a);
// function a() { };
// console.log(a);

/**
 * At first, the functions and variables are hoisted at the top of call stack. 
Function has more priority than variable so, function is hoisted first.
Now when we log a, we'll get whole function as output, if there would be no function in the question, we would get undefined as variable name would have been hoisted. 

Then in execution context, a is assigned 3. Second log will give us 3.

As we know, function is already hoisted  initially, so our code will run to the last log.Which will eventually give us 3, as it is not reassigned.
 **/