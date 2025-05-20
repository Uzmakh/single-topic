//! CLASS-57 
// ! Synchronous vs Asynchronous Programming

console.log("Start of Program");
console.log("Processing...");
console.log("End of Program");

// ? Getting result of function with some deley
function goldRate() {
    console.log("Gold Rate is : $900");
}
// goldRate();
// ? calling function in setTimeOut
setTimeout(goldRate, 5000);

// ? Alternatively,
setTimeout(() => {
    console.log("Gold Rate is : $900");
}, 5000);

//* Asynchronous Programming
console.log("Oil Rate: $75");
console.log("Silver Rate: $34");

setTimeout(() => {
    console.log("Gold Rate is : $900");
}, 5000);

console.log("1USD= PKR 280/-");
console.log("1GBP = PKR 300/-");












