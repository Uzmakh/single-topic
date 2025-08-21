// CLASS-47
// Event Handling with DOM-Property
// let button = document.querySelector(".my-button");
// let a = 1;
// button.onclick = function () {
//   console.log("Events with DOM Handling");
//   console.log(a);
//   a++;
//   console.log(a);
// };
// Alternatively, with arrow function
// button.onclick = () => {
//   console.log("Events with DOM Handling");
//   console.log(a);
//   a++;
// };


// Example-Changing background color
// let body = document.querySelector("body");
// let btnRed = document.querySelector("#red");
// let btnGreen = document.querySelector("#green");
// let btnBlue = document.querySelector("#blue");
// let btnYellow = document.querySelector("#yellow");
// let btnBlack = document.querySelector("#black");

// btnRed.onclick = () => {
//     body.style.background = "red";
// };
// btnGreen.onclick = () => {
//     body.style.background = "green";
// };
// btnBlue.onclick = () => {
//     body.style.background = "blue";
// };
// btnYellow.onclick = () => {
//     body.style.background = "yellow";
// };
// btnBlack.onclick = () => {
//     body.style.background = "black";
// };

// CLASS-48
// let calcBtn = document.querySelector("#calculate");
// let textBox = document.querySelector("#ageConverter");
// let age = document.querySelector("input");
// let resetBtn = document.querySelector("#reset");

// calcBtn.onclick = () => {
//     textBox.style.visibility = "visible";
//     resetBtn.style.visibility = "visible";
//     let months = age.value * 12;
//     textBox.innerText = `Age in Months : is ${months}`;
// };

// resetBtn.onclick = () => {
//     textBox.innerText = "";
//     age.value = "1";
//     resetBtn.style.visibility = "hidden";
//     textBox.style.visibility = "hidden";
// }

// CLASS-49
// Event Object created by browser , that tells the event-details
// let button = document.querySelector("button");

// button.onclick = function (event) {
// console.log("This is JS Event Message.")
    
//     console.log(event);
//     console.log(event.type);
//     console.log(event.target);
//     console.log(event.clientX,event.clientY);
// }

// CLASS-50
// Event Handling through addEventListener();
// let button = document.querySelector("button");
// using regular function
// button.addEventListener("click", function () {
//     console.log("This is JS Event Message.")
// })
// arrow function
// button.addEventListener("click", () => {
//     console.log("This is JS Event Arrow Function.")
// })
// both functions will be executed

// third method
// let func = () => {
//     console.log("This is External function message.")
// }
// button.addEventListener("click", func);
// button.removeEventListener("click", func);


// * Show Password
const button = document.querySelector(".btn");
const pass= document.querySelector("input");

button.addEventListener("click", () => {
    if (pass.type === "password") {
        pass.type = "text";
    } else {
        pass.type === "password"
    }
})

