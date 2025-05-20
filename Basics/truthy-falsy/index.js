// * Everything in JS is true/false (in boolean context).This doesn't mean that their value itself is true or false, but they are treated as true or false when taken in boolean context.

// ? Falsy Values: False, 0,-0, on(BigInt Value),""(no value), null,undefined,NaN

// ? Truthy Values :  " " - (empty string), 1, any data-type in parenthesis-("apnaCollege");

if ('') {
    console.log("It has true value");
} else {
    console.log("It has false value");
}

if (' ') {
    console.log("It has true value");
} else {
    console.log("It has false value");
}


if (0) {
    console.log("It has true value");
} else {
    console.log("It has false value");
}

let string = "2";
if (string) {
    console.log("String is not empty");
} else {
    console.log("String is empty");
}
let num = "-10";
if (num) {
    console.log("num is not equal to 0");
} else {
    console.log("num is equal to 0");
}