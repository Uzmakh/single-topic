/*
document.querySelector(".check").addEventListener("click", function () {
    document.querySelector(".message").textContent = "My name is ...."
    document.querySelector("body").style.background = "#098767"
    console.log("Button Clicked!")
})
*/
// random numbers (between 1-20) are generated
let number = Math.trunc(Math.random() * 20) + 1;
console.log(number);
let score = 20;
let highScore = 0;

// Reset-Button Funntionality that takes back the page to its initial state;
const resetButton = () => {
	score = 20;
	highScore = 0;
	document.querySelector(".message").textContent = "Start Guessing .....";
	number = Math.trunc(Math.random() * 20) + 1;

	document.querySelector(".number").textContent = "?";
	document.querySelector(".score").textContent = score;
	document.querySelector(".guess").value = "";

	document.querySelector("body").style.backgroundColor = "#fff";
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // console.log(guess);
  // console.log(typeof guess);
  // const add = number + guess;
  // console.log(add);     //both will be added as they are numbers
  // // console.log("Button Clicked!");
  if (!guess) {
    document.querySelector(".message").textContent = "No number is entered!";
  } else if (guess === number) {
    document.querySelector(".message").textContent =
      "You guessed the correct number";
    document.querySelector(".number").textContent = number;
    document.querySelector("body").style.background = "#098767";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "You guessed a higher number";
      score = score - 1;
      //   score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
      resetButton;
    }
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "You guessed a lower number";
      score = score - 1;
      //   score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

const pressAgain = document.querySelector(".again");
pressAgain.addEventListener("click", resetButton);
