/** 
function hello(name, callback) {
  console.log("Welcome" + name + "!");
  callback();
}
function bye() {
  console.log(
    "Have a nice day...!"
  )
};

hello("Shahid", bye);
*/

// * The Concept of CallBack Hell
/** function getResult(rollNo) {
  console.log("Result of", rollNo);
}
getResult(456);
getResult(457);
getResult(458);
getResult(459);
getResult(460);

// ? Having Delay in getting Result
function getResult(rollNo, nextStep) {
  setTimeout(() => {
    console.log("Result of", rollNo);
    if (nextStep) {
      nextStep();
    }
   
  }, 5000);
}


getResult(1, () => {
  console.log("Valid UserName ...")
  getResult(2, () => {
    console.log("Valid Password ...")
    getResult(3, () => {
      console.log("Successful Login ...")
      getResult(4);
      console.log("Show Data")
    });
  });
});
*/

// ! Difference between setInterval() and setTimeout()

// ? The setInterval() method calls a function at specified intervals (in milliseconds).

// ? The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.

setInterval(function () {
  console.log("Code repeats itself after certain intervals.")
}, 5000);


  clearInterval(setInterval);




//? The setTimeout() method calls a function after a number of milliseconds.

//? The setTimeout() is executed only once.

//? If you need repeated executions, use setInterval() instead.

let x = document.getElementById("txt");
setTimeout(function () { x.value = "2 seconds" }, 2000);
setTimeout(function () { x.value = "4 seconds" }, 4000);
setTimeout(function () { x.value = "6 seconds" }, 6000);













